---
title: Calendar
description: Displays a calendar with registered events imported from a json.
author: Abinash Shaw
tags: calendar, events
created:  2015 July 12

---

Calendar
=======

Displays a calendar with events imported from a json.

The application has been developed using basic HTML, CSS, JavaScript and has extensive use of jQuery.

Attaching screenshot:

![Calendar screenshot](https://cloud.githubusercontent.com/assets/2913308/16149339/c03b8906-34ad-11e6-9246-ca30e175b0ff.png)

Few features/implementations in the code:

1) The Calendar application only displays the current events retrieved from the sample JSON, and does not have have the Edit/Delete/Cancel functionalities.

2) I took the independence and have played a bit with the CSS to improve the aesthetic behaviour of the application.

3) I have tried to maintain an object oriented architecture & implemented encapsulation, where all the global variables & functions are attributed to a single object per file.

4) The calendar timeline shows a normal day of 8AM - 6PM, unless there are events beyond the range. In case of events that do not lie in the range, the range is widened as per required to show the calendar events. In case of events all throughout the day, an apt full day calendar timeline is displayed (1AM - 12 AM).

5) I have provided comments wherever possible for a better understanding of the code.

6) The application was developed partially on MAC OS X using Sublime Text 3 & Google Chrome, and partially on a Windows machine using Visual Studio & Internet Explorer. Tested on both browsers.

7) Pardon my excessive usage of jQuery in the code. I am not a slave of jQuery, but find it easier to approach. :)
