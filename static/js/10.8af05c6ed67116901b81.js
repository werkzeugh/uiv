webpackJsonp([10],{D30k:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={components:{"time-picker-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time"/>\n</div>',data:function(){return{time:new Date}}},"time-picker-24-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time" :show-meridian="false"/>\n</div>',data:function(){return{time:new Date}}},"time-picker-limit-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time" :max="max" :min="min"/>\n</div>',data:function(){return{time:new Date,min:new Date("2017/01/01 8:00"),max:new Date("2017/01/01 20:00")}}},"time-picker-readonly-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time" readonly/>\n</div>',data:function(){return{time:new Date}}},"time-picker-with-dropdown":{template:'<div class="markdown-live-example">\n  <form class="form-inline">\n    <dropdown class="form-group">\n      <div class="input-group">\n        <input class="form-control" type="text" :value="this.time.toTimeString()" readonly="readonly">\n        <div class="input-group-btn">\n          <btn class="dropdown-toggle"><i class="glyphicon glyphicon-time"></i></btn>\n        </div>\n      </div>\n      <template slot="dropdown">\n        <li style="padding: 10px">\n          <time-picker v-model="time"/>\n        </li>\n      </template>\n    </dropdown>\n  </form>\n</div>',data:function(){return{time:new Date}}},"time-picker-icons-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time" icon-control-up="glyphicon glyphicon-plus" icon-control-down="glyphicon glyphicon-minus"/>\n</div>',data:function(){return{time:new Date}}},"time-picker-no-controls-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time" :controls="false"/>\n</div>',data:function(){return{time:new Date}}},"time-picker-empty-fields-example":{template:'<div class="markdown-live-example">\n  <time-picker v-model="time"/>\n</div>',data:function(){return{time:new Date("")}}}}},n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("markdown-wrapper",[t("h1",{attrs:{id:"timepicker"}},[s._v("TimePicker "),t("a",{staticClass:"header-anchor",attrs:{href:"#timepicker","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("blockquote",[t("p",[s._v("A lightweight & configurable time picker.")])]),s._v(" "),t("h2",{attrs:{id:"example"}},[s._v("Example "),t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("To change the time input, you can:")]),s._v(" "),t("ul",[t("li",[s._v("Click on the add / minus button.")]),s._v(" "),t("li",[s._v("Use up / down key of keyboard.")]),s._v(" "),t("li",[s._v("Use mouse wheel.")]),s._v(" "),t("li",[s._v("Input directly.")])]),s._v(" "),t("p",[t("strong",[s._v("Note")]),s._v(": Make sure to update the "),t("code",{pre:!0},[s._v("v-model")]),s._v(" reference when trying to change it from outside the component.")]),s._v(" "),t("p",[s._v("e.g. "),t("code",{pre:!0},[s._v("time = new Date(time)")])]),s._v(" "),t("time-picker-example",{ref:"time-picker-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"24-hour"}},[s._v("24-hour "),t("a",{staticClass:"header-anchor",attrs:{href:"#24-hour","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("time-picker-24-example",{ref:"time-picker-24-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":show-meridian")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-24-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"range-limit"}},[s._v("Range limit "),t("a",{staticClass:"header-anchor",attrs:{href:"#range-limit","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Example that limit time range from "),t("strong",[s._v("8:00 AM")]),s._v(" to "),t("strong",[s._v("8:00 PM")]),s._v(":")]),s._v(" "),t("time-picker-limit-example",{ref:"time-picker-limit-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"max"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"min"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("(),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'2017/01/01 8:00'")]),s._v("), "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// date doesn't matter")]),s._v("\n        max: "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'2017/01/01 20:00'")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-limit-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"readonly"}},[s._v("Readonly "),t("a",{staticClass:"header-anchor",attrs:{href:"#readonly","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("All input methods are all disabled in readonly mode.")]),s._v(" "),t("time-picker-readonly-example",{ref:"time-picker-readonly-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-readonly-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"with-dropdown"}},[s._v("With dropdown "),t("a",{staticClass:"header-anchor",attrs:{href:"#with-dropdown","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("time-picker-with-dropdown",{ref:"time-picker-with-dropdown"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-inline"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("dropdown")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-group"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"input-group"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"form-control"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"this.time.toTimeString()"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"input-group-btn"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dropdown-toggle"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"glyphicon glyphicon-time"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dropdown"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"padding: 10px"')]),s._v(">")]),s._v("\n          "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v("/>")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("dropdown")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("form")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-with-dropdown.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"custom-icons"}},[s._v("Custom icons "),t("a",{staticClass:"header-anchor",attrs:{href:"#custom-icons","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("time-picker-icons-example",{ref:"time-picker-icons-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icon-control-up")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"glyphicon glyphicon-plus"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("icon-control-down")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"glyphicon glyphicon-minus"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-icons-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"without-controls"}},[s._v("Without controls "),t("a",{staticClass:"header-anchor",attrs:{href:"#without-controls","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("time-picker-no-controls-example",{ref:"time-picker-no-controls-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":controls")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("()\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-no-controls-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"empty-fields"}},[s._v("Empty fields "),t("a",{staticClass:"header-anchor",attrs:{href:"#empty-fields","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("time-picker-empty-fields-example",{ref:"time-picker-empty-fields-example"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("time-picker")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"time"')]),s._v("/>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- time-picker-empty-fields-example.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h2",{attrs:{id:"timepicker-2"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/blob/master/src/components/timepicker/TimePicker.vue"}},[s._v("TimePicker")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#timepicker-2","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h3",{attrs:{id:"props"}},[s._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Required")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("v-model")])]),s._v(" "),t("td",[s._v("Date")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("✔")]),s._v(" "),t("td",[s._v("The selected time.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("show-meridian")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Use 12H or 24H mode.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("hour-step")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Hours to increase or decrease when using a button.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("min-step")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Minutes to increase or decrease when using a button.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("readonly")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("max")])]),s._v(" "),t("td",[s._v("Date")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The maximum time that user can select or input.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("min")])]),s._v(" "),t("td",[s._v("Date")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The minimum time that user can select or input.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("icon-control-up")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("glyphicon glyphicon-chevron-up")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The arrow icon shown inside the "),t("code",{pre:!0},[s._v("increase")]),s._v(" button.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("icon-control-down")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("glyphicon glyphicon-chevron-down")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("The arrow icon shown inside the "),t("code",{pre:!0},[s._v("decrease")]),s._v(" button.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("controls")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Hide the up/down "),t("code",{pre:!0},[s._v("controls")]),s._v(" if set to "),t("code",{pre:!0},[s._v("false")]),s._v(".")])])])])])],1)},staticRenderFns:[]},l=t("VU/8")(e,n,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=10.8af05c6ed67116901b81.js.map