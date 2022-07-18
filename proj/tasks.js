function calculateValuesPlus(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('result').innerText = Number(firstValue) + Number(secondValue) + Number(thirdValue);

}
function calculateValuesMinus(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('result').innerText = Number(firstValue) - Number(secondValue) - Number(thirdValue);
}
function calculateValuesDivide(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('result').innerText = Number(firstValue) / Number(secondValue) / Number(thirdValue);
}
function calculateValuesMultiply(){
    let firstValue = document.getElementById('input1').value;
    let secondValue = document.getElementById('input2').value;
    let thirdValue =  document.getElementById('input3').value;
    document.getElementById('result').innerText = Number(firstValue) * Number(secondValue) * Number(thirdValue);
}