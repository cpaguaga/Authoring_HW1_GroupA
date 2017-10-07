(function() {
  var images = document.querySelectorAll('.image-holder'),
      heading = document.querySelector('.heading'),
      subhead = document.querySelector('.main-copy h2'),
      seasonText = document.querySelector('.main-copy p'),
      appliedClass;

      //i want to change all the content on the page
      function changeElements() {
        //debugger; // this is a special term that stops code execution
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

        //remove duplicate images
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }

        // add the images to the bottom of the page
        objectIndex.images.forEach(function (image, index) {
            //create an image element
          let newSubImg = document.createElement('img');
          // add a css class to it
          newSubImg.classList.add('thumb')
          //set the src
          newSubImg.src = "images/" + objectIndex.images[index];

          newSubImg.dataset.index = index;

          //add an event handledr to trigger a lightbox
          newSubImg.addEventListener('click', function() { popLightbox(index, objectIndex); }, false);
          //add it to the page
          subImages.appendChild(newSubImg);
        });

        //remove the colours we applied on the last click
        subhead.classList.remove(appliedClass);
        heading.classList.remove(appliedClass);

        //change the text using the values of the properties in the object
        subhead.firstChild.nodeValue = objectIndex.headline;
        seasonText.firstChild.nodeValue = objectIndex.text;

        //add the colour that corresponds to the season we clicked on
        subhead.classList.add(this.id);
        heading.classList.add(this.id);

        appliedClass = this.id;
      }

//easier way to write a for loop
  images.forEach(function(image, index){
    //add an event handle to each images
  image.addEventListener('click', changeElements, false);
  })

  //document.querySelector('#spring').click();
  changeElements.call(document.querySelector('#spring'));

  //trigger the lightbox
  function popLightbox(currentIndex, currentObject) {
    // debugger;
    // move the window to the top every time we click - quick bug fix
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    let lightbox = document.querySelector('.lightbox');
    let lightboxImg = lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightboxClose = lightbox.querySelector('.close-lightbox');

      lightbox.style.display = "block";
      lightboxImg.src = "images/" + currentObject.images[currentIndex];
      lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

      lightboxClose.addEventListener('click', closeLightbox, false);

      function closeLightbox() {
         //reset everything, close the lightbox
         //debugger;
         lightbox.style.display = "none";
       }
  }

  //documet.querySelector('#spring').click();
  changeElements.call(document.querySelector('#spring'));
})();
