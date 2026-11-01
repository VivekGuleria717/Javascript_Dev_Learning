// char with max occurances //
function maxOccuringChar(str){
    const freq={};
    let maxCharcount=0;
    let maxChar='';
    for(char of str){
        freq[char]=(freq[char] ||0) + 1;
       if(freq[char]>maxCharcount){
        maxCharcount=freq[char];
        maxChar=char;
       }
    }
     return {'maxChar':maxChar, "count":maxCharcount};
}

console.log(maxOccuringChar("VIVEK"));
