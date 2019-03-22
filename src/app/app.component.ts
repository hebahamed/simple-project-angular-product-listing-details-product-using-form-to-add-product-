import { Component, Output } from '@angular/core';
import { productItem } from './model/product-item';
import { NavbarService } from './services/navbar.service';
import { Subject } from 'rxjs';
import {NavbarComponent} from './products/navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  navName : string;
   constructor(private navService:NavbarService){
   
   this.navService.navItemSelected.subscribe(
  (value)=>{this.navName = value;}
)
    
    
   }

   
  }

