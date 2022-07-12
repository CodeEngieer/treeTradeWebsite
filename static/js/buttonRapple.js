     // 找到按钮元素
     const bt = document.querySelector('div.bt');
     // 绑定按钮的点击事件
     bt.addEventListener('click', (e) => {
         // 获取按钮的偏移量，位置坐标中的left和top
         // 此处为按钮左上角，距离页面左侧和顶部的距离
         let offsetLeft = e.target.offsetLeft;
         let offsetTop = e.target.offsetTop;
         // 解决原例子中的一个bug，当点击空白处并且连续点击两次以上
         // 会点击在span元素中，所以获取的offset相关值是san的
         // 而不是div的，所有计算位置时是错误的。
         if (e.target.nodeName == 'SPAN') {
             // 如果点击了span元素，则获取span的上级父元素DIV的offset相关值
             offsetLeft = e.target.offsetParent.offsetLeft;
             offsetTop = e.target.offsetParent.offsetTop;
         }
         // 计算span的坐标
         let x = e.clientX - offsetLeft;
         let y = e.clientY - offsetTop;

         // 定义span
         let ripple = document.createElement('span');
         ripple.style.left = x + "px";
         ripple.style.top = y + "px";
         // 将ripple插入到bt中
         bt.appendChild(ripple);


         // 增加计时器，每秒钟自动将当前span清理掉，不至于原来越多
         setTimeout(() => {
             ripple.remove();
         }, 1000);

     });