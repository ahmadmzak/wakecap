(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,a,t){e.exports=t.p+"static/media/logo.4ec6ec04.png"},5526:function(e,a,t){e.exports=t(5838)},5838:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),i=t.n(l),c=t(42),o=t(43),s=t(45),m=t(44),d=t(46),p=t(269),u=t(64),h=t(5842),g=t(5840),E=t(5839),f=t(5841),b=t(12),w=t(117),k=t.n(w),x=t(24),y=t(16),v=t(103),C=t.n(v),N=t(80),j=t.n(N),O=t(60),S=t.n(O),D=t(105),I=t.n(D),T=t(106),L=t.n(T),q=t(41),W=t.n(q),B=t(61),R=t.n(B),A=t(104),M=t.n(A),z=t(32),P=t.n(z),Z=t(30),F=t.n(Z),J=t(7),U=t.n(J),G=t(118),H=t.n(G),K=U()(function(e){return{layout:Object(y.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},logo:{width:"25vmin",height:"auto",margin:"".concat(e.spacing.unit,"px ").concat(4*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},link:{textDecoration:"none",color:"#ff8c17","&:visited":{color:"#cdc0a1"},"&:hover":{color:"#0f0f0f"},"&:active":{color:"#0f0f0f"},fontSize:"0.9rem"},container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",overflow:"hidden"},margin:{marginTop:.5*e.spacing.unit}}})(function(e){var a=e.classes;return e.loggedIn?r.a.createElement(g.a,{to:"/wakecap/workers"}):r.a.createElement("div",{className:a.container},r.a.createElement("img",{className:a.logo,src:H.a,alt:"wakecap-logo"}),r.a.createElement("main",{className:a.layout},r.a.createElement(P.a,{className:a.paper},r.a.createElement(C.a,{className:a.avatar},r.a.createElement(M.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h6"},"Log into your account"),r.a.createElement("form",{className:a.form},r.a.createElement(S.a,{margin:"normal",fullWidth:!0},r.a.createElement(R.a,{htmlFor:"email"},"Email Address"),r.a.createElement(W.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(S.a,{margin:"normal",fullWidth:!0},r.a.createElement(R.a,{htmlFor:"password"},"Password"),r.a.createElement(W.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(I.a,{control:r.a.createElement(L.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(j.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:e.handleLogin},"Log in"),r.a.createElement("div",{className:a.margin},r.a.createElement("a",{className:a.link,href:"forgot-password"},"Forgot password?")),r.a.createElement(j.a,{fullWidth:!0,variant:"contained",color:"secondary",className:a.submit},"Sign up")))))}),V=t(3),X=t(63),Q=t.n(X),Y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null,anchorElSite:null,anchorElZone:null},t.handleClick=function(e){return function(a){t.setState(Object(y.a)({},e,a.currentTarget))}},t.handleClose=function(e){return function(){t.setState(Object(y.a)({},e,null))}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.anchorElUser,t=e.anchorElSite,n=e.anchorElZone,l=this.props,i=l.classes,c=l.title;return r.a.createElement(V.a,{position:"fixed",className:i.appBar},r.a.createElement(V.p,{className:i.toolBar},r.a.createElement(V.g,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerToggle,className:i.menuButton},r.a.createElement(Q.a,null)),r.a.createElement(V.f,{xsDown:!0,implementation:"css"},r.a.createElement(V.q,{variant:"h5",noWrap:!0},c)),r.a.createElement("div",{className:i.noWrap},r.a.createElement(V.b,{"aria-owns":t?"site-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick("anchorElSite")},r.a.createElement(V.q,{variant:"subtitle1"},"Site"),r.a.createElement(b.k,null)),r.a.createElement(V.l,{id:"site-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose("anchorElSite")},r.a.createElement(V.m,{onClick:this.handleClose("anchorElSite")},"A"),r.a.createElement(V.m,{onClick:this.handleClose("anchorElSite")},"B"),r.a.createElement(V.m,{onClick:this.handleClose("anchorElSite")},"C")),r.a.createElement(V.b,{"aria-owns":n?"zone-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick("anchorElZone")},r.a.createElement(V.q,{variant:"subtitle1"},"Zone"),r.a.createElement(b.k,null)),r.a.createElement(V.l,{id:"zone-menu",anchorEl:n,open:Boolean(n),onClose:this.handleClose("anchorElZone")},r.a.createElement(V.m,{onClick:this.handleClose("anchorElZone")},"1"),r.a.createElement(V.m,{onClick:this.handleClose("anchorElZone")},"2"),r.a.createElement(V.m,{onClick:this.handleClose("anchorElZone")},"3"))),r.a.createElement(V.b,{"aria-owns":a?"user-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick("anchorElUser")},r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement(V.f,{smDown:!0,implementation:"css"},r.a.createElement(V.q,{variant:"subtitle1",noWrap:!0},"Username")),r.a.createElement(b.k,null)),r.a.createElement(V.l,{id:"user-menu",anchorEl:a,open:Boolean(a),onClose:this.handleClose("anchorElUser"),className:i.menu},r.a.createElement(V.m,{onClick:this.handleClose("anchorElUser")},r.a.createElement(b.a,{className:i.icon}),r.a.createElement(V.q,null,"Profile")),r.a.createElement(V.m,null,r.a.createElement(b.e,{className:i.icon}),r.a.createElement(V.q,null,"Dark Mode"),r.a.createElement(V.o,{checked:this.props.dark,onChange:this.props.onToggleDarkMode,value:"checked",color:"primary"})),r.a.createElement(V.m,{onClick:this.props.handleLogout},r.a.createElement(b.j,{className:i.icon}),r.a.createElement(V.q,null,"Logout")))))}}]),a}(n.Component),$=U()(function(e){return{appBar:Object(y.a)({zIndex:2e3,marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(y.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolBar:Object(y.a)({display:"flex",justifyContent:"space-around"},e.breakpoints.up("sm"),{justifyContent:"space-between"}),noWrap:{flexShrink:0,marginRight:"-20px",paddingRight:"10px"},menu:{zIndex:20001},icon:{marginRight:e.spacing.unit}}})(Y),_=U()(function(e){return{flex:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},emergencyBtn:{backgroundColor:"#D50000",color:"#fff"},logo:{height:64,marginTop:7},link:{textDecoration:"none"}}})(function(e){var a=e.classes,t=e.container,n=e.mobileOpen,l=e.items,i=r.a.createElement("div",{className:a.flex},r.a.createElement("div",{className:"".concat(a.toolbar," ").concat(a.flex)},r.a.createElement("img",{src:H.a,alt:"wakecap-logo",className:a.logo})),r.a.createElement(V.c,null),r.a.createElement(V.h,null,l.map(function(a,t){return r.a.createElement(V.i,{button:!0,key:a.text,selected:e.selectedIndex===t,onClick:function(a){return e.handleListItemClick(a,t)}},r.a.createElement(V.j,null,a.icon),r.a.createElement(V.k,{primary:a.text}))})),r.a.createElement(V.b,{className:a.emergencyBtn},"Emergency"));return r.a.createElement("nav",{className:a.drawer},r.a.createElement(V.f,{smUp:!0,implementation:"css"},r.a.createElement(V.d,{container:t,variant:"temporary",open:n,onClose:e.handleDrawerToggle,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},i)),r.a.createElement(V.f,{xsDown:!0,implementation:"css"},r.a.createElement(V.d,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},i)))}),ee=U()(function(e){return{paper:{margin:"".concat(e.spacing.unit," 0")},toolbar:e.mixins.toolbar,content:{flexGrow:1}}})(function(e){var a=e.classes;return r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(V.n,{square:!0,className:a.paper},e.children))}),ae=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1,selectedIndex:t.props.index},t.handleDrawerToggle=function(){t.setState(function(e){return{mobileOpen:!e.mobileOpen}})},t.handleListItemClick=function(e,a){t.setState({selectedIndex:a}),t.props.history.push("".concat(t.props.routes[a].link))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.routes;return r.a.createElement("div",{className:a.root},r.a.createElement($,{dark:this.props.dark,title:t[this.state.selectedIndex].text,handleLogout:this.props.handleLogout,handleDrawerToggle:this.handleDrawerToggle,onToggleDarkMode:this.props.toggleDarkMode}),r.a.createElement(_,{items:t,container:this.props.container,mobileOpen:this.state.mobileOpen,selectedIndex:this.state.selectedIndex,handleDrawerToggle:this.handleDrawerToggle,handleListItemClick:this.handleListItemClick}),r.a.createElement(ee,null,this.props.children))}}]),a}(n.Component),te=Object(x.withStyles)(function(e){return{root:{display:"flex"}}},{withTheme:!0})(ae),ne=t(4),re=t.n(ne),le=t(107),ie=t.n(le),ce=t(78),oe=t.n(ce),se=t(62),me=t.n(se),de=t(116),pe=t.n(de),ue=t(79),he=t.n(ue),ge=t(108),Ee=t.n(ge),fe=t(109),be=t.n(fe),we=t(110),ke=t.n(we),xe=t(113),ye=t.n(xe),ve=t(114),Ce=t.n(ve),Ne=t(115),je=t.n(Ne),Oe=Object(x.withStyles)(function(e){return{root:Object(y.a)({color:e.palette.text.primary},e.breakpoints.down("sm"),{justifyContent:"center",padding:0}),flex:{display:"flex",alignItems:"center",justifyContent:"center"},icon:{margin:"0px ".concat(e.spacing.unit,"px")},edit:{marginRight:e.spacing.unit,color:e.palette.text.primary}}})(function(e){var a=e.classes;return r.a.createElement(V.e,{container:!0,spacing:8,justify:"space-around",alignItems:"center",wrap:"nowrap",className:a.root},r.a.createElement(V.e,{item:!0,className:a.flex},r.a.createElement(b.a,{fontSize:"large",className:a.icon}),r.a.createElement(V.f,{smDown:!0,implementation:"css"},r.a.createElement("div",null,r.a.createElement(V.q,{variant:"h6"},"Worker Name"),r.a.createElement(V.q,null,"Designation")))),r.a.createElement(V.e,{item:!0},r.a.createElement(V.f,{smDown:!0,implementation:"css"},r.a.createElement(V.q,null,"Asset ID: #45235"),r.a.createElement(V.q,null,"Tag ID: #4334"))),r.a.createElement(V.e,{item:!0,className:a.flex},r.a.createElement(V.f,{smDown:!0,implementation:"css"},r.a.createElement("div",null,r.a.createElement(V.q,{variant:"h6"},"Supervisor Name"),r.a.createElement(V.q,null,"Designation"))),r.a.createElement(b.r,{fontSize:"large",className:a.icon})),r.a.createElement(V.e,{item:!0},r.a.createElement(V.b,{variant:"contained",color:"secondary"},r.a.createElement(b.i,{className:a.edit}),r.a.createElement(V.q,null,"Edit"))))}),Se=t(111),De=t.n(Se),Ie=t(112),Te=t.n(Ie),Le=Object(x.withStyles)(function(e){return{card:{width:250,height:150},flex:{display:"flex",justifyContent:"flex-start",alignItems:"center"},icon:{marginRight:2*e.spacing.unit},grow:{flexGrow:1},dotGreen:{width:10,height:10,borderRadius:"50%",backgroundColor:"green"},dotRed:{width:10,height:10,borderRadius:"50%",backgroundColor:"red"},push:{margin:"".concat(e.spacing.unit,"px 0px")}}})(function(e){var a=e.classes,t=e.details;return r.a.createElement(De.a,{className:a.card},r.a.createElement(Te.a,null,r.a.createElement("div",{className:a.flex},r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:t.assigned?a.dotGreen:a.dotRed})),r.a.createElement("div",{className:a.flex},r.a.createElement(b.n,{className:a.icon}),r.a.createElement(F.a,{component:"p"},"#".concat(t.id))),r.a.createElement("div",{className:"".concat(a.flex," ").concat(a.push)},r.a.createElement(b.p,{className:a.icon}),r.a.createElement(F.a,{component:"p"},t.user)),r.a.createElement("div",{className:a.flex},r.a.createElement(b.m,{className:a.icon}),r.a.createElement(F.a,{component:"p"},t.time))))}),qe=t(265),We=t.n(qe),Be=t(166),Re=t.n(Be),Ae=t(167),Me=t.n(Ae),ze=t(168),Pe=t.n(ze),Ze=t(268),Fe=t.n(Ze),Je=t(165),Ue=t.n(Je),Ge=t(264),He=t.n(Ge),Ke=[{date:"Today",hours:8},{date:"4 Jan",hours:9},{date:"3 Jan",hours:10},{date:"2 Jan",hours:8},{date:"1 Jan",hours:11},{date:"30 Dec",hours:9},{date:"29 Dec",hours:9},{date:"28 Dec",hours:6}],Ve=Object(x.withStyles)(function(e){return{root:{color:e.palette.text.primary,padding:"".concat(3*e.spacing.unit,"px 0px"),width:"100%",height:"auto"},flex:{display:"flex",alignItems:"center",width:"100%"},flexColumn:{display:"flex",flexDirection:"column"},icon:{margin:"".concat(3*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},center:{alignItems:"center",justifyContent:"center"},button:{margin:"".concat(2*e.spacing.unit,"px 0px"),color:e.palette.text.primary},chart:{},heading:{marginTop:3*e.spacing.unit},workersMid:{},chartContainer:Object(y.a)({width:"65%",height:"100%"},e.breakpoints.down("sm"),{width:"100%"})}})(function(e){var a=e.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(V.e,{container:!0,spacing:24,className:"".concat(a.root," ").concat(a.workersMid)},r.a.createElement(V.e,{item:!0,className:"".concat(a.center," ").concat(a.flexColumn)},r.a.createElement("div",{className:a.flex},r.a.createElement(b.g,{className:a.icon}),r.a.createElement("div",null,r.a.createElement(V.q,null,"Total Hours Worked"),r.a.createElement(V.q,{variant:"h6"},"2425"))),r.a.createElement("div",{className:a.flex},r.a.createElement(b.o,{className:a.icon}),r.a.createElement("div",null,r.a.createElement(V.q,null,"Last Active Zone"),r.a.createElement(V.q,{variant:"h6"},"Zone 2"))),r.a.createElement(V.b,{variant:"contained",color:"primary",className:a.button},"Full History")),r.a.createElement(V.e,{item:!0,className:a.chartContainer},r.a.createElement(He.a,{className:a.chart,width:"100%",height:350},r.a.createElement(We.a,{data:Ke},r.a.createElement(Me.a,{dataKey:"date",stroke:"#8884d8"}),r.a.createElement(Pe.a,null),r.a.createElement(Ue.a,null),r.a.createElement(Fe.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(Re.a,{type:"monotone",dataKey:"hours",fill:"#8884d8",barSize:20}))))),r.a.createElement(V.c,null),r.a.createElement(V.q,{variant:"h5",className:a.heading},"Assigned Helmets"),r.a.createElement(V.e,{container:!0,spacing:24,className:a.root,alignItems:"center"},r.a.createElement(V.e,{item:!0},r.a.createElement(Le,{details:{id:232534678,time:"7 mins ago",assigned:!0,user:"IN-006"}})),r.a.createElement(V.e,{item:!0},r.a.createElement(Le,{details:{id:342522418,time:"2 days ago",assigned:!1,user:"IN-008"}})),r.a.createElement(V.e,{item:!0},r.a.createElement(V.g,{color:"primary",className:a.button},r.a.createElement(b.b,{fontSize:"large"})))))}),Xe=[{name:"Worker 1",id:"297728957"},{name:"Worker 2",id:"134440905"},{name:"Worker 3",id:"194850805"},{name:"Worker 4",id:"743029490"},{name:"Worker 5",id:"098285085"},{name:"Worker 6",id:"092035413"},{name:"Worker 7",id:"132098857"},{name:"Worker 8",id:"098084057"},{name:"Worker 9",id:"747728957"}],Qe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{square:!0,className:re()(e.appBar,Object(y.a)({},e.appBarShift,this.state.open))},r.a.createElement(me.a,{"aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:re()(e.menuButton,Object(y.a)({},e.hide,this.state.open))},r.a.createElement(Q.a,null)),r.a.createElement(Oe,null)),r.a.createElement(ie.a,{variant:"permanent",classes:{paper:re()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:e.toolbar},this.state.open&&r.a.createElement(ye.a,{id:"outlined-search",label:"Search workers",type:"search",className:e.textField,margin:"normal",InputProps:{startAdornment:r.a.createElement(Ce.a,{position:"start"},r.a.createElement(je.a,null))}}),r.a.createElement(me.a,{onClick:this.handleDrawerClose},r.a.createElement(pe.a,null))),r.a.createElement(oe.a,null,Xe.map(function(e,a){return r.a.createElement(he.a,{button:!0,key:e.name,selected:0===a},r.a.createElement(Ee.a,null,r.a.createElement(ke.a,null)),r.a.createElement(be.a,{primary:e.name,secondary:e.id}))}))),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(Ve,null)))}}]),a}(r.a.Component),Ye=Object(x.withStyles)(function(e){var a;return{root:{display:"flex",position:"relative"},appBar:Object(y.a)({display:"flex",alignItems:"center",justifyContent:"space-between",position:"fixed",top:64,left:240,marginRight:240,zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:"calc(100% - ".concat(240,"px)"),padding:e.spacing.unit},e.breakpoints.down("xs"),{left:0,top:56,width:"100%"}),appBarShift:Object(y.a)({marginLeft:240,zIndex:1e3,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),paddingLeft:3*e.spacing.unit},e.breakpoints.down("sm"),{marginLeft:0}),menuButton:Object(y.a)({marginLeft:4,marginRight:34},e.breakpoints.down("sm"),{marginRight:30}),hide:{display:"none"},drawerPaper:Object(y.a)({position:"fixed",left:240,top:66,whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.down("sm"),{left:0,top:54}),drawerPaperClose:(a={overflowX:"hidden",transition:e.transitions.create(["width","opacity"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},Object(y.a)(a,e.breakpoints.up("sm"),{width:9*e.spacing.unit}),Object(y.a)(a,e.breakpoints.down("sm"),{opacity:0}),a),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 6px"},e.mixins.toolbar,{marginTop:2*e.spacing.unit}),content:Object(y.a)({width:"100%",flexGrow:1,padding:3*e.spacing.unit,paddingLeft:12*e.spacing.unit},e.breakpoints.down("sm"),{paddingLeft:3*e.spacing.unit}),textField:{marginLeft:2*e.spacing.unit}}},{withTheme:!0})(Qe),$e={primary:{light:"#ffbd4e",main:"#ff8c17",dark:"#c55d00",contrastText:"#0f0f0f"},secondary:{light:"#fff3d2",main:"#cdc0a1",dark:"#9c9072",contrastText:"#0f0f0f"},error:{main:"#e53935",contrastText:"#0f0f0f"}},_e=Object(x.createMuiTheme)({typography:{useNextVariants:!0},palette:Object(u.a)({type:"light"},$e)}),ea=Object(x.createMuiTheme)({typography:{useNextVariants:!0},palette:Object(u.a)({type:"dark"},$e)}),aa=[{text:"Dashboard",icon:r.a.createElement(b.h,null),link:"/dashboard"},{text:"Workers",icon:r.a.createElement(b.l,null),link:"/workers"},{text:"Zones",icon:r.a.createElement(b.o,null),link:"/zones"},{text:"Assign Helmets",icon:r.a.createElement(b.d,null),link:"/assign"},{text:"Reports",icon:r.a.createElement(b.c,null),link:"/reports"},{text:"Manage Site",icon:r.a.createElement(b.f,null),link:"/manage"},{text:"Settings",icon:r.a.createElement(b.q,null),link:"/settings"}],ta={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},na=function(e){var a=e.component,t=Object(p.a)(e,["component"]);return r.a.createElement(h.a,Object.assign({},t,{render:function(e){return ta.isAuthenticated?r.a.createElement(a,e):r.a.createElement(g.a,{to:"/wakecap/"})}}))},ra=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={loggedIn:!1,dark:!1},t.handleLogin=function(){ta.authenticate(function(){t.setState({loggedIn:!0})})},t.handleLogout=function(){ta.signout(function(){t.setState({loggedIn:!1})})},t.toggleDarkMode=function(){t.setState(function(e){return Object(u.a)({},e,{dark:!e.dark})})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(x.MuiThemeProvider,{theme:this.state.dark?ea:_e},r.a.createElement(k.a,null),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{exact:!0,path:"/wakecap/",render:function(a){return r.a.createElement(K,Object.assign({},a,{loggedIn:e.state.loggedIn,handleLogin:e.handleLogin}))}}),aa.map(function(a,t){return r.a.createElement(na,{key:a.text,path:"/wakecap"+a.link,component:function(n){return r.a.createElement(te,Object.assign({},n,{index:t,routes:aa,dark:e.state.dark,handleLogout:e.handleLogout,toggleDarkMode:e.toggleDarkMode}),1===t?r.a.createElement(Ye,null):r.a.createElement("div",null,a.text))}})}))))}}]),a}(n.Component);i.a.render(r.a.createElement(ra,null),document.getElementById("root"))}},[[5526,2,1]]]);
//# sourceMappingURL=main.25df5f85.chunk.js.map