'use strict';

//DESIGN
//loading page: 
//en meme temps
//page blanche vers page noir
//iphone cocke noir vers iphone cocke blanche
//http://tympanus.net/codrops/2016/10/12/animated-decorative-lines/
(function () {

  var arrSign = ['-', '+', '/', '*', 'x'],
      arr = [],
      result = 0,
      printCalcul = '',
      arrSort = void 0,
      strSign = void 0,
      error = void 0,
      screen = document.querySelector('.screen span'),
      ele = document.querySelectorAll('.touche__box-item > span'),
      equal = document.querySelector('.sign-equal'),
      clear = document.querySelector('.clear-item  span');

  //operation
  for (var i = 0; i < ele.length; i++) {
    ele[i].addEventListener('click', function (e) {
      //on memorise dans le tableau
      arr.push(e.target.innerHTML);
      //printCalcul display the screen
      printCalcul += e.target.innerHTML;
      screen.innerHTML = printCalcul;
      e.preventDefault();
    });
  }
  clear.addEventListener('click', function (e) {
    screen.innerHTML = '';
    arr.splice(0, arr.length);
    printCalcul = '';
    screen.classList.remove('error');
    e.preventDefault();
  });

  error = function error(strSignMessage) {
    screen.innerHTML = 'err with sign ' + strSignMessage;
    screen.classList.add('error');
  };

  equal.addEventListener('click', function (e) {
    result = 0;
    strSign = arr.join('');
    //return an array with the number together
    arrSort = strSign.match(/(\d+)|\D/g); //[ '4', '-', '94', '-', '8' ]
    for (var _i = 0, l = arrSort.length; _i < l; _i++) {
      var current = arrSort[_i],
          prev = arrSort[_i - 1],
          next = arrSort[_i + 1];
      prev = prev !== undefined && arrSign.indexOf(prev) === -1 ? parseInt(prev, 10) : '';
      next = next !== undefined && arrSign.indexOf(next) === -1 ? parseInt(next, 10) : '';
      //debugger
      //
      // if value current it's a sign: +-/*x 
      if (arrSign.indexOf(current) >= 0) {
        if (current === '+') {
          if (_i === 1) {
            //if is the first sign +-/* we're count the prev and next element
            result = prev + next;
            //console.log(result + ' : ' + i + ' : ' + arrSort[i] + ' : ' + arrSort[j] );
          } else if (_i > 1) {
            result += next;
            //console.log(result + ' : ' + i + ' : ' + arrSort[i+1]);
          } else if (_i === 0) {
            error('+');
            break;
          }
        }
        if (current === '-') {
          if (_i === 1) {
            //first sign +-/*
            result = prev - next;
            //console.log(result + ' - ' + ' : ' + i + ' : ' + arrSort[i] + ' : ' + arrSort[j] );
          } else if (_i > 1) {
            result -= next;
            //console.log(result + ' - ' +' : ' + i + ' : ' + arrSort[i+1]);
          } else if (_i === 0) {
            error('-');
            break;
          }
        }
        if (current === 'x') {
          if (_i === 1) {
            //first sign +-/*
            result += prev * next;
          } else if (_i > 1) {
            result *= next;
            //console.log(result + ' * ' +' : ' + i + ' : ' + arrSort[i+1]);
          } else if (_i === 0) {
            error('*');
            break;
          }
        }
        if (current === '/') {
          if (_i === 1) {
            //first sign +-/*
            result += prev / next;
          } else if (_i > 1) {
            result /= next;
          } else if (_i === 0) {
            error('/');
            break;
          }
        }
      }
    }
    if (!screen.classList.contains('error')) {
      screen.innerHTML = result;
    }
    e.preventDefault();
  }); //end click equal
})(); //END
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJhcnJTaWduIiwiYXJyIiwicmVzdWx0IiwicHJpbnRDYWxjdWwiLCJhcnJTb3J0Iiwic3RyU2lnbiIsImVycm9yIiwic2NyZWVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlIiwicXVlcnlTZWxlY3RvckFsbCIsImVxdWFsIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwdXNoIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwicHJldmVudERlZmF1bHQiLCJzcGxpY2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHJTaWduTWVzc2FnZSIsImFkZCIsImpvaW4iLCJtYXRjaCIsImwiLCJjdXJyZW50IiwicHJldiIsIm5leHQiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwicGFyc2VJbnQiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNFO0FBQ0U7QUFDRTtBQUNBO0FBQ047QUFDQyxhQUFXOztBQUVWLE1BQUlBLFVBQVEsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLENBQVo7QUFBQSxNQUFrQ0MsTUFBSSxFQUF0QztBQUFBLE1BQ0VDLFNBQU8sQ0FEVDtBQUFBLE1BQ1lDLGNBQVksRUFEeEI7QUFBQSxNQUM0QkMsZ0JBRDVCO0FBQUEsTUFDcUNDLGdCQURyQztBQUFBLE1BQzhDQyxjQUQ5QztBQUFBLE1BRUVDLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FGWDtBQUFBLE1BR0VDLE1BQU1GLFNBQVNHLGdCQUFULENBQTBCLDBCQUExQixDQUhSO0FBQUEsTUFJRUMsUUFBUUosU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUpWO0FBQUEsTUFLRUksUUFBUUwsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FMVjs7QUFPQTtBQUNBLE9BQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixJQUFJSyxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDbkNKLFFBQUlJLENBQUosRUFBT0UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFNO0FBQ3JDO0FBQ0FoQixVQUFJaUIsSUFBSixDQUFTRCxFQUFFRSxNQUFGLENBQVNDLFNBQWxCO0FBQ0E7QUFDQWpCLHFCQUFlYyxFQUFFRSxNQUFGLENBQVNDLFNBQXhCO0FBQ0FiLGFBQU9hLFNBQVAsR0FBbUJqQixXQUFuQjtBQUNBYyxRQUFFSSxjQUFGO0FBQ0QsS0FQRDtBQVFEO0FBQ0RSLFFBQU1HLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUNDLENBQUQsRUFBTztBQUNyQ1YsV0FBT2EsU0FBUCxHQUFtQixFQUFuQjtBQUNBbkIsUUFBSXFCLE1BQUosQ0FBVyxDQUFYLEVBQWFyQixJQUFJYyxNQUFqQjtBQUNBWixrQkFBYSxFQUFiO0FBQ0FJLFdBQU9nQixTQUFQLENBQWlCQyxNQUFqQixDQUF3QixPQUF4QjtBQUNBUCxNQUFFSSxjQUFGO0FBQ0QsR0FORDs7QUFRQWYsVUFBUSxlQUFDbUIsY0FBRCxFQUFvQjtBQUMxQmxCLFdBQU9hLFNBQVAsR0FBbUIsbUJBQW1CSyxjQUF0QztBQUNBbEIsV0FBT2dCLFNBQVAsQ0FBaUJHLEdBQWpCLENBQXFCLE9BQXJCO0FBQ0QsR0FIRDs7QUFLQWQsUUFBTUksZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JDZixhQUFTLENBQVQ7QUFDQUcsY0FBWUosSUFBSTBCLElBQUosQ0FBUyxFQUFULENBQVo7QUFDQTtBQUNBdkIsY0FBVUMsUUFBUXVCLEtBQVIsQ0FBYyxXQUFkLENBQVYsQ0FKcUMsQ0FJQztBQUN0QyxTQUFLLElBQUlkLEtBQUksQ0FBUixFQUFXZSxJQUFJekIsUUFBUVcsTUFBNUIsRUFBb0NELEtBQUllLENBQXhDLEVBQTJDZixJQUEzQyxFQUFnRDtBQUM5QyxVQUFJZ0IsVUFBVTFCLFFBQVFVLEVBQVIsQ0FBZDtBQUFBLFVBQTBCaUIsT0FBTzNCLFFBQVFVLEtBQUUsQ0FBVixDQUFqQztBQUFBLFVBQStDa0IsT0FBSzVCLFFBQVFVLEtBQUUsQ0FBVixDQUFwRDtBQUNBaUIsYUFBUUEsU0FBU0UsU0FBVCxJQUFzQmpDLFFBQVFrQyxPQUFSLENBQWdCSCxJQUFoQixNQUEwQixDQUFDLENBQWxELEdBQXdESSxTQUFTSixJQUFULEVBQWMsRUFBZCxDQUF4RCxHQUE0RSxFQUFuRjtBQUNBQyxhQUFRQSxTQUFTQyxTQUFULElBQXNCakMsUUFBUWtDLE9BQVIsQ0FBZ0JGLElBQWhCLE1BQTBCLENBQUMsQ0FBbEQsR0FBd0RHLFNBQVNILElBQVQsRUFBYyxFQUFkLENBQXhELEdBQTRFLEVBQW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBR2hDLFFBQVFrQyxPQUFSLENBQWdCSixPQUFoQixLQUE0QixDQUEvQixFQUFrQztBQUNoQyxZQUFJQSxZQUFZLEdBQWhCLEVBQXFCO0FBQ25CLGNBQUloQixPQUFNLENBQVYsRUFBYTtBQUFDO0FBQ1paLHFCQUFTNkIsT0FBT0MsSUFBaEI7QUFDQTtBQUNELFdBSEQsTUFHTSxJQUFJbEIsS0FBSSxDQUFSLEVBQVc7QUFDZlosc0JBQVU4QixJQUFWO0FBQ0E7QUFDRCxXQUhLLE1BR0MsSUFBR2xCLE9BQU0sQ0FBVCxFQUFXO0FBQ2hCUixrQkFBTSxHQUFOO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsWUFBSXdCLFlBQVksR0FBaEIsRUFBcUI7QUFDbkIsY0FBSWhCLE9BQU0sQ0FBVixFQUFhO0FBQUM7QUFDWloscUJBQVM2QixPQUFPQyxJQUFoQjtBQUNBO0FBQ0QsV0FIRCxNQUdNLElBQUlsQixLQUFJLENBQVIsRUFBVztBQUNmWixzQkFBVThCLElBQVY7QUFDQTtBQUNELFdBSEssTUFHQyxJQUFHbEIsT0FBTSxDQUFULEVBQVc7QUFDaEJSLGtCQUFNLEdBQU47QUFDQTtBQUNEO0FBQ0Y7QUFDRCxZQUFJd0IsWUFBWSxHQUFoQixFQUFxQjtBQUNuQixjQUFJaEIsT0FBTSxDQUFWLEVBQWE7QUFBQztBQUNaWixzQkFBVTZCLE9BQU9DLElBQWpCO0FBQ0QsV0FGRCxNQUVNLElBQUlsQixLQUFJLENBQVIsRUFBVztBQUNmWixzQkFBVThCLElBQVY7QUFDQTtBQUNELFdBSEssTUFHQyxJQUFHbEIsT0FBTSxDQUFULEVBQVc7QUFDaEJSLGtCQUFNLEdBQU47QUFDQTtBQUNEO0FBQ0Y7QUFDRCxZQUFJd0IsWUFBWSxHQUFoQixFQUFxQjtBQUNuQixjQUFJaEIsT0FBTSxDQUFWLEVBQWE7QUFBQztBQUNaWixzQkFBVTZCLE9BQU9DLElBQWpCO0FBQ0QsV0FGRCxNQUVNLElBQUlsQixLQUFJLENBQVIsRUFBVztBQUNmWixzQkFBVThCLElBQVY7QUFDRCxXQUZLLE1BRUMsSUFBR2xCLE9BQU0sQ0FBVCxFQUFXO0FBQ2hCUixrQkFBTSxHQUFOO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7QUFFRjtBQUNELFFBQUksQ0FBQ0MsT0FBT2dCLFNBQVAsQ0FBaUJhLFFBQWpCLENBQTBCLE9BQTFCLENBQUwsRUFBeUM7QUFDdkM3QixhQUFPYSxTQUFQLEdBQW1CbEIsTUFBbkI7QUFDRDtBQUNEZSxNQUFFSSxjQUFGO0FBQ0QsR0FqRUQsRUFqQ1UsQ0FrR047QUFFTCxDQXBHQSxHQUFELEMsQ0FvR0siLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9ERVNJR05cbiAgLy9sb2FkaW5nIHBhZ2U6IFxuICAgIC8vZW4gbWVtZSB0ZW1wc1xuICAgICAgLy9wYWdlIGJsYW5jaGUgdmVycyBwYWdlIG5vaXJcbiAgICAgIC8vaXBob25lIGNvY2tlIG5vaXIgdmVycyBpcGhvbmUgY29ja2UgYmxhbmNoZVxuLy9odHRwOi8vdHltcGFudXMubmV0L2NvZHJvcHMvMjAxNi8xMC8xMi9hbmltYXRlZC1kZWNvcmF0aXZlLWxpbmVzL1xuKGZ1bmN0aW9uKCkge1xuXG4gIGxldCBhcnJTaWduPVsnLScsJysnLCcvJywnKicsJ3gnXSxhcnI9W10sIFxuICAgIHJlc3VsdD0wLCBwcmludENhbGN1bD0nJywgYXJyU29ydCwgc3RyU2lnbiwgZXJyb3IsXG4gICAgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbiBzcGFuJyksXG4gICAgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvdWNoZV9fYm94LWl0ZW0gPiBzcGFuJyksIFxuICAgIGVxdWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24tZXF1YWwnKSxcbiAgICBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1pdGVtICBzcGFuJylcblxuICAvL29wZXJhdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xuICAgIGVsZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICAgIC8vb24gbWVtb3Jpc2UgZGFucyBsZSB0YWJsZWF1XG4gICAgICBhcnIucHVzaChlLnRhcmdldC5pbm5lckhUTUwpXG4gICAgICAvL3ByaW50Q2FsY3VsIGRpc3BsYXkgdGhlIHNjcmVlblxuICAgICAgcHJpbnRDYWxjdWwgKz0gZS50YXJnZXQuaW5uZXJIVE1MXG4gICAgICBzY3JlZW4uaW5uZXJIVE1MID0gcHJpbnRDYWxjdWxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfVxuICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2NyZWVuLmlubmVySFRNTCA9ICcnXG4gICAgYXJyLnNwbGljZSgwLGFyci5sZW5ndGgpXG4gICAgcHJpbnRDYWxjdWwgPScnXG4gICAgc2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJylcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGVycm9yID0gKHN0clNpZ25NZXNzYWdlKSA9PiB7XG4gICAgc2NyZWVuLmlubmVySFRNTCA9ICdlcnIgd2l0aCBzaWduICcgKyBzdHJTaWduTWVzc2FnZSBcbiAgICBzY3JlZW4uY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxuICB9XG4gIFxuICBlcXVhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVzdWx0ID0gMFxuICAgIHN0clNpZ24gICA9IGFyci5qb2luKCcnKVxuICAgIC8vcmV0dXJuIGFuIGFycmF5IHdpdGggdGhlIG51bWJlciB0b2dldGhlclxuICAgIGFyclNvcnQgPSBzdHJTaWduLm1hdGNoKC8oXFxkKyl8XFxEL2cpOyAvL1sgJzQnLCAnLScsICc5NCcsICctJywgJzgnIF1cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFyclNvcnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGFyclNvcnRbaV0sIHByZXYgPSBhcnJTb3J0W2ktMV0sIG5leHQ9YXJyU29ydFtpKzFdO1xuICAgICAgcHJldiA9IChwcmV2ICE9PSB1bmRlZmluZWQgJiYgYXJyU2lnbi5pbmRleE9mKHByZXYpID09PSAtMSApID8gcGFyc2VJbnQocHJldiwxMCkgOiAnJ1xuICAgICAgbmV4dCA9IChuZXh0ICE9PSB1bmRlZmluZWQgJiYgYXJyU2lnbi5pbmRleE9mKG5leHQpID09PSAtMSApID8gcGFyc2VJbnQobmV4dCwxMCkgOiAnJ1xuICAgICAgLy9kZWJ1Z2dlclxuICAgICAgLy9cbiAgICAgIC8vIGlmIHZhbHVlIGN1cnJlbnQgaXQncyBhIHNpZ246ICstLyp4IFxuICAgICAgaWYoYXJyU2lnbi5pbmRleE9mKGN1cnJlbnQpID49IDApIHtcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09ICcrJykge1xuICAgICAgICAgIGlmIChpID09PSAxKSB7Ly9pZiBpcyB0aGUgZmlyc3Qgc2lnbiArLS8qIHdlJ3JlIGNvdW50IHRoZSBwcmV2IGFuZCBuZXh0IGVsZW1lbnRcbiAgICAgICAgICAgIHJlc3VsdCA9IHByZXYgKyBuZXh0XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCArICcgOiAnICsgaSArICcgOiAnICsgYXJyU29ydFtpXSArICcgOiAnICsgYXJyU29ydFtqXSApO1xuICAgICAgICAgIH1lbHNlIGlmIChpID4gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IG5leHQgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCArICcgOiAnICsgaSArICcgOiAnICsgYXJyU29ydFtpKzFdKTtcbiAgICAgICAgICB9IGVsc2UgaWYoaSA9PT0gMCl7XG4gICAgICAgICAgICBlcnJvcignKycpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09ICctJykge1xuICAgICAgICAgIGlmIChpID09PSAxKSB7Ly9maXJzdCBzaWduICstLypcbiAgICAgICAgICAgIHJlc3VsdCA9IHByZXYgLSBuZXh0XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCArICcgLSAnICsgJyA6ICcgKyBpICsgJyA6ICcgKyBhcnJTb3J0W2ldICsgJyA6ICcgKyBhcnJTb3J0W2pdICk7XG4gICAgICAgICAgfWVsc2UgaWYgKGkgPiAxKSB7XG4gICAgICAgICAgICByZXN1bHQgLT0gbmV4dCBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0ICsgJyAtICcgKycgOiAnICsgaSArICcgOiAnICsgYXJyU29ydFtpKzFdKTtcbiAgICAgICAgICB9IGVsc2UgaWYoaSA9PT0gMCl7XG4gICAgICAgICAgICBlcnJvcignLScpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09ICd4Jykge1xuICAgICAgICAgIGlmIChpID09PSAxKSB7Ly9maXJzdCBzaWduICstLypcbiAgICAgICAgICAgIHJlc3VsdCArPSBwcmV2ICogbmV4dFxuICAgICAgICAgIH1lbHNlIGlmIChpID4gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICo9IG5leHQgXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCArICcgKiAnICsnIDogJyArIGkgKyAnIDogJyArIGFyclNvcnRbaSsxXSk7XG4gICAgICAgICAgfSBlbHNlIGlmKGkgPT09IDApe1xuICAgICAgICAgICAgZXJyb3IoJyonKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSAnLycpIHtcbiAgICAgICAgICBpZiAoaSA9PT0gMSkgey8vZmlyc3Qgc2lnbiArLS8qXG4gICAgICAgICAgICByZXN1bHQgKz0gcHJldiAvIG5leHRcbiAgICAgICAgICB9ZWxzZSBpZiAoaSA+IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCAvPSBuZXh0IFxuICAgICAgICAgIH0gZWxzZSBpZihpID09PSAwKXtcbiAgICAgICAgICAgIGVycm9yKCcvJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgfSBcblxuICAgIH1cbiAgICBpZiAoIXNjcmVlbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIHtcbiAgICAgIHNjcmVlbi5pbm5lckhUTUwgPSByZXN1bHQgXG4gICAgfSBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pOyAvL2VuZCBjbGljayBlcXVhbFxuXG59KCkpOy8vRU5EXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
