(this["webpackJsonptramite-documentario-episi"]=this["webpackJsonptramite-documentario-episi"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(23),i=n.n(c),o=(n(39),n(14)),l=n(7),d=n.p+"static/media/estudiante.0cb003ea.svg",u=n.p+"static/media/persona.2c218a33.svg",j=n.p+"static/media/dni.b5f0a75f.svg",b=n.p+"static/media/empresa.33f5feba.svg",p=n.p+"static/media/carnet_estudiante.b051cd98.svg",h=n(5),m=n(2),O=n.n(m),f=n(3),x=n(6),v=n(17),g=n.n(v),N={alertError:function(e){g.a.fire({icon:"error",title:"Oops...",text:e})},alertOk:function(){g.a.fire({icon:"success",title:"Listo !!"})},miniAlert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mensaje",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",g.a.stopTimer),e.addEventListener("mouseleave",g.a.resumeTimer)}});n.fire({icon:t,title:e})}},y={manejoErrorGet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="Error";200!==e?(n=e+": Error al conectar con el servidor",N.miniAlert(n,"warning")):0===t.length&&(n="No hay datos Registrados",N.miniAlert(n,"warning"))},manejoErrorPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:201;201!==e?N.miniAlert("".concat(e,": No se puede registrar"),"error"):N.alertOk()},manejoMiniErrorPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:201;201!==e?N.miniAlert("".concat(e,": No se puede registrar"),"error"):N.miniAlert("Listo!","success")},manejoMiniErrorDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:204;204!==e?N.miniAlert("".concat(e,": No se puede eliminar"),"error"):N.miniAlert("Eliminaci\xf3n lista!","success")}},E={array:[]},w="GET_PERSONAS",S="GET_PERSONAS_DNIRUC",k="GET_PERSONAS_CODESTUDIANTE";var T=function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/personas");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,t({type:w,payload:a}),y.manejoErrorGet(n.status,a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},D=function(e,t){return Object(f.a)(O.a.mark((function t(){var n,a,r,s,c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8090/api/personas/buscar-por-dni/"+e.dniOruc);case 3:return n=t.sent,t.next=6,n.json();case 6:if(a=t.sent,!(200===n.status&&a.length>0)){t.next=11;break}N.miniAlert("Este DNI ya existe","warning"),t.next=26;break;case 11:return t.next=13,fetch("http://localhost:8090/api/personas/buscar-por-codEstudiante/"+e.codigoEstudiante);case 13:return r=t.sent,t.next=16,r.json();case 16:if(s=t.sent,!(200===r.status&&s.length>0)){t.next=21;break}N.miniAlert("Este C\xf3digo de estudiante ya existe","warning"),t.next=26;break;case 21:return c={dniRuc:e.dniOruc,nombre:e.nombre,correo:e.correo,codEstudiante:e.codigoEstudiante,puesto:{id:Number(e.puesto)}},t.next=24,fetch("http://localhost:8090/api/personas",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 24:i=t.sent,y.manejoErrorPost(i.status);case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(0),N.miniAlert(t.t0,"warning");case 31:case"end":return t.stop()}}),t,null,[[0,28]])})))},C=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.personas.array}));return Object(r.useEffect)((function(){e(T())}),[]),Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Nombre"}),Object(a.jsx)("th",{children:"Identificaci\xf3n"}),Object(a.jsx)("th",{children:"Correo"}),Object(a.jsx)("th",{children:"Puesto"})]})}),Object(a.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1<10?"0"+(t+1):t+1}),Object(a.jsx)("td",{children:e.nombre}),Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:1===e.puesto.id?p:8===e.dniRuc.length?j:b,alt:"",height:"18px"}),1===e.puesto.id?" "+e.codEstudiante:" "+e.dniRuc]}),Object(a.jsx)("td",{children:e.correo}),Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:1===e.puesto.id?d:u,alt:"",height:"18px"})," ",e.puesto.nombre]})]},e.id)})):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]})})]})})},A=n(16),_=(n(31),{array:[]}),R="GET_PUESTOS";var I=function(){var e,t,n,s,c=Object(h.b)(),i=Object(h.c)((function(e){return e.personaPuestos.array})),o=Object(A.a)(),l=o.register,d=o.errors,u=o.handleSubmit;Object(r.useEffect)((function(){c(function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/personas/puestos");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:R,payload:r}),y.manejoErrorGet(a.status,r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]);var j=function(){var e=Object(f.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(D(t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=document.getElementById("inputEstudiante");return Object(a.jsxs)("form",{className:"form-default",onSubmit:u(j),onKeyDown:function(e){return function(e){"Enter"===e.code&&e.preventDefault()}(e)},children:[Object(a.jsxs)("label",{className:"label-default",children:[" Puesto",Object(a.jsx)("select",{onChange:function(e){return function(e){"1"!==e?b.classList.add("deshabilitar"):b.classList.remove("deshabilitar")}(e.currentTarget.value)},name:"puesto",className:"input-default",ref:l(),children:i.length>0?i.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.nombre},e.id)})):Object(a.jsx)("option",{children:"No hay datos"})})]}),Object(a.jsxs)("label",{className:"label-default",children:[" Nombre",Object(a.jsx)("input",{type:"text",name:"nombre",className:"input-default",ref:l({required:{value:!0,message:"nombre obligatorio"},pattern:{value:/^[A-Za-z\xc0-\xff\s]+$/i,message:"nombre no v\xe1lido"}})})]}),Object(a.jsx)("span",{className:"input-error",children:null===d||void 0===d||null===(e=d.nombre)||void 0===e?void 0:e.message}),Object(a.jsxs)("label",{className:"label-default",children:[" Correo",Object(a.jsx)("input",{type:"text",name:"correo",className:"input-default",ref:l({required:{value:!0,message:"Correo obligatorio"},pattern:{value:/[a-z0-9_.-]+@[a-z]+\.[a-z0-9_.-]+[a-z0-9]/i,message:"correo no v\xe1lido"}})})]}),Object(a.jsx)("span",{className:"input-error",children:null===d||void 0===d||null===(t=d.correo)||void 0===t?void 0:t.message}),Object(a.jsxs)("label",{className:"label-default",children:[" DNI/RUC",Object(a.jsx)("input",{type:"text",name:"dniOruc",className:"input-default",ref:l({required:{value:!0,message:"DNI/RUC obligatorio"},pattern:{value:/[0-9]+$/,message:"se acepta solo n\xfameros"},minLength:{value:8,message:"muy corto, son 8 caracteres para DNI"},maxLength:{value:11,message:"te pasaste, solo 11 caracteres para RUC"}})})]}),Object(a.jsx)("span",{className:"input-error",children:null===d||void 0===d||null===(n=d.dniOruc)||void 0===n?void 0:n.message}),Object(a.jsxs)("label",{id:"inputEstudiante",className:"label-default",children:[" Cod. estudiante",Object(a.jsx)("input",{type:"text",name:"codigoEstudiante",className:"input-default",ref:l({pattern:{value:/[0-9]+$/,message:"solo se acepta n\xfameros"},minLength:{value:10,message:"muy corto, son 10 n\xfameros"},maxLength:{value:10,message:"muy grande, solo 10 n\xfameros"}})})]}),Object(a.jsx)("span",{className:"input-error",children:null===d||void 0===d||null===(s=d.codigoEstudiante)||void 0===s?void 0:s.message}),Object(a.jsx)("button",{className:"button-default",children:"Registrar"})]})},P=n(11),L=n(15),G=(n(45),{fechaSistema:function(){var e=new Date,t=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1;return"".concat(e.getFullYear(),"-").concat(n,"-").concat(t)}}),U={array:[]},z="GET_SOLICITUD_TIPOS";var M={array:[]},q="GET_SOLICITUDES";var B=function(){var e,t,n=Object(h.b)(),s=Object(h.c)((function(e){return e.solicitudTipos.array})),c=Object(h.c)((function(e){return e.personas.array})),i=Object(A.a)(),o=i.register,l=i.errors,d=i.handleSubmit,u=Object(r.useState)(null),j=Object(L.a)(u,2),b=j[0],p=j[1],m=Object(r.useState)(null),x=Object(L.a)(m,2),v=x[0],g=x[1];Object(r.useEffect)((function(){n(function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/solicitudes/tipo-solicitudes");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:z,payload:r}),y.manejoErrorGet(a.status,r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()),n(T())}),[]);var E=function(e){var t=e.target.value.trim();if(!(t.length>0))return null;var n,a=Object(P.a)(c);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(-1!==r.nombre.toLowerCase().indexOf(t.toLowerCase()))return r}}catch(s){a.e(s)}finally{a.f()}};return Object(a.jsxs)("form",{className:"form-default ",onSubmit:d((function(e,t){n(function(e,t,n,a){return function(){var r=Object(f.a)(O.a.mark((function r(s,c){var i,o,l;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i={descripcion:e.descripcion,tipoSolicitud:{id:e.tipoTramite},personaEmisor:{id:n.id},personasReceptoras:[{id:a.id}]},console.log(i),r.next=5,fetch("http://localhost:8090/api/solicitudes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 5:return o=r.sent,r.next=8,o.json();case 8:500===(l=r.sent).status?N.alertError("".concat(l.status,": ").concat(l.error)):(N.alertOk(),t.target.reset()),console.log(l),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),console.log(r.t0),N.alertError(r.t0);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e,t){return r.apply(this,arguments)}}()}(e,t,b,v))})),onKeyDown:function(e){return function(e){"Enter"===e.code&&e.preventDefault()}(e)},children:[Object(a.jsx)("p",{className:"default-subtitle",children:"Datos generales"}),Object(a.jsxs)("label",{className:"label-default",children:[" Tipo de Tr\xe1mite",Object(a.jsx)("select",{name:"tipoTramite",className:"input-default",ref:o(),children:s.length>0?s.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.nombre},e.id)})):Object(a.jsx)("option",{children:"No hay datos"})})]}),Object(a.jsxs)("label",{className:"label-default",children:[" Descripci\xf3n",Object(a.jsx)("textarea",{name:"descripcion",className:"input-default",ref:o()})]}),Object(a.jsx)("p",{className:"default-subtitle",children:"Datos del Solicitante"}),Object(a.jsx)("input",{onKeyDown:function(e){return function(e){p(E(e)),"Enter"===e.code&&(e.target.value=b.nombre)}(e)},type:"search",name:"solicitante",placeholder:"Nombre de solicitante",className:"input-default input-buscador",ref:o({required:{value:!0,message:"solicitante obligatorio"}})}),Object(a.jsx)("span",{className:"input-error",children:null===l||void 0===l||null===(e=l.solicitante)||void 0===e?void 0:e.message}),null!==b?Object(a.jsx)("ul",{className:"info-persona",children:Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:"persona-dato",children:[b.puesto.nombre,":"]})," ",b.nombre]})}):Object(a.jsxs)("ul",{className:"info-persona",children:[Object(a.jsx)("li",{})," "]}),Object(a.jsx)("p",{className:"default-subtitle",children:"Datos del destinatario"}),Object(a.jsx)("input",{onKeyDown:function(e){g(E(e)),"Enter"===e.code&&(e.target.value=v.nombre)},type:"search",name:"destinatario",placeholder:"Nombre de destinatario",className:"input-default input-buscador",ref:o({required:{value:!0,message:"destinatario obligatorio"}})}),Object(a.jsx)("span",{className:"input-error",children:null===l||void 0===l||null===(t=l.destinatario)||void 0===t?void 0:t.message}),null!==v?Object(a.jsx)("ul",{className:"info-persona",children:Object(a.jsxs)("li",{children:[Object(a.jsxs)("span",{className:"persona-dato",children:[v.puesto.nombre,":"]})," ",v.nombre]})}):Object(a.jsxs)("ul",{className:"info-persona",children:[Object(a.jsx)("li",{})," "]}),Object(a.jsx)("button",{type:"submit",className:"button-default",children:"Registrar"}),Object(a.jsx)("input",{name:"fecha",type:"text",value:G.fechaSistema(),readOnly:"readonly",className:"tramite-fecha"})]})},F=(n(46),n.p+"static/media/logo_uns.23e16e39.png"),K=n.p+"static/media/logo_episi.35a32d18.jpg",J=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header-information",children:[Object(a.jsx)("img",{src:F,alt:"logo UNS",height:"30px"}),Object(a.jsx)("h1",{className:"header-title",children:"Sistema de Tr\xe1mite Documentario de EPISI"}),Object(a.jsx)("img",{src:K,alt:"logo EPISI",height:"30px"})]})})},$=(n(47),n.p+"static/media/abrir_documento.6376c73e.svg"),H=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.solicitudes.array}));return Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/solicitudes");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:q,payload:r}),y.manejoErrorGet(a.status,r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"Solicitante"}),Object(a.jsx)("th",{children:"Tipo de tr\xe1mite"}),Object(a.jsx)("th",{children:"Estado de solicitud"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t+1<10?"0"+(t+1):t+1}),Object(a.jsxs)("td",{children:[Object(a.jsx)("img",{src:1===e.personaEmisor.puesto.id?d:u,alt:"",height:"18px"})," ",e.personaEmisor.nombre]}),Object(a.jsx)("td",{children:e.tipoSolicitud.nombre}),Object(a.jsxs)("td",{children:[Object(a.jsx)("span",{className:"estado-tramite "+e.estadoSolicitudes[e.estadoSolicitudes.length-1].estado.nombre,children:e.estadoSolicitudes[e.estadoSolicitudes.length-1].estado.nombre}),Object(a.jsx)("span",{className:"fecha-tramite",children:e.estadoSolicitudes[e.estadoSolicitudes.length-1].fecha})]}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){return function(e){var t="",n="";e.personasReceptoras.length>0?e.personasReceptoras.map((function(e,n){return t+="<tr>\n          <td>".concat(n+1<10?"0"+(n+1):n+1,"</td>\n          <td>").concat(e.puesto.nombre,"</td>\n          <td>").concat(e.nombre,"</td>\n          <td>").concat(e.correo,"</td>\n          <td>").concat(e.dniRuc,"</td>\n        </tr>")})):t="<tr>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>",e.estadoSolicitudes.length>0?e.estadoSolicitudes.map((function(e,t){return n+="<tr>\n          <td>".concat(t+1<10?"0"+(t+1):t+1,"</td>\n          <td>").concat(e.estado.nombre,"</td>\n          <td>").concat(e.fecha,"</td>\n          <td>").concat(e.descripcion,"</td>\n        </tr>")})):n="<tr>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>",g.a.fire({showCloseButton:!0,showConfirmButton:!1,width:800,title:"Consulta de Tr\xe1mite",html:'\n          <div class="container-tramite">\n            <p class="tramite-subtitle">Datos generales: </p>\n            <p>Tipo: '.concat(e.tipoSolicitud.nombre," </p>\n            <p>Descripci\xf3n: ").concat(e.descripcion,' </p> \n\n            <p class="tramite-subtitle">Datos del Solicitante: </p>\n            <p>').concat(e.personaEmisor.puesto.nombre,": ").concat(e.personaEmisor.nombre," </p> \n            <p>Correo:  ").concat(e.personaEmisor.correo," </p>\n            <p>Dni/Ruc:  ").concat(e.personaEmisor.dniRuc," </p>\n            <p>Cod Estudiante:  ").concat(e.personaEmisor.codEstudiante,' </p>\n\n            <p class="tramite-subtitle">Datos de Destinatarios: </p>\n            <div class="table-responsive">\n              <table class="">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Puesto</th>\n                    <th>Nombre</th>\n                    <th>Correo</th>\n                    <th>Dni/Ruc</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  ').concat(t,'\n                </tbody>\n              </table>\n            </div>\n            <p class="tramite-subtitle">Datos del Estado: </p>\n            <div class="table-responsive">\n              <table class="">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Estado</th>\n                    <th>fecha</th>\n                    <th>descripcion</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  ').concat(n,"\n                </tbody>\n              </table>\n            </div>\n          <div/>\n        "),footer:"Sistema de EPISI"})}(e)},children:Object(a.jsx)("img",{src:$,alt:"Abrir documento",height:"20px"})})})]},e.id)})):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]})})]})})},V={array:[]},X="GET_ARCHIVOS";var Z=function(){return function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/archivos/archivos-sin-solicitud");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:X,payload:r}),y.manejoErrorGet(a.status,r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},Y=n.p+"static/media/actualizar_doc.a46459c9.svg",Q=n.p+"static/media/ver.d7f731bb.svg",W=n.p+"static/media/eliminar.ef205528.svg",ee=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.archivos.array}));return Object(r.useEffect)((function(){e(Z())}),[]),Object(a.jsx)("div",{className:"table-responsive table-small",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("button",{className:"btn-actualizar",onClick:function(t){return e(Z())},children:Object(a.jsx)("img",{src:Y,alt:"",height:"25px"})})}),Object(a.jsx)("th",{children:"tipo file"}),Object(a.jsx)("th",{children:"descripcion"}),Object(a.jsx)("th",{children:"file"})]})}),Object(a.jsx)("tbody",{id:"listaArchivos",children:t.length>0?t.map((function(t,n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:n+1<10?"0"+(n+1):n+1}),Object(a.jsx)("td",{children:t.tipoArchivo.nombre}),Object(a.jsx)("td",{children:t.descripcion}),Object(a.jsxs)("td",{children:[Object(a.jsx)("a",{href:"http://localhost:8090/api/archivos/ver-archivo/".concat(t.id),target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:Q,alt:"",width:"25px"})}),Object(a.jsx)("button",{onClick:function(n){return e((a=t.id,Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/archivos/"+a,{method:"DELETE"});case 3:t=e.sent,console.log(t.status),y.manejoMiniErrorDelete(t.status),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),N.alertError(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))));var a},children:Object(a.jsx)("img",{src:W,alt:"",width:"25px"})})]})]},t.id)})):Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{}),Object(a.jsx)("td",{}),Object(a.jsx)("td",{})]})})]})})},te={array:[]},ne="GET_ARCHIVOS_TIPOS";var ae=function(){var e,t=Object(h.b)(),n=Object(h.c)((function(e){return e.archivoTipos.array})),s=Object(A.a)(),c=s.register,i=s.errors,o=s.handleSubmit;Object(r.useEffect)((function(){t(function(){var e=Object(f.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8090/api/archivos/tipoArchivos");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:ne,payload:r}),y.manejoErrorGet(a.status,r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),N.miniAlert(e.t0,"warning");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}())}),[]);return Object(a.jsxs)("form",{className:"form-default",onSubmit:o((function(e,n){var a;t((a=e,function(){var e=Object(f.a)(O.a.mark((function e(t,n){var r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(r=new FormData).append("documento",a.documento[0]),r.append("descripcion",a.descripcion),r.append("tipoArchivo.id",a.tipoArchivo),e.next=7,fetch("http://localhost:8090/api/archivos/crear-con-file",{method:"POST",body:r});case 7:s=e.sent,y.manejoMiniErrorPost(s.status),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),N.alertError(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()))})),children:[Object(a.jsx)("p",{className:"default-subtitle",children:"Archivos"}),Object(a.jsxs)("label",{className:"label-default",children:[" Tipo",Object(a.jsx)("select",{name:"tipoArchivo",className:"input-default",ref:c(),children:n.length>0?n.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.nombre},e.id)})):Object(a.jsx)("option",{children:"No hay datos"})})]}),Object(a.jsxs)("label",{className:"label-default",children:[" Descripcion",Object(a.jsx)("input",{type:"text",name:"descripcion",className:"input-default",ref:c({required:{value:!0,message:"descripci\xf3n obligatorio"}})})]}),Object(a.jsx)("span",{className:"input-error",children:null===i||void 0===i||null===(e=i.descripcion)||void 0===e?void 0:e.message}),Object(a.jsx)("input",{ref:c(),type:"file",name:"documento"}),Object(a.jsx)("button",{className:"button-default btn-small",children:"Agregar"})]})},re={array:[]},se="GET_TOKEN";var ce=function(e,t){return Object(f.a)(O.a.mark((function t(){var n,a,r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"frontendapp","12345",n=new FormData,a=new Headers,n.append("grant_type","password"),n.append("username",e.username),n.append("password",e.password),a.append("Authorization","Basic "+btoa("frontendapp:12345")),t.next=11,fetch("http://localhost:8090/api/security/oauth/token",{method:"POST",headers:a,body:n});case 11:return r=t.sent,t.next=14,r.json();case 14:s=t.sent,200===r.status&&(localStorage.setItem("mitoken",s.access_token),window.location.href="/inicio"),t.next=20;break;case 18:t.prev=18,t.t0=t.catch(0);case 20:case"end":return t.stop()}}),t,null,[[0,18]])})))},ie=(n(48),n.p+"static/media/login.208d4741.svg"),oe=function(){var e,t,n=Object(h.b)(),r=Object(A.a)(),s=r.register,c=r.errors,i=r.handleSubmit,o=function(){var e=Object(f.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(ce(t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container-login",children:[Object(a.jsx)("h2",{className:"default-title",children:"Login"}),Object(a.jsxs)("div",{className:"container-login-flex",children:[Object(a.jsx)("img",{src:ie,width:"150px",alt:""}),Object(a.jsxs)("form",{onSubmit:i(o),children:[Object(a.jsxs)("label",{className:"login-label",children:[" Username",Object(a.jsx)("input",{type:"text",name:"username",className:"login-input",ref:s({required:{value:!0,message:"username obligatorio"}})})]}),Object(a.jsx)("span",{className:"login-error",children:null===c||void 0===c||null===(e=c.username)||void 0===e?void 0:e.message}),Object(a.jsxs)("label",{className:"login-label",children:[" Contrase\xf1a",Object(a.jsx)("input",{type:"password",name:"password",className:"login-input",ref:s({required:{value:!0,message:"contrase\xf1a obligatorio"},pattern:{value:/^[0-9A-Za-z\xc0-\xff\s]+$/i,message:"contrase\xf1a no v\xe1lido"}})})]}),Object(a.jsx)("span",{className:"login-error",children:null===c||void 0===c||null===(t=c.password)||void 0===t?void 0:t.message}),Object(a.jsx)("button",{className:"login-btn",children:"Registrar"})]})]}),Object(a.jsx)("p",{className:"login-footer",children:"Demo del Sistema"})]})},le=(n(49),n.p+"static/media/hogar.b0fca4f1.svg"),de=function(){var e=Object(h.b)(),t=function(){e(Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("mitoken");case 1:case"end":return e.stop()}}),e)}))))};return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(o.b,{to:"/inicio",exact:!0,className:"navbar-option",children:Object(a.jsx)("img",{src:le,alt:"inicio",height:"25px"})}),Object(a.jsx)(o.b,{to:"/listar.personas",className:"navbar-option",activeClassName:"navbar-activate",children:"Listar personas"}),Object(a.jsx)(o.b,{to:"/registrar.persona",className:"navbar-option",activeClassName:"navbar-activate",children:"Registrar persona"}),Object(a.jsx)(o.b,{to:"/listar.tramites",className:"navbar-option",activeClassName:"navbar-activate",children:"Lista de tr\xe1mites"}),Object(a.jsx)(o.b,{to:"/registrar.tramite",className:"navbar-option",activeClassName:"navbar-activate",children:"Registrar tr\xe1mite"}),Object(a.jsx)(o.b,{to:"/login",exact:!0,className:"navbar-option",activeClassName:"navbar-activate",onClick:function(e){return t()},children:"Salir"})]})},ue=(n(51),function(){return Object(a.jsx)(r.Fragment,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(J,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{path:"/registrar.tramite",children:[Object(a.jsx)(de,{}),Object(a.jsxs)("main",{className:"container-main",children:[Object(a.jsx)("h2",{className:"default-title",children:"Registrar tr\xe1mite"}),Object(a.jsxs)("div",{className:"containerFlex",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(ae,{}),Object(a.jsx)(ee,{})]}),Object(a.jsx)(B,{})]})]})]}),Object(a.jsxs)(l.a,{path:"/listar.tramites",children:[Object(a.jsx)(de,{}),Object(a.jsxs)("main",{className:"container-main",children:[Object(a.jsx)("h2",{className:"default-title",children:"Lista de Tr\xe1mites"}),Object(a.jsx)(H,{})]})]}),Object(a.jsxs)(l.a,{path:"/registrar.persona",children:[Object(a.jsx)(de,{}),Object(a.jsxs)("main",{className:"container-main",children:[Object(a.jsx)("h2",{className:"default-title",children:"Registrar persona"}),Object(a.jsx)(I,{})]})]}),Object(a.jsxs)(l.a,{path:"/listar.personas",children:[Object(a.jsx)(de,{}),Object(a.jsxs)("main",{className:"container-main",children:[Object(a.jsx)("h2",{className:"default-title",children:"Lista de Personas"}),Object(a.jsx)(C,{})]})]}),Object(a.jsx)(l.a,{path:"/login",children:Object(a.jsx)(oe,{})}),Object(a.jsx)(l.a,{path:"/inicio",children:Object(a.jsx)(de,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(oe,{})})]})]})})}),je=n(18),be=n(33),pe=Object(je.c)({personas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case S:case k:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},personaPuestos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},archivos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},archivoTipos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},solicitudes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},solicitudTipos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(x.a)(Object(x.a)({},e),{},{array:t.payload});default:return e}}}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d;var me=function(){var e=Object(je.e)(pe,he(Object(je.a)(be.a)));return Object(a.jsx)(h.a,{store:e,children:Object(a.jsx)(ue,{})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(me,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6acf502f.chunk.js.map