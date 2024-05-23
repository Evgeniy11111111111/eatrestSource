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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwicGFyZW50RWxlbWVudCIsImFjY29yZGlvbk5vdEFjdGl2ZSIsImFjY29yZGlvbkFjdGl2ZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJsYWJlbCIsImNyZWF0ZUxhYmVsIiwidGFyZ2V0IiwidGVsIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsImJhc2tldERlbGV0ZSIsIm1vZGFsRGVsZXRlIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudCIsImZvckVhY2giLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImJ0biIsImluZGV4IiwiZWxlbSIsImluZGV4RWxlbSIsImluc2VydEFkamFjZW50SFRNTCIsIm1vZGFsTmFtZSIsImNoYW5nZU5hbWVCdG4iLCJuYW1lU3BhbiIsImlucHV0TmFtZSIsImtleSIsInByb2R1Y3RDYXJkIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1pbnVzIiwicGx1cyIsIm9wZW5Db3VudGVyIiwiY2hhbmdlQ291bnRlciIsImluaXRTd2lwZXIiLCJjb250YWluZXIiLCJzd2lwZXJCbG9jayIsImV2ZW50IiwiaGFuZGxlU3RhcnQiLCJ0eXBlIiwic3RhcnRZIiwidG91Y2hlcyIsImNsaWVudFkiLCJpc0RyYWdnaW5nIiwiaGFuZGxlRW5kIiwic2Nyb2xsIiwiZW5kWSIsImNoYW5nZWRUb3VjaGVzIiwiZGVsdGFZIiwic2Nyb2xsVG9wIiwic3R5bGUiLCJib3R0b20iLCJtb2RhbCIsImNhbGwiLCJyZWdQaG9uZSIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcENDLGVBQWU7RUFFZixJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixvQkFBdkIsQ0FBaEI7RUFDQSxJQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxD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QUF6QixFQUFrQyxVQUFBQyxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQzJCLGNBQUY7SUFDRCxDQUZEO0lBR0E2QixHQUFHLENBQUN6RCxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDMEUsV0FBVyxDQUFDakIsR0FBRCxFQUFNWixPQUFOLENBQVg7SUFDRCxDQUZEO0lBSUEyQixLQUFLLENBQUN4RSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQ3BDMkUsYUFBYSxDQUFDakMsS0FBRCxFQUFRZSxHQUFSLEVBQWFaLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtJQUNELENBRkQ7SUFJQTRCLElBQUksQ0FBQ3pFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFDbkMyRSxhQUFhLENBQUNqQyxLQUFELEVBQVFlLEdBQVIsRUFBYVosT0FBYixFQUFzQixNQUF0QixDQUFiO0lBQ0QsQ0FGRDtFQUdELENBdEJEO0FBdUJEOztBQUlELFNBQVNkLFdBQVQsQ0FBcUIwRixJQUFyQixFQUEyQjtFQUN6QixzT0FLUUEsSUFMUjtBQVNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBzY3JvbGxTb3J0LnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgc2Nyb2xsRmlsdGVyLnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKVxuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlucHV0UGhvbmUoZSlcbiAgfSlcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxEZWxldGUuc2hvdygpXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgY291bnRDaGFuZ2UoY291bnQpXG5cbiAgY29uc3QgbW9kYWxQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZVBob25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmVcIilcbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZS1udW1cIilcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlucHV0UGhvbmUoZSlcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudFwiKSkge1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1hZGQnKTtcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLXNlYXJjaCcpO1xuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSwgMzAwKVxuICB9KVxuXG4gIGZvcm1BZGRyZXNzU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaW5wdXQudmFsdWUpO1xuICAgIGFkZHJlc3NMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGFiZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc1NlYXJjaC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtY2xlYXInKVxuICBjb25zdCBpbnB1dFNlYXJjaExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWxpc3QnKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcblxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgc2Nyb2xsU29ydC5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIHNjcm9sbEZpbHRlci5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcbn1cblxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEFycmF5U3dpcGVyKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2lwZXItaW5pdFwiKSkge1xuICAgIGNvbnN0IHN3aXBlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zd2lwZXItaW5pdFwiKTtcbiAgICBzd2lwZXJCbG9jay5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgY29uc3Qgc3dpcGVyID0gaW5pdFN3aXBlcihlbGVtKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCkge1xuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gaGFuZGxlTW92ZShldmVudCwgc2Nyb2xsKSB7XG4vLyAgIGxldCBlbmRZO1xuLy8gICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikge1xuLy8gICAgIGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4vLyAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW1vdmVcIiAmJiB0aGlzLmlzRHJhZ2dpbmcpIHtcbi8vICAgICBlbmRZID0gZXZlbnQuY2xpZW50WTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vXG4vLyAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4vLyAgIGlmIChkZWx0YVkgPiAwICYmIHNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbi8vICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gaGFuZGxlRW5kKGV2ZW50LCBzY3JvbGwpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZyB8fCBldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICBsZXQgZW5kWTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICBlbmRZID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgaWYgKGRlbHRhWSA+IDUwICYmIHNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlU3RhcnQpO1xuICAvLyBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyAgIGhhbmRsZU1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIC8vIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZVN0YXJ0KTtcbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICAvLyB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93bihlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0gMVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgICB9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgICB9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgICB9KVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCkge1xuICByZXR1cm4gYFxuICAgIDxsYWJlbCBjbGFzcz1cImFkZHJlc3NfX2xhYmVsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cImFkZHJlc3NfX2lucHV0XCIvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX19yYWRpb1wiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fdGV4dCB0ZXh0LTE2XCI+XG4gICAgICAgICR7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPiAgXG4gIGBcbn0iXX0=
