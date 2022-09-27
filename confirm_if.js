const result = confirm("本当に削除してよいですか？");
if (result) {
  //削除する処理
  console.log("削除しました");
} eise {
  console.log("キャンセルしました")
}

console.log("ユーザが回答するまで実行されない")