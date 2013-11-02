
//
// A JavaScript background task is specified in a .js file. The name of the file is used to
// launch the background task.
//
(function () {
    "use strict";

    //
    // This var is used to get information about the current instance of the background task.
    //
    var backgroundTaskInstance = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current;


    //
    // This function will do the work of your background task.
    //
    function doWork() {
        var key = null,
            settings = Windows.Storage.ApplicationData.current.localSettings;

        //
        // TODO: Write your JavaScript code here to do work in the background.
        // If you write a loop or callback, remember  have it check for canceled==false.
        //

        //
        // Record information in LocalSettings to communicate with the app.
        //
        key = backgroundTaskInstance.task.taskId.toString();
        settings.values[key] = "Succeeded";

        //
        // A JavaScript background task must call close when it is done.
        //
        close();
    }

    if (!canceled) {
        doWork();
    } else {
        //
        // Record information in LocalSettings to communicate with the app.
        //
        key = backgroundTaskInstance.task.taskId.toString();
        settings.values[key] = "Canceled";

        //
        // A JavaScript background task must call close when it is done.
        //
        close();
    }

})();