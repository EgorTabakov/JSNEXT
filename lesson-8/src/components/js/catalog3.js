const API_URL = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON';
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchQuery: '',
    },
    methods: {
        makeGETRequest(url, callback) {
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

        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalog.json`, (goods) => {
            this.goods = JSON.parse(goods)
            this.filteredGoods = JSON.parse(goods)
        });
    }
});



Vue.component('items-product', {
    props: ['good'],
  template: `
  
  <div class="itemsProduct" 
  :style="{ background: 'url(' + good.img + ') no-repeat, url(../src/assets/img/Background.png) no-repeat'}">
                                                            
    <h3>{{ good.productName }}</h3>
    <p>{{ good.productPrice }}</p>
    
    <button :id= "good.productId"  class="itemsCart">Add to Cart</button>

  </div>
  `
});
Vue.component('product-list', {
    props: ['goods'],
  template: `
  <div class="catalogItems">
      <items-product v-for="good in goods" :good="good"></items-product>
    </div>
`
});



// class GoodsItem {
//     constructor(productName, productPrice, img, productId) {
//         this.productName = productName;
//         this.productPrice = productPrice;
//         this.img = img;
//         this.productId = productId;
//     }
//     render() {
//         return `<div class="itemsProduct" style="background: url(${this.img}) no-repeat, url(../src/assets/img/Background.png) no-repeat">
//     <h3>${this.productName}</h3><p>${this.productPrice}</p>;
//     <button id="${this.productId}" class="itemsCart">Add to Cart</button></div>`;

//     }

// }
// class GoodsList {
//     constructor() {
//         this.goods = [];
//         this.filteredGoods = [];
//     }
//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
//         this.filteredGoods = this.goods.filter(good => regexp.test(good.productName));
//         this.render();
//     }
//     fetchGoods(cb) {
//         makeGETRequest(`${API_URL}/catalog.json`, (goods) => {
//             this.goods = JSON.parse(goods);
//             cb();

//         })
//     }

//     render() {
//         let listHtml = '';
//         this.filteredGoods.forEach(good => {
//             const goodItem = new GoodsItem(good.productName, good.productPrice, good.img, good.productId);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.catalogItems').innerHTML = listHtml;

//     }



// };
// const searchButton = document.querySelector('.search-button')
// const searchInput = document.querySelector('.search-input')
// searchButton.addEventListener('click', (e) => {
//     const value = searchInput.value;
//     layout.filterGoods(value);
// })

// const layout = new GoodsList();
// layout.fetchGoods(() => {
//     layout.render();
// });



