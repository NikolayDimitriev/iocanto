jQuery(document).ready(function(){
    // !Интеграция с CRM
    jQuery.getJSON('https://iocanto.s20.online/common/2/form/embed?id=2&lead_status_id=&lead_source_id=3',function(data){
        jQuery('.alfacrm-form-2').replaceWith(data.form)
    })
    
    // HEADER
    setTimeout(()=>{
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

    // КОМАНДА
    const swiperTeam = new Swiper('.team-swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 80,
        // Navigation arrows
        navigation: {
          nextEl: '.team-block__btn.team-block__btn--next',
          prevEl: '.team-block__btn.team-block__btn--prev',
        }
      
    });

    // СТОИМОСТЬ
    const saleCard = document.querySelectorAll('.cost-sale__card');

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

});
