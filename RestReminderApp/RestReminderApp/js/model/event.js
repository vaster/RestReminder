/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    var eventDTO = {
        title: "",
        description: "",
        duration: 0,
        startTime: new Date(),
    }

    WinJS.Namespace.define("Models.Event", {
        eventDTO: eventDTO
    });
})();