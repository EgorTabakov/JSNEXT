let names;
let prices;
let imgs;
let fileNameSt;
const cart = document.querySelector('.headerCart');
const container = document.querySelector('.itemJS');

function massive() {
    fileNameSt = file();
    if (fileNameSt == 'index.html') {

        names = ['MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT'];
        prices = [52, 54, 53, 55, 58, 60, 80, 90];
        imgs = [
            '../src/assets/img/Layer_2.jpg',
            '../src/assets/img/Layer_3.jpg',
            '../src/assets/img/Layer_4.jpg',
            '../src/assets/img/Layer_5.jpg',
            '../src/assets/img/Layer_6.jpg',
            '../src/assets/img/Layer_7.jpg',
            '../src/assets/img/Layer_8.jpg',
            '../src/assets/img/Layer_9.jpg'
        ];

    } else if (fileNameSt == 'catalog.html') {
        names = ['TT MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT', 'MANGO PEOPLE T-SHIRT'];
        prices = [15, 2, 59, 53, 55, 70, 60, 80, 90];
        imgs = [
            '../src/assets/img/cart_pr_1.jpg',
            '../src/assets/img/cart_pr_2.jpg',
            '../src/assets/img/cart_pr_3.jpg',
            '../src/assets/img/cart_pr_4.jpg',
            '../src/assets/img/cart_pr_5.jpg',
            '../src/assets/img/cart_pr_6.jpg',
            '../src/assets/img/cart_pr_7.jpg',
            '../src/assets/img/cart_pr_8.jpg',
            '../src/assets/img/cart_pr_9.jpg'
        ];

    } else {
        names = ['BLAZE LEGGINGS', 'ALEXA SWEATER', 'AGNES TOP', 'SYLVA SWEATER'];
        prices = [15, 2, 59, 53];
        imgs = [
            '../src/assets/img/products_1.png',
            '../src/assets/img/products_2.png',
            '../src/assets/img/products_3.png',
            '../src/assets/img/products_4.jpg'
        ];
    }


    return names, prices, imgs, fileNameSt;
}

function file() {

    let st = window.location.href;
    let fileName = st.substring(st.lastIndexOf('/') + 1, st.length);
    return fileName;

}

function createCatalog() {
    let arr = [];
    names.forEach((name, index) => {
        let id = index;
        arr.push(createItem(id, name, prices[index], imgs[index]))
    })
    return arr
}

function createItem(id, name, price, img) {
    return { id, name, price, img }
}



let catalog = {
    items: [],
    cart: null,
    init() {
        file();
        massive();
        this.cart = cart;
        this.container = container;
        this.items = createCatalog();
        this._render();
        // this._handleEvents()
    },
    // _handleEvents() {
    //     this.cart.addEventListener('click', e => {
    //         document.location.href = "cart.html";

    //     })
    // },

    _render() {
        let html = '';
        this.items.forEach(us => {
            if (fileNameSt == 'product.html') {
                html += `
                <div class="youMayProducts youMayProducts${us.id}">
                <h3>${us.name}</h3>
                <p>$${us.price}</p>
            </div>
                `
            } else {

                html += `
            <div class="itemsProduct itemsProduct${us.id}" style="background: url(${us.img}) no-repeat, url(../src/assets/img/Background.png) no-repeat;">
                        <h3>${us.name}</h3>
                        <p>$${us.price}</p>
                        <button id="${us.id}" class="itemsCart">Add to Cart</button>
            </div>
             `
            }
        })
        this.container.innerHTML = html;
    }
};




catalog.init();

let bascket =[];
container.addEventListener('click', e => {
    
    id = e.target.id;
    item = catalog.items[id];
    
    if (!item.qty) {
        
        item.qty = 0;
        bascket.push(item);
    }
    if (item.qty >= 0) {
        item.qty++;
    }
    
    console.log(bascket);
  
});
