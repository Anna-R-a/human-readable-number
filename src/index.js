module.exports = function toReadable (number) {
   	const upToTwenty = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];
	const tens = [
		'',
		'ten',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety',
	];

	if (number == 0){
		return 'zero'
	}
	else if (number < 20){
		return upToTwenty[number]
	}
	else if (number < 100 && number % 10 ==0){
		return tens[Math.floor(number / 10)]
	}
	else if (number < 100 ){
		return tens[Math.floor(number / 10)] + ' ' + upToTwenty[number % 10]
	}
	else if(number % 100 == 0){
		return upToTwenty[Math.floor(number / 100)] + ' hundred'
	}
	else if(number % 10 == 0){
		return upToTwenty[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)]
	}
	else if(number % 100 >= 20){
		return upToTwenty[Math.floor(number / 100)] + ' hundred' + ' ' + tens[Math.floor(number % 100 / 10)] + ' ' + upToTwenty[number % 10]
	}
		else {
		return upToTwenty[Math.floor(number / 100)] + ' hundred' + ' ' + upToTwenty[number % 100];
	}
}