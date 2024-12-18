'use strict';
// ■演習問題
// テストの点数の、合計値、平均値を求めるプログラムの開発 
// スコアは、100, 90, 80, 70 ,60 とする。 
 
// 「手順」 
// 問題により与えられた点数を、配列に格納。 
// 合計値を格納する変数を0で初期化。 
// 繰り返し処理forにより、配列に格納した点数を一つずつ取り出し、 
// 合計値を格納する変数に足してゆく。 
// 繰り返し処理が終わったら、平均値を求める。 
// 最後に、合計値、平均値を、コンソールに出力する。 
 
// 「補足」 
// 配列の長さを求めるには .length プロパティを使用する。

let scores = [100, 90, 80, 70, 60];
let sum = 0;

for(let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

let average = sum / scores.length;

console.log('合計値：' + sum);
console.log('平均値：' + average); 