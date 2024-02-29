let Numbsbtn = document.querySelectorAll(".numbs");
// объявили переменную с помощью let ,выбрали все числа (объекта,кнопки)
console.log(Numbsbtn)
// функция для вывода сообщение в браузере (не сохзраняется, просто для проверки)
let output = document.querySelector(".output");
// выбрали поле ввода и будем видеть теперь там значения
for(let i = 0; i < 10; i++) {
    console.log(Numbsbtn)
}
// for-цикл, (условия цикла,i=0 условие цикла i<10, цикл не больше 10,i++от нуля
//     идет до 10 цикличность. )
let enter = document.querySelector(".enter");
// выбрали поле ввода и будем видеть теперь там значения
enter.addEventListener("click",() => {
    console.log(enter)
})
// здесь мы при нажатии enter получаваем итог
Numbsbtn.forEach((element) => {
    element.addEventListener("click",() => {
        console.log(element.textContent)
        output.innerHTML = element.textContent;
    })
})
// for -цикл(кол-во действий) при нажатии на каждый Numb срабатывает объект.
// element.textContent получаем цифры в блоке "ввод"
// output.innerHTML = element.textContent с помощью команды видим ,что отобража-
// ется в поле ввода