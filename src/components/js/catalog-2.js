// const API = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON/catalog.json';

// const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Vue.component('catalogItems', {
//     props: ['goods'],
//     template: `
//     <div class="catalogItems">
//         <itemsProduct v-for="good in goods" :good="good"></itemsProduct>
//     </div>
   
//   `

// });

// Vue.component('itemsProduct', {
//     props: ['good'],
   
//     computed: {
//     url: function () {
//         return good.img 
        
//       }
     
//    },
 

//     template: `
    
//     <div class="itemsProduct" style="background: url({{ good.img  }}) no-repeat, url(../src/assets/img/Background.png) no-repeat"> 
                             
                     
//         <h3>{{ good.productName }}</h3>
//         <p>{{ good.productPrice }}</p>
//         <button :id="good.productId" class="itemsCart">Add to Cart</button>

//     </div>

//   `
// });



// class Data {

//     constructor() {
//         this.items = [];

//     }
//     _fetchItems() {
//         this.items = this._massive();
//     }

//     _massive() {
//         this.names = ['MANGO PEOPLE T-SHIRT', 'KIWI PEOPLE T-SHIRT', 'PINEAPPLE PEOPLE T-SHIRT', 'APPLE PEOPLE T-SHIRT', 'HELLO T-SHIRT', 'WORLD T-SHIRT', 'ELEMENT T-SHIRT', 'JS T-SHIRT'];
//         this.prices = [52, 54, 53, 55, 58, 60, 80, 90];
//         this.imgs = [
//             '../src/assets/img/Layer_2.jpg',
//             '../src/assets/img/Layer_3.jpg',
//             '../src/assets/img/Layer_4.jpg',
//             '../src/assets/img/Layer_5.jpg',
//             '../src/assets/img/Layer_6.jpg',
//             '../src/assets/img/Layer_7.jpg',
//             '../src/assets/img/Layer_8.jpg',
//             '../src/assets/img/Layer_9.jpg'
//         ];


//         return this.names, this.prices, this.imgs;
//     }


// }
// const listData = new Data();
// listData._fetchItems();



// class ListItems {
//     constructor() {
//         this.names = listData.names
//         this.prices = listData.prices
//         this.imgs = listData.imgs
//         this.arr = [];

//     }

//     _createCatalog() {
//         this.arr = [];
//         this.names.forEach((name, index) => {
//             let id = index;
//             this.arr.push(this._createItem(id, name, this.prices[index], this.imgs[index]))
//         })

//     }

//     _createItem(id, name, price, img) {
//         return {
//             id,
//             name,
//             price,
//             img
//         }
//     }
// }
// const listItems = new ListItems();
// listItems._createCatalog();

// class MainCatalog {

//     constructor() {
//         this.items = [];
//         this.filteredProducts = [];
//         this.cart = null;
//     }
//     _fetchItems() {
//         this.items = listItems.arr;
//         this.filteredProducts = listItems.arr;
//     }

//     _init() {
//         this.cart = cart;
//         this.container = container;
//         this._render();

//     }

//     _render(prod) {

//         console.log(prod)
//         if (prod && prod.length > 0) {
//             this.filteredProducts = prod;

//         } else {
//             this._fetchItems();
//         }

//         let html = '';
//         this.filteredProducts.forEach(({
//             id,
//             name,
//             price,
//             img
//         }) => {
//             html += `
//             <div class="itemsProduct itemsProduct${id}" style="background: url(${img}) no-repeat, url(../src/assets/img/Background.png) no-repeat;">
//                         <h3>${name}</h3>
//                         <p>$${price}</p>
//                         <button id="${id}" class="itemsCart">Add to Cart</button>
//             </div>
//              `

//         })
//         this.container.innerHTML = html;
//     }


//     // filterProducts(value) {
//     //     const regexp = new RegExp(value, `i`);
//     //     const filteredProducts = this.items.filter(product => regexp.test(product.name));
//     //     this._render(filteredProducts);

//     // }
// };
// const listCatalog = new MainCatalog();
// listCatalog._init();

// // findButton.addEventListener('click', e => {

// //     listCatalog.filterProducts(findValue.value);

// // });

// class Bascket {
//     constructor(container) {
//         this.bascket = [];
//         this.container = container;
//         this.items = listItems.arr;
//         this.item = null;
//     }
//     _handler() {
//         container.addEventListener('click', e => {

//             this.id = e.target.id;
//             this.item = this.items[this.id];

//             if (!this.item.qty) {

//                 this.item.qty = 0;
//                 this.bascket.push(this.item);
//             }
//             if (this.item.qty >= 0) {
//                 this.item.qty++;
//             }

//             console.log(this.bascket);

//         })
//     }
// }

// const listBasket = new Bascket(container);
// listBasket._handler();


const API_URL = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON';
const app = new Vue({


    el: '#app',

    data: {
        goods: [],
        filteredProducts: [],
        searchLine: '',
        hello: 'hi'
        // inputvalue: 'search',
        // list: listCatalog
    },
    methods: {
        makeGETRequest(url, callback) {
            const API_URL = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON';

            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);

                }
            }

            xhr.open('GET', url, true);
            xhr.send();

        },
        
        filterProducts() {
            const regexp = new RegExp(this.inputvalue, `i`);
            const filteredProducts = this.goods.filter(product => regexp.test(product.productName));
            this.filteredProducts = (filteredProducts);
        },
        myClickHandler: function (e) {
            this.filterProducts()
        
        
        }
    },

    created() {

        this.makeGETRequest(`${API_URL}/catalog.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredProducts = JSON.parse(goods);


        });
    }

});














// filterProducts() {
//     const regexp = new RegExp(this.inputvalue, `i`);
//     const filteredProducts = listCatalog.items.filter(product => regexp.test(product.name));
//     listCatalog._render(filteredProducts);
// },
// myClickHandler: function (e) {
//     this.filterProducts()


// }



//     }

// })
//

