const humanReadable = seconds => `HH:${seconds % 3600}:${seconds % 60}`


console.log(humanReadable(12))
console.log(humanReadable(48))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(3600))