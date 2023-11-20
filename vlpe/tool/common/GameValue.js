//Percentage bonus increment like Unity Script
//Stat increment

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function isClamp(val, min, max) {
    return val > max ? true : val < min ? true : false;
}

class GameValue {
    constructor(
        value = 0,
        valueDefault = 0,
        valueMin = 0, 
        valueMax = 0, 
        restraintMin = 0, 
        restraintMax = 0, 
        limitMin = 0, 
        limitMax = 0,
        bonusList = [])
    {
        this.value = value;
        this.valueDefault = valueDefault;
        this.valueMin = valueMin;
        this.valueMax = valueMax;

        this.restraintMin = restraintMin;
        this.restraintMax = restraintMax;

        this.limitMin = limitMin;
        this.limitMax = limitMax;

        this.systemMin = Number.MIN_VALUE;
        this.systemMax = Number.MAX_VALUE;

        this.bonusList = bonusList;

        this.canRestraint = true;
        this.canLimit = true;
    }

    getValue(){
        return this.value;
    }

    getValueMin(){
        return this.valueMin;
    }

    getValueMax(){
        return this.valueMax;
    }

    setValue(arg_value){
        //if <> system
        clamp(arg_value, this.systemMin, this.systemMax);

        //if <> limit
        clamp(arg_value, this.limitMin, this.limitMax);

        //if <> restraint
        clamp(arg_value, this.restraintMin, this.restraintMax);

        //if <> min, max
        clamp(arg_value, this.restraintMin, this.restraintMax);

        //setValue
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

class GamePercentage {
    constructor(){}
}

const sz_increment = [0,0,0];