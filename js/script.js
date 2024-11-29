// Ajusta a altura do parallax, caso esteja sendo usado
function parallax_height() {
  var scroll_top = $(window).scrollTop();
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-header").css({ height: header_height - scroll_top });
}

$(document).ready(function () {
  parallax_height();
  $(window).scroll(function () {
    parallax_height();
  });
  $(window).resize(function () {
    parallax_height();
  });
});


const track = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Pega todos os itens originais do carrossel
let items = Array.from(track.children);
let totalItems = items.length;
let currentIndex = Math.floor(totalItems / 2); // Começa com o item central

// Duplica os itens no início e no fim para criar o looping infinito
function cloneItems() {
  const firstClone = items.map(item => item.cloneNode(true));
  const lastClone = items.map(item => item.cloneNode(true));

  firstClone.forEach(clone => track.appendChild(clone));
  lastClone.reverse().forEach(clone => track.prepend(clone));

  // Atualiza a lista de itens após adicionar os clones
  items = Array.from(track.children);
  totalItems = items.length / 3; // Calcula o total sem os clones
}

// Atualiza o carrossel com o item ativo centralizado
function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  const adjustedIndex = currentIndex + totalItems; // Considera os clones

  // Move o carrossel horizontalmente para centralizar o item ativo
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${adjustedIndex * itemWidth}px)`;

  // Atualiza a classe `active`
  items.forEach((item, index) => {
    item.classList.toggle('active', index === adjustedIndex);
  });
}

// Garante que o looping infinito aconteça
function handleInfiniteLoop() {
  const itemWidth = items[0].getBoundingClientRect().width;

  if (currentIndex === -1) {
    track.style.transition = 'none';
    currentIndex = totalItems - 1;
    track.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease';
    });
  }

  if (currentIndex === totalItems) {
    track.style.transition = 'none';
    currentIndex = 0;
    track.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease';
    });
  }
}

// Eventos das setas
rightArrow.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
  setTimeout(handleInfiniteLoop, 500); // Ajusta o looping após a transição
});

leftArrow.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
  setTimeout(handleInfiniteLoop, 500); // Ajusta o looping após a transição
});

// Ajusta o carrossel na mudança de tamanho da janela
window.addEventListener('resize', () => {
  updateCarousel();
});

// Inicializa o carrossel
cloneItems();
updateCarousel();


$(document).ready(function () {
  // Função para verificar se o elemento está visível na tela
  function checkVisibility() {
    // Para cada um dos elementos
    $('.criminal, .divorcio, .inventario').each(function() {
      var element = $(this);
      var elementOffset = element.offset().top;
      var windowScroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Verifica se o elemento está visível na tela
      if (windowScroll + windowHeight > elementOffset + 100) {  // 100px de buffer para começar a animação antes
        element.addClass('visible'); // Adiciona a classe 'visible' quando o elemento entra na tela
      }
    });
  }

  // Verifica a visibilidade ao carregar e ao rolar a página
  $(window).on('scroll', function () {
    checkVisibility();
  });

  // Também verifica no início (quando a página é carregada)
  checkVisibility();
});
