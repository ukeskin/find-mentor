(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(t,e,r){var content=r(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("1656dcc6",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r(292)},300:function(t,e,r){(e=r(60)(!1)).push([t.i,".item[data-v-6cc9a102]{width:248px;height:320px;border-radius:20px;transition:box-shadow .3s;overflow:hidden}.item.mentee[data-v-6cc9a102]{background-color:#32475b}.item.mentor[data-v-6cc9a102]{background-color:#17aa90}.item.mentee[data-v-6cc9a102]:hover,.item.mentor[data-v-6cc9a102]:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.social-media[data-v-6cc9a102]{display:flex;justify-content:center;margin:0 0 15px 20px}.github[data-v-6cc9a102],.linkedin[data-v-6cc9a102],.twitter[data-v-6cc9a102]{width:30px;height:36px;margin-right:20px}.social-media-icon[data-v-6cc9a102]{width:20px;height:20px;margin-top:8px}.twitter[data-v-6cc9a102]{background-color:#22acf3}.github[data-v-6cc9a102]{background-color:#282e36}.linkedin[data-v-6cc9a102]{background-color:#0e76a8}.profile-photo[data-v-6cc9a102]{margin:0 10px 10px 0}.profile-photo img[data-v-6cc9a102]{border-radius:100%;width:120px;height:120px;border:2px solid #fff}.name[data-v-6cc9a102]{color:#fff}.mentee .interests[data-v-6cc9a102]{color:#a4a4a4}.mentor .interests[data-v-6cc9a102]{color:#d6d5d5}.interests[data-v-6cc9a102],.name[data-v-6cc9a102],.profile-photo[data-v-6cc9a102]{display:flex;justify-content:center;align-items:center}@media (max-width:626px){.item[data-v-6cc9a102]{width:300px;height:350px}.github[data-v-6cc9a102],.linkedin[data-v-6cc9a102],.twitter[data-v-6cc9a102]{width:40px;height:46px;margin-right:20px}.social-media-icon[data-v-6cc9a102]{width:30px;height:30px;margin-top:8px;font-size:25px}}",""]),t.exports=e},303:function(t,e,r){"use strict";r.r(e);r(6),r(154);var n={name:"Card",props:["person","personType"],methods:{getProfilePicture:function(t){var e=t.match(/github.com\/([\w\d-]+)(.+)?/);return e?"https://avatars.githubusercontent.com/".concat(e[1]):"https://raw.githubusercontent.com/cagataycali/find-mentor/master/assets/images/dummy.png"}}},o=(r(299),r(52)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.person?r("div",{class:"item "+t.personType,attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[r("div",{staticClass:"social-media"},[t.person.twitter_handle.length?r("div",{staticClass:"twitter"},[r("a",{attrs:{href:t.person.twitter_handle,itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","twitter"],color:"white"}})],1)]):t._e(),t._v(" "),t.person.github.length?r("div",{staticClass:"github"},[r("a",{attrs:{href:t.person.github,itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","github"],color:"white"}})],1)]):t._e(),t._v(" "),t.person.linkedin.length?r("div",{staticClass:"linkedin"},[r("a",{attrs:{href:t.person.linkedin,itemprop:"sameAs"}},[r("font-awesome-icon",{staticClass:"social-media-icon",attrs:{icon:["fab","linkedin"],color:"white"}})],1)]):t._e()]),t._v(" "),r("NuxtLink",{attrs:{to:"/peer/"+t.person.slug,itemprop:"url"}},[r("div",{staticClass:"profile-photo"},[r("img",{attrs:{src:t.getProfilePicture(t.person.github),alt:"mentee-profile-picture",itemprop:"image"}})]),t._v(" "),r("div",{staticClass:"name"},[t._v("\n      "+t._s(t.person.name)+"\n    ")])]),t._v(" "),r("div",{staticClass:"interests",attrs:{itemprop:"seeks"}},[t._v("\n    "+t._s(t.person.interests)+"\n  ")])],1):t._e()}),[],!1,null,"6cc9a102",null);e.default=component.exports},329:function(t,e,r){var content=r(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("1ebd3d0c",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r(329)},371:function(t,e,r){(e=r(60)(!1)).push([t.i,"*{box-sizing:border-box}.filter{width:40%;font-size:14px;padding:12px 20px 12px 40px;border:1px solid #ddd;margin-bottom:12px;margin-left:35px}.persons{list-style-type:none;width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-left:0}.item{width:248px;height:320px;background-color:#17aa90;border-radius:20px;transition:box-shadow .3s;border:1px solid #ccc;overflow:hidden}.item:hover{box-shadow:16px 16px 16px rgba(11,11,11,.2)}.person{width:250px;height:250px;text-align:center;margin:30px 7.5px 0}.name{font-size:26px}.interestContent{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",""]),t.exports=e},721:function(t,e,r){"use strict";r.r(e);r(88),r(4),r(69),r(15),r(6),r(87),r(21),r(51);var n=r(20),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("persons").where({mentor:{$in:["Mentee","İkisi de"]}}).fetch();case 3:return n=e.sent,e.abrupt("return",{mentees:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{filter:null}},computed:{filteredMentees:function(){var t=this;return this.filter?this.mentees.filter((function(e){return t.filter.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):this.mentees}}},c=(r(370),r(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Mentees")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"filter",attrs:{placeholder:"Filter Mentees"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}}),t._v(" "),r("ul",{staticClass:"persons"},t._l(t.filteredMentees,(function(t,e){return r("Card",{key:e,staticClass:"person",attrs:{person:t,"person-type":"mentee"}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(303).default})}}]);