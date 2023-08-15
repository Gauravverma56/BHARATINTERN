const content = document.querySelectorAll(".tab-cont-item")
const tabitem = document.querySelectorAll(".tab-item")

function selection(e){
    removeborder()
    removeshow()
    // showpice()
    this.classList.add("tab-border")
    console.log(this.id)
    const tabcontentid = document.querySelector(`#${this.id}-content`)  
    tabcontentid.classList.add('show')
    // tab-con-3
    // tab-1-item-content
}


function removeborder(){
    tabitem.forEach(item => item.classList.remove("tab-border"))
}
function removeshow(){
    content.forEach(itemm => itemm.classList.remove("show"))
}



tabitem.forEach(item => item.addEventListener('click',selection))
