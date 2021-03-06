const API_BASE = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON';

class ProductService {
  static getProducts() {
    return fetch(`${API_BASE}/catalog.json`).then(data => data.json());
  }
}