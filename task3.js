var text = 'education';
var text = 'programming';

for(var i=0; i< text.length; i++){
    var char = text[i];
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        console.log('String contains all the vowels');
        break;
    }
    else{
        console.log('String does not contain all the vowel');
        break;
    }
}