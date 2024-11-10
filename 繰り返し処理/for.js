'use strict';
//for（初期化式：ループ継続条件式：増減式）{
    //繰り返し実行したい処理
//}
//繰り返し処理forを使い、コンソールに１〜３まで順に表示

//for(let i = 1; i<= 3; i ++)  {
    //console.log(i);
//}

//配列['a','b','c']の値をfor文を利用して１つずつコンソールに出力
//let arr = ['a','b','c'];
//for(let i = 0; i < 3; i ++) {
    //console.log(arr[i]);
//}

//
let arr = ['a','b','c'];
for(let i = 0; i < arr.length; i++) {  //arr.lengthで（配列の要素が何個であっても１つのプログラムで対応できる）
    console.log(arr[i]);
}

