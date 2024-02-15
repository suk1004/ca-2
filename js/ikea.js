$(document).ready(function(){
    
    // 스크롤바가 이동될 때마다 스크롤위치값 나타내기
    /* $(window).scroll(function(){
        $("#txt1").text($(this).scrollTop());
    }); */

    /* ----- 전체메뉴 gnb_button 클릭 -----*/
    // GNB 전체메뉴 왼쪽상단 클릭시
    $(".gnb_button").click(function(){ 
        $("#gnb_allmenu").stop().fadeIn("fast");
        $("#gnb_allmenu .ga_bg").animate({"left":"0px"},300);
    });
    // X 버튼 왼쪽상단 클릭시
    $(".ga_button").click(function(){
        $("#gnb_allmenu").stop().fadeOut("fast");
        $("#gnb_allmenu .ga_bg").animate({"left":"-400px"},300);
    });
        /* --- GNB 푸터 한국어 영어 lolUp */
        gnb_language=true; // CLOSE 버튼 보이는게 'true'하기위해
        $(".gF_text1").click(function(){

            $(".gF_text1 .material-icons").toggleClass("gF_text3");

            if(gnb_language){
                $(".gnbFooter ul").css({"height":"50px"});    
                gnb_language=false;            
            }else{
                $(".gnbFooter ul").css({"height":"0px"}); 
                gnb_language=true;
            }

        });
    /* ---------------------------------------- */
    
    /* ----- 사이드 점 스크롤 */
    $(window).scroll(function(){

        if($(this).scrollTop()>900){

            if($(this).scrollTop()>2095){

                if($(this).scrollTop()>3000){

                    if($(this).scrollTop()>4895){

                        if($(this).scrollTop()>6220){
                            $(".sd_design").removeClass("sd_active");
                            $(".sd_d6").toggleClass("sd_active");
                        }else{
                            $(".sd_design").removeClass("sd_active");
                            $(".sd_d5").toggleClass("sd_active");
                        }

                    }else{
                        $(".sd_design").removeClass("sd_active");
                        $(".sd_d4").toggleClass("sd_active");
                    }

                }else{
                    $(".sd_design").removeClass("sd_active");
                    $(".sd_d3").toggleClass("sd_active");
                }

            }else{
                $(".sd_design").removeClass("sd_active");
                $(".sd_d2").toggleClass("sd_active");
            }

        }else{
            $(".sd_design").removeClass("sd_active");
            $(".sd_d1").addClass("sd_active");
        }

    });

    $(".sd_d1").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"0"},"easeOutCirc");
    });
    $(".sd_d2").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"975"},"easeOutCirc");
    });
    $(".sd_d3").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"2200"},"easeOutCirc");
    });
    $(".sd_d4").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"3250"},"easeOutCirc");
    });
    $(".sd_d5").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"5220"},"easeOutCirc");
    });
    $(".sd_d6").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"6350"},"easeOutCirc");
    });



    /* ----- top button ----- */
     $("#top_btn button").click(function(){
        $("html,body").stop(true,true).animate({scrollTop:"0"},"easeOutQuart");
    });

    /* 스크롤 내렸을때 내려오는 탑메뉴 fixed */
    $(window).scroll(function(){

        if($(this).scrollTop()>800){
            $("#headerTop_fix").stop().css({"top":"0px","transition":"all 1s"});
            $("#top_btn").stop().fadeIn();
        }else{
            $("#headerTop_fix").stop().css({"top":"-35px","transition":"all 1s"});
            $("#top_btn").stop().fadeOut();
        }

    });

/* ------------------------------------------------------- */

/* ----- mainVisual ----- */
    // 스크롤시 반응하는 원 만들기 
    $(window).scroll(function(){

        if($(this).scrollTop()>200){
            
            if($(this).scrollTop()>500){
                
                if($(this).scrollTop()>799){
                    $(".mV_c1").css({"transform":"scale(7)","transition":"all 1.5s ease-out","opacity":"0.0"});
                }else{
                    $(".mV_c1").css({"transform":"scale(4)","transition":"all 1s ease-out","opacity":"0.2"});
                }
                
            }else{
                $(".mV_c1").css({"transform":"scale(1.7)","transition":"all 2s ease-in-out","opacity":"0.5"});
            }

        }else{
            $(".mV_c1").css(
                {"transform":"scale(1)","transition":"all 1.5s ease-in-out","opacity":"1"});
        }   

    });



    /* ----- 메인 비주얼 슬라이드 ----- */
    
    /* --- 메인 비주얼 이미지 1~9 --- */
    var mv_img_w= $(".mV_bg_img ul li").width();   //이미지의 가로너비
	var mv_img_n= $(".mV_bg_img ul li").length;  //이미지의 총개수  
	var mv_oldidx=0;  //기존이미지
	var mv_index=0;  //선택된 새이미지

    /* mv_page_num=$(".mV_bg_img ul li").index();
    $(".mV_page .mV_preText").text(mv_page_num+1); */ // 해당하는 페이지 번호

	$(".mV_bg_img ul li:last-of-type").prependTo(".mV_bg_img ul");
	    //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치	
	$(".mV_bg_img ul").css({ left:-mv_img_w}); 
	    //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치

	//index번째 비주얼이미지 출력하는 함수생성
	function mVslideImg(mv_index,mV){  //m은 prev와 next를 판단 

		if(mV==0){ //prev눌렀을때
		//이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
			$(".mV_bg_img ul").stop(true,true).animate({
				left:"+="+mv_img_w+"px"},600,"easeOutCubic",function(){
				$(".mV_bg_img ul li:last-of-type").prependTo(".mV_bg_img ul");				
				$(".mV_bg_img ul").css({ left:-mv_img_w }); //최종목적지
			});
		
		}else{ //next눌렀을때
		//다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
			$(".mV_bg_img ul").stop(true,true).animate({
				left:"-="+mv_img_w+"px"},600,"easeOutCubic",function(){
				$(".mV_bg_img ul li:first").appendTo(".mV_bg_img ul");				
				$(".mV_bg_img ul").css({ left:-mv_img_w }); //최종목적지
			});
		
		}
		mv_oldidx=mv_index;
	}

	//슬라이드 자동함수 생성
	function mVslideAuto(){
		mv_index++;
		if(mv_index==mv_img_n){ 
			mv_index=0;
		}
		mVslideImg(mv_index,1);
	}

	mVauto=setInterval(mVslideAuto,5000);
    /* ------------------------------------------------------------ */
    /* ----- 메인비주얼 페이지 번호 ------ */
    var page_img_h= $(".mV_preText ul li").height();   //번호전체의 세로너비
	var page_img_n= $(".mV_preText ul li").length;  //번호전체의 총개수  
	var page_oldidx=0;  //기존 번호
	var page_index=0;  //선택된 새 번호

	$(".mV_preText ul li:last").prependTo(".mV_preText ul");
	//번호의 마지막을 ul 안의 가장 앞으로 배치	
	$(".mV_preText ul").css({ top:-page_img_h}); 
	//번호 하나의 세로길이 만큼 윗쪽으로 배치


	//index번째 비주얼이미지 출력하는 함수생성
	function page_slideImg(page_index,page_m){  //m은 prev와 next를 판단 

		if(page_m==0){ //prev눌렀을때
		//이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
			$(".mV_preText ul").stop(true,true).animate({
				top:"+="+page_img_h+"px"},400,"linear",function(){
				$(".mV_preText ul li:last").prependTo(".mV_preText ul");				
				$(".mV_preText ul").css({ top:-page_img_h }); //최종목적지
			});
			
		}else{ //next눌렀을때
		//다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
			$(".mV_preText ul").stop(true,true).animate({
				top:"-="+page_img_h+"px"},400,"linear",function(){
				$(".mV_preText ul li:first").appendTo(".mV_preText ul");				
				$(".mV_preText ul").css({ top:-page_img_h }); //최종목적지
			});
			
		}
		page_oldidx=page_index;
	}


	//슬라이드 자동함수 생성
	function page_slideAuto(){
		page_index++;
		if(page_index==page_img_n){ 
			page_index=0;
		}
		page_slideImg(page_index,1);
	}

	page_auto=setInterval(page_slideAuto,5000);
    /* ------------------------------------------------------------- */
    /* ----- 이미지 옆 텍스트 tag text  ----- */
     var mv_tagText_w= $(".mV_tagText ul li").width();   //이미지의 가로너비
     var mv_tagText_n= $(".mV_tagText ul li").length;  //이미지의 총개수  
     var mv_tagText_oldidx=0;  //기존이미지
     var mv_tagText_index=0;  //선택된 새이미지
 
    /*  mv_page_num=$(".mV_bg_img ul li").index();
     $(".mV_page .mV_preText").text(mv_page_num+1); // 해당하는 페이지 번호
  */
 
     $(".mV_tagText ul li:last").prependTo(".mV_tagText ul");
         //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치	
     $(".mV_tagText ul").css({ left:-mv_tagText_w}); 
         //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치
 
     //index번째 비주얼이미지 출력하는 함수생성
     function mV_tagText_slide(mv_tagText_index,mvtagText){  //m은 prev와 next를 판단 
 
         if(mvtagText==0){ //prev눌렀을때
         //이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
             $(".mV_tagText ul").stop(true,true).animate({
                 left:"+="+mv_tagText_w+"px"},600,"easeOutCubic",function(){
                 $(".mV_tagText ul li:last").prependTo(".mV_tagText ul");				
                 $(".mV_tagText ul").css({ left:-mv_tagText_w }); //최종목적지
             });
         
         }else{ //next눌렀을때
         //다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
             $(".mV_tagText ul").stop(true,true).animate({
                 left:"-="+mv_tagText_w+"px"},600,"easeOutCubic",function(){
                 $(".mV_tagText ul li:first").appendTo(".mV_tagText ul");
                 $(".mV_tagText ul").css({ left:-mv_tagText_w }); //최종목적지
             });
         
         }
         mv_tagText_oldidx=mv_tagText_index;
     }
 
 
     //슬라이드 자동함수 생성
     function mV_tagText_slideAuto(){
         mv_tagText_index++;
         if(mv_tagText_index==mv_tagText_n){ 
             mv_tagText_index=0;
         }
         mV_tagText_slide(mv_tagText_index,1);
     }
 
     mV_tagText_auto=setInterval(mV_tagText_slideAuto,5000);

    /* --------------------------------------------------------- */
     
	//이전버튼 클릭
	$(".mV_B_pre").click(function(){
        ////////////////////////////////////
		// 메인 비주얼 이미지
        clearInterval(mVauto);

		mv_index--;
		if(mv_index<0){
            mv_index=mv_img_n-1;       
        } 
        mVslideImg(mv_index,0);
        mVauto=setInterval(mVslideAuto,5000);
        
        /////////////////////////////////////
        // 메인 비주얼 태그 택스트
        clearInterval(mV_tagText_auto);

		mv_tagText_index--;
		if(mv_tagText_index<0){
            mv_tagText_index=mv_tagText_n-1;
        } 
        mV_tagText_slide(mv_tagText_index,0);
        mV_tagText_auto=setInterval(mV_tagText_slideAuto,5000);
        
        /////////////////////////////////////
        // 나타나는 숫자
        clearInterval(page_auto);

		page_index--;
		if(page_index<0){
            page_index=page_img_n-1;       
        } 
        page_slideImg(page_index,0);

		page_auto=setInterval(page_slideAuto,5000);

	});


	//다음버튼 클릭
	$(".mV_B_nex").click(function(){
        //////////////////////////////////////
		// 메인 비주얼 이미지
        clearInterval(mV_tagText_auto);

		mv_tagText_index++;
		if(mv_tagText_index>=mv_tagText_n){
            mv_tagText_index=0;      
       	}
       	mV_tagText_slide(mv_tagText_index,1);
        mV_tagText_auto=setInterval(mV_tagText_slideAuto,5000);
        /////////////////////////////////////
        // 메인 비주얼 태그 택스트
        clearInterval(mVauto);

		mv_index++;
		if(mv_index>=mv_img_n){
            mv_index=0;      
       	}
       	mVslideImg(mv_index,1);
        mVauto=setInterval(mVslideAuto,5000);
        //////////////////////////////////////////////////////
        // 나타나는 숫자
        clearInterval(page_auto);

		page_index++;
		if(page_index>=page_img_n){
            page_index=0;      
       	}
       	page_slideImg(page_index,1);

		page_auto=setInterval(page_slideAuto,5000);

	});

/* ----------------------------------------------------- */

    /* 컨텐츠 1 : 슬라이드 */
    var c1_cv_img_w= $(".c1_content_visual ul li").width();   // li의 가로너비
	var c1_cv_img_n= $(".c1_content_visual ul li").length;  // li의 총개수  
	var c1_cv_oldidx=0;  //기존 li
	var c1_cv_index=0;  //선택된 new li

	$(".c1_content_visual ul li:last").prependTo(".c1_content_visual ul");
	$(".c1_content_visual ul").css({ left:-c1_cv_img_w}); 

    var c1_ub_n=$(".c1_content_visual ul li").index(); // 언더바 이동 횟수를 비주얼 이미지 갯수랑 맞춤
    var c1_ub_w=$(".c1_ub_object").width(); // 언더바 오브젝트 가로너비
    // $(".c1_ub_object").css({left:c1_ub_w*(c1_ub_n+1)});

	//index번째 비주얼이미지 출력하는 함수생성
	function c1_cv_slideImg(c1_cv_index,s){  // s 는 prev와 next를 판단 

		if(s==0){ //prev눌렀을때
		//이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
			$(".c1_content_visual ul").stop(true,true).animate({
				left:"+="+c1_cv_img_w+"px"},400,"easeOutQuart",function(){
				$(".c1_content_visual ul li:last").prependTo(".c1_content_visual ul");
				$(".c1_content_visual ul").css({ left:-c1_cv_img_w }); //최종목적지
			});

		}else{ //next눌렀을때
		//다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
			$(".c1_content_visual ul").stop(true,true).animate({
				left:"-="+c1_cv_img_w+"px"},400,"easeOutQuart",function(){
				$(".c1_content_visual ul li:first").appendTo(".c1_content_visual ul");
				$(".c1_content_visual ul").css({ left:-c1_cv_img_w }); //최종목적지
			});
                        
		}
        // 언더바 오브젝트 위치
        $(".c1_underBar .c1_ub_bg .c1_ub_object").stop(true,true).animate({ left:+c1_ub_w*(c1_cv_index) });

		c1_cv_oldidx=c1_cv_index;
	}

	//슬라이드 자동함수 생성
	function c1_cv_slideAuto(){
		c1_cv_index++;
		if(c1_cv_index==c1_cv_img_n){ 
			c1_cv_index=0;
		}
		c1_cv_slideImg(c1_cv_index,1); // 자동 next 눌렀을때
	}

	c1_cv_auto=setInterval(c1_cv_slideAuto,5500);

    // 마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행
    $(".c1_content_visual ul li").hover(function(){ 
        clearInterval(c1_cv_auto);  
    }, function(){
        c1_cv_auto=setInterval(c1_cv_slideAuto,5500);
    });


	//이전버튼 클릭
	$(".c1_C_pre").click(function(){

		clearInterval(c1_cv_auto);

		c1_cv_index--;
		if(c1_cv_index<0){
            c1_cv_index=c1_cv_img_n-1;
        }
        c1_cv_slideImg(c1_cv_index,0);

		c1_cv_auto=setInterval(c1_cv_slideAuto,5500);

	});


	//다음버튼 클릭
	$(".c1_C_nex").click(function(){

		clearInterval(c1_cv_auto);

		c1_cv_index++;
		if(c1_cv_index>=c1_cv_img_n){
            c1_cv_index=0;      
       	}
       	c1_cv_slideImg(c1_cv_index,1);

		c1_cv_auto=setInterval(c1_cv_slideAuto,5500);

	});

/* ------------------------------------------------------ */

/* ----- 컨텐츠 2 : 추천 제품 ----- */
    
    /* ----- 컨텐츠 2 : 스크롤 효과 ----- */
    // 스크롤시 반응하는 원 만들기 
    $(window).scroll(function(){

        if($(this).scrollTop()>1350){
            
            if($(this).scrollTop()>1600){
                
                if($(this).scrollTop()>1800){
                    
                    if($(this).scrollTop()>2200){
                        
                        if($(this).scrollTop()>2400){
                            $(".c2_circle").css({
                                "transform":"rotate(500deg)"
                                ,"transition":"all 1s ease"
                                ,"opacity":"1"
                            });
                        }else{
                            $(".c2_circle").css({
                                "transform":"rotate(400deg)"
                                ,"transition":"all 1s ease"
                                ,"opacity":"1"
                            });
                        }
                       
                    }else{
                        $(".c2_circle").css({
                            "transform":"rotate(300deg)"
                            ,"transition":"all 1s ease"
                            ,"opacity":"1"
                        });
                    }
                    
                }else{
                    $(".c2_circle").css({
                        "transform":"rotate(200deg)"                        
                        ,"transition":"all 1s ease"
                        ,"opacity":"1"
                    });
                }
                
            }else{
                $(".c2_circle").css({
                    "transform":"rotate(100deg)"                    
                    ,"transition":"all 1s ease"
                    ,"opacity":"1"
                });
            }

        }else{
            $(".c2_circle").css({
                "transform":"rotate(-50deg)"
                ,"transition":"all 1s ease"
                ,"opacity":"1"
            });
        }   

    });

        /* --- 컨텐츠 2 : 슬라이드 좌우버튼 */
    var c2_list_w= $(".c2_cv_list").width(); /* w 1200px  4번*/

    $(".c2_C_pre").click(function(){        
        // var _scrollX=$(".c2_cv_list").stop(true,true).scrollLeft();
        // $(".c2_cv_list").stop(true,true).scrollLeft(_scrollX-1200);
        $(".c2_cv_list").stop(true,true).animate({scrollLeft:"-="+c2_list_w+"px"},500,"easeOutCubic");
    });
    $(".c2_C_nex").click(function(){
        // var _scrollX=$(".c2_cv_list").stop(true,true).scrollLeft();
        // $(".c2_cv_list").stop(true,true).scrollLeft(_scrollX+1200);
        $(".c2_cv_list").stop(true,true).animate({scrollLeft:"+="+c2_list_w+"px"},500,"easeOutCubic");
    });

/* ------------------------------------------------------------ */
/* ----- 컨텐츠 3 : 신제품을 만나보세요 ----- */

    /* ----- 컨텐츠 3 : 스크롤 시 효과 ----- */
    $(window).scroll(function(){

        if($(this).scrollTop()>2700){

            if($(this).scrollTop()>2890){
                
                if($(this).scrollTop()>3120){
                    
                    if($(this).scrollTop()>3200){
                        // $(".c3_bg").css({
                        //     marginTop:"0px"
                        //     ,transition:"all 0.5s ease-out"
                        // });
                    }else{
                        $(".c3_bg").css({
                            marginTop:"0px"
                            ,opacity:"1"
                            ,transition:"all 1s ease-out"
                        });
                        $(".c3_T_h2_line").css({
                            width:"290px"
                            ,transition:"all 0.8s ease-out"
                        }); 
                        $(".c3_T_h3_line").css({
                            width:"385px"
                            ,transition:"all 0.8s ease-out"               
                        });
                        $(".c3_T_line").css({
                            width:"100%"
                            ,transition:"all 1.8s ease-out"
                        });
                    }

                }else{
                    $(".c3_bg").css({
                        marginTop:"30px"
                        ,opacity:"0.93"
                        ,transition:"all 1.4s ease-out"
                    });
                    $(".c3_T_h2_line").css({
                        width:"140px"
                        ,transition:"all 0.8s ease-out"
                    }); 
                    $(".c3_T_h3_line").css({
                        width:"180px"
                        ,transition:"all 0.8s ease-out"               
                    });
                    $(".c3_T_line").css({
                        width:"50%"
                        ,transition:"all 1.3s ease-out"
                    });
                }
                
            }else{
                $(".c3_bg").css({
                    marginTop:"200px"
                    ,opacity:"0.65"
                    ,transition:"all 1.2s ease-out"    
                });
                $(".c3_T_h2_line").css({
                    width:"65px"
                    ,transition:"all 0.8s ease-out"               
                });
                $(".c3_T_h3_line").css({
                    width:"95px"
                    ,transition:"all 0.8s ease-out"               
                });
                $(".c3_T_line").css({
                    width:"30%"
                    ,transition:"all 1s ease-out"
                });
            }

        }else{
            $(".c3_bg").css({
                marginTop:"280px"
                ,opacity:"0.25"
                ,transition:"all 0.7s ease-out"
            });
        }

    });

    ////////////////////////////////////
    /* 컨텐츠 3 : 비주얼 (이미지 2개) */
        /* --- 버튼 클릭 --- */
    var c3_cv_w= $(".c3_cv_1").width();

    $(".c3_bt_right").show();
           
    $(".c3_bt_right").click(function(){
        $(".c3_cv_bg").stop(true,true).animate({scrollLeft:"+="+c3_cv_w+"px"},500,"easeOutCubic");
        $(".c3_bt_left").stop().fadeIn();
        $(".c3_bt_right").fadeOut("fast");
    });           
    
    $(".c3_bt_left").click(function(){
        $(".c3_cv_bg").stop(true,true).animate({scrollLeft:"-="+c3_cv_w+"px"},500,"easeOutCubic");
        $(".c3_bt_left").fadeOut("fast");
        $(".c3_bt_right").stop().fadeIn();
    });
    
    /* --- 이미지 1 --- */
    $(".c3_1_ob1").show();
    $(".c3_cv_1").stop(true,true).mouseleave(function(){
        $(".c3_1_ob1").stop(true,true).fadeIn("easeOutQuart");
    });

    /* ======================= */
    /* 마우스 오버 시 각 효과 */
        /* 1 */
    var c3_1_index= $(".c3_1_ob").index();
    
    /* 1-1 */
    $(".c3_1_circle_1").stop(true,true).hover(function(){
        $(".c3_1_ob1").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_1_ob1").stop(true,true).fadeOut();
    });

    $(".c3_1_ob1").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });
    
    /* 1-2 */
    $(".c3_1_circle_2").stop(true,true).hover(function(){
        $(".c3_1_ob").stop(true,true).fadeOut();
        $(".c3_1_ob2").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_1_ob2").stop(true,true).fadeOut();
    });

    $(".c3_1_ob2").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });

    /* 1-3 */
    $(".c3_1_circle_3").stop(true,true).hover(function(){
        $(".c3_1_ob").stop(true,true).fadeOut();
        $(".c3_1_ob3").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_1_ob3").stop(true,true).fadeOut();
    });

    $(".c3_1_ob3").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });


     /* --- 이미지 2 --- */
     $(".c3_2_ob1").show();
     $(".c3_cv_2").stop(true,true).mouseleave(function(){
         $(".c3_2_ob1").stop(true,true).fadeIn("easeOutQuart");
     });
 
     /* ======================= */
     /* 마우스 오버 시 각 효과 */
        /* 2 */
    var c3_1_index= $(".c3_2_ob").index();
    
    /* 2-1 */
    $(".c3_2_circle_1").stop(true,true).hover(function(){
        $(".c3_2_ob1").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_2_ob1").stop(true,true).fadeOut();
    });

    $(".c3_2_ob1").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });
    
    /* 2-2 */
    $(".c3_2_circle_2").stop(true,true).hover(function(){
        $(".c3_2_ob").stop(true,true).fadeOut();
        $(".c3_2_ob2").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_2_ob2").stop(true,true).fadeOut();
    });

    $(".c3_2_ob2").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });

    /* 2-3 */
    $(".c3_2_circle_3").stop(true,true).hover(function(){
        $(".c3_2_ob").stop(true,true).fadeOut();
        $(".c3_2_ob3").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_2_ob3").stop(true,true).fadeOut();
    });

    $(".c3_2_ob3").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });

    /* 2-4 */
    $(".c3_2_circle_4").stop(true,true).hover(function(){
        $(".c3_2_ob").stop(true,true).fadeOut();
        $(".c3_2_ob4").stop(true,true).fadeIn("easeOutQuart");
    }, function(){
        $(".c3_2_ob4").stop(true,true).fadeOut();
    });

    $(".c3_2_ob4").stop(true,true).hover(function(){
        $(this).stop(true,true).show();
    }, function(){
        $(this).stop(true,true).fadeOut();
    });
/* --------------------------------------------------------------- */
/* ----- 컨텐츠 4 : 지속가능한 내일을 위한 솔루션 ------ */
    /* ----- 컨텐츠 4 : 스크롤 시 효과 ----- */
    $(window).scroll(function(){

        if($(this).scrollTop()>4400){

            if($(this).scrollTop()>4600){
                
                if($(this).scrollTop()>4800){
                    
                    if($(this).scrollTop()>5000){
                        $(".c4_oL").stop(true,true).css({marginLeft:"0px",transition:"all 2.5s"});
                        $(".c4_oR").stop(true,true).css({marginRight:"0px",transition:"all 2.5s"});
                        $(".c4_T_h3_line").css({
                            width:"385px"
                            ,transition:"all 0.8s ease-out"
                        });
                    }else{
                        $(".c4_bg").css({
                            marginTop:"0px"
                            ,opacity:"1"
                            ,transition:"all 1s ease-out"
                        });                        
                        $(".c4_T_h3_line").css({
                            width:"310px"
                            ,transition:"all 0.8s ease-out"               
                        });
                        $(".c4_T_line").css({
                            width:"100%"
                            ,transition:"all 1.8s ease-out"
                        });
                        $(".c4_oL").stop(true,true).css({marginLeft:"-=300px",transition:"all 0.5s"});
                        $(".c4_oR").stop(true,true).css({marginRight:"-=300px",transition:"all 0.5s"});
                    }

                }else{
                    $(".c4_bg").css({
                        marginTop:"30px"
                        ,opacity:"0.93"
                        ,transition:"all 1.4s ease-out"
                    });                    
                    $(".c4_T_h3_line").css({
                        width:"145px"
                        ,transition:"all 0.8s ease-out"               
                    });
                    $(".c4_T_line").css({
                        width:"50%"
                        ,transition:"all 1.3s ease-out"
                    });
                }
                
            }else{
                $(".c4_bg").css({
                    marginTop:"200px"
                    ,opacity:"0.65"
                    ,transition:"all 1.2s ease-out"    
                });
                $(".c4_T_h3_line").css({
                    width:"60px"
                    ,transition:"all 0.8s ease-out"               
                });
                $(".c4_T_line").css({
                    width:"30%"
                    ,transition:"all 1s ease-out"
                });
            }

        }else{
            $(".c4_bg").css({
                marginTop:"280px"
                ,opacity:"0.25"
                ,transition:"all 0.7s ease-out"
            });
        }

    });


    /* --- 컨텐츠 4 : 이전, 다음 버튼 --- */
    var c4_cv_w= $(".c4_cv").width(); /* w 1200px  4번*/
    var c4_cv_w1=800 /* 내가 길이조정 */

    $(".c4_pre").click(function(){        
        // var _scrollX=$(".c2_cv_list").stop(true,true).scrollLeft();
        // $(".c2_cv_list").stop(true,true).scrollLeft(_scrollX-1200);
        $(".c4_cv").stop(true,true).animate({scrollLeft:"-="+c4_cv_w1+"px"},800,"easeOutCubic");
    });
    $(".c4_nex").click(function(){
        // var _scrollX=$(".c2_cv_list").stop(true,true).scrollLeft();
        // $(".c2_cv_list").stop(true,true).scrollLeft(_scrollX+1200);
        $(".c4_cv").stop(true,true).animate({scrollLeft:"+="+c4_cv_w1+"px"},800,"easeOutCubic");
    });


    /* ----- 컨텐츠 5 : 스크롤 반응형 원 ----- */
    $(window).scroll(function(){

        if($(this).scrollTop()>5500){

            if($(this).scrollTop()>5750){
                
                if($(this).scrollTop()>6000){
                    
                    if($(this).scrollTop()>6200){
                        $(".c5_circle").css({
                            transform:"scale(1)"
                            ,transition:"all 1.5s ease-out"
                            ,opacity:"1"
                         });
                    }else{
                        $(".c5_circle").css({
                            transform:"scale(1.5)"
                            ,transition:"all 1.5s ease-out"
                            ,opacity:"0.8"
                         });
                    }

                }else{
                    $(".c5_circle").css({
                        transform:"scale(3)"
                        ,transition:"all 1s ease-out"
                        ,opacity:"0.7"
                     });
                }
                
            }else{
                $(".c5_circle").css({
                    transform:"scale(7)"
                    ,transition:"all 1s ease-out"
                    ,opacity:"0.6"
                 });
            }

        }else{
           $(".c5_circle").css({
               transform:"scale(9)"
               ,transition:"all 1s ease-out"
               ,opacity:"0.4"
            });
        }

    });

    /* --- 푸터 윗 배경 --- */
    $(window).scroll(function(){

        if($(this).scrollTop()>7300){
            $(".footer_bb_1").stop().fadeIn(2500,"easeOutBack");
        }else{
            $(".footer_bb_1").stop().fadeOut(800,"easeOutCubic");
        }

    });



});