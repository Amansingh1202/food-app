<template>
<main class="container restaurant">
    <div class="restaurantheading">
        <h1>Restaurants</h1>
        <app-select @change="selectedRestaurant = $event" ></app-select>
    </div>
    <app-restaurant-info :datasource="filteredRestauarnt"></app-restaurant-info>
</main>
</template>

<script>
import AppRestaurantInfo from '../components/AppRestaurantInfo.vue'
import AppSelect from '../components/AppSelect.vue'
import { mapState } from 'vuex';


export default {
    components: { 
        AppRestaurantInfo, 
        AppSelect 
        },
    data(){
        return{
            selectedRestaurant:''
        }
    },
    computed:{
        filteredRestauarnt(){
            if (this.selectedRestaurant){
                return this.fooddata.filter(el =>{
                    let name = el.name.toLowerCase()
                    return name.includes(this.selectedRestaurant)
                })
            }
            return this.fooddata
        },
        ...mapState([
            'fooddata',
        ])
    }
    }
</script>
