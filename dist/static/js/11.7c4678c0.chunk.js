(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1446:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(31),i=function(){return function(e){a.a.auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})}}},1450:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return p}),n.d(t,"f",function(){return f}),n.d(t,"a",function(){return E}),n.d(t,"h",function(){return _});var a=n(5),i=n(31),c=(n(419),n(56)),l=n.n(c),o=n(93),s=n(24),r=function(e){return function(t){l.a.auth().onAuthStateChanged(function(n){n&&(console.log(n.uid),l.a.firestore().collection("users").doc(n.uid).get().then(function(c){console.log(c.data());var l=c.data().displayName;console.log(l);var o={uid:n.uid,displayName:l},s=i.a.firestore().collection("clients").doc().id;i.a.firestore().collection("clients").doc(s).set(Object(a.a)({},e,{id:s,authorName:o.displayName,authorId:o.uid,createdAt:new Date})).then(function(){t({type:"Add_CLIENT"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},u=function(e){return function(t){i.a.firestore().collection("clients").doc(e).delete().then(function(e){e||o.a.dispatch(s.j({message:"Ce client a \xe9t\xe9 supprim\xe9 avec succ\xe8s "}))})}},d=function(){return{type:"OPEN_DIALOG_CLIENT"}};function m(){return{type:"CLOSE_DIALOG_CLIENT"}}var h=[],p=function(){return function(e){i.a.firestore().collection("clients").get().then(function(t){return t.forEach(function(e){var t=Object(a.a)({},e.data(),{id:e.id});h.push(t)}),e(f(h)),h}).catch(function(e){console.error("Error writing document: ",e)})}},f=function(e){return{type:"GET_ALL_CLIENTS_SUCCESS",payload:e}};function E(e){return{type:"EDIT_CLIENT_ITEM",client:e}}var _=function(e){return function(t){i.a.firestore().collection("clients").doc(e.id).update(Object(a.a)({},e)).then(function(){t({type:"UPDATE_CLIENT"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1549:function(e,t,n){"use strict";n.r(t);var a=n(34),i=n(11),c=n(12),l=n(14),o=n(13),s=n(15),r=n(0),u=n.n(r),d=n(1),m=n(16),h=n(82),p=n(30),f=(n(9),n(21)),E=n(1450),_=n(1446),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={id:"",nom_soc:"",adresse_soc:"",longitude:"",latitude:"",SIREN:"",contact_tel:"",contact_email:""},n.updateClientState=function(){var e=n.props.match.params.clientId;if("client"===e)n.setState({nom_soc:"",adresse_soc:"",SIREN:"",contact_tel:"",contact_email:"",longitude:"",latitude:""});else{var t=n.props.clientItem;n.setState({id:e,nom_soc:t.nom_soc,adresse_soc:t.adresse_soc,longitude:t.longitude,latitude:t.latitude,SIREN:t.SIREN,contact_tel:t.contact_tel,contact_email:t.contact_email})}},n.handleSaveClient=function(){n.props.addClient(n.state),n.setState({id:"",nom_soc:"",adresse_soc:"",SIREN:"",contact_tel:"",contact_email:"",longitude:"",latitude:""})},n.handleUpdateClient=function(){n.props.updateClient(n.state),n.setState({id:"",nom_soc:"",adresse_soc:"",SIREN:"",contact_tel:"",contact_email:"",longitude:"",latitude:""})},n.handleChange=function(e){n.setState(Object(a.a)({},e.target.id,e.target.value))},n.handleSignOut=function(){n.props.signOut()},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateClientState(),console.log("je trouve",this.props.clientItem)}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props.match.params.clientId;if("edit"===a){var i=this.props.clientItem;this.setState({id:a,nom_soc:i.nom_soc,adresse_soc:i.adresse_soc,longitude:i.longitude,latitude:i.latitude,SIREN:i.SIREN,contact_tel:i.contact_tel,contact_email:i.contact_email})}}},{key:"render",value:function(){return this.props.auth.uid?u.a.createElement(m.m,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:u.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},u.a.createElement("div",{className:"flex flex-col items-start max-w-full"},u.a.createElement(m.a,{animation:"transition.slideRightIn",delay:300},u.a.createElement(d.fb,{className:"normal-case flex items-center sm:mb-12",component:p.a,role:"button",to:"/clients"},u.a.createElement(d.w,{className:"mr-4 text-20"},"arrow_back"),"Clients")),u.a.createElement("div",{className:"flex items-center max-w-full"},u.a.createElement("div",{className:"flex flex-col min-w-0"},u.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},u.a.createElement(d.fb,{className:"text-16 sm:text-20 truncate"},this.state.nom_soc?this.state.nom_soc:"New Client")),u.a.createElement(m.a,{animation:"transition.slideLeftIn",delay:300},u.a.createElement(d.fb,{variant:"caption"},"Client Details"))))),u.a.createElement("div",null,u.a.createElement(m.a,{animation:"transition.slideRightIn",delay:300},"client"===this.props.match.params.clientId?u.a.createElement(d.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleSaveClient},"Save"):u.a.createElement(d.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleUpdateClient,component:p.a,to:"/clients"},"Update")),u.a.createElement(m.a,{animation:"transition.perspectiveDownIn",delay:500},u.a.createElement(d.c,{onClick:this.handleSignOut,component:p.a,to:"/Login"},"Log Out")))),contentToolbar:u.a.createElement("div",{className:"px-24"},u.a.createElement(m.a,{animation:"transition.perspectiveUpIn",delay:500},"client"===this.props.match.params.clientId?u.a.createElement("h4",null," Nouveau Client "):u.a.createElement("h4",null," Client details "))),content:u.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},u.a.createElement("form",null,u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:1e3},u.a.createElement(d.cb,{value:this.state.nom_soc,id:"nom_soc",label:"Nom de la soci\xe9t\xe9",onChange:this.handleChange,variant:"outlined",margin:"normal",className:"mt-8 mb-16",name:"nom_soc",fullWidth:!0,required:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:800},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"adresse_soc",name:"adresse_soc",onChange:this.handleChange,label:"Adresse",type:"text",value:this.state.adresse_soc,multiline:!0,variant:"outlined",fullWidth:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:800},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"longitude",name:"longitude",onChange:this.handleChange,label:"Longitude",type:"text",value:this.state.longitude,variant:"outlined",fullWidth:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:800},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"latitude",name:"latitude",onChange:this.handleChange,label:"Latitude",type:"text",value:this.state.latitude,variant:"outlined",fullWidth:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:600},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"SIREN",name:"SIREN",onChange:this.handleChange,label:"SIREN",type:"text",value:this.state.SIREN,variant:"outlined",fullWidth:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:400},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"contact_tel",name:"contact_tel",onChange:this.handleChange,label:"T\xe9l\xe9phone",type:"text",value:this.state.contact_tel,variant:"outlined",fullWidth:!0})),u.a.createElement(m.a,{animation:"transition.bounceUpIn",delay:400},u.a.createElement(d.cb,{className:"mt-8 mb-16",id:"contact_email",name:"contact_email",onChange:this.handleChange,label:"Email",type:"text",value:this.state.contact_email,variant:"outlined",fullWidth:!0})))),innerScroll:!0}):u.a.createElement(h.a,{to:"/Login"})}}]),t}(r.Component);t.default=Object(f.b)(function(e){return console.log(e),{allClients:e.clientReducer.allClients,clients:e.firestore.ordered.clients,clientItem:e.clientReducer.clientItem,auth:e.firebase.auth}},{addClient:E.c,getAllClients:E.e,updateClient:E.h,signOut:_.a})(g)}}]);