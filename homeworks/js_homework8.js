const regex = /\b[^a\s]{6,}\b/gi


const text = "Wonderful Joyful Happiness Time Task Apple";
const result = text.match(regex);
console.log(result); // ["Wonderful", "Joyful"]
