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
  
        
    }

    return {

        setEventHandlers: set_event_handlers(),
  
    }
  
})();

setup_module.setEventHandlers;