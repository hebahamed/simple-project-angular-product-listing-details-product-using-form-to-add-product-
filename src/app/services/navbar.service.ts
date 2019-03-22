import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  navItemSelected: Subject<string>;
  constructor() { 
this.navItemSelected = new Subject<string>();
  }
  onNavSelectedItem(navName:string)
{
  this.navItemSelected.next(navName);
}
ondestroy()
{
  this.navItemSelected.unsubscribe();
}
}
