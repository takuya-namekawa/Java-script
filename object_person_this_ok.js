const person = {
  name: "Alice",
  greet: function () {
    console.log("こんにちは、私は" + this.name + "です");
  }
}

person.greet();

//メソッドを呼び出すのはthisで呼び出せる　thisはメソッドを呼び出すオブジェクトである

