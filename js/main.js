jQuery(document).ready(function(){
    // !Интеграция с CRM
    jQuery.getJSON('https://iocanto.s20.online/common/2/form/embed?id=2&lead_status_id=&lead_source_id=3',function(data){
        jQuery('.alfacrm-form-2').replaceWith(data.form)
    })
    
    // HEADER
    const header = document.querySelector('.header');
    setTimeout(()=>{

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
                <input type="checkbox" class="checkbox" required checked> 
                <span class="fake"></span>
                <span class="text">Я соглашаюсь с <a href="#" style="text-decoration: underline;">условиями хранения персональных данных</a></span>
                
            </label>
        `;
        blocks[1].appendChild(div);
    }, 200)

    header.querySelectorAll('.header-block__button').forEach(item => {
        item.addEventListener('click', openModal);
    });

    header.querySelector('.header-arrow').addEventListener('click', () => {
        document.querySelector('#main').scrollIntoView({
            behavior: "smooth",
            block: "start"
        }); //прокручиваем скрол к объекту
    });

    
        
    header.querySelectorAll(".header-menu__link").forEach(item => { //плавное перемешение к якорю
        item.addEventListener('click', e => {
            e.preventDefault(); //сбросили стандартную анимацию
            const blockId = item.getAttribute('href'); //получаем ссылку на какой блок ссылкает
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            }); //прокручиваем скрол к объекту
        });
    });

    // SLIDER
    const swiper = new Swiper('.main-swiper.swiper', {
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.main-button.swiper-button--prev',
        }
      
    });
    
    const backBtn = document.querySelector('.main-button');
    const swiperSlides = document.querySelectorAll('.main-slider__slide');

    if (swiperSlides[0].classList.contains('swiper-slide-active')) {
        backBtn.style.display = 'none';
    }

    document.querySelectorAll(".main-center__btn").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            item.style.backgroundColor = "#FEDA2F";
            item.style.border = "1px solid #FEDA2F";

            swiper.slideNext(500, false);

            if (backBtn.style.display === 'none');
                backBtn.style.display = 'flex';
        });
    });

    setTimeout(()=>{
        const mainSwiper = document.querySelector('.main-swiper');

        const mainSwiperForm = mainSwiper.querySelector('form');
        mainSwiperForm.classList.add('main-form');
        
        mainSwiperForm.querySelectorAll('.alfacrm-control').forEach(item => {
            item.classList.add('main-form__block');
            item.children[0].classList.add('main-form__input');
        });

        const inputs = mainSwiperForm.querySelectorAll('.main-form__input');
        inputs[0].placeholder = 'Имя'
        inputs[1].placeholder = 'Телефон'

        const blocks = mainSwiperForm.querySelectorAll('.main-form__block');
        blocks[2].style.display = 'none';

        const button = mainSwiperForm.querySelector('button');
        button.classList.add('main-form__button');
        button.textContent = 'Получить бесплатный урок';

    }, 200)

    // ВИДЕО "КАК СТАТЬ ЗВЕЗДОЙ"
    const video = document.querySelector('.video');

    video.querySelector('.video-wrapper__image').addEventListener('click', () => {
        const wrapper = video.querySelector('.video-wrapper');
        const height = wrapper.clientHeight;
        const width = wrapper.clientWidth;

        video.querySelector('.video-wrapper__block').style.display = 'none';

        const movie = document.createElement('div');
        movie.innerHTML = `
            <iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/-nVJH76NJ4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        movie.style.cssText = `
            width: 100%;
            height: 100%;
        `;

        wrapper.style.cssText = `
            width: ${width}px;
            height: ${height}px;
            background: none;
        `;

        wrapper.appendChild(movie);
    });

    // Направления
    const modal = document.querySelector('.modal-usually');

    document.querySelectorAll('.direction-block__card').forEach(item => {
        item.addEventListener('click', openModal);
    });

    function openModal() {
        modal.classList.add('modal--visible');
    }

    modal.addEventListener('click', event => {
        const target = event.target;
        event.preventDefault();

        if (target.classList.contains('modal__overlay') || target.classList.contains('modal__close') || target.classList.contains('modal__close__image')) {
            modal.classList.remove('modal--visible');
        }
    });

    // КОМАНДА
    const swiperTeam = new Swiper('.team-swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 80,
        // Navigation arrows
        navigation: {
          nextEl: '.team-block__btn.team-block__btn--next',
          prevEl: '.team-block__btn.team-block__btn--prev',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            687: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1220: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
      
    });

    // СТОИМОСТЬ
    const cost = document.querySelector('.cost');
    const saleCard = cost.querySelectorAll('.cost-sale__card');

    saleCard.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.cost-sale__price').style.display = 'none';
            item.querySelector('.cost-sale__subtitle').style.display = 'inline-block';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.cost-sale__price').style.display = 'inline-block';
            item.querySelector('.cost-sale__subtitle').style.display = 'none';
        });
    });

    const modalFree = document.querySelector('.modal-free');

    cost.querySelector('.cost-cards__btn').addEventListener('click', () => {
        modalFree.classList.add('modal--visible');
    })

    modalFree.addEventListener('click', event => {
        const target = event.target;
        event.preventDefault();

        if (target.classList.contains('modal__overlay') || target.classList.contains('modal__close') || target.classList.contains('modal__close__image')) {
            modalFree.classList.remove('modal--visible');
        }
    })

    cost.querySelectorAll('.cost-cards__block').forEach(item => {
        item.addEventListener('click', openModal);
    });

    // РЕЗУЛЬТАТ
    const btnPlay = document.querySelectorAll('.result-block__image');

    btnPlay.forEach(item => {
        const src = item.getAttribute("src");
        const srcH = item.getAttribute("data-image-src");

        item.addEventListener("mouseenter", () => {
            const index = item.src.indexOf("img/");

            if (item.src.substring(index) == src) 
                item.src = srcH;

        });

        item.addEventListener("mouseleave", () => {
            const index = item.src.indexOf("img/");

            if (item.src.substring(index) == srcH) 
                item.src = src;

        });
    });

    const swiperResult = new Swiper('.result-swiper', {
        loop: false,
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 80,
      
    });

    // ФОТОГАЛЕРЕЯ
    const images = document.querySelectorAll('.photos-block__image');
    const imagesBtn = document.querySelector('.photos__btn');

    imagesBtn.addEventListener('click', () => {
        for (let i = 14; i < images.length; i++)
            images[i].style.display = 'block';
        imagesBtn.style.display = 'none';
    });

    for (let i = 14; i < images.length; i++)
        images[i].style.display = 'none';

    // ЗАПИСЬ
    setTimeout(()=>{
        const register = document.querySelector('.register');

        const registerForm = register.querySelector('form');
        
        registerForm.querySelectorAll('.alfacrm-control').forEach(item => {
            item.classList.add('register-form__block');
            item.children[0].classList.add('register-form__input');
        });

        const inputs = registerForm.querySelectorAll('.register-form__input');
        inputs[0].placeholder = 'Имя'
        inputs[1].placeholder = 'Телефон'

        const blocks = registerForm.querySelectorAll('.register-form__block');
        blocks[2].style.display = 'none';

        const button = registerForm.querySelector('button');
        button.classList.add('register-form__button');
        button.textContent = 'Записаться на занятие';

        const div = document.createElement('div');
        div.innerHTML = `
            <label class="label">
                <input type="checkbox" class="checkbox" required checked> 
                <span class="fake register-fake"></span>
                <span class="register-text">Я соглашаюсь с <a href="#" style="text-decoration: underline; color: #000;">условиями хранения персональных данных</a></span>
                
            </label>
        `;
        blocks[1].appendChild(div);
    }, 150)
    

    // MODAL
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

    }, 200)
});
