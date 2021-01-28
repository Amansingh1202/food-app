<template>
    <main class="container cart">
        <div v-if="cartEmpty">
            <h2>Your Cart</h2>
            <hungry-logo></hungry-logo>
            <h3>Your cart is empty</h3>
            <nuxt-link to="/restaurants"><button>Restaurants</button></nuxt-link>
        </div>
        <div v-else>
            <div class="cartHeader">Cart Items</div>
            <div v-for="cartValue in cart" :key="cartValue.id">
                <div class="container center">
                    <div class="card">
                        <h2>{{ cartValue.item }}</h2>
                        <hr/>
                        <h6>Number of product : {{ cartValue.count }}</h6>
                        <h6>Total amount : ${{ cartValue.combinedPrice }}</h6>
                        <hr/>
                        <h6>Addons:</h6>
                        <div v-if="cartValue.addOns">
                            <ul v-for="addOn in cartValue.addOns" :key="addOn">
                            <li>{{ addOn }}</li>
                        </ul>
                        </div>
                        <div v-else>
                            No Addons
                        </div>
                        <hr/>
                        <h6>Options:</h6>
                        <div v-if="cartValue.options">
                            <li>{{ cartValue.options }}</li>
                        </div>
                        <div v-else>
                            No Options
                        </div>
                    </div>
                </div>
                </div>
        </div>
    </main>
</template>

<script>
import {mapState} from "vuex"
import HungryLogo from '../components/HungryLogo.vue'

export default {
    computed:{
        ...mapState([
            "cart",
        ]),
        cartEmpty(){
            if (this.cart.length == 0){
                return true
            }else{
                return false
            }
        }
    },
    components: { HungryLogo },
}
</script>

<style lang="scss" scoped>

h6{
    font-size: 1em;
}

$black: #282828;
$point: purple;
$point-light: lighten($point, 70%);

$ratio: 0.8;
$card_width: 400px;
$card_height: $card_width * $ratio;
$card_padding: 20px;
$card-bgcolor: rgb(248, 169, 248);
$card_margin: 20px;
$card_round: 6px;
$card-shadow: -20px -20px 0px 0px $point-light;

$card-padding-basis: 3px;
$card_head_padding: 0px 0px $card-padding-basis 0px;

*{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cartHeader{
    color: purple;
    font-weight: 900;
    margin-left: 25vw;
    margin-bottom: 50px;
    font-size: 1.6em;
}

.container{
  width: 80%;
  min-height: 50vh;  
  display: -webkit-box;  
  display: -ms-flexbox;  
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  
  margin-left: 10vw;
  margin-right: auto;
}

.center{
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.card{
  background-color: $card-bgcolor;
  width: $card_width;
  min-height: $card_height;
  
  display: -webkit-box;
  
  display: -ms-flexbox;
  
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: $card_padding;
  margin: $card_margin;
  
  -webkit-box-shadow: $card-shadow;
  
          box-shadow: $card-shadow;
  border-radius: $card_round;
  
  -webkit-animation-name: shadow-show; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 1.5s; /* Safari 4.0 - 8.0 */
  animation-name: shadow-show;
  animation-duration: 1.5s;
  
  -webkit-transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000);
  -o-transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000);
  transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000); /* custom */

  
  h1,h2,h3,h4,h5{
    margin: 0px;
    padding: $card_head_padding;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    color: $black;
  }
  
  hr{
    display: block;
    border: none;
    height: 3px;
    background-color: $point;
    margin: 0px;
    
    -webkit-animation-name: line-show; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.3s; /* Safari 4.0 - 8.0 */
    animation-name: line-show;
    animation-duration: 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000);
    -o-transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000);
    transition-timing-function: cubic-bezier(0.795, 0.000, 0.165, 1.000); /* custom */
  }
  
  p{
    margin: $card-padding-basis 0px 0px 0px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100;
    letter-spacing: -0.25px;
    line-height: 1.25;
    font-size: 16px;
    word-break: break-all;
    word-wrap: pre-wrap;
    color: $black;
    
    -webkit-animation-name: p-show; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 1.5s; /* Safari 4.0 - 8.0 */
    animation-name: p-show;
    animation-duration: 1.5s;
  }
  
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes line-show {
  from {margin: 0px 100px;}
  to {margin: 0px;}
}

/* Standard syntax */
@keyframes line-show {
  from {margin: 0px 100px;}
  to {margin: 0px;}
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes p-show {
  from {color: white;}
  to {color: $black;}
}

/* Standard syntax */
@keyframes p-show {
  from {color: white;}
  to {color: $black;}
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes shadow-show {
  from {
    -webkit-box-shadow: 0px 0px 0px 0px #e0e0e0;
    box-shadow: 0px 0px 0px 0px #e0e0e0;
  }
  to {
    -webkit-box-shadow: $card-shadow;
    box-shadow: $card-shadow;
  }
}

/* Standard syntax */
@keyframes shadow-show {
  from {-webkit-box-shadow: 0px 0px 0px 0px #e0e0e0;box-shadow: 0px 0px 0px 0px #e0e0e0;}
  to {-webkit-box-shadow: $card-shadow;box-shadow: $card-shadow;}
}

</style>