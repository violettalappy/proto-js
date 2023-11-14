//ProgramValue
//

class ProgramValue {
    constructor(
        value = 0,
        valueDefault = 0,
        valueMin = 0, 
        valueMax = 0,
        systemMin = Number.MIN_VALUE,
        systemMax = Number.MAX_VALUE)
    {
        this.value = value;
        this.valueDefault = valueDefault;
        this.valueMin = valueMin;
        this.valueMax = valueMax;
        this.systemMin = systemMin;
        this.systemMax = systemMax;
    }

    resetValue(){
        this.value = this.valueDefault;
    }

    getValue(){
        return this.arg_value;
    }

    getValueMin(){
        return this.arg_valueMin;
    }

    getValueMax(){
        return this.arg_valueMax;
    }

    setValue(arg_value){
        //if <> system
        //if <> limit
        //if <> restraint
        this.arg_value = arg_value;
    }

    setValueDefault(arg_value){
        this.valueDefault = arg_value;
    }

    setSystemMin(arg_value = Number.MIN_VALUE){
        this.systemMin = arg_value;
    }

    setSystemMax(arg_value = Number.MAX_VALUE){
        this.systemMax = arg_value;
    }
};

const sz_increment = [0,0,0];