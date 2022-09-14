//let mainSlider = null;
//let navSlider = null;

//Textos
let datosSlide = {
  frescos:[
    {
      titulo:"Grupo MIFA Produce",
      subtitulo:"Limes Persian and Hass Avocados",
      texto:"Mexican corporation committed with the enviroment and the highest quality standarts in the production and exportation of organic and conventional Persian Limes and Hass Avocados, in order to fullfill all our clients needs.",
      fondo:"https://www.gpomifa.com/wp-content/uploads/2021/10/slider.jpeg",
      qrPagina:"img/qr/mifa.png",
      qrFicha:"img/qr/mifa.png",
      logo:"img/mifa.png"
    },
    {
      titulo:"Confruver",
      subtitulo:"",
      texto:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      fondo:"img/confruver.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/Comfruver.jpg"
    },
    {
      titulo:"Central de mermeladas",
      subtitulo:"",
      texto:"Central de Mermeladas Central de Mermeladas is a Xalapa company dedicated to the production of artisanal jams, made with 100% natural ingredients, without preservatives.",
      fondo:"img/mermelada.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/central.png"
    },
    {
      titulo:"Bernadette	Newman",
      subtitulo:"",
      texto:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      fondo:"img/murrietafondo.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/murrieta.png"
    },
    {
      titulo:"Molino de Chocolate",
      subtitulo:"",
      texto:"Artisan-gourmet chocolate manufacturing brand that has a presence in 143 stores at national and international level. With 5 years of experience in the market, we have been able to demonstrate that 100% natural and traditional Chocolate is and always will be preferred throughout the world.",
      fondo:"img/fondomolino.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/molino.jpeg"
    },
    {
      titulo:"Café Andrade",
      subtitulo:"",
      texto:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      fondo:"https://cafeandrade.com/wp-content/uploads/2019/06/FONDO-NUESTRO-CAF%C3%8B.jpg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/andrade.png"
    },
    {
      titulo:"Agrover",
      subtitulo:"",
      texto:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      fondo:"img/agroverfondo.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/agrover.png"
    },
    {
      titulo:"Fresh Seassons",
      subtitulo:"",
      texto:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      fondo:"img/freshseassonsfondo.jpeg",
      qrPagina:"",
      qrFicha:"",
      logo:"img/freshseasons.png"
    }    
  ],
  procesados:{},
  bebidas:{},
}

// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;
// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);    

// Navigation Slider
let navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

//actualizaSlide('frescos');
/*
function actualizaSlide( opcion ){
  htmlFondosSlides = '';
  htmlLogosSlides = '';
  datosSlide.frescos.forEach(element => {
    htmlFondosSlides += '<div class="swiper-slide">' +
                    '<figure class="slide-bgimg" style="background-image:url(' + element.fondo + ')"> ' +
                      '<img src="' + element.fondo + '" class="entity-img" />' +
                    '</figure>' +
                    '<div class="content">' +
                      '<p class="title">' + element.titulo + '</p>' +
                      '<p class="subtitle">' + element.subtitulo + '</p>' +
                      '<span class="caption">' + element.texto + '</span>' +
                        '<br/>' +
                        '<div class="row">' +
                          '<div class="col-md-6">' +
                            '<img src="' + element.qrPagina + '" />' +
                          '</div>' +
                          '<div class="col-md-6">' +
                            '<img src="' + element.qrFicha + '" />' +
                          '</div>' +
                        '</div>' +
                    '</div>' +
                  '</div>';
    htmlLogosSlides += '<div class="swiper-slide" style="background-color: darkolivegreen;">' +
                          '<figure class="slide-bgimg" style="background-image:url(' + element.logo + ')">' +
                            '<img src="' + element.logo + '" class="entity-img" />' +
                          '</figure>' +
                        '</div>';
  });

  $("#fondosSlides").html(htmlFondosSlides);
  $("#logosSlides").html(htmlLogosSlides);    

  $(".main-slider").removeClass('loading');
  $(".nav-slider").removeClass('loading');



  if ( mainSlider == null ) {
    console.log("A");
    mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
  }else{
    console.log("B");
    mainSlider = null;
  }

  console.log( mainSlider );

  if ( navSlider == null ) {
    navSlider = new Swiper(navSliderSelector, navSliderOptions);
  }else{
    navSlider = null;
  }

  if ( !mainSlider == null ) {
    // Matching sliders
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
  }  
}
*/
