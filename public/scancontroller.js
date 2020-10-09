var app = angular.module('myApp', []);
app.controller('scanCtrl', function ($scope) {
    $scope.student = {};
    $scope.check = "true";
    $scope.selectStaion = "";
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

    $scope.scanQR = function (selectStaion, check) {
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.scanCode().then(result => {
                // e.g. result = { value: "Hello LIFF app!" }
                // $scope.scanResult = JSON.stringify(result);
                $scope.scanResult = result;
                $scope.$apply();
                $scope.updateStation(selectStaion, result.value, check);

            }).catch(err => {
                console.log("scanCode failed!");
            });
        }


    };


    $scope.updateStation = function (selectStaion, idStudent, check) {



        var docRef = db.collection("students").doc(idStudent);


        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Current data: ", doc.data());
                $scope.student = doc.data();
                var c = false;
                if (check == "true") {
                    c = true;
                }
                if (check == "false") {
                    c = false;
                }
                $scope.student.stations[selectStaion].scan = c;


                db.collection("students").doc(idStudent).set($scope.student)
                    .then(function () {
                        // alert("ข้อมูลถูกบันทึกแล้ว");
                        if (check == "true") {
                            $scope.message = "Scan Check-In ให้คุณ " + $scope.student.name + " เรียบร้อยแล้ว";
                            var stu = {
                                "name": $scope.student.name,
                                "mobile": $scope.student.mobile,
                                "email": $scope.student.email,
                                "school": $scope.student.school
                            };

                            db.collection(selectStaion).doc(stu.mobile).set(stu)
                                .then(function () {
                                    // alert("ข้อมูลถูกบันทึกแล้ว");
                                    console.log("Document successfully written!");
                                })
                                .catch(function (error) {
                                    alert(error);
                                    console.error("Error writing document: ", error);
                                });

                        } else if (check == "false") {
                            $scope.message = "ยกเลิก Check-In ให้คุณ " + $scope.student.name + " เรียบร้อยแล้ว";
                            db.collection(selectStaion).doc($scope.student.mobile).delete().then(function () {
                                console.log("Document successfully deleted!");
                            }).catch(function (error) {
                                alert(error);
                                console.error("Error removing document: ", error);
                            });

                        }


                        $scope.$apply();
                        console.log("Document successfully written!");
                    })
                    .catch(function (error) {
                        alert(error);
                        console.error("Error writing document: ", error);
                    });


                if (check == "true") {

                } else if (check == "false") {
                    // alert("f");
                    // alert("/" + selectStaion + "/" + stu.mobile);
                    // let documentRef = firestore.doc("/0/0815519115");


                    // documentRef.delete().then(() => {
                    //     alert("del");
                    //     console.log('Document successfully deleted.');
                    // }).catch(function (error) {
                    //     alert(error);
                    //     console.error("Error removing document: ", error);
                    // });



                }


            } else {
                // doc.data() will be undefined in this case
                alert("ไม่พบผู้ใช้");
                console.log("No such document!");
            }
        });

    };





    $scope.initLIFF = function () {
        function runApp() {
            liff.getProfile().then(profile => {
                $scope.profile = profile;
                console.log(liff.getDecodedIDToken());
                console.log(profile);
            }).catch(err => console.error(err));
        }
        liff.init({
            liffId: "1654991799-0E7MRLlo"
        }, () => {
            if (liff.isLoggedIn()) {
                runApp()
            } else {
                liff.login();
            }
        }, err => console.error(err.code, error.message));
    };


});