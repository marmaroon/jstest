const requiredFields = [ 'title', 'price', 'discount' ];

let form1 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  price: 7800,
  discount: 0
};

let form2 = {
  title: 'Товар Телепорт бытовой VZHIH-101',
  discount: 10
}
if ( isValidPosition(form1, requiredFields) ) {
  console.log('Форма №1 заполнена верно');
} else {
    console.log('В форме №1 не заполнены необходимые поля');
}
if ( isValidPosition(form2, requiredFields) ) {
  console.log('Форма №2 заполнена верно');
} else {
  console.log('В форме №2 не заполнены необходимые поля');
}

// function isValidPosition(form, requiredFields) {
//     if (form.hasOwnProperty('title') && form.hasOwnProperty('price') && form.hasOwnProperty('discount')) 
//         return true 
//     else
//         return false
//   }

function isValidPosition(form, requiredFields) {
    const result = requiredFields.filter(fields => form[fields] === undefined); //Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
  
    return result.length === 0; //сравниваем идентичность 0; если таких элементов нет, то выводить true.


  };