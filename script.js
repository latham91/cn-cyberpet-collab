// Constructing the character class
class Character {
    constructor(mood) {
        this.mood = mood;

        // Stats
        this.stats = {
            oxygen: 100,
            hunger: 100,
            thirst: 100,
            tiredness: 100,
            boredom: 100,
        };
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
