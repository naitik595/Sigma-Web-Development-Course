let name = "rohan";
console.log(name.toUpperCase());

let city = "DELHI";
console.log(city.toLowerCase())


let password = "1234";
if (password.length < 6) {
    console.log("Weak Password")
}
else {
    console.log("Strong Password")
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }

}
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive")
    }
    else if (num < 0) {
        console.log("Negative")
    }
    else {
        console.log("Zero")
    }

}
checkNumber(10);
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

printTable(5);

