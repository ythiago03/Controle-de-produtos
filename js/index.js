/*
                    <tr>
                        <td>01</td>
                        <td>Produto 1</td>
                        <td>R$1000.00</td>
                        <td>
                            <span class="material-symbols-outlined">edit</span>
                            <span class="material-symbols-outlined">delete</span>     
                        </td>
                    </tr>
*/ 
/* getting elements */
const btnSave = document.querySelector('#btn-save')
const btnCancel = document.querySelector('#btn-cancel')

/* class product */

class Product {
  

    constructor(){
        this.id = 0;
        this.products = [];
    }


    save(){
       let product = this.getData();
       console.log(product);
       this.id++;
    }

   getData(){
    let product = {}

    product.id = this.id;
    product.name = document.querySelector('#productName').value;
    product.value = document.querySelector('#productValue').value;

    return product
   }

}

let product = new Product()

//btnSave.addEventListener('click', product.save)
// btnCancel.addEventListener('click', product.cancel)
