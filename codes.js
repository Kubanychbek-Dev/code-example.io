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
    name: "arrInclude-function",
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
    name: "greetForTime-function",
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
  }
]
