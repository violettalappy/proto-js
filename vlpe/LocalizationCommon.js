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
    NewGame: ["New Game", "Tro choi moi"],
    Continue: ["Continue", "Tiep tuc"],

    //Options
    Options: ["Options", "Cai dat"],
    Options_Display: ["Display", "Man hinh"],
    Options_Display_Area: ["Area", "Do sang man hinh"],
    Options_Display_Brightness: ["Brightness", "Do sang man hinh"],
    Options_Display_ActiveMonitor: ["", ""],
    Options_Display_AspectRatio: ["", ""],
    Options_Display_Resolution: ["", ""],
    Options_Display_WindowMode: ["", ""],
    Options_Display_Fullscreen: ["", ""],
    Options_Display_ResolutionModifier: ["", ""],
    Options_Display_RefreshRate: ["", ""],
    Options_Display_VSync: ["", ""],
    Options_Display_DirectX: ["", ""],
    Options_Video: ["Video", ""],
    Options_Graphics: ["Graphics", "Man hinh"],
    Options_Graphics_Preset: ["Preset", "Cau hinh"],
    Options_Graphics_FieldOfView: ["Field of View", ""],
    Options_Audio: ["Audio", "Am thanh"],
    Options_Audio_Master: ["Master"],
    Options_Audio_BGM: ["BGM"],
    Options_Audio_SFX: ["SFX"],
    Options_Audio_GUI: ["GUI"],
    Options_Audio_Voice: ["Voice"],
    Options_Controls: ["Controls", "Dieu khien"],
    Options_Controls_Keyboard: ["Keyboard", "Ban phim"],
    Options_Controls_Mouse: ["Mouse", "Con chuot"],
    Options_Controls_Controller: ["Controller", "Cam tay"],
    Options_HUD: ["HUD", "HUD"],
    Options_HUD_All: ["Brightness", "Do sang man hinh"],
    Options_HUD_Map: ["Brightness", "Do sang man hinh"],
    Options_Misc: ["Misc", ""],
    Options_Misc_Subtitles: ["Subtitles", "Phu de"],
    Options_Benchmark: ["Benchmark", "Benchmark"],
    Options_Language: ["Default", "Default"],
    Options_Localization: ["Default", "Default"],
    Options_Privacy: ["Privacy", "Privacy"],
    Options_System: ["Default", "Default"],
    Options_System_FPS: ["FPS", "FPS"],
    Options_Default: ["Default", "Default"],

    Help: ["Help","Huong dan"],

    Config: ["Config", "Cau hinh"],

    Gallery: ["Gallery", "Thu vien"],
    Gallery_Musics: ["Musics", "Nhac"],
    Gallery_Illustrations: ["Illustrations", "Anh"],
    
    Codex: ["Codex"],
    Codex_Documents: ["Documents"],
    Codex_History: ["History"],
    Codex_Characters: ["Characters"],

    Tutorial: ["Tutorial"],
    Tutorial_Basic: ["Basic"],

    DLC: ["DLC", "DLC"],
    DLC_Installed: ["Installed", "DLC"],
    DLC_NotInstalled: ["Not Install Yet", "DLC"],

    Mods: ["Mods"],
    Mods_Installed: ["Installed"],
    Mods_NotInstalled: ["NotInstalled"],

    History: ["",""],
    Unlockables: ["",""],
    Achievements: [],
    Progress: ["",""],
    Equipment: ["Equipment",""],

    BackToMainMenu: ["Back to Main Menu", "Tro ve man hinh chinh"],
    BackToDesktop: ["Back to Desktop", "Tro ve desktop"],
    ExitToDesktop: ["Exit to Desktop", "Thoat ve Desktop"],
    ExitToOS: ["Exit to OS", "Thoat ve Desktop"],
    AskExitToOS: ["Do you want to exit to OS ?", "Ban co muon tro ve desktop ?"],
    
    Resume: ["Resume", "Tiep tuc"],
    Return: ["Return", "Tro ve"],
    Next: ["Next", "Tiep tuc"],
    Back: ["Back", "Tro ve"],
    Yes: ["Yes", "Co"],
    No: ["No", "Khong"],
    Accept: ["Accept", "Dong y"],
    Decline: ["Decline", "Tu choi"],
    Confirm: ["Confirm", "Chap nhan"],
    Cancel: ["Cancel", "Thoat"],

    Ask_Download: ["Do you want to download ?", "Ban co muon download ?"],
    Ask_Install: ["Do you want to install ?", "Ban co muon cai dat ?"],
    Ask_RestartCheckpoint: ["Do you want to restart at checkpoint ?", "Ban co muon choi lai man truoc ?"],
    Ask_RestartGame: ["Do you want to restart game ?", "Ban co muon choi lai tu dau ?"],
    Ask_BackToMainMenu: ["Do you want to back to main menu ?", "Ban co muon tro ve man hinh chinh ?"],
    Ask_BackToOS: ["Do you want to back to main menu ?", "Ban co muon tro ve man hinh chinh ?"],
    Ask_ExitGame: ["Do you want to exit game ?", "Ban co muon thoat khoi game ?"],
    Ask_ExitToMainMenu: ["Do you want to exit to main menu ?", "Ban co muon thoat ve man hinh chinh ?"],
    Ask_Option_ResetToDefault: ["Do you want to reset all options to default ?", "Ban co muon reset ?"],

    Notification_LoadSceneFail: ["Load scene fail !!", "Load scene co loi !!"],
    Notification_LoadLevelFail: ["Load level fail !!", "Load level co loi !!"],
    Notification_LoadSceneSuccess: ["Load scene success !!", "Load scene okay !!"],
    Notification_UnableToLoadGameData: ["", ""],
    Notification_Info: ["", ""],
    Notification_Warning: ["", ""],
    Notification_Caution: ["", ""],
    Notification_Fatal: ["", ""],
    Notification_ProfileSaveSuccess: ["Profile Save successful !!", "Ho so nguoi dung luu thanh cong !!"],
    Notification_ProfileSaveFail: ["Profile Save fail !!", "Ho so nguoi dung luu loi !!"],
    Notification_GameSaveSuccess: ["Game Save successful", "Luu thanh cong"],
    Notification_GameSaveFail: ["Game Save fail", "Luu loi !!"],

    Notification_GameplayTimeExtended: [""],
    Notification_GameplayItemGet: [""],
    Notification_GameplayItemLost: [""],

    Subtext_Options_Language: ["Please select your language", "Vui long chon ngon ngu"],
    Subtext_SelectYourLanguage: ["Please select your language", "Vui long chon ngon ngu"],

    //Data
    Profile: ["Profile", "Nguoi dung"],
    Save: ["Save"],
    Load: ["Load"],
    QuickSave: ["Quick Save"],
    QuickLoad: ["Quick Load"],
    New: ["Save"],
    Delete: ["Delete", "Xoa"],
    Import: ["Import"],
    Transfer: ["Transfer"],
    Migrate: ["Migrate"],
    Switch: ["Switch"],
};

//Load csv file
function getText(arg_localizationID, arg_language){
    let result = "Example Text";
    return result;
}

//Load from default localization array
function getTextFromDefault(arg_localizationID, arg_language){
    let result = "Example Text";
    return result;
}

//Misc
/*
function generate(){}
function exportCSV(){}
function exportJSON(){}
function exportSQL(){}

JapaneseCurrency: ["Yen"],
Profile: ["Profile", "Ho so nguoi dung"],
*/