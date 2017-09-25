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
        objectIndex.images.forEach(function (image,index) {
            //create an image element
          let newSubImg = document.createElement('img');
          // add a css class to it
          newSubImg.classList.add('thumb')
          //set the src
          newSubImg.src = "images/" + objectIndex.images[index];
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
})();
