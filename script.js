'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

// 数秘術の計算を別の計算方法でも成立するかどうか確認
function numero(number) {
  let num;
  if (number % 9 !== 0) {
    num = number % 9;
  } else {
    num = 9;
  }
  return num;
}

test(numero(20250804), 3); // 例
test(numero(20000103), 6); // 1回目合計が9未満
test(numero(20000610), 9); // 1回目合計が9
test(numero(20250520), 7); // 1回目合計が2桁　2回目合計が9未満
test(numero(20250810), 9); // 1回目合計が2桁　2回の合計が9
test(numero(19990929), 3); // 1回目も2回目も2桁　3回目の合計が9未満


// ここからプレゼンテーションのスクリプト
const calculateButton = document.querySelector("#calculateButton");
const numberInput = document.querySelector("#numberInput");

calculateButton.addEventListener("click", numerology);

function numerology() {
  const inputNumber = numberInput.value; // 入力値を取得
  let myNumber;
  if (inputNumber % 9 !== 0) {
    myNumber = inputNumber % 9;
  } else {
    myNumber = 9;
  }

// 上記 myNumber を最初の要素とした4つの要素を持つ配列をつくる
  function createArray() {
    let numeroArray = []; // 配列を初期化
      numeroArray.push(myNumber); // １つめの要素を入れる
    for (let i = 1; i <= 3; i++) {  // 2つ目以降の要素を入れる
      if (myNumber + i < 10) {
        numeroArray.push(myNumber + i);
      } else {
        numeroArray.push(myNumber + i - 9); // 10以上の数字だったら9を引いた数字を入れる
      }
    }
    return numeroArray;
  }
  const numeroArray = createArray(); // createArray を呼び出して配列を作成

// テスト
// createArray(1); // myNumberが8の場合、配列は [1, 2, 3, 4] になる
// createArray(6); // myNumberが5の場合、配列は [6, 7, 8, 9] になる

// html へそれぞれ値を返す
  document.querySelector("#result").textContent = numeroArray[2];  
  document.querySelector("#topNumber").textContent = numeroArray[3];
  document.querySelector("#happyNumber").textContent = numeroArray[2];
  document.querySelector("#badNumber").textContent = numeroArray[1];
  document.querySelector("#myNumber").textContent = numeroArray[0];

// 非表示だったコメントを表示させる
  document.querySelector(".comment").style.display = "block";
  document.querySelector(".numbers").style.display = "block";
}
