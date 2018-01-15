// JavaScript Document
function addLoadEvent(func){
	var oldonload=window.onload;
	  if(typeof oldonload!='function'){
		  window.onload=func;
		  }else{
			  window.onload=function(){
				  oldonload();
				  func();
				  }		  
			  }
	}
	//跨浏览器准备函数
var	EventUtil={
		addHandler:function(element,type,handler){
			    element.addEventListener?element.addEventListener(type,handler,false):element.attachEvent('on'+type,handler);
			},
		removeHandler:function(element,type,handler){
			    element.removeEventListener?element.removeEventListener(type,handler,false):element.detachEvent('on'+type,handler);
			},
		getEvent:function(event){
			return event?event:window.event;	
				},
		preventDefault:function(event){
			event.preventDefault?event.preventDefault():event.returnValue=false;
			},
		stopPropagation:function(event){
			event.stopPropagation?event.stopPropagation():event.cancelBubble=true;
			},
		getWheelDelta:function(event){
		if(event.wheelDelta){return	 event.wheelDelta}else{return -event.detail*40;}	
			}						
		}
	//获取需要的元素并让每个区域和浏览器视口的高度一致	
var input=document.getElementsByClassName('iptRight');
var scrol=document.getElementsByClassName("scroll")[0];
var panel=document.getElementsByClassName("panel");
var clientH=window.innerHeight;
var boxImg=panel[1].getElementsByClassName('boxImg');
var Li=boxImg[0].getElementsByTagName('li');
var footer=document.getElementsByClassName('footer');
var label=footer[0].getElementsByTagName('label');
       scrol.style.height=clientH+"px";
        for(var i=0;i<panel.length;i++){
            panel[i].style.height=clientH+"px";
        }

(function(){
	var wheel=function(event){
		 event=EventUtil.getEvent(event);
	    var delta=EventUtil.getWheelDelta(event)
	    if(delta) gundong(delta,input);
		                                          }
		
function gundong(judge,array){
		  var num;
		  for(var i=0;i<input.length;i++){
			  if(input[i].checked) num=i;
			   }
		  if(judge>0&&num>0)	{
			   num-=1;
			   input[num].checked=true;
		  }else if(judge<0&&num<4){
			  num+=1;
			  input[num].checked=true;
		  }
	}
	
function move(ele){
	if(ele.offsetTop!=0){
	    ele.timer=setInterval(function(){
		if(ele.offsetTop==0) clearInterval(ele.timer);
	         ele.style.top=ele.offsetTop-Math.floor(ele.offsetTop/10)+'px'
		},20)
	}
}

function drop(){
	boxImg[0].style.display='block';
	Li[0].timer1=setTimeout(function(){move(Li[0])},0);
	Li[1].timer1=setTimeout(function(){move(Li[1])},500);
	Li[2].timer1=setTimeout(function(){move(Li[2])},1000)
	
	}		
EventUtil.addHandler(document,'mousewheel',wheel)
EventUtil.addHandler(document,'DOMMouseScroll',wheel)	//火狐浏览器
EventUtil.addHandler(label[0],'click',drop)


})()

 window.onload=function(){$('.loading').fadeOut();}
    
   
  
