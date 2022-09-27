const newElement = document.createElement("p");
newElement.textContent = "新しく追加しました";

const content = document.querySelector(".content")
content.append(newElement);

//divでクラスを作っているのが下のコンテント　これがないとnullになる
//appendを使用して後方に追加出来る

const text = document.createElement("p");
text.textContent = "先頭に追加します";

const a = document.querySelector(".a")
content.prepend(text);

//prependを使用して先頭に追加出来る

const farsttexta = document.createElement("p")
farsttexta.textContent = "新しいのの前に追加するよ";

const farsttext = document.querySelector(".farst");
farsttext.before(farsttext);