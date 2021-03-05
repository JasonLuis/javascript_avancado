var campos = [
  //document.querySelector seleciona o elemento atraves do id, classe ou especificando o elemento
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

console.log(campos);
var tbody = document.querySelector('table tbody')
//addEventListener e usado quando ocorre um evento na query selecionada
//necessario informar o evento e a função que ira executar
document.querySelector('.form').addEventListener('submit',function(event){
  event.preventDefault();
  //createElement cria um elemento
  var tr = document.createElement('tr');
  campos.forEach(function(campo){
    var td = document.createElement('td');
    //textContent recebe o valor em texto
    td.textContent = campo.value;
    //appendChild recebe o elemento filho
    tr.appendChild(td);
  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;
  
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = '';
  campos[2].value = '';

  campos[0].focus();
})