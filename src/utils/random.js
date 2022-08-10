const createObj = (cantidad) => {
    let numbers = [];
    let numObj = {};

    for (let i = 0; i < cantidad; i++) {
        let number = Math.floor(Math.random() * 1000) + 1;
        numbers.push(number);
    };

    for (let num of numbers) {
        if (numObj[num]) {
            return numObj[num] += 1
        } else {
            return numObj[num] = 1
        };
    }; 
};

const createNums = (cant) => {
    if (Number(cant) > 0) {
        createObj(cant);
    } else {
        createObj(100000000);
    };  
}

process.on('finish', () => {
    process.send(createNums(Number(process.argv[2])));
});