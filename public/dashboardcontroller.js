var app = angular.module('myApp', []);
app.controller('dashboardCtrl', function ($scope) {

    $scope.arr = [];

    $scope.stations = [{
        id: 0,
        name: "วิทยาการคอมพิวเตอร์",
        under: "CSC",
        sum: 0
    }, {
        id: 1,
        name: "เทคโนโลยีสารสนเทศ",
        under: "ITE",
        sum: 0
    }, {
        id: 2,
        name: "คอมพิวเตอร์เกมมัลติมีเดีย",
        under: "CGM",
        sum: 0
    }, {
        id: 3,
        name: "สารสนเทศการลงทุน",
        under: "INI",
        sum: 0
    }, {
        id: 4,
        name: "เทคโนโลยีสื่อสร้างสรรค์",
        under: "CMT",
        sum: 0
    }]



    $scope.getStaion = function () {


        // db.collection("students").get().then(function (querySnapshot) {
        //     querySnapshot.forEach(function (doc) {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // });

        db.collection("0")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[0].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("1")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[1].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("2")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[2].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("3")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[3].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("4")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[4].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("5")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[5].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("6")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[6].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("7")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[7].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("8")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[8].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("9")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[9].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("10")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[10].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("11")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[11].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("12")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[12].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("13")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[13].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("14")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[14].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("15")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[15].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("16")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[16].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("17")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[17].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });
        db.collection("18")
            .onSnapshot(function (snapshot) {
                console.log(snapshot.size);
                $scope.stations[18].sum = snapshot.size;
                $scope.$apply();
            }, function (error) {
                //...
            });



    };




});