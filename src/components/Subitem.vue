<script setup>
    import { useRoute } from 'vue-router';
    import {ref , onMounted , watchEffect , watch} from 'vue'
    import { itemList } from './store';
    const route = useRoute()
  

   
   //  getRouteItem
   const routeitem = ref([]);
   const NamerouteItem = ref([])
    const ImgrouteItem = ref([])
    routeitem.value = itemList.value['imgItem']
    console.log(routeitem)
//    const subroutedata  = routeitem.value['subdataitems']
//    const getRouteItem =(i)=>{
       
//        NamerouteItem.value = subroutedata.value[i]['name']
//        ImgrouteItem.value = subroutedata.value[i]['img']
//    }   
    // onMounted(()=>{
    //    getRouteItem()
    // })
    
</script>
<template>
    <div  class="container-fluid">
        <div class="row">
            <div class="col-xl-2 col-lg-2 left-menu">
                <div class="Sell-Detail">
                    <span style="color: black; font-weight: bold;  font-size: 16px;"> 
                        Delivery options & <br> services
                     
                     </span>
                     <i class="fa-solid fa-angle-up"></i>
                     <i class="fa-regular fa-square"></i>
                     <span id="free-ship">Free shipping</span>
                     <div style=" border-bottom: 1px solid silver; width: 88%; position: absolute; left: 20px; top: 30%;">

                    </div>
                    <div class="Discount" style="position: absolute; top: 26%;">
                        <span style="color: black; font-weight: bold;  font-size: 16px; "> 
                          Price
                         </span>
                        <!-- <i class="fa-solid fa-angle-up"></i> -->
                        <div class="Kh-Price" style="border: 3px;">
                            KHR
                        </div>
                        <div class="Kh-Price-2">
                            KHR
                        </div>
                        <span style="margin-top: 26px; padding: 4px 7px; background-color: black; color: white;
                        border-radius: 6px; margin-left: 170px">
                        Ok</span>
                        <div style=" border-bottom: 1px solid silver; width: 88%; position: absolute; left: 20px; top: 130%;">
                         </div>
                        <i class="fa-solid fa-angle-up"></i>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 slide-sub" v-for="(item,i) in routeitem" :key="i">
                <div class="img-box" > 
                    <img :src="item.img" alt="">
                    <div class="add-cart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                   
                </div>
                <div class="txt-box">
                    <span>{{ item.name }}</span>
                    <span style="font-size: 10px; margin-top: 12px; font-weight: bold;">KHR</span>
                     <span style="font-weight: bold; font-size: 20px;">{{ item.Prce}}</span>   
                     <span style="font-size: 12px;  margin-top: 10px; font-weight: bold; float: left">.94</span> 
                     <h5 style="font-size: 13px; float: left; color:crimson; margin-top: 10px; padding-right: 45px">Extra 5% off with coins</h5>
                </div>
            </div>  
        </div>
     
    </div>
    <h1>{{  route.params.cid}}</h1>
</template>