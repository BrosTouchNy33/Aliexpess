<script setup>
    import { readonly } from 'vue';
    import { itemList } from './store';

    import { ref ,onMounted} from 'vue';
//     import vuePlugin from '@vitejs/plugin-vue';
//     import { VueQrcodeReader } from "vue-qrcode-reader"; 
//    vuePlugin.use(VueQrcodeReader);
    const IsPreview  = ref(false)

    const previewIndex = ref(null);


    const PoupDetail =  ref(false)
    const PopSimilarItem = ref(false)
    //itemdetail
    const ImgDetail  = ref([])
    const SubImgdetail = ref([])
    const Pricedetail = ref([])
    const DollarPrice = ref()
    const NameitemDetail = ref([])
    const popCart = ref(false)
    const OldDollarPrice = ref()
    const exchangeRate = ref(4100); // Example exchange rate: 1 Dollar = 4100 Riel

    // const Itemind =  itemList.value.imgItem
    // console.log(itemList.value.imgItem)
   
    const  getPreview =(i) =>{ 

     const ShowPreview = IsPreview.value=true
     ShowPreview = itemList.value[i]['imgItem']
     previewIndex.value = i;
    }
   // addcart
   const amountCart = ref(1)
   const IsremoveCart = ref(false)
   
   const imgItemdetail = itemList.value.imgItem
   const PriceSubitem =  itemList.value.imgItem
   const NameSubitem = itemList.value.imgItem

//    onMounted(() => {
//     console.log(itemList.value.imgItem.length );
//     })
   const getDetail= (i)=>{
        PoupDetail.value =   true

        // console.log(itemList.imgItem.value[i]['img'])
       Pricedetail.value = PriceSubitem[i]['price']
       DollarPrice.value = PriceSubitem[i]['dollar-price']
       OldDollarPrice.value = PriceSubitem[i]['dollar-price']
       console.log( OldDollarPrice.value )
       NameitemDetail.value = NameSubitem[i]['h1'] 
        
        ImgDetail.value = imgItemdetail[i]['img']
        SubImgdetail.value = imgItemdetail[i]['imglist']
        // console.log(imgItemdetail[i]['imglist'])
   }
   const setDetailImg = (img)=>{
      ImgDetail.value = img
    }
    // getSimilarItem
   
    const getSimilarItem=() =>{
       PopSimilarItem.value= true
    }

    // showPopcart
    const showPopcart =()=>{
        popCart.value = true ;
        // alert( 'popup');
    }
  const getAmountCart = ()=>{
    
    amountCart.value++;
    return
  }

  const removeAmountcart = ()=>{
   
    if(  amountCart.value == 1){
        DollarPrice.value==OldDollarPrice.value
        IsremoveCart.value = true
    
        // DollarPrice;
        amountCart.value = 0
        return ;
    }
    else{
        amountCart.value -- ;
    }
  }
  

  // TotalcartMoney

//   console.log(PriceSubitem['dollar-price'])  
    DollarPrice.value = OldDollarPrice.value
  function getTotalMoney(i){
    
     DollarPrice.value = parseFloat(  OldDollarPrice.value )+ parseFloat(   DollarPrice.value ) ;
     console.log( OldDollarPrice.value )
    console.log( DollarPrice.value)
  }
  function removeTotalMoney(){
    if(DollarPrice.value==OldDollarPrice.value)return;
    DollarPrice.value = parseFloat(DollarPrice.value )- parseFloat(OldDollarPrice.value) ;
    console.log( OldDollarPrice.value )
    console.log( DollarPrice.value)
  }
//   const ItemCart = $(".item-cart");
  function removeProduct(){
        // ItemCart.remove()
        DollarPrice.value = 0;
        Pricedetail.value = ""
        NameitemDetail.value= " ";
        ImgDetail.value = ' '

  }
 // Exchangerate currency
 const dollarToRiel = (dollarAmount) => {
      return (dollarAmount * exchangeRate.value).toLocaleString(); // Convert to Riel and format
    };

   
   
</script>

<template>
    <div class="container">
        <div class="row">
            <div  class="col-xl-12 col-lg-12 itemList-container" >
                <h1 style="font-size: 25px; color: black; margin-top: 15px; font-weight: bold;">More to love</h1>
            </div>
            
                <div class="col-xl-2 itemList-box" v-for="(item ,  i) in  itemList.imgItem" :key="i"  @mouseover="getPreview(i)" @mouseleave="IsPreview=false">
                    
                    <div class="img-box" >  
                        <RouterLink   :to="{name:'detailitem', params:{dit:item.h1}}">    
                        <img :src="item.img" alt="">
                        </RouterLink> 
                        <div class="card" @click="getDetail(i)">
                            <i class="fa-solid fa-cart-plus"></i>
                        </div>
                    </div>
                  
                    <div class="txt-box">
                        <h1 style="font-size: 14px;">{{ item.h1}}</h1>
                        <div class="star">
                            <img src="/src/assets/img/star1.png" alt="">
                        </div>
                        <div class="star">
                            <img src="/src/assets/img/star1.png" alt="">
                        </div>
                        <div class="star">
                            <img src="/src/assets/img/star1.png" alt="">
                        </div>
                        <div class="star">
                            <img src="/src/assets/img/star1.png" alt="">
                        </div>
                        <div class="star">
                            <img src="/src/assets/img/star1.png" alt="">
                        </div>
                        <span style="font-size: 15px; color: silver; padding-left: 10px">28 sold</span>
                    <p style="font-size: 12px;  position: absolute; bottom: 37%; font-weight: bold; left: 2%;">KHR</p>
                        <span class="price" >435,569</span>
                        <span style="font-size: 10px; float: left ; margin-top: 10px;  font-weight: bold;">.94</span> 
                    </div>
                    <div class="Preview" v-show="IsPreview">
                        <div class="see-pre" @click="getDetail(i)">
                            <span>See preview</span>
                        </div  >
                        <div class="similar" @click="getSimilarItem(i)">
                            <span>Similar items</span>
                        </div>
                    </div>
                   
                </div>
           
            <div class="popdetail-item" v-if="PoupDetail" @click.self="PoupDetail=false">
                  <div class="frm" >
                        <div class="img-box" >
                            <img :src="ImgDetail" alt="">
                        </div>
                        <div class="sub-img-box">   
                            <ul >                                                           
                                <li  @click="setDetailImg(imgs.img) " :class="{'active':ImgDetail ==imgs.img}"  v-for="(imgs , i)  in SubImgdetail" :key="i">
                                    <img :src="imgs.img" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="item-detail">
                                <span style="font-size: 30px; color: red; ">KHR</span>
                                <span class="price">43,569</span>
                    
                                <span style="font-size: 30px; color: red;">.90</span>
                                <span class="price-des">KHR40,678.86</span>
                                <span>(≈ {{DollarPrice  }}$)</span>
                   
                                <span style="color:red;  font-size: 16px; float: left; position: absolute;  left: 22%;top: 13.5%;">-50%</span>
                                <div class="txt">
                                    <p>Underwater Waterproof Sports Dv Multifunctional Outdoor Riding Locomotive Sports Camera Sports Camera Diving Camera</p>
                                </div>
                                <div class="star">
                                    <img src="/src/assets/img/star1.png" alt="">
                                </div>
                                <div class="star">
                                    <img src="/src/assets/img/star1.png" alt="">
                                </div>
                                <div class="star">
                                    <img src="/src/assets/img/star1.png" alt="">
                                </div>
                                <div class="star">
                                    <img src="/src/assets/img/star1.png" alt="">
                                </div>
                                <div class="star">
                                    <img src="/src/assets/img/star1.png" alt="">
                                </div>
                                <h3 style="float: left;  font-size: 15px; padding-left: 10px; color: black;">5.0</h3>
                                <h3 style="font-size: 15px; float: left; padding-left: 5px;">800 Reviews |</h3>
                                <h3 style="font-size: 15px; float: left; padding-left: 5px;">500 + sold out</h3>
                                <div class="line">
                                    
                                </div>
                                <h1  style="font-size: 15px; position: absolute;top: 52%; font-weight: bold;">Color:</h1>
                                <h1 style="font-size: 15px; position: absolute;top: 52%; left:8%; font-weight: bold;">Black</h1>
                                <div class="sub-image">
                                    <ul>
                                        <li>
                                            <img src="/src/assets/img/item11.webp" alt="">
                                        </li>
                                        <li>
                                            <img src="/src/assets/img/item11.webp" alt="">
                                        </li>
                                        <li>
                                            <img src="/src/assets/img/item11.webp" alt="">
                                        </li>
                                        <li>
                                            <img src="/src/assets/img/item11.webp" alt="">
                                        </li>
                                        <li>
                                            <img src="/src/assets/img/item11.webp" alt="">
                                        </li>
                                 </ul>
                                </div>
                                <div class="line2">
                                </div>
                        </div>
                        <div class="delivery-box">
                            <h2 style="font-size: 13px; color: black;  margin-top: 20px;  padding-left: 20px;  font-weight: bold;">Delivery</h2>
                            <h1 style="font-size: 15px; color: black;   padding-left: 20px; font-weight: bold;">Free  shipping</h1>
                            <p style="font-size: 15px; padding-left: 20px;">Estimated delivery: 20-40 days </p>
                            <div style=" border-bottom: 1px solid silver; width: 88%; position: absolute; left: 20px;">

                            </div>
                            <h1 style="font-size: 15px; color: black;   padding-left: 20px; font-weight: bold;   margin-top: 30px;">Service</h1>
                            <h3 style="font-size: 15px; padding-left: 20px; color: rgba(0, 0, 0, 0.704);">Buyer protection</h3>
                            <div style=" border-bottom: 1px solid silver; width: 88%; position: absolute; left: 20px; margin-top: 10px;">

                            </div>
                            <h1 style="font-size: 15px; color: black;   padding-left: 20px; font-weight: bold;   margin-top: 30px;">Quantity</h1>
                            <div class="add-Cart">
                                <i class="fa-solid fa-minus" @click="removeAmountcart() "></i>
                                <span>{{amountCart }}</span>
                                <i class="fa-solid fa-plus" @click="getAmountCart()"></i> 
                            </div>
                            <p style="margin-top: 10px;padding-left: 20px;">3 pieces at most per customer</p>
                            <span style="padding: 11px 100px; background-color: red; color: white; border-radius: 20px; position: absolute; left: 5% ; cursor: pointer;opacity: 0.8; bottom: 19%;"
                            @click=" showPopcart() ; PoupDetail=false">
                                Add to Cart
                            </span>
                            <span style="padding: 8px 20px; background-color: silver; position: absolute;bottom: 3%; left: 5%;border-radius: 20px; font-weight: bold; cursor: pointer;">
                                View details
                            </span>
                            <span style="padding: 8px 40px; background-color: silver; position: absolute;bottom: 3%; left: 50%;border-radius: 20px; font-weight: bold; cursor: pointer;">
                                <i class="fa-regular fa-heart"></i>
                                2679
                            </span>
                             
                        </div>
                        <div class="btn-Close" @click="PoupDetail= false"> 
                             <i class="fa-solid fa-xmark"></i>
                         </div> 
                  </div>
            </div>
            <div class="popdetail-similar-item" v-if="PopSimilarItem">
                <div class="frm2">
                    <h1 style="font-size: 23px; color: black ; float: left; margin-left: 15px; margin-top: 15px; font-weight: bold;">Same items</h1>
                    <h1 style="font-size: 23px; color: black ; float: left; margin-left: 25px; margin-top: 15px; font-weight: bold;">Similar items</h1>
                    <div style=" border-bottom: outset 4px; width: 9%; position: absolute; left: 30px; margin-top: 45px;">
                                    
                    </div>
                    <div class="filter">
                        <span>
                            <i class="fa-solid fa-check"></i>
                            Best matches
                        </span>
                        <span>
                            <i class="fa-solid fa-check"></i>
                            Popular</span>
                        <span>
                            <i class="fa-solid fa-check"></i>
                            Price</span>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 item-box">
                              1
                            </div>
                            <div class="col-xl-3 item-box">
                              1
                            </div>
                            <div class="col-xl-3 item-box">
                               1
                            </div>
                            <div class="col-xl-3 item-box">
                               1
                            </div>
                            <!-- <div class="col-xl-2 item-box">
                               1
                            </div> -->
                        </div>
                    </div>
                    <div class="btn-Close" @click="PopSimilarItem=false"> 
                             <i class="fa-solid fa-xmark"></i>
                    </div> 
                </div>
            </div>
        </div>
    </div>

    <div class="popup-cart" v-if="popCart" @click.self="showPopcart();  popCart=false; amountCart=1">
        <div class="frm-cart">
            <div class="money">
                <h1 > US ${{DollarPrice}}</h1>
                <span> (≈ {{ dollarToRiel(DollarPrice) }} Riel) </span>
            </div>
            <div classs="checkOut" >
                <span style="background-color: crimson; padding: 3px 50px; color: white; border-radius: 20px; margin-left: 25px;   
                position: absolute; margin-top: 10px;">Check Out</span>
            </div>
            <div classs="Go-to-Cart">
                <span  style="background-color: white; padding: 3px 50px; color: black; border-radius: 20px; margin-left: 25px;   
                position: absolute; margin-top: 50px;  box-shadow: 2px 2px 6px 0px black;">Go To cart</span>
            </div>
            <div class="detail-cart">
                <h3>Shipped by global sellers</h3>
               
            </div>
            <div class="item-cart">
                <span>{{NameitemDetail}}</span>
                <div class="img-box" >
                    <img :src=" ImgDetail" alt="">


                    <div class="select-img">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div>
                <div class="price-box">
                    <span>(≈ {{ dollarToRiel(DollarPrice) }} Riel)</span>
                </div>
                <div class="add-Cart">
                    <i class="fa-solid fa-minus" @click="removeAmountcart();removeTotalMoney()  "></i>
                     <span style="margin-left: 10px;">{{ amountCart }}</span>
                    <i class="fa-solid fa-plus" style="margin-left: 17px; " @click="getAmountCart() ; getTotalMoney()"></i> 
                </div>
                <img src="/AbaQr.jpg" alt="">
            </div>
        </div>
    </div>    

    <div class="popup-cart-remove" v-if="popCart" @click.self="showPopcart();  popCart=false; amountCart=1">
        <div class="frm-cart-remove">
            <div class="money">
                <h1 > US ${{DollarPrice}}</h1>
                <span>(≈ {{Pricedetail  }})</span>
            </div>
            <div classs="checkOut" >
                <span style="background-color: crimson; padding: 3px 50px; color: white; border-radius: 20px; margin-left: 25px;   
                position: absolute; margin-top: 10px;">Check Out</span>
            </div>
            <div classs="Go-to-Cart">
                <span  style="background-color: white; padding: 3px 50px; color: black; border-radius: 20px; margin-left: 25px;   
                position: absolute; margin-top: 50px;  box-shadow: 2px 2px 6px 0px black;">Go To cart</span>
            </div>
            <div class="detail-cart">
                <h3>Shipped by global sellers</h3>
            </div>
            
        </div>


    </div>    

  <div class="popremovecart" v-if="IsremoveCart" > 
    <div class="frm-removecart">
        <h1>Remove product</h1>
      
        <span> Remove item from cart? </span>
        <div class="Remove" @click="removeProduct();  IsremoveCart = false">
            <span >Remove</span>
        </div>
        <div class="Cancel" @click="IsremoveCart=false; amountCart=1 ;  DollarPrice=OldDollarPrice">
            <span>Cancel</span>
        </div>
        <div class="btn-Close" @click="IsremoveCart=false ; amountCart=1"> 
                 <i class="fa-solid fa-xmark"></i>
        </div> 
    </div>
  </div>

</template>
