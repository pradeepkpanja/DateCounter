let intervalid;
function countDate(){

    const givenDate = document.getElementById('givenDate').value;
    const givenDateParse = new Date(givenDate);
    const today = new Date();
  
    if(isNaN(givenDateParse.getTime()) || givenDateParse > today){
        const elementToShow = document.getElementById('noticeColor');
        elementToShow.style.display = 'block';
      
    
    }
    else{
        
        const elementToShow = document.getElementById('noticeColor');
        elementToShow.style.display = '';
        const difference = Math.abs(today - givenDateParse) / 1000; 

        const days = Math.floor(difference / (3600 * 24));
        const hours = Math.floor((difference % (3600 * 24)) / 3600);
        const minutes = Math.floor((difference % 3600) / 60);
        const seconds = Math.floor(difference % 60);

    const output = ` ${days < 10 ? '0' : ''}${days} Days ${hours < 10 ? '0' : ''}${hours} Hours:  ${minutes < 10 ? '0' : ''}${minutes} Minutes   ${seconds < 10 ? '0' : ''}${seconds} seconds.`;
    document.querySelector('h1').textContent = output;    
}
    
   
}

function startCounting(){
    countDate();
    intervalid = setInterval(countDate, 1000);
}

function stopCounting(){    
    clearInterval(intervalid);
}


document.querySelector('.calculateButton').addEventListener('click',startCounting);
document.querySelector('.stop').addEventListener('click',stopCounting);