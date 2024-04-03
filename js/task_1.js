//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
// let arr = [3, -2, 5, 6, -8, 2];

let arr = [3, -2, 5, 6, -8, 2];



function removeNegatives(arr) {
    
    const positiveNumbers = arr.filter(num => num > 0);
    
    
    if (positiveNumbers.length > 0) {
        return positiveNumbers;
    } else {
        return "No positive numbers found";
    }
}

console.log(removeNegatives(arr)); // [3, 5, 6, 2]
