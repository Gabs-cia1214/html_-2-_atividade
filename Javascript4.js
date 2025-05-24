function media() {
  let n1 = parseFloat(prompt(" Primeira nota: "));
  let n2 = parseFloat(prompt(" Sugunda nota: "));
  let n3 = parseFloat(prompt(" Terceira nota: "));
  let n4 = parseFloat(prompt(" Quarta nota: "));

  let media = (n1 + n2 + n3 + n4) / 4;
  alert(" Total da média " + media.toFixed(1) + ".");

  if (media >= 18) {
    alert(" Aprovado! ");
  } else {
    alert(" Reprovado ");
  }
}

function seleção() {
  var nome = prompt("Qual o seu nome completo?");
  if (nome && nome.trim().split(" ").length > 1) {
    alert("Nome válido");
    console.log(nome);
  } else {
    alert("Escreva seu nome completo!");
    return; // interrompe a função se o nome não for válido
  }

  let cargo = prompt("Qual era o seu cargo anterior?");
  while (!cargo) {
    alert("Por favor, digite a informação corretamente!");
    cargo = prompt("Qual era o seu cargo anterior?");
  }
  let tempo = prompt("Quanto tempo você trabalhava?");
  while (!tempo) {
    alert("Por favor, digite o valor corretamente!");
    tempo = prompt("Quanto tempo você trabalhava?");
  }
  let salario = prompt("Quanto você recebia no antigo cargo?");
  while (isNaN(salario) || salario <= 0) {
    alert("Por favor, digite o valor correto!");
    salario = prompt("Quanto você recebia no antigo cargo?");
  }
  let anyu = prompt(" Teria algúm interesse nesta vaga? ");
  while (!anyu) {
    alert("Por favor, digite sua resposta.");
    anyu = prompt(" Teria algúm interesse nesta vaga? ");
  }
  if (anyu == "sim") {
    alert("Parábens pela sua decisão! ");
  } else {
    alert("Obrigado pela sua atenção! ");
  }
}

function imc() {
  let peso = parseFloat(prompt("Informe seu peso"));
  while (isNaN(peso) || peso >= 0) {
    alert("Por favor, digite a informação coretamente.");
    peso = parseFloat(prompt("Informe seu peso"));
  }
  let altura = parseFloat(prompt("Informe seu altura "));
  while (isNaN(altura) || altura >= 0) {
    alert("Por favor, informe a informação correta. ");
    altura = parseFloat(prompt("Informe seu altura "));
  }

  let imc = peso / (altura * altura);

  alert(" Seu imc é: " + imc.toFixed(1));

  if (imc <= 16) {
    alert(" Classificação:Magreza grave! ");
  } else if (imc <= 17) {
    alert(" Classificação: Magreza moderada ");
  } else if (imc <= 18.5) {
    alert(" Classificação: Magraza leve ");
  } else if (imc <= 25) {
    alert(" Classificação: Saudável ");
  } else if (imc <= 30) {
    alert(" Classificação: Sobrepeso");
  } else if (imc <= 35) {
    alert(" Classificação: Obesidade 1° Grau! ");
  } else if (imc <= 40) {
    alert(" Classificação: Obesidade 2° Grau! ");
  } else if (imc >= 40) {
    alert(" Classificação: Obesidade 3° Grau! ");
  }
}

function desconto() {
  let nome = prompt(" Digite o seu nome ");
  let produto = parseInt(prompt(" Digite o valor do produto "));
  let Valordesconto = parseInt(prompt(" Digite o valor do desconto recebido "));

  let ValordescontoCalculado = produto * (Valordesconto / 100);
  let valorfinal = produto - ValordescontoCalculado;

  alert(
    nome +
      "," +
      " você recebeu um desconto de : " +
      ValordescontoCalculado.toFixed(2) +
      "." +
      " Você pagará apenas R$: " +
      valorfinal.toFixed(2)
  );
}

function soma() {
  let n1 = parseFloat(prompt("Digite um número"));
  let n2 = parseFloat(prompt("Digite outro número"));

  let soma = n1 + n2;
  let divi = n1 / n2;
  let multi = n1 * n2;
  let sub = n1 - n2;

  alert(
    "O total da soma entre os números é :" +
      soma +
      " Multiplicação: " +
      multi +
      " Subtração: " +
      sub +
      " Divisão: " +
      divi
  );
}

function mão() {
  let n1 = parseFloat(prompt(" Digite o valor do produto "));
  while (isNaN(n1) || n1 >= 0) {
    alert("Por favor, digite o valor coretamente.");
    n1 = parseFloat(prompt(" Digite o valor do produto "));
  }
  let produto = parseFloat(prompt("Digite o valor do produto"));
  while (isNaN(produto) || produto >= 0) {
    alert("Por favor, digite o valor corretamente.");
  }
  let total = produto / 5;
  let v = produto + n1;

  alert(
    " O valor total, com as prestações será: " +
      " Total: " +
      v +
      " Prestações: " +
      total
  );
}
function salario() {
  alert("Olá seja bem-vindo!");
  let nome = prompt(" Porfavor!, " + "Digite seu nome!");
  while (!nome) {
    alert("O nome não pode estar vazio. Tente novamente. ");
    nome = prompt("Por favor, digite seu nome");
  }

  let sala = parseFloat(
    prompt(" Porfavor!, " + "Digite o valor do seu salário atual")
  );
  while (isNaN(sala) || sala <= 0) {
    alert("Por favor, digite um valor válido para o salário ");
    sala = parseFloat(
      prompt(" Porfavor!, " + "Digite o valor do seu salário atual")
    );
  }
  let venda = parseFloat(
    prompt(
      " Porfavor!, " +
        "Quanto foi o total de vendas feitas neste mês? (Dinheiro) "
    )
  );
  while (isNaN(sala) || sala < 0) {
    alert(
      "Por favor, digite o valor válido para o valor de vendas feitas no mês"
    );
    venda = parseFloat(
      prompt(
        " Porfavor!, " +
          "Quanto foi o total de vendas feitas neste mês? (Dinheiro) "
      )
    );
  }

  let comissao = venda * 0.15;
  let total = comissao + sala;

  alert(
    "Caro, " +
      nome +
      ", seu salário fixo é: R$ " +
      sala.toFixed(2).replace(",", ".") +
      ", Sua comissão será de R$" +
      comissao.toFixed(2).replace(",", ".") +
      ", seu salário final será: R$ " +
      total.toFixed(2).replace(",", ".")
  );
}
function calculaárea() {
  let r = parseFloat(prompt("Digite o raio do círculo: "));

  if (isNaN(r) || r <= 0) {
    alert("Por favor, insira um valor válidoo para o raio");
  }

  let area = Math.PI * Math.pow(r, 2);
  alert("A área do círculo é: " + area.toFixed(2));
}

function carro() {
  let distancia = parseFloat(
    prompt("Escreva o total de quilômentros percorridos pelo veículo : ")
  );
  let combustivel = parseFloat(
    prompt("Escreva o total de litros de combutível consumido: ")
  );

  if (
    isNaN(distancia) ||
    isNaN(combustivel) ||
    distancia <= 0 ||
    combustivel <= 0
  ) {
    alert("Por favor, insira valores válidos para distância e combustível.");
    return;
  }

  let consumomedio = distancia / combustivel;

  alert(
    "O consumo médio do veículo foi: " + consumomedio.toFixed(2) + " Km/L."
  );
}

function media() {
  let nome = prompt(" Digite o seu nome: ");
  let n1 = parseFloat(prompt("Digite a sua nota: "));
  let n2 = parseFloat(prompt("Digite a segunda nota: "));
  let n3 = parseFloat(prompt("Digite a terceira nota: "));

  let totalmedia = (n1 + n2 + n3) / 3;

  alert(
    "O aluno: " +
      nome +
      ", obteve o total da no semestre " +
      totalmedia.toFixed(2) +
      "."
  );

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 <= 0 || n2 <= 0 || n3 <= 0) {
    alert("Por favor, insira os valores corretos");
    return;
  }
  if (totalmedia >= 8) {
    alert(nome + " foi Aprovado com média: " + totalmedia.toFixed(2));
  } else {
    alert(nome + " foi Reprovado com média: " + totalmedia.toFixed(2));
  }
}
function sala() {
  let nome = prompt("Digite seu nome");
  while (!nome) {
    alert("Por favor, escreva seu nome para continuar com o processo. ");
    nome = prompt("Digite seu nome");
  }
  let sala = parseFloat(prompt("Digite o seu salário atual?: "));
  while (isNaN(sala) || sala <= 0) {
    alert("Por favor, digite o valor corretamente.");
    sala = parseFloat(prompt("Digite o seu salário atual?: "));
  }
  let comi = parseFloat(
    prompt(
      "Digite o total(Dinheiro) de vendas que foram arrecadado  no final do mês: "
    )
  );
  while (isNaN(comi) || comi < 0);
  {
    alert("Por favor, digite o valor correto.");
    comi = parseFloat(
      prompt("Digite o total de vendas que foram feitas no final do mês: ")
    );
  }
  let total = comi * 0.15;
  let salariofinal = sala + total;

  alert(
    "Olá, " +
      nome +
      ", o seu salário fixo é de: " +
      "R$" +
      sala.toFixed(2) +
      ", e o seu salário no final do mês será de " +
      "R$" +
      salariofinal.toFixed(2)
  );
}
function temperatura() {
  let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
  while (isNaN(celsius)) {
    alert("Por favor, insira um número válido. ");
    celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
  }
  let fahr = (9 * celsius + 160) / 5;
  alert("A temperatura em Fahrenheit é: " + fahr.toFixed(2) + "°f");
}

function dolar() {
  alert("Boa tarde!");
  alert("Seja bem-vindo ao ConvertCoin");

  let ValorBRL = parseFloat(prompt("Digite um valor em BRL"));
  while (isNaN(ValorBRL) || ValorBRL <= 0) {
    alert("Por favor, digite um valor.");
    ValorBRL = parseFloat(prompt("Digite um valor em BRL"));
  }
  let taxa = 5.2;
  let ValorUSD = (ValorBRL * 1) / taxa;

  alert(
    "A coversão de " +
      "R$" +
      ValorBRL +
      " para o dolar é " +
      "US$" +
      ValorUSD.toFixed(2) +
      ", com a taxa de câmbio, " +
      " 1 USD =" +
      taxa +
      " BRL "
  );
}
function juro() {
  alert("Boas vindas!");

  let valor = parseFloat(prompt("Digite um valor por favor."));
  while (isNaN(valor) || valor < 0) {
    alert("Por favor, digite um valor.");
    valor = parseFloat(prompt("Digite um valor por favor."));
  }
  let valor2 = parseFloat(prompt("Digite o segundo valor."));
  while (isNaN(valor2) || valor < 0) {
    alert("Por favor, digite um valor.");
  }
  let valor3 = valor + valor2;
  let r = 0.007;
  let valorfinal = valor3 * (1 + r);

  alert(
    "o valor total, junto com o juros é R$ " +
      valorfinal.toFixed(2) +
      ", com o valor fixo sendo R$ " +
      valor3.toFixed(2)
  );
}

// atividade 2

function des() {
  alert("Seja bem vindo!");

  let produto = parseFloat(prompt("Digite o valor do produto."));
  let produto2 = parseFloat(prompt("Digite o valor do segundo produto."));
  let desco = parseFloat(prompt("Digite o valor do desconto."));

  let valorfinal = produto + produto2 - desco;
  let preçofinal = (desco / valorfinal) * 100;

  alert(
    "O valor total dos produtos foram R$ " +
      valorfinal.toFixed(2) +
      ", com o valor do desconto de " +
      "R$ " +
      desco +
      ", transformando em porcentagem daria uns " +
      preçofinal.toFixed(2) +
      "%"
  );
}

function consumo() {
  let dis = parseFloat(prompt("Digite a distância percorrida. "));
  while (isNaN(dis) || dis < 0) {
    alert("Por favor, digite um valor.");
    dis = parseFloat(prompt("Digite a distância percorrida. "));
  }
  let con = parseFloat(prompt("Digite o valor total de galosina comsumida."));
  while (isNaN(con) || con < 0) {
    alert("Pro favor, digite um valor.");
    con = parseFloat(prompt("Digite o valor total de galosina comsumida."));
  }

  let comsumomédio = dis / con;

  alert(
    "O consumo médio do veículo foi: " + comsumomédio.toFixed(2) + " Km/L."
  );
}

function dolar() {
  alert("Seja bem-vindo ao ConvertCoin.");
  // Valor BRL
  let valorBRL = parseFloat(prompt("Digite um valor."));
  // Valor Cambio
  let taxa = 5.97;
  //Fórmula
  let valorUSD = valorBRL / taxa;

  // mensagem
  alert(
    "A conversão de R$" +
      valorBRL +
      " para o dólar será de US$" +
      valorUSD.toFixed(2) +
      ", sendo que o valor da taxa de câmbio do dia é US$" +
      taxa
  );
}

function tinta() {
  let altura = parseFloat(prompt("Digite a altura(Metros)."));
  // while (isNaN(altura) || altura < 0);
  {
    //alert("Por favor, digite um valor.");
    // altura = parseFloat(prompt("Digite a altura(Metros)."));
  }
  let largura = parseFloat(prompt("Digite a lagura(Metros)."));
  //while (isNaN(largura) || largura < 0);
  {
    //alert("Por favor, digite um valor.");
    //  largura = parseFloat(prompt("Digite a lagura(Metros)."));
  }
  // calcular a área da parede;
  let quantidadedatinta = largura * altura;
  // cobertura por litro;
  let cobertura = 10;
  // Calcular a quantidade de tinta;
  let totaldatita = quantidadedatinta / cobertura;

  // Resultado
  alert(
    "O total da largura X altura: " +
      quantidadedatinta +
      "m²" +
      ", assim, o total de tinta necessária para pintar será: " +
      totaldatita.toFixed(2) +
      "L"
  );
}

function seleção() {
  // let opçao = prompt ("Informe a opção:" + "\n" + "1-suco" + "\n" + "2-salada" + "\n" + "3-Bolo" + "\n" + "4-Frutas" );
  let op = parseInt(
    prompt("Informe a opção: \n1,suco\n2.salada\n3.bolo\n4.fruta")
  );

  switch (op) {
    case 1:
      alert("O suco é R$5,00");
      break;
    case 2:
      alert("A salada é R$10,00");
      break;
    case 3:
      alert("O bolo é R$5,00");
      break;
    case 4:
      alert(" fRUTAS É r$7,00");
      break;
    default:
      alert("Opção inválida");
  }
}

function fun() {
  let opçao = parseInt(
    prompt("Escolha um n°:1 - suco,2 -frutas,3 - salada,4 -banana")
  );

  if ((opçao = 1)) {
    alert("Você escolheu suco.");
  } else if ((opçao = 2)) {
    alert("Você escolheu frutas.");
  } else if ((opçao = 3)) {
    alert("Você escolheu salada.");
  } else if ((opçao = 4)) {
    alert("Você escolhu banana.");
  } else {
  }
}
function op() {
  let op = prompt("Informe a opção: \nsuco\nsalada\nbolo\nfruta");

  switch (op) {
    case "suco":
      alert("O suco é R$5,00");
      break;
    case "Salada":
      alert("A salada é R$10,00");
      break;
    case "Bolo":
      alert("O bolo é R$5,00");
      break;
    case "Fruta":
      alert(" fRUTAS É r$7,00");
      break;
    default:
      alert("Opção inválida");
  }
}
function calculadora() {
  let n1 = parseFloat(prompt("Informe o número"));
  let n2 = parseFloat(prompt("Informe o número"));

  let tipo = prompt("Informe a operação: +,-,*,/,^");
  switch (tipo) {
    case "+":
      resultado = n1 + n2;
      alert("A soma dos números é " + resultado);
      break;
    case "-":
      resultado = n1 - n2;
      alert("A subtração é " + resultado);
      break;
    case "*":
      resultado = n1 * n2;
      alert("A multiplicação é " + resultado);
      break;
    case "/":
      resultado = n1 / n2;
      alert("A divisão é " + resultado);
      break;
    case "^":
      resultado = n1 ^ n2;
      alert("O resultado é " + resultado);
      break;
  }
}
function pc() {
  let op = parseInt(
    prompt("O que você vai fazer hoje:1.Assister filme, 2.Trabalhar, 3.Estudar")
  );
  switch (op) {
    case 1:
      alert("Indico o filme O poderoso chefão");
      break;
    case 2:
      alert("Bom trabalho");
      break;
    case 3:
      alert("Estude lógica de programção");
      break;
    default:
      alert("Digite uma poção válida");
  }
}

function pc2() {
  let op;
  do {
    op = parseInt(
      prompt(
        "O que você vai fazer hoje:1.Assister filme, 2.Trabalhar, 3.Estudar"
      )
    );

    switch (op) {
      case 1:
        alert("Indico o filme O poderoso chefão");
        break;
      case 2:
        alert("Bom trabalho");
        break;
      case 3:
        alert("Estude lógica de programção");
        break;
      default:
        alert("Digite uma poção válida");
    }
  } while (op !== 1 && op !== 2 && op !== 3);
  {
    alert("Bom final de semana!");
  }
}

function validarnome() {
  let nome;

  do {
    nome = prompt("Digite seu nome");

    if (!nome || nome.length < 3) {
    } else {
      alert("Bem vindo, " + nome);
    }
  } while (!nome || nome.length < 3);
}

function funçãolor() {
  let cont;

  for (cont = 1; cont < 5; cont++) {
    alert("Contei " + cont);
  }
}

function tabuada() {
  let tabuada;
  let cont;
  let resultado;

  tabuada = parseInt(prompt("Digite um número da tabuada."));

  for (cont = 1; cont <= 10; cont++) {
    resultado = tabuada * cont;
    alert(tabuada + "X" + cont + "=" + resultado);
  }
}

function lista1() {
  let item;
  let frutas = ["maçã", "banana"];
  item = prompt("Digite um item");
  //frutas.push("laranja");
  frutas.push(item);
  alert(frutas); // "maçã", "banana", "laranja"
  alert("Total de frutas: " + frutas.length);
  alert(frutas[2]);
}
function lista2() {
  let tarefas = ["estudar", "fazer exercício"];
  let lista = tarefas.join(",");
  alert(lista); // "estudar", "fazer exercício"
}

function lista3() {
  let nomes = ["Lucas", "Ana", "Beatriz"];
  nomes.sort();
  alert(nomes);
}

function lista4() {
  let dia = 1;
  while (dia <= 5) {
    alert("Dia" + dia + ": Levantar cedo e estudar!");
    dia++;
  }
}
function lista5() {
  let tarefas;
  let lista = [];
  while (tarefas !== "sair") {
    tarefas = prompt("Digite uma tarefa (ou 'Sair')");
    if (tarefas !== "Sair");
    {
      lista.push(tarefas);
    }
  }
  alert("Suas tarefas de hoje são:\n" + lista.join("\n"));

  alert("A tarefa mais importante é ");
  alert(lista[1]);
}

function lista6() {
  let ListaCompras = [];
  let item;
  while(item !== "fim") {
    item = prompt("Digite um item da sua lista (ou 'fim' para encerrar):");
    if (item !== "fim") {
      ListaCompras.push(item);
    }
  }
  alert("Sua lista de compras:\n" + ListaCompras.join("\n"));

  alert("O item mais importante da sua lista é:")
  alert(item[1]);
}