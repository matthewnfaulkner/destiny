$(document).ready(function(){
  populate();

  $('.tool-bar').draggable({
    containment: '#main-container',
    cursor: 'move'
  })
  $('.twitchstream').draggable({
    containment: '#main-container',
    cursor: 'move'
  })

  $('.twitchstream').resizable();

  $('.tool').click(function(event){
    var id = event.target.id;
    console.log(id);
    $('.tool').removeClass("active");
    $(this).toggleClass("active");
    $('.subtoolbar').toggleClass("active");
    $('#subtool')[0].innerHTML = "";
    $('#subtool').append(genTwitchIcons());
    $('#subtoolstream').click(function(event){
      $(".main-container").append("<div id='twitchstream1' class='twitchstream ui-widget-content'></div>");
      $(".confirm").addClass("active");
      $('#twitchstream1').resizable({
        grid: [80, 80]
      });
      $('.twitchstream').draggable({
        containment: '#main-container',
        cursor: 'move',
        grid: [80, 80]
      })
    })
    $('#add-element').click(function(){
      $('.twitchstream').addClass("active");
      var width = $('.twitchstream').width();
      var height = $('.twitchstream').height();
      new Twitch.Embed("twitchstream1", {
        width: width,
        height: height,
        channel: "monstercat"
      });
    })
  })

})

function populate(){
  var height = $(".main-container").height();
  var width = $(".main-container").width();
  xTotal = width/80;
  yTotal = height/80;
  var xcount = 0;
  var ycount = 0;
  var main_container = $('.main-container');
  while(ycount < yTotal){
    while(xcount < xTotal){
      $('.main-container').append(genCube(xcount*80, ycount*80))
      xcount += 1;
    }
    ycount += 1;
    xcount = 0;
  }

}

function genCube(xpos , ypos){
  return "<div class='cube active' style='top: " + ypos + "px; left: " + xpos + "px'></div>";
}
function genTwitchIcons(){
  var html = "<td><div id='subtoolstream' class='subtool'><img src='images/stream.png' style='width: 50px; height:50px;' ></div></td>"
  html += "<td><div class='subtool'><img src='images/chat.png' style='width: 50px; height:50px;'></div></td>";
  return html;
}
