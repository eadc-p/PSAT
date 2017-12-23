var qList=[];
var totalQuestions;

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
function theDomHasLoaded(){
$.ajax({
  url: 'https://raw.githubusercontent.com/eadc-p/eadc-p.github.io/master/IntermediateMathematics.json',
  dataType: 'text',
}).done(successFunction);
}

function successFunction(data) {
    qList = JSON.parse(data);
    console.log(qList[0], qList.length/4);
    totalQuestions = qList.length/4;
  }

window.addEventListener("load", pageFullyLoaded, false);
function pageFullyLoaded(e) {
    // do something again
    var qReference = 0;
    $('.questionList').html('');
    for(let i=0; i<totalQuestions; i++){
    $('.questionList').append('<a href="#" class="btn qLButton">'+ (i+1) +'</a>');
    }
    $('.totalNo').text(totalQuestions);
    console.log(totalQuestions, qList);
    doTheThing(qReference);

    $('.next').on('click', function(){
        qReference++;
        console.log(qReference+1);
        doTheThing(qReference);
    });


    $('.back').on('click', function(){
        qReference--;
        console.log(qReference + 1);
        doTheThing(qReference);
        if(qReference===0){
          $('.back').addClass('disabled');
        }
    });

    for(let i=1;i<=totalQuestions;i++){
      $('.qLButton:nth-child(' + i + ')').on('click', function(){
        qReference=doTheThing(i-1);
      });
    }

  }


function doTheThing(ref){
  let num= ref+1;
  let ques = ref *4 + Math.floor(4*Math.random());
  $('.qLButton').removeClass('active');
  $('.qLButton:nth-child(' + num + ')').addClass('active');
  $('.questionNumber').text(num);
  $('.numQuestion').text(num + '.Question');
  $('.question').text(qList[ques].Question);
  if(qList[ques]['Question Image']){
    $('.qImage').attr('src', qList[ques]['Question Image'] );
    $('.qImage').css('display', 'block');
  }else{
    $('.qImage').css('display', 'none');
  }
  $('.options:nth-child(1)').text(qList[ques]['Option a (Correct)']);
  $('.options:nth-child(2)').text(qList[ques]['Option b']);
  $('.options:nth-child(3)').text(qList[ques]['Option c']);
  $('.options:nth-child(4)').text(qList[ques]['Option d']);
  if(ref===0){
    $('.back').addClass('disabled');
  }else{
    $('.back').removeClass('disabled');
  }

  if(ref===totalQuestions-1){
    $('.next').addClass('disabled');
  }else{
    $('.next').removeClass('disabled');
  }
  return ref; //returns the current question number-1. needed since question can be changed from the qList.
}


/*
function convertCSVtoJson(data){
  var allRows = data.split(/\r?\n|\r/);
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  }
  table += '</tbody>';
  table += '</table>';
}
*/
