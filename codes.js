export const codesArr = [
  {
    name: "Creating star-sky",
    codeName: function () {
      a.styleText = `
      .sky {
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
}

.stars {
  background-color: white;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  animation-iteration-count: infinite;
}
      `
    }
  },
  {
    name: "Overlay",
    codeName: function () {
      c.styleText = `
      .overlay {
  position: relative;
  z-index: 1;
}

.overlay::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(34, 37, 51, 0.4);
  z-index: -1;
}
      `
    }
  },
  {
    name: "Simple calculator",
    codeName: function () {
      const num1 = document.querySelector(".num-1");
const operator = document.querySelector(".operator");
const num2 = document.querySelector(".num-2");
const btn = document.querySelector("button");
const result = document.querySelector("#result");


function calculate (num1, num2, operator) {
 let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
      case "-": 
      result = num1 - num2;
      break;
      case "*": 
      result = num1 * num2;
      break;
      case "/": 
      result = num1 / num2;
      break;
  }
  return result;
}


btn.addEventListener("click", function () {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const operatorValue = operator.value;

  const resultValue = calculate(num1Value, num2Value, operatorValue);

  result.innerHTML = resultValue;
})
    }
  },
  {
    name: "Simple Greeting-function",
    codeName: function greeting (name) {
      let askName = "";
    
      switch (name) {
        case "Jaku":
          askName = "Салем алейкум Жаку байке, кандайсыз?";
          break;
          
          case "Saltanat":
            askName = "Hello sister";
            break;
    
            case "Burul":
              askName = "Мама маанилуу нерсе айтаыйынбы.?"
              document.write("Мама маанилуу нерсе айтаыйынбы.?");
              break;
    
              case "Kuba":
                askName = "Hello my creator";
                break;
    
            default:
              askName = `Hello ${name} i am Kuba`;
      }
      return askName;
    
      alert(greeting(prompt("What is your name?")))
    }
    
  },
  {
    name: "Sort()",
    codeName: function () {
      const sortedWords = words.sort((a, b) => {
        if(a.word > b.word) {
          return 1;
        } else if(a.word < b.word) {
            return -1;
        }
      })



 const key = 'title'; // ключ, по которому будем сортировать
 const sorted = users.sort((user1, user2) => user1[key] > user2[key] ? 1 : -1);
    }
  },
  {
    name: "ArrInclude-function",
    codeName: function () {
      // функцию, которая определяет, есть в массиве 
      // элемент с 
      // заданным текстом или нет. Функция первым параметром 
      // должна
      //  принимать текст элемента, а вторым - массив, в 
      //  котором 
      //  делается
      //  поиск. Функция должна возвращать **`true`** или **`false`
   
   function hasName(name, array) {
     if (array.includes(name)) {
       console.log("true");
     } else {
       console.log("false");
     };
   };
   
   let result = ["Sadyr", "Manas", "Ilon"];
   
   hasName("Sadyr", result);
   hasName("Manas", result);
   hasName("Mark", result);
   
    }
  },
  {
    name: "GreetForTime-function",
    codeName: function greetForTime () {

      const time = new Date();
    const hour = time.getHours();
    
    const titleTime = document.querySelector(".time");
    titleTime.style.cssText = `
    color: blue;
    text-align: center;
    `;
      // if (hour>=04 && hour<=11) {
      //   titleTime.innerText = "Good morning";
      // } else if (hour>=11 && hour<=15) {
      //   titleTime.innerText = "Good afternoon";
      // } else if (hour>= 15 && hour<=23) {
      //   titleTime.innerText = "Good evening";
      // } else {
      //   titleTime.innerText = "Good night";
      // }
      // greet();
    }
  },
  {
    name: "Form-fieldset",
    codeName: function () {
//       <form action="https://freecatphotoapp.com/submit-cat-photo">
        
//         <fieldset>
// <legend>Is your cat an indoor or outdoor cat?</legend>
//         <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
//         <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
//       </fieldset>
//         <input type="text" name="catphotourl" placeholder="cat photo URL" required>
//         <button type="submit">Submit</button>
//       </form>
    }
  },
  {
    name: "Accardeon-function",
    codeName: function () {
    //   window.addEventListener("load", function () {
    //     const title = document.querySelectorAll(".accordeon__title");
      
    //     for(let i = 0; i < title.length; i++) {
    //       title[i].addEventListener("click", function () {
    //         this.classList.toggle("minus");
    //         this.nextElementSibling.classList.toggle("text");
    //         this.nextElementSibling.classList.toggle("text-underline");
    //       })
    //     }
      
    //   })
     }
  },
  {
    name: "Accardeon-function-2",
    codeName: function () {
      // const englishWord = document.querySelectorAll(".english-word");
       
      //  englishWord.forEach((title) => {
      //   title.addEventListener("click", () => {
      //     title.classList.toggle("minus-icon");
      //     title.nextElementSibling.classList.toggle("translating--show");
      //   })
      //  }); 
    }
  },
  {
    name: "Animated-text",
    codeName: function () {   
//script src="https://unpkg.com/ityped@1.0.2"
//script
//     const animatedText = document.querySelector(".animated-text__strong");

//     ityped.init(animatedText, {
//       showCursor: true,
//       strings: ["Coding your future", "Step by step"],
//       backDelay: 600,
//       backSpeed: 100,
//       typeSpeed: 200,
//     });
//   script
    }
  },
  {
    name: "YouTube logo with CSS",
    codeName: function () {
      // .logo {
      //   width: 70px;
      //   height: 50px;
      //   background-color: red;
      //   border-radius: 60% / 9%;
      //   position: relative;
      //   display: inline-block;
      // }
      
      // .logo::before {
      //   position: absolute;
      //   content: "";
      //   top: 7%;
      //   bottom: 7%;
      //   left: -9.5%;
      //   right: -9.5%;
      //   background-color: red;
      //   border-radius: 9% / 50%;
      // }
      
      // .logo::after {
      //   position: absolute;
      //   content: "";
      //   border-top: 14px solid transparent;
      //     border-bottom: 11px solid transparent;
      //     border-left: 20px solid #fff;
      //     left: 27px;
      //     top: 11px;
      // }
    }
  },
  {
    name: "Reverse number",
    codeName: function () {
      // function reverseNumber (number) {
      //  number = prompt("Напишите трехзначное число");
      // let a = number.split("").reverse().join("");
      // let intoNum = Number(a) + 2;
      
      // alert(intoNum);
      // }
      
      
      // reverseNumber();
      //                    // different example
      
      // let a = +prompt("Enter a value");
      // //     let sum = 0;
      // //     while(a > 0)
      // //     {
      // //       b = a % 10;
      // //       sum = sum * 10 + b;
      // //       a = Math.floor(a / 10);
      // //     }
      // //     alert(sum);
      
      
      // let askNum = +prompt("Напишите трехзначное число");
      // let forReverse = 0;
      
      // while(askNum > 0) {
      //    let num = askNum % 10;
      //    forReverse = forReverse * 10 + num;
      //    askNum = Math.floor(askNum / 10);
      
      //   }
      //   alert(forReverse);
    }
  },
  {
    name: "Запросите у пользователя радиус окружности и выведите result",
    codeName: function () {
      // let getNumerR = Number(prompt("Напишите радиус окружности"));
// const numericP = 3.14;
// let numerOfR = getNumerR * getNumerR;
// let resultOfS = numericP * numerOfR;
// let resultOfS2 = Math.floor(resultOfS);

// alert("Площадь " + resultOfS2);
    }
  },
  {
    name: "Counter distance",
    codeName: function () {
      
// let askDistance = Number(prompt("Напишите расстояние в км между двумя городами"));
// let askTime = Number(prompt("Напишите за сколько часов вы хотите добраться"));
// let calc = askDistance / askTime;
// alert("Чтобы преодолеть это расстояние за " + askTime + " часа придётся ехать со скоростью " + calc + "км в час.")

    }
  },
  {
    name: "Расчет обьем флешки",
    codeName: function () {
      // let askForGb = Number(prompt("Укажите объем вашей флешки в Гб."));
// const gbIntoMb = 1024;
// const mbForGb = 820;
// const result1 = askForGb * gbIntoMb / mbForGb;
// const result2 = Math.floor(result1);

// alert("В вашу флешку помещается " + result2 + " файлов размером в 820 Мб");
    }
  },
  {
    name: "Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется",
    codeName: function () {
      // let amountOfMoney = Number(prompt("Введите сумму денег"));
// let chocolatePrice = Number(prompt("Введите цену одной шоколадки."));

// if(amountOfMoney > chocolatePrice) {
//   const forAmountChocolate = Math.floor(amountOfMoney / chocolatePrice);
//   const forAmountPrice = forAmountChocolate * chocolatePrice;
//   const forChange = amountOfMoney - forAmountPrice;

//   alert("На эту сумму вы можете купить " + forAmountChocolate + " шоколадку и у вас остается " + forChange + " сдачи");
// }else {
//   alert("У вас не хватает денег");
// }
    }
  },
  {
    name: "Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.",
    codeName: function () {
  //     let result = Math.floor(askDistance / averageSpeed);
  // for(let hour = 1; hour < result; hour++) {
  //   if(hour % 4 === 0) {
  //      result++;
  //      alert(result);
  //   }
    }
  },
  {
    name: "add time to time:",
    codeName: function () {
//       var CurrentTime = new Date();
//     CurrentTime.setMinutes(CurrentTime.getMinutes() + 15);
//     console.log(CurrentTime.getHours()+":"+CurrentTime.getMinutes());

// DIFFERENT EXAMPLE:

//  let time = new Date();
//   time.setHours(time.getHours() + 2);
//   let min = time.getMinutes();
//   let sec = time.getSeconds();

//   document.write(
//     `<h2 style="color:red; font-size:44px; text-align:center;">${time .getHours()}:${min}:${sec}</h2>
//     <h2 style="color:green; text-align:center;">Add 2 hours</h2>`
//   )
    }
  },
  { 
    name: "Таблица умнож",
    codeName: function () {
      // for(let i = 2; i <= 9; i += 1) {
      //   for(let j = 1; j <= 10; j += 1) {
      //     console.log(
      //       `${i}x${j}=${i*j}`
      //     );
      //   }
      // }
    }
  },
  {
    name: "Удаление повтор-ся элементов из массива",
    codeName: function () {
//       const numbers = [-1, 3, 9, -9, 100, -100, 100, 100];
// const newSet = new Set(numbers); // => Set(6) { -1, 3, 9, -9, 100, -100 }
// //new Set создаёт новую коллекцию, а нам нужен массив
// //воспользуемся методом Array.from(). Получаем:
// const uni = Array.from(newSet); // => [ -1, 3, 9, -9, 100, -100 ]

// console.log(uni)

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// //alert( unique(strings) ); // кришна, харе, :-O
    }
  },
  {
    name: "Удаление повтор-ся элементов из массива обьектов",
    codeName: function () {
//       const items = [{ id: 1 }, { id: 2 }, { id: 1 }];
// // Применяем магию JavaScript 🧙‍♂️
// const unique = items.filter((obj, idx, arr) => 
//   idx === arr.findIndex((t) => t.id === obj.id));
// console.log(unique); // Вывод: [{ id: 1 }, { id: 2 }]
// // Клонирование побеждено 👯‍♂️
    }
  },
  {
    name: "Создать объект, описывающий время ",
    codeName: function () {
      // Original time

// function showTime () {
//   let date = new Date;
//   let hours = date.getHours(); 
//   let min = date.getMinutes(); 
//   let sec = date.getSeconds();

//   const origin = document.querySelector(".original-time");
//   origin.innerHTML = `<h2 class="time">${hours}:${min}:${sec}</h2>
//     <h2 class="title">Original time</h2>`
// }

// setInterval(showTime, 1000);

// //getSeconds + 30seconds

// function addSecondsToTime () {
//   let time = new Date;
//   time.setSeconds(time.getSeconds() + 30)
//   let hours = time.getHours();
//   let min = time.getMinutes();
  
//   const second = document.querySelector(".second");
//   second.innerHTML = `<h2 class="time">${hours}:${min}:${time.getSeconds()}</h2>
//     <h2 class="title">Add 30 seconds</h2>`
// }

// setInterval(addSecondsToTime, 1000);


// // GetMinutes + 30min

// function addMin () {
//   let time = new Date();
//   time.setMinutes(time.getMinutes() + 30);
//   let hours = time.getHours();
//   let sec = time.getSeconds();

//   const minute = document.querySelector(".minute");
//   minute.innerHTML =  `<h2 class="time">${hours}:${time.getMinutes()}:${sec}</h2>
//     <h2 class="title">Add 30 minutes</h2>`
// }

// setInterval(addMin, 1000);


// //getHours + 2hours

// function addHours () {
//   let time = new Date();
//   time.setHours(time.getHours() + 2);
//   let min = time.getMinutes();
//   let sec = time.getSeconds();

//   const hour = document.querySelector(".hour");
//   hour.innerHTML = `<h2 class="time">${time .getHours()}:${min}:${sec}</h2>
//     <h2 class="title">Add 2 hours</h2>`
// }

// setInterval(addHours, 1000);
    }
  },
  {
    name: "Simple pagination",
    codeName: function () {
//       const link = document.querySelectorAll(".link");

// link.forEach(l => {
//   l.addEventListener("click", pagination);
// });

// let currentValue = 1;
// const valueOfFirstBtn = document.querySelector(".first-value");
// const valueOfLastBtn = document.querySelector(".last-value");

//  function pagination (event) {
//   link.forEach(l => {
//     l.classList.remove("active-link");
//   });
//   event.target.classList.add("active-link");
//   currentValue = event.target.value;
//   getData(currentValue);
//   const card = document.querySelectorAll(".card");
//   card.forEach((element) => {
//     element.remove();
//   })
// }

// //prev-btn
// const prev = document.querySelector(".prev");
// prev.addEventListener("click", () => {
// if(currentValue > 1) {
//   link.forEach(l => {
//     l.classList.remove("active-link");
//   });
//   currentValue--;
//   link[currentValue-1].classList.add("active-link");
// }
// })

// //next-btn
// const next = document.querySelector(".next");
// next.addEventListener("click", () => {
// if(currentValue < 5) {
//   link.forEach(l => {
//     l.classList.remove("active-link");
//   });
//   currentValue++;
//   link[currentValue-1].classList.add("active-link");
// }
// })

// //prev-pages-btn
// const prevPagesBtn = document.querySelector(".prev-pages-btn");
//  prevPagesBtn.addEventListener("click", prevPage);

// function prevPage () {
//   if(valueOfFirstBtn.value !== 1) {
//     link.forEach(l => {
//       l.classList.remove("active-link");
//       l.value--;
//       l.innerText--;
//     });
//   }
// }

// //next-pages-btn
// const nextPagesBtn = document.querySelector(".next-pages-btn");
// nextPagesBtn.addEventListener("click", () => {
//   if(valueOfLastBtn.value !== 42) {
//     link.forEach(l => {
//       l.classList.remove("active-link");
//       l.value++;
//       l.innerText++;
//     });
//   }
// });
    }
  },
  {
    name: "Popup show/hide",
    codeName: `
    //popup hide
    opacity: 0;
  transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
  transition: all 0.8s ease 0s;
  
 .popup--show {
  opacity: 1;
  transform: perspective(600px) translate(0px, 0%) rotateX(0deg);
}
  `
  }                          
]