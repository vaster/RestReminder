/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    var callSaveFileNotification = function () {
        var template = notifications.ToastTemplateType.toastText01;
        var toast = notifications.ToastNotificationManager.getTemplateContent(template);
        toast.createElement("text");
        var text = toast.getElementsByTagName("text");
        text.getAt(0).innerText = "File saved succsesfully.";
        var toast = new notifications.ToastNotification(toast);
        var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
        toastNotifier.show(toast);
    }

    WinJS.Namespace.define("OCR.Notifications", {
        activateFileSavedNotification: callSaveFileNotification,
    });
})()