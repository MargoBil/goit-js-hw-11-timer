'use strict';
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start () {
    const expectedDate = this.targetDate.getTime ();
    setInterval(() => {
      const currentDate = new Date ().getTime ();
      const interval = expectedDate - currentDate;
      const days = String(Math.floor(interval / (1000 * 60 * 60 * 24))).padStart(3, '0');
      const hours = String(Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((interval % (1000 * 60)) / 1000)).padStart(2, '0');
      document.querySelector(`${this.selector} [data-value="days"]`).textContent = days;
      document.querySelector(`${this.selector} [data-value="hours"]`).textContent = hours;
      document.querySelector(`${this.selector} [data-value="mins"]`).textContent = mins;
      document.querySelector(`${this.selector} [data-value="secs"]`).textContent = secs;
    }, 1000);
  }
}

const newTimer = new CountdownTimer ({
  selector: '#timer-1',
  targetDate: new Date ('Jul 17, 2020'),
});

newTimer.start ();
