import { Component, OnInit, Input } from '@angular/core';
import { productItem } from 'src/app/model/product-item';
import {PopupComponent} from 'src/app/shared/popup/popup.component';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit{
  @Input() data:productItem;
  products:productItem[] ;
  constructor(private navService:NavbarService)
   { 
 // this.itemSelected=new Subject<string>();
  
  }

  ngOnInit() {
  }
  onSelectedItem(name:string)
{
 // this.itemSelected.next(name);
  this.navService.navItemSelected.next(name);
}

}

