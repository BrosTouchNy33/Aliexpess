<script setup>
    import { onMounted  , ref , watchEffect} from 'vue';
    import { itemList } from './store';
    const data = ref([])
    const Name  = ref([])
   
    const numslide = itemList.value['SlideCate'].length
    const TotalNumslide  = numslide -3;
    const slideInd = ref(TotalNumslide);
    // console.log(slideInd)
    // nextslide
    const nextSlide = () =>{
        alert("yes")
        // itemList.value['SlideCate'][slideInd.value].isSlide  = false ;
        // // slideInd.value ++;
        // // if(slideInd.value >= numslide){
        // //     slideInd.value = 0
        // // }
        // itemList.value['SlideCate'][slideInd.value].isSlide  = true ;
    }
    //BackSlide
    const BackSlide = () =>{
        alert("back")
        // const numslide = itemList.value['items'].length // 3
        // itemList.value['SlideCate'][slideInd.value].isSlide  = false ; //0->2->1

        // slideInd.value --; //-1 -> -2 ->1->0
        // if(slideInd.value < 0){
        //     slideInd.value = numslide -1  ; // slideInd = 3-1 = 2,  
        // }
        // itemList.value['SlideCate'][slideInd.value].isSlide  = true ; //2->1->0
    }
    const getName = ()  =>{
            data.value  =  itemList.value.SlideCate
            Name.value = data.value.name
            // console.log(Name)
           
    }
    onMounted(()=>{
        getName();
    })
    // watchEffect(()=>{
    //     getName();
    // })

  

</script>

<template>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12 col-lg-12 slide-container">
                    <h1 style="font-size: 25px; color: black; margin-top: 15px;  padding-left: 180px;">Shop by categories</h1>
                    <div class="slide-box">
                       <ul class="slide">
                            <li  v-for="(item ,i) in itemList.SlideCate "  :key="i">
                                <img :src="item.img" alt="">
                                <span >{{item.name }}</span>
                            </li>

                       </ul>
                       <div class="btn-Slide btn-Back" @click="BackSlide()">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>  
                        <div class="btn-Slide btn-Next" @click="nextSlide()">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div> 
                       <ul class="slide1">
                            <li v-for="(item ,i) in itemList.SlideCate1 "  :key="i">
                                <img :src="item.img" alt="">
                                <span>{{item.name}}</span>
                            </li>                            
                       </ul>
                      
                    </div>
                    
                    
                </div>
            </div>
        </div>
</template>