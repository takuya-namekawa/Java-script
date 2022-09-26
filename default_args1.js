function hello(name) {
  console.log("こんにちは" + name + "さん");
}

hello("Alice")  //実引数であるアリスが反映される
hello("")       //からの実引数が渡されてundefinedとなる　　厳密にはそのまま反映された