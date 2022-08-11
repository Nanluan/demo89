window.addEventListener('load',function(){
    var focus = this.document.querySelector('.focus');
    var ol = this.document.querySelector('ol');
    var ul = focus.children[0];
    var w = focus.offsetWidth;
    var index = 0;
    var timer = this.setInterval(function(){
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .9s';
        ul.style.transform = 'translateX('+ translatex +'px)';
    },2000);

    ul.addEventListener('transitionend',function(){
        if(index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX('+ translatex +'px)';
        }

        else if(index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX('+ translatex +'px)';
        }

        ol.querySelector('.current').classList.remove('current');

        ol.children[index].classList.add('current');
    });
    var startx = 0;
    var movex = 0;
    var flag = false;
    ul.addEventListener('touchstart',function(e){
        startx = e.targetTouches[0].pageX;
        clearInterval(timer);
    });

    ul.addEventListener('touchmove',function(e){
        movex = e.targetTouches[0].pageX - startx;
        var translatex = -index * w + movex;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX('+ translatex +'px)';
        flag = true;
        e.preventDefault();
    });

    ul.addEventListener('touchend',function(){
        if(flag){
            if(Math.abs(movex) > 50){
                if(movex > 0){
                    index--;
                }
                else{
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX('+ translatex +'px)';
            }
            else{
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
    
                ul.style.transform = 'translateX('+ translatex +'px)';
    
            }
        }
        clearInterval(timer);
        timer = setInterval(function(){
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .9s';
            ul.style.transform = 'translateX('+ translatex +'px)';
        },2000);
    });
})
