const openConsultationButton = document.querySelector('.slider__button');
const closeConsultationButton = document.querySelector('.modal__close-button_type_consultation');
const consultationModal = document.querySelector('.modal_type_consultation');
const consultationFormButton = consultationModal.querySelector('.modal__button_action');

const closeThankButton = document.querySelector('.modal__close-button_type_thank');
const thankModal = document.querySelector('.modal_type_thank');
const thankButton = thankModal.querySelector('.modal__button_action');

const formConsultationModal = document.forms.modal_consultation_form;
const nameFormConsultation = formConsultationModal.elements.name;
const telFormConsultation = formConsultationModal.elements.tel;

const tabButton = Array.from(document.querySelectorAll('.tabs__button'));
const tabContent = Array.from(document.querySelectorAll('.tabs__text-container'));

const obj = {
  formSelector: '.modal__form',
  inputSelector: '.modal__item',
  buttonSubmitSelector: '.modal__button',
  errorClass: 'modal__item-error_active',
  buttonDisabledClass: 'modal__button_disabled',
  inputTypeErrorClass: 'modal__item_type_error'
};

const prev = document.querySelector('.slide-button__prev');
const next = document.querySelector('.slide-button__next');
const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dots__item');