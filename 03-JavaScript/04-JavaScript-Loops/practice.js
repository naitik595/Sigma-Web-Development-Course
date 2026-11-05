for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 4; i++) {
    sum = sum + i;
}
console.log(sum);

let student = { name: "Naitik", class: "11th", city: "Mainpuri" };
for (const key in student) {
    console.log(key);
}

for (const ch of "JS") {
    console.log(ch);
}

let n = 3;
while (n > 0) {
    console.log(n);
    n--;
}
console.log("Go!");

let k = 10;
do {
    console.log(k);
    k++;
} while (k < 6);

for (let i = 1; i <= 6; i++) {
    if (i % 2 == 0) {
        console.log(i, "even");
    } else {
        console.log(i, "odd");
    }
}