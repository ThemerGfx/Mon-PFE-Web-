(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1446:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(31),r=function(){return function(e){n.a.auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})}}},1447:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"f",function(){return l}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return f}),a.d(t,"e",function(){return g}),a.d(t,"a",function(){return h}),a.d(t,"g",function(){return p});var n=a(5),r=a(31),i=(a(419),a(56)),o=a.n(i),u=a(93),s=a(24),c=function(e){return function(t){o.a.auth().onAuthStateChanged(function(a){a&&(console.log(a.uid),o.a.firestore().collection("users").doc(a.uid).get().then(function(i){console.log(i.data());var o=i.data().displayName;console.log(o);var u={uid:a.uid,displayName:o},s=r.a.firestore().collection("r\xe9seaux").doc().id;r.a.firestore().collection("r\xe9seaux").doc(s).set(Object(n.a)({},e,{id:s,authorName:u.displayName,authorId:u.uid,createdAt:new Date})).then(function(){t({type:"Add_RESEAU"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},l=function(e){return function(t){r.a.firestore().collection("r\xe9seaux").doc(e).delete().then(function(e){e||u.a.dispatch(s.j({message:"Ce r\xe9seau a \xe9t\xe9 supprim\xe9"}))})}},d=function(){return{type:"OPEN_DIALOG_RESEAU"}};var m=[],f=function(){return function(e){r.a.firestore().collection("r\xe9seaux").get().then(function(t){return t.forEach(function(e){var t=Object(n.a)({},e.data(),{id:e.id});m.push(t)}),e(g(m)),m}).catch(function(e){console.error("Error writing document: ",e)})}},g=function(e){return{type:"GET_ALL_RESEAUX_SUCCESS",payload:e}};function h(e){return{type:"EDIT_RESEAU_ITEM","r\xe9seau":e}}var p=function(e){return function(t){r.a.firestore().collection("r\xe9seaux").doc(e.id).update(Object(n.a)({},e)).then(function(){t({type:"UPDATE_RESEAU"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1451:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"g",function(){return l}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return h}),a.d(t,"a",function(){return p}),a.d(t,"h",function(){return E});var n=a(5),r=a(31),i=(a(419),a(56)),o=a.n(i),u=a(93),s=a(24),c=function(e){return function(t){o.a.auth().onAuthStateChanged(function(a){a&&(console.log(a.uid),o.a.firestore().collection("users").doc(a.uid).get().then(function(i){console.log(i.data());var o=i.data().displayName;console.log(o);var u={uid:a.uid,displayName:o},s=r.a.firestore().collection("magasins").doc().id;r.a.firestore().collection("magasins").doc(s).set(Object(n.a)({},e,{id:s,authorName:u.displayName,authorId:u.uid,createdAt:new Date})).then(function(){t({type:"Add_MAGASIN"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},l=function(e){return function(t){r.a.firestore().collection("magasins").doc(e).delete().then(function(e){e||u.a.dispatch(s.j({message:"Ce magasin a \xe9t\xe9 supprim\xe9 aves succ\xe8s"}))})}},d=function(){return{type:"OPEN_DIALOG_MAGASIN"}};function m(){return{type:"CLOSE_DIALOG_MAGASIN"}}var f=[],g=function(){return function(e){r.a.firestore().collection("magasins").get().then(function(t){return t.forEach(function(e){var t=Object(n.a)({},e.data(),{id:e.id});f.push(t)}),e(h(f)),f}).catch(function(e){console.error("Error writing document: ",e)})}},h=function(e){return{type:"GET_ALL_MAGASINS_SUCCESS",payload:e}};function p(e){return{type:"EDIT_MAGASIN_ITEM",magasin:e}}var E=function(e){return function(t){r.a.firestore().collection("magasins").doc(e.id).update(Object(n.a)({},e)).then(function(){t({type:"UPDATE_MAGASINS"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1452:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"g",function(){return l}),a.d(t,"b",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return h}),a.d(t,"a",function(){return p}),a.d(t,"h",function(){return E});var n=a(5),r=a(31),i=(a(419),a(56)),o=a.n(i),u=a(93),s=a(24),c=function(e){return function(t){o.a.auth().onAuthStateChanged(function(a){a&&(console.log(a.uid),o.a.firestore().collection("users").doc(a.uid).get().then(function(i){console.log(i.data());var o=i.data().displayName;console.log(o);var u={uid:a.uid,displayName:o},s=r.a.firestore().collection("marques").doc().id;r.a.firestore().collection("marques").doc(s).set(Object(n.a)({},e,{id:s,authorName:u.displayName,authorId:u.uid,createdAt:new Date})).then(function(){t({type:"Add_MARQUE"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},l=function(e){return function(t){r.a.firestore().collection("marques").doc(e).delete().then(function(e){e||u.a.dispatch(s.j({message:"Cette marque a \xe9t\xe9 supprim\xe9e aves succ\xe8s"}))})}},d=function(){return{type:"OPEN_DIALOG_MARQUE"}},m=function(){return{type:"CLOSE_DIALOG_MARQUE"}},f=[],g=function(){return function(e){r.a.firestore().collection("marques").get().then(function(t){return t.forEach(function(e){var t=Object(n.a)({},e.data(),{id:e.id});f.push(t)}),e(h(f)),f}).catch(function(e){console.error("Error writing document: ",e)})}},h=function(e){return{type:"GET_ALL_MARQUES_SUCCESS",payload:e}};function p(e){return{type:"EDIT_MARQUE_ITEM",marque:e}}var E=function(e){return function(t){r.a.firestore().collection("marques").doc(e.id).update(Object(n.a)({},e)).then(function(){t({type:"UPDATE_MARQUES"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1553:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(40),i=a(34),o=a(11),u=a(12),s=a(14),c=a(13),l=a(15),d=a(0),m=a.n(d),f=a(1),g=a(16),h=a(82),p=a(30),E=a(185),_=a(9),v=a(21),b=a(18),S=a(1451),A=a(1447),y=a(1452),M=a(1446),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var u=arguments.length,l=new Array(u),d=0;d<u;d++)l[d]=arguments[d];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={id:"",nom_mag:"",adresse_mag:"",longitude:"",latitude:"","r\xe9seau_mag":"",marque_mag:"",userMenu:null},a.updateMagasinState=function(){var e=a.props.match.params.magasinId;if("magasin"===e)a.setState({id:"",nom_mag:"",adresse_mag:"","r\xe9seau_mag":"",marque_mag:"",longitude:"",latitude:""});else{var t=a.props.magasinItem;a.setState({id:e,nom_mag:t.nom_mag,adresse_mag:t.adresse_mag,longitude:t.longitude,latitude:t.latitude,"r\xe9seau_mag":t.r\u00e9seau_mag,marque_mag:t.marque_mag})}},a.handleSaveMagasin=function(){a.props.addMagasin(a.state),a.setState({id:"",nom_mag:"",adresse_mag:"","r\xe9seau_mag":"",marque_mag:"",longitude:"",latitude:""})},a.handleUpdateMagasin=function(){a.props.updateMagasin(a.state),a.setState({id:"",nom_mag:"",adresse_mag:"","r\xe9seau_mag":"",marque_mag:"",longitude:"",latitude:""})},a.handleChange=function(e){a.setState(Object(i.a)({},e.target.id,e.target.value))},a.addMarqueToListe=function(){a.setState({marquesliste:[].concat(Object(r.a)(a.state.marquesliste),[""])})},a.handleChangeListe=function(e,t){a.state.marquesliste[t]=e.target.value,a.setState({marquesliste:a.state.marquesliste})},a.handleSignOut=function(){a.props.signOut()},a.handleChipChangeMarques=function(e,t){a.setState({marque_mag:_.a.set(Object(n.a)({},a.state.marque_mag),t,e.map(function(e){return e.value}))})},a.handleChipChangeR\u00e9seaux=function(e,t){a.setState({"r\xe9seau_mag":_.a.set(Object(n.a)({},a.state.r\u00e9seau_mag),t,e.map(function(e){return e.value}))})},a}return Object(l.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.updateMagasinState(),this.props.getAllMagasins(),this.props.getAllMarquesSuccess(),console.log("je trouve",this.props.magasinItem)}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props.match.params.magasinId;if("edit"===n){var r=this.props.magasinItem;this.setState({id:n,nom_mag:r.nom_mag,adresse_mag:r.adresse_mag,longitude:r.longitude,latitude:r.latitude,"r\xe9seau_mag":r.r\u00e9seau_mag,marque_mag:r.marque_mag})}}},{key:"render",value:function(){var e=this;if(!this.props.auth.uid)return m.a.createElement(h.a,{to:"/Login"});var t=(this.props.r\u00e9seaux||[]).map(function(e){return console.log(e.nom_res),e.nom_res}).map(function(e){return{value:e,label:e}}),a=(this.props.marques||[]).map(function(e){return console.log(e.nom_marque),e.nom_marque}).map(function(e){return{value:e,label:e}});return m.a.createElement(g.m,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:m.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},m.a.createElement("div",{className:"flex flex-col items-start max-w-full"},m.a.createElement(g.a,{animation:"transition.slideRightIn",delay:300},m.a.createElement(f.fb,{className:"normal-case flex items-center sm:mb-12",component:p.a,role:"button",to:"/magasins"},m.a.createElement(f.w,{className:"mr-4 text-20"},"arrow_back"),"Magasins")),m.a.createElement("div",{className:"flex items-center max-w-full"},m.a.createElement("div",{className:"flex flex-col min-w-0"},m.a.createElement(g.a,{animation:"transition.slideLeftIn",delay:300},m.a.createElement(f.fb,{className:"text-16 sm:text-20 truncate"},this.state.nom_mag?this.state.nom_mag:"Nouveau Magasin")),m.a.createElement(g.a,{animation:"transition.slideLeftIn",delay:300},m.a.createElement(f.fb,{variant:"caption"},"Magasin Details"))))),m.a.createElement("div",null,m.a.createElement(g.a,{animation:"transition.slideRightIn",delay:300},"magasin"===this.props.match.params.magasinId?m.a.createElement(f.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleSaveMagasin},"Save"):m.a.createElement(f.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleUpdateMagasin,component:p.a,to:"/magasins"},"Update")),m.a.createElement(g.a,{animation:"transition.perspectiveDownIn",delay:500},m.a.createElement(f.c,{onClick:this.handleSignOut,component:p.a,to:"/Login"},"Log Out")))),contentToolbar:m.a.createElement("div",{className:"px-24"},m.a.createElement(g.a,{animation:"transition.perspectiveUpIn",delay:500},"magasin"===this.props.match.params.magasinId?m.a.createElement("h4",null," Nouveau Magasin "):m.a.createElement("h4",null," Magasin details "))),content:m.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},m.a.createElement("form",null,m.a.createElement(g.a,{animation:"transition.bounceUpIn",delay:1200},m.a.createElement(f.cb,{value:this.state.nom_mag,id:"nom_mag",label:"Nom",onChange:this.handleChange,variant:"outlined",margin:"normal",className:"mt-8 mb-16",name:"nom_mag",fullWidth:!0,required:!0})),m.a.createElement(g.a,{animation:"transition.bounceUpIn",delay:1e3},m.a.createElement(f.cb,{className:"mt-8 mb-16",id:"adresse_mag",name:"adresse_mag",onChange:this.handleChange,label:"Adresse",type:"text",value:this.state.adresse_mag,multiline:!0,variant:"outlined",fullWidth:!0})),m.a.createElement(g.a,{animation:"transition.bounceUpIn",delay:800},m.a.createElement(f.cb,{className:"mt-8 mb-16",id:"longitude",name:"longitude",onChange:this.handleChange,label:"Longitude",type:"text",value:this.state.longitude,variant:"outlined",fullWidth:!0})),m.a.createElement(g.a,{animation:"transition.bounceUpIn",delay:800},m.a.createElement(f.cb,{className:"mt-8 mb-16",id:"latitude",name:"latitude",onChange:this.handleChange,label:"Latitude",type:"text",value:this.state.latitude,variant:"outlined",fullWidth:!0})),m.a.createElement(g.d,{className:"mt-8 mb-24",onChange:function(t){return e.handleChipChangeR\u00e9seaux(t,"r\xe9seaux")},placeholder:"Choisissez les r\xe9seaux",textFieldProps:{label:"R\xe9seaux",InputLabelProps:{shrink:!0},variant:"outlined"},options:t,isMulti:!0}),m.a.createElement(g.d,{className:"mt-8 mb-24",onChange:function(t){return e.handleChipChangeMarques(t,"marques")},placeholder:"Choisissez les marques",textFieldProps:{label:"Marques",InputLabelProps:{shrink:!0},variant:"outlined"},options:a,isMulti:!0}),m.a.createElement("div",null))),innerScroll:!0})}}]),t}(d.Component);t.default=Object(b.e)(Object(v.b)(function(e){return console.log(e),{allMagasins:e.magasinReducer.allMagasins,magains:e.firestore.ordered.magains,magasinItem:e.magasinReducer.magasinItem,"allR\xe9seaux":e.r\u00e9seauReducer.allR\u00e9seaux,"r\xe9seaux":e.firestore.ordered.r\u00e9seaux,allMarques:e.marqueReducer.allMarques,marques:e.firestore.ordered.marques,auth:e.firebase.auth}},{"getAllR\xe9seaux":A.d,"getAllR\xe9seauxSuccess":A.e,getAllMarques:y.e,getAllMarquesSuccess:y.f,addMagasin:S.c,getAllMagasins:S.e,updateMagasin:S.h,signOut:M.a}),Object(E.firestoreConnect)([{collection:"r\xe9seaux"},{collection:"marques"}]))(C)}}]);