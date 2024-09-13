<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue';


const startValidation = ref(false) ;
const email = ref('');
const password = ref('');
const comfirmedpass = ref('');
// register 
function Register(){
  startValidation.value = true ;
  //  Home
}
// Email
const IsvalidEmail = computed(()=>{
                //  ?= shorthand if     // if startValidation.value true 
         //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)                else null 
    return startValidation.value ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) : null ;
})
// Password
const IsvalidPassWord = computed(()=>{
    return startValidation.value ?  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) : null ;
})
//Comfirmed password
const IsvalidComfirmedPassord = computed(()=>{     
        return startValidation.value ? password.value == comfirmedpass.value : null ;
   })
</script>
<template>
  
  <form style="text-align: center; width: 50%;" action="home">
    <div class="form-group" >
      <label for="email">Email address:</label>
      <input  :class="{valid : IsvalidEmail == true , invalid : IsvalidEmail == false}"  type="email" class="form-control" v-model="email" >
    </div>
    <!-- {{IsvalidPassWord }} -->
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input :class="{valid : IsvalidPassWord == true , invalid : IsvalidPassWord== false}"  type="password" class="form-control" 
      v-model="password" >
    </div>
    <div class="form-group">
      <label for="pwd">comfirmpassword:</label>
      <input :class="{valid : IsvalidComfirmedPassord == true , invalid : IsvalidComfirmedPassord== false}" 
       v-model="comfirmedpass" type="pass"  class="form-control">
    </div>
    <!-- {{ IsvalidComfirmedPassord }} -->
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click=" Register()">Register</button>
</form>
  

</template>
<style>
.valid{
  background: url('agree.png') no-repeat right;
  background-size: auto 100%;
}
.invalid{
  background: url('disagree.webp') no-repeat right;
  background-size: auto 100%;
}
.form-group{
  text-align: center;
}

</style>