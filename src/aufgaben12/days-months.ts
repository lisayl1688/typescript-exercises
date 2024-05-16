
import { Weekday } from './string';
console.log(Weekday);

enum Months {
    January,
    February, 
    March, 
    April, 
    May, 
    June, 
    July, 
    August, 
    September, 
    October,
    November, 
    December
}
console.log(Months);
for (const key in Months) {
    console.log(key);
  }