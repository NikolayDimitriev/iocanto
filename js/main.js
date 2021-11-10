jQuery(document).ready(function(){
    // !Интеграция с CRM
    jQuery.getJSON('https://iocanto.s20.online/common/2/form/embed?id=2&lead_status_id=&lead_source_id=3',function(data){
        jQuery('.alfacrm-form-2').replaceWith(data.form)
    })

    setTimeout(()=>{
        // HEADER
        const header = document.querySelector('.header');

        const headerForm = header.querySelector('form');
        
        headerForm.querySelectorAll('.alfacrm-control').forEach(item => {
            item.classList.add('header-form__block');
            item.children[0].classList.add('header-form__input');
        });

        const inputs = headerForm.querySelectorAll('.header-form__input');
        inputs[0].placeholder = 'Имя'
        inputs[1].placeholder = 'Телефон'

        const blocks = headerForm.querySelectorAll('.header-form__block');
        blocks[2].style.display = 'none';

        const button = headerForm.querySelector('button');
        button.classList.add('header-form__button');
        button.textContent = 'Записаться на занятие';

        const div = document.createElement('div');
        div.innerHTML = `
            <label class="label">
                <input type="checkbox" class="checkbox" required> 
                <span class="fake"></span>
                <span class="text">Я соглашаюсь с <a href="#" style="text-decoration: underline;">условиями хранения персональных данных</a></span>
                
            </label>
        `;
        blocks[1].appendChild(div);
    }, 200)

    document.querySelector('.header-arrow').addEventListener('click', () => {
        document.querySelector('#main').scrollIntoView({
            behavior: "smooth",
            block: "start"
        }); //прокручиваем скрол к объекту
    });
});
