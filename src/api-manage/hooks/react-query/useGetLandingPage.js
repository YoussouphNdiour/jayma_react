import MainApi from "../../MainApi";
import {landing_page_api} from "../../ApiRoutes";
import {useQuery} from "react-query";

const getData = async () => {
    const  data = { 
        "base_urls":{"header_icon_url":"https://api.jayma.mdglobalservices.sn/storage/app/public/header_icon",
        "header_banner_url":"https://api.jayma.mdglobalservices.sn/storage/app/public/header_banner",
        "testimonial_image_url":"https://api.jayma.mdglobalservices.sn/storage/app/public/reviewer_image",
        "promotional_banner_url":"https://api.jayma.mdglobalservices.sn/storage/app/public/promotional_banner",
        "business_image_url":"https://api.jayma.mdglobalservices.sn/storage/app/public/business_image"},
        "header_title":"Your e-Commerce !","header_sub_title":"Venture Starts Here",
        "header_tag_line":"More than just a reliable eCommerce platform",
        "header_icon":"2023-06-12-648721d3028d4.png","header_banner":"2023-08-20-64e1e5ff21eee.png",
        "company_title":"6amMart","company_sub_title":"is Best Delivery Service Near You",
        "company_description":"6amMart is a one-stop shop for all your daily necessities. You can shop for groceries, and pharmacy items, order food, and send important parcels from one place to another from the comfort of your home.",
        "company_button_name":"Order Now","company_button_url":"https://6ammart-react.6amtech.com/","download_user_app_title":"Complete Multipurpose eBusiness Solution","download_user_app_sub_title":"6amMart is a Laravel and Flutter Framework-based multi-vendor food, grocery, eCommerce, parcel, and pharmacy delivery system. It has six modules to cover all your business function",
        "earning_title":"Let\u2019s Start Earning with $6amMart$","earning_sub_title":"Join our online marketplace revolution and boost your income.",
        "earning_seller_title":"Become a Seller","earning_seller_sub_title":"Register as seller & open shop in 6amMart to start your business",
        "earning_seller_button_name":"Register","earning_seller_button_url":"https://api.jayma.mdglobalservices.sn/store/apply",
        "earning_dm_title":"Become a Delivery Man","earning_dm_sub_title":"Register as delivery man and earn money",
        "earning_dm_button_name":"Register",
        "earning_dm_button_url":"https://api.jayma.mdglobalservices.sn/deliveryman/apply",
        "business_title":"Let\u2019s",
        "business_sub_title":"Manage your business  Smartly",
        "business_image":"",
        "testimonial_title":"We $satisfied$ some Customer & Restaurant Owners",
        "testimonial_list":[{"id":1,"name":"Jane Cooper","designation":"President of Sales","review":"This application is well organized and I think they have listened to their customer's wishes. Layout very well, easy to use.",
        "reviewer_image":"2023-06-12-6486f952e5c3b.png","company_image":"def.png","status":1,"created_at":"2023-06-12T10:54:10.000000Z","updated_at":"2023-06-12T10:54:10.000000Z"},{"id":2,"name":"Ronald Richards","designation":"Trainer",
        "review":"Wonderful experience with 6amTech. What actually i was looking for multivendor app for my delivery project.","reviewer_image":"2023-06-12-6486f98cac16a.png","company_image":"def.png","status":1,
        "created_at":"2023-06-12T10:55:08.000000Z","updated_at":"2023-06-12T10:55:08.000000Z"},{"id":3,"name":"Devon Lane","designation":"Nursing Assistant","review":"The best in the business. With 6amMart, I've just reinvented the way of online ordering and delivery system.",
        "reviewer_image":"2023-06-12-6486f9c1ed93a.png",
        "company_image":"def.png","status":1,"created_at":"2023-06-12T10:56:02.000000Z","updated_at":"2023-06-12T10:56:02.000000Z"},{"id":4,"name":"Darrell Steward","designation":"CTO","review":"This is a complete package! I'm running a multivendor (food, grocery) online ordering and delivery business with it very smoothly.",
        "reviewer_image":"2023-06-12-6486fa0084f18.png",
        "company_image":"def.png","status":1,"created_at":"2023-06-12T10:57:04.000000Z","updated_at":"2023-06-12T10:57:04.000000Z"}],
        "fixed_newsletter_title":"Join Us!",
        "fixed_newsletter_sub_title":"Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.",
        "fixed_footer_description":"Connect with our social media and other sites to keep up to date",
        "fixed_promotional_banner":"2023-06-12-6486ff0017c7a.png",
        "promotion_banners":[],
        "download_user_app_links":{"playstore_url_status":"1","playstore_url":"https://play.google.com/store/","apple_store_url_status":"1","apple_store_url":"https://www.apple.com/app-store/"},"download_business_app_links":{"seller_playstore_url_status":"1","seller_playstore_url":"https://play.google.com/store","seller_appstore_url_status":"1","seller_appstore_url":"https://www.apple.com/app-store/","dm_playstore_url_status":"1","dm_playstore_url":"https://play.google.com/store","dm_appstore_url_status":"1","dm_appstore_url":"https://www.apple.com/app-store/"}
    };
    return data;
};

export default function useGetLandingPage() {
    return useQuery("landing-page-data", getData, {
        enabled: false,
    });
}