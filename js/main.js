console.log("Let's roll some dice, baby!");
console.log("---------------------------");


const Roll = (min, max) => {
    const minimum = Math.ceil(1);
    const maximum = Math.floor(6);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

const createDie = (value) => {

    switch (value) {
        case 1:
            return "\u2680";
        case 2:
            return "\u2681";
        case 3:
            return "\u2682";
        case 4:
            return "\u2683";
        case 5:
            return "\u2684";
        case 6:
            return "\u2685";
    }
}

for (let i = 0; i < 10; i++) {
    const die1 = Roll()
    const die2 = Roll()

    let message = `${createDie(die1)} + ${createDie(die2)} = ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)
}

