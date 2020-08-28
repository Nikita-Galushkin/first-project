const сonsultationFormValidator = new FormValidator(obj, formConsultationModal);

сonsultationFormValidator.enableValidation();


function openModals(modal) {
  modal.classList.add('modal_opened');
  document.addEventListener('keydown', keyEscapeHandler);
  document.addEventListener('click', closeOnOverlay);
}

function closeModals(modal) {
  modal.classList.remove('modal_opened');
  document.removeEventListener('keydown', keyEscapeHandler);
  document.removeEventListener('click', closeOnOverlay);
}

function closeOnOverlay(evt) {
  const openedModal = document.querySelector('.modal_opened');
  if ( evt.target === openedModal) { 
    closeModals(openedModal);
  } 
}

function keyEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const openedModal = document.querySelector('.modal_opened');
    closeModals(openedModal);
  } 
}

function openConsultationModal() {
  openModals(consultationModal);
  nameFormConsultation.value = '';
  telFormConsultation.value = '';
  сonsultationFormValidator.resetForm();
}

function pushConsultationModal(evt) {
  evt.preventDefault();
  closeModals(consultationModal);
  openModals(thankModal);
}

function selectTabButton(evt) {
  tabButton.forEach(item => {
    item.classList.remove('tabs__button_active');
  });
  tabContent.forEach(item => {
    item.classList.remove('tabs__text-container_active');
  });
  evt.target.classList.add('tabs__button_active');
  const tabName = evt.target.dataset.target;
  selectTabContent(tabName);
}

function selectTabContent(tabName) {
  document.querySelector('.' + tabName).classList.add('tabs__text-container_active');
}


let index = 0;
  
function activeSlide(n) {
  for(slide of slides) {
    slide.classList.remove('slider_active');
  }
  slides[n].classList.add('slider_active');
}

function activeDot(n) {
  for(dot of dots) {
    dot.classList.remove('dots__item_active');
  }
  dots[n].classList.add('dots__item_active');
}

function prepareCurrentSlide(ind) {
  activeSlide(ind);
  activeDot(ind);
}

function nextSlide() {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

function prevSlide() {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});


openConsultationButton.addEventListener('click', openConsultationModal);
closeConsultationButton.addEventListener('click', function () {
  closeModals(consultationModal);
});
formConsultationModal.addEventListener('submit', pushConsultationModal);
closeThankButton.addEventListener('click', function () {
  closeModals(thankModal);
});
thankButton.addEventListener('click', function () {
  closeModals(thankModal);
});

tabButton.forEach(item => {
  item.addEventListener('click', selectTabButton);
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);