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
}

function handleMove(event, scroll) {
  var endY;

  if (event.type === "touchmove") {
    endY = event.touches[0].clientY;
  } else if (event.type === "mousemove" && this.isDragging) {
    endY = event.clientY;
  } else {
    return;
  }

  var deltaY = endY - this.startY;

  if (deltaY > 0 && scroll.scrollTop === 0) {
    this.style.bottom = -deltaY + "px";
  }
}

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
  modal.addEventListener("touchstart", handleStart);
  modal.addEventListener("touchmove", function (event) {
    handleMove.call(modal, event, scroll);
  });
  modal.addEventListener("touchend", function (event) {
    handleEnd.call(modal, event, scroll);
  });
  modal.addEventListener("mousedown", handleStart);
  modal.addEventListener("mousemove", function (event) {
    handleMove.call(modal, event, scroll);
  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJ0b2dnbGUiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImVsZW0iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVTdGFydCIsInR5cGUiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImlzRHJhZ2dpbmciLCJoYW5kbGVNb3ZlIiwic2Nyb2xsIiwiZW5kWSIsImRlbHRhWSIsInNjcm9sbFRvcCIsInN0eWxlIiwiYm90dG9tIiwiaGFuZGxlRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJtb2RhbCIsImNhbGwiLCJyZWdQaG9uZSIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcENDLGVBQWU7RUFFZixJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBaEI7RUFDQSxJQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixVQUF2QixDQUFsQjtFQUNBLElBQU1FLFVBQVUsR0FBR04sUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQW5CO0VBQ0EsSUFBTUcsU0FBUyxHQUFHUCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWxCO0VBQ0EsSUFBTUksV0FBVyxHQUFHUixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBcEI7RUFDQSxJQUFNSyxZQUFZLEdBQUdULFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixjQUF2QixDQUFyQjtFQUNBRCxPQUFPLENBQUNPLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztJQUN2Q0EsQ0FBQyxDQUFDQyxlQUFGO0lBQ0FDLFNBQVMsQ0FBQ1IsU0FBRCxDQUFUO0lBQ0FDLFVBQVUsQ0FBQ1EsUUFBWCxDQUFvQixDQUFwQixFQUF1QixDQUF2QjtJQUNBZCxRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7O0lBQ0EsSUFBSVQsV0FBVyxDQUFDUSxTQUFaLENBQXNCRSxRQUF0QixDQUErQixRQUEvQixDQUFKLEVBQThDO01BQzVDVixXQUFXLENBQUNRLFNBQVosQ0FBc0JHLE1BQXRCLENBQTZCLFFBQTdCO0lBQ0Q7RUFDRixDQVJEO0VBU0FaLFNBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3pDQSxDQUFDLENBQUNDLGVBQUY7SUFDQUMsU0FBUyxDQUFDTCxXQUFELENBQVQ7SUFDQUMsWUFBWSxDQUFDSyxRQUFiLENBQXNCLENBQXRCLEVBQXlCLENBQXpCO0lBQ0FkLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1Qjs7SUFDQSxJQUFJWixTQUFTLENBQUNXLFNBQVYsQ0FBb0JFLFFBQXBCLENBQTZCLFFBQTdCLENBQUosRUFBNEM7TUFDMUNiLFNBQVMsQ0FBQ1csU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsUUFBM0I7SUFDRDtFQUNGLENBUkQ7RUFVQUMsZ0JBQWdCLENBQUNmLFNBQUQsRUFBWUMsVUFBWixDQUFoQjtFQUNBYyxnQkFBZ0IsQ0FBQ1osV0FBRCxFQUFjQyxZQUFkLENBQWhCO0VBQ0FZLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsVUFBWjtFQUVBLElBQU1pQixTQUFTLEdBQUd2QixRQUFRLENBQUN3QixnQkFBVCxDQUEwQixjQUExQixDQUFsQjtFQUVBRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0lBQ3ZCQSxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDZ0IsR0FBRyxDQUFDVixTQUFKLENBQWNXLE1BQWQsQ0FBcUIsUUFBckI7SUFDRCxDQUZEO0VBR0QsQ0FKRDtFQU1BLElBQU1DLG9CQUFvQixHQUFHNUIsUUFBUSxDQUFDd0IsZ0JBQVQsQ0FBMEIsMkJBQTFCLENBQTdCO0VBRUFJLG9CQUFvQixDQUFDSCxPQUFyQixDQUE2QixVQUFBQyxHQUFHLEVBQUk7SUFDbENBLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENrQixvQkFBb0IsQ0FBQ0gsT0FBckIsQ0FBNkIsVUFBQUksSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ2IsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCLENBQUo7TUFBQSxDQUFqQztNQUNBTyxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixRQUFsQjtJQUNELENBSEQ7RUFJRCxDQUxEO0VBT0EsSUFBTWEsV0FBVyxHQUFHOUIsUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0VBQ0EsSUFBTTJCLGNBQWMsR0FBRy9CLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixxQkFBdkIsQ0FBdkI7RUFDQSxJQUFNNEIsZUFBZSxHQUFHaEMsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUF4QjtFQUNBMEIsV0FBVyxDQUFDcEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtJQUMxQ3VCLFNBQVMsQ0FBQ0gsV0FBRCxFQUFjQyxjQUFkLENBQVQ7O0lBQ0EsSUFBSUQsV0FBVyxDQUFDSSxLQUFaLENBQWtCQyxNQUFsQixHQUEyQixDQUEvQixFQUFrQztNQUNoQ0gsZUFBZSxDQUFDaEIsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0lBQ0QsQ0FGRCxNQUVPO01BQ0xlLGVBQWUsQ0FBQ2hCLFNBQWhCLENBQTBCRyxNQUExQixDQUFpQyxRQUFqQztJQUNEO0VBQ0YsQ0FQRDtFQVFBWSxjQUFjLENBQUNyQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0lBQzdDMEIsVUFBVSxDQUFDTixXQUFELENBQVY7SUFDQUcsU0FBUyxDQUFDSCxXQUFELEVBQWNDLGNBQWQsQ0FBVDs7SUFFQSxJQUFJRCxXQUFXLENBQUNJLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO01BQ2hDSCxlQUFlLENBQUNoQixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsUUFBOUI7SUFDRCxDQUZELE1BRU87TUFDTGUsZUFBZSxDQUFDaEIsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLFFBQWpDO0lBQ0Q7RUFDRixDQVREO0VBYUEsSUFBTWtCLFVBQVUsR0FBR3JDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBbkI7RUFDQSxJQUFNa0MsTUFBTSxHQUFHdEMsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUFmO0VBQ0EsSUFBTW1DLGFBQWEsR0FBR3ZDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix1QkFBdkIsQ0FBdEI7RUFDQSxJQUFNb0MsaUJBQWlCLEdBQUd4QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQTFCO0VBQ0EsSUFBTXFDLFdBQVcsR0FBR3pDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixxQkFBdkIsQ0FBcEI7RUFFQSxJQUFNc0MsV0FBVyxHQUFHMUMsUUFBUSxDQUFDd0IsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXBCO0VBQ0FrQixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUxQixTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QjtFQUVBeUIsV0FBVyxDQUFDakIsT0FBWixDQUFvQixVQUFBQyxHQUFHLEVBQUk7SUFDekJBLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENnQyxXQUFXLENBQUNqQixPQUFaLENBQW9CLFVBQUFJLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNiLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBeEI7TUFDQU8sR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDRCxDQUhEO0VBSUQsQ0FMRDtFQU9Bb0IsVUFBVSxDQUFDM0IsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtJQUN6QzJCLFVBQVUsQ0FBQ00sYUFBWCxDQUF5QjNCLFNBQXpCLENBQW1DRSxRQUFuQyxDQUE0QyxTQUE1QyxJQUF5RDBCLGtCQUFrQixDQUFDUCxVQUFELENBQTNFLEdBQTBGUSxlQUFlLENBQUNSLFVBQUQsQ0FBekc7RUFDRCxDQUZEO0VBSUFDLE1BQU0sQ0FBQzVCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07SUFDckM2QixhQUFhLENBQUN2QixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtJQUNBNkIsVUFBVSxDQUFDLFlBQU07TUFDZk4saUJBQWlCLENBQUNwQyxhQUFsQixDQUFnQyxPQUFoQyxFQUF5QzJDLEtBQXpDO0lBQ0QsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdELENBTEQ7RUFPQVAsaUJBQWlCLENBQUM5QixnQkFBbEIsQ0FBbUMsUUFBbkMsRUFBNkMsVUFBQUMsQ0FBQyxFQUFJO0lBQ2hEQSxDQUFDLENBQUNxQyxjQUFGO0lBQ0EsSUFBTUMsS0FBSyxHQUFHVCxpQkFBaUIsQ0FBQ3BDLGFBQWxCLENBQWdDLE9BQWhDLENBQWQ7SUFDQSxJQUFNOEMsS0FBSyxHQUFHQyxXQUFXLENBQUNGLEtBQUssQ0FBQ2YsS0FBUCxDQUF6QjtJQUNBTyxXQUFXLENBQUNXLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDRixLQUE1QztJQUNBRCxLQUFLLENBQUNmLEtBQU4sR0FBYyxFQUFkO0lBQ0FLLGFBQWEsQ0FBQ3ZCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0VBQ0QsQ0FQRDtFQVNBbkIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDTixTQUFTLENBQUNhLFFBQVYsQ0FBbUJQLENBQUMsQ0FBQzBDLE1BQXJCLENBQUQsSUFBaUMsQ0FBQ2xELE9BQU8sQ0FBQ2UsUUFBUixDQUFpQlAsQ0FBQyxDQUFDMEMsTUFBbkIsQ0FBdEMsRUFBa0U7TUFDaEVoRCxTQUFTLENBQUNXLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCO01BQ0FuQixRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7SUFDRDtFQUNGLENBTEQ7RUFPQW5CLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ0gsV0FBVyxDQUFDVSxRQUFaLENBQXFCUCxDQUFDLENBQUMwQyxNQUF2QixDQUFELElBQW1DLENBQUM5QyxTQUFTLENBQUNXLFFBQVYsQ0FBbUJQLENBQUMsQ0FBQzBDLE1BQXJCLENBQXhDLEVBQXNFO01BQ3BFN0MsV0FBVyxDQUFDUSxTQUFaLENBQXNCRyxNQUF0QixDQUE2QixRQUE3QjtNQUNBbkIsUUFBUSxDQUFDZSxJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0lBQ0Q7RUFDRixDQUxEO0VBT0FuQixRQUFRLENBQUNVLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN4QyxJQUFJLENBQUMwQixVQUFVLENBQUNNLGFBQVgsQ0FBeUJ6QixRQUF6QixDQUFrQ1AsQ0FBQyxDQUFDMEMsTUFBcEMsQ0FBTCxFQUFrRDtNQUNoRFQsa0JBQWtCLENBQUNQLFVBQUQsQ0FBbEI7TUFDQUUsYUFBYSxDQUFDdkIsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsUUFBL0I7SUFDRDtFQUNGLENBTEQ7QUFNRDs7QUFFRCxJQUFJbkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQUosRUFBOEM7RUFDNUMsSUFBTXFELEdBQUcsR0FBR3RELFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixtQ0FBdkIsQ0FBWjtFQUNBa0QsR0FBRyxDQUFDNUMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFPO0lBQ25DNEMsVUFBVSxDQUFDNUMsQ0FBRCxDQUFWO0VBQ0QsQ0FGRDtFQUdBMkMsR0FBRyxDQUFDNUMsZ0JBQUosQ0FBcUIsU0FBckIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3JDNkMsZUFBZSxDQUFDN0MsQ0FBRCxDQUFmO0VBQ0QsQ0FGRDtBQUdEOztBQUVELElBQUlYLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFKLEVBQXVDO0VBQ3JDLElBQU13RCxZQUFZLEdBQUd6RCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0VBQ0EsSUFBTXNELFdBQVcsR0FBRyxJQUFJQyxTQUFTLENBQUNDLEtBQWQsQ0FBb0I1RCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXBCLENBQXBCO0VBQ0EsSUFBTXlELEtBQUssR0FBRzdELFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLHdCQUExQixDQUFkO0VBRUEsSUFBTXNDLEtBQUssR0FBRzlELFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBZDtFQUVBeUQsS0FBSyxDQUFDcEMsT0FBTixDQUFjLFVBQUFzQyxJQUFJLEVBQUk7SUFDcEIsSUFBTUMsT0FBTyxHQUFHRCxJQUFJLENBQUMzRCxhQUFMLENBQW1CLGdDQUFuQixDQUFoQjtJQUNBLElBQU02RCxLQUFLLEdBQUdGLElBQUksQ0FBQzNELGFBQUwsQ0FBbUIsOEJBQW5CLENBQWQ7SUFDQThELFdBQVcsQ0FBQ0YsT0FBRCxFQUFVQyxLQUFWLENBQVg7RUFDRCxDQUpEO0VBTUFSLFlBQVksQ0FBQy9DLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07SUFDM0NnRCxXQUFXLENBQUNTLElBQVo7RUFDRCxDQUZEO0VBSUFqRSxlQUFlO0VBRWZnRSxXQUFXLENBQUNKLEtBQUQsQ0FBWDtFQUVBLElBQU1NLFVBQVUsR0FBR3BFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix3QkFBdkIsQ0FBbkI7RUFDQSxJQUFNaUUsY0FBYyxHQUFHckUsUUFBUSxDQUFDSSxhQUFULENBQXVCLHdCQUF2QixDQUF2QjtFQUNBLElBQU1rRSxRQUFRLEdBQUd0RSxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWpCO0VBQ0EsSUFBTW1FLFFBQVEsR0FBR3ZFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBakI7RUFDQSxJQUFNb0UsUUFBUSxHQUFHeEUsUUFBUSxDQUFDSSxhQUFULENBQXVCLDRCQUF2QixDQUFqQjtFQUVBbUUsUUFBUSxDQUFDN0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDNEMsVUFBVSxDQUFDNUMsQ0FBRCxDQUFWO0VBQ0QsQ0FGRDtFQUdBNEQsUUFBUSxDQUFDN0QsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzFDNkMsZUFBZSxDQUFDN0MsQ0FBRCxDQUFmOztJQUNBLElBQUlBLENBQUMsQ0FBQzhELE9BQUYsS0FBYyxFQUFsQixFQUFzQjtNQUNwQkgsUUFBUSxDQUFDSSxXQUFULEdBQXVCSCxRQUFRLENBQUNyQyxLQUFoQztNQUNBcUMsUUFBUSxDQUFDckMsS0FBVCxHQUFpQixFQUFqQjtNQUNBa0MsVUFBVSxDQUFDcEQsU0FBWCxDQUFxQkcsTUFBckIsQ0FBNEIsUUFBNUI7SUFDRDtFQUNGLENBUEQ7RUFRQXFELFFBQVEsQ0FBQzlELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07SUFDdkM0RCxRQUFRLENBQUNJLFdBQVQsR0FBdUJILFFBQVEsQ0FBQ3JDLEtBQWhDO0lBQ0FxQyxRQUFRLENBQUNyQyxLQUFULEdBQWlCLEVBQWpCO0lBQ0FrQyxVQUFVLENBQUNwRCxTQUFYLENBQXFCRyxNQUFyQixDQUE0QixRQUE1QjtFQUNELENBSkQ7RUFNQWtELGNBQWMsQ0FBQzNELGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07SUFDN0MwRCxVQUFVLENBQUNwRCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtFQUNELENBRkQ7RUFJQWpCLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ3lELFVBQVUsQ0FBQ2xELFFBQVgsQ0FBb0JQLENBQUMsQ0FBQzBDLE1BQXRCLENBQUQsSUFBa0MsQ0FBQ2dCLGNBQWMsQ0FBQ25ELFFBQWYsQ0FBd0JQLENBQUMsQ0FBQzBDLE1BQTFCLENBQXZDLEVBQTBFO01BQ3hFZSxVQUFVLENBQUNwRCxTQUFYLENBQXFCRyxNQUFyQixDQUE0QixRQUE1QjtJQUNEO0VBQ0YsQ0FKRDtBQUtEOztBQUVELElBQUluQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBSixFQUF3QztFQUN0Q0MsZUFBZTtFQUNmLElBQU15RSxJQUFJLEdBQUczRSxRQUFRLENBQUN3QixnQkFBVCxDQUEwQixzQkFBMUIsQ0FBYjtFQUNBbUQsSUFBSSxDQUFDbEQsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBTWtELEtBQU4sRUFBZ0I7SUFDM0JsRCxHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDaUUsSUFBSSxDQUFDbEQsT0FBTCxDQUFhLFVBQUNJLElBQUQsRUFBT2dELFNBQVAsRUFBcUI7UUFDaEMsSUFBSUEsU0FBUyxJQUFJRCxLQUFqQixFQUF3QjtVQUN0Qi9DLElBQUksQ0FBQ2IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xZLElBQUksQ0FBQ2IsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCO1FBQ0Q7TUFDRixDQU5EO0lBT0QsQ0FSRDtFQVNELENBVkQ7QUFZRDs7QUFFRCxJQUFJbkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTXFDLE9BQU0sR0FBR3RDLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBZjs7RUFDQSxJQUFNbUMsY0FBYSxHQUFHdkMsUUFBUSxDQUFDSSxhQUFULENBQXVCLHVCQUF2QixDQUF0Qjs7RUFDQSxJQUFNb0Msa0JBQWlCLEdBQUd4QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsaUJBQXZCLENBQTFCOztFQUNBLElBQU1xQyxZQUFXLEdBQUd6QyxRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQXBCOztFQUVBa0MsT0FBTSxDQUFDNUIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtJQUNyQzZCLGNBQWEsQ0FBQ3ZCLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCOztJQUNBNkIsVUFBVSxDQUFDLFlBQU07TUFDZk4sa0JBQWlCLENBQUNwQyxhQUFsQixDQUFnQyxPQUFoQyxFQUF5QzJDLEtBQXpDO0lBQ0QsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdELENBTEQ7O0VBT0FQLGtCQUFpQixDQUFDOUIsZ0JBQWxCLENBQW1DLFFBQW5DLEVBQTZDLFVBQUFDLENBQUMsRUFBSTtJQUNoREEsQ0FBQyxDQUFDcUMsY0FBRjs7SUFDQSxJQUFNQyxLQUFLLEdBQUdULGtCQUFpQixDQUFDcEMsYUFBbEIsQ0FBZ0MsT0FBaEMsQ0FBZDs7SUFDQSxJQUFNOEMsS0FBSyxHQUFHQyxXQUFXLENBQUNGLEtBQUssQ0FBQ2YsS0FBUCxDQUF6Qjs7SUFDQU8sWUFBVyxDQUFDVyxrQkFBWixDQUErQixXQUEvQixFQUE0Q0YsS0FBNUM7O0lBQ0FELEtBQUssQ0FBQ2YsS0FBTixHQUFjLEVBQWQ7O0lBQ0FLLGNBQWEsQ0FBQ3ZCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0VBQ0QsQ0FQRDs7RUFTQW5CLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQzRCLGNBQWEsQ0FBQ3JCLFFBQWQsQ0FBdUJQLENBQUMsQ0FBQzBDLE1BQXpCLENBQUQsSUFBcUMsQ0FBQ2YsT0FBTSxDQUFDcEIsUUFBUCxDQUFnQlAsQ0FBQyxDQUFDMEMsTUFBbEIsQ0FBMUMsRUFBcUU7TUFDbkVkLGNBQWEsQ0FBQ3ZCLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0lBQ0Q7RUFDRixDQUpEO0VBTUEsSUFBTTJELFNBQVMsR0FBRzlFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBbEI7RUFDQSxJQUFNMkUsYUFBYSxHQUFHL0UsUUFBUSxDQUFDSSxhQUFULENBQXVCLDBCQUF2QixDQUF0QjtFQUNBLElBQU00RSxRQUFRLEdBQUdoRixRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQWpCO0VBQ0EsSUFBTTZFLFNBQVMsR0FBR2pGLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBbEI7O0VBQ0EsSUFBTW9FLFNBQVEsR0FBR3hFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBakI7O0VBRUFvRSxTQUFRLENBQUM5RCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0lBQ3ZDc0UsUUFBUSxDQUFDTixXQUFULEdBQXVCTyxTQUFTLENBQUMvQyxLQUFqQztJQUNBK0MsU0FBUyxDQUFDL0MsS0FBVixHQUFrQixFQUFsQjtJQUNBNEMsU0FBUyxDQUFDOUQsU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsUUFBM0I7RUFDRCxDQUpEOztFQU1BOEQsU0FBUyxDQUFDdkUsZ0JBQVYsQ0FBMkIsVUFBM0IsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzVDLElBQUlBLENBQUMsQ0FBQ3VFLEdBQUYsS0FBVSxPQUFkLEVBQXVCO01BQ3JCRixRQUFRLENBQUNOLFdBQVQsR0FBdUJPLFNBQVMsQ0FBQy9DLEtBQWpDO01BQ0ErQyxTQUFTLENBQUMvQyxLQUFWLEdBQWtCLEVBQWxCO01BQ0E0QyxTQUFTLENBQUM5RCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FORDtFQVFBNEQsYUFBYSxDQUFDckUsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtJQUM1Q29FLFNBQVMsQ0FBQzlELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0VBQ0QsQ0FGRDtFQUlBakIsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDbUUsU0FBUyxDQUFDNUQsUUFBVixDQUFtQlAsQ0FBQyxDQUFDMEMsTUFBckIsQ0FBRCxJQUFpQyxDQUFDMEIsYUFBYSxDQUFDN0QsUUFBZCxDQUF1QlAsQ0FBQyxDQUFDMEMsTUFBekIsQ0FBdEMsRUFBd0U7TUFDdEV5QixTQUFTLENBQUM5RCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FKRDtBQUtEOztBQUVELElBQUluQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQ0MsZUFBZTs7RUFFZixJQUFJRixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0QytFLFdBQVc7RUFDWjtBQUVGOztBQUVELElBQUluRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztFQUV6QyxJQUFJRCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0QytFLFdBQVc7RUFDWjs7RUFFRCxJQUFNaEYsUUFBTyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWhCOztFQUNBLElBQU1DLFVBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFULENBQXVCLFVBQXZCLENBQWxCOztFQUNBLElBQU1FLFdBQVUsR0FBR04sUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQW5COztFQUNBLElBQU1HLFVBQVMsR0FBR1AsUUFBUSxDQUFDSSxhQUFULENBQXVCLDhCQUF2QixDQUFsQjs7RUFDQSxJQUFNSSxZQUFXLEdBQUdSLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixTQUF2QixDQUFwQjs7RUFDQSxJQUFNSyxhQUFZLEdBQUdULFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixjQUF2QixDQUFyQjs7RUFHQSxJQUFNMEIsWUFBVyxHQUFHOUIsUUFBUSxDQUFDSSxhQUFULENBQXVCLGVBQXZCLENBQXBCOztFQUNBLElBQU0yQixlQUFjLEdBQUcvQixRQUFRLENBQUNJLGFBQVQsQ0FBdUIscUJBQXZCLENBQXZCOztFQUNBLElBQU00QixnQkFBZSxHQUFHaEMsUUFBUSxDQUFDSSxhQUFULENBQXVCLG9CQUF2QixDQUF4Qjs7RUFDQTBCLFlBQVcsQ0FBQ3BCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07SUFDMUN1QixTQUFTLENBQUNILFlBQUQsRUFBY0MsZUFBZCxDQUFUOztJQUNBLElBQUlELFlBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDaENILGdCQUFlLENBQUNoQixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsUUFBOUI7SUFDRCxDQUZELE1BRU87TUFDTGUsZ0JBQWUsQ0FBQ2hCLFNBQWhCLENBQTBCRyxNQUExQixDQUFpQyxRQUFqQztJQUNEO0VBQ0YsQ0FQRDs7RUFRQVksZUFBYyxDQUFDckIsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtJQUM3QzBCLFVBQVUsQ0FBQ04sWUFBRCxDQUFWO0lBQ0FHLFNBQVMsQ0FBQ0gsWUFBRCxFQUFjQyxlQUFkLENBQVQ7O0lBRUEsSUFBSUQsWUFBVyxDQUFDSSxLQUFaLENBQWtCQyxNQUFsQixHQUEyQixDQUEvQixFQUFrQztNQUNoQ0gsZ0JBQWUsQ0FBQ2hCLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixRQUE5QjtJQUNELENBRkQsTUFFTztNQUNMZSxnQkFBZSxDQUFDaEIsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLFFBQWpDO0lBQ0Q7RUFDRixDQVREOztFQVlBaEIsUUFBTyxDQUFDTyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDQyxDQUFELEVBQU87SUFDdkNBLENBQUMsQ0FBQ0MsZUFBRjtJQUNBQyxTQUFTLENBQUNSLFVBQUQsQ0FBVDs7SUFDQUMsV0FBVSxDQUFDUSxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCOztJQUNBZCxRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7O0lBQ0EsSUFBSVQsWUFBVyxDQUFDUSxTQUFaLENBQXNCRSxRQUF0QixDQUErQixRQUEvQixDQUFKLEVBQThDO01BQzVDVixZQUFXLENBQUNRLFNBQVosQ0FBc0JHLE1BQXRCLENBQTZCLFFBQTdCO0lBQ0Q7RUFDRixDQVJEOztFQVNBWixVQUFTLENBQUNHLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztJQUN6Q0EsQ0FBQyxDQUFDQyxlQUFGO0lBQ0FDLFNBQVMsQ0FBQ0wsWUFBRCxDQUFUOztJQUNBQyxhQUFZLENBQUNLLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekI7O0lBQ0FkLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1Qjs7SUFDQSxJQUFJWixVQUFTLENBQUNXLFNBQVYsQ0FBb0JFLFFBQXBCLENBQTZCLFFBQTdCLENBQUosRUFBNEM7TUFDMUNiLFVBQVMsQ0FBQ1csU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsUUFBM0I7SUFDRDtFQUNGLENBUkQ7O0VBVUFDLGdCQUFnQixDQUFDZixVQUFELEVBQVlDLFdBQVosQ0FBaEI7RUFDQWMsZ0JBQWdCLENBQUNaLFlBQUQsRUFBY0MsYUFBZCxDQUFoQjs7RUFFQSxJQUFNYyxVQUFTLEdBQUd2QixRQUFRLENBQUN3QixnQkFBVCxDQUEwQixjQUExQixDQUFsQjs7RUFFQUQsVUFBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtJQUN2QkEsR0FBRyxDQUFDaEIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUNsQ2dCLEdBQUcsQ0FBQ1YsU0FBSixDQUFjVyxNQUFkLENBQXFCLFFBQXJCO0lBQ0QsQ0FGRDtFQUdELENBSkQ7O0VBTUEzQixRQUFRLENBQUNVLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN4QyxJQUFJLENBQUNOLFVBQVMsQ0FBQ2EsUUFBVixDQUFtQlAsQ0FBQyxDQUFDMEMsTUFBckIsQ0FBRCxJQUFpQyxDQUFDbEQsUUFBTyxDQUFDZSxRQUFSLENBQWlCUCxDQUFDLENBQUMwQyxNQUFuQixDQUF0QyxFQUFrRTtNQUNoRWhELFVBQVMsQ0FBQ1csU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsUUFBM0I7O01BQ0FuQixRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7SUFDRDtFQUNGLENBTEQ7RUFPQW5CLFFBQVEsQ0FBQ1UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ0gsWUFBVyxDQUFDVSxRQUFaLENBQXFCUCxDQUFDLENBQUMwQyxNQUF2QixDQUFELElBQW1DLENBQUM5QyxVQUFTLENBQUNXLFFBQVYsQ0FBbUJQLENBQUMsQ0FBQzBDLE1BQXJCLENBQXhDLEVBQXNFO01BQ3BFN0MsWUFBVyxDQUFDUSxTQUFaLENBQXNCRyxNQUF0QixDQUE2QixRQUE3Qjs7TUFDQW5CLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUVEO0VBQ0YsQ0FORDs7RUFRQSxJQUFNUyxxQkFBb0IsR0FBRzVCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLG1DQUExQixDQUE3Qjs7RUFFQUkscUJBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFDLEdBQUcsRUFBSTtJQUNsQ0EsR0FBRyxDQUFDaEIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUNsQ2tCLHFCQUFvQixDQUFDSCxPQUFyQixDQUE2QixVQUFBSSxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDYixTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEIsQ0FBSjtNQUFBLENBQWpDOztNQUNBTyxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixRQUFsQjtJQUNELENBSEQ7RUFJRCxDQUxEOztFQU9BZixlQUFlO0FBRWhCOztBQUVELElBQUlGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQXdDO0VBQ3RDLElBQU1tRixNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXLHNCQUFYLEVBQW1DO0lBQ2hEQyxhQUFhLEVBQUUsTUFEaUM7SUFFaERDLFlBQVksRUFBRTtFQUZrQyxDQUFuQyxDQUFmOztFQUtBLElBQUl2RixRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0QytFLFdBQVc7RUFDWjs7RUFFRCxJQUFNekQsR0FBRyxHQUFHMUIsUUFBUSxDQUFDSSxhQUFULENBQXVCLG1CQUF2QixDQUFaO0VBQ0EsSUFBTTRELE9BQU8sR0FBR2hFLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7O0VBQ0EsSUFBTTBELE1BQUssR0FBR0UsT0FBTyxDQUFDNUQsYUFBUixDQUFzQixNQUF0QixDQUFkOztFQUNBLElBQU1vRixLQUFLLEdBQUd4QixPQUFPLENBQUM1RCxhQUFSLENBQXNCLDZCQUF0QixDQUFkO0VBQ0EsSUFBTXFGLElBQUksR0FBR3pCLE9BQU8sQ0FBQzVELGFBQVIsQ0FBc0IsNEJBQXRCLENBQWI7RUFFQXNCLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07SUFDbENnRixXQUFXLENBQUNoRSxHQUFELEVBQU1zQyxPQUFOLENBQVg7RUFDRCxDQUZEO0VBSUF3QixLQUFLLENBQUM5RSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0lBQ3BDaUYsYUFBYSxDQUFDN0IsTUFBRCxFQUFRcEMsR0FBUixFQUFhc0MsT0FBYixFQUFzQixPQUF0QixDQUFiO0VBQ0QsQ0FGRDtFQUlBeUIsSUFBSSxDQUFDL0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtJQUNuQ2lGLGFBQWEsQ0FBQzdCLE1BQUQsRUFBUXBDLEdBQVIsRUFBYXNDLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtFQUNELENBRkQ7RUFJQTlELGVBQWU7QUFDaEIsQyxDQUVEOzs7QUFDQSxTQUFTMEYsVUFBVCxDQUFvQkMsU0FBcEIsRUFBK0I7RUFDN0IsT0FBTyxJQUFJUixNQUFKLENBQVdRLFNBQVgsRUFBc0I7SUFDM0JQLGFBQWEsRUFBRSxNQURZO0lBRTNCQyxZQUFZLEVBQUU7RUFGYSxDQUF0QixDQUFQO0FBSUQ7O0FBRUQsU0FBU3JGLGVBQVQsR0FBMkI7RUFDekIsSUFBSUYsUUFBUSxDQUFDSSxhQUFULENBQXVCLGlCQUF2QixDQUFKLEVBQStDO0lBQzdDLElBQU0wRixXQUFXLEdBQUc5RixRQUFRLENBQUN3QixnQkFBVCxDQUEwQixpQkFBMUIsQ0FBcEI7SUFDQXNFLFdBQVcsQ0FBQ3JFLE9BQVosQ0FBb0IsVUFBQUksSUFBSSxFQUFJO01BQzFCLElBQU11RCxNQUFNLEdBQUdRLFVBQVUsQ0FBQy9ELElBQUQsQ0FBekI7SUFDRCxDQUZEO0VBR0Q7QUFDRjs7QUFFRCxTQUFTakIsZUFBVCxDQUF5Qm1GLEtBQXpCLEVBQWdDO0VBQzlCQSxLQUFLLENBQUNuRixlQUFOO0FBQ0Q7O0FBRUQsU0FBU29GLFdBQVQsQ0FBcUJELEtBQXJCLEVBQTRCO0VBQzFCLElBQUlBLEtBQUssQ0FBQ0UsSUFBTixLQUFlLFlBQW5CLEVBQWlDO0lBQy9CLEtBQUtDLE1BQUwsR0FBY0gsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsT0FBL0I7RUFDRCxDQUZELE1BRU8sSUFBSUwsS0FBSyxDQUFDRSxJQUFOLEtBQWUsV0FBbkIsRUFBZ0M7SUFDckMsS0FBS0MsTUFBTCxHQUFjSCxLQUFLLENBQUNLLE9BQXBCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixJQUFsQjtFQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsVUFBVCxDQUFvQlAsS0FBcEIsRUFBMkJRLE1BQTNCLEVBQW1DO0VBQ2pDLElBQUlDLElBQUo7O0VBQ0EsSUFBSVQsS0FBSyxDQUFDRSxJQUFOLEtBQWUsV0FBbkIsRUFBZ0M7SUFDOUJPLElBQUksR0FBR1QsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsT0FBeEI7RUFDRCxDQUZELE1BRU8sSUFBSUwsS0FBSyxDQUFDRSxJQUFOLEtBQWUsV0FBZixJQUE4QixLQUFLSSxVQUF2QyxFQUFtRDtJQUN4REcsSUFBSSxHQUFHVCxLQUFLLENBQUNLLE9BQWI7RUFDRCxDQUZNLE1BRUE7SUFDTDtFQUNEOztFQUVELElBQUlLLE1BQU0sR0FBR0QsSUFBSSxHQUFHLEtBQUtOLE1BQXpCOztFQUNBLElBQUlPLE1BQU0sR0FBRyxDQUFULElBQWNGLE1BQU0sQ0FBQ0csU0FBUCxLQUFxQixDQUF2QyxFQUEwQztJQUN4QyxLQUFLQyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBQ0gsTUFBRCxHQUFVLElBQTlCO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTSSxTQUFULENBQW1CZCxLQUFuQixFQUEwQlEsTUFBMUIsRUFBa0M7RUFDaEMsSUFBSSxLQUFLRixVQUFMLElBQW1CTixLQUFLLENBQUNFLElBQU4sS0FBZSxVQUF0QyxFQUFrRDtJQUNoRCxJQUFJTyxJQUFKOztJQUNBLElBQUlULEtBQUssQ0FBQ0UsSUFBTixLQUFlLFVBQW5CLEVBQStCO01BQzdCTyxJQUFJLEdBQUdULEtBQUssQ0FBQ2UsY0FBTixDQUFxQixDQUFyQixFQUF3QlYsT0FBL0I7SUFDRCxDQUZELE1BRU8sSUFBSUwsS0FBSyxDQUFDRSxJQUFOLEtBQWUsU0FBbkIsRUFBOEI7TUFDbkNPLElBQUksR0FBR1QsS0FBSyxDQUFDSyxPQUFiO01BQ0EsS0FBS0MsVUFBTCxHQUFrQixLQUFsQjtJQUNEOztJQUVELElBQUlJLE1BQU0sR0FBR0QsSUFBSSxHQUFHLEtBQUtOLE1BQXpCOztJQUNBLElBQUlPLE1BQU0sR0FBRyxFQUFULElBQWVGLE1BQU0sQ0FBQ0csU0FBUCxLQUFxQixDQUF4QyxFQUEyQztNQUN6QyxLQUFLMUYsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCO01BQ0FuQixRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7SUFDRCxDQUhELE1BR087TUFDTCxLQUFLd0YsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLEdBQXBCO0lBQ0Q7RUFDRjtBQUNGOztBQUVELFNBQVN4RixnQkFBVCxDQUEwQjJGLEtBQTFCLEVBQWlDUixNQUFqQyxFQUF5QztFQUN2Q1EsS0FBSyxDQUFDckcsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NFLGVBQWhDO0VBQ0EyRixNQUFNLENBQUM3RixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ0UsZUFBdEM7RUFFQW1HLEtBQUssQ0FBQ3JHLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDc0YsV0FBckM7RUFDQWUsS0FBSyxDQUFDckcsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0MsVUFBVXFGLEtBQVYsRUFBaUI7SUFDbkRPLFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQkQsS0FBaEIsRUFBdUJoQixLQUF2QixFQUE4QlEsTUFBOUI7RUFDRCxDQUZEO0VBR0FRLEtBQUssQ0FBQ3JHLGdCQUFOLENBQXVCLFVBQXZCLEVBQW1DLFVBQVVxRixLQUFWLEVBQWlCO0lBQ2xEYyxTQUFTLENBQUNHLElBQVYsQ0FBZUQsS0FBZixFQUFzQmhCLEtBQXRCLEVBQTZCUSxNQUE3QjtFQUNELENBRkQ7RUFJQVEsS0FBSyxDQUFDckcsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NzRixXQUFwQztFQUNBZSxLQUFLLENBQUNyRyxnQkFBTixDQUF1QixXQUF2QixFQUFvQyxVQUFVcUYsS0FBVixFQUFpQjtJQUNuRE8sVUFBVSxDQUFDVSxJQUFYLENBQWdCRCxLQUFoQixFQUF1QmhCLEtBQXZCLEVBQThCUSxNQUE5QjtFQUNELENBRkQ7RUFHQVEsS0FBSyxDQUFDckcsZ0JBQU4sQ0FBdUIsU0FBdkIsRUFBa0MsVUFBVXFGLEtBQVYsRUFBaUI7SUFDakRjLFNBQVMsQ0FBQ0csSUFBVixDQUFlRCxLQUFmLEVBQXNCaEIsS0FBdEIsRUFBNkJRLE1BQTdCO0VBQ0QsQ0FGRDtBQUdEOztBQUVELFNBQVMxRixTQUFULENBQW1Ca0csS0FBbkIsRUFBMEI7RUFDeEIvRyxRQUFRLENBQUNlLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7RUFDQThGLEtBQUssQ0FBQy9GLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFFBQXBCO0VBQ0E4RixLQUFLLENBQUNKLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixHQUFyQjtBQUNEOztBQUVELFNBQVNLLFFBQVQsQ0FBa0JoRSxLQUFsQixFQUF5QjtFQUN2QixPQUFPQSxLQUFLLENBQUNmLEtBQU4sQ0FBWWdGLE9BQVosQ0FBb0IsS0FBcEIsRUFBMkIsRUFBM0IsQ0FBUDtBQUNEOztBQUVELFNBQVMzRCxVQUFULENBQW9CNUMsQ0FBcEIsRUFBdUI7RUFDckIsSUFBSXNDLEtBQUssR0FBR3RDLENBQUMsQ0FBQzBDLE1BQWQ7RUFDQSxJQUFJOEQsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ2hFLEtBQUQsQ0FBL0I7RUFDQSxJQUFJbUUsbUJBQW1CLEdBQUcsRUFBMUI7RUFDQSxJQUFJQyxjQUFjLEdBQUdwRSxLQUFLLENBQUNvRSxjQUEzQixDQUpxQixDQUtyQjs7RUFDQSxJQUFJLENBQUNGLGdCQUFMLEVBQXVCLE9BQU9sRSxLQUFLLENBQUNmLEtBQU4sR0FBYyxFQUFyQixDQU5GLENBT3JCOztFQUNBLElBQUllLEtBQUssQ0FBQ2YsS0FBTixDQUFZQyxNQUFaLElBQXNCa0YsY0FBMUIsRUFBMEM7SUFDeEMsSUFBSTFHLENBQUMsQ0FBQzJHLElBQUYsSUFBVSxNQUFNQyxJQUFOLENBQVc1RyxDQUFDLENBQUMyRyxJQUFiLENBQWQsRUFBa0M7TUFDaENyRSxLQUFLLENBQUNmLEtBQU4sR0FBY2lGLGdCQUFkO0lBQ0Q7O0lBQ0Q7RUFDRDs7RUFFRCxJQUFJLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCSyxRQUFoQixDQUF5QkwsZ0JBQWdCLENBQUMsQ0FBRCxDQUF6QyxDQUFKLEVBQW1EO0lBQ2pEO0lBQ0EsSUFBSUEsZ0JBQWdCLENBQUMsQ0FBRCxDQUFoQixJQUF1QixHQUEzQixFQUFnQ0EsZ0JBQWdCLEdBQUcsTUFBTUEsZ0JBQXpCO0lBQ2hDLElBQUlBLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsSUFBdUIsR0FBM0IsRUFBZ0NBLGdCQUFnQixHQUFHLEdBQW5CLENBSGlCLENBSWpEOztJQUNBLElBQUlNLFdBQVcsR0FBRyxJQUFsQjtJQUNBTCxtQkFBbUIsR0FBR0ssV0FBVyxHQUFHLEdBQXBDLENBTmlELENBT2pEOztJQUNBLElBQUlOLGdCQUFnQixDQUFDaEYsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7TUFDL0JpRixtQkFBbUIsSUFBSSxNQUFNRCxnQkFBZ0IsQ0FBQ08sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBN0I7SUFDRDs7SUFDRCxJQUFJUCxnQkFBZ0IsQ0FBQ2hGLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDO01BQ2hDaUYsbUJBQW1CLElBQUksT0FBT0QsZ0JBQWdCLENBQUNPLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQTlCO0lBQ0Q7O0lBQ0QsSUFBSVAsZ0JBQWdCLENBQUNoRixNQUFqQixJQUEyQixDQUEvQixFQUFrQztNQUNoQ2lGLG1CQUFtQixJQUFJLE1BQU1ELGdCQUFnQixDQUFDTyxTQUFqQixDQUEyQixDQUEzQixFQUE4QixDQUE5QixDQUE3QjtJQUNEOztJQUNELElBQUlQLGdCQUFnQixDQUFDaEYsTUFBakIsSUFBMkIsRUFBL0IsRUFBbUM7TUFDakNpRixtQkFBbUIsSUFBSSxNQUFNRCxnQkFBZ0IsQ0FBQ08sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsRUFBOUIsQ0FBN0I7SUFDRDtFQUNGLENBcEJELE1Bb0JPO0lBQUU7SUFDUE4sbUJBQW1CLEdBQUcsVUFBVUQsZ0JBQWhDO0VBQ0Q7O0VBQ0RsRSxLQUFLLENBQUNmLEtBQU4sR0FBY2tGLG1CQUFkO0FBQ0Q7O0FBRUQsU0FBUzVELGVBQVQsQ0FBeUI3QyxDQUF6QixFQUE0QjtFQUMxQixJQUFJc0MsS0FBSyxHQUFHdEMsQ0FBQyxDQUFDMEMsTUFBZDs7RUFDQSxJQUFJNEQsUUFBUSxDQUFDaEUsS0FBRCxDQUFSLENBQWdCZCxNQUFoQixJQUEwQixDQUExQixJQUErQnhCLENBQUMsQ0FBQzhELE9BQUYsS0FBYyxDQUFqRCxFQUFvRDtJQUNsRHhCLEtBQUssQ0FBQ2YsS0FBTixHQUFjLEVBQWQ7RUFDRDtBQUNGOztBQUVELFNBQVNELFNBQVQsQ0FBbUJnQixLQUFuQixFQUEwQnZCLEdBQTFCLEVBQStCO0VBQzdCLElBQUl1QixLQUFLLENBQUNmLEtBQU4sQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE0QjtJQUMxQlQsR0FBRyxDQUFDaUcsUUFBSixHQUFlLEtBQWY7RUFDRCxDQUZELE1BRU87SUFDTGpHLEdBQUcsQ0FBQ2lHLFFBQUosR0FBZSxJQUFmO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTdkYsVUFBVCxDQUFvQmEsS0FBcEIsRUFBMkI7RUFDekJBLEtBQUssQ0FBQ2YsS0FBTixHQUFjLEVBQWQ7QUFDRDs7QUFFRCxTQUFTZ0MsV0FBVCxDQUFxQkosS0FBckIsRUFBNEJHLEtBQTVCLEVBQW1DO0VBQ2pDLElBQU0yRCxJQUFJLEdBQUc5RCxLQUFLLENBQUMxRCxhQUFOLENBQW9CLE1BQXBCLENBQWI7RUFDQSxJQUFNb0YsS0FBSyxHQUFHMUIsS0FBSyxDQUFDK0QsaUJBQXBCO0VBQ0EsSUFBTXBDLElBQUksR0FBRzNCLEtBQUssQ0FBQ2dFLGdCQUFuQjtFQUVBdEMsS0FBSyxDQUFDOUUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtJQUNwQyxJQUFNcUgsR0FBRyxHQUFHQyxNQUFNLENBQUNKLElBQUksQ0FBQ2xELFdBQU4sQ0FBTixHQUEyQixDQUF2QztJQUNBa0QsSUFBSSxDQUFDbEQsV0FBTCxHQUFtQnFELEdBQW5COztJQUNBLElBQUksQ0FBQyxDQUFDOUQsS0FBTixFQUFhO01BQ1hBLEtBQUssQ0FBQ1MsV0FBTixhQUF1QnFELEdBQXZCO0lBQ0Q7O0lBQ0RFLGFBQWEsQ0FBQ0YsR0FBRCxFQUFNdkMsS0FBTixDQUFiO0VBQ0QsQ0FQRDtFQVNBQyxJQUFJLENBQUMvRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0lBQ25DLElBQU1xSCxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDbEQsV0FBTixDQUFOLEdBQTJCLENBQXZDO0lBQ0FrRCxJQUFJLENBQUNsRCxXQUFMLEdBQW1CcUQsR0FBbkI7O0lBQ0EsSUFBSSxDQUFDLENBQUM5RCxLQUFOLEVBQWE7TUFDWEEsS0FBSyxDQUFDUyxXQUFOLGFBQXVCcUQsR0FBdkI7SUFDRDs7SUFDREUsYUFBYSxDQUFDRixHQUFELEVBQU12QyxLQUFOLENBQWI7RUFDRCxDQVBEO0FBUUQ7O0FBRUQsU0FBU3lDLGFBQVQsQ0FBdUJGLEdBQXZCLEVBQTRCckcsR0FBNUIsRUFBaUM7RUFDL0IsSUFBSXFHLEdBQUcsR0FBRyxDQUFWLEVBQWE7SUFDWHJHLEdBQUcsQ0FBQ2lHLFFBQUosR0FBZSxJQUFmO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xqRyxHQUFHLENBQUNpRyxRQUFKLEdBQWUsS0FBZjtFQUNEO0FBQ0Y7O0FBRUQsU0FBUzlFLGVBQVQsQ0FBeUJxRixJQUF6QixFQUErQjtFQUM3QkEsSUFBSSxDQUFDdkYsYUFBTCxDQUFtQjNCLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxTQUFqQztFQUNBLElBQUlrSCxLQUFLLEdBQUdELElBQUksQ0FBQ0Usa0JBQWpCOztFQUNBLElBQUksQ0FBQ0QsS0FBSyxDQUFDeEIsS0FBTixDQUFZMEIsU0FBakIsRUFBNEI7SUFDMUJGLEtBQUssQ0FBQ3hCLEtBQU4sQ0FBWTBCLFNBQVosR0FBd0JGLEtBQUssQ0FBQ0csWUFBTixHQUFxQixJQUE3QztFQUNEO0FBQ0Y7O0FBRUQsU0FBUzFGLGtCQUFULENBQTRCc0YsSUFBNUIsRUFBa0M7RUFDaENBLElBQUksQ0FBQ3ZGLGFBQUwsQ0FBbUIzQixTQUFuQixDQUE2QkcsTUFBN0IsQ0FBb0MsU0FBcEM7RUFDQSxJQUFJZ0gsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGtCQUFqQjs7RUFDQSxJQUFJRCxLQUFLLENBQUN4QixLQUFOLENBQVkwQixTQUFoQixFQUEyQjtJQUN6QkYsS0FBSyxDQUFDeEIsS0FBTixDQUFZMEIsU0FBWixHQUF3QixJQUF4QjtFQUNEO0FBQ0Y7O0FBRUQsU0FBUzNDLFdBQVQsQ0FBcUJoRSxHQUFyQixFQUEwQnNDLE9BQTFCLEVBQW1DO0VBQ2pDdEMsR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsWUFBbEI7RUFDQStDLE9BQU8sQ0FBQ2hELFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBU3NILFlBQVQsQ0FBc0I3RyxHQUF0QixFQUEyQnNDLE9BQTNCLEVBQW9DO0VBQ2xDdEMsR0FBRyxDQUFDVixTQUFKLENBQWNHLE1BQWQsQ0FBcUIsWUFBckI7RUFDQTZDLE9BQU8sQ0FBQ2hELFNBQVIsQ0FBa0JHLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0Q7O0FBRUQsU0FBU3dFLGFBQVQsQ0FBdUJpQyxJQUF2QixFQUE2QmxHLEdBQTdCLEVBQWtDc0MsT0FBbEMsRUFBMkN3RSxRQUEzQyxFQUFxRDtFQUVuRCxJQUFJVCxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDbEQsV0FBTixDQUFoQjs7RUFFQSxJQUFJOEQsUUFBUSxLQUFLLE1BQWpCLEVBQXlCO0lBQ3ZCVCxHQUFHLElBQUksQ0FBUDtFQUNELENBRkQsTUFFTztJQUNMQSxHQUFHLElBQUksQ0FBUDtFQUNEOztFQUVEQSxHQUFHLEdBQUcsQ0FBTixHQUFVUSxZQUFZLENBQUM3RyxHQUFELEVBQU1zQyxPQUFOLENBQXRCLEdBQXVDNEQsSUFBSSxDQUFDbEQsV0FBTCxHQUFtQnFELEdBQTFEO0FBQ0Q7O0FBRUQsU0FBUzVDLFdBQVQsR0FBdUI7RUFDckIsSUFBTXRCLEtBQUssR0FBRzdELFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLFVBQTFCLENBQWQ7RUFDQXFDLEtBQUssQ0FBQ3BDLE9BQU4sQ0FBYyxVQUFBSSxJQUFJLEVBQUk7SUFDcEIsSUFBTTRHLE9BQU8sR0FBRzVHLElBQUksQ0FBQ3pCLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBaEI7SUFDQSxJQUFNc0IsR0FBRyxHQUFHRyxJQUFJLENBQUN6QixhQUFMLENBQW1CLGNBQW5CLENBQVo7SUFDQSxJQUFNNEQsT0FBTyxHQUFHbkMsSUFBSSxDQUFDekIsYUFBTCxDQUFtQixrQkFBbkIsQ0FBaEI7SUFDQSxJQUFNMEQsS0FBSyxHQUFHRSxPQUFPLENBQUM1RCxhQUFSLENBQXNCLE1BQXRCLENBQWQ7SUFDQSxJQUFNb0YsS0FBSyxHQUFHeEIsT0FBTyxDQUFDNUQsYUFBUixDQUFzQixnQkFBdEIsQ0FBZDtJQUNBLElBQU1xRixJQUFJLEdBQUd6QixPQUFPLENBQUM1RCxhQUFSLENBQXNCLGVBQXRCLENBQWI7SUFFQXFJLE9BQU8sQ0FBQy9ILGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUFDLENBQUMsRUFBSTtNQUNyQ0EsQ0FBQyxDQUFDcUMsY0FBRjtJQUNELENBRkQ7SUFHQXRCLEdBQUcsQ0FBQ2hCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENnRixXQUFXLENBQUNoRSxHQUFELEVBQU1zQyxPQUFOLENBQVg7SUFDRCxDQUZEO0lBSUF3QixLQUFLLENBQUM5RSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQ3BDaUYsYUFBYSxDQUFDN0IsS0FBRCxFQUFRcEMsR0FBUixFQUFhc0MsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQ0QsQ0FGRDtJQUlBeUIsSUFBSSxDQUFDL0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUNuQ2lGLGFBQWEsQ0FBQzdCLEtBQUQsRUFBUXBDLEdBQVIsRUFBYXNDLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUNELENBRkQ7RUFHRCxDQXRCRDtBQXVCRDs7QUFJRCxTQUFTYixXQUFULENBQXFCdUYsSUFBckIsRUFBMkI7RUFDekIsc09BS1FBLElBTFI7QUFTRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgc2Nyb2xsU29ydC5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIHNjcm9sbEZpbHRlci5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG4gIGNvbnNvbGUubG9nKHNjcm9sbFNvcnQpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKVxuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGNvbnN0IGRlbGl2ZXJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX2RlbGl2ZXJ5LWJ0blwiKVxuICBkZWxpdmVyeUJ0blswXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG5cbiAgZGVsaXZlcnlCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsaXZlcnlCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pXG4gIH0pXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSwgMzAwKVxuICB9KVxuXG4gIGZvcm1BZGRyZXNzU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaW5wdXQudmFsdWUpO1xuICAgIGFkZHJlc3NMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGFiZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsRGVsZXRlLnNob3coKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYWRkJyk7XG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKTtcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NTZWFyY2guY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSkge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2R1Y3RfX3RvcC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWFkZFwiKVxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlclwiKVxuICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLW1pbnVzXCIpO1xuICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLXBsdXNcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKVxuICB9KTtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xufVxuXG4vLyDQpNGD0L3QutGG0LjQuFxuZnVuY3Rpb24gaW5pdFN3aXBlcihjb250YWluZXIpIHtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMFxuICB9KVxufVxuXG5mdW5jdGlvbiBpbml0QXJyYXlTd2lwZXIoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXN3aXBlci1pbml0XCIpKSB7XG4gICAgY29uc3Qgc3dpcGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXN3aXBlci1pbml0XCIpO1xuICAgIHN3aXBlckJsb2NrLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBjb25zdCBzd2lwZXIgPSBpbml0U3dpcGVyKGVsZW0pXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50KSB7XG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50LCBzY3JvbGwpIHtcbiAgbGV0IGVuZFk7XG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNobW92ZVwiKSB7XG4gICAgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlbW92ZVwiICYmIHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIGlmIChkZWx0YVkgPiAwICYmIHNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRW5kKGV2ZW50LCBzY3JvbGwpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZyB8fCBldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICBsZXQgZW5kWTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICBlbmRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgaWYgKGRlbHRhWSA+IDUwICYmIHNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZU1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZVN0YXJ0KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbW9kYWwuc3R5bGUuYm90dG9tID0gXCIwXCJcbn1cblxuZnVuY3Rpb24gcmVnUGhvbmUoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgbGV0IGlucHV0TnVtYmVyVmFsdWUgPSByZWdQaG9uZShpbnB1dCk7XG4gIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YIg0LLQstC10LTQtdC90Ysg0YHQuNC80L7QstC70Ysg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0LLRg9GO0YnQuNC1INGA0LXQs9GD0LvRj9GA0LrQuCwg0YLQviDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQv9GD0YHRgtGL0LxcbiAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOScpIGlucHV0TnVtYmVyVmFsdWUgPSAnNycgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgbGV0IGZpcnN0U3ltYm9sID0gJys3JztcbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZygxLCA0KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDEwKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDksIDExKTtcbiAgICB9XG4gIH0gZWxzZSB7IC8v0JXRgdC70Lgg0LLQstC+0LTQuNC80L7QtSDRh9C40YHQu9C+INC90LUgNywgOCDQuNC70LggOSDRgtC+0LPQtNCwINC00L7QsdCw0LLQu9GP0LXQvCAr0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCy0LLQtdC00LXQvdC+0LUg0YfQuNGB0LvQvlxuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgfVxuICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPSAxXG4gIH1cblxuICBudW0gPCAxID8gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikgOiBzcGFuLnRleHRDb250ZW50ID0gbnVtXG59XG5cbmZ1bmN0aW9uIHByb2R1Y3RDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCBidG5XcmFwID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYnRuc1wiKVxuICAgIGNvbnN0IGJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWFkZFwiKVxuICAgIGNvbnN0IGNvdW50ZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1jb3VudGVyXCIpXG4gICAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtbWludXNcIik7XG4gICAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLXBsdXNcIik7XG5cbiAgICBidG5XcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKVxuICAgIH0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKVxuICAgIH0pXG5cbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKVxuICAgIH0pXG4gIH0pXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0KSB7XG4gIHJldHVybiBgXG4gICAgPGxhYmVsIGNsYXNzPVwiYWRkcmVzc19fbGFiZWxcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkcmVzc1wiIGNsYXNzPVwiYWRkcmVzc19faW5wdXRcIi8+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NfX3JhZGlvXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX190ZXh0IHRleHQtMTZcIj5cbiAgICAgICAgJHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+ICBcbiAgYFxufSJdfQ==
