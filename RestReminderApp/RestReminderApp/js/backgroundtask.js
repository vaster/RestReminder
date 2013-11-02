
//
// A JavaScript background task is specified in a .js file. The name of the file is used to
// launch the background task.
//
(function () {
    "use strict";

    //
    // This var is used to get information about the current instance of the background task.
    //
    //var backgroundTaskInstance = Windows.UI.WebUI.WebUIBackgroundTaskInstance.current;


    //
    // This function will do the work of your background task.
    //
    function doWork() {
        var key = null,
            settings = Windows.Storage.ApplicationData.current.localSettings;

        //
        // TODO: Write your JavaScript code here to do work in the background.
        // If you write a loop or callback, remember  have it check for canceled==false.
        ////
        //var notifications = Windows.UI.Notifications;

        //// Get the toast notification manager for the current app.
        //var notificationManager = notifications.ToastNotificationManager;
        //var xmlTemplate = notificationManager.getTemplateContent(toastImageAndText02);
        //// The getTemplateContent method returns a Windows.Data.Xml.Dom.XmlDocument object
        //// that contains the toast notification XML content.
        ////var template = notifications.toastTemplateType.toastImageAndText01;
        ////var toastXml = notificationManager.getTemplateContent(notifications.ToastTemplateType[template]);

        ////var toast = new notifications.ToastNotification(toastXml);
        ////notificationManager.createToastNotifier().show(toast);
        //var txt = xmlTemplate.getElementsByTagName("text");
        //txt[0].appendChild(xmlTemplate.createTextNode("Market Limit Order Reached"));
        //txt[1].appendChild(xmlTemplate.createTextNode(
        //                              "You just sold 200 shares of MSFT at $32.50"));
        //var img = xmlTemplate.getElementsByTagName("image")[0];
        //img.setAttribute("src", "http://jimoneil.blob.core.windows.net/tiles/stock.jpg");

        //var scheduledToastNotification =
        //    new Windows.UI.Notifications.ScheduledToastNotification(xmlDocument, dateTime, timeSpan, uInt32);

        //var toastNotifier = Windows.UI.Notifications.ToastNotificationManager.createToastNotifier();
        var Notifications;
        var toast;
        var seconds = 60;
        for (var i = 0; i < 10; i++) {

            CreateNotification(Notifications, toast, seconds+(i*60));

            // Add to the schedule.
            Notifications.ToastNotificationManager.createToastNotifier().addToSchedule(toast);
        }
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
  
    function CreateNotification(Notifications, toast, seconds) {
        Notifications = Windows.UI.Notifications;
        var currentTime = new Date();
        
        var dueTime = new Date(currentTime.getTime() + seconds * 1000);
        var idNumber = Math.floor(Math.random() * 100000000);  // Generates a unique ID number for the notification.

        // Set up the notification text.
        var toastXml = Notifications.ToastNotificationManager.getTemplateContent(Notifications.ToastTemplateType.toastText02);
        var strings = toastXml.getElementsByTagName("text");
        strings[0].appendChild(toastXml.createTextNode("This is a scheduled toast notification"));
        strings[1].appendChild(toastXml.createTextNode("Received: " + dueTime.toLocaleTimeString()));

        // Create the toast notification object.
        toast = new Notifications.ScheduledToastNotification(toastXml, dueTime);
        toast.id = "Toast" + idNumber;
    }

    //if (!canceled) {
    //    doWork();
    //} else {
    //    //
    //    // Record information in LocalSettings to communicate with the app.
    //    //
    //    key = backgroundTaskInstance.task.taskId.toString();
    //    settings.values[key] = "Canceled";

    //    //
    //    // A JavaScript background task must call close when it is done.
    //    //
    //    close();
    //}

})();