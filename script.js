// Constructing the character class
class Character {
    constructor(mood) {
        this.oxygen = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.boredom = 100;
        this.health = 100;
        this.mood = mood;
    }

    // Methods for the character class
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
    constructor(health, mood) {
        super(health, mood);
    }

    // Unique methods?
}
