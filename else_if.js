//    if (条件式1) {
//      条件式1が真値となる場合の処理;
//    } else if (条件式2) {
//      条件式2が真値となる場合の処理;
//    } else {
//      どの条件も真値にならない場合の処理;
//    }

const weight = 300;

if (weight < 250) {
  console.log("配送料200円");
} else if (weight < 500); {
  console.log("配送料400円");
} else if (weight < 1000) {
  console.log("配送料600円");
} else {
  console.log("取り扱いできません");
}