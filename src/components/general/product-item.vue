<template>
    <section class="main-container">
        <div class="product" v-for="cellName in loopedObj">
            <router-link :to='"/product_details/"+cellName.id' class="image">
              <img :src="cellName.img" :alt="cellName.name_en">
            </router-link>
            <router-link :to='"/product_details/"+cellName.id' class="pr_name">
                {{cellName.name_en}}
            </router-link>
            <div class="prices">
                <h4>
                    {{cellName.price + " L.E"}}
                </h4>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props:{
        cellName:{
            type:String,
        },
        loopedObj:{
            type:[Array,Object],
        }
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
// 2af598
.main-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    @media(max-width:1350px){
        width: 80%;
    }
    @media(max-width:700px){
        justify-content: center;
        align-items: center;
    }
    .product{
        width: calc(100% / 3.3);
        margin-bottom: 40px;
        border-radius: 5px;
        overflow: hidden;
        @media(max-width:1100px){
            width: calc(100% / 3.2)
        }
        @media(max-width:1000px){
            width: calc(100% / 2.2)
        }
        @media(max-width:700px){
            width:90%;
            border-bottom: 1px solid #eee;
            padding-bottom: 50px;
        }
        @media(max-width:500px){
            width:100%;
        }
        .image{
            width: 100%;
            height: 350px;
            display: inline-block;
            overflow: hidden;
            transition: all .2s ease-in-out;
            text-align: left;
            img{
                max-width: 100%;
                max-height: 100%;
            }
            &:hover{
                opacity: .8;
            }
        }
        .pr_name{
            text-transform: capitalize;
            letter-spacing: 1px;
            font-size: 15px;
            margin: 0px;
            display: inline-block;
            padding: 8px 0;
            color: #444;
            font-weight: bolder;
            text-decoration: none;
            transition: all .2s ease-in;
            &:hover{
                color: #000;
            }
        }
        .prices{
            display: flex;
            justify-content: flex-start;
            h4{
                color: #888;
                margin: 0px;
                padding: 5px 0;
                font-size: 14px;
                &.old{
                    margin-left: 20px;
                    color: rgb(145, 8, 8);
                    position: relative;
                    &::after{
                        content: "";
                        position: absolute;
                        width: 110%;
                        height: 1.5px;
                        background: rgb(145, 8, 8);
                        right: -5%;
                        top: 52%;
                    }
                }
            }
        }
        .pr_descreption{
            color: #444;
            padding: 6px 10px;
            margin: 0px;
            font-size: 14px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
}
</style>
