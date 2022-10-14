
// algorithms 3 - exercise 3


// algorithms 3 - exercise 3

function alg3_ex3(color) {
    i = [];
    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        color = randomColor.toUpperCase();
        console.log("%cHello, World!", "color: "+ color);
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
    };

    function caesarsCipherDec(str) {
        str = str.toUpperCase();
        return str.replace(/[A-Z]/g, cc3);

        function cc3(correspondance) {
            const charCode = correspondance.charCodeAt();
            return String.fromCharCode(
                charCode - 3 <= 90 ? charCode - 3 : ((charCode - 3) % 90) + 64
            );
        }
    };
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

// alg2_ex8();
alg3_ex3();
// alg3_ex9();
