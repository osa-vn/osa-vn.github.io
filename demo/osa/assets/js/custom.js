 jQuery(document).ready(function($) {

     var ResponsiveMenu = {
         trigger: '#responsive-menu-button',
         animationSpeed: 500,
         breakpoint: 999,
         pushButton: 'off',
         animationType: 'slide',
         animationSide: 'left',
         pageWrapper: '',
         isOpen: false,
         triggerTypes: 'click',
         activeClass: 'is-active',
         container: '#responsive-menu-container',
         openClass: 'responsive-menu-open',
         accordion: 'off',
         activeArrow: '▲',
         inactiveArrow: '▼',
         wrapper: '#responsive-menu-wrapper',
         closeOnBodyClick: 'off',
         closeOnLinkClick: 'off',
         itemTriggerSubMenu: 'off',
         linkElement: '.responsive-menu-item-link',
         openMenu: function() {
             $(this.trigger).addClass(this.activeClass);
             $('html').addClass(this.openClass);
             $('.responsive-menu-button-icon-active').hide();
             $('.responsive-menu-button-icon-inactive').show();
             this.setWrapperTranslate();
             this.isOpen = true;
         },
         closeMenu: function() {
             $(this.trigger).removeClass(this.activeClass);
             $('html').removeClass(this.openClass);
             $('.responsive-menu-button-icon-inactive').hide();
             $('.responsive-menu-button-icon-active').show();
             this.clearWrapperTranslate();
             this.isOpen = false;
         },
         triggerMenu: function() {
             this.isOpen ? this.closeMenu() : this.openMenu();
         },
         triggerSubArrow: function(subarrow) {
             var sub_menu = $(subarrow).parent().next('.responsive-menu-submenu');
             var self = this;
             if (this.accordion == 'on') {
                 /* Get Top Most Parent and the siblings */
                 var top_siblings = sub_menu.parents('.responsive-menu-item-has-children').last().siblings('.responsive-menu-item-has-children');
                 var first_siblings = sub_menu.parents('.responsive-menu-item-has-children').first().siblings('.responsive-menu-item-has-children');
                 /* Close up just the top level parents to key the rest as it was */
                 top_siblings.children('.responsive-menu-submenu').slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
                 /* Set each parent arrow to inactive */
                 top_siblings.each(function() {
                     $(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);
                 });
                 /* Now Repeat for the current item siblings */
                 first_siblings.children('.responsive-menu-submenu').slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
                 first_siblings.each(function() {
                     $(this).find('.responsive-menu-subarrow').first().html(self.inactiveArrow);
                 });
             }
             if (sub_menu.hasClass('responsive-menu-submenu-open')) {
                 sub_menu.slideUp(200, 'linear').removeClass('responsive-menu-submenu-open');
                 $(subarrow).html(this.inactiveArrow);
             } else {
                 sub_menu.slideDown(200, 'linear').addClass('responsive-menu-submenu-open');
                 $(subarrow).html(this.activeArrow);
             }
         },
         menuHeight: function() {
             return $(this.container).height();
         },
         menuWidth: function() {
             return $(this.container).width();
         },
         wrapperHeight: function() {
             return $(this.wrapper).height();
         },
         setWrapperTranslate: function() {
             switch (this.animationSide) {
                 case 'left':
                     translate = 'translateX(' + this.menuWidth() + 'px)';
                     break;
                 case 'right':
                     translate = 'translateX(-' + this.menuWidth() + 'px)';
                     break;
                 case 'top':
                     translate = 'translateY(' + this.wrapperHeight() + 'px)';
                     break;
                 case 'bottom':
                     translate = 'translateY(-' + this.menuHeight() + 'px)';
                     break;
             }
             if (this.animationType == 'push') {
                 $(this.pageWrapper).css({
                     'transform': translate
                 });
                 $('html, body').css('overflow-x', 'hidden');
             }
             if (this.pushButton == 'on') {
                 $('#responsive-menu-button').css({
                     'transform': translate
                 });
             }
         },
         clearWrapperTranslate: function() {
             self = this;
             if (this.animationType == 'push') {
                 $(this.pageWrapper).css({
                     'transform': ''
                 });
                 setTimeout(function() {
                     $('html, body').css('overflow-x', '');
                 }, self.animationSpeed);
             }
             if (this.pushButton == 'on') {
                 $('#responsive-menu-button').css({
                     'transform': ''
                 });
             }
         },
         init: function() {
             var self = this;
             $(this.trigger).on(this.triggerTypes, function(e) {
                 e.stopPropagation();
                 self.triggerMenu();
             });
             $('.responsive-menu-subarrow').on('click', function(e) {
                 e.preventDefault();
                 e.stopPropagation();
                 self.triggerSubArrow(this);
             });
             $(window).resize(function() {
                 if ($(window).width() > self.breakpoint) {
                     if (self.isOpen) {
                         self.closeMenu();
                     }
                 } else {
                     if ($('.responsive-menu-open').length > 0) {
                         self.setWrapperTranslate();
                     }
                 }
             });
             if (this.closeOnLinkClick == 'on') {
                 $(this.linkElement).on('click', function(e) {
                     e.preventDefault();
                     old_href = $(this).attr('href');
                     if (self.isOpen) {
                         if ($(e.target).closest('.responsive-menu-subarrow').length) {
                             return;
                         }
                         self.closeMenu();
                         setTimeout(function() {
                             window.location = old_href;
                         }, self.animationSpeed);
                     }
                 });
             }
             if (this.closeOnBodyClick == 'on') {
                 $(document).on('click', 'body', function(e) {
                     if (self.isOpen) {
                         if ($(e.target).closest('#responsive-menu-container').length || $(e.target).closest('#responsive-menu-button').length) {
                             return;
                         }
                     }
                     self.closeMenu();
                 });
             }
             if (this.itemTriggerSubMenu == 'on') {
                 $('.responsive-menu-item-has-children > ' + this.linkElement).on('click', function(e) {
                     e.preventDefault();
                     self.triggerSubArrow($(this).children('.responsive-menu-subarrow').first());
                 });
             }
         }
     };
     ResponsiveMenu.init();
 });
 jQuery(document).ready(function(jQuery) {
     jQuery.datepicker.setDefaults({
         "closeText": "Close",
         "currentText": "Today",
         "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         "nextText": "Next",
         "prevText": "Previous",
         "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
         "dateFormat": "MM d, yy",
         "firstDay": 1,
         "isRTL": false
     });
 });
 jQuery(document).ready(function() {
     jQuery('.fancybox').fancybox();
     jQuery('.fancybox-media')
         .attr('rel', 'media-gallery')
         .fancybox({
             openEffect: 'none',
             closeEffect: 'none',
             prevEffect: 'none',
             nextEffect: 'none',
             arrows: false,
             helpers: {
                 media: {},
                 buttons: {}
             }
         });

 });

 jQuery(window).scroll(function() {
     var scroll = jQuery(window).scrollTop();

     if (scroll >= 20) {
         jQuery(".site-header").addClass("sticky");
     } else {
         jQuery(".site-header").removeClass("sticky");
     }
 });



 jQuery('.testimonialslider').owlCarousel({
     navigation: true, // Show next and prev buttons
     autoplay: false,
     autoplayTimeout: 3000,
     responsive: true,
     slideSpeed: 300,
     loop: true,
     paginationSpeed: 400,
     items: 1,
     responsive: {
         320: {
             items: 1
         },
         480: {
             items: 1
         }, // from zero to 480 screen width 4 items
         768: {
             items: 1
         }, // from 480 screen widthto 768 6 items
         1024: {
             items: 1
         }
     },
     navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
 });

 jQuery('.clientslider').owlCarousel({
     navigation: true, // Show next and prev buttons
     autoplay: false,
     autoplayTimeout: 3000,
     responsive: true,
     slideSpeed: 300,
     loop: true,
     paginationSpeed: 400,
     items: 6,
     responsive: {
         320: {
             items: 2
         },
         480: {
             items: 3
         }, // from zero to 480 screen width 4 items
         768: {
             items: 4
         }, // from 480 screen widthto 768 6 items
         1024: {
             items: 6
         }
     },
     navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"]
 });

 jQuery(function() {
     jQuery(".text-limit").each(function(i) {
         len = jQuery(this).text().length;
         if (len > 80) {
             jQuery(this).text(jQuery(this).text().substr(0, 200) + '...');
         }
     });
 });
 jQuery("#subscribe-our-newsletter").click(function() {
     jQuery('html, body').animate({
         scrollTop: jQuery("#myDiv2").offset().top - 200
     }, 2000);
 });

 function addcls(id) {
     jQuery('.listing').removeClass('active');
     jQuery("#list_" + id).addClass('active');
 }

 function savebtn() {
     if (document.getElementById('yourname').value.split(" ").join("") == "") {
         alert("Please enter your name.");
         document.getElementById('yourname').focus();
         return false;
     }
     if (document.getElementById('companyname').value.split(" ").join("") == "") {
         alert("Please enter your company name.");
         document.getElementById('companyname').focus();
         return false;
     }
     if (document.getElementById('contactnumber').value.split(" ").join("") == "") {
         alert("Please enter your contact number.");
         document.getElementById('contactnumber').focus();
         return false;
     }
     if (document.getElementById('youremail').value.split(" ").join("") == "") {
         alert("Please enter email address.");
         document.getElementById('youremail').focus();
         return false;
     }
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (emailPattern.test(document.getElementById('youremail').value) == false) {
         alert("Please enter valid email address.");
         document.getElementById('youremail').focus();
         return false;
     }
     if (document.getElementById('subject').value.split(" ").join("") == "") {
         alert("Please enter your subject.");
         document.getElementById('subject').focus();
         return false;
     }
     if (document.getElementById('message').value.split(" ").join("") == "") {
         alert("Please enter your message.");
         document.getElementById('message').focus();
         return false;
     }
     jQuery.ajax({
         url: "http://www.vxpress.in/saveform.php",
         type: "POST",
         data: jQuery("#getquote").serialize(),
         success: function(data) {
             if (data == 1) {
                 jQuery('#succmsg').html('<strong>&nbsp; <h1>Thank you</h1> for your kind intrest in our product. We will get back to you very shortly.</strong>');
                 //jQuery.fancybox.close();
             }
         }
     });
     return false;
 }
 jQuery('.xpresswayslider').owlCarousel({
     navigation: true, // Show next and prev buttons
     autoplay: true,
     autoplayTimeout: 3000,
     responsive: true,
     slideSpeed: 300,
     loop: true,
     paginationSpeed: 400,
     items: 1,
     responsive: {
         320: {
             items: 1
         },
         480: {
             items: 1
         }, // from zero to 480 screen width 4 items
         768: {
             items: 1
         }, // from 480 screen widthto 768 6 items
         1024: {
             items: 1
         }
     },
     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
 });

 jQuery('.expertiseslider').owlCarousel({
     navigation: true, // Show next and prev buttons
     autoplay: true,
     autoplayTimeout: 3000,
     responsive: true,
     slideSpeed: 300,
     loop: true,
     paginationSpeed: 400,
     items: 2,
     responsive: {
         320: {
             items: 1
         },
         480: {
             items: 1
         }, // from zero to 480 screen width 4 items
         768: {
             items: 1
         }, // from 480 screen widthto 768 6 items
         1024: {
             items: 2
         }
     },
     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
 });
 jQuery('.count').each(function() {
     jQuery(this).prop('Counter', 0).animate({
         Counter: jQuery(this).text()
     }, {
         duration: 4000,
         easing: 'swing',
         step: function(now) {
             jQuery(this).text(Math.ceil(now));
         }
     });
 });
 jQuery(function() {
     // SyntaxHighlighter.all();
 });
 jQuery(window).load(function() {
     jQuery('.flexslider').flexslider({
         animation: "slide",
         start: function(slider) {
             jQuery('.test').removeClass('loading');
         }
     });
 });
 jQuery("#industry-expertise").click(function() {
     jQuery('html, body').animate({
         scrollTop: jQuery("#myDiv").offset().top
     }, 2000);
 });
