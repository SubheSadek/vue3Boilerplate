<template>
        <div class="container mt-5" style="background-color: #FFF;">
        <div class="columns is-gapless">
            <div class="column is-one-fifth pr-5" style="width:22%">

                <!-- My Market -->
                <div class="sidebar-navbar" style="background-color: #FFF;">
                    <h2 class="ml-2" style="border-bottom: 2px solid #f3f3f3; padding: 10px 0px; margin-bottom: 10px; margin-right: 15px;"><strong>MY MARKETS</strong></h2>

                    <ul>

                        <a v-for="(cat, index) in getFilterCats" :key='index' :href="`https://availtrade.com/category/${cat.catgeory_slug}/heightolow`" :title="cat.category_name" style="color:black ;">
                            <li id="dropdown" class="evanyou">
                                <img :src="`https://availtrade.com/public/images/${cat.category_icon}`" /> <span style="line-height: 1.6 !important;">{{cat.category_name}}</span>   
                                <img src="https://availtrade.com/public/images/right-arrow.png" class="is-pulled-right" style="width: 10px !important; height: 10px; margin-top: 16px; margin-right: 20px;" />
                                <div class="sidebar-navbar-mega-dropdown" style="width:750px!important;" v-if="cat.sub_cats && cat.sub_cats.length > 0">
                                    <div v-for="(subcat, subcatIndex) in cat.sub_cats" :key="subcatIndex">
                                        <!-- v-if="cat.sub_cats.length > 6 ? cat.sub_cats.length < 5 : subcatIndex" -->
                                        <div style="width: 33%; float:left; height: auto; height: 240px !important;" v-if="cat.sub_cats.length <= 5? subcatIndex < 5: subcatIndex < 6">
                                            <a :href="`https://availtrade.com/seccategory/${subcat.secondary_category_name}/heightolow`" title="" target="_blank" style="color:black;">
                                                <p><strong>{{subcat.secondary_category_name}}</strong></p>
                                            </a>
                                            <ul v-if="subcat.tertiarycategorys && subcat.tertiarycategorys.length > 0">
                                                <span  v-for="(ter, terIndex) in subcat.tertiarycategorys" :key="terIndex">
                                                   <li v-if="subcat.tertiarycategorys.length <= 5? terIndex < 5: terIndex < 6">
                                                        <a :href="`https://availtrade.com/tercategory/${ter.tartiary_category_slug}/heightolow`">
                                                        {{ ter.tartiary_category_name}}
                                                        </a>
                                                    </li> 
                                                </span>
                                                
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>                             

                            </li>
                        </a>
                       
                        <li>
                            <a href="https://availtrade.com/all-categories" style="color:black;" title="All Categories"><img src="https://availtrade.com/public/images/Image 15.png" /> All Categories</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Slider -->
            <div class="column is-two-quarters m-4">
                <div id="main-inner">
                    <div id="slider">
                        <!-- <span v-for="(slide, slideIndex) in sliders" :key="slideIndex"> -->
                        <!-- <img v-for="(slide, slideIndex) in sliders" :key="slideIndex" :src="`https://availtrade.com/public/images/${slide.slider_image ? slide.slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" /> -->
                        <img :src="`https://availtrade.com/public/images/${sliders[0] ? sliders[0].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <img :src="`https://availtrade.com/public/images/${sliders[1] ? sliders[1].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <img :src="`https://availtrade.com/public/images/${sliders[2] ? sliders[2].slider_image : ''}`" alt="" style="min-height: 423px!important;max-height: 423px!important;" />
                        <!-- </span> -->
                        
                    </div>
                </div>
            </div>

            <div class="column is-one-fifth m-4">
                <div>
                    <div style="background-color: #371777; padding: 10px; color: #FFF; text-align: center; font-size: 20px;">
                        Everything in one place
                    </div>
                    <span v-for="(product, prodIndex) in threeProducs" :key="prodIndex">
                        <div style="padding: 10px;">
                            <p class="is-size-5">{{str_limit(product.product_name, 20)}}</p>
                            <a :href="`https://availtrade.com/seccategory/${product.catgeory_slug}/heightolow`" class="button is-small is-info is-rounded mt-2" style="background-color: #371777;" title="">Source now</a>
                            <img :src="`https://availtrade.com/public/images/${product.products_image}`" class="is-pulled-right three-image" />
                        </div>
                        <hr class="divider" />
                    </span>

                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name:'app-slider',
    data(){
        return{
            categories: [],
            threeProducs: [],
            sliders: [],
            secondCats: [],
        }
    },
    computed: {
         getFilterCats(){
            let cats = [];
            for(let cat of this.categories){
                cat['sub_cats']=this.secondCats.filter((el) => el.primary_category_id == cat.id);

                cats.push(cat);
            }
            return cats;
            
        },
    },
    methods:{
        async getCategories(){
            const res = await this.callApi('get', 'primarycategorylist');
            if(res.status == 200){
                this.categories = res.data;
            }
        },

        async secondCategory(){
            const res = await this.callApi('get', 'secondarytertiarycatgeorylist');
            if(res.status == 200){
                this.secondCats = res.data;
            }
        },

        async leftThreeProducts(){
            const res = await this.callApi('get', 'homeleftthreeproduct');
            if(res.status == 200){
                this.threeProducs = res.data;
            }
        },
        async homeSlider(){
            const res = await this.callApi('get', 'homesliderlist');
            if(res.status == 200){
                this.sliders = res.data;
            }
        },
    },
    async mounted(){
         await this.homeSlider();
         this.getCategories();
         this.leftThreeProducts();
         this.secondCategory();
    }
}
</script>