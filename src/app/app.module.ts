import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CardItemComponent } from './products/card-item/card-item.component';
import { NavbarComponent } from './products/navbar/navbar.component';
import { FilterListComponent } from './products/filter-list/filter-list.component';
import { SearchComponent } from './products/search/search.component';
import { ListingCardsComponent } from './products/listing-cards/listing-cards.component';
import { PopupComponent } from './shared/popup/popup.component';
import { ShoppingCardComponent } from './products/shopping-card/shopping-card.component';
import { ListingProductsComponent } from './pages/listing-products/listing-products.component';
import { AddComponentComponent } from './pages/add-component/add-component.component';
import { NavbarService } from './services/navbar.service';
import { ProductService } from './services/product.service';
import { ReactiveFormsModule, ControlContainer } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { PaymentService } from './services/paymentType.service';
import { categoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    NavbarComponent,
    FilterListComponent,
    SearchComponent,
    ListingCardsComponent,
    PopupComponent,
    ShoppingCardComponent,
    ListingProductsComponent,
    AddComponentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '' ,component : ListingProductsComponent},
      { path : 'products' , component : ListingProductsComponent},
      { path : 'products/add' , component : AddComponentComponent},
      { path : 'products/details/:id' , component : DetailsComponent},
      { path : '' ,redirectTo:'products',pathMatch:'full'}
    ])
  ],
  providers: [ProductService,NavbarService,PaymentService,categoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
