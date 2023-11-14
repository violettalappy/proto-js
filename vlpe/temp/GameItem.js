class GameItem {
    constructor(name, description, value) {
        this.name = name;
        this.description = description;
        this.value = value;
    }

    use() {
        // Default use method
        console.log(`You use the ${this.name}.`);
    }
}

class HealingPotion extends GameItem {
    constructor(name, description, value, healingValue) {
        super(name, description, value);
        this.healingValue = healingValue;
    }

    use() {
        console.log(`You drink the ${this.name} and heal for ${this.healingValue} HP.`);
    }
}

class Sword extends GameItem {
    constructor(name, description, value, damage) {
        super(name, description, value);
        this.damage = damage;
    }

    use() {
        console.log(`You swing the ${this.name} and deal ${this.damage} damage.`);
    }
}

let potion = new HealingPotion('Healing Potion', 'Heals for 50 HP', 5, 50);
potion.use(); // Outputs: You drink the Healing Potion and heal for 50 HP.

let sword = new Sword('Sword', 'A sharp blade', 10, 15);
sword.use(); // Outputs: You swing the Sword and deal 15 damage.
