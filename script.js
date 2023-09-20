let cantPer = 0;

let monTotal = 0;

function dejarPropina(){
    let propina = Number(prompt('Propina: '));
        monTotal = monTotal+propina;
};

function division(){
        let xPersona = monTotal/cantPer;
        alert('Deben abonar ' + xPersona.toFixed(2) + ' cada uno.\n El monto total a abonar es :' + monTotal.toFixed(2) );
};

function ingresarValores(){
    for (let i=0; i<cantPer; i++){
        let comida = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor comida: '));
        let bebida = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor bebida: '));
        let postre = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor postre: '));
        monTotal += comida + bebida + postre;
        dejarPropina();
        };
};

function activarMesa(nuMesa) {
    cantPer= Number(prompt('Abriendo mesa' + nuMesa + '\n ¿Cuántas personas son? \n Indique de 1 a 5. Coloque 0 para salir' ));
    if (cantPer===0) {alert('Gracias por venir!');
    }else if (cantPer >=1 && cantPer<=3){
            ingresarValores();
            division();
    }else if(cantPer == 4 || cantPer==5){
        alert('Lo acortaremos por fines didácticos, utilice 1, 2 o 3 personas.');
    }else if(cantPer >= 4){
        alert('Son demasiados, lamentablemente no podemos atenderlos! \n Gracias por elegirnos :D')
    }
    else{alert('Gracias por venir!');}
};
