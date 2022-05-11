//Задача 1

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id) {
		if (typeof id === 'undefined') {
			throw new Error('error text');
		} else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
			return console.error('The alert exist');
		}
		return this.alarmCollection.push({
			id,
			time,
			callback
		})
	}
	removeClock(id) {
		let inputLength = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
		let outputLength = this.alarmCollection.length;
		return inputLength > outputLength;
	}

	getCurrentFormattedTime() {
		let begin = (number) => {
			if (number < 10) {
				return '0' + number;
			}
			return number;
		}
		let currentTime = new Date();
		let minutes = begin(currentTime.getMinutes());
		let hours = begin(currentTime.getHours());
		return hours + ':' + minutes;
	}

	start() {
		let checkClock = (clock) => {
			let alarm = this.getCurrentFormattedTime();
			if (clock.time === alarm) {
				return clock.callback();
			}
		}
		if (this.timerId === null) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(clock => checkClock(clock));
			}, 1000);
		}
		return;
	}
	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			return this.timerId = null;
		}
	}
	printAlarms() {
		return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
	}
	clearAlarms() {
		this.stop();
		return this.alarmCollection = [];
	}
}

//Задача 2

let example = new AlarmClock();
example.addClock('07:00', () => console.log('Пора вставать!'), 1);
example.addClock('07:15', () => console.log('Вставай, не успеешь собраться!'), 2);
example.removeClock();
example.addClock('07:30', () => console.log('Проспал, можно не спешить!'), 3);
example.start();
example.stop();
example.printAlarms();