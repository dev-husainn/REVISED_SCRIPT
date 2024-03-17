new Date()  or Date() = gives the todays date.
new Date() creates a date object with the current date and time:

<!-- ---------------------------------- - ---------------------------------- -->


new Date("parameters") = it gives that date which you have passed parameters in it
new Date(date string) = 
new Date(date string) creates a date object from a date string:

<!-- ---------------------------------- - ---------------------------------- -->


There are 9 ways to create a new date object:new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)


<!-- --------------------------------- -- ---------------------------------- -->

 new Date(year,month,day,hours,minutes,seconds,ms) 

 Note:
 JavaScript counts months from 0 to 11:
 
 January = 0.
 
 December = 11
 <!-- ---------------------------------- - ---------------------------------- -->

 Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

Example:

const d = new Date(2018, 15, 24, 10, 33, 30);


<!-- ---------------------------------- - ---------------------------------- -->

Specifying a day higher than max, will not result in an error but add the overflow to the next month:

<!-- ---------------------------------- - ---------------------------------- -->
ou cannot omit month. If you supply only one parameter it will be treated as milliseconds.

Example
const d = new Date(2018);
<!-- ---------------------------------- - ---------------------------------- -->


<!-- --------------------------- METHODS OF DATE --------------------------- -->




<!-- ----------------------------- toString() ------------------------------ -->

toString() = Convert a date to a string


<!-- --------------------------- toDateString() ---------------------------- -->

toDateString() = The toDateString() method converts a date to a more readable format:

<!-- -------------------------- toLocaleString() --------------------------- -->

toLocaleString() = The toLocaleString() method returns a Date object as a string, using locale settings.




<!-- -------------------------- Get Date Methods --------------------------- -->

.getFullYear() =	Get year as a four digit number (yyyy).

.getMonth() = Get month as a number (0-11).

.getDate() =	Get day as a number (1-31).

.getDay() =	Get weekday as a number (0-6).

.getHours() = Get hour (0-23).

.getMinutes() = Get minute (0-59).

.getSeconds() = Get second (0-59). 

.getMilliseconds() = /Get millisecond (0-999).

.getTime() =	Get time (milliseconds since January 1, 1970)