(window.webpackJsonp=window.webpackJsonp||[]).push([["adminpanel"],{"0X6D":function(e,n,i){"use strict";(function(e){i("eoL8");function t(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var a=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var i,a,o;return i=n,o=[{key:"show",value:function(){var e=document.createElement("div");e.setAttribute("class","loader loader-default is-active"),e.setAttribute("id","bispinnerloader"),document.body.appendChild(e)}},{key:"hide",value:function(){e("#bispinnerloader").remove()}}],(a=null)&&t(i.prototype,a),o&&t(i,o),n}();n.a=a}).call(this,i("EVdn"))},"15k/":function(e,n,i){"use strict";(function(e){i("SYor");var n=i("BAPL"),t=i.n(n),a=i("ZXQi");e(document).ready(function(){e("#adminpanelcc").click(function(){a.a.eseguicomando("Vuoi pulire tutte le cache?",Routing.generate("fi_pannello_amministrazione_clearcache"))}),e("#adminpanelvcs").click(function(){var e="Vuoi prendere l'ultima versione dei sorgenti dal server "+this.dataset.vcs+"?";a.a.eseguicomando(e,Routing.generate("fi_pannello_amministrazione_getVcs"))}),e("#adminpanelphpunittest").click(function(){a.a.eseguicomando("Vuoi eseguire tutti i test unitari?",Routing.generate("fi_pannello_amministrazione_phpunittest"))}),e("#adminpanelunixcommand").click(function(){var n=e("#unixcommand").val();if(n.trim().length<=0)return t.a.alert({size:"medium",closeButton:!1,title:'<div class="alert alert-warning" role="alert">Attenzione</div>',message:"Specificare un comando valido"}),!1;var i="Vuoi eseguire il comando unix: "+n;a.a.eseguicomando(i,Routing.generate("fi_pannello_amministrazione_unixcommand"),{unixcommand:n})}),e("#adminpanelgenerateentity").click(function(){var n=e("#entityfile").val();if(!n)return t.a.alert({size:"medium",closeButton:!1,title:'<div class="alert alert-warning" role="alert">Attenzione</div>',message:"Specificare un modello mysqlworkbench"}),!1;var i="Vuoi creare i fle di configurazione per le entità partendo dal file: "+n;a.a.eseguicomando(i,Routing.generate("fi_pannello_amministrazione_generateentity"),{file:n})}),e("#adminpanelgenerateformcrud").click(function(){var n=e("#entityform").val();if(!n)return t.a.alert({size:"medium",closeButton:!1,title:'<div class="alert alert-warning" role="alert">Attenzione</div>',message:"Specificare una entity"}),!1;var i=e("#generatemplate").prop("checked"),o="Vuoi creare il crud per il form "+n;a.a.eseguicomando(o,Routing.generate("fi_pannello_amministrazione_generateformcrud"),{entityform:n,generatemplate:i})}),e("#adminpanelaggiornadatabase").click(function(){a.a.eseguicomando("Vuoi aggiornare il database partendo dalla definizione dalle entità esistenti",Routing.generate("fi_pannello_amministrazione_aggiornaschemadatabase"))}),e("#adminpanelsymfonycommand").click(function(){var n=e("#symfonycommand").val();if(n.trim().length<=0)return t.a.alert({size:"medium",closeButton:!1,title:'<div class="alert alert-warning" role="alert">Attenzione</div>',message:"Specificare un comando valido"}),!1;var i="Vuoi eseguire il comando "+n;a.a.eseguicomando(i,Routing.generate("fi_pannello_amministrazione_symfonycommand"),{symfonycommand:n})})})}).call(this,i("EVdn"))},"3Jit":function(e,n,i){"use strict";(function(e){i("eoL8");function t(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var a=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var i,a,o;return i=n,o=[{key:"showErrori",value:function(n){return e("<div>",{id:"corebundlemodalerror"}).css("height","300px").css("overflow-y","scroll").css("overflow-x","hidden").html(n)}},{key:"showMessaggi",value:function(n){return e("<div>",{id:"corebundlemodalinfo"}).css("height","300px").css("overflow-y","scroll").css("overflow-x","hidden").html(n)}}],(a=null)&&t(i.prototype,a),o&&t(i,o),n}();n.a=a}).call(this,i("EVdn"))},Amql:function(e,n,i){},ZXQi:function(e,n,i){"use strict";(function(e){i("eoL8");var t=i("BAPL"),a=i.n(t),o=i("0X6D"),r=i("3Jit");function l(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var c=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var i,t,c;return i=n,c=[{key:"eseguicomando",value:function(n,i,t){t=t||{},a.a.confirm({message:n,buttons:{cancel:{className:"btn btn-default biconfirmno",label:'<i class="fa fa-times"></i> Annulla'},confirm:{className:"btn btn-primary biconfirmyes",label:'<i class="fa fa-check"></i> Si'}},callback:function(n){n&&(o.a.show(),e.ajax({url:i,data:t}).done(function(n){var i=e("<div>").attr("role","alert").attr("class","alert alert-success alert-dismissible fade show");i.html("<strong>Operazione conclusa</strong>"),a.a.alert({size:"large",message:e.merge(i,r.a.showMessaggi(n)),buttons:{ok:{className:"btn btn-primary biconfirmok",label:'<i class="fa fa-check"></i> Ok'}}}),o.a.hide()}).fail(function(n,i){var t=e("<div>").attr("role","alert").attr("class","alert alert-warning alert-dismissible fade show");t.html("<strong>Si è verificato un errore</strong>"),a.a.alert({size:"large",closeButton:!1,message:e.merge(t,r.a.showErrori(n.responseText))}),o.a.hide()}))}})}}],(t=null)&&l(i.prototype,t),c&&l(i,c),n}();n.a=c}).call(this,i("EVdn"))},dQ5b:function(e,n,i){"use strict";i.r(n);i("Amql"),i("m4TX"),i("15k/"),i("ZXQi")},m4TX:function(e,n,i){"use strict";(function(e){i("fbCW"),i("yXV3"),i("+2oP"),i("SYor"),e(document).unbind("keyup").keyup(function(n){13==n.which&&window.currentfunction&&(n.preventDefault(),e("#adminpanel"+window.currentfunction).click(),window.currentfunction="")}),e(document).ready(function(){e("#symfonycommand").focusin(function(){window.currentfunction="symfonycommand"}),e("#unixcommand").focusin(function(){window.currentfunction="unixcommand"}),e("#entityform").focusin(function(){window.currentfunction=""}),e("#entityfile").focusin(function(){window.currentfunction=""}),e(function(){e('[data-toggle="tooltip"]').tooltip()})}),e(document).on("click",".autocomplete-list-text",function(n){n.preventDefault();var i="";i=e(this).text().indexOf("Label")?e(this).text().slice(0,-5).trim():e(this).text().trim(),e(this).closest("div").find(":input").val(i),e(this).closest("ul").removeClass("autocomplete-list-show"),e(this).closest("div").find(":input").focus()})}).call(this,i("EVdn"))}},[["dQ5b","runtime",0,2]]]);