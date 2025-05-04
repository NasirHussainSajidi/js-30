const canvas = document.querySelector('#draw')
        const ctx = canvas.getContext('2d');
        canvas.wdith = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 100;
        // ctx.globalCompositeOperation = 'multiply'

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let hue = 0;
        let direction = true; // true means the line is getting thicker, false means it is getting thinner
        function draw(e) {
            if (!isDrawing) return; // stop the fn from running when they are not moused down
            console.log(e);
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            
            ctx .beginPath(); // start from
            ctx.moveTo(lastX, lastY); // move the pen to the last known position
            ctx.lineTo(e.offsetX, e.offsetY); // draw a line to the current position
            ctx.stroke(); // draw the line
            [lastX, lastY] = [e.offsetX, e.offsetY]; // update the last known position

            hue++;
            if (hue >= 360) {
                hue = 0;
            }
            if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                direction = !direction;
            }
            if (direction) {
                ctx.lineWidth++;
            } else {
                ctx.lineWidth--;
            }
           
        }
        
        canvas.addEventListener('mousedown', (e)=> {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY]
        } );
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', ()=> isDrawing = false);
        canvas.addEventListener('mouseout', ()=> isDrawing = false);