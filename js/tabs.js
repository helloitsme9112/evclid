let tabsBtn = document.querySelectorAll('.slider2__switch');
let tabsItem = document.querySelectorAll('.tab-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('slider2__switch--active')});
    e.currentTarget.classList.add('slider2__switch--active');

    tabsItem.forEach(function(element){
      element.classList.remove('tab-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tab-item--active');
  })
})
