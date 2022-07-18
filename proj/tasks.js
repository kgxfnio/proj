function calculateValues(){
    
    document.getElementById('RESULT').innerText = Number(firstValue) + Number(secondValue) + Number(thirdValue);

}
function calculateValuesMinus(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('RESULT').innerText = Number(firstValue) - Number(secondValue) - Number(thirdValue);
}
function calculateValuesDivide(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('RESULT').innerText = Number(firstValue) / Number(secondValue) / Number(thirdValue);
}
function calculateValuesMultiply(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('RESULT').innerText = Number(firstValue) *  Number(secondValue) * Number(thirdValue);
}
function getSelectValue(){
    if(document.getElementById('operations').value == 'choose operation'){
        alert('choose operation')
    }
    else{
        let firstValue = document.getElementById('input1').value;
        let secondValue = document.getElementById('input2').value;
        let thirdValue =  document.getElementById('input3').value;
        let value = document.getElementById('operations').value
        switch(value){
            case '+':
                document.getElementById('RESULT').innerText = Number(firstValue) +  Number(secondValue) + Number(thirdValue);
            break;
            case '-':
                document.getElementById('RESULT').innerText = Number(firstValue) -  Number(secondValue) - Number(thirdValue);
            break;
            case '/':
                document.getElementById('RESULT').innerText = Number(firstValue) /  Number(secondValue) / Number(thirdValue);
            break;
            case '*':
                document.getElementById('RESULT').innerText = Number(firstValue) *  Number(secondValue) * Number(thirdValue);
            break;
            default:
                console.log('nigg')
            break;
        }
    }
}