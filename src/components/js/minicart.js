const bascket2 = [
    { id: 0, name: "MANGO PEOPLE T-SHIRT", price: 52, img: "../src/assets/img/Layer_2.jpg", amount: 2 },
    { id: 1, name: "MANGO PEOPLE T-SHIRT", price: 54, img: "../src/assets/img/Layer_3.jpg", amount: 3 },
    { id: 2, name: "MANGO PEOPLE T-SHIRT", price: 53, img: "../src/assets/img/Layer_4.jpg", amount: 4 },
    { id: 3, name: "MANGO PEOPLE T-SHIRT", price: 55, img: "../src/assets/img/Layer_5.jpg", amount: 5 },
    { id: 4, name: "MANGO PEOPLE T-SHIRT", price: 58, img: "../src/assets/img/Layer_6.jpg", amount: 6 },
    { id: 5, name: "MANGO PEOPLE T-SHIRT", price: 60, img: "../src/assets/img/Layer_7.jpg", amount: 7 },
    { id: 6, name: "MANGO PEOPLE T-SHIRT", price: 80, img: "../src/assets/img/Layer_8.jpg", amount: 8 },
    { id: 7, name: "MANGO PEOPLE T-SHIRT", price: 90, img: "../src/assets/img/Layer_9.jpg", amount: 9 }
];

class Catalog {
    constructor() {
    this.items = [];
  }
  _fetchItems() {
    this.items = bascket2;
  }
        
    init() {


        this.container = document.querySelector('.jsCart');
        this.container2 = document.querySelector('.mainMiniCart');
        this._fetchItems();
        setTimeout(() => {
            this._render();
            this._handleActions();
            this._changeAmount();
        }, 300);


    }
    _render() {
        let html = '';
        this.items.forEach(us => {
            html += `
            <div class="wrapMiniCart">  
                <img src="${us.img}" alt="">
                <div class="textMiniCart">      
                    <div class="nameMiniCart">${us.name}</div>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </span>
                    <div class="priceMiniCart">${us.amount}
                        <span>x</span> $${us.price}
                    </div> 
                </div>
                    
                <button 
                    class="fas fa-times-circle" 
                    data-id="${us.id}"
                    name="remove"
                ></button>
            </div>     
                
            `
        });
                       
        this.container.innerHTML = html;
        
    }
    _changeAmount() {
        this.amounts = 0;
        this.items.forEach(us => {
            
            this.amounts += (us.amount * us.price);
        
        });
             
        document.querySelector('.totalAmount').innerHTML= '$'+this.amounts;
            
    
    }
    _handleActions() {
        document.querySelector('.headerCart').addEventListener('click', () => {
            this.container.classList.toggle('invisible');
            this.container2.classList.toggle('invisible');
            this.shown = !this.shown;
        })

        this.container.addEventListener('click', ev => {
            if (ev.target.name == 'remove') {
                this._remove(ev.target.dataset.id);
            }
        })

        document.querySelector('.goToCart').addEventListener('click', ev => {
            document.location.href = "cart.html";
        })

        document.querySelector('.checkout').addEventListener('click', ev => {
            document.location.href = "checkout.html";
        })
    }
    _remove(id) {
        let find = this.items.find(el => el.id == id);
        if (find.amount > 1) {
            find.amount--;
            this._changeAmount()
        } else {
            this.items.splice(this.items.indexOf(find), 1);
            this._changeAmount()
        }
        this._render();
    }

}


const list = new Catalog();
list.init();



