let end = "100";

// ignore evens
for (let num = 1; num <= end; num++) {
    console.log(num);
}

// FIZZBUZZ
for (let y = 1; y <= end; y++) {
    if (y % 15 == 0)
        // y % 3 == 0 && y % 5 == 0 -> y % 15 == 0
        console.log("FIZZBUZZ");
    } else if (y % 3 == 0) {
        console.log("FIZZ");
    } else if (y % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(y);
    }
}