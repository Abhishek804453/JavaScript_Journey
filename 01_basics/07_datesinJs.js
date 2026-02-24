let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toDateString()); // Mon Feb 23 2026

// console.log(myDate.toISOString()); // 2026-02-23T18:05:52.839Z

// console.log(myDate.toJSON()); // 2026-02-23T18:05:52.839Z

// console.log(myDate.toLocaleDateString()); // 2/23/2026

// console.log(myDate.toLocaleString()); // 2/23/2026, 6:05:52 PM

// console.log(myDate.toLocaleTimeString()); // 6:05:52 PM

console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)

// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 0, 23, 5, 3)

// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2026-01-14")

// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("02-23-2026")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})