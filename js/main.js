// Функция открытия модального окна поиска
function openSearch() {
  document.getElementById("searchModal").classList.add("show");
}

// Функция закрытия модального окна поиска
function closeSearch() {
  document.getElementById("searchModal").classList.remove("show");
}

// Функция переключения видимости меню пользователя
function toggleUserMenu() {
  const userMenu = document.getElementById("userMenu");
  const cart = document.getElementById("cart");

  // Если корзина открыта, закрываем её перед открытием меню
  if (cart.classList.contains("show")) {
    cart.classList.remove("show");
  }

  // Переключаем видимость меню пользователя
  userMenu.classList.toggle("show");
}

// Функция для открытия/закрытия корзины
function toggleCart() {
  const cart = document.getElementById("cart");
  const userMenu = document.getElementById("userMenu");

  // Если меню пользователя открыто, закрываем его перед открытием корзины
  if (userMenu.classList.contains("show")) {
    userMenu.classList.remove("show");
  }

  // Переключаем видимость корзины
  cart.classList.toggle("show");
}

// Закрытие модального окна поиска, если кликнули вне его
window.onclick = function (event) {
  const modal = document.getElementById("searchModal");
  const cart = document.getElementById("cart");
  const userMenu = document.getElementById("userMenu");

  // Закрытие поиска, если кликнули вне окна поиска
  if (event.target === modal) {
    closeSearch();
  }

  // Закрытие корзины, если кликнули вне корзины
  if (event.target === cart) {
    cart.classList.remove("show");
  }

  // Закрытие меню пользователя, если кликнули вне меню
  if (event.target === userMenu) {
    userMenu.classList.remove("show");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const buyBtn = document.querySelector(".buy-btn");
  const orderForm = document.getElementById("order-form");
  const closeFormBtn = document.getElementById("close-form");

  // Показать форму заказа при нажатии на кнопку
  buyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    orderForm.style.display = "flex"; // Показываем форму
  });

  // Закрыть форму заказа
  closeFormBtn.addEventListener("click", function () {
    orderForm.style.display = "none"; // Скрыть форму
  });
});
