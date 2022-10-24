// Задание 'a'

const data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', '2000']

function func(emp){
    let [name, surname, department, position, salary] = emp

     console.log(...emp)
}
func(data)







// Задание 'b'

// let data = ['Иван', 'Иванов', 'Отдел разработки', 'Программист', '2000']

// function func(emp){

//     let [name, surname, info] = emp
    
//     console.log(emp)
// }
// func(data)







// Задание 'c'

// const data = ['Иванов', 'Иванов', 'Отдел разработки']

// function func(emp) {
//     let [name, surname, info] = emp

//     let position
//     if (emp[3] !== undefined) {
//         position = emp[3]
//     }else{
//         position = 'Junior'
//     }
//     console.log(...emp, position);
// }
// func(data)





// Задание "d"

// const data = {
//     color: 'red',
//     width: 400,
//     height: 500
// }
// function func(options) {
//     let {color, width, height} = options

//     console.log(color, width, height);
// }
// func(data)
