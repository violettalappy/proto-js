// The file in question will save to config.csv
// Must display all possible options that user can make

class Template {
    constructor(arg_title, arg_options){
    }

    GetTitle() {
    }

    GetOptions(){
    }

    GetAdvice(){
        let temp = "something";
        return "// Following options available";
    }
}

_templates = [
    new Template("Something Name", ["Something"]),
    new Template("IDontKnow", ["Something", "Something"]),
    new Template("Screen Resolution", ["Something", "Something"]),
    new Template("Refresh Rate", ["Something", "Something"]),
];

// USAGE FOR EXTERNAL
function GetText_Unity(){
}
