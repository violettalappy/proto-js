const _screenWidths = [
    480,
];

const programConfigs = {    
    // ? Program Info
    programName: "Insert Program Name Here",
    programVersion: "0.0.0",

    // ? Options -> Display
    isFullScreen: false,
    screenWidth: 1280,
    screenHeight: 720,
    masterVolume: 0.5,

    // ? Options -> Graphics / Video
    RefreshRate: [1,[24,30,36,48,60,72,75,90,120,144,165,240,360,480]],
    AspectRatio: [0,["None","2:3","3:4","4:5","9:16","10:16","9:21","3:2","4:3","5:4","16:9","16:10","21:9"]],
    VSync: false, //Vertical Sync

    // ? Audio
    bgmMixerVolume: 0.5,
    sfxMixerVolume: 0.5,
    voiceMixerVolume: 0.5,
    isBGMMixerMute: false,
    isSFXMixerMute: false,
    isVoiceMixerMute: false,

    // ? Language
    language: [0,["english_en", "vietnamese_vn", "german_de"]],

    // ? Game Common
    difficulty: "normal",
    // ? Game Visual Novel
    textSpeed: 0.5,

    // ? HUD
    canShowMap: true,
    canShowCharacterStatuses: true,
    canShowWeaponLoadout: true,

    // ? Misc
    canShowSubtitles: true,

    // ? System
    isProgramConfigInitialize1stTime: false,
}

//currentChoice and available options for changing

function exportINI();
function exportCSV();
function exportJSON();

function exportJS();