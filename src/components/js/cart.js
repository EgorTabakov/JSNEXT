let bascket = [
    { id: 0, name: "MANGO PEOPLE T-SHIRT", price: 52, img: "../src/assets/img/Layer_2.jpg", qty: 2 },
    { id: 1, name: "MANGO PEOPLE T-SHIRT", price: 54, img: "../src/assets/img/Layer_3.jpg", qty: 3 },
    { id: 2, name: "MANGO PEOPLE T-SHIRT", price: 53, img: "../src/assets/img/Layer_4.jpg", qty: 4 },
    { id: 3, name: "MANGO PEOPLE T-SHIRT", price: 55, img: "../src/assets/img/Layer_5.jpg", qty: 5 },
    { id: 4, name: "MANGO PEOPLE T-SHIRT", price: 58, img: "../src/assets/img/Layer_6.jpg", qty: 6 },
    { id: 5, name: "MANGO PEOPLE T-SHIRT", price: 60, img: "../src/assets/img/Layer_7.jpg", qty: 7 },
    { id: 6, name: "MANGO PEOPLE T-SHIRT", price: 80, img: "../src/assets/img/Layer_8.jpg", qty: 8 },
    { id: 7, name: "MANGO PEOPLE T-SHIRT", price: 90, img: "../src/assets/img/Layer_9.jpg", qty: 9 }
];

let catalog = {
    items: [],
    del: null,
    init() {


        this.container = document.querySelector('.jsCart');
        this.items = bascket;
        this._render()

    },
    _render() {
        let html = '';
        this.items.forEach(us => {
            html += `
            <div class="shoppingCartProduct" id="shopCartID-${us.id}">
                <div class="shoppingCartDetails">
                    <div class="shoppingCartImg"><img src="${us.img}" alt="product-${us.id}" style="height: inherit;"></div>
                    <div class="shoppingCartText">
                        <h2>${us.name}</h2>
                        <p><span>Color:</span> Red</p>
                        <p><span>Size:</span> Xll</p>
                    </div>
                </div>
                <div class="unitePrice"><span>$${us.price}</span></div>
                <div class="quantity"><input type="text" placeholder="${us.qty}" pattern="([0-9],2)" aria-label="input quantity">
                </div>
                <div class="shipping"><span>Free</span></div>
                <div class="subtotal"><span>$${us.price * us.qty}</span></div>
                <div class="action" name"del">
                    <i id="${us.id}"  class="fa fa-times-circle" aria-hidden="true"></i>
                </div>     
            </div>        
            `
        })
        this.container.innerHTML = html;
    },

}




catalog.init();


//удаление товара из корзины
addEventListener('click', e => {
    if (e.target.className == 'fa fa-times-circle') {
        idCart = "#shopCartID-" + e.target.id;
        document.querySelector(idCart).remove();
        // bascket.splice(index, 1);
    }

});
//обновить данные при изменении количества
addEventListener('input', function (e) {

    catalog._render();

});
