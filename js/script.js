var $jq = jQuery.noConflict();
$jq(document).ready(function() { 

$('.portf1').on('click',function(){
$("#myModal1").css('display','block');
$('.close').css('display','block');
$('.close').on('click',function(){
$('#myModal1').css('display','none');
})
$('#myModal1').click(function() {
$('#myModal1').css('display','none');
});
});
        $('.portf2').on('click',function(){
        $("#myModal2").css('display','block');
        $('.close').css('display','block');
        $('.close').on('click',function(){
        $('#myModal2').css('display','none');
        })
        $('#myModal2').click(function() {
        $('#myModal2').css('display','none');
        });
        });
              $('.portf3').on('click',function(){
                $("#myModal3").css('display','block');
                $('.close').css('display','block');
                $('.close').on('click',function(){
                $('#myModal3').css('display','none');
                })
                $('#myModal3').click(function() {
                $('#myModal3').css('display','none');
                });
                });
                    $('.portf4').on('click',function(){
                      $("#myModal4").css('display','block');
                      $('.close').css('display','block');
                      $('.close').on('click',function(){
                      $('#myModal4').css('display','none');
                      })
                      $('#myModal4').click(function() {
                      $('#myModal4').css('display','none');
                      });
                      });
                            $('.portf5').on('click',function(){
                              $("#myModal5").css('display','block');
                              $('.close').css('display','block');
                              $('.close').on('click',function(){
                              $('#myModal5').css('display','none');
                              })
                              $('#myModal5').click(function() {
                              $('#myModal5').css('display','none');
                              });
                              });
                                    $('.portf6').on('click',function(){
                                      $("#myModal6").css('display','block');
                                      $('.close').css('display','block');
                                      $('.close').on('click',function(){
                                      $('#myModal6').css('display','none');
                                      })
                                      $('#myModal6').click(function() {
                                      $('#myModal6').css('display','none');
                                      });
                                      });
        

  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    arrows: true,
    dots:true,
    responsive:[
      {
        breakpoint: 1008,
        setting:{
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  
});
// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");


// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//   modal.style.display = "block";
// }


// span.onclick = function() {
//   modal.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }