const chars = {
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specials: ['!', '@', '#', '$', '%', '&']
}

const is_checked = (input) => {
    if (input === "on") {
        return true
    } else {
        return false
    }
}

const generates_random_num = (range) => {
    return Math.floor(Math.random() * range + 1)
}

function exec() {
    console.log("funcionou")
}

const generate = document.getElementById('generate')

