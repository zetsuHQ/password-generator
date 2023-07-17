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

let length_element = document.getElementById("length");

// Blocks non-numeric characters on length input.
length_element.addEventListener('input', (event) => {
    const test = parseInt(event.target.value) + 0;
    if (isNaN(test)) {
        event.target.value = "";
    }
});

// Gets the value of each input.
function parser() {
    let parameters = [];
    let length = parseInt(length_element.value);
    if (length < length_element.min) {
        length = length_element.min;
    } else if (length > length_element.max) {
        length = length_element.max;
    }
    parameters.push(length);

    const checkboxes = document.querySelectorAll('input.checkbox');
    for (let i = 0; i <= 3; i++) {
        if (checkboxes[i].checked) {
            parameters.push(chars[i]);
        }
    }

    return parameters;
}

function check_empty(parameters) {
    const password_length = parameters[0];
    
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

let generate = document.getElementById("generate")

let output = document.getElementById("actual-output");
let output_box = document.getElementById("output-box")

function exec() {
    exec: {
        const current_parameters = parser();
        const are_valid = check_empty(current_parameters);
        if (!are_valid) {
            break exec;
        }
        output.innerHTML = password_generator(current_parameters);
    }
}

generate.addEventListener('click', exec);