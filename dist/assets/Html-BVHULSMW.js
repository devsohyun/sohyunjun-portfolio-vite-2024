import{_ as ye}from"./extends-CCbyfPlC.js";import{r as n,c as ge}from"./index-B9Dwx1JZ.js";import{n as Me,g as be,D as Pe,V as H,b3 as Y,ac as ee}from"./Webgl-DIy_xGWY.js";const C=new H,I=new H,we=new H;function Se(e,t,i){const o=C.setFromMatrixPosition(e.matrixWorld);o.project(t);const s=i.width/2,a=i.height/2;return[o.x*s+s,-(o.y*a)+a]}function Ee(e,t){const i=C.setFromMatrixPosition(e.matrixWorld),o=I.setFromMatrixPosition(t.matrixWorld),s=i.sub(o),a=t.getWorldDirection(we);return s.angleTo(a)>Math.PI/2}function We(e,t,i,o){const s=C.setFromMatrixPosition(e.matrixWorld),a=s.clone();a.project(t),i.setFromCamera(a,t);const x=i.intersectObjects(o,!0);if(x.length){const P=x[0].distance;return s.distanceTo(i.ray.origin)<P}return!0}function je(e,t){if(t instanceof Y)return t.zoom;if(t instanceof ee){const i=C.setFromMatrixPosition(e.matrixWorld),o=I.setFromMatrixPosition(t.matrixWorld),s=t.fov*Math.PI/180,a=i.distanceTo(o);return 1/(2*Math.tan(s/2)*a)}else return 1}function Ce(e,t,i){if(t instanceof ee||t instanceof Y){const o=C.setFromMatrixPosition(e.matrixWorld),s=I.setFromMatrixPosition(t.matrixWorld),a=o.distanceTo(s),x=(i[1]-i[0])/(t.far-t.near),P=i[1]-x*t.far;return Math.round(x*a+P)}}const k=e=>Math.abs(e)<1e-10?0:e;function te(e,t,i=""){let o="matrix3d(";for(let s=0;s!==16;s++)o+=k(t[s]*e.elements[s])+(s!==15?",":")");return i+o}const Re=(e=>t=>te(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),$e=(e=>(t,i)=>te(t,e(i),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Oe(e){return e&&typeof e=="object"&&"current"in e}const ze=n.forwardRef(({children:e,eps:t=.001,style:i,className:o,prepend:s,center:a,fullscreen:x,portal:P,distanceFactor:E,sprite:ne=!1,transform:h=!1,occlude:c,onOcclude:L,castShadow:re,receiveShadow:ie,material:se,geometry:N,zIndexRange:R=[16777271,0],calculatePosition:B=Se,as:oe="div",wrapperClass:z,pointerEvents:Z="auto",...v},_)=>{const{gl:G,camera:l,scene:q,size:f,raycaster:ae,events:ce,viewport:le}=Me(),[u]=n.useState(()=>document.createElement(oe)),A=n.useRef(),m=n.useRef(null),J=n.useRef(0),$=n.useRef([0,0]),W=n.useRef(null),V=n.useRef(null),w=(P==null?void 0:P.current)||ce.connected||G.domElement.parentNode,y=n.useRef(null),O=n.useRef(!1),T=n.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&Oe(c[0]),[c]);n.useLayoutEffect(()=>{const d=G.domElement;c&&c==="blending"?(d.style.zIndex=`${Math.floor(R[0]/2)}`,d.style.position="absolute",d.style.pointerEvents="none"):(d.style.zIndex=null,d.style.position=null,d.style.pointerEvents=null)},[c]),n.useLayoutEffect(()=>{if(m.current){const d=A.current=ge(u);if(q.updateMatrixWorld(),h)u.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const r=B(m.current,l,f);u.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${r[0]}px,${r[1]}px,0);transform-origin:0 0;`}return w&&(s?w.prepend(u):w.appendChild(u)),()=>{w&&w.removeChild(u),d.unmount()}}},[w,h]),n.useLayoutEffect(()=>{z&&(u.className=z)},[z]);const K=n.useMemo(()=>h?{position:"absolute",top:0,left:0,width:f.width,height:f.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...x&&{top:-f.height/2,left:-f.width/2,width:f.width,height:f.height},...i},[i,a,x,f,h]),ue=n.useMemo(()=>({position:"absolute",pointerEvents:Z}),[Z]);n.useLayoutEffect(()=>{if(O.current=!1,h){var d;(d=A.current)==null||d.render(n.createElement("div",{ref:W,style:K},n.createElement("div",{ref:V,style:ue},n.createElement("div",{ref:_,className:o,style:i,children:e}))))}else{var r;(r=A.current)==null||r.render(n.createElement("div",{ref:_,style:K,className:o,children:e}))}});const S=n.useRef(!0);be(d=>{if(m.current){l.updateMatrixWorld(),m.current.updateWorldMatrix(!0,!1);const r=h?$.current:B(m.current,l,f);if(h||Math.abs(J.current-l.zoom)>t||Math.abs($.current[0]-r[0])>t||Math.abs($.current[1]-r[1])>t){const g=Ee(m.current,l);let p=!1;T&&(Array.isArray(c)?p=c.map(M=>M.current):c!=="blending"&&(p=[q]));const j=S.current;if(p){const M=We(m.current,l,ae,p);S.current=M&&!g}else S.current=!g;j!==S.current&&(L?L(!S.current):u.style.display=S.current?"block":"none");const F=Math.floor(R[0]/2),fe=c?T?[R[0],F]:[F-1,0]:R;if(u.style.zIndex=`${Ce(m.current,l,fe)}`,h){const[M,U]=[f.width/2,f.height/2],D=l.projectionMatrix.elements[5]*U,{isOrthographicCamera:X,top:de,left:me,bottom:he,right:xe}=l,ve=Re(l.matrixWorldInverse),pe=X?`scale(${D})translate(${k(-(xe+me)/2)}px,${k((de+he)/2)}px)`:`translateZ(${D}px)`;let b=m.current.matrixWorld;ne&&(b=l.matrixWorldInverse.clone().transpose().copyPosition(b).scale(m.current.scale),b.elements[3]=b.elements[7]=b.elements[11]=0,b.elements[15]=1),u.style.width=f.width+"px",u.style.height=f.height+"px",u.style.perspective=X?"":`${D}px`,W.current&&V.current&&(W.current.style.transform=`${pe}${ve}translate(${M}px,${U}px)`,V.current.style.transform=$e(b,1/((E||10)/400)))}else{const M=E===void 0?1:je(m.current,l)*E;u.style.transform=`translate3d(${r[0]}px,${r[1]}px,0) scale(${M})`}$.current=r,J.current=l.zoom}}if(!T&&y.current&&!O.current)if(h){if(W.current){const r=W.current.children[0];if(r!=null&&r.clientWidth&&r!=null&&r.clientHeight){const{isOrthographicCamera:g}=l;if(g||N)v.scale&&(Array.isArray(v.scale)?v.scale instanceof H?y.current.scale.copy(v.scale.clone().divideScalar(1)):y.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):y.current.scale.setScalar(1/v.scale));else{const p=(E||10)/400,j=r.clientWidth*p,F=r.clientHeight*p;y.current.scale.set(j,F,1)}O.current=!0}}}else{const r=u.children[0];if(r!=null&&r.clientWidth&&r!=null&&r.clientHeight){const g=1/le.factor,p=r.clientWidth*g,j=r.clientHeight*g;y.current.scale.set(p,j,1),O.current=!0}y.current.lookAt(d.camera.position)}});const Q=n.useMemo(()=>({vertexShader:h?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[h]);return n.createElement("group",ye({},v,{ref:m}),c&&!T&&n.createElement("mesh",{castShadow:re,receiveShadow:ie,ref:y},N||n.createElement("planeGeometry",null),se||n.createElement("shaderMaterial",{side:Pe,vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader})))});export{ze as H};
