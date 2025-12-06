

let display = document.getElementById('display')

function addValue(value){
    display.value =display.value + value
}

function deleteNum(){
    display.value= display.value.slice(0,-1)

}
function clearAll(){
    display.value = ''
}

function calculateTotal(){
  display.value = (eval(display.value))
}
