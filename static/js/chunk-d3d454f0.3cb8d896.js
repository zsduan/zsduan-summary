(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3d454f0"],{"05f2":function(e,t,i){},4884:function(e,t,i){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",[t("el-upload",{class:{"upload-dzs":!0,"upload-dzs-phone":e.isPhone},attrs:{drag:"",action:e.action,multiple:e.multiple,"file-list":e.fileList,limit:e.limit,"before-upload":e.beforeUpload,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"auto-upload":e.autoUpload,"on-change":e.changeFile,"show-file-list":!0}},[t("i",{staticClass:"el-icon-upload"}),e.isPhone?t("div",{staticClass:"el-upload__text"},[t("em",[e._v("点击上传文件")])]):t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t("div",[e._v("只能上传不超过 "+e._s(e.maxSize/1024/1024)+"M 的"+e._s(e.fileType.join("、"))+"文件")]),e.limit>1?t("div",[e._v("最多上传 "+e._s(e.limit)+" 个文件")]):e._e()])])],1)},a=[],o=(i("14d9"),{name:"dzsUploadFile",model:{prop:"value",event:"update:value"},props:{action:{type:String,default:()=>"#"},limit:{type:Number,default:()=>1},maxSize:{type:Number,default:()=>5242880},fileType:{type:Array,default:()=>["doc","docx","ppt","pptx","zip","rar","pdf","xls","xlsx","txt","jpg","png","jpeg"]},value:{type:Array,default:()=>[]},autoUpload:{type:Boolean,default:()=>!0},isPhone:{type:Boolean,default:()=>!1}},data(){return{multiple:!1,fileList:[]}},watch:{limit:{handler(e){this.multiple=1!=e},immediate:!0},value:{handler(e){e.length>0&&(this.fileList=e.map(e=>({name:e.name,url:e.url,uid:e.uid,status:"success"})))},immediate:!0}},methods:{beforeUpload(e){let t=e.name.split(".")[1];return-1==this.fileType.indexOf(t)?(this.$message.error("上传文件格式不正确"),!1):!(e.size>this.maxSize)||(this.$message.error(`上传文件大小不能超过 ${this.maxSize/1024/1024}MB!`),!1)},handleSuccess(e,t){let i={name:t.name,path:e.path?e.path:"",uploadUrl:e.url?e.url:"",uid:t.uid,type:t.type,formItem:"upload-file",status:"success"};this.fileList.push(i),this.$emit("update:value",this.fileList),this.$emit("change",this.fileList)},changeFile(e){if(!this.autoUpload){let t={name:e.name,path:e.url,uploadUrl:e.url,uid:e.uid,type:e.type,status:"success",fromItem:"upload-file",file:e.raw};this.fileList.push(t),this.$emit("update:value",this.fileList),this.$emit("change",this.fileList)}},handleExceed(e,t){this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${e.length} 个文件，共选择了 ${e.length+t.length} 个文件`)}}}),s=o,r=(i("a117"),i("2877")),n=Object(r["a"])(s,l,a,!1,null,"419f4d1c",null);t["a"]=n.exports},"6e78":function(e,t,i){"use strict";i("ab13")},8151:function(e,t,i){},a117:function(e,t,i){"use strict";i("05f2")},ab13:function(e,t,i){},bb34:function(e,t,i){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dzs-form-box",attrs:{id:e.formId}},[t("el-form",e._b({directives:[{name:"loading",rawName:"v-loading",value:e.loadingOption.loading,expression:"loadingOption.loading"}],ref:e.formId,class:{ruleForm:!0,noScroll:e.loadingOption.loading,"phone-form":e.formBoxWidth<=768,"form-box-scroll":e.isScroll},style:{height:e.isScroll?e.height:"100%"},attrs:{"element-loading-text":e.loadingOption.loadingText,"element-loading-spinner":e.loadingOption.spinner,"element-loading-background":e.loadingOption.background,model:e.fromModel,rules:e.fromRules,"label-position":e.labelPosition}},"el-form",{...e.formProps},!1),[t("el-row",{attrs:{gutter:e.gutter}},[e._l(e.formItem,(function(i,l){return[i.isHidden?e._e():t("el-col",{attrs:{span:i.span?i.span:24}},[i.isSlot?[e._t(i.key)]:t("dzs-form-item",{attrs:{item:i},scopedSlots:e._u([e._l(e.$slots,(function(t,i){return{key:i,fn:function(t){return[e._t(i,null,null,t)]}}})),{key:"default",fn:function(){return[t("dzs-item",{attrs:{formBoxWidth:e.formBoxWidth,toolbar:e.toolbar,value:e.getFromModelValue(i.key),item:i},on:{change:e.changeVaule}}),e.getTips(i)&&"divider"!=i.type?t("div",{staticClass:"from-item-tips"},[e._v(" "+e._s(e.getTips(i))+" ")]):e._e()]},proxy:!0}],null,!0)}),"divider"==i.type?[t("el-divider",e._b({},"el-divider",{...i.props},!1),[i.props&&i.props.tips?t("span",[e._v(e._s(i.props.tips))]):e._e(),i.props&&i.props.icon?t("i",{class:i.props.icon}):e._e()])]:e._e()],2)]}))],2)],1),e.showFooter?t("div",{class:["form-sbumit-box",e.buttonFlex]},[e.showButton?t("el-button",{on:{click:function(t){return t.stopPropagation(),e.onCancel.apply(null,arguments)}}},[e._v(" "+e._s(e.bottonText.cancelText?e.bottonText.cancelText:"取消")+" ")]):e._e(),e._t("footerBtn"),e.showButton?t("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),e.onSubmit()}}},[e._v(" "+e._s(e.bottonText.submitText?e.bottonText.submitText:"提交")+" ")]):e._e()],2):e._e()],1)},a=[];i("14d9");const o={shortcuts:[{text:"最近一周",onClick(e){const t=new Date,i=new Date;i.setTime(i.getTime()-6048e5),e.$emit("pick",[i,t])}},{text:"最近一个月",onClick(e){const t=new Date,i=new Date;i.setTime(i.getTime()-2592e6),e.$emit("pick",[i,t])}},{text:"最近三个月",onClick(e){const t=new Date,i=new Date;i.setTime(i.getTime()-7776e6),e.$emit("pick",[i,t])}}]},s=e=>{if("object"!==typeof e||null===e)return e;let t=Array.isArray(e)?[]:{};for(let i in e)e.hasOwnProperty(i)&&(t[i]=s(e[i]));return t};var r=s,n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dzs-form-item"},[t("el-form-item",{attrs:{label:e.item.label,prop:e.item.key}},[e._t(e.item.key+"Before"),e.item.props&&e.item.props.isSlot?[e._t(""+e.item.key)]:e._t("default"),e._t(e.item.key+"After")],2)],1)},u=[],p={name:"dzsFormItem",props:{item:{type:Object,default:()=>({})}}},d=p,m=i("2877"),c=Object(m["a"])(d,n,u,!1,null,null,null),h=c.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dzs-item"},["input"==e.item.type?[t("el-input",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-input",{...e.item.props},!1),[e.item.slots?t("template",{slot:e.item.slots.name},[e._v(" "+e._s(e.item.slots.text)+" ")]):e._e()],2)]:e._e(),"select"==e.item.type?[t("el-select",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-select",{...e.item.props},!1),e._l(e.item.children,(function(e,i){return t("el-option",{key:e.value+i.toString(),staticStyle:{padding:"0 6px"},attrs:{label:e.label,value:e.value}})})),1)]:e._e(),"number"==e.item.type?[t("el-input-number",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-input-number",{...e.item.props},!1))]:e._e(),"date"==e.item.type?[t("el-date-picker",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-date-picker",{...e.item.props},!1))]:e._e(),"time"==e.item.type?[t("el-time-picker",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-time-picker",{...e.item.props},!1))]:e._e(),"color"==e.item.type?[t("el-color-picker",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-color-picker",{...e.item.props},!1))]:e._e(),"switch"==e.item.type?[t("el-switch",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-switch",{...e.item.props},!1))]:e._e(),"checkbox"==e.item.type?[t("el-checkbox-group",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-checkbox-group",{...e.item.props},!1),e._l(e.item.children,(function(i,l){return t("el-checkbox",e._b({key:i.value+l,staticClass:"items",attrs:{label:i.value}},"el-checkbox",{...i.props},!1),[e._v(" "+e._s(i.label)+" ")])})),1)]:e._e(),"radio"==e.item.type?[t("el-radio-group",e._b({attrs:{value:e.value},on:{input:function(t){return e.changeVaule(t,e.item.key)}}},"el-radio-group",{...e.item.props},!1),e._l(e.item.children,(function(i,l){return t("el-radio",e._b({key:i.value+l,staticClass:"items",attrs:{label:i.value}},"el-radio",{...i.props},!1),[e._v(" "+e._s(i.label)+" ")])})),1)]:e._e(),"uploadImg"==e.item.type?[t("dzs-upload-img",e._b({attrs:{value:e.value},on:{change:function(t){return e.changeVaule(t,e.item.key)}}},"dzs-upload-img",{...e.item.props},!1))]:e._e(),"uploadFile"==e.item.type?[t("dzs-upload-file",e._b({attrs:{isPhone:e.formBoxWidth<=768,value:e.value},on:{change:function(t){return e.changeVaule(t,e.item.key)}}},"dzs-upload-file",{...e.item.props},!1))]:e._e(),"editor"==e.item.type?[t("dzs-editor",e._b({attrs:{value:e.value,toolbar:e.toolbar,show_save:!1},on:{save:function(t){return e.changeVaule(t,e.item.key)}}},"dzs-editor",{...e.item.props},!1))]:e._e()],2)},g=[],b=i("ece4"),y=i("4884"),v=i("d3a1"),_={name:"dzsItem",components:{dzsUploadImg:b["a"],dzsUploadFile:y["a"],dzsEditor:v["a"]},props:{item:{type:Object,required:!0},value:{type:[String,Number,Boolean,Object,Array,Date],required:!0},formBoxWidth:{type:Number,default:()=>0},toolbar:{type:Array,default:()=>[]}},methods:{changeVaule(e,t){this.$emit("change",e,t)}}},x=_,k=Object(m["a"])(x,f,g,!1,null,"66fb57b0",null),w=k.exports,S={name:"dzsForm",model:{prop:"value",event:"update:value"},components:{dzsFormItem:h,dzsItem:w},props:{options:{type:Object,default:()=>({formProps:{labelPosition:"left",labelWidth:"80px"},formItem:[]})},value:{type:Object,default:()=>({})},bottonText:{type:Object,default:()=>({submitText:"提交",cancelText:"取消"})},showButton:{type:Boolean,default:()=>!0},showFooter:{type:Boolean,default:()=>!0},antiShakeTime:{type:Number,default:()=>1e3},loadingOption:{type:Object,default:()=>({background:"rgba(0,0,0,0.5)",text:"加载中...",spinner:"el-icon-loading",loading:!1})},gutter:{type:Number,default:()=>10},isScroll:{type:Boolean,default:()=>!0},height:{type:String,default:()=>"100%"},buttonFlex:{type:String,default:()=>"right"}},data(){return{fromModel:{},fromRules:{},formItem:[],formProps:{},pickerOptions:o,formBoxWidth:0,labelPosition:"left",timer:null,toolbar:[],formId:"dzsForm"+(new Date).getTime()}},watch:{options:{handler(e){e.formItem&&e.formItem.length&&this.initModel()},deep:!0,immediate:!0},value:{handler(e,t){e&&this.setFormData(e)},deep:!0,immediate:!0}},mounted(){this.listenFormBoxWidth()},methods:{initModel(e=!1,t){this.initFormProps(this.options.formProps),this.initFormItem(r(this.options.formItem),e,t)},initFormProps(e){if(!e)return;this.labelPosition=this.formBoxWidth<=768?"top":"left";let t=e["label-position"]||e["labelPosition"];t&&(this.labelPosition=t),this.formProps=e},initFormItem(e,t,i){if(i&&this.formItem.length)return void this.formItem.forEach((t,i)=>{t.span=this.formBoxWidth<=768?24:e[i].span});let l={},a={},o=[];const s={checkbox:[],uploadImg:[],uploadFile:[],switch:!1};e.forEach(e=>{e.span=this.formBoxWidth<=768?24:e.span,e.props||(e.props={}),this.value[e.key]&&(e.defaultValue=this.value[e.key]),s.hasOwnProperty(e.type)&&!e.defaultValue&&(e.defaultValue=s[e.type]),"select"==e.type&&e.props.multiple&&!e.defaultValue&&(e.defaultValue=[]),"input"==e.type&&e.defaultValue&&(e.defaultValue=e.defaultValue.toString()),"switch"!=e.type?e.defaultValue=e.defaultValue?e.defaultValue:"":e.defaultValue=!!e.defaultValue&&e.defaultValue,a[e.key]=e.rules||[],e.props.placeholder=this.getPlaceholder(e,e.type),o.push(e),l[e.key]=t?e.defaultValue:this.value[e.key]||e.defaultValue}),this.fromModel=this.transformKeysToNestedObject(l),this.formItem=r(o),this.fromRules=r(a)},transformKeysToNestedObject(e){let t={};const i=Object.keys(e);for(let l=0;l<i.length;l++){const a=i[l].split("."),o=e[i[l]];let s=t;for(let e=0;e<a.length-1;e++){const t=a[e];s=s[t]||(s[t]={})}s[a[a.length-1]]=o}return t},getFromModelValue(e){let t=e.split("."),i=this.fromModel;for(let l=0;l<t.length;l++)i=i[t[l]];return i},getPlaceholder(e,t){const i=["date","time","select","uploadFile","uploadImg"];let l="请输入";i.includes(t)&&(l="请选择");let a=e.props&&e.props.placeholder?e.props.placeholder:l+e.label;return a},getTips(e){return e.props&&e.props.tips?e.props.tips:""},changeVaule(e,t){let i=t.split("."),l=this.fromModel;for(let a=0;a<i.length-1;a++)l=l[i[a]];l[i[i.length-1]]=e,this.$emit("update:value",this.fromModel),this.$emit("change",{value:e,key:t})},clearForm(){this.initModel(!0),setTimeout(()=>{this.$refs[this.formId].resetFields()},0),this.$emit("update:value",this.fromModel)},getFormMethod(){return this.$refs[this.formId]},setFormData(e){"{}"!=JSON.stringify(e)&&e&&(this.fromModel={...r(e)},setTimeout(()=>{this.fromModel={...r(e)}},100))},listenFormBoxWidth(){let e=["undo redo save | importword autosave fullscreen print help"],t=["undo redo save| formatselect | fontsizeselect | fontselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | lists image searchreplace | bullist numlist outdent indent |  media table insertdatetime | removeformat hr | importword autosave fullscreen print help"];const i=new ResizeObserver(i=>{for(let l of i){const{width:i}=l.contentRect;if(this.formBoxWidth==i)return;this.formBoxWidth=i,this.labelPosition=i<=768?"top":"left",this.toolbar=i<=768?e:t,this.initModel(!1,!0)}});i.observe(document.querySelector("#"+this.formId))},onCancel(){this.clearForm(),this.$emit("onCancel")},onSubmit(){if(this.timer)return void this.$message.error(`请勿重复提交,${this.antiShakeTime/1e3} 秒后再试`);this.timer=setTimeout(()=>{clearTimeout(this.timer),this.timer=null},this.antiShakeTime);let e=[];return new Promise((t,i)=>{this.$refs[this.formId].validate(l=>{if(!l)return this.$message.error("请完善表单信息"),void i({code:-1,msg:"请完善表单信息"});this.formItem.forEach(t=>{let i=t.key.split("."),l=this.fromModel;for(let e=0;e<i.length;e++)l=l[i[e]];e[t.key]=l,t.isNull&&delete e[t.key],e=this.transformKeysToNestedObject(e)}),this.$emit("onSubmit",e),this.$emit("update:value",e),t(e)})})}}},$=S,T=(i("6e78"),Object(m["a"])($,l,a,!1,null,"b543708c",null)),z=T.exports;z.install=(e,t)=>{e.component(z.name,z)};t["a"]=z},e05d:function(e,t,i){"use strict";i("8151")},ece4:function(e,t,i){"use strict";var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"upload-img-box"},[e.fileList.length?t("div",{staticClass:"show-img-box",style:e.imgStyle},e._l(e.fileList,(function(i,l){return t("div",{key:l},[t("img",{staticClass:"el-upload-list__item-thumbnail",style:e.imgStyle,attrs:{src:i.url,alt:""}}),t("div",{staticClass:"el-upload-list__item-actions",style:e.imgStyle},[t("div",{staticClass:"el-upload-actions"},[t("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handlePictureCardPreview(i)}}}),t("i",{staticClass:"el-icon-delete",on:{click:function(t){return e.handleRemove(l)}}})])])])})),0):e._e(),t("div",{style:e.imgStyle},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upFile,"show-file-list":!1,"list-type":"picture-card","file-list":e.fileList,limit:e.limit,"before-upload":e.beforeUpload,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"auto-upload":e.autoUpload,"on-change":e.changeFile}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t("el-dialog",{attrs:{visible:e.dialogVisible,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},a=[],o=(i("14d9"),{name:"dzsUploadImg",model:{prop:"value",event:"update:value"},props:{upFile:{type:String,default:()=>"#"},value:{type:Array|String,default:()=>[]},imgStyle:{type:String,default:()=>"width:80px;height:80px;"},limit:{type:Number,default:()=>1},maxSize:{type:Number,default:()=>3},imgType:{type:String,default:()=>"image/jpeg,image/png,image/gif"},autoUpload:{type:Boolean,default:()=>!0}},data(){return{fileList:[],dialogImageUrl:"",dialogVisible:!1}},watch:{value:{handler(e){this.fileList="string"==typeof e?e?{uid:(new Date).getTime(),url:e,status:"success",fromItem:"upload-img"}:[]:e},deep:!0,immediate:!0}},methods:{beforeUpload(e){let t=this.imgType.split(","),i=t.indexOf(e.type);const l=e.size/1024/1024<this.maxSize;return-1==i&&this.$message.error("请上传正确的图片格式"),l||this.$message.error(`上传图片大小不能超过 ${this.maxSize}MB!`),-1!=i&&l},handleSuccess(e,t){let i={name:t.name,path:e.path?e.path:"",uploadUrl:e.url?e.url:"",uid:t.uid,url:t.url,status:"success",fromItem:"upload-img",data:e,file:t};this.fileList.push(i),this.$emit("update:value",this.fileList),this.$emit("upload-success",i),this.$emit("change",this.fileList)},changeFile(e){if(!this.autoUpload){let t={name:e.name,path:e.url,uploadUrl:e.url,uid:e.uid,url:e.url,status:"success",fromItem:"upload-img",data:e.raw,file:e.raw};this.fileList.push(t),this.$emit("update:value",this.fileList),this.$emit("upload-success",t),this.$emit("change",this.fileList)}},handleExceed(e,t){this.$message.warning(`当前上传图片数量已达上限${this.limit}张`)},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleRemove(e){this.fileList.splice(e,1),this.$emit("change",this.fileList),this.$emit("update:value",this.fileList),this.$emit("upload-remove",this.fileList)}}}),s=o,r=(i("e05d"),i("2877")),n=Object(r["a"])(s,l,a,!1,null,"7de77714",null);t["a"]=n.exports}}]);
//# sourceMappingURL=chunk-d3d454f0.3cb8d896.js.map