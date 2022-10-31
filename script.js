const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;


prev.addEventListener('click', () => {
  nextImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++; //index=index+1
    document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%";
    if (index == 4){
      document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%" + "<br> CHECK MIDWOOD WEBSITE: <a href='https://www.midwoodhighschool.org/' style='color: black;'>Midwood</a>" ;
    }
    if(index == totalImages) {
      document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%";
      if (index == 4){
        document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%" + "<br> CHECK MIDWOOD WEBSITE: <a href='https://www.midwoodhighschool.org/' style='color: black;'>Midwood</a>" ;
      }
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
      document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%";
    
      //document.getElementById("numbers").innerHTML = index - 1;
    } else {
      index--; //index=index-1
      document.getElementById("numbers").innerHTML = index + '/' + totalImages + ' = ' + ((index / totalImages) * 100) + "%";
      
      //document.getElementById("numbers").innerHTML = index;
    }
  }

  // Putting the image at the index position in spotlight/visible.
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  
  images[index].classList.add('main');
}