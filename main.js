// დავალება 1: დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტური ტიპის მონაცემების შეყვანას, შემდეგ კი Number() ფუნქციის გამოყენებით დააკონვერტირეთ შემოყვანილი მნიშვნელობა. აღნიშნული ციფრის მიხედვით შექმენით ციკლი და ციკლში დააგენერირეთ რანდომ ციფრები და თითოეული ციფრი დაამატეთ მასივში.

let userInformation = prompt("გთხოვთ შეიყვანოთ ტექსტური ტიპის მონაცემები");
userInformation = Number(userInformation);
let randomNumbers = [];

for (let i = 0; i < userInformation; i++) {
  randomNumbers.push(Math.round(Math.random() * 100));
}
console.log(randomNumbers);

// დავალება 2: academy = {name: ‘Digital Academy’ courses: [‘JavaScript’, ‘HTML’, ‘CSS’, ’Angular’, ‘React’, ‘Python’, C#] } აღნიშნული ობიექტიდან მოძებნეთ კურსებში თუ იქნება HTML და CSS და ერთ ცვლადში გააერთიანეთ ეს ტექსტი. გამოიყენეთ ლუპი და არა include და ასევე სტრინგის მეთოდი.

let academy = {
  name: "Digital Academy",
  courses: ["JavaScript", "HTML", "CSS", "Angular", "React", "Python", "C#"],
};
let findCourses = [];

for (let i = 0; i < academy.courses.length; i++) {
  if (academy.courses[i] === "HTML") {
    findCourses.push("HTML");
  }
  if (academy.courses[i] === "CSS") {
    findCourses.push("CSS");
  }
}
console.log(findCourses);

// დავალება 3:დააგენერირეთ რანდომ ციფრი და ამ ციფრის მიხედვით შექმენით while loop-ი. ლუპის შიგნით დაამატეთ მხოლოდ ლუწი ელემენტები მასივში.

let evenNumbers = [];

while (evenNumbers.length < 10) {
  let randomNumbers2 = Math.round(Math.random() * 100);

  if (randomNumbers2 % 2 === 0) {
    evenNumbers.push(randomNumbers2);
  }
}
console.log(evenNumbers);

// დავალება 4: შეავსეთ მასივი 15 ცალი რენდომული რიცხვით, რომელიც მოთავსებული იქნება 0-დან 30-მდე შუალედში. აუცილებელი პირობაა, რომ ამ მასივში 2 ერთი და იგივე რიცხვი არ იყოს ჩაწერილი. (შეგიძლიათ დაიხმაროტ include() მეთოდი)
let randomNumbers15 = [];

for (let i = 0; randomNumbers15.length < 15; i++) {
  let randomNumber3 = Math.round(Math.random() * 30);
  if (!randomNumbers15.includes(randomNumber3)) {
    randomNumbers15.push(randomNumber3);
  }
}
console.log(randomNumbers15);

// დავალება 5: Let arr = [12, 45, 26, 4, 7, 14, 19]; იპოვეთ მასივში ჯერ უმცირესი წევრი, ხოლო შემდეგ უდიდესი და დალოგეთ. (არ გამოიყენოთ math.max() და math.min() ფუნქციები)

let arr = [12, 45, 26, 4, 7, 14, 19];

let minimum = arr[0];
let maximum = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minimum) {
    minimum = arr[i];
  }
  if (arr[i] > maximum) {
    maximum = arr[i];
  }
}

console.log(minimum);
console.log(maximum);
