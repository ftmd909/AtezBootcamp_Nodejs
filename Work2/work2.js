const NoLimit = (...args) => {
    let output = 1;
    args.forEach((i) =>
    {
        output *= i;
    });

    console.log(output);
};

NoLimit(4,8,1)