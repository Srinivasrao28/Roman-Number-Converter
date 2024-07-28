const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const input = document.getElementById("input-text");
const result = document.getElementById("popup-text");

const romanNumeralMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
];

const convertRoman = (num) => {
    let roman = "";
    for (let i = 0; i < romanNumeralMap.length; i++){
        while (num >= romanNumeralMap[i].value) {
            roman += romanNumeralMap[i].numeral;
            num -= romanNumeralMap[i].value;
        }
    }
    return roman;
}

const validateInput = () => {
    const num = parseInt(input.value);
    if (isNaN(num) || num <= 0 || num > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
    } else {
        result.innerText = convertRoman(num);
    }
}

const hideResult = () => {
    const popup = document.querySelector(".popup");
    popup.classList.add("hide");
    input.value = "";
    result.innerText = "";
}

const showResult = () => {
    const popup = document.querySelector(".popup");
    popup.classList.remove("hide");
    validateInput();
}

btn_1.addEventListener('click', showResult);
btn_2.addEventListener('click', hideResult);