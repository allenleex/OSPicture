function actionLogo() {
    "/" != window.location.pathname && (window.location.href = "/")
}
function actionDownload() {
    $("#download-picture")[0].click()
}
function actionClickInFolder(o) {
    window.location.href = site + o
}
function actionImitationClick() {
    $("#label-upload")[0].click()
}
function actionCopyToClipboard(text) {
    copyToClipboard(text);
    notification.css("opacity", "1");
    notification.css("top", "100px");
    setTimeout(function () {
        notification.css("opacity", ".0");
        notification.css("top", "80px");
    }, 2000);
}
function actionGoTo(path) {
    window.location.href = site + path;
}
var site = /*"http://ospicture.xyz/"*/"http://localhost:8446/";