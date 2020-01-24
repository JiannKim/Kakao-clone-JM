function printClock() {
    
    var clock = document.getElementById("clock");   //출력할 장소
    var currentDate = new Date();   //현재시간
    var calender = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate();  //현재날짜
    var amPm = 'AM';    //초기값은 AM
    var currentHours = addZeros(currentDate.getHours() ,2);
    var currentMinute = addZeros(currentDate.getMinutes() ,2);
    var currentSeconds = addZeros(currentDate.getSeconds() ,2);

    if(currentHours >= 12) {    //시간이 12시보다클때 PM으로 세팅해주고 12를 빼줌
        amPm = 'PM';
        currentHours = addZeros(currentHours - 12 ,2);
   }

   if(currentSeconds >= 50) {   //50초 이상일때 색을 변환해줌
        currentSeconds = '<span style="color:#de1951;">' + currentSeconds + '</span>';
   }
   clock.innerHTML = currentHours + ":" + currentMinute + ":" + currentSeconds + "<span style='font-size:10px;'>" + amPm + "</span>";   //시간출력

   setTimeout("printClock()" ,1000);    //1초마다 printClock() 호출
}

function addZeros(num, digit) {
    
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for(i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;
}

// - setTimeout("함수명","시간")을 입력하게 되면 시간마다 함수명에 해당하는 함수를 호출함
// - addZeros() 함수는 한자리 수일 때는 앞에 '0'을 붙여 줌으로써 시,분,초 어떠한 상황에서도 두자리수로 출력 되도록 도와주는 함수
// - 현재시각이 12시 보다 클 때는 -12를 빼줌과 동시에 PM을 표시해줄 수 있도록 함
