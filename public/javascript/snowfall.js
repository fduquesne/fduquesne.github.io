/**
 * This Snowfall has been inspired by @CodingTrain
 * @see https://www.youtube.com/watch?v=cl-mHFCGzYk (This code has been inspired by this video).
 * @see https://github.com/CodingTrain (Offical github organisation of @CodingTrain)
 */

window.onload = () => {
    const canvas = this.document.getElementById('sidebar--snowfall');

    let getRandomSize = () => {
        let r = Math.random() + 1;

        return r * r;
    };

    let Vector = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.maxValue;

        this.add = vec => {
            this.x += vec.x;
            this.y += vec.y;

            this.checkLimit();
        };

        this.mult = n => {
            this.x *= n;
            this.y *= n;

            this.checkLimit();
        };

        this.copy = () => new Vector(this.x, this.y);

        this.limit = n => {
            this.maxValue = n;
        };

        this.checkLimit = () => {
            this.x = this.maxValue && this.x > this.maxValue ? this.maxValue : this.x;
            this.y = this.maxValue && this.y > this.maxValue ? this.maxValue : this.y;
        };
    };

    let SnowFlake = function (sx, sy) {
        let x = sx || Math.floor(Math.random() * canvas.getBoundingClientRect().width);
        let y = sy || Math.floor(Math.random() * -90) - 10;

        this.elem = canvas.appendChild(document.createElement('div'));
        this.pos = new Vector(x, y);
        this.vel = new Vector();
        this.acc = new Vector();
        this.size = getRandomSize();
        this.angle = Math.random() * Math.PI * 2;
        this.xOffset = Math.min(Math.max(Math.sin(this.angle) * this.size, -1), 1);

        this.isOffScreen = () => {
            return (
                this.pos.y > canvas.getBoundingClientRect().height + this.size || this.pos.x < 0 || this.pos.x > canvas.getBoundingClientRect().width
            );
        };

        this.applyForce = force => {
            let f = force.copy();
            f.mult(this.size);

            this.acc.add(f);
        };

        this.update = () => {
            this.pos.x += this.xOffset;

            this.vel.add(this.acc);
            this.vel.limit(this.size);
            this.pos.add(this.vel);
            this.acc.mult(0);
        };

        this.render = () => {
            this.elem.style.position = 'absolute';
            this.elem.style.left = this.pos.x + 'px';
            this.elem.style.top = this.pos.y + 'px';
            this.elem.style.width = this.size + 'px';
            this.elem.style.height = this.size + 'px';
            this.elem.style.borderRadius = '50%';
            this.elem.style.backgroundColor = '#b8b8be';
            this.elem.style.zIndex = '-999';
        };
    };

    let Sketch = function () {
        this.snow = [];
        this.gravity = new Vector(0, 0.3);

        this.setup = () => {
            for (let i = 0; i < 200; i++) {
                const snowFlake = new SnowFlake(
                    Math.random() * canvas.getBoundingClientRect().width,
                    Math.random() * canvas.getBoundingClientRect().height
                );
                this.snow.push(snowFlake);
            }
        };

        this.draw = () => {
            setInterval(() => {
                if (this.snow.length < 250) {
                    this.snow.push(new SnowFlake());
                }

                for (let i = 0; i < this.snow.length; i++) {
                    const snowFlake = this.snow[i];

                    const intensity = (Math.random() * -2 + 1) / 10;
                    const wind = new Vector(intensity, 0);

                    snowFlake.applyForce(this.gravity);
                    snowFlake.applyForce(wind);
                    snowFlake.update();
                    snowFlake.render();

                    if (snowFlake.isOffScreen()) {
                        snowFlake.elem.remove();
                        this.snow.splice(i, 1);
                    }
                }
            }, 50);
        };
    };

    const sketch = new Sketch();
    sketch.setup();
    sketch.draw();
};
