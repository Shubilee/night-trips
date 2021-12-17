// Переменная для Бургера, блокировки скролла
let unlock = true;

// include('script/burger.js', {})
// Для работы webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


// Перебор каждого элемента маасива и добавление класса _active

// let circles = document.querySelectorAll(".circle");
// if (circles.length > 0) {
// 	circles.forEach(circle => {
// 		circle.addEventListener("click", function () {
// 			circle.classList.toggle("_active")
// 		});
// 	});

// 	// for (let index = 0; index < circles.length; index++) {
// 	// 	const circle = circles[index];

// 	// }
// }
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage =
                'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();
// _scr - для анимации
// _scr-one - чтобы элемент появился только один раз
// Для элемента блока. Например <div> указать _scr, а <p> указать настройку через миксин
// В CSS для первого случая (есть миксин) =========
//      ...
//   transform: translate(100%, 0);
//   opacity: 0;
//   transition: all 0.8s ease 0.5s;
//  &._active {
//      transform: translate(0, 0);
//      opacity: 1;
//   } }

// ПОДКЛЮЧИТЬ slideToggle.js =======================================================================================
// Также используется в форме! 

const animItems = document.querySelectorAll('._scr');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_scr-one')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 0);
}
/*TAB==================================================
nav__items  =  кнопки  
content-body__items  =  поле, в котром меняются табы 
*/
// document.querySelectorAll('.nav__items').forEach((item) =>
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = e.target.getAttribute('href').replace('#', '');


//         document.querySelectorAll('.nav__items').forEach(
//             (child) => child.classList.remove('nav__items--active')
//         );
//         document.querySelectorAll('.content-body__items').forEach(
//             (child) => child.classList.remove('content-body__items--active')
//         );

//         item.classList.add('nav__items--active');
//         document.getElementById(id).classList.add('content-body__items--active');
//     })
// );
// document.querySelector('.nav__items').click();

//=========================================================================
//  ФЛС
// Всей оболочке _tabs
// Куда ТЫЦАЕМ _tabs-item
// Блок, который появляется _tabs-block
// Чтобы сделать какой-то блок изначально открытым добавить _active куда тыцаем и на блок, который должен появиться 

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll("._tabs-item");
    let tabs_blocks = tab.querySelectorAll("._tabs-block");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}

// ПОДКЛЮЧИТЬ ФАЙЛ =======================================================================================


// Для отсчета слайдов справа на лево в html указать в <div> главного контейнера для слайдера dir="rtl" 
// Если Swiper является флекс элементом, то указываем этому элементу min-width = 0;
// Дочерний слайд. В html слайд в слайде и в js делвем новую инициализацию + указать параметр в дочернем слайде nested: true, чтобы не влияло на родителя + отключить переключение по клику на слайд slideToClickedSlide: false,
// Инициализируем Swiper, дав ему имя главного контейнера
new Swiper('.swiper-1', {
	// Настройки Swiper

	// Свой класс swiper-wrapper 
	// wrapperClass: "ИМЯ_КЛАССА",
	// Свой класс swiper-slide
	// slideClass: "ИМЯ_КЛАССА",

	// Стрелки
	navigation: {
		
		nextEl: '.swiper-button-next-1',
		prevEl: '.swiper-button-prev-1'
		
	},
	// Навигация 
	// Буллеты, текущее положение, прогресс
	// Добавить html
	pagination: {
		/*
		// Имя класса буллетов
		el: '.swiper-pagination',
	    
		*/

		// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

		/*
		// Булдеты
		// Чтобы при нажатии на кружок срабатывал переход        
		// type: 'bullets',
		// clickable: true,
		// Динамический буллет
		dynamicBullets: true,
		// Кастомные буллеты. Изменяем параметры вывода
		// Параметры изменяются в классе .swiper-pagination-bullet
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		// Стилизация буллета (свой класс)
		// bulletClass: "ИМЯ_КЛАССА",
		// Стилизация активного буллета (свой класс)
		// bulletActiveClass: "ИМЯ_КЛАССА",
		*/

		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},


	// Скролл
	// Добавить html
	// scrollbar: {
	// 	/*
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// 	*/
	// },

	// Навигация по хешу
	// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
	// hashNavigation: {
	// 	/*
	// 	// Отслеживать состояние
	// 	watchState: true,
	// 	*/
	// },

	// Управление клавиатурой
	// keyboard: {
	// 	/*
	// 	// Включить\выключить
	// 	enabled: true,
	// 	// Включить\выключить
	// 	// только когда слайдер
	// 	// в пределах вьюпорта
	// 	onlyInViewport: true,
	// 	// Включить\выключить
	// 	// управление клавишами
	// 	// pageUp, pageDown
	// 	pageUpDown: true,
	// 	*/
	// },

	// Управление колесом мыши
	// mousewheel: {
	// 	/*
	// 	// Чувствительность колеса мыши
	// 	sensitivity: 1,
	// 	// Класс объекта на котором
	// 	// будет срабатывать прокрутка мышью.
	// 	//eventsTarget: ".image-slider"
	// 	*/
	// },


	/*
	// Включение/отключение
	// перетаскивания слайдов на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	// Работает тогда, когда слайдов не один (slidesPerView: ;)
	slideToClickedSlide: false,
	// Автовысота
	autoHeight: false,
	// Отключение функционала 
	// если слайдов меньше чем нужно 
	// (Уберуться кнопки, кролл ...)
	watchOverflow: true,
	// Активный слайд по центру
	centeredSlides: false,
   
	*/

	// При работе, например, с табами, когда слайдер изначально не виден
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Количество слайдов для показа
	/* slidesPerView: 1, */

	// Отступ между слайдами
	 spaceBetween: 20, 

	// Количество пролистываемых слайдов
	/* slidesPerGroup: 1, */

	// Стартовый слайд.
	/* initialSlide: 0, */

	// Мультирядность
	// Отключить автовысоту
	// Изменить стили :
	// 1)для всего слайдера указать высоту
	//  либо поместить его в блок
	//  у которого есть определенная высота 
	// 2)изменить высоту для самих слайдов 
	// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
	/* slidesPerColumn: 2, */

	// Бесконечный слайдер
	// скролл отключить
	// мультирядность не больше 1
	/* loop: true, */

	// ??
	// Кол-во дублирующих слайдов
	// Если используем slidesPerView: 'auto';, то стоит
	// указать этот параметр
	// ??
	/* loopedSlides: 2, */

	// Свободный режим
	// при скролле блоки не фиксируются на каком-то конкретном
	/* freeMode: true, */

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость переключения слайдов
	/* speed: 300, */

	// Вертикальный слайдер 
	// vertical  horizontal
	/* direction: 'horizontal', */


	// Эффекты переключения слайдов.
	// effect: 'slide',
	// {=============================
	// Листание slide
	// Cмена прозрачности fade
	// Дополнение к fade
	/*   fadeEffect: {
	// Параллельная
	// смена прозрачности
	crossFade: true
	},     */
	// Переворот flip
	// Дополнение к flip
	/*    flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},    */
	// Куб cube
	// Дополнение к cube
	/*     cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},    */
	// Эффект потока coverflow
	// Дополнение к coverflow
	/*    coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},*/
	// =============================}    

	/*
	// Брейк поинты (адаптив). 
	// Срабатывают на ширинах больше указанных
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	*/
	/*
	 // Брейк поинты (адаптив)
	 // Соотношение сторон
	 breakpoints: {
		 '@0.75': {
			 slidesPerView: 1,
		 },
		 '@1.00': {
			 slidesPerView: 2,
		 },
		 '@1.50': {
			 slidesPerView: 3,
		 }
	 },
	 */

	// Отключить предзагрузка картинок
	// Для картинки в html указать class="swiper-lazy"
	// Путь к изображению прописать в <img > как data-src="..."
	// а для самого изображения маленькое 1х1 изображение
	// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
	// Желательно включать, когда slidesPerView = 'auto' или больше 1
	/* preloadImages: false,
	 // Lazy Loading
	 // (подгрузка картинок)
	 lazy: {
		 // Подгружать на старте
		 // переключения слайда
		 loadOnTransitionStart: false,
		 // Подгрузить предыдущую
		 // и следующую картинки
		 loadPrevNext: false,
	 },
	 // Слежка за видимыми слайдами
	 watchSlidesProgress: true,
	 // Добавление класса видимым слайдам
	 watchSlidesVisibility: true,
	 */

	// Миниатюры (превью)
	// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
	// с миниатюрами. Количество миниатюр = количеству слайдов
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/



	/*
		// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/

});
new Swiper('.swiper-2', {
	// Настройки Swiper

	// Свой класс swiper-wrapper 
	// wrapperClass: "ИМЯ_КЛАССА",
	// Свой класс swiper-slide
	// slideClass: "ИМЯ_КЛАССА",

	// Стрелки
	navigation: {
		
		nextEl: '.swiper-button-next-2',
		prevEl: '.swiper-button-prev-2'
		
	},
	// Навигация 
	// Буллеты, текущее положение, прогресс
	// Добавить html
	pagination: {
		/*
		// Имя класса буллетов
		el: '.swiper-pagination',
	    
		*/

		// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

		/*
		// Булдеты
		// Чтобы при нажатии на кружок срабатывал переход        
		// type: 'bullets',
		// clickable: true,
		// Динамический буллет
		dynamicBullets: true,
		// Кастомные буллеты. Изменяем параметры вывода
		// Параметры изменяются в классе .swiper-pagination-bullet
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		// Стилизация буллета (свой класс)
		// bulletClass: "ИМЯ_КЛАССА",
		// Стилизация активного буллета (свой класс)
		// bulletActiveClass: "ИМЯ_КЛАССА",
		*/

		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},


	// Скролл
	// Добавить html
	// scrollbar: {
	// 	/*
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// 	*/
	// },

	// Навигация по хешу
	// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
	// hashNavigation: {
	// 	/*
	// 	// Отслеживать состояние
	// 	watchState: true,
	// 	*/
	// },

	// Управление клавиатурой
	// keyboard: {
	// 	/*
	// 	// Включить\выключить
	// 	enabled: true,
	// 	// Включить\выключить
	// 	// только когда слайдер
	// 	// в пределах вьюпорта
	// 	onlyInViewport: true,
	// 	// Включить\выключить
	// 	// управление клавишами
	// 	// pageUp, pageDown
	// 	pageUpDown: true,
	// 	*/
	// },

	// Управление колесом мыши
	// mousewheel: {
	// 	/*
	// 	// Чувствительность колеса мыши
	// 	sensitivity: 1,
	// 	// Класс объекта на котором
	// 	// будет срабатывать прокрутка мышью.
	// 	//eventsTarget: ".image-slider"
	// 	*/
	// },


	/*
	// Включение/отключение
	// перетаскивания слайдов на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	// Работает тогда, когда слайдов не один (slidesPerView: ;)
	slideToClickedSlide: false,
	// Автовысота
	autoHeight: false,
	// Отключение функционала 
	// если слайдов меньше чем нужно 
	// (Уберуться кнопки, кролл ...)
	watchOverflow: true,
	// Активный слайд по центру
	centeredSlides: false,
   
	*/

	// При работе, например, с табами, когда слайдер изначально не виден
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Количество слайдов для показа
	/* slidesPerView: 1, */

	// Отступ между слайдами
	 spaceBetween: 20, 

	// Количество пролистываемых слайдов
	/* slidesPerGroup: 1, */

	// Стартовый слайд.
	/* initialSlide: 0, */

	// Мультирядность
	// Отключить автовысоту
	// Изменить стили :
	// 1)для всего слайдера указать высоту
	//  либо поместить его в блок
	//  у которого есть определенная высота 
	// 2)изменить высоту для самих слайдов 
	// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
	/* slidesPerColumn: 2, */

	// Бесконечный слайдер
	// скролл отключить
	// мультирядность не больше 1
	/* loop: true, */

	// ??
	// Кол-во дублирующих слайдов
	// Если используем slidesPerView: 'auto';, то стоит
	// указать этот параметр
	// ??
	/* loopedSlides: 2, */

	// Свободный режим
	// при скролле блоки не фиксируются на каком-то конкретном
	/* freeMode: true, */

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость переключения слайдов
	/* speed: 300, */

	// Вертикальный слайдер 
	// vertical  horizontal
	/* direction: 'horizontal', */


	// Эффекты переключения слайдов.
	// effect: 'slide',
	// {=============================
	// Листание slide
	// Cмена прозрачности fade
	// Дополнение к fade
	/*   fadeEffect: {
	// Параллельная
	// смена прозрачности
	crossFade: true
	},     */
	// Переворот flip
	// Дополнение к flip
	/*    flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},    */
	// Куб cube
	// Дополнение к cube
	/*     cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},    */
	// Эффект потока coverflow
	// Дополнение к coverflow
	/*    coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},*/
	// =============================}    

	/*
	// Брейк поинты (адаптив). 
	// Срабатывают на ширинах больше указанных
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	*/
	/*
	 // Брейк поинты (адаптив)
	 // Соотношение сторон
	 breakpoints: {
		 '@0.75': {
			 slidesPerView: 1,
		 },
		 '@1.00': {
			 slidesPerView: 2,
		 },
		 '@1.50': {
			 slidesPerView: 3,
		 }
	 },
	 */

	// Отключить предзагрузка картинок
	// Для картинки в html указать class="swiper-lazy"
	// Путь к изображению прописать в <img > как data-src="..."
	// а для самого изображения маленькое 1х1 изображение
	// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
	// Желательно включать, когда slidesPerView = 'auto' или больше 1
	/* preloadImages: false,
	 // Lazy Loading
	 // (подгрузка картинок)
	 lazy: {
		 // Подгружать на старте
		 // переключения слайда
		 loadOnTransitionStart: false,
		 // Подгрузить предыдущую
		 // и следующую картинки
		 loadPrevNext: false,
	 },
	 // Слежка за видимыми слайдами
	 watchSlidesProgress: true,
	 // Добавление класса видимым слайдам
	 watchSlidesVisibility: true,
	 */

	// Миниатюры (превью)
	// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
	// с миниатюрами. Количество миниатюр = количеству слайдов
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/



	/*
		// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/

});
new Swiper('.swiper-3', {
	// Настройки Swiper

	// Свой класс swiper-wrapper 
	// wrapperClass: "ИМЯ_КЛАССА",
	// Свой класс swiper-slide
	// slideClass: "ИМЯ_КЛАССА",

	// Стрелки
	navigation: {
		
		nextEl: '.swiper-button-next-3',
		prevEl: '.swiper-button-prev-3'
		
	},
	// Навигация 
	// Буллеты, текущее положение, прогресс
	// Добавить html
	pagination: {
		/*
		// Имя класса буллетов
		el: '.swiper-pagination',
	    
		*/

		// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

		/*
		// Булдеты
		// Чтобы при нажатии на кружок срабатывал переход        
		// type: 'bullets',
		// clickable: true,
		// Динамический буллет
		dynamicBullets: true,
		// Кастомные буллеты. Изменяем параметры вывода
		// Параметры изменяются в классе .swiper-pagination-bullet
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		// Стилизация буллета (свой класс)
		// bulletClass: "ИМЯ_КЛАССА",
		// Стилизация активного буллета (свой класс)
		// bulletActiveClass: "ИМЯ_КЛАССА",
		*/

		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},


	// Скролл
	// Добавить html
	// scrollbar: {
	// 	/*
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// 	*/
	// },

	// Навигация по хешу
	// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
	// hashNavigation: {
	// 	/*
	// 	// Отслеживать состояние
	// 	watchState: true,
	// 	*/
	// },

	// Управление клавиатурой
	// keyboard: {
	// 	/*
	// 	// Включить\выключить
	// 	enabled: true,
	// 	// Включить\выключить
	// 	// только когда слайдер
	// 	// в пределах вьюпорта
	// 	onlyInViewport: true,
	// 	// Включить\выключить
	// 	// управление клавишами
	// 	// pageUp, pageDown
	// 	pageUpDown: true,
	// 	*/
	// },

	// Управление колесом мыши
	// mousewheel: {
	// 	/*
	// 	// Чувствительность колеса мыши
	// 	sensitivity: 1,
	// 	// Класс объекта на котором
	// 	// будет срабатывать прокрутка мышью.
	// 	//eventsTarget: ".image-slider"
	// 	*/
	// },


	/*
	// Включение/отключение
	// перетаскивания слайдов на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	// Работает тогда, когда слайдов не один (slidesPerView: ;)
	slideToClickedSlide: false,
	// Автовысота
	autoHeight: false,
	// Отключение функционала 
	// если слайдов меньше чем нужно 
	// (Уберуться кнопки, кролл ...)
	watchOverflow: true,
	// Активный слайд по центру
	centeredSlides: false,
   
	*/

	// При работе, например, с табами, когда слайдер изначально не виден
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Количество слайдов для показа
	/* slidesPerView: 1, */

	// Отступ между слайдами
	 spaceBetween: 20, 

	// Количество пролистываемых слайдов
	/* slidesPerGroup: 1, */

	// Стартовый слайд.
	/* initialSlide: 0, */

	// Мультирядность
	// Отключить автовысоту
	// Изменить стили :
	// 1)для всего слайдера указать высоту
	//  либо поместить его в блок
	//  у которого есть определенная высота 
	// 2)изменить высоту для самих слайдов 
	// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
	/* slidesPerColumn: 2, */

	// Бесконечный слайдер
	// скролл отключить
	// мультирядность не больше 1
	/* loop: true, */

	// ??
	// Кол-во дублирующих слайдов
	// Если используем slidesPerView: 'auto';, то стоит
	// указать этот параметр
	// ??
	/* loopedSlides: 2, */

	// Свободный режим
	// при скролле блоки не фиксируются на каком-то конкретном
	/* freeMode: true, */

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость переключения слайдов
	/* speed: 300, */

	// Вертикальный слайдер 
	// vertical  horizontal
	/* direction: 'horizontal', */


	// Эффекты переключения слайдов.
	// effect: 'slide',
	// {=============================
	// Листание slide
	// Cмена прозрачности fade
	// Дополнение к fade
	/*   fadeEffect: {
	// Параллельная
	// смена прозрачности
	crossFade: true
	},     */
	// Переворот flip
	// Дополнение к flip
	/*    flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},    */
	// Куб cube
	// Дополнение к cube
	/*     cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},    */
	// Эффект потока coverflow
	// Дополнение к coverflow
	/*    coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},*/
	// =============================}    

	/*
	// Брейк поинты (адаптив). 
	// Срабатывают на ширинах больше указанных
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	*/
	/*
	 // Брейк поинты (адаптив)
	 // Соотношение сторон
	 breakpoints: {
		 '@0.75': {
			 slidesPerView: 1,
		 },
		 '@1.00': {
			 slidesPerView: 2,
		 },
		 '@1.50': {
			 slidesPerView: 3,
		 }
	 },
	 */

	// Отключить предзагрузка картинок
	// Для картинки в html указать class="swiper-lazy"
	// Путь к изображению прописать в <img > как data-src="..."
	// а для самого изображения маленькое 1х1 изображение
	// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
	// Желательно включать, когда slidesPerView = 'auto' или больше 1
	/* preloadImages: false,
	 // Lazy Loading
	 // (подгрузка картинок)
	 lazy: {
		 // Подгружать на старте
		 // переключения слайда
		 loadOnTransitionStart: false,
		 // Подгрузить предыдущую
		 // и следующую картинки
		 loadPrevNext: false,
	 },
	 // Слежка за видимыми слайдами
	 watchSlidesProgress: true,
	 // Добавление класса видимым слайдам
	 watchSlidesVisibility: true,
	 */

	// Миниатюры (превью)
	// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
	// с миниатюрами. Количество миниатюр = количеству слайдов
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/



	/*
		// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/

});
new Swiper('.swiper-4', {
	// Настройки Swiper

	// Свой класс swiper-wrapper 
	// wrapperClass: "ИМЯ_КЛАССА",
	// Свой класс swiper-slide
	// slideClass: "ИМЯ_КЛАССА",

	// Стрелки
	navigation: {
		
		nextEl: '.swiper-button-next-4',
		prevEl: '.swiper-button-prev-4'
		
	},
	// Навигация 
	// Буллеты, текущее положение, прогресс
	// Добавить html
	pagination: {
		/*
		// Имя класса буллетов
		el: '.swiper-pagination',
	    
		*/

		// String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"

		/*
		// Булдеты
		// Чтобы при нажатии на кружок срабатывал переход        
		// type: 'bullets',
		// clickable: true,
		// Динамический буллет
		dynamicBullets: true,
		// Кастомные буллеты. Изменяем параметры вывода
		// Параметры изменяются в классе .swiper-pagination-bullet
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		// Стилизация буллета (свой класс)
		// bulletClass: "ИМЯ_КЛАССА",
		// Стилизация активного буллета (свой класс)
		// bulletActiveClass: "ИМЯ_КЛАССА",
		*/

		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
	},


	// Скролл
	// Добавить html
	// scrollbar: {
	// 	/*
	// 	el: '.swiper-scrollbar',
	// 	// Возможность перетаскивать скролл
	// 	draggable: true
	// 	*/
	// },

	// Навигация по хешу
	// В html каждому слайду добавить в <div > data-hash="ПРОИЗВОЛЬНОЕ_ИМЯ"
	// hashNavigation: {
	// 	/*
	// 	// Отслеживать состояние
	// 	watchState: true,
	// 	*/
	// },

	// Управление клавиатурой
	// keyboard: {
	// 	/*
	// 	// Включить\выключить
	// 	enabled: true,
	// 	// Включить\выключить
	// 	// только когда слайдер
	// 	// в пределах вьюпорта
	// 	onlyInViewport: true,
	// 	// Включить\выключить
	// 	// управление клавишами
	// 	// pageUp, pageDown
	// 	pageUpDown: true,
	// 	*/
	// },

	// Управление колесом мыши
	// mousewheel: {
	// 	/*
	// 	// Чувствительность колеса мыши
	// 	sensitivity: 1,
	// 	// Класс объекта на котором
	// 	// будет срабатывать прокрутка мышью.
	// 	//eventsTarget: ".image-slider"
	// 	*/
	// },


	/*
	// Включение/отключение
	// перетаскивания слайдов на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	// Работает тогда, когда слайдов не один (slidesPerView: ;)
	slideToClickedSlide: false,
	// Автовысота
	autoHeight: false,
	// Отключение функционала 
	// если слайдов меньше чем нужно 
	// (Уберуться кнопки, кролл ...)
	watchOverflow: true,
	// Активный слайд по центру
	centeredSlides: false,
   
	*/

	// При работе, например, с табами, когда слайдер изначально не виден
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,

	// Количество слайдов для показа
	/* slidesPerView: 1, */

	// Отступ между слайдами
	 spaceBetween: 20, 

	// Количество пролистываемых слайдов
	/* slidesPerGroup: 1, */

	// Стартовый слайд.
	/* initialSlide: 0, */

	// Мультирядность
	// Отключить автовысоту
	// Изменить стили :
	// 1)для всего слайдера указать высоту
	//  либо поместить его в блок
	//  у которого есть определенная высота 
	// 2)изменить высоту для самих слайдов 
	// height: calc((100% - ОТСТУПЫ_МЕЖДУ_СЛАЙДАМИ_px) / КОЛИЧЕСТВО_РЯДОВ)
	/* slidesPerColumn: 2, */

	// Бесконечный слайдер
	// скролл отключить
	// мультирядность не больше 1
	/* loop: true, */

	// ??
	// Кол-во дублирующих слайдов
	// Если используем slidesPerView: 'auto';, то стоит
	// указать этот параметр
	// ??
	/* loopedSlides: 2, */

	// Свободный режим
	// при скролле блоки не фиксируются на каком-то конкретном
	/* freeMode: true, */

	// Автопрокрутка
	/*
	autoplay: {
		// Пауза между прокруткой
		delay: 1000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	*/

	// Скорость переключения слайдов
	/* speed: 300, */

	// Вертикальный слайдер 
	// vertical  horizontal
	/* direction: 'horizontal', */


	// Эффекты переключения слайдов.
	// effect: 'slide',
	// {=============================
	// Листание slide
	// Cмена прозрачности fade
	// Дополнение к fade
	/*   fadeEffect: {
	// Параллельная
	// смена прозрачности
	crossFade: true
	},     */
	// Переворот flip
	// Дополнение к flip
	/*    flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},    */
	// Куб cube
	// Дополнение к cube
	/*     cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},    */
	// Эффект потока coverflow
	// Дополнение к coverflow
	/*    coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},*/
	// =============================}    

	/*
	// Брейк поинты (адаптив). 
	// Срабатывают на ширинах больше указанных
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
	*/
	/*
	 // Брейк поинты (адаптив)
	 // Соотношение сторон
	 breakpoints: {
		 '@0.75': {
			 slidesPerView: 1,
		 },
		 '@1.00': {
			 slidesPerView: 2,
		 },
		 '@1.50': {
			 slidesPerView: 3,
		 }
	 },
	 */

	// Отключить предзагрузка картинок
	// Для картинки в html указать class="swiper-lazy"
	// Путь к изображению прописать в <img > как data-src="..."
	// а для самого изображения маленькое 1х1 изображение
	// После добавить блок с class="swiper-lazy-preloader", котроая добавит иконку подгрузки
	// Желательно включать, когда slidesPerView = 'auto' или больше 1
	/* preloadImages: false,
	 // Lazy Loading
	 // (подгрузка картинок)
	 lazy: {
		 // Подгружать на старте
		 // переключения слайда
		 loadOnTransitionStart: false,
		 // Подгрузить предыдущую
		 // и следующую картинки
		 loadPrevNext: false,
	 },
	 // Слежка за видимыми слайдами
	 watchSlidesProgress: true,
	 // Добавление класса видимым слайдам
	 watchSlidesVisibility: true,
	 */

	// Миниатюры (превью)
	// В html под главным слайдером создаем новый swiper-container с классом (к примеру) .image-mini-slider
	// с миниатюрами. Количество миниатюр = количеству слайдов
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
	*/



	/*
		// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/

});

/*
// Слайдер в слайдере
new Swiper('.image-in-slider', {
	// Курсор перетаскивания
	grabCursor: true,
	// Навигация
	// пагинация, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Корректная работа
	// перетаскивания\свайпа
	// для дочернего слайдера
	nested: true,
});
*/
/*
// Еще один слайдер
let myTextSlider = new Swiper('.text-slider', {
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
});

// Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
*/

/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/


/*
// Параметры
// Получение
let qSlides = myImageSlider.slides.length;

// Изменение
myImageSlider.params.speed = 3000;
*/

/*
// Методы
// Обновить слайдер
myImageSlider.update();

// Переключится на слайд 2, скорость 800
myImageSlider.slideTo(2, 800);
*/

/*
// События
// Событие смены слайда
myImageSlider.on('slideChange', function () {
	console.log('Слайд переключен');
});
*/


/*
// Запуск автоппрокрутки при наведении
let sliderBlock = document.querySelector('.image-slider');

// myImageSlider  - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
	myImageSlider.params.autoplay.disableOnInteraction = false;
	myImageSlider.params.autoplay.delay = 500;
	myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
	myImageSlider.autoplay.stop();
});

*/


/*
// Фракция
let mySliderAllSlides = document.querySelector('.image-slider__total');
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

mySliderAllSlides.innerHTML = myImageSlider.slides.length;

myImageSlider.on('slideChange', function () {
	let currentSlide = ++myImageSlider.realIndex;
	mySliderCurrentSlide.innerHTML = currentSlide;
});
*/
