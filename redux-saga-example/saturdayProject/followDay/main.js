const products = [
    { id: "1", item: "iPad", price: 20 }
    , { id: "2", item: "iPhone", price: 30 }
];



const display = document.getElementById("output");


products.forEach((product) => {
    document.getElementById("output").innerHTML += `
    <li > ${product.item} </li> 
`

})




function purchaseProduct(product){
    console.log("purchased :" , product);

}

function textFunc() {
    console.log("You clicked me ");
}