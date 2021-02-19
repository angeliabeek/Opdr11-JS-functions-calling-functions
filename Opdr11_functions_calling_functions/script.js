// Hey kiddo
const adultCheck = function (age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};
const greeting = function (age) {
    const check = adultCheck(age);
    if (check === true) {
        return "Hello there";
    }
    else {
        return "Hey kiddo";
    }
};
console.log(greeting(30));
console.log(greeting(8));
console.log(greeting(65));
console.log(greeting(18));

// VAT calculations
// VAT excercise 1
const vatCalculator = function (vatPercentage) {
    if (vatPercentage === 21) {
        return 1 + 0.21;
    }
    else if (vatPercentage === 9) {
        return 1 + 0.09;
    }
    else {
        return 1;
    }
};
const priceIncludingVat = function (basePrice, vatPercentage) {
    const vat = vatCalculator(vatPercentage);
    const totalPrice = basePrice * vat;
    return totalPrice;
};
console.log(priceIncludingVat(10, 21));
console.log(priceIncludingVat(10, 9));
console.log(priceIncludingVat(25, 21));
console.log(priceIncludingVat(15, 0));

// VAT excercise 2
// Prijzen afgerond op 2 decimalen
const priceWithoutVat = function (priceIncludingVat, vatPercentage) {
    const vat = vatCalculator(vatPercentage);
    const base = priceIncludingVat / vat;
    const price = Math.round(base * 100) / 100;
    return price;
};
const priceAndVat = function (priceIncludingVat, vatPercentage) {
    const basePrice = priceWithoutVat(priceIncludingVat, vatPercentage);
    const vatAmountComplete = priceIncludingVat - basePrice;
    const vatAmount = Math.round(vatAmountComplete * 100) / 100;
    const one = [basePrice, vatAmount];
    return one;
};
console.log(priceAndVat(12.1, 21));
console.log(priceAndVat(9.81, 9));
console.log(priceAndVat(239, 21));
console.log(priceAndVat(6100, 21));
console.log(priceAndVat(14.5, 0));