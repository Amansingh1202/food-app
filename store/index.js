import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata : [],
  cart:[]
})

export const getters = {
    getNumberFoodItems: state => {
      var totalfood = 0
      if (state.cart.length == 0){
        return totalfood
      }
      for(var i=0;i<state.cart.length;i++){
        console.log(state.cart[i])
        totalfood += parseInt(state.cart[i].count)
      }
      console.log(totalfood)
      return totalfood
    }
}

export const mutations = {
    updateFoodData: (state, data) => {
        state.fooddata = data
    },
    addToCart:(state,formOutput) => {
      formOutput.id = uuidv4()
      state.cart.push(formOutput)
    }
}

export const actions = {
    async getFoodData({ state,commit }) {
      if (state.fooddata.length) return
      try{
        await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants',{
          headers:{
            'Content-Type':"application/json",
            'x-api-key':process.env.AWS_API_KEY,
          }
        }).then(
          res => res.json()
          .then(data => {
            commit('updateFoodData',data)
          })
        )
      }
      catch(err){
        console.warn(err)
      }
        }
}