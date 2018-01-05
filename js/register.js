$(function(){
    //密码框提示取消
       $("#textError em").click(function(){
    	   $(this).hide().siblings().hide();
       });
    //复选框提示
       $("#checkbox").click(function(){
    	   $("#checkError").toggle();
       });
    
    //表单验证
    	var accounCheckRS=false;
    	var passCheckRS=false;
    	$("#account input").blur(function(){
    		var patt=/^1[0-9]{10}$/;
    		if(patt.test($(this).val())){
    			$("#account i").show();
    			accounCheckRS=true;
    		}else{//不满足
    			$("#aliasTip").show();
    			accounCheckRS=false;
    		}
    	});
    	$("#password input").blur(function(){
    		var patt=/^[\w]{5,19}$/;
    		if(patt.test($(this).val())){
    			$("#textError").hide();
    			passCheckRS=true;
    		}else{//不满足
    			$("#textError").show();
    			passCheckRS=false;
    		}
    	});
    	
    	$("[type='submit']").click(function(){
    		if(passCheckRS&&accounCheckRS){
                   return true;
    		}else{
    			return false;
    		}
    	});
       //设置获得焦点事件和样式
    	$("#account input,#telephone input,#password input").focus(function(){
    		if($(this).val()==this.defaultValue){
    			$(this).val("");
    			$(this).parent().index()==3?$(this).attr("type","password").parent().next().show():"";
    		}
    	}).blur(function(){
    		if($(this).val()==""){//用户未输入,恢复默认提醒文字
    			$(this).parent().index()==3?$(this).attr("type","text").parent().next().hide():"";
    			$(this).val(this.defaultValue);
    			$("#aliasTip").hide();
    		}
    	});
});