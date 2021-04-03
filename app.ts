import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(4);

let p = new Product();
p.id = 2;
p.name = "IPhone X";
p.price = 10000;
p.category = "Telefon";

_productService.saveProduct(p);

// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);