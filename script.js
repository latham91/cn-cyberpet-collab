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

    mood(mood) {
        this.mood = mood;
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

/////////////////////////// MAIN GAME CODE BELOW ////////////////////////////

// Variables
let character; // The character the player chooses.
let isPlaying = false; // Triggers the game loop if true.
let loopSpeed = 1000; // 1 second.

// Game loop
while (isPlaying) {
    // When characters health reaches 0, game over.
    if (character.stats.health <= 0) {
        isPlaying = false;

        // TODO: Add function to display game over screen
    }

    // Stat ticks every second
    setInterval(() => {
        // Base stat deduction. (Mood = "happy")
        if (character.mood === "happy") {
            character.stats.health -= 2;
            character.stats.oxygen -= 2;
            character.stats.hunger -= 2;
            character.stats.thirst -= 2;
            character.stats.energy -= 2;
            character.stats.boredom -= 2;
        }

        // Tired stat deduction. (Mood = "tired")
        if (character.mood === "tired") {
            character.stats.health -= 4;
            character.stats.oxygen -= 4;
            character.stats.hunger -= 2;
            character.stats.thirst -= 4;
            character.stats.energy -= 6;
            character.stats.boredom -= 2;
        }

        // Hungry stat deduction. (Mood = "hungry")
        if (character.mood === "hungry") {
            character.stats.health -= 4;
            character.stats.oxygen -= 2;
            character.stats.hunger -= 6;
            character.stats.thirst -= 2;
            character.stats.energy -= 4;
            character.stats.boredom -= 2;
        }

        // Thirsty stat deduction. (Mood = "thirsty")
        if (character.mood === "thirsty") {
            character.stats.health -= 4;
            character.stats.oxygen -= 2;
            character.stats.hunger -= 2;
            character.stats.thirst -= 6;
            character.stats.energy -= 4;
            character.stats.boredom -= 2;
        }

        // Bored stat deduction. (Mood = "bored")
        if (character.mood === "bored") {
            character.stats.health -= 4;
            character.stats.oxygen -= 2;
            character.stats.hunger -= 2;
            character.stats.thirst -= 2;
            character.stats.energy -= 2;
            character.stats.boredom -= 6;
        }
    }, loopSpeed);
}

// Function to create a character. example: createCharacter("Aaron", "happy");
const createCharacter = (character, baseMood) => {
    if (character === "Aaron") {
        if (!baseMood) {
            character = new Aaron("happy");
        } else {
            character = new Aaron(baseMood);
        }
    }

    if (character === "Constantin") {
        if (!baseMood) {
            character = new Constantin("happy");
        } else {
            character = new Constantin(baseMood);
        }
    }

    if (character === "Reuben") {
        if (!baseMood) {
            character = new Reuben("happy");
        } else {
            character = new Reuben(baseMood);
        }
    }
};
