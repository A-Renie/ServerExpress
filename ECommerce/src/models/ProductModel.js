let productList = [
    {id:1, name:"RTX 5090", price:2999.00, stock: 42, isActive:true},
    {id:2, name:"Produit 2", price:2999.00, stock: 10000, isActive:true},
    {id:3, name:"Produit 3", price:99.99, stock: 0, isActive:false},
]

let currentId=3

class ProductModel{
    constructor(id,name,price,stock,isActive){
        this.id = currentId ++ ;
        this.name = name || null ;
        this.price = price || 0 ;
        this.stock = stock || 0 ;
        this.isActive = isActive || true ;
    }

    static async findAll() {
        return productList;
    }

    // a améliorer avec gestion d'erreur
    static async findById(id) {
        return productList.find(product => product.id === Number(id)) || null;
    }


    static async create(data) {
        const newProduct = new ProductModel(currentId++, data?.name, data?.price ,data?.stock, data?.isActive )
        productList.push(newProduct);
        return newProduct;
    }


}

module.exports = ProductModel;
