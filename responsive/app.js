
   
     $(document).ready(function(){
      $("#nav-icon").click(function(){
        $(".main-nav").show();
      });
      $("#close").click(function(){
        $(".main-nav").hide();
      });
    });





    $(document).ready(function(){
        $(".open1").click(function(){
          $("#skincare-list").show();
        });
        $(".open1").mouseleave(function(){
          $("#skincare-list").hide();
        });
      });
      
      $(document).ready(function(){
        $(".open2").click(function(){
          $("#haircare-list").show();
        });
        $(".open2").mouseleave(function(){
          $("#haircare-list").hide();
        });
      });
      
      $(document).ready(function(){
        $(".open3").click(function(){
          $("#bathbody-list").show();
        });
        $(".open3").mouseleave(function(){
          $("#bathbody-list").hide();
        });
      });

      $(document).ready(function(){
        $(".open4").click(function(){
          $("#wellness-list").show();
        });
        $(".open4").mouseleave(function(){
          $("#wellness-list").hide();
        });
      });

      $(document).ready(function(){
        $(".open5").click(function(){
          $("#wellness-list").show();
        });
        $(".open5").mouseleave(function(){
          $("#wellness-list").hide();
        });
      });

      $(document).ready(function(){
        $(".open6").click(function(){
          $("#mencare-list").show();
        });
        $(".open6").mouseleave(function(){
          $("#mencare-list").hide();
        });
      });

 
    
      /* account section */
     
    
      $(document).ready(function(){
        $("#account").click(function(){
            $("#form-box").show();
            $("#form-box").addClass("important");
        });
        $("#close").click(function(){
            $("#form-box").hide();
        });
      });
    
      $(document).ready(function(){
        $("#caccount").click(function(){
           $("#form-box").hide();
            $("#form-box2").show();
    
        });
        $("#closef").click(function(){
            $("#form-box2").hide();
        });
      });
      $(document).ready(function(){
        $("#alogin").click(function(){
          $("#form-box").show();
          $("#form-box2").hide();
        });
      });
    
    
      /*Questionnaire section */
    
      $(document).ready(function(){
        $("#sactive").click(function(){
          $("#hair-section").show();
          $("#sactive").addClass("striker2");
          $("#skin-section").hide();
          $("#active").addClass("striker1");
        });
        $("#active").click(function(){
          $("#skin-section").show();
          $("#hair-section").hide();
         
        });
      });
    
      /* Combo section */
    
    
      $(document).ready(function(){
        $("#next").click(function(){
          $("#skinkit").show();
          $("#anti").hide();
        });
        $("#prev").click(function(){
          $("#anti").show();
          $("#skinkit").hide();
        });
        $("#next").click(function(){
          $("#choco").show();
          $("#skinkit").hide();
        });
        $("#prev").click(function(){
          $("#skinkit").show();
          $("#choco").hide();
        });
      });
    
    
      $(document).ready(function(){
        $("#moveright").click(function(){
          $("#column1").hide();
          $("#column2").show();
        });
      });
    
      
      $(document).ready(function(){
        $("#benef").click(function(){
          $(".tab1").hide();
          $(".tab2").show();
        });
      });
    
        $("#ingd").click(function(){
          $(".tab2").hide();
          $(".tab3").show();
        });
     
    
        $("#usg").click(function(){
          $(".tab3").hide();
          $(".tab4").show();
        });
     
    
    
        $(document).ready(function(){
          $("#twounit").click(function(){
          $("#price").hide();
          $("pricetwo").show();
          });
        });
      