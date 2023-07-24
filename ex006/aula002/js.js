
let botao = document.getElementById('atvb')
let botao2 = document.getElementById('atvb2')
let limpar2 = document.getElementById('limpar')
    botao.addEventListener("click", function(){
        let res= document.getElementById('res')
        res.classList.toggle("hide");
        botao.classList.toggle("hide")
        botao2.classList.toggle("hide")
        limpar2.classList.toggle("hide")
        
    })

function tabuada() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");

  if (num.value.lengteh == 0) {
    window.alert("Por favor, digite um número !.");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} X ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}

function limpar() {
    document.getElementById("txtn").value = '';
    document.getElementById('seltab').value = '';

}

