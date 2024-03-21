// Get current time
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  // Update current time every second
  setInterval(() => {
    document.getElementById('current-time').textContent = getCurrentTime();
  }, 1000);
  
  // Set Alarm
  function setAlarm() {
    // Get input values
    const minutes = parseInt(document.getElementById('alarm-minutes').value);
    const seconds = parseInt(document.getElementById('alarm-seconds').value);
    
    // Calculate alarm time
    const currentTime = new Date();
    const alarmTime = new Date(currentTime.getTime() + minutes * 60000 + seconds * 1000);
    
    // Display alarm set time
    document.getElementById('alarm-set-time').textContent = `Alarm set for ${alarmTime.toLocaleTimeString()}`;
    
    // Start alarm
    alarmInterval = setTimeout(() => {
      document.getElementById('alarm-sound').play(); // Play alarm sound
      document.getElementById('alarm-set-time').textContent = ''; // Show alarm ringing status
    }, minutes * 60000 + seconds * 1000);
  }
  
  
  // World Clock
  const cities = [
    { name: 'New York', offset: -5 },
    { name: 'London', offset: 0 },
    { name: 'Tokyo', offset: 9 },
    { name: 'Sydney', offset: 11 },
    { name: 'Dubai', offset: 4 }
  ];
  
  const worldClockList = document.getElementById('world-clock-list');
  cities.forEach(city => {
    const cityTime = new Date(new Date().getTime() + city.offset * 3600 * 1000);
    const cityTimeString = `${cityTime.toLocaleTimeString()} (${city.name})`;
    const li = document.createElement('li');
    li.textContent = cityTimeString;
    worldClockList.appendChild(li);
  });
  
  // Stopwatch
  let stopwatchInterval;
  let stopwatchTime = 0;
  function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
      stopwatchTime += 10;
      const minutes = Math.floor(stopwatchTime / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((stopwatchTime % 60000) / 1000).toString().padStart(2, '0');
      const milliseconds = Math.floor((stopwatchTime % 1000) / 10).toString().padStart(2, '0');
      document.getElementById('stopwatch-display').textContent = `${minutes}:${seconds}:${milliseconds}`;
    }, 10);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
  }
  
  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatch-display').textContent = '00:00:00';
  }
  
  // Timer
  let timerInterval;
  function setTimer() {
    const input = document.getElementById('timer-input').value;
    const [hours, minutes, seconds] = input.split(':').map(part => parseInt(part));
    const totalTime = hours * 3600 + minutes * 60 + seconds;
    if (isNaN(totalTime) || totalTime <= 0) {
      alert('Invalid input! Please enter a valid time.');
      return;
    }
    let remainingTime = totalTime;
    timerInterval = setInterval(() => {
      remainingTime--;
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById('alarm-sound').play();
        document.getElementById('timer-input').value = ''; // Clear timer input after ringing
      }
      const hoursLeft = Math.floor(remainingTime / 3600).toString().padStart(2, '0');
      const minutesLeft = Math.floor((remainingTime % 3600) / 60).toString().padStart(2, '0');
      const secondsLeft = (remainingTime % 60).toString().padStart(2, '0');
      document.getElementById('timer-input').value = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
    }, 1000);
  }
  
  // Stop Timer
  function stopTimer() {
    clearInterval(timerInterval);
  }
  