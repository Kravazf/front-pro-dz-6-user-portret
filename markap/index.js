yearOfBirth = parseFloat(prompt('Enter the year of birth'));
city = prompt('In which city do you live?');
favoriteSport = prompt('What is your favorite sport?');

resultAge = 'Your age is ';
resultCity = 'You live in ';
resultFavoriteSport = 'Cool! Do you want to become ';

if(!yearOfBirth || isNaN(yearOfBirth)) {
	resultAge = 'It\'s a pity that you didn\'t want to enter your date of birth!'
} else {
  	resultAge += new Date().getFullYear() - yearOfBirth;
}

if (!city) {
  	resultCity = 'It\'s a pity that you didn\'t want to enter your city of residence!';
}
 else if (city.toLowerCase() === 'kyiv') {
  	resultCity += `the capital of Ukraine ${city[0].toUpperCase() + city.slice(1)}`;
} else if (city.toLowerCase() === 'washington') {
  	resultCity += `the capital of USA in ${city[0].toUpperCase() + city.slice(1)}`;
} else if (city.toLowerCase() === 'london') {
  	resultCity += `the capital of UK ${city[0].toUpperCase() + city.slice(1)}`;
} else {
	resultCity += `${city[0].toUpperCase() + city.slice(1)}`;
}

if (!favoriteSport) {
  	resultFavoriteSport = 'It\'s a pity that you didn\'t want to enter your favorite sport!';
} else if (favoriteSport.toLowerCase() === 'box') {
  	resultFavoriteSport += `Oleksandr Usik!`
} else if (favoriteSport.toLowerCase() === 'football') {
  	resultFavoriteSport += `Lionel Messi!`
} else if (favoriteSport.toLowerCase() === 'tennis') {
  	resultFavoriteSport += `Elina Svitolina!`
} else {
  	resultFavoriteSport += `a Pro!`
}

alert(`
${resultAge}
${resultCity}
${resultFavoriteSport}
`);









