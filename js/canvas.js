/**
 * Created by 孟磊 on 2016/8/31.
 */
$(function(){
    $(".box .tops ul li").click(function(){
        var index=$(".box .tops ul li").index(this)
        $(".box .bottoms .lefts ul").removeClass("xian").eq(index).addClass("xian")
        $(".box .tops ul li").removeClass("color").eq(index).addClass("color")
    })
    $(".box .bottoms .lefts ul li").click(function(){
        var index=$(".box .bottoms .lefts ul li").index(this)
        $(".box .bottoms .lefts ul li").removeClass("color").css("text-shadow","none").eq(index).addClass("color").css("text-shadow","0 0 2px red")
    })


    var canvas=$("canvas")[0]
    var copy=$(".copy")[0]
    var xp=$(".xp")[0]
    var cobj=canvas.getContext("2d")
    var obj=new shape(copy,cobj,xp);

    $(".box .bottoms .lefts ul:eq(1) li").click(function(){
        var types=$(this).attr("data-role")

        if(types=="qianbi"){
            obj.qianbi()
        }else{
            if(types=="bian"){
                obj.bianNum=prompt("请输入边数","5")
            }
            if(types=="jiao"){
                obj.jiaoNum=prompt("请输入角数","5")

            }
            obj.type=types;
            obj.draw()
        }


    })

    $(".box .bottoms .lefts ul:eq(2) li").click(function(){
        var styles=$(this).attr("data-role")
        obj.style=styles;
        obj.draw()
    })

    $(".str").change(function(){
        obj.strokeStyle=$(this).val()
    })


    $(".fill").change(function(){
        obj.fillStyle=$(this).val()
    })

    $(".box .bottoms .lefts ul:eq(4) li").click(function(){
        obj.lineWidth=$(this).attr("data-role")
        obj.draw()
    })

    $(".box .bottoms .lefts ul:eq(4) li input").change(function(){
        obj.lineWidth=$(this).val()
        obj.draw()
    })

   //橡皮
   $(".tops ul li:last").click(function(){
           obj.clear()
   })

    $(".box .bottoms .lefts ul:eq(5) li input").change(function(){
        obj.xpsize=$(this).val()
        obj.clear()
    })


    //返回
    $(".box .bottoms .lefts ul:eq(0) li:eq(1)").click(function(){
        obj.back()
    })


//    保存
    $(".box .bottoms .lefts ul:eq(0) li:eq(2)").click(function(){
        if(obj.history.length>0){
            location.href=canvas.toDataURL().replace("image/png","stream/octect")
        }
    })

//    新建
    $(".box .bottoms .lefts ul:eq(0) li:eq(0)").click(function(){
        if(obj.history.length>0){
            var yes=confirm("是否保存")
            if(yes){
                location.href=canvas.toDataURL().replace("image/png","stream/octect")
            }
            cobj.clearRect(0,0,canvas.width,canvas.height)
            obj.history=[]
        }
     })
})
