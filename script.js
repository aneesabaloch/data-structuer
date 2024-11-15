let store= []
function addData() {
    let id =document.getElementById("p-id").value
    let pName =document.getElementById("p-id").value
    let pType =document.getElementById("p-id").value
    let pLink =document.getElementById("p-id").value


    let imgProduct = {
        id: id,
        name : pName,
        type : pType,
        Link : pLink
    }
    store.push(imgProduct)
    console.log(store);

    let newData = JSON.stringify(store)
    localStorage.setItem("ProductData",newData)
}