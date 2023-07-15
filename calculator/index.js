let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let result = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (eve) => {
    if (eve.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
      
    }
    else if (eve.target.innerHTML == "AC")
    {
        result = "";
        input.value = result
    }
    else if (eve.target.innerHTML == "DEL")
    {
        result = result.substring(0,result.length - 1);
        input.value = result;
    }

    else{
    result += eve.target.innerHTML;
    input.value = result;}

  });
});
