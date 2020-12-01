$( document ).ready(function() {
    var words = [
    '<a href="https://www.youtube.com/watch?v=wPrdBk28bfE&ab_channel=VEVO" target="_blank">Man with the bag</a>', 
    '<a href="https://www.youtube.com/watch?v=Rnil5LyK_B0&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=49&ab_channel=DeanMartinVEVO" target="_blank">Let it snow!</a>', 
    '<a href="https://www.youtube.com/watch?v=gFtb3EtjEic&ab_channel=claudettecolbert60" target="_blank">Wonderful time of the year</a>', 
    '<a href="https://www.youtube.com/watch?v=1xy34BYxXsw&ab_channel=RebelWarrior" target="_blank">Underneath the tree</a>', 
    '<a href="https://www.youtube.com/watch?v=3WY5dwSEcZo&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=29&ab_channel=KylieMinogue-Topic" target="_blank">Santa baby</a>', 
    '<a href="https://www.youtube.com/watch?v=O1jrutQ_gHo&ab_channel=AlexFardales"  target="_blank">Feliz Navidad</a>',
    '<a href="https://www.youtube.com/watch?v=uSjq7x67kzM&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=2&ab_channel=ChrisRea" target="_blank">Driving home for Christmas</a>', 
    '<a href="https://www.youtube.com/watch?v=LRP8d7hhpoQ&ab_channel=PTXofficial" target="_blank">Hallelujah</a>', 
    '<a href="https://www.youtube.com/watch?v=uA4STm4hx7Q&ab_channel=GwenStefaniVEVO" target="_blank">You make it feel like Christmas</a>', 
    '<a href="https://www.youtube.com/watch?v=yXQViqx6GMY&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=5&ab_channel=MariahCareyVEVO" target="_blank">All I want for Christmas is you</a>', 
    '<a href="https://www.youtube.com/watch?v=qpO64qgfu0Q&ab_channel=SerialUlice" target="_blank">Pasli ovce valasi</a>', 
    '<a href="https://www.youtube.com/watch?v=ElmsIGT85tI&ab_channel=SiaVEVO" target="_blank">Candy cane lane</a>', 
    '<a href="https://www.youtube.com/watch?v=r7dhSn8bnLg&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=11&ab_channel=KylieMinogue-Topic" target="_blank">Santa Claus is coming to town</a>', 
    '<a href="https://www.youtube.com/watch?v=g59bV1_H16I&ab_channel=Sl%C3%A1vkaDolnikova" target="_blank">Ticha noc</a>', 
    '<a href="https://www.youtube.com/watch?v=j-_1-uJ6Ml4&ab_channel=leonalewisVEVO" target="_blank">One more sleep</a>',  
    '<a href="https://www.youtube.com/watch?v=flA5ndOyZbI&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=22&ab_channel=JohnLennon-Topic" target="_blank">Happy Xmas (War Is Over)</a>', 
    '<a href="https://www.youtube.com/watch?v=MVu4c7dhDRE&ab_channel=H.EnriqueCh%C3%A1vez" target="_blank">Run Rudolph run</a>',
    '<a href="https://www.youtube.com/watch?v=L1KEJzfsQEY&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=42&ab_channel=AvaMax" target="_blank">Christmas without you</a>',
    '<a href="https://www.youtube.com/watch?v=4QJKhKNWy5o&ab_channel=DanAndShay" target="_blank">Take me home for Christmas</a>',
    '<a href="https://www.youtube.com/watch?v=a6DlsDZ_qJs&ab_channel=TVNova" target="_blank">Ve vasi ulici</a>',
    '<a href="https://www.youtube.com/watch?v=XZTzai1H9DM" target="_blank">Sleigh Ride</a>',
    '<a href="https://www.youtube.com/watch?v=Z0ajuTaHBtM&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=13&ab_channel=BobbyHelms-Topic" target="_blank">Jingle Bell Rock</a>', 
    '<a href="https://www.youtube.com/watch?v=bwNV7TAWN3M&list=PLeDakahyfrO_xD3xuEkFjhTQEIH9rqC7p&index=7&ab_channel=WhamVEVO" target="_blank">Last Christmas</a>', 
    '<a href="https://www.youtube.com/watch?v=SGeyOfawKtA&ab_channel=JayTeeWee" target="_blank">Tri orisky</a>', 
    '<a href="final2.html" target="_blank">Your turn!</a>',

];
    var message = "";
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var scrolled = false;
    var timeDelay = 200;
  
    // function to reveal message
    var cardReveal = function() {
      $("#message").text(message).show();
    }  
  
    //day=25; // uncomment to skip to 25
  
    // Only work in December
    if(month === 12) {
      // Loop through each calendar window
      $("li").each( function( index ) {
        var adventwindow = index + 1;
        var item = $(this);
  
        // Open past windows
        if( day !== adventwindow && adventwindow < day ) {
          window.setTimeout(function(){
            item.children(".door").addClass("open");
          }, timeDelay);
        }
  
        // timeout offset for past window opening animation
        timeDelay += 100;
  
        // Add words so far to message variable
        if( adventwindow <= day ) {
          var word = words[index];
          $(this).append('<div class="revealed">' + word + '</div>');
          message = message + " " + word;
        }
  
        // Add jiggle animation to current day window
        if(adventwindow === day) {
          $(this).addClass("current");
          $(this).addClass("jiggle");
        }
  
        // On clicking a window, toggle it open/closed and
        // handle other things such as removing jiggle and 25th
        $(this).on("click", function() {
          if(adventwindow <= day) { 
            $(this).children(".door").toggleClass("open");
          }
  
          $(this).removeClass("jiggle");
  
          // If 25th, can show the message
          if(day >= 25 && adventwindow === 25) {
            messageReveal();
  
            // Animate scroll to message if not already done
            if(!scrolled) {
              $('html, body').animate({
                scrollTop: $("#message").offset().top
              }, 2000);
              scrolled = true;
            }
          }
        });
  
      });
  
      // If beyond 24, show message
      if(day >= 26){
        messageReveal();
      }
  
    }
  
  });

  
  alert("Don't be a Grinch")
