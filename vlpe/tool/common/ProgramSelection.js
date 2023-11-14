// ! selections must be string only
class ProgramSelectionString {
    constructor(
        currentcurrentIndex = 0,
        selections = ["default"])
    {
        this.currentIndex = currentIndex;
        this.selections = selections;
    }

    setCurrentIndex(arg_value = 0){
        this.currentIndex = arg_value;
    }

    setSelections(arg_value = ["default"]){
        this.selections = arg_value;
    }

    getCurrentIndex(){
        return this.currentIndex;
    }

    getMin(){}
    getMax(){}
    
    getSelections(){
        return this.selections;
    }

    onProgramSelectionChanged(){}
}

// ! selections must be number only
class ProgramSelectionNumber {
    constructor(
        currentcurrentIndex = 0,
        selections = [0])
    {
        this.currentcurrentIndex = currentcurrentIndex;
        this.selections = selections;
    }

    onProgramSelectionChanged(){}
}

// ! selections must be true/false only
// 0 = false, 1 = true, same as binary operation machine
class ProgramSelectionStatus {
    constructor(
        status = false,
        selections = [false, true])
    {
        this.status = status;
        this.selections = selections;
    }

    setStatus(arg_status = false){
        this.status = arg_status;
    }

    getStatus(){
        return this.status;
    }

    onProgramSelectionChanged(){}
}
