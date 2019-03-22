import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { productItem } from 'src/app/model/product-item';
import { ProductService } from 'src/app/services/product.service';
@Pipe({
  name: 'search'
})
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products1 :productItem[];
  constructor(private productServ:ProductService) { 
    this.products1=this.productServ.getAll();
   } 

  ngOnInit() {
  }

search(val:any)
{
 
 this.products1 = this.productServ.products.filter((x)=>x.name==val);
 console.log(this.products1);
//  return this.products1;
 
}
}
