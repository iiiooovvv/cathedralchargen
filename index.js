var bg = document.getElementById("bg")
var bgButton = document.getElementById("bgButton")


const background = [
    "A Cabal",
    "Service As A Squire",
    "A Priesthood",
    "A Noble House",
    "Catching rats",
    "The Pit",
    "Overwhelming Forces",
    "Pestilence",
    "The Beyond",
    "Knighthood",
    "A Pack of Spawnbitten",
    "A Coven",
    "Apprenticeship",
    "The Pilgrimage",
    "Manual Labor",
    "The Inquisition",
    "Prison",
    "A Farm",
    "A Gang",
    "The Crusade",
    "Family Duty"
];

const name = [
    "Gul",
    "Hymnal",
    "Ragash",
    "Flak",
    "Manta",
    "Grat",
    'Nail',
    "Sepa",
    "Cyan",
    "Sin",
    "Durz",
    "Vassal",
    "Tabernacle",
    "Magos",
    "Chaste",
    "Ugak"
];

const role = [
    "Smuggler | security, escape, bribery",
    "Mystic | trances, rituals, relics",
    "Opeator | engineering, piloting, navigation",
    "Knight | protection, loyalty, power armour",
    "Insergent | mobility, improvisation, sabotage",
    "Chronicler | memory, identification, archives",
    "Hevay | destruction, persistence, strength",
    "Merc | guns, ambush, gambling",
    "Aassssin | surprise, patients, accuracy",
    "Oracle | statistics, narrative, destiny",
    "Ranger | tracking, travel, hiding",
    "Mon | fortitude, martial arts, drugs",
    "Hoax | virtual, slander, mimicry",
    "Poet | inspiration, interpretation, aesthetics",
    "Warden | observance, fortification,",
    "Cavalier | jump packs, charging, intimidation"
];

const equipment = [
    "Fishing net, woven of silver | Bottles, lead(6) | Magnet",
    "Bag of hard candles (12) | Skinning knife | animal pelt"
];

bgButton.onclick = function () { 
    const nameRandom = Math.floor(Math.random() * name.length);
    const roleRandom = Math.floor(Math.random() * role.length);
    const bgRandom = Math.floor(Math.random() * background.length);
    const equipmentRandom = Math.floor(Math.random() * equipment.length);

    document.getElementById("bg").innerHTML = background[bgRandom]; 
    document.getElementById("name").innerHTML = name[nameRandom]; 
    document.getElementById("role").innerHTML = role[roleRandom]; 
    document.getElementById("equipment").innerHTML = equipment[equipmentRandom]; 
};