const sum = function(...numbers) {
    return numbers.reduce(function(prev, current) {
        return prev + current;
    });
};
console.log(sum(1, 2, 3, 4, 5, 6));

//2
const sum1 = function(num1, num2, num3) {
    return num1 + num2 + num3;
};
const cijfers = [1, 2, 3];
console.log(sum1(...cijfers));