import { differenceInYears } from "date-fns";

const today = new Date();
console.log(today);

const startDate = new Date(0);
console.log(startDate);

const birthday = new Date('1943-10-20');
console.log(birthday);

//? monate beginnen bei 0 mit der zählung zb. 4 ==> mai
const projectStartDate = new Date(2024, 4, 10, 13, 45);
console.log(projectStartDate);
//* formatierung
console.log('locale String Deutsch', projectStartDate.toLocaleString());
console.log('locale String GB', projectStartDate.toLocaleString('en-GB'));
console.log('locale String US', projectStartDate.toLocaleString('en-US'));
console.log('locale String deutsch mit UTC', projectStartDate.toLocaleString('de-DE',{timeZone:'UTC'}));
//! get day holt sich den tag der woche
console.log('project start day of week:', projectStartDate.getDay());
console.log('project start day date:', projectStartDate.getDate());
//! zähler beginnt bei 0
console.log('project start day month:', projectStartDate.getMonth());
console.log('project start day year:', projectStartDate.getFullYear());
//! get time sind die anzahl der millisekunden seit dem 01.01.1970
console.log('project start date time:', projectStartDate.getTime());

projectStartDate.setHours(2);
console.log('project start date 2 hours:', projectStartDate);

//* date-fns
const age = differenceInYears(birthday, new Date());
console.log('age:', age);