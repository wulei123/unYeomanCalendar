/**
 * Created by Administrator on 2016/6/20.
 */
$(window).ready(function () {
    var w = $('.background').width();
    $('.background').height(0.5625*w);
    $('.background').width(w);
      var x=0;
    everyMonth(x);

    $('.last').click(function () {
        x--;
        console.log(x);
        if(x<0){
            alert("这是第一个");
            x=0;
        }else{
            $('.t1 td').remove();
            $('.t2 td').remove();
            $('.t3 td').remove();
            $('.t4 td').remove();
            $('.t5 td').remove();
            $('.t6 td').remove();
            everyMonth(x);
        }

    });
    $('.next').click(function () {
        x++;
        console.log(x);
        if(x>5){
            alert("这是最后一个");
            x=5;
        }else{
            $('.t1 td').remove();
            $('.t2 td').remove();
            $('.t3 td').remove();
            $('.t4 td').remove();
            $('.t5 td').remove();
            $('.t6 td').remove();
            everyMonth(x);
        }

    });









    function everyMonth(x) {

        var t=0;
        for(var i=0;i<MONTH[x].length;i++){
            if(i%7==0)
                t++;
if(x==0)
    $('.title').text("九月");
            else if(x==1)
    $('.title').text("十月")
else if(x==2)
    $('.title').text("十一月")
else if(x==3)
    $('.title').text("十二月")
else if(x==4)
    $('.title').text("一月")
else if(x==5)
    $('.title').text("二月")


            if(t==1){
                if(MONTH[x][i]==0)
                    $('.t1').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t1').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }

            else if(t==2){
                if(MONTH[x][i]==0)
                    $('.t2').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t2').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }

            else if(t==3){
                if(MONTH[x][i]==0)
                    $('.t3').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t3').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }

            else if(t==4){
                if(MONTH[x][i]==0)
                    $('.t4').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t4').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }

            else if(t==5){
                if(MONTH[x][i]==0)
                    $('.t5').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t5').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }

            else if(t==6){
                if(MONTH[x][i]==0)
                    $('.t6').append("<td><p class='bk'>"+" "+"</p></td>");
                else
                    $('.t6').append("<td><p class='bk'>"+MONTH[x][i]+"</p></td>");
            }


        }
    }
});