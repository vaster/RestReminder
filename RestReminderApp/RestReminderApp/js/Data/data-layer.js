/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    var eventsArray = [];

    function getAllEvents() {
        return eventsArray;
    }

    function getEventById(Id) {
        var eventToReturn = null;

        eventsArray.forEach(function (event) {
            if (event.Id === Id) {
                benchToReturn = event;
            }
        });

        return eventToReturn;
    }

    var addEvent = function (eventDTO) {
        return new WinJS.Promise(function (success, error, progrss) {
            // ReWrite AJAX
            eventsArray.push(eventDTO);
            success();
        }).then(function () {
            WinJS.Navigation.navigate("/view/home/home.html");
        });
    }

    var addLoadedEvent = function (eventDTO) {
        return new WinJS.Promise(function (success, error, progrss) {
            eventsArray.push(eventDTO);
            success();
        });
    }

    WinJS.Namespace.define("Data", {
        getAllEvents: getAllEvents,
        getEventById: getEventById,
        addEvent: addEvent,
        addLoadedEvent: addLoadedEvent
    });

})();