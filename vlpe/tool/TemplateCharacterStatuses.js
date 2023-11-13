// ? use ProgramValue for maximize features

//DO NOT USE IN OTHER SCRIPTS
const _texts = [
    //Point
    "Rating",
    "Threat",
    "Sanity",
    "Morality",
    "Reputation",
    "Notorius",
    "Good",
    "Evil",
    //Numeric
    "Armor",
    "Life",
    "Health",
    "Stamina",
    "Magic",
    "Mana",
    "Action",
    "Special",
    "Shield",
    "Fever",
    "Command",
    "Tactical",
    "Technical",
    "Energy",
    "Heat",
    "Art",
    "Speed",
    "Star",
    "Power",
    "Euphoria",
    // ? Car Game
    "TimeSLow",
    "Nitro",
    "Boost"
];

function exportJS() {
    // ! header file
    let k_fileName = "CharacterStatuses.js";
    let k_path = "../" + k_fileName;
    let k_license = "//(c)2023 ViolettaLappy - hoanglongplanner. Use Apache2 License";
    let k_notice = "// ! AUTO-GENERATED SCRIPT. FOR USAGE ONLY. PLEASE CHECK vlpe-tool.html";

    let result = "class CharacterStatuses {";
    //add more text here

    //set value numeric function
    result += "\n";
    result += "set" + "Name" + "Numeric() {";

    //get value numeric function

    //set value percentage function
    //get value percentage function

    //set status function
    //get status function

    //onVariableNameChanged

    // ! end script
    result += "};";
}

function exportCPP(){}
function exportCSharp(){}
function exportCSV(){}
function exportJSON(){}
