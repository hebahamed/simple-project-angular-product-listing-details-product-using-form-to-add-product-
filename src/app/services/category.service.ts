import { Category} from 'src/app/model/category';

export class categoryService
{
    categories :Category[];
    constructor()
    {
        this.categories = [
            {id : 1 ,name :'heba' },
            {id : 2 , name :'ahmed' },
            {id : 3 , name : 'hamed'},
            {id : 4 , name : 'mohamed'},
            {id : 5 , name :'ali' },
            {id : 6 , name : 'israa'},
            {id : 7 , name : 'nada'},
            {id : 8 , name : 'On Dilivery'},
            {id : 9 , name : 'woman'},
            {id : 10 , name : 'men'},
            {id : 11 , name : 'boys'},
            {id : 12 , name : 'girls'},
            {id : 13 , name : 'kids'},
            {id : 14 , name : 'On Dilivery'}

            


        ];
         

    }
    getAll()
    {
        return this.categories.slice();
    }
    
}