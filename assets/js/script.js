let itemContainer=document.querySelector('#item-container');
let items=[{
    id:'001',
    image:'./assets/img/tshirt1.jpg',
    company:'Puma',
    title:'Pure Cotton Printed T-shirts',
    dis_price:'549',
    price:'1099',
    discount:'50%'
},
{
    id:'002',
    image:'./assets/img/tshirt2.jpg',
    company:'Shirts',
    title:'Pure Cotton Printed Shirts',
    dis_price:'549',
    price:'1099',
    discount:'50%'
},
{
    id:'003',
    image:'./assets/img/tshirt3.jpg',
    company:'Jeans',
    title:'Pure Cotton Printed Jeans',
    dis_price:'549',
    price:'1099',
    discount:'50%'
},
{
    id:'004',
    image:'./assets/img/tshirt4.jpg',
    company:'Jeans',
    title:'Pure Cotton Printed Jeans',
    dis_price:'549',
    price:'1099',
    discount:'50%'
},{
    id:'005',
    image:'./assets/img/tshirt5.jpg',
    company:'Kurta Sets',
    title:'Pure Cotton Printed Kurta Sets',
    dis_price:'549',
    price:'1099',
    discount:'50%'
},{
    id:'006',
    image:'./assets/img/tshirt6.jpg',
    company:'Kurtas',
    title:'Pure Cotton Printed Kurtas',
    dis_price:'549',
    price:'1099',
    discount:'50%'
}
]



let displayProduct=()=>{
    let itemContainer=document.querySelector('#item-container');
    if(!itemContainer){
        return;
    }
    let innerHTML='';
    items.forEach(item=>{
        innerHTML+=`
     <div class="col-lg-2 col-md-4">
              <div class="card rounded-0 border-0 shadow-sm" style="width: 18rem;">
              <img src="${item.image}" class="card-img-top rounded-0" >
              <div class="card-body">
                <h6 class="card-title fw-bold mb-0">${item.company}</h6>
                <p class="card-text mb-0 fs-14 fw-400">${item.title}</p>
                <div>
                  <span class="fw-bold">Rs. ${item.dis_price}</span>&nbsp;
                  <del class="fs-14 fw-400">${item.price}</del>&nbsp;
                <span class="text-orange fs-14 fw-400 mb-0">${item.discount}</span>
                  </div class="w-100 mt-2">
                  <button class="w-80 btn btn-success" onclick="addToCart()">Add to Cart</button>
              </div>
            </div></div>`
    })
    
    
    
    itemContainer.innerHTML=innerHTML;
}
displayProduct();

//Add to Cart Section Start
let cartItems=[];
function addToCart(itemId){
    cartItems.push(itemId)
    localStorage.setItem('cart',JSON.stringify(cartItems));
    cartIcon()
}
function cartIcon(){
    let cartNumber=document.getElementById('cart-number');
    cartNumber.innerText=cartItems.length;
}