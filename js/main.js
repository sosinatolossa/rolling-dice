console.log("Let's roll some dice, baby!");
console.log("---------------------------");


const Roll = (min, max) => {
    const minimum = Math.ceil(1);
    const maximum = Math.floor(6);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

const createDie = (value) => {
    return {
        value: value
    }
}

for (let i = 0; i < 10; i++) {
    const die1 = Roll()
    const die2 = Roll()

    let message = `${die1} + ${die2} = ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)
}

