// 9 ways of creation of dates

// new Date()
const today = new Date();
console.log(today); // 2025-03-26T13:09:37.673Z

// new Date(date string)
const a = new Date("2025-03-26");
console.log(a);

// new Date(year,month)
const b = new Date(2025, 3);
console.log(b);

// new Date(year,month,day)
const c = new Date(2025, 2, 26);
console.log(c);

// new Date(year,month,day,hours)
const d = new Date(2025, 2, 26, 6);
console.log(d);

// new Date(year,month,day,hours,minutes)
const e = new Date(2025, 2, 26, 6, 50);
console.log(e);

// new Date(year,month,day,hours,minutes,seconds)
const f = new Date(2025, 2, 26, 6, 50, 40);
console.log(f);
// new Date(year,month,day,hours,minutes,seconds,ms)
const g = new Date(2025, 2, 26, 6, 50, 50, 1000);
console.log(g);
// new Date(milliseconds)
const h = new Date(100000000000);
console.log(h);

/*
🚀 Summary
Method                       Type	Common Methods
Get Date/Time             	getFullYear(), getMonth(), getDate(), getHours(), getMinutes()
Set Date/Time	              setFullYear(), setMonth(), setDate(), setHours(), setMinutes()
Format Date	                toDateString(), toTimeString(), toISOString(), toLocaleString()
Timestamp	                  Date.now(), getTime(), setTime()

*/

// current date:

let now = new Date();
console.log(now); // ✅ Wed Mar 27 2024 14:30:00 GMT+0530

// specific date:

let birthday = new Date(2000, 4, 15); // May 15, 2000 (Months are 0-based)
console.log(birthday.toDateString()); // ✅ Mon May 15 2000

//  getting date parts:

let date = new Date();
console.log(date.getFullYear()); // ✅ 2025
console.log(date.getMonth()); // ✅ 2 (March, since months start at 0)
console.log(date.getDate()); // ✅ 26
console.log(date.getDay()); // ✅ 3 (Wednesday)

// Formatting Date Strings:

console.log(date.toISOString()); // ✅ "2024-03-27T14:30:00.000Z"
console.log(date.toLocaleDateString("en-US")); // ✅ "3/27/2024"
console.log(date.toLocaleTimeString("en-GB")); // ✅ "14:30:00"

//  Setting Date & Time:

let setDate = new Date();
setDate.setFullYear(2025);
setDate.setMonth(5); // June
setDate.setDate(10);
console.log(setDate.toDateString()); // ✅ "Tue Jun 10 2025"

//  Getting Timestamps (Milliseconds Since 1970)

console.log(Date.now()); // ✅ 1742995621092 (current timestamp)
console.log(date.getTime()); // ✅ Timestamp of the date object
