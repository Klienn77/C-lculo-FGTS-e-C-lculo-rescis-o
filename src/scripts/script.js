  // Exemplo básico para adicionar interatividade usando JavaScript

        //  adicionar um evento de clique em cada card para mostrar um alerta.
        const cards = document.querySelectorAll('.card a'); // Seleciona os links dentro dos cards
        const mensagemDiv = document.getElementById('mensagem'); 

        // 2. Adicionar eventos de clique nos elementos
        cards.forEach(card => {
            card.addEventListener('click', (event) => {
                // Impede o redirecionamento imediato (comentar essa linha para ativar o redirecionamento)
                event.preventDefault();

               // Atualiza o conteúdo da mensagem
                mensagemDiv.textContent = `Você clicou no link para: ${card.textContent}`;
                mensagemDiv.classList.remove('mensagem-oculta'); // Exibe a mensagem

                 // Após 3 segundos, oculta a mensagem novamente
            setTimeout(() => {
                mensagemDiv.classList.add('mensagem-oculta');
                window.location.href = card.href; // Redireciona após a mensagem
           }, 1000); // 1 segundo
    });
  });

       
            
        



    //fgts
          // Adicionando funcionalidade ao formulário   
          const form = document.getElementById('fgtsForm');
          const resultado = document.getElementById('resultado');
  
          form.addEventListener('submit', (e) => {
              e.preventDefault(); // Evita o recarregamento da página
  
              // Captura os valores dos campos da entrada
              const salario = parseFloat(document.getElementById('salario').value);
              const tempo = parseInt(document.getElementById('tempo').value);
  
              // Calcula o saldo de FGTS (8% do salário por mês)
              const fgts = salario * 0.08 * tempo;
  
              // Exibe o resultado, usando innerHTML recomendado para usuarios finais
              resultado.innerHTML = `<h2>Resultado</h2><p>O saldo de FGTS acumulado é: <strong>R$ ${fgts.toFixed(2)}</strong></p>`;
          });



          
//rescisao

// Adicionando funcionalidade ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  // 1. Captura os valores dos campos
  const salario = parseFloat(document.getElementById('salario').value); // Salário mensal
  const tempo = parseInt(document.getElementById('tempo').value); // Tempo de serviço em meses

  if (isNaN(salario) || isNaN(tempo) || salario <= 0 || tempo <= 0) {
    resultado.innerHTML = '<p style="color: red;">Por favor, preencha os campos corretamente.</p>';
    return;
  }

  // 2. Cálculos de rescisão:
  // a) Saldo de FGTS acumulado (8% do salário por mês)
  const fgts = salario * 0.08 * tempo;

  // b) Multa de 40% sobre o FGTS
  const multaFgts = fgts * 0.4;

  // c) Aviso prévio (30 dias de salário)
  const avisoPrevio = salario;

  // d) Férias proporcionais (1/12 do salário por mês trabalhado)
  const feriasProporcionais = (salario / 12) * tempo;

  // e) 1/3 constitucional sobre as férias
  const umTercoFerias = feriasProporcionais / 3;

  // f) Total da rescisão
  const totalRescisao = fgts + multaFgts + avisoPrevio + feriasProporcionais + umTercoFerias;

  // 3. Exibe o resultado formatado
  resultado.innerHTML = `
    <h2>Resultado do Cálculo</h2>
    <p><strong>Saldo de FGTS acumulado:</strong> R$ ${fgts.toFixed(2)}</p>
    <p><strong>Multa de 40% sobre o FGTS:</strong> R$ ${multaFgts.toFixed(2)}</p>
    <p><strong>Aviso prévio:</strong> R$ ${avisoPrevio.toFixed(2)}</p>
    <p><strong>Férias proporcionais:</strong> R$ ${feriasProporcionais.toFixed(2)}</p>
    <p><strong>1/3 constitucional sobre as férias:</strong> R$ ${umTercoFerias.toFixed(2)}</p>
    <h3><strong>Total da rescisão:</strong> R$ ${totalRescisao.toFixed(2)}</h3>
  `;
});

