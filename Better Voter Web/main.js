var raceTitle = "Minnesota Congressional Elections";

var race = ["District 1", "District 2", "District 3", "District 4",
    "District 5", "District 6", "District 7", "District 8"
];

var candidate = [
    ["Sanchez, Onita", "Troutman, Rachel", "Whitman, Gary"],
    ["Berk, Thomas", "Chiang, Michael", "Larson, Alicia"],
    ["Thomas, Howard", "Olsen, Fred", "Shapiro, Douglas"],
    ["Sweet, Alice", "Grovener, Stewart", "Reardin, Samuel"],
    ["Aitkens, Mary", "Mundleberg, Linda", "Ketrick, Rachel"],
    ["Nielsen, Kevin", "Francis, Trevor", "Inglessohn, Ray"],
    ["Pulaski, Stewart", "Biersen, Nancy", "Pope, Richard"],
    ["Venn, Michael", "Ramirez, Juan", "Zander, Audry"]
];

var party = [
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"],
    ["D", "R", "I"]
];

var votes = [
    [193211, 142164, 22486],
    [164338, 193587, 42168],
    [159937, 222335, 23217],
    [216685, 123703, 21135],
    [262102, 100744, 27255],
    [174944, 179240, 11145],
    [197791, 114151, 15296],
    [191976, 161831, 4012],
];


var electionHTML = "<h1>" + raceTitle + "</h1>";
for (var i = 0; i < race.length; i++) {
    electionHTML += "<section><h2>" + race[i];
    for (var j = 0; j < candidate[i].length; j++) {
        var totalVotes = votes[i][0] + votes[i][1] + votes[i][2];
        var percentVotes = (votes[i][j] / totalVotes) * 100;
        electionHTML += "<h4>" + candidate[i][j] + " (" + party[i][j] + ") " + "<br><div class='bar'><div class='bar_inner " + party[i][j] + "' style='width:" + percentVotes.toFixed(0) * 2 + "px;'></div></div>" + votes[i][j].toLocaleString() + " " + percentVotes.toFixed(1) + "%</h4>";
    }
    electionHTML += "</h2></section>";
};
document.getElementById("body").innerHTML = electionHTML;