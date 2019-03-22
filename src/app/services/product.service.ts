import { productItem } from 'src/app/model/product-item';
export class ProductService
{
    products :productItem[];
    constructor()
    {
        this.products = [
            {id:1,price:55,name:"heba",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:2,price:155,name:"ahmed",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:3,price:85,name:"ali",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:4,price:65,name:"yassin",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:5,price:53,name:"nada",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:6,price:33,name:"esraa",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:7,price:78,name:"heba",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:8,price:99,name:"heba",sale:30,image:"../assets/img/banner-03.jpg"},
            {id:9,price:55,name:"heba",sale:30,image:"../assets/img/banner-03.jpg"}
          ];

    }
    getAll()
    {
        return this.products.slice();
    }
    getById(id:number)
    {
        return this.products.find(p=>p.id===id);
    }
    add(product:productItem)
    {
        this.products.push(product);
    }
    update(product:productItem)
    {
       let oldProduct = this.getById(product.id);
       oldProduct.price = product.price;
       oldProduct.name = product.name;
       oldProduct.image = product.image;
       oldProduct.sale = product.sale;
    }
    Delete(id:number)
    {
         let index = this.products.findIndex(p=>p.id===id);
         this.products.splice(index,1);
    }
    
}