import { Map } from 'immutable';
import { produce } from 'immer';
const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco"
  }
};
const updated = { ...person, name:"Bob" };
updated.address.city = "New York";
//deep copy
/*const updated = {
  ...person,
  address: ...person.address,
  city : "New York"
}*/
console.log(person);

//Plain JS object
let book = {title: "Harry Potter"};
function publish(book) {
  book.isPublished = true;
}
publish(book);
console.log(book);
//Using Immutable js framework
let book = Map({ title: "Harry Potter"});
//get and set method
//toJS
console.log(book.get("title"));
function publish(book) {
  return book.set("isPublished": true);
}
console.log(book.toJS());
//Immer
function publish(book) {
    produce(book, draftBook => {
      draftBook.isPublished = true;
    });
}
let updated = publish(book);
console.log(book);
console.log(updated);
