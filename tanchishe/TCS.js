window.onload = function () {
    var begin = document.getElementById('begin');
    var stop = document.getElementById('stop');
    var score = document.querySelector('#score');
    var map = document.querySelector('#snakeMap');
    begin.style.display = 'block';
    stop.parentNode.style.display = 'none';
    begin.parentNode.style.display = 'block';
    begin.onclick = function () {
        begin.style.display = 'none';
        begin.parentNode.style.display = 'none';
        game = new Game();
        game.init();
        game.pause();
    }
    var sw = 20,//蛇的方块的宽度。
        sh = 20,//蛇的方块的高度。
        tr = 30,//一行的方块个数。
        td = 30;//一列的方块个数。
    var game = null;
    //创建 地图函数：
    function Square(x, y, classname) {
        this.x = x * sw;
        this.y = y * sh;
        this.class = classname;
        //
        this.domElement = document.createElement('div');
        this.domElement.className = this.class;
        this.parent = document.getElementById('snakeMap');
    }
    //对DOM操作创建：
    Square.prototype.create = function () {
        this.domElement.style.position = 'absolute';
        this.domElement.style.width = sw + 'px';
        this.domElement.style.height = sh + 'px';
        this.domElement.style.left = this.x + 'px';
        this.domElement.style.top = this.y + 'px';
        //
        this.parent.appendChild(this.domElement);
    };
    //对DOM操作删除：
    Square.prototype.remove = function () {
        this.parent.removeChild(this.domElement);
    }
    //创建蛇：
    function Snake() {
        this.head = null;
        this.tail = null;
        this.pos = [];
        this.directionNum = {
            left: {
                x: -1,
                y: 0
            },
            right: {
                x: 1,
                y: 0
            },
            up: {
                x: 0,
                y: -1
            },
            down: {
                x: 0,
                y: 1
            }
        }
    }
    var snake = null;
    Snake.prototype.init = function () {
        var snakeHead = new Square(2, 0, 'snakeHead');
        snakeHead.create();
        this.head = snakeHead;
        this.pos.push([2, 0]);
        var snakeBody1 = new Square(1, 0, 'snakeBody');
        snakeBody1.create();
        this.pos.push([1, 0]);
        var snakeBody2 = new Square(0, 0, 'snakeBody');
        snakeBody2.create();
        this.tail = snakeBody2;
        this.pos.push([0, 0]);
        //形成链表：
        snakeHead.last = null;
        snakeHead.next = snakeBody1;

        snakeBody1.last = snakeHead;
        snakeBody1.next = snakeBody2;

        snakeBody2.last = snakeBody1;
        snakeBody2.next = null;
        //默认方向：向右.
        this.direction = this.directionNum.right;
    };
    Snake.prototype.getNextPos = function () {
        var nextPos = [
            this.head.x / sw + this.direction.x,
            this.head.y / sh + this.direction.y
        ]
        //撞到自己：
        var bitSelf = false;
        this.pos.forEach(function (value) {
            if (value[0] == nextPos[0] && value[1] == nextPos[1]) {
                bitSelf = true;
            }
        })
        if (bitSelf) {
            this.afterNext.die.call(this);
            return;
        }
        //撞墙：
        if (nextPos[0] < 0 || nextPos[0] > tr - 1 || nextPos[1] < 0 || nextPos[1] > td - 1) {
            this.afterNext.die.call(this);
            return;
        }
        if (food && nextPos[0] == food.pos[0] && nextPos[1] == food.pos[1]) {
            this.afterNext.eat.call(this);
            return;
        }
        this.afterNext.move.call(this);
    };
    Snake.prototype.afterNext = {
        move: function (format) {//不传参数默认undefined，就是走。

            var newBody = new Square(this.head.x / sw, this.head.y / sh, 'snakeBody');
            //更新链表关系：
            newBody.next = this.head.next;
            newBody.next.last = newBody;
            newBody.last = null;
            newBody.create();
            this.head.remove();
            var newHead = new Square(this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y, 'snakeHead');
            newBody.last = newHead;
            newHead.next = newBody;
            newHead.last = null;
            newHead.create();
            this.pos.splice(0, 0, [this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y])
            this.head = newHead;
            //this.pos.unshift([this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y]);
            if (!format) {
                this.pos.splice(this.pos.length - 1, 1);//this.pos.pop();
                this.tail.remove();
                // this.tail = newBody.next;
                this.tail = this.tail.last;
                //console.log(this.tail);
            }
            //console.log(this.pos);
        },
        eat: function () {
            this.afterNext.move.call(this, true);
            food.remove();
            createFood();
            game.score++;
            score.innerHTML = game.score;
        },
        die: function () {
            alert("你真菜，这都会死！");
            game.over();
        }
    }
    snake = new Snake();

    //创建食物：
    var food = null;
    function createFood() {
        var foodX = mathRand(0, tr - 1);
        var foodY = mathRand(0, td - 1);
        var foodEle = document.querySelector('.food');
        var include = true;
        while (include) {
            snake.pos.forEach(function (value) {
                if (value[0] == foodX && value[1] == foodY) {
                    foodX = mathRand(0, tr - 1);
                    foodY = mathRand(0, td - 1);
                } else {
                    include = false;
                }
            })
        }
        food = new Square(foodX, foodY, 'food');
        if (foodEle) {
            foodEle.style.left = foodX * sw + 'px';
            foodEle.style.top = food * sh + 'px';
        } else {
            food.create();
        }
        food.pos = [foodX, foodY];
    }
    function mathRand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //游戏：
    function Game() {
        this.timer = null;
        this.score = 0;
    }
    Game.prototype.init = function () {
        snake.init();
        //snake.getNextPos();
        createFood();
        document.onkeydown = function (e) {
            //此处有处理当按键与运动方向相反时的情况！
            if (e.key == 'ArrowLeft') {
                if (snake.direction != snake.directionNum.right) {
                    snake.direction = snake.directionNum.left;
                } else {
                    alert("拜托认真一点，方向不能反这来！");
                }
            } else if (e.key == 'ArrowRight') {
                if (snake.direction != snake.directionNum.left) {
                    snake.direction = snake.directionNum.right;
                } else {
                    alert("拜托认真一点，方向不能反这来！");
                }
            } else if (e.key == 'ArrowUp') {
                if (snake.direction != snake.directionNum.down) {
                    snake.direction = snake.directionNum.up;
                } else {
                    alert("拜托认真一点，方向不能反这来！");
                }
            } else if (e.key == 'ArrowDown') {
                if (snake.direction != snake.directionNum.up) {
                    snake.direction = snake.directionNum.down;
                } else {
                    alert("拜托认真一点，方向不能反这来！");
                }
            }
        }
        this.star();
    };
    Game.prototype.star = function () {
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            snake.getNextPos();
        }, 200);
    };
    Game.prototype.over = function () {
        clearInterval(game.timer);
        alert("你的得分为" + game.score + " ");
        map.innerHTML = "";
        snake = new Snake;
        begin.style.display = 'block';
        begin.parentNode.style.display = 'block';
    };
    Game.prototype.pause = function () {
        map.onmouseup = function () {
            clearInterval(game.timer);
            stop.parentNode.style.display = 'block';
            stop.onmouseup = function () {
                stop.parentNode.style.display = 'none';
                game.star();
            }
        }
    }























































































































}//window.onload