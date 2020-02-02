var testInput = angular.module("testInput", []);

testInput.controller("testInputController", function testInputController($scope){
    $scope.testInput = [
        {
            title: "placeholder",
            caption: "here is a book",
            number: "1"
        },

        {
            title: "placeholder 2",
            caption: "here is another book",
            number: "2",
        },
        {
            title: "placeholder 3",
            caption: "here is a third book",
            number: "3"
        },
        {
            title: "placeholder 4",
            caption: "here is a fourth book",
            number: "4"
        }
    ]
})

