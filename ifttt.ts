// declare var require: any
// var moment = require('moment');

// Donald Trump 2017 presidential inauguration was at 12:00 PM - 5:00 PM on Friday, January 20
// All times are in Eastern Time.
var start = moment("20 Jan 2017 12:00 EST"); 
// 4 years term
var end = start.clone().add(4, 'years');
var now = moment();

// get days to go
var totalDaysToGo = end.diff(now, 'days');

// get total number of days since Trump Inauguration
var totalNumOfDays = now.diff(start, 'days');

// get Number of year
var numOfYear = now.diff(start, 'years');
// get Number of Month
var numOfMonth = now.diff(start.add(numOfYear, 'years'), 'months');
// get Number of Days
var numOfDays = now.diff(start.add(numOfMonth, 'months'), 'days');

// generate the final message
var yearMsg, monthMsg, dayMsg;
switch(numOfYear){
  case 0: yearMsg = "";
  break;
  case 1: yearMsg = "1 year ";
  break;
  default: yearMsg = numOfYear + " years ";
}
switch(numOfMonth){
  case 0: monthMsg = "";
  break;
  case 1: monthMsg = "1 month ";
  break;
  default: monthMsg = numOfMonth + " months ";
}
switch(numOfDays){
  case 0: dayMsg = "";
  break;
  case 1: dayMsg = "1 day ";
  break;
  default: dayMsg = numOfDays + " days ";
}

var msg = ("Donald Trump has been the President of United States for " + yearMsg + monthMsg + dayMsg).trim() + ", which is " + totalNumOfDays + " days in total and " + ((totalNumOfDays/(totalNumOfDays+totalDaysToGo)) * 100).toFixed(2) + "% of the term. " + totalDaysToGo + " days to go. @realDonaldTrump";

var isDonaldTrumpEndsToday = end.diff( now, 'days' );
if ( isDonaldTrumpEndsToday > 0 ) {
	Twitter.postNewTweet.setTweet(msg);
} else if ( isDonaldTrumpEndsToday == 0 ) {
	Twitter.postNewTweet.setTweet("Congratulations! Fellow Americans. Wake up now. You're gonna to have a new president today. My watch has ended. Thank you. God bless America.");
} else {
	// Donald Trump is gone. Mission complete :)
	Twitter.postNewTweet.skip("Donald Trump is gone. Mission complete.");
}