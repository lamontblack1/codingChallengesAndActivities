function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
   
    this.feed = function () {
        if (this.hungry) {
            console.log("That was Yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks, I'm full.")
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
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
        if (this.bored) {
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

let dog = new DigitalPal(true, false, false, 23)
dog.outside = false;
dog.bark = function () {
    console.log("Woof! Woof!");
};
dog.goOutside = function () {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
};
dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
        this.bark();
    }
    else { console.log("I am already inside.") };
};

let cat = new DigitalPal(true, false, false, 4)
cat.houseCondition = 100;
cat.meow = function () { console.log("Meow! Meow!") };
cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
    
};

cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");

}
