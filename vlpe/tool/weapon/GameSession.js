const _numeric = [
    "EnemyDefeated", 
    "Money",
    "Gem",
    "Crystal",
    "Gold",
    "Bronze",
    "Coin",
    "Penny",
    "Material",
    "Complete",
    
    "Playtime",
    
    // ? Car Game
    "Time",
    "Speed",
    "Gear",
    "Heat",
    "Boost",
    "Nitro",
];

const _percentages = {
    Complete: [0,0,0,100],
}

class GameSession {    
    constructor(){
        this.enemyDefeated = 0;
    }
    setEnemyDefeated(arg_value){
        this.enemyDefeated = arg_value;
    }
}