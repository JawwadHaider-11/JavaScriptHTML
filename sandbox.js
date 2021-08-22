const countdown = () =>{
    const countDate = new Date('July 29, 2021 00:10:00').getTime();
    const nowDate = new Date().getTime();
    const gap = countDate - nowDate;
    // console.log(countDate,nowDate,gap); 

    const seconods = 1000;
    const minutes = seconods * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours );
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconods);
    // console.log(textDays,textHours,textMinutes,textSeconds);

    document.querySelector('.days').innerHTML = textDays;
    document.querySelector('.hours').innerHTML = textHours;
    document.querySelector('.minutes').innerHTML = textMinutes;
    document.querySelector('.seconds').innerHTML = textSeconds;
}

setInterval(countdown, 1000);
// countdown();