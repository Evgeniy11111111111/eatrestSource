if (document.getElementById("index")) {
  const sliderOne = initSwiper(".main-stock__swiper-1")
  const sliderTwo = initSwiper(".main-stock__swiper-2")
  const sliderThree = initSwiper(".main-stock__swiper-3")
  const sliderFour = initSwiper(".main-stock__swiper-4")
  const sliderFive = initSwiper(".main-stock__swiper-5")

  const btnSort = document.querySelector(".restaurants__sort");
  const sortModal = document.querySelector(".sorting");
  const btnFilter = document.querySelector(".restaurants__filter");
  const filterModal = document.querySelector(".filter");
  btnSort.addEventListener('click', () => {
    openModal(sortModal)
  })
  btnFilter.addEventListener('click', () => {
    openModal(filterModal)
  })

  setupModalEvents(sortModal)
  setupModalEvents(filterModal)

  const filterBtn = document.querySelectorAll('.filter__btn');

  filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtn.forEach(elem => elem.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  const restaurantsFilterBtn = document.querySelectorAll('.restaurants__filters-btn')

  restaurantsFilterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      restaurantsFilterBtn.forEach(elem => elem.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  const inputSearch = document.querySelector('.header__input');
  const btnClearSearch = document.querySelector('.header__search-clear')
  inputSearch.addEventListener('input', () => {showClear(inputSearch, btnClearSearch)})
  btnClearSearch.addEventListener("click", () => {
    clearInput(inputSearch)
    showClear(inputSearch, btnClearSearch)
  })

  const addressBtn = document.querySelector('.header__address-btn')
  const addBtn = document.querySelector('.header__address-add')
  const addressSearch = document.querySelector('.header__address-search')

  addressBtn.addEventListener('click', () => {
    addressBtn.parentElement.classList.contains("is-show") ? accordionNotActive(addressBtn) : accordionActive(addressBtn)
  })

  addBtn.addEventListener('click', () => {
    addressSearch.classList.add('active');
  })

  document.addEventListener('click', (e) => {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active")
    }
  })

  document.addEventListener('click', (e) => {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active")
    }
  })

  document.addEventListener('click', (e) => {
    if (!addressBtn.parentElement.contains(e.target)) {
      accordionNotActive(addressBtn)
      addressSearch.classList.remove('active');
    }
  })
}

if (document.getElementById("authorization")) {
  const tel = document.querySelector(".authorization__input[type='tel']");
  tel.addEventListener("input", (e) => {inputPhone(e)})
  tel.addEventListener("keydown", (e) => {onePhoneKeyDown(e)})
}

if (document.getElementById("basket")) {
  const basketDelete = document.querySelector('.basket__header-delete');
  const modalDelete = new bootstrap.Modal(document.querySelector(".js-modal-delete"))
  const cards = document.querySelectorAll('.basket__selected-item')

  const count = document.querySelector('.basket__count-count')

  cards.forEach(card => {
    const counter = card.querySelector('.basket__selected-item-counter')
    const goods = card.querySelector('.basket__selected-item-count')
    countChange(counter, goods);
  })

  basketDelete.addEventListener('click', () => {modalDelete.show()})

  const slider = initSwiper(".basket__swiper")

  countChange(count)
}

if (document.getElementById("success")) {
  const slider = initSwiper(".success__ordered-swiper")

  const btns = document.querySelectorAll('.success__grade-star');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btns.forEach((elem, indexElem) => {
        if (indexElem <= index) {
          elem.classList.add("active");
        } else  {
          elem.classList.remove("active")
        }
      })
    })
  })

}

if (document.getElementById("account")) {
  const addAddress = document.querySelector('.account__address-add');
  const modal = document.querySelector('.account__address-search');
  const inputSearch = document.querySelector('.account__address-search-input')
  const inputSearchBtn = document.querySelector('.account__address-search-btn')

  addAddress.addEventListener('click', () => {
    modal.classList.add('active')
  })

  inputSearch.addEventListener('input', () => showClear(inputSearch, inputSearchBtn))
  inputSearchBtn.addEventListener('click', () => {
    clearInput(inputSearch)
    showClear(inputSearch, inputSearchBtn)
  })

  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !addAddress.contains(e.target)) {
      modal.classList.remove('active')
    }
  })
}

if (document.getElementById("stock")) {
  const sliderOne = initSwiper('.stock__block-swiper')
  const sliderTwo = initSwiper('.stock__block-swiper-2')

  if (document.querySelector(".js-card")) {
    productCard();
  }

}

if (document.getElementById("restaurant")) {

  if (document.querySelector(".js-card")) {
    productCard();
  }

  const inputSearch = document.querySelector(".restaurant__settings-search-input")
  const inputSearchBtn = document.querySelector(".restaurant__settings-search-btn")
  const btnSort = document.querySelector(".restaurant__settings-sort");
  const sortModal = document.querySelector(".sorting");
  const btnFilter = document.querySelector(".restaurant__settings-filter");
  const filterModal = document.querySelector(".filter");


  inputSearch.addEventListener('input', () => showClear(inputSearch, inputSearchBtn))
  inputSearchBtn.addEventListener('click', () => {
    clearInput(inputSearch)
    showClear(inputSearch, inputSearchBtn)
  })


  btnSort.addEventListener('click', () => {
    openModal(sortModal)
  })
  btnFilter.addEventListener('click', () => {
    openModal(filterModal)
  })

  setupModalEvents(sortModal)
  setupModalEvents(filterModal)

  const filterBtn = document.querySelectorAll('.filter__btn');

  filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtn.forEach(elem => elem.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  document.addEventListener('click', (e) => {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active")
    }
  })

  document.addEventListener('click', (e) => {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active")
    }
  })

  const restaurantsFilterBtn = document.querySelectorAll('.restaurant__settings-filters-btn')

  restaurantsFilterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      restaurantsFilterBtn.forEach(elem => elem.classList.remove("active"))
      btn.classList.add("active")
    })
  })

  const swiper  = initSwiper('.restaurant__stock-swiper')
  const swiper2 = initSwiper('.restaurant__offers-swiper')
  const swiper3 = initSwiper('.restaurant__offers-swiper-2')

}

if (document.getElementById("product")) {
  const swiper = new Swiper(".product__top-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10
  })

  if (document.querySelector(".js-card")) {
    productCard();
  }

  const swiper2 = initSwiper(".product__additional-swiper")
  const swiper3 = initSwiper(".product__additional-swiper-2")
}
// Функции
function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  })
}

function stopPropagation(event) {
  event.stopPropagation();
}

function handleTouchStart(event) {
  this.startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  let endY = event.touches[0].clientY;
  if (endY > this.startY) {
    this.classList.remove("active");
    document.body.classList.remove("lock")
  }
}

function handleMouseDown(event) {
  this.startY = event.clientY;
  this.isDragging = true;
}

function handleMouseMove(event) {
  if (this.isDragging) {
    let endY = event.clientY;
    let deltaY = endY - this.startY;
    if (deltaY > 0) {
      this.style.bottom = -deltaY + "px";
    }
  }
}

function handleMouseUp(event) {
  if (this.isDragging) {
    let endY = event.clientY;
    let deltaY = endY - this.startY;
    if (deltaY > 50) {
      this.classList.remove("active");
      document.body.classList.remove("lock")
    } else {
      this.style.bottom = "0";
    }
    this.isDragging = false;
  }
}

function setupModalEvents(modal) {


  modal.addEventListener("click", stopPropagation);

  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", handleTouchMove);

  modal.addEventListener("mousedown", handleMouseDown);
  modal.addEventListener("mousemove", handleMouseMove);
  modal.addEventListener("mouseup", handleMouseUp);
}

function openModal(modal) {
  document.body.classList.add("lock")
  modal.classList.add("active");
  modal.style.bottom = "0"
}

function regPhone(input) {
  return input.value.replace(/\D/g, '');
}

function inputPhone(e) {
  let input = e.target;
  let inputNumberValue = regPhone(input);
  let formattedInputValue = '';
  let selectionStart = input.selectionStart
  // Если в инпут введены симовлы не соответсвующие регулярки, то значение инпута становится пустым
  if (!inputNumberValue) return input.value = ''
  // В этой части я не совсем понимаю что происходит
  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumberValue
    }
    return
  }

  if (['7', '8', '9'].includes(inputNumberValue[0])) {
    // Если первая цифра девять, тогда мы заменяем первую цифру на 7 и девятку делаем второй цифрой
    if (inputNumberValue[0] == '9') inputNumberValue = '7' + inputNumberValue;
    if (inputNumberValue[0] == '8') inputNumberValue = '7'
    // Если первая цифра 7, тогда значение инпута начинается с +7, если первая цифра 8, тогда значение начинается с 8
    let firstSymbol = '+7';
    formattedInputValue = firstSymbol + ' ';
    // Если в инпуте больше одной цифры добавляем скобку открытия и так далее
    if (inputNumberValue.length > 1) {
      formattedInputValue += '(' + inputNumberValue.substring(1, 4)
    }
    if (inputNumberValue.length >= 5) {
      formattedInputValue += ') ' + inputNumberValue.substring(4, 7)
    }
    if (inputNumberValue.length >= 8) {
      formattedInputValue += '-' + inputNumberValue.substring(7, 9)
    }
    if (inputNumberValue.length >= 10) {
      formattedInputValue += '-' + inputNumberValue.substring(9, 11);
    }
  } else { //Если вводимое число не 7, 8 или 9 тогда добавляем +и добавляем введеное число
    formattedInputValue = '+7 (9' + inputNumberValue;
  }
  input.value = formattedInputValue
}

function onePhoneKeyDown (e) {
  let input = e.target;
  if (regPhone(input).length == 1 && e.keyCode === 8) {
    input.value = '';
  }
}

function showClear(input, btn) {
  if (input.value.length > 0) {
    btn.disabled = false
  } else {
    btn.disabled = true
  }
}

function clearInput(input) {
  input.value = "";
}

function countChange(count, goods) {
  const span = count.querySelector('span');
  const minus = count.firstElementChild;
  const plus = count.lastElementChild;

  minus.addEventListener('click', () => {
    const num = Number(span.textContent) - 1
    span.textContent = num;
    if (!!goods) {
      goods.textContent = `${num} шт.`
    }
    disabledMinus(num, minus)
  })

  plus.addEventListener('click', () => {
    const num = Number(span.textContent) + 1
    span.textContent = num;
    if (!!goods) {
      goods.textContent = `${num} шт.`
    }
    disabledMinus(num, minus)
  })
}

function disabledMinus(num, btn) {
  if (num < 1) {
    btn.disabled = true
  } else {
    btn.disabled = false
  }
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  let panel = item.nextElementSibling;
  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  let panel = item.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null
  }
}

function openCounter(btn, counter) {
  btn.classList.add("not-active");
  counter.classList.add("active")
}

function closeCounter(btn, counter) {
  btn.classList.remove("not-active");
  counter.classList.remove("active")
}

function changeCounter(span, btn, counter, operator) {

  let num = Number(span.textContent);

  if (operator === "plus") {
    num += 1
  } else {
    num -=1
  }

  num < 1 ? closeCounter(btn, counter) : span.textContent = num
}

function productCard() {
  const cards = document.querySelectorAll(".js-card");
  cards.forEach(elem => {
    const btn = elem.querySelector(".js-card-add")
    const counter = elem.querySelector(".js-card-counter")
    const btnWrap = elem.querySelector(".js-card-btns")
    const count = counter.querySelector("span");
    const minus = counter.querySelector(".js-card-minus");
    const plus = counter.querySelector(".js-card-plus");

    btn.addEventListener("click", () => {openCounter(btn, counter)});

    btnWrap.addEventListener("click", e => {
      e.preventDefault();
    })

    minus.addEventListener("click", () => {changeCounter(count, btn, counter, "minus")})

    plus.addEventListener("click", () => {changeCounter(count, btn, counter, "plus")})
  })
}