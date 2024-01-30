import { Fancybox } from '@fancyapps/ui'

export const InitFancyboxProjects = () => {
    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        placeFocusBack: false,
        idle: false,
        compact: false,
        showClass: 'f-fadeIn',
        hideClass: 'f-fadeOut',
        caption: false,
        Toolbar: {
            parentEl: (toolbar) => {
                return toolbar.instance.container!.querySelector('.fancybox__col');
            },
            items: {
                sidebar: {
                    tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
                    click: (toolbar) => {
                        toolbar.instance.container!.classList.toggle('has-sidebar');
                    },
                },
            },
            display: {
                left: ['close'],
                middle: [],
                right: ['sidebar'],
            },
        },
        Images: {
            zoom: false,
            protected: true,
        },
        Thumbs: {
            type: 'classic',
        },
        Carousel: {
            transition: false,
            friction: 0,
        },
        on: {
            "Carousel.ready": handleCarouselEvents,
            "Carousel.change": handleCarouselEvents
        },
        tpl: {
            main: `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
          <div class="fancybox__backdrop"></div>
          <div class="fancybox__cols">
            <div class="fancybox__col">
              <div class="fancybox__carousel"></div>
              <div class="fancybox__footer"></div>
            </div>
            <div class="fancybox__col">
              <div class="fancybox__data col gap">  
                <h3 id="fancybox_title"></h3>
                <div id="fancybox_description"></div>
              </div>
            </div>
          </div>
        </div>`,
        },
    });
};

const handleCarouselEvents = (fancybox: any) => {
    fancybox.container.style.setProperty(
        '--bg-image',
        `url("${fancybox.getSlide().thumbSrc}")`
    );

    const titleVal = fancybox.getSlide().triggerEl.dataset.title;
    const titleEl = document.getElementById('fancybox_title');
    if (titleEl) {
        titleEl.innerHTML = titleVal;
    }

    const descriptionVal = fancybox.getSlide().triggerEl.dataset.description;
    const descriptionEl = document.getElementById('fancybox_description');
    if (descriptionEl) {
        descriptionEl.innerHTML = descriptionVal;
    }
};