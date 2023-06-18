new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

// попытка сделать текст кликабельным для закрытия аккордеона


//  let descrClose = document.querySelector('.accordion__content');
//  let accItem = document.querySelector('.faq__item');
//  let faqBtn = document.querySelector('.faq__btn');

//  descrClose.addEventListener('click', function() {
//     accItem.classList.remove('accordion--active');
//     faqBtn.setAttribute('aria-expanded', 'false');
//  })
