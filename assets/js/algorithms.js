// algorithms 3 - exercise 3

function alg2_ex8() {
    let minmax = prompt("Password length (min. 8, max. 16):");
    while (minmax < 8 || minmax > 16) {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }

    let mayus = prompt("Do you want to include mayus? (y/n)");
    let minus = prompt("Do you want to include minus? (y/n)");
    let nums = prompt("Do you want to include numbers? (y/n)");
    let symb = prompt("Do you want to include symbols? (y/n)");

    if (
        mayus != "y" &&
        minus != "y" &&
        nums != "y" &&
        symb != "y" &&
        mayus != "n" &&
        minus != "n" &&
        nums != "n" &&
        symb != "n"
    ) {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
    }

    let arrayFromLowToHigh = (low, high) => {
        const array = [];
        for (let i = low; i <= high; i++) {
            array.push(i);
        }
        return array;
    };

    const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
    const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
    const NUMBER_CODES = arrayFromLowToHigh(48, 57);
    const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
        .concat(arrayFromLowToHigh(58, 64))
        .concat(arrayFromLowToHigh(91, 96))
        .concat(arrayFromLowToHigh(123, 126));

    const generatePassword = (minmax, mayus, nums, symb) => {
        let charCodes = [];
        if (mayus != "n") {
            charCodes = charCodes.concat(UPPERCASE_CODES);
        }
        if (minus != "n") {
            charCodes = charCodes.concat(LOWERCASE_CODES);
        }
        if (symb != "n") {
            charCodes = charCodes.concat(SYMBOL_CODES);
        }
        if (nums != "n") {
            charCodes = charCodes.concat(NUMBER_CODES);
        }

        charCodes.sort(function (a, b) {
            return b - a;
        });

        let minChar = charCodes[charCodes.length - 1];
        let maxChar = charCodes[0];

        function randomize(min, max) {
            let randomNumber =  Math.floor(Math.random() * (max - min + 1) + min);
            if (randomNumber >= min && randomNumber <= max) {
                return randomNumber;
            }
        }

        const passwordCharacters = [];
        for (let i = 0; i < minmax; i++) {
            let randomASCII = randomize(minChar, maxChar);
            if (charCodes.includes(randomASCII)) {
                passwordCharacters.push(String.fromCharCode(randomASCII));
            } else {
                i = i - 1;
                console.log("Getting a different number");
            }
        }
        return passwordCharacters.join("");
    };

    alert(generatePassword(minmax, mayus, nums, symb));
}

// algorithms 3 - exercise 3

function alg3_ex3(color) {
    i = [];
    for (let i = 0; i < 10; i++) {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        color = randomColor.toUpperCase();
        console.log("%cHello, World!", "color: " + color);
    }
}

// algorithms 3 - exercise 9

function alg3_ex9(whatFor, str) {
    function caesarsCipherEnc(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode + 3 <= 90 ? charCode + 3 : ((charCode + 3) % 90) + 64
            );
        }
    }

    function caesarsCipherDec(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode - 3 <= 90 ? charCode - 3 : ((charCode - 3) % 90) + 64
            );
        }
    }
    whatFor = prompt("What do you need to do, (e)ncrypt or (d)ecrypt?");
    str = prompt("Enter your phrase here: (All caps please)");
    switch (whatFor) {
        case "e":
            console.log(caesarsCipherEnc(str));
            break;
        case "d":
            console.log(caesarsCipherDec(str));
            break;
        default:
            break;
    }
}

// calls

alg2_ex8();
// alg3_ex3();
// alg3_.ex9();
