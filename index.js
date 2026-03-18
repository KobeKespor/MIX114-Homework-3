// Oppgave 1.a
function splitLines(text) {
    return text.split("\n").filter(line =>line !== "")
}

// Oppgave 1.c
function sumPairs(numbers) {
    let list = document.getElementById("resultList");

    for (let i = 0; i < numbers.length - 1; i++) {
        let sum = numbers[i] + numbers[i + 1];

        let item = "<li>" + numbers[i] + "+" + numbers[i + 1] + "=" + sum + "</li>";
        list.innerHTML += item;
    }
}
