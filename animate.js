function animate(obj,target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            // obj.style.left = 0;
            // 方法一
            if(callback){
                callback();
            }
            // 方法二
            //  callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';

},100);
}