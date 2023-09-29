
$("#set2").on("click", function () {
    $("p").fadeOut();
    $("#set").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set2").animate(
      {
        flexGrow: "8"
      },
      500,
      "linear",
      function () {
        $("#set2").append("<p>Wild Forest</p>");
      }
    );

    $("#set3").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set4").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set5").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
  });
  $("#set3").on("click", function () {
    $("p").fadeOut();
    $("#set").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set2").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear",
      function () {}
    );
    $("#set3").animate(
      {
        flexGrow: "8"
      },
      500,
      "linear",
      function () {
        $("#set3").append("<p>Sunny Beach</p>");
      }
    );
    $("#set4").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set5").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
  });
  $("#set4").on("click", function () {
    $("p").fadeOut();
    $("#set").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set2").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear",
      function () {}
    );
    $("#set3").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set4").animate(
      {
        flexGrow: "8"
      },
      500,
      "linear",
      function () {
        $("#set4").append("<p>City on Winter</p>");
      }
    );
    $("#set5").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
  });
  $("#set5").on("click", function () {
    $("p").fadeOut();
    $("#set").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set2").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear",
      function () {}
    );
    $("#set3").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set4").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set5").animate(
      {
        flexGrow: "8"
      },
      500,
      "linear",
      function () {
        $("#set5").append("<p>Mountains - Clouds</p>");
      }
    );
  });
  console.log("fuck")
  $("#set").on("click", function () {
    $("p").fadeOut();
    $("#set").animate(
      {
        flexGrow: "8"
      },
      500,
      "linear",
      function () {
        $("#set").append("<p>Explore the World</p>");
      }
    );
    $("#set2").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear",
      function () {}
    );
    $("#set3").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set4").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
    $("#set5").animate(
      {
        flexGrow: "1"
      },
      500,
      "linear"
    );
  });
  