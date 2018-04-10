//Initialise a counter variable
var countTextCalled = 0;
function countText(a){
    countTextCalled++;
    var dig = 0;
    var  letters = 0;
    for(var i = 0; i < a.length; i++){
        if(isNaN(a[i]))
        letters +=1;
        else
        dig +=1;
    }
var spaces = a.split(" ").length - 1;

    document.getElementById('resultsLetter').innerHTML = letters;
    document.getElementById('resultsDigits').innerHTML = dig - spaces;
    document.getElementById('resultsSpaces').innerHTML = spaces;
    document.getElementById('resultscounting').innerHTML = countTextCalled;
    document.getElementById('colours').style.backgroundColor = "Blue";
    var inputBox = document.createElement('input');
    inputBox.type = "radio";
    document.body.appendChild(inputBox);

}
