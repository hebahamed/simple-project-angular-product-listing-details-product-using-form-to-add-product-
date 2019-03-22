import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productItem } from 'src/app/model/product-item';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private productData:ProductService,private currentRoute:ActivatedRoute) { 
    
  }
  
  product:productItem;
  ngOnInit() {
    
    const id = +this.currentRoute.snapshot.params['id'];
    this.product = this.productData.getById(id);
    
  }

  
}
