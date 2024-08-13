const countdown = () => {
  // the deadline date
  const endDate = new Date("September 19, 2024 00:00:00").getTime();
  //   today's date
  const now = new Date().getTime();
  //   countdown logic
  const diff = endDate - now;

  //   counting the number of days, hours, minutes and seconds
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diff / days);
  let timeHours = Math.floor((diff % days) / hours);
  let timeMinutes = Math.floor((diff % hours) / minutes);
  let timeSeconds = Math.floor((diff % minutes) / seconds);

  //   Applying less than 10 to appear as a 2-digit number
  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  //   Changing text in html through js
  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};

setInterval(countdown, 1000);
