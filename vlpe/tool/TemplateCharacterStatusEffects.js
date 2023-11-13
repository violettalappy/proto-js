//Buff
//Debuff
//Success
//Boost
//Resistance
//Immunity

//https://bulbapedia.bulbagarden.net/wiki/Status_condition
//https://mgq.miraheze.org/wiki/Status_Ailments/Paradox
//https://www.reddit.com/r/OMORI/comments/wn27mr/a_remastered_version_of_my_older_sunny_emotion/
//https://www.reddit.com/r/OMORI/comments/13m1rz0/omori_emotions_but_its_me/

const _boolean = [
    //Boolean status
    "CanAttack",
    "CanJump",
    "CanBeDisrupted",
    "CanBeBind",
    "CanBePoisoned",
    //Emotional Aliment
    "IsNeutral",
    "IsSleepy",
    "IsDefeated",
    "IsAfraid",
    "IsStressedOut",
    "IsTerrified",
    "IsTraumatized",
    "IsHappy",
    "IsJoy",
    "IsEcstatic",
    "IsManic",
    "IsEuphoric",
    "IsHeavenly",
    "IsSad",
    "IsDepressed",
    "IsMiserable",
    "IsHopeless",
    "IsAngry",
    "IsEnraged",
    "IsFurious",
    "IsLivid",
    "IsCrazy",
    "IsDelirious",
    "IsGenocidal",
    "IsSpooked",
    "IsTraumatized",
    "IsDistress",
    "IsDehyrated",
    "IsSick",
    "IsFrustated",
    "IsEnvious",
    "IsNostalgic",
    "IsAcceptance",
    "IsGrief",
    "IsFear",
    //Status Aliment
    "IsInjured",
    "IsPained",
    "IsAddicted",
    "IsLacerate",
    "IsWeaken",
    "IsDazed",
    "IsEnergize",
    "IsSlow",
    "IsStop",
    "IsDisrupted",
    "IsBind",
    "IsStun",
    "IsBleed",
    "IsBurn",
    "IsFreeze",
    "IsFrostbite",
    "IsCold",
    "IsConfused",
    "IsPoisoned",
    "IsSilenced",
    "IsVoid",
    "IsGravity",
    "IsParalyzed",
    "IsSleep",
    "IsDrowsy",
    "IsFainted",
    "IsCursed",
    "IsShock",
    "IsWailed",
    //NSFW
    "IsPetrified",
    "IsCharmed",
    "IsSurrender",
    "IsTrance", // in trance state
    "IsTempted", // in temptation state
    //Debuff
];

function exportJS() {
    // ! header file
    let k_fileName = "CharacterStatusEffects.js";
    let k_path = "../" + k_fileName;
    let k_license = "//(c)2023 ViolettaLappy - hoanglongplanner. Use Apache2 License";
    let k_notice = "// ! AUTO-GENERATED SCRIPT. FOR USAGE ONLY. PLEASE CHECK vlpe-tool.html";

    let result = "class CharacterStatuses {";
    //add more text here

    //set value numeric function
    //get value numeric function

    //set value percentage function
    //get value percentage function

    //set status function
    //get status function

    //onVariableNameChanged

    // ! end script
    result += "};";
}