webpackJsonp([1],{"+cgv":function(t,e){},"/OkD":function(t,e,s){"use strict";var o=s("Yipx"),a=s.n(o),i=s("PZ/o");var r=function(t){s("owK7")},n=s("VU/8")(a.a,i.a,!1,r,"data-v-20a0794d",null);e.default=n.exports},"2PFj":function(t,e){},"3MDh":function(t,e){},"3QF5":function(t,e){},"3f40":function(t,e){},"4qOc":function(t,e){},ArgX:function(t,e){},I83Q:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),a={data:()=>({showProjects:!1}),methods:{goTo(t){"share"==t&&(this.showProjects=!1),"morefun"==t&&(this.showProjects=!1),"calculator"==t&&(this.showProjects=!1)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("router-link",{staticClass:"nav-list-item",attrs:{to:"/home"}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),s("router-link",{staticClass:"nav-list-item",attrs:{to:"/projects"}},[t._v("Videos")]),t._v(" "),s("a",{staticClass:"nav-list-item",attrs:{id:"projects",href:"#"},on:{click:function(e){t.showProjects=!t.showProjects}}},[t._v("\n        Projects"),s("small",[t._v("☘")]),t._v(" "),t.showProjects?s("ul",{staticClass:"ul"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("☞"),e("a",{attrs:{href:"http://shenyu16.com:8081/#/",target:"blank"}},[this._v("Share Your Problems")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("☞"),e("a",{attrs:{href:"https://lishenyu16.github.io/morefun/#/main/dog",target:"blank"}},[this._v("More Fun")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("☞"),e("a",{attrs:{href:"https://lishenyu16.github.io/calculator",target:"blank"}},[this._v("Calculator")])])}]};var r=s("VU/8")(a,i,!1,function(t){s("3MDh")},"data-v-7e016f0a",null).exports,n=s("mtWM"),l=s.n(n),c=()=>l.a.create({baseURL:"http://54.193.249.19:3000"}),d={register:t=>c().post("register",t),login:t=>c().post("login",t),getProfile:()=>c().get("profile",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},u={getBlogs:()=>c().get("blogs"),addBlog:t=>c().post("blogs",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),getBlog:t=>c().get(`blogs/${t}`),editBlog:t=>c().put("blogs/edit-blog",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),deleteBlog:t=>c().delete(`blogs/${t}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),addBlogComment:t=>c().post("blogs/add-blog-comment",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),getNotice:()=>c().get("notice/getnotice"),editNotice:t=>c().post("notice/editnotice",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},m={data:()=>({isModalVisible:!1,input:""}),methods:{signout(){this.$store.commit("SET_USER",null),this.$store.commit("SET_TOKEN",null),this.$router.push("/login")},login(){this.$router.push("/login")},signup(){this.$router.push("/signup")},profile(){this.$router.push("/profile")},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},editNotice(){const t={content:this.input};u.editNotice(t).then(()=>{this.isModalVisible=!1,this.$notify({group:"foo",type:"success",title:"Scheduled Maintence Updated",duration:5e3,speed:1e3})}).catch(t=>{console.log(t)})}},computed:{user(){return this.$store.getters.currentUser},isLoggedIn(){return this.$store.getters.isLoggedIn},isLoggedInAdmin(){return!(!this.$store.getters.isLoggedIn||!this.$store.getters.currentUser.isAdmin)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topnav"},[t._m(0),t._v(" "),s("div",{staticClass:"setting"},[t.isLoggedIn?t._e():s("a",{on:{click:t.login}},[t._v("Sign In")]),t._v(" "),t.isLoggedIn?t._e():s("a",{on:{click:t.signup}},[t._v("Sign Up")]),t._v(" "),t.isLoggedIn?s("a",{on:{click:t.signout}},[t._v("Sign out")]):t._e(),t._v(" "),t.isLoggedIn?s("a",{on:{click:t.profile}},[t._v("Profile")]):t._e(),t._v(" "),t.isLoggedInAdmin?s("button",{staticClass:"btn-pencil",attrs:{type:"button"},on:{click:t.showModal}},[t._v("Notice")]):t._e()]),t._v(" "),s("transition",{attrs:{name:"modal-fade"}},[t.isModalVisible?s("div",{staticClass:"modal-backdrop",on:{click:t.closeModal}},[s("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"modal-header-title"},[t._v("\n                        Edit Notice\n                    ")]),t._v(" "),s("div",[s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("X")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"input-area"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"comment-input",attrs:{cols:"60",rows:"3",placeholder:"Write your message here..."},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.editNotice}},[t._v("Submit")])])])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"setting aboutme"},[e("a",{attrs:{href:"https://lishenyu16.github.io/aboutMe/"}},[this._v("About Me")])])}]};var p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"blog-footer"},[e("p",[this._v("© Copyright 2019 "),e("a",{attrs:{href:"www.shenyu16.com"}},[this._v("Shenyu")])])])}]};var g={components:{"app-header":s("VU/8")(m,h,!1,function(t){s("kPPC")},"data-v-c344f462",null).exports,"app-nav":r,"app-footer":s("VU/8")(null,p,!1,function(t){s("XaBH")},"data-v-645106c8",null).exports},created(){let t;u.getNotice().then(e=>{t=e.data.content,this.$notify({group:"foo",type:"warn",title:"Scheduled Maintence",text:t,duration:1e4,speed:1e3}),console.log(t)}),this.$store.dispatch("tryAutoLogin")},mounted(){l.a.get("https://ipinfo.io/").then(t=>{const e={ip:t.data.ip,city:t.data.city||null,region:t.data.region||null,country:t.data.country||null,time:new Date};l.a.post("http://54.193.249.19:3000/visitor",e).then(t=>{}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("app-header"),this._v(" "),e("app-nav"),this._v(" "),e("router-view"),this._v(" "),e("app-footer"),this._v(" "),e("notifications",{attrs:{group:"foo"}})],1)},staticRenderFns:[]};var _=s("VU/8")(g,v,!1,function(t){s("t22H")},"data-v-091f2705",null).exports,f=s("/ocq"),b=s("0xri"),y={components:{Clock:s.n(b).a},data(){return{clock:this.time,user:this.$store.getters.currentUser}},computed:{isLoggedIn(){return this.$store.getters.isLoggedIn},time(){let t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},time_status(){let t=(new Date).getHours();return t>=5&&t<12?"morning":t>=12&&t<17?"afternoon":"evening"}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"clock"},[s("clock",{attrs:{time:t.clock,border:"none",bg:"radial-gradient(circle, #ecffe5, #fffbe1, #38ff91)"}})],1),t._v(" "),s("div",{staticClass:"intro"},[t.isLoggedIn?s("div",[t._v("Good "+t._s(t.time_status)+" "),s("i",[t._v(t._s(t.user.username))]),t._v(" & welcome to my blog !")]):t._e(),t._v(" "),t.isLoggedIn?t._e():s("div",[t._v("Good "+t._s(t.time_status)+" & welcome to my blog !")]),s("br"),t._v(" "),s("div",[t._v("If you checked out the “About Me” page then you know my name is Shenyu.  Looking at the front page, you probably saw that \nthis is a computer science blog(or maybe some other articles about my life? lol).")]),s("br"),t._v(" "),s("div",[t._v("Glad you came by.  I wanted to welcome you and let you know I appreciate you spending time here at the blog very much.  \nEveryone is so busy and life moves pretty fast,  so I really do appreciate you taking time out of your busy day to check out\nmy blog. Thanks.")]),s("br"),t._v(" "),s("div",[t._v(" Another thing I will always appreciate is your feedback to the blog.  If you have any comments or suggestions I welcome them\nand would love to hear them.  Always.  Not that all criticism is a fun thing but I think honest criticism given in an honest\npositive manner is something we can all learn and grow from if we are open to hearing it.  I will always listen to your ideas.\nSo I do welcome your suggestions for the blog...")]),s("br"),t._v(" "),s("div",[t._v("Always.")]),s("br"),t._v(" "),s("div",[t._v("I will always do my best to bring you content that will interest, inspire, motivate and maybe even have you walking away\nthinking about and seeing things in a different way than before you came.  I want to blog about more than just computer science\nand…  Life is so much more than that and I want to touch on everything because I think our lives are more than just sitting in front of screens.")]),t._v(" "),s("div",[t._v("This blog will always be changing because I am.  You are.  The world is.  So don’t get too comfortable.  I like to surprise\nfrom time to time, I just might throw you a curve ball every now and then.  😉")]),s("br"),t._v(" "),s("div",[t._v("Thanks for letting me,")]),s("br"),t._v(" "),s("div",[t._v("Shenyu 🙂")])])])},staticRenderFns:[]};var w=s("VU/8")(y,C,!1,function(t){s("wx/U")},"data-v-ce3c3cac",null).exports,k={data:()=>({email:"",password:"",error:!1}),methods:{onSubmit(){d.login({email:this.email,password:this.password}).then(t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("userId",t.data.userId),localStorage.setItem("email",t.data.email),localStorage.setItem("username",t.data.username),localStorage.setItem("expirationDate",t.data.expirationDate),this.$store.commit("SET_USER",{username:t.data.username,userId:t.data.userId,email:t.data.email,isAdmin:t.data.isAdmin}),this.$store.commit("SET_TOKEN",t.data.token),this.$store.dispatch("setLogoutTimer"),this.$router.push("/")}).catch(t=>{401==t.response.status?this.error=!0:alert("An internal error occured, please try again")})}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.error?t._e():s("h2",[t._v("Please sign in")]),t._v(" "),t.error?s("h2",{staticClass:"error"},[t._v("Login input is incorrect!")]):t._e(),t._v(" "),s("div",{staticClass:"credentials"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",required:"",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn-signin",attrs:{type:"submit"}},[t._v("Sign In")])])])},staticRenderFns:[]};var $=s("VU/8")(k,I,!1,function(t){s("I83Q")},"data-v-a61b2236",null).exports,S={data:()=>({username:"",email:"",password:"",confirm_pw:"",error:null,bad_pw:!1}),methods:{register(){d.register({username:this.username,email:this.email,password:this.password}).then(t=>{this.$router.push("/login")}).catch(t=>{
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(t.response.status),console.log(t.response),400==t.response.status?this.error=t.response.data.error:401==t.response.status?this.error=t.response.data.message:alert("Internal error occured, please try again")})}},computed:{unmatch(){return this.password!=this.confirm_pw},invalid_pw(){return this.password.length<=5},disabled(){return!(!this.unmatch&&!this.invalid_pw)}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("h2",[t._v("Register")]),t._v(" "),s("div",{staticClass:"credentials"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",required:"",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:{confirm_pw:t.invalid_pw},attrs:{type:"password",required:"",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",{attrs:{for:"password"}},[t._v("Confirm Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirm_pw,expression:"confirm_pw"}],class:{confirm_pw:t.unmatch},attrs:{type:"password",required:"",autofocus:""},domProps:{value:t.confirm_pw},on:{input:function(e){e.target.composing||(t.confirm_pw=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"error",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),t.unmatch?s("div",{staticClass:"error"},[t._v("Passwords dont't match")]):t._e(),t._v(" "),t.invalid_pw?s("div",{staticClass:"error"},[t._v("Passwords must be at least 6 characters")]):t._e(),t._v(" "),s("button",{staticClass:"btn-signup",attrs:{type:"submit",disabled:t.disabled}},[t._v("Sign Up")])])])},staticRenderFns:[]};var E=s("VU/8")(S,U,!1,function(t){s("aXV8")},"data-v-49368556",null).exports,j={props:["blog"],methods:{goToDetail(t){this.$store.commit("CURRENT_BLOG",t),this.$router.push({name:"blogdetail",params:{_id:t._id}})}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-brief",on:{click:function(e){t.goToDetail(t.blog)}}},[s("div",{staticClass:"card-header"},[s("h3",[t._v(t._s(t.blog.title))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text",attrs:{id:"blog-brief"},domProps:{innerHTML:t._s(t.blog.brief)}}),t._v(" "),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v(t._s(t.blog.date))])])])])},staticRenderFns:[]};var x=s("VU/8")(j,P,!1,function(t){s("qZTC")},"data-v-41e751d6",null).exports,M={mounted(){u.getBlogs().then(t=>{this.$store.dispatch("setBlogs",t.data)})},components:{blogBrief:x},computed:{blogs(){return this.$store.getters.blogs},isLoggedInAdmin(){return!(!this.$store.getters.isLoggedIn||!this.$store.getters.currentUser.isAdmin)}}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{role:"main"}},[e("div",{staticClass:"card-columns"},[this._l(this.blogs,function(t,s){return e("blog-brief",{key:t._id,staticClass:"card",attrs:{blog:t}})}),this._v(" "),this.isLoggedInAdmin?e("div",{staticClass:"card"},[e("div",{staticClass:"add-blog"},[e("h3",[e("router-link",{attrs:{to:"/addblog"}},[e("a",[this._v("Add Blog")])])],1)])]):this._e()],2)])},staticRenderFns:[]};var T=s("VU/8")(M,L,!1,function(t){s("pc9B")},"data-v-47116932",null).exports,B=s("y68C"),R={components:{RadialMenu:B.RadialMenu,RadialMenuItem:B.RadialMenuItem},created(){u.getBlog(this.$route.params._id).then(t=>{this.id=t.data._id,this.title=t.data.title,this.contents=t.data.contents,this.date=t.data.date,this.comments=t.data.comments,this.imgURL=t.data.imgURL}).catch(t=>{404==t.response.status?(alert("Could not find this blog!"),this.$router.push("/blog")):(alert("Internal error occured, please try again"),this.$notify({group:"foo",type:"error",title:"Internal error occured, please try again",duration:1e4,speed:1e3}))})},data:()=>({isModalVisible:!1,input:"",id:null,title:null,contents:null,date:null,comments:null,imgURL:null,items:["Like","Share"],adminItems:["Edit","Like","Share","Delete"],lastClicked:"Operations"}),computed:{today(){let t=new Date,e=t.getDate(),s=t.getMonth()+1,o=t.getFullYear();return e<10&&(e="0"+e),s<10&&(s="0"+s),s+"/"+e+"/"+o},isLoggedInAdmin(){return!(!this.$store.getters.isLoggedIn||!this.$store.getters.currentUser.isAdmin)}},methods:{showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},addComment(){if(!this.$store.getters.currentUser)return confirm("You are not logged in or authentication expired, log in now?")?this.$router.replace("/login"):void 0;const t={userId:this.$store.getters.currentUser.userId||null,username:this.$store.getters.currentUser.username||null,blogId:this.id,comment:this.input,date:this.today};u.addBlogComment(t).then(t=>{this.$store.commit("CURRENT_BLOG",t.data),this.isModalVisible=!1,this.$notify({group:"foo",type:"success",title:"New comment has been posted!",duration:1e4,speed:1e3}),this.input="",this.comments=t.data.comments}).catch(t=>{401==t.response.status&&confirm("Your authentication expired, log in now?")&&this.$router.replace("/login"),404==t.response.status?(alert("Blog Not Found!"),this.$router.replace("/blog")):this.$notify({group:"foo",type:"error",title:"Internal error occured, please try again",duration:1e4,speed:1e3})})},edit(){this.$router.push("/editblog")},remove(){confirm("Delete this blog?")&&u.deleteBlog(this.id).then(()=>{this.$notify({group:"foo",type:"success",title:"Blog is removed!",duration:1e4,speed:1e3}),this.$router.replace("/blog")}).catch(t=>{401==t.response.status?(alert("Your authentication expired, please log in"),this.$router.replace("/login")):403==t.response.status?(alert("Unauthorized operation"),this.$router.replace("/home")):404==t.response.status?(alert("Blog Not Found!"),this.$router.replace("/blog")):alert("An internal error occured, please try again")})},handleClick(t){if("Edit"==t)this.edit();else if("Delete"==t)this.remove();else if("Comment"!=t)return}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-detail"},[s("div",{staticClass:"container"},[s("h1",{staticStyle:{"text-shadow":"4px 4px 8px blue"}},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"date"},[s("small",[t._v("Last modified on "+t._s(t.date))])]),t._v(" "),s("div",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.contents)}})]),t._v(" "),s("div",{staticClass:"container"},[s("div",[s("radial-menu",{staticStyle:{margin:"0 auto","background-color":"white"},attrs:{itemSize:50,radius:120,"angle-restriction":180}},t._l(t.isLoggedInAdmin?t.adminItems:t.items,function(e,o){return s("radial-menu-item",{key:o,staticStyle:{"background-color":"orange"},on:{click:function(){return t.handleClick(e)}}},[s("span",[t._v(t._s(e))])])})),t._v(" "),s("div",{staticStyle:{color:"rgba(0,0,0,0.6)","margin-top":"16px"}},[t._v(t._s(t.lastClicked))])],1)]),t._v(" "),s("transition",{attrs:{name:"modal-fade"}},[t.isModalVisible?s("div",{staticClass:"modal-backdrop",on:{click:t.closeModal}},[s("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"modal-header-title"},[t._v("\n                        Write your comment here...\n                    ")]),t._v(" "),s("div",[s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("X")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"input-area"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"comment-input",attrs:{cols:"60",rows:"3",placeholder:"Write your message here..."},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.addComment}},[t._v("Submit")])])])]):t._e()]),t._v(" "),s("div",{staticClass:"comment-area"},[s("div",{staticClass:"comments-list-header"},[s("div",{staticClass:"comment-area-title"},[t._v("\n                What is on your mind?\n            ")]),t._v(" "),s("div",{staticClass:"comment-area-button"},[s("button",{staticClass:"btn-pencil",attrs:{type:"button"},on:{click:t.showModal}},[t._v("✎")])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"comments-list"},t._l(t.comments,function(e){return s("ul",{staticClass:"comments-list-ul"},[s("div",{staticClass:"user-date"},[s("div",{staticClass:"user-date-user"},[t._v(t._s(e.username))]),t._v(" "),s("div",{staticClass:"user-date-date"},[t._v(t._s(e.date))])]),t._v(" "),s("li",{staticClass:"comments-list-item"},[t._v("\n                    "+t._s(e.comment)+"\n                ")]),t._v(" "),s("hr")])}))])],1)},staticRenderFns:[]};var N=s("VU/8")(R,A,!1,function(t){s("VLP5")},"data-v-44419923",null).exports;s("V8mf");const V=[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image"],["clean"]];var D={data:()=>({title:"",contents:"",brief:"",comments:[],imgURL:null,editorOption:{placeholder:"",theme:"snow",modules:{toolbar:{container:V,handlers:{image:function(t){t?document.querySelector(".avatar-uploader input").click():this.quill.format("image",!1)}}}}}}),computed:{today(){let t=new Date,e=t.getDate(),s=t.getMonth()+1,o=t.getFullYear();return e<10&&(e="0"+e),s<10&&(s="0"+s),s+"/"+e+"/"+o}},methods:{onEditorChange({quill:t,html:e,text:s}){if(s.length<100)this.brief=s;else{const t=s.split(""),e=[];for(let s=0;s<100;s++)e.push(t[s]);this.brief=e.join("")}},addBlog(){const t={title:this.title,contents:this.contents,date:this.today,brief:this.brief,comments:this.comments,imgURL:this.imgURL};u.addBlog(t).then(e=>{console.log("res status: ",e.status),this.$store.dispatch("addBlog",t).then(()=>{this.$router.replace("/blog")})}).catch(t=>{401==t.response.status?(alert("Your authentication expired, plz login"),console.log("Not authenticated operation, plz login"),this.$router.replace("/login")):403==t.response.status?alert("You have no authorization"):alert("Internal error occured, please try again")})}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title-input",attrs:{type:"text",name:"title",placeholder:"Please enter title here"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"quill"},[s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{change:function(e){t.onEditorChange(e)}},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1),t._v(" "),s("div",{staticClass:"submit"},[s("button",{staticClass:"btn-submit",on:{click:t.addBlog}},[t._v("Save")])])])},staticRenderFns:[]};var F=s("VU/8")(D,O,!1,function(t){s("vqMJ")},"data-v-79c389e6",null).exports;const q=[["bold","italic","underline","strike"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image"],["clean"]];var z={data(){return{blog:this.$store.getters.currentBlog,title:this.$store.getters.currentBlog.title,contents:this.$store.getters.currentBlog.contents,brief:this.$store.getters.currentBlog.brief,comments:this.$store.getters.currentBlog.comments,imgURL:this.$store.getters.currentBlog.imgURL,editorOption:{placeholder:"",theme:"snow",modules:{toolbar:{container:q,handlers:{image:function(t){t?document.querySelector(".avatar-uploader input").click():this.quill.format("image",!1)}}}}}}},methods:{onEditorChange({quill:t,html:e,text:s}){if(s.length<100)this.brief=s;else{const t=s.split(""),e=[];for(let s=0;s<100;s++)e.push(t[s]);this.brief=e.join("")}},save(){const t={_id:this.blog._id,title:this.title,contents:this.contents,date:this.today,brief:this.brief,comments:this.comments,imgURL:this.imgURL};u.editBlog(t).then(e=>{this.$store.commit("CURRENT_BLOG",t),this.$router.replace("/blogdetail/"+this.blog._id)}).catch(t=>{401==t.response.status&&(alert("Your authentication expired, please log in"),this.$router.replace("/login")),403==t.response.status&&(alert("Unauthorized operation"),this.$router.replace("/home")),404==t.response.status?(alert("Blog Not Found!"),this.$router.replace("/blog")):alert("An internal error occured, please try again")})}},computed:{today(){let t=new Date,e=t.getDate(),s=t.getMonth()+1,o=t.getFullYear();return e<10&&(e="0"+e),s<10&&(s="0"+s),s+"/"+e+"/"+o}}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title-input",attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"quill"},[s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{change:function(e){t.onEditorChange(e)}},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1),t._v(" "),s("div",{staticClass:"submit"},[s("button",{staticClass:"btn-submit",on:{click:t.save}},[t._v("Save")])])])},staticRenderFns:[]};var H=s("VU/8")(z,Y,!1,function(t){s("2PFj")},"data-v-1147c1ed",null).exports,G={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"background"}),this._v(" "),e("h1",[this._v("Life Style")])])}]};var K=s("VU/8")({},G,!1,function(t){s("iuBj")},"data-v-efca57fa",null).exports,X=s("/OkD"),J={getProjects:()=>c().get("projects"),getProject:t=>c().get(`projects/${t}`),addProject:t=>c().post("projects/add-project",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),deleteProject:t=>c().delete(`projects/${t}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}})},W={props:["project"],data:()=>({isModalVisible:!1,playerVars:{origin:window.location.origin}}),methods:{playVideo(){this.player.playVideo()},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},deleteProject(){confirm("Remove this project?")&&J.deleteProject(this.project._id).then(t=>{this.$notify({group:"foo",type:"error",title:"This project has been removed successfully!",duration:1e4,speed:1e3}),this.closeModal();const e=this.$store.getters.projects.filter(t=>t._id!=this.project._id);this.$store.commit("SET_PROJECTS",e)}).catch(t=>{console.log("err:",t),401==t.response.status?(alert("Your authentication expired, please log in"),this.$router.replace("/login")):403==t.response.status?(alert("Unauthorized operation"),this.$router.replace("/home")):404==t.response.status?(alert("Project Not Found!"),this.$router.replace("/blog")):alert("An internal error occured, please try again")})},goToSource(){return this.project.srcCode}},computed:{isSrcUrlNull(){return"null"==this.project.srcUrl},isLoggedInAdmin(){return!(!this.$store.getters.isLoggedIn||!this.$store.getters.currentUser.isAdmin)},player(){return this.$refs.youtube.player}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("div",{staticClass:"title-bar"},[s("div",{staticClass:"project-title"},[t._v(t._s(t.project.title))]),t._v(" "),s("div",{staticClass:"project-info",on:{click:t.showModal}},[t._v("ⓘ")])]),t._v(" "),s("transition",{attrs:{name:"modal-fade"}},[t.isModalVisible?s("div",{staticClass:"modal-backdrop",on:{click:t.closeModal}},[s("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"modal-header-title"},[t._v("\n                        "+t._s(t.project.title)+"\n                    ")]),t._v(" "),s("div",[s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("X")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[t._v(" \n                    "+t._s(t.project.desc)+"\n                ")]),t._v(" "),s("div",{staticClass:"modal-footer"},[t.isSrcUrlNull?t._e():s("a",{attrs:{href:t.project.srcUrl,target:"_blank"}},[t._v("Source Code")]),t._v(" "),s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Close")]),t._v(" "),t.isLoggedInAdmin?s("button",{staticClass:"btn-red",attrs:{type:"button"},on:{click:t.deleteProject}},[t._v("Delete")]):t._e()])])]):t._e()]),t._v(" "),s("div",{staticClass:"youtube"},[s("youtube",{ref:"youtube",attrs:{"video-id":t.project.youtubeId,fitParent:!0,resize:!0,resizeDelay:0}})],1)],1)},staticRenderFns:[]};var Z={components:{"project-panel":s("VU/8")(W,Q,!1,function(t){s("ArgX")},"data-v-c62ca858",null).exports},data:()=>({isModalVisible:!1,title:"",youtubeId:"",desc:"",srcUrl:""}),created(){J.getProjects().then(t=>{this.$store.dispatch("setProjects",t.data)}).catch(t=>{alert("Internal error occured, please try again")})},methods:{showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},addProject(){const t={title:this.title,youtubeId:this.youtubeId,desc:this.desc,srcUrl:this.srcUrl};J.addProject(t).then(t=>{this.$store.dispatch("addProject",t.data.project).then(()=>{this.closeModal(),this.$router.replace("/projects")})}).catch(t=>{401==t.response.data.status?(alert("Your authentication expired, plz login"),console.log("Not authenticated operation, plz login"),this.$router.replace("/login")):403==t.response.data.status?alert("You have no authorization"):alert("Internal error occured, please try again")})}},computed:{projects(){return this.$store.getters.projects},isLoggedInAdmin(){return!(!this.$store.getters.isLoggedIn||!this.$store.getters.currentUser.isAdmin)},addDisabled(){return""==this.title.trim()||""==this.youtubeId.trim()}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[s("div",{staticStyle:{width:"100%"}},[t.isLoggedInAdmin?s("button",{staticClass:"btn-green",on:{click:t.showModal}},[t._v("Add Project")]):t._e()]),t._v(" "),t._m(0),t._v(" "),t._l(t.projects,function(t,e){return s("project-panel",{key:t._id,attrs:{project:t}})}),t._v(" "),s("transition",{attrs:{name:"modal-fade"}},[t.isModalVisible?s("div",{staticClass:"modal-backdrop",on:{click:t.closeModal}},[s("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"modal-body-input",attrs:{type:"text",placeholder:"enter title here"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.youtubeId,expression:"youtubeId"}],staticClass:"modal-body-input",attrs:{type:"text",placeholder:"enter youtubeId here"},domProps:{value:t.youtubeId},on:{input:function(e){e.target.composing||(t.youtubeId=e.target.value)}}}),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"modal-body-input-textarea",attrs:{placeholder:"enter description here"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.srcUrl,expression:"srcUrl"}],staticClass:"modal-body-input",attrs:{type:"text",placeholder:"enter source URL here"},domProps:{value:t.srcUrl},on:{input:function(e){e.target.composing||(t.srcUrl=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("Close")]),t._v(" "),s("button",{class:{"btn-grey":t.addDisabled,"btn-green":!t.addDisabled},attrs:{type:"button",disabled:t.addDisabled},on:{click:t.addProject}},[t._v("Submit")])])])]):t._e()])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brief"},[this._v("\n        Below are the demo videos of my perojects I have worked on. "),e("br"),this._v("\n        They are hosted on github pages, to get the source code, simply click on"),e("b",[this._v(" ⓘ ")]),this._v(" in the title bar of each panel. "),e("br"),this._v("\n        I could have also host them on AWS like this website, but I have to pay for EC2 fee, after some considerations,\n        I decide to just put them on github pages as it's free and most of my projects will be static websites.\n    ")])}]};var et=s("VU/8")(Z,tt,!1,function(t){s("oUtn")},"data-v-22efc75e",null).exports,st={data(){return{user:this.$store.getters.currentUser,isLoggedIn:this.$store.getters.isLoggedIn}},mounted(){},computed:{}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("h1",[this._v("Hi, "+this._s(this.user.username))]),this._v(" "),e("h2",[this._v("Your email: "+this._s(this.user.email))])])},staticRenderFns:[]};var at=s("VU/8")(st,ot,!1,function(t){s("3QF5")},"data-v-3a998d84",null).exports;o.default.use(f.a);var it=new f.a({mode:"history",routes:[{path:"/",component:w},{path:"/home",component:w},{path:"/blog",component:T},{path:"/blogdetail/:_id",name:"blogdetail",component:N},{path:"/addblog",component:F},{path:"/editblog",component:H},{path:"/life",component:K},{path:"/cooking",component:X.default},{path:"/projects",component:et},{path:"/login",component:$},{path:"/signup",component:E},{path:"/profile",component:at},{path:"*",component:w}]}),rt=s("NYxO");const nt={blogs:[],blog:{}},lt={UPDATE_BLOGS(t,e){t.blogs.push(e)},CURRENT_BLOG(t,e){t.blog=e},UPDATE_COMMENTS(t,e){},EDIT_BLOG(t,e){}},ct={addBlog({state:t,commit:e},s){alert("New Blog has been posted!"),e("UPDATE_BLOGS",s)},setBlogs({state:t,commit:e},s){t.blogs=s}};var dt={state:nt,mutations:lt,actions:ct,getters:{blogs:()=>nt.blogs,currentBlog:()=>nt.blog}};const ut={projects:[],project:{}};var mt={state:ut,mutations:{UPDATE_PROJECTS(t,e){t.projects.push(e)},SET_PROJECTS(t,e){t.projects=e}},actions:{addProject({state:t,commit:e},s){alert("New project is added!"),e("UPDATE_PROJECTS",s)},setProjects({state:t,commit:e},s){t.projects=s}},getters:{projects:()=>ut.projects,project:()=>ut.project}};var ht={state:{},mutations:{},actions:{},getters:{}};const pt={token:null,user:null,isUserLoggedIn:!1};var gt={state:pt,mutations:{SET_TOKEN(t,e){t.token=e,e?t.isUserLoggedIn=!0:(t.isUserLoggedIn=!1,localStorage.clear())},SET_USER(t,e){t.user=e,e?t.isUserLoggedIn=!0:(localStorage.clear(),t.isUserLoggedIn=!1)}},actions:{setToken:({commit:t},e)=>t("SET_TOKEN",e),setUser:({commit:t},e)=>t("SET_USER",e),tryAutoLogin({commit:t,dispatch:e}){const s=localStorage.getItem("token"),o=localStorage.getItem("userId"),a=localStorage.getItem("username"),i=localStorage.getItem("email");return s?localStorage.getItem("expirationDate")<=(new Date).getTime()?(localStorage.clear(),t("SET_USER",null),void t("SET_TOKEN",null)):(t("SET_USER",{username:a,userId:o,email:i,isAdmin:!1}),void t("SET_TOKEN",s)):(t("SET_USER",null),void t("SET_TOKEN",null))},setLogoutTimer({commit:t}){setTimeout(()=>{console.log("Auto log out from timer"),t("SET_USER",null),t("SET_TOKEN",null),localStorage.clear(),it.push("/login")},36e5)}},getters:{currentUser:()=>pt.user,isLoggedIn:()=>pt.isUserLoggedIn}};o.default.use(rt.a);var vt=new rt.a.Store({modules:{blogModule:dt,commentModule:ht,userModule:gt,projectModule:mt},state:{},mutations:{},actions:{},getters:{}}),_t=s("G0J2"),ft=s.n(_t),bt=(s("3f40"),s("4qOc"),s("+cgv"),s("H5Ot")),yt=s.n(bt),Ct=s("CLX7"),wt=s.n(Ct);o.default.use(wt.a),o.default.use(yt.a),o.default.config.productionTip=!1,o.default.use(ft.a),new o.default({el:"#app",router:it,store:vt,components:{App:_},template:"<App/>"})},"PZ/o":function(t,e,s){"use strict";var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"})},staticRenderFns:[]};e.a=o},VLP5:function(t,e){},XaBH:function(t,e){},Yipx:function(t,e){},aXV8:function(t,e){},iuBj:function(t,e){},kPPC:function(t,e){},oUtn:function(t,e){},owK7:function(t,e){},pc9B:function(t,e){},qZTC:function(t,e){},t22H:function(t,e){},vqMJ:function(t,e){},"wx/U":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bc331659dbaa0db6a056.js.map