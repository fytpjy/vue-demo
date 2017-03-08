<template>
  	<div>
        <section>
            <a @click="reload">ReLoad</a>
        </section>
        <section id="hot_city_container">
            <ul class="citylistul clear">
                <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>  
            </ul>
        </section>
        <section>
            <mt-button type="primary" @click="tourl">{{btnTitle}}</mt-button>
            <mt-button @click="out" type="default">清空退出</mt-button>
            <div>{{calbaceurl}}</div>
            <div>用户ID={{userid}}</div>
            <div>用户token={{usertoken}}</div>
            <div>用户sessionid={{sessionid}}</div>
        </section>
    </div>
</template>

<script>
//import headTop from '../../components/header/head'
import {wxlogin} from '../../service/getData'
import {getCookie,delCookie,cnzzCount,cnzzEvent,weixin,wxConfig,setStore,userInfoSave,getStore} from '../../config/mUtils'

export default {
    data(){
        return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
            sstt: false,
            btnTitle: "登陆",
            hhrr: "",
            calbaceurl: "",
            usertoken: "",
            userid: "",
            sessionid: ""
        }
    },

    created(){

        let url = location.href;
        if(url.indexOf("ref=login")>0){
            userInfoSave();
        }
        
        if(getCookie("readoo_userid") && getCookie("readoo_token")){
            this.btnTitle = "订购";
            this.sstt = true;
            this.hhrr = "";
            this.usertoken = getCookie("readoo_token")
            this.userid = getCookie("readoo_userid")
            this.sessionid = getCookie("readoo_sessionid")
        }else{
            this.btnTitle = "登陆";
            this.sstt = false;
            this.hhrr = "http://zaia.fengwo.com/FwhWeChat/entry?callback=callback"
        }
    },

	mounted(){

        //wxlogin()

        //this.calbaceurl = location.href;

        //alert(document.cookie)

        //开启统计
        cnzzCount(1261200421)   //传递CNZZ统计ID

        //事件统计
        cnzzEvent({
            category: "直播",  //category：事件类别，必填项，表示事件发生在谁身上，如“视频”、“小说”、“轮显层”等等。
            action: "打赏",    //action：事件操作，必填项，表示访客跟元素交互的行为动作，如"播放"、"收藏"、"翻层"等等。
            label: "上午",     //label：事件标签，选填项，用于更详细的描述事件，从各个方面都可以，比如具体是哪个视频，哪部小说，翻到了第几层等等。
            value: "1"      //value：事件值，选填项，整数型，用于填写打分型事件的分值，加载时间型事件的时长，订单型事件的价格等等。
        })

        wxConfig({
            debug: false,          
            jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','chooseWXPay'],
            ShareTitle: "分享标题",
            ShareDesc: "分享描述",
            ShareLink: "http://www.youshu.cc",
            ShareImgUrl: "http://zaia.fengwo.com/public/images/tp_01.jpg",
            ShareSuccess: function(){
                console.log("分享成功")
            },
            ShareCancel: function(){
                console.log("取消分享")
            }
        });
    },

    components:{
        //headTop
    },

    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        },

        getwx(x,y,z){
            cityGuess(x,y,z).then(res => {
                this.calbaceurl = res
            })
        },
        pay(){

            if(this.sstt){
                console.log("订购")

            }else{
                console.log("登陆")
            }
        },
        out(){
            delCookie("readoo_userid")
            delCookie("readoo_sessionid")
            delCookie("readoo_token")
            this.$toast('退出成功')
        },
        tourl(){
            location.href = this.hhrr
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
    .city_nav{
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: #fff;
        margin-bottom: 0.4rem;
        .city_tip{
            @include fj;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1){
                @include sc(0.55rem, #666);
            }
            span:nth-of-type(2){
                font-weight: 900;
                @include sc(0.475rem, #9f9f9f);
            }

        }
        .guess_city{
            @include fj;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75rem, 1.8rem);
            span:nth-of-type(1){
                color: $blue;
            }
            .arrow_right{
                @include wh(.6rem, .6rem);
                fill: #999;
            }
        }
    }
    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }
    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025rem solid $bc;
            border-right: 0.025rem solid $bc;
            @include wh(25%, 1.75rem);
            @include font(0.6rem, 1.75rem);
        }
        li:nth-of-type(4n){
            border-right: none;
        }
    }
    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        @include font(0.55rem, 1.45rem, "Helvetica Neue");
        span{
            @include sc(0.475rem, #999);
        }
    }
    
    .letter_classify_li{
        margin-bottom: 0.4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container{
            li{
                color: #666;
            }
        }
    }

</style>
