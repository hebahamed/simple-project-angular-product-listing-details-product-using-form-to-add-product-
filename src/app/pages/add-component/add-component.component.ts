import { Component, OnInit, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, AbstractControl, NgForm} from '@angular/forms';
import { addComponent } from 'src/app/model/add-component';
import { productItem } from 'src/app/model/product-item';
import { ProductService } from 'src/app/services/product.service';
import { PaymentService } from 'src/app/services/paymentType.service';
import { categoryService } from 'src/app/services/category.service';
import { paymentType } from 'src/app/model/payment-types';
import { Category } from 'src/app/model/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {
  @Input() product:productItem;
  @Input() isCheck:paymentType;
  payments:paymentType[];
  categories:Category[];
  newpayments:paymentType[];
  
  constructor(private productService:ProductService,private paymentTypeService:PaymentService , private categoryService:categoryService) {
    this.product ={};
    this.payments = paymentTypeService.getAll();
    this.categories = categoryService.getAll();
   }
   productForm : FormGroup;
  ngOnInit() {
   this.productForm = new FormGroup(
     {
        data : new FormGroup({
            name : new FormControl(),
            description : new FormControl()
          }),
         
         //key   : value
       price : new FormControl(),
       status : new FormGroup({
        state : new FormControl(),
        discount : new FormControl()
      }),
       paymentTypes : new FormArray(this.getPaymentTypes()),
       category : new FormControl(),
       tagsGroup : new FormGroup({
         tags : new FormArray([new FormControl('tag1'), new FormControl('tag2')]),
         tagText : new FormControl()
       })
     }  
   );

  }
OnSubmit()
{
   //declare product obj and fill data in this object to be add
   this.product.name = this.productForm.value.data.name;
   this.product.description = this.productForm.value.data.description;
   this.product.price = this.productForm.value.price;
   this.product.sale = this.productForm.value.discount;

    for(let i=0;i<this.PaymentTypesData.length;i++)
    {
        if(this.PaymentTypesData[i]===true)
        {
          this.newpayments.push(this.getPaymentTypes[i]);
        }
    }

  this.productService.add(this.product); // to add new product
  //this.productService.products.push(this.product);

  console.log(this.productForm);

  
}

// this function to create form controls bnfs 3add el checkboxs elly 3andy
private getPaymentTypes() : AbstractControl[]
{
  const res : AbstractControl[] = [];
  for(let i = 0 ;i < this.paymentTypeService.paymentType1.length ; i++ )
  {
    res.push(new FormControl());
  }
  return res;
  
}

get PaymentTypesData() 
{
  return  (<FormArray>this.productForm.get('paymentTypes')).controls;
}

//at html Tags.controls to when i use it i can casting to formControl 
get Tags() 
{
  return  (<FormArray>this.productForm.get('tagsGroup.tags'));
}

onAddTag()
{
  //hna kda msk el object
  const tag =(<FormControl>this.productForm.get('tagsGroup.tagText'));

  //hy3ml push ll value bta3t el object da fe el array
  this.Tags.push(new FormControl(tag.value));

  //hna lma y3ml enter hyfde makanha b patchvalue
  tag.patchValue(null);
}

}



