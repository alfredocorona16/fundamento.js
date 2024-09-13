// Hi! I'm chucho and I'm from huamantla

const name ="Francisco";
const city ="Huamantla";

console.log("Hi! I'm " + name + "\n I'm from " + city);

console.log('Hi! I\'m ' + name + '\n I\'m from ' + city);

// Templates literals 
console.log(`Hi! I'm ${name}
     I'm from ${city}`);

const message = `Hi! I'm ${name} I'm from ${city}`;

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf('Francisco'));
console.log(message.split(' '));
console.log("❤️❤️❤️❤️".repeat(5));

