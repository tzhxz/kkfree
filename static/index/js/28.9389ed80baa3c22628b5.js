webpackJsonp([28],{OWRU:function(t,e){},rNCT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Footer",components:{CookieConsent:function(){return i.e(20).then(i.bind(null,"Z1Bg"))}},data:function(){return{visible:!0}},computed:{},methods:{gurl:function(t){return this.$utils.hostName+t},gotoPath:function(t){this.$parent.goto(t)},checkVisible:function(t){this.visible=!0,"pc_game_details"==t&&(this.visible=!1)},reportView:function(t){this.$utils.gtagReport({eventName:"pc_view",eventParams:{page:t},delaytime:0})}},watch:{$route:function(t,e){this.checkVisible(t.name)}},created:function(){this.checkVisible(this.$route.name)}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"footer_pd"}),t._v(" "),i("div",{staticClass:"footer"},[i("footer",{staticClass:"footer_con"},[t._m(0),t._v(" "),i("div",{staticClass:"footer_links"},[i("a",{attrs:{href:t.gurl("/privacy")},on:{click:function(e){return t.reportView("privacy")}}},[t._v("Privacy Statement")]),t._v(" "),i("a",{attrs:{href:t.gurl("/service")},on:{click:function(e){return t.reportView("service")}}},[t._v("Terms of Use")]),t._v(" "),i("a",{attrs:{href:t.gurl("/contact")},on:{click:function(e){return t.reportView("contact")}}},[t._v("Contact Us")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_brand"},[e("p",{staticClass:"footer_mission"},[this._v("Let the world play ")])])}]};var o=i("VU/8")(n,r,!1,function(t){i("OWRU")},"data-v-33306f1c",null);e.default=o.exports}});