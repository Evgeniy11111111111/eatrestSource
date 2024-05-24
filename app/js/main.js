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
  modal.addEventListener("click", stopPropagation); // scroll.addEventListener("touchstart", stopPropagation);

  modal.addEventListener("touchstart", handleStart);
  modal.addEventListener("touchmove", function (event) {
    handleMove.call(modal, event, scroll);
  });
  modal.addEventListener("touchend", function (event) {
    handleEnd.call(modal, event, scroll);
  }); // modal.addEventListener("mousedown", handleStart); 
  // modal.addEventListener("mousemove", function (event) {
  //   handleMove.call(modal, event, scroll);
  // });
  // modal.addEventListener("mouseup", function (event) {
  //   handleEnd.call(modal, event, scroll);
  // });
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

function openPreloader() {
  var preloader = document.querySelector(".preloader");
  preloader.classList.add("active");
  document.body.classList.add("lock");
}

function closePreloader() {
  var preloader = document.querySelector(".preloader");
  preloader.classList.remove("active");
  document.body.classList.remove("lock");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwicGFyZW50RWxlbWVudCIsImFjY29yZGlvbk5vdEFjdGl2ZSIsImFjY29yZGlvbkFjdGl2ZSIsInNldFRpbWVvdXQiLCJmb2N1cyIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJsYWJlbCIsImNyZWF0ZUxhYmVsIiwidGFyZ2V0IiwidGVsIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsImJhc2tldERlbGV0ZSIsIm1vZGFsRGVsZXRlIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb3VudCIsImZvckVhY2giLCJjb3VudGVyIiwiY2FyZCIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImJ0biIsImluZGV4IiwiZWxlbSIsImluZGV4RWxlbSIsImluc2VydEFkamFjZW50SFRNTCIsIm1vZGFsTmFtZSIsImNoYW5nZU5hbWVCdG4iLCJuYW1lU3BhbiIsImlucHV0TmFtZSIsImtleSIsInByb2R1Y3RDYXJkIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1pbnVzIiwicGx1cyIsIm9wZW5Db3VudGVyIiwiY2hhbmdlQ291bnRlciIsImluaXRTd2lwZXIiLCJjb250YWluZXIiLCJzd2lwZXJCbG9jayIsImV2ZW50IiwiaGFuZGxlU3RhcnQiLCJ0eXBlIiwic3RhcnRZIiwidG91Y2hlcyIsImNsaWVudFkiLCJpc0RyYWdnaW5nIiwiZW5kWSIsImhhbmRsZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwiZGVsdGFZIiwic3R5bGUiLCJtb2RhbCIsInNjcm9sbCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsImZpcnN0U3ltYm9sIiwiaW5jbHVkZXMiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic3BhbiIsIm51bSIsImRpc2FibGVkTWludXMiLCJpdGVtIiwicGFuZWwiLCJjbG9zZUNvdW50ZXIiLCJOdW1iZXIiLCJidG5XcmFwIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVEQsQ0FBd0IsT0FBeEJBLENBQUosRUFBc0M7RUFDcENFLGVBQWU7RUFFZixJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVEosQ0FBdUIsb0JBQXZCQSxDQUFoQjtFQUNBLElBQU1LLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxhQUFUSixDQUF1QixVQUF2QkEsQ0FBbEI7RUFDQSxJQUFNTSxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0ksYUFBVEosQ0FBdUIsZUFBdkJBLENBQW5CO0VBQ0EsSUFBTU8sU0FBUyxHQUFHUCxRQUFRLENBQUNJLGFBQVRKLENBQXVCLHNCQUF2QkEsQ0FBbEI7RUFDQSxJQUFNUSxXQUFXLEdBQUdSLFFBQVEsQ0FB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VixDQUF5QixVQUF6QjtPQUNYLENBQU0rQixRQUFRNUIsVUFBUWxELElBQVJrRCxFQUFRbEQ7SUFDdEIsSUFBTStFLE9BQU83QixPQUFPLENBQUNsRCxhQUFSa0QsQ0FBc0IsZUFBdEJBLENBQWI7SUFFQStELE9BQU8sR0FBQzNHLG1CQUFpQixjQUFqQkEsQ0FBUjJHO1FBQ0kvRSxjQUFGLGNBQUVBLENBQUYsa0JBQUVBO0lBQ0gsSUFGRGMscUNBRUM7SUFDRGUsSUFBSXpELGdCQUFKTixhQUFJTSxDQUEwQixnQkFBMUJBLENBQUp5RDtRQUNFaUIsY0FBVyxDQUFNOUIsYUFBakI4QjtJQUNEaUMsT0FGRCxpQkFFQyxDQUZELE9BRUMsRUFGRDtNQUlBbkM7S0FGQztJQUlBZixHQUZELGlCQUVDLENBRkQsT0FFQyxFQUZEO01BSUFnQixXQUFLekUsY0FBTHlFO0tBRkM7SUFJQUQsS0FGRCxpQkFFQyxDQUZELE9BRUMsRUFGRDtNQW5CRkc7SUF1QkQsQ0FGSTs7TUFNTEEsYUFBUzVDLENBQVRXLEtBQVNYLEVBQWtCMEIsR0FBbEIxQixFQUFrQmEsT0FBbEJiLEVBQWtCLE1BQWxCQSxDQUFUO0lBQ0U7RUFTRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgc2Nyb2xsU29ydC5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIHNjcm9sbEZpbHRlci5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1jbGVhcicpXG4gIGNvbnN0IGlucHV0U2VhcmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbGlzdCcpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cblxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stc2VhcmNoJylcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBhZGRyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pIDogYWNjb3JkaW9uQWN0aXZlKGFkZHJlc3NCdG4pXG4gIH0pXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9LCAzMDApXG4gIH0pXG5cbiAgZm9ybUFkZHJlc3NTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpbnB1dC52YWx1ZSk7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsRGVsZXRlLnNob3coKVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpbnB1dFBob25lKGUpXG4gIH0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYWRkJyk7XG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1zZWFyY2gnKTtcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NTZWFyY2guY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWNsZWFyJylcbiAgY29uc3QgaW5wdXRTZWFyY2hMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1saXN0JylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG5cbiAgICBpZiAoaW5wdXRTZWFyY2gudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpXG4gIH0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG59XG5cbi8vINCk0YPQvdC60YbQuNC4XG5mdW5jdGlvbiBpbml0U3dpcGVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDIwXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRBcnJheVN3aXBlcigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3dpcGVyLWluaXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc3dpcGVyLWluaXRcIik7XG4gICAgc3dpcGVyQmxvY2suZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IGluaXRTd2lwZXIoZWxlbSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQsIHNjcm9sbCkge1xuLy8gICBsZXQgZW5kWTtcbi8vICAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2htb3ZlXCIpIHtcbi8vICAgICBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuLy8gICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vtb3ZlXCIgJiYgdGhpcy5pc0RyYWdnaW5nKSB7XG4vLyAgICAgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vL1xuLy8gICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuLy8gICBpZiAoZGVsdGFZID4gMCAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4vLyAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIGhhbmRsZUVuZChldmVudCwgc2Nyb2xsKSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcgfHwgZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgbGV0IGVuZFk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgICAgZW5kWSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsLCBzY3JvbGwpIHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdG9wUHJvcGFnYXRpb24pO1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVN0YXJ0KTtcbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICAvLyB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUVuZC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVTdGFydCk7XG4gIC8vIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vICAgaGFuZGxlTW92ZS5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgLy8gfSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUVuZC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24oZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDbGVhcihpbnB1dCwgYnRuKSB7XG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCkge1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvdW50Q2hhbmdlKGNvdW50LCBnb29kcykge1xuICBjb25zdCBzcGFuID0gY291bnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBjb25zdCBtaW51cyA9IGNvdW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBwbHVzID0gY291bnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgLSAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgKyAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkTWludXMobnVtLCBidG4pIHtcbiAgaWYgKG51bSA8IDEpIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LmFkZChcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvdW50ZXIoc3BhbiwgYnRuLCBjb3VudGVyLCBvcGVyYXRvcikge1xuXG4gIGxldCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCk7XG5cbiAgaWYgKG9wZXJhdG9yID09PSBcInBsdXNcIikge1xuICAgIG51bSArPSAxXG4gIH0gZWxzZSB7XG4gICAgbnVtIC09IDFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpXG4gICAgfSk7XG5cbiAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpXG4gICAgfSlcblxuICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKHRleHQpIHtcbiAgcmV0dXJuIGBcbiAgICA8bGFiZWwgY2xhc3M9XCJhZGRyZXNzX19sYWJlbFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRyZXNzXCIgY2xhc3M9XCJhZGRyZXNzX19pbnB1dFwiLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fcmFkaW9cIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NfX3RleHQgdGV4dC0xNlwiPlxuICAgICAgICAke3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD4gIFxuICBgXG59Il19
