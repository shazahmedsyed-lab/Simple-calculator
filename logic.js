let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let expression = "";

btn.forEach((btn)=>{
btn.addEventListener("click",()=>{
    
    if(btn.innerText==="AC"||btn.innerText==="CE"){
        expression="";
        display.innerText="0"
    }
  else if (btn.innerText === "=") {
            try {
                expression = eval(expression).toString();
                display.innerText = expression;
            } catch {
                display.innerText = "Error";
                expression = "";
            }
        }
    else{
        expression+=btn.innerText;
        display.innerText=expression;
    }
})
})

