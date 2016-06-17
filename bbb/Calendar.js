
var recruiterboxCalender = {

    // Stores the current date of events displayed on the page
    currentDate: new Date(),

    // Function that creates the calendar structure depending on the date passed
    // @parameter: sDateText - contains the date text wrt to currentDate
    getDate: function (sDateText) {
        var sDateToDisplay, oDate;
        if (sDateText === "Today") {
            oDate = new Date();
        } else if (sDateText === "Next") {
            oDate = recruiterboxCalender.currentDate.setDate(recruiterboxCalender.currentDate.getDate() + 1);
        } else if (sDateText === "Previous") {
            oDate = recruiterboxCalender.currentDate.setDate(recruiterboxCalender.currentDate.getDate() - 1);
        }

        // To convert the date in millisecs to date object
        oDate = new Date(oDate);
        recruiterboxCalender.currentDate = oDate;
        $(".currentDate").html(oDate.toString().substr(4, 6) + ", " + oDate.toString().substr(11, 4));

        $("#calendarContainer").empty();
        recruiterboxCalender.createCalendarHTMLGrid();
        recruiterboxCalender.showCalenderEvents(oDate);
        recruiterboxCalender.handleEventTimeline();
    },

    // To create dynamic HTML depending on working hours
    createCalendarHTMLGrid: function () {
        var iTimeDivs = 24,
            iTimeCounter, iCounter,
            iStartTime = 1,
            iEndTime = 18;

        for (iTimeCounter = 0; iTimeCounter < iTimeDivs; iTimeCounter++) {
            var oTimeMainDiv = document.createElement("div"),
                oFirstHalfDiv = document.createElement("div"),
                oSecondHalfDiv = document.createElement("div"),
                oThirdHalfDiv = document.createElement("div"),
                oFourthHalfDiv = document.createElement("div"),
                oTimeDisplay = document.createElement("div");

            oTimeDisplay.className = "timeDisplay";
            oTimeMainDiv.className = "timeMainDiv";
            oFirstHalfDiv.className = oSecondHalfDiv.className = oThirdHalfDiv.className = oFourthHalfDiv.className = "halfDivs";

            // To handle the AM/PM structure and the naming of the div ids
            if (iStartTime < 10) {
                $(oTimeDisplay).append(iStartTime + " AM");
                oFirstHalfDiv.id = "HalfHour_0" + iStartTime + "00";
                oSecondHalfDiv.id = "HalfHour_0" + iStartTime + "15";
                oThirdHalfDiv.id = "HalfHour_0" + iStartTime + "30";
                oFourthHalfDiv.id = "HalfHour_0" + iStartTime + "45";
            } else {
                if (iStartTime >= 10 && iStartTime <= 12) {
                    $(oTimeDisplay).append(iStartTime + " PM");
                } else if (iStartTime > 12 && iStartTime < 24) {
                    $(oTimeDisplay).append(iStartTime - 12 + " PM");
                } else if (iStartTime === 24) {
                    $(oTimeDisplay).append(iStartTime - 12 + " AM");
                    iStartTime = "00"
                }
                oFirstHalfDiv.id = "HalfHour_" + iStartTime + "00";
                oSecondHalfDiv.id = "HalfHour_" + iStartTime + "15";
                oThirdHalfDiv.id = "HalfHour_" + iStartTime + "30";
                oFourthHalfDiv.id = "HalfHour_" + iStartTime + "45";
            }
            iStartTime++;
            $(oTimeMainDiv).append(oFirstHalfDiv).append(oSecondHalfDiv).append(oThirdHalfDiv).append(oFourthHalfDiv);
            $("#calendarContainer").append(oTimeDisplay).append(oTimeMainDiv);
        }
    },

    // Matches the date with the JSON & renders all events
    // @parameter: oDate = Date object to show events on that particualr day.
    showCalenderEvents: function (oDate) {

        var arrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var oDateDay = oDate.toString().substr(8, 2),
            oDateMonth = arrMonthNames[oDate.getMonth()],
            oDateYear = oDate.getFullYear().toString();

        for (var prop in calendarEvents) {
            if (calendarEvents.hasOwnProperty(prop)) {
                if (calendarEvents[prop].startTime.substr(8, 2) == oDateDay && calendarEvents[prop].startTime.substr(4, 3) == oDateMonth && calendarEvents[prop].startTime.substr(11, 4) == oDateYear) {
                    var oStartTime = calendarEvents[prop].startTime.substr(16, 2) + calendarEvents[prop].startTime.substr(19, 2),
                        oEndTime = calendarEvents[prop].endTime.substr(16, 2) + calendarEvents[prop].endTime.substr(19, 2),

                        // Creating jQuery selector objects to minify multiple DOM access
                        oStartTimeObj = $("#HalfHour_" + oStartTime),
                        oEndTimeObj = $("#HalfHour_" + oEndTime);

                    // Add title and timeline of the event
                    oStartTimeObj.addClass("eventBound").append("<span class='eventTitle'><img src='Images/calendar-icon.png'/>" + calendarEvents[prop].title + "</span>").append("<span class='eventTime'>" + calendarEvents[prop].startTime.substr(16, 5) + " - " + calendarEvents[prop].endTime.substr(16, 5) + "</span>");

                    oEndTimeObj.addClass("eventBound");

                    // Assumption - No event is more than 3 hours long
                    if (oStartTimeObj.parent().find("#HalfHour_" + oEndTime).length) {
                        oStartTimeObj.nextUntil("#HalfHour_" + oEndTime).andSelf().addClass("isCalendarEvent");
                    } else {
                        oStartTimeObj.nextAll(".halfDivs").andSelf().addClass("isCalendarEvent");
                        if (oStartTimeObj.parent().next("div").next("div").find("#HalfHour_" + oEndTime).length) {
                            oStartTimeObj.parent().next("div").next("div").find("#HalfHour_" + oEndTime).prevAll().addClass("isCalendarEvent");
                        } else {
                            oStartTimeObj.parent().next("div").next("div").children(".halfDivs").addClass("isCalendarEvent");
                            oStartTimeObj.parent().next("div").next("div").next("div").next("div").find("#HalfHour_" + oEndTime).prevAll().addClass("isCalendarEvent");
                        }
                    }

                    // To handle cyclic timeline - where an event can start one one day (11PM) and end on the other (1AM)
                    if (oEndTimeObj.hasClass("eventBound") && (!(oEndTimeObj.prev(".halfDivs").hasClass("isCalendarEvent")))) {

                        if (!(oEndTimeObj.parent().prev("div").prev("div").children().last().hasClass('isCalendarEvent'))) {
                            oEndTimeObj.prevAll().addClass("isCalendarEvent");
                            oEndTimeObj.parent().prev("div").prev("div").children().addClass('isCalendarEvent');
                            oEndTimeObj.parent().prev("div").prev("div").prev("div").prev("div").children().addClass('isCalendarEvent');
                        }
                    }

                }
            }
        }
    },

    // To handle when the calendar timeline starts and ends
    handleEventTimeline: function () {
        var sFirstEventStartTime = Number($("#calendarContainer").find(".isCalendarEvent").first().attr("id").substr(9, 2)),
            sLastEventEndTime = Number($("#calendarContainer").find(".isCalendarEvent").last().attr("id").substr(9, 2));

        // If there are no events before 8AM, remove calendar timeline prior to that
        if (sFirstEventStartTime > 8) {
            $("#HalfHour_0800").parent().prev("div").prevAll("div").remove();
        }

        // If there are no events after 6PM, remove calendar timeline after that
        if (sLastEventEndTime < 18 && sLastEventEndTime !== 0) {
            $("#HalfHour_1800").parent().nextAll("div").remove();
        }
    }
};

$(document).ready(function () {
    recruiterboxCalender.getDate("Today");
});