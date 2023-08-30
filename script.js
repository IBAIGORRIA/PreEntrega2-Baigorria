let cantPer = 0;

let monTotal = 0;

function dejarPropina(){
    let propina = parseFloat(prompt('Desea Dejar propina?: '));
        monTotal = monTotal+propina;
};

function division(){
        let xPersona = monTotal/cantPer;
        alert('Deben abonar ' + xPersona.toFixed(2) + ' cada uno.\n Su monto total a abonar es :' + monTotal.toFixed(2) );
};

function ingresarValores(){
    for (var i=0; i<cantPer; i++){
        let comida = parseFloat(prompt('Comensal '+ (i+1) +'\n Ingrese monto comida: '));
        let bebida = parseFloat(prompt('Comensal '+ (i+1) +'\n Ingrese monto bebida: '));
        let postre = parseFloat(prompt('Comensal '+ (i+1) +'\n Ingrese monto postre: '));
        monTotal += comida + bebida + postre;
        dejarPropina();
        };
};

function ActivarMesa(nuMesa) {
    cantPer= parseInt(prompt('Abriendo mesa' + nuMesa + '\n ¿Cuántas personas son? \n Indique de 1 a 5. Coloque 0 para salir' ));
    if (cantPer===0) {alert('Gracias por venir!');
    }else if (cantPer >=1 && cantPer<=3){
            ingresarValores();
            division();
    }else if(cantPer == 4 || cantPer==5){
        alert('Lo acortaremos por fines didácticos, utilice 1, 2 o 3 personas.');
    }else {
        alert('Son demasiados, lamentablemente no podemos atenderlos! \n Gracias por elegirnos :D')
    }
};
