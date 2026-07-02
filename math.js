// Takes in a number n and returns the double
function double(n){
    return 2 * n;
}

// Takes in a number n and returns the n squared
function square(n){
    return n * n;
}

// Takes in a number n and returns true if n is even; false otherwise
function isEven(n){
    return n % 2 == 0;
}

// Takes in a number n and returns its absolute value
function abs(n) {
    if(n < 0){
        n *= -1;
    }
    return n;
}

// Takes in a number n and returns n factorial
function factorial(n){
    if(n < 0)
        return undefined;

    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}