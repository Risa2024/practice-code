'use strict';
//四角形の面積を求める関数
//function命令（関数宣言）
//function (引数,1引数2...){
//  任意の処理;
//return　戻り値;
//}
//function getRectangle(height,width) {
   // return height * width;
//}
//console.log(getRectangle(3, 5));

//関数リテラル(匿名関数、無名関数とも呼ばれる)
//function(引数1、引数2...){
// 実行する処理；
//}；
//const getRectangle = function(heigt,width){
 //   return heigt * width;
//}

//console.log(getRectangle(3, 5));

//Function()コンストラクター(あまり使われないらしい)
//new Function(引数、引数２...関数本体の処理)
//const getRectangle
 // = new Function('height','width','return height * width');
//console.log( getRectangle(3, 5));

//アロー関数(ES2015から使われている）

//(引数，...)　=> {
  //実行する処理    
//};

//const getRectangle = function(height, width) {
   // return height * width;
//}

//const getRectangle =(height, width) => {
   // return height * width;
//};
//console.log(getRectangle(3,5));

// 演習問題「みかんの合計金額を計算するプログラム」
// Aさんが1個100円のみかんを、20個買いました。 
// みかんの単価と個数を引数に渡すと、
// 合計金額を計算して返す関数を作成。
// 作成した関数を呼び出して、
// Aさんの支払合計金額はいくらになるか計算して、
// コンソールに出力する。
// ※消費税は考慮しないものとする。 
// 回答例では、function 命令で定義する方法で、実装。

//const getOrange = (price, pieces ) => {
  //  return price * pieces;
//};
//console.log(getOrange(100,20));

//コールバック関数（時間がかかる〇〇が完了したら、△△を実行する）
//タイマー処理
//３秒経過したら、コンソールに「Timeout!」と表示する

//const message = function() {
 //  console.log('Timeout!');
//}
//setTimeout(message, 3000);

//名前の入力が完了したら「Hello 〇〇さん」とコンソールログに表示

//function greeting(name) {
   console.log('Hello' + name  + 'さん');
}

//function inputUserName(callback) {
  // let name = prompt('あなたのお名前を入力してください');
  // callback(name);
//}
//inputUserName(greeting);



