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
      filterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
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
      _filterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });

      btn.classList.add("active");
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

function handleTouchStart(event) {
  this.startY = event.touches[0].clientY;
}

function handleTouchMove(event, scroll) {
  var endY = event.touches[0].clientY;

  if (endY > this.startY && scroll.scrollTop === 0) {
    this.classList.remove("active");
    setTimeout(function () {
      document.body.classList.remove("lock");
    }, 300);
  }
}

function handleMouseDown(event) {
  this.startY = event.clientY;
  this.isDragging = true;
}

function handleMouseMove(event, scroll) {
  if (this.isDragging) {
    var endY = event.clientY;
    var deltaY = endY - this.startY;

    if (deltaY > 0 && scroll.scrollTop === 0) {
      this.style.bottom = -deltaY + "px";
    }
  }
}

function handleMouseUp(event, scroll) {
  if (this.isDragging) {
    var endY = event.clientY;
    var deltaY = endY - this.startY;
    console.log(scroll.scrollTop);

    if (deltaY > 50 && scroll.scrollTop === 0) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }

    this.isDragging = false;
  }
}

function setupModalEvents(modal, scroll) {
  modal.addEventListener("click", stopPropagation);
  scroll.addEventListener("touchstart", stopPropagation);
  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", function (event) {
    handleTouchMove.call(modal, event, scroll);
  });
  modal.addEventListener("mousedown", handleMouseDown);
  modal.addEventListener("mousemove", function (event) {
    handleMouseMove.call(modal, event, scroll);
  });
  modal.addEventListener("mouseup", function (event) {
    handleMouseUp.call(modal, event, scroll);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlbGVtIiwicmVzdGF1cmFudHNGaWx0ZXJCdG4iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVUb3VjaFN0YXJ0Iiwic3RhcnRZIiwidG91Y2hlcyIsImNsaWVudFkiLCJoYW5kbGVUb3VjaE1vdmUiLCJzY3JvbGwiLCJlbmRZIiwic2Nyb2xsVG9wIiwiaGFuZGxlTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImhhbmRsZU1vdXNlTW92ZSIsImRlbHRhWSIsInN0eWxlIiwiYm90dG9tIiwiaGFuZGxlTW91c2VVcCIsIm1vZGFsIiwiY2FsbCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQ0MsZUFBZTtFQUVmLElBQU1DLE9BQU8sR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUFoQjtFQUNBLElBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLFVBQXZCLENBQWxCO0VBQ0EsSUFBTUUsVUFBVSxHQUFHTixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7RUFDQSxJQUFNRyxTQUFTLEdBQUdQLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBbEI7RUFDQSxJQUFNSSxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixTQUF2QixDQUFwQjtFQUNBLElBQU1LLFlBQVksR0FBR1QsUUFBUSxDQUFDSSxhQUFULENBQXVCLGNBQXZCLENBQXJCO0VBQ0FELE9BQU8sQ0FBQ08sZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3ZDQSxDQUFDLENBQUNDLGVBQUY7SUFDQUMsU0FBUyxDQUFDUixTQUFELENBQVQ7SUFDQUMsVUFBVSxDQUFDUSxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCO0lBQ0FkLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1Qjs7SUFDQSxJQUFJVCxXQUFXLENBQUNRLFNBQVosQ0FBc0JFLFFBQXRCLENBQStCLFFBQS9CLENBQUosRUFBOEM7TUFDNUNWLFdBQVcsQ0FBQ1EsU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsUUFBN0I7SUFDRDtFQUNGLENBUkQ7RUFTQVosU0FBUyxDQUFDRyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDQyxDQUFELEVBQU87SUFDekNBLENBQUMsQ0FBQ0MsZUFBRjtJQUNBQyxTQUFTLENBQUNMLFdBQUQsQ0FBVDtJQUNBQyxZQUFZLENBQUNLLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekI7SUFDQWQsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCOztJQUNBLElBQUlaLFNBQVMsQ0FBQ1csU0FBVixDQUFvQkUsUUFBcEIsQ0FBNkIsUUFBN0IsQ0FBSixFQUE0QztNQUMxQ2IsU0FBUyxDQUFDVyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FSRDtFQVVBQyxnQkFBZ0IsQ0FBQ2YsU0FBRCxFQUFZQyxVQUFaLENBQWhCO0VBQ0FjLGdCQUFnQixDQUFDWixXQUFELEVBQWNDLFlBQWQsQ0FBaEI7RUFDQVksT0FBTyxDQUFDQyxHQUFSLENBQVloQixVQUFaO0VBRUEsSUFBTWlCLFNBQVMsR0FBR3ZCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGNBQTFCLENBQWxCO0VBRUFELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxHQUFHLEVBQUk7SUFDdkJBLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENhLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBRSxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDWCxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEIsQ0FBSjtNQUFBLENBQXRCO01BQ0FPLEdBQUcsQ0FBQ1YsU0FBSixDQUFjQyxHQUFkLENBQWtCLFFBQWxCO0lBQ0QsQ0FIRDtFQUlELENBTEQ7RUFPQSxJQUFNVyxvQkFBb0IsR0FBRzVCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLDJCQUExQixDQUE3QjtFQUVBSSxvQkFBb0IsQ0FBQ0gsT0FBckIsQ0FBNkIsVUFBQUMsR0FBRyxFQUFJO0lBQ2xDQSxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDa0Isb0JBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNYLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBakM7TUFDQU8sR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDRCxDQUhEO0VBSUQsQ0FMRDtFQU9BLElBQU1ZLFdBQVcsR0FBRzdCLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixlQUF2QixDQUFwQjtFQUNBLElBQU0wQixjQUFjLEdBQUc5QixRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQXZCO0VBQ0EsSUFBTTJCLGVBQWUsR0FBRy9CLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBeEI7RUFDQXlCLFdBQVcsQ0FBQ25CLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07SUFDMUNzQixTQUFTLENBQUNILFdBQUQsRUFBY0MsY0FBZCxDQUFUOztJQUNBLElBQUlELFdBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDaENILGVBQWUsQ0FBQ2YsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xjLGVBQWUsQ0FBQ2YsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLFFBQWpDO0lBQ0Q7RUFDRixDQVBEO0VBUUFXLGNBQWMsQ0FBQ3BCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07SUFDN0N5QixVQUFVLENBQUNOLFdBQUQsQ0FBVjtJQUNBRyxTQUFTLENBQUNILFdBQUQsRUFBY0MsY0FBZCxDQUFUOztJQUVBLElBQUlELFdBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDaENILGVBQWUsQ0FBQ2YsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xjLGVBQWUsQ0FBQ2YsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLFFBQWpDO0lBQ0Q7RUFDRixDQVREO0VBYUEsSUFBTWlCLFVBQVUsR0FBR3BDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBbkI7RUFDQSxJQUFNaUMsTUFBTSxHQUFHckMsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUFmO0VBQ0EsSUFBTWtDLGFBQWEsR0FBR3RDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix1QkFBdkIsQ0FBdEI7RUFDQSxJQUFNbUMsaUJBQWlCLEdBQUd2QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQTFCO0VBQ0EsSUFBTW9DLFdBQVcsR0FBR3hDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixxQkFBdkIsQ0FBcEI7RUFFQSxJQUFNcUMsV0FBVyxHQUFHekMsUUFBUSxDQUFDd0IsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXBCO0VBQ0FpQixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWV6QixTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QjtFQUVBd0IsV0FBVyxDQUFDaEIsT0FBWixDQUFvQixVQUFBQyxHQUFHLEVBQUk7SUFDekJBLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbEMrQixXQUFXLENBQUNoQixPQUFaLENBQW9CLFVBQUFFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNYLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBeEI7TUFDQU8sR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDRCxDQUhEO0VBSUQsQ0FMRDtFQU9BbUIsVUFBVSxDQUFDMUIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtJQUN6QzBCLFVBQVUsQ0FBQ00sYUFBWCxDQUF5QjFCLFNBQXpCLENBQW1DRSxRQUFuQyxDQUE0QyxTQUE1QyxJQUF5RHlCLGtCQUFrQixDQUFDUCxVQUFELENBQTNFLEdBQTBGUSxlQUFlLENBQUNSLFVBQUQsQ0FBekc7RUFDRCxDQUZEO0VBSUFDLE1BQU0sQ0FBQzNCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07SUFDckM0QixhQUFhLENBQUN0QixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtJQUNBNEIsVUFBVSxDQUFDLFlBQU07TUFDZk4saUJBQWlCLENBQUNuQyxhQUFsQixDQUFnQyxPQUFoQyxFQUF5QzBDLEtBQXpDO0lBQ0QsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdELENBTEQ7RUFPQVAsaUJBQWlCLENBQUM3QixnQkFBbEIsQ0FBbUMsUUFBbkMsRUFBNkMsVUFBQUMsQ0FBQyxFQUFJO0lBQ2hEQSxDQUFDLENBQUNvQyxjQUFGO0lBQ0EsSUFBTUMsS0FBSyxHQUFHVCxpQkFBaUIsQ0FBQ25DLGFBQWxCLENBQWdDLE9BQWhDLENBQWQ7SUFDQSxJQUFNNkMsS0FBSyxHQUFHQyxXQUFXLENBQUNGLEtBQUssQ0FBQ2YsS0FBUCxDQUF6QjtJQUNBTyxXQUFXLENBQUNXLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDRixLQUE1QztJQUNBRCxLQUFLLENBQUNmLEtBQU4sR0FBYyxFQUFkO0lBQ0FLLGFBQWEsQ0FBQ3RCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0VBQ0QsQ0FQRDtFQVNBbkIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDTixTQUFTLENBQUNhLFFBQVYsQ0FBbUJQLENBQUMsQ0FBQ3lDLE1BQXJCLENBQUQsSUFBaUMsQ0FBQ2pELE9BQU8sQ0FBQ2UsUUFBUixDQUFpQlAsQ0FBQyxDQUFDeUMsTUFBbkIsQ0FBdEMsRUFBa0U7TUFDaEUvQyxTQUFTLENBQUNXLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCO01BQ0FuQixRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7SUFDRDtFQUNGLENBTEQ7RUFPQW5CLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ0gsV0FBVyxDQUFDVSxRQUFaLENBQXFCUCxDQUFDLENBQUN5QyxNQUF2QixDQUFELElBQW1DLENBQUM3QyxTQUFTLENBQUNXLFFBQVYsQ0FBbUJQLENBQUMsQ0FBQ3lDLE1BQXJCLENBQXhDLEVBQXNFO01BQ3BFNUMsV0FBVyxDQUFDUSxTQUFaLENBQXNCRyxNQUF0QixDQUE2QixRQUE3QjtNQUNBbkIsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0lBQ0Q7RUFDRixDQUxEO0VBT0FuQixRQUFRLENBQUNVLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN4QyxJQUFJLENBQUN5QixVQUFVLENBQUNNLGFBQVgsQ0FBeUJ4QixRQUF6QixDQUFrQ1AsQ0FBQyxDQUFDeUMsTUFBcEMsQ0FBTCxFQUFrRDtNQUNoRFQsa0JBQWtCLENBQUNQLFVBQUQsQ0FBbEI7TUFDQUUsYUFBYSxDQUFDdEIsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsUUFBL0I7SUFDRDtFQUNGLENBTEQ7QUFNRDs7QUFFRCxJQUFJbkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQUosRUFBOEM7RUFDNUMsSUFBTW9ELEdBQUcsR0FBR3JELFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixtQ0FBdkIsQ0FBWjtFQUNBaUQsR0FBRyxDQUFDM0MsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFPO0lBQ25DMkMsVUFBVSxDQUFDM0MsQ0FBRCxDQUFWO0VBQ0QsQ0FGRDtFQUdBMEMsR0FBRyxDQUFDM0MsZ0JBQUosQ0FBcUIsU0FBckIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3JDNEMsZUFBZSxDQUFDNUMsQ0FBRCxDQUFmO0VBQ0QsQ0FGRDtBQUdEOztBQUVELElBQUlYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFKLEVBQXVDO0VBQ3JDLElBQU11RCxZQUFZLEdBQUd4RCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0VBQ0EsSUFBTXFELFdBQVcsR0FBRyxJQUFJQyxTQUFTLENBQUNDLEtBQWQsQ0FBb0IzRCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXBCLENBQXBCO0VBQ0EsSUFBTXdELEtBQUssR0FBRzVELFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLHdCQUExQixDQUFkO0VBRUEsSUFBTXFDLEtBQUssR0FBRzdELFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBZDtFQUVBd0QsS0FBSyxDQUFDbkMsT0FBTixDQUFjLFVBQUFxQyxJQUFJLEVBQUk7SUFDcEIsSUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUMxRCxhQUFMLENBQW1CLGdDQUFuQixDQUFoQjtJQUNBLElBQU00RCxLQUFLLEdBQUdGLElBQUksQ0FBQzFELGFBQUwsQ0FBbUIsOEJBQW5CLENBQWQ7SUFDQTZELFdBQVcsQ0FBQ0YsT0FBRCxFQUFVQyxLQUFWLENBQVg7RUFDRCxDQUpEO0VBTUFSLFlBQVksQ0FBQzlDLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07SUFDM0MrQyxXQUFXLENBQUNTLElBQVo7RUFDRCxDQUZEO0VBSUFoRSxlQUFlO0VBRWYrRCxXQUFXLENBQUNKLEtBQUQsQ0FBWDtFQUVBLElBQU1NLFVBQVUsR0FBR25FLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix3QkFBdkIsQ0FBbkI7RUFDQSxJQUFNZ0UsY0FBYyxHQUFHcEUsUUFBUSxDQUFDSSxhQUFULENBQXVCLHdCQUF2QixDQUF2QjtFQUNBLElBQU1pRSxRQUFRLEdBQUdyRSxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWpCO0VBQ0EsSUFBTWtFLFFBQVEsR0FBR3RFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBakI7RUFDQSxJQUFNbUUsUUFBUSxHQUFHdkUsUUFBUSxDQUFDSSxhQUFULENBQXVCLDRCQUF2QixDQUFqQjtFQUVBa0UsUUFBUSxDQUFDNUQsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDMkMsVUFBVSxDQUFDM0MsQ0FBRCxDQUFWO0VBQ0QsQ0FGRDtFQUdBMkQsUUFBUSxDQUFDNUQsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzFDNEMsZUFBZSxDQUFDNUMsQ0FBRCxDQUFmOztJQUNBLElBQUlBLENBQUMsQ0FBQzZELE9BQUYsS0FBYyxFQUFsQixFQUFzQjtNQUNwQkgsUUFBUSxDQUFDSSxXQUFULEdBQXVCSCxRQUFRLENBQUNyQyxLQUFoQztNQUNBcUMsUUFBUSxDQUFDckMsS0FBVCxHQUFpQixFQUFqQjtNQUNBa0MsVUFBVSxDQUFDbkQsU0FBWCxDQUFxQkcsTUFBckIsQ0FBNEIsUUFBNUI7SUFDRDtFQUNGLENBUEQ7RUFRQW9ELFFBQVEsQ0FBQzdELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07SUFDdkMyRCxRQUFRLENBQUNJLFdBQVQsR0FBdUJILFFBQVEsQ0FBQ3JDLEtBQWhDO0lBQ0FxQyxRQUFRLENBQUNyQyxLQUFULEdBQWlCLEVBQWpCO0lBQ0FrQyxVQUFVLENBQUNuRCxTQUFYLENBQXFCRyxNQUFyQixDQUE0QixRQUE1QjtFQUNELENBSkQ7RUFNQWlELGNBQWMsQ0FBQzFELGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07SUFDN0N5RCxVQUFVLENBQUNuRCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtFQUNELENBRkQ7RUFJQWpCLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ3dELFVBQVUsQ0FBQ2pELFFBQVgsQ0FBb0JQLENBQUMsQ0FBQ3lDLE1BQXRCLENBQUQsSUFBa0MsQ0FBQ2dCLGNBQWMsQ0FBQ2xELFFBQWYsQ0FBd0JQLENBQUMsQ0FBQ3lDLE1BQTFCLENBQXZDLEVBQTBFO01BQ3hFZSxVQUFVLENBQUNuRCxTQUFYLENBQXFCRyxNQUFyQixDQUE0QixRQUE1QjtJQUNEO0VBQ0YsQ0FKRDtBQUtEOztBQUVELElBQUluQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBSixFQUF3QztFQUN0Q0MsZUFBZTtFQUNmLElBQU13RSxJQUFJLEdBQUcxRSxRQUFRLENBQUN3QixnQkFBVCxDQUEwQixzQkFBMUIsQ0FBYjtFQUNBa0QsSUFBSSxDQUFDakQsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBTWlELEtBQU4sRUFBZ0I7SUFDM0JqRCxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDZ0UsSUFBSSxDQUFDakQsT0FBTCxDQUFhLFVBQUNFLElBQUQsRUFBT2lELFNBQVAsRUFBcUI7UUFDaEMsSUFBSUEsU0FBUyxJQUFJRCxLQUFqQixFQUF3QjtVQUN0QmhELElBQUksQ0FBQ1gsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xVLElBQUksQ0FBQ1gsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCO1FBQ0Q7TUFDRixDQU5EO0lBT0QsQ0FSRDtFQVNELENBVkQ7QUFZRDs7QUFFRCxJQUFJbkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTW9DLE9BQU0sR0FBR3JDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjs7RUFDQSxJQUFNa0MsY0FBYSxHQUFHdEMsUUFBUSxDQUFDSSxhQUFULENBQXVCLHVCQUF2QixDQUF0Qjs7RUFDQSxJQUFNbUMsa0JBQWlCLEdBQUd2QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQTFCOztFQUNBLElBQU1vQyxZQUFXLEdBQUd4QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQXBCOztFQUVBaUMsT0FBTSxDQUFDM0IsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtJQUNyQzRCLGNBQWEsQ0FBQ3RCLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCOztJQUNBNEIsVUFBVSxDQUFDLFlBQU07TUFDZk4sa0JBQWlCLENBQUNuQyxhQUFsQixDQUFnQyxPQUFoQyxFQUF5QzBDLEtBQXpDO0lBQ0QsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdELENBTEQ7O0VBT0FQLGtCQUFpQixDQUFDN0IsZ0JBQWxCLENBQW1DLFFBQW5DLEVBQTZDLFVBQUFDLENBQUMsRUFBSTtJQUNoREEsQ0FBQyxDQUFDb0MsY0FBRjs7SUFDQSxJQUFNQyxLQUFLLEdBQUdULGtCQUFpQixDQUFDbkMsYUFBbEIsQ0FBZ0MsT0FBaEMsQ0FBZDs7SUFDQSxJQUFNNkMsS0FBSyxHQUFHQyxXQUFXLENBQUNGLEtBQUssQ0FBQ2YsS0FBUCxDQUF6Qjs7SUFDQU8sWUFBVyxDQUFDVyxrQkFBWixDQUErQixXQUEvQixFQUE0Q0YsS0FBNUM7O0lBQ0FELEtBQUssQ0FBQ2YsS0FBTixHQUFjLEVBQWQ7O0lBQ0FLLGNBQWEsQ0FBQ3RCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0VBQ0QsQ0FQRDs7RUFTQW5CLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQzJCLGNBQWEsQ0FBQ3BCLFFBQWQsQ0FBdUJQLENBQUMsQ0FBQ3lDLE1BQXpCLENBQUQsSUFBcUMsQ0FBQ2YsT0FBTSxDQUFDbkIsUUFBUCxDQUFnQlAsQ0FBQyxDQUFDeUMsTUFBbEIsQ0FBMUMsRUFBcUU7TUFDbkVkLGNBQWEsQ0FBQ3RCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0lBQ0Q7RUFDRixDQUpEO0VBTUEsSUFBTTBELFNBQVMsR0FBRzdFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBbEI7RUFDQSxJQUFNMEUsYUFBYSxHQUFHOUUsUUFBUSxDQUFDSSxhQUFULENBQXVCLDBCQUF2QixDQUF0QjtFQUNBLElBQU0yRSxRQUFRLEdBQUcvRSxRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQWpCO0VBQ0EsSUFBTTRFLFNBQVMsR0FBR2hGLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBbEI7O0VBQ0EsSUFBTW1FLFNBQVEsR0FBR3ZFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBakI7O0VBRUFtRSxTQUFRLENBQUM3RCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0lBQ3ZDcUUsUUFBUSxDQUFDTixXQUFULEdBQXVCTyxTQUFTLENBQUMvQyxLQUFqQztJQUNBK0MsU0FBUyxDQUFDL0MsS0FBVixHQUFrQixFQUFsQjtJQUNBNEMsU0FBUyxDQUFDN0QsU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsUUFBM0I7RUFDRCxDQUpEOztFQU1BNkQsU0FBUyxDQUFDdEUsZ0JBQVYsQ0FBMkIsVUFBM0IsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzVDLElBQUlBLENBQUMsQ0FBQ3NFLEdBQUYsS0FBVSxPQUFkLEVBQXVCO01BQ3JCRixRQUFRLENBQUNOLFdBQVQsR0FBdUJPLFNBQVMsQ0FBQy9DLEtBQWpDO01BQ0ErQyxTQUFTLENBQUMvQyxLQUFWLEdBQWtCLEVBQWxCO01BQ0E0QyxTQUFTLENBQUM3RCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FORDtFQVFBMkQsYUFBYSxDQUFDcEUsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtJQUM1Q21FLFNBQVMsQ0FBQzdELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0VBQ0QsQ0FGRDtFQUlBakIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDa0UsU0FBUyxDQUFDM0QsUUFBVixDQUFtQlAsQ0FBQyxDQUFDeUMsTUFBckIsQ0FBRCxJQUFpQyxDQUFDMEIsYUFBYSxDQUFDNUQsUUFBZCxDQUF1QlAsQ0FBQyxDQUFDeUMsTUFBekIsQ0FBdEMsRUFBd0U7TUFDdEV5QixTQUFTLENBQUM3RCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FKRDtBQUtEOztBQUVELElBQUluQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQ0MsZUFBZTs7RUFFZixJQUFJRixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0QzhFLFdBQVc7RUFDWjtBQUVGOztBQUVELElBQUlsRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztFQUV6QyxJQUFJRCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0QzhFLFdBQVc7RUFDWjs7RUFFRCxJQUFNL0UsUUFBTyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWhCOztFQUNBLElBQU1DLFVBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLFVBQXZCLENBQWxCOztFQUNBLElBQU1FLFdBQVUsR0FBR04sUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQW5COztFQUNBLElBQU1HLFVBQVMsR0FBR1AsUUFBUSxDQUFDSSxhQUFULENBQXVCLDhCQUF2QixDQUFsQjs7RUFDQSxJQUFNSSxZQUFXLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixTQUF2QixDQUFwQjs7RUFDQSxJQUFNSyxhQUFZLEdBQUdULFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixjQUF2QixDQUFyQjs7RUFHQSxJQUFNeUIsWUFBVyxHQUFHN0IsUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQXBCOztFQUNBLElBQU0wQixlQUFjLEdBQUc5QixRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQXZCOztFQUNBLElBQU0yQixnQkFBZSxHQUFHL0IsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUF4Qjs7RUFDQXlCLFlBQVcsQ0FBQ25CLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07SUFDMUNzQixTQUFTLENBQUNILFlBQUQsRUFBY0MsZUFBZCxDQUFUOztJQUNBLElBQUlELFlBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDaENILGdCQUFlLENBQUNmLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixRQUE5QjtJQUNELENBRkQsTUFFTztNQUNMYyxnQkFBZSxDQUFDZixTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUMsUUFBakM7SUFDRDtFQUNGLENBUEQ7O0VBUUFXLGVBQWMsQ0FBQ3BCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07SUFDN0N5QixVQUFVLENBQUNOLFlBQUQsQ0FBVjtJQUNBRyxTQUFTLENBQUNILFlBQUQsRUFBY0MsZUFBZCxDQUFUOztJQUVBLElBQUlELFlBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDaENILGdCQUFlLENBQUNmLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixRQUE5QjtJQUNELENBRkQsTUFFTztNQUNMYyxnQkFBZSxDQUFDZixTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUMsUUFBakM7SUFDRDtFQUNGLENBVEQ7O0VBWUFoQixRQUFPLENBQUNPLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztJQUN2Q0EsQ0FBQyxDQUFDQyxlQUFGO0lBQ0FDLFNBQVMsQ0FBQ1IsVUFBRCxDQUFUOztJQUNBQyxXQUFVLENBQUNRLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7O0lBQ0FkLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1Qjs7SUFDQSxJQUFJVCxZQUFXLENBQUNRLFNBQVosQ0FBc0JFLFFBQXRCLENBQStCLFFBQS9CLENBQUosRUFBOEM7TUFDNUNWLFlBQVcsQ0FBQ1EsU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsUUFBN0I7SUFDRDtFQUNGLENBUkQ7O0VBU0FaLFVBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3pDQSxDQUFDLENBQUNDLGVBQUY7SUFDQUMsU0FBUyxDQUFDTCxZQUFELENBQVQ7O0lBQ0FDLGFBQVksQ0FBQ0ssUUFBYixDQUFzQixDQUF0QixFQUF5QixDQUF6Qjs7SUFDQWQsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCOztJQUNBLElBQUlaLFVBQVMsQ0FBQ1csU0FBVixDQUFvQkUsUUFBcEIsQ0FBNkIsUUFBN0IsQ0FBSixFQUE0QztNQUMxQ2IsVUFBUyxDQUFDVyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FSRDs7RUFVQUMsZ0JBQWdCLENBQUNmLFVBQUQsRUFBWUMsV0FBWixDQUFoQjtFQUNBYyxnQkFBZ0IsQ0FBQ1osWUFBRCxFQUFjQyxhQUFkLENBQWhCOztFQUVBLElBQU1jLFVBQVMsR0FBR3ZCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGNBQTFCLENBQWxCOztFQUVBRCxVQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0lBQ3ZCQSxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDYSxVQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUUsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ1gsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCLENBQUo7TUFBQSxDQUF0Qjs7TUFDQU8sR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDRCxDQUhEO0VBSUQsQ0FMRDs7RUFPQWpCLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ04sVUFBUyxDQUFDYSxRQUFWLENBQW1CUCxDQUFDLENBQUN5QyxNQUFyQixDQUFELElBQWlDLENBQUNqRCxRQUFPLENBQUNlLFFBQVIsQ0FBaUJQLENBQUMsQ0FBQ3lDLE1BQW5CLENBQXRDLEVBQWtFO01BQ2hFL0MsVUFBUyxDQUFDVyxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjs7TUFDQW5CLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUNEO0VBQ0YsQ0FMRDtFQU9BbkIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDSCxZQUFXLENBQUNVLFFBQVosQ0FBcUJQLENBQUMsQ0FBQ3lDLE1BQXZCLENBQUQsSUFBbUMsQ0FBQzdDLFVBQVMsQ0FBQ1csUUFBVixDQUFtQlAsQ0FBQyxDQUFDeUMsTUFBckIsQ0FBeEMsRUFBc0U7TUFDcEU1QyxZQUFXLENBQUNRLFNBQVosQ0FBc0JHLE1BQXRCLENBQTZCLFFBQTdCOztNQUNBbkIsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0lBRUQ7RUFDRixDQU5EOztFQVFBLElBQU1TLHFCQUFvQixHQUFHNUIsUUFBUSxDQUFDd0IsZ0JBQVQsQ0FBMEIsbUNBQTFCLENBQTdCOztFQUVBSSxxQkFBb0IsQ0FBQ0gsT0FBckIsQ0FBNkIsVUFBQUMsR0FBRyxFQUFJO0lBQ2xDQSxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDa0IscUJBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNYLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBakM7O01BQ0FPLEdBQUcsQ0FBQ1YsU0FBSixDQUFjQyxHQUFkLENBQWtCLFFBQWxCO0lBQ0QsQ0FIRDtFQUlELENBTEQ7O0VBT0FmLGVBQWU7QUFFaEI7O0FBRUQsSUFBSUYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTWtGLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcsc0JBQVgsRUFBbUM7SUFDaERDLGFBQWEsRUFBRSxNQURpQztJQUVoREMsWUFBWSxFQUFFO0VBRmtDLENBQW5DLENBQWY7O0VBS0EsSUFBSXRGLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixVQUF2QixDQUFKLEVBQXdDO0lBQ3RDOEUsV0FBVztFQUNaOztFQUVELElBQU14RCxHQUFHLEdBQUcxQixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVo7RUFDQSxJQUFNMkQsT0FBTyxHQUFHL0QsUUFBUSxDQUFDSSxhQUFULENBQXVCLHVCQUF2QixDQUFoQjs7RUFDQSxJQUFNeUQsTUFBSyxHQUFHRSxPQUFPLENBQUMzRCxhQUFSLENBQXNCLE1BQXRCLENBQWQ7O0VBQ0EsSUFBTW1GLEtBQUssR0FBR3hCLE9BQU8sQ0FBQzNELGFBQVIsQ0FBc0IsNkJBQXRCLENBQWQ7RUFDQSxJQUFNb0YsSUFBSSxHQUFHekIsT0FBTyxDQUFDM0QsYUFBUixDQUFzQiw0QkFBdEIsQ0FBYjtFQUVBc0IsR0FBRyxDQUFDaEIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtJQUNsQytFLFdBQVcsQ0FBQy9ELEdBQUQsRUFBTXFDLE9BQU4sQ0FBWDtFQUNELENBRkQ7RUFJQXdCLEtBQUssQ0FBQzdFLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07SUFDcENnRixhQUFhLENBQUM3QixNQUFELEVBQVFuQyxHQUFSLEVBQWFxQyxPQUFiLEVBQXNCLE9BQXRCLENBQWI7RUFDRCxDQUZEO0VBSUF5QixJQUFJLENBQUM5RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0lBQ25DZ0YsYUFBYSxDQUFDN0IsTUFBRCxFQUFRbkMsR0FBUixFQUFhcUMsT0FBYixFQUFzQixNQUF0QixDQUFiO0VBQ0QsQ0FGRDtFQUlBN0QsZUFBZTtBQUNoQixDLENBRUQ7OztBQUNBLFNBQVN5RixVQUFULENBQW9CQyxTQUFwQixFQUErQjtFQUM3QixPQUFPLElBQUlSLE1BQUosQ0FBV1EsU0FBWCxFQUFzQjtJQUMzQlAsYUFBYSxFQUFFLE1BRFk7SUFFM0JDLFlBQVksRUFBRTtFQUZhLENBQXRCLENBQVA7QUFJRDs7QUFFRCxTQUFTcEYsZUFBVCxHQUEyQjtFQUN6QixJQUFJRixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQUosRUFBK0M7SUFDN0MsSUFBTXlGLFdBQVcsR0FBRzdGLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGlCQUExQixDQUFwQjtJQUNBcUUsV0FBVyxDQUFDcEUsT0FBWixDQUFvQixVQUFBRSxJQUFJLEVBQUk7TUFDMUIsSUFBTXdELE1BQU0sR0FBR1EsVUFBVSxDQUFDaEUsSUFBRCxDQUF6QjtJQUNELENBRkQ7RUFHRDtBQUNGOztBQUVELFNBQVNmLGVBQVQsQ0FBeUJrRixLQUF6QixFQUFnQztFQUM5QkEsS0FBSyxDQUFDbEYsZUFBTjtBQUNEOztBQUVELFNBQVNtRixnQkFBVCxDQUEwQkQsS0FBMUIsRUFBaUM7RUFDL0IsS0FBS0UsTUFBTCxHQUFjRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxPQUEvQjtBQUVEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJMLEtBQXpCLEVBQWdDTSxNQUFoQyxFQUF3QztFQUN0QyxJQUFJQyxJQUFJLEdBQUdQLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQTVCOztFQUNBLElBQUlHLElBQUksR0FBRyxLQUFLTCxNQUFaLElBQXNCSSxNQUFNLENBQUNFLFNBQVAsS0FBcUIsQ0FBL0MsRUFBa0Q7SUFDaEQsS0FBS3RGLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QjtJQUNBMEIsVUFBVSxDQUFDLFlBQU07TUFDZjdDLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUNELENBRlMsRUFFUCxHQUZPLENBQVY7RUFHRDtBQUNGOztBQUdELFNBQVNvRixlQUFULENBQXlCVCxLQUF6QixFQUFnQztFQUM5QixLQUFLRSxNQUFMLEdBQWNGLEtBQUssQ0FBQ0ksT0FBcEI7RUFDQSxLQUFLTSxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRUQsU0FBU0MsZUFBVCxDQUF5QlgsS0FBekIsRUFBZ0NNLE1BQWhDLEVBQXdDO0VBQ3RDLElBQUksS0FBS0ksVUFBVCxFQUFxQjtJQUNuQixJQUFJSCxJQUFJLEdBQUdQLEtBQUssQ0FBQ0ksT0FBakI7SUFDQSxJQUFJUSxNQUFNLEdBQUdMLElBQUksR0FBRyxLQUFLTCxNQUF6Qjs7SUFDQSxJQUFJVSxNQUFNLEdBQUcsQ0FBVCxJQUFjTixNQUFNLENBQUNFLFNBQVAsS0FBcUIsQ0FBdkMsRUFBMEM7TUFDeEMsS0FBS0ssS0FBTCxDQUFXQyxNQUFYLEdBQW9CLENBQUNGLE1BQUQsR0FBVSxJQUE5QjtJQUNEO0VBQ0Y7QUFDRjs7QUFFRCxTQUFTRyxhQUFULENBQXVCZixLQUF2QixFQUE4Qk0sTUFBOUIsRUFBc0M7RUFDcEMsSUFBSSxLQUFLSSxVQUFULEVBQXFCO0lBQ25CLElBQUlILElBQUksR0FBR1AsS0FBSyxDQUFDSSxPQUFqQjtJQUNBLElBQUlRLE1BQU0sR0FBR0wsSUFBSSxHQUFHLEtBQUtMLE1BQXpCO0lBQ0EzRSxPQUFPLENBQUNDLEdBQVIsQ0FBWThFLE1BQU0sQ0FBQ0UsU0FBbkI7O0lBQ0EsSUFBSUksTUFBTSxHQUFHLEVBQVQsSUFBZU4sTUFBTSxDQUFDRSxTQUFQLEtBQXFCLENBQXhDLEVBQTJDO01BQ3pDLEtBQUt0RixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEI7TUFDQW5CLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUNELENBSEQsTUFHTztNQUNMLEtBQUt3RixLQUFMLENBQVdDLE1BQVgsR0FBb0IsR0FBcEI7SUFDRDs7SUFDRCxLQUFLSixVQUFMLEdBQWtCLEtBQWxCO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTcEYsZ0JBQVQsQ0FBMEIwRixLQUExQixFQUFpQ1YsTUFBakMsRUFBeUM7RUFFdkNVLEtBQUssQ0FBQ3BHLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDRSxlQUFoQztFQUNBd0YsTUFBTSxDQUFDMUYsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NFLGVBQXRDO0VBRUFrRyxLQUFLLENBQUNwRyxnQkFBTixDQUF1QixZQUF2QixFQUFxQ3FGLGdCQUFyQztFQUNBZSxLQUFLLENBQUNwRyxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxVQUFVb0YsS0FBVixFQUFpQjtJQUNuREssZUFBZSxDQUFDWSxJQUFoQixDQUFxQkQsS0FBckIsRUFBNEJoQixLQUE1QixFQUFtQ00sTUFBbkM7RUFDRCxDQUZEO0VBR0FVLEtBQUssQ0FBQ3BHLGdCQUFOLENBQXVCLFdBQXZCLEVBQW9DNkYsZUFBcEM7RUFDQU8sS0FBSyxDQUFDcEcsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsVUFBVW9GLEtBQVYsRUFBaUI7SUFDbkRXLGVBQWUsQ0FBQ00sSUFBaEIsQ0FBcUJELEtBQXJCLEVBQTRCaEIsS0FBNUIsRUFBbUNNLE1BQW5DO0VBQ0QsQ0FGRDtFQUdBVSxLQUFLLENBQUNwRyxnQkFBTixDQUF1QixTQUF2QixFQUFrQyxVQUFVb0YsS0FBVixFQUFpQjtJQUNqRGUsYUFBYSxDQUFDRSxJQUFkLENBQW1CRCxLQUFuQixFQUEwQmhCLEtBQTFCLEVBQWlDTSxNQUFqQztFQUNELENBRkQ7QUFHRDs7QUFFRCxTQUFTdkYsU0FBVCxDQUFtQmlHLEtBQW5CLEVBQTBCO0VBQ3hCOUcsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0VBQ0E2RixLQUFLLENBQUM5RixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtFQUNBNkYsS0FBSyxDQUFDSCxLQUFOLENBQVlDLE1BQVosR0FBcUIsR0FBckI7QUFDRDs7QUFFRCxTQUFTSSxRQUFULENBQWtCaEUsS0FBbEIsRUFBeUI7RUFDdkIsT0FBT0EsS0FBSyxDQUFDZixLQUFOLENBQVlnRixPQUFaLENBQW9CLEtBQXBCLEVBQTJCLEVBQTNCLENBQVA7QUFDRDs7QUFFRCxTQUFTM0QsVUFBVCxDQUFvQjNDLENBQXBCLEVBQXVCO0VBQ3JCLElBQUlxQyxLQUFLLEdBQUdyQyxDQUFDLENBQUN5QyxNQUFkO0VBQ0EsSUFBSThELGdCQUFnQixHQUFHRixRQUFRLENBQUNoRSxLQUFELENBQS9CO0VBQ0EsSUFBSW1FLG1CQUFtQixHQUFHLEVBQTFCO0VBQ0EsSUFBSUMsY0FBYyxHQUFHcEUsS0FBSyxDQUFDb0UsY0FBM0IsQ0FKcUIsQ0FLckI7O0VBQ0EsSUFBSSxDQUFDRixnQkFBTCxFQUF1QixPQUFPbEUsS0FBSyxDQUFDZixLQUFOLEdBQWMsRUFBckIsQ0FORixDQU9yQjs7RUFDQSxJQUFJZSxLQUFLLENBQUNmLEtBQU4sQ0FBWUMsTUFBWixJQUFzQmtGLGNBQTFCLEVBQTBDO0lBQ3hDLElBQUl6RyxDQUFDLENBQUMwRyxJQUFGLElBQVUsTUFBTUMsSUFBTixDQUFXM0csQ0FBQyxDQUFDMEcsSUFBYixDQUFkLEVBQWtDO01BQ2hDckUsS0FBSyxDQUFDZixLQUFOLEdBQWNpRixnQkFBZDtJQUNEOztJQUNEO0VBQ0Q7O0VBRUQsSUFBSSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQkssUUFBaEIsQ0FBeUJMLGdCQUFnQixDQUFDLENBQUQsQ0FBekMsQ0FBSixFQUFtRDtJQUNqRDtJQUNBLElBQUlBLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsSUFBdUIsR0FBM0IsRUFBZ0NBLGdCQUFnQixHQUFHLE1BQU1BLGdCQUF6QjtJQUNoQyxJQUFJQSxnQkFBZ0IsQ0FBQyxDQUFELENBQWhCLElBQXVCLEdBQTNCLEVBQWdDQSxnQkFBZ0IsR0FBRyxHQUFuQixDQUhpQixDQUlqRDs7SUFDQSxJQUFJTSxXQUFXLEdBQUcsSUFBbEI7SUFDQUwsbUJBQW1CLEdBQUdLLFdBQVcsR0FBRyxHQUFwQyxDQU5pRCxDQU9qRDs7SUFDQSxJQUFJTixnQkFBZ0IsQ0FBQ2hGLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDO01BQy9CaUYsbUJBQW1CLElBQUksTUFBTUQsZ0JBQWdCLENBQUNPLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQTdCO0lBQ0Q7O0lBQ0QsSUFBSVAsZ0JBQWdCLENBQUNoRixNQUFqQixJQUEyQixDQUEvQixFQUFrQztNQUNoQ2lGLG1CQUFtQixJQUFJLE9BQU9ELGdCQUFnQixDQUFDTyxTQUFqQixDQUEyQixDQUEzQixFQUE4QixDQUE5QixDQUE5QjtJQUNEOztJQUNELElBQUlQLGdCQUFnQixDQUFDaEYsTUFBakIsSUFBMkIsQ0FBL0IsRUFBa0M7TUFDaENpRixtQkFBbUIsSUFBSSxNQUFNRCxnQkFBZ0IsQ0FBQ08sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBN0I7SUFDRDs7SUFDRCxJQUFJUCxnQkFBZ0IsQ0FBQ2hGLE1BQWpCLElBQTJCLEVBQS9CLEVBQW1DO01BQ2pDaUYsbUJBQW1CLElBQUksTUFBTUQsZ0JBQWdCLENBQUNPLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLEVBQTlCLENBQTdCO0lBQ0Q7RUFDRixDQXBCRCxNQW9CTztJQUFFO0lBQ1BOLG1CQUFtQixHQUFHLFVBQVVELGdCQUFoQztFQUNEOztFQUNEbEUsS0FBSyxDQUFDZixLQUFOLEdBQWNrRixtQkFBZDtBQUNEOztBQUVELFNBQVM1RCxlQUFULENBQXlCNUMsQ0FBekIsRUFBNEI7RUFDMUIsSUFBSXFDLEtBQUssR0FBR3JDLENBQUMsQ0FBQ3lDLE1BQWQ7O0VBQ0EsSUFBSTRELFFBQVEsQ0FBQ2hFLEtBQUQsQ0FBUixDQUFnQmQsTUFBaEIsSUFBMEIsQ0FBMUIsSUFBK0J2QixDQUFDLENBQUM2RCxPQUFGLEtBQWMsQ0FBakQsRUFBb0Q7SUFDbER4QixLQUFLLENBQUNmLEtBQU4sR0FBYyxFQUFkO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTRCxTQUFULENBQW1CZ0IsS0FBbkIsRUFBMEJ0QixHQUExQixFQUErQjtFQUM3QixJQUFJc0IsS0FBSyxDQUFDZixLQUFOLENBQVlDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7SUFDMUJSLEdBQUcsQ0FBQ2dHLFFBQUosR0FBZSxLQUFmO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xoRyxHQUFHLENBQUNnRyxRQUFKLEdBQWUsSUFBZjtFQUNEO0FBQ0Y7O0FBRUQsU0FBU3ZGLFVBQVQsQ0FBb0JhLEtBQXBCLEVBQTJCO0VBQ3pCQSxLQUFLLENBQUNmLEtBQU4sR0FBYyxFQUFkO0FBQ0Q7O0FBRUQsU0FBU2dDLFdBQVQsQ0FBcUJKLEtBQXJCLEVBQTRCRyxLQUE1QixFQUFtQztFQUNqQyxJQUFNMkQsSUFBSSxHQUFHOUQsS0FBSyxDQUFDekQsYUFBTixDQUFvQixNQUFwQixDQUFiO0VBQ0EsSUFBTW1GLEtBQUssR0FBRzFCLEtBQUssQ0FBQytELGlCQUFwQjtFQUNBLElBQU1wQyxJQUFJLEdBQUczQixLQUFLLENBQUNnRSxnQkFBbkI7RUFFQXRDLEtBQUssQ0FBQzdFLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07SUFDcEMsSUFBTW9ILEdBQUcsR0FBR0MsTUFBTSxDQUFDSixJQUFJLENBQUNsRCxXQUFOLENBQU4sR0FBMkIsQ0FBdkM7SUFDQWtELElBQUksQ0FBQ2xELFdBQUwsR0FBbUJxRCxHQUFuQjs7SUFDQSxJQUFJLENBQUMsQ0FBQzlELEtBQU4sRUFBYTtNQUNYQSxLQUFLLENBQUNTLFdBQU4sYUFBdUJxRCxHQUF2QjtJQUNEOztJQUNERSxhQUFhLENBQUNGLEdBQUQsRUFBTXZDLEtBQU4sQ0FBYjtFQUNELENBUEQ7RUFTQUMsSUFBSSxDQUFDOUUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtJQUNuQyxJQUFNb0gsR0FBRyxHQUFHQyxNQUFNLENBQUNKLElBQUksQ0FBQ2xELFdBQU4sQ0FBTixHQUEyQixDQUF2QztJQUNBa0QsSUFBSSxDQUFDbEQsV0FBTCxHQUFtQnFELEdBQW5COztJQUNBLElBQUksQ0FBQyxDQUFDOUQsS0FBTixFQUFhO01BQ1hBLEtBQUssQ0FBQ1MsV0FBTixhQUF1QnFELEdBQXZCO0lBQ0Q7O0lBQ0RFLGFBQWEsQ0FBQ0YsR0FBRCxFQUFNdkMsS0FBTixDQUFiO0VBQ0QsQ0FQRDtBQVFEOztBQUVELFNBQVN5QyxhQUFULENBQXVCRixHQUF2QixFQUE0QnBHLEdBQTVCLEVBQWlDO0VBQy9CLElBQUlvRyxHQUFHLEdBQUcsQ0FBVixFQUFhO0lBQ1hwRyxHQUFHLENBQUNnRyxRQUFKLEdBQWUsSUFBZjtFQUNELENBRkQsTUFFTztJQUNMaEcsR0FBRyxDQUFDZ0csUUFBSixHQUFlLEtBQWY7RUFDRDtBQUNGOztBQUVELFNBQVM5RSxlQUFULENBQXlCcUYsSUFBekIsRUFBK0I7RUFDN0JBLElBQUksQ0FBQ3ZGLGFBQUwsQ0FBbUIxQixTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsU0FBakM7RUFDQSxJQUFJaUgsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGtCQUFqQjs7RUFDQSxJQUFJLENBQUNELEtBQUssQ0FBQ3ZCLEtBQU4sQ0FBWXlCLFNBQWpCLEVBQTRCO0lBQzFCRixLQUFLLENBQUN2QixLQUFOLENBQVl5QixTQUFaLEdBQXdCRixLQUFLLENBQUNHLFlBQU4sR0FBcUIsSUFBN0M7RUFDRDtBQUNGOztBQUVELFNBQVMxRixrQkFBVCxDQUE0QnNGLElBQTVCLEVBQWtDO0VBQ2hDQSxJQUFJLENBQUN2RixhQUFMLENBQW1CMUIsU0FBbkIsQ0FBNkJHLE1BQTdCLENBQW9DLFNBQXBDO0VBQ0EsSUFBSStHLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxrQkFBakI7O0VBQ0EsSUFBSUQsS0FBSyxDQUFDdkIsS0FBTixDQUFZeUIsU0FBaEIsRUFBMkI7SUFDekJGLEtBQUssQ0FBQ3ZCLEtBQU4sQ0FBWXlCLFNBQVosR0FBd0IsSUFBeEI7RUFDRDtBQUNGOztBQUVELFNBQVMzQyxXQUFULENBQXFCL0QsR0FBckIsRUFBMEJxQyxPQUExQixFQUFtQztFQUNqQ3JDLEdBQUcsQ0FBQ1YsU0FBSixDQUFjQyxHQUFkLENBQWtCLFlBQWxCO0VBQ0E4QyxPQUFPLENBQUMvQyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixRQUF0QjtBQUNEOztBQUVELFNBQVNxSCxZQUFULENBQXNCNUcsR0FBdEIsRUFBMkJxQyxPQUEzQixFQUFvQztFQUNsQ3JDLEdBQUcsQ0FBQ1YsU0FBSixDQUFjRyxNQUFkLENBQXFCLFlBQXJCO0VBQ0E0QyxPQUFPLENBQUMvQyxTQUFSLENBQWtCRyxNQUFsQixDQUF5QixRQUF6QjtBQUNEOztBQUVELFNBQVN1RSxhQUFULENBQXVCaUMsSUFBdkIsRUFBNkJqRyxHQUE3QixFQUFrQ3FDLE9BQWxDLEVBQTJDd0UsUUFBM0MsRUFBcUQ7RUFFbkQsSUFBSVQsR0FBRyxHQUFHQyxNQUFNLENBQUNKLElBQUksQ0FBQ2xELFdBQU4sQ0FBaEI7O0VBRUEsSUFBSThELFFBQVEsS0FBSyxNQUFqQixFQUF5QjtJQUN2QlQsR0FBRyxJQUFJLENBQVA7RUFDRCxDQUZELE1BRU87SUFDTEEsR0FBRyxJQUFJLENBQVA7RUFDRDs7RUFFREEsR0FBRyxHQUFHLENBQU4sR0FBVVEsWUFBWSxDQUFDNUcsR0FBRCxFQUFNcUMsT0FBTixDQUF0QixHQUF1QzRELElBQUksQ0FBQ2xELFdBQUwsR0FBbUJxRCxHQUExRDtBQUNEOztBQUVELFNBQVM1QyxXQUFULEdBQXVCO0VBQ3JCLElBQU10QixLQUFLLEdBQUc1RCxRQUFRLENBQUN3QixnQkFBVCxDQUEwQixVQUExQixDQUFkO0VBQ0FvQyxLQUFLLENBQUNuQyxPQUFOLENBQWMsVUFBQUUsSUFBSSxFQUFJO0lBQ3BCLElBQU02RyxPQUFPLEdBQUc3RyxJQUFJLENBQUN2QixhQUFMLENBQW1CLGVBQW5CLENBQWhCO0lBQ0EsSUFBTXNCLEdBQUcsR0FBR0MsSUFBSSxDQUFDdkIsYUFBTCxDQUFtQixjQUFuQixDQUFaO0lBQ0EsSUFBTTJELE9BQU8sR0FBR3BDLElBQUksQ0FBQ3ZCLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTXlELEtBQUssR0FBR0UsT0FBTyxDQUFDM0QsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTW1GLEtBQUssR0FBR3hCLE9BQU8sQ0FBQzNELGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNb0YsSUFBSSxHQUFHekIsT0FBTyxDQUFDM0QsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUFvSSxPQUFPLENBQUM5SCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBQyxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQ29DLGNBQUY7SUFDRCxDQUZEO0lBR0FyQixHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDK0UsV0FBVyxDQUFDL0QsR0FBRCxFQUFNcUMsT0FBTixDQUFYO0lBQ0QsQ0FGRDtJQUlBd0IsS0FBSyxDQUFDN0UsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUNwQ2dGLGFBQWEsQ0FBQzdCLEtBQUQsRUFBUW5DLEdBQVIsRUFBYXFDLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtJQUNELENBRkQ7SUFJQXlCLElBQUksQ0FBQzlFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFDbkNnRixhQUFhLENBQUM3QixLQUFELEVBQVFuQyxHQUFSLEVBQWFxQyxPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFDRCxDQUZEO0VBR0QsQ0F0QkQ7QUF1QkQ7O0FBSUQsU0FBU2IsV0FBVCxDQUFxQnVGLElBQXJCLEVBQTJCO0VBQ3pCLHNPQUtRQSxJQUxSO0FBU0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKVxuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGNvbnN0IGRlbGl2ZXJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX2RlbGl2ZXJ5LWJ0blwiKVxuICBkZWxpdmVyeUJ0blswXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbiAgZGVsaXZlcnlCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsaXZlcnlCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG4gIH0pXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSwgMzAwKVxuICB9KVxuXG4gIGZvcm1BZGRyZXNzU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaW5wdXQudmFsdWUpO1xuICAgIGFkZHJlc3NMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGFiZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsRGVsZXRlLnNob3coKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYWRkJyk7XG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKTtcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NTZWFyY2guY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpXG4gIH0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG59XG5cbi8vINCk0YPQvdC60YbQuNC4XG5mdW5jdGlvbiBpbml0U3dpcGVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDIwXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRBcnJheVN3aXBlcigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3dpcGVyLWluaXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc3dpcGVyLWluaXRcIik7XG4gICAgc3dpcGVyQmxvY2suZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IGluaXRTd2lwZXIoZWxlbSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQsIHNjcm9sbCkge1xuICBsZXQgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgaWYgKGVuZFkgPiB0aGlzLnN0YXJ0WSAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0sIDMwMClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCwgc2Nyb2xsKSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQsIHNjcm9sbCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgbGV0IGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsLnNjcm9sbFRvcClcbiAgICBpZiAoZGVsdGFZID4gNTAgJiYgc2Nyb2xsLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsLCBzY3JvbGwpIHtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbilcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVUb3VjaE1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlTW91c2VNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlTW91c2VVcC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93bihlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0gMVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgICB9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgICB9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgICB9KVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCkge1xuICByZXR1cm4gYFxuICAgIDxsYWJlbCBjbGFzcz1cImFkZHJlc3NfX2xhYmVsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cImFkZHJlc3NfX2lucHV0XCIvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX19yYWRpb1wiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fdGV4dCB0ZXh0LTE2XCI+XG4gICAgICAgICR7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPiAgXG4gIGBcbn0iXX0=
