/*===========================================*/
/*==========By Never forgotten youth=========*/
/*==================js滚动菜单===============*/

(function($,window){
'use strict';
	var DW = {};

	//显示浮层
    var showMask = function(options) {
    	var _this = this;
    	var defaultvalue = {
    		background: 			'rgba(0,0,0,0.6)',			//背景色
    		zIndex: 				'1000',						//层级
    		animateStyle: 			'fadeInNoTransform',		//进入动画
    		clickClose: 			true, 						//是否可以点击关闭
    		duration: 				500, 						//动画的过渡时间
    		closeAnimate:function(){}, 							//关闭浮层 的回调   也可以写其他元素的关闭动画 
    	};

    	var showMaskEle = '';

    	var opt = $.extend(defaultvalue , options || {});


    	defaultvalue._init = function(){
    		//存在有mask则不会再调用mask
    		if ($('.cpt-dw-mask').length) {return}

    		showMaskEle = $('<div class="cpt-dw-mask animated '+opt.animateStyle+'"></div>').css({
    			background:opt.background,
    			'z-index':opt.zIndex,
    			'webkit-transition':'all '+opt.duration/1000+'s',
				'-moz-transition':'all '+opt.duration/1000+'s',
				transition:'all '+opt.duration/1000+'s',
				'-webkit-animation-duration':opt.duration/1000+'s',
    			'-moz-animation-duration':opt.duration/1000+'s',
    			'animation-duration':opt.duration/1000+'s',
    		}).appendTo($('body'));
    		defaultvalue._showScroll(false);
    		defaultvalue._event();
    	};

    	defaultvalue._showScroll = function(isShow){
    		var isshow = isshow || 'false';
    		if(isShow){
    			$('body,html').css({height:'auto',overflow:'auto'});

    			$(document.body).css({
    				'border-right':'none',
    			})
    		}else{
    			var scrollWidth = defaultvalue._getScrollWidth();
    			$('body,html').css({height:'100%',overflow:'hidden'});
    			$('body').css({
    				'border-right':scrollWidth+'px solid transparent',
    			})
    		}
    	};

    	defaultvalue._getScrollWidth = function(){
		    var noScroll, scroll, oDiv = document.createElement('div');
		    oDiv.style.cssText = 'position:absolute; top:-1000px;     width:100px; height:100px; overflow:hidden;';
		    noScroll = document.body.appendChild(oDiv).clientWidth;
		    oDiv.style.overflowY = 'scroll';
		    scroll = oDiv.clientWidth;
		    document.body.removeChild(oDiv);
		    return noScroll-scroll;   
    	}

    	defaultvalue._removeMask = function(){
            if(!isLowerIe9()){
                showMaskEle.addClass("fadeOutNoTransform").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        			showMaskEle.remove();
        		});
            }else{
                showMaskEle.remove();
            }

            opt.closeAnimate();
    	};

    	defaultvalue._event = function(){
    		showMaskEle.on('click',function(){
    			defaultvalue._showScroll(true);
                if(opt.clickClose){
                    defaultvalue._removeMask();
                }
    		})
    	};

    	defaultvalue._init();
    };

    var isIE = function(callBack) {
        var isIE = false;
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
           isIE = true;
        }
        else{
           isIE = false;
        }

        if(typeof(callBack) === 'function'){
            callBack(isIE);
        }else{
          return isIE;
        }
    };

    var isLowerIe9 = function(){
        return (!window.FormData);
    };

   	//滚动菜单
    $.fn.scrollmenu = function(options) {
    	var defaultvalue = {
    		height: 			320,				//高度
            zIndex:             10001,              //层级
    		background: 		'#fff',				//背景色	
    		type: 				'cross', 			//cross 列表样式  or '' 九宫格效果
    		animateIn: 			'fadeInUpBig',		//进入的动画方式   animate css
    		animateOut: 		'fadeOutDownBig', 	//离开是的动画方式  
    		hasLineBorder: 		true, 				//是否有border	
    		bscroll: 			false,				//是否使用bettersroll
    		showRightIcon: 		true, 				//横向列表下是否显示右侧图标
    		duration: 			300,				//300毫秒
    		iconSIze: 			28,
    		source: 			[
    							{
    								title:'音乐',
    								hasHref:false,
    								href:'#',
    								font_imgClass:'dw-icon-music',
    								hrefType:'_self',     //_self , _blank, _parent, _top
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息
    							},{
    								title:'搜索',
    								hasHref:false,
    								href:'www.daiwei.org',
    								font_imgClass:'dw-icon-search',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'二维码',
    								hasHref:false,
    								href:'#',
    								font_imgClass:'dw-icon-erweicode',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'安卓',
    								hasHref:false,
    								href:'#',
    								font_imgClass:'dw-icon-android',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'ios',
    								hasHref:false,
    								href:'#',
    								font_imgClass:'dw-icon-apple',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'喜欢',
    								hasHref:true,
    								href:'#',
    								font_imgClass:'dw-icon-like',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'提现',
    								hasHref:true,
    								href:'#',
    								font_imgClass:'dw-icon-money',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'微博',
    								hasHref:true,
    								href:'#',
    								font_imgClass:'dw-icon-weibo',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							},{
    								title:'密码',
    								hasHref:true,
    								href:'#',
    								font_imgClass:'dw-icon-password',
    								hrefType:'_self',    
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息
    							},{
    								title:'分享',
    								hasHref:true,
    								href:'#',
    								font_imgClass:'dw-icon-share',
    								hrefType:'_self',   
    								rightFont_imgClass: 'dw-icon-right', 	//右侧的图标信息 
    							}
    							],
    		click:function(ele,index){},

    	}

    	var _this = this;

    	var opt = $.extend(defaultvalue,options||{});


		defaultvalue._init = function(){
			if($('body').find('.cpt-selectScrollMenu').length){
	    		return;
	    	};

			_this.cpt_selectScrollMenu = $('<div class="animated '+opt.animateIn+' cpt-selectScrollMenu" id="selectScrollMenu"></div>').css({
				height:opt.height,
				background:opt.background,
                'z-index':opt.zIndex,
				'webkit-transition':'all '+opt.duration/1000+'s',
				'-moz-transition':'all '+opt.duration/1000+'s',
				transition:'all '+opt.duration/1000+'s',
				'-webkit-animation-duration':opt.duration/1000+'s',
    			'-moz-animation-duration':opt.duration/1000+'s',
    			'animation-duration':opt.duration/1000+'s',
			}).appendTo($('body'));

			_this.cpt_selectScrollMenuContent = $('<div class="menuContent '+opt.type+'" id="cpt-selectScrollMenu-contant"></div>').css({
				position:'relative',
				width:'100%',
			}).appendTo(_this.cpt_selectScrollMenu);

			_this.cpt_ul_menuList = $('<ul class="cpt-ul-menuList"></ul>').appendTo(_this.cpt_selectScrollMenuContent);
			
			var length = opt.source.length;
			
			for(var i = 0;i<length;i++){
				//是否显示border
				if(opt.hasLineBorder && opt.type == 'cross'){
					_this.cpt_li_menuList = $('<li class="cpt-ul-menuList border-1px">').appendTo(_this.cpt_ul_menuList);
				}else{
					_this.cpt_li_menuList = $('<li class="cpt-ul-menuList">').appendTo(_this.cpt_ul_menuList);
				}

				//是否存在链接
				if(opt.source[i].hasHref){
					_this.href = $('<a href="'+opt.source[i].href+'" target="'+opt.source[i].hrefType+'"></a>').appendTo(_this.cpt_li_menuList);
					_this.icon = $('<i class="'+opt.source[i].font_imgClass+'"></i>').css({
						'font-size':opt.iconSIze,
                        width:opt.iconSIze
					}).appendTo(_this.href);
					_this.title = $('<p class="cpt-p-menuListTitle">'+opt.source[i].title+'</p>').appendTo(_this.href);
					

					//横向的话是否加右侧图标
					if(opt.type === 'cross'){
						if (opt.showRightIcon) {
							_this.rightIcon = $('<i class="cpt-rightIcon '+opt.source[i].rightFont_imgClass+'"></i>').css({
								'font-size':'18px',
							}).appendTo(_this.href);
						}
					}
				}else{
					_this.icon = $('<i class="'+opt.source[i].font_imgClass+'"></i>').css({
						'font-size':opt.iconSIze,
                        width:opt.iconSIze
					}).appendTo(_this.cpt_li_menuList);
					_this.title = $('<p class="cpt-p-menuListTitle">'+opt.source[i].title+'</p>').appendTo(_this.cpt_li_menuList);

					//横向的话是否加右侧图标
					if(opt.type === 'cross'){
						if (opt.showRightIcon) {
							_this.rightIcon = $('<i class="cpt-rightIcon '+opt.source[i].rightFont_imgClass+'"></i>').css({
								'font-size':'18px',
							}).appendTo(_this.cpt_li_menuList);
						}
					}
				}

				_this.cpt_li_menuList.on('click',function(event){
                    var index = $(this).index();
                    if(event.originalEvent._constructed){
                        return;
                    }       

                    var hasHref = $(this).find('a').length;
		    		var ret = {
		    			hasHref:hasHref,
		    			ele:$(this),
		    			index:index,
		    			title:opt.source[index].title,
		    			icon_class:opt.source[index].font_imgClass,
		    		}

		    		opt.click(ret);

                    if(!isLowerIe9()){
                        _this.cpt_selectScrollMenu.addClass(opt.animateOut).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                            _this.cpt_selectScrollMenu.remove();
                        });

                        $('.cpt-dw-mask').addClass("fadeOutNoTransform").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                            $('.cpt-dw-mask').remove();

                            //可滚动
                            $('body,html').css({height:'auto',overflow:'auto'});
                            $(document.body).css({
                                'border-right':'none',
                            })
                        });
                    }else{
                        _this.cpt_selectScrollMenu.remove();
                        $('.cpt-dw-mask').remove();
                        //可滚动
                        $('body,html').css({height:'auto',overflow:'auto'});
                        $(document.body).css({
                            'border-right':'none',
                        });
                    }
				});
			}

			defaultvalue._clickMaskToClose();

			defaultvalue._bscroll();
		};

		defaultvalue._clickMaskToClose = function(){
			showMask({
                zIndex:opt.zIndex - 1, 
	    		closeAnimate: function(){
                    if(!isLowerIe9()){
                        _this.cpt_selectScrollMenu.addClass(opt.animateOut).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                            _this.cpt_selectScrollMenu.remove();
                        });

                    }else{
                        _this.cpt_selectScrollMenu.remove();
                    }
	    		},
	    	});
		};


    	defaultvalue._bscroll = function(){
            var isIe = isIE();
			if(opt.bscroll && !isIe){
				var scroll = new BScroll(document.getElementById('selectScrollMenu'),{
					startX: 0,
					startY: 0,
					probeType: 3,
					click:true,
					preventDefault:false,
					preventDefaultException:false,
				});
			}else{
				_this.cpt_selectScrollMenu.css({
					'overflow-y':'scroll',
				});
				_this.cpt_selectScrollMenuContent.css({
					'-webkit-overflow-scrolling' : 'touch',
				});
			};
    	}

    	defaultvalue._init();
    	return this;	
    };

  	window.$dw = DW;

})(jQuery,window); 
