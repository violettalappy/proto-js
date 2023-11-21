// ? use GameValue for maximize features

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
    // ? Experience
    new Template("Experience", GameValue(0,0,0,0,0)),
    new Template("NextRequiredExperience", GameValue(0,0,0,0,0)),
    new Template("AbilityPoint", GameValue(0,0,0,0,0)),

    // ? Mentality
    new Template("Mentality", GameValue(0,0,0,0,0)),
    new Template("Morality", GameValue(0,0,0,0,0)),
    
    // ? Common
    new Template("Heart", GameValue(0,0,0,0,0)),
    new Template("Energy", GameValue(0,0,0,0,0)),

    new Template("Health", GameValue(0,0,0,0,0)),
    new Template("Mana", GameValue(0,0,0,0,0)),
    new Template("Stamina", GameValue(0,0,0,0,0)),

    // ? Common Tabletop RPG
    new Template("Luck", GameValue(0,0,0,0,0)),

    // ? Hentai Game
    new Template("Love", GameValue(0,0,0,0,0)),
    new Template("Hypnosis", GameValue(0,0,0,0,0)),
    new Template("Esctasy", GameValue(0,0,0,0,0)),
    new Template("Pleasure", GameValue(0,0,0,0,0)),
    new Template("Chasity", GameValue(0,0,0,0,0)),
    new Template("Lust", GameValue(0,0,0,0,0)),
    new Template("Obedience", GameValue(0,0,0,0,0)),
    new Template("Lewdness", GameValue(0,0,0,0,0)),
    new Template("Crush", GameValue(0,0,0,0,0)),
    new Template("Crush", GameValue(0,0,0,0,0)),
    new Template("Tenderness", GameValue(0,0,0,0,0)),
];

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

const _stats = {
    Threat: [0,0,0,0,0],
    Excitement: [0,0,0,0,0],
    Loyalty: [0,0,0,0,0],
    Reason: [0,0,0,0,0],
    Time: [0,0,0,0,0],
    TimeStop: [0,0,0,0,0],
}

// ! --EXPORT MONO FILE--

function exportMono_JS() {
    //header file
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

    //end file
    result += "};";
}

function exportCPP(){}
function exportCSharp(){}

// ! --EXPORT MULTI FILE--

function exportMulti_JS(){}
function exportMulti_CPP(){}
function exportMulti_CSharp(){}

/*
Copyright (c) 2023 ViolettaLappy - hoanglongplanner

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
