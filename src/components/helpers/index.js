export function declOfNum(number, titles) {
	const cases = [2, 0, 1, 1, 1, 2];
	return number + " " + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export function birthDateToAge(birthday) {
	let now = new Date(),
		birth = new Date(birthday),
		age = now.getFullYear() - birth.getFullYear();
	return now.setFullYear(1970) < birth.setFullYear(1970) ? age - 1 : age;
}