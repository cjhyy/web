$(function(){
		
    var oUl = $(".header")[0];
    var oCon = $(".container")[0];
    var oDiv = $(".listContent")[0];
    var oTip = $(".tips")[0];
    var oTips = $(".tipsContent")[0];
            
    for(var i=0;i<data.length;i++){
        oUl.innerHTML+="<li>"+data[i].name+"</li>"
    }
    
    var lis=$(".header li");
    lis[0].className="sec";
    
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className="";
                oDiv.innerHTML="";
                oTips.innerHTML="";
            }
            this.className="sec";
            fun(data[this.index]);
        }
    }
    fun(data[0]);
    
    function fun(da){
        for(var i=0;i<da.list.length;i++){
            
            var ul=document.createElement("ul");
            var li=document.createElement("li");
            var a=document.createElement("a");
            a.innerHTML=da.list[i].title;
            a.href="javascript:";
            li.appendChild(a);
            ul.appendChild(li);
            oDiv.appendChild(ul);
            a.index=i;
                var h4 = document.createElement('h4');						
                var lis1 = document.createElement('li');						
                lis1.className = 'col';
                var lis2 = document.createElement('li');						
                lis2.className = 'col';
                var lis3 = document.createElement('li');						
                lis3.className = 'col';
                var lis4 = document.createElement('li');						
                lis4.className = 'col';
                var lis5 = document.createElement('li');						
                lis5.className = 'col';
                var lis6 = document.createElement('li');						
                lis6.className = 'col';
                
            a.onmouseover=function(){
                oTip.style.display="block";
                oTip.style.left=oCon.offsetLeft+this.offsetWidth+10+'px';
                oTip.style.top=this.offsetTop+this.scrollTop+'px';
                    h4.innerHTML = da.list[this.index].company;
                    lis1.innerHTML = da.list[this.index].recruitingNumbers;
                    lis2.innerHTML = da.list[this.index].workingLocation;
                    lis3.innerHTML = da.list[this.index].workExperience;
                    lis4.innerHTML = da.list[this.index].education;
                    lis5.innerHTML = da.list[this.index].wage;
                    lis6.innerHTML = da.list[this.index].addDate;
                    oTips.appendChild(h4);
                    oTips.appendChild(lis1);
                    oTips.appendChild(lis2);
                    oTips.appendChild(lis3);
                    oTips.appendChild(lis4);
                    oTips.appendChild(lis5);
                    oTips.appendChild(lis6);
                
            }
            
            li.onmouseout=function(){
                oTip.style.display="none";
            }
            
        }
            
            
    }
    
})