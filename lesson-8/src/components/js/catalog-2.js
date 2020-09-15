const API_URL = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON';
const app = new Vue({

    el: '#app',

    data: {
        goods: [],
        filteredProducts: [],
        searchLine: '',
        hello: 'hi'

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


        makePOSTRequest(url, data, callback) {
            let xhr;

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

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.send(data);
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

        this.makeGETRequest(`/catalogData`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredProducts = JSON.parse(goods);


        });
    }

});
