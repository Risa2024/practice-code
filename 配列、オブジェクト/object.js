'use strict';
// 例題: ユーザーオブジェクトの操作
// 変数userを用意
// 下記のオブジェクトを作成
// name: Taro Yamada
// gender: man
// birthYear: 1990
// 各値を、プロパティ（キー）を指定して、
// 取り出してコンソールに表示

// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);

// オブジェクト初期化子で書き換える方法
let user = { name: 'Taro Yamada',
    gender: 'man', birthYear: 1990};
    console.log(user);
//各プロパティーを取得する方法は以下
    // ドット記法(スッキリ書ける)
    console.log(user.name);
    console.log(user.gender);
    console.log(user.birthYear);
    
    // ブラケット記法（キーを指定する）
    console.log(user['name']);
    console.log(user['gender']);
    console.log(user['birthYear']);
//-------------------------------------------------
    // 個数を求めるには
    console.log(Object.keys(user).length);
    
    // プロパティ（key）を取得
    let keys = Object.keys(user);
    console.log(keys);
    
    // 情報を追加する
    // user.prefecture = 'Kanagawa';
    user['prefecture'] = 'Kanagawa';
    console.log(user);
    
    // 値の書き換え
    // user.prefecture = 'Chiba';
    user['prefecture'] = 'Chiba';
    console.log(user);
    
    // 結合
    let obj1 = { a: 1, b: 2, c:3 };
    let obj2 = { d: 4, e: 5, f:6 };
    let mergedObj = Object.assign(obj1, obj2);
    console.log(mergedObj);
    
    // 空のオブジェクト
    let person = {};
    console.log(person);

//オブジェクトuserに生まれた年から年齢を計算するメソットを追加


let user = {
    name: 'Taro Yamada',
    gender: 'man',
    birthYear: 1990,
    calcAge: function(thisYear) {
      // console.log(birthYear); // NG
      // console.log(this);
      // console.log(this.birthYear);
      return thisYear - this.birthYear;
    }
  }
  console.log(user.calcAge(2021));