"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{7907:function(e,t,a){var r=a(5313);a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}})},2636:function(e,t,a){a.d(t,{Z:function(){return I}});var r=a(6480),l=a.n(r),o=a(4404),n=a.n(o),s=a(4090),c=a(3827);let i={type:n().string,tooltip:n().bool,as:n().elementType},d=s.forwardRef((e,t)=>{let{as:a="div",className:r,type:o="valid",tooltip:n=!1,...s}=e;return(0,c.jsx)(a,{...s,ref:t,className:l()(r,"".concat(o,"-").concat(n?"tooltip":"feedback"))})});d.displayName="Feedback",d.propTypes=i;let u=s.createContext({});var f=a(2865);let m=s.forwardRef((e,t)=>{let{id:a,bsPrefix:r,className:o,type:n="checkbox",isValid:i=!1,isInvalid:d=!1,as:m="input",...p}=e,{controlId:v}=(0,s.useContext)(u);return r=(0,f.vE)(r,"form-check-input"),(0,c.jsx)(m,{...p,ref:t,type:n,id:a||v,className:l()(o,r,i&&"is-valid",d&&"is-invalid")})});m.displayName="FormCheckInput";let p=s.forwardRef((e,t)=>{let{bsPrefix:a,className:r,htmlFor:o,...n}=e,{controlId:i}=(0,s.useContext)(u);return a=(0,f.vE)(a,"form-check-label"),(0,c.jsx)("label",{...n,ref:t,htmlFor:o||i,className:l()(r,a)})});p.displayName="FormCheckLabel";let v=s.forwardRef((e,t)=>{let{id:a,bsPrefix:r,bsSwitchPrefix:o,inline:n=!1,reverse:i=!1,disabled:v=!1,isValid:h=!1,isInvalid:y=!1,feedbackTooltip:b=!1,feedback:x,feedbackType:N,className:g,style:w,title:j="",type:R="checkbox",label:E,children:F,as:C="input",...k}=e;r=(0,f.vE)(r,"form-check"),o=(0,f.vE)(o,"form-switch");let{controlId:Z}=(0,s.useContext)(u),T=(0,s.useMemo)(()=>({controlId:a||Z}),[Z,a]),I=!F&&null!=E&&!1!==E||s.Children.toArray(F).some(e=>s.isValidElement(e)&&e.type===p),O=(0,c.jsx)(m,{...k,type:"switch"===R?"checkbox":R,ref:t,isValid:h,isInvalid:y,disabled:v,as:C});return(0,c.jsx)(u.Provider,{value:T,children:(0,c.jsx)("div",{style:w,className:l()(g,I&&r,n&&"".concat(r,"-inline"),i&&"".concat(r,"-reverse"),"switch"===R&&o),children:F||(0,c.jsxs)(c.Fragment,{children:[O,I&&(0,c.jsx)(p,{title:j,children:E}),x&&(0,c.jsx)(d,{type:N,tooltip:b,children:x})]})})})});v.displayName="FormCheck";var h=Object.assign(v,{Input:m,Label:p});a(5858);let y=s.forwardRef((e,t)=>{let{bsPrefix:a,type:r,size:o,htmlSize:n,id:i,className:d,isValid:m=!1,isInvalid:p=!1,plaintext:v,readOnly:h,as:y="input",...b}=e,{controlId:x}=(0,s.useContext)(u);return a=(0,f.vE)(a,"form-control"),(0,c.jsx)(y,{...b,type:r,size:n,ref:t,readOnly:h,id:i||x,className:l()(d,v?"".concat(a,"-plaintext"):a,o&&"".concat(a,"-").concat(o),"color"===r&&"".concat(a,"-color"),m&&"is-valid",p&&"is-invalid")})});y.displayName="FormControl";var b=Object.assign(y,{Feedback:d});let x=s.forwardRef((e,t)=>{let{className:a,bsPrefix:r,as:o="div",...n}=e;return r=(0,f.vE)(r,"form-floating"),(0,c.jsx)(o,{ref:t,className:l()(a,r),...n})});x.displayName="FormFloating";let N=s.forwardRef((e,t)=>{let{controlId:a,as:r="div",...l}=e,o=(0,s.useMemo)(()=>({controlId:a}),[a]);return(0,c.jsx)(u.Provider,{value:o,children:(0,c.jsx)(r,{...l,ref:t})})});N.displayName="FormGroup";let g=s.forwardRef((e,t)=>{let[{className:a,...r},{as:o="div",bsPrefix:n,spans:s}]=function(e){let{as:t,bsPrefix:a,className:r,...o}=e;a=(0,f.vE)(a,"col");let n=(0,f.pi)(),s=(0,f.zG)(),c=[],i=[];return n.forEach(e=>{let t,r,l;let n=o[e];delete o[e],"object"==typeof n&&null!=n?{span:t,offset:r,order:l}=n:t=n;let d=e!==s?"-".concat(e):"";t&&c.push(!0===t?"".concat(a).concat(d):"".concat(a).concat(d,"-").concat(t)),null!=l&&i.push("order".concat(d,"-").concat(l)),null!=r&&i.push("offset".concat(d,"-").concat(r))}),[{...o,className:l()(r,...c,...i)},{as:t,bsPrefix:a,spans:c}]}(e);return(0,c.jsx)(o,{...r,ref:t,className:l()(a,!s.length&&n)})});g.displayName="Col";let w=s.forwardRef((e,t)=>{let{as:a="label",bsPrefix:r,column:o=!1,visuallyHidden:n=!1,className:i,htmlFor:d,...m}=e,{controlId:p}=(0,s.useContext)(u);r=(0,f.vE)(r,"form-label");let v="col-form-label";"string"==typeof o&&(v="".concat(v," ").concat(v,"-").concat(o));let h=l()(i,r,n&&"visually-hidden",o&&v);return(d=d||p,o)?(0,c.jsx)(g,{ref:t,as:"label",className:h,htmlFor:d,...m}):(0,c.jsx)(a,{ref:t,className:h,htmlFor:d,...m})});w.displayName="FormLabel";let j=s.forwardRef((e,t)=>{let{bsPrefix:a,className:r,id:o,...n}=e,{controlId:i}=(0,s.useContext)(u);return a=(0,f.vE)(a,"form-range"),(0,c.jsx)("input",{...n,type:"range",ref:t,className:l()(r,a),id:o||i})});j.displayName="FormRange";let R=s.forwardRef((e,t)=>{let{bsPrefix:a,size:r,htmlSize:o,className:n,isValid:i=!1,isInvalid:d=!1,id:m,...p}=e,{controlId:v}=(0,s.useContext)(u);return a=(0,f.vE)(a,"form-select"),(0,c.jsx)("select",{...p,size:o,ref:t,className:l()(n,a,r&&"".concat(a,"-").concat(r),i&&"is-valid",d&&"is-invalid"),id:m||v})});R.displayName="FormSelect";let E=s.forwardRef((e,t)=>{let{bsPrefix:a,className:r,as:o="small",muted:n,...s}=e;return a=(0,f.vE)(a,"form-text"),(0,c.jsx)(o,{...s,ref:t,className:l()(r,a,n&&"text-muted")})});E.displayName="FormText";let F=s.forwardRef((e,t)=>(0,c.jsx)(h,{...e,ref:t,type:"switch"}));F.displayName="Switch";var C=Object.assign(F,{Input:h.Input,Label:h.Label});let k=s.forwardRef((e,t)=>{let{bsPrefix:a,className:r,children:o,controlId:n,label:s,...i}=e;return a=(0,f.vE)(a,"form-floating"),(0,c.jsxs)(N,{ref:t,className:l()(r,a),controlId:n,...i,children:[o,(0,c.jsx)("label",{htmlFor:n,children:s})]})});k.displayName="FloatingLabel";let Z={_ref:n().any,validated:n().bool,as:n().elementType},T=s.forwardRef((e,t)=>{let{className:a,validated:r,as:o="form",...n}=e;return(0,c.jsx)(o,{...n,ref:t,className:l()(a,r&&"was-validated")})});T.displayName="Form",T.propTypes=Z;var I=Object.assign(T,{Group:N,Control:b,Floating:x,Check:h,Switch:C,Label:w,Text:E,Range:j,Select:R,FloatingLabel:k})},4561:function(e,t,a){a.d(t,{Z:function(){return M}});var r,l=a(6480),o=a.n(l),n=a(9390),s=a(7550),c=a(9275),i=a(4990);function d(e){if((!r&&0!==r||e)&&s.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var u=a(3756),f=a(9476),m=a(1564),p=a(343),v=a(2562),h=a(4090),y=a(7616),b=a(6579),x=a(2344),N=a(2865),g=a(3827);let w=h.forwardRef((e,t)=>{let{className:a,bsPrefix:r,as:l="div",...n}=e;return r=(0,N.vE)(r,"modal-body"),(0,g.jsx)(l,{ref:t,className:o()(a,r),...n})});w.displayName="ModalBody";var j=a(4272);let R=h.forwardRef((e,t)=>{let{bsPrefix:a,className:r,contentClassName:l,centered:n,size:s,fullscreen:c,children:i,scrollable:d,...u}=e;a=(0,N.vE)(a,"modal");let f="".concat(a,"-dialog"),m="string"==typeof c?"".concat(a,"-fullscreen-").concat(c):"".concat(a,"-fullscreen");return(0,g.jsx)("div",{...u,ref:t,className:o()(f,r,s&&"".concat(a,"-").concat(s),n&&"".concat(f,"-centered"),d&&"".concat(f,"-scrollable"),c&&m),children:(0,g.jsx)("div",{className:o()("".concat(a,"-content"),l),children:i})})});R.displayName="ModalDialog";let E=h.forwardRef((e,t)=>{let{className:a,bsPrefix:r,as:l="div",...n}=e;return r=(0,N.vE)(r,"modal-footer"),(0,g.jsx)(l,{ref:t,className:o()(a,r),...n})});E.displayName="ModalFooter";var F=a(4241);let C=h.forwardRef((e,t)=>{let{bsPrefix:a,className:r,closeLabel:l="Close",closeButton:n=!1,...s}=e;return a=(0,N.vE)(a,"modal-header"),(0,g.jsx)(F.Z,{ref:t,...s,className:o()(r,a),closeLabel:l,closeButton:n})});C.displayName="ModalHeader";let k=(0,a(9764).Z)("h4"),Z=h.forwardRef((e,t)=>{let{className:a,bsPrefix:r,as:l=k,...n}=e;return r=(0,N.vE)(r,"modal-title"),(0,g.jsx)(l,{ref:t,className:o()(a,r),...n})});function T(e){return(0,g.jsx)(x.Z,{...e,timeout:null})}function I(e){return(0,g.jsx)(x.Z,{...e,timeout:null})}Z.displayName="ModalTitle";let O=h.forwardRef((e,t)=>{let{bsPrefix:a,className:r,style:l,dialogClassName:x,contentClassName:w,children:E,dialogAs:F=R,"data-bs-theme":C,"aria-labelledby":k,"aria-describedby":Z,"aria-label":O,show:M=!1,animation:S=!0,backdrop:L=!0,keyboard:D=!0,onEscapeKeyDown:_,onShow:A,onHide:z,container:H,autoFocus:B=!0,enforceFocus:P=!0,restoreFocus:G=!0,restoreFocusOptions:U,onEntered:W,onExit:K,onExiting:V,onEnter:q,onEntering:J,onExited:Q,backdropClassName:X,manager:Y,...$}=e,[ee,et]=(0,h.useState)({}),[ea,er]=(0,h.useState)(!1),el=(0,h.useRef)(!1),eo=(0,h.useRef)(!1),en=(0,h.useRef)(null),[es,ec]=(0,u.Z)(),ei=(0,m.Z)(t,ec),ed=(0,f.Z)(z),eu=(0,N.SC)();a=(0,N.vE)(a,"modal");let ef=(0,h.useMemo)(()=>({onHide:ed}),[ed]);function em(){return Y||(0,b.t)({isRTL:eu})}function ep(e){if(!s.Z)return;let t=em().getScrollbarWidth()>0,a=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;et({paddingRight:t&&!a?d():void 0,paddingLeft:!t&&a?d():void 0})}let ev=(0,f.Z)(()=>{es&&ep(es.dialog)});(0,p.Z)(()=>{(0,i.Z)(window,"resize",ev),null==en.current||en.current()});let eh=()=>{el.current=!0},ey=e=>{el.current&&es&&e.target===es.dialog&&(eo.current=!0),el.current=!1},eb=()=>{er(!0),en.current=(0,v.Z)(es.dialog,()=>{er(!1)})},ex=e=>{e.target===e.currentTarget&&eb()},eN=e=>{if("static"===L){ex(e);return}if(eo.current||e.target!==e.currentTarget){eo.current=!1;return}null==z||z()},eg=(0,h.useCallback)(e=>(0,g.jsx)("div",{...e,className:o()("".concat(a,"-backdrop"),X,!S&&"show")}),[S,X,a]),ew={...l,...ee};return ew.display="block",(0,g.jsx)(j.Z.Provider,{value:ef,children:(0,g.jsx)(y.Z,{show:M,ref:ei,backdrop:L,container:H,keyboard:!0,autoFocus:B,enforceFocus:P,restoreFocus:G,restoreFocusOptions:U,onEscapeKeyDown:e=>{D?null==_||_(e):(e.preventDefault(),"static"===L&&eb())},onShow:A,onHide:z,onEnter:(e,t)=>{e&&ep(e),null==q||q(e,t)},onEntering:(e,t)=>{null==J||J(e,t),(0,n.ZP)(window,"resize",ev)},onEntered:W,onExit:e=>{null==en.current||en.current(),null==K||K(e)},onExiting:V,onExited:e=>{e&&(e.style.display=""),null==Q||Q(e),(0,i.Z)(window,"resize",ev)},manager:em(),transition:S?T:void 0,backdropTransition:S?I:void 0,renderBackdrop:eg,renderDialog:e=>(0,g.jsx)("div",{role:"dialog",...e,style:ew,className:o()(r,a,ea&&"".concat(a,"-static"),!S&&"show"),onClick:L?eN:void 0,onMouseUp:ey,"data-bs-theme":C,"aria-label":O,"aria-labelledby":k,"aria-describedby":Z,children:(0,g.jsx)(F,{...$,onMouseDown:eh,className:x,contentClassName:w,children:E})})})})});O.displayName="Modal";var M=Object.assign(O,{Body:w,Header:C,Title:Z,Footer:E,Dialog:R,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},8826:function(e,t,a){var r=a(6480),l=a.n(r),o=a(4090),n=a(2865),s=a(3827);let c=o.forwardRef((e,t)=>{let{bsPrefix:a,className:r,striped:o,bordered:c,borderless:i,hover:d,size:u,variant:f,responsive:m,...p}=e,v=(0,n.vE)(a,"table"),h=l()(r,v,f&&"".concat(v,"-").concat(f),u&&"".concat(v,"-").concat(u),o&&"".concat(v,"-").concat("string"==typeof o?"striped-".concat(o):"striped"),c&&"".concat(v,"-bordered"),i&&"".concat(v,"-borderless"),d&&"".concat(v,"-hover")),y=(0,s.jsx)("table",{...p,className:h,ref:t});if(m){let e="".concat(v,"-responsive");return"string"==typeof m&&(e="".concat(e,"-").concat(m)),(0,s.jsx)("div",{className:e,children:y})}return y});t.Z=c},5858:function(e){e.exports=function(){}}}]);