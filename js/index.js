$(function(){
	var imgs=$("img",$(".imgs")[0]);
	
	var lis=$("li",$(".num")[0]);
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex='1';
			lis[i].className='';
		}
		imgs[num].style.zIndex='2';
		lis[num].className='hot';
	}

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			num=this.index;
			clearInterval(t);
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex='1';
				lis[j].className='';
			}
		imgs[num].style.zIndex='2';
		lis[num].className='hot';
		};
		lis[i].onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	var lbtn=$(".left")[0];
	var rbtn=$(".right")[0];
	lbtn.onclick=function(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=1;
			lis[i].className="";
		}
		imgs[num].style.zIndex=2;
		lis[num].className="hot"
	};

	rbtn.onclick=function(){
			move();
		};
	lbtn.onmouseover=rbtn.onmouseover=function(){
		clearInterval(t);
	};
	lbtn.onmouseout=rbtn.onmouseout=function(){
			t=setInterval(move,2000)
		}

	
});