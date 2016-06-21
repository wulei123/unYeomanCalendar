/**
 * Created by Administrator on 2016/6/21.
 */
/**
 * Created by Administrator on 2016/6/20.
 */
$(window).ready(function () {
    if($('.background').width()> $('.background').height()){
        window.location.href = "index.html";
    }
    
    var haveClass = "<div class='youke'> " +
        "上午:               <br>"+
        "第一节课：08:00~09:50" +
        "第二节课：10:10~12:00<br>" +
        "下午:<br>"+
        "第三节课：14:00~15:50" +
        "第四节课：16:00~18:00<br>" +
        "晚上:<br>" +
        "第一节课：19:00~19:50" +
        "第二节课：20:00~20:50<br>" +
        "第三节课：21:00~21:50" +
        "</div>"
    var x=0;
    everyMonth(0);

    $('.last').click(function () {
            $('.calendar').animate({opacity: 1},100);
            x--;
            console.log(x);
            if(x<0){
                $('.h1').text('这是第一个');
                x=0;
            }else{
                $('td p').removeClass("P-click");
                $('tr td p').removeClass('P-hidden');
                $('.youke').remove();
                $('.week').text('每天在改变');
                $('.data').text('UPC');
                $('.work').text('');
                $('.h1').text('石油大学的每一天');
                everyMonth(x);
            }


    });
    $('.next').click(function () {

            console.log(x);
            if(x>5){
                $('.h1').text('这是最后一个');
                x=5;
            }else{
                $('td p').removeClass("P-click");
                $('tr td p').removeClass('P-hidden');
                $('.youke').remove();
                $('.week').text('每天在改变');
                $('.data').text('UPC');
                $('.work').text('');
                $('.h1').text('石油大学的每一天');
                everyMonth(x);
            }
    });

    $('tr td p').on("click",function () {

        var i = $(this).parent('td').index()+($(this).parent('td').parent('tr').index()-2)*7;
        $('.youke').remove();
        console.log("呵呵"+i);
        console.log($(this).parent('td').index());
        console.log($(this).parent('td').parent('tr').index());
        $('td p').removeClass("P-click");
        $(this).addClass('P-click');
        week = whichWeek(x,i);
        $('.week').text("这是第"+week+"周");
        $('.data').text(MONTH[x][i]);
        if(WORK[x][i]==0){
            $('.h1').text('有课吧。。。');
            $('.work').text('上课时间：');
            $('.work').append(haveClass);
        }else if(WORK[x][i]==1){
            $('.h1').text('中秋快乐');
            $('.work').text("Have Fun!");
        }else if(WORK[x][i]==2){
            $('.h1').text('国庆快乐');
            $('.work').text("Have Fun!");
        }else if(WORK[x][i]==3){
            $('.h1').text('元旦快乐');
        }else if(WORK[x][i]==9){
            $('.h1').text('寒假啦！');
            $('.work').text("Have Fun!");
        }

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