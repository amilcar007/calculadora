//agrega a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value = document.getElementById('pantalla').value +valor
    //tambien se puede reducir asi el codigo
    //document.getElementById('pantalla').value +=valor
}

function borrar(){
    //pantalla se le da el valor de vacio para borrar todo
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorPatalla = document.getElementById('pantalla').value
    //funcion "eval" evalua un string para hacer operaciones matematicas dando la respuesta
    const resultado = eval(valorPatalla) 
    document.getElementById('pantalla').value = resultado
}
function quitar(){
    const cadena = document.getElementById('pantalla').value
    //sacamos el rango de la cadena con length
    let numero= cadena.length
    //se extrae la cadena que necesitamos con slice utilizando rango inicio y fin
    let extraido=cadena.slice(0,(numero-1))
    //se le da la nueva cadena a la pantalla
    document.getElementById('pantalla').value = extraido
}