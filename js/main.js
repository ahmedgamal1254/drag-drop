$(document).ready(function (){
    let windowh=$(window).height(),  
    // it is used to get the height of this window 
        navbar=$('.navbar').innerHeight();
    // it is used to get the innerHeight (padding - height - margin - border) 
    // the down navbar   
        parent=$('.parent').innerHeight();
    // it is used to get the  innerHeight (padding - height - margin - border)
    // the upper navbar
     
   $('.carousel').height(windowh - (navbar + parent));  
   // it is the height of slider which we calculate it by
   // windowh - (navbar + parent)


   $('.container ul li').on('click',function (){
       $(this).addClass('active')
       $(this).siblings().removeClass("active");

       if($(this).data('class') === 'all')
       {
           $('.shuffle .col-md-4').show();
       }

       else
       {
           $('.shuffle .col-md-4').hide()
           $($(this).data('class')).parent().show();
       }
   })


   $('.a').on('click',function (){
       $(this).css({'backgroundColor':'red'})
       $(this).siblings('a').css({'backgroundColor':'transparent'})
   })

   $('#x').on('click',function (){
       $('.a').css({'backgroundColor':'transparent'})
   })
});
