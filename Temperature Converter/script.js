const cel = document.getElementById('cel')
const fah = document.getElementById('fah')

const reset = document.querySelector("#reset")

cel.addEventListener('input',function(){
    let val = this.value;
    let rel = (val * 9/5)+32;
    let kelrel = val + 273.15;
    fah.value = rel;
    kel.value= kelrel;
})
fah.addEventListener('input',function(){
    let valu = this.value;
    let celrel = (valu - 32) * 5/9;
    let kelrel = (valu - 32) * 5/9 + 273.15
    cel.value = celrel;
    kel.value = kelrel;
})


reset.addEventListener('click',function(){
  location.reload(true)
})