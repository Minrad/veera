function createRaid(name, id, diff, minRank, maxHosts, apCost, matIDs, matNums, ele, isHL, img) {
    var mats = [];
    if (matIDs) {
        for (let i = 0; i < matIDs.length; i++) {
            mats.push({id: matIDs[i], num: matNums[i]});
        }
    }
    return {
        name: name,
        id: id,
        diff: diff,
        minRank: minRank,
        maxHosts: maxHosts,
        apCost: apCost,
        matCost: mats,
        element: ele,
        isHL: isHL,
        img: img,
    };    
}

const ELEMENTS = { fire:0, water: 1, earth: 2, wind: 3, light: 4, dark: 5};

window.RaidData = [
    createRaid('Griffin (N)', 300011, 1, null, 3, null, null, null, ELEMENTS.wind, false, '2030003000.jpg'),
    createRaid('Griffin (H)', 300021, 4, null, 3, null, null, null, ELEMENTS.wind, false, '2030003000_hard.jpg'),
    createRaid('Tiamat (N)', 300031, 10, null, 3, null, null, null, ELEMENTS.wind, false, '2030000000.jpg'),
    createRaid('Tiamat (H)', 300041, 16, null, 3, null, null, null, ELEMENTS.wind, false, '2030000000_hard.jpg'),
    createRaid('Tiamat Omega', 300051, 22, null, 3, null, [18], [2], ELEMENTS.wind, false, '2040020000_ex.jpg'),
    createRaid('Nezha', 300421, 28, null, 2, null, [1343, 1141], [50, 6], ELEMENTS.wind, false, '2040042000_ex.jpg'),
    createRaid('Garuda', 301381, 34, null, 2, null, [1343, 1141], [50, 6], ELEMENTS.wind, false, '2040071000_ex.jpg'),
    createRaid('Tiamat Omega (HL)', 300441, 42, null, 2, null, [32], [3], null, ELEMENTS.wind, '2040020000_high.jpg'),
    createRaid('Nezha (HL)', 300451, 49, null, 1, null, [44], [1], null, ELEMENTS.wind, '2040042000_high.jpg'),

    createRaid('Flame (N)', 300061, 2, null, 3, null, null, null, ELEMENTS.fire, false, '2020018001.jpg'),
    createRaid('Flame (H)', 300071, 5, null, 3, null, null, null, ELEMENTS.fire, false, '2020018001_hard.jpg'),
    createRaid('Colossus (N)', 300081, 11, null, 3, null, null, null, ELEMENTS.fire, false, '2030001000.jpg'),
    createRaid('Colossus (H)', 300091, 17, null, 3, null, null, null, ELEMENTS.fire, false, '2030001000_hard.jpg'),
    createRaid('Colossus Omega', 300101, 25, null, 3, null, [19], [2], ELEMENTS.fire, false, '2040034000_ex.jpg'),
    createRaid('Twin Elements', 300411, 29, null, 2, null, [1313, 1111], [50, 6], ELEMENTS.fire, false, '2040063000_ex.jpg'),
    createRaid('Athena', 301071, 35, null, 2, null, [1313, 1111], [50, 6], ELEMENTS.fire, false, '2040021000_ex.jpg'),
    createRaid('Colossus Omega (HL)', 300491, 43, null, 2, null, [47], [3], ELEMENTS.fire, true, '2040034000_high.jpg'),
    createRaid('Twin Elements (HL)', 300501, 50, null, 1, null, [41], [1], ELEMENTS.fire, true, '2040063000_high.jpg'),

    createRaid('Guard (N)', 300111, 3, null, 3, null, null, null, null, false, '2030013001.jpg'),
    createRaid('Guard (H)', 300121, 6, null, 3, null, null, null, null, false, '2030013001_hard.jpg'),
    createRaid('Leviathan (N)', 300141, 12, null, 3, null, null, null, null, false, '2030011000.jpg'),
    createRaid('Leviathan (H)', 300151, 18, null, 3, null, null, null, null, false, '2030011000_hard.jpg'),
    createRaid('Leviathan Omega', 300161, 23, null, 3, null, [20], [2], null, false, '2040028000_ex.jpg'),
    createRaid('Macula', 300381, 30, null, 2, null, [1323, 1121], [50, 6], null, false, '2040002000_ex.jpg'),
    createRaid('Grani', 300481, 36, null, 2, null, [1323, 1121], [50, 6], null, false, '2040007000_ex.jpg'),
    createRaid('Leviathan Omega (HL)', 300511, 44, null, 2, null, [48], [3], null, true, '2040028000_high.jpg'),
    createRaid('Macula (HL)', 300521, 51, null, 1, null, [42], [1], null, true, '2040002000_high.jpg'),

    createRaid('Dragon (H)', 300171, 7, null, 3, null, null, null, null, false, '2030004000_hard.jpg'),
    createRaid('Yggdrasil (N)', 300181, 13, null, 3, null, null, null, null, false, '2030015000.jpg'),
    createRaid('Yggdrasil (H)', 300191, 19, null, 3, null, null, null, null, false, '2030015000_hard.jpg'),
    createRaid('Yggdrasil Omega', 300261, 24, null, 3, null, [21], [2], null, false, '2040027000_ex.jpg'),
    createRaid('Medusa', 300391, 31, null, 2, null, [1333, 1131], [50, 6], null, false, '2040059000_ex.jpg'),
    createRaid('Baal', 301371, 37, null, 2, null, [1333, 1131], [50, 6], null, false, '2040013000_ex.jpg'),
    createRaid('Yggdrasil Omega (HL)', 300531, 45, null, 2, null, [49], [3], null, true, '2040027000_high.jpg'),
    createRaid('Medusa (HL)', 300541, 52, null, 1, null, [43], [1], null, true, '2040059000_high.jpg'),

    createRaid('Wisp (H)', 300201, 8, null, 3, null, null, null, null, false, '2030027000_hard.jpg'),
    createRaid('Adversa (N)', 300211, 14, null, 3, null, null, null, null, false, '2030035000.jpg'),
    createRaid('Adversa (H)', 300221, 20, null, 3, null, null, null, null, false, '2030035000_hard.jpg'),
    createRaid('Luminiera Omega', 300271, 26, null, 3, null, [26], [2], null, false, '2040047000_ex.jpg'),
    createRaid('Apollo', 300431, 32, null, 2, null, [1353, 1151], [50, 6], null, false, '2040023000_ex.jpg'),
    createRaid('Odin', 300461, 38, null, 2, null, [1353, 1151], [50, 6], null, false, '2040029000_ex.jpg'),
    createRaid('Luminiera Omega (HL)', 300561, 46, null, 2, null, [50], [3], null, true, '2040047000_high.jpg'),
    createRaid('Apollo (HL)', 300571, 53, null, 1, null, [45], [1], null, true, '2040023000_high.jpg'),

    createRaid('Eye (H)', 300231, 9, null, 3, null, null, null, null, false, '2030038000_hard.jpg'),
    createRaid('Celeste (N)', 300241, 15, null, 3, null, null, null, null, false, '2030041000.jpg'),
    createRaid('Celeste (H)', 300251, 21, null, 3, null, null, null, null, false, '2030041000_hard.jpg'),
    createRaid('Celeste Omega', 300281, 27, null, 3, null, [31], [2], null, false, '2040046000_ex.jpg'),
    createRaid('Olivia', 300401, 33, null, 2, null, [1363, 1161], [50, 6], null, false, '2040005000_ex.jpg'),
    createRaid('Lich', 300551, 39, null, 2, null, [1363, 1161], [50, 6], null, false, '2040012000_ex.jpg'),
    createRaid('Celeste Omega (HL)', 300581, 47, null, 2, null, [51], [3], null, true, '2040046000_high.jpg'),
    createRaid('Olivia (HL)', 300591, 54, null, 1, null, [46], [1], null, true, '2040005000_high.jpg'),

    createRaid('Bahamut', 300291, 40, null, 3, null, [58], [1], null, false, '2030002000_hell.jpg'),
    createRaid('Grand', 301051, 41, null, 2, null, [82], [1], null, false, '2040065000_hell.jpg'),
    createRaid('Rose (HL)', 300471, 48, null, 1, null, [1204], [10], null, true, '2040105000_high.jpg'),
    createRaid('Bahamut (HL)', 301061, 55, null, 1, null, [59], [1], null, true, '2040128000_hell.jpg'),
];