<template>
    <section>
        <product-app cellName="product" :loopedObj="hot_products"></product-app>
        <dir class="text-one">
            <div class="overlay"></div>
            <dir class="data">
                <h1>Image with text overlay</h1>
                <p>
                    Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story.
                </p>
            </dir>
        </dir>
        <section class="down_image main-container">
            <div class="image">
                <img src="src/assets/images/left_image.jpg" alt="img">
            </div>
            <div class="data">
                <h3>
                    Image with text
                </h3>
                <p>
                    Pair large text with an image to give focus to your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.
                </p>
            </div>
        </section>
        <section class="slider">
            <button class="arrow next" @click="sliding()">
                <img src="https://img.icons8.com/ios/50/ffffff/forward.png">
            </button>
            <button class="arrow prev" @click="sliding()">
                <img src="https://img.icons8.com/ios/50/ffffff/back.png">
            </button>
            <div class="overlay">

            </div>
            <div class="slide_one active_slide">
              <div class="text">
                <h3>
                    Image Slide
                </h3>
                <p>
                    Tell Your brand's story through images
                </p>
              </div>
            </div>
            <dir class="slide_two">
              <div class="text">
                <h3>
                    Image Slide
                </h3>
                <p>
                    Tell Your brand's story through images
                </p>
              </div>
            </dir>
        </section>
    </section>
</template>
<script>
import product_item from '../general/product-item.vue';
export default {
    components:{
        'product-app':product_item,
    },
    data(){
        return{
            hot_products:[
                {type:0,id:1,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/dress_1.png',name_en:'product number one'},
                {type:0,id:2,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/dress_2.jpg',name_en:'product number two'},
                {type:1,id:3,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/tshirt_1.jpg',name_en:'product number three'},
                {type:1,id:4,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/tshirt_2.jpg',name_en:'product number four'},
                {type:1,id:5,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/tshirt_2.png',name_en:'product number five'},
                {type:1,id:6,descreption:'This is product description for more details about this piece and what material it was made of.',price:'120.00',oldPrice:120,img:'src/assets/images/tshirt_3.jpg',name_en:'product number six'},
            ]
        }
    },
    methods:{
        sliding(){
            var active_slide = document.querySelectorAll(".active_slide")[0],
            slideOneElement = document.querySelectorAll('.slide_one')[0],
            slideTwoElement = document.querySelectorAll('.slide_two')[0];
            if(slideOneElement.classList.contains('active_slide')){
                slideTwoElement.style.opacity = 1;
                slideOneElement.style.opacity = 0;
                slideOneElement.classList.remove('active_slide');
                slideTwoElement.classList.add('active_slide');
            }else{
                slideTwoElement.style.opacity = 0;
                slideOneElement.style.opacity = 1;
                slideOneElement.classList.add('active_slide');
                slideTwoElement.classList.remove('active_slide');
            }      
        }
    }
}
</script>
<style lang="scss" scoped>
.text-one{
    background: url('../../assets/images/mens-watch-and-ring_1728x.jpg');
    margin: 40px 0;
    padding: 120px 0;
    position: relative;
    .overlay{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: .6;
    }
    .data{
        position: relative;
        z-index: 3;
        height: 100%;
        width: 100%;
        text-align: center;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: -20px;
        h1{
            margin-bottom: 30px;
            font-size: 60px;
            text-shadow: 2px 2px 2px #333;
            text-align: center;
        }
        p{
            font-weight: bolder;
            font-size: 25px;
            text-shadow: 2px 1px 1px #333;
            width: 60%;
            line-height: 1.8;
            text-align: center;
            @media(max-width:1000px){
                width: 100%;
            }
        }
    }
}
.down_image{
    display: flex;
    margin: 60px auto;
    align-items: center;
    @media(max-width:1100px){
        flex-direction: column;
    }
    .image{
        height: 400px;
        width: 40%;
        display: flex;
        align-items: center;
        @media(max-width:1100px){
            width: 100%;
            margin-bottom: 80px;
            height: auto;
        }
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .data{
        margin-left: 60px;
        width: 40%;
        @media(max-width:1100px){
            width: 100%;
            margin-left: 0px;
        }
        h3{
            font-size: 30px;
            color: #333;
            margin-bottom: 20px;
        }
        p{
            color: #888;
            line-height: 1.8;
            font-size: 18px;
        }
    }

}
.slider{
    height: 1000px;
    position: relative;
    .overlay{
        position: absolute;
        top: 0px;
        left: 0px;
        background: #000;
        opacity: .5;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    .slide_one{
        width: 100%;
        height: 100%;
        background: url('../../assets/images/slide_1.jpg');
        top: 0px;
        right: 0px;
        position: absolute;
        opacity: 0;
        transition: all .5s ease-in-out;
        background-size: cover;
    }
    .slide_two{
        width: 100%;
        height: 100%;
        background: url('../../assets/images/slide_2.jpg');
        top: 0px;
        right: 0px;
        position: absolute;
        opacity: 0;
        transition: all 1s ease;
        background-size: cover;
    }
    .active_slide{
        opacity: 1;
        .text{
            top: 50%;
            opacity: 1;
        }
    }
    .text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        z-index: 9;
        text-align: center;
        opacity: 0;
        transition: all 1s ease;
        h3{
          font-size: 40px;
          margin-bottom: 30px;
          text-shadow: 2px 2px 2px #333;
        }
        p{
          text-shadow: 2px 2px 2px #333;          
          font-size: 20px;
        }
        top: 60%;
    }
    .arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        z-index: 10;
        cursor: pointer;
        outline: 0px;
        &.next{
            right: 30px;
        }
        &.prev{
            left: 30px;
        }
    }
}
</style>

