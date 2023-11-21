class Template {
    constructor(
        currentIndex = 0,
        title = "default",
        selections = ["default"])
    {
        this.currentIndex = currentIndex;
        this.title = title;
        this.selections = selections;
        this.OnDropdownItemSelected = "";
        this.OnDropdownSelectionsChanged = "";
    }

    AddTextToDropdownItemSelected(arg_text = ""){}
    AddTextToDropdownSelectionsChanged(arg_text = ""){}
}

const _sizes = [
    new Template(0, "Difficulty", ["Normal", "Hard", "Lunatic"]),
    new Template(0, "Difficulty2", ["Easy", "Normal", "Hard"]),
    new Template(0, "Difficulty3", ["Very Easy", "Easy", "Normal", "Hard", "Very Hard"]),
    new Template(0, "Difficulty4", ["Novice", "Easy", "Normal", "Hard", "Chaos", "Expert"]),
    new Template(0, "DifficultyTouhou", ["Baby"]),
    new Template(0, "DifficultyWarriorOrochi", ["Novice", "Easy", "Normal", "Hard", "Chaos", "Expert"]),
    new Template(0, "DifficultyDoom", ["Don't hurt me mommy"]),
    new Template(0, "DifficultyQuake", ["Something"]),
    
    new Template(0, "DifficultyWolfenstein", ["Can I play, Daddy?", "Don't hurt me", "Bring 'em on!", "Do or die!", "Call me Terror-Billy!", "I am death incarnate!", "Uber", "Mein leben"]),
    
    new Template(0, "OptionsDisplayResolution", ["640x480", "1920x1080"]),
    new Template(0, "OptionsDisplayRefreshRate", ["24","30","36","48","60","72","75","90","120","144","165","240","360","480"]),
];

// You can add all general texts via foreach loops

function _getText(arg_property){
    return "result";
}

//Export monolith script as GUIDropdown.js
function exportJS_Monolith(){

};

// ? Export multiple scripts generated with GUIDropdown_NameHere.js
// TODO Not important enough to implement this script, use monolith for more easy access
function exportJS_Multiples(){}