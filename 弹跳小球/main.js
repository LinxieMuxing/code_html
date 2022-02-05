// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

//随机化小球颜色
function randomColor(){
  return 'rgb(' +
          random(0, 255) + ', ' +
          random(0, 255) + ', ' +
          random(0, 255) + ')';
}

//创建小球类
function Ball(x, y, velX, velY, color, size){
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//画小球
Ball.prototype.draw = function(){
  ctx.beginPath();//声明要开始在纸上画图像了
  ctx.fillStyle = this.color;//定义这个图像的颜色
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//中心点 大小 以及弧度
  ctx.fill();//结束了这次绘画，并用颜色填充
}

//let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
//testBall.draw();

//更新小球的数据 即小球运动
Ball.prototype.update = function(){
  if((this.x + this.size) >= width){
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;

}

//让小球动起来
let balls = [];

while(balls.length < 10){
  let size = random(10, 20);
  let ball = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomColor(),
      size
    );
  //ball.draw();
  balls.push(ball);
}

function loop(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';//将画布颜色设置为半透明的黑色
  ctx.fillRect(0, 0, width, height);

  for(let i = 0; i < balls.length; i++){
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);//再运行一次函数
}
//loop();

//碰撞测试
Ball.prototype.collisionDetect = function(){
  for(let j = 0; j < balls.length; j++){
    if(this !== balls[j]){
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if(distance < this.size + balls[j].size){
        balls[j].color = this.color = randomColor();
        this.velX = -(this.velX);
        this.velY = -(this.velY);
        balls[j].velX = -(balls[j].velX);
        balls[j].velY = -(balls[j].velY);
      }
    }
  }
}
loop();

