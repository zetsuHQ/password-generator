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

function exec() {
    const output = document.getElementById("output-box")
    output.innerHTML = generates_rand(1, 5)
}

const generate = document.getElementById("generate")
generate.addEventListener('click', exec)

