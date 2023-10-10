window.addEventListener('scroll', function () {
    var elementoParaAnimar = document.querySelector('.animated-element');
    var posicaoElemento = elementoParaAnimar.getBoundingClientRect().top;
  
    // Defina a posição em que deseja ativar a animação
    var posicaoAtivacao = window.innerHeight / 2;
  
    if (posicaoElemento < posicaoAtivacao) {
      elementoParaAnimar.classList.add('show');
    }
  });

  


  