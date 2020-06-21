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

        // if 
        if (window.matchMedia('(min-width: 992px)').matches) {
          itemTitle.style.marginBottom = itemContentHeight + 20 + 'px';
          itemContent.style.top = itemTitle.clientHeight + 20 + 'px';
        }
      });

      item.addEventListener('mouseleave', () => {
        let itemTitle = item.querySelectorAll('.link-content span')[0];
        let itemContent = item.querySelectorAll('.link-content p')[0];
        
        // if
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
    body = document.getElementsByTagName('body')[0];

    function scrollHorizontally(e) { 

      e = window.event || e;
      let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      this.scrollLeft -= (delta*50);

      if (elemToScroll.scrollLeft == 0 && delta < 0) {
        elemToScroll.scrollLeft = 1
      }

      if ( (this.scrollLeft == 0
          && delta > 0
          )
            // || (elemScrollWidth == elemRightSideAndScroll && delta < 0)
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

    if ( document.querySelectorAll('.people-list').length != 0 ) {
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
            
            if (elemRightSideAndScroll >= elemWidth && down
              // || elemToScroll.scrollLeft > 1 && !down
              )
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


      // setTimeout( () => 
      //   {
      //     window.scroll({
      //       top: feedbackForm.offsetTop,
      //       behavior: "smooth",
      //     })
      //   }, 500);
        
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
        // grid: true,
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
