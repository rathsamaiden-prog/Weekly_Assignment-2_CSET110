let totalPrice
let priceQuant = new Map()
priceQuant.set(`Coffee Cup`, [6.99,0])
priceQuant.set(`T-Shirt`, [19.99,0])
priceQuant.set(`Album 1`, [12.99,0])
priceQuant.set(`Album 2`, [14.99,0])
priceQuant.set(`Album 3`, [9.99,0])
priceQuant.set(`Album 4`, [19.99,0])
let entry

function addItem(img, title, price){
    entry = priceQuant.get(title)
    if (entry[1] !== 0){
        return
    }
    let template = document.getElementById('cart-product')
    let container = document.getElementById('cart-container')
    let instance = template.content.cloneNode(true)
    container.appendChild(instance)
    let imgClass = document.querySelectorAll(`.cart-item-image`)
    imgClass[imgClass.length - 1].src = img
    let titleClass = document.querySelectorAll(`.cart-item-title`)
    titleClass[titleClass.length - 1].innerHTML = title
    let priceClass = document.querySelectorAll(`.cart-price`)
    priceClass[priceClass.length - 1].innerHTML = `$${price.toFixed(2)}`
    priceQuant.set(title, [entry[0], entry[1]+1])
    calcTotal()
}

function removeItem(btn){
    let parent = btn.parentElement.parentElement
    changeQuant(btn)
    parent.remove()
    
}

function calcTotal(){
    totalPrice = 0
    priceQuant.forEach(val => {
        totalPrice += val[0]*val[1]
    })
    document.getElementById(`final-price`).innerHTML = `$${totalPrice.toFixed(2)}`
}

function changeQuant(input){
    let row = input.parentElement.parentElement
    let titleEl = row.querySelector('.cart-item-title')
    let title = titleEl.innerText
    entry = priceQuant.get(title)
    priceQuant.set(title, [entry[0], input.value])
    calcTotal()
}