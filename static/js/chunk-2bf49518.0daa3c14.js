(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf49518"],{4102:function(t,e,s){},"9bf8":function(t,e,s){"use strict";s("4102")},"9e4a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t.modelShow?s("div",{staticClass:"find"},[s("div",{staticClass:"iforget_cont"},[t._m(0),t._v(" "),s("div",{staticClass:"i_mod"},[s("div",{staticClass:"form_item"},[s("el-form",{ref:"forgetForm",staticClass:"forget-form",attrs:{model:t.forgetForm,rules:t.rules,autocomplete:"off","label-position":"left"}},[s("el-form-item",{attrs:{prop:"account",label:"登录名:"}},[s("el-input",{ref:"account",staticStyle:{width:"28%"},attrs:{placeholder:"请输入账号",autocomplete:"off",name:"account",type:"text"},model:{value:t.forgetForm.account,callback:function(e){t.$set(t.forgetForm,"account",e)},expression:"forgetForm.account"}})],1),t._v(" "),s("el-form-item",{staticClass:"code-input",attrs:{prop:"code",label:"验证码:"}},[s("el-input",{ref:"code",staticStyle:{width:"60%"},attrs:{placeholder:"验证码",autocomplete:"off",name:"code",type:"text"},model:{value:t.forgetForm.code,callback:function(e){t.$set(t.forgetForm,"code",e)},expression:"forgetForm.code"}})],1),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isCaptcha,expression:"isCaptcha"}],staticClass:"code-image",attrs:{src:t.imageCode,alt:"codeImage"},on:{click:t.getCodeImage}})],1)],1),t._v(" "),s("div",{staticClass:"btn_mod"},[s("a",{staticClass:"W_btn_a",attrs:{id:"btn",href:"javascript:;"},on:{click:t.VerifyNow}},[t._v("立即验证")])])])])]):t._e(),t._v(" "),t.modelOne?s("div",{staticClass:"process"},[s("div",{staticClass:"iforget_cont"},[t._m(1),t._v(" "),s("div",{staticClass:"i_mod"},[s("div",{staticClass:"form_mod"},[s("p",{staticClass:"text1"},[t._v("请确定手机号并进行下一步操作")]),t._v(" "),s("p",{staticClass:"text2"},[t._v(t._s(this.mobile))]),t._v(" "),s("div",{staticClass:"btn_mod"},[s("a",{staticClass:"W_btn_a",attrs:{id:"btn",href:"javascript:;"},on:{click:t.next_one}},[t._v("下一步")])])])])])]):t._e(),t._v(" "),t.modelOnes?s("div",{staticClass:"processone"},[s("div",{staticClass:"iforget_cont"},[t._m(2),t._v(" "),s("div",{staticClass:"i_mod"},[s("div",{staticClass:"form_mod"},[s("p",{staticClass:"text1"},[t._v("请通过"+t._s(this.mobile)+"手机号获取6位数字验证码")]),t._v(" "),s("div",{staticClass:"verification"},[s("span",[t._v("手机号：")]),s("span",[t._v(t._s(this.mobile))]),t._v(" "),s("p",[s("span",[t._v("验证码：")]),t._v(" "),s("span",[s("el-input",{staticStyle:{width:"38%"},attrs:{type:"text",placeholder:"6位数字验证码"},model:{value:t.userPhoneCode,callback:function(e){t.userPhoneCode=e},expression:"userPhoneCode"}})],1),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticStyle:{"background-color":"#FE3010",color:"white"},on:{click:t.sendCode}},[t._v("发送验证码")]),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticStyle:{"background-color":"lightgrey"},attrs:{disabled:""}},[t._v(t._s(t.secondsCount)+"秒后重发")])],1)]),t._v(" "),s("div",{staticClass:"btn_mod"},[s("a",{staticClass:"W_btn_a",attrs:{id:"btn",href:"javascript:;"},on:{click:t.next_ones}},[t._v("下一步")])])])])])]):t._e(),t._v(" "),t.modelTwo?s("div",{staticClass:"processtwo"},[s("div",{staticClass:"iforget_cont"},[t._m(3),t._v(" "),s("div",{staticClass:"i_mod"},[s("div",{staticClass:"form_mod"},[s("div",{staticClass:"context"},[s("el-form",{ref:"pwdForm",staticClass:"pwd-form",attrs:{model:t.pwdForm,rules:t.rule,autocomplete:"off","label-position":"left"}},[s("el-form-item",{staticStyle:{"margin-bottom":"15px","margin-left":"36px"},attrs:{label:"登录名："}},[s("span",[t._v(t._s(this.mobile))])]),t._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"15px"},attrs:{prop:"password",label:"设置新密码："}},[s("el-input",{staticStyle:{width:"68%"},attrs:{placeholder:"请输入新的密码",type:"password"},model:{value:t.pwdForm.password,callback:function(e){t.$set(t.pwdForm,"password",e)},expression:"pwdForm.password"}})],1),t._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"15px"},attrs:{prop:"confirmPassword"}},[s("p",[s("el-input",{staticStyle:{width:"68%","margin-left":"107px"},attrs:{placeholder:"请再次输入密码",type:"password"},model:{value:t.pwdForm.confirmPassword,callback:function(e){t.$set(t.pwdForm,"confirmPassword",e)},expression:"pwdForm.confirmPassword"}})],1)])],1)],1),t._v(" "),s("div",{staticClass:"btn_mod"},[s("a",{staticClass:"W_btn_a",attrs:{id:"btn",href:"javascript:;"},on:{click:t.submit}},[t._v("确定")])])])])])]):t._e(),t._v(" "),t.modelThree?s("div",{staticClass:"processThree"},[s("div",{staticClass:"iforget_cont"},[t._m(4),t._v(" "),s("div",{staticClass:"i_mod"},[s("div",{staticClass:"form_mod"},[t._m(5),t._v(" "),s("p",{staticClass:"text1"},[t._v("密码设置成功，您的账号密码也同时进行了修改！")]),t._v(" "),s("div",{staticClass:"btn_mod"},[s("a",{staticClass:"W_btn_a",attrs:{id:"btn",href:"javascript:;"},on:{click:t.logins}},[t._v("立即登录")])])])])])]):t._e()])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i_top"},[s("h3",{staticClass:"title"},[t._v("找回账号密码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i_top"},[s("h3",{staticClass:"title"},[t._v("通过短信验证码找回")]),t._v(" "),s("div",{staticClass:"process_mod"},[s("div",{staticClass:"process_img"}),t._v(" "),s("p",{staticClass:"process_font"},[s("span",[t._v("验证手机号")]),t._v(" "),s("span",{staticClass:"center"},[t._v("设置密码")]),t._v(" "),s("span",[t._v("完成")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i_top"},[s("h3",{staticClass:"title"},[t._v("通过短信验证码找回")]),t._v(" "),s("div",{staticClass:"process_mod"},[s("div",{staticClass:"process_img"}),t._v(" "),s("p",{staticClass:"process_font"},[s("span",[t._v("验证手机号")]),t._v(" "),s("span",{staticClass:"center"},[t._v("设置密码")]),t._v(" "),s("span",[t._v("完成")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i_top"},[s("h3",{staticClass:"title"},[t._v("通过短信验证码找回")]),t._v(" "),s("div",{staticClass:"process_mod"},[s("div",{staticClass:"process_img process_img_two"}),t._v(" "),s("p",{staticClass:"process_font"},[s("span",[t._v("验证手机号")]),t._v(" "),s("span",{staticClass:"center"},[t._v("设置密码")]),t._v(" "),s("span",[t._v("完成")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i_top"},[s("h3",{staticClass:"title"},[t._v("通过短信验证码找回")]),t._v(" "),s("div",{staticClass:"process_mod"},[s("div",{staticClass:"process_img process_img_three"}),t._v(" "),s("p",{staticClass:"process_font"},[s("span",[t._v("验证手机号")]),t._v(" "),s("span",{staticClass:"center"},[t._v("设置密码")]),t._v(" "),s("span",[t._v("完成")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"center","line-height":"20px"},attrs:{align:"center"}},[s("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"35px",color:"rgb(140,213,46)","text-align":"center"}})])}],i=s("b0af"),r=s("ed08"),n=s("27ae");function c(t){return v(t)||m(t)||d(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,e){if(t){if("string"===typeof t)return u(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?u(t,e):void 0}}function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function v(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var p={name:"App",data:function(){var t=this;return{userPhoneCode:"",secondsCount:0,isShow:!0,modelShow:!0,modelOne:!1,modelOnes:!1,modelTwo:!1,modelThree:!1,key:"",forgetForm:{account:"",code:"",key:Object(r["d"])(24,16),tenant:"",tenantView:"0000"},pwdForm:{password:"",confirmPassword:"",id:"3"},mobile:"",isCaptcha:!0,imageCode:"",rules:{account:{required:!0,message:this.$t("rules.require"),trigger:"blur"},code:{required:!0,validator:function(e,s,a){t.isCaptcha&&""===s?a("验证码不能为空"):a(),a()},trigger:"blur"}},rule:{password:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:6,max:20,message:this.$t("rules.range6to20"),trigger:"blur"}],confirmPassword:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{validator:function(e,s,a){t.pwdForm.password!==s?a(t.$t("tips.notEqual")):a()},trigger:"blur"}]}}},created:function(){this.getCodeImage()},mounted:function(){},methods:{getCodeImage:function(){var t=this;i["a"].getCaptcha(this.forgetForm.key).then((function(e){var s=e.data;return s.byteLength<=100&&t.$message({message:t.$t("tips.systemError"),type:"error"}),"data:image/png;base64,"+btoa(new Uint8Array(s).reduce((function(t,e){return t+String.fromCharCode(e)}),""))})).then((function(e){t.imageCode=e})).catch((function(e){-1!==e.toString().indexOf("429")?t.$message({message:t.$t("tips.tooManyRequest"),type:"error"}):t.$message({message:t.$t("tips.getCodeImageFailed"),type:"error"})}))},VerifyNow:function(){var t=this;this.forgetForm.tenant="".concat(n["Base64"].encode(this.forgetForm.tenantView)),this.$store.commit("account/setTenant",this.forgetForm.tenant),this.$refs.forgetForm.validate((function(e){if(!e)return!1;i["a"].getcheckPhone(t.forgetForm).then((function(e){var s=e.data;if(0==s.code){t.key=s.data.mobile,t.pwdForm.id=s.data.id,t.modelShow=!1,t.modelOne=!0;var a=c(s.data.mobile);return a.map((function(e,s){t.mobile+=s>2&&s<7?"*":e})),t.mobile}})).finally((function(){return t.loading=!1}))}))},next_one:function(){this.modelOne=!1,this.modelOnes=!0},next_ones:function(){var t=this;i["a"].getcheckSMSCode({key:this.key,code:this.userPhoneCode}).then((function(e){var s=e.data;0==s.code?(t.$message.success(s.msg),t.modelOnes=!1,t.modelTwo=!0):t.$message.error(s.msg)})).finally((function(){return t.loading=!1}))},sendCode:function(){var t=this;i["a"].getsendSMS({key:this.key}).then((function(e){var s=e.data;if(0==s.code){t.$message.success(s.msg);var a=t;console.log(a),a.secondsCount=60,a.isShow=!1;var o=setInterval((function(){a.secondsCount--,a.secondsCount<=0&&(clearInterval(o),a.isShow=!0)}),1e3)}else t.$message.error(s.msg)})).finally((function(){return t.loading=!1}))},submit:function(){var t=this;this.forgetForm.tenant="".concat(n["Base64"].encode(this.forgetForm.tenantView)),this.$store.commit("account/setTenant",this.forgetForm.tenant),this.$refs.pwdForm.validate((function(e){if(!e)return!1;i["a"].getreset(t.pwdForm).then((function(e){var s=e.data;s.isSuccess&&(t.$message({message:t.$t("tips.updateSuccess"),type:"success"}),t.modelTwo=!1,t.modelThree=!0)}))}))},logins:function(){this.$router.push("/login")}}},_=p,f=(s("9bf8"),s("2877")),h=Object(f["a"])(_,a,o,!1,null,"0f0a1eaa",null);e["default"]=h.exports}}]);