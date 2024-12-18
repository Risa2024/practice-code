/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //　var変数は”再宣言”可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
//ーーーーーーーーーーーーーーーーーーーーーーーー
// // const変数は上書き不可
// val3 = "const変数を上書き";

// constは再宣言不可能
// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31
// };
// val4.name = "jak"; 上書きの方法
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";　ゼロオリジン→どのプログラムも０から始まる
// val5.push("monkey");　pushというメソットを使用すれば、配列に対し追加できる。
// console.log(val5);
//コンストでの変数宣言がReactでは主要。それ以外はステート
//------------------------------------------
/**
 * テンプレート文字列 ``文字列の中でJSを展開する場合
 */
// const name = "じゃけぇ";
// const age = 31;
// 「私の名前はじゃけぇです。年齢は31歳です。」

// // 従来の結合方法（ES2015）
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法（新しい方法）
// const message2 = `私の名前は${name}です。年齢は${age}です。`;ドルマークと波括弧！！
// console.log(message2);

//-----------------------------------------------
/**
 * アロー関数(ES2015〜)
 */
// 従来の関数定義
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {　引数が一つの場合は（）を省略できる
//   return str;
// };　　//関数の中の処理が単一式でそのまま返却する場合、returnと{}を省略できる！！
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

//単一行で値を返していくだけの場合なので、このように{}とreturnを省略できる
//const func3 = (num1, num2) => num1 + num2;
//応用：オブジェクトを単一式で返却する（{}）!!! Reactでよく出てくる！！！
//const func3 = (num1, num2) => （{
//   hoge: num1,
//   huga: num2,
// }）;

// console.log(func3(10, 20));
//------------------------------------------------

/**
 * 分割代入（ES2015〜）：配列やオブジェクトに対して使っていける
 */
//配列の分割代入、オブジェクトの分割代入がある
// const myProfile = {　　　　
//   name: "じゃけぇ",
//   age: 31
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

//毎回{myProfile.name}何とか...と書くのはだるいのでそんなとき分割代入を使う
//Reactで使う！！！
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//上と同じものをかく。配列の分割代入
// const myProfile = ["じゃけぇ", 31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);
//------------------------------------------------

/**
 * デフォルト値（引数、分割代入のとき使う）Reactで使う
 */
// const sayHello = (name = "ゲスト") => console.log(`こんちには!${name}さん!`);
// sayHello("じゃけぇ");
//引数に何も書いていないとundefind と表示される。それを防ぐために、ゲストを設定（デフォルト値）

// const myProfile = {
//   age: 31
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);
//------------------------------------------------
/**
 * オブジェクトの省略記法：Reactで使う
 */
// const name = "じゃけぇ";
// const age = 31;
// const myProfile = {
//   name: name,
//   age: age
// };
// const myProfile = {　//二つ同じ名前が２つ続くと省略できる
//   name,
//   age
// };
// console.log(myProfile);

//------------------------------------------------
/**
 * スプレッド構文 ...　ドットを三つ書く　Reactで使う
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

//------------------------------------------------
/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ['田中', '山田', 'じゃけぇ'];
// for (let index = 0; index < nameArr.length; index++) {　//従来だとforが有名
//   console.log(nameArr[index]);
// }

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {　　
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));　　　mapメソット

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNameArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// truthy、falsyについて
// "ABC" 0 10 undefined null false NaN "" [] {}
const val = "ABC";
if (val) {
  console.log("valはtruthyです");
} else {
  console.log("valはfalsyです");
}

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// || は左側がtruthyの時その時点で返却する
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がfalsyの時その時点で返却する
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
