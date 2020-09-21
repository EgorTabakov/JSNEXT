const API_BASE = '/catalogData';



class ProductService {
  static getProducts() {
    return fetch(`${API_BASE}/catalog.json`).then(data => data.json());
  }
};

class CartServiceGet {
  static getCart() {
    return fetch(`${API_BASE}/cart.json`).then(data => data.json());
  }
};

class CartServicePost {
  static postCart(data) {
    fetch(`${API_BASE}/cart.json`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
};
