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
  let PosX = 0;
  let PosY = 0;
  let ImgPos = findPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  imgPosX = PosX - ImgPos[0];
  imgPosY = PosY - ImgPos[1];

  console.log(imgPosX, imgPosY)
  var box = document.getElementById('boxId');
  box.style.left = PosX-25+'px';
  box.style.top = PosY-25+'px';
  return [imgPosX, imgPosY]
}

const isWaldo = (myImg) => {
	let coordinates = getCoordinates(myImg)
	let posX = coordinates[0];
	let posY = coordinates[1];
	if (posX <= 655 && posX >= 575) {
		if (posY >= 125 && posY <= 195) {
			console.log('Found!')
		}
	}

}

const findWaldo = () => {
	const myImg = document.getElementById("myImgId");
	myImg.addEventListener('click', function() {isWaldo(myImg)})
}


document.addEventListener("turbolinks:load", function() { findWaldo() })