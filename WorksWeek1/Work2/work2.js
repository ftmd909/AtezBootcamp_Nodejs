const NoLimit = (...args) => {
    if((arg => typeof arg == "number")){
        let output = 1;
        args.forEach((i) =>
        {
            output *= i;
        });

        console.log(output);
    }
    else{
        console.log("Please enter value in number type!:",args);
    }
};
