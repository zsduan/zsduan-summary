System.register([],(function(){"use strict";return{execute:function(){var e,t,n=globalThis&&globalThis.__extends||(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),o=function(e){function t(t,n){var o=this,r=this.constructor.prototype;return(o=e.call(this,t)||this).statusCode=n,o.__proto__=r,o}return n(t,e),t}(Error),r=function(e){function t(t){void 0===t&&(t="A timeout occurred.");var n=this,o=this.constructor.prototype;return(n=e.call(this,t)||this).__proto__=o,n}return n(t,e),t}(Error),i=function(e){function t(t){void 0===t&&(t="An abort occurred.");var n=this,o=this.constructor.prototype;return(n=e.call(this,t)||this).__proto__=o,n}return n(t,e),t}(Error),s=globalThis&&globalThis.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a=function(e,t,n){this.statusCode=e,this.statusText=t,this.content=n},c=function(){function e(){}return e.prototype.get=function(e,t){return this.send(s({},t,{method:"GET",url:e}))},e.prototype.post=function(e,t){return this.send(s({},t,{method:"POST",url:e}))},e.prototype.delete=function(e,t){return this.send(s({},t,{method:"DELETE",url:e}))},e.prototype.getCookieString=function(e){return""},e}();!function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(t||(t={}));var l=globalThis&&globalThis.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))},h=globalThis&&globalThis.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},g=function(){function e(){}return e.isRequired=function(e,t){if(null==e)throw new Error("The '"+t+"' argument is required.")},e.isNotEmpty=function(e,t){if(!e||e.match(/^\s*$/))throw new Error("The '"+t+"' argument should not be empty.")},e.isIn=function(e,t,n){if(!(e in t))throw new Error("Unknown "+n+" value: "+e+".")},e}(),p=function(){function e(){}return Object.defineProperty(e,"isBrowser",{get:function(){return"object"==typeof window},enumerable:!0,configurable:!0}),Object.defineProperty(e,"isWebWorker",{get:function(){return"object"==typeof self&&"importScripts"in self},enumerable:!0,configurable:!0}),Object.defineProperty(e,"isNode",{get:function(){return!this.isBrowser&&!this.isWebWorker},enumerable:!0,configurable:!0}),e}();function f(e,t){var n="";return d(e)?(n="Binary data of length "+e.byteLength,t&&(n+=". Content: '"+function(e){var t=new Uint8Array(e),n="";return t.forEach((function(e){n+="0x"+(e<16?"0":"")+e.toString(16)+" "})),n.substr(0,n.length-1)}(e)+"'")):"string"==typeof e&&(n="String data of length "+e.length,t&&(n+=". Content: '"+e+"'")),n}function d(e){return e&&"undefined"!=typeof ArrayBuffer&&(e instanceof ArrayBuffer||e.constructor&&"ArrayBuffer"===e.constructor.name)}function b(e,n,o,r,i,s,a,c,g){return u(this,void 0,void 0,(function(){var u,p,b,y,m,w,T,C;return h(this,(function(h){switch(h.label){case 0:return p={},i?[4,i()]:[3,2];case 1:(b=h.sent())&&((u={}).Authorization="Bearer "+b,p=u),h.label=2;case 2:return y=v(),m=y[0],w=y[1],p[m]=w,e.log(t.Trace,"("+n+" transport) sending data. "+f(s,a)+"."),T=d(s)?"arraybuffer":"text",[4,o.post(r,{content:s,headers:l({},p,g),responseType:T,withCredentials:c})];case 3:return C=h.sent(),e.log(t.Trace,"("+n+" transport) request complete. Response status: "+C.statusCode+"."),[2]}}))}))}var y=function(){function e(e,t){this.subject=e,this.observer=t}return e.prototype.dispose=function(){var e=this.subject.observers.indexOf(this.observer);e>-1&&this.subject.observers.splice(e,1),0===this.subject.observers.length&&this.subject.cancelCallback&&this.subject.cancelCallback().catch((function(e){}))},e}();function v(){var e,t,n,o,r,i,s="X-SignalR-User-Agent";return p.isNode&&(s="User-Agent"),[s,(e="5.0.17",t=m(),n=p.isNode?"NodeJS":"Browser",o=w(),r="Microsoft SignalR/",i=e.split("."),r+=i[0]+"."+i[1],r+=" ("+e+"; ",r+=t&&""!==t?t+"; ":"Unknown OS; ",r+=""+n,r+=o?"; "+o:"; Unknown Runtime Version",r+=")")]}function m(){if(!p.isNode)return"";switch(process.platform){case"win32":return"Windows NT";case"darwin":return"macOS";case"linux":return"Linux";default:return process.platform}}function w(){if(p.isNode)return process.versions.node}var T=globalThis&&globalThis.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=globalThis&&globalThis.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},S=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))},k=globalThis&&globalThis.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},P=function(e){function n(t){var n=e.call(this)||this;if(n.logger=t,"undefined"==typeof fetch){var o="function"==typeof __webpack_require__?__non_webpack_require__:require;n.jar=new(o("tough-cookie").CookieJar),n.fetchType=o("node-fetch"),n.fetchType=o("fetch-cookie")(n.fetchType,n.jar),n.abortControllerType=o("abort-controller")}else n.fetchType=fetch.bind(self),n.abortControllerType=AbortController;return n}return T(n,e),n.prototype.send=function(e){return S(this,void 0,void 0,(function(){var n,s,c,l,u,h,g,p,f=this;return k(this,(function(d){switch(d.label){case 0:if(e.abortSignal&&e.abortSignal.aborted)throw new i;if(!e.method)throw new Error("No method defined.");if(!e.url)throw new Error("No url defined.");n=new this.abortControllerType,e.abortSignal&&(e.abortSignal.onabort=function(){n.abort(),s=new i}),c=null,e.timeout&&(l=e.timeout,c=setTimeout((function(){n.abort(),f.logger.log(t.Warning,"Timeout from HTTP request."),s=new r}),l)),d.label=1;case 1:return d.trys.push([1,3,4,5]),[4,this.fetchType(e.url,{body:e.content,cache:"no-cache",credentials:!0===e.withCredentials?"include":"same-origin",headers:C({"Content-Type":"text/plain;charset=UTF-8","X-Requested-With":"XMLHttpRequest"},e.headers),method:e.method,mode:"cors",redirect:"manual",signal:n.signal})];case 2:return u=d.sent(),[3,5];case 3:if(h=d.sent(),s)throw s;throw this.logger.log(t.Warning,"Error from HTTP request. "+h+"."),h;case 4:return c&&clearTimeout(c),e.abortSignal&&(e.abortSignal.onabort=null),[7];case 5:if(!u.ok)throw new o(u.statusText,u.status);return g=function(e,t){var n;switch(t){case"arraybuffer":n=e.arrayBuffer();break;case"text":default:n=e.text();break;case"blob":case"document":case"json":throw new Error(t+" is not supported.")}return n}(u,e.responseType),[4,g];case 6:return p=d.sent(),[2,new a(u.status,u.statusText,p)]}}))}))},n.prototype.getCookieString=function(e){var t="";return p.isNode&&this.jar&&this.jar.getCookies(e,(function(e,n){return t=n.join("; ")})),t},n}(c),_=globalThis&&globalThis.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),I=function(e){function n(t){var n=e.call(this)||this;return n.logger=t,n}return _(n,e),n.prototype.send=function(e){var n=this;return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new i):e.method?e.url?new Promise((function(s,c){var l=new XMLHttpRequest;l.open(e.method,e.url,!0),l.withCredentials=void 0===e.withCredentials||e.withCredentials,l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.setRequestHeader("Content-Type","text/plain;charset=UTF-8");var u=e.headers;u&&Object.keys(u).forEach((function(e){l.setRequestHeader(e,u[e])})),e.responseType&&(l.responseType=e.responseType),e.abortSignal&&(e.abortSignal.onabort=function(){l.abort(),c(new i)}),e.timeout&&(l.timeout=e.timeout),l.onload=function(){e.abortSignal&&(e.abortSignal.onabort=null),l.status>=200&&l.status<300?s(new a(l.status,l.statusText,l.response||l.responseText)):c(new o(l.statusText,l.status))},l.onerror=function(){n.logger.log(t.Warning,"Error from HTTP request. "+l.status+": "+l.statusText+"."),c(new o(l.statusText,l.status))},l.ontimeout=function(){n.logger.log(t.Warning,"Timeout from HTTP request."),c(new r)},l.send(e.content||"")})):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))},n}(c),E=globalThis&&globalThis.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(e){function t(t){var n=e.call(this)||this;if("undefined"!=typeof fetch||p.isNode)n.httpClient=new P(t);else{if("undefined"==typeof XMLHttpRequest)throw new Error("No usable HttpClient found.");n.httpClient=new I(t)}return n}E(t,e),t.prototype.send=function(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new i):e.method?e.url?this.httpClient.send(e):Promise.reject(new Error("No url defined.")):Promise.reject(new Error("No method defined."))},t.prototype.getCookieString=function(e){return this.httpClient.getCookieString(e)}}(c);var R,x=function(){function e(){}return e.write=function(t){return""+t+e.RecordSeparator},e.parse=function(t){if(t[t.length-1]!==e.RecordSeparator)throw new Error("Message is incomplete.");var n=t.split(e.RecordSeparator);return n.pop(),n},e.RecordSeparatorCode=30,e.RecordSeparator=String.fromCharCode(e.RecordSeparatorCode),e}(),D=function(){function e(){}return e.prototype.writeHandshakeRequest=function(e){return x.write(JSON.stringify(e))},e.prototype.parseHandshakeResponse=function(e){var t,n;if(d(e)||"undefined"!=typeof Buffer&&e instanceof Buffer){var o=new Uint8Array(e);if(-1===(i=o.indexOf(x.RecordSeparatorCode)))throw new Error("Message is incomplete.");var r=i+1;t=String.fromCharCode.apply(null,o.slice(0,r)),n=o.byteLength>r?o.slice(r).buffer:null}else{var i,s=e;if(-1===(i=s.indexOf(x.RecordSeparator)))throw new Error("Message is incomplete.");r=i+1,t=s.substring(0,r),n=s.length>r?s.substring(r):null}var a=x.parse(t),c=JSON.parse(a[0]);if(c.type)throw new Error("Expected a handshake response from the server.");return[n,c]},e}();!function(e){e[e.Invocation=1]="Invocation",e[e.StreamItem=2]="StreamItem",e[e.Completion=3]="Completion",e[e.StreamInvocation=4]="StreamInvocation",e[e.CancelInvocation=5]="CancelInvocation",e[e.Ping=6]="Ping",e[e.Close=7]="Close"}(R||(R={}));var O,j,H,A=function(){function e(){this.observers=[]}return e.prototype.next=function(e){for(var t=0,n=this.observers;t<n.length;t++)n[t].next(e)},e.prototype.error=function(e){for(var t=0,n=this.observers;t<n.length;t++){var o=n[t];o.error&&o.error(e)}},e.prototype.complete=function(){for(var e=0,t=this.observers;e<t.length;e++){var n=t[e];n.complete&&n.complete()}},e.prototype.subscribe=function(e){return this.observers.push(e),new y(this,e)},e}(),M=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))},L=globalThis&&globalThis.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};!function(e){e.Disconnected="Disconnected",e.Connecting="Connecting",e.Connected="Connected",e.Disconnecting="Disconnecting",e.Reconnecting="Reconnecting"}(O||(O={})),function(){function e(e,t,n,o){var r=this;this.nextKeepAlive=0,g.isRequired(e,"connection"),g.isRequired(t,"logger"),g.isRequired(n,"protocol"),this.serverTimeoutInMilliseconds=3e4,this.keepAliveIntervalInMilliseconds=15e3,this.logger=t,this.protocol=n,this.connection=e,this.reconnectPolicy=o,this.handshakeProtocol=new D,this.connection.onreceive=function(e){return r.processIncomingData(e)},this.connection.onclose=function(e){return r.connectionClosed(e)},this.callbacks={},this.methods={},this.closedCallbacks=[],this.reconnectingCallbacks=[],this.reconnectedCallbacks=[],this.invocationId=0,this.receivedHandshakeResponse=!1,this.connectionState=O.Disconnected,this.connectionStarted=!1,this.cachedPingMessage=this.protocol.writeMessage({type:R.Ping})}e.create=function(t,n,o,r){return new e(t,n,o,r)},Object.defineProperty(e.prototype,"state",{get:function(){return this.connectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"connectionId",{get:function(){return this.connection&&this.connection.connectionId||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"baseUrl",{get:function(){return this.connection.baseUrl||""},set:function(e){if(this.connectionState!==O.Disconnected&&this.connectionState!==O.Reconnecting)throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");if(!e)throw new Error("The HubConnection url must be a valid url.");this.connection.baseUrl=e},enumerable:!0,configurable:!0}),e.prototype.start=function(){return this.startPromise=this.startWithStateTransitions(),this.startPromise},e.prototype.startWithStateTransitions=function(){return M(this,void 0,void 0,(function(){var e;return L(this,(function(n){switch(n.label){case 0:if(this.connectionState!==O.Disconnected)return[2,Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."))];this.connectionState=O.Connecting,this.logger.log(t.Debug,"Starting HubConnection."),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,this.startInternal()];case 2:return n.sent(),this.connectionState=O.Connected,this.connectionStarted=!0,this.logger.log(t.Debug,"HubConnection connected successfully."),[3,4];case 3:return e=n.sent(),this.connectionState=O.Disconnected,this.logger.log(t.Debug,"HubConnection failed to start successfully because of error '"+e+"'."),[2,Promise.reject(e)];case 4:return[2]}}))}))},e.prototype.startInternal=function(){return M(this,void 0,void 0,(function(){var e,n,o,r=this;return L(this,(function(i){switch(i.label){case 0:return this.stopDuringStartError=void 0,this.receivedHandshakeResponse=!1,e=new Promise((function(e,t){r.handshakeResolver=e,r.handshakeRejecter=t})),[4,this.connection.start(this.protocol.transferFormat)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,5,,7]),n={protocol:this.protocol.name,version:this.protocol.version},this.logger.log(t.Debug,"Sending handshake request."),[4,this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(n))];case 3:return i.sent(),this.logger.log(t.Information,"Using HubProtocol '"+this.protocol.name+"'."),this.cleanupTimeout(),this.resetTimeoutPeriod(),this.resetKeepAliveInterval(),[4,e];case 4:if(i.sent(),this.stopDuringStartError)throw this.stopDuringStartError;return[3,7];case 5:return o=i.sent(),this.logger.log(t.Debug,"Hub handshake failed with error '"+o+"' during start(). Stopping HubConnection."),this.cleanupTimeout(),this.cleanupPingTimer(),[4,this.connection.stop(o)];case 6:throw i.sent(),o;case 7:return[2]}}))}))},e.prototype.stop=function(){return M(this,void 0,void 0,(function(){var e;return L(this,(function(t){switch(t.label){case 0:return e=this.startPromise,this.stopPromise=this.stopInternal(),[4,this.stopPromise];case 1:t.sent(),t.label=2;case 2:return t.trys.push([2,4,,5]),[4,e];case 3:case 4:return t.sent(),[3,5];case 5:return[2]}}))}))},e.prototype.stopInternal=function(e){return this.connectionState===O.Disconnected?(this.logger.log(t.Debug,"Call to HubConnection.stop("+e+") ignored because it is already in the disconnected state."),Promise.resolve()):this.connectionState===O.Disconnecting?(this.logger.log(t.Debug,"Call to HttpConnection.stop("+e+") ignored because the connection is already in the disconnecting state."),this.stopPromise):(this.connectionState=O.Disconnecting,this.logger.log(t.Debug,"Stopping HubConnection."),this.reconnectDelayHandle?(this.logger.log(t.Debug,"Connection stopped during reconnect delay. Done reconnecting."),clearTimeout(this.reconnectDelayHandle),this.reconnectDelayHandle=void 0,this.completeClose(),Promise.resolve()):(this.cleanupTimeout(),this.cleanupPingTimer(),this.stopDuringStartError=e||new Error("The connection was stopped before the hub handshake could complete."),this.connection.stop(e)))},e.prototype.stream=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r,i=this.replaceStreamingParams(n),s=i[0],a=i[1],c=this.createStreamInvocation(e,n,a),l=new A;return l.cancelCallback=function(){var e=t.createCancelInvocation(c.invocationId);return delete t.callbacks[c.invocationId],r.then((function(){return t.sendWithProtocol(e)}))},this.callbacks[c.invocationId]=function(e,t){t?l.error(t):e&&(e.type===R.Completion?e.error?l.error(new Error(e.error)):l.complete():l.next(e.item))},r=this.sendWithProtocol(c).catch((function(e){l.error(e),delete t.callbacks[c.invocationId]})),this.launchStreams(s,r),l},e.prototype.sendMessage=function(e){return this.resetKeepAliveInterval(),this.connection.send(e)},e.prototype.sendWithProtocol=function(e){return this.sendMessage(this.protocol.writeMessage(e))},e.prototype.send=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=this.replaceStreamingParams(t),r=o[0],i=o[1],s=this.sendWithProtocol(this.createInvocation(e,t,!0,i));return this.launchStreams(r,s),s},e.prototype.invoke=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=this.replaceStreamingParams(n),i=r[0],s=r[1],a=this.createInvocation(e,n,!1,s),c=new Promise((function(e,n){t.callbacks[a.invocationId]=function(t,o){o?n(o):t&&(t.type===R.Completion?t.error?n(new Error(t.error)):e(t.result):n(new Error("Unexpected message type: "+t.type)))};var o=t.sendWithProtocol(a).catch((function(e){n(e),delete t.callbacks[a.invocationId]}));t.launchStreams(i,o)}));return c},e.prototype.on=function(e,t){e&&t&&(e=e.toLowerCase(),this.methods[e]||(this.methods[e]=[]),-1===this.methods[e].indexOf(t)&&this.methods[e].push(t))},e.prototype.off=function(e,t){if(e){e=e.toLowerCase();var n=this.methods[e];if(n)if(t){var o=n.indexOf(t);-1!==o&&(n.splice(o,1),0===n.length&&delete this.methods[e])}else delete this.methods[e]}},e.prototype.onclose=function(e){e&&this.closedCallbacks.push(e)},e.prototype.onreconnecting=function(e){e&&this.reconnectingCallbacks.push(e)},e.prototype.onreconnected=function(e){e&&this.reconnectedCallbacks.push(e)},e.prototype.processIncomingData=function(e){if(this.cleanupTimeout(),this.receivedHandshakeResponse||(e=this.processHandshakeResponse(e),this.receivedHandshakeResponse=!0),e)for(var n=0,o=this.protocol.parseMessages(e,this.logger);n<o.length;n++){var r=o[n];switch(r.type){case R.Invocation:this.invokeClientMethod(r);break;case R.StreamItem:case R.Completion:var i=this.callbacks[r.invocationId];i&&(r.type===R.Completion&&delete this.callbacks[r.invocationId],i(r));break;case R.Ping:break;case R.Close:this.logger.log(t.Information,"Close message received from server.");var s=r.error?new Error("Server returned an error on close: "+r.error):void 0;!0===r.allowReconnect?this.connection.stop(s):this.stopPromise=this.stopInternal(s);break;default:this.logger.log(t.Warning,"Invalid message type: "+r.type+".")}}this.resetTimeoutPeriod()},e.prototype.processHandshakeResponse=function(e){var n,o,r;try{r=(n=this.handshakeProtocol.parseHandshakeResponse(e))[0],o=n[1]}catch(a){var i="Error parsing handshake response: "+a;this.logger.log(t.Error,i);var s=new Error(i);throw this.handshakeRejecter(s),s}if(o.error)throw i="Server returned handshake error: "+o.error,this.logger.log(t.Error,i),s=new Error(i),this.handshakeRejecter(s),s;return this.logger.log(t.Debug,"Server handshake complete."),this.handshakeResolver(),r},e.prototype.resetKeepAliveInterval=function(){this.connection.features.inherentKeepAlive||(this.nextKeepAlive=(new Date).getTime()+this.keepAliveIntervalInMilliseconds,this.cleanupPingTimer())},e.prototype.resetTimeoutPeriod=function(){var e=this;if(!(this.connection.features&&this.connection.features.inherentKeepAlive||(this.timeoutHandle=setTimeout((function(){return e.serverTimeout()}),this.serverTimeoutInMilliseconds),void 0!==this.pingServerHandle))){var t=this.nextKeepAlive-(new Date).getTime();t<0&&(t=0),this.pingServerHandle=setTimeout((function(){return M(e,void 0,void 0,(function(){return L(this,(function(e){switch(e.label){case 0:if(this.connectionState!==O.Connected)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.sendMessage(this.cachedPingMessage)];case 2:return e.sent(),[3,4];case 3:return e.sent(),this.cleanupPingTimer(),[3,4];case 4:return[2]}}))}))}),t)}},e.prototype.serverTimeout=function(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))},e.prototype.invokeClientMethod=function(e){var n=this,o=this.methods[e.target.toLowerCase()];if(o){try{o.forEach((function(t){return t.apply(n,e.arguments)}))}catch(i){this.logger.log(t.Error,"A callback for the method "+e.target.toLowerCase()+" threw error '"+i+"'.")}if(e.invocationId){var r="Server requested a response, which is not supported in this version of the client.";this.logger.log(t.Error,r),this.stopPromise=this.stopInternal(new Error(r))}}else this.logger.log(t.Warning,"No client method with the name '"+e.target+"' found.")},e.prototype.connectionClosed=function(e){this.logger.log(t.Debug,"HubConnection.connectionClosed("+e+") called while in state "+this.connectionState+"."),this.stopDuringStartError=this.stopDuringStartError||e||new Error("The underlying connection was closed before the hub handshake could complete."),this.handshakeResolver&&this.handshakeResolver(),this.cancelCallbacksWithError(e||new Error("Invocation canceled due to the underlying connection being closed.")),this.cleanupTimeout(),this.cleanupPingTimer(),this.connectionState===O.Disconnecting?this.completeClose(e):this.connectionState===O.Connected&&this.reconnectPolicy?this.reconnect(e):this.connectionState===O.Connected&&this.completeClose(e)},e.prototype.completeClose=function(e){var n=this;if(this.connectionStarted){this.connectionState=O.Disconnected,this.connectionStarted=!1;try{this.closedCallbacks.forEach((function(t){return t.apply(n,[e])}))}catch(o){this.logger.log(t.Error,"An onclose callback called with error '"+e+"' threw error '"+o+"'.")}}},e.prototype.reconnect=function(e){return M(this,void 0,void 0,(function(){var n,o,r,i,s,a=this;return L(this,(function(c){switch(c.label){case 0:if(n=Date.now(),o=0,r=void 0!==e?e:new Error("Attempting to reconnect due to a unknown error."),null===(i=this.getNextRetryDelay(o++,0,r)))return this.logger.log(t.Debug,"Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),this.completeClose(e),[2];if(this.connectionState=O.Reconnecting,e?this.logger.log(t.Information,"Connection reconnecting because of error '"+e+"'."):this.logger.log(t.Information,"Connection reconnecting."),this.onreconnecting){try{this.reconnectingCallbacks.forEach((function(t){return t.apply(a,[e])}))}catch(l){this.logger.log(t.Error,"An onreconnecting callback called with error '"+e+"' threw error '"+l+"'.")}if(this.connectionState!==O.Reconnecting)return this.logger.log(t.Debug,"Connection left the reconnecting state in onreconnecting callback. Done reconnecting."),[2]}c.label=1;case 1:return null===i?[3,7]:(this.logger.log(t.Information,"Reconnect attempt number "+o+" will start in "+i+" ms."),[4,new Promise((function(e){a.reconnectDelayHandle=setTimeout(e,i)}))]);case 2:if(c.sent(),this.reconnectDelayHandle=void 0,this.connectionState!==O.Reconnecting)return this.logger.log(t.Debug,"Connection left the reconnecting state during reconnect delay. Done reconnecting."),[2];c.label=3;case 3:return c.trys.push([3,5,,6]),[4,this.startInternal()];case 4:if(c.sent(),this.connectionState=O.Connected,this.logger.log(t.Information,"HubConnection reconnected successfully."),this.onreconnected)try{this.reconnectedCallbacks.forEach((function(e){return e.apply(a,[a.connection.connectionId])}))}catch(l){this.logger.log(t.Error,"An onreconnected callback called with connectionId '"+this.connection.connectionId+"; threw error '"+l+"'.")}return[2];case 5:return s=c.sent(),this.logger.log(t.Information,"Reconnect attempt failed because of error '"+s+"'."),this.connectionState!==O.Reconnecting?(this.logger.log(t.Debug,"Connection moved to the '"+this.connectionState+"' from the reconnecting state during reconnect attempt. Done reconnecting."),this.connectionState===O.Disconnecting&&this.completeClose(),[2]):(r=s instanceof Error?s:new Error(s.toString()),i=this.getNextRetryDelay(o++,Date.now()-n,r),[3,6]);case 6:return[3,1];case 7:return this.logger.log(t.Information,"Reconnect retries have been exhausted after "+(Date.now()-n)+" ms and "+o+" failed attempts. Connection disconnecting."),this.completeClose(),[2]}}))}))},e.prototype.getNextRetryDelay=function(e,n,o){try{return this.reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:n,previousRetryCount:e,retryReason:o})}catch(r){return this.logger.log(t.Error,"IRetryPolicy.nextRetryDelayInMilliseconds("+e+", "+n+") threw error '"+r+"'."),null}},e.prototype.cancelCallbacksWithError=function(e){var t=this.callbacks;this.callbacks={},Object.keys(t).forEach((function(n){(0,t[n])(null,e)}))},e.prototype.cleanupPingTimer=function(){this.pingServerHandle&&(clearTimeout(this.pingServerHandle),this.pingServerHandle=void 0)},e.prototype.cleanupTimeout=function(){this.timeoutHandle&&clearTimeout(this.timeoutHandle)},e.prototype.createInvocation=function(e,t,n,o){if(n)return 0!==o.length?{arguments:t,streamIds:o,target:e,type:R.Invocation}:{arguments:t,target:e,type:R.Invocation};var r=this.invocationId;return this.invocationId++,0!==o.length?{arguments:t,invocationId:r.toString(),streamIds:o,target:e,type:R.Invocation}:{arguments:t,invocationId:r.toString(),target:e,type:R.Invocation}},e.prototype.launchStreams=function(e,t){var n=this;if(0!==e.length){t||(t=Promise.resolve());var o=function(o){e[o].subscribe({complete:function(){t=t.then((function(){return n.sendWithProtocol(n.createCompletionMessage(o))}))},error:function(e){var r;r=e instanceof Error?e.message:e&&e.toString?e.toString():"Unknown error",t=t.then((function(){return n.sendWithProtocol(n.createCompletionMessage(o,r))}))},next:function(e){t=t.then((function(){return n.sendWithProtocol(n.createStreamItemMessage(o,e))}))}})};for(var r in e)o(r)}},e.prototype.replaceStreamingParams=function(e){for(var t=[],n=[],o=0;o<e.length;o++){var r=e[o];if(this.isObservable(r)){var i=this.invocationId;this.invocationId++,t[i]=r,n.push(i.toString()),e.splice(o,1)}}return[t,n]},e.prototype.isObservable=function(e){return e&&e.subscribe&&"function"==typeof e.subscribe},e.prototype.createStreamInvocation=function(e,t,n){var o=this.invocationId;return this.invocationId++,0!==n.length?{arguments:t,invocationId:o.toString(),streamIds:n,target:e,type:R.StreamInvocation}:{arguments:t,invocationId:o.toString(),target:e,type:R.StreamInvocation}},e.prototype.createCancelInvocation=function(e){return{invocationId:e,type:R.CancelInvocation}},e.prototype.createStreamItemMessage=function(e,t){return{invocationId:e,item:t,type:R.StreamItem}},e.prototype.createCompletionMessage=function(e,t,n){return t?{error:t,invocationId:e,type:R.Completion}:{invocationId:e,result:n,type:R.Completion}}}(),function(e){e[e.None=0]="None",e[e.WebSockets=1]="WebSockets",e[e.ServerSentEvents=2]="ServerSentEvents",e[e.LongPolling=4]="LongPolling"}(j||(j={})),function(e){e[e.Text=1]="Text",e[e.Binary=2]="Binary"}(H||(H={}));var q=function(){function e(){this.isAborted=!1,this.onabort=null}return e.prototype.abort=function(){this.isAborted||(this.isAborted=!0,this.onabort&&this.onabort())},Object.defineProperty(e.prototype,"signal",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"aborted",{get:function(){return this.isAborted},enumerable:!0,configurable:!0}),e}(),W=globalThis&&globalThis.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},N=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))},B=globalThis&&globalThis.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};!function(){function e(e,t,n,o,r,i){this.httpClient=e,this.accessTokenFactory=t,this.logger=n,this.pollAbort=new q,this.logMessageContent=o,this.withCredentials=r,this.headers=i,this.running=!1,this.onreceive=null,this.onclose=null}Object.defineProperty(e.prototype,"pollAborted",{get:function(){return this.pollAbort.aborted},enumerable:!0,configurable:!0}),e.prototype.connect=function(e,n){return N(this,void 0,void 0,(function(){var r,i,s,a,c,l,u,h,p;return B(this,(function(f){switch(f.label){case 0:if(g.isRequired(e,"url"),g.isRequired(n,"transferFormat"),g.isIn(n,H,"transferFormat"),this.url=e,this.logger.log(t.Trace,"(LongPolling transport) Connecting."),n===H.Binary&&"undefined"!=typeof XMLHttpRequest&&"string"!=typeof(new XMLHttpRequest).responseType)throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");return i=v(),s=i[0],a=i[1],c=W(((r={})[s]=a,r),this.headers),l={abortSignal:this.pollAbort.signal,headers:c,timeout:1e5,withCredentials:this.withCredentials},n===H.Binary&&(l.responseType="arraybuffer"),[4,this.getAccessToken()];case 1:return u=f.sent(),this.updateHeaderToken(l,u),h=e+"&_="+Date.now(),this.logger.log(t.Trace,"(LongPolling transport) polling: "+h+"."),[4,this.httpClient.get(h,l)];case 2:return 200!==(p=f.sent()).statusCode?(this.logger.log(t.Error,"(LongPolling transport) Unexpected response code: "+p.statusCode+"."),this.closeError=new o(p.statusText||"",p.statusCode),this.running=!1):this.running=!0,this.receiving=this.poll(this.url,l),[2]}}))}))},e.prototype.getAccessToken=function(){return N(this,void 0,void 0,(function(){return B(this,(function(e){switch(e.label){case 0:return this.accessTokenFactory?[4,this.accessTokenFactory()]:[3,2];case 1:return[2,e.sent()];case 2:return[2,null]}}))}))},e.prototype.updateHeaderToken=function(e,t){e.headers||(e.headers={}),t?e.headers.Authorization="Bearer "+t:e.headers.Authorization&&delete e.headers.Authorization},e.prototype.poll=function(e,n){return N(this,void 0,void 0,(function(){var i,s,a,c;return B(this,(function(l){switch(l.label){case 0:l.trys.push([0,,8,9]),l.label=1;case 1:return this.running?[4,this.getAccessToken()]:[3,7];case 2:i=l.sent(),this.updateHeaderToken(n,i),l.label=3;case 3:return l.trys.push([3,5,,6]),s=e+"&_="+Date.now(),this.logger.log(t.Trace,"(LongPolling transport) polling: "+s+"."),[4,this.httpClient.get(s,n)];case 4:return 204===(a=l.sent()).statusCode?(this.logger.log(t.Information,"(LongPolling transport) Poll terminated by server."),this.running=!1):200!==a.statusCode?(this.logger.log(t.Error,"(LongPolling transport) Unexpected response code: "+a.statusCode+"."),this.closeError=new o(a.statusText||"",a.statusCode),this.running=!1):a.content?(this.logger.log(t.Trace,"(LongPolling transport) data received. "+f(a.content,this.logMessageContent)+"."),this.onreceive&&this.onreceive(a.content)):this.logger.log(t.Trace,"(LongPolling transport) Poll timed out, reissuing."),[3,6];case 5:return c=l.sent(),this.running?c instanceof r?this.logger.log(t.Trace,"(LongPolling transport) Poll timed out, reissuing."):(this.closeError=c,this.running=!1):this.logger.log(t.Trace,"(LongPolling transport) Poll errored after shutdown: "+c.message),[3,6];case 6:return[3,1];case 7:return[3,9];case 8:return this.logger.log(t.Trace,"(LongPolling transport) Polling complete."),this.pollAborted||this.raiseOnClose(),[7];case 9:return[2]}}))}))},e.prototype.send=function(e){return N(this,void 0,void 0,(function(){return B(this,(function(t){return this.running?[2,b(this.logger,"LongPolling",this.httpClient,this.url,this.accessTokenFactory,e,this.logMessageContent,this.withCredentials,this.headers)]:[2,Promise.reject(new Error("Cannot send until the transport is connected"))]}))}))},e.prototype.stop=function(){return N(this,void 0,void 0,(function(){var e,n,o,r,i,s;return B(this,(function(a){switch(a.label){case 0:this.logger.log(t.Trace,"(LongPolling transport) Stopping polling."),this.running=!1,this.pollAbort.abort(),a.label=1;case 1:return a.trys.push([1,,5,6]),[4,this.receiving];case 2:return a.sent(),this.logger.log(t.Trace,"(LongPolling transport) sending DELETE request to "+this.url+"."),e={},n=v(),o=n[0],r=n[1],e[o]=r,i={headers:W({},e,this.headers),withCredentials:this.withCredentials},[4,this.getAccessToken()];case 3:return s=a.sent(),this.updateHeaderToken(i,s),[4,this.httpClient.delete(this.url,i)];case 4:return a.sent(),this.logger.log(t.Trace,"(LongPolling transport) DELETE request sent."),[3,6];case 5:return this.logger.log(t.Trace,"(LongPolling transport) Stop finished."),this.raiseOnClose(),[7];case 6:return[2]}}))}))},e.prototype.raiseOnClose=function(){if(this.onclose){var e="(LongPolling transport) Firing onclose event.";this.closeError&&(e+=" Error: "+this.closeError),this.logger.log(t.Trace,e),this.onclose(this.closeError)}}}(),globalThis&&globalThis.__assign||Object.assign,globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator,globalThis&&globalThis.__assign||Object.assign,globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator,globalThis&&globalThis.__assign||Object.assign,globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator,globalThis&&globalThis.__assign||Object.assign,t.Trace,t.Debug,t.Information,t.Information,t.Warning,t.Warning,t.Error,t.Critical,t.None}}}));