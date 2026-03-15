const container = document.getElementById("products")
const search = document.getElementById("search")
const brandFilter = document.getElementById("brandFilter")
const priceFilter = document.getElementById("priceFilter")

let cart = 0

function renderProducts(list){

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`

<div class="product">

<img src="${p.image}">

<div class="product-info">

<h3>${p.name}</h3>

<div class="price">${p.price} RSD</div>

<button onclick="addToCart()">Dodaj u korpu</button>

</div>

</div>

`

})

}

function addToCart(){

cart++
document.getElementById("cart-count").innerText=cart

}

search.addEventListener("input",()=>{

const value=search.value.toLowerCase()

const filtered=products.filter(p=>p.name.toLowerCase().includes(value))

renderProducts(filtered)

})

brandFilter.addEventListener("change",filterProducts)
priceFilter.addEventListener("change",filterProducts)

function filterProducts(){

let filtered=[...products]

if(brandFilter.value){

filtered=filtered.filter(p=>p.brand===brandFilter.value)

}

if(priceFilter.value){

filtered=filtered.filter(p=>p.price<=priceFilter.value)

}

renderProducts(filtered)

}

renderProducts(products)