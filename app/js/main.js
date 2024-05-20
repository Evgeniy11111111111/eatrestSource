"use strict";

if (document.getElementById("index")) {
  initArraySwiper();
  var btnSort = document.querySelector(".restaurants__sort");
  var sortModal = document.querySelector(".sorting");
  var scrollSort = document.querySelector(".sorting__box");
  var btnFilter = document.querySelector(".restaurants__filter");
  var filterModal = document.querySelector(".filter");
  var scrollFilter = document.querySelector(".filter__box");
  btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(sortModal);
    scrollSort.scrollTo(0, 0);
    document.body.classList.add('lock');

    if (filterModal.classList.contains("active")) {
      filterModal.classList.remove("active");
    }
  });
  btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(filterModal);
    scrollFilter.scrollTo(0, 0);
    document.body.classList.add('lock');

    if (sortModal.classList.contains("active")) {
      sortModal.classList.remove("active");
    }
  });
  setupModalEvents(sortModal, scrollSort);
  setupModalEvents(filterModal, scrollFilter);
  console.log(scrollSort);
  var filterBtn = document.querySelectorAll('.filter__btn');
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle("active");
    });
  });
  var restaurantsFilterBtn = document.querySelectorAll('.restaurants__filters-btn');
  restaurantsFilterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      restaurantsFilterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
  var inputSearch = document.querySelector('.search-input');
  var btnClearSearch = document.querySelector('.search-input-clear');
  var inputSearchList = document.querySelector('.search-input-list');
  inputSearch.addEventListener('input', function () {
    showClear(inputSearch, btnClearSearch);

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  });
  btnClearSearch.addEventListener("click", function () {
    clearInput(inputSearch);
    showClear(inputSearch, btnClearSearch);

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  });
  var addressBtn = document.querySelector('.address-block-btn');
  var addBtn = document.querySelector('.address-block-add');
  var addressSearch = document.querySelector('.address-block-search');
  var formAddressSearch = document.querySelector(".js-search-form");
  var addressList = document.querySelector(".address-block-list");
  var deliveryBtn = document.querySelectorAll(".header__delivery-btn");
  deliveryBtn[0].classList.add("active");
  deliveryBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      deliveryBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
  addressBtn.addEventListener('click', function () {
    addressBtn.parentElement.classList.contains("is-show") ? accordionNotActive(addressBtn) : accordionActive(addressBtn);
  });
  addBtn.addEventListener('click', function () {
    addressSearch.classList.add('active');
    setTimeout(function () {
      formAddressSearch.querySelector("input").focus();
    }, 300);
  });
  formAddressSearch.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = formAddressSearch.querySelector("input");
    var label = createLabel(input.value);
    addressList.insertAdjacentHTML('beforeend', label);
    input.value = "";
    addressSearch.classList.remove("active");
  });
  document.addEventListener('click', function (e) {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!addressBtn.parentElement.contains(e.target)) {
      accordionNotActive(addressBtn);
      addressSearch.classList.remove('active');
    }
  });
}

if (document.getElementById("authorization")) {
  var tel = document.querySelector(".authorization__input[type='tel']");
  tel.addEventListener("input", function (e) {
    inputPhone(e);
  });
  tel.addEventListener("keydown", function (e) {
    onePhoneKeyDown(e);
  });
}

if (document.getElementById("basket")) {
  var basketDelete = document.querySelector('.basket__header-delete');
  var modalDelete = new bootstrap.Modal(document.querySelector(".js-modal-delete"));
  var cards = document.querySelectorAll('.basket__selected-item');
  var count = document.querySelector('.basket__count-count');
  cards.forEach(function (card) {
    var counter = card.querySelector('.basket__selected-item-counter');
    var goods = card.querySelector('.basket__selected-item-count');
    countChange(counter, goods);
  });
  basketDelete.addEventListener('click', function () {
    modalDelete.show();
  });
  initArraySwiper();
  countChange(count);
  var modalPhone = document.querySelector(".basket__confirm-modal");
  var changePhoneBtn = document.querySelector(".basket__confirm-phone");
  var phoneNum = document.querySelector(".basket__confirm-phone-num");
  var inputTel = document.querySelector(".basket__confirm-modal-input");
  var inputBtn = document.querySelector(".basket__confirm-modal-btn");
  inputTel.addEventListener("input", function (e) {
    inputPhone(e);
  });
  inputTel.addEventListener("keydown", function (e) {
    onePhoneKeyDown(e);

    if (e.keyCode === 13) {
      phoneNum.textContent = inputTel.value;
      inputTel.value = '';
      modalPhone.classList.remove("active");
    }
  });
  inputBtn.addEventListener("click", function () {
    phoneNum.textContent = inputTel.value;
    inputTel.value = '';
    modalPhone.classList.remove("active");
  });
  changePhoneBtn.addEventListener("click", function () {
    modalPhone.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    if (!modalPhone.contains(e.target) && !changePhoneBtn.contains(e.target)) {
      modalPhone.classList.remove("active");
    }
  });
}

if (document.getElementById("success")) {
  initArraySwiper();
  var btns = document.querySelectorAll('.success__grade-star');
  btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      btns.forEach(function (elem, indexElem) {
        if (indexElem <= index) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      });
    });
  });
}

if (document.getElementById("account")) {
  var _addBtn = document.querySelector('.address-block-add');

  var _addressSearch = document.querySelector('.address-block-search');

  var _formAddressSearch = document.querySelector(".js-search-form");

  var _addressList = document.querySelector(".address-block-list");

  _addBtn.addEventListener('click', function () {
    _addressSearch.classList.add('active');

    setTimeout(function () {
      _formAddressSearch.querySelector("input").focus();
    }, 300);
  });

  _formAddressSearch.addEventListener('submit', function (e) {
    e.preventDefault();

    var input = _formAddressSearch.querySelector("input");

    var label = createLabel(input.value);

    _addressList.insertAdjacentHTML('beforeend', label);

    input.value = "";

    _addressSearch.classList.remove("active");
  });

  document.addEventListener('click', function (e) {
    if (!_addressSearch.contains(e.target) && !_addBtn.contains(e.target)) {
      _addressSearch.classList.remove('active');
    }
  });
  var modalName = document.querySelector(".account__info-modal");
  var changeNameBtn = document.querySelector(".account__info-name-wrap");
  var nameSpan = document.querySelector(".account__info-name");
  var inputName = document.querySelector(".account__info-modal-input");

  var _inputBtn = document.querySelector(".account__info-modal-btn");

  _inputBtn.addEventListener("click", function () {
    nameSpan.textContent = inputName.value;
    inputName.value = "";
    modalName.classList.remove("active");
  });

  inputName.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      nameSpan.textContent = inputName.value;
      inputName.value = "";
      modalName.classList.remove("active");
    }
  });
  changeNameBtn.addEventListener("click", function () {
    modalName.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    if (!modalName.contains(e.target) && !changeNameBtn.contains(e.target)) {
      modalName.classList.remove("active");
    }
  });
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

  var _btnSort = document.querySelector(".restaurant__settings-sort");

  var _sortModal = document.querySelector(".sorting");

  var _scrollSort = document.querySelector(".sorting__box");

  var _btnFilter = document.querySelector(".restaurant__settings-filter");

  var _filterModal = document.querySelector(".filter");

  var _scrollFilter = document.querySelector(".filter__box");

  var _inputSearch = document.querySelector('.search-input');

  var _btnClearSearch = document.querySelector('.search-input-clear');

  var _inputSearchList = document.querySelector('.search-input-list');

  _inputSearch.addEventListener('input', function () {
    showClear(_inputSearch, _btnClearSearch);

    if (_inputSearch.value.length > 1) {
      _inputSearchList.classList.add("active");
    } else {
      _inputSearchList.classList.remove("active");
    }
  });

  _btnClearSearch.addEventListener("click", function () {
    clearInput(_inputSearch);
    showClear(_inputSearch, _btnClearSearch);

    if (_inputSearch.value.length > 1) {
      _inputSearchList.classList.add("active");
    } else {
      _inputSearchList.classList.remove("active");
    }
  });

  _btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_sortModal);

    _scrollSort.scrollTo(0, 0);

    document.body.classList.add('lock');

    if (_filterModal.classList.contains("active")) {
      _filterModal.classList.remove("active");
    }
  });

  _btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_filterModal);

    _scrollFilter.scrollTo(0, 0);

    document.body.classList.add('lock');

    if (_sortModal.classList.contains("active")) {
      _sortModal.classList.remove("active");
    }
  });

  setupModalEvents(_sortModal, _scrollSort);
  setupModalEvents(_filterModal, _scrollFilter);

  var _filterBtn = document.querySelectorAll('.filter__btn');

  _filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle("active");
    });
  });

  document.addEventListener('click', function (e) {
    if (!_sortModal.contains(e.target) && !_btnSort.contains(e.target)) {
      _sortModal.classList.remove("active");

      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!_filterModal.contains(e.target) && !_btnFilter.contains(e.target)) {
      _filterModal.classList.remove("active");

      document.body.classList.remove("lock");
    }
  });

  var _restaurantsFilterBtn = document.querySelectorAll('.restaurant__settings-filters-btn');

  _restaurantsFilterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      _restaurantsFilterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });

      btn.classList.add("active");
    });
  });

  initArraySwiper();
}

if (document.getElementById("product")) {
  var swiper = new Swiper(".product__top-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10
  });

  if (document.querySelector(".js-card")) {
    productCard();
  }

  var btn = document.querySelector(".product__top-add");
  var counter = document.querySelector(".product__top-counter");

  var _count = counter.querySelector("span");

  var minus = counter.querySelector(".product__top-counter-minus");
  var plus = counter.querySelector(".product__top-counter-plus");
  btn.addEventListener("click", function () {
    openCounter(btn, counter);
  });
  minus.addEventListener("click", function () {
    changeCounter(_count, btn, counter, "minus");
  });
  plus.addEventListener("click", function () {
    changeCounter(_count, btn, counter, "plus");
  });
  initArraySwiper();
} // Функции


function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  });
}

function initArraySwiper() {
  if (document.querySelector(".js-swiper-init")) {
    var swiperBlock = document.querySelectorAll(".js-swiper-init");
    swiperBlock.forEach(function (elem) {
      var swiper = initSwiper(elem);
    });
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
} // function handleMove(event, scroll) {
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
    var endY;

    if (event.type === "touchend") {
      endY = event.changedTouches[0].clientY;
    } else if (event.type === "mouseup") {
      endY = event.clientY;
      this.isDragging = false;
    }

    var deltaY = endY - this.startY;

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
  modal.addEventListener("touchstart", handleStart); // modal.addEventListener("touchmove", function (event) {
  //   handleMove.call(modal, event, scroll);
  // });

  modal.addEventListener("touchend", function (event) {
    handleEnd.call(modal, event, scroll);
  });
  modal.addEventListener("mousedown", handleStart); // modal.addEventListener("mousemove", function (event) {
  //   handleMove.call(modal, event, scroll);
  // });

  modal.addEventListener("mouseup", function (event) {
    handleEnd.call(modal, event, scroll);
  });
}

function openModal(modal) {
  document.body.classList.add("lock");
  modal.classList.add("active");
  modal.style.bottom = "0";
}

function regPhone(input) {
  return input.value.replace(/\D/g, '');
}

function inputPhone(e) {
  var input = e.target;
  var inputNumberValue = regPhone(input);
  var formattedInputValue = '';
  var selectionStart = input.selectionStart; // Если в инпут введены симовлы не соответсвующие регулярки, то значение инпута становится пустым

  if (!inputNumberValue) return input.value = ''; // В этой части я не совсем понимаю что происходит

  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumberValue;
    }

    return;
  }

  if (['7', '8', '9'].includes(inputNumberValue[0])) {
    // Если первая цифра девять, тогда мы заменяем первую цифру на 7 и девятку делаем второй цифрой
    if (inputNumberValue[0] == '9') inputNumberValue = '7' + inputNumberValue;
    if (inputNumberValue[0] == '8') inputNumberValue = '7'; // Если первая цифра 7, тогда значение инпута начинается с +7, если первая цифра 8, тогда значение начинается с 8

    var firstSymbol = '+7';
    formattedInputValue = firstSymbol + ' '; // Если в инпуте больше одной цифры добавляем скобку открытия и так далее

    if (inputNumberValue.length > 1) {
      formattedInputValue += '(' + inputNumberValue.substring(1, 4);
    }

    if (inputNumberValue.length >= 5) {
      formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
    }

    if (inputNumberValue.length >= 8) {
      formattedInputValue += '-' + inputNumberValue.substring(7, 9);
    }

    if (inputNumberValue.length >= 10) {
      formattedInputValue += '-' + inputNumberValue.substring(9, 11);
    }
  } else {
    //Если вводимое число не 7, 8 или 9 тогда добавляем +и добавляем введеное число
    formattedInputValue = '+7 (9' + inputNumberValue;
  }

  input.value = formattedInputValue;
}

function onePhoneKeyDown(e) {
  var input = e.target;

  if (regPhone(input).length == 1 && e.keyCode === 8) {
    input.value = '';
  }
}

function showClear(input, btn) {
  if (input.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

function clearInput(input) {
  input.value = "";
}

function countChange(count, goods) {
  var span = count.querySelector('span');
  var minus = count.firstElementChild;
  var plus = count.lastElementChild;
  minus.addEventListener('click', function () {
    var num = Number(span.textContent) - 1;
    span.textContent = num;

    if (!!goods) {
      goods.textContent = "".concat(num, " \u0448\u0442.");
    }

    disabledMinus(num, minus);
  });
  plus.addEventListener('click', function () {
    var num = Number(span.textContent) + 1;
    span.textContent = num;

    if (!!goods) {
      goods.textContent = "".concat(num, " \u0448\u0442.");
    }

    disabledMinus(num, minus);
  });
}

function disabledMinus(num, btn) {
  if (num < 1) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  var panel = item.nextElementSibling;

  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  var panel = item.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  }
}

function openCounter(btn, counter) {
  btn.classList.add("not-active");
  counter.classList.add("active");
}

function closeCounter(btn, counter) {
  btn.classList.remove("not-active");
  counter.classList.remove("active");
}

function changeCounter(span, btn, counter, operator) {
  var num = Number(span.textContent);

  if (operator === "plus") {
    num += 1;
  } else {
    num -= 1;
  }

  num < 1 ? closeCounter(btn, counter) : span.textContent = num;
}

function productCard() {
  var cards = document.querySelectorAll(".js-card");
  cards.forEach(function (elem) {
    var btnWrap = elem.querySelector(".js-card-btns");
    var btn = elem.querySelector(".js-card-add");
    var counter = elem.querySelector(".js-card-counter");
    var count = counter.querySelector("span");
    var minus = counter.querySelector(".js-card-minus");
    var plus = counter.querySelector(".js-card-plus");
    btnWrap.addEventListener("click", function (e) {
      e.preventDefault();
    });
    btn.addEventListener("click", function () {
      openCounter(btn, counter);
    });
    minus.addEventListener("click", function () {
      changeCounter(count, btn, counter, "minus");
    });
    plus.addEventListener("click", function () {
      changeCounter(count, btn, counter, "plus");
    });
  });
}

function createLabel(text) {
  return "\n    <label class=\"address__label\">\n      <input type=\"radio\" name=\"address\" class=\"address__input\"/>\n      <span class=\"address__radio\"></span>\n      <span class=\"address__text text-16\">\n        ".concat(text, "\n      </span>\n    </label>  \n  ");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJ0b2dnbGUiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImVsZW0iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVTdGFydCIsInR5cGUiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImlzRHJhZ2dpbmciLCJoYW5kbGVFbmQiLCJzY3JvbGwiLCJlbmRZIiwiY2hhbmdlZFRvdWNoZXMiLCJkZWx0YVkiLCJzY3JvbGxUb3AiLCJzdHlsZSIsImJvdHRvbSIsIm1vZGFsIiwiY2FsbCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQ0MsZUFBZTtFQUVmLElBQU1DLE9BQU8sR0FBR0gs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STtNQUNyQ0EsQ0FBQyxDQUFDcUMsY0FBRjtJQUNELENBRkQ7SUFHQXRCLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENnRixXQUFXLENBQUNoRSxHQUFELEVBQU1zQyxPQUFOLENBQVg7SUFDRCxDQUZEO0lBSUF3QixLQUFLLENBQUM5RSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQ3BDaUYsYUFBYSxDQUFDN0IsS0FBRCxFQUFRcEMsR0FBUixFQUFhc0MsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQ0QsQ0FGRDtJQUlBeUIsSUFBSSxDQUFDL0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUNuQ2lGLGFBQWEsQ0FBQzdCLEtBQUQsRUFBUXBDLEdBQVIsRUFBYXNDLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUNELENBRkQ7RUFHRCxDQXRCRDtBQXVCRDs7QUFJRCxTQUFTYixXQUFULENBQXFCc0YsSUFBckIsRUFBMkI7RUFDekIsc09BS1FBLElBTFI7QUFTRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgc2Nyb2xsU29ydC5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIHNjcm9sbEZpbHRlci5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG4gIGNvbnNvbGUubG9nKHNjcm9sbFNvcnQpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKVxuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGNvbnN0IGRlbGl2ZXJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX2RlbGl2ZXJ5LWJ0blwiKVxuICBkZWxpdmVyeUJ0blswXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbiAgZGVsaXZlcnlCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsaXZlcnlCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG4gIH0pXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSwgMzAwKVxuICB9KVxuXG4gIGZvcm1BZGRyZXNzU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaW5wdXQudmFsdWUpO1xuICAgIGFkZHJlc3NMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGFiZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsRGVsZXRlLnNob3coKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYWRkJyk7XG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKTtcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NTZWFyY2guY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSkge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2R1Y3RfX3RvcC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWFkZFwiKVxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlclwiKVxuICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLW1pbnVzXCIpO1xuICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLXBsdXNcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKVxuICB9KTtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xufVxuXG4vLyDQpNGD0L3QutGG0LjQuFxuZnVuY3Rpb24gaW5pdFN3aXBlcihjb250YWluZXIpIHtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMFxuICB9KVxufVxuXG5mdW5jdGlvbiBpbml0QXJyYXlTd2lwZXIoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN3aXBlci1pbml0XCIpKSB7XG4gICAgY29uc3Qgc3dpcGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXN3aXBlci1pbml0XCIpO1xuICAgIHN3aXBlckJsb2NrLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBjb25zdCBzd2lwZXIgPSBpbml0U3dpcGVyKGVsZW0pXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50LCBzY3JvbGwpIHtcbi8vICAgbGV0IGVuZFk7XG4vLyAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNobW92ZVwiKSB7XG4vLyAgICAgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbi8vICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlbW92ZVwiICYmIHRoaXMuaXNEcmFnZ2luZykge1xuLy8gICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbi8vICAgaWYgKGRlbHRhWSA+IDAgJiYgc2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCkge1xuLy8gICAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbi8vICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBoYW5kbGVFbmQoZXZlbnQsIHNjcm9sbCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nIHx8IGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgIGxldCBlbmRZO1xuICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gNTAgJiYgc2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCwgc2Nyb2xsKSB7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pO1xuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RvcFByb3BhZ2F0aW9uKTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVTdGFydCk7XG4gIC8vIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vICAgaGFuZGxlTW92ZS5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgLy8gfSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVFbmQuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlU3RhcnQpO1xuICAvLyBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyAgIGhhbmRsZU1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIC8vIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVFbmQuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbW9kYWwuc3R5bGUuYm90dG9tID0gXCIwXCJcbn1cblxuZnVuY3Rpb24gcmVnUGhvbmUoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgbGV0IGlucHV0TnVtYmVyVmFsdWUgPSByZWdQaG9uZShpbnB1dCk7XG4gIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YIg0LLQstC10LTQtdC90Ysg0YHQuNC80L7QstC70Ysg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0LLRg9GO0YnQuNC1INGA0LXQs9GD0LvRj9GA0LrQuCwg0YLQviDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQv9GD0YHRgtGL0LxcbiAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOScpIGlucHV0TnVtYmVyVmFsdWUgPSAnNycgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgbGV0IGZpcnN0U3ltYm9sID0gJys3JztcbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZygxLCA0KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDEwKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDksIDExKTtcbiAgICB9XG4gIH0gZWxzZSB7IC8v0JXRgdC70Lgg0LLQstC+0LTQuNC80L7QtSDRh9C40YHQu9C+INC90LUgNywgOCDQuNC70LggOSDRgtC+0LPQtNCwINC00L7QsdCw0LLQu9GP0LXQvCAr0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCy0LLQtdC00LXQvdC+0LUg0YfQuNGB0LvQvlxuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgfVxuICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPSAxXG4gIH1cblxuICBudW0gPCAxID8gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikgOiBzcGFuLnRleHRDb250ZW50ID0gbnVtXG59XG5cbmZ1bmN0aW9uIHByb2R1Y3RDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCBidG5XcmFwID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYnRuc1wiKVxuICAgIGNvbnN0IGJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWFkZFwiKVxuICAgIGNvbnN0IGNvdW50ZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1jb3VudGVyXCIpXG4gICAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtbWludXNcIik7XG4gICAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLXBsdXNcIik7XG5cbiAgICBidG5XcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKVxuICAgIH0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKVxuICAgIH0pXG5cbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKVxuICAgIH0pXG4gIH0pXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0KSB7XG4gIHJldHVybiBgXG4gICAgPGxhYmVsIGNsYXNzPVwiYWRkcmVzc19fbGFiZWxcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkcmVzc1wiIGNsYXNzPVwiYWRkcmVzc19faW5wdXRcIi8+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NfX3JhZGlvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX190ZXh0IHRleHQtMTZcIj5cbiAgICAgICAgJHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+ICBcbiAgYFxufSJdfQ==
