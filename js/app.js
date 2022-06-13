const banner_row = document.querySelectorAll(".banner_row");
const left_banner_btn = document.querySelector(".left_banner_btn");
const right_banner_btn = document.querySelector(".right_banner_btn");
const current_slied_number = document.querySelector(".current_slied_number");
const totle_slied_number = document.querySelector(".totle_slied_number");
const animationOne = document.querySelector(".animationOne");
const animationTwo = document.querySelector(".animationTwo");
const banner_change_group = document.querySelector("#banner_change_group");

const nav_toggle_box = document.querySelector(".nav_toggle_box");
const nav_toggle = document.querySelector(".nav_toggle");
const nav_toggle_group = document.querySelector(".nav_toggle_group");

const All_reviews_items = document.querySelectorAll(".reviews_right_groups");
const rv_active_number = document.querySelector(".rv_active_number");
const rv_total_number = document.querySelector(".rv_total_number");

const rv_left = document.querySelector(".rv_left");
const rv_right = document.querySelector(".rv_right");

const model_class = document.querySelector(".model_class");
const model_close = document.querySelector(".model_close");

const banner_video = document.querySelectorAll(".banner_video");
const model_video_src = document.querySelector(".model_video_src");


//====================================== nav_toggle area start=====================================================
  nav_toggle.addEventListener("click", function(e){
    this.querySelector(".bi").classList.toggle("bi-x")
    nav_toggle_box.classList.toggle("open_nav_toggle")
    nav_toggle_group.classList.add("animate__animated", "animate__fadeInRight");
  })
//====================================== nav_toggle area end=====================================================

//====================================== slied area start=====================================================
        // slider child anumation effect add
        if (window.matchMedia("(max-width: 767px)").matches) {
            animationOne.classList.add("animate__animated", "animate__fadeInLeft");
            animationTwo.classList.add("animate__animated", "animate__fadeInRight");
        }else{
            animationOne.classList.add("animate__animated", "animate__fadeInUp");
            animationTwo.classList.add("animate__animated", "animate__fadeInDown");
        }

        let change = 0;

        // total slied number innerHTML
        banner_row.forEach((e, i) => {
          totle_slied_number.innerHTML = `${i + 1}`;
        });

        // slider child anumation effect add function
        function sliderAnimationEffect(change) {

                if (window.matchMedia("(max-width: 767px)").matches) { // If media query matches
                    banner_row[change].classList.add("animate__animated", "animate__fadeIn");
                    banner_row[change].querySelector(".animationOne").classList.add("animate__animated", "animate__fadeInLeft");
                    banner_row[change].querySelector(".animationTwo").classList.add("animate__animated", "animate__fadeInRight");
                } else {
                    banner_row[change].classList.add("animate__animated", "animate__fadeIn");
                    banner_row[change].querySelector(".animationOne").classList.add("animate__animated", "animate__fadeInUp");
                    banner_row[change].querySelector(".animationTwo").classList.add("animate__animated", "animate__fadeInDown");
                }
              

        }

        // change slider
        function bannerchange(prebtn = false) {
          banner_row.forEach((e, i) => {
            if (e.classList.contains("active")) change = i;
          });
          banner_row[change].classList.remove("active");

          if (prebtn) {
            if (change === 0) {
              change = banner_row.length - 1;
              banner_row[change].classList.add("active");
              current_slied_number.innerHTML = change + 1;
              sliderAnimationEffect(change);
            } else {
              change = change - 1;
              banner_row[change].classList.add("active");
              current_slied_number.innerHTML = change + 1;
              sliderAnimationEffect(change);
            }
          } else {
            if (change === banner_row.length - 1) {
              change = 0;
              banner_row[change].classList.add("active");
              current_slied_number.innerHTML = 1;
              sliderAnimationEffect(change);
            } else {
              change = change + 1;
              banner_row[change].classList.add("active");
              current_slied_number.innerHTML = change + 1;
              sliderAnimationEffect(change);
            }
          }
        }
        // setInterval Active
        let Inter_val = setInterval(bannerchange, 4000);

        // previous slide function
        function left_btn() {
          clearInterval(Inter_val);
          bannerchange(true);
          Inter_val = setInterval(bannerchange, 4000);
        }

        // next slide bfunctiontn
        function right_btn() {
          clearInterval(Inter_val);
          bannerchange(false);
          Inter_val = setInterval(bannerchange, 4000);
        }

        // left_banner_btn / previous btn
        left_banner_btn.addEventListener("click", left_btn);

        // right_banner_btn  / next btn
        right_banner_btn.addEventListener("click", right_btn);

//====================================== slied area end=====================================================

//================================ review_Slider_GP area start====================================
    
      // rv_total_number.innerHTML = `0${All_reviews_items.length}`
      // rv_active_number.innerHTML = `01`
      let revideActiveSlider;
    function reviewSlierFun(left, right=true){
      All_reviews_items.forEach((e, i) => {
        if(e.classList.contains("active")) revideActiveSlider = i;

      });
      All_reviews_items[revideActiveSlider].classList.remove("active")

      if(right){
        if(revideActiveSlider === (All_reviews_items.length-1)){
        revideActiveSlider = 0
        All_reviews_items[revideActiveSlider].classList.add("active")
        }else {
          All_reviews_items[revideActiveSlider + 1].classList.add("active")
        }
      }else if(left){
        if(revideActiveSlider === 0){
          revideActiveSlider = All_reviews_items.length-1
          All_reviews_items[revideActiveSlider].classList.add("active")
          }else {
            All_reviews_items[revideActiveSlider - 1].classList.add("active")
          }
      }
      
      
      
      console.log(revideActiveSlider);
    }
    let rvsetIn = setInterval(reviewSlierFun, 5000)
    
    function rv_rightFn(){
      clearInterval(rvsetIn)
      reviewSlierFun(left=false, right=true)
      rvsetIn = setInterval(reviewSlierFun, 5000)
    }
    
    function rv_leftFn(){
      clearInterval(rvsetIn)
      reviewSlierFun(left=true, right=false)
      rvsetIn = setInterval(reviewSlierFun, 5000)
    }

    rv_left.addEventListener("click", rv_leftFn)
    rv_right.addEventListener("click", rv_rightFn)
//====================================== review_Slider_GP area end=========================================

// model pop up ================================
model_close.addEventListener("click", function(){
  model_class.classList.add("open_model")
  model_class.classList.remove("close_model")
  model_video_src.pause()
})

banner_video.forEach((item) => {
  item.addEventListener("click", function(e){
    console.log("word");
   let video = this.querySelector((".banner_video_src")).src;
   model_video_src.setAttribute("src" , video);
   model_video_src.play()
   model_class.classList.add("close_model")
   model_class.classList.remove("open_model")
  })
})
