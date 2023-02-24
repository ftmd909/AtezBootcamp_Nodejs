const Factorial = (value) => {
    if (value < 0 || value === 0) {
        console.log("factorial value is 0 and cannot be less than 0!:",value);
    }
   else if(typeof value === "number" && value > 0){
        let output = 1;
        for(let i = 1 ; i <= value ; i++){
            output *= i;
        }
        console.log(output);
    }
    else{
        console.log("Please enter value in number type!:",value);
    }
}
Factorial(3);
Factorial(-8);
Factorial(0);
Factorial("Fatma");
