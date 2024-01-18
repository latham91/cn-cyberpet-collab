// Constructing the character class
class Character {
    constructor(mood) {
        this.mood = mood;

        // Stats
        this.stats = {
            oxygen: 100,
            hunger: 100,
            thirst: 100,
            energy: 100,
            boredom: 100,
        };
    }

    // Methods for the character class
    // (refill oxygen, eat, drink, exercise, sleep)
    // TODO: Will adjust numbers later
    refillOxygen() {
        this.stats.oxygen += 25;
        this.stats.energy -= 25;
    }

    eat() {
        this.stats.hunger += 25;
        this.stats.thirst -= 25;
        this.stats.energy -= 25;
    }

    drink() {
        this.stats.thirst += 25;
        this.stats.hunger -= 25;
        this.stats.energy -= 25;
    }

    exercise() {
        this.stats.energy -= 25;
        this.stats.hunger -= 25;
        this.stats.thirst -= 25;
        this.stats.boredom += 25;
    }

    sleep() {
        this.stats.energy += 25;
        this.stats.hunger -= 25;
        this.stats.thirst -= 25;
        this.stats.boredom -= 25;
    }
}

// Constructing the 3 different playable characters
class Aaron extends Character {
    constructor(mood) {
        super(mood);
    }

    // Unique methods?
}

class Constantin extends Character {
    constructor(mood) {
        super(mood);
    }

    // Unique methods?
}

class Reuben extends Character {
    constructor(mood) {
        super(mood);
    }

    // Unique methods?
}
