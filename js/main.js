const words = 'kartoshka piyoz sabzi shorbodring karamiddinjon olma';

// words.split(' ').forEach((element) => {
// 	console.log(element);
// });

function longWord(text) {
	const array = text.split(' ');
	let longWord = array[0];

	for (let i = 1; i < array.length; i++) {
		if (longWord.length < array[i].length) {
			longWord = array[i];
		}
	}
	array.forEach(function (item, i, nimadir) {
		if (longWord.length < item.length) {
			longWord = item;
		}
	});
	return longWord;
}

console.log(longWord(words));
