/**
 * Created by Administrator on 2016/6/20.
 */
$(window).ready(function () {
    var w = $('.background').width();
    $('.background').height(0.5625*w);
    $('.background').width(w);
    var I=0;
    var J=0;
    var x=0;
    everyMonth(0);

    $('.last').click(function () {
        $('.calendar').animate({opacity: 0},100);
        setTimeout(function () {

            $('.calendar').animate({opacity: 1},100);
            x--;
            console.log(x);
            if(x<0){
                alert("这是第一个");
                x=0;
            }else{

                $('td p').removeClass("P-click");
                $('tr td p').removeClass('P-hidden');
                $('.week').text('每天在改变');
                $('.data').text('UPC');
                everyMonth(x);
            }
        },200);


    });
    $('.next').click(function () {
        $('.calendar').animate({opacity: 0},100);
        setTimeout(function () {
            $('.calendar').animate({opacity: 1},100);
            x++;
            console.log(x);
            if(x>5){
                alert("这是最后一个");
                x=5;
            }else{
                $('td p').removeClass("P-click");
                $('tr td p').removeClass('P-hidden');
                $('.week').text('每天在改变');
                $('.data').text('UPC');
                everyMonth(x);
            }
        },200);
    });

       $('tr td p').on("click",function () {
           $('.week,.data').animate({opacity: 0},210);
           setTimeout(function () {
               $('.week,.data').animate({opacity: 1},200);
           },200);
               var i = $(this).parent('td').index()+($(this).parent('td').parent('tr').index()-2)*7;
               console.log(i);
               console.log($(this).parent('td').index());
               console.log($(this).parent('td').parent('tr').index());

               $('td p').removeClass("P-click");
               $(this).addClass('P-click');
               week = whichWeek(x,i);
               $('.week').text("这是第"+week+"周");
               $('.data').text(MONTH[x][i]);

       });



function returnMonth(x) {
    if(x==1)
        return "九月";
    else if(x==2)
        return "十月";
    else if(x==3)
        return "十一月";
    else if(x==4)
        return "十二月";
    else if(x==5)
        return "一月";
    else if(x==6)
        return "二月";
}



    function returnNUM(x) {
        if(x==1)
            return "一";
        else if(x==2)
            return "二";
        else if(x==2)
            return "三";
        else if(x==2)
            return "四";
        else if(x==2)
            return "五";
        else if(x==2)
            return "六";
        else if(x==0)
            return "日";
    }

function whichWeek(x,i){
    var t=0;
    for(var a=0;a<=x;a++){
        for(var b=0;b<MONTH[a].length;b++){
            if(MONTH[a][b]!=0){
                t++;
            }

             if(a==x&&b==i){
             if(t%7==0)
             return Math.floor(t/7);
             else
             return Math.floor(t/7)+1;
             }



        }
    }
}


    function everyMonth(x) {
        var t=0;
        for(var i=0;i<42;i++){
            if(i%7==0)
                t++;
if(x==0)
    $('.title').text("2016年 九月");
            else if(x==1)
    $('.title').text("2016年 十月")
else if(x==2)
    $('.title').text("2016年 十一月")
else if(x==3)
    $('.title').text("2016年 十二月")
else if(x==4)
    $('.title').text("2017年 一月")
else if(x==5)
    $('.title').text("2017年 二月")


            if(MONTH[x][i]==0)
                $('tr td p').eq(i).addClass('P-hidden');
            else
                $('tr td p').eq(i).text(MONTH[x][i]);
            if(i>=MONTH[x].length){
                $('tr td p').eq(i).addClass('P-hidden');
            }
            /*
            if(t==1){
                if(MONTH[x][i]==0)
                    $('.t1 td p').eq(c).text("");
                else
                    $('.t1 td p').eq(c).text(MONTH[x][i]);
            }

            else if(t==2){
                if(MONTH[x][i]==0)
                    $('.t2 td p').eq(c).text("");
                else
                    $('.t2 td p').eq(c).text(MONTH[x][i]);
            }

            else if(t==3){
                if(MONTH[x][i]==0)
                    $('.t3 td p').eq(c).text("");
                else
                    $('.t3 td p').eq(c).text(MONTH[x][i]);
            }

            else if(t==4){
                if(MONTH[x][i]==0)
                    $('.t4 td p').eq(c).text("");
                else
                    $('.t4 td p').eq(c).text(MONTH[x][i]);
            }

            else if(t==5){
                if(MONTH[x][i]==0)
                    $('.t5 td p').eq(c).text("");
                else
                    $('.t5 td p').eq(c).text(MONTH[x][i]);
            }

            else if(t==6){
                if(MONTH[x][i]==0)
                    $('.t6 td p').eq(c).text("");
                else
                    $('.t6 td p').eq(c).text(MONTH[x][i]);
            }*/


        }
    }
});