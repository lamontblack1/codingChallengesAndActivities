function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
   
    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was Yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks, I'm full.")
        }
    };
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("ZZZZZzzzzz.");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        }
        else {
            console.log("No way! I'm not tired.")
        }
    };
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?")
        }
    };
    this.increaseAge = function () {
        this.age += 1
        console.log("Happy Birthday to me! I am "+age+" old!")
    };

};

let tamagochi = {};

tamagochi.dog = new DigitalPal(true, false, false, 23)
tamagochi.dog.outside = false;
tamagochi.dog.bark = function () {
    console.log("Woof! Woof!");
};
tamagochi.dog.goOutside = function () {
    if (!this.outside === true) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
};
tamagochi.dog.goInside = function () {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside = false;
        this.bark();
    }
    else { console.log("I am already inside.") };
};

tamagochi.cat = new DigitalPal(true, false, false, 4)
tamagochi.cat.houseCondition = 100;
tamagochi.cat.meow = function () { console.log("Meow! Meow!") };
tamagochi.cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
    
};

tamagochi.cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");

}

let pet = process.argv[2];
let action = process.argv[3];

tamagochi[pet][action]()