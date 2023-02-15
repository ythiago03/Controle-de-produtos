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
        let product = this.#getData();
        if(product === 'invalid'){
            return
        }

        this.products.push(product)
        this.clear()
        this.#renderProducts()
        this.id++;
    }

   #getData(){
    let product = {}

    product.id = this.id;
    product.name = document.querySelector('#productName').value;
    product.value = document.querySelector('#productValue').value;
      
    if(this.#verifyData(product)){
        this.clear()
        return 'invalid'
    }
    
    return product
   }

   #verifyData({ name, value }){
        let errorMessage = ''

        if(name === ''){
            errorMessage += 'Oops! Insira um nome válido! \n'
        }
        if(value === ''){
            errorMessage += 'Oops! Insira um valor válido! \n'
        }

        if(errorMessage != ''){
            alert(errorMessage)
            return true
        }
        return false
   }

   clear(){
        document.querySelector('#productName').value = ''
        document.querySelector('#productValue').value = ''
   }

   #renderProducts(){
    let tbody = document.querySelector('#tbody')
    tbody.innerHTML = ''

    this.products.forEach(({ id, name, value }) => {
        let tr = tbody.insertRow()
        let tdId = tr.insertCell()
        let tdTitle = tr.insertCell()
        let tdValue = tr.insertCell()
        let tdActions = tr.insertCell()

        tdId.innerHTML = id
        tdTitle.innerHTML = name
        tdValue.innerHTML = value
        tdActions.innerHTML = `
                                <td>
                                    <span id="${id}" class="material-symbols-outlined" onclick="product.editevent()">edit</span>
                                    <span id="${id}" class="material-symbols-outlined" onclick="product.delete(event)">delete</span>     
                                    </td>`
    })
   }

   edit(){
        console.log('editada');
   }

   delete({target}){
        this.products.forEach((product, index) => {
            if(index === +target.id){
                this.products.splice(index, 1)
                this.#renderProducts()
            }
        })
   }
}

let product = new Product()

//btnSave.addEventListener('click', product.save)
// btnCancel.addEventListener('click', product.cancel)
