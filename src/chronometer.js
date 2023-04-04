class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;  
      if(printTimeCallback) {
        printTimeCallback()
      }
    }, 1000) 
    }
   
    

  getMinutes() {
    // ... your code goes here
    let totalMinutes = this.currentTime / 60

    return Math.floor(totalMinutes)
  }

  getSeconds() {
    // ... your code goes here
    let totalSeconds = this.currentTime % 60

    return totalSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let singleDigitNumber = value.toString();

    if (singleDigitNumber.length < 2) {
      singleDigitNumber = "0" + singleDigitNumber.slice(0,1)
    }
    return singleDigitNumber
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutesSplit = this.getMinutes();
    let minutesString = minutesSplit.toString();
    let secondsSplit = this.getSeconds();
    let secondsString = secondsSplit.toString();

    if (minutesString.length < 2) {
      minutesString = "0" + minutesString.slice(0,1)
    }
    if (secondsString.length < 2) {
      secondsString = "0" + secondsString.slice(0,1)
    } 
   
    return `${minutesString}:${secondsString}`
    
  }
}
