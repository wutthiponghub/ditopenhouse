var app = angular.module('myApp', []);
app.controller('studentCtrl', function ($scope) {
    $scope.student = {};


    $scope.getStudent = function (profile) {

        var docRef = db.collection("students").doc(profile.userId);


        docRef.get().then(function (doc) {
            if (doc.exists) {
                $scope.student = doc.data();
                $scope.$apply();
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                $scope.student.certificate = false;
                $scope.student.email = $scope.profile.email;
                $scope.student.stations = [{
                    id: 0,
                    name: "วิทยาการคอมพิวเตอร์",
                    under: "CSC",
                    scan: false
                }, {
                    id: 1,
                    name: "เทคโนโลยีสารสนเทศ",
                    under: "ITE",
                    scan: false
                }, {
                    id: 2,
                    name: "คอมพิวเตอร์เกมมัลติมีเดีย",
                    under: "CGM",
                    scan: false
                }, {
                    id: 3,
                    name: "สารสนเทศการลงทุน",
                    under: "INI",
                    scan: false
                }, {
                    id: 4,
                    name: "เทคโนโลยีสื่อสร้างสรรค์",
                    under: "CMT",
                    scan: false
                }]
                console.log($scope.student);
                $scope.$apply();
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };

    $scope.addStudent = function (student, profile) {

        // student.certificate = false;
        // student.email = $scope.profile.email;

        db.collection("students").doc(profile.userId).set(student)
            .then(function () {
                // alert("ข้อมูลถูกบันทึกแล้ว");
                console.log("Document successfully written!");
                if (!liff.isInClient()) {
                    sendAlertIfNotInClient();
                } else {
                    liff.sendMessages([{
                        'type': 'text',
                        'text': "คุณได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว"
                    }]).then(function () {
                        // window.alert('Message sent');
                        liff.closeWindow();
                    }).catch(function (error) {
                        window.alert('Error sending message: ' + error);
                    });

                }
            })
            .catch(function (error) {
                alert(error);
                console.error("Error writing document: ", error);
            });




    };



    $scope.initLIFF = function () {
        function runApp() {
            liff.getProfile().then(profile => {
                $scope.profile = profile;
                console.log(liff.getDecodedIDToken());
                $scope.profile.email = liff.getDecodedIDToken().email;

                $scope.getStudent(profile);

                console.log(profile);
            }).catch(err => console.error(err));
        }
        liff.init({
            liffId: "1655086923-4vwLKpXP"
        }, () => {
            if (liff.isLoggedIn()) {
                runApp()
            } else {
                liff.login();
            }
        }, err => console.error(err.code, error.message));
    };


});