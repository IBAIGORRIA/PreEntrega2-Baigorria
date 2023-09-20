let cantPer = 0;
let monTotal = 0;
let montIndiv = [];
let promos = [{nomb: "Promo_1", cont: "Café con 2 medialunas", valor: 700.00}, {nomb: "Promo_2", cont: "Café Con Carlitos", valor: 1200.00}, {nomb: "Promo_3", cont: "Exprimido Con Carlitos", valor: 1500.00}];
let promoElegida = 0;
let prpSug = 10;
let propina = 0;

function ofrecerPromo(){
    let xyx = prompt('Desea conocer nuestras promociones? \n S/N');
    if (xyx === "S" || xyx === "s"){
        let mensaje = "Selecciona una de las siguientes promociones:\n";
        for (let i = 0; i < promos.length; i++) {
            mensaje += `${i + 1}. ${promos[i].nomb} ${promos[i].cont}...... $${promos[i].valor} \n`;
        };
        seleccion = Number(prompt(mensaje + "\n Seleccione 0 para anular."));
        if (seleccion != 0) {
            seleccion -=1;
            promoElegida = promos[(seleccion)].valor;
        };
    };
};


function dejarPropina(a){
    let consulta = prompt("Su monto total fue de $" + a + "\nLa propina sugerida es de un + "+ prpSug+"% \nDesea(n) dejar propina S/N");
    if (consulta  === "s" || propina === "S") {
    propina = monTotal*prpSug/100;
    monTotal = monTotal + propina;
    };
};

function ticket(){
        let xPersona = monTotal/cantPer;
        let mensaje = "";
        for (let i = 0; i < cantPer; i++) {
            mensaje += `El comensal  ${i + 1} debe abonar $${montIndiv[i]} \n`;
        };
        alert(mensaje + 'Propina: $'+propina+'.\n En partes iguales ' + xPersona.toFixed(2) + ' cada uno.\n El monto total a abonar es :' + monTotal.toFixed(2) );
};

function ingresarValores(){
    for (let i=0; i<cantPer; i++){
        ofrecerPromo();
        let comida = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor comida: '));
        let bebida = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor bebida: '));
        let postre = Number(prompt('Comensal '+ (i+1) +'\n Ingrese valor postre: '));
        sumaIndiv =comida + bebida + postre + promoElegida;
        montIndiv[i] = sumaIndiv;
        monTotal += sumaIndiv;
        };
        dejarPropina(monTotal);
};

function activarMesa(nuMesa) {
    cantPer= Number(prompt('Abriendo mesa' + nuMesa + '\n ¿Cuántas personas son? \n Indique de 1 a 5. Coloque 0 para salir' ));
    if (cantPer===0) {alert('Gracias por venir!');
    }else if (cantPer >=1 && cantPer<=3){
            ingresarValores();
            ticket();
    }else if(cantPer == 4 || cantPer==5){
        alert('Lo acortaremos por fines didácticos, utilice 1, 2 o 3 personas.');
    }else if(cantPer >= 6){
        alert('Son demasiados, lamentablemente no podemos atenderlos! \n Gracias por elegirnos :D')
    }
    else{alert('Gracias por venir!');}
};
