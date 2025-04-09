const productos = [
  { id: 1, name: "Cocada", description: "Somewhat sweet coconut treat", price: 3.25, url: "https://picsum.photos/id/1011/300/200" },
  { id: 2, name: "Arepa", description: "Traditional cornmeal cake", price: 2.50, url: "https://picsum.photos/id/1025/300/200" },
  { id: 3, name: "Churro", description: "Fried-dough pastry with sugar", price: 1.75, url: "https://picsum.photos/id/103/300/200" },
  { id: 4, name: "Empanada", description: "Savory stuffed pastry", price: 2.00, url: "https://picsum.photos/id/1043/300/200" },
  { id: 5, name: "Tamal", description: "Steamed corn dough with filling", price: 2.80, url: "https://picsum.photos/id/1052/300/200" },
  { id: 6, name: "Pan de Bono", description: "Cheesy bread from Colombia", price: 1.95, url: "https://picsum.photos/id/1067/300/200" },
  { id: 7, name: "Alfajor", description: "Dulce de leche sandwich cookie", price: 3.10, url: "https://picsum.photos/id/1074/300/200" },
  { id: 8, name: "Turrón", description: "Nougat sweet with nuts", price: 4.20, url: "https://picsum.photos/id/1080/300/200" },
  { id: 9, name: "Café", description: "Freshly brewed coffee", price: 1.50, url: "https://picsum.photos/id/1084/300/200" },
  { id: 10, name: "Mate", description: "Herbal infusion from South America", price: 2.30, url: "https://picsum.photos/id/1081/300/200" },
  { id: 11, name: "Tarta de manzana", description: "Apple pie slice", price: 3.75, url: "https://picsum.photos/id/1083/300/200" },
  { id: 12, name: "Helado", description: "Creamy vanilla ice cream", price: 2.90, url: "https://picsum.photos/id/1082/300/200" },
  { id: 13, name: "Chicha", description: "Fermented corn drink", price: 2.60, url: "https://picsum.photos/id/1070/300/200" },
  { id: 14, name: "Buñuelo", description: "Fried dough ball", price: 1.20, url: "https://picsum.photos/id/1062/300/200" },
  { id: 15, name: "Leche Asada", description: "Baked custard dessert", price: 2.85, url: "https://picsum.photos/id/1057/300/200" },
  { id: 16, name: "Torta Tres Leches", description: "Three-milk sponge cake", price: 3.95, url: "https://picsum.photos/id/1056/300/200" },
  { id: 17, name: "Quesillo", description: "Soft cheese dessert", price: 3.20, url: "https://picsum.photos/id/1049/300/200" },
  { id: 18, name: "Chocotorta", description: "Chocolate cake with dulce de leche", price: 4.10, url: "https://picsum.photos/id/1038/300/200" },
  { id: 19, name: "Natilla", description: "Colombian milk custard", price: 2.70, url: "https://picsum.photos/id/1035/300/200" },
  { id: 20, name: "Panettone", description: "Sweet bread loaf with fruits", price: 4.50, url: "https://picsum.photos/id/1032/300/200" }
];

class shoppingCart
{
  constructor(){
    this.productosDelCart = [];
    this.taxRate = 12.0;
  }
  addProducto(productoId, prods)
  { 
    const prod = prods.find(p => p.id === productoId);
    this.productosDelCart.push(prod);
    this.updateCart(prod);
  }
  updateCart(prod)
  {  
    const countProdInCart = {};
    this.productosDelCart.forEach(p =>{
      countProdInCart[p.id] = (countProdInCart[p.id] || 0)+1;
    })

    const newProd = document.getElementById(`cart-prod-id${prod.id}`);
    const totalNewProd = countProdInCart[prod.id]
    
    totalNewProd>1
    ? newProd.innerText=totalNewProd
    : productsInCartContainer.innerHTML += `<div>
    <span id="cart-prod-id${prod.id}">1</span>
    ${prod.name} - $${prod.price} X
    </div>`;  
  }
  
}


const cart = new shoppingCart();
const dessertCont = document.getElementById('dessert-container');
const cartContainer = document.getElementById('cart-container');
const productsInCartContainer = document.getElementById('products-in-cart');

productos.forEach(p =>{
  dessertCont.innerHTML+=`
<div class="col-3 p-1">
  <div class="card h-100">
      <img src='${p.url}' class="img-fluid card-img-top" alt="${p.name}" />
      <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.description}</p>
          <div class="d-flex justify-content-between">
              <span class="card-text">${p.price}</span>
              <a class="btn btn-danger btn-sm btn-add" id="${p.id}">ADD</a>
          </div>
      </div>
  </div>
</div>
`
}); 

const addProductBtn = document.getElementsByClassName('btn-add');
[...addProductBtn].forEach(element =>{
  element.addEventListener('click', (el)=>{
    cart.addProducto(Number(el.target.id), productos); 
  });
})


function showCart()
{ 
  cartContainer.style.display = cartContainer.style.display ==='none'
  ?'block'
  :'none';
}








