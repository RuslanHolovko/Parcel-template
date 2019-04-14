import "./main.sass";

import $ from "jquery";
import slick from "slick-carousel";

import TweenMax from "gsap";


    var tl = new TimelineMax();
    
    console.log(tl);

    tl.fromTo('.anim', 2, {x : '0px'}, {x: '500px', ease: Expo.easeOut})
    tl.stop();

    $('.anim').on('click',function() {
        console.log('click');
        if(tl.reversed()){
            tl.play();            
        }else{
            tl.reverse();
        } 
//        tl.reversed() ? tl.play() : tl.reverse();
    });


    $('.slider-js').slick({
        dots: true,
        infinite: false
    });
   

