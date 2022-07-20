
// function sliderNext() {
    //     // console.log(document.getElementById("toggle-card-1").innerHTML)

    //     for (let i = 0; i < idsActive.length; i++) {
    //         if (document.getElementById(idsActive[i]).innerHTML != "") {
    //             const element = "activeSlider" + classes[i + 1]
    //             const element0 = "activeSlider1"

    //             if (i == idsActive.length - 1) {
    //                 document.querySelectorAll(element0) = document.getElementById(idsEducation[0]).innerHTML

    //             }
    //             else if (i < idsActive.length - 1) {
    //                 document.querySelectorAll(element) = document.getElementById(idsEducation[i+1]).innerHTML

    //             }
    //             else { document.querySelectorAll("activeSlider1") }
    //         }
    //     }


    // console.log(document.querySelectorAll("activeSlider5"))

    // function swapDiv() {

    //     const idsEducation = ["toggle-card-1", "toggle-card-2", "toggle-card-3", "toggle-card-4", "toggle-card-edu"]
    //     const classes = [1, 2, 3, 4, 5]
    //     const ids = ["b", "c", "d", "e", "f"]
    //     const idsActive = ["card1exp", "card2exp", "card3exp", "card4exp", "edu"]
    //     for (let i = 0; i < array.length; i++) {
    //         if (document.getElementById(idsActive[i]) != "") {



    //         }


    //     }

    // }

    // let slideIndex = -1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
      document.activeElement()
      // document.getElementsByClassName("card:checked")
      // document.getElementById("toggle-card-3")
    }
    
    // // Thumbnail image controls
    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("cardss");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[slideIndex-1].style.display = "block";
    }