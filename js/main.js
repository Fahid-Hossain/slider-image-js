let sliderImages = [
    "images/slider01.jpg",
    "images/slider02.jpg",
    "images/slider03.jpg",
    "images/slider04.jpg"
];

let slider_image_id =   document.getElementById("slider-img-id");

let imgIndex = 0;
let time = setInterval(()=>{
    if(imgIndex>=sliderImages.length){
        imgIndex=0;
    }
    const imageUrl = sliderImages[imgIndex];
    // console.log(imageUrl);
    
    slider_image_id.setAttribute("src",imageUrl);
    imgIndex ++;
    
    
},2500)

// clearInterval(time);