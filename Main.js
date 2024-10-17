console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

const counter = (function() {
    let count = 0; // Ініціалізація лічильника

    return function(n) {
        if (n !== undefined) { // Якщо передано число
            count = n; // Встановлюємо лічильник на вказане число
        }
        return count++; // Повертаємо поточне значення і збільшуємо його на 1
    };
})();

// Тестування функції
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log(counter(0)); // 0
console.log(counter()); // 0
console.log(counter()); // 1


/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

const counterFactory = (() => {
    let count = 0; // Початкове значення лічильника

    return {
        value(n) {
            if (n !== undefined) {
                count = n; // Встановлюємо нове значення лічильника
            }
            return count; // Повертаємо значення лічильника
        },
        increment() {
            count++; // Збільшуємо значення лічильника на 1
        },
        decrement() {
            count--; // Зменшуємо значення лічильника на 1
        }
    };
})();

// Тестування функції
console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201

// const counterFactory = function () {}



/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */


const myPrint = (a, b, res) => {
    return `${a}^${b}=${res}`;
};

const myPow = (a, b, myPrint) => {
    // Рекурсивна функція для підрахунку степеня
    const power = (a, b) => {
        if (b === 0) return 1; // a^0 = 1
        if (b < 0) return 1 / power(a, -b); // для від'ємних степенів
        return a * power(a, b - 1); // рекурсивний виклик
    };

    const result = power(a, b); // обчислюємо результат
    return myPrint(a, b, result); // викликаємо myPrint і повертаємо результат
};

// Тестування функцій
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25



/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const myMax = (arr) => {
    return Math.max.apply(null, arr); // Використовуємо apply для передачі масиву
};

// Приклад масиву
const list = [12, 23, 100, 34, 56, 9, 233];

// Тестування функції
console.log(myMax(list)); // 233


/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

// const myMul = () => {}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

// Функція для множення двох чисел
const myMul = (a, b) => {
    return a * b; // Множимо a на b
};

// Функція для подвоєння числа
const myDouble = (n) => {
    return myMul.bind(null, 2)(n); // Використовуємо bind для фіксації першого аргументу
};

// Функція для потроєння числа
const myTriple = (n) => {
    return myMul.bind(null, 3)(n); // Використовуємо bind для фіксації першого аргументу
};

// Тестування функцій
console.log(myDouble(3)); // 6
console.log(myDouble(4)); // 8
console.log(myDouble(5)); // 10

console.log(myTriple(3)); // 9
console.log(myTriple(4)); // 12
console.log(myTriple(5)); // 15

// Експорт функцій
export { myMul, myDouble, myTriple };
