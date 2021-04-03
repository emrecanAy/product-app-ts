export class Product {

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
    constructor(public id?: number, public name?: string, public category?: string, public price?: number){ };

}

let p = new Product(5,"Computer","Tech",2500);