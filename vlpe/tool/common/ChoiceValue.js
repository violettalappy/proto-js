class ProgramChoice {
    constructor(
        index = 0,
        choices = ["default"])
    {
        this.index = index;
        this.choices = choices;
    }

    setIndex(arg_value = 0){
        this.index = arg_value;
    }

    setChoices(arg_value = ["default"]){
        this.choices = arg_value;
    }

    getIndex(){
        return this.index;
    }

    getMin(){}
    getMax(){}
    
    getChoices(){
        return this.choices;
    }

    onIndexChanged(){}
}

var a = new ProgramChoice();
