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