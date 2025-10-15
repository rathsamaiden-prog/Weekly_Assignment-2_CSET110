let currentPrice;

function addItem(img, title, price){
    currentPrice = price
    let template = document.getElementById('cart-product');
    let container = document.getElementById('cart-container');
    let instance = template.content.cloneNode(true);
    container.appendChild(instance)
    let imgClass = document.querySelectorAll(`.cart-item-image`)
    imgClass[imgClass.length - 1].src = img
    let titleClass = document.querySelectorAll(`.cart-item-title`)
    titleClass[titleClass.length - 1].innerHTML = title
    let priceClass = document.querySelectorAll(`.cart-price`)
    priceClass[priceClass.length - 1].innerHTML = `$${price}`
    calcTotal(price)
}

function calcTotal(){
    
}