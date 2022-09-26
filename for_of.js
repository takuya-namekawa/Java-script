//  配列に対する繰り返し処理を簡単に書く方法としてfor...of文がある
//  構文
//  for (変数　of   配列)　｛
//  処理;
//  }
//

const fruits = ["りんご", "みかん", "バナナ"];

for (const fruit of fruits) {  //配列の変数を格納する変数名を考えて充てる　ちょっとコツがいるかも
  console.log(fruit);
}