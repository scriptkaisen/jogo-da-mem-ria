// Variables
// DOM

let menu = document.getElementById('menu'); // Obtém o elemento com id "menu"
let select = document.getElementById('numCards'); // Obtém o elemento select com id "numCards"
let start = document.getElementById('start'); // Obtém o botão com id "start" 
// Configuring the menu (Configurando o menu)

for (let i= 4; i<= 10; i += 2){ // Loop de 4 até 10, incrementando de 2 em 2 
  let n = i * i; //Calcula i2 (o quadrado de i)
  
// Create a new option for the select element (Cria uma nova opção para o select)

  let op = document.createElement('option'); // Cria um novo elemento <option>

  // Set both value anf content to i2 (Define o valor e o conteúdo da opção como i2)

  op.value = n; // Define o valor da opção como n (i2)
  op.innerHTML = n; // Define o conteúdo da opção como n (i2)

  // Add the new option to the page (Adiciona a nova opção a página)
  select.appendChild(op); //Adiciona a opção criada ao elemento select
}