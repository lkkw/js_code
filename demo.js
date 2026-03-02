// const fruits = ['apple', 'banana', 'cherry'];
//
// fruits.forEach((fruit,index,array) => {
//     console.log(`Fruit at index ${index} is ${fruit}`);
//     console.log(`Current array: ${array}`);
// });

// 1. & 2. 使用嵌套解构提取 username, age 以及 skills 的第一个元素并重命名
// const {
//     data: {
//         username,
//         age,
//         skills: [topSkill]
//     }
// } = response;
//
// // 3. 使用展开运算符创建新对象并添加新字段
// const userInfo = {
//     ...response.data,
//     source: 'Web'
// };
//
// // --- 测试输出 ---
// console.log(username, age); // CaptainJS 25
// console.log(topSkill);       // Vue
// console.log(userInfo);       // { username: 'CaptainJS', age: 25, skills: [...], source: 'Web' }
//
// const myName = 'likangkang';
// let battery = 80;
// console.log('我用了一会手机，电量掉了 15%。');
// battery -= 15;
//
//
// console.log(`我是${myName},我现在的手机电量是 ${battery}.`);

// const calculatePrice = (price, tax = 0.1) => {
//     return price * tax + price;
// }
//
// console.log(calculatePrice(100));
// console.log(calculatePrice(100, 0.2));

// const profile = {
//     name: "kangarooing",
//     role: "student",
//     score: 90
// }
//
// const {name, score} = profile;
//
// console.log(`Name: ${name}, Score: ${score}`);
//
// const newProfile = {
//     ...profile,
//     score: 100,
//     level: "A"
// }
// console.log(newProfile);

// const students = [
//     {id: 1, name: "Tony", score: 50},
//     {id: 2, name: "Jack", score: 90},
//     {id: 3, name: "Alice", score: 85}
// ];
//
// const scoreMore60 = students.filter(student => {
//     return student.score > 60
// })
// console.log(scoreMore60);
// const login = (username) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`用户 ${username} 登录成功！`);
//         }, 2000); // 假装需要 2 秒钟
//     });
// };
//
// const startSystem = async () => {
//     console.log("系统启动中");
//     const result = await login("Likangkang");
//     console.log(result);
//     console.log('欢迎进入首页')
// }
// startSystem();

// const response = {
//     settings: {
//         nullValue: null,
//         height: 0,            // 注意这个 0
//         animationDuration: 0, // 注意这个 0
//         headerText: null        // 注意这个空字符串
//     },
//     user: {
//         name: "Kang"
//     }
// };
//
// // const address = response.user?.details?.address;
// // console.log(address);
// // const duration = response.settings?.animationDuration;
// // console.log(duration);
// const header = response.settings.headerText ?? "default";
// console.log(header);

// let a = true;
// let b = undefined;
// console.log(a ?? b); // true

// const data = {
//     name: "Kang",
//     age: 25,
//     skills: ["JavaScript", "Vue", "React"]
// }
// console.log(data);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     name:12,
//     true:false,
//     NaN:undefined,
//     null:null,
//     undefined:NaN
// };
// console.log(obj);

// let year = 2026;
// if ((year % 4 === 0, year % 100 !== 0 || year % 400 === 0)) {
//   console.log(`${year} 是闰年`);
// } else {
//   console.log(`${year} 不是闰年`);
// }

// for (let i = 0; i < 79;i++) {
//   console.log(i);
// }

// const engineer = {
//   name: "likangkang",
//   tasks: ["电控测试", "协议分析"],
//   showTasks: function () {
//     this.tasks.forEach((task) => {
//       console.log(`${this.name}正在处理:${task}`);
//     });
//   },
// };
// engineer.showTasks();

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   stydy() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student = new Student("likangkang");
// student.stydy();

// let dog = {
//     name: "旺财",
//     bark: function() {
//         console.log(this.name + " 汪汪叫！");
//     }
// };

// let cat = {
//     name: "喵喵"
// };

// // 重点：我把狗的叫声赋值给了猫
// cat.shout = dog.bark;

// cat.shout(); // 这里会打印出什么？

// 函数声明，会被提升
console.log(sum(1, 2)); // OK
function sum(a, b) {
  return a + b;
}

// 函数表达式，不会被提升
const sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(1, 2));
