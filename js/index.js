/*
                    <tr>
                        <td>01</td>
                        <td>Produto 1</td>
                        <td>R$1000.00</td>
                        <td>
                            <span class="material-symbols-outlined" onclick="product.edit(${id},'${name}', ${value})">edit</span>
                            <span class="material-symbols-outlined" onclick="product.delete(${id})">delete</span>     
                        </td>
                    </tr>
*/ 

/* class product */

class Product {
  
    constructor(){
        this.id = 0;
        this.products = [];
        this.editId = null;
    }

    save(){
        let product = this.#getData();//recebe o objeto produto

        if(product === 'invalid'){
            return
        }

        if(this.editId != null){//caso o editId não seja null, significa que o 'modo de edição' está ativo
            this.#update()
            document.querySelector('#btn-save').innerText = 'Salvar'
            this.clear()
            this.#renderProducts()
            this.editId = null
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

        this.products.forEach(({ id, name, value}) => {
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
                                        <span class="material-symbols-outlined" onclick="product.edit(${id},'${name}', ${value})">edit</span>
                                        <span class="material-symbols-outlined" onclick="product.delete(${id})">delete</span>     
                                        </td>`
        })
   }

    edit(id, name, value){
        document.querySelector('#productName').value = name
        document.querySelector('#productValue').value = value
        document.querySelector('#btn-save').innerText = 'Atualizar'
        this.editId = id
   }

   #update(){
    this.products.forEach(({id}, i) => {
        if(id == this.editId){
            this.products[i].name = document.querySelector('#productName').value
            this.products[i].value = document.querySelector('#productValue').value
        }
    })
   }

    delete(id){
        if(confirm('Você realmente deseja deletar esse item? Depois de deletado não há como recupera-lo!')){
            this.products.forEach((product, index) => {
                if(product.id === id){
                    this.products.splice(index, 1)
                    this.#renderProducts()
                }
            })
       }
    }
}

let product = new Product();