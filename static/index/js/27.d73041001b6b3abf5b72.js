webpackJsonp([27],{"2Nt5":function(e,t){},j9Fk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"custom-class":"feedback_dialog",visible:e.isShowFeedBack,"append-to-body":!0,width:e.op.dialogW},on:{"update:visible":function(t){e.isShowFeedBack=t},close:e.cancel}},[a("p",{staticClass:"feedback_title"},[e._v("Thank you for the review. Your feedback helps us make Our Games better.")]),e._v(" "),a("p",{staticClass:"feedback_title"},[e._v("Please explain why you chose to give Dalgona Candy a low rating.")]),e._v(" "),a("el-form",{ref:"feedbackForm",staticClass:"feedback_form",attrs:{model:e.feedbackForm,rules:e.rules,"inline-message":!0}},[a("el-form-item",{attrs:{prop:"rating"}},[a("el-radio-group",{staticClass:"feedback_rating",model:{value:e.feedbackForm.rating,callback:function(t){e.$set(e.feedbackForm,"rating",t)},expression:"feedbackForm.rating"}},e._l(e.ratingList,function(t,i){return a("div",{key:i},[a("el-radio",{staticClass:"rating_radio",attrs:{label:t.id}},[e._v(e._s(t.title))])],1)}),0)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitFeedback("feedbackForm")}}},[e._v("SUBMIT FEEDBACK")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("CANCEL")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")({name:"FeedBack",props:{op:{gid:"",dialogW:"400px",isShowFeedBack:!0}},data:function(){return{isShowFeedBack:!0,ratingList:[{id:1,title:"It has bugs",order:0,status:1},{id:2,title:"I just don't like it",order:0,status:1},{id:3,title:"It doesn't load",order:0,status:1},{id:4,title:"Other",order:0,status:1}],feedbackForm:{rating:""},rules:{rating:[{required:!0,message:"Please select feedback item",trigger:"change"}]}}},computed:{},methods:{cancel:function(){this.$emit("feed-back",{ac:0})},submitFeedback:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a={gid:t.op.gid,action:2};a.reason=t.feedbackForm.rating,t.$emit("feed-back",{ac:1,data:a})})}},created:function(){},mounted:function(){this.isShowFeedBack=this.op.isShowFeedBack}},i,!1,function(e){a("2Nt5")},"data-v-4813f7de",null);t.default=o.exports}});