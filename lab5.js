var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var isVowel;

for(var i = 0; i < chars.length; i++){
	isVowel = false;
	var vowel = 'no es vocal: ' + chars[i];
	for(var j = 0; j < vowels.length; j++){
		if(chars[i] === vowels[j]){
			isVowel = true;
		}
	}
	if (isVowel !== true)
	alert("Las no vocales del abecedario son: " + vowel);
}