//value, default, min, max, rest_min, rest_max, limit_min, limit_max, sys_min, sys_max
const _stats = {
    FireType: "Single", //Single - 1, Burst - 3 to 5, Auto - all

    Force: [0, 0, 0, 0],
    Spread: [0, 0, 0, 0],

    Attack: [0, 0, 0, 0],
    MeleeAttack: [0, 0, 0, 0],
    Damage: [0,0,0,0,0],
    MeleeDamage: [0,0,0,0,0],

    MeleeTime: [0,0,0,0,0],

    Range: [0, 0, 0, 0],
    RechargeTime: [0,0,0,0,0],
    RechargeSpeed: [0,0,0,0,0],
    ReloadSpeed: [0,0,0,0,0], //reloadTime
    DrawSpeed: [0,0,0,0,0],

    // ? COD Accuracy
    Zoom: [0,0,0,0,0],
    Accuracy: [0,0,0,0,0],
    HipStandAccuracy: [0,0,0,0,0],
    HipCrouchAccuracy: [0,0,0,0,0],
    HipProneAccuracy: [0,0,0,0,0],
    AdsZoomAccuracy: [0,0,0,0,0],

    Stability: [0,0,0,0,0],
    
    // ? Remember there is ammo type
    AmmoCapacity: [0,0,0,0,0], // finite or inf
    MagazineCapcity: [0,0,0,0,0], // finite or inf

    // ? Stuff
    Usage: [0, 0, 0, 0],
    Endurance: [0, 0, 0, 0],
    Durability: [0, 0, 0, 0],

    // ? Shop
    Cost: [0,0,0,0],
    Value: [0,0,0,0],
    Sell: [0,0,0,0]
}