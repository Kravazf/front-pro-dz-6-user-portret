yearOfBirth = parseFloat(prompt('Enter the year of birth'));

if (isNaN(yearOfBirth)) {
  alert(`
    "Шкода, що Ви не захотіли ввести свій рік народження"
  `);
} else {
  theCity = prompt('In which city do you live?');

  if (theCity === null) {
    alert(`
      "Шкода, що Ви не захотіли ввести назву міста"
    `)
  } else {
    kindOfSport = prompt('What is your favorite sport?');

    if (kindOfSport === null) {
      alert(`
        "Шкода, що Ви не захотіли ввести свій улюблений вид спорту"
      `);
    } else if (kindOfSport.toLowerCase() === "football") {
      ageOfTheUser = new Date().getFullYear() - yearOfBirth;
      athlete = "Мессі";
      alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of Ukraine."  
          "Круто! Хочеш стати ${athlete}?"
        `)
    } else if (kindOfSport.toLowerCase() === "box") {
      ageOfTheUser = new Date().getFullYear() - yearOfBirth;
      athlete = "Усік";
      alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of Ukraine."  
          "Круто! Хочеш стати як ${athlete}?"
        `)
    } else if (kindOfSport.toLowerCase() === "tennis") {
      ageOfTheUser = new Date().getFullYear() - yearOfBirth;
      athlete = "Світоліна";
      alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of Ukraine"  
          "Круто! Хочеш стати як ${athlete}?"
        `)
    } else {
      ageOfTheUser = new Date().getFullYear() - yearOfBirth;

      if (theCity.toLowerCase() === "kyiv") {
        alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of Ukraine"
        `)
      } else if (theCity.toLowerCase() === 'washington') {
        alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of USA."
        `)
      } else if (theCity.toLowerCase() === 'london') {
        alert(`
          "Your age : ${ageOfTheUser}"
          "You live in the capital of the United Kingdom"
        `)
      } else {
        alert(`
          Your age : ${ageOfTheUser}
          "You live in ${theCity[0].toUpperCase() + theCity.slice(1)}."
        `)
      }
    }
  }
} 












