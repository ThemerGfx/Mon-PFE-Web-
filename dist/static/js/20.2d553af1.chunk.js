(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1450:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"g",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return h}),n.d(t,"a",function(){return m}),n.d(t,"h",function(){return E});var o=n(5),r=n(31),c=(n(419),n(56)),i=n.n(c),a=n(93),l=n(24),u=function(e){return function(t){i.a.auth().onAuthStateChanged(function(n){n&&(console.log(n.uid),i.a.firestore().collection("users").doc(n.uid).get().then(function(c){console.log(c.data());var i=c.data().displayName;console.log(i);var a={uid:n.uid,displayName:i},l=r.a.firestore().collection("clients").doc().id;r.a.firestore().collection("clients").doc(l).set(Object(o.a)({},e,{id:l,authorName:a.displayName,authorId:a.uid,createdAt:new Date})).then(function(){t({type:"Add_CLIENT"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},s=function(e){return function(t){r.a.firestore().collection("clients").doc(e).delete().then(function(e){e||a.a.dispatch(l.j({message:"Ce client a \xe9t\xe9 supprim\xe9 avec succ\xe8s "}))})}},d=function(){return{type:"OPEN_DIALOG_CLIENT"}};function f(){return{type:"CLOSE_DIALOG_CLIENT"}}var p=[],g=function(){return function(e){r.a.firestore().collection("clients").get().then(function(t){return t.forEach(function(e){var t=Object(o.a)({},e.data(),{id:e.id});p.push(t)}),e(h(p)),p}).catch(function(e){console.error("Error writing document: ",e)})}},h=function(e){return{type:"GET_ALL_CLIENTS_SUCCESS",payload:e}};function m(e){return{type:"EDIT_CLIENT_ITEM",client:e}}var E=function(e){return function(t){r.a.firestore().collection("clients").doc(e.id).update(Object(o.a)({},e)).then(function(){t({type:"UPDATE_CLIENT"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1550:function(e,t,n){"use strict";n.r(t),n.d(t,"MapClients",function(){return b});var o=n(11),r=n(12),c=n(14),i=n(13),a=n(15),l=n(0),u=n.n(l),s=n(1459),d=n(21),f=n(18),p=n(185),g=n(1450),h=n(1),m=n(16),E=n(30),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={isOpen:!1},n.handleToggleOpen=function(){n.setState({isOpen:!0})},n.handleToggleClose=function(){n.setState({isOpen:!1})},n}return Object(a.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.clients||[];return u.a.createElement("div",null,u.a.createElement(m.b,{enter:{animation:"transition.slideUpBigIn"}},u.a.createElement(h.d,{className:"w-full mb-16"},u.a.createElement(h.a,{position:"static",elevation:2,style:{backgroundColor:"#124164"}},u.a.createElement(h.db,{className:"pl-16 pr-8"},u.a.createElement(h.o,{color:"primary"},u.a.createElement(h.w,{"aria-label":"arrow_back",component:E.a,to:"/clients"},"arrow_back")))))),u.a.createElement(s.Map,{google:this.props.google,zoom:8,initialCenter:{lat:48.864497,lng:2.347071}},t.map(function(t){return u.a.createElement(s.Marker,{position:{lat:t.latitude,lng:t.longitude},icon:"https://i.ibb.co/gMsNH3x/forbidden.png"},e.state.isOpen&&u.a.createElement(s.InfoWindow,{onCloseClick:function(){return e.handleToggleClose()}},u.a.createElement("span",null,"Something")))})))}}]),t}(l.Component);t.default=Object(f.e)(Object(d.b)(function(e){return{allClients:e.clientReducer.allClients,clients:e.firestore.ordered.clients,auth:e.firebase.auth}},{getAllClients:g.e,getAllClientsSuccess:g.f,EditClientItem:g.a}),Object(p.firestoreConnect)([{collection:"clients"}]),Object(s.GoogleApiWrapper)({apiKey:"AIzaSyDZt_9RcYvqfLVpUptCOK3ju_iFlnSv8IE"}))(b)}}]);