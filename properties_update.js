//プロパティの追加と上書き
const book = {title: "吾輩は猫である"}

book.author = "夏目漱石";
book["pages"] = 620;
console.log(book);

const person = {name: "Alice", age: 20};

person.name = "Bob";
person.age = 25;
console.log(person);

//どう考えてもドット表記法の方が書きやすい