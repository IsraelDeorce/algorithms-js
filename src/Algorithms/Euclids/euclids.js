/*
 Euclid's algorithm, is an efficient method for computing the greatest
 common divisor (GCD) of two integers (numbers), the largest number
 that divides them both without a remainder.
*/

function gcd(a, b) {
    let r = a % b;
    while (r > 0) {
        a = b
        b = r
        r = a % b
    }
    return b
}

exports.euclids = function({args}) {
    console.log(`Running Euclids Algorithm for ${args[0]}, and ${args[1]}...`)
    const a = parseInt(args[0])
    const b = parseInt(args[1])
    if (a > b) return gcd(a, b)
    else return gcd(b, a)
}
