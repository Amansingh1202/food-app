<template>
<div>
    <div class="parent">
        <div class="div1" :style="`background:url('http://localhost:3000/${currentItem.img}') no-repeat center center`"> </div>
        <div class="div2"> 
            <h2>Description</h2>
            <p>{{ currentItem.description }}</p>
        </div>
        <div class="div3">
            <h2>{{ currentItem.item }}</h2>
            <h2>Price:${{ currentItem.price }}</h2>
            <input type="number" min="0" v-model="numberFood" />
            <button>Add to Cart:{{ totalPrice }}</button>
        </div>
        <div class="div4">
            <h2>Options</h2>
            <p v-for="option in currentItem.options" :key="option">
                <input type="checkbox" :name="option" :id="option" :value="option" v-model="checkedOptions">
                <label :for="option">{{ option }}</label>
            </p>
        </div>
        <div class="div5">
            <h2>Add Ons</h2>
            <p v-for="addOn in currentItem.addOns" :key="addOn">
                <input type="checkbox" :value="addOn" :name="addOn" :id="addOn" v-model="checkedAddOns">
                <label :for="addOn">{{ addOn }}</label>
            </p>
        </div>
    </div>
    <pre>{{ $data }}</pre>
    </div>
</template>

<script>

import {mapState} from "vuex";

export default {
    data(){
        return{
            id:this.$route.params.id,
            numberFood:0,
            checkedAddOns:[],
            checkedOptions:[],
        }
    },
    computed:{
        ...mapState([
            'fooddata'
        ]),
        currentItem(){
            let result
            for (let i=0;i < this.fooddata.length;i++){
                for (let j=0;j < this.fooddata[i].menu.length;j++){
                    if (this.fooddata[i].menu[j].id === this.id){
                        result = this.fooddata[i].menu[j];
                        break;
                    }
                }
            }
            return result
        },
        totalPrice(){
            return this.currentItem.price*this.numberFood
        }
    }
}
</script>

<style lang="scss" scoped>
.parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { 
    grid-area: 2 / 1 / 6 / 2;
    width:30vw;
    margin-left:90px;
    height: 60vh;
     }
.div2 { 
    grid-area: 6 / 1 / 8 / 2;
    margin-left:90px;
    margin-top:10px;
 }
.div3 { grid-area: 2 / 2 / 4 / 3; }
.div4 { grid-area: 4 / 2 / 6 / 3; }
.div5 { 
    grid-area: 6 / 2 / 8 / 3;
     }
</style>