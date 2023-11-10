//(c)2023 ViolettaLappy - hoanglongplanner
//Apache2 License

//This script allow save load
//- Save Slot Feature

const K_SAVESLOT_MAX = 99;

const data = {
};

class CharacterStat{}
class CharacterSkill{}
class GameSession{}

function SaveToCSV(){}
function SaveToJSON(){}
function SaveToXML(){}

const KSaveSlotInfo = {
    Name: "",
    Context: "",
    DateTime: "",
    Playtime: "",
}

const KCharacterRank = {
    Name: "",
    CurrentExperience: "",
    NextRequiredExperience: "",
}

const KCharacterClass = {
    Name: "",
    CurrentExperience: "",
    NextRequiredExperience: "",
}

//DnD, Baldur Gates and common rpg games
const KCharacterStat = {
    HealthBonus: "",
    ManaBonus: "",
    WindAttackBonus: "",
    ArmorBonus: "",

    Attack: "",
    PhysicalAttack: "",
    MagicAttack: "",
    SlashAttack: "",
    BluntAttack: "",
 	PierceAttack: "",
     
    Defense: "",
    MagicDefense: "",
    PhysicalDefense: "",    
    
    Speed: "",
    Initiative: "",
    CriticalChance: "",

    BleedEnhance: "",
    PoisonEnhance: "",

    StunResistance: "",
    BleedResistance: "",
    PoisonResistance: "",

    Proficiency: "",

    Strenght: "",
    Dexterity: "",
    Constitution: "",
    Intelligence: "",
    Wisdom: "",
    Charisma: "",
    Perception: "",
    Ability: "",

    GuardBoost,
    GuardNegate
}

const KGameSystem = {
    IsInitFirstTime,
}

const KGameSession = {
    Money: "",
    Gem: "",
    Crystal: "",
}

const KGameEvent = {
    IsCharacterDead: "",
    CanCharacterDead: "",
}

const KWeaponStat = {
    Attack: "",
    Defense: "",
    Cost: "",
    SellValue: "",
}