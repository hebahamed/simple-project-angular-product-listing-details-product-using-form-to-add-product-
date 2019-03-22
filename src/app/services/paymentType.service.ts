import { paymentType} from 'src/app/model/payment-types';
import { Input } from '@angular/core';

export class PaymentService
{
    paymentType1 :paymentType[];
   
    constructor()
    {
        this.paymentType1 = [
            {id : 1 ,name :'Direct Bank Transfare' },
            {id : 2 , name :'Cheque Payment' },
            {id : 3 , name : 'Paypal'},
            {id : 4 , name : 'Visa'},
            {id : 5 , name :'Mastercard' },
            {id : 6 , name : 'On Dilivery'}
        ];
         

    }
    getAll()
    {
        return this.paymentType1.slice();
    }

}