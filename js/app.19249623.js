(function(){"use strict";var t={7938:function(t,e,a){var o=a(5471),n=a(5668),r=function(){var t=this,e=t._self._c;return e(n.A,[e("mail-signature")],1)},i=[],s=a(3552),l=a(2520),c=a(6921),u=a(6930),d=a(5420),p=a(8160),m=a(37),g=function(){var t=this,e=t._self._c;return e(p.A,{staticClass:"backgroundGradient",attrs:{row:"",wrap:"","justify-center":"","align-center":"","px-6":"","py-15":""}},[e(c.A,{attrs:{xs12:"","d-block":""}},[e(d.A,{staticStyle:{margin:"auto"},attrs:{src:a(6522),width:"120px"}})],1),e(c.A,{staticClass:"formArea",attrs:{xs12:"",lg5:""}},[e(p.A,{attrs:{row:"",wrap:"","px-3":""}},[e(c.A,{staticClass:"signaturePrimaryText--text text-h6 font-weight-dark font-size: 24px",attrs:{xs12:"","pt-4":"","px-4":""}},[t._v(" Gerar assinatura ")]),e(c.A,{attrs:{xs6:"","py-6":""}},[e(s.A,{directives:[{name:"show",rawName:"v-show",value:t.photoAdded,expression:"photoAdded"}],staticClass:"photoButton",attrs:{color:"signaturePrimary"},on:{click:function(e){return t.removeImage()}}},[e(u.A,{attrs:{left:""}},[t._v(" mdi-delete ")]),t._v(" Remover foto ")],1),e(s.A,{directives:[{name:"show",rawName:"v-show",value:!t.photoAdded,expression:"!photoAdded"}],staticClass:"photoButton",attrs:{color:"signaturePrimary"},on:{click:function(e){return t.insertImage()}}},[e(u.A,{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v(" Adicionar foto ")],1),e(l.A,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileInput",attrs:{accept:"image/png, image/jpeg, image/bmp",label:"File input"},on:{change:function(e){return t.processImage()}},model:{value:t.uploadedImage,callback:function(e){t.uploadedImage=e},expression:"uploadedImage"}})],1),e(c.A,{attrs:{xs12:"",lg12:""}},[e(m.A,{attrs:{light:"",label:"Colaborador",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),e(c.A,{class:{"pr-2":this.$vuetify.breakpoint.lgAndUp},attrs:{xs12:"",lg6:""}},[e(m.A,{attrs:{light:"",label:"Ocupação",outlined:""},model:{value:t.ocupation,callback:function(e){t.ocupation=e},expression:"ocupation"}})],1),e(c.A,{class:{"pl-2":this.$vuetify.breakpoint.lgAndUp},attrs:{xs12:"",lg6:""}},[e(m.A,{attrs:{light:"",label:"Time",outlined:""},model:{value:t.team,callback:function(e){t.team=e},expression:"team"}})],1),e(c.A,{class:{"pr-2":this.$vuetify.breakpoint.lgAndUp},attrs:{xs12:"",lg6:""}},[e(m.A,{attrs:{light:"",label:"Celular",placeholder:"XX XXXXX-XXXX",outlined:""},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),e(c.A,{class:{"pl-2":this.$vuetify.breakpoint.lgAndUp},attrs:{xs12:"",lg6:""}},[e(m.A,{attrs:{light:"",label:"Teams",outlined:""},model:{value:t.communicationTool,callback:function(e){t.communicationTool=e},expression:"communicationTool"}})],1)],1)],1),e(c.A,{staticClass:"formArea",class:{"ml-4":this.$vuetify.breakpoint.lgAndUp,"mt-2":!this.$vuetify.breakpoint.lgAndUp},attrs:{xs12:"",lg3:"","py-16":"","mt-2":""}},[e(p.A,{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[e(c.A,{ref:"outputImg",style:t.brightStyle,attrs:{id:"outputImg",xs12:"","my-3":"","mx-10":""}},[e("table",{style:t.centerTableStyle,attrs:{id:"tableTag"}},[e("tr",[e("th",{staticStyle:{"background-color":"black","border-radius":"50%",display:"inline-flex"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.photoAdded,expression:"photoAdded"}],attrs:{src:t.base64InputedPhoto}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.photoAdded,expression:"!photoAdded"}],attrs:{src:t.base64BasePhoto}})]),e("th",[e("img",{attrs:{src:t.base64Src}})])]),e("tr",{staticStyle:{color:"#F5AE32","font-size":"24px","font-wieght":"bold"}},[e("td",{attrs:{colspan:"2"}},[t._v(" "+t._s(t.name)+" ")])]),e("tr",{staticStyle:{color:"#0D517F","font-size":"16px","font-wieght":"bold","text-align":"left"}},[e("td",{staticStyle:{"padding-right":"6px"}},[t._v(" "+t._s(t.ocupation)+" ")]),e("td",{staticStyle:{"padding-left":"6px"}},[t._v(" "+t._s(t.team)+" ")])]),e("tr",{staticStyle:{color:"#4E4E4E","font-size":"14px","font-wieght":"regular","text-align":"left"}},[e("td",{staticStyle:{"padding-right":"6px"}},[t._v(" "+t._s(t.phoneNumber)+" ")]),e("td",{staticStyle:{"padding-left":"6px"}},[t._v(" "+t._s(t.communicationTool)+" ")])])])]),e(c.A,{attrs:{xs12:"","text-center":""}},[e(p.A,{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[e(c.A,{attrs:{xs12:"",lg2:"","py-3":""}},[e(s.A,{staticClass:"photoButton",attrs:{fab:"",color:"signaturePrimary",small:""},on:{click:function(e){return t.changeBright()}}},[e(u.A,[t._v("mdi-brightness-6")])],1)],1),e(c.A,{attrs:{xs10:"",lg8:""}},[e(s.A,{staticClass:"photoButton",attrs:{block:"",color:"signaturePrimary"},on:{click:function(e){return t.copyTableAndReturnCenter("outputImg","tableTag")}}},[e(u.A,[t._v("mdi-content-copy")]),t._v(" Copiar para Outlook ")],1)],1)],1)],1),t._e()],1)],1)],1)},h=[],f=a(6522),b=a.p+"img/baseImage.eb8d7c82.jpg",y={name:"MailSignature",data(){return{name:"Teixeirinha",ocupation:"Autonomous",team:"Standalone",phoneNumber:"+1 67 899-8212",communicationTool:"+55 11 4002-8922",companyBanner:f,baseImage:b,uploadedImage:null,base64Src:"",base64BasePhoto:"",base64InputedPhoto:"",bright:!0,centerTableStyle:"margin-left: auto; margin-right: auto;"}},mounted(){fetch(b).then((t=>t.blob())).then((async t=>{const e=new File([t],"baseImage.png",t);let a=await this.fileToBase64(e);this.base64BasePhoto=`data:image/png;base64,${a}`,this.resizeAndCropImageToCircle(this.base64BasePhoto,96,96).then((t=>{this.base64BasePhoto=t}))})),fetch(f).then((t=>t.blob())).then((async t=>{const e=new File([t],"companySignature.png",t);let a=await this.fileToBase64(e);this.base64Src=`data:image/png;base64,${a}`,this.resizeImage(this.base64Src,130,50).then((t=>{this.base64Src=t}))}))},computed:{photoAdded:function(){return null!=this.uploadedImage},brightStyle:function(){return this.bright?"background-color: #FFF;":"background-color: #222;"}},methods:{async processImage(){if(null!=this.uploadedImage){let t=await this.fileToBase64(this.uploadedImage);this.base64InputedPhoto=`data:image/png;base64,${t}`,this.resizeAndCropImageToCircle(this.base64InputedPhoto,96,96).then((t=>{this.base64InputedPhoto=t}))}},insertImage(){this.$refs.fileInput.$refs.input.click()},removeImage(){this.uploadedImage=null},fileToBase64(t){return new Promise(((e,a)=>{const o=new FileReader;o.onload=()=>{const t=o.result.split(",")[1];e(t)},o.onerror=t=>{a(t)},o.readAsDataURL(t)}))},changeBright(){this.bright=!this.bright},doCopyForThunderBird(t){let e=document.getElementById(t).innerHTML;navigator.clipboard.writeText(e)},resizeImage(t,e=400,a=400){return new Promise((o=>{let n=new Image;n.src=t,n.onload=()=>{let t=document.createElement("canvas");const r=e,i=a;let s=n.width,l=n.height;s>l?s>r&&(l*=r/s,s=r):l>i&&(s*=i/l,l=i),t.width=s,t.height=l;let c=t.getContext("2d");c.drawImage(n,0,0,s,l),o(t.toDataURL())}}))},copyTableAndReturnCenter(t,e){setTimeout((()=>{let a=document.getElementById(e);a.style="",this.copyToClipboard(t),a.style=this.centerTableStyle}),30)},copyToClipboard(t){const e=new Set(["P","H1","H2","H3","H4","H5","H6","OL","UL","DIV","HR","TABLE"]),a=document.createElement("div"),o=document.getElementById(t);a.append(o.cloneNode(!0)),a.style.opacity=0,document.body.appendChild(a);const n=a.querySelectorAll("*");n.forEach((t=>{const a=window.getComputedStyle(t),o=a.getPropertyValue("display"),n=t.tagName;if(o.includes("inline")&&e.has(n)){const e=window.getComputedStyle(t).cssText;t.outerHTML=t.outerHTML.replace(new RegExp(n,"ig"),"span"),t.style.cssText=e}}));const r=window.getSelection(),i=document.createRange();i.selectNodeContents(a),r.removeAllRanges(),r.addRange(i),document.execCommand("copy"),r.removeAllRanges(),document.body.removeChild(a)},resizeAndCropImageToCircle(t,e=400,a=400){return new Promise((o=>{let n=new Image;n.src=t,n.onload=()=>{let t=document.createElement("canvas");const r=e,i=a;let s=n.width,l=n.height;s>l?s>r&&(l*=r/s,s=r):l>i&&(s*=i/l,l=i),t.width=s,t.height=l;let c=t.getContext("2d");c.drawImage(n,0,0,s,l);let u=document.createElement("canvas"),d=Math.min(s,l);u.width=d,u.height=d;let p=u.getContext("2d");p.beginPath(),p.arc(d/2,d/2,d/2,0,2*Math.PI),p.clip();let m=(s-d)/2,g=(l-d)/2;p.drawImage(t,m,g,d,d,0,0,d,d),o(u.toDataURL())}}))}}},v=y,A=a(1656),w=(0,A.A)(v,g,h,!1,null,"0f610456",null),x=w.exports,I={name:"App",components:{MailSignature:x}},T=I,k=(0,A.A)(T,r,i,!1,null,null,null),C=k.exports,S=a(5868);o.Ay.use(S.A);var P=new S.A({theme:{dark:!0,themes:{dark:{primary:"#000d41",secondary:"#e9c227",blackText:"#212121",primaryText:"#06afab",textBoard:"#222",signaturePrimary:"#04A8A8",signaturePrimaryText:"#181C1F"}}}});o.Ay.config.productionTip=!1,new o.Ay({vuetify:P,render:t=>t(C)}).$mount("#app")},6522:function(t,e,a){t.exports=a.p+"img/logoAcqio.1166a12d.png"}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,r){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],r=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,i=o[0],s=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var u=l(a)}for(e&&e(o);c<i.length;c++)r=i[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},o=self["webpackChunkportifolio"]=self["webpackChunkportifolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(7938)}));o=a.O(o)})();
//# sourceMappingURL=app.19249623.js.map