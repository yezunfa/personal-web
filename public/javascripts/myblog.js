window.onload = function(){
    var btn = document.getElementById("icon");
    var timer = null;
    var oScroll = true;
    //滚动条事件,触发时清空定时器
    window.onscroll = function(){
        if (document.documentElement.scrollTop==0){
            // ("#icon").hide();
            document.getElementById('icon').style.display = 'none';
        } else{
            // ("#icon").show();
            document.getElementById('icon').style.display = 'block';
        }
        if(!oScroll){
            clearInterval(timer);
        }
        oScroll = false;
    };
    btn.onclick = function(){
        //加入定时器让他又快到慢滚动到顶部
        timer = setInterval(function(){
            //获取当前scrollTop的高度位置（兼容ie和chrom浏览器）
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置速度由快到慢
            var ispeed = Math.floor(-oTop / 7);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + ispeed;
            oScroll = true;
            if(oTop == 0){
                clearInterval(timer);
            }
        },30);
    }
};