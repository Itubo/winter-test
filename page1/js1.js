
window.onload = function () {
    var tiaozhuan = document.getElementById("tiaozhuan");
    tiaozhuan.click = function () {
        window.location.href = '../page2/html2.html';
    }
    //视频播放。
    var local1 = document.getElementById('head_video');  //获取，函数执行完成后local内存释放
    local1.autoplay = true; // 自动播放
    local1.loop = true; // 循环播放
    local1.muted = true; // 关闭声音，如果为false,视频无法自动播放
    if (local1.paused) {  //判断是否处于暂停状态
        local1.play();  //开启播放
    } else {
        local1.pause();  //停止播放
    }
    //第一个button变色
    var buttonChange = document.getElementById("button_search_button");
    buttonChange.onmouseover = function () {
        this.style.backgroundColor = 'rgb(130, 167, 252)';
    };
    buttonChange.onmouseout = function () {
        this.style.backgroundColor = ' rgb(51, 112, 255)';
    }
    //第二个按钮变色
    var buttonChange1 = document.getElementById("button_search_button1");
    buttonChange1.onmouseover = function () {
        this.style.backgroundColor = 'rgb(130, 167, 252)';
    };
    buttonChange1.onmouseout = function () {
        this.style.backgroundColor = 'rgb(51, 112, 255)';
    }
    //图片变大。
    function myChange(ID) {
        var changeBig = document.getElementById(ID);
        changeBig.onmouseover = function () {
            this.style.color = 'rgb(51, 112, 255)';
        }
        changeBig.onmouseout = function () {
            this.style.color = '#000000';
        }
    }
    function myChange1(ID) {
        var changeBig = document.getElementById(ID);
        changeBig.onmouseover = function () {
            this.style.width = '100px';
        }
        changeBig.onmouseout = function () {
            this.style.width = '90px';
        }
    }
    myChange("pick1"); myChange("pick2"); myChange("pick3"); myChange("pick4"); myChange("pick5"); myChange("pick6");
    myChange("pick7"); myChange("pick8"); myChange("pick9"); myChange("pick10");
    myChange1("img1"); myChange1("img2"); myChange1("img3"); myChange1("img4"); myChange1("img5");
    myChange1("img6"); myChange1("img7"); myChange1("img8"); myChange1("img9"); myChange1("img10");

    //圆图标放大事件。
    //获取元素
    var imgChange = document.getElementById("roundImg");
    var imgChangeImg = imgChange.getElementsByTagName("img");
    for (var i = 0; i < imgChangeImg.length; i++) {
        imgChangeImg[i].onmouseover = function () {
            this.style.width = '240px';
        }
        imgChangeImg[i].onmouseout = function () {
            this.style.width = '220px';
        }
    }
    var colorChange = imgChange.getElementsByTagName("a");
    //遍历：
    for (var j = 0; j < colorChange.length; j++) {
        colorChange[j].onmouseover = function () {
            this.style.color = 'rgb(51, 112, 255)';
        }
        colorChange[j].onmouseout = function () {
            this.style.color = '#000000';
        }
    }

    //改变img大小
    var imgChange2 = document.getElementById("roundImg2");
    var imgChangeImg2 = imgChange2.getElementsByTagName("img");
    for (var i = 0; i < imgChangeImg2.length; i++) {
        imgChangeImg2[i].onmouseover = function () {
            this.style.width = '240px';
        }
        imgChangeImg2[i].onmouseout = function () {
            this.style.width = '220px';
        }
    }
    var colorChange = imgChange2.getElementsByTagName("a");
    for (var j = 0; j < colorChange.length; j++) {
        colorChange[j].onmouseover = function () {
            this.style.color = 'rgb(51, 112, 255)';
        }
        colorChange[j].onmouseout = function () {
            this.style.color = '#000000';
        }
    }
    //点击切换部分
    /* var lists = document.getElementsByClassName("list");
    var lefts = document.getElementsByClassName("left");
    Index = 0;
    var goIndex = function () {
        clearactive();
        lefts[Index].className = "left active";
        lists[Index].className = "list active";
    }
    var clearactive = function () {
        for (var i = 0; i < lefts.length; i++) {
            lefts[i].className = "left";
            lefts[i].style.opacity = '0';
        }
        for (var i = 0; i < lists.length; i++) {
            lists[i].className = "list";
        }
    }
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', function () {
            var listsIndex = this.getAttribute("date-Index");
            lefts[i].style.opacity = '1';
            console.log(listsIndex);
            Index = listsIndex;
            goIndex();
        })
    } */
    //员工故事：
    var storys = document.getElementById("storys");
    var storysA = storys.getElementsByTagName("a");
    //遍历数组
    for (var i = 0; i < storysA.length; i++) {
        storysA[i].onmouseover = function () {
            this.style.border = '1px solid rgb(239, 240, 242)';
            this.style.boxShadow = '5px 5px 20px #888888';
        }
        storysA[i].onmouseout = function () {
            this.style.border = '';
            this.style.boxShadow = '';
        }
    }
    var buttonChange = document.getElementById("buttonOne");
    var buttonChangeOne = buttonChange.getElementsByTagName("h3");
    for (var i = 0; i < buttonChangeOne.length; i++) {
        buttonChangeOne[i].onmouseover = function () {
            this.style.color = '#7b7e81';
        }
        buttonChangeOne[i].onmouseout = function () {
            this.style.color = '';
        }
    }
    var buttonChange2 = document.getElementById("buttonTwo");
    var buttonChangeTwo = buttonChange2.getElementsByTagName("h3");
    for (var i = 0; i < buttonChangeTwo.length; i++) {
        buttonChangeTwo[i].onmouseover = function () {
            this.style.color = '#7b7e81';
        }
        buttonChangeTwo[i].onmouseout = function () {
            this.style.color = '';
        }
    }
    //微信二维码显现。
    /*
    var bottonImg = document.getElementById("bottonImg");
    var bottonImgBox = bottonImg.getElementsByTagName("img");
    var bottonPicture = document.getElementById("bottonPicture")
    var bottonPictureBox = bottonPicture.getElementsByClassName("box_botton");
    //遍历数组
    for (var i = 0; i < bottonImgBox.length; i++) {
        for (var j = 0; j < bottonPictureBox.length; j++) {
            bottonImgBox[i].onmouseover = function () {
                bottonPictureBox[i].style.display = 'block';
            }
            bottonImgBox[i].onmouseout = function () {
                bottonPictureBox[i].style.display = 'none';
            }
        }
    }*/
    function fun1(ID1, ID2) {
        var imgBotton = document.getElementById(ID1);
        var pictureBotton = document.getElementById(ID2);
        imgBotton.onmouseover = function () {
            pictureBotton.style.display = 'block';
        }
        imgBotton.onmouseout = function () {
            pictureBotton.style.display = 'none';
        }
    }
    fun1("Img1", "box_1"); fun1("Img2", "box_2"); fun1("Img3", "box_3"); fun1("Img4", "box_4"); fun1("Img5", "box_5");
    fun1("Img6", "box_6")



















}


