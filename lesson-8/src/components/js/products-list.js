Vue.component('product-list', {
  props: ['query'],
  template: /*html*/
    `<div class="catalogItems">
    <div class="itemsProduct" 
      v-for="(product, i) in filteredProducts" :style="{ background: 'url(' + product.img + ') no-repeat, url(../src/assets/img/Background.png) no-repeat'}">
                                                              
      <h3>{{ product.productName }}</h3>
      <p>{{ product.productPrice }}</p>
      
      <button v-bind:id="product.productId" class="itemsCart">Add to Cart</button>

    </div></div>
    `,
  data() {
    return {
      products: [],
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(({ productName }) => productName.includes(this.query));
    }
  },
  created() {
    ProductService.getProducts().then((data) => {
      this.products = data;

    });
  },
  
});