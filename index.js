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
    "Ugak",
    "Vultor",
    "Vakar",
    "Nach",
    "Xurl",
    "Xaakt",
    "Jukha",
    "Yegoth",
    "Vargan",
    "Uzul",
    "Urag",
    "Glush",
    "Pall",
    "Cruel",
    "Paten",
    "Chalice",
    "Durrot",
    "Naz",
    "Dreg",
    "Gorslag",
    "Akkar",
    "Dalkaar",
    "Toross",
    "Shroud",
    "Ankh",
    "Ka",

];

const role = {
    Smuggler: "security, escape, bribery",
    Mystic: "trances, rituals, relics",
    Opeator: "engineering, piloting, navigation",
    Knight: "protection, loyalty, power armour",
    Insergent: "mobility, improvisation, sabotage",
    Chronicler: "memory, identification, archives",
    Heavy: "destruction, persistence, strength",
    Merc: "guns, ambush, gambling",
    Aassassin: "surprise, patients, accuracy",
    Oracle: "statistics, narrative, destiny",
    Ranger: "tracking, travel, hiding",
    Monk: "fortitude, martial arts, drugs",
    Hoax: "virtual, slander, mimicry",
    Poet: "inspiration, interpretation, aesthetics",
    Warden: "observance, fortification, siege",
    Cavalier: "jump packs, charging, intimidation"
};

const equipment = [
    "Vial of a priest's blood",
    "13 knives",
    "fire resistant jacket",
    "Corrupted copy of The Book of Vargha",
    "Flask of holy water",
    "GPS data for three sectors",
    "Stimulants",
    "Unidentified pills",
    "Tasty biscuits",
    "Four teeth in a bag",
    "Crowbar",
    "Scroll tube (mystery text)",
    "Inflatable Tent (four-person)",
    "Sewing kit",
    "Zip ties",
    "A dull bell",
    "Aerosoles hair spray",
    "Small reconnaissance drone",
    "Carved wooden toy cat",
    "Shovel",
    "Hatchet",
    "Sacrificial knife",
    "Four empty jars",
    "Bug in a jar",
    "Engraved lighter",
    "Depressants",
    "Psychedelics",
    "Pack of 20 meals in pill form",
    "Rope 50 ft",
    "Lock",
    "Hunting trap",
    "Whistle",
    "First aid kit",
    "Reusable glow-stick lantern",
    "Chain",
    "Grappling hook with rope",
    "Chalk",
    "3 white candles",
    "8 single-use glow sticks",
    "2 black candles",
    "A red candle",
    "Hammer",
    "Block and tackle",
    "Holy symbol",
    "Hologram recording of unknown person",
    "Bag of caltrops",
    "Laser distance finder",
    "Vial of acid",
    "Blanket",
    "One person tent",
    "Antitoxin pill",
    "Sedative",
    "Field Rations"
];

const augmentation = [
    "internal respiration accessory",
    "robotic arm",
    "robotic arms",
    "robotic hand",
    "robotic leg",
    "robotic legs",
    "reconstructed skull",
    "datajack",
    "replacement eyes (dark vision)",
    "replacement eyes (infrared vision)",
    "replacement eyes (telescopic vision)",
    "replacement eyes (data HUD)",
    "hidden compartment in limb",
    "voice modulator",
    "neural implant (extended memory)",
    "neural implants (data storage)",
    "neural implants (increased processing)",
    "neural implants (thought regulation)"
];

const ammo = [
    "plasma",
    "laser",
    "bolt",
    "",
    ""
]

const weaponType = [
    "rifle",
    "hunting rifle",
    "combat rifle",
    "lever-action rifle",
    "bolt-action rifle",
    "semi-automatic rifle",
    "automatic rifle",
    "assault rifle",
    "carbine",
    "pistol",
    "subtle pistol",
    "large pistol",
    "gun",
    "submachine gun",
    "machine gun",
    "breaching gun",
    "scattergun",
    "hand gun",
    "revolver",
    "cannon",
    "launcher",
    "shotgun",
    "volley gun",
    "gatling gun"
]

bgButton.onclick = function () { 
     //ROLE AND SKILLS
    const skills = Object.values(role);
    const rls = Object.keys(role);
    const roleRandom = Math.floor(Math.random() * rls.length);
    document.getElementById("role").innerHTML = rls[roleRandom]; 
    document.getElementById("skill").innerHTML = skills[roleRandom]; 

    //NAME AND BACKGROUND
    const nameRandom = Math.floor(Math.random() * name.length);
    document.getElementById("name").innerHTML = name[nameRandom]; 

    const bgRandom = Math.floor(Math.random() * background.length);
    document.getElementById("bg").innerHTML = background[bgRandom]; 
    
    

    //EQUIPMENT LIST
    const equip = []
    for (let i = 0; i < 3;)
    {
        var equipmentRandom = Math.floor(Math.random() * equipment.length);
        var gear = equipment[equipmentRandom]
        if (equip.includes(gear) === false) {
            //  block of code to be executed if the condition is true
            equip.push(gear);
            i++;
          }
      }
    document.getElementById("equipment1").innerHTML = equip[0]; 
    document.getElementById("equipment2").innerHTML = equip[1]; 
    document.getElementById("equipment3").innerHTML = equip[2]; 

    //AUGMENTATION
    const augmentationRandom = Math.floor(Math.random() * augmentation.length);
    const hasAugmentation = Math.random();
    if (hasAugmentation < 0.5) {
        document.getElementById("augmentation").innerHTML = augmentation[augmentationRandom]; 
      } else {
        document.getElementById("augmentation").innerHTML = "no augmentations"; 
      }
    
      //WEAPON
      const ammoRandom = Math.floor(Math.random() * ammo.length);
      const weaponTypeRandom = Math.floor(Math.random() * weaponType.length);
      document.getElementById("weapon").innerHTML = ammo[ammoRandom]+" "+weaponType[weaponTypeRandom];
};
