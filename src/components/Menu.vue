<script setup>
    import { ref ,onMounted, computed} from 'vue';
   import { itemList } from './store';

   const ActiveMenu = ref(false)
   const loading = ref(false) ;
   const IsSubitem = ref(false)
   const IsSearch = ref(false)
   // getRouteItem
   const routeitem = ref([])
   const NamerouteItem = ref([])
    const ImgrouteItem = ref([])
   
    const NameSearchItem = ref('')
    const SearchDatas = ref("")
    const NameItem  = itemList.value['imgItem'] 
   
//SearchCountry
const SearchItem = computed(() => {
    return NameItem.filter(itemCoun => itemCoun.h1.includes(SearchDatas.value))

});
  console.log(SearchItem)

    //  onMounted(()=>{
    //     getRouteItem()

    //  })
    const getIteName=(i)=>{
        NameSearchItem.value = NameItem[i]['h1']
        // console.log(NameCountry[i]['name']
    }
    const PopupSearch = ()=>{
        IsSearch.value = true
    }
   const subItem   = ()=>{
    IsSubitem.value  = true
   }
   const selectItem = (itemName) => {
      SearchDatas.value = itemName; // Set the input value to the selected item's name
      IsSearch.value = false; // Close the search popup

   }
</script>

<template>
    <div class="container-fluid bar1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 menu-box">
                    <div class="logo">
                      
                        AliExpress
                    </div>
                   
                    <div class="search-bar">
                        <input type="text" placeholder="I'm looking for..."    id="search" v-model="SearchDatas"  @click="PopupSearch()"> 
                
                        <ul>
                            <li @click="getIteName(i)">
                                <i class="fa-solid fa-qrcode"></i>
                                DownLoad the  <br> AliExpress app 
                            </li>
                            
                            <li>
                                <img src="/src/assets/img/cam.png" alt="" >
                                En / <br>kh 
                                <i class="fa-solid fa-chevron-down" style="font-size: 12px; position: absolute; top: 46px; margin-left: 5px;"></i>
                            </li>
                            
                            <li>
                                <i class="fa-solid fa-user" style="font-size: 25px; position: absolute; top: 30px;  right: 26.5%;"></i>
                                Welcome  <br>
                                        Sign / Register
                                <i class="fa-solid fa-chevron-down"></i>
                            </li>
                            <li>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>0</span>
                                Add to cart
                            </li>
                     </ul>
                    </div>

                </div>
            </div>
            <div class="popupSearch" v-if="IsSearch"  @click.self="IsSearch=false">
                            <div class="frmSearch" >
                                <ul> 
                                    <li v-for="(item,i)  in SearchItem.slice(0,10) " :key="i" @click="selectItem(item.h1)">
                                        
                                        <RouterLink  :class="{'menuActive' : ActiveMenu == i }" :to="{name:'subitem', params:{sid:item.h1}}" @click="IsSearch=false">
                                            <img :src="item.img" alt="">
                                            <span>{{ item.h1 }}</span>
                                        </RouterLink>
                                    </li>
                                    
                                </ul>
                            </div>
             </div>

            <div class="row">
                <div class="col-xl-3  category">
                    <div class="box" @mouseover="subItem()"   >
                        <span>
                                <i class="fa-solid fa-bars"></i>              
                                 All Categories
                                <i class="fa-solid fa-chevron-down"></i>   
                        </span>
                    </div>
                  
            </div>
            <div class="popup" v-show="loading">
                    <div class="loading">

                    </div>
            </div>

             <div class="col-xl-9 nav-bar" >
                        <ul>

                            <li v-for="(item ,i) in itemList.items"  :key="i" > 
                                <!-- <a href="#">
                                    {{item.name }}
                                </a> -->
                                <RouterLink  :class="{'menuActive' : ActiveMenu == i }" :to="{name:'item', params:{cid:item.name}}">
                                    {{item.name }}
                                </RouterLink>
                            </li>

                            <li>
                               <a href="#">
                                    More
                                    <i class="fa-solid fa-chevron-down"></i>  
                               </a>                               
                            </li>
                        </ul>   
                </div>
            </div>
            <div class="popupSubmenu" v-if="IsSubitem">
                <div class="frm " @mouseleave=" IsSubitem = false">
                    <span>
                                <i class="fa-solid fa-bars"  ></i>              
                                 All Categories
                                <i class="fa-solid fa-chevron-up" ></i>   
                     </span>
                    <ul> 
                        <li v-for="(item,i)  in itemList.SubItems" :key="i" @click="getRouteItem(i)">
                            <RouterLink  :class="{'menuActive' : ActiveMenu == i }" :to="{name:'subitem', params:{sid:item.name}}">
                                <img :src="item.img" alt="">
                                <span>{{ item.name }}</span>
                            </RouterLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>