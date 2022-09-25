const ranking = 2;

switch (ranking) {
  case 1:  //ココ　コロンなの注意
    console.log("金メダル");
    break; //ブレイクを必ず入れる
  case 2:
    console.log("銀メダル");
    break;
  case 3:
    console.log("銅メダル");
    break;
  default: //デフォルトで終了の処理
    console.log("メダルなし")
}