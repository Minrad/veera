window.State = {
    store: {
        unfEdition: "",
        config: {version: 1, updDelta: 0},
        strikeTime: {}
    },
    update: {
        url: {
            manifest: "https://raw.githubusercontent.com/noccu/orchees/Veera/manifest.json",
            commits: "https://api.github.com/repos/noccu/orchees/commits?sha=Veera&per_page=3"
        },
        lastCheck: 0,
        lastCommit: "Veera",
        interval: 259200000 //ms - 3 days
    },
    settings: {
        debug: true,
        theme: 0,
        raids: {
            sortByDiff: true
        }
    },

    theme: {
        list: [{name: "Tiamat Night", fname: "night"},
               {name: "Anichra Day", fname: "day"}],
        get current() {
            return this.list[State.settings.theme];
        },
        set current(idx) {
            State.settings.theme = idx;
        }
    },
    game: {
        tabId: null,
        linkToTab (id) {
            return new Promise ((r,x) => {
                chrome.tabs.get(id, t => {
                    if (/game\.granbluefantasy\.jp|gbf\.game\.mbga\.jp/.test(t.url)) {
                        devlog(`Ufufu... onee-sama ha tab ${id} wo mite imasu ne.`);
                        this.tabId = id;
                        r();
                    } else {
                        x("Onee-sama wo damasu to ha ii dokyou desu wa!");
                    }
                });
            });
        },
        navigateTo (url) {
            if (this.tabId && url) {
                chrome.tabs.update(this.tabId, {url: url}, () => devlog("Navigated to " + url));
            }
        },
        evhTabUpdated (id, changes) {
            if (id == State.game.tabId) {
                if (changes.hasOwnProperty("url")) {
                    fireEvent(EVENTS.pageChanged, changes.url);
                }
            }
        }
    },

    save: function() {
        let o = {store: this.store, settings: this.settings, update: this.update};
        Storage.set({state: o});
        devlog("State saved.");
    },
    load: function () { //Called out of context
        return new Promise((r, x) => {
            function _load(data) {
                if (!data.state) {
                    console.warn("No saved state, initializing from defaults.");
                    setVeeraDefaults();
                    State.save();
                }
                else if (data.state.store && data.state.store.config) {
                    if (data.state.store.config.version == State.store.config.version) {
                        State.settings = data.state.settings;
                        State.store = data.state.store;
                        console.info("State loaded.");
                    }
                    else if (State.store.config.version - data.state.store.config.version <= this.store.config.updDelta) {
                        devlog("Attempting state update from older version.");
                        for (let obj of ["store", "settings"]) {
                            for (let key in State[obj]) {
                                State[obj][key] = data.state[obj][key];
                            }
                        }
                        State.save();
                    }
                }
                else {
                    console.warn("Invalid stored state, internal Veera update?");
                    console.log("Loading defaults.");
                    setVeeraDefaults();
                    State.save();
                }
                r();
            }
            Storage.get("state", _load);
        });
    },
    checkUpdate() {
        let lastCheck = this.update.lastCheck;
        if (Date.now() - lastCheck > this.update.interval) {
            this.update.lastCheck = Date.now();
            return fetch(this.update.url.manifest, {cache: "no-cache"})
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    }
                })
                .then(json => {
                    let localVersion = chrome.runtime.getManifest().version;
                    if (json.version != localVersion) {
                        console.log("Updates found");
                        showNotif("Update available.", {text: `New version: ${json.version}\nYour version: ${localVersion}`});
                    }
                    else {
                        console.log("No (larger) updates. Checking for commits...");
                        return this.checkCommits();
                    }
                })
                .then(() => this.save())
                .catch(e => console.error("Failed update check: ", e));
        }
        else {
            return Promise.resolve();
        }
    },
    checkCommits() {
        return fetch(this.update.url.commits, {cache: "no-store"})
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
            })
            .then(json => {
                //We only notify once, for various reasons but we can't check what commit a user is on anyway or if they have local modifications.
                if (this.update.lastCommit != json[0].sha) {
                    this.update.lastCommit = json[0].sha;
                    let list = [];
                    for (let entry of json) {
                        list.push("- " + entry.commit.message.slice(0, entry.commit.message.indexOf("\n")));
                    }
                    console.log("There were new commits since last check.");
                    showNotif("New commits:", {text: list.join("\n")});
                }
                else {
                    console.log("No new commits since last check.");
                }
            })
            .catch(e => {
                console.error("Failed to get commit info: ", e);
            });
    },
    reset () {
        if (confirm("Clear all stored data and settings?")) {
            Supplies.clear();
            Storage.clear();
            setVeeraDefaults();
            console.log("Cleared all stored data and settings.");
        }
    }
};

function setVeeraDefaults() {
    State.theme.current = 0;
}

function toggleDebug() {
    State.settings.debug = !State.settings.debug;
}
function devlog() {
    if (State.settings.debug) { console.debug(... arguments); }
}
function devwarn() {
    if (State.settings.debug) { console.warn(... arguments); }
}
function deverror() {
    console.error(... arguments);
}