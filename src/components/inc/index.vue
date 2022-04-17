/* eslint-disable vue/no-parsing-error */
<template>
        <div class="container is-gapless mt-5">
        <div class="columns">

            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>
								Other Bags & Accessories							</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>
								Accessories							</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>
								Feeding							</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">

            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>Commonly Used Accessories & Parts</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>Body Art</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <h2><b>Nursery</b></h2>
                    <div class="columns">
                    </div>
                </div>
            </div>
        </div>
        <!-- Start of Fetching Secondary Categories Products Here -->
        <div class="columns">

            <div class="column">
                <div class="p-5" style="background-color: #FFF;">
                    <div class="columns">


                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Car Seat
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Flats
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="columns">

                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Wire Assembly
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                New Born Unisex (0 - 6 months)
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="column">

                <div class="p-5" style="background-color: #FFF;">
                    <div class="columns">

                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Closures
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Gemstones K-Gold Jewelry
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="columns">

                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Keyboards
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div style="background-color: #f3f3f3; padding: 20px; margin-top: 20px;">
                                Refurbished Phones
                                <p class="has-text-centered"><strong></strong></p>
                                <div class="columns mt-2">
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <!-- End of Fetching Secondary Categories Products Here -->
    </div>

    <div class="container mt-5">

        <div class="columns is-full">
            <div class="column is-one-fifth">
                <p class="mt-2 is-size-5 mr-0 pr-0"><b>JUST FOR YOU</b></p>
            </div>
            <div class="column is-three-quarters">
                <p>
                    <!-- <hr style="background-color: #ccc" ;/> -->
                </p>
            </div>
        </div>

        <div class="columns">
            <div class="column mr-0 pr-0">
                <p style="background: #333333;width: 100%;">

                    <div v-for="(prod, index) in products" :key="index" style="background-color: #FFF; border: 2px solid #f3f3f3; float: left; margin-left: 7px;" class="box">
                        <a href="https://availtrade.com/product/toyota-probox-toyota-89666-52040-engine-control-electronic-fuel-injection-system-for-probox-ncp58g-succeed" title="" style="color:black!important">
                            <img :src="`https://availtrade.com/public/images/${prod.products_image}`" style="width:225px; height:225px;" />
                            <p>{{ str_limit(prod.product_name, 20)}}</p>
                            <p>

                                <b> {{prod.symbol}} {{prod.product_price}}</b><br>

                                <!-- Price section -->

                                {{prod.unit}} {{prod.unit_name}} (Min. Order)
                            </p>
                        </a>
                        <p class="text-right mb-0" style="float:right"><i class="fas fa-eye"></i> {{prod.visitor_count}}</p>
                    </div>

                </p>

            </div>
        </div>

    </div>


    <div class="container mt-5">

        <div class="columns is-full">
            <div class="column is-two-fifths mr-0 pr-0">
                <p class="mt-2 is-size-5 mr-0 pr-0"><b>CHOOSE YOUR SUPPLIERS BY REGIONS</b></p>
            </div>
            <div class="column is-three-fifths">
                <p>
                    <!-- <hr style="background-color: #ccc" ;/> -->
                </p>
            </div>
        </div>

        <div class="columns">
            <div class="column mr-0 pr-0">

                <div class="flags">
                    <ul>

                        <li>
                            <a href="https://availtrade.com/country/AE" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/ae.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/AG" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/ag.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/AL" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/al.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/BD" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/bd.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/BG" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/bg.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/BH" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/bh.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/BI" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/bi.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/BT" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/bt.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/CC" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/cc.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/CF" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/cf.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/CL" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/cl.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/CN" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/cn.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>

                        <li>
                            <a href="https://availtrade.com/country/IN" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/in.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>
                        <li>
                            <a href="https://availtrade.com/country/PK" style="margin-right: 1px!important;">
                                <img src="https://availtrade.com/public/country_flags/pk.png" style="width:90px!important; height:86px!important;margin-right:2px!important;">
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'app-index',
    computed:{
        ...mapGetters({
           products : "getProduct",
        })
    },
    data() {
        return {
            // products: [],
        }
    },
    methods: {
        async getProducts() {
            const res = await this.callApi('get', 'homejustforproduct');
            if(res){
                this.$store.commit('setProducts', res.data);
            }
        },
    },
    async mounted(){
      await this.getProducts();
    },
}
</script>

