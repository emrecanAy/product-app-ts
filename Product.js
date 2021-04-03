"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    // <------------Ctor 1.Yol-------------->
    // id: number;
    // name: string;
    // category: string;
    // price: number;
    // constructor(id, name){
    //     this.id = id;
    //     this.name = name;
    // }
    // <------------Ctor 1.Yol-------------->
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    ;
    return Product;
}());
exports.Product = Product;
var p = new Product(5, "Computer", "Tech", 2500);
