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
    } else if (parameters.length < 2) { // Because the first parameter will always fill the index "1", since "0" is mandatory. 
        window.alert("Please select at least one character type.")
        return false
    } else return true
}

// Gets the value of each input.
function parser(parameters) {
    const length = parseInt(document.getElementById("length").value)
    parameters.push(length)
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

function password_generator(parameters) { // Tem algo errado aqui
    let new_password = ""
    for (let i = 0; i < parameters[0]; i++) {
        const new_char_type = chars[generates_rand(parameters.length - 1)]
        const new_char = new_char_type[generates_rand(new_char_type.length)]
        new_password += new_char
    }

    return new_password
}

let generate = document.getElementById("generate")

let output = document.getElementById("actual-output")

function exec() {
    exec: {
        let parameters = []
        parser(parameters)
        const are_valid = validate(parameters)
        if (!are_valid) {
            break exec
        }
        output.innerHTML = password_generator(parameters)
    }
}

generate.addEventListener('click', exec)