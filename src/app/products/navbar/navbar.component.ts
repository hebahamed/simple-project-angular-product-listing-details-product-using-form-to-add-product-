import { Component, OnInit, Input, Output } from '@angular/core';
import { productItem } from 'src/app/model/product-item';
import { Subject, Subscription } from 'rxjs';
import {NavbarService} from '../../services/navbar.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //@Output() itemSelected:Subject<string>; // this subject to fire events on nav bar
  isOpened:boolean;
  isOpened2:boolean;
  
  constructor(private navService:NavbarService)
   { 
 // this.itemSelected=new Subject<string>();
    this.isOpened = false;
  }

  ngOnInit() {
  }
onSelectedItem(name:string)
{
 // this.itemSelected.next(name);
  this.navService.navItemSelected.next(name);
}
onDisplayCard()
{
  this.isOpened = !(this.isOpened);
}
onDisplayDropDown()
{
  this.isOpened2 = !(this.isOpened2);
}
ondestroy()
{
  //this.itemSelected.unsubscribe();
}
}
