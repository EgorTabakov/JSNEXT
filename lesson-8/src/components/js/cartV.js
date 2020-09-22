Vue.component('cart-items', {
    props: [''],
    template: /*html*/
    `<div class="mainMiniCart invisible">
    <div class="shopCartMini invisible jsCart">

    </div>
    <div class="miniCartTotalPrice ">
        <div class="total">
            <div>total</div>
            <div class="totalAmount"></div>
        </div>
        <button class="checkout" aria-label="checkout">checkout</button>
        <button class="goToCart" aria-label="goToCart">go to cart</button>
    </div>
</div>
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
      CartService.getProducts().then((data) => {
        this.products = data;
        console.log(data)
      });
    }
  });