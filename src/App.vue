<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import MenuBar from './components/Menu.vue';
import Register from './components/Register.vue';


</script>
<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <form style="text-align: center; width: 50%;" action="home">
    <div class="form-group" >
      <label for="email">Email address:</label>
      <input  :class="{valid : IsvalidEmail == true , invalid : IsvalidEmail == false}"  type="email" class="form-control" v-model="email" >
    </div>
    {{IsvalidPassWord }}
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
    {{ IsvalidComfirmedPassord }}
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click=" Register()">Register</button>
</form> -->
  



  <div>
     <MenuBar/>
     <!-- <Home/> -->
      <!-- <Index/> -->
       <Register/>
    <RouterView />
  </div>
 
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