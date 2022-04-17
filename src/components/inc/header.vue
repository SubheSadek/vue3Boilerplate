<template>
    
    <header>
        <div class="container">
            <div class="columns">
                <div class="column is-one-fifth">
                    <div class="logo">
                        <a href="https://www.availtrade.com" title=""><img src="https://availtrade.com/public/images/logo-11-09-2021-202442654617003.jpg" style="width:163px; height:48px;" /></a>
                    </div>
                </div>
                <div class="column is-two-quarters">
                    <form method="GET" action="https://availtrade.com/search" accept-charset="UTF-8" role="form" class="form form-horizontal" enctype="multipart/form-data">
                        <div class="searchbar">

                            <select name="search_type">
							<option value="product" >Products</option>
							<option value="supplier" >supplier</option>
						</select>
                            <input class="input" type="text" name="keywords" placeholder="  What are you looking for..." value="">
                            <input type="hidden" name="viewType" value="L">
                            <button class="button">
							<span class="ml-2 mr-2">
								<i class="fa fa-search" aria-hidden="true"></i>
							</span>
							Search</button>
                        </div>
                    </form>
                </div>
                <div class="column is-one-third">
                    <div class="rightmenu">
                        <ul>


                            <li>
                                <div class="dropdown is-right is-hoverable">
                                    <div class="dropdown-trigger">
                                        <a href="https://availtrade.com/login" class="hover-signin" aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <div style="display: flex;">
                                                <div class="header-signin-mother">
                                                    <div class="header-signin-child-one" style="display: flex;">
                                                        <img src="https://availtrade.com/public/images/Image 4.png" style="height: 40px!important; margin-right: 5px;" />
                                                        <span style="line-height: 20px; margin: 6px;">Sign in & <br/>Join free</span>
                                                    </div>
                                                    <div class="header-signin-child-two">
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="  ">
                                    <div class="header-message-mother">
                                        <div class="header-message-child-one">
                                            <img src="https://availtrade.com/public/images/Image 5.png" /><br/>
                                            <span>Messages</span>
                                        </div>
                                        <div class="header-message-child-two">
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class=" ">

                                    <div class="header-order-mother">
                                        <div class="header-order-child-one">
                                            <img src="https://availtrade.com/public/images/Image 6.png" /><br/>
                                            <span>Orders</span>
                                        </div>
                                        <div class="header-order-child-two">
                                        </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="https://availtrade.com/cart" class="trep">
                                    <div class="header-cart-mother">
                                        <div class="header-cart-child-one">
                                            <img src="https://availtrade.com/public/images/Image 7.png" /><br/>
                                            <span>Cart</span>
                                        </div>
                                        <div class="header-cart-child-two" style="display: none">
                                            <span class="pending-messages">98</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Cart POP-UP -->
                <div id="pop-up" class="mout">
                    <div class="cart-parent">
                        <div class="cart-child-one">
                            <img src="https://availtrade.com/public/images/upper-arrow.png" alt="">
                        </div>
                        <div class="cart-child-two">
                            <div class="cart-pop-no-session">
                                <h2>No items in cart</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Message POP-UP -->
                <div id="message-pop-up">
                    <div class="message-parent">
                        <div class="message-child-one">
                            <img src="https://availtrade.com/public/images/upper-arrow.png" alt="">
                        </div>
                        <div class="message-child-two">
                            <div class="message-pop">


                                <div class="cart-button">
                                    <input type="submit" class="cart-submit" value="View all messages >">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sign-in POP-UP -->
                <div id="signin-pop-up">
                    <div class="signin-parent">
                        <div class="signin-child-one">
                            <img src="https://availtrade.com/public/images/upper-arrow.png" alt="">
                        </div>
                        <div class="signin-child-two">
                            <div class="signin-pop">
                                <h1 style="font-size: 20px;font-weight: bold;margin-bottom: 10px;">Get started now</h1>
                                <a class="button is-link" style="width: 100% !important;background: #0088cc;" href="https://availtrade.com/login">Sign In</a>
                                <h1 style="font-size: 20px;font-weight: bold;text-align: center;padding: 0px;margin: 0px;">Or</h1>
                                <a class="button is-link" style="width: 100% !important;background: #28a745;margin-bottom: 10px;" href="https://availtrade.com/registration">Join Free</a>
                                <a class="button is-link" style="width: 100% !important;background: #3b5998;margin-bottom: 10px;" href="https://availtrade.com/loginwithfacebook">Login with Facebook</a>
                                <a class="button is-link" style="width: 100% !important;background: #db4a39;margin-bottom: 10px;" href="https://availtrade.com/loginwithgmail">Login with Google</a>
                                <a class="button is-link" style="width: 100% !important;background: #0e76a8;margin-bottom: 10px;" href="https://availtrade.com/loginwithlinkedin">Login with Linkedin</a>
                                <a class="button is-link" style="width: 100% !important;background: #00acee;" href="https://availtrade.com/login">Login with Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order POP-UP -->
                <div id="order-pop-up">
                    <div class="order-parent">
                        <div class="order-child-one">
                            <img src="https://availtrade.com/public/images/upper-arrow.png" alt="">
                        </div>
                        <div class="order-child-two">
                            <div class="order-pop">
                                <p class="order-link"><a href="#">Pending Payment (0)</a></p>
                                <p class="order-link"><a href="#">Pending Confirmation (0)</a></p>
                                <p class="order-link"><a href="#">Pending Actions (0)</a></p>
                                <hr style="padding: 0px;margin: 0px;margin-top: 4px;">
                                <div class="cart-button">
                                    <input type="submit" class="cart-submit" value="Order with trade assurance">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'app-header',
}
</script>