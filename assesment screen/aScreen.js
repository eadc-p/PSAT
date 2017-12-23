var qList=[];
var totalQuestions;

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
function theDomHasLoaded(){
$.ajax({
  url: 'https://raw.githubusercontent.com/eadc-p/eadc-p.github.io/master/IntermediateMathematics.json',
  dataType: 'text',
}).done(successFunction);
}


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

function successFunction(data) {/*
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
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
  $('body').append(table);
  */
    qList = JSON.parse(data);
    console.log(qList[0], qList.length/4);
    totalQuestions = qList.length/4;

  }
window.addEventListener("load", pageFullyLoaded, false);
function pageFullyLoaded(e) {
    // do something again
    $('.questionList').html('');
    for(let i=0; i<totalQuestions; i++){
    $('.questionList').append('<a href="#" class="btn qLButton">'+ (i+1) +'</a>');
    }
    console.log(totalQuestions, qList);
    
}
