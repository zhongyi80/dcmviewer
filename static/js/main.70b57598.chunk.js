(this.webpackJsonpdcmviewer=this.webpackJsonpdcmviewer||[]).push([[0],{249:function(e,t,a){},250:function(e,t,a){},255:function(e,t){},257:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(33),c=a.n(i),l=(a(249),a(479)),r=a(483),s=a(481),u=(a(250),a(63)),d=a(64),m=a(81),h=a(79),v=a(40),b=a(92),g=a(14),w=a(93),j=a.n(w),f=a(209),p=a(124),T=a.n(p),y=a(83),x=a(2);y.external.cornerstone=v,y.external.dicomParser=T.a,g.external.cornerstone=v,g.external.cornerstoneMath=b,f.external.cornerstone=v,g.external.Hammer=j.a;o.a.Component;var O,I=a(86),k=a(7),M=(a(257),a(84)),z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"componentWillMount",value:function(){g.external.cornerstone=v,g.external.Hammer=j.a,g.external.cornerstoneMath=b}},{key:"render",value:function(){return Object(x.jsx)("div",{id:"corn-image",className:"cornImage"})}},{key:"activateDefaultTools",value:function(e){M.isMobile?this.activateMobileTools(e):this.activateBrowserTools(e)}},{key:"activateTool",value:function(e,t){this.desactivateTools(t),M.isMobile?g[e.mobileName].activate(t):g[e.browserName].activate(t,e.mouseButton)}},{key:"activateMobileTools",value:function(e){g.panMultiTouch.setConfiguration({testPointers:function(e){return e.numPointers>=3}}),g.touchInput.enable(e),g.zoomTouchPinch.activate(e),g.wwwcTouchDrag.activate(e),g.panMultiTouch.activate(e)}},{key:"activateBrowserTools",value:function(e){g.mouseInput.enable(e),g.mouseWheelInput.enable(e),g.wwwc.activate(e,1),g.pan.activate(e,2),g.zoom.activate(e,4),g.zoomWheel.activate(e)}},{key:"desactivateTools",value:function(e){M.isMobile?(g.wwwcTouchDrag.deactivate(e),g.lengthTouch.deactivate(e),g.ellipticalRoiTouch.deactivate(e),g.zoomTouchDrag.deactivate(e),g.panTouchDrag.deactivate(e)):(g.wwwc.disable(e),g.pan.activate(e,2),g.zoom.activate(e,4),g.length.deactivate(e,1),g.ellipticalRoi.deactivate(e,1))}}]),a}(o.a.Component),C=a(485),D=a(478),N=a(34),B=a(480),F=a(89),W=a(487),E=(o.a.Component,a(423),a(486)),P=a(477),R=(O={},Object(k.a)(O,"wwwc",{browserName:"wwwc",mobileName:"wwwcTouchDrag",mouseButton:1}),Object(k.a)(O,"pan",{browserName:"pan",mobileName:"panTouchDrag",mouseButton:3}),Object(k.a)(O,"zoom",{browserName:"zoom",mobileName:"zoomTouchDrag",mouseButton:5}),Object(k.a)(O,"length",{browserName:"length",mobileName:"lengthTouch",mouseButton:1}),Object(k.a)(O,"ellipticalRoi",{browserName:"ellipticalRoi",mobileName:"ellipticalRoiTouch",mouseButton:1}),O),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).resetImage=n.resetImage.bind(Object(I.a)(n)),n.enableTool=n.enableTool.bind(Object(I.a)(n)),n.clearImage=n.clearImage.bind(Object(I.a)(n)),n.state={fileName:"Image"},n.sendFile=n.sendFile.bind(Object(I.a)(n)),g.external.cornerstone=v,g.external.Hammer=j.a,g.external.cornerstoneMath=b,n}return Object(d.a)(a,[{key:"sendFile",value:function(e){var t=e.target.files[0];e.target.files[1],e.target.files[2];this.setState({fileName:"Image: ".concat(t)});var a=y.wadouri.fileManager.add(t);this.loadAndViewImage(a,t.name)}},{key:"loadAndViewImage",value:function(e,t){var a=this,n=document.getElementById("corn-image");v.enable(n),v.loadImage(e).then((function(e){var t=v.getDefaultViewportForImage(n,e);v.displayImage(n,e,t),n.style.width="100%",n.style.height="100%",a.activateDefaultTools(n)}),(function(e){a.setState({open:!0}),console.error(e)}))}},{key:"componentWillMount",value:function(){y.external.cornerstone=v,y.external.dicomParser=p;y.webWorkerManager.initialize({webWorkerPath:"./cornerstoneWADOImageLoaderWebWorker.js",taskConfiguration:{decodeTask:{codecsPath:"./cornerstoneWADOImageLoaderCodecs.js"}}})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize)}},{key:"render",value:function(){var e=this;this.props.classes;return Object(x.jsx)(P.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)(D.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(x.jsx)("input",{accept:"application/dicom",id:"dicom-image-file",type:"file",multiple:"multiple",onChange:this.sendFile}),Object(x.jsx)(C.a,{variant:"contained",onClick:function(){e.enableTool(R.wwwc)},children:"Contrast"}),Object(x.jsx)(C.a,{variant:"contained",onClick:function(){e.enableTool(R.pan)},children:"pan"}),Object(x.jsx)(C.a,{variant:"contained",onClick:function(){e.enableTool(R.zoom)},children:"zoom"}),Object(x.jsx)(C.a,{variant:"contained",onClick:function(){e.enableTool(R.length)},children:"length"}),Object(x.jsx)(C.a,{variant:"contained",onClick:function(){e.enableTool(R.ellipticalRoi)},children:"roi"}),Object(x.jsx)(C.a,{variant:"contained",onClick:this.clearImage,children:"clear"}),Object(x.jsx)(C.a,{variant:"contained",onClick:this.resetImage,children:"reset"})]}),Object(x.jsx)(E.a,{sx:{width:400,height:400,p:2,border:1,borderColor:"text.primary"},children:Object(x.jsx)(z,{})})]})})}},{key:"onFileImageLoaded",value:function(e){this.setState({fileName:"Image: ${fileName}"})}},{key:"resetImage",value:function(){var e=document.getElementById("corn-image");this.desactivateTools(e),v.reset(e)}},{key:"onResize",value:function(){var e=document.getElementById("corn-image"),t=e.parentElement;t.style.width=window.outerWidth,t.style.maxHeight=window.outerHeight,document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?(t.style.width=window.outerWidth,t.style.maxHeight=window.outerHeight,e.style.width="100%",e.style.height="100%"):(e.style.width=t.offsetWidth,e.style.height=t.offsetHeight),v.resize(e,!0)}},{key:"enableTool",value:function(e){var t=document.getElementById("corn-image");this.activateTool(e,t)}},{key:"clearImage",value:function(){var e=document.getElementById("corn-image");this.desactivateTools(e),g.globalImageIdSpecificToolStateManager.clear(e),v.updateImage(e)}},{key:"desactivateTools",value:function(e){M.isMobile?(g.wwwcTouchDrag.deactivate(e),g.lengthTouch.deactivate(e),g.ellipticalRoiTouch.deactivate(e),g.zoomTouchDrag.deactivate(e),g.panTouchDrag.deactivate(e)):(g.wwwc.disable(e),g.pan.activate(e,2),g.zoom.activate(e,4),g.length.deactivate(e,1),g.ellipticalRoi.deactivate(e,1))}},{key:"activateTool",value:function(e,t){this.desactivateTools(t),M.isMobile?g[e.mobileName].activate(t):g[e.browserName].activate(t,e.mouseButton)}},{key:"activateDefaultTools",value:function(e){M.isMobile?this.activateMobileTools(e):this.activateBrowserTools(e)}},{key:"activateMobileTools",value:function(e){g.panMultiTouch.setConfiguration({testPointers:function(e){return e.numPointers>=3}}),g.touchInput.enable(e),g.zoomTouchPinch.activate(e),g.wwwcTouchDrag.activate(e),g.panMultiTouch.activate(e)}},{key:"activateBrowserTools",value:function(e){g.mouseInput.enable(e),g.mouseWheelInput.enable(e),g.wwwc.activate(e,1),g.pan.activate(e,2),g.zoom.activate(e,4),g.zoomWheel.activate(e)}}]),a}(o.a.Component),H=a(225),L=a.n(H),A=l.a.Header,V=l.a.Content,J=(l.a.Sider,l.a.Footer);var $=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(A,{style:{padding:10},children:[Object(x.jsx)(r.a,{style:{float:"right"},size:"small",icon:"user"}),Object(x.jsx)(L.a,{style:{color:"white"},level:3,children:" CMB Detection"})]}),Object(x.jsxs)(l.a,{children:[Object(x.jsx)(S,{}),Object(x.jsx)(V,{style:{padding:"0 50px"},children:Object(x.jsx)(s.a.Item,{children:"Patient Study"})})]}),Object(x.jsx)(J,{children:"Footer"})]})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,488)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),i(e),c(e)}))};c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)($,{})}),document.getElementById("root")),q()}},[[426,1,2]]]);
//# sourceMappingURL=main.70b57598.chunk.js.map