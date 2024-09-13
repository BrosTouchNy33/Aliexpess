<script setup>
 import { ref , onMounted, reactive, computed} from 'vue';
 import { itemList } from './store';
    const Ispopup =  ref(false)
    const  IsPopup2 = ref(false)
    const slideInd = ref(0);
    const numslide = itemList.value['items'].length
    const IsShowCountry = ref(false)
    const Register = ( ) =>{

      Ispopup.value =true
  }
 
   const CloseRegister = () =>{
        Ispopup.value = false
   }
    // nextslide
    const nextSlide = () =>{
     
     itemList.value['items'][slideInd.value].isSlide  = false ;
     slideInd.value ++;
     if(slideInd.value >= numslide){
         slideInd.value = 0
     }
     itemList.value['items'][slideInd.value].isSlide  = true ;
 }
 //BackSlide
 const BackSlide = () =>{
     // const numslide = itemList.value['items'].length // 3
     itemList.value['items'][slideInd.value].isSlide  = false ; //0->2->1

     slideInd.value --; //-1 -> -2 ->1->0
     if(slideInd.value < 0){
         slideInd.value = numslide -1  ; // slideInd = 3-1 = 2,  
     }
     itemList.value['items'][slideInd.value].isSlide  = true ; //2->1->0
 }
 var mySlide = setInterval(nextSlide , 2000);
    const clearAutoSlide = () =>{
        clearInterval(mySlide)
    }
    const AutoSlide = () =>{
        mySlide = setInterval(nextSlide ,2000)
    }
    // ShowCountry
    const ShowCountry =()=>{
        IsShowCountry.value =  true
    }
    // getcountry
    const Country  = ref()
    const SearchCountry = ref("")
    const NameCountry  = itemList.value['Country'] 
    const getcountry =(i)=>{
        Country.value = NameCountry[i]['name']
        // console.log(NameCountry[i]['name']
    }
//SearchCountry
const filterSearch= computed(() => {
    return NameCountry.filter(itemCoun => itemCoun.name.includes(SearchCountry.value))

    // if (state.search) {
    //     //console.log('check2a')
    //     return state.array.filter((item) => {
    //         return state.search
    //             .toLowerCase()
    //             .split(" ")
    //             .every((v) => item.title.toLowerCase().includes(v));
    //     });
    // } else {
    //     // console.log("check2b");
    //     return state.array;
    // }
});

</script>
<template>
    <div class="container">
       
       <div  class="row">
           <div class="col-xl-3 col-lg-3 box-item">
             
               <div class="box-sign">
                  <h1 @click="Register">Register</h1>
                   <span @click="Register">Sign in</span>
                  
                   <p class="txt">Or continue with</p>
                   <div class="font-image">
                       <ul>
                           <li>
                                <img src="/src/assets/img/image8-2.webp" alt="">

                           </li>
                           <li>
                               <img src="/src/assets/img/download.png" alt="">
                           </li>
                           <li>
                               <img src="/src/assets/img/2.jpeg" alt="">
                           </li>
                           <li>
                               <img src="/src/assets/img/apple-logo.jpeg" alt="">
                           </li>
                       </ul>
                   </div>
               </div>
              
               <div class="slide-box" @mouseover="clearAutoSlide" @mouseleave="AutoSlide">
                   <div class="title">
                       <h1>Welcome  Deal</h1>
                       <h2>Your  exlcusive price</h2>
                   </div>
                  <div class="slide" v-for="(item,i) in itemList.items" v-show="item.isSlide">
                       <img :src="item.img" alt="">
                       <div class="percent-Price">
                               <span>{{item.perPrice}}</span>
                       </div>
                  </div>
                  <div class="btn-Slide btn-Back" @click="BackSlide()">
                       <i class="fa-solid fa-chevron-left"></i>
                   </div>  
                   <div class="btn-Slide btn-Next" @click="nextSlide()">
                       <i class="fa-solid fa-chevron-right"></i>
                   </div> 
                   <div class="total-price">
                       <span class="price">KHR435,569.90</span>
                       <span class="price-des">KHR400,678.86</span>
                   </div>
               </div>
           </div>
           <div class="col-xl-9 col-lg-6 box-item">
               <div class="row">
                   <div class=" col-xl-5 slide-box2">
                       <h1>Super</h1>
                       <h2>Deals</h2>
                       <div class="slide2">
                           <div class="img-box">
                               <img src="/src/assets/img/slide2.webp" alt="">
                               <span>KHR  75,611:</span>
                               <span class="price-des">-50%</span>
                           </div>
                           <div class="img-box2">
                               <img src="/src/assets/img/slide2-1.webp" alt="">
                               <span>KHR  75,611:</span>
                               <span class="price-des">-50%</span>
                           </div>
                           <div class="img-box3">
                               <img src="/src/assets/img/slide2-2.webp" alt="">
                               <span>KHR  75,611:</span>
                               <span class="price-des">-50%</span>
                           </div>
                       </div>
                   </div>
                   <div class="col-xl-7 col-lg-6 box-item">
                       <div class="slide-box3">
                               <div class="title">
                                   <h1>New</h1>
                                   <h2>Launched in the last 30 days</h2>
                               </div>
                               <div class="slide3">    
                                       <img src="/src/assets/img/img1.webp" alt="">
                                       <span style="font-size: 10px;">KHR</span>
                                       <span style="font-weight: bold; font-size: 20px;">  75,611</span>   
                                       <span style="font-size: 10px;">.94</span> 
                               </div>
                               <div class="slide3-1">    
                                   <img src="/src/assets/img/img2.webp" alt="">
                                       
                                   <span style="font-size: 15px;">KHR</span>
                                       <span  style="font-weight: bold; font-size: 20px;">  75,611</span>   
                                       <span style="font-size: 10px;">.94</span>  
                               </div>
                               <div class="slide3-2">    
                                   <img src="/src/assets/img/img3.webp" alt="">
                                   <span style="font-size: 15px;">KHR</span>
                                       <span  style="font-weight: bold; font-size: 20px;">  75,611</span>   
                                       <span style="font-size: 10px;">.94</span>   
                               </div>
                       </div>
                       <div class="slide-box4">
                           <div class="title">
                                   <h1>Plus</h1>
                                   <h2>Featured brands with savings</h2>
                                  
                            </div>
                          <div class="slide4">
                                <img src="/src/assets/img/slide4-1.webp" alt="">
                                <span style="font-size: 10px;">KHR</span>
                               <span>65,611</span>  
                               <span style="font-size: 10px;">.94</span> 
                          </div>
                          <div class="slide4-1">
                               <img src="/src/assets/img/slide4-2.webp" alt="">
                               <span style="font-size: 10px;">KHR</span>
                               <span>  60,611</span>  
                               <span style="font-size:10px ;">.56</span> 
                          </div>
                       </div>
                      
               </div>
               </div>
                  
            </div>
              
     </div>
       <div class="popdetail " v-if="Ispopup"  @click.self="Ispopup=false" >
            <div class="frm" >
                <h1 style="text-align: center;" >Register/Sign in</h1>
                <p style="position: absolute;  left: 10%;font-size: 13px; margin-top:12px ;">Location: </p>
                <span style="font-size: 13px;">
                    {{Country }}
                    <i class="fa-solid fa-chevron-down"  @click="ShowCountry()"></i>
                </span>
                <div class="email">
                    <input type="text" name="" id=" " placeholder="Email">
                    
                </div>
                <h3 style="text-decoration: underline;"> Trouble Signing in?</h3>
                <h4 style="position: absolute; top: 40%; left: 40%;  font-size: 15px;  ">
                   
                    Or Continue with
                </h4>
                <div class="continue" >
                    <span style="margin-right: 10px;">Continue</span>
                </div>
               <div class="App"  style="cursor: pointer;">
                    <span>
                        <img src="/src/assets/img/image8-2.webp" alt="" >
                       
                        Google
                    </span>
                    <span style="position: absolute;  top: 54%;  margin-top: 12px;">
                        <img src="/src/assets/img/download.png" alt="">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> faceBook</a>
                       
                    </span>
                    <span style="position: absolute;  top: 63.5%;   margin-top: 12px;">
                        <img src="/src/assets/img/2.jpeg" alt="">
                            twitter
                    </span>
                    <span style="position: absolute;  top: 73%;   margin-top: 12px;">
                        <img src="/src/assets/img/apple-logo.jpeg" alt="">
                            apple
                    </span>
               </div>
               <div class="des">
                    <p style="font-size: 12px;">By continuing, you confirm that you are an adult. By creating an <br> account, you agree to the AliExpress.com Free Membership <br>Agreement and Privacy Policy</p>
                    <p style="font-size: 12px; position: absolute; bottom: -30%; margin-top: 50px; text-decoration: underline; cursor: pointer;" @click="IsPopup2=true">Why choose a location?</p>

               </div>
                <div class="btn-Close" @click="CloseRegister"> 
                        <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
        <div class="popup2" v-show="IsPopup2" @click="IsPopup2=false">
            <div class="form2">
                <h1>Why choose a location?</h1>
                <p style="font-size: 15px; position: absolute; top: 15%;left: 5%;">This will tell us where you're shopping from. It also means we can: 1. Provide more suitable services based on your location 2. Better protect your data security according to the laws and regulations of your country. Make <br> sure you choose the right country.<br> Once you have chosen your country, <br> you won't 
                    be able to change it very  easily
                </p>
                <div class="btn-Close" @click="IsPopup2=false"> 
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <span style="cursor: pointer;"  @click="IsPopup2=false">Ok</span>
            </div>
           
       </div>
       <div class="popup3" v-if="IsShowCountry" @click.self="IsShowCountry=false">
            <div class="form3" @click.self="IsShowCountry=false">
                <input type="text"   placeholder="search"  v-model="SearchCountry"> 
                <ul>
                    <li v-for="item  in  filterSearch" :key="id"  @click="getcountry(item.id) , IsShowCountry=false ">
                        
                        <img :src="item.img" alt="" :item="item">
                        <span  :item="item.id">{{ item.name }} </span>
                        <!-- <p>{{item.id }}</p> -->
                        <!-- <h1>{{ SearchCountry.name }}</h1> -->
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>