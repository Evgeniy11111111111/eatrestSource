if (document.getElementById("index")) {
  initArraySwiper();

  const btnSort = document.querySelector(".restaurants__sort");
  const sortModal = document.querySelector(".sorting");
  const scrollSort = document.querySelector(".sorting__box")
  const btnFilter = document.querySelector(".restaurants__filter");
  const filterModal = document.querySelector(".filter");
  const scrollFilter = document.querySelector(".filter__box");
  btnSort.addEventListener('click', (e) => {
    e.stopPropagation()
    openModal(sortModal)
    scrollSort.scrollTo(0, 0)
    document.body.classList.add('lock')
    if (filterModal.classList.contains("active")) {
      filterModal.classList.remove("active")
    }
  })
  btnFilter.addEventListener('click', (e) => {
    e.stopPropagation()
    openModal(filterModal)
    scrollFilter.scrollTo(0, 0)
    document.body.classList.add('lock')
    if (sortModal.classList.contains("active")) {
      sortModal.classList.remove("active")
    }
  })

  setupModalEvents(sortModal, scrollSort)
  setupModalEvents(filterModal, scrollFilter)

  const inputSearch = document.querySelector('.search-input');
  const btnClearSearch = document.querySelector('.search-input-clear')
  const inputSearchList = document.querySelector('.search-input-list')
  inputSearch.addEventListener('input', () => {
    showClear(inputSearch, btnClearSearch)
    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  })
  btnClearSearch.addEventListener("click", () => {
    clearInput(inputSearch)
    showClear(inputSearch, btnClearSearch)

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  })



  const addressBtn = document.querySelector('.address-block-btn')
  const addBtn = document.querySelector('.address-block-add')
  const addressSearch = document.querySelector('.address-block-search')
  const formAddressSearch = document.querySelector(".js-search-form")
  const addressList = document.querySelector(".address-block-list")

  addressBtn.addEventListener('click', () => {
    addressBtn.parentElement.classList.contains("is-show") ? accordionNotActive(addressBtn) : accordionActive(addressBtn)
  })

  addBtn.addEventListener('click', () => {
    addressSearch.classList.add('active');
    setTimeout(() => {
      formAddressSearch.querySelector("input").focus();
    }, 300)
  })

  formAddressSearch.addEventListener('submit', e => {
    e.preventDefault();
    const input = formAddressSearch.querySelector("input")
    const label = createLabel(input.value);
  })

  document.addEventListener('click', (e) => {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active")
      document.body.classList.remove("lock")
    }
  })

  document.addEventListener('click', (e) => {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active")
      document.body.classList.remove("lock")
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
  tel.addEventListener("input", (e) => {
    inputPhone(e)
  })
  tel.addEventListener("keydown", (e) => {
    onePhoneKeyDown(e)
  })
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

  basketDelete.addEventListener('click', () => {
    modalDelete.show()
  })

  initArraySwiper();

  countChange(count)

  const modalPhone = document.querySelector(".basket__confirm-modal")
  const changePhoneBtn = document.querySelector(".basket__confirm-phone")
  const phoneNum = document.querySelector(".basket__confirm-phone-num")
  const inputTel = document.querySelector(".basket__confirm-modal-input")
  const inputBtn = document.querySelector(".basket__confirm-modal-btn")

  inputTel.addEventListener("input", (e) => {
    inputPhone(e)
  })
  inputTel.addEventListener("keydown", (e) => {
    onePhoneKeyDown(e)
    if (e.keyCode === 13) {
      phoneNum.textContent = inputTel.value
      inputTel.value = ''
      modalPhone.classList.remove("active");
    }
  })
  inputBtn.addEventListener("click", () => {
    phoneNum.textContent = inputTel.value
    inputTel.value = ''
    modalPhone.classList.remove("active");
  })

  changePhoneBtn.addEventListener("click", () => {
    modalPhone.classList.add("active");
  })

  document.addEventListener("click", (e) => {
    if (!modalPhone.contains(e.target) && !changePhoneBtn.contains(e.target)) {
      modalPhone.classList.remove("active");
    }
  })
}

if (document.getElementById("success")) {
  initArraySwiper();
  const btns = document.querySelectorAll('.success__grade-star');
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btns.forEach((elem, indexElem) => {
        if (indexElem <= index) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active")
        }
      })
    })
  })

}

if (document.getElementById("account")) {
  const addBtn = document.querySelector('.address-block-add');
  const addressSearch = document.querySelector('.address-block-search');
  const formAddressSearch = document.querySelector(".js-search-form")
  const addressList = document.querySelector(".address-block-list")

  addBtn.addEventListener('click', () => {
    addressSearch.classList.add('active');
    setTimeout(() => {
      formAddressSearch.querySelector("input").focus();
    }, 300)
  })

  formAddressSearch.addEventListener('submit', e => {
    e.preventDefault();
    const input = formAddressSearch.querySelector("input")
    const label = createLabel(input.value);
    addressList.insertAdjacentHTML('beforeend', label);
    input.value = "";
    addressSearch.classList.remove("active");
  })

  document.addEventListener('click', (e) => {
    if (!addressSearch.contains(e.target) && !addBtn.contains(e.target)) {
      addressSearch.classList.remove('active')
    }
  })

  const modalName = document.querySelector(".account__info-modal")
  const changeNameBtn = document.querySelector(".account__info-name-wrap")
  const nameSpan = document.querySelector(".account__info-name")
  const inputName = document.querySelector(".account__info-modal-input")
  const inputBtn = document.querySelector(".account__info-modal-btn")

  inputBtn.addEventListener("click", () => {
    nameSpan.textContent = inputName.value
    inputName.value = "";
    modalName.classList.remove("active");
  })

  inputName.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      nameSpan.textContent = inputName.value
      inputName.value = "";
      modalName.classList.remove("active");
    }
  })

  changeNameBtn.addEventListener("click", () => {
    modalName.classList.add("active");
  })

  document.addEventListener("click", (e) => {
    if (!modalName.contains(e.target) && !changeNameBtn.contains(e.target)) {
      modalName.classList.remove("active");
    }
  })
}

if (document.getElementById("stock")) {
  initArraySwiper();

  if (document.querySelector(".js-card")) {
    productCard();
  }

}

if (document.getElementById("restaurant")) {

  if (document.querySelector(".js-card")) {
    productCard();
  }

  const btnSort = document.querySelector(".restaurant__settings-sort");
  const sortModal = document.querySelector(".sorting");
  const scrollSort = document.querySelector(".sorting__box")
  const btnFilter = document.querySelector(".restaurant__settings-filter");
  const filterModal = document.querySelector(".filter");
  const scrollFilter = document.querySelector(".filter__box");


  const inputSearch = document.querySelector('.search-input');
  const btnClearSearch = document.querySelector('.search-input-clear')
  const inputSearchList = document.querySelector('.search-input-list')
  inputSearch.addEventListener('input', () => {
    showClear(inputSearch, btnClearSearch)
    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  })
  btnClearSearch.addEventListener("click", () => {
    clearInput(inputSearch)
    showClear(inputSearch, btnClearSearch)

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  })


  btnSort.addEventListener('click', (e) => {
    e.stopPropagation()
    openModal(sortModal)
    scrollSort.scrollTo(0, 0)
    document.body.classList.add('lock')
    if (filterModal.classList.contains("active")) {
      filterModal.classList.remove("active")
    }
  })
  btnFilter.addEventListener('click', (e) => {
    e.stopPropagation()
    openModal(filterModal)
    scrollFilter.scrollTo(0, 0)
    document.body.classList.add('lock')
    if (sortModal.classList.contains("active")) {
      sortModal.classList.remove("active")
    }
  })

  setupModalEvents(sortModal, scrollSort)
  setupModalEvents(filterModal, scrollFilter)

  document.addEventListener('click', (e) => {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active")
      document.body.classList.remove("lock")
    }
  })

  document.addEventListener('click', (e) => {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active")
      document.body.classList.remove("lock")

    }
  })

  initArraySwiper();

}

if (document.getElementById("product")) {
  const swiper = new Swiper(".product__top-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10
  })

  if (document.querySelector(".js-card")) {
    productCard();
  }

  const btn = document.querySelector(".product__top-add")
  const counter = document.querySelector(".product__top-counter")
  const count = counter.querySelector("span");
  const minus = counter.querySelector(".product__top-counter-minus");
  const plus = counter.querySelector(".product__top-counter-plus");

  btn.addEventListener("click", () => {
    openCounter(btn, counter)
  });

  minus.addEventListener("click", () => {
    changeCounter(count, btn, counter, "minus")
  })

  plus.addEventListener("click", () => {
    changeCounter(count, btn, counter, "plus")
  })

  initArraySwiper();
}

// Функции
function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  })
}

function initArraySwiper() {
  if (document.querySelector(".js-swiper-init")) {
    const swiperBlock = document.querySelectorAll(".js-swiper-init");
    swiperBlock.forEach(elem => {
      const swiper = initSwiper(elem)
    })
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function handleStart(event) {
  if (event.type === "touchstart") {
    this.startY = event.touches[0].clientY;
  } else if (event.type === "mousedown") {
    this.startY = event.clientY;
    this.isDragging = true;
  }
}

// function handleMove(event, scroll) {
//   let endY;
//   if (event.type === "touchmove") {
//     endY = event.touches[0].clientY;
//   } else if (event.type === "mousemove" && this.isDragging) {
//     endY = event.clientY;
//   } else {
//     return;
//   }
//
//   let deltaY = endY - this.startY;
//   if (deltaY > 0 && scroll.scrollTop === 0) {
//     this.style.bottom = -deltaY + "px";
//   }
// }

function handleEnd(event, scroll) {
  if (this.isDragging || event.type === "touchend") {
    let endY;
    if (event.type === "touchend") {
      endY = event.changedTouches[0].clientY;
    } else if (event.type === "mouseup") {
      endY = event.clientY;
      this.isDragging = false;
    }

    let deltaY = endY - this.startY;
    if (deltaY > 50 && scroll.scrollTop === 0) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }
  }
}

function setupModalEvents(modal, scroll) {
  modal.addEventListener("click", stopPropagation);
  scroll.addEventListener("touchstart", stopPropagation);

  modal.addEventListener("touchstart", handleStart);
  // modal.addEventListener("touchmove", function (event) {
  //   handleMove.call(modal, event, scroll);
  // });
  modal.addEventListener("touchend", function (event) {
    handleEnd.call(modal, event, scroll);
  });

  modal.addEventListener("mousedown", handleStart);
  // modal.addEventListener("mousemove", function (event) {
  //   handleMove.call(modal, event, scroll);
  // });
  modal.addEventListener("mouseup", function (event) {
    handleEnd.call(modal, event, scroll);
  });
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

function onePhoneKeyDown(e) {
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
    num -= 1
  }

  num < 1 ? closeCounter(btn, counter) : span.textContent = num
}

function productCard() {
  const cards = document.querySelectorAll(".js-card");
  cards.forEach(elem => {
    const btnWrap = elem.querySelector(".js-card-btns")
    const btn = elem.querySelector(".js-card-add")
    const counter = elem.querySelector(".js-card-counter")
    const count = counter.querySelector("span");
    const minus = counter.querySelector(".js-card-minus");
    const plus = counter.querySelector(".js-card-plus");

    btnWrap.addEventListener("click", e => {
      e.preventDefault();
    })
    btn.addEventListener("click", () => {
      openCounter(btn, counter)
    });

    minus.addEventListener("click", () => {
      changeCounter(count, btn, counter, "minus")
    })

    plus.addEventListener("click", () => {
      changeCounter(count, btn, counter, "plus")
    })
  })
}



function createLabel(text) {
  return `
    <label class="address__label">
      <input type="radio" name="address" class="address__input"/>
      <span class="address__radio"></span>
      <span class="address__text text-16">
        ${text}
      </span>
    </label>  
  `
}