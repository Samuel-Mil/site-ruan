const contents = {
  divorcio: {
    title: "Divórcio",
    iframe: "https://www.youtube.com/embed/Oh9K0FG9jLI",
    description: "Entenda o processo de divórcio e seus principais detalhes.",
    link: "https://ruancamposoliveira.com/divorcio",
  },
  criminal: {
    title: "Criminal",
    iframe: "https://www.youtube.com/embed/wut7PUTFbbI",
    description: "Saiba mais sobre casos criminais e como proceder.",
    link: "https://ruancamposoliveira.com/criminal",
  },
  inventario: {
    title: "Inventário",
    iframe: "https://www.youtube.com/embed/KzPk1hQoyt8",
    description: "Descubra tudo sobre o processo de inventário.",
    link: "https://ruancamposoliveira.com/inventario",
  },
};

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalTitle = modal.querySelector("h1");
const modalIframe = modal.querySelector("iframe");
const modalDescription = modal.querySelector("p");
const modalLink = modal.querySelector("a");
const xBtn = modal.querySelector("span");

function openModal(contentKey) {
  const content = contents[contentKey];

  if (content) {
    modalTitle.textContent = content.title;
    modalIframe.src = content.iframe;
    modalDescription.textContent = content.description;
    modalLink.href = content.link;
    modalLink.textContent = "Saiba mais";

    modal.style.display = "block";
    overlay.style.display = "block";
  }
}

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  modalIframe.src = "";
}

document.querySelectorAll(".open-modal").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const contentKey = link.getAttribute("data-content");
    openModal(contentKey);
  });
});

overlay.addEventListener("click", closeModal);
xBtn.addEventListener("click", closeModal);
