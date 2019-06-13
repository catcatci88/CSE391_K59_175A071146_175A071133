

               $(".album-image img").each(function () { 
                   var newHref = $(this).attr("src"); 
                   var newAlt = $(this).attr("alt"); 
                   $(this).wrap("<a class='fancybox' rel='gallery' title='" + newAlt + "' alt='" + newAlt + "' href='" + newHref + "'/>"); 
               }); 
               
               
     			 $(".tin-chinh img").each(function () { 
                   var newHref = $(this).attr("src"); 
                   var newAlt = $(this).attr("alt"); 
                   $(this).wrap("<a class='fancybox' rel='gallery' title='" + newAlt + "' alt='" + newAlt + "' href='" + newHref + "'/>"); 
               }); 




               $(".fancybox").fancybox({ 

                   maxWidth: 800, 
                   maxHeight: 600, 
                   fitToView: false, 
                   width: '70%', 
                   height: '70%', 
                   autoSize: false, 
                   closeClick: false, 
                   openEffect: 'none', 
                   closeEffect: 'none', 
                   prevEffect: 'none', 
                   nextEffect: 'none', 
                   closeBtn: false, 
                   helpers: { 
                       title: { type: 'inside' }, 
                       buttons: {} 
                   } 
               }); 

