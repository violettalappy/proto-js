const KCharacterStatus = {
    Rank: "",
    Class: "",
    Title: "",
    Level: "",
    CurrentExperience: "",
    NextRequiredExperience: "",

    //Morality
    Threat: "",
    Reputation: "",
    Good: "",
    Evil: "",
    Notorius: "",

    //Status (Point Increment)
    LifePoint: "",
    HealthPoint: "",
    MagicPoint: "",
    SpecialPoint: "",
    ActionPoint: "",

    //Percentage
    FeverBar: "",
};

function getCharacterStatuses(){
    return [CharacterStatus()];
};

class CharacterStatuses{
    constructor(){
        this.rank = 0;
    }

    //Set all variables here
    //Auto generated here
}