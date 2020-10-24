function getInput(num) {
    var input = document.getElementById('userInput');
    var arrop=["+","-","*","/","(",")"];
    if(arrop.indexOf(input.value.slice(-1)) !== -1 && arrop.indexOf(num) !== -1){
       input.value = input.value.slice(0,input.value.length -1) + num
    }

    else{
        input.value += num;
    }       
        
}

function result() {
    var input, res;
    input = document.getElementById('userInput');
    res = eval(input.value);

    if(res==null){

        res="0";
    }
    
    document.getElementById('result').innerHTML = res;
    document.getElementById('userInput').value = null;
 
}


function remove() {
    document.getElementById('result').innerHTML = "0";
    document.getElementById('userInput').value = null;
}

