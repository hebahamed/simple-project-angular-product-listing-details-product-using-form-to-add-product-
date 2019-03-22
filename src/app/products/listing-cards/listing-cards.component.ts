import { Component, OnInit, Input } from '@angular/core';
import { productItem } from 'src/app/model/product-item';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'listing-cards',
  templateUrl: './listing-cards.component.html',
  styleUrls: ['./listing-cards.component.scss'],
})
export class ListingCardsComponent implements OnInit {

  @Input() dataProducts:ProductService;
  @Input() products:productItem[];
  @Input() productsSearch:productItem[];

  constructor(private proserv:ProductService) {
    
    this.products = this.proserv.getAll();
    
  }
  
  ngOnInit() {
    
    
  }
  
}
