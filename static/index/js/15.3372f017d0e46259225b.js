webpackJsonp([15],{"c5J/":function(t,e){},f1hX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"GadAfc",props:{adResponsive:!1,adInit:0,adClient:"",adSlot:"",boxStyle:{default:function(){return{width:"100%",height:"100%"}}},allowClose:{default:!1},bottomSeparator:{default:!0},laze:{default:!1}},data:function(){return{showIns:!1}},watch:{},computed:{getBoxStyle:function(){return Object.assign({},this.boxStyle)}},created:function(){this.laze?window.addEventListener("scroll",this.onScroll):this.showAfc()},methods:{showAfc:function(){var t=this;this.showIns=!0,setTimeout(function(){console.log("init afc:"+t.adSlot),t.$utils.initAfc()},1e3)},isInViewPort:function(t){var e=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight,o=t.getBoundingClientRect(),i=o.top,s=o.right,l=o.bottom,a=o.left;return i>=0&&a>=0&&s<=e&&l<=n},onScroll:function(){this.isInViewPort(this.$el)&&(this.showAfc(),window.removeEventListener("scroll",this.onScroll))},clickClose:function(){this.$el.style.display="none"}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"afc-box",style:t.getBoxStyle},[n("div",{staticClass:"adv-icon"},[t._v("Advertisement")]),t._v(" "),t.allowClose?n("i",{staticClass:"el-icon-circle-close afc-close",on:{click:t.clickClose}}):t._e(),t._v(" "),t.showIns?n("ins",{staticClass:"adsbygoogle afc-ins",attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":"auto","data-full-width-responsive":t.adResponsive}}):t._e()])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("c5J/")},"data-v-77c0d150",null);e.default=s.exports}});