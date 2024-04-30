document.addEventListener("DOMContentLoaded", function() {

const reverseSentence = document.getElementById("reverseSentence");
const output = document.getElementById("output");

reverseSentence.addEventListener("click", function(){
    const inputText = document.getElementById("text").value; 

    const reversingWords = (s) => s.split(" ").filter((i) => i !== "").reverse().join(" ")
    const reversedSentence = reversingWords(inputText); 

    output.textContent = reversedSentence;

});
});
