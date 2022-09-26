// 構文
//  while (条件式)　{
//  処理;
// }

//条件式がtrueなら処理を実行　falseなら処理を中断


let number = 2;

while (number < 100) {
  console.log(+ number + "番");
  number = number * 2;
}

let count = 1;

while (count < 6) {
  console.log(count);
  count++;
}
//コンソールに12345と順番に表示するプログラムをwhile文を使って作成