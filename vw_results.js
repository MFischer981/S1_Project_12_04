"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Micah Fischer
   Date:   3-6-18
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

function calcSum(value) {
    totalVotes += value;
}

function calcPercent(value, sum) {
    return (100 * value / sum);
}
// Set h1 string to RaceTitle
var reportHTML = "<h1>" + raceTitle + " </h1>"
// Use for loop to iterate through each race and generate candidate rows.
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    // Append strings to reportHTML.
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>"
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}

// Get element by tag name of section set innterHTML to reportHTML variable.
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
    // Set rowHTML to empty string.
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        // Set variable of candidateName, Party, Votes, Percent.
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // Use variables to generate string of HTML.
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>";
        // Generate bar HTML call createBar function.
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        // Close rowHTML string.
        rowHTML += "</tr>";
    }
    // Retrun RowHTML
    return rowHTML;
}

// A functionwith a switch car within. Set barHTML html string content based on the partyType variable. Return the barHTML.
function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='rep'></td>"
            break;
        case "I":
            barHTML = "<td class='ind'></td>"
            break;
    }
    return barHTML;
}