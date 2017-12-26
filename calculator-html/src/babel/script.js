//DESIGN
  //loading page: 
    //en meme temps
      //page blanche vers page noir
      //iphone cocke noir vers iphone cocke blanche
//http://tympanus.net/codrops/2016/10/12/animated-decorative-lines/
(function() {

  let arrSign=['-','+','/','*','x'],arr=[], 
    result=0, printCalcul='', arrSort, strSign, error,
    screen = document.querySelector('.screen span'),
    ele = document.querySelectorAll('.touche__box-item > span'), 
    equal = document.querySelector('.sign-equal'),
    clear = document.querySelector('.clear-item  span')

  //operation
  for (let i = 0; i < ele.length; i++) {
    ele[i].addEventListener('click', (e) =>{
      //on memorise dans le tableau
      arr.push(e.target.innerHTML)
      //printCalcul display the screen
      printCalcul += e.target.innerHTML
      screen.innerHTML = printCalcul
      e.preventDefault();
    });
  }
  clear.addEventListener('click', (e) => {
    screen.innerHTML = ''
    arr.splice(0,arr.length)
    printCalcul =''
    screen.classList.remove('error')
    e.preventDefault();
  });

  error = (strSignMessage) => {
    screen.innerHTML = 'err with sign ' + strSignMessage 
    screen.classList.add('error')
  }
  
  equal.addEventListener('click', (e) => {
    result = 0
    strSign   = arr.join('')
    //return an array with the number together
    arrSort = strSign.match(/(\d+)|\D/g); //[ '4', '-', '94', '-', '8' ]
    for (let i = 0, l = arrSort.length; i < l; i++) {
      let current = arrSort[i], prev = arrSort[i-1], next=arrSort[i+1];
      prev = (prev !== undefined && arrSign.indexOf(prev) === -1 ) ? parseInt(prev,10) : ''
      next = (next !== undefined && arrSign.indexOf(next) === -1 ) ? parseInt(next,10) : ''
      //debugger
      //
      // if value current it's a sign: +-/*x 
      if(arrSign.indexOf(current) >= 0) {
        if (current === '+') {
          if (i === 1) {//if is the first sign +-/* we're count the prev and next element
            result = prev + next
            //console.log(result + ' : ' + i + ' : ' + arrSort[i] + ' : ' + arrSort[j] );
          }else if (i > 1) {
            result += next 
            //console.log(result + ' : ' + i + ' : ' + arrSort[i+1]);
          } else if(i === 0){
            error('+')
            break
          } 
        }
        if (current === '-') {
          if (i === 1) {//first sign +-/*
            result = prev - next
            //console.log(result + ' - ' + ' : ' + i + ' : ' + arrSort[i] + ' : ' + arrSort[j] );
          }else if (i > 1) {
            result -= next 
            //console.log(result + ' - ' +' : ' + i + ' : ' + arrSort[i+1]);
          } else if(i === 0){
            error('-')
            break
          } 
        }
        if (current === 'x') {
          if (i === 1) {//first sign +-/*
            result += prev * next
          }else if (i > 1) {
            result *= next 
            //console.log(result + ' * ' +' : ' + i + ' : ' + arrSort[i+1]);
          } else if(i === 0){
            error('*')
            break
          } 
        }
        if (current === '/') {
          if (i === 1) {//first sign +-/*
            result += prev / next
          }else if (i > 1) {
            result /= next 
          } else if(i === 0){
            error('/')
            break
          } 
        }
      } 

    }
    if (!screen.classList.contains('error')) {
      screen.innerHTML = result 
    } 
    e.preventDefault();
  }); //end click equal

}());//END
