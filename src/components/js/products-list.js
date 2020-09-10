Vue.component('products-list', {
    props: ['query'],
    template: /*html*/`
    <div class="itemsProduct" v-for="good in filteredProducts" :style="{ background: 'url(' + good.img + ') no-repeat, url(../src/assets/img/Background.png) no-repeat'}">
                                                             
    <h3>{{ good.productName }}</h3>
    <p>{{ good.productPrice }}</p>
    
    <button v-bind:id="good.productId" class="itemsCart">Add to Cart</button>

</div>
    `,
    data() {
      return {
        products: [],
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(({ product_name }) => product_name.includes(this.query));
      }
    },
    created() {
      ProductService.getProducts().then((data) => {
        this.products = data;
      });
    }
  });