// * Enable console debug log of clamp
K_CAN_DEBUG_LOG_CLAMP_FUNCTION = false;

// * Clamp value to provided min and max value
function _clamp(val, min, max) {
    if(K_CAN_DEBUG_LOG_CLAMP_FUNCTION) {
        if(val > max) {
            console.log("Value has clamp to provided max value " + max.toString);
        }
        else if(val < min) {
            console.log("Value has clamp to provided min value " + min.toString);
        }
        else {
            console.log("Value does not need to be clamped " + val);
        }
    }
    return val > max ? max : val < min ? min : val;
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
        bonusList = [],
        canRestraint = true,
        canLimit = true)
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

        this.canRestraint = canRestraint;
        this.canLimit = canLimit;
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
        _clamp(arg_value, this.systemMin, this.systemMax);

        //if <> limit
        if(this.canLimit){
            _clamp(arg_value, this.limitMin, this.limitMax);
        }

        //if <> restraint
        if(this.canRestraint){
            _clamp(arg_value, this.restraintMin, this.restraintMax);
        }

        //if <> min, max
        _clamp(arg_value, this.restraintMin, this.restraintMax);

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