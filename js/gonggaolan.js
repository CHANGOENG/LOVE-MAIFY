statr = () => { //创造一个循环方法函数
    let first = $('.ul li:first'), //获取列表第一个li
      firstLi = first.clone(); //复制第一个li
    $('.ul li').eq(0).animate({ //列表第一个添加动画，
      marginTop: '-=45px',
      opacity: '1'
    }, 2000)
    setTimeout(function () {
      $('.ul li').eq(0).animate({//列表第二个添加动画，
        marginTop: '-=45px',
        opacity: '0'
      }, 2000);
      setTimeout(function () {//动画结束后删除第一个li
        first.remove();
      }, 2000)
      $('.ul').append(firstLi)//li复制到最后面开始新的一轮循环
    }, 4000)
  }
  setInterval('statr()', 7000) //7秒循环一次