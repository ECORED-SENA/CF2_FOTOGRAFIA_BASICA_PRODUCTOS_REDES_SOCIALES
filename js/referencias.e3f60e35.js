(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(t,n,e){"use strict";e("95c5")},"04d1":function(t,n,e){var r=e("342f"),a=r.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"13aa":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},a=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=i,s=(e("0095"),e("2877")),c=Object(s["a"])(o,r,a,!1,null,null,null);n["default"]=c.exports},"3cb4":function(t,n,e){"use strict";e("ddc8")},"4e82":function(t,n,e){"use strict";var r=e("23e7"),a=e("e330"),i=e("59ed"),o=e("7b0b"),s=e("07fa"),c=e("577e"),u=e("d039"),l=e("addb"),f=e("a640"),d=e("04d1"),p=e("d998"),h=e("2d00"),m=e("512c"),v=[],b=a(v.sort),g=a(v.push),_=u((function(){v.sort(void 0)})),k=u((function(){v.sort(null)})),C=f("sort"),w=!u((function(){if(h)return h<70;if(!(d&&d>3)){if(p)return!0;if(m)return m<603;var t,n,e,r,a="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)v.push({k:n+r,v:e})}for(v.sort((function(t,n){return n.v-t.v})),r=0;r<v.length;r++)n=v[r].k.charAt(0),a.charAt(a.length-1)!==n&&(a+=n);return"DGBEFHACIJK"!==a}})),D=_||!k||!C||!w,x=function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:c(n)>c(e)?1:-1}};r({target:"Array",proto:!0,forced:D},{sort:function(t){void 0!==t&&i(t);var n=o(this);if(w)return void 0===t?b(n):b(n,t);var e,r,a=[],c=s(n);for(r=0;r<c;r++)r in n&&g(a,n[r]);l(a,x(t)),e=a.length,r=0;while(r<e)n[r]=a[r++];while(r<c)delete n[r++];return n}})},"512c":function(t,n,e){var r=e("342f"),a=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"64ef":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return e("div",{key:n.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},a=[],i=e("2909"),o=(e("4e82"),e("ac1f"),e("1276"),e("13aa")),s=e("ecc5"),c={name:"Referencias",components:{BannerInterno:o["default"]},mixins:[s["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,n=Object(i["a"])(this.referenciasData).sort((function(n,e){var r=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),a=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return r<a?-1:r>a?1:0}));return n}}},u=c,l=(e("3cb4"),e("2877")),f=Object(l["a"])(u,r,a,!1,null,null,null);n["default"]=f.exports},"95c5":function(t,n,e){},addb:function(t,n,e){var r=e("4dae"),a=Math.floor,i=function(t,n){var e=t.length,c=a(e/2);return e<8?o(t,n):s(t,i(r(t,0,c),n),i(r(t,c),n),n)},o=function(t,n){var e,r,a=t.length,i=1;while(i<a){r=i,e=t[i];while(r&&n(t[r-1],e)>0)t[r]=t[--r];r!==i++&&(t[r]=e)}return t},s=function(t,n,e,r){var a=n.length,i=e.length,o=0,s=0;while(o<a||s<i)t[o+s]=o<a&&s<i?r(n[o],e[s])<=0?n[o++]:e[s++]:o<a?n[o++]:e[s++];return t};t.exports=i},d998:function(t,n,e){var r=e("342f");t.exports=/MSIE|Trident/.test(r)},ddc8:function(t,n,e){},ecc5:function(t,n,e){"use strict";n["a"]={computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const t=this.menuData.find(t=>"introduccion"===t.nombreRuta),n=this.menuData.find(t=>"tema1"===t.nombreRuta);return t||n}},methods:{quitarAcentos(t){const n=t.replace(/<\/?[^>]+(>|$)/g,""),e={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map(t=>e[t]||t).join("").toString()}}}}}]);
//# sourceMappingURL=referencias.e3f60e35.js.map