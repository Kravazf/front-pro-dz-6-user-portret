yearOfBirth = parseFloat(prompt('Enter the year of birth'));
theCity = prompt('In which city do you live');
kindOfSport = prompt('What is your favorite sport');
ageOfTheUser = new Date().getFullYear() - yearOfBirth;
if (theCity.toLowerCase() === "kyiv") {
    alert(`
    Your age : ${ageOfTheUser}
    "You live in the capital of Ukraine."
    `)
} else if (theCity.toLowerCase() === 'washington') {
    alert(`
    Your age : ${ageOfTheUser}
    "You live in the capital of USA."
    `)
} else if (theCity.toLowerCase() === 'london') {
    alert(`
    Your age : ${ageOfTheUser}
    "You live in the capital of the United Kingdom."
    `)
} else {
    alert(`
    Your age : ${ageOfTheUser}
    "You live in ${theCity[0].toUpperCase() + theCity.slice(1)}."
    `)
}










