var target = UIATarget.localTarget();
var app = target.frontMostApp();
var window = app.mainWindow();
var host = target.host();



function inArray(needle, haystack) {
    for (var key in haystack) {
        if (needle === haystack[key]) {
            return true;
        }
    }
    return false;
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function arrayKeyExist(needle, haystack) {
    for (var key in haystack) {
        if (needle === key) {
            return true;
        }
    }
    return false;
}

function getArrayKey(needle, haystack) {
    for (var key in haystack) {
        if (needle === haystack[key]) {
            return key;
        }
    }
    return -1;
}