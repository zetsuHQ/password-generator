const chars = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['!', '@', '#', '$', '%', '&']
];

// Includes 'min', but doesn't include 'max' on possible results.
function generates_rand(max, min = 0) {
    return Math.floor(Math.random() * max + min);
}

let length = document.getElementById("length");

length.addEventListener('input', (event) => {
    const value = parseInt(event.target.value);
    const min = parseInt(event.target.min)
    const max = parseInt(event.target.max)

    if (value < min) {
        event.target.value = min;
    } else if (value > max) {
        event.target.value = max;
    }
});

// Gets the value of each input.
function parser() {
    let parameters = []
    parameters.push(parseInt(length.value)); // Pushes the "length" parameter.

    const checkboxes = document.querySelectorAll('input.checkbox');
    for (let i = 0; i <= 3; i++) {
        if (checkboxes[i].checked) {
            parameters.push(chars[i]);
        }
    }

    return parameters;
}

function validate(parameters) {
    const password_length = parameters[0];
    console.log(typeof password_length);
    
    if (isNaN(password_length)) {
        window.alert("Please select your password's length.");
        return false;
    }

    if (parameters.length < 2) { // Because the first parameter will always fill the index "1", since "0" is mandatory. 
        window.alert("Please select at least one character type.");
        return false;
    } else return true;
}

function password_generator(parameters) {
    let new_password = "";
    for (let i = 0; i < parameters[0]; i++) {
        const new_char_type = parameters[generates_rand(parameters.length - 1) + 1];
        const new_char = new_char_type[generates_rand(new_char_type.length)];
        new_password += new_char;
    }

    return new_password;
}

let generate = document.getElementById("generate");

let output = document.getElementById("actual-output");

function exec() {
    exec: {
        const current_parameters = parser();
        const are_valid = validate(current_parameters);
        if (!are_valid) {
            break exec;
        }
        output.innerHTML = password_generator(current_parameters);
    }
}

generate.addEventListener('click', exec);