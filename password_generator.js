const chars = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['!', '@', '#', '$', '%', '&']
]

// Includes 'min', but doesn't include 'max' on possible results.
function generates_rand(max, min = 0) {
    return Math.floor(Math.random() * max + min)
}

function random_index(array) {
    return generates_rand(array.length)
}

function validate(parameters) {
    const length = parameters[0]
    if (length === "") {
        window.alert("Please select your password's length.")
        return false
    } else if (parameters.length < 2) {
        window.alert("Please select at least one character type.")
        return false
    } else return true
}

// Gets the value of each input, being
function parser(parameters) {
    const length = document.getElementById("length").value
    parameters.push(document.getElementById("length").value)
    if (document.getElementById("contains-letters").checked) {
        parameters.push(chars[0])
    }
    if (document.getElementById("contains-caps").checked) {
        parameters.push(chars[1])
    }
    if (document.getElementById("contains-numbers").checked) {
        parameters.push(chars[2])
    }
    if (document.getElementById("contains-specials").checked) {
        parameters.push(chars[3])
    }

}

function password_generator(parameters) {
    let new_password = ""
    let new_char_type
    let new_char = ""
    for (i = 0; i < parameters[0]; i++) {
        new_char_type = chars[generates_rand]
    }
}

let generate = document.getElementById("generate")

let output = document.getElementById("actual-output")

function exec() {
    exec: {
        const parameters = []
        parser(parameters)
        const are_valid = validate(parameters)
        if (!are_valid) {
            break exec
        }
        console.log(parameters)
    }
}

generate.addEventListener('click', exec)