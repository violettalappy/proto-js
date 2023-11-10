const KLocalizationID = {
    Hello: "",
    Goodbye: "",
    Options: "",
}

const KLocalizationLanguage = {
    English_en,
    Vietnamese_vi,
    German_de
}

// ? Contains all strings specifier
//UUID, English, Vietnamese, German
const localization = {
    Hello: ["Hello", "Xin Chao", "Guten Morgen"],
    Goodbye: ["Goodbye", "Tam Biet", "Tschuss"],

    //Main Menu
    PressAnyKey: ["Press any key", "Nhan nut nao cung duoc"],
    Play: ["Play", "Choi"],

    BackToMainMenu: ["Back to Main Menu", "Tro ve man hinh chinh"],
    BackToDesktop: ["Back to Desktop", "Tro ve desktop"],
    ExitToDesktop: ["Exit to Desktop", "Thoat ve Desktop"],
    ExitToOS: ["Exit to OS", "Thoat ve Desktop"],
    AskExitToOS: ["Do you want to exit to OS ?", "Ban co muon tro ve desktop ?"],
    
    Back: ["Back", "Tro ve"],
    Yes: ["Yes", "Co"],
    No: ["No", "Khong"],
    Accept: ["Accept", "Dong y"],
    Decline: ["Decline", "Tu choi"],
    Confirm: ["Confirm", "Chap nhan"],
    Cancel: ["Cancel", "Thoat"],

    Ask_RestartCheckpoint: ["Do you want to restart at previous checkpoint ?", "Ban co muon choi lai man truoc ?"],
    Ask_RestartGame: ["Do you want to restart game ?", "Ban co muon choi lai tu dau ?"],

    Notification_LoadSceneFail: ["Load scene fail !!", "Load scene co loi !!"],
    Notification_LoadLevelFail: ["Load level fail !!", "Load level co loi !!"],
    Notification_LoadLevelFail: ["Load level fail !!", "Load level co loi !!"],

    ProfileData: ["Profile Data", "Du lieu nguoi dung"],
    GameData: ["Game Data", "Du lieu tro choi"]
}

function getText(arg_localizationID, arg_language){
    let result = "Example Text";
    return result;
}

function generate(){}

function exportCSV(){}
function exportJSON(){}
function exportSQL(){}

//Misc
/*
JapaneseCurrency: ["Yen"],
Profile: ["Profile", "Ho so nguoi dung"],
*/