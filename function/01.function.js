// 1. 두 수를 입력받아 큰 수를 반환하는 함수
// 2. 숫자를 입력하면 요일을 반환하는 함수
// 3. 짝수 홀수 판단하는 함수
// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
// 6. 세 수를 입력받아 큰 수를 반환하는 함수
// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
// 8. Email validation
// 9. 비밀번호 문자열 validation 영어문자 숫자 포함


/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @global
 * @func    type
 * @param   {any} data - JavaScript 모든 데이터 유형
 * @returns {string}   - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @global
 * @func    isType
 * @param   {any}     data - JavaScript 모든 데이터 유형
 * @param   {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}      - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {
  // validateError()를 사용하여 오류 조건을 발생시킴:
  // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
  validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
  return type(data) === kind;
}

/**
 * 오류 조건을 발생시키는 문장을 만들어 내는 유틸리티 함수
 *
 * @global
 * @func    validateError
 * @param   {any}    data          - JavaScript 모든 데이터
 * @param   {string} kind          - 오류 검증을 위한 문자열 e.g) 'string', '!string'
 * @param   {string} error_message - 출력할 오류 메시지(옵션)
 * @returns {string}               - 유효한 경우 출력되는 메시지
 */
function validateError(data, kind, error_message) {
  data = type(data);
  if ( kind.indexOf('!') === 0 ) {
    if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
  } else {
    if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
  }
  return '오류는 발생하지 않았습니다';
}


// 1. 두 수를 입력받아 큰 수를 반환하는 함수

/**
 * 
 * 
 * @param {any} a 
 * @param {any} b 
 */
// function max(a,b) {
//   if (a === b) {
//     throw '두 값이 같습니다.';
//   }
//     return Math.max(a,b);
// };
function max(a,b) {
    if(isType(a,'number') && isType(b, 'number'))
    return a > b ? a : b
    // a > b가 true면 a 반환 false면 b반환 (3항연산자)
}
// function max(a,b) {
//   if ( a > b ) {
//     result = a;
//   }
//   else if (a < b) {
//     result = b;
//   }
//   else{
//     result = '숫자값이 아니거나 두 숫자가 같습니다.'
//   }
//   return result;
// };

console.log('1.더 큰 숫자는:',max(3,3));



// 2. 숫자를 입력하면 요일을 반환하는 함수


/**
 * 
 * 
 * @param {any} d 
 */
// var day_list = ['월','화','수','목','금','토','일']
function  whatsDay(d) {
    if(isType(a,'number'));
    var week = '일월화수목금토'; //읽기만 하는것, 숫자 7이 넘어가면 다시 월부터 시작
    return week[d%7];
}
// function whatsDay(d) {
//     if (d === 1){
//         result = '월';
//     }
//     else if (d === 2){
//         result = '화';
//     }
//     else if (d === 3){
//         result = '수';
//     }
//     else if (d === 4){
//         result = '목';
//     }
//     else if (d === 5){
//         result = '금';
//     }
//     else if (d === 6){
//         result = '토';
//     }
//     else if (d === 7){
//         result = '일';
//     }
//     else{
//         result = '일주일은 7일인데 왜 더 큰 숫자를 넣으세여..'
//     }
//     return result;
// }

console.log('2.오늘의 요일은:',whatsDay(8));



// 3. 짝수 홀수 판단하는 함수
// 0은 짝수

/**
 * 
 * 
 * @param {any} n 
 * @returns 
 */
function evenOdd(n) {
    return n % 2 === 0 ? '짝수' : '홀수';
}
// function evenOdd(n){
//     if(n % 2 == 0){
//         result = '짝수';
//     }
//     else{
//         result = '홀수';
//     }
//     return result;
// }

console.log('3.홀수냐 짝수냐!:',evenOdd(3));



// 4.숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
// var a = [20,30,50,30];
var numArr = [20,30,50,30];
/**
 * 
 * 
 * @param {any} numArr
 */
function avg(numArr) {
    // var l = numArr.length;
    var result = 0;
    for(var i = 0, l = numArr.length; i < l; i++){
        result += numArr[i];
    }
    return result / numArr.length;
    // numList.forEach(function(item) {
    //     result += item;
    // });
    // return result / numList.length;
}
// function average(a) {
//     return (a[0] + a[1] + a[2] + a[3]) / a.length;
// }

console.log('4.당신의 평균 점수는:',avg(numArr));



// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
var strArr = ['이거는','예시다','문자열','예시'];

/**
 * 
 * 
 * @param {any} t 
 * @returns 
 */
function oneString(strArr) {
    var result = '';
    for(var i = 0, l = strArr.length; i < l; i++){
        result += strArr[i];
    }
    return result;
    // return strArr.join('');
}
// function text(t){
//     return a[0] + a[1] + a[2] + a[3];
// }

console.log('5.:',oneString(strArr));


// 6. 세 수를 입력받아 큰 수를 반환하는 함수

/**
 * 
 * 
 * @param {any} a 
 * @param {any} b 
 * @param {any} c
 * @returns 
 */
function madMax(a,b,c) {
    return max(max(a,b), max(b,c));
}
// function madMax(a,b,c) {
//   if ( a > b && a > c) {
//     result = a;
//   }
//   else if (b > a && b > c) {
//     result = b;
//   }
//   else if (c > a && c > b) {
//     result = c;
//   }
//   else if (a === b > c) {
//     result = a;
//   }
//   else if (a === c > b) {
//     result = a;
//   }
//   else if (b === c > a) {
//     result = b;
//   }
//   else if (b === c === a) {
//     result = '세 숫자가 모두 같습니다.';
//   }
//   else{
//     result = '숫자값이 아니거나 세 숫자가 같습니다.'
//   }
//   return result;
// };
function maxn(...n) {
    console.log('n:',Array.isArray(n));
    for(var i = 1, l = n.length; i < l; i++){
        if(max < n[i]){
            max = n[i];
        }
    }
    return max;
}
console.log('maxn(2,3,4,5,6):',maxn(2,3,4,5,6));

console.log('6.가장 큰 숫자는:',madMax(4,4,2));



// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
// var p = [01012341234];
// function secretNumber(p) {
//     return ;
// }
var phoneNum = [01012341234];
function secretNumber(phoneNum) {
    var result = '';
    for(var i = 0, l = phoneNum.length; i < l; i++){
        if(l - i > 4){
            result += '*'
        } else {
            result += phoneNum[i];
        }
    }
    return result;
    // return phoneNum.replace(/[0-9](?=[0-9]{4}/g, '*')
}

console.log('7.전화번호:', secretNumber(phoneNum));



// 8. Email validation
var Email = ['AAa@1asdf.com'];

function validateEmail(Email) {
    return email.indexOf('@') !== -1;
}
console.log('9.validateEmail("PassWord11"):',validateEmail(Email));





// 9. 비밀번호 문자열 validation 영어문자 숫자 포함
function validatePassword(pw){
  var lowCase = 'abcdefghijklmnopqrstuvwxyz';
  var upCase = lowCase.toUpperCase();
  var numCase = '0123456789';
  var lowCheck = false;
  var upCheck = false;
  var numCheck = false;
  if (pw.length >= 8){
    for(var i = 0, l = lowCase.length; i < l; i++){
      if (pw.indexOf(lowCase[i]) !== -1){
        lowCheck = true;
      }
      if (pw.indexOf(upCase[i]) !== -1){git 
        upCheck = true;
      }
    }
    for(var i = 0, l = numCase.length; i < l; i++){
      if (pw.indexOf(numCase[i]) !== -1){
        numCheck = true;
      }
    }
  }
  if( lowCheck && upCheck && numCheck){
    return true;
  } else {
    return false;  
  }
  // return /^.*(?=.{8, })(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(pw);
}

console.log('validatePassword("Password11"): ', validatePassword("Password11"));