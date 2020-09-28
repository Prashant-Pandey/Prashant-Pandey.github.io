const headerCanvas = document.getElementById("header-canvas");
let currentThemeColor = '#000000';

let reDrawCanvas = () => {
    headerCanvas.width = window.innerWidth - 50;
    headerCanvas.height = window.innerHeight - 10;
    const shapes = {
        CIRCLE: 'Circle',
        SQUARE: 'Square'
    }
    const canvasWidth = headerCanvas.width;
    const ctx = headerCanvas.getContext('2d');
    const headerText = '<Prashant Pandey/>';
    let particleArray = [];
    ctx.fillStyle = 'black';
    if (window.innerWidth >= 1024) {
        ctx.font = canvasWidth / (headerText.length * 4) + 'px Arial Black';
        ctx.fillText(headerText, 0, headerText.length);
    } else {
        ctx.font = '20px Arial Black';
        const headerParts = headerText.split(' ');
        ctx.fillText(headerParts[0], 0, 20);
        ctx.fillText(headerParts[1], 30, 40);
    }

    let data = ctx.getImageData(0, 0, headerText.length * 16, 50);

    class Particle {
        constructor(x, y, size, shape, direction) {
            this.direction = direction;
            this.x = x;
            this.y = y;
            this.size = size;
            this.baseX = x;
            this.baseY = y;
            this.shape = shape;
            this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            this.gravity = Math.random();
            this.speedX = Math.random();
            this.speedY = Math.random();
        }
        draw() {
            ctx.fillStyle = currentThemeColor === '#000000' ? '#ffffff' : '#282828';
            ctx.beginPath();
            if (this.shape === shapes.CIRCLE) {
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            }
            if (this.shape === shapes.SQUARE) {
                ctx.fillRect(this.x, this.y, this.size, this.size)
            }
            ctx.closePath();
            ctx.fill();
        }
        update() {
            const topX = 0, topY = 0;
            if (this.shape === shapes.SQUARE) {
                if(this.y == 0){
                    this.y +=this.speedX;
                }
                if (this.x>0&&this.x<headerCanvas.width) {
                    this.x += this.speedX;
                } else{
                    this.x -= this.speedY;
                    
                }

                if(this.y>0&&this.y<headerCanvas.height){
                    this.y -=this.speedY;
                }else{
                    this.y +=this.speedY;
                }
            }
        }
    }
    function init() {
        particleArray = [];
        // Math.random() * headerCanvas.width, Math.random()*headerCanvas.height
        // Math.random() * headerText.length * 16, Math.random() * 32
        for (let i = 0, i2 = data.height; i < i2; i++) {
            for (let j = 0, j2 = data.width; j < j2; j++) {
                if (data.data[(i * 4 * data.width) + (j * 4) + 3] > 128) {
                    let positionX = j, positionY = i;
                    particleArray.push(new Particle(positionX * 3, positionY * 3, 1, shapes.CIRCLE));

                }
            }
        }

        // for (let i = 0; i < 50; i++) {
        //     particleArray.push(new Particle(0 + Math.random() * 100, 75 + Math.random() * headerCanvas.height, Math.random() * 5, shapes.SQUARE));
        // }

        // for (let i = 0; i < 50; i++) {
        //     particleArray.push(new Particle(headerCanvas.width - Math.random() * 100, 75 + Math.random() * headerCanvas.height, Math.random() * 5, shapes.SQUARE));
        // }

        // for (let i = 0; i < 300; i++) {
        //     particleArray.push(new Particle(Math.random() * headerCanvas.width, 75 + Math.random() * headerCanvas.height, Math.random() * 5, shapes.SQUARE));
        // }
    }
    init();
    function animate() {
        ctx.clearRect(0, 0, headerCanvas.width, headerCanvas.height);
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            particleArray[i].update();
        }
        requestAnimationFrame(animate);
    }
    animate();
}


reDrawCanvas();

document.onresize = (e) => {
    reDrawCanvas();
}

// const hmaburger = document.getElementById('hamburger');
// const navbar = document.getElementById('navbar');
// hmaburger.onclick = (e) => {
//     hmaburger.classList.toggle('open');
//     navbar.classList.toggle('hidden');
// }

