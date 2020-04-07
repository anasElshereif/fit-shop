<template>
    <section>
        <div class="fit_popup" @click="close_popup">
            <span class="close_pup" @click="close_popup"><img src="https://img.icons8.com/ios/50/ffffff/multiply.png"></span>
            <iframe :src="iframeSrc" frameborder="0"></iframe>
            <dir class="loader">
                <img src="src/assets/images/Spinner.svg" alt="img">
            </dir>
        </div>
        <div class="details main-container">
            <div class="image">
                <img :src="productDetails.img" alt="img">
            </div>
            <div class="data">
                <h3 class="name">product number one</h3>
                <div class="prices">
                    <h4>
                        120.00 L.E
                    </h4>
                </div>
                <p class="pr-desc">
                This is product description for more details about this piece and what material it was made of.
                </p>
                <div class="selects">
                    <span>size</span>
                    <select class="size">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Larg">Larg</option>
                    </select>
                    <a href="#">
                        add to cart
                    </a>
                    <a href="#" class="buy">
                        but it now
                    </a>
                </div>
                <button class="fit-button" @click="fit_pr">
                    <img src="src/assets/images/logo.png" alt="img" width="50px">
                   <h6>fit this product</h6>                
                </button>
            </div>
        </div>
        <router-link to="/" class="back_link">back to home page</router-link>
    </section>
</template>
<style lang="scss" scoped>
.fit_popup{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .7);
    top: 0px;
    left: 0px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in;
    visibility: hidden;
    opacity: 0;
    iframe{
        min-width: 80%;
        min-height: 70%;
        position: relative;
        z-index: 4;
    }
    .loader{
        width: 300px;
        height: 300px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        img{
            margin-left: -25px;
        }
    }
    .close_pup{
        position: absolute;
        right: 5%;
        top: 5%;
        cursor: pointer;
        img{
            width: 30px;
        }
    }
    &.show{
        visibility: visible;
        opacity: 1;
    }
}
.details{
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(max-width: 980px){
        flex-direction: column;
        align-items: space-between;
    }
    .image{
        width: 48%;
        height: auto;
        @media(max-width:980px){
            width: 100%;
        }
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .data{
        width: 48%;
        @media(max-width:980px){
            width: 100%;
            margin-top: 100px;
        }
        .name{
            text-transform: capitalize;
            margin-bottom: 20px;
            color: #444;
            font-size: 35px;
        }
        .prices{
            display: flex;
            h4{
                color: #888;
                font-size: 20px;
                &.old{
                    color: crimson;
                    margin-left: 20px;
                    position: relative;
                    &::after{
                        width: 110%;
                        height: 1px;
                        background: crimson;
                        content: "";
                        position: absolute;
                        right: -5%;
                        top: 45%;
                    }
                }
            }
        }
        .pr-desc{
            color: #666;
            font-size: 14px;
            padding: 20px 0;
            line-height: 1.8;
        }
        .selects{
            display: flex;
            flex-direction: column;
            span:first-of-type{
                margin-bottom: 20px;
                text-transform: capitalize;
                font-size: 18px;
                color: #444;
            }
            .size{
                padding: 15px 20px;
                background: transparent;
                cursor: pointer;
                color: #555;
                border-radius: 4px;
                outline: 0px;
                margin-bottom: 30px;
            }
            a{
                padding: 15px 20px;
                text-align: center;
                text-decoration: none;
                border: 1px solid #557b97;
                color: #557b97;
                display: inline-block;
                font-size: 15px;
                font-weight: bolder;
                text-transform: uppercase;
                border-radius: 4px;
                transition: all .2s ease-in;
                margin-bottom: 30px;
                &:hover{
                    background: #557b97;
                    color: #fff;
                }
                &.buy{
                    background: #557b97;
                    color: #fff;
                    &:hover{
                        background: #fff;
                        color: #557b97;
                    }
                }
            }
        }
        .fit-button{
            background: transparent;
            border: 1px solid #eee;
            padding: 10px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            h6{
                margin-left: 20px;
                color: #555;
                text-transform: uppercase;
                font-size: 14px;
            }
        }
    }
}
.back_link{
    display: block;
    margin: 40px auto;
    padding: 10px 15px;
    color: #557b97;
    border: 1px solid #557b97;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    width: 250px;
    font-weight: bolder;
    font-size: 14px;
    border-radius: 4px;
    outline: 0px;
    transition: all .2s ease-in;
    &:hover{
        background: #557b97;
        color: #fff;
    }
}
</style>
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
            ],
            id:this.$route.params.id,
            productDetails:'',
            iframe_link_type:'',
            iframeSrc:'',
        }
    },
    beforeMount() {
        this.productDetails = this.hot_products[this.id-1];
        this.iframe_link_type = this.productDetails.type;
        console.log(this.iframe_link_type);
        if(this.iframe_link_type == 0){
            this.iframeSrc = 'http://fit-demo.herokuapp.com/fit/fitting/Dress?fbclid=IwAR28bhYAE2m_t7oebsbi8FSKO4b45rd6q8Cro_ku4rLeIKMw3IXzKIDEDTI'
        }else if(this.iframe_link_type == 1){
            this.iframeSrc = 'http://fit-demo.herokuapp.com/fit/fitting/Shirts?fbclid=IwAR10ITJmHopfdppjW4aJ3uVZO6k8yFdV7VpjFBlmftVOOdb4-kd4f2WSmLc'            
        }
    },
    methods:{
        fit_pr:function(){
            var pop_up = document.getElementsByClassName('fit_popup')[0];
            pop_up.classList.add("show")
        },
        close_popup:function(){
            var pop_up = document.getElementsByClassName('fit_popup')[0];
            pop_up.classList.remove("show")
        }
    }
}
</script>
