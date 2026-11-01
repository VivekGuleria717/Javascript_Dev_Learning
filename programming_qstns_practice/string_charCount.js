let str="hello";
const freq={};
for(char of str){
    console.log(freq[char]);
    freq[char]=(freq[char] || 0)+1
    // console.log(freq);
}