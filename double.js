function double(number) {     //仮引数にナンバーを入れている　関数の定義でリザルトという変数に仮引数を×2する計算式を入れているため
  const result = number * 2;  //ダブルの引数に入る数字は2倍されるというロジックが組まれている
  return result;
}

const a = double(10);    //実引数に10が入っているため10x2=20 という計算をaという変数に代入している　そのため出力すると20となるか気も同様
console.log(a);

const b = double(8);
console.log(b);


function doble(number) {   //この書き方で上記と同じ条件の書き方も出来る
  return number * 2;
}