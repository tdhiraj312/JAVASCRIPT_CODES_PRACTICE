    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function drawClock() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(200, 200, 150, 0, 2 * Math.PI);
        ctx.stroke();

        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDeg = (seconds / 60) * 360;
        const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
        const hourDeg = ((hours % 12) * 30) + ((minutes / 60) * 30);

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate((Math.PI / 180) * hourDeg);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -70);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate((Math.PI / 180) * minuteDeg);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -100);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate((Math.PI / 180) * secondDeg);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -120);
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.restore();
    }

    setInterval(drawClock, 1000);