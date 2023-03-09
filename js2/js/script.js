document.write("1. Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.<br>");
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let res = arr1.concat(arr2);
document.writeln(`res = ${res}`);

document.write("<br><br>2. Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.<br>");
arr1.push(1, 2, 3);
document.writeln(`arr1 = ${arr1}`);

document.write("<br><br>3. Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].<br>");
arr2.reverse();
document.writeln(`arr2 = ${arr2}`);

document.write("<br><br>5. Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.<br>");
arr2.unshift(4);
arr2.unshift(5);
arr2.unshift(6);
document.writeln(`arr2 = ${arr2}`);

document.write("<br><br>6. Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.<br>");
let arr3 = ['js', 'css', 'jq'];
document.writeln(`arr3[0] = ${arr3[0]}`);

document.write("<br><br>7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].<br>");
arr2.reverse();
res = arr2.concat(arr2.slice(0, 3));
document.writeln(`arr2 = ${res}`);

document.write("<br><br>8. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].<br>");
arr2.splice(5, 4);
arr2.splice(1, 2);
document.writeln(`arr2 = ${arr2}`);

document.write("<br><br>9. Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].<br>");
arr2.splice(1, 0, 2, 10, 3);
document.writeln(`arr2 = ${arr2}`);

document.write("<br><br>10.Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.<br>");
let arr4 = [3, 4, 1, 2, 7];
arr4.sort();
document.writeln(`arr4 = ${arr4}`);

document.write("<br><br>11. Дан масив з елементами 'Привіт, ', 'світ' і '!'. Потрібно вивести на екран фразу 'Привіт, мир!'..<br>");
let arr5 = ['Привіт, ', 'світ', '!'];
document.writeln(`arr5 = ${arr5.join("")}`);

document.write("<br><br>12. Дан масив ['Привіт, ', 'світ', '!']. Необхідно записати в нульовий елемент цього масиву слово 'Поки, ' (тобто замість слова 'Привіт, ' буде 'Поки, ').<br>");
arr5.shift();
arr5.unshift('Поки, ');
document.writeln(`arr5 = ${arr5.join("")}`);

document.write("<br><br>13. Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.<br>");
let arr6 = new Array(1, 2, 3, 4, 5);
document.writeln(`arr6 = ${arr6}`);

document.write("<br><br>11. Дан багатовимірний масив, Виведіть за його допомогою слово 'блакитний' 'blue' .<br>");
let arr7 = {
    'ru': ['блакитний', 'червоний', 'зелений'],
    'en': ['blue', 'red', 'green'],
};
document.writeln(`arr7 = ${arr7["ru"][0]} ${arr7["en"][0]}`);

document.write("<br><br>15. Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.<br>");
let arr8 = ['a', 'b', 'c', 'd'];
document.writeln(`arr8 = ${arr8.slice(0,2).join('+')}, ${arr8.slice(2,4).join('+')}`);

document.write("<br><br>16. Запитайте у користувача кількість елементів масиву. Виходячи з даних, які ввів користувач створіть масив на ту кількість елементів, яку передав користувач. у кожному індексі масиву зберігайте чило який показуватиме номер елемента масиву.<br>");
let numOfElements = prompt("Укажите количество элементов в массиве");
let numInt = Number(numOfElements);
let array = [];
for (let i = 0; i < numInt; i++) {
    array.push(i);
}
document.writeln(`array = ${array}`);

document.write("<br><br>11. Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.<br>");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        document.write(`<span style="color:red">${array[i]}</span>`);
    } else {
        document.write(`<p>${array[i]}</p>`);
    }
}

document.write("<br><br>11. Напишіть код, який перетворює та об'єднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою.<br>");
let vegetables = ['Капуста', 'Ріпа', 'Редиска', 'Морковка'];
str1 = vegetables.toString();
document.write(str1); // "Капуста, Ріпа, Редиска, Морквина"