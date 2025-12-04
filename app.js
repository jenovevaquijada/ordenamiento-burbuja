alert("Ingrese 3 números.");

let array = []
for (let i = 0; i < 3; i++){
    let contador = i + 1; 
    let num = parseFloat(prompt("Ingrese número " + contador + ":"));
    array.push(num);
}

do{
    n = 0; 
    for (let i = 1; i < array.length; i++)
        if (array[i - 1] > array[i]) {
            let temp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = temp;
            n = i;
        }
}   while (n != 0);

if (array[0] == array[array.length - 1]){ 
    document.write("Los 3 números son iguales");
}

else {
    document.write("El menor de los números que ingresaste es "+ array[0]);
    document.write("El mayor de los números que ingresaste es "+ array[array.length - 1]);
}