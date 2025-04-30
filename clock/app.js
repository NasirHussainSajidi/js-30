const secondHand = document.querySelector('.second-hand');
        const minHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');  
        function setDate(){
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees }deg)`;

            const minutes = now.getMinutes();
            const minutesDegrees = ((minutes / 60) * 360)+ 90;
            hourHand.style.transform = `rotate(${minutesDegrees }deg)`;


            const hours = now.getHours();
            const hoursDegrees = ((hours / 12) * 360) + 90;
            minHand.style.transform = `rotate(${hoursDegrees }deg)`;
        }
        setInterval(setDate, 1000);



function updateClock() {
        const clock = document.getElementById('clock');
        let now = new Date();
        let hours = now.getHours();   
        
        let am_pm = "AM"
        if(hours > 12){
            hours = hours - 12;
            am_pm = "PM";
        }
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        clock.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}: ${seconds.toString().padStart(2,0)} ${am_pm}`
    }
    setInterval(updateClock, 1000);
    updateClock();