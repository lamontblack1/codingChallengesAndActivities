function character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log("Name: " + this.name)
        console.log("Profession: " + this.profession)
        console.log("Gender: " + this.gender)
        console.log("Age: " + this.age)
        console.log("Strength: " + this.strength)
        console.log("Hit Points: " + this.hp)
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log("This character is still alive!")
        }
        else {
            console.log("This character is DEAD")
        }
    };
    this.attack = function (hitPoints) {
        this.hp -= hitPoints
    };
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hp += 25
    };
}

let roger = new character("Roger", "Coder", "M", 29, 88, 7)
let lamont = new character("Lamont", "Tutor", "M", 48, 89, 8)

roger.printStats()
console.log(roger.age)
roger.levelUp()
roger.printStats()
roger.attack(2)
roger.printStats()
