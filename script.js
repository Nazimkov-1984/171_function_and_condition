//ФУНКЦІЇ ТА УМОВИ
// функції - це окремі кирпичики з яких скаладєтся скрипт
// функції це спосіб не повторювати шматки коду

// створили та описали функцію
function getAndPrintUserName() {
  const userParam = prompt("Введіть своє")
  console.log("Параметер користувача" + userParam)
}
// () - слугують для передачі аргументів в функцію
// x+y=z (x,y,z) - це аргументи цього виразу

function sumTwoNumbers(x, y) {
  console.error(x + y)
}
sumTwoNumbers(10, 20)
sumTwoNumbers(158, 133333)

const userName = document.querySelector(".name")
userName.addEventListener("click", getAndPrintUserName)
const surname = document.querySelector(".surname")
surname.addEventListener("click", getAndPrintUserName)
const age = document.querySelector(".age")
age.addEventListener("click", getAndPrintUserName)

// УМОВИ - вони дозволяють в залежності від певних параметрів виконати ті чи інші дії

const userAge = 18
// if - else
// if (умова)
// умовні оператори >< / >= <= / && - та / || - або

if (userAge >= 18) {
  console.log("Ти дорослий")
} else if (userAge <= 10) {
  console.log("Ти дитина")
} else if (userAge >= 14) {
  console.log("Ти підліток")
}
const param = 150
// 0 - 100 - низький / 100 - 200 - середній / 200 - 300 - високий
if (param >= 100 && param <= 200) {
  // якщо парам більше 100 та/і менше 200
  console.log("Середній")
} else if (param < 100) {
  console.log("Низький")
} else if (param > 200) {
  console.log("Високий")
}

const isStudent = false
// правило 0, null, undefined,[],"" - вони в умовах є false
if ({ name: "ksdfsdf" }) {
  console.log("УМОВА ВИКОНАЛАСЬ")
}
