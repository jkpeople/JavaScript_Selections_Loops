let end = "100";

// Exercise 1
for (let num = 1; num <= end; num++) {
    console.log(num)
}

// Exercise 2
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}