
let saludo = prompt("Hola Bievenido a Limon Market");
let Leche = 250;
let aceite =500;
let harina = 300;
let azucar = 120;

if(saludo == "hola"){
    alert("hoy tenemos disponible en el mercado los siguientes articulos:");
    alert("Leche" + " $" + Leche);
    alert("Aceite" + " $" + aceite);
    alert("Harina" + " $" + harina);
    alert("Azucar" + " $" + azucar);
    let respuesta = prompt("Desea comprar algunos de estos productos?");
    if (respuesta == "si"){
        
    }else{
        alert("Muchas Gracias por visitar la pagina, hasta la proxima");
}
}else{
    alert("Debe decir hola para continuar");
    
};

function subtotal(){
    let prodcuto1 = prompt("Ingrese el Producto que desea: leche, azucar, aciete, harina");
    let prodcuto2 = prompt("Ingrese el Producto que desea: leche, azucar, aciete, harina");
    let prodcuto3 = prompt("Ingrese el Producto que desea: leche, azucar, aciete, harina");
    let prodcuto4 = prompt("Ingrese el Producto que desea: leche, azucar, aciete, harina");
    if(prodcuto1 == "azucar"){
        prodcuto1 = azucar;
    }
    if (prodcuto1 == "leche"){
        prodcuto1 = Leche;
    }
    if(prodcuto1 == "aceite"){
        prodcuto1 == aceite;
    }
    if (prodcuto1 == "harina"){
        prodcuto1 = harina;
    }
    if(prodcuto2 == "azucar"){
        prodcuto2 = azucar;
    }
    if (prodcuto2 == "leche"){
        prodcuto2 = Leche;
    }
    if(prodcuto2 == "aceite"){
        prodcuto2 == aceite;
    }
    if (prodcuto2 == "harina"){
        prodcuto2 = harina;
    }
    if(prodcuto3 == "azucar"){
        prodcuto3 = azucar;
    }
    if (prodcuto3 == "leche"){
        prodcuto3 = Leche;
    }
    if(prodcuto3 == "aceite"){
        prodcuto3 == aceite;
    }
    if (prodcuto3 == "harina"){
        prodcuto3 = harina;
    }
    if(prodcuto4 == "azucar"){
        prodcuto4 = azucar;
    }
    if (prodcuto4 == "leche"){
        prodcuto4 = Leche;
    }
    if(prodcuto4 == "aceite"){
        prodcuto4 == aceite;
    }
    if (prodcuto4 == "harina"){
        prodcuto4 = harina;
    }
    
    let total = prodcuto1 + prodcuto2 + prodcuto3 + prodcuto4
    
    alert("su total es " + total)
}
subtotal()

