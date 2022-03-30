"use srtrict";

const { Namespaces } = require("@vue/compiler-core");

const employers = ["АртеМ", "максим", "Владимир", "сергей", "НикиТа", "евГений", " Дарья", " ", "виктория ", "ЕкаТерина", "", " Андрей ", "КИРИЛЛ"];
const nameCourse = "Базовый React";
// const command = [];
// for (let i = 0; i < employers.length; i++) {
//     if (employers[i].length > 0 && employers[i].trim() != "") {
//         command.push(employers[i]);
//     }
// }
// for (let i = 0; i < command.length; i++) {
//     command[i] = command[i].toLowerCase().trim();
//     command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }

const comand = employers.filter((name) => name.trim().length).map((name) => name.trim().charAt(0).toUpperCase() + name.trim().substring(1).toLowerCase());

const data = {
    cash: [3, 8, 3],
    react: ["JSX", "components", "props", "state", "hooks"],
    add: ["styled-components", "firebase"],
};
const {
    cash,
    react,
    react: [first],
    add,
} = data;

// calcCash = (own) => {
//     own = own || 0;
//     const everyCash = [0, data.cash];
// Array.prototype.slice.call(arguments);
//     let total = own;
//     for (let i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// };
const calcCash = (everyCash) => everyCash.reduce((prev, curr) => prev + curr);

const lesson = calcCash(cash);

function makeBusiness(director, allModule, gang, course, teacher = "Максим") {
    const sumTech = [...react, ...add, "и другие"];
    console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}.Всего уроков:  ${allModule}. 
    Команда Академии: ${gang}`);
    console.log(`Первое что изучим будет  ${data.react[0]} Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим:`);
    console.log.apply(null, sumTech);
}

makeBusiness.apply(null, ["Артем", null, lesson, command, nameCourse]);