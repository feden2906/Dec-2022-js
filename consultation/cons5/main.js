// import {a} from './main2';
//
// console.log(a);

// try {
//   throw new Error()
// } catch (e) {
//
// }

((name, age) => {
  console.log(`name: ${name}, age: ${age}`)
  console.log(new Error())
})('Max', 23);

// const json = localStorage.getItem('key');
let arr = JSON.parse(localStorage.getItem('key') || [].toString());

arr.push(Date.now())

localStorage.setItem('key', JSON.stringify(arr))


const DELAY = 100;
const elements = [];
let currentIndex = 0;
for (let i = 1; i < 11; i++) {
  const element = document.getElementById(`titleA${i}`);
  elements.push({element, isBlinking: false});
  console.log(elements);
}
while (true) {
  // Вимкнути попередній елемент
  elements[currentIndex].element.style.background = '';
  elements[currentIndex].isBlinking = false;
  // Вибрати наступний елемент
  currentIndex = (currentIndex + 1) % elements.length;
  // Вмикаємо наступний елемент, якщо він не блимає в даний момент
  if (!elements[currentIndex].isBlinking) {
    elements[currentIndex].element.style.background = 'blue';
    elements[currentIndex].isBlinking = true;
  }
  // Затримка перед наступною ітерацією
  await new Promise(resolve => setTimeout(resolve, DELAY));
