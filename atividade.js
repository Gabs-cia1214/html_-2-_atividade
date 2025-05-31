function atv1() {
  let agora = new Date();
  let hora = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  alert("Hora atual: " + hora + ":" + minutos + ":" + segundos);
}
function atv2() {
  let aleatorio = Math.random() * 10;
  alert("Número aleatório: " + aleatorio.toFixed(0));
}

function atv3() {
  let limite = Number(prompt("Digite o limite máximo:"));
  let aleatorio = Math.random() * limite;
  alert("Número aleatório: " + aleatorio.toFixed(0));
}

function atv4() {
  let numero = prompt("Digite um número");
  let raiz = Math.sqrt(numero);
  alert("A raiz quadrada de " + numero + " é: " + raiz.toFixed(0));
}

function atv5() {
  let numero = Number(prompt("Digite um número:"));
  let raiz = Math.sqrt(numero);
  let potencia = Math.pow(numero, 2);
  alert(
    "A raiz quadrada de " +
      numero +
      " é: " +
      raiz.toFixed(0) +
      "\nO número elevado ao quadrado é: " +
      potencia
  );
}
function atv6() {
  let nomes = ["Ana", "Carlos", "Beatriz", "Bruno", "Gabriel"];
  for (let i = 0; i < nomes.length; i++) {
    alert("Nome: " + nomes[i]);
  }
}

function atv7() {
  let quantidade = Number(prompt("Quantas pessoas quer cadastrar?"));
  let pessoas = [];
  for (let i = 0; i < quantidade; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    pessoas.push(nome);
  }
  for (let i = 0; i < pessoas.length; i++) {
    alert("Pessoas cadastradas " + (i + 1) + ": " + pessoas[i]);
  }
  //alert("Pessoas cadastradas: " + pessoas.join(", "));
}

function atv8() {
  let limite = Number(prompt("Digite até qual número deseja contar:"));
  for (let i = 0; i <= limite; i++) {
    alert("Número: " + i);
  }
}

function atv9() {
  let operacao = prompt("Escolha a operação: +, -, *, /");
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let potencia = Math.pow(num1, 2);
  let resultado;
  if (operacao === "+") {
    resultado = num1 + num2;
  } else if (operacao === "-") {
    resultado = num1 - num2;
  } else if (operacao === "*") {
    resultado = num1 * num2;
  } else if (operacao === "/") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Divisão por zero não é permitida.";
    }
  } else {
    resultado = "Operação inválida.";
  }
  alert(
    "Resultado: " +
      resultado +
      "\nO número " +
      num1 +
      " elevado ao quadrado é: " +
      potencia
  );
  // alert("Resultado: " + resultado +  "\nO número elevado ao quadrado é: " +
  //   potencia);
}

function atv10() {
  let senhaCorreta = "12345";
  let tentativa = prompt("Digite a senha:");
  if (tentativa === senhaCorreta) {
    alert("Acesso permitido.");
  } else {
    alert("Acesso negado.");
  }
}
