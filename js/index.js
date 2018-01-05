$(function(){
	
    /*-----------------------------logo和搜索框---------------------------------*/	
    	//设置获得焦点事件和样式
    	$("[type=text]").focus(function(){
    		if($(this).val()==this.defaultValue){
    			$(this).val("");
    		}
    	}).blur(function(){
    		if($(this).val()==""){//用户未输入,恢复默认提醒文字
    			$(this).val(this.defaultValue);
    		}
    	});
    
    /*---------------------------轮播图----------------------------*/
   
    $("#revolveImg li>").mouseover(function(){
    	$("#change").show();
    });
    
});
var leftChange=function(actionType){
		var nowIndex=$("#revolveImg li:visible").index();
		var actionType=$(this).index();
		if(actionType==0){
			if(nowIndex==0){
				$("#revolveImg li:visible").fadeOut(3000);
				$("#revolveImg li:eq(7)").fadeIn(3000);
				$("#whell div:eq(7)").attr("class","sel").siblings().attr("class","blur");
			}else{
				$("#revolveImg li:visible").fadeOut(3000).siblings().eq(nowIndex-1).fadeIn(3000);
				$("#whell div:eq("+(nowIndex-1)+")").attr("class","sel").siblings().attr("class","blur");
			}
			
		}else{
			if(nowIndex==7){
				$("#revolveImg li:visible").fadeOut(3000);
				$("#revolveImg li:eq(0)").fadeIn(3000);
				$("#whell div:eq(0)").attr("class","sel").siblings().attr("class","blur");
			}else{
				$("#revolveImg li:visible").fadeOut(3000).siblings().eq(nowIndex).fadeIn(3000);
				$("#whell div:eq("+(nowIndex+1)+")").attr("class","sel").siblings().attr("class","blur");
			}
		}
	}
$(function(){
	$("#change a").click(leftChange);
	$("#whell div").mouseover(function(){
		$(this).attr("class","sel").siblings().attr("class","blur");
		$("#revolveImg li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
	});
});
/*function time(){
	setInterval("leftChange(1)",3000);
}*/
var revolveImgTimer = null;
revolveImgTimer = setInterval("leftChange(1)",5000);
// 清除定时器
 $(function(){
 	$("#revolveImg").hover(function(){
 		clearInterval(revolveImgTimer);
 	},function(){
 		revolveImgTimer = setInterval("leftChange(1)",5000);
 	})
 });

/*-------------------------------轮播图右边的白色部分-------------------------------*/

var wordChange=function(actionType){
		/*$(".clearfix li").animate({"bottom":105},1000);
		$(".clearfix li").animate({"bottom":0},1000);*/
		$(".clearfix li:lt(2)").slideUp('slow',function(){
			$(this).clone().appendTo($(this).parent()).slideDown('slow');
			$(this).remove();
		})
}

$(function(){
	$("#kuaijie a:gt(2)").css("borderBottom","0");    /*设置第三部分a标签样式*/
	$("#kuaijie a:eq(2),#kuaijie a:eq(5)").css("borderRight","0");
})

//window.setInterval("wordChange(1)",3000);
var timer=null ;
timer=setInterval("wordChange(1)",3000);

$(function(){
	$(".clearfix").mouseover(function(){
		clearInterval(timer);
	});
	$(".clearfix").mouseout(function(){
		timer=setInterval("wordChange(1)",3000);
	});
});
/*----------------------------网站右边黑色的固定栏--------------------------------------*/


window.onload=function(){
	var timer=null;
	var aKuijie=document.querySelectorAll('#kuaijie a');
	timer=setInterval(function(){
		
		for(var i=0;i<aKuijie.length;i++){
			aKuijie[i].style.WebkitTransform=aKuijie[i].style.transform='rotateY(360deg)';
			
		};
		
	},3000)
	
	for(var i=0;i<aKuijie.length;i++){
		aKuijie[i].onmouseover=function(){
			clearInterval(timer);
		};
	};
};


/*------------------------------导航栏切换---------------------------------*/
$(function(){
	$("#thwartwise-navigation a").click(function(){
		var divId=$(this).index()+1;
		$(this).css("background","url(imges/huaban.png)").siblings().css("background","");
		for (var i=1;i<$("#thwartwise-navigation a").length+2;i++) {
			$("#div"+i+"").hide();
		}
		$("#div"+divId+"").show();
		
		
	})
});