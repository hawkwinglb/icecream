var images = angular.module("images", []);

images.controller("imagesController", function imagesController($scope){
    $scope.images = [
        {
            title: "placeholder",
            image: "/images/20191121_171155.jpg",
            caption: "here is a book",
            number: "1"
        },

        {
            title: "placeholder 2",
            image: "/images/20191121_171207.jpg",
            caption: "here is another book",
            number: "2",
        },
        {
            title: "placeholder 3",
            image: "/images/20191121_171218.jpg",
            caption: "here is a third book",
            number: "3"
        },
        {
            title: "placeholder 4",
            image: "20191121_171227.jpg",
            caption: "here is a fourth book",
            number: "4"
        }
    ]
})

