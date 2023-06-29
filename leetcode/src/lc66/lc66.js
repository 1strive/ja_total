const plusOne = (digits) => {
    let i = digits.length - 1
    while (i >= 0) {
        digits[i] = digits[i] + 1
        if (digits[i] < 10) {
            break
        } else {
            digits[i] = 0
        }
        i--
    }
    return digits
}

const digits = [6, 1, 4, 3, 9]
const ans = plusOne(digits)
console.log(ans);
