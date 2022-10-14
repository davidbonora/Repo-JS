// algorithms 3 - exercise 3

function alg2_ex8() {
    let minmax = prompt("Password length (min. 8, max. 16):");

    while (minmax < 8 || minmax > 16) {
        console.error("Incorrect answer, please input a valid one");
        prompt("Try again:");
        break;
    }
    let mayus = prompt("Do you want to include mayus? (y/n)");
   
    if (mayus == "y") {
        mayus = true;
    } else if (mayus == "n") {
        mayus = false;
    } else {
        while (mayus != "y" || mayus != "n") {
            console.error("Incorrect answer, please input a valid one");
            prompt("Try again:");
            break;
        }
    }

    let minus = prompt("Do you want to include minus? (y/n)");

    if (minus == "y") {
        minus = true;
    } else if (minus == "n") {
        minus = false;
    } else {
        while (minus != "y" || minus != "n") {
            console.error("Incorrect answer, please input a valid one");
            prompt("Try again:");
            break;
        }
    }

    let nums = prompt("Do you want to include numbers? (y/n)");

    if (nums == "y") {
        nums = true;
    } else if (nums == "n") {
        mayus = false;
    } else {
        while (mayus != "y" || mayus != "n") {
            console.error("Incorrect answer, please input a valid one");
            prompt("Try again:");
            break;
        }
    }

    let symb = prompt("Do you want to include symbols? (y/n)");

    if (mayus == "y") {
        mayus = true;
    } else if (mayus == "n") {
        mayus = false;
    } else {
        while (mayus != "y" || mayus != "n") {
            console.error("Incorrect answer, please input a valid one");
            prompt("Try again:");
            break;
        }
    }

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
// alg3_ex9();
