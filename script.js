//Question 1

var firstName = "Dejan";
var lastName = "Dejic";
console.log (firstName +" "+ lastName);

//Question 2

var house = {
type: "apartment",
numberOfRooms: 2,
bulidingMaterial: "wood",
occupied: true
};

console.log (house);

//Question 3

var books = ["I am Zlatan", "The Intelligent Investor", "Think Again"]

function booksIlike(books){
    var book = '';
    for(var i = 0; i < books.length; i++){
        book += books[i] + " ";
    }
    return book
}
console.log("I like:" + " " + booksIlike(books))
