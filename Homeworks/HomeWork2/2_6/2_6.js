//Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

'use strict';
// ----------------------------------довільне
let x = +prompt('Введіть значення: 1 ; 0 або -3');
    if(x !== 0) {
        document.write('true')
    }
    else {
        document.write('false')
    }

