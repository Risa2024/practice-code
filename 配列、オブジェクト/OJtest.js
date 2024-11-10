'use strict';
//オブジェクトuserに生まれた年から年齢を計算するメソットを追加

let user = {
  name: 'Taro Yamada',
  gender: 'man',
  birthYear: 1990,
  calcAge: function(thisYear) {
    return thisYear - this.birthYear;//(thisはユーザーオブジェクト全体を表す)
  }
}
console.log(user.calcAge(2021));