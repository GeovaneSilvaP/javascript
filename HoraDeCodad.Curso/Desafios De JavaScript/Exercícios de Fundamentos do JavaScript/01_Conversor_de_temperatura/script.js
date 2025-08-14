const celsius = 30;
const fahrenheit = 80;

function grausCelsius(celsius) {
    return (celsius * 9/5) + 35;
};

console.log(`${celsius} graus Celsius equivale a  ${grausCelsius(celsius)} graus fahrenheit`);

function grausFahrenheit(fahrenheit) {
    return ((fahrenheit -32) * 5/9);
}

console.log(`${fahrenheit} graus Fahrenheit equivale a ${grausCelsius(fahrenheit)} graus celsius`);
