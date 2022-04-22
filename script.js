
function str(String) {

    if (typeof (String) == "string") {
        console.log("GOOD")
    } else console.log("Это не строка")
if (String.length >= 5) {
    console.log("GOOD")
} else console.log("Минимум 5 символов в строке")
    if (String.length <= 60) {
        console.log("GOOD")
    } else {
        console.log("Максимум 64 символа в строке")
    }
    if (!/[a-zA-Zа-яА-Я]/.test(String)) {
        console.log("В строке должны быть буквы")
    } else {
        console.log("GOOD")
    }
    if (/[A-ZА-Я]/.test(String)) {
    } else {
        console.log("Должна быть хотя бы одна буква в верхнем регистре")
    }

    if (/[0-9]/.test(String)) {
        console.log("GOOD")
    } else console.log("Должна быть хотя бы одна цифра")

    if (String.includes("@"))
        console.log("GOOD")
    else {
        console.log("Где @?")
    }
    if (String.length) {
        console.log("GOOD")
    } else {
        console.log("Строка не должна быть пустой")
    }
    if (typeof (String) == "string" && String.length >= 5 && String.length <= 60 && /[a-zA-Zа-яА-Я]/.test(String) && /[A-ZА-Я]/.test(String) && /[0-9]/.test(String)
        && String.includes("@") && String.length) {
        console.log("ACCEPT")
    } else {
        console.log("Critical Error")
    }
}


console.log(str("Hello12@"))






