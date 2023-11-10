const TextGameSession = [
    "EnemyDefeated", 
    "Money",
    "Gem",
    "Crystal",
    "Gold",
    "Bronze",
    "Coin",
    "Penny",
    "Material"
];

class GameSession {    
    constructor(){
        this.enemyDefeated = 0;
    }
    setEnemyDefeated(arg_value){
        this.enemyDefeated = arg_value;
    }
}