function pickWord(a, b, c) {
    let rand = Math.random();

    if (rand < 0.33) {
        return a;
    }
    else if (rand >= 0.33 && rand < 0.66) {
        return b;
    }
    else{
        return c;
    }
}
let first = pickWord("Crazy", "Amazing", "Fire");
let second = pickWord("Engine", "Foods", "Garments");
let third = pickWord("Bros", "Limited", "Hub");

console.log(`${first} ${second} ${third}`);