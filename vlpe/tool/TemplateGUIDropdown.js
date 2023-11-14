class Template {
    constructor(){
        this.currentIndex = 0;
        this.selections = ["default"];
        this.OnDropdownItemSelected = "";
        this.OnDropdownSelectionsChanged = "";
    }
}

const _dropdown = {
    Template: {
        currentIndex: 0,
        selections: ["Something"],
        OnDropdownCurrentIndexChanged: "",
        OnDropdownSelectionsChanged: "",
    },
    Options_Display: [],
    Options_RefreshRate: {
        currentIndex: 0,
        selections: ["24","30","36","48","60","72","75","90","120","144","165","240","360","480"],
        OnDropdownCurrentIndexChanged: "",
        OnDropdownSelectionsChanged: "",
    },
    Options_Display_Resolutions: [],
    Difficulty: {
        currentIndex: 0,
        selections: ["Easy", "Normal", "Hard"],
        OnDropdownCurrentIndexChanged: "",
        OnDropdownSelectionsChanged: "",
    },
}

function _getText(arg_property){
    return "result";
}

//Export monolith script as GUIDropdown.js
function exportJS_Monolith(){

};

// ? Export multiple scripts generated with GUIDropdown_NameHere.js
// TODO Not important enough to implement this script, use monolith for more easy access
function exportJS_Multiples(){}

/*
Difficulty2: ["Normal", "Hard", "Lunatic"],
Difficulty3: ["Very Easy", "Easy", "Normal", "Hard", "Very Hard"],
Difficulty4: ["Novice", "Easy", "Normal", "Hard", "Chaos", "Expert"],
*/