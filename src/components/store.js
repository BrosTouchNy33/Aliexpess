import { ref } from "vue";

export const itemList = ref(
    {
        items:[
            {
                'id':"1",
                "name":"SuperDeals", 
                'img':"/src/assets/img/b1.webp",
                "perPrice" : " -60%",
                'subActive':false,
                'isSlide':true 
            },
            {
                'id':"2",
                "name":"Plus",
                "perPrice" : " -58%",
                'img':"/src/assets/img/b2.webp",
                'subActive':false,
                'isSlide':false
            },
            {
                'id':"3",
                "name":"New",
                "perPrice" : " -52%",
                'img':"/src/assets/img/b3.webp",
                'subActive':false,
                'isSlide':false
             },
             {
                'id':"4",
                "name":"Aliexpress Business",
                "perPrice" : " -58%",
                'img':"/src/assets/img/b4.webp",
                'subActive':false,
                'isSlide':false 
            },
            {
                'id':"5",
                "name":"Home & Garden",
                "perPrice": " -58%",
                'img':"/src/assets/img/b5.webp",
                'subActive':false,
                'isSlide':false ,
            },
            {
                'id':"6",
                "name":"Home Appliances", 
                'img':"/src/assets/img/b6.webp",
                'isSlide':false ,
                "perPrice": " -53%",
            },
            {
                'id':"7",
                "name":"Furniture"  ,
                'img':"/src/assets/img/b6.webp",
                'isSlide':false ,
                "perPrice": " -63%",
            },
            {
                'id':"8",
                "name":"Beauty & Health", 
                'img':"/src/assets/img/b6.webp",
                'isSlide':false ,
                "perPrice": " -66%",
                        
            },
        ],
        imgItem:[
            {
                'img':"/src/assets/img/item1.webp",
                'h1':"Wireless Bluetooth Earphone...",
                'dollar-price':"10.5",
                // 'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item1.webp"},
                    {'img':'/src/assets/img/subitem2.jpg'},
                    {'img':'/src/assets/img/subitem3.webp'},
                    {'img':'/src/assets/img/subitem4.webp'},
                    {'img':'/src/assets/img/subitem5.webp'},
                    {'img':'/src/assets/img/subitem6.jpg'},      
                ]
            },
            {
                'img':"/src/assets/img/item2.webp",
                'h1':"1600DPI Bluetooth 5.1 wireless..",
                'dollar-price':"12.5",
                // 'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/subitem7.jpg'},
                    {'img':'/src/assets/img/subitem8.jpg'},
                    {'img':'/src/assets/img/subitem9.jpg'},
                    {'img':'/src/assets/img/subitem10.jpg'},
                    {'img':'/src/assets/img/subitem11.jpg'},
                    {'img':'/src/assets/img/subitem12.jpg'},      
                ]
            },
            {
                'img':"/src/assets/img/item3.webp",
                'h1':"7A 100W USB Type C Super-Fa...",
                'dollar-price':"30.6",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/sub3item1.jpg'},
                    {'img':'/src/assets/img/sub3item2.jpg'},
                    {'img':'/src/assets/img/sub3item3.png'},
                    {'img':'/src/assets/img/sub3item4.jpg'},
                    {'img':'/src/assets/img/sub3item5.jpg'},
                    {'img':'/src/assets/img/sub3item6.jpg'},      
                ]
            },
            {
                'img':"/src/assets/img/item4.webp",
                'h1':"Figure Anime Naruto Kawaii...",
                'dollar-price':"23",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/sub4item1.jpg'},
                    {'img':'/src/assets/img/sub4item2.jpg'},
                    {'img':'/src/assets/img/sub4item3.jpg'},
                    {'img':'/src/assets/img/sub4item4.jpg'},
                    {'img':'/src/assets/img/sub4item5.jpg'},
                    {'img':'/src/assets/img/sub4item6.jpg'},      
                ]
            },
            {
                'img':"/src/assets/img/item5.webp",
                'h1':"Domineering Man Ring Red ..",
                'dollar-price':"60",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item5.webp"},
                    {'img':'/src/assets/img/sub5item1.jpg'},
                    {'img':'/src/assets/img/sub5item2.jpg'},
                    {'img':'/src/assets/img/sub5item3.jpg'},
                    {'img':'/src/assets/img/sub5item4.jpg'},
                    {'img':'/src/assets/img/sub5item5.jpg'},
                    // {'img':'/src/assets/img/sub5item6.jpg'},      
                ]
            },
            {
                'img':"/src/assets/img/item6.webp",
                'h1':"Tempered Glass+Cover For...",
                'dollar-price':"75",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item6.webp"},
                    {'img':'/src/assets/img/sub6item1.jpg'},
                    {'img':'/src/assets/img/sub6item2.jpg'},
                    {'img':'/src/assets/img/sub6item3.jpg'},
                    {'img':'/src/assets/img/sub6item4.jpg'},
                    {'img':'/src/assets/img/sub6item5.png'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item7.webp",
                'h1':"Anti Dark Circles Bags Instant...",
                'dollar-price':"6.5",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item7.webp"},
                    {'img':'/src/assets/img/sub7item1.jpg'},
                    {'img':'/src/assets/img/sub7item2.jpg'},
                    {'img':'/src/assets/img/sub7item3.jpg'},
                    {'img':'/src/assets/img/sub7item4.jpg'},
                    {'img':'/src/assets/img/sub7item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item8.webp",
                'h1':"Stroller Basket Each For Priam...",
                'price':"435,569",
                'dollar-price':"9.9",
                'imglist':[
                    {'img':"/src/assets/img/item8.webp"},
                    {'img':'/src/assets/img/sub8item1.png'},
                    {'img':'/src/assets/img/sub8item2.jpg'},
                    {'img':'/src/assets/img/sub8item3.jpg'},
                    {'img':'/src/assets/img/sub8item4.jpg'},
                    {'img':'/src/assets/img/sub8item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item9.webp",
                'h1':"Tempered Glass+Cover For ...",
                'price':"435,569",
                'dollar-price':"125",
                'imglist':[
                    {'img':"/src/assets/img/item9.webp"},
                    {'img':'/src/assets/img/sub9item1.jpg'},
                    {'img':'/src/assets/img/sub9item2.jpg'},
                    {'img':'/src/assets/img/sub9item3.jpg'},
                    {'img':'/src/assets/img/sub9item4.jpg'},
                    {'img':'/src/assets/img/sub9item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item10.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"119",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item10.webp"},
                    {'img':'/src/assets/img/sub10item1.webp'},
                    {'img':'/src/assets/img/sub10item2.jpg'},
                    {'img':'/src/assets/img/sub10item3.jpg'},
                    {'img':'/src/assets/img/sub10item4.jpg'},
                    {'img':'/src/assets/img/sub10item5.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item11.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"38.7",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item11.webp"},
                    {'img':'/src/assets/img/sub11item1.jpg'},
                    {'img':'/src/assets/img/sub11item2.webp'},
                    {'img':'/src/assets/img/sub11item3.jpg'},
                    {'img':'/src/assets/img/sub11item4.jpg'},
                    {'img':'/src/assets/img/sub11item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item12.webp",
                'h1':"Stroller Basket Each For Priam...",
                'price':"435,569",
                'dollar-price':"20.6",
                'imglist':[
                    {'img':"/src/assets/img/item12.webp"},
                    {'img':'/src/assets/img/sub12item1.jpg'},
                    {'img':'/src/assets/img/sub12item2.jpg'},
                    {'img':'/src/assets/img/sub12item3.webp'},
                    {'img':'/src/assets/img/sub12item4.webp'},
                    {'img':'/src/assets/img/sub12item5.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item13.webp",
                'h1':"PAGANI DESIGN Men Mechecal...",
                'dollar-price':"22.6",
                'price':"435,569",
                'imglist':[
                    {'img':"/src/assets/img/item13.webp"},
                    {'img':'/src/assets/img/sub13item1.webp'},
                    {'img':'/src/assets/img/sub13item2.webp'},
                    {'img':'/src/assets/img/sub13item3.webp'},
                    {'img':'/src/assets/img/sub13item4.webp'},
                    {'img':'/src/assets/img/sub13item5.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item14.webp",
                'h1':"2024 E88Pro RC Drone 4K...",
                'dollar-price':"10.6",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item14.webp'},
                    {'img':'/src/assets/img/sub14item1.jpg'},
                    {'img':'/src/assets/img/sub14item2.jpeg'},
                    {'img':'/src/assets/img/sub14item3.jpg'},
                    {'img':'/src/assets/img/sub14item4.webp'},
                    {'img':'/src/assets/img/sub14item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item15.webp",
                'h1':"Stroller Basket Each For Priam...",
                'price':"435,569",
                'dollar-price':"40.1",
                'imglist':[
                    {'img':'/src/assets/img/item15.webp'},
                    {'img':'/src/assets/img/sub15item1.jpg'},
                    {'img':'/src/assets/img/sub15item2.jpg'},
                    {'img':'/src/assets/img/sub15item3.png'},
                    {'img':'/src/assets/img/sub15item4.avif'},
                    {'img':'/src/assets/img/sub15item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item16.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"3.3",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item16.webp'},
                    {'img':'/src/assets/img/sub16item1.webp'},
                    {'img':'/src/assets/img/sub16item2.webp'},
                    {'img':'/src/assets/img/sub16item3.webp'},
                    {'img':'/src/assets/img/sub16item4.jpg'},
                    {'img':'/src/assets/img/sub16item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item17.webp",
                'h1':"Silicone Protective Cover...",
                'dollar-price':"6.6",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item17.webp'},
                    {'img':'/src/assets/img/sub17item1.jpg'},
                    {'img':'/src/assets/img/sub17item2.jpg'},
                    {'img':'/src/assets/img/sub17item3.jpg'},
                    {'img':'/src/assets/img/sub17item4.webp'},
                    {'img':'/src/assets/img/sub17item5.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item18.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"25",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item14.webp'},
                    {'img':'/src/assets/img/sub14item1.jpg'},
                    {'img':'/src/assets/img/sub14item2.jpeg'},
                    {'img':'/src/assets/img/sub14item3.jpg'},
                    {'img':'/src/assets/img/sub14item4.webp'},
                    {'img':'/src/assets/img/sub14item5.jpg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item19.webp",
                'h1':"Portable EMS Neck Stretcher...",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item19.webp'},
                    {'img':'/src/assets/img/sub19item1.jpg'},
                    {'img':'/src/assets/img/sub19item2.jpg'},
                    {'img':'/src/assets/img/sub19item3.jpeg'},
                    {'img':'/src/assets/img/sub19item4.jpg'},
                    {'img':'/src/assets/img/sub19item5.png'},
                    
                ]

            },
            {
                'img':"/src/assets/img/sub20item1.jpg",
                'h1':"Stroller Basket Each For Priam...",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/sub20item1.jpg'},
                    {'img':'/src/assets/img/sub20item2.jpg'},
                    {'img':'/src/assets/img/sub20item3.webp'},
                    {'img':'/src/assets/img/sub20item4.webp'},
                    {'img':'/src/assets/img/sub20item5.jpg'},
                    {'img':'/src/assets/img/sub20item6.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item21.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"13.8",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item21.webp'},
                    {'img':'/src/assets/img/sub21item1.jpg'},
                    {'img':'/src/assets/img/sub21item2.webp'},
                    {'img':'/src/assets/img/sub21item3.jpg'},
                    {'img':'/src/assets/img/sub21item4.jpg'},
                    {'img':'/src/assets/img/sub21item5.png'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item22.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"29.3",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item22.webp'},
                    {'img':'/src/assets/img/sub22item1.webp'},
                    {'img':'/src/assets/img/sub22item2.webp'},
                    {'img':'/src/assets/img/sub22item3.webp'},
                    {'img':'/src/assets/img/sub22item4.webp'},
                    {'img':'/src/assets/img/sub22item5.avif'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item23.webp",
                'h1':"Rechargeable Bluetooth 5.1 ...",
                'dollar-price':"3",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item23.webp'},
                    {'img':'/src/assets/img/sub22item1.webp'},
                    {'img':'/src/assets/img/sub22item2.webp'},
                    {'img':'/src/assets/img/sub22item3.webp'},
                    {'img':'/src/assets/img/sub22item4.webp'},
                    {'img':'/src/assets/img/sub22item5.avif'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item24.webp",
                'h1':"Eyelash Serum Fast Growth...",
                'dollar-price':"11",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item23.webp'},
                    {'img':'/src/assets/img/sub22item1.webp'},
                    {'img':'/src/assets/img/sub22item2.webp'},
                    {'img':'/src/assets/img/sub22item3.webp'},
                    {'img':'/src/assets/img/sub22item4.webp'},
                    {'img':'/src/assets/img/sub22item5.avif'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item25.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"3",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item25.webp'},
                    {'img':'/src/assets/img/sub25item1.png'},
                    {'img':'/src/assets/img/sub25item2.jpg'},
                    {'img':'/src/assets/img/sub25item3.png'},
                    {'img':'/src/assets/img/sub25item4.png'},
                    {'img':'/src/assets/img/sub25item5.png'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item26.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"68",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item26.webp'},
                    {'img':'/src/assets/img/sub26item1.jpg'},
                    {'img':'/src/assets/img/sub26item3.jpg'},
                    {'img':'/src/assets/img/sub26item3.webp'},
                    {'img':'/src/assets/img/sub26item4.webp'},
                    {'img':'/src/assets/img/sub26item5.webp'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item27.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"42",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item27.webp'},
                    {'img':'/src/assets/img/sub28item1.jpg'},
                    {'img':'/src/assets/img/sub28item2.jpg'},
                    {'img':'/src/assets/img/sub28item3.jpg'},
                    {'img':'/src/assets/img/sub28item4.jpg'},
                    {'img':'/src/assets/img/sub28item5.jpeg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item28.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"28",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item28.webp'},
                    {'img':'/src/assets/img/sub28item1.jpg'},
                    {'img':'/src/assets/img/sub28item2.jpg'},
                    {'img':'/src/assets/img/sub28item3.jpg'},
                    {'img':'/src/assets/img/sub28item4.jpg'},
                    {'img':'/src/assets/img/sub28item5.jpeg'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item29.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"9",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item29.webp'},
                    {'img':'/src/assets/img/sub22item1.webp'},
                    {'img':'/src/assets/img/sub22item2.webp'},
                    {'img':'/src/assets/img/sub22item3.webp'},
                    {'img':'/src/assets/img/sub22item4.webp'},
                    {'img':'/src/assets/img/sub22item5.avif'},
                    
                ]
            },
            {
                'img':"/src/assets/img/item30.webp",
                'h1':"Stroller Basket Each For Priam...",
                'dollar-price':"33",
                'price':"435,569",
                'imglist':[
                    {'img':'/src/assets/img/item30.webp'},
                    {'img':'/src/assets/img/sub30item1.jpg'},
                    {'img':'/src/assets/img/sub30item2.webp'},
                    {'img':'/src/assets/img/sub30item3.webp'},
                    {'img':'/src/assets/img/sub30item4.jpg'},
                    {'img':'/src/assets/img/sub30item5.jpg'},
                    
                ]
            },
        ],
        SlideCate:[
            {
                "img":"/src/assets/img/s1.webp",
                "name":"Security and protection ",
                'isSlide':true ,
            },
            {
                "img":"/src/assets/img/s2.webp",
                "name":"Car & Motorcycle ",
                'isSlide':true,
            },
            {
                "img":"/src/assets/img/s3.webp",
                "name":"Babies and children ",
                'isSlide':true,
            },
            {
                "img":"/src/assets/img/s4.webp",
                "name":"Home and garden ",
                'isSlide':true,

            },
            {
                "img":"/src/assets/img/s5.webp",
                "name":"Men's Clothing ",
                'isSlide':true,

            },
            {
                "img":"/src/assets/img/s6.webp",
                "name":"Shoes",
                'isSlide':true,

            },
            {
                "img":"/src/assets/img/s7.webp",
                "name":"Women's Clothing  ",
                'isSlide':true, 

            },
            {
                "img":"/src/assets/img/s8.webp",
                "name":"Furniture",
                'isSlide':true,

            },
            // {
            //     "img":"/src/assets/img/s9.webp",
            //     "name":"tools & industrail",
            //     'isSlide':false ,

            // },
            // {
            //     "img":"/src/assets/img/s10.webp",
            //     "name":"tools & industrail",
            //     'isSlide':false ,

            // },
            // {
            //     "img":"/src/assets/img/s11.webp",
            //     "name":"tools & industrail",
            //     'isSlide':false ,

            // },
        ],
        SlideCate1:[
            {
                "img":"/src/assets/img/s12.webp",
                "name":"Consumer Electronics"
            },
            {
                "img":"/src/assets/img/s13.webp",
                "name":"Jewelry & Watches"
            },
            {
                "img":"/src/assets/img/s14.webp",
                "name":"Hair Extensions & Wigs "
            },
            {
                "img":"/src/assets/img/s15.webp",
                "name":"Home Appliances"
            },
            {
                "img":"/src/assets/img/s16.webp",
                "name":"Luggages & Bags"
            },
            {
                "img":"/src/assets/img/s17.webp",
                "name":"Special Occasion Costume... "
            },
            {
                "img":"/src/assets/img/s18.webp",
                "name":"Sports & Entertainment"
            },
            {
                "img":"/src/assets/img/s19.webp",
                "name":"Phones & Telecommunications"
            },
            {
                "img":"/src/assets/img/s20.webp",
                "name":"Pet Supplies"
            },
        ],
        Country:[
            {
                'id':'0',
                'img':'/src/assets/img/cam.png',
                "name":"Cambodai"
            },
            {
                'id':'1',
                'img':'/src/assets/img/coun1.jpg',
                "name":"Australia"
            },
            {
                'id':'2',
                'img':'/src/assets/img/coun2.webp',
                "name":"Timor leste"
            },
            {
                'id':'3',
                'img':'/src/assets/img/coun3.png',
                "name":"Myanmar"
            },
            {
                'id':'4',
                'img':'/src/assets/img/coun4.png',
                "name":"Vietnam"
            },
            {
                'id':'5',
                'img':'/src/assets/img/coun5.png',
                "name":"Singapor"
            },
            {
                'id':'6',
                'img':'/src/assets/img/coun6.png',
                "name":"China"
            },
            {
                'id':'7',
                'img':'/src/assets/img/coun7.webp',
                "name":"Brunie"
            },
            {
                'id':'8',
                'img':'/src/assets/img/coun8.png',
                "name":"Turkey"
            },
            {
                'id':'9',
                'img':'/src/assets/img/coun9.webp',
                "name":"Spain"
            },
            {
                'id':'10',
                'img':'/src/assets/img/coun10.webp',
                "name":"Portugal"
            },
            {
                'id':'11',
                'img':'/src/assets/img/coun11.webp',
                "name":"Bahrain"
            },
            {
                'id':'12',
                'img':'/src/assets/img/coun12.webp',
                "name":"Iran"
            },
            {
                'id':'13',
                'img':'/src/assets/img/coun13.webp',
                "name":"Jordan"
            },
            {
                'id':'14',
                'img':'/src/assets/img/coun14.webp',
                "name":"Isarel"
            },
            {
                'id':'15',
                'img':'/src/assets/img/coun15.webp',
                "name":"Iraq"
            },
            {
                'id':'16',
                'img':'/src/assets/img/coun16.webp',
                "name":"lebanon"
            },
            {
                'id':'17',
                'img':'/src/assets/img/coun17.webp',
                "name":"Kazakhtan"
            },
            {
                'id':'18',
                'img':'/src/assets/img/coun18.webp',
                "name":"Arab Emirates"
            },
            {
                'id':'19',
                'img':'/src/assets/img/coun19.webp',
                "name":"Kuwait"
            },
            {
                'id':'20',
                'img':'/src/assets/img/coun20.webp',
                "name":"Saudi Arabia"
            },
            {
                'id':'21',
                'img':'/src/assets/img/coun21.webp',
                "name":"Qatar"
            },
            {
                'id':'22',
                'img':'/src/assets/img/coun22.webp',
                "name":"Palestine"
            },
            {
                'id':'23',
                'img':'/src/assets/img/coun23.webp',
                "name":"Oman"
            },
            {
                'id':'24',
                'img':'/src/assets/img/coun24.webp',
                "name":"Syria"
            },
            {
                'id':'25',
                'img':'/src/assets/img/coun25.webp',
                "name":"Yemen"
            },
            {
                'id':'26',
                'img':'/src/assets/img/coun26.jpg',
                "name":"Malaysai"
            },
            {
                'id':'27',
                'img':'/src/assets/img/coun27.jpg',
                "name":"Thailand"
            },
            {
                'id':'28',
                'img':'/src/assets/img/coun28.jpg',
                "name":"Indonesia"
            },
            {
                'id':'29',
                'img':'/src/assets/img/coun29.jpg',
                "name":"France" 
            },
            {
                'id':'30',
                'img':'/src/assets/img/coun30.jpg',
                "name":"Germany"
            },
            {
                'id':'31',
                'img':'/src/assets/img/coun31.jpg',
                "name":"Belgique"
            },  
            {
                'id':'32',
                'img':'/src/assets/img/coun32.jpg',
                "name":"Cote-d'Ivoire"
            },
            {
                'id':'33',
                'img':'/src/assets/img/coun33.jpg',
                "name":"England"
            },
            {
                'id':'34',
                'img':'/src/assets/img/coun34.jpg',
                "name":"Afghanistan"
            },
            {
                'id':'35',
                'img':'/src/assets/img/coun35.jpg',
                "name":"ukrainien"
            },
            {
                'id':'36',
                'img':'/src/assets/img/coun36.jpg',
                "name":"India"
            },
            {
                'id':'37',
                'img':'/src/assets/img/coun37.jpg',
                "name":"Argentina"
            },
            {
                'id':'38',
                'img':'/src/assets/img/coun38.webp',
                "name":"Lao"
            },
            {
                'id':'39',
                'img':'/src/assets/img/coun39.png',
                "name":"Brazil"
            },
            {
                'id':'40',
                'img':'/src/assets/img/coun40.jpg',
                "name":"Tanzania"
            },
            {
                'id':'41',
                'img':'/src/assets/img/coun41.webp',
                "name":"Somalia"
            },
            {
                'id':'42',
                'img':'/src/assets/img/coun42.webp',
                "name":"Djibouti"
            },
            {
                'id':'43',
                'img':'/src/assets/img/coun43.webp',
                "name":"Camoros"
            },
            {
                'id':'44',
                'img':'/src/assets/img/coun44.webp',
                "name":"Ethiopia"
            },
            {
                'id':'45',
                'img':'/src/assets/img/coun45.webp',
                "name":"Japan"
            },
            {
                'id':'46',
                'img':'/src/assets/img/coun46.webp',
                "name":"Korea"
            },
            {
                'id':'47',
                'img':'/src/assets/img/coun47.webp',
                "name":"Uruguay"
            },
            {
                'id':'48',
                'img':'/src/assets/img/coun48.webp',
                "name":"Switzerland"
            },
            {
                'id':'49',
                'img':'/src/assets/img/coun49.webp',
                "name":"Mongolia"
            },
            {
                'id':'50',
                'img':'/src/assets/img/coun50.webp',
                "name":" Morocco"
            },

        ],
        SubItems:[
            {
                "id":'1',
                "name":"Luggages and bags",
                "img":"/src/assets/img/icon3.jpg",
                "subdataitems":[
                    {'name':'backpacks'},
                    {'img':'/src/assets/img/icon3.jpg'},
                    {'Prce':'15'},
                
                ],
            },
            {
                "id":'2',
                "name":"Shoes",
                "img":"/src/assets/img/icon2.jpg",
                "subdataitems":[
                    {'name':'smallbag'},
                    {'img':'/src/assets/img/icon3.jpg'},
                    {'Prce':'15'},
                
                ],
            },
            {
                "id":'3',
                "name":"Women's Clothing",
                "img":"/src/assets/img/icon4.png",
                "subdataitems":[
                    {'name':'addidas' },
                    {'img':'/src/assets/img/icon3.jpg'},
                    {'Prce':'15'},
                
                ],
            },
            {
                "id":'4',
                "name":"Men's Clothing",
                "img":"/src/assets/img/icon5.png"
            },
            {
                "id":'5',
                "name":"Sport & Entertainment",
                "img":"/src/assets/img/icon6.png"
            },
            {
                "id":'6',
                "name":"Toy & Game",
                "img":"/src/assets/img/icon7.webp"
            },
            {
                "id":'7',
                "name":"Funiture",
                "img":"/src/assets/img/icon8.jpg"
            },
            {
                "id":'8',
                "name":"Jewelry & Watches",
                "img":"/src/assets/img/icon9.webp"
            },
            {
                "id":'9',
                "name":"Tools & Industrail",
                "img":"/src/assets/img/icon10.jpg"
            },
            {
                "id":'10',
                "name":"Beauty & Health",
                "img":"/src/assets/img/icon11.png"
            },
            {
                "id":'11',
                "name":"Babies & Kids",
                "img":"/src/assets/img/icon12.jpeg"
            },
            {
                "id":'12',
                "name":"Home & Garden",
                "img":"/src/assets/img/icon13.png"
            },

        ]
    }
        
              
) 