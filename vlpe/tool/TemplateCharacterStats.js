import { GameValue } from '/common/GameValue.js'

// * This for numbers only
class Template {
    constructor(
        title = "default",
        gameValue = 0)
    {
        this.title = title;
        this.gameValue = 0;
        this.OnValueChanged = "";
    }

    AddTextToOnValueChanged(arg_text = ""){
        this.OnValueChanged += arg_text;
    }
}

const _sizes = [
    new Template("Heart", GameValue(0,0,0,0,0)),
    new Template("Energy", GameValue(0,0,0,0,0)),
    
    new Template("Health", GameValue(0,0,0,0,0)),
    new Template("Mana", GameValue(0,0,0,0,0)),
    new Template("Stamina", GameValue(0,0,0,0,0)),

    // ? Common Tabletop RPG
    new Template("Proficiency", GameValue(0,0,0,0,0)),
    new Template("Initiative", GameValue(0,0,0,0,0)),
    new Template("Perception", GameValue(0,0,0,0,0)),
    new Template("Speed", GameValue(0,0,0,0,0)),

    new Template("Power", GameValue(0,0,0,0,0)),
    new Template("Strenght", GameValue(0,0,0,0,0)),
    new Template("Dexterity", GameValue(0,0,0,0,0)),
    new Template("Constitution", GameValue(0,0,0,0,0)),
    new Template("Intelligence", GameValue(0,0,0,0,0)),
    new Template("Intellectual", GameValue(0,0,0,0,0)),
    new Template("Wisdom", GameValue(0,0,0,0,0)),
    new Template("Reasoning", GameValue(0,0,0,0,0)),
    new Template("Charisma", GameValue(0,0,0,0,0)),
    new Template("Confidence", GameValue(0,0,0,0,0)),
    new Template("Agility", GameValue(0,0,0,0,0)),
    new Template("Luck", GameValue(0,0,0,0,0)),
    
    new Template("Technique", GameValue(0,0,0,0,0)),

    // ? Dating Sim Game
    new Template("Love", GameValue(0,0,0,0,0)),

    // ? Hentai Game
    new Template("Shame", GameValue(0,0,0,0,0)),
    new Template("Pride", GameValue(0,0,0,0,0)),
    new Template("Obedience", GameValue(0,0,0,0,0)),
    new Template("Hypnosis", GameValue(0,0,0,0,0)),
    new Template("Esctasy", GameValue(0,0,0,0,0)),
    new Template("Pleasure", GameValue(0,0,0,0,0)),
    new Template("Chasity", GameValue(0,0,0,0,0)),
    new Template("Lust", GameValue(0,0,0,0,0)),
    new Template("Lewdness", GameValue(0,0,0,0,0)),
    new Template("Crush", GameValue(0,0,0,0,0)),
    new Template("Crush", GameValue(0,0,0,0,0)),
    new Template("Tenderness", GameValue(0,0,0,0,0)),
    new Template("Affection", GameValue(0,0,0,0,0)),
];


//DnD, Baldur Gates and common rpg games
// Use GameValue
// 0 -> 255 (Byte Max)
const _numerics = {
    HealthBonus: [],
    ManaBonus: [],
    ArmorBonus: [],
    WindBonus: [],

    Attack: [],
    PhysicalAttack: [],
    SlashAttack: [],
    BluntAttack: [],
    PierceAttack: [],

    MagicAttack: [],

    Defense: [],
    MagicAttackDefense: [],
    PhysicalAttackDefense: [],

    // ? Common Stats
    Health: [],
    Mana: [],
    Magic: [],
    Stamina: [],
    Energy: [],
    
    Action: [],
    Battle: [],
    
    Power: [],
    Agility: [],
    Strenght: [],
    Dexterity: [],
    Constitution: [],
    Intelligence: [],
    Intellecture: [],
    Wisdom: [],
    Charisma: [],
    Perception: [],
    Ability: [],
    Confidence: [],
    Proficiency: [],
    Reason: [],
    Speed: [],

    // ? Special Stats
    Initiative: [],
    CriticalChance: [],

    // ? Buff - Enhance / Boost / Bonus
    LightBonus: [],
    HolyBonus: [],
    DarknessBonus: [],

    BleedEnhance: [],
    PoisonEnhance: [],

    GuardBoost: [],

    // ? Resistance
    AttackResistance: [],
    MagicAttackResistance: [],
    StunResistance: [],
    BleedResistance: [],
    PoisonResistance: [],
    PainResistance: [],

    // ? Negate / Immune
    GuardNegate: [],

    WeakenImmune: [],
    SlowImmune: [],
    StunImmune: [],
    PoisonImmune: [],

    // ? Evasion
    MagicEvasion: [],

    // ? Reflect
    MagicReflect: [],

    // ? Regen
    MagicRegenerate: [],

    // ? Cost
    MagicCost: [],

    // ? Hentai Game
    Hypnosis: [],
    Esctasy: [],
    Chasity: [],
    Lust: [],
    Love: [],
    Crush: [],
    Luck: [],
    Tenderness: [],
};

// 0 -> 100 -> 200
// Keyword is Rate, EXAMPLE: MagicEvasionRate
const _percentages = {
    Health: [],
    Mana: [],

    Luck: [],

    // ? Hentai Game
    Hypnosis: [],
    Esctasy: [],
    Chasity: [],
    Lust: [],
    Pleasure: [],
    Lewd: [],
    Love: [],
    Crush: [],
    Tenderness: [],
};