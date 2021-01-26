<template>
   <div id="container">
    <div id="contacts">
      <div id="contacts-contact">
        <p>Email : {{ mail }}</p>
        <p>Address : {{ address }}</p>
      </div>
      <div id="contacts-social">
        <div><a href="https://github.com/Amansingh1202"><img src="../assets/github.png" alt="github"></a></div>
        <div><a href="https://www.linkedin.com/in/amankumar-singh-79ab531a6/"><img src="../assets/linkedln.png" alt="linkedln"></a></div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            mail : 'aks001235@gmail.com',
            address : 'Dombivli,Maharashtra',
        }
    }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

img{
    height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}

body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
  padding-top:20px;
  margin-top:20px;
  padding-bottom: 20px;
  width:100vw;
  color:white;
  background-color:black;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts-contact{
  text-align:right;
}
#contacts-social{
  width:10%;
  display : flex;
  justify-content : space-between;
}

</style>