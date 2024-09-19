let text = 'abracadabra';
let count = 0;

for(let i = 0; i<text.length; i++){
    if(text[i] == 'a'){
        count++;
    }
}

console.log('number of a: ',count)