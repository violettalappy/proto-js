class Character {
    constructor(name, strength, agility, intelligence) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
    }

    displayStats() {
        return `Name: ${this.name}\nStrength: ${this.strength}\nAgility: ${this.agility}\nIntelligence: ${this.intelligence}`;
    }
}

let character1 = new Character('John Doe', 10, 15, 12);
console.log(character1.displayStats());
