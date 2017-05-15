# scrollmenu
这是关于弹出关闭可滚动的菜单效果   兼容pc、移动端

* height: 			  //菜单栏的高度
* zIndex: 			  //层级
* background:         //背景色	
* type:  			  //cross  or ''   横向列表  和 正常显示的效果   具体见下方链接
* animateIn:          //菜单进入的效果    可使用animate.css
* animateOut:         //菜单关闭的效果
* duration:           //动画执行时间
* hasLineBorder:      //是否显示一像素边框分割
* bscroll:            //是否使用bScroll的 滚动方式
* showRightIcon:      //横向列表下是否显示右侧图标
* iconSIze:           //图标大小
* source:             //列表的信息
* title:              //source  下的子属性    菜单名称
* hasHref:            //source  下的子属性    是否有链接
* href:               //source  下的子属性    链接地址
* font_imgClass:      //source  下的子属性    图标的class名称  
* hrefType:           //source  下的子属性    //_self , _blank, _parent, _top   打开的类型
* rightFont_imgClass: //source  下的子属性    //横向列表状态下   右侧的图标信息
* click:function(ret){}     //列表被点击时候的方法   ret.ele  点击的元素   ret.hasHref  是否有链接  ret.index  点击的索引   ret.title   文本内容    ret.icon_class   图标的class名称


预览地址
http://www.daiwei.org/works/UI/scrollMenu/
