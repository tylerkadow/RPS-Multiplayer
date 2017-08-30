var config = {
  apiKey: "AIzaSyBDJIh58tINZUcosZaHVyuCvfMUA5RFups",
  authDomain: "rockpaperscissors-411da.firebaseapp.com",
  databaseURL: "https://rockpaperscissors-411da.firebaseio.com",
  projectId: "rockpaperscissors-411da",
  storageBucket: "rockpaperscissors-411da.appspot.com",
  messagingSenderId: "830647811577"
};

  firebase.initializeApp(config);

  var database = firebase.database();

  var players = {};

  var playerOne = {
    wins: 0,
    losses: 0,
    name: "",
    choice: "",
  };

    var playerTwo = {
    wins: 0,
    losses: 0,
    name: "",
    choice: "",
  };

  $("#submit").on("click", function(event){
    event.preventDefault();

    if(database.hasChildNodes = false){
      playerOne.name = $("#name").val().trim();
      $("#player1name").html(playerOne.name);
    $("#rock1").css("display", "inline-block");
    $("#scissors1").css("display", "inline-block");
    $("#paper1").css("display", "inline-block");


    database.ref().push({
      name: playerOne.name,
      wins: playerOne.wins,
      losses: playerOne.losses,
      choice: playerOne.choice,
    })

    }
    else {
      playerTwo.name = $("#name").val().trim();
      $("#player2name").html(playerTwo.name);
    $("#rock2").css("display", "inline-block");
    $("#scissors2").css("display", "inline-block");
    $("#paper2").css("display", "inline-block");

    database.ref().push({
      name: playerTwo.name,
      wins: playerTwo.wins,
      losses: playerTwo.losses,
      choice: playerTwo.choice,
    })

    }
    this.disabled = true;
  })

/*  database.ref().on("value", function(snap){
    $("#player1name").html(snap.val().playerOne.name);
    $("#player2name").html(snap.val().playerTwo.name);
    $("#wins1").html(snap.val().playerOne.wins);
    $("#losses1").html(snap.val().playerOne.losses);
    $("#wins2").html(snap.val().playerTwo.wins);
    $("#losses2").html(snap.val().playerTwo.losses);

  }, function(error){
    console.log("Whoops: " + error.code);

  });*/

  $("#rock1").on("click", function(e){
    event.preventDefault();

    playerOne.choice = "rock";
    database.ref().set({
      name: playerOne.name,
      wins: playerOne.wins,
      losses: playerOne.losses,
      choice: playerOne.choice,
  })

})