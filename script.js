let jq = $.noConflict();
//pagina carregada
jq("body").ready(() => {
    jq(".topicList").hide();
    jq(".topicList2").hide();
    jq("#h2").hide();
    jq("#h3").hide();
    jq("#section5 > h3").hide();
    jq("#section5 > p").hide();
    jq("#section5 > input").hide();
})


//animação topicos
jq(".topicButton").click(() => {
    jq(".topicList").slideToggle(500);
    jq(".arrowMenu").toggleClass("arrowMenuClick");
    jq(".topicButton").toggleClass("topicClick");
})

jq(".topicButton2").click(() => {
    jq(".topicList2").slideToggle(500);
    jq(".arrowMenu2").toggleClass("arrowMenuClick2");
    jq(".topicButton2").toggleClass("topicClick2");
})






//animação section1 letras
jq(".b1").click(() => {
    jq("#h1").slideDown(2000);
    jq("#h2").slideUp(2000);
    jq("#h3").slideUp(2000);
    
})

jq(".b2").click(() => {
    jq("#h2").slideDown(2000);
    jq("#h1").slideUp(2000);
    jq("#h3").slideUp(2000);
    
})

jq(".b3").click(() => {
    jq("#h3").slideDown(2000);
    jq("#h2").slideUp(2000);
    jq("#h1").slideUp(2000);
    
})

//animação section1 images
let slide =  document.getElementById("slideCircle");

let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");


function slide1() {
    slide.style.marginLeft = "0px";
    img2.style.transform = "translateX(0)";
    img3.style.transform = "translateX(0)";
    img4.style.transform = "translateX(0)";
}

function slide2() {
    slide.style.marginLeft = "48px";
    img2.style.transform = "translateX(-100%)";
    img3.style.transform = "translateX(-100%)";
    img4.style.transform = "translateX(-100%)";
}

function slide3() {
    slide.style.marginLeft = "98px";
    img2.style.transform = "translateX(-200%)";
    img3.style.transform = "translateX(-200%)";
    img4.style.transform = "translateX(-200%)";

}



//Scroll section2
function sec2() {
var $target = jq(".p2"),
    animationClass="p2-animation",
    offset = jq(window).height() * 3/4;

function animeScroll() {
    var documentTop = jq(document).scrollTop();

    $target.each(function() {
        var itemTop = jq(this).offset().top;
        if(documentTop > itemTop - offset) {
            jq(this).addClass(animationClass);
        }
    })
}

animeScroll();

jq(document).scroll(() => {
    animeScroll();
});

};

sec2();








//Scroll section3
function sec3() {
var $target = jq(".section3grid"),
    animationClass="section3grid-animation",
    offset = jq(window).height() * 3/4;

function animeScroll() {
    var documentTop = jq(document).scrollTop();

    $target.each(function() {
        var itemTop = jq(this).offset().top;
        if(documentTop > itemTop - offset) {
            jq(this).addClass(animationClass);
        }
    })
}

animeScroll();

jq(document).scroll(() => {
    animeScroll();
});
}

sec3();





//section4 animation

function sec4() {
var $target = jq(".imgS4"),
animationClass = "section4imgs-animation",
    offset = jq(window).height() * 3/4;
    
function animeScroll() {
    var documentTop = jq(document).scrollTop();
    
    $target.each(function() {
        var itemTop = jq(this).offset().top;
         if(documentTop > itemTop - offset) {
            jq(this).addClass(animationClass);
        }
    })
}
    
animeScroll();
    
jq(document).scroll(() => {
     animeScroll();
});
}
    
sec4();









//section5 animation

function sec5() {
    var $target = jq("#section5"),
        offset = jq(window).height() * 3/4;
        
    function animeScroll() {
        var documentTop = jq(document).scrollTop();
        
        $target.each(function() {
            var itemTop = jq(this).offset().top;
             if(documentTop > itemTop - offset) {
                jq("#section5 > h3").slideDown(1000);
                jq("#section5 > p").slideDown(1000);
                jq("#section5 > input").slideDown(1000);
            }
        })
    }
        
    animeScroll();
        
    jq(document).scroll(() => {
         animeScroll();
    });
    }
        
    sec5();