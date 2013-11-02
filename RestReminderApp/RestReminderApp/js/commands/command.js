/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    var initAppBarGlobalCommands = function () {
        var eventsButton = document.getElementById("navigate-onClick-to-events");
        eventsButton.addEventListener("click", function () {
            WinJS.Navigation.navigate("/js/view/events/events.html");
        });
    }

    var initAppBarrEventsCommands = function () {
        var eventsButton = document.getElementById("call-form-for-event");
        eventsButton.addEventListener("click", function () {
            var eventCreationFormHolder = document.getElementById("event-form-creation-form").winControl;
            eventCreationFormHolder.show(eventCreationFormHolder, "right", "center");
        });
    }

    var getNewEventInformation = function () {
    }

    WinJS.Namespace.define("Commands", {
        initAppBarCommands: initAppBarGlobalCommands,
        initAppBarrEventsCommands: initAppBarrEventsCommands
    });
})();