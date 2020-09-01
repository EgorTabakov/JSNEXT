let selectorSize = null;
let selectorAdd = null;
const burger = {

	price: 0,
	calories: 0,

	small: {
		price: 50,
		calories: 20
	},

	large: {
		price: 100,
		calories: 40
	},

	cheese: {
		price: 10,
		calories: 20
	},

	salad: {
		price: 20,
		calories: 5
	},

	potato: {
		price: 15,
		calories: 10
	},

	pepper: {
		price: 15,
		calories: 0
	},

	mayoneese: {
		price: 20,
		calories: 5
	}
}

class Burger {
	constructor() {
		this.items = this._fetch();
	}

	_fetch() {
		this.burger = burger;
	}
}

const bur = new Burger();
// bur._fetch();




class Size {

	constructor(size, bur) {
	this.hamburger = bur;
	this.size = size;
	this.price=0;
	this.calories=0;
		
	}
	_size(){

		this.price += this.hamburger.burger[this.size].price;
		this.calories += this.hamburger.burger[this.size].calories;
		
		var checkedBoxes = document.querySelectorAll('input[name=add]:checked');
		for (var i = 0; i < checkedBoxes.length; i++) {
			var ad = checkedBoxes[i].id;
			this.price += this.hamburger.burger[ad].price;
			this.calories += this.hamburger.burger[ad].calories;
		}
		
	// return (this.price, this.calories)	
	} 
	
}
console.log(bur);
	
const chooseSize = new Size();



  class Result {
	constructor (price, calories) {
		this.price = price;
		this.calories = calories;
	}

	_result() {
		document.getElementById('price').innerHTML = this.price;
		document.getElementById('calories').innerHTML = this.calories;
	}
}
const result = new Result(chooseSize.price, chooseSize.calories);
result._result();


document.getElementById('form').addEventListener('submit', function(e){
	chooseSize._size(document.querySelector('input[name="size"]:checked').value, bur)
	e.preventDefault();
	
	console.log(selectorSize, selectorAdd, chooseSize.price, chooseSize.calories);
});
