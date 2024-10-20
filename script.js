let number = 10;
let square = number * number;
console.log("-----------------პირველი დავალება-------------");
if (square > 100) {
  console.log(`ამ რიცხვის კვადრატი მეტია   100 ზე `);
} else if (square === 100) {
  console.log("ამ რიცხვის კვადრატი უდრის 100");
} else {
  console.log(`ამ რიცხვის კვადრატი ნაკლებია 100 ზე  `);
}

console.log('')
console.log("--------------მეორე დავალება------------");

let Snumber = 63;

if (Snumber >= 50 && Snumber <= 100) {
  console.log(`${Snumber} მეტია 50 ზე და ნაკლებია 100`);
} else {
  console.log(`${Snumber} არ არის 50 და 100 შორის `);
}

console.log('')
console.log("------------------------ მესამე დავალება ------------------");
let xnumber = -41;

if (xnumber === 0) {
  console.log(`${xnumber} უდრის 0 :/ `);
} else if (xnumber < 0) {
    console.log(`${xnumber} ნაკლებია ნოლზე შესაბამისად სჭირდება შეცვლაააა`);
} else {
    console.log(`${xnumber} მეტია 0 ზე `);
}
console.log('')

console.log("------------------------- მეოთხე დავალება ------------------");
let width = 9;
let lengthh = 16;
let p = 2 *(width + lengthh);

if(p > 50){
    console.log('მართკუთხედის პერიმეტრი არის 50სმ ზე მეტი')
} else if(p === 50){
    console.log('მართკუთხედის პერიმეტრი უდრის 50სმ')
}
else {
    console.log('მართკუთხედის პერიმეტრი ნაკლებია 50სმ ზე ')
}   

