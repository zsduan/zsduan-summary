(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a3ab9c"],{"4d91":function(e,i,t){},9477:function(e,i,t){"use strict";t("4d91")},b62b:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e._self._c;return i("div",[i("dzs-header",{attrs:{title:"vue动态路由"}}),i("div",{staticClass:"page"},[i("div",{staticClass:"tips-box"},[e._v("大文件的切片和分割")]),i("h2",[e._v("切片")]),i("div",{staticClass:"item"},[i("input",{ref:"myfile",attrs:{type:"file"},on:{change:e.changeFile1}})]),i("h2",[e._v("合并")]),i("div",{staticClass:"item"},[i("input",{ref:"myfile1",attrs:{type:"file",multiple:""},on:{change:e.changeFile2}})]),i("h2",[e._v("源代码下载/查看")]),e._m(0)]),i("el-backtop",{attrs:{"visibility-height":20}})],1)},l=[function(){var e=this,i=e._self._c;return i("div",{staticClass:"item"},[i("a",{attrs:{target:"_blank",href:"https://github.com/zsduan/zsduan-summary/blob/master/src/utils/file-slice-and-merge.js"}},[e._v("下载/查看地址")])])}];t("14d9");const n=(...e)=>{let i={fileId:"",file:"",refs:"",_this:null,type:"slice",fileSize:5242880,fileName:"",isSort:!0,success:e=>{},fail:e=>{}};for(const s in i)Object.hasOwnProperty.call(i,s)&&(i[s]=e[0][s]?e[0][s]:i[s]);if(!i.fileId&&!i.file&&!i.refs)return void i.fail({code:-1,msg:"fileId or file or refs must be not null"});if(i.refs&&!i._this)return void i.fail({code:-1,msg:"_this must be not null"});if(!i.type)return void i.fail({code:-1,msg:"type must be not null"});let t=null;i.refs&&(t=i._this.$refs[i.refs].files),i.fileId&&(t=document.querySelector("#"+i.fileId).files),i.file&&(t=i.file),"slice"==i.type&&f(t[0],i),"merge"==i.type&&a(t,i)},f=(e,i)=>{let t=[];for(let s=0;s<e.size;s+=i.fileSize){let l=parseInt(s/i.fileSize)+1,n={sort:l,file:e.slice(s,i.fileSize*l),file_name:e.name+"-index"};t.push(n)}i.success({code:200,fileList:t,file_name:e.name})},a=(e,i,t)=>{let s=[];if(!e.length)return void i.fail({code:-1,msg:"files is null"});if(i.isSort){let i=[];for(let t=0;t<e.length;t++)i.push(e[t].name);i=i.sort(),i.forEach(i=>{for(let t=0;t<e.length;t++)e[t].name==i&&s.push(e[t].slice(0,e[t].size))})}else s=[...e].map(e=>e.slice(0,e.size));const l=t||e[0].name.replace(/-\d+$/,""),n=new File(s,l);i.success({code:200,file:n,file_name:l})};var r={data(){return{}},mounted(){},methods:{changeFile1(){n({refs:"myfile",_this:this,fileSize:5242880,success:e=>{e.fileList.forEach((i,t)=>{this.downFile(i.file,e.file_name+"-"+i.sort)})}})},changeFile2(){n({refs:"myfile1",_this:this,type:"merge",success:e=>{this.downFile(e.file,e.file_name)}})},downFile(e,i){const t=document.createElement("a");t.setAttribute("download",i),t.href=URL.createObjectURL(e),t.click()}}},c=r,o=(t("9477"),t("2877")),u=Object(o["a"])(c,s,l,!1,null,"162044ee",null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-06a3ab9c.b6ddac1b.js.map