var setup_module = (function() {

    var effects = {
        
        project_img_1 : document.getElementById("img-1"),
        project_text_1 : document.getElementById("ptext-1"),
  
        project_img_2 : document.getElementById("img-2"),
        project_text_2 : document.getElementById("ptext-2"),
  
        hobby_img_1 : document.getElementById("img-h-1"),
        hobby_text_1 : document.getElementById("img-text-1"),
        animation_1 : document.getElementById("animation-1"),
        
        hobby_img_2 : document.getElementById("img-h-2"),
        hobby_text_2 : document.getElementById("img-text-2"),
        animation_2 : document.getElementById("animation-2"),
        
        hobby_img_3 : document.getElementById("img-h-3"),
        hobby_text_3 : document.getElementById("img-text-3"),
        animation_3 : document.getElementById("animation-3"),
  
        interests_title : document.getElementById("interests"),
  
        desc_1 : document.getElementById("img-desc-1"),   
        desc_2 : document.getElementById("img-desc-2"),   
        desc_3 : document.getElementById("img-desc-3"), 
  
        cont_btn_1 : document.querySelector(".content-button-1"),
        cont_btn_2 : document.querySelector(".content-button-2"),
        label_dev : document.querySelector(".label-dev"),
        label_mentor : document.querySelector(".label-mentor"),
  
        dev_info : document.getElementById("developer-info"),
        mentor_info : document.getElementById("mentor-info"),
  
        linkedin_link : document.getElementById("linkedin-top"),
        email_link : document.getElementById("email-top"),
        fb_link : document.getElementById("fb-top"),
        insta_link : document.getElementById("insta-top"),
  
        reset_link : document.getElementById('link-up'),

        canvas : document.getElementById('particles-js'),
        entry_arrow : document.getElementById('arrow-down'),
  
        
    }
  
    var smooth_scroll = function(target, duration) {
        var target = document.querySelector(target);
        var target_pos = target.getBoundingClientRect().top;
  
        var start_pos = window.pageYOffset;
        var distance = target_pos - start_pos;
        var start_time = null;   
  
  
        function scroll_animation(current_time) {
            if (start_time === null) start_time = current_time;
            var time_elapsed = current_time - start_time;
  
            var run = ease(time_elapsed, start_pos, target_pos, duration);
            window.scrollTo(0, run);
            if (time_elapsed < duration) requestAnimationFrame(scroll_animation);
  
        }
  
        function ease(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t*t*t + 2) + b;
        };
  
  
        requestAnimationFrame(scroll_animation);
    }
  
  
    var set_event_handlers = function() {
  
        /* Configure primary iamge text effects for projects section */
        effects.project_img_1.addEventListener("mouseover", function(event) { 
            event.target.style.opacity = 0;
            effects.project_text_1.style.opacity = 1;        
            effects.project_text_2.style.opacity = 0;
            effects.project_img_2.style.opacity = 1;
        });
  
        /* Configure secondary image text effects for projects section */
        effects.project_img_2.addEventListener("mouseover", function(event) {
            event.target.style.opacity = 0;
            effects.project_text_2.style.opacity = 1;        
            effects.project_text_1.style.opacity = 0;
            effects.project_img_1.style.opacity = 1;
        });
        
        /* Configure text effects for first picture in interests section */
        effects.hobby_img_1.addEventListener("mouseover", function(event) {
            effects.animation_1.style.opacity = 1;
            effects.hobby_text_1.style.opacity = 1;
            event.target.style.transform = "scale(1.2)";
        });
  
        effects.hobby_img_1.addEventListener("mouseout", function(event) {
            effects.animation_1.style.opacity = 0;
            effects.hobby_text_1.style.opacity = 0;
            event.target.style.transform = "scale(1)";
          });
  
          effects.hobby_text_1.addEventListener("mouseover", function(event){
            event.target.style.opacity = 1;
            effects.animation_1.style.opacity = 1;
            effects.hobby_img_1.style.transform = "scale(1.2)";
        });
        
        effects.hobby_text_1.addEventListener("mouseout", function(event){
            event.target.style.opacity = 0;
            effects.animation_1.style.opacity = 0;
        });
  
        effects.animation_1.addEventListener("mouseover", function(event){
            event.target.style.opacity = 1;
            effects.hobby_text_1.style.opacity = 1;
            effects.hobby_img_1.style.transform = "scale(1.2)";
        });
        
        effects.animation_1.addEventListener("mouseout", function(event){
            event.target.style.opacity = 0;
            effects.hobby_text_1.style.opacity = 0;
        });
  
        effects.hobby_text_1.addEventListener("click", function(event) {
            setTimeout(function(){
                effects.desc_1.style.opacity = 1;
            }, 1500);
  
            effects.desc_2.style.opacity = 0;
            effects.desc_3.style.opacity = 0;
            effects.interests_title.style.opacity = 0; 
        });
        
        effects.hobby_text_2.addEventListener("click", function(event) {
            setTimeout(function(){
                effects.desc_2.style.opacity = 1;
            }, 1500);
            effects.desc_1.style.opacity = 0;
            effects.desc_3.style.opacity = 0;
            effects.interests_title.style.opacity = 0; 
        });
        
        effects.hobby_text_3.addEventListener("click", function(event) {
            setTimeout(function(){
                effects.desc_3.style.opacity = 1;
            }, 1500);
            effects.desc_2.style.opacity = 0;
            effects.desc_1.style.opacity = 0;
            effects.interests_title.style.opacity = 0; 
        });
        
        /* Configure text effects for second picture in interests section */
        effects.hobby_img_2.addEventListener("mouseover", function(event) {
            effects.animation_2.style.opacity = 1;
            effects.hobby_text_2.style.opacity = 1;
            effects.hobby_img_2.style.transform = "scale(1.2)";
        });
        
        effects.hobby_img_2.addEventListener("mouseout", function(event) {
            effects.animation_2.style.opacity = 0;
            effects.hobby_text_2.style.opacity = 0;
            effects.hobby_img_2.style.transform = "scale(1)";
        });
        
        effects.hobby_text_2.addEventListener("mouseover", function(event){
            event.target.style.opacity = 1;
            effects.hobby_img_2.style.transform = "scale(1.2)"; 
            effects.animation_2.style.opacity = 1;
        });
        
        effects.hobby_text_2.addEventListener("mouseout", function(event){
            effects.animation_2.style.opacity = 0;
            event.target.style.opacity = 0;
        });
  
        effects.animation_2.addEventListener("mouseover", function(event){
            event.target.style.opacity = 1;
            effects.hobby_text_2.style.opacity = 1;
            effects.hobby_img_2.style.transform = "scale(1.2)";
        });
        
        effects.animation_2.addEventListener("mouseout", function(event){
            event.target.style.opacity = 0;
            effects.hobby_text_2.style.opacity = 0;
            effects.hobby_img_2.style.transform = "scale(1)";
        });
        
        /* Configure text effects for third picture in interests section */
        effects.hobby_img_3.addEventListener("mouseover", function(event) {
            event.target.style.transform = "scale(1.2)";
            effects.animation_3.style.opacity = 1;
            effects.hobby_text_3.style.opacity = 1;
        });
        
        effects.hobby_img_3.addEventListener("mouseout", function(event) {
            event.target.style.transform = "scale(1)";
            effects.animation_3.style.opacity = 0;
            effects.hobby_text_3.style.opacity = 0;
        });
        
        effects.hobby_text_3.addEventListener("mouseover", function(event){
            effects.animation_3.style.opacity = 1;
            event.target.style.opacity = 1;
            effects.hobby_img_3.style.transform = "scale(1.2)";
        });
        
        effects.hobby_text_3.addEventListener("mouseout", function(event){
            effects.animation_3.style.opacity = 0;
            event.target.style.opacity = 0;
        });
  
        effects.animation_3.addEventListener("mouseover", function(event){
            event.target.style.opacity = 1;
            effects.hobby_text_3.style.opacity = 1;
            effects.hobby_img_3.style.transform = "scale(1.2)";
        });
        
        effects.animation_3.addEventListener("mouseout", function(event){
            event.target.style.opacity = 0;
            effects.hobby_text_3.style.opacity = 0;
        });
  
        /*
         * When pressing escape, resets the hobby window back to its default.
         */
        document.addEventListener("keydown", function(event) {
            if (event.key == "Escape") {
  
                setTimeout(function() {
                    effects.interests_title.style.opacity = 1;
                }, 1500);
  
                effects.desc_1.style.opacity = 0;
                effects.desc_2.style.opacity = 0;
                effects.desc_3.style.opacity = 0;
            }
        });

        effects.canvas.addEventListener("mousemove", function(event) {
          effects.entry_arrow.style.opacity = 0.75;
          setTimeout(function() {
            effects.entry_arrow.style.opacity = 0;
          }, 5000);
        });

        effects.entry_arrow.addEventListener("click", function(event) {
          smooth_scroll(".chapter-title", 1200);
        });

  
        effects.cont_btn_1.addEventListener("click", function(event) {
            smooth_scroll(".project-wrapper", 1200);
        });
  
        // effects.label_dev.addEventListener("click", function(event) {
        //     smooth_scroll(".project-wrapper", 1200);
  
        //     setTimeout(function(){
        //         effects.dev_info.style.backgroundColor = "#fffef7";
        //     }, 1000); 
  
        //     effects.dev_info.style.backgroundColor = "#328cc1";
  
        // });
  
        // effects.label_mentor.addEventListener("click", function(event) {
        //     smooth_scroll(".project-wrapper", 1200);
  
        //     setTimeout(function(){
        //         effects.mentor_info.style.backgroundColor = "#fffef7";
        //     }, 1000); 
  
        //     effects.mentor_info.style.backgroundColor = "#328cc1";
        // });
  
        effects.cont_btn_2.addEventListener("click", function(event) {
            smooth_scroll("#hobby-content", 1200);
        });
  
        effects.linkedin_link.addEventListener("click", function(event){ 
          window.open("https://linkedin.com/in/akshaykamal/");
        });
  
        effects.email_link.addEventListener("click", function(event){ 
          window.open("mailto:kamal.akshay@att.net");
        });
  
        effects.fb_link.addEventListener("click", function(event){ 
          window.open("https://www.facebook.com/akshay.kamal.16");
        });
  
        effects.insta_link.addEventListener("click", function(event){ 
          window.open("https://www.instagram.com/akshayck/");
        });
  
        effects.reset_link.addEventListener("click", function(event) {
            smooth_scroll('#particles-js', 1200);
        });
    }
  
    return {
  
        setEventHandlers: set_event_handlers(),
  
    }
  
  })();
  
  
  particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 275,
          "density": {
            "enable": true,
            "value_area": 1700/*789.1476416322727*/
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "edge",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1.5,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "left",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  
  setup_module.setEventHandlers;