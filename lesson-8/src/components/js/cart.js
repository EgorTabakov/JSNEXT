const bascket = [
    { id: 0, name: "MANGO PEOPLE T-SHIRT", price: 52, img: "../src/assets/img/Layer_2.jpg", qty: 2 },
    { id: 1, name: "MANGO PEOPLE T-SHIRT", price: 54, img: "../src/assets/img/Layer_3.jpg", qty: 3 },
    { id: 2, name: "MANGO PEOPLE T-SHIRT", price: 53, img: "../src/assets/img/Layer_4.jpg", qty: 4 },
    { id: 3, name: "MANGO PEOPLE T-SHIRT", price: 55, img: "../src/assets/img/Layer_5.jpg", qty: 5 },
    { id: 4, name: "MANGO PEOPLE T-SHIRT", price: 58, img: "../src/assets/img/Layer_6.jpg", qty: 6 },
    { id: 5, name: "MANGO PEOPLE T-SHIRT", price: 60, img: "../src/assets/img/Layer_7.jpg", qty: 7 },
    { id: 6, name: "MANGO PEOPLE T-SHIRT", price: 80, img: "../src/assets/img/Layer_8.jpg", qty: 8 },
    { id: 7, name: "MANGO PEOPLE T-SHIRT", price: 90, img: "../src/assets/img/Layer_9.jpg", qty: 9 }
];

class Cart {
    constructor() {
    this.items = [];
  }
  fetchItems() {
    this.items = bascket;
  }
    
    init() {


        this.container = document.querySelector('.jsCart');
        this.fetchItems();
        this._render()

    }
    _render() {
        let html = '';
        this.items.forEach(({id, name, price, img, qty}) => {
            html += `
            <div class="shoppingCartProduct" id="shopCartID-${id}">
                <div class="shoppingCartDetails">
                    <div class="shoppingCartImg"><img src="${img}" alt="product-${id}" style="height: inherit;"></div>
                    <div class="shoppingCartText">
                        <h2>${name}</h2>
                        <p><span>Color:</span> Red</p>
                        <p><span>Size:</span> Xll</p>
                    </div>
                </div>
                <div class="unitePrice"><span>$${price}</span></div>
                <div class="quantity"><input type="text" placeholder="${qty}" pattern="([0-9],2)" aria-label="input quantity">
                </div>
                <div class="shipping"><span>Free</span></div>
                <div class="subtotal"><span>$${price * qty}</span></div>
                <div class="action" name"del">
                    <i id="${id}"  class="fa fa-times-circle" aria-hidden="true"></i>
                </div>     
            </div>        
            `
        })
        this.container.innerHTML = html;
    }

}

const cart = new Cart();
cart.init();


//удаление товара из корзины
addEventListener('click', e => {
    if (e.target.className == 'fa fa-times-circle') {
        idCart = "#shopCartID-" + e.target.id;
        document.querySelector(idCart).remove();
        
    }

});
//обновить данные при изменении количества
addEventListener('input', function (e) {

    cart._render();

});
