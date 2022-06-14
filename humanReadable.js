// const humanReadable0 = seconds => `HH:${seconds % 3600}:${seconds % 60}`
const humanReadable1 = seconds => {
	const times = {
		hours: `${~~(seconds / 3600)}`.padStart(2, '0'),
		minutes: `${~~((seconds % 3600) / 60)}`.padStart(2, '0'),
		seconds: `${seconds % 60}`.padStart(2, '0'),
	};

	return times;
};

const humanReadable2 = seconds => `${`${~~(seconds / 3600)}`.padStart(2, '0')}:${`${~~((seconds % 3600) / 60)}`.padStart(2, '0')}:${`${seconds % 60}`.padStart(2, '0')}`

const humanReadable = seconds => {
	const secs = Math.max(Math.min(359999, seconds), 0);

	const [h, m, s] = [
		`${~~(secs / 3600)}`.padStart(2, '0'),
		`${~~((secs % 3600) / 60)}`.padStart(2, '0'),
		`${secs % 60}`.padStart(2, '0'),
	]

	return `${h}:${m}:${s}`;
}

const humanReadableA = seconds => [`${~~(seconds / 3600)}`, `${~~((seconds % 3600) / 60)}`, `${seconds % 60}`].map(i => i.padStart(2, '0')).join(':');


console.log(humanReadable(12))
console.log(humanReadable(48))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(120))
console.log(humanReadable(304))
console.log(humanReadable(459))
console.log(humanReadable(783))
console.log(humanReadable(3600))
console.log(humanReadable(5400))
console.log(humanReadable(359999))
console.log(humanReadable(459999))
console.log(humanReadable(-12))