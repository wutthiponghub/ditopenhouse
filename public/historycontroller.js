var app = angular.module('myApp', []);
app.controller('historyCtrl', function ($scope) {
    $scope.student = {};
    $scope.genQR = function (profile) {
        var qrcode = new QRCode("QR", {
            text: profile.userId,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcode.clear(); // clear the code.
        qrcode.makeCode(profile.userId); // make another code.
    };

    $scope.getStudent = function (profile) {

        var docRef = db.collection("students").doc(profile.userId);


        docRef.onSnapshot(function (doc) {
            if (doc.exists) {
                console.log("Current data: ", doc.data());
                $scope.student = doc.data();
                $scope.$apply();
            } else {
                // doc.data() will be undefined in this case
                alert("กรุณาบันทึกข้อมูลส่วนตัวก่อน");
                console.log("No such document!");
            }
        });


    };

    $scope.initLIFF = function () {
        function runApp() {
            liff.getProfile().then(profile => {
                $scope.profile = profile;
                console.log(liff.getDecodedIDToken());
                $scope.getStudent(profile);
                $scope.genQR(profile);
                console.log(profile);
            }).catch(err => console.error(err));
        }
        liff.init({
            liffId: "1654991468-92V2YNQX"
        }, () => {
            if (liff.isLoggedIn()) {
                runApp()
            } else {
                liff.login();
            }
        }, err => console.error(err.code, error.message));
    };


});