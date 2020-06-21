/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.sass":
/*!****************************!*\
  !*** ./src/css/style.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function() {
  //Click on burger-button, menu items
  {
    function makeBurgerInactive() {
      burger.removeEventListener("click", burgerClick);

      setTimeout(() => {
        burger.addEventListener("click", burgerClick);
      }, 1500);
    };

    function burgerClick() {
      let menuItemsArr = document.querySelectorAll("#main-menu .menu-item");
      let body = document.getElementsByTagName('body')[0];

      body.classList.toggle('ovh');
      

      if (!burger.classList.contains("active")) {
        burger.classList.add("active");
        document.getElementById("main-menu").classList.add("active");

        setTimeout(() => {
          menuItemsArr.forEach((item) => {
            if (window.matchMedia('(max-width: 991px)').matches) {
              item.style.height = "33.334%";
            } else {
              item.style.width = "33.334%";
            }
          });
        }, 0);

        setTimeout( () => {
          menuItemsArr.forEach( (item) => {
            item.querySelector('.link-content').classList.add('show');
          });
        }, 700);

      } else {
        menuItemsArr.forEach( (item) => {
          item.querySelector('.link-content').classList.add('hide');
        });

        setTimeout( () => {
          menuItemsArr.forEach( (item) => {
            if (window.matchMedia('(max-width: 991px)').matches) {
              item.style.cssText = "height: 0%; margin-top: 33.333%";
            } else {
              item.style.cssText = "width: 0%; margin-left: 33.333%";
            }
          });
        }, 700);

        setTimeout( () => {
          menuItemsArr.forEach( (item) => {
            if (window.matchMedia('(max-width: 991px)').matches) {
              item.style.cssText = "height: 0%; margin-top: 0%;";
              item.querySelector('.link-content').classList.remove('hide', 'show');
            } else {
              item.style.cssText = "width: 0%; margin-left: 0%;";
              item.querySelector('.link-content').classList.remove('hide', 'show');
            }
          });
          document.getElementById("main-menu").classList.remove("active");
        }, 1500);


        burger.classList.remove("active");

      }

      makeBurgerInactive();
    }

    let burger = document.getElementsByClassName("burger-button")[0];

    burger.addEventListener("click", burgerClick);

    let menuItemsLink = document.querySelectorAll('#main-menu .menu-item a');

    menuItemsLink.forEach((item) => {
      item.addEventListener("click", burgerClick);
    })
  }

  //Menu items animation on hover
  {
    let menuItems = document.querySelectorAll('#main-menu .menu-item');

    menuItems.forEach((item) => {
      
      item.addEventListener('mouseenter', () => {
        let itemTitle = item.querySelectorAll('.link-content span')[0];
        let itemContent = item.querySelectorAll('.link-content p')[0];
        let itemContentHeight = itemContent.clientHeight;

        if (window.matchMedia('(min-width: 992px)').matches) {
          itemTitle.style.marginBottom = itemContentHeight + 20 + 'px';
          itemContent.style.top = itemTitle.clientHeight + 20 + 'px';
        }
      });

      item.addEventListener('mouseleave', () => {
        let itemTitle = item.querySelectorAll('.link-content span')[0];
        let itemContent = item.querySelectorAll('.link-content p')[0];
        
        if (window.matchMedia('(min-width: 992px)').matches) {
          itemTitle.style.marginBottom = '0px';
          itemContent.style.top = '100%';
        }
      });
    });
  }

  //Activity sublist slide
  {
    let clickTargets = document.querySelectorAll('.activities-list .title');

    function hideSublist(item) {
        item.classList.remove('active');
        jQuery(item.nextElementSibling).slideUp(300);
    }
  
    clickTargets.forEach((target) => {
      target.addEventListener('click', () => {
        clickTargets.forEach((item) => {
          if(target != item) hideSublist(item);
        });

        target.classList.toggle('active');
        jQuery(target.nextElementSibling).slideToggle(300);
      })
    })

  }
  
  //Window scroll interception for "People" block
  (function() {
    if ( document.querySelectorAll('.people-list').length != 0 ) {
      body = document.getElementsByTagName('body')[0];

      function scrollHorizontally(e) { 

        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta*50);

        if (elemToScroll.scrollLeft == 0 && delta < 0) {
          elemToScroll.scrollLeft = 1
        }

        if ( (this.scrollLeft == 0 && delta > 0 )
          ) {
            body.style.overflowY = "scroll";
            window.removeEventListener("wheel",
              scrollElemHorizontally
            );
            window.removeEventListener("DOMMouseScroll", 
              scrollElemHorizontally
            );
            return;
          }
      }

      function scrollElemHorizontally() {
        scrollHorizontally.apply(elemToScroll);
      }

      let elemToScroll = document.querySelectorAll('.people-list')[0];
  
      let prevScroll = 0,
          curScroll = pageYOffset;
  
      if (window.matchMedia('(hover)').matches) {
        window.addEventListener("scroll", () => {
  
          let elemBottom = elemToScroll.getBoundingClientRect().bottom - document.documentElement.clientHeight,
              elemWidth= elemToScroll.clientWidth,
              elemRightSideAndScroll = elemToScroll.scrollLeft + elemWidth;
  
  
          prevScroll = curScroll;
          curScroll = pageYOffset;
  
          let down = prevScroll - curScroll <= 0 ?
            true :
            false;
  
          if (elemBottom <= 0 && elemBottom > -100) {
            
            if (elemRightSideAndScroll >= elemWidth && down)
            {
              body.style.overflowY = "hidden";
  
              window.addEventListener("wheel",
                scrollElemHorizontally
              );
              window.addEventListener("DOMMouseScroll", 
                scrollElemHorizontally
              );
            }
  
          }
        }, {passive: false});
      }
    }

  })();

  //Stripes initialize
  {
    let elemsToStripeOnload = Array.from(document.getElementsByClassName('to-stripe-onload'));
    let elemsToStripeOnscroll = Array.from(document.getElementsByClassName('to-stripe-onscroll'));

    elemsToStripeOnload.forEach((item) => {
      item.classList.add('striped');
    });

    window.addEventListener('scroll', () => {
      elemsToStripeOnscroll.forEach((item) => {
        let rect = item.getBoundingClientRect();
        let top = rect.top + window.pageYOffset;

        if (rect.top < .8*top) item.classList.add('striped');
      });
    });
  }

  //Show feedback-block
  {
    let btnShowFeedback = document.getElementById('show-form-btn');
    let feedbackForm = document.getElementById('feedback-form');

    function makeBtnShowFeedbackActive() {
      btnShowFeedback.classList.add('active');
    }

    function showFeedback(e) {
      e.preventDefault();

      jQuery(feedbackForm).slideToggle({
        start: function () {
          jQuery(this).css({
            display: "flex",
          })
        },
        duration: 100,
      });
        
      jQuery("html, body").animate({scrollTop: jQuery(feedbackForm).offset().top+"px"}, 1000, 'swing');

      makeBtnShowFeedbackActive();
    }

    if (btnShowFeedback) {
      btnShowFeedback.addEventListener('click', showFeedback, {once: true})
    }
  }

  //Range sliders
  {
    if (document.getElementsByClassName("proj-timeline").length != 0) {
    
      jQuery(".proj-timeline").ionRangeSlider({
        type: "double",
        hide_min_max: true,
        min: 1,
        max: 14,
        from: 0,
        to: 10,
        postfix: " month",
        skin: "round"
      });

    }


    if (document.getElementsByClassName("budget-range").length != 0) {

      jQuery(".budget-range").ionRangeSlider({
        type: "double",
        hide_min_max: true,
        min: 1000,
        max: 16000,
        from: 1000,
        to: 10000,
        postfix: "$",
        skin: "round",
        step: 200
      });
      
    }
  }

});


/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.sass ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/css/style.sass */"./src/css/style.sass");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map