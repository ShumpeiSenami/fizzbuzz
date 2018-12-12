(function () {
    'use strict'
    const numberInput = document.getElementById('number');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');


    function removeAllChildren(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }

    //ボタンを押した時の処理
    assessmentButton.onclick = function () {
        const textNumber = numberInput.value;
        console.log(textNumber);

        if (textNumber.length === 0) {     //何も入力されなかった時
            return;
        } else if (isNaN(textNumber)) {   //数字以外が入力された時
            return;
        }

        removeAllChildren(resultDivided);
        console.log('数値が入力されました');        
        const header = document.createElement('h3');
        header.innerText = 'FizzBuzzスタート！';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        var str = "";
        for (var i = 1; i <= textNumber; i++) {
            if(i % 15 === 0){
            str += 'fizzbuzz' + '\n';
          }else if(i % 3 === 0){
            str += 'fizz' + ' ';  
        }else if(i % 5 === 0){
            str += 'buzz' + ' ';
        }else{
            str += i + ' ';
        }
    }
        paragraph.innerText = str;   // 求まったものを入れる
        resultDivided.appendChild(paragraph);


    };
  

})();