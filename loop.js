(function(){
  'use strict'
  //todo buttonを押した時の動作を作成する

  for(var i = 1; i <101; i++){
      if(i % 15 === 0){
          document.write('FizzBuzz<br>');
      }else if(i % 3 === 0){
          document.write('Fizz' + ' ');
      }else if(i % 5 === 0){
          document.write('Buzz' + ' ');
      }else{
          document.write(i + ' ');
      }
        }
   //todo ’user-name’ で入力した数を表示させる

})();