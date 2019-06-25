const findPosition = (oElement) => {
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

const getCoordinates = (myImg, e) => {
  let posX = 0;
  let posY = 0;
  let ImgPos = findPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    posX = e.pageX;
    posY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      posX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      posY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  imgPosX = posX - ImgPos[0];
  imgPosY = posY - ImgPos[1];
  changeBoxPosition(posX, posY)
  return [imgPosX, imgPosY]
}

const changeBoxPosition = (x, y) => {
  const box = document.getElementById('boxId');
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden")
  }
  box.style.left = x-15+'px';
  box.style.top = y-15+'px';
}

const isWaldo = (myImg, startTime) => {
  let coordinates = getCoordinates(myImg)
  let posX = coordinates[0];
  let posY = coordinates[1];
  Rails.ajax({
    type: "get",
    url: `/waldo/is_waldo?x=${posX}&y=${posY}`,
    // data: { data_value: JSON.stringify(coordinates) },
    success: function(repsonse){
      if (repsonse === true) { 
        alert(`You won in ${timer(startTime)} seconds!`) 
      }
    },
    error: function(repsonse){}
  })
}

const timer = (startTime) => {
  const endTime = Date.now()
  return (endTime - startTime)/1000
}

const findWaldo = (startTime) => {
  startTime = Date.now()
  const myImg = document.getElementById("myImgId");
  myImg.addEventListener('click', function() {isWaldo(myImg, startTime)})
}


document.addEventListener("turbolinks:load", function() { findWaldo() })