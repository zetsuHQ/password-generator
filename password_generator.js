const chars = {
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specials: ['!', '@', '#', '$', '%', '&']
}

function generates_rand(min = 0, max) {
    return Math.floor(Math.random() * max + min)
}

let current_parameters = {}

function get_parameters() {
    if (document.getElementById("contains-letters").checked) {
        current_parameters = chars.letters
    }
    if (document.getElementById("contains-numbers").checked) {
        current_parameters = chars.numbers
    }
    if (document.getElementById("contains-specials").checked) {
        current_parameters = chars.specials
    }
}

let char_amount = document.getElementById("char-amount").value

function password_generator(){
    for (let i = 0; i < char_amount; i++) {
        let new_char_type = current_parameters[generates_rand(Object.keys(current_parameters).length)]
        let new_char = new_char_type[generates_rand(new_char_type.length)]
    }
}

function exec() {
    const output = document.getElementById("output-box")
    output.innerHTML = char_amount
}

const generate = document.getElementById("generate")
generate.addEventListener('click', exec)

