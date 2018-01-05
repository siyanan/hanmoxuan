$(function() {
				$("#phoneCode").hide();
				$("#loseEfficacy").hide();
				//二维码扫一扫	
				$("#code").hover(function() {
					$(this).animate({
						"right": 50
					});
					$("#phoneCode").show(500);
				}, function() {
					$(this).animate({
						"right": 0
					});
					$("#phoneCode").hide(500);
				});
				//刷新失效二维码
				$(".button").click(function() {
					$("#loseEfficacy").hide();
				})
			});
			var lose = function(actionType) {
				$("#loseEfficacy").show();
			}
			window.setInterval("lose(1)", 10000);

			$(function() {
				$("#checkError").hide();
				$("#account i,#password i").hide();
				//切换扫码登录,账号登录
				$(".login-tab a").click(function() {
					$(this).attr("class", "tab-itemOn").siblings().attr("class", "tab-item");
					var nowIndex = $(this).index();
					if(nowIndex == 0) {
						$("#seachCode").show();
						$("#accountLogin").hide();
					} else {
						$("#seachCode").hide();
						$("#accountLogin").show();
					}
				});
				//设置获得焦点事件和样式
				$("#account input,#password input").focus(function() {
					if($(this).val() == this.defaultValue) {
						$(this).val("").prev().attr("class", "selAccount").next().next().show();
						$(this).parent().index() == 2 ? $(this).attr("type", "password").prev().attr("class", "selPassword") : "";

					}
				}).blur(function() {
					if($(this).val() == "") { //用户未输入,恢复默认提醒文字
						$(this).val(this.defaultValue).prev().attr("class", "blurAccount");
						$(this).parent().index() == 2 ? $(this).attr("type", "text").prev().attr("class", "blurPassword") : "";
						$("#account i,#password i").hide();
					}
				});
				//表单验证
				var accounCheckRS = false;
				var passCheckRS = false;
				$("#account input").blur(function() {
					var patt = /^[a-zA-Z0-9]{5,12}$/;
					if(patt.test($(this).val())) {
						$("#checkError").hide();
						accounCheckRS = true;
					} else { //不满足
						$("#checkError span").remove();
						$("#checkError").show().append("<span>请输入用户名/邮箱/手机号！</sapn>");
						accounCheckRS = false;
					}
				});
				$("#password input").blur(function() {
					var patt = /^[a-zA-Z0-9]{6,20}$/;
					if(patt.test($(this).val())) {
						$("#checkError").hide();
						passCheckRS = true;
					} else { //不满足
						$("#checkError span").remove();
						$("#checkError").show().append("<span>请输入6-20位密码！</span>");
						passCheckRS = false;
					}
				});

				$("[type='submit']").click(function() {
					if(!(passCheckRS && accounCheckRS)) {
						$("#checkError span").remove();
						$("#checkError").show().append("<span>用户名或者密码不正确</span>");
						return false;
					}
				});
			});