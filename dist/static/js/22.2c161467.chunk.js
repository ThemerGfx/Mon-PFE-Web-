(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1447:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"f",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return g}),n.d(t,"a",function(){return E}),n.d(t,"g",function(){return h});var a=n(5),o=n(31),r=(n(419),n(56)),c=n.n(r),i=n(93),u=n(24),l=function(e){return function(t){c.a.auth().onAuthStateChanged(function(n){n&&(console.log(n.uid),c.a.firestore().collection("users").doc(n.uid).get().then(function(r){console.log(r.data());var c=r.data().displayName;console.log(c);var i={uid:n.uid,displayName:c},u=o.a.firestore().collection("r\xe9seaux").doc().id;o.a.firestore().collection("r\xe9seaux").doc(u).set(Object(a.a)({},e,{id:u,authorName:i.displayName,authorId:i.uid,createdAt:new Date})).then(function(){t({type:"Add_RESEAU"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},s=function(e){return function(t){o.a.firestore().collection("r\xe9seaux").doc(e).delete().then(function(e){e||i.a.dispatch(u.j({message:"Ce r\xe9seau a \xe9t\xe9 supprim\xe9"}))})}},d=function(){return{type:"OPEN_DIALOG_RESEAU"}};var f=[],p=function(){return function(e){o.a.firestore().collection("r\xe9seaux").get().then(function(t){return t.forEach(function(e){var t=Object(a.a)({},e.data(),{id:e.id});f.push(t)}),e(g(f)),f}).catch(function(e){console.error("Error writing document: ",e)})}},g=function(e){return{type:"GET_ALL_RESEAUX_SUCCESS",payload:e}};function E(e){return{type:"EDIT_RESEAU_ITEM","r\xe9seau":e}}var h=function(e){return function(t){o.a.firestore().collection("r\xe9seaux").doc(e.id).update(Object(a.a)({},e)).then(function(){t({type:"UPDATE_RESEAU"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1552:function(e,t,n){"use strict";n.r(t),n.d(t,"MapR\xe9seaux",function(){return b});var a=n(11),o=n(12),r=n(14),c=n(13),i=n(15),u=n(0),l=n.n(u),s=n(1459),d=n(21),f=n(18),p=n(185),g=n(1447),E=n(1),h=n(16),m=n(30),b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={isOpen:!1},n.handleToggleOpen=function(){n.setState({isOpen:!0})},n.handleToggleClose=function(){n.setState({isOpen:!1})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.r\u00e9seaux||[];return l.a.createElement("div",null,l.a.createElement(h.b,{enter:{animation:"transition.slideUpBigIn"}},l.a.createElement(E.d,{className:"w-full mb-16"},l.a.createElement(E.a,{position:"static",elevation:2,style:{backgroundColor:"#124164"}},l.a.createElement(E.db,{className:"pl-16 pr-8"},l.a.createElement(E.o,{color:"primary"},l.a.createElement(E.w,{"aria-label":"arrow_back",component:m.a,to:"/r\xe9seaux"},"arrow_back")))))),l.a.createElement(s.Map,{google:this.props.google,zoom:8,initialCenter:{lat:48.864497,lng:2.347071}},t.map(function(t){return l.a.createElement(s.Marker,{position:{lat:t.latitude,lng:t.longitude},icon:"https://i.ibb.co/FBzgXnx/wifi-icon-logo-Px-Z4-Aw0-600.png"},e.state.isOpen&&l.a.createElement(s.InfoWindow,{onCloseClick:function(){return e.handleToggleClose()}},l.a.createElement("span",null,"Something")))})))}}]),t}(u.Component);t.default=Object(f.e)(Object(d.b)(function(e){return console.log(e),{"allR\xe9seaux":e.r\u00e9seauReducer.allR\u00e9seaux,"r\xe9seaux":e.firestore.ordered.r\u00e9seaux,auth:e.firebase.auth}},{"getAllR\xe9seaux":g.d,"getAllR\xe9seauxSuccess":g.e,"EditR\xe9seauItem":g.a}),Object(p.firestoreConnect)([{collection:"r\xe9seaux"}]),Object(s.GoogleApiWrapper)({apiKey:"AIzaSyDZt_9RcYvqfLVpUptCOK3ju_iFlnSv8IE"}))(b)}}]);