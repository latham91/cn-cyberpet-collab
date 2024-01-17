// Constructing the character class
class Character {
    constructor(mood) {
        this.oxygen = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.boredom = 100;
        this.health = 100;
        this.tiredness = 100;
        this.mood = mood;
    }

    // Methods for the character class
    // (refill oxygen, eat, drink, exercise, sleep)
    // TODO: Will adjust numbers later
    refillOxygen() {
        this.oxygen += 25;
        this.tiredness -= 25;
    }

    eat() {
        this.hunger += 25;
        this.thirst -= 25;
        this.tiredness -= 25;
    }

    drink() {
        this.thirst += 25;
        this.hunger -= 25;
        this.tiredness -= 25;
    }

    exercise() {
        this.tiredness -= 25;
        this.hunger -= 25;
        this.thirst -= 25;
        this.boredom += 25;
    }

    sleep() {
        this.tiredness += 25;
        this.hunger -= 25;
        this.thirst -= 25;
        this.boredom -= 25;
    }
}

// Constructing the 3 different playable characters
class Aaron extends Character {
    constructor() {}

    // Unique methods?
}

class Constantin extends Character {
    constructor() {}

    // Unique methods?
}

class Reuben extends Character {
    constructor() {}

    // Unique methods?
}
