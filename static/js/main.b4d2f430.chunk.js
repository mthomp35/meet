(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{211:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},233:function(e,t,n){},561:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=n(181),i=(n(211),n(51)),l=n(23),u=n(24),h=n(25),d=n(26),f=n(27),p=n.n(f),v=n(201),b=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),m=n(123),j=n.n(m),g=n(76),w=n.n(g),x=function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,a,r,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,O(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,j.a.get("https://ixc0n21qu3.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&C(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){var t=e.map((function(e){return e.location}));return Object(v.a)(new Set(t))},k=function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,a,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return w.a.done(),e.abrupt("return",b);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),w.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,x();case 11:if(!(n=e.sent)){e.next=21;break}return S(),a="https://ixc0n21qu3.execute-api.us-west-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,j.a.get(a);case 17:return(r=e.sent).data&&(o=y(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),w.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},C=function(){var e=Object(i.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ixc0n21qu3.execute-api.us-west-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(n(230),n(231),n(2)),N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(T.jsxs)("div",{className:"event",children:[Object(T.jsxs)("div",{className:"overview",children:[Object(T.jsx)("h3",{children:t.summary}),Object(T.jsx)("p",{className:"location",children:t.location}),Object(T.jsxs)("p",{className:"start-date",children:[t.start.dateTime," (",t.start.timeZone,")"]}),!e&&Object(T.jsx)("button",{className:"show-details",onClick:this.handleShowDetails,children:"Show Details"})]}),e&&Object(T.jsxs)("div",{className:"event_details",children:[Object(T.jsx)("h3",{children:"About this Event:"}),Object(T.jsx)("a",{href:t.htmlLink,target:"_blank",rel:"noreferrer",children:Object(T.jsx)("button",{className:"google-btn",children:"See details on Google Calendar"})}),Object(T.jsx)("p",{children:t.description}),Object(T.jsx)("button",{className:"hide-details",onClick:this.handleShowDetails,children:"Hide Details"})]})]})}}]),n}(a.Component),W=N,A=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(T.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(T.jsx)("li",{children:Object(T.jsx)(W,{event:e})},e.id)}))})}}]),n}(a.Component),Z=A,E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(T.jsx)("div",{className:"Alert",children:Object(T.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(u.a)(n)}(E),I=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="orange",a}return Object(u.a)(n)}(E),L=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(u.a)(n)}(E),q=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"Oh no! We cannot find the city you are looking for. Please check the spelling or try entering a different city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:"CitySearch",children:[Object(T.jsx)("b",{children:"Select a City to View Events:"}),Object(T.jsx)("div",{children:Object(T.jsx)(D,{text:this.state.infoText})}),Object(T.jsxs)("div",{className:"CitySuggestions",children:[Object(T.jsx)("input",{type:"text",className:"city",placeholder:"All Cities",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(T.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(T.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(T.jsx)("li",{onClick:function(){return e.handleItemClicked("All Cities")},children:Object(T.jsx)("b",{children:"See All Cities"})},"All Cities")]})]})]})}}]),n}(a.Component),J=q,M=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:32,errorText:""},e.handleCountChange=function(t){var n=t.target.value;n<0||n>32?e.setState({errorText:"Select a number between 1 and 32"}):e.setState({eventCount:n,errorText:""}),e.props.updateEvents(null,n)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"NumberOfEvents",children:[Object(T.jsx)("b",{className:"event-count-label",children:"Number of Events in View:"}),Object(T.jsx)("div",{children:Object(T.jsx)(L,{text:this.state.errorText})}),Object(T.jsx)("input",{type:"text",className:"event-count",value:this.state.eventCount,onChange:this.handleCountChange,label:"Input number of events to view"})]})}}]),n}(a.Component),U=M;n(233);var B=function(e){return e.showWelcomeScreen?Object(T.jsxs)("div",{className:"WelcomeScreen",children:[Object(T.jsx)("h1",{children:"Welcome to the Meet app"}),Object(T.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(T.jsx)("div",{className:"button_cont",align:"center",children:Object(T.jsxs)("div",{class:"google-btn-wrapper",children:[Object(T.jsx)("div",{class:"google-icon-wrapper",children:Object(T.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(T.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(T.jsx)("b",{children:"Sign in with google"})})]})}),Object(T.jsx)("a",{href:"https://mthomp35.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},R=(n(234),n(564)),_=n(565),F=n(569),z=n(198),G=n(199),H=n(79),P=n(202),Y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],eventCount:32,currentLocation:"All Cities",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){t=t||e.state.currentLocation,n=n||e.state.eventCount,k().then((function(a){var r=("All Cities"===t?a:a.filter((function(e){return e.location===t}))).slice(0,n);e.setState({events:r,currentLocation:t,eventCount:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,a,r,o=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,O(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&k().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.eventCount),locations:y(e)}),navigator.onLine?o.setState({warningText:""}):o.setState({warningText:"You are currently offline. Events shown may not be up to date."})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(T.jsx)("div",{className:"App"}):Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("div",{className:"offline-alert",children:Object(T.jsx)(I,{text:this.state.warningText})}),Object(T.jsx)(J,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(T.jsx)(U,{eventCount:this.state.eventCount,updateEvents:this.updateEvents}),Object(T.jsx)("h4",{children:"Events in each city"}),Object(T.jsx)(R.a,{height:400,className:"recharts-responsive-container",children:Object(T.jsxs)(_.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(T.jsx)(F.a,{}),Object(T.jsx)(z.a,{type:"category",dataKey:"city",name:"city"}),Object(T.jsx)(G.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(T.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(T.jsx)(P.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(T.jsx)(Z,{events:this.state.events}),Object(T.jsx)(B,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){x()}})]})}}]),n}(a.Component),V=Y,K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),Q(),c.config("aa406b3f0f0f44a8ac7863450dbbdf0d").install()}},[[561,1,2]]]);
//# sourceMappingURL=main.b4d2f430.chunk.js.map