webpackJsonp([17,0,25],{"0ikV":function(A,g){},PuZs:function(A,g,B){"use strict";Object.defineProperty(g,"__esModule",{value:!0});var i={name:"GameList",props:{gameData:[],offfsetWidth:0,isNotMinHeight:!1},data:function(){return{gamelist:[],islazyload:!1}},watch:{gameData:function(){this.islazyload=!1,this.gamelist=this.gameData}},computed:{},methods:{gurl:function(A){return"/"+A},clickIcon:function(A){this.$store.state.app.gameInfo=A,this.$utils.gotoPlayGame(A,function(){})},initProperty:function(){this.$utils.reSetCssProperty("--gridTemplateColumns",214,this.offfsetWidth)},onScroll:function(){if(!(this.gameData.length<=0)){this.islazyload=!0;var A=this.$refs.game_b_a_icon;this.$utils.lazyload(A)}}},created:function(){var A=this;window.addEventListener("resize",this.initProperty),this.initProperty(),this.islazyload=!1,this.gamelist=this.gameData,window.addEventListener("scroll",this.onScroll),setTimeout(function(){A.onScroll()},10)},updated:function(){var A=this;this.islazyload=!1,setTimeout(function(){A.onScroll()},10)},mounted:function(){this.$nextTick(function(){})},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.initProperty)},beforeCreate:function(){},beforeUpdate:function(){},beforeMount:function(){}},D={render:function(){var A=this,g=A.$createElement,i=A._self._c||g;return i("div",{staticClass:"game_wrap",class:A.isNotMinHeight?"":"minh-vh90"},[i("div",{staticClass:"game_grid"},A._l(A.gamelist,function(g,D){return i("el-row",{key:D,staticClass:"gm-row",attrs:{span:24}},[i("a",{staticClass:"game_block_a",attrs:{href:A.gurl("g/"+g.gid)}},[i("img",{ref:"game_b_a_icon",refInFor:!0,attrs:{src:B("xIjl"),"data-src":g.icon,alt:g.title},on:{click:function(B){return A.clickIcon(g)}}}),A._v(" "),i("span",{staticClass:"title"},[A._v(A._s(g.title))])])])}),1)])},staticRenderFns:[]};var Q=B("VU/8")(i,D,!1,function(A){B("0ikV")},"data-v-6143b468",null);g.default=Q.exports},xIjl:function(A,g){A.exports="data:image/gif;base64,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"}});