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
let first = pickWord("Shadow", "Thunder", "Cyber");
let second = pickWord("Iron", "Fire", "Ice");
let third = pickWord("Knight", "Ninja", "Warrior");

console.log(`${first} ${second} ${third}`);
