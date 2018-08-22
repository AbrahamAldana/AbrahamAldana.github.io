// Abraham_Aldana
// script.js

//slide animation
    $(window).scroll(function() {
        $(".slideanim").each(function()
        {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + 600)
            {
                $(this).addClass("slide");
            }
        });
    });

//Smooth Scroll
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


// Listen to scroll to change header opacity class
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 150)
        {
            $('.navbar').css('background','#000');
        }
        else
        {
            $('.navbar').css('background','transparent');
        }
    });


// type writer animation hello
    document.addEventListener('DOMContentLoaded',function(event){
      // array with texts to type in typewriter
      var dataText = [ "Hello."];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to h1
         document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
            }, 125);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
       function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
          }, 100);
         }
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           // StartTextAnimation(i + 1);

         });
        }
      }
      // start the text animation
      StartTextAnimation(0);
    });


// type writer animation my name
    document.addEventListener('DOMContentLoaded',function(event){
          // array with texts to type in typewriter
          var dataText = [ "My name is Abraham."];

          // type one text in the typwriter
          // keeps calling itself until the text is finished
          function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
              // add next character to h1
             document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

              // wait for a while and call this function again for next character
              setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
                }, 125);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
              // call callback after timeout
              setTimeout(fnCallback, 700);
            }
          }
          // start a typewriter animation for a text in the dataText array
           function StartTextAnimation(i) {
             if (typeof dataText[i] == 'undefined'){
                setTimeout(function() {
                  StartTextAnimation(0);
              }, 100);
             }
             // check if dataText[i] exists
            if (i < dataText[i].length) {
              // text exists! start typewriter animation
             typeWriter(dataText[i], 0, function(){
               // after callback (and whole text has been animated), start next text
               // StartTextAnimation(i + 1);

             });
            }
          }
          // start the text animation
          setTimeout(function(){
              StartTextAnimation(0);
          }, 1700);
        });


// type writer animation I am a
    document.addEventListener('DOMContentLoaded',function(event){
          // array with texts to type in typewriter
          var dataText2 = [ "I am a  "];

          // type one text in the typwriter
          // keeps calling itself until the text is finished
          function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
              // add next character to h1
             document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

              // wait for a while and call this function again for next character
              setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
                }, 125);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
              // call callback after timeout
              setTimeout(fnCallback, 700);
            }
          }
          // start a typewriter animation for a text in the dataText array
           function StartTextAnimation(i) {
             if (typeof dataText2[i] == 'undefined'){
                setTimeout(function() {
                  StartTextAnimation(0);
              }, 100);
             }
             // check if dataText[i] exists
            if (i < dataText2[i].length) {
              // text exists! start typewriter animation
             typeWriter(dataText2[i], 0, function(){
               // after callback (and whole text has been animated), start next text
               // StartTextAnimation(i + 1);

             });
            }
          }
          // start the text animation
          setTimeout(function(){
              StartTextAnimation(0);
          }, 5000);
        });


// text cycle
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting)
        {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else
        {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 225 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt)
        {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '')
        {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };
    window.onload = function() {
        setTimeout(function()
        {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++)
            {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate)
                {
                    new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
        }, 6300);
    }


// sidenav
    // $(document).ready(function(){
	//     $('#icon').click(function(){
	// 	    $(this).toggleClass('open');
	//     });
    // });


// sidenav
    var flag = 0;
    function openNav() {
        if(flag == 1)
        {
            closeNav();
        }
        else
        {
            $(".example5").toggleClass("open");
            // window.addEventListener("scroll", scrollEventHandler, false);
            document.getElementById("mySidenav").style.width = "100%";
            flag = 1;
        }
    }
    function closeNav() {
        $(".example5").toggleClass("open");
        // window.addEventListener("scroll", scrollEventHandler, false);
        document.getElementById("mySidenav").style.width = "0";
        flag = 0;
    }


    //load at top of page on refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

/************************ implement in sidenav *****************/
// Disable scrolling
    var scrollEventHandler = function()
    {
        window.scroll(0, window.pageXOffset)
    }

// window.addEventListener("scroll", scrollEventHandler, false);
