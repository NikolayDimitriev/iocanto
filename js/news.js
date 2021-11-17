jQuery(document).ready(function(){
    // !Интеграция с CRM
    jQuery.getJSON('https://iocanto.s20.online/common/2/form/embed?id=2&lead_status_id=&lead_source_id=3',function(data){
        jQuery('.alfacrm-form-2').replaceWith(data.form)
    })


    const header = document.querySelector('.header');

    header.querySelectorAll('.header-block__button').forEach(item => {
        item.addEventListener('click', openModal);
    });

    const headerMobile = $('.header-mobile')[0];
    const headerContainer = $('.header__container')[0];
    const headerTop = $('.header-top')[0];
    const headerMovie = header.querySelector('.header__movie');
    const main = document.querySelector('.main');

    $('.header-burger').on('click', function(e) {
        e.preventDefault;

        if (headerMobile.classList.contains('header-mobile__active')) {
            headerMobile.classList.remove('header-mobile__active')
            headerContainer.style.width = '93%'
            headerContainer.style.maxWidth = '576px'
            headerTop.style.display = 'flex'
            headerMovie.style.top = '0'
            main.style.marginTop = '0';
        }
        else {
            headerMobile.classList.add('header-mobile__active')
            headerContainer.style.width = '100%'
            headerContainer.style.maxWidth = '100%'
            headerTop.style.display = 'none'
            main.style.marginTop = `${headerMobile.clientHeight}px`
            headerMovie.style.top = `${headerMobile.clientHeight}px`
        }

    });

    function openModal() {
        modal.classList.add('modal--visible');
    }

    const modal = document.querySelector('.modal-usually');

    modal.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('modal__overlay') || target.classList.contains('modal__close') || target.classList.contains('modal__close__image')) {
            modal.classList.remove('modal--visible');
        }
    });

    setTimeout(()=>{
        const modal = document.querySelectorAll('.modal').forEach(item => {

            const modalForm = item.querySelector('form');

            if (modalForm) {

                modalForm.querySelectorAll('.alfacrm-control').forEach(elem => {
                    elem.classList.add('modal-form__block');
                    elem.children[0].classList.add('modal-form__input');
                });
        
                const inputs = modalForm.querySelectorAll('.modal-form__input');
                inputs[0].placeholder = 'Имя'
                inputs[1].placeholder = 'Телефон'
                inputs[0].required = true;
                inputs[1].required = true;
        
                const blocks = modalForm.querySelectorAll('.modal-form__block');
                blocks[2].style.display = 'none';
        
                const button = modalForm.querySelector('button');
                button.classList.add('modal-form__button');
                button.textContent = 'Оставить заявку';
        
                const div = document.createElement('div');
                div.innerHTML = `
                    <label class="label">
                        <input type="checkbox" class="checkbox" required checked> 
                        <span class="fake modal-fake"></span>
                        <span class="modal-text">Я соглашаюсь с <a href="#" style="text-decoration: underline; color: #000;">условиями хранения персональных данных</a></span>
                        
                    </label>
                `;
                blocks[1].appendChild(div);
            }
            
        });

    }, 500)
});
