const buttonEdit = document.querySelector(".button_edit");
const popupProfile = document.querySelector(".popup_edit");

const buttonAdd = document.querySelector(".button_add");
const popupAdd = document.querySelector(".popup_add");

const buttonClose = popupProfile.querySelector(".button_close");
const buttonCloseAdd = popupAdd.querySelector(".button_close");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const currentName = profileName.textContent;
const currentJob = profileJob.textContent;

const addTitle = document.querySelector(".card__title");
const addImage = document.querySelector(".card__image");
const addForm = document.querySelector(".popup__form_add");
const inputTitle = document.querySelector(".popup__input-title");
const inputImage = document.querySelector(".popup__input-image");
const popupImage = document.querySelector(".popup_image");
const buttonCloseImage = popupImage.querySelector(".button_close");
const popupImageTitle = document.querySelector(".popup__title_img");


const initialCards = [
  {
    name: "valle yosemite",
    link: "./images/kirill-pershin-1088404-unsplash.jpg",
  },
  {
    name: "Tucacas",
    link: "./images/lalo-hernandez-jCYpHYIgXE4-unsplash.jpg",
  },
  {
    name: "Lago luise",
    link: "./images/kirill-pershin-1404681-unsplash.png",
  },
  {
    name: "colorado",
    link: "./images/tim-mossholder-K1M_lwZXJWc-unsplash.jpg",
  },
  {
    name: "Montañas calvas",
    link: "./images/kirill-pershin-1556355-unsplash.png",
  },
  {
    name: "Gran sabana",
    link: "./images/jorge-salvador-Dmo1Zbi_WsU-unsplash.jpg",
  },
];


const container = document.querySelector(".cards");

function createCard(title, link) {
  const template = document.querySelector("#cards-template").content;
  const card = template.querySelector(".card").cloneNode(true);

  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const popupImageElement = document.querySelector(".popup__element");

  const buttonLike = card.querySelector(".button_like");
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("liked");
  });

  const buttonDelete = card.querySelector(".button_delete");
  buttonDelete.addEventListener("click", function () {
    const card = buttonDelete.closest(".card");
    card.remove();
  });

  cardTitle.innerText = title;
  cardImage.src = link;

  container.prepend(card);

  const buttonImage = card.querySelector(".card__image");
  buttonImage.addEventListener("click", function () {
    popupImageElement.src = cardImage.src;
    togglePopup(popupImage);
    popupImageTitle.textContent = cardTitle.textContent;
  });
}

initialCards.forEach(function (cardData) {
  createCard(cardData.name, cardData.link);
});


inputName.value = currentName;
inputJob.value = currentJob;

function togglePopup(popup) {
  popup.classList.toggle("popup_show");
}

buttonEdit.addEventListener("click", function () {
  togglePopup(popupProfile);
});
buttonClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});
profileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  profileForm.reset();
  togglePopup(popupProfile);
});


buttonAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  togglePopup(popupAdd);
});

addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  createCard(inputTitle.value, inputImage.value);

  addForm.reset();
  togglePopup(popupAdd);
});

buttonCloseImage.addEventListener("click", function () {
  togglePopup(popupImage);
});
