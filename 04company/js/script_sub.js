$(document).ready(function(){


    $(".lang div").click(function(){
        let i = $(this).index();
        $(".lang div").removeClass("active");
        $(this).addClass("active");

        if(i == 1){
            //$(".navbar ul li").eq(0).find("a").html("COMPANY")
            $(".navbar ul").html(`
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">ESG</a></li>
                        <li><a href="#">PROMOTION</a></li>
                        <li><a href="#">INVESTMENT</a></li>
                        <li><a href="#">CUSTOMER</a></li>
                        `)
        }else{
            //$(".navbar ul li").eq(0).find("a").html("회사소개")
            $(".navbar ul").html(`
                    <li><a href="#">농심소개</a></li>
                    <li><a href="#">지속가능경영</a></li>
                    <li><a href="#">홍보센터</a></li>
                    <li><a href="#">투자정보</a></li>
                    <li><a href="#">고객서비스</a></li>
                    `)
        }

    }); // lang


    $(window).scroll(function(){
        let scrollY = window.pageYOffset;
        console.log(scrollY)

        if(scrollY > 200){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed")
        }
    })

        const $toElem = $(".toggle");
        let chk = true;

        $toElem.click(function(){
            console.log("click")

            if(chk == true){
                $(this).addClass("active");
                $(".navbar").css({left:0})
                $(".lang").css("display","flex");
                $(".overLayer").show();
                chk = false;
            }else{
                $(this).removeClass("active");
                $(".navbar").css({left:"-100%"})
                $(".lang").hide();
                $(".overLayer").hide();
                chk = true;
            }
        })

        
        $(window).resize(function(){
            $(".toggle").removeClass("active");
            $(".navbar").removeAttr("style");
            $(".lang").removeAttr("style");
            $(".overLayer").hide();
        })


}); //ready



$(".tab li").click(function(){
    console.log($(this).index());

    var i = $(this).index();

    $(".tab li").removeClass("active");
    $(this).addClass("active");

    // $(".content div").hide();
    // $(".content div").eq(i).show();
    $(".content div").hide().eq(i).show();
});