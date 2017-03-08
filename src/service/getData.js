import fetch from '../config/fetch'

export const wxlogin = (userid,token) => fetch('POST', '/json',{
	userid,token
},"axios");






//export const testcurrentcity = () => fetch('GET', '/v1/cities',{type: 'hot'})

// export const cityGuess = () => fetch('GET', '/v1/cities', {
// 	//type: 'guess'
// });

/**
 * 获取msite商铺列表
 */

// export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
// 	let supportStr = '';
// 	support_ids.forEach(item => {
// 		if (item.status) {
// 			supportStr += '&support_ids[]=' + item.id;
// 		}
// 	});
// 	let data = {
// 		latitude,
// 		longitude,
// 		offset,
// 		limit: '20',
// 		'extras[]': 'activities',
// 		keyword: '',
// 		restaurant_category_id,
// 		'restaurant_category_ids[]': restaurant_category_ids,
// 		order_by,
// 		'delivery_mode[]': delivery_mode + supportStr
// 	};
// 	return fetch('GET', '/shopping/restaurants', data);
// };




/**
 * 获取用户信息
 */

//export const getUser = () => fetch('GET', '/v1/user', {});




// export const cityGuess = () => setpromise(home.guesscity);
// export const hotcity = () => setpromise(home.hotcity);
// export const groupcity = () => setpromise(home.groupcity);
// export const currentcity = number => setpromise(city.currentcity);
// export const searchplace = (cityid, value) => setpromise(city.searchdata);
// export const msiteAdress = geohash => setpromise(msite.msiteAdress);
// export const msiteFoodTypes = geohash => setpromise(msite.foodTypes);
// export const shopList = (latitude, longitude, offset) => setpromise(msite.shopList);
// export const searchRestaurant = (geohash, keyword) => setpromise(search.searchData);
// export const foodCategory = (latitude, longitude) => setpromise(food.category);
// export const foodDelivery = (latitude, longitude) => setpromise(food.delivery);
// export const foodActivity = (latitude, longitude) => setpromise(food.activity);
// export const shopDetails = (shopid, latitude, longitude) => setpromise(shop.shopDetails);
// export const foodMenu = restaurant_id => setpromise(shop.shopMenu);
// export const getRatingList = (offset, tag_name = '') => setpromise(shop.ratingList);
// export const ratingScores = shopid => setpromise(shop.scores);
// export const ratingTags = shopid => setpromise(shop.tage);
// export const mobileCode = phone => setpromise(login.validate_token);
//export const sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);
// export const accountLogin = (username, password, captcha_code) => setpromise(login.userInfo);
// export const checkExsis = (checkNumber, type) => setpromise(login.checkExsis);
// export const sendMobile = (sendData, captcha_code, type, password) => setpromise(login.send);
// export const checkout = (geohash, entities) => setpromise(confirm.checkout);
// export const getRemark = (id, sig) => setpromise(confirm.remark);
// export const getAddress = (id, sig) => setpromise(confirm.addressList);
// export const getUser = () => setpromise(login.userInfo);
// export const getcaptchas = () => setpromise(login.cpatchs);
// export const searchNearby = keyword => setpromise(confirm.searchAddress);
// export const postAddAddress = (userId, address, address_detail, geohash, name, phone, phone_bk, poi_type, sex, tag, tag_type) => setpromise(confirm.addAddress);
// export const placeOrders = (user_id, cart_id, address_id, description, entities, geohash, sig) => setpromise(confirm.palceOrder);
// export const rePostVerify = (cart_id, sig, type) => setpromise(confirm.verfiyCode);
// export const validateOrders = ({
// 	user_id,
// 	cart_id,
// 	address_id,
// 	description,
// 	entities,
// 	geohash,
// 	sig,
// 	validation_code,
// 	validation_token
// }) => setpromise(confirm.orderSuccess);
// export const payRequest = (merchantOrderNo, userId) => setpromise(confirm.payDetail);