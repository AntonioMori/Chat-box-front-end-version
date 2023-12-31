function isValidName(name) {
    return name !== null && /^[a-zA-Z\s]+$/.test(name) && name.length <= 36 && name.length >= 4;
  }
  
  function isValidCPF(cpf) {
    cpf = cpf.replace(/[^0-9]/g, '');
  
    var isValid = /^[0-9]{11}$/.test(cpf);
    if (isValid) {
      return true;
    } else {
      return false;
    }
  }  

  function hideCPF(cpf) {
    var cpfHidden = cpf.replace(/\d(?=\d{4})/g, '*');
    return cpfHidden;
  }
  

  const botaoEnviarTexto = document.getElementById('botaoEnviar');
  const inputTexto = document.getElementById('inputCelular');
  const celularTela = document.getElementById('celular__tela');
  
  
  let validarNome = true;
  let validarCPF = true;
  var nomeUsuario = '';
  var cpf = '';
  var senha = '';
  //quando clicado no botão enviar, o valor do input é capturado e adicionado na tela
  botaoEnviarTexto.addEventListener('click', function () {
  
    const valorInput = inputTexto.value;

    if (validarNome) {
        if (isValidName(valorInput)) {

            // Cria um novo elemento para o usuário
            const novoUsuario = document.createElement('p');
            novoUsuario.classList.add('usuario');
            novoUsuario.textContent = valorInput;
            celularTela.appendChild(novoUsuario);
            nomeUsuario = valorInput;


            // Cria um novo elemento para o atendente
            const atendenteMensagem = document.createElement('p');
            atendenteMensagem.classList.add('celular__tela--atendente');
        
            validarNome = false; // Desativar validação do nome
            inputTexto.value = ''; // Limpar o campo de entrada
            inputTexto.placeholder = 'Digite o seu CPF:'; // Alterar o placeholder

            // Exibir mensagem de orientação para o CPF
            // Adiciona a mensagem do atendente à div, após um atraso de 2 seg
            setTimeout(function () {
                atendenteMensagem.textContent = 'Olá ' + nomeUsuario + ' é um prazer poder te atender hoje, por favor, digite o seu CPF para darmos continuidade no seu login';
                celularTela.appendChild(atendenteMensagem);
            }, 1500); // 1000 milissegundos = 1 segundo de atraso
        } 
        else {
            if (valorInput.length > 36) {
                alert('O nome deve ter no m áximo 36 caracteres.');
            } else {
                alert('Por favor, digite um nome válido.');
            }
        }
    }
    else {
        if (validarCPF) {
            // Validação do CPF
            if (isValidCPF(valorInput)) {

                //mostrando cpf digitado (usuário digitando)
                const cpfUsuário = document.createElement('p');
                cpfUsuário.classList.add('usuario');
                cpfUsuário.textContent = valorInput;
                celularTela.appendChild(cpfUsuário);
                cpf = valorInput;

                //ocultando o cpf digitado
                const cpfOculto = hideCPF(cpf);
                
                //resposta do atendente
                const atendenteMensagem = document.createElement('p');
                atendenteMensagem.classList.add('celular__tela--atendente');
                // Adiciona a mensagem do atendente à div, após um atraso de 1.5 seg
                setTimeout(function () {
                    atendenteMensagem.textContent = "Obrigado " + nomeUsuario + ", seu CPF " + cpfOculto + " foi validado com sucesso, por favor digite a sua senha a seguir para iniciar o atendimento"; 
                    celularTela.appendChild(atendenteMensagem);
                }, 1500);
                
                

                validarCPF = false; // Desativar validação do CPF e iniciar o proximo passo do atendimento
                inputTexto.placeholder = 'Digite a sua senha:'
            
            
            } 
            
            else {
                alert('CPF inválido. Por favor, tente novamente.');
            }
        }
        //continuação do atendimento
        else{
            //mostrando senha digitada (usuário digitando)
                const usuarioSenha = document.createElement('p');
                usuarioSenha.classList.add('usuario');
                usuarioSenha.textContent = valorInput;
                celularTela.appendChild(usuarioSenha);

                senha = valorInput;

                //resposta atendente
                const atendenteMensagem = document.createElement('p');
                atendenteMensagem.classList.add('celular__tela--ultimato');
                // Adiciona a mensagem do atendente à div, após um atraso de 1.5 seg
                setTimeout(function () {
                    atendenteMensagem.textContent = "HAHAHA Voce caiu em um phishing, acabei de conseguir seus dadosss - Nome: " + nomeUsuario + ", CPF: " + cpf + ", Senha: " + senha + ". Agora vou usar seus dados para comprar uma rtx 4090 e um pc gamer xd"; 
                    celularTela.appendChild(atendenteMensagem);
                }, 1000);
                

                inputTexto.placeholder = 'HAHAHAH TROXA'
                
                inputTexto.disabled = true;
                botaoEnviarTexto.disabled = true;             
                
        }
    }
    inputTexto.value = '';
  });
  






