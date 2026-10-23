(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ur="170",Lc=0,Ur=1,Dc=2,Xa=1,Ya=2,vn=3,In=0,Ce=1,Ye=2,Ln=0,xi=1,So=2,Nr=3,Fr=4,Ic=5,Wn=100,Uc=101,Nc=102,Fc=103,kc=104,Bc=200,Oc=201,zc=202,Gc=203,bo=204,Eo=205,Hc=206,Vc=207,Wc=208,Xc=209,Yc=210,qc=211,Zc=212,Kc=213,$c=214,To=0,Ao=1,Co=2,yi=3,Ro=4,Po=5,Lo=6,Do=7,qa=0,jc=1,Jc=2,Dn=0,Qc=1,tl=2,el=3,Za=4,nl=5,il=6,sl=7,Ka=300,wi=301,Si=302,Io=303,Uo=304,Bs=306,Zi=1e3,Yn=1001,No=1002,He=1003,ol=1004,ns=1005,sn=1006,Vs=1007,qn=1008,Mn=1009,$a=1010,ja=1011,Ki=1012,fr=1013,Zn=1014,on=1015,Ji=1016,pr=1017,mr=1018,bi=1020,Ja=35902,Qa=1021,tc=1022,Qe=1023,ec=1024,nc=1025,_i=1026,Ei=1027,gr=1028,vr=1029,ic=1030,xr=1031,_r=1033,Cs=33776,Rs=33777,Ps=33778,Ls=33779,Fo=35840,ko=35841,Bo=35842,Oo=35843,zo=36196,Go=37492,Ho=37496,Vo=37808,Wo=37809,Xo=37810,Yo=37811,qo=37812,Zo=37813,Ko=37814,$o=37815,jo=37816,Jo=37817,Qo=37818,tr=37819,er=37820,nr=37821,Ds=36492,ir=36494,sr=36495,sc=36283,or=36284,rr=36285,ar=36286,rl=3200,al=3201,oc=0,cl=1,Pn="",Xe="srgb",Ci="srgb-linear",Os="linear",ae="srgb",ti=7680,kr=519,ll=512,hl=513,dl=514,rc=515,ul=516,fl=517,pl=518,ml=519,Br=35044,Or="300 es",xn=2e3,Us=2001;class Ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zr=1234567;const Yi=Math.PI/180,Ti=180/Math.PI;function Pi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Mr(s,t){return(s%t+t)%t}function gl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vl(s,t,e){return s!==t?(e-s)/(t-s):0}function qi(s,t,e){return(1-e)*s+e*t}function xl(s,t,e,n){return qi(s,t,1-Math.exp(-e*n))}function _l(s,t=1){return t-Math.abs(Mr(s,t*2)-t)}function Ml(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function yl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function wl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Sl(s,t){return s+Math.random()*(t-s)}function bl(s){return s*(.5-Math.random())}function El(s){s!==void 0&&(zr=s);let t=zr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tl(s){return s*Yi}function Al(s){return s*Ti}function Cl(s){return(s&s-1)===0&&s!==0}function Rl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ll(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),h=o((t+n)/2),l=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*l,c*d,c*u,a*h);break;case"YZY":s.set(c*u,a*l,c*d,a*h);break;case"ZXZ":s.set(c*d,c*u,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*f,a*h);break;case"YXY":s.set(c*f,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*f,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ws={DEG2RAD:Yi,RAD2DEG:Ti,generateUUID:Pi,clamp:Ue,euclideanModulo:Mr,mapLinear:gl,inverseLerp:vl,lerp:qi,damp:xl,pingpong:_l,smoothstep:Ml,smootherstep:yl,randInt:wl,randFloat:Sl,randFloatSpread:bl,seededRandom:El,degToRad:Tl,radToDeg:Al,isPowerOfTwo:Cl,ceilPowerOfTwo:Rl,floorPowerOfTwo:Pl,setQuaternionFromProperEuler:Ll,normalize:Le,denormalize:mi};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,o,r,a,c,h){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h)}set(t,e,n,i,o,r,a,c,h){const l=this.elements;return l[0]=t,l[1]=i,l[2]=a,l[3]=e,l[4]=o,l[5]=c,l[6]=n,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],_=i[4],M=i[7],C=i[2],S=i[5],b=i[8];return o[0]=r*v+a*x+c*C,o[3]=r*m+a*_+c*S,o[6]=r*p+a*M+c*b,o[1]=h*v+l*x+d*C,o[4]=h*m+l*_+d*S,o[7]=h*p+l*M+d*b,o[2]=u*v+f*x+g*C,o[5]=u*m+f*_+g*S,o[8]=u*p+f*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*r*l-e*a*h-n*o*l+n*a*c+i*o*h-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8],d=l*r-a*h,u=a*c-l*o,f=h*o-r*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*h-l*n)*v,t[2]=(a*n-i*r)*v,t[3]=u*v,t[4]=(l*e-i*c)*v,t[5]=(i*o-a*e)*v,t[6]=f*v,t[7]=(n*c-h*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*r+h*a)+r+t,-i*h,i*c,-i*(-h*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Gt;function ac(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dl(){const s=Ns("canvas");return s.style.display="block",s}const Gr={};function Vi(s){s in Gr||(Gr[s]=!0,console.warn(s))}function Il(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ul(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Os:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Hr=[.64,.33,.3,.6,.15,.06],Vr=[.2126,.7152,.0722],Wr=[.3127,.329],Xr=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yr=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ci]:{primaries:Hr,whitePoint:Wr,transfer:Os,toXYZ:Xr,fromXYZ:Yr,luminanceCoefficients:Vr,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:Hr,whitePoint:Wr,transfer:ae,toXYZ:Xr,fromXYZ:Yr,luminanceCoefficients:Vr,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let ei;class Fl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=Ns("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=_n(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kl=0;class cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ys(i[r].image)):o.push(Ys(i[r]))}else o=Ys(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bl=0;class Re extends Ri{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Yn,i=Yn,o=sn,r=qn,a=Qe,c=Mn,h=Re.DEFAULT_ANISOTROPY,l=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Pi(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Ka;Re.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],l=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,M=(f+1)/2,C=(p+1)/2,S=(l+u)/4,b=(d+v)/4,P=(g+m)/4;return _>M&&_>C?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=S/n,o=b/n):M>C?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=S/i,o=P/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=b/o,i=P/o),this.set(n,i,o,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-l)*(u-l));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-l)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends Ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],h=n[i+1],l=n[i+2],d=n[i+3];const u=o[r+0],f=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||h!==f||l!==g){let m=1-a;const p=c*u+h*f+l*g+d*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),S=Math.atan2(C,p*x);m=Math.sin(m*S)/C,a=Math.sin(a*S)/C}const M=a*x;if(c=c*m+u*M,h=h*m+f*M,l=l*m+g*M,d=d*m+v*M,m===1-a){const C=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=C,h*=C,l*=C,d*=C}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],d=o[r],u=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+l*d+c*f-h*u,t[e+1]=c*g+l*u+h*d-a*f,t[e+2]=h*g+l*f+a*u-c*d,t[e+3]=l*g-a*d-c*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),d=a(o/2),u=c(n/2),f=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"YXZ":this._x=u*l*d+h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"ZXY":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d-u*f*g;break;case"ZYX":this._x=u*l*d-h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d+u*f*g;break;case"YZX":this._x=u*l*d+h*f*g,this._y=h*f*d+u*l*g,this._z=h*l*g-u*f*d,this._w=h*l*d-u*f*g;break;case"XZY":this._x=u*l*d-h*f*g,this._y=h*f*d-u*l*g,this._z=h*l*g+u*f*d,this._w=h*l*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],h=e[2],l=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-c)*f,this._y=(o-h)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(l-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+h)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-h)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+r*a+i*h-o*c,this._y=i*l+r*c+o*a-n*h,this._z=o*l+r*h+n*c-i*a,this._w=r*l-n*a-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),d=Math.sin((1-e)*l)/h,u=Math.sin(e*l)/h;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,h=2*(r*i-a*n),l=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+c*h+r*d-a*l,this.y=n+c*l+a*h-o*d,this.z=i+c*d+o*l-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new U,qr=new Qi;class $n{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ke):Ke.fromBufferAttribute(o,r),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),ss.subVectors(this.max,Ui),ni.subVectors(t.a,Ui),ii.subVectors(t.b,Ui),si.subVectors(t.c,Ui),Sn.subVectors(ii,ni),bn.subVectors(si,ii),Nn.subVectors(ni,si);let e=[0,-Sn.z,Sn.y,0,-bn.z,bn.y,0,-Nn.z,Nn.y,Sn.z,0,-Sn.x,bn.z,0,-bn.x,Nn.z,0,-Nn.x,-Sn.y,Sn.x,0,-bn.y,bn.x,0,-Nn.y,Nn.x,0];return!Zs(e,ni,ii,si,ss)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,ni,ii,si,ss))?!1:(os.crossVectors(Sn,bn),e=[os.x,os.y,os.z],Zs(e,ni,ii,si,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hn=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,is=new $n,ni=new U,ii=new U,si=new U,Sn=new U,bn=new U,Nn=new U,Ui=new U,ss=new U,os=new U,Fn=new U;function Zs(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Fn.fromArray(s,o);const a=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),c=t.dot(Fn),h=e.dot(Fn),l=n.dot(Fn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const Gl=new $n,Ni=new U,Ks=new U;class jn{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(Ks)),this.expandByPoint(Ni.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new U,$s=new U,rs=new U,En=new U,js=new U,as=new U,Js=new U;class yr{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$s.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),En.copy(this.origin).sub($s);const o=t.distanceTo(e)*.5,r=-this.direction.dot(rs),a=En.dot(this.direction),c=-En.dot(rs),h=En.lengthSq(),l=Math.abs(1-r*r);let d,u,f,g;if(l>0)if(d=r*c-a,u=r*a-c,g=o*l,d>=0)if(u>=-g)if(u<=g){const v=1/l;d*=v,u*=v,f=d*(d+r*u+2*a)+u*(r*d+u+2*c)+h}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+h;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+h;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+u*(u+2*c)+h):u<=g?(d=0,u=Math.min(Math.max(-o,-c),o),f=u*(u+2*c)+h):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+u*(u+2*c)+h);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($s).addScaledVector(rs,u),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,i=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,i=(t.min.x-u.x)*h),l>=0?(o=(t.min.y-u.y)*l,r=(t.max.y-u.y)*l):(o=(t.max.y-u.y)*l,r=(t.min.y-u.y)*l),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,o){js.subVectors(e,t),as.subVectors(n,t),Js.crossVectors(js,as);let r=this.direction.dot(Js),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(as.crossVectors(En,as));if(c<0)return null;const h=a*this.direction.dot(js.cross(En));if(h<0||c+h>r)return null;const l=-a*En.dot(Js);return l<0?null:this.at(l/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,i,o,r,a,c,h,l,d,u,f,g,v,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h,l,d,u,f,g,v,m)}set(t,e,n,i,o,r,a,c,h,l,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/oi.setFromMatrixColumn(t,0).length(),o=1/oi.setFromMatrixColumn(t,1).length(),r=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*l,f=r*d,g=a*l,v=a*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=f+g*h,e[5]=u-v*h,e[9]=-a*c,e[2]=v-u*h,e[6]=g+f*h,e[10]=r*c}else if(t.order==="YXZ"){const u=c*l,f=c*d,g=h*l,v=h*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=r*h,e[1]=r*d,e[5]=r*l,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*l,f=c*d,g=h*l,v=h*d;e[0]=u-v*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*l,e[9]=v-u*a,e[2]=-r*h,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*l,f=r*d,g=a*l,v=a*d;e[0]=c*l,e[4]=g*h-f,e[8]=u*h+v,e[1]=c*d,e[5]=v*h+u,e[9]=f*h-g,e[2]=-h,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,f=r*h,g=a*c,v=a*h;e[0]=c*l,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*l,e[9]=-a*l,e[2]=-h*l,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*c,f=r*h,g=a*c,v=a*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=u*d+v,e[5]=r*l,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*l,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hl,t,Vl)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Tn.crossVectors(n,ze),Tn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Tn.crossVectors(n,ze)),Tn.normalize(),cs.crossVectors(ze,Tn),i[0]=Tn.x,i[4]=cs.x,i[8]=ze.x,i[1]=Tn.y,i[5]=cs.y,i[9]=ze.y,i[2]=Tn.z,i[6]=cs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],M=n[11],C=n[15],S=i[0],b=i[4],P=i[8],w=i[12],y=i[1],T=i[5],D=i[9],I=i[13],k=i[2],N=i[6],V=i[10],H=i[14],F=i[3],W=i[7],X=i[11],j=i[15];return o[0]=r*S+a*y+c*k+h*F,o[4]=r*b+a*T+c*N+h*W,o[8]=r*P+a*D+c*V+h*X,o[12]=r*w+a*I+c*H+h*j,o[1]=l*S+d*y+u*k+f*F,o[5]=l*b+d*T+u*N+f*W,o[9]=l*P+d*D+u*V+f*X,o[13]=l*w+d*I+u*H+f*j,o[2]=g*S+v*y+m*k+p*F,o[6]=g*b+v*T+m*N+p*W,o[10]=g*P+v*D+m*V+p*X,o[14]=g*w+v*I+m*H+p*j,o[3]=x*S+_*y+M*k+C*F,o[7]=x*b+_*T+M*N+C*W,o[11]=x*P+_*D+M*V+C*X,o[15]=x*w+_*I+M*H+C*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],h=t[13],l=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*c*d-i*h*d-o*a*u+n*h*u+i*a*f-n*c*f)+v*(+e*c*f-e*h*u+o*r*u-i*r*f+i*h*l-o*c*l)+m*(+e*h*d-e*a*f-o*r*d+n*r*f+o*a*l-n*h*l)+p*(-i*a*l-e*c*d+e*a*u+i*r*d-n*r*u+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=d*m*h-v*u*h+v*c*f-a*m*f-d*c*p+a*u*p,_=g*u*h-l*m*h-g*c*f+r*m*f+l*c*p-r*u*p,M=l*v*h-g*d*h+g*a*f-r*v*f-l*a*p+r*d*p,C=g*d*c-l*v*c-g*a*u+r*v*u+l*a*m-r*d*m,S=e*x+n*_+i*M+o*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=x*b,t[1]=(v*u*o-d*m*o-v*i*f+n*m*f+d*i*p-n*u*p)*b,t[2]=(a*m*o-v*c*o+v*i*h-n*m*h-a*i*p+n*c*p)*b,t[3]=(d*c*o-a*u*o-d*i*h+n*u*h+a*i*f-n*c*f)*b,t[4]=_*b,t[5]=(l*m*o-g*u*o+g*i*f-e*m*f-l*i*p+e*u*p)*b,t[6]=(g*c*o-r*m*o-g*i*h+e*m*h+r*i*p-e*c*p)*b,t[7]=(r*u*o-l*c*o+l*i*h-e*u*h-r*i*f+e*c*f)*b,t[8]=M*b,t[9]=(g*d*o-l*v*o-g*n*f+e*v*f+l*n*p-e*d*p)*b,t[10]=(r*v*o-g*a*o+g*n*h-e*v*h-r*n*p+e*a*p)*b,t[11]=(l*a*o-r*d*o-l*n*h+e*d*h+r*n*f-e*a*f)*b,t[12]=C*b,t[13]=(l*v*i-g*d*i+g*n*u-e*v*u-l*n*m+e*d*m)*b,t[14]=(g*a*i-r*v*i-g*n*c+e*v*c+r*n*m-e*a*m)*b,t[15]=(r*d*i-l*a*i+l*n*c-e*d*c-r*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,h=o*r,l=o*a;return this.set(h*r+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*r,0,h*c-i*a,l*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,h=o+o,l=r+r,d=a+a,u=o*h,f=o*l,g=o*d,v=r*l,m=r*d,p=a*d,x=c*h,_=c*l,M=c*d,C=n.x,S=n.y,b=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+M)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(f-M)*S,i[5]=(1-(u+p))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(g+_)*b,i[9]=(m-x)*b,i[10]=(1-(u+v))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=oi.set(i[0],i[1],i[2]).length();const r=oi.set(i[4],i[5],i[6]).length(),a=oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const h=1/o,l=1/r,d=1/a;return $e.elements[0]*=h,$e.elements[1]*=h,$e.elements[2]*=h,$e.elements[4]*=l,$e.elements[5]*=l,$e.elements[6]*=l,$e.elements[8]*=d,$e.elements[9]*=d,$e.elements[10]*=d,e.setFromRotationMatrix($e),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=xn){const c=this.elements,h=2*o/(e-t),l=2*o/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===xn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Us)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=xn){const c=this.elements,h=1/(e-t),l=1/(n-i),d=1/(r-o),u=(e+t)*h,f=(n+i)*l;let g,v;if(a===xn)g=(r+o)*d,v=-2*d;else if(a===Us)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new U,$e=new re,Hl=new U(0,0,0),Vl=new U(1,1,1),Tn=new U,cs=new U,ze=new U,Zr=new re,Kr=new Qi;class rn{constructor(t=0,e=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],h=i[5],l=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kr.setFromEuler(this),this.setFromQuaternion(Kr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const $r=new U,ri=new Qi,un=new re,ls=new U,Fi=new U,Xl=new U,Yl=new Qi,jr=new U(1,0,0),Jr=new U(0,1,0),Qr=new U(0,0,1),ta={type:"added"},ql={type:"removed"},ai={type:"childadded",child:null},Qs={type:"childremoved",child:null};class ge extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new U,e=new rn,n=new Qi,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(jr,t)}rotateY(t){return this.rotateOnAxis(Jr,t)}rotateZ(t){return this.rotateOnAxis(Qr,t)}translateOnAxis(t,e){return $r.copy(t).applyQuaternion(this.quaternion),this.position.add($r.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jr,t)}translateY(t){return this.translateOnAxis(Jr,t)}translateZ(t){return this.translateOnAxis(Qr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ls.copy(t):ls.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Fi,ls,this.up):un.lookAt(ls,Fi,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(un),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ta),ai.child=t,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ql),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ta),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Yl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),h=r(t.textures),l=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new U(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new U,fn=new U,to=new U,pn=new U,ci=new U,li=new U,ea=new U,eo=new U,no=new U,io=new U,so=new ce,oo=new ce,ro=new ce;class Je{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){je.subVectors(i,e),fn.subVectors(n,e),to.subVectors(t,e);const r=je.dot(je),a=je.dot(fn),c=je.dot(to),h=fn.dot(fn),l=fn.dot(to),d=r*h-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(h*c-a*l)*u,g=(r*l-a*c)*u;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,pn.x),c.addScaledVector(r,pn.y),c.addScaledVector(a,pn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return so.setScalar(0),oo.setScalar(0),ro.setScalar(0),so.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(so,o.x),r.addScaledVector(oo,o.y),r.addScaledVector(ro,o.z),r}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),fn.subVectors(t,e),je.cross(fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),je.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;ci.subVectors(i,n),li.subVectors(o,n),eo.subVectors(t,n);const c=ci.dot(eo),h=li.dot(eo);if(c<=0&&h<=0)return e.copy(n);no.subVectors(t,i);const l=ci.dot(no),d=li.dot(no);if(l>=0&&d<=l)return e.copy(i);const u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return r=c/(c-l),e.copy(n).addScaledVector(ci,r);io.subVectors(t,o);const f=ci.dot(io),g=li.dot(io);if(g>=0&&f<=g)return e.copy(o);const v=f*h-c*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(li,a);const m=l*g-f*d;if(m<=0&&d-l>=0&&f-g>=0)return ea.subVectors(o,i),a=(d-l)/(d-l+(f-g)),e.copy(i).addScaledVector(ea,a);const p=1/(m+v+u);return r=v*p,a=u*p,e.copy(n).addScaledVector(ci,r).addScaledVector(li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},hs={h:0,s:0,l:0};function ao(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Mr(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ao(r,o,t+1/3),this.g=ao(r,o,t),this.b=ao(r,o,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ue(Ae.r*255,0,255))*65536+Math.round(Ue(Ae.g*255,0,255))*256+Math.round(Ue(Ae.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,o=Ae.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,h;const l=(a+r)/2;if(a===r)c=0,h=0;else{const d=r-a;switch(h=l<=.5?d/(r+a):d/(2-r-a),r){case n:c=(i-o)/d+(i<o?6:0);break;case i:c=(o-n)/d+2;break;case o:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Xe){Qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(hs);const n=qi(An.h,hs.h,e),i=qi(An.s,hs.s,e),o=qi(An.l,hs.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Dt;Dt.NAMES=dc;let Zl=0;class Jn extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Pi(),this.name="",this.blending=xi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=Eo,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new U,ds=new Yt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Br,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),o=Le(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Br&&(t.usage=this.usage),t}}class uc extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fc extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kl=0;const We=new re,co=new ge,hi=new U,Ge=new $n,ki=new $n,Se=new U;class be extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ac(t)?fc:uc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ge.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ge.min,ki.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,ki.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(ki.min),Ge.expandByPoint(ki.max))}Ge.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Se.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Se.fromBufferAttribute(a,h),c&&(hi.fromBufferAttribute(t,h),Se.add(hi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;const h=new U,l=new U,d=new U,u=new Yt,f=new Yt,g=new Yt,v=new U,m=new U;function p(P,w,y){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),u.fromBufferAttribute(o,P),f.fromBufferAttribute(o,w),g.fromBufferAttribute(o,y),l.sub(h),d.sub(h),f.sub(u),g.sub(u);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(T),a[P].add(v),a[w].add(v),a[y].add(v),c[P].add(m),c[w].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,w=x.length;P<w;++P){const y=x[P],T=y.start,D=y.count;for(let I=T,k=T+D;I<k;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const _=new U,M=new U,C=new U,S=new U;function b(P){C.fromBufferAttribute(i,P),S.copy(C);const w=a[P];_.copy(w),_.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(S,w);const T=M.dot(c[P])<0?-1:1;r.setXYZW(P,_.x,_.y,_.z,T)}for(let P=0,w=x.length;P<w;++P){const y=x[P],T=y.start,D=y.count;for(let I=T,k=T+D;I<k;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new U,o=new U,r=new U,a=new U,c=new U,h=new U,l=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),l.subVectors(r,o),d.subVectors(i,o),l.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),l.subVectors(r,o),d.subVectors(i,o),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const h=a.array,l=a.itemSize,d=a.normalized,u=new h.constructor(c.length*l);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*l;for(let p=0;p<l;p++)u[g++]=h[f++]}return new xe(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=t(c,n);e.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const c=[],h=o[a];for(let l=0,d=h.length;l<d;l++){const u=h[l],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];l.push(f.toJSON(t.data))}l.length>0&&(i[c]=l,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(e))}const o=t.morphAttributes;for(const h in o){const l=[],d=o[h];for(let u=0,f=d.length;u<f;u++)l.push(d[u].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,l=r.length;h<l;h++){const d=r[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new re,kn=new yr,us=new jn,ia=new U,fs=new U,ps=new U,ms=new U,lo=new U,gs=new U,sa=new U,vs=new U;class R extends ge{constructor(t=new be,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){gs.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const l=a[c],d=o[c];l!==0&&(lo.fromBufferAttribute(d,t),r?gs.addScaledVector(lo,l):gs.addScaledVector(lo.sub(e),l))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(o),kn.copy(t.ray).recast(t.near),!(us.containsPoint(kn.origin)===!1&&(kn.intersectSphere(us,ia)===null||kn.origin.distanceToSquared(ia)>(t.far-t.near)**2))&&(na.copy(o).invert(),kn.copy(t.ray).applyMatrix4(na),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,l=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const S=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);i=xs(this,p,t,n,h,l,d,S,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);i=xs(this,r,t,n,h,l,d,x,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const S=M,b=M+1,P=M+2;i=xs(this,p,t,n,h,l,d,S,b,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,M=m+2;i=xs(this,r,t,n,h,l,d,x,_,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function $l(s,t,e,n,i,o,r,a){let c;if(t.side===Ce?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===In,a),c===null)return null;vs.copy(a),vs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(vs);return h<e.near||h>e.far?null:{distance:h,point:vs.clone(),object:s}}function xs(s,t,e,n,i,o,r,a,c,h){s.getVertexPosition(a,fs),s.getVertexPosition(c,ps),s.getVertexPosition(h,ms);const l=$l(s,t,e,n,fs,ps,ms,sa);if(l){const d=new U;Je.getBarycoord(sa,fs,ps,ms,d),i&&(l.uv=Je.getInterpolatedAttribute(i,a,c,h,d,new Yt)),o&&(l.uv1=Je.getInterpolatedAttribute(o,a,c,h,d,new Yt)),r&&(l.normal=Je.getInterpolatedAttribute(r,a,c,h,d,new U),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:c,c:h,normal:new U,materialIndex:0};Je.getNormal(fs,ps,ms,u.normal),l.face=u,l.barycoord=d}return l}class q extends be{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],h=[],l=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(d,2));function g(v,m,p,x,_,M,C,S,b,P,w){const y=M/b,T=C/P,D=M/2,I=C/2,k=S/2,N=b+1,V=P+1;let H=0,F=0;const W=new U;for(let X=0;X<V;X++){const j=X*T-I;for(let dt=0;dt<N;dt++){const ut=dt*y-D;W[v]=ut*x,W[m]=j*_,W[p]=k,h.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=S>0?1:-1,l.push(W.x,W.y,W.z),d.push(dt/b),d.push(1-X/P),H+=1}}for(let X=0;X<P;X++)for(let j=0;j<b;j++){const dt=u+j+N*X,ut=u+j+N*(X+1),Y=u+(j+1)+N*(X+1),J=u+(j+1)+N*X;c.push(dt,ut,J),c.push(ut,Y,J),F+=6}a.addGroup(f,F,w),f+=F,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Ai(s[e]);for(const i in n)t[i]=n[i]}return t}function jl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Jl={clone:Ai,merge:De};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=jl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new U,oa=new Yt,ra=new Yt;class Be extends mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ti*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ti*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,oa,ra),e.subVectors(ra,oa)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,h=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/h,i*=r.width/c,n*=r.height/h}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,ui=1;class eh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(di,ui,t,e);i.layers=this.layers,this.add(i);const o=new Be(di,ui,t,e);o.layers=this.layers,this.add(o);const r=new Be(di,ui,t,e);r.layers=this.layers,this.add(r);const a=new Be(di,ui,t,e);a.layers=this.layers,this.add(a);const c=new Be(di,ui,t,e);c.layers=this.layers,this.add(c);const h=new Be(di,ui,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const h of e)this.remove(h);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,h,l]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gc extends Re{constructor(t,e,n,i,o,r,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,i,o,r,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new q(5,5,5),o=new Ne({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Ln});o.uniforms.tEquirect.value=e;const r=new R(i,o),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=sn),new eh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const ho=new U,ih=new U,sh=new Gt;class Hn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ho.subVectors(n,e).cross(ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sh.getNormalMatrix(t),i=this.coplanarPoint(ho).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new jn,_s=new U;class wr{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,o=new Hn,r=new Hn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],h=i[4],l=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],_=i[14],M=i[15];if(n[0].setComponents(c-o,u-h,m-f,M-p).normalize(),n[1].setComponents(c+o,u+h,m+f,M+p).normalize(),n[2].setComponents(c+r,u+l,m+g,M+x).normalize(),n[3].setComponents(c-r,u-l,m-g,M-x).normalize(),n[4].setComponents(c-a,u-d,m-v,M-_).normalize(),e===xn)n[5].setComponents(c+a,u+d,m+v,M+_).normalize();else if(e===Us)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vc(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function oh(s){const t=new WeakMap;function e(a,c){const h=a.array,l=a.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,l),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,h){const l=c.array,d=c.updateRanges;if(s.bindBuffer(h,a),d.length===0)s.bufferSubData(h,0,l);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:i,remove:o,update:r}}class an extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,d=t/a,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<l;p++){const x=p*u-r;for(let _=0;_<h;_++){const M=_*d-o;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const _=x+h*p,M=x+h*(p+1),C=x+1+h*(p+1),S=x+1+h*p;f.push(_,M,S),f.push(M,C,S)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_h=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ph=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_u=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Au=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:rh,alphahash_pars_fragment:ah,alphamap_fragment:ch,alphamap_pars_fragment:lh,alphatest_fragment:hh,alphatest_pars_fragment:dh,aomap_fragment:uh,aomap_pars_fragment:fh,batching_pars_vertex:ph,batching_vertex:mh,begin_vertex:gh,beginnormal_vertex:vh,bsdfs:xh,iridescence_fragment:_h,bumpmap_pars_fragment:Mh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:bh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:Ah,color_vertex:Ch,common:Rh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Dh,displacementmap_vertex:Ih,emissivemap_fragment:Uh,emissivemap_pars_fragment:Nh,colorspace_fragment:Fh,colorspace_pars_fragment:kh,envmap_fragment:Bh,envmap_common_pars_fragment:Oh,envmap_pars_fragment:zh,envmap_pars_vertex:Gh,envmap_physical_pars_fragment:Jh,envmap_vertex:Hh,fog_vertex:Vh,fog_pars_vertex:Wh,fog_fragment:Xh,fog_pars_fragment:Yh,gradientmap_pars_fragment:qh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:$h,lights_pars_begin:jh,lights_toon_fragment:Qh,lights_toon_pars_fragment:td,lights_phong_fragment:ed,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:od,lights_fragment_maps:rd,lights_fragment_end:ad,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ld,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:dd,map_fragment:ud,map_pars_fragment:fd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:vd,morphinstance_vertex:xd,morphcolor_vertex:_d,morphnormal_vertex:Md,morphtarget_pars_vertex:yd,morphtarget_vertex:wd,normal_fragment_begin:Sd,normal_fragment_maps:bd,normal_pars_fragment:Ed,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Rd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Dd,opaque_fragment:Id,packing:Ud,premultiplied_alpha_fragment:Nd,project_vertex:Fd,dithering_fragment:kd,dithering_pars_fragment:Bd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:Yd,skinning_vertex:qd,skinnormal_vertex:Zd,specularmap_fragment:Kd,specularmap_pars_fragment:$d,tonemapping_fragment:jd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:tu,uv_pars_fragment:eu,uv_pars_vertex:nu,uv_vertex:iu,worldpos_vertex:su,background_vert:ou,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:cu,cube_vert:lu,cube_frag:hu,depth_vert:du,depth_frag:uu,distanceRGBA_vert:fu,distanceRGBA_frag:pu,equirect_vert:mu,equirect_frag:gu,linedashed_vert:vu,linedashed_frag:xu,meshbasic_vert:_u,meshbasic_frag:Mu,meshlambert_vert:yu,meshlambert_frag:wu,meshmatcap_vert:Su,meshmatcap_frag:bu,meshnormal_vert:Eu,meshnormal_frag:Tu,meshphong_vert:Au,meshphong_frag:Cu,meshphysical_vert:Ru,meshphysical_frag:Pu,meshtoon_vert:Lu,meshtoon_frag:Du,points_vert:Iu,points_frag:Uu,shadow_vert:Nu,shadow_frag:Fu,sprite_vert:ku,sprite_frag:Bu},gt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},nn={basic:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([gt.lights,gt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};nn.physical={uniforms:De([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ms={r:0,b:0,g:0},On=new rn,Ou=new re;function zu(s,t,e,n,i,o,r){const a=new Dt(0);let c=o===!0?0:1,h,l,d=null,u=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?p(a,c):M&&M.isColor&&(p(M,1),_=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Bs)?(l===void 0&&(l=new R(new q(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Ai(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),On.copy(_.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ou.makeRotationFromEuler(On)),l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,(d!==M||u!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new R(new an(2,2),new Ne({name:"BackgroundMaterial",uniforms:Ai(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,_){x.getRGB(Ms,pc(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function Gu(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(y,T,D,I,k){let N=!1;const V=d(I,D,T);o!==V&&(o=V,h(o.object)),N=f(y,I,D,k),N&&g(y,I,D,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,M(y,T,D,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return s.createVertexArray()}function h(y){return s.bindVertexArray(y)}function l(y){return s.deleteVertexArray(y)}function d(y,T,D){const I=D.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let N=k[T.id];N===void 0&&(N={},k[T.id]=N);let V=N[I];return V===void 0&&(V=u(c()),N[I]=V),V}function u(y){const T=[],D=[],I=[];for(let k=0;k<e;k++)T[k]=0,D[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,T,D,I){const k=o.attributes,N=T.attributes;let V=0;const H=D.getAttributes();for(const F in H)if(H[F].location>=0){const X=k[F];let j=N[F];if(j===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),X===void 0||X.attribute!==j||j&&X.data!==j.data)return!0;V++}return o.attributesNum!==V||o.index!==I}function g(y,T,D,I){const k={},N=T.attributes;let V=0;const H=D.getAttributes();for(const F in H)if(H[F].location>=0){let X=N[F];X===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const j={};j.attribute=X,X&&X.data&&(j.data=X.data),k[F]=j,V++}o.attributes=k,o.attributesNum=V,o.index=I}function v(){const y=o.newAttributes;for(let T=0,D=y.length;T<D;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const D=o.newAttributes,I=o.enabledAttributes,k=o.attributeDivisors;D[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),k[y]!==T&&(s.vertexAttribDivisor(y,T),k[y]=T)}function x(){const y=o.newAttributes,T=o.enabledAttributes;for(let D=0,I=T.length;D<I;D++)T[D]!==y[D]&&(s.disableVertexAttribArray(D),T[D]=0)}function _(y,T,D,I,k,N,V){V===!0?s.vertexAttribIPointer(y,T,D,k,N):s.vertexAttribPointer(y,T,D,I,k,N)}function M(y,T,D,I){v();const k=I.attributes,N=D.getAttributes(),V=T.defaultAttributeValues;for(const H in N){const F=N[H];if(F.location>=0){let W=k[H];if(W===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const X=W.normalized,j=W.itemSize,dt=t.get(W);if(dt===void 0)continue;const ut=dt.buffer,Y=dt.type,J=dt.bytesPerElement,ct=Y===s.INT||Y===s.UNSIGNED_INT||W.gpuType===fr;if(W.isInterleavedBufferAttribute){const tt=W.data,rt=tt.stride,pt=W.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<F.locationSize;mt++)p(F.location+mt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<F.locationSize;mt++)m(F.location+mt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let mt=0;mt<F.locationSize;mt++)_(F.location+mt,j/F.locationSize,Y,X,rt*J,(pt+j/F.locationSize*mt)*J,ct)}else{if(W.isInstancedBufferAttribute){for(let tt=0;tt<F.locationSize;tt++)p(F.location+tt,W.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let tt=0;tt<F.locationSize;tt++)m(F.location+tt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let tt=0;tt<F.locationSize;tt++)_(F.location+tt,j/F.locationSize,Y,X,j*J,j/F.locationSize*tt*J,ct)}}else if(V!==void 0){const X=V[H];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(F.location,X);break;case 3:s.vertexAttrib3fv(F.location,X);break;case 4:s.vertexAttrib4fv(F.location,X);break;default:s.vertexAttrib1fv(F.location,X)}}}}x()}function C(){P();for(const y in n){const T=n[y];for(const D in T){const I=T[D];for(const k in I)l(I[k].object),delete I[k];delete T[D]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const D in T){const I=T[D];for(const k in I)l(I[k].object),delete I[k];delete T[D]}delete n[y.id]}function b(y){for(const T in n){const D=n[T];if(D[y.id]===void 0)continue;const I=D[y.id];for(const k in I)l(I[k].object),delete I[k];delete D[y.id]}}function P(){w(),r=!0,o!==i&&(o=i,h(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Hu(s,t,e){let n;function i(h){n=h}function o(h,l){s.drawArrays(n,h,l),e.update(l,n,1)}function r(h,l,d){d!==0&&(s.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function a(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let f=0;for(let g=0;g<d;g++)f+=l[g];e.update(f,n,1)}function c(h,l,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)r(h[g],l[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=l[v]*u[v];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vu(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==Qe&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Mn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==on&&!P)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:S}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Hn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=l(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||o&&!m)o?l(null):h();else{const x=o?0:n,_=x*4;let M=p.clippingState||null;c.value=M,M=l(g,u,_,f);for(let C=0;C!==_;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=f;_!==v;++_,M+=4)r.copy(d[_]).applyMatrix4(x,a),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Xu(s){let t=new WeakMap;function e(r,a){return a===Io?r.mapping=wi:a===Uo&&(r.mapping=Si),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Io||a===Uo)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new nh(c.height);return h.fromEquirectangularTexture(s,r),t.set(r,h),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class xc extends mc{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,aa=[.125,.215,.35,.446,.526,.582],Xn=20,uo=new xc,ca=new Dt;let fo=null,po=0,mo=0,go=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,la=[new U(-Vn,fi,0),new U(Vn,fi,0),new U(-fi,0,Vn),new U(fi,0,Vn),new U(0,Vn,-fi),new U(0,Vn,fi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ji,format:Qe,colorSpace:Ci,depthBuffer:!1},i=da(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=da(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yu(o)),this._blurMaterial=qu(o,t,e)}return i}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(ca),l.toneMapping=Dn,l.autoClear=!1;const f=new Zt({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new R(new q,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(ca),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const _=this._cubeSize;ys(i,x*_,p>2?_:0,_,_),l.setRenderTarget(i),v&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=u,l.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===wi||t.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ua());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new R(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=la[(i-o-1)%la.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new R(this._lodPlanes[i],h),u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),v=o/g,m=isFinite(o)?1+Math.floor(l*v):Xn;m>Xn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const p=[];let x=0;for(let b=0;b<Xn;++b){const P=b/v,w=Math.exp(-P*P/2);p.push(w),b===0?x+=w:b<m&&(x+=2*w)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const M=this._sizeLods[i],C=3*M*(i>_-gi?i-_+gi:0),S=4*(this._cubeSize-M);ys(e,C,S,3*M,2*M),c.setRenderTarget(e),c.render(d,uo)}}function Yu(s){const t=[],e=[],n=[];let i=s;const o=s-gi+1+aa.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-gi?c=aa[r-s+gi-1]:r===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),_=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,P=S>2?0:-1,w=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];x.set(w,v*g*S),_.set(u,m*g*S);const y=[S,S,S,S,S,S];M.set(y,p*g*S)}const C=new be;C.setAttribute("position",new xe(x,v)),C.setAttribute("uv",new xe(_,m)),C.setAttribute("faceIndex",new xe(M,p)),t.push(C),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function da(s,t,e){const n=new Kn(s,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function qu(s,t,e){const n=new Float32Array(Xn),i=new U(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ua(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function fa(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Sr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Io||c===Uo,l=c===wi||c===Si;if(h||l){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ha(s)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return h&&f&&f.height>0||l&&f&&i(f)?(e===null&&(e=new ha(s)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function o(a){const c=a.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $u(s,t,e,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",r),delete i[u.id];const f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function h(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,M=x.length;_<M;_+=3){const C=x[_+0],S=x[_+1],b=x[_+2];u.push(C,S,S,b,b,C)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const C=_+0,S=_+1,b=_+2;u.push(C,S,S,b,b,C)}}else return;const m=new(ac(u)?fc:uc)(u,1);m.version=v;const p=o.get(d);p&&t.remove(p),o.set(d,m)}function l(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:l}}function ju(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function h(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,u*r,g),e.update(f,n,g))}function l(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/r,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function Ju(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t,e){const n=new WeakMap,i=new ce;function o(r,a,c){const h=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,S=1;C>t.maxTextureSize&&(S=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*S*4*d),P=new lc(b,C,S,d);P.type=on,P.needsUpdate=!0;const w=M*4;for(let T=0;T<d;T++){const D=p[T],I=x[T],k=_[T],N=C*S*4*T;for(let V=0;V<D.count;V++){const H=V*w;g===!0&&(i.fromBufferAttribute(D,V),b[N+H+0]=i.x,b[N+H+1]=i.y,b[N+H+2]=i.z,b[N+H+3]=0),v===!0&&(i.fromBufferAttribute(I,V),b[N+H+4]=i.x,b[N+H+5]=i.y,b[N+H+6]=i.z,b[N+H+7]=0),m===!0&&(i.fromBufferAttribute(k,V),b[N+H+8]=i.x,b[N+H+9]=i.y,b[N+H+10]=i.z,b[N+H+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Yt(C,S)},n.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function tf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,l=c.geometry,d=t.get(c,l);if(i.get(d)!==h&&(t.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return d}function r(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class _c extends Re{constructor(t,e,n,i,o,r,a,c,h,l=_i){if(l!==_i&&l!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===_i&&(n=Zn),n===void 0&&l===Ei&&(n=bi),super(null,i,o,r,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Mc=new Re,pa=new _c(1,1),yc=new lc,wc=new zl,Sc=new gc,ma=[],ga=[],va=new Float32Array(16),xa=new Float32Array(9),_a=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=ma[i];if(o===void 0&&(o=new Float32Array(i),ma[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zs(s,t){let e=ga[t];e===void 0&&(e=new Int32Array(t),ga[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function rf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;_a.set(n),s.uniformMatrix2fv(this.addr,!1,_a),we(e,n)}}function af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;xa.set(n),s.uniformMatrix3fv(this.addr,!1,xa),we(e,n)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(ye(e,n))return;va.set(n),s.uniformMatrix4fv(this.addr,!1,va),we(e,n)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(pa.compareFunction=rc,o=pa):o=Mc,e.setTexture2D(t||o,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wc,i)}function _f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sc,i)}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yc,i)}function yf(s){switch(s){case 5126:return ef;case 35664:return nf;case 35665:return sf;case 35666:return of;case 35674:return rf;case 35675:return af;case 35676:return cf;case 5124:case 35670:return lf;case 35667:case 35671:return hf;case 35668:case 35672:return df;case 35669:case 35673:return uf;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return Mf}}function wf(s,t){s.uniform1fv(this.addr,t)}function Sf(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function bf(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Ef(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Tf(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Af(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rf(s,t){s.uniform1iv(this.addr,t)}function Pf(s,t){s.uniform2iv(this.addr,t)}function Lf(s,t){s.uniform3iv(this.addr,t)}function Df(s,t){s.uniform4iv(this.addr,t)}function If(s,t){s.uniform1uiv(this.addr,t)}function Uf(s,t){s.uniform2uiv(this.addr,t)}function Nf(s,t){s.uniform3uiv(this.addr,t)}function Ff(s,t){s.uniform4uiv(this.addr,t)}function kf(s,t,e){const n=this.cache,i=t.length,o=zs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Mc,o[r])}function Bf(s,t,e){const n=this.cache,i=t.length,o=zs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||wc,o[r])}function Of(s,t,e){const n=this.cache,i=t.length,o=zs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Sc,o[r])}function zf(s,t,e){const n=this.cache,i=t.length,o=zs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),we(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||yc,o[r])}function Gf(s){switch(s){case 5126:return wf;case 35664:return Sf;case 35665:return bf;case 35666:return Ef;case 35674:return Tf;case 35675:return Af;case 35676:return Cf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return Lf;case 35669:case 35673:return Df;case 5125:return If;case 36294:return Uf;case 36295:return Nf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return zf}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gf(e.type)}}class Wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Ma(s,t){s.seq.push(t),s.map[t.id]=t}function Xf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),r=vo.lastIndex;let a=o[1];const c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===i){Ma(e,h===void 0?new Hf(a,s,t):new Vf(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Wf(a),Ma(e,d)),e=d}}}class Is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Xf(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function ya(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Yf=37297;let qf=0;function Zf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const wa=new Gt;function Kf(s){Qt._getMatrix(wa,Qt.workingColorSpace,s);const t=`mat3( ${wa.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Os:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Zf(s.getShaderSource(t),r)}else return i}function $f(s,t){const e=Kf(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jf(s,t){let e;switch(t){case Qc:e="Linear";break;case tl:e="Reinhard";break;case el:e="Cineon";break;case Za:e="ACESFilmic";break;case il:e="AgX";break;case sl:e="Neutral";break;case nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new U;function Jf(){Qt.getLuminanceCoefficients(ws);const s=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function tp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Wi(s){return s!==""}function ba(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ea(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function cr(s){return s.replace(np,sp)}const ip=new Map;function sp(s,t){let e=Vt[t];if(e===void 0){const n=ip.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cr(e)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ta(s){return s.replace(op,rp)}function rp(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Aa(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function cp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Si:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function hp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case jc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function dp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function up(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=ap(e),h=cp(e),l=lp(e),d=hp(e),u=dp(e),f=Qf(e),g=tp(o),v=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(m=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[Aa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),Jf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),r=cr(r),r=ba(r,e),r=Ea(r,e),a=cr(a),a=ba(a,e),a=Ea(a,e),r=Ta(r),a=Ta(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Or?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+r,M=x+p+a,C=ya(i,i.VERTEX_SHADER,_),S=ya(i,i.FRAGMENT_SHADER,M);i.attachShader(v,C),i.attachShader(v,S),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function b(T){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(C).trim(),k=i.getShaderInfoLog(S).trim();let N=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,S);else{const H=Sa(i,C,"vertex"),F=Sa(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+H+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||k==="")&&(V=!1);V&&(T.diagnostics={runnable:N,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(C),i.deleteShader(S),P=new Is(i,v),w=ep(i,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,Yf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=S,this}let fp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mp(t),e.set(t,n)),n}}class mp{constructor(t){this.id=fp++,this.code=t,this.usedTimes=0}}function gp(s,t,e,n,i,o,r){const a=new hc,c=new pp,h=new Set,l=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return h.add(w),w===0?"uv":`uv${w}`}function m(w,y,T,D,I){const k=D.fog,N=I.geometry,V=w.isMeshStandardMaterial?D.environment:null,H=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),F=H&&H.mapping===Bs?H.image.height:null,W=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=X!==void 0?X.length:0;let dt=0;N.morphAttributes.position!==void 0&&(dt=1),N.morphAttributes.normal!==void 0&&(dt=2),N.morphAttributes.color!==void 0&&(dt=3);let ut,Y,J,ct;if(W){const oe=nn[W];ut=oe.vertexShader,Y=oe.fragmentShader}else ut=w.vertexShader,Y=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),ct=c.getFragmentShaderID(w);const tt=s.getRenderTarget(),rt=s.state.buffers.depth.getReversed(),pt=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,Kt=!!w.map,Ft=!!w.matcap,ee=!!H,B=!!w.aoMap,ne=!!w.lightMap,Xt=!!w.bumpMap,$t=!!w.normalMap,Ut=!!w.displacementMap,fe=!!w.emissiveMap,It=!!w.metalnessMap,L=!!w.roughnessMap,E=w.anisotropy>0,Z=w.clearcoat>0,st=w.dispersion>0,at=w.iridescence>0,et=w.sheen>0,Pt=w.transmission>0,_t=E&&!!w.anisotropyMap,bt=Z&&!!w.clearcoatMap,Jt=Z&&!!w.clearcoatNormalMap,lt=Z&&!!w.clearcoatRoughnessMap,Et=at&&!!w.iridescenceMap,Nt=at&&!!w.iridescenceThicknessMap,kt=et&&!!w.sheenColorMap,Tt=et&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Ht=!!w.specularColorMap,he=!!w.specularIntensityMap,O=Pt&&!!w.transmissionMap,xt=Pt&&!!w.thicknessMap,Q=!!w.gradientMap,ot=!!w.alphaMap,St=w.alphaTest>0,yt=!!w.alphaHash,Ot=!!w.extensions;let ve=Dn;w.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ee={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:ut,fragmentShader:Y,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:pt,instancingColor:pt&&I.instanceColor!==null,instancingMorph:pt&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ci,alphaToCoverage:!!w.alphaToCoverage,map:Kt,matcap:Ft,envMap:ee,envMapMode:ee&&H.mapping,envMapCubeUVHeight:F,aoMap:B,lightMap:ne,bumpMap:Xt,normalMap:$t,displacementMap:u&&Ut,emissiveMap:fe,normalMapObjectSpace:$t&&w.normalMapType===cl,normalMapTangentSpace:$t&&w.normalMapType===oc,metalnessMap:It,roughnessMap:L,anisotropy:E,anisotropyMap:_t,clearcoat:Z,clearcoatMap:bt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:lt,dispersion:st,iridescence:at,iridescenceMap:Et,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:kt,sheenRoughnessMap:Tt,specularMap:jt,specularColorMap:Ht,specularIntensityMap:he,transmission:Pt,transmissionMap:O,thicknessMap:xt,gradientMap:Q,opaque:w.transparent===!1&&w.blending===xi&&w.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:yt,combine:w.combine,mapUv:Kt&&v(w.map.channel),aoMapUv:B&&v(w.aoMap.channel),lightMapUv:ne&&v(w.lightMap.channel),bumpMapUv:Xt&&v(w.bumpMap.channel),normalMapUv:$t&&v(w.normalMap.channel),displacementMapUv:Ut&&v(w.displacementMap.channel),emissiveMapUv:fe&&v(w.emissiveMap.channel),metalnessMapUv:It&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:_t&&v(w.anisotropyMap.channel),clearcoatMapUv:bt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(w.sheenRoughnessMap.channel),specularMapUv:jt&&v(w.specularMap.channel),specularColorMapUv:Ht&&v(w.specularColorMap.channel),specularIntensityMapUv:he&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:xt&&v(w.thicknessMap.channel),alphaMapUv:ot&&v(w.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&($t||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Kt||ot),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:rt,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Kt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:fe&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ye,flipSided:w.side===Ce,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ee.vertexUv1s=h.has(1),Ee.vertexUv2s=h.has(2),Ee.vertexUv3s=h.has(3),h.clear(),Ee}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const T in w.defines)y.push(T),y.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(x(y,w),_(y,w),y.push(s.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function x(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function _(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const y=g[w.type];let T;if(y){const D=nn[y];T=Jl.clone(D.uniforms)}else T=w.uniforms;return T}function C(w,y){let T;for(let D=0,I=l.length;D<I;D++){const k=l[D];if(k.cacheKey===y){T=k,++T.usedTimes;break}}return T===void 0&&(T=new up(s,y,w,o),l.push(T)),T}function S(w){if(--w.usedTimes===0){const y=l.indexOf(w);l[y]=l[l.length-1],l.pop(),w.destroy()}}function b(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:P}}function vp(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function xp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ca(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ra(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,g,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(d,u){e.length>1&&e.sort(d||xp),n.length>1&&n.sort(u||Ca),i.length>1&&i.sort(u||Ca)}function l(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:l,sort:h}}function _p(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ra,s.set(n,[r])):i>=o.length?(r=new Ra,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Mp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Dt};break;case"SpotLight":e={position:new U,direction:new U,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wp=0;function Sp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bp(s){const t=new Mp,e=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const i=new U,o=new re,r=new re;function a(h){let l=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,_=0,M=0,C=0,S=0,b=0;h.sort(Sp);for(let w=0,y=h.length;w<y;w++){const T=h[w],D=T.color,I=T.intensity,k=T.distance,N=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)l+=D.r*I,d+=D.g*I,u+=D.b*I;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],I);b++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,F=e.get(T);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=T.shadow.matrix,x++}n.directional[f]=V,f++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(D).multiplyScalar(I),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[v]=V;const H=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,H.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[v]=H.matrix,T.castShadow){const F=e.get(T);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=N,M++}v++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(D).multiplyScalar(I),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=V,m++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const H=T.shadow,F=e.get(T);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=T.shadow.matrix,_++}n.point[g]=V,g++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(I),V.groundColor.copy(T.groundColor).multiplyScalar(I),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=b,n.version=wp++)}function c(h,l){let d=0,u=0,f=0,g=0,v=0;const m=l.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const _=h[p];if(_.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Pa(s){const t=new bp(s),e=[],n=[];function i(l){h.camera=l,e.length=0,n.length=0}function o(l){e.push(l)}function r(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Ep(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Pa(s),t.set(i,[a])):o>=r.length?(a=new Pa(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tp extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ap extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pp(s,t,e){let n=new wr;const i=new Yt,o=new Yt,r=new ce,a=new Tp({depthPacking:al}),c=new Ap,h={},l=e.maxTextureSize,d={[In]:Ce,[Ce]:In,[Ye]:Ye},u=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Cp,fragmentShader:Rp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new R(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let p=this.type;this.render=function(S,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const w=s.getRenderTarget(),y=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ln),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==vn&&this.type===vn,k=p===vn&&this.type!==vn;for(let N=0,V=S.length;N<V;N++){const H=S[N],F=H.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const W=F.getFrameExtents();if(i.multiply(W),o.copy(F.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(o.x=Math.floor(l/W.x),i.x=o.x*W.x,F.mapSize.x=o.x),i.y>l&&(o.y=Math.floor(l/W.y),i.y=o.y*W.y,F.mapSize.y=o.y)),F.map===null||I===!0||k===!0){const j=this.type!==vn?{minFilter:He,magFilter:He}:{};F.map!==null&&F.map.dispose(),F.map=new Kn(i.x,i.y,j),F.map.texture.name=H.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const X=F.getViewportCount();for(let j=0;j<X;j++){const dt=F.getViewport(j);r.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),D.viewport(r),F.updateMatrices(H,j),n=F.getFrustum(),M(b,P,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===vn&&x(F,P),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,y,T)};function x(S,b){const P=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Kn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(b,null,P,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(b,null,P,f,v,null)}function _(S,b,P,w){let y=null;const T=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=y.uuid,I=b.uuid;let k=h[D];k===void 0&&(k={},h[D]=k);let N=k[I];N===void 0&&(N=y.clone(),k[I]=N,b.addEventListener("dispose",C)),y=N}if(y.visible=b.visible,y.wireframe=b.wireframe,w===vn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=s.properties.get(y);D.light=P}return y}function M(S,b,P,w,y){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===vn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const I=t.update(S),k=S.material;if(Array.isArray(k)){const N=I.groups;for(let V=0,H=N.length;V<H;V++){const F=N[V],W=k[F.materialIndex];if(W&&W.visible){const X=_(S,W,w,y);S.onBeforeShadow(s,S,b,P,I,X,F),s.renderBufferDirect(P,null,I,X,S,F),S.onAfterShadow(s,S,b,P,I,X,F)}}}else if(k.visible){const N=_(S,k,w,y);S.onBeforeShadow(s,S,b,P,I,N,null),s.renderBufferDirect(P,null,I,N,S,null),S.onAfterShadow(s,S,b,P,I,N,null)}}const D=S.children;for(let I=0,k=D.length;I<k;I++)M(D[I],b,P,w,y)}function C(S){S.target.removeEventListener("dispose",C);for(const P in h){const w=h[P],y=S.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Lp={[To]:Ao,[Co]:Lo,[Ro]:Do,[yi]:Po,[Ao]:To,[Lo]:Co,[Do]:Ro,[Po]:yi};function Dp(s,t){function e(){let O=!1;const xt=new ce;let Q=null;const ot=new ce(0,0,0,0);return{setMask:function(St){Q!==St&&!O&&(s.colorMask(St,St,St,St),Q=St)},setLocked:function(St){O=St},setClear:function(St,yt,Ot,ve,Ee){Ee===!0&&(St*=ve,yt*=ve,Ot*=ve),xt.set(St,yt,Ot,ve),ot.equals(xt)===!1&&(s.clearColor(St,yt,Ot,ve),ot.copy(xt))},reset:function(){O=!1,Q=null,ot.set(-1,0,0,0)}}}function n(){let O=!1,xt=!1,Q=null,ot=null,St=null;return{setReversed:function(yt){if(xt!==yt){const Ot=t.get("EXT_clip_control");xt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const ve=St;St=null,this.setClear(ve)}xt=yt},getReversed:function(){return xt},setTest:function(yt){yt?tt(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(yt){Q!==yt&&!O&&(s.depthMask(yt),Q=yt)},setFunc:function(yt){if(xt&&(yt=Lp[yt]),ot!==yt){switch(yt){case To:s.depthFunc(s.NEVER);break;case Ao:s.depthFunc(s.ALWAYS);break;case Co:s.depthFunc(s.LESS);break;case yi:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Po:s.depthFunc(s.GEQUAL);break;case Lo:s.depthFunc(s.GREATER);break;case Do:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=yt}},setLocked:function(yt){O=yt},setClear:function(yt){St!==yt&&(xt&&(yt=1-yt),s.clearDepth(yt),St=yt)},reset:function(){O=!1,Q=null,ot=null,St=null,xt=!1}}}function i(){let O=!1,xt=null,Q=null,ot=null,St=null,yt=null,Ot=null,ve=null,Ee=null;return{setTest:function(oe){O||(oe?tt(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(oe){xt!==oe&&!O&&(s.stencilMask(oe),xt=oe)},setFunc:function(oe,qe,cn){(Q!==oe||ot!==qe||St!==cn)&&(s.stencilFunc(oe,qe,cn),Q=oe,ot=qe,St=cn)},setOp:function(oe,qe,cn){(yt!==oe||Ot!==qe||ve!==cn)&&(s.stencilOp(oe,qe,cn),yt=oe,Ot=qe,ve=cn)},setLocked:function(oe){O=oe},setClear:function(oe){Ee!==oe&&(s.clearStencil(oe),Ee=oe)},reset:function(){O=!1,xt=null,Q=null,ot=null,St=null,yt=null,Ot=null,ve=null,Ee=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,h=new WeakMap;let l={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,C=null,S=null,b=new Dt(0,0,0),P=0,w=!1,y=null,T=null,D=null,I=null,k=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=H>=1):F.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=H>=2);let W=null,X={};const j=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),ut=new ce().fromArray(j),Y=new ce().fromArray(dt);function J(O,xt,Q,ot){const St=new Uint8Array(4),yt=s.createTexture();s.bindTexture(O,yt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<Q;Ot++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(xt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return yt}const ct={};ct[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),r.setFunc(yi),Xt(!1),$t(Ur),tt(s.CULL_FACE),B(Ln);function tt(O){l[O]!==!0&&(s.enable(O),l[O]=!0)}function rt(O){l[O]!==!1&&(s.disable(O),l[O]=!1)}function pt(O,xt){return d[O]!==xt?(s.bindFramebuffer(O,xt),d[O]=xt,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xt),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function mt(O,xt){let Q=f,ot=!1;if(O){Q=u.get(xt),Q===void 0&&(Q=[],u.set(xt,Q));const St=O.textures;if(Q.length!==St.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Ot=St.length;yt<Ot;yt++)Q[yt]=s.COLOR_ATTACHMENT0+yt;Q.length=St.length,ot=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,ot=!0);ot&&s.drawBuffers(Q)}function Kt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Ft={[Wn]:s.FUNC_ADD,[Uc]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};Ft[Fc]=s.MIN,Ft[kc]=s.MAX;const ee={[Bc]:s.ZERO,[Oc]:s.ONE,[zc]:s.SRC_COLOR,[bo]:s.SRC_ALPHA,[Yc]:s.SRC_ALPHA_SATURATE,[Wc]:s.DST_COLOR,[Hc]:s.DST_ALPHA,[Gc]:s.ONE_MINUS_SRC_COLOR,[Eo]:s.ONE_MINUS_SRC_ALPHA,[Xc]:s.ONE_MINUS_DST_COLOR,[Vc]:s.ONE_MINUS_DST_ALPHA,[qc]:s.CONSTANT_COLOR,[Zc]:s.ONE_MINUS_CONSTANT_COLOR,[Kc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function B(O,xt,Q,ot,St,yt,Ot,ve,Ee,oe){if(O===Ln){v===!0&&(rt(s.BLEND),v=!1);return}if(v===!1&&(tt(s.BLEND),v=!0),O!==Ic){if(O!==m||oe!==w){if((p!==Wn||M!==Wn)&&(s.blendEquation(s.FUNC_ADD),p=Wn,M=Wn),oe)switch(O){case xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.ONE,s.ONE);break;case Nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case So:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,_=null,C=null,S=null,b.set(0,0,0),P=0,m=O,w=oe}return}St=St||xt,yt=yt||Q,Ot=Ot||ot,(xt!==p||St!==M)&&(s.blendEquationSeparate(Ft[xt],Ft[St]),p=xt,M=St),(Q!==x||ot!==_||yt!==C||Ot!==S)&&(s.blendFuncSeparate(ee[Q],ee[ot],ee[yt],ee[Ot]),x=Q,_=ot,C=yt,S=Ot),(ve.equals(b)===!1||Ee!==P)&&(s.blendColor(ve.r,ve.g,ve.b,Ee),b.copy(ve),P=Ee),m=O,w=!1}function ne(O,xt){O.side===Ye?rt(s.CULL_FACE):tt(s.CULL_FACE);let Q=O.side===Ce;xt&&(Q=!Q),Xt(Q),O.blending===xi&&O.transparent===!1?B(Ln):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const ot=O.stencilWrite;a.setTest(ot),ot&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(O){y!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),y=O)}function $t(O){O!==Lc?(tt(s.CULL_FACE),O!==T&&(O===Ur?s.cullFace(s.BACK):O===Dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),T=O}function Ut(O){O!==D&&(V&&s.lineWidth(O),D=O)}function fe(O,xt,Q){O?(tt(s.POLYGON_OFFSET_FILL),(I!==xt||k!==Q)&&(s.polygonOffset(xt,Q),I=xt,k=Q)):rt(s.POLYGON_OFFSET_FILL)}function It(O){O?tt(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+N-1),W!==O&&(s.activeTexture(O),W=O)}function E(O,xt,Q){Q===void 0&&(W===null?Q=s.TEXTURE0+N-1:Q=W);let ot=X[Q];ot===void 0&&(ot={type:void 0,texture:void 0},X[Q]=ot),(ot.type!==O||ot.texture!==xt)&&(W!==Q&&(s.activeTexture(Q),W=Q),s.bindTexture(O,xt||ct[O]),ot.type=O,ot.texture=xt)}function Z(){const O=X[W];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(O){ut.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ut.copy(O))}function Tt(O){Y.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function jt(O,xt){let Q=h.get(xt);Q===void 0&&(Q=new WeakMap,h.set(xt,Q));let ot=Q.get(O);ot===void 0&&(ot=s.getUniformBlockIndex(xt,O.name),Q.set(O,ot))}function Ht(O,xt){const ot=h.get(xt).get(O);c.get(xt)!==ot&&(s.uniformBlockBinding(xt,ot,O.__bindingPointIndex),c.set(xt,ot))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},W=null,X={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,C=null,S=null,b=new Dt(0,0,0),P=0,w=!1,y=null,T=null,D=null,I=null,k=null,ut.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:tt,disable:rt,bindFramebuffer:pt,drawBuffers:mt,useProgram:Kt,setBlending:B,setMaterial:ne,setFlipSided:Xt,setCullFace:$t,setLineWidth:Ut,setPolygonOffset:fe,setScissorTest:It,activeTexture:L,bindTexture:E,unbindTexture:Z,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:Et,texImage3D:Nt,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:bt,scissor:kt,viewport:Tt,reset:he}}function La(s,t,e,n){const i=Ip(n);switch(e){case Qa:return s*t;case ec:return s*t;case nc:return s*t*2;case gr:return s*t/i.components*i.byteLength;case vr:return s*t/i.components*i.byteLength;case ic:return s*t*2/i.components*i.byteLength;case xr:return s*t*2/i.components*i.byteLength;case tc:return s*t*3/i.components*i.byteLength;case Qe:return s*t*4/i.components*i.byteLength;case _r:return s*t*4/i.components*i.byteLength;case Cs:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ps:case Ls:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:case Oo:return Math.max(s,16)*Math.max(t,8)/4;case Fo:case Bo:return Math.max(s,8)*Math.max(t,8)/2;case zo:case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case tr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case er:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ds:case ir:case sr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sc:case or:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rr:case ar:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ip(s){switch(s){case Mn:case $a:return{byteLength:1,components:1};case Ki:case ja:case Ji:return{byteLength:2,components:1};case pr:case mr:return{byteLength:2,components:4};case Zn:case fr:case on:return{byteLength:4,components:1};case Ja:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Up(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Yt,l=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return f?new OffscreenCanvas(L,E):Ns("canvas")}function v(L,E,Z){let st=1;const at=It(L);if((at.width>Z||at.height>Z)&&(st=Z/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const et=Math.floor(st*at.width),Pt=Math.floor(st*at.height);d===void 0&&(d=g(et,Pt));const _t=E?g(et,Pt):d;return _t.width=et,_t.height=Pt,_t.getContext("2d").drawImage(L,0,0,et,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Pt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(L,E,Z,st,at=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let et=E;if(E===s.RED&&(Z===s.FLOAT&&(et=s.R32F),Z===s.HALF_FLOAT&&(et=s.R16F),Z===s.UNSIGNED_BYTE&&(et=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(et=s.R8UI),Z===s.UNSIGNED_SHORT&&(et=s.R16UI),Z===s.UNSIGNED_INT&&(et=s.R32UI),Z===s.BYTE&&(et=s.R8I),Z===s.SHORT&&(et=s.R16I),Z===s.INT&&(et=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(et=s.RG32F),Z===s.HALF_FLOAT&&(et=s.RG16F),Z===s.UNSIGNED_BYTE&&(et=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(et=s.RG8UI),Z===s.UNSIGNED_SHORT&&(et=s.RG16UI),Z===s.UNSIGNED_INT&&(et=s.RG32UI),Z===s.BYTE&&(et=s.RG8I),Z===s.SHORT&&(et=s.RG16I),Z===s.INT&&(et=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(et=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(et=s.RGB16UI),Z===s.UNSIGNED_INT&&(et=s.RGB32UI),Z===s.BYTE&&(et=s.RGB8I),Z===s.SHORT&&(et=s.RGB16I),Z===s.INT&&(et=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),Z===s.UNSIGNED_INT&&(et=s.RGBA32UI),Z===s.BYTE&&(et=s.RGBA8I),Z===s.SHORT&&(et=s.RGBA16I),Z===s.INT&&(et=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),E===s.RGBA){const Pt=at?Os:Qt.getTransfer(st);Z===s.FLOAT&&(et=s.RGBA32F),Z===s.HALF_FLOAT&&(et=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(et=Pt===ae?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(L,E){let Z;return L?E===null||E===Zn||E===bi?Z=s.DEPTH24_STENCIL8:E===on?Z=s.DEPTH32F_STENCIL8:E===Ki&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zn||E===bi?Z=s.DEPTH_COMPONENT24:E===on?Z=s.DEPTH_COMPONENT32F:E===Ki&&(Z=s.DEPTH_COMPONENT16),Z}function C(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==He&&L.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){const E=L.target;E.removeEventListener("dispose",S),P(E),E.isVideoTexture&&l.delete(E)}function b(L){const E=L.target;E.removeEventListener("dispose",b),y(E)}function P(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Z=L.source,st=u.get(Z);if(st){const at=st[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(L),Object.keys(st).length===0&&u.delete(Z)}n.remove(L)}function w(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const Z=L.source,st=u.get(Z);delete st[E.__cacheKey],r.memory.textures--}function y(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let at=0;at<E.__webglFramebuffer[st].length;at++)s.deleteFramebuffer(E.__webglFramebuffer[st][at]);else s.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)s.deleteFramebuffer(E.__webglFramebuffer[st]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let st=0,at=Z.length;st<at;st++){const et=n.get(Z[st]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(Z[st])}n.remove(L)}let T=0;function D(){T=0}function I(){const L=T;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),T+=1,L}function k(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function N(L,E){const Z=n.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,L,E);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function V(L,E){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Y(Z,L,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function H(L,E){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Y(Z,L,E);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function F(L,E){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){J(Z,L,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const W={[Zi]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},X={[He]:s.NEAREST,[ol]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Vs]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},j={[ll]:s.NEVER,[ml]:s.ALWAYS,[hl]:s.LESS,[rc]:s.LEQUAL,[dl]:s.EQUAL,[pl]:s.GEQUAL,[ul]:s.GREATER,[fl]:s.NOTEQUAL};function dt(L,E){if(E.type===on&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===Vs||E.magFilter===ns||E.magFilter===qn||E.minFilter===sn||E.minFilter===Vs||E.minFilter===ns||E.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,W[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,W[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,W[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,X[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===He||E.minFilter!==ns&&E.minFilter!==qn||E.type===on&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ut(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));const st=E.source;let at=u.get(st);at===void 0&&(at={},u.set(st,at));const et=k(E);if(et!==L.__cacheKey){at[et]===void 0&&(at[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),at[et].usedTimes++;const Pt=at[L.__cacheKey];Pt!==void 0&&(at[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=et,L.__webglTexture=at[et].texture}return Z}function Y(L,E,Z){let st=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=s.TEXTURE_3D);const at=ut(L,E),et=E.source;e.bindTexture(st,L.__webglTexture,s.TEXTURE0+Z);const Pt=n.get(et);if(et.version!==Pt.__version||at===!0){e.activeTexture(s.TEXTURE0+Z);const _t=Qt.getPrimaries(Qt.workingColorSpace),bt=E.colorSpace===Pn?null:Qt.getPrimaries(E.colorSpace),Jt=E.colorSpace===Pn||_t===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let lt=v(E.image,!1,i.maxTextureSize);lt=fe(E,lt);const Et=o.convert(E.format,E.colorSpace),Nt=o.convert(E.type);let kt=_(E.internalFormat,Et,Nt,E.colorSpace,E.isVideoTexture);dt(st,E);let Tt;const jt=E.mipmaps,Ht=E.isVideoTexture!==!0,he=Pt.__version===void 0||at===!0,O=et.dataReady,xt=C(E,lt);if(E.isDepthTexture)kt=M(E.format===Ei,E.type),he&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,kt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,kt,lt.width,lt.height,0,Et,Nt,null));else if(E.isDataTexture)if(jt.length>0){Ht&&he&&e.texStorage2D(s.TEXTURE_2D,xt,kt,jt[0].width,jt[0].height);for(let Q=0,ot=jt.length;Q<ot;Q++)Tt=jt[Q],Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,Q,kt,Tt.width,Tt.height,0,Et,Nt,Tt.data);E.generateMipmaps=!1}else Ht?(he&&e.texStorage2D(s.TEXTURE_2D,xt,kt,lt.width,lt.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Nt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,kt,lt.width,lt.height,0,Et,Nt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,kt,jt[0].width,jt[0].height,lt.depth);for(let Q=0,ot=jt.length;Q<ot;Q++)if(Tt=jt[Q],E.format!==Qe)if(Et!==null)if(Ht){if(O)if(E.layerUpdates.size>0){const St=La(Tt.width,Tt.height,E.format,E.type);for(const yt of E.layerUpdates){const Ot=Tt.data.subarray(yt*St/Tt.data.BYTES_PER_ELEMENT,(yt+1)*St/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,yt,Tt.width,Tt.height,1,Et,Ot)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,lt.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,kt,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,lt.depth,Et,Nt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,kt,Tt.width,Tt.height,lt.depth,0,Et,Nt,Tt.data)}else{Ht&&he&&e.texStorage2D(s.TEXTURE_2D,xt,kt,jt[0].width,jt[0].height);for(let Q=0,ot=jt.length;Q<ot;Q++)Tt=jt[Q],E.format!==Qe?Et!==null?Ht?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Nt,Tt.data):e.texImage2D(s.TEXTURE_2D,Q,kt,Tt.width,Tt.height,0,Et,Nt,Tt.data)}else if(E.isDataArrayTexture)if(Ht){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,kt,lt.width,lt.height,lt.depth),O)if(E.layerUpdates.size>0){const Q=La(lt.width,lt.height,E.format,E.type);for(const ot of E.layerUpdates){const St=lt.data.subarray(ot*Q/lt.data.BYTES_PER_ELEMENT,(ot+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,lt.width,lt.height,1,Et,Nt,St)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(E.isData3DTexture)Ht?(he&&e.texStorage3D(s.TEXTURE_3D,xt,kt,lt.width,lt.height,lt.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,kt,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(E.isFramebufferTexture){if(he)if(Ht)e.texStorage2D(s.TEXTURE_2D,xt,kt,lt.width,lt.height);else{let Q=lt.width,ot=lt.height;for(let St=0;St<xt;St++)e.texImage2D(s.TEXTURE_2D,St,kt,Q,ot,0,Et,Nt,null),Q>>=1,ot>>=1}}else if(jt.length>0){if(Ht&&he){const Q=It(jt[0]);e.texStorage2D(s.TEXTURE_2D,xt,kt,Q.width,Q.height)}for(let Q=0,ot=jt.length;Q<ot;Q++)Tt=jt[Q],Ht?O&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et,Nt,Tt):e.texImage2D(s.TEXTURE_2D,Q,kt,Et,Nt,Tt);E.generateMipmaps=!1}else if(Ht){if(he){const Q=It(lt);e.texStorage2D(s.TEXTURE_2D,xt,kt,Q.width,Q.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Nt,lt)}else e.texImage2D(s.TEXTURE_2D,0,kt,Et,Nt,lt);m(E)&&p(st),Pt.__version=et.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function J(L,E,Z){if(E.image.length!==6)return;const st=ut(L,E),at=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const et=n.get(at);if(at.version!==et.__version||st===!0){e.activeTexture(s.TEXTURE0+Z);const Pt=Qt.getPrimaries(Qt.workingColorSpace),_t=E.colorSpace===Pn?null:Qt.getPrimaries(E.colorSpace),bt=E.colorSpace===Pn||Pt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let ot=0;ot<6;ot++)!Jt&&!lt?Et[ot]=v(E.image[ot],!0,i.maxCubemapSize):Et[ot]=lt?E.image[ot].image:E.image[ot],Et[ot]=fe(E,Et[ot]);const Nt=Et[0],kt=o.convert(E.format,E.colorSpace),Tt=o.convert(E.type),jt=_(E.internalFormat,kt,Tt,E.colorSpace),Ht=E.isVideoTexture!==!0,he=et.__version===void 0||st===!0,O=at.dataReady;let xt=C(E,Nt);dt(s.TEXTURE_CUBE_MAP,E);let Q;if(Jt){Ht&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,jt,Nt.width,Nt.height);for(let ot=0;ot<6;ot++){Q=Et[ot].mipmaps;for(let St=0;St<Q.length;St++){const yt=Q[St];E.format!==Qe?kt!==null?Ht?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,yt.width,yt.height,kt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,jt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,yt.width,yt.height,kt,Tt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,jt,yt.width,yt.height,0,kt,Tt,yt.data)}}}else{if(Q=E.mipmaps,Ht&&he){Q.length>0&&xt++;const ot=It(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(lt){Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et[ot].width,Et[ot].height,kt,Tt,Et[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,Et[ot].width,Et[ot].height,0,kt,Tt,Et[ot].data);for(let St=0;St<Q.length;St++){const Ot=Q[St].image[ot].image;Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Ot.width,Ot.height,kt,Tt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,jt,Ot.width,Ot.height,0,kt,Tt,Ot.data)}}else{Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,kt,Tt,Et[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,kt,Tt,Et[ot]);for(let St=0;St<Q.length;St++){const yt=Q[St];Ht?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,kt,Tt,yt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,jt,kt,Tt,yt.image[ot])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),et.__version=at.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ct(L,E,Z,st,at,et){const Pt=o.convert(Z.format,Z.colorSpace),_t=o.convert(Z.type),bt=_(Z.internalFormat,Pt,_t,Z.colorSpace),Jt=n.get(E),lt=n.get(Z);if(lt.__renderTarget=E,!Jt.__hasExternalTextures){const Et=Math.max(1,E.width>>et),Nt=Math.max(1,E.height>>et);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,et,bt,Et,Nt,E.depth,0,Pt,_t,null):e.texImage2D(at,et,bt,Et,Nt,0,Pt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),$t(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,at,lt.__webglTexture,0,Xt(E)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,at,lt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const st=E.depthTexture,at=st&&st.isDepthTexture?st.type:null,et=M(E.stencilBuffer,at),Pt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Xt(E);$t(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,et,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,L)}else{const st=E.textures;for(let at=0;at<st.length;at++){const et=st[at],Pt=o.convert(et.format,et.colorSpace),_t=o.convert(et.type),bt=_(et.internalFormat,Pt,_t,et.colorSpace),Jt=Xt(E);Z&&$t(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,bt,E.width,E.height):$t(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,bt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,bt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(E.depthTexture);st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const at=st.__webglTexture,et=Xt(E);if(E.depthTexture.format===_i)$t(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(E.depthTexture.format===Ei)$t(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function pt(L){const E=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=st}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");rt(E.__webglFramebuffer,L)}else if(Z){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=s.createRenderbuffer(),tt(E.__webglDepthbuffer[st],L,!1);else{const at=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),tt(E.__webglDepthbuffer,L,!1);else{const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(L,E,Z){const st=n.get(L);E!==void 0&&ct(st.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&pt(L)}function Kt(L){const E=L.texture,Z=n.get(L),st=n.get(E);L.addEventListener("dispose",b);const at=L.textures,et=L.isWebGLCubeRenderTarget===!0,Pt=at.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=E.version,r.memory.textures++),et){Z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[_t]=[];for(let bt=0;bt<E.mipmaps.length;bt++)Z.__webglFramebuffer[_t][bt]=s.createFramebuffer()}else Z.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)Z.__webglFramebuffer[_t]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let _t=0,bt=at.length;_t<bt;_t++){const Jt=n.get(at[_t]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&$t(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){const bt=at[_t];Z.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[_t]);const Jt=o.convert(bt.format,bt.colorSpace),lt=o.convert(bt.type),Et=_(bt.internalFormat,Jt,lt,bt.colorSpace,L.isXRRenderTarget===!0),Nt=Xt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Et,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Z.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),tt(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),dt(s.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ct(Z.__webglFramebuffer[_t][bt],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt);else ct(Z.__webglFramebuffer[_t],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,bt=at.length;_t<bt;_t++){const Jt=at[_t],lt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),dt(s.TEXTURE_2D,Jt),ct(Z.__webglFramebuffer,L,Jt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),dt(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ct(Z.__webglFramebuffer[bt],L,E,s.COLOR_ATTACHMENT0,_t,bt);else ct(Z.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,_t,0);m(E)&&p(_t),e.unbindTexture()}L.depthBuffer&&pt(L)}function Ft(L){const E=L.textures;for(let Z=0,st=E.length;Z<st;Z++){const at=E[Z];if(m(at)){const et=x(L),Pt=n.get(at).__webglTexture;e.bindTexture(et,Pt),p(et),e.unbindTexture()}}}const ee=[],B=[];function ne(L){if(L.samples>0){if($t(L)===!1){const E=L.textures,Z=L.width,st=L.height;let at=s.COLOR_BUFFER_BIT;const et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=n.get(L),_t=E.length>1;if(_t)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const Jt=n.get(E[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,Z,st,0,0,Z,st,at,s.NEAREST),c===!0&&(ee.length=0,B.length=0,ee.push(s.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ee.push(et),B.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[bt]);const Jt=n.get(E[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Xt(L){return Math.min(i.maxSamples,L.samples)}function $t(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(L){const E=r.render.frame;l.get(L)!==E&&(l.set(L,E),L.update())}function fe(L,E){const Z=L.colorSpace,st=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Ci&&Z!==Pn&&(Qt.getTransfer(Z)===ae?(st!==Qe||at!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=F,this.rebindTextures=mt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=$t}function Np(s,t){function e(n,i=Pn){let o;const r=Qt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===pr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ja)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$a)return s.BYTE;if(n===ja)return s.SHORT;if(n===Ki)return s.UNSIGNED_SHORT;if(n===fr)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===Qa)return s.ALPHA;if(n===tc)return s.RGB;if(n===Qe)return s.RGBA;if(n===ec)return s.LUMINANCE;if(n===nc)return s.LUMINANCE_ALPHA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Ei)return s.DEPTH_STENCIL;if(n===gr)return s.RED;if(n===vr)return s.RED_INTEGER;if(n===ic)return s.RG;if(n===xr)return s.RG_INTEGER;if(n===_r)return s.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Ls)if(r===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===ko||n===Bo||n===Oo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Go||n===Ho)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zo||n===Go)return r===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ho)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Ko||n===$o||n===jo||n===Jo||n===Qo||n===tr||n===er||n===nr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Vo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tr)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===er)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nr)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===ir||n===sr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ds)return r===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ir)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===or||n===rr||n===ar)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ds)return o.COMPRESSED_RED_RGTC1_EXT;if(n===or)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ar)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Fp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Op=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ne({vertexShader:Bp,fragmentShader:Op,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gp extends Ri{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,h=null,l=null,d=null,u=null,f=null,g=null;const v=new zp,m=e.getContextAttributes();let p=null,x=null;const _=[],M=[],C=new Yt;let S=null;const b=new Be;b.viewport=new ce;const P=new Be;P.viewport=new ce;const w=[b,P],y=new Fp;let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=_[Y];return J===void 0&&(J=new xo,_[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=_[Y];return J===void 0&&(J=new xo,_[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=_[Y];return J===void 0&&(J=new xo,_[Y]=J),J.getHandSpace()};function I(Y){const J=M.indexOf(Y.inputSource);if(J===-1)return;const ct=_[J];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,h||r),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",N);for(let Y=0;Y<_.length;Y++){const J=M[Y];J!==null&&(M[Y]=null,_[Y].disconnect(J))}T=null,D=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Kn(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ct=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ei:_i,ct=m.stencil?bi:Zn);const rt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:o};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Kn(u.textureWidth,u.textureHeight,{format:Qe,type:Mn,depthTexture:new _c(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await i.requestReferenceSpace(a),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(Y){for(let J=0;J<Y.removed.length;J++){const ct=Y.removed[J],tt=M.indexOf(ct);tt>=0&&(M[tt]=null,_[tt].disconnect(ct))}for(let J=0;J<Y.added.length;J++){const ct=Y.added[J];let tt=M.indexOf(ct);if(tt===-1){for(let pt=0;pt<_.length;pt++)if(pt>=M.length){M.push(ct),tt=pt;break}else if(M[pt]===null){M[pt]=ct,tt=pt;break}if(tt===-1)break}const rt=_[tt];rt&&rt.connect(ct)}}const V=new U,H=new U;function F(Y,J,ct){V.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(ct.matrixWorld);const tt=V.distanceTo(H),rt=J.projectionMatrix.elements,pt=ct.projectionMatrix.elements,mt=rt[14]/(rt[10]-1),Kt=rt[14]/(rt[10]+1),Ft=(rt[9]+1)/rt[5],ee=(rt[9]-1)/rt[5],B=(rt[8]-1)/rt[0],ne=(pt[8]+1)/pt[0],Xt=mt*B,$t=mt*ne,Ut=tt/(-B+ne),fe=Ut*-B;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(Ut),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),rt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const It=mt+Ut,L=Kt+Ut,E=Xt-fe,Z=$t+(tt-fe),st=Ft*Kt/L*It,at=ee*Kt/L*It;Y.projectionMatrix.makePerspective(E,Z,st,at,It,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function W(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,ct=Y.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ct=v.depthFar)),y.near=P.near=b.near=J,y.far=P.far=b.far=ct,(T!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,D=y.far),b.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|P.layers.mask;const tt=Y.parent,rt=y.cameras;W(y,tt);for(let pt=0;pt<rt.length;pt++)W(rt[pt],tt);rt.length===2?F(y,b,P):y.projectionMatrix.copy(b.projectionMatrix),X(Y,y,tt)};function X(Y,J,ct){ct===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ti*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let j=null;function dt(Y,J){if(l=J.getViewerPose(h||r),g=J,l!==null){const ct=l.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let tt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,tt=!0);for(let pt=0;pt<ct.length;pt++){const mt=ct[pt];let Kt=null;if(f!==null)Kt=f.getViewport(mt);else{const ee=d.getViewSubImage(u,mt);Kt=ee.viewport,pt===0&&(t.setRenderTargetTextures(x,ee.colorTexture,u.ignoreDepthValues?void 0:ee.depthStencilTexture),t.setRenderTarget(x))}let Ft=w[pt];Ft===void 0&&(Ft=new Be,Ft.layers.enable(pt),Ft.viewport=new ce,w[pt]=Ft),Ft.matrix.fromArray(mt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(mt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),pt===0&&(y.matrix.copy(Ft.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),tt===!0&&y.cameras.push(Ft)}const rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const pt=d.getDepthInformation(ct[0]);pt&&pt.isValid&&pt.texture&&v.init(t,pt,i.renderState)}}for(let ct=0;ct<_.length;ct++){const tt=M[ct],rt=_[ct];tt!==null&&rt!==void 0&&rt.update(tt,J,h||r)}j&&j(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ut=new vc;ut.setAnimationLoop(dt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const zn=new rn,Hp=new re;function Vp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),l(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,zn.copy(M),zn.x*=-1,zn.y*=-1,zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(zn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wp(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function h(x,_){let M=i[x.id];M===void 0&&(g(x),M=l(x),i[x.id]=M,x.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(x,C);const S=t.render.frame;o[x.id]!==S&&(u(x),o[x.id]=S)}function l(x){const _=d();x.__bindingPointIndex=_;const M=s.createBuffer(),C=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function d(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=i[x.id],M=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,b=M.length;S<b;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let w=0,y=P.length;w<y;w++){const T=P[w];if(f(T,S,w,C)===!0){const D=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let N=0;N<I.length;N++){const V=I[N],H=v(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,D+k,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,k),k+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,_,M,C){const S=x.value,b=_+"_"+M;if(C[b]===void 0)return typeof S=="number"||typeof S=="boolean"?C[b]=S:C[b]=S.clone(),!0;{const P=C[b];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[b]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(x){const _=x.uniforms;let M=0;const C=16;for(let b=0,P=_.length;b<P;b++){const w=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,T=w.length;y<T;y++){const D=w[y],I=Array.isArray(D.value)?D.value:[D.value];for(let k=0,N=I.length;k<N;k++){const V=I[k],H=v(V),F=M%C,W=F%H.boundary,X=F+W;M+=W,X!==0&&C-X<H.storage&&(M+=C-X),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=H.storage}}}const S=M%C;return S>0&&(M+=C-S),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);r=[],i={},o={}}return{bind:c,update:h,dispose:p}}class Xp{constructor(t={}){const{canvas:e=Dl(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=Dn,this.toneMappingExposure=1;const M=this;let C=!1,S=0,b=0,P=null,w=-1,y=null;const T=new ce,D=new ce;let I=null;const k=new Dt(0);let N=0,V=e.width,H=e.height,F=1,W=null,X=null;const j=new ce(0,0,V,H),dt=new ce(0,0,V,H);let ut=!1;const Y=new wr;let J=!1,ct=!1;const tt=new re,rt=new re,pt=new U,mt=new ce,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ee(){return P===null?F:1}let B=n;function ne(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ur}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",yt,!1),B===null){const z="webgl2";if(B=ne(z,A),B===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xt,$t,Ut,fe,It,L,E,Z,st,at,et,Pt,_t,bt,Jt,lt,Et,Nt,kt,Tt,jt,Ht,he,O;function xt(){Xt=new Ku(B),Xt.init(),Ht=new Np(B,Xt),$t=new Vu(B,Xt,t,Ht),Ut=new Dp(B,Xt),$t.reverseDepthBuffer&&u&&Ut.buffers.depth.setReversed(!0),fe=new Ju(B),It=new vp,L=new Up(B,Xt,Ut,It,$t,Ht,fe),E=new Xu(M),Z=new Zu(M),st=new oh(B),he=new Gu(B,st),at=new $u(B,st,fe,he),et=new tf(B,at,st,fe),kt=new Qu(B,$t,L),lt=new Wu(It),Pt=new gp(M,E,Z,Xt,$t,he,lt),_t=new Vp(M,It),bt=new _p,Jt=new Ep(Xt),Nt=new zu(M,E,Z,Ut,et,f,c),Et=new Pp(M,et,$t),O=new Wp(B,fe,$t,Ut),Tt=new Hu(B,Xt,fe),jt=new ju(B,Xt,fe),fe.programs=Pt.programs,M.capabilities=$t,M.extensions=Xt,M.properties=It,M.renderLists=bt,M.shadowMap=Et,M.state=Ut,M.info=fe}xt();const Q=new Gp(M,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(V,H,!1))},this.getSize=function(A){return A.set(V,H)},this.setSize=function(A,z,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,H=z,e.width=Math.floor(A*F),e.height=Math.floor(z*F),K===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*F,H*F).floor()},this.setDrawingBufferSize=function(A,z,K){V=A,H=z,F=K,e.width=Math.floor(A*K),e.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,z,K,$){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,z,K,$),Ut.viewport(T.copy(j).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,z,K,$){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,z,K,$),Ut.scissor(D.copy(dt).multiplyScalar(F).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){Ut.setScissorTest(ut=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,z=!0,K=!0){let $=0;if(A){let G=!1;if(P!==null){const ht=P.texture.format;G=ht===_r||ht===xr||ht===vr}if(G){const ht=P.texture.type,wt=ht===Mn||ht===Zn||ht===Ki||ht===bi||ht===pr||ht===mr,At=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Bt=At.r,zt=At.g,Rt=At.b;wt?(g[0]=Bt,g[1]=zt,g[2]=Rt,g[3]=Ct,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Bt,v[1]=zt,v[2]=Rt,v[3]=Ct,B.clearBufferiv(B.COLOR,0,v))}else $|=B.COLOR_BUFFER_BIT}z&&($|=B.DEPTH_BUFFER_BIT),K&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),bt.dispose(),Jt.dispose(),It.dispose(),E.dispose(),Z.dispose(),et.dispose(),he.dispose(),O.dispose(),Pt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Tr),Q.removeEventListener("sessionend",Ar),Un.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=fe.autoReset,z=Et.enabled,K=Et.autoUpdate,$=Et.needsUpdate,G=Et.type;xt(),fe.autoReset=A,Et.enabled=z,Et.autoUpdate=K,Et.needsUpdate=$,Et.type=G}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ot(A){const z=A.target;z.removeEventListener("dispose",Ot),ve(z)}function ve(A){Ee(A),It.remove(A)}function Ee(A){const z=It.get(A).programs;z!==void 0&&(z.forEach(function(K){Pt.releaseProgram(K)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,$,G,ht){z===null&&(z=Kt);const wt=G.isMesh&&G.matrixWorld.determinant()<0,At=Cc(A,z,K,$,G);Ut.setMaterial($,wt);let Ct=K.index,Bt=1;if($.wireframe===!0){if(Ct=at.getWireframeAttribute(K),Ct===void 0)return;Bt=2}const zt=K.drawRange,Rt=K.attributes.position;let te=zt.start*Bt,de=(zt.start+zt.count)*Bt;ht!==null&&(te=Math.max(te,ht.start*Bt),de=Math.min(de,(ht.start+ht.count)*Bt)),Ct!==null?(te=Math.max(te,0),de=Math.min(de,Ct.count)):Rt!=null&&(te=Math.max(te,0),de=Math.min(de,Rt.count));const pe=de-te;if(pe<0||pe===1/0)return;he.setup(G,$,At,K,Ct);let Fe,ie=Tt;if(Ct!==null&&(Fe=st.get(Ct),ie=jt,ie.setIndex(Fe)),G.isMesh)$.wireframe===!0?(Ut.setLineWidth($.wireframeLinewidth*ee()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(G.isLine){let Lt=$.linewidth;Lt===void 0&&(Lt=1),Ut.setLineWidth(Lt*ee()),G.isLineSegments?ie.setMode(B.LINES):G.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else G.isPoints?ie.setMode(B.POINTS):G.isSprite&&ie.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ie.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,ln=G._multiDrawCounts,se=G._multiDrawCount,Ze=Ct?st.get(Ct).bytesPerElement:1,Qn=It.get($).currentProgram.getUniforms();for(let Oe=0;Oe<se;Oe++)Qn.setValue(B,"_gl_DrawID",Oe),ie.render(Lt[Oe]/Ze,ln[Oe])}else if(G.isInstancedMesh)ie.renderInstances(te,pe,G.count);else if(K.isInstancedBufferGeometry){const Lt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ln=Math.min(K.instanceCount,Lt);ie.renderInstances(te,pe,ln)}else ie.render(te,pe)};function oe(A,z,K){A.transparent===!0&&A.side===Ye&&A.forceSinglePass===!1?(A.side=Ce,A.needsUpdate=!0,es(A,z,K),A.side=In,A.needsUpdate=!0,es(A,z,K),A.side=Ye):es(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),p=Jt.get(K),p.init(z),_.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let wt=0;wt<ht.length;wt++){const At=ht[wt];oe(At,K,G),$.add(At)}else oe(ht,K,G),$.add(ht)}),_.pop(),p=null,$},this.compileAsync=function(A,z,K=null){const $=this.compile(A,z,K);return new Promise(G=>{function ht(){if($.forEach(function(wt){It.get(wt).currentProgram.isReady()&&$.delete(wt)}),$.size===0){G(A);return}setTimeout(ht,10)}Xt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let qe=null;function cn(A){qe&&qe(A)}function Tr(){Un.stop()}function Ar(){Un.start()}const Un=new vc;Un.setAnimationLoop(cn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){qe=A,Q.setAnimationLoop(A),A===null?Un.stop():Un.start()},Q.addEventListener("sessionstart",Tr),Q.addEventListener("sessionend",Ar),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,z,P),p=Jt.get(A,_.length),p.init(z),_.push(p),rt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(rt),ct=this.localClippingEnabled,J=lt.init(this.clippingPlanes,ct),m=bt.get(A,x.length),m.init(),x.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ht=M.xr.getDepthSensingMesh();ht!==null&&Hs(ht,z,-1/0,M.sortObjects)}Hs(A,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(W,X),Ft=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ft&&Nt.addToRenderList(m,A),this.info.render.frame++,J===!0&&lt.beginShadows();const K=p.state.shadowsArray;Et.render(K,A,z),J===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,G=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ht=z.cameras;if(G.length>0)for(let wt=0,At=ht.length;wt<At;wt++){const Ct=ht[wt];Rr($,G,A,Ct)}Ft&&Nt.render(A);for(let wt=0,At=ht.length;wt<At;wt++){const Ct=ht[wt];Cr(m,A,Ct,Ct.viewport)}}else G.length>0&&Rr($,G,A,z),Ft&&Nt.render(A),Cr(m,A,z);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(M,A,z),he.resetDefaultState(),w=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],J===!0&&lt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Hs(A,z,K,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){$&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(rt);const wt=et.update(A),At=A.material;At.visible&&m.push(A,wt,At,K,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const wt=et.update(A),At=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),mt.copy(wt.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(rt)),Array.isArray(At)){const Ct=wt.groups;for(let Bt=0,zt=Ct.length;Bt<zt;Bt++){const Rt=Ct[Bt],te=At[Rt.materialIndex];te&&te.visible&&m.push(A,wt,te,K,mt.z,Rt)}}else At.visible&&m.push(A,wt,At,K,mt.z,null)}}const ht=A.children;for(let wt=0,At=ht.length;wt<At;wt++)Hs(ht[wt],z,K,$)}function Cr(A,z,K,$){const G=A.opaque,ht=A.transmissive,wt=A.transparent;p.setupLightsView(K),J===!0&&lt.setGlobalState(M.clippingPlanes,K),$&&Ut.viewport(T.copy($)),G.length>0&&ts(G,z,K),ht.length>0&&ts(ht,z,K),wt.length>0&&ts(wt,z,K),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Rr(A,z,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Kn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ji:Mn,minFilter:qn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const ht=p.state.transmissionRenderTarget[$.id],wt=$.viewport||T;ht.setSize(wt.z,wt.w);const At=M.getRenderTarget();M.setRenderTarget(ht),M.getClearColor(k),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Ft&&Nt.render(K);const Ct=M.toneMapping;M.toneMapping=Dn;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),J===!0&&lt.setGlobalState(M.clippingPlanes,$),ts(A,K,$),L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Rt=0,te=z.length;Rt<te;Rt++){const de=z[Rt],pe=de.object,Fe=de.geometry,ie=de.material,Lt=de.group;if(ie.side===Ye&&pe.layers.test($.layers)){const ln=ie.side;ie.side=Ce,ie.needsUpdate=!0,Pr(pe,K,$,Fe,ie,Lt),ie.side=ln,ie.needsUpdate=!0,zt=!0}}zt===!0&&(L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht))}M.setRenderTarget(At),M.setClearColor(k,N),Bt!==void 0&&($.viewport=Bt),M.toneMapping=Ct}function ts(A,z,K){const $=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ht=A.length;G<ht;G++){const wt=A[G],At=wt.object,Ct=wt.geometry,Bt=$===null?wt.material:$,zt=wt.group;At.layers.test(K.layers)&&Pr(At,z,K,Ct,Bt,zt)}}function Pr(A,z,K,$,G,ht){A.onBeforeRender(M,z,K,$,G,ht),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,z,K,$,A,ht),G.transparent===!0&&G.side===Ye&&G.forceSinglePass===!1?(G.side=Ce,G.needsUpdate=!0,M.renderBufferDirect(K,z,$,G,A,ht),G.side=In,G.needsUpdate=!0,M.renderBufferDirect(K,z,$,G,A,ht),G.side=Ye):M.renderBufferDirect(K,z,$,G,A,ht),A.onAfterRender(M,z,K,$,G,ht)}function es(A,z,K){z.isScene!==!0&&(z=Kt);const $=It.get(A),G=p.state.lights,ht=p.state.shadowsArray,wt=G.state.version,At=Pt.getParameters(A,G.state,ht,z,K),Ct=Pt.getProgramCacheKey(At);let Bt=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",Ot),Bt=new Map,$.programs=Bt);let zt=Bt.get(Ct);if(zt!==void 0){if($.currentProgram===zt&&$.lightsStateVersion===wt)return Dr(A,At),zt}else At.uniforms=Pt.getUniforms(A),A.onBeforeCompile(At,M),zt=Pt.acquireProgram(At,Ct),Bt.set(Ct,zt),$.uniforms=At.uniforms;const Rt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),Dr(A,At),$.needsLights=Pc(A),$.lightsStateVersion=wt,$.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.directionalShadowMap.value=G.state.directionalShadowMap,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotShadowMap.value=G.state.spotShadowMap,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMap.value=G.state.pointShadowMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=zt,$.uniformsList=null,zt}function Lr(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Is.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Dr(A,z){const K=It.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Cc(A,z,K,$,G){z.isScene!==!0&&(z=Kt),L.resetTextureUnits();const ht=z.fog,wt=$.isMeshStandardMaterial?z.environment:null,At=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ci,Ct=($.isMeshStandardMaterial?Z:E).get($.envMap||wt),Bt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,zt=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Rt=!!K.morphAttributes.position,te=!!K.morphAttributes.normal,de=!!K.morphAttributes.color;let pe=Dn;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=M.toneMapping);const Fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=Fe!==void 0?Fe.length:0,Lt=It.get($),ln=p.state.lights;if(J===!0&&(ct===!0||A!==y)){const Ve=A===y&&$.id===w;lt.setState($,A,Ve)}let se=!1;$.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ln.state.version||Lt.outputColorSpace!==At||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==Ct||$.fog===!0&&Lt.fog!==ht||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==lt.numPlanes||Lt.numIntersection!==lt.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==zt||Lt.morphTargets!==Rt||Lt.morphNormals!==te||Lt.morphColors!==de||Lt.toneMapping!==pe||Lt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Lt.__version=$.version);let Ze=Lt.currentProgram;se===!0&&(Ze=es($,z,G));let Qn=!1,Oe=!1,Di=!1;const me=Ze.getUniforms(),tn=Lt.uniforms;if(Ut.useProgram(Ze.program)&&(Qn=!0,Oe=!0,Di=!0),$.id!==w&&(w=$.id,Oe=!0),Qn||y!==A){Ut.buffers.depth.getReversed()?(tt.copy(A.projectionMatrix),Ul(tt),Nl(tt),me.setValue(B,"projectionMatrix",tt)):me.setValue(B,"projectionMatrix",A.projectionMatrix),me.setValue(B,"viewMatrix",A.matrixWorldInverse);const yn=me.map.cameraPosition;yn!==void 0&&yn.setValue(B,pt.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&me.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Oe=!0,Di=!0)}if(G.isSkinnedMesh){me.setOptional(B,G,"bindMatrix"),me.setOptional(B,G,"bindMatrixInverse");const Ve=G.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),me.setValue(B,"boneTexture",Ve.boneTexture,L))}G.isBatchedMesh&&(me.setOptional(B,G,"batchingTexture"),me.setValue(B,"batchingTexture",G._matricesTexture,L),me.setOptional(B,G,"batchingIdTexture"),me.setValue(B,"batchingIdTexture",G._indirectTexture,L),me.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&me.setValue(B,"batchingColorTexture",G._colorsTexture,L));const Ii=K.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&kt.update(G,K,Ze),(Oe||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,me.setValue(B,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(tn.envMap.value=Ct,tn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),Oe&&(me.setValue(B,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&Rc(tn,Di),ht&&$.fog===!0&&_t.refreshFogUniforms(tn,ht),_t.refreshMaterialUniforms(tn,$,F,H,p.state.transmissionRenderTarget[A.id]),Is.upload(B,Lr(Lt),tn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Is.upload(B,Lr(Lt),tn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(B,"center",G.center),me.setValue(B,"modelViewMatrix",G.modelViewMatrix),me.setValue(B,"normalMatrix",G.normalMatrix),me.setValue(B,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ve=$.uniformsGroups;for(let yn=0,wn=Ve.length;yn<wn;yn++){const Ir=Ve[yn];O.update(Ir,Ze),O.bind(Ir,Ze)}}return Ze}function Rc(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Pc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,K){It.get(A.texture).__webglTexture=z,It.get(A.depthTexture).__webglTexture=K;const $=It.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=K===void 0,$.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const K=It.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,K=0){P=A,S=z,b=K;let $=!0,G=null,ht=!1,wt=!1;if(A){const Ct=It.get(A);if(Ct.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(Ct.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ct.__hasExternalTextures)L.rebindTextures(A,It.get(A.texture).__webglTexture,It.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Rt=A.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&It.has(Rt)&&(A.width!==Rt.image.width||A.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(wt=!0);const zt=It.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?G=zt[z][K]:G=zt[z],ht=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?G=It.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?G=zt[K]:G=zt,T.copy(A.viewport),D.copy(A.scissor),I=A.scissorTest}else T.copy(j).multiplyScalar(F).floor(),D.copy(dt).multiplyScalar(F).floor(),I=ut;if(Ut.bindFramebuffer(B.FRAMEBUFFER,G)&&$&&Ut.drawBuffers(A,G),Ut.viewport(T),Ut.scissor(D),Ut.setScissorTest(I),ht){const Ct=It.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ct.__webglTexture,K)}else if(wt){const Ct=It.get(A.texture),Bt=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,K||0,Bt)}w=-1},this.readRenderTargetPixels=function(A,z,K,$,G,ht,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){Ut.bindFramebuffer(B.FRAMEBUFFER,At);try{const Ct=A.texture,Bt=Ct.format,zt=Ct.type;if(!$t.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&K>=0&&K<=A.height-G&&B.readPixels(z,K,$,G,Ht.convert(Bt),Ht.convert(zt),ht)}finally{const Ct=P!==null?It.get(P).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,z,K,$,G,ht,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=It.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){const Ct=A.texture,Bt=Ct.format,zt=Ct.type;if(!$t.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-$&&K>=0&&K<=A.height-G){Ut.bindFramebuffer(B.FRAMEBUFFER,At);const Rt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(z,K,$,G,Ht.convert(Bt),Ht.convert(zt),0);const te=P!==null?It.get(P).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,te);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Il(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Rt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(Rt),B.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,K=0){A.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-K),G=Math.floor(A.image.width*$),ht=Math.floor(A.image.height*$),wt=z!==null?z.x:0,At=z!==null?z.y:0;L.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,wt,At,G,ht),Ut.unbindTexture()},this.copyTextureToTexture=function(A,z,K=null,$=null,G=0){A.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],z=arguments[2],G=arguments[3]||0,K=null);let ht,wt,At,Ct,Bt,zt,Rt,te,de;const pe=A.isCompressedTexture?A.mipmaps[G]:A.image;K!==null?(ht=K.max.x-K.min.x,wt=K.max.y-K.min.y,At=K.isBox3?K.max.z-K.min.z:1,Ct=K.min.x,Bt=K.min.y,zt=K.isBox3?K.min.z:0):(ht=pe.width,wt=pe.height,At=pe.depth||1,Ct=0,Bt=0,zt=0),$!==null?(Rt=$.x,te=$.y,de=$.z):(Rt=0,te=0,de=0);const Fe=Ht.convert(z.format),ie=Ht.convert(z.type);let Lt;z.isData3DTexture?(L.setTexture3D(z,0),Lt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),Lt=B.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),Lt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const ln=B.getParameter(B.UNPACK_ROW_LENGTH),se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ze=B.getParameter(B.UNPACK_SKIP_PIXELS),Qn=B.getParameter(B.UNPACK_SKIP_ROWS),Oe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,pe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zt);const Di=A.isDataArrayTexture||A.isData3DTexture,me=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const tn=It.get(A),Ii=It.get(z),Ve=It.get(tn.__renderTarget),yn=It.get(Ii.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let wn=0;wn<At;wn++)Di&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(A).__webglTexture,G,zt+wn),A.isDepthTexture?(me&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(z).__webglTexture,G,de+wn),B.blitFramebuffer(Ct,Bt,ht,wt,Rt,te,ht,wt,B.DEPTH_BUFFER_BIT,B.NEAREST)):me?B.copyTexSubImage3D(Lt,G,Rt,te,de+wn,Ct,Bt,ht,wt):B.copyTexSubImage2D(Lt,G,Rt,te,de+wn,Ct,Bt,ht,wt);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else me?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Lt,G,Rt,te,de,ht,wt,At,Fe,ie,pe.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Lt,G,Rt,te,de,ht,wt,At,Fe,pe.data):B.texSubImage3D(Lt,G,Rt,te,de,ht,wt,At,Fe,ie,pe):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Rt,te,ht,wt,Fe,ie,pe.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Rt,te,pe.width,pe.height,Fe,pe.data):B.texSubImage2D(B.TEXTURE_2D,G,Rt,te,ht,wt,Fe,ie,pe);B.pixelStorei(B.UNPACK_ROW_LENGTH,ln),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oe),G===0&&z.generateMipmaps&&B.generateMipmap(Lt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(A,z,K=null,$=null,G=0){return A.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,$=arguments[1]||null,A=arguments[2],z=arguments[3],G=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,K,$,G)},this.initRenderTarget=function(A){It.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ut.unbindTexture()},this.resetState=function(){S=0,b=0,P=null,Ut.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Yp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qp extends Re{constructor(t=null,e=1,n=1,i,o,r,a,c,h=He,l=He,d,u){super(null,r,a,c,h,l,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da extends xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pi=new re,Ia=new re,Ss=[],Ua=new $n,Zp=new re,Bi=new R,Oi=new jn;class mn extends R{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),Ua.copy(t.boundingBox).applyMatrix4(pi),this.boundingBox.union(Ua)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),Oi.copy(t.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Oi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),t.ray.intersectsSphere(Oi)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,pi),Ia.multiplyMatrices(n,pi),Bi.matrixWorld=Ia,Bi.raycast(t,Ss);for(let r=0,a=Ss.length;r<a;r++){const c=Ss[r];c.instanceId=o,c.object=this,e.push(c)}Ss.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qp(new Float32Array(i*this.count),i,this.count,gr,on));const o=this.morphTexture.source.data.data;let r=0;for(let h=0;h<n.length;h++)r+=n[h];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bc extends Jn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fs=new U,ks=new U,Na=new re,zi=new yr,bs=new jn,_o=new U,Fa=new U;class Kp extends ge{constructor(t=new be,e=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Fs.fromBufferAttribute(e,i-1),ks.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fs.distanceTo(ks);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=o,t.ray.intersectsSphere(bs)===!1)return;Na.copy(i).invert(),zi.copy(t.ray).applyMatrix4(Na);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),g=Math.min(l.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=h){const p=l.getX(v),x=l.getX(v+1),_=Es(this,t,zi,c,p,x);_&&e.push(_)}if(this.isLineLoop){const v=l.getX(g-1),m=l.getX(f),p=Es(this,t,zi,c,v,m);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,m=g-1;v<m;v+=h){const p=Es(this,t,zi,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Es(this,t,zi,c,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Es(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Fs.fromBufferAttribute(r,i),ks.fromBufferAttribute(r,o),e.distanceSqToSegment(Fs,ks,_o,Fa)>n)return;_o.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(_o);if(!(c<t.near||c>t.far))return{distance:c,point:Fa.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class Ec extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ka=new re,lr=new yr,Ts=new jn,As=new U;class Tc extends ge{constructor(t=new be,e=new Ec){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=o,t.ray.intersectsSphere(Ts)===!1)return;ka.copy(i).invert(),lr.copy(t.ray).applyMatrix4(ka);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=u,v=f;g<v;g++){const m=h.getX(g);As.fromBufferAttribute(d,m),Ba(As,m,c,i,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f;g<v;g++)As.fromBufferAttribute(d,g),Ba(As,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ba(s,t,e,n,i,o,r){const a=lr.distanceSqToPoint(s);if(a<e){const c=new U;lr.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;o.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class hr extends Re{constructor(t,e,n,i,o,r,a,c,h){super(t,e,n,i,o,r,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class it extends be{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const l=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function x(){const M=new U,C=new U;let S=0;const b=(e-t)/n;for(let P=0;P<=o;P++){const w=[],y=P/o,T=y*(e-t)+t;for(let D=0;D<=i;D++){const I=D/i,k=I*c+a,N=Math.sin(k),V=Math.cos(k);C.x=T*N,C.y=-y*n+m,C.z=T*V,d.push(C.x,C.y,C.z),M.set(N,b,V).normalize(),u.push(M.x,M.y,M.z),f.push(I,1-y),w.push(g++)}v.push(w)}for(let P=0;P<i;P++)for(let w=0;w<o;w++){const y=v[w][P],T=v[w+1][P],D=v[w+1][P+1],I=v[w][P+1];(t>0||w!==0)&&(l.push(y,T,I),S+=3),(e>0||w!==o-1)&&(l.push(T,D,I),S+=3)}h.addGroup(p,S,0),p+=S}function _(M){const C=g,S=new Yt,b=new U;let P=0;const w=M===!0?t:e,y=M===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const T=g;for(let D=0;D<=i;D++){const k=D/i*c+a,N=Math.cos(k),V=Math.sin(k);b.x=w*V,b.y=m*y,b.z=w*N,d.push(b.x,b.y,b.z),u.push(0,y,0),S.x=N*.5+.5,S.y=V*.5*y+.5,f.push(S.x,S.y),g++}for(let D=0;D<i;D++){const I=C+D,k=T+D;M===!0?l.push(k,k+1,I):l.push(k+1,k,I),P+=3}h.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qt extends it{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new qt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),h(n),l(),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(o.slice(),3)),this.setAttribute("uv",new Me(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new U,M=new U,C=new U;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],M),f(e[S+2],C),c(_,M,C,x)}function c(x,_,M,C){const S=C+1,b=[];for(let P=0;P<=S;P++){b[P]=[];const w=x.clone().lerp(M,P/S),y=_.clone().lerp(M,P/S),T=S-P;for(let D=0;D<=T;D++)D===0&&P===S?b[P][D]=w:b[P][D]=w.clone().lerp(y,D/T)}for(let P=0;P<S;P++)for(let w=0;w<2*(S-P)-1;w++){const y=Math.floor(w/2);w%2===0?(u(b[P][y+1]),u(b[P+1][y]),u(b[P][y])):(u(b[P][y+1]),u(b[P+1][y+1]),u(b[P+1][y]))}}function h(x){const _=new U;for(let M=0;M<o.length;M+=3)_.x=o[M+0],_.y=o[M+1],_.z=o[M+2],_.normalize().multiplyScalar(x),o[M+0]=_.x,o[M+1]=_.y,o[M+2]=_.z}function l(){const x=new U;for(let _=0;_<o.length;_+=3){x.x=o[_+0],x.y=o[_+1],x.z=o[_+2];const M=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;r.push(M,1-C)}g(),d()}function d(){for(let x=0;x<r.length;x+=6){const _=r[x+0],M=r[x+2],C=r[x+4],S=Math.max(_,M,C),b=Math.min(_,M,C);S>.9&&b<.1&&(_<.2&&(r[x+0]+=1),M<.2&&(r[x+2]+=1),C<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function f(x,_){const M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const x=new U,_=new U,M=new U,C=new U,S=new Yt,b=new Yt,P=new Yt;for(let w=0,y=0;w<o.length;w+=9,y+=6){x.set(o[w+0],o[w+1],o[w+2]),_.set(o[w+3],o[w+4],o[w+5]),M.set(o[w+6],o[w+7],o[w+8]),S.set(r[y+0],r[y+1]),b.set(r[y+2],r[y+3]),P.set(r[y+4],r[y+5]),C.copy(x).add(_).add(M).divideScalar(3);const T=m(C);v(S,y+0,x,T),v(b,y+2,_,T),v(P,y+4,M,T)}}function v(x,_,M,C){C<0&&x.x===1&&(r[_]=x.x-1),M.x===0&&M.z===0&&(r[_]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.vertices,t.indices,t.radius,t.details)}}class vi extends br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vi(t.radius,t.detail)}}class ue extends be{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let h=0;const l=[],d=new U,u=new U,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let M=0;p===0&&r===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const S=C/e;d.x=-t*Math.cos(i+S*o)*Math.sin(r+_*a),d.y=t*Math.cos(r+_*a),d.z=t*Math.sin(i+S*o)*Math.sin(r+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(S+M,1-_),x.push(h++)}l.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=l[p][x+1],M=l[p][x],C=l[p+1][x],S=l[p+1][x+1];(p!==0||r>0)&&f.push(_,M,S),(p!==n-1||c<Math.PI)&&f.push(M,C,S)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $i extends be{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],h=[],l=new U,d=new U,u=new U;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),u.subVectors(d,l).normalize(),c.push(u.x,u.y,u.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;r.push(v,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nt extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gs extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $p extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new re,Oa=new U,za=new U;class Er{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oa),za.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(za),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jp extends Er{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ti*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xi extends Gs{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new jp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ga=new re,Gi=new U,yo=new U;class Jp extends Er{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),yo.copy(n.position),yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yo),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Ga.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga)}}class dr extends Gs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qp extends Er{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t0 extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ur);class e0{constructor(t=1337420){this.seed=t,this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512),this._initPermutation(t)}_initPermutation(t){const e=new Uint8Array(256);for(let i=0;i<256;i++)e[i]=i;let n=t>>>0;for(let i=255;i>0;i--){n=Math.imul(1664525,n)+1013904223>>>0;const o=n%(i+1),r=e[i];e[i]=e[o],e[o]=r}for(let i=0;i<512;i++)this.perm[i]=e[i&255],this.permMod12[i]=this.perm[i]%12}hash2D(t,e){let n=Math.imul(Math.floor(t),374761393)+Math.imul(Math.floor(e),668265263)+this.seed;return n=(n^n>>>13)>>>0,n=Math.imul(n,1274126177)>>>0,((n^n>>>16)>>>0)/4294967295}noise2D(t,e){const n=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,o=(t+e)*n,r=Math.floor(t+o),a=Math.floor(e+o),c=(r+a)*i,h=r-c,l=a-c,d=t-h,u=e-l;let f,g;d>u?(f=1,g=0):(f=0,g=1);const v=d-f+i,m=u-g+i,p=d-1+2*i,x=u-1+2*i,_=r&255,M=a&255,C=this.permMod12[_+this.perm[M]],S=this.permMod12[_+f+this.perm[M+g]],b=this.permMod12[_+1+this.perm[M+1]];let P=0,w=.5-d*d-u*u;w>=0&&(w*=w,P=w*w*wo(C,d,u));let y=0,T=.5-v*v-m*m;T>=0&&(T*=T,y=T*T*wo(S,v,m));let D=0,I=.5-p*p-x*x;return I>=0&&(I*=I,D=I*I*wo(b,p,x)),70*(P+y+D)}fbm2D(t,e,n=5,i=2.03,o=.5){let r=0,a=.5,c=1,h=0;for(let l=0;l<n;l++){r+=this.noise2D(t*c,e*c)*a,h+=a,a*=o,c*=i;const d=t*.8-e*.6,u=t*.6+e*.8;t=d,e=u}return r/h}ridged2D(t,e,n=5,i=2.1,o=.52){let r=0,a=1,c=.5,h=1;for(let l=0;l<n;l++){let d=1-Math.abs(this.noise2D(t*a,e*a));d=d*d,d*=h,h=Math.min(1,Math.max(0,d*2)),r+=d*c,a*=i,c*=o;const u=t*.866-e*.5,f=t*.5+e*.866;t=u,e=f}return r*1.35}warpedFbm2D(t,e,n=4,i=.45){const o=this.fbm2D(t+1.7,e+9.2,2),r=this.fbm2D(t+8.3,e+2.8,2);return this.fbm2D(t+i*o,e+i*r,n)}}const n0=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]];function wo(s,t,e){const n=n0[s];return n[0]*t+n[1]*e}function le(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function Pe(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*n*(n*(n*6-15)+10)}function vt(s,t,e){return s+(t-s)*e}function ft(s,t,e){return Math.max(t,Math.min(e,s))}const i0=256,Ie=i0*1e3/2,ke=0,en=220/3,gn={OCEAN:{id:0,name:"Sapphire Ocean",color:"#0c3b66",badge:"#38bdf8"},COASTAL_METROPOLIS:{id:1,name:"Solis Coastal Metropolis",color:"#64748b",badge:"#94a3b8"},EMERALD_FOREST:{id:2,name:"Emerald Timberlands",color:"#1e5932",badge:"#4ade80"},ALPINE_PEAKS:{id:3,name:"Valkyrie Alpine Peaks",color:"#e2e8f0",badge:"#f8fafc"},REDSTONE_CANYON:{id:4,name:"Redstone Grand Canyon",color:"#b4532a",badge:"#fb923c"},GOLDEN_DUNES:{id:5,name:"Helios Golden Dune Sea",color:"#d9a441",badge:"#facc15"},VOLCANIC_CALDERA:{id:6,name:"Obsidian Volcanic Highlands",color:"#3b2824",badge:"#f87171"},TUNDRA_FJORD:{id:7,name:"Aegis Sub-Arctic Tundra",color:"#5f7a85",badge:"#7dd3fc"},LUSH_PLAINS:{id:8,name:"Whispering Emerald Valley",color:"#457b3b",badge:"#a3e635"}},Hi=[{id:"solis_city",name:"Solis Harbor Metropolis",category:"Metropolis",biome:"Solis Coastal Metropolis",x:-73.33,z:220,radius:620,baseElevation:12.5,heading:1.57,description:"Bustling coastal city with offices, cafes, crosswalks, commuters, and waterfront parks."},{id:"solis_airport",name:"Solis Coastal Airport & Runway",category:"Aviation Hub",biome:"Solis Coastal Metropolis",x:495,z:220,radius:380,baseElevation:12.5,heading:-1.57,description:"850-meter paved coastal airstrip, control tower, and hangars for realistic aircraft takeoff and landing."},{id:"golden_bridge",name:"Golden Bay Suspension Bridge",category:"Megastructure",biome:"Sapphire Ocean",x:-245,z:220,radius:480,baseElevation:13,heading:1.57,description:"Monumental 920-meter twin-tower suspension bridge carrying commuter traffic across Golden Bay."},{id:"oakhaven_village",name:"Oakhaven Alpine Village",category:"Settlement",biome:"Emerald Timberlands",x:1750,z:-1360,radius:340,baseElevation:48,heading:0,description:"Living mountain village with timber chalets, open-air market square, artisans, and trailheads."},{id:"valkyrie_observatory",name:"Valkyrie Summit Observatory",category:"Science Outpost",biome:"Valkyrie Alpine Peaks",x:3600,z:-3352,radius:160,baseElevation:1120,heading:0,description:"High-altitude astronomical research dome and alpine hiker summit camp."},{id:"redstone_canyon",name:"Redstone Canyon & Viaduct",category:"Natural Wonder",biome:"Redstone Grand Canyon",x:-2600,z:-1565,radius:650,baseElevation:154,heading:0,description:"Terraced crimson sandstone mesas cut by a deep river gorge and spanned by a high arch viaduct."},{id:"helios_ruins",name:"Helios Temple Ruins & Oasis",category:"Ancient Ruins",biome:"Helios Golden Dune Sea",x:-2950,z:2345,radius:450,baseElevation:28,heading:0,description:"Classical marble colonnades, obelisks, and archaeological expedition camp by a palm oasis."},{id:"stormwatch_lighthouse",name:"Cape Stormwatch Lighthouse",category:"Coastal Beacon",biome:"Sapphire Ocean",x:1550,z:1992,radius:220,baseElevation:46,heading:0,description:"Dramatic cliffside lighthouse projecting a rotating volumetric beam across the outer ocean."},{id:"obsidian_caldera",name:"Mount Ignis Volcanic Caldera",category:"Volcanic Wonder",biome:"Obsidian Volcanic Highlands",x:5200,z:4215,radius:900,baseElevation:760,heading:0,description:"Towering basalt stratovolcano with a sunken magma crater and glowing obsidian fissures."},{id:"titan_divide",name:"Titan Continental Divide",category:"Continent Range",biome:"Valkyrie Alpine Peaks",x:24e3,z:-32e3,radius:2500,baseElevation:1650,heading:2.1,description:"Colossal continental backbone range in the far northern sector of the 65,536 km² map."},{id:"spacex_starbase",name:"SpaceX Starbase & Orbital Launch Complex",category:"Spaceport",biome:"Sapphire Ocean",x:1050,z:880,radius:420,baseElevation:13.5,heading:0,description:"Orbital Launch Mount, 145m Mechazilla Chopstick Tower, Starship Full Stack, High Bays, and Cryogenic Tank Farm."},{id:"space_leo",name:"Low Earth Orbit (LEO) & Space Station",category:"Outer Space",biome:"Outer Space",x:800,z:1200,radius:500,baseElevation:8500,heading:0,description:"Orbital spaceflight overlooking continent Aetheria, with the International Space Station and Starlink satellites."},{id:"space_moon",name:"The Moon & Artemis Lunar Base",category:"Celestial Body",biome:"Lunar Highlands",x:14e3,z:-12e3,radius:1800,baseElevation:16200,heading:0,description:"Cratered lunar surface, Sea of Tranquility, and SpaceX Lunar Starbase habitat outpost."},{id:"space_mars",name:"Planet Mars & Mars Base Alpha",category:"Celestial Body",biome:"Martian Basaltic Plains",x:-22e3,z:24e3,radius:2200,baseElevation:22400,heading:0,description:"Rust-red Martian terrain, Valles Marineris canyon, and the historic SpaceX Mars Base Alpha colony."}],ji=[{id:"golden_bay_bridge",name:"Golden Bay Suspension Bridge",x1:-260,z1:220,x2:-1180,z2:220,deckHeight:13,archHeight:11,width:18,towerHeight:112,type:"suspension"},{id:"redstone_viaduct",name:"Redstone Canyon Arch Viaduct",x1:-2600,z1:-1580,x2:-2600,z2:-2120,deckHeight:154,archHeight:4.5,width:15,towerHeight:110,type:"viaduct"}],s0=[[[1820,-1460],[1940,-1620],[2120,-1840],[2340,-2100],[2580,-2380],[2820,-2680],[3100,-2980],[3450,-3280]],[[1180,1380],[1310,1560],[1440,1740],[1540,1910]],[[-2740,2140],[-2820,2210],[-2910,2275],[-2980,2320]]];class o0{constructor(t=20261017){this.noise=new e0(t),this.roadCellSize=100,this.roadGrid=new Map,this.roadPolylines=[],this.structureColliders=[],this._buildHighwayNetwork()}registerCollider(t,e,n,i,o=200){this.structureColliders.push({x:t,z:e,hw:n,hd:i,topY:o})}resolveHorizontalCollision(t,e=.65){for(let n=0;n<this.structureColliders.length;n++){const i=this.structureColliders[n];if(t.y>i.topY)continue;const o=t.x-i.x,r=t.z-i.z,a=i.hw+e,c=i.hd+e;if(Math.abs(o)<a&&Math.abs(r)<c){const h=a-Math.abs(o),l=c-Math.abs(r);h<l?t.x+=o>=0?h:-h:t.z+=r>=0?l:-l}}}_buildHighwayNetwork(){const t=[[[-260,220],[0,220],[380,220],[720,580],[1150,1280],[1420,1680],[1550,1920]],[[0,220],[0,-146.67],[240,-360],[580,-620],[980,-920],[1380,-1180],[1750,-1400]],[[0,220],[-260,220],[-720,220],[-1180,220],[-1680,40],[-2150,-480],[-2480,-1080],[-2600,-1580],[-2600,-1850],[-2600,-2120],[-2550,-2550]],[[-1420,160],[-1850,620],[-2280,1250],[-2640,1780],[-2920,2260]],[[1750,-1400],[2350,-950],[2950,-250],[3650,750],[4350,1950],[4850,3150]],[[720,580],[880,720],[1050,880]]];for(const e of t){const n=this._sampleCatmullRom(e,32);this.roadPolylines.push(n);for(let i=0;i<n.length-1;i++){const o=n[i],r=n[i+1];this._insertRoadSegment(o[0],o[1],r[0],r[1])}}}_sampleCatmullRom(t,e=24){const n=[],i=t.length;for(let o=0;o<i-1;o++){const r=t[Math.max(0,o-1)],a=t[o],c=t[o+1],h=t[Math.min(i-1,o+2)],l=Math.abs(a[0]-c[0])<.01||Math.abs(a[1]-c[1])<.01;for(let d=0;d<e;d++){const u=d/e;if(l)n.push([vt(a[0],c[0],u),vt(a[1],c[1],u)]);else{const f=u*u,g=f*u,v=.5*(2*a[0]+(-r[0]+c[0])*u+(2*r[0]-5*a[0]+4*c[0]-h[0])*f+(-r[0]+3*a[0]-3*c[0]+h[0])*g),m=.5*(2*a[1]+(-r[1]+c[1])*u+(2*r[1]-5*a[1]+4*c[1]-h[1])*f+(-r[1]+3*a[1]-3*c[1]+h[1])*g);n.push([v,m])}}}return n.push(t[i-1]),n}_insertRoadSegment(t,e,n,i){const r=Math.floor((Math.min(t,n)-42)/this.roadCellSize),a=Math.floor((Math.max(t,n)+42)/this.roadCellSize),c=Math.floor((Math.min(e,i)-42)/this.roadCellSize),h=Math.floor((Math.max(e,i)+42)/this.roadCellSize),l={x0:t,z0:e,x1:n,z1:i};for(let d=r;d<=a;d++)for(let u=c;u<=h;u++){const f=`${d},${u}`;let g=this.roadGrid.get(f);g||(g=[],this.roadGrid.set(f,g)),g.push(l)}}getRunwayInfo(t,e){if(t>=380&&t<=1160&&e>=175&&e<=265){const n=Math.max(0,Math.abs(t-770)-340),i=Math.abs(e-220);if(Math.hypot(n,i)<28)return{onRunway:i<16&&n<8,runwayMask:ft(1-i/18,0,1)*(1-le(335,365,Math.abs(t-770)))}}return{onRunway:!1,runwayMask:0}}getRoadInfo(t,e){const n=this.getRunwayInfo(t,e);if(n.runwayMask>.05)return{distance:(1-n.runwayMask)*9,isRoad:!0,roadMask:n.runwayMask,closestX:t,closestZ:220,isCityStreet:!0};const i=Math.hypot(t,e);let o=0,r=9999;if(i<420&&t>-265){const m=Math.abs(t-Math.round(t/en)*en),p=Math.abs(e-Math.round(e/en)*en);r=Math.min(m,p);const x=1-le(340,420,i);r<9&&(o=ft(1-r/9,0,1)*x)}const a=Math.floor(t/this.roadCellSize),c=Math.floor(e/this.roadCellSize),h=this.roadGrid.get(`${a},${c}`);if(!h)return{distance:r,isRoad:o>.2,roadMask:o,closestX:t,closestZ:e,isCityStreet:o>.01};let l=99999999,d=t,u=e;for(let m=0;m<h.length;m++){const p=h[m],x=p.x1-p.x0,_=p.z1-p.z0,M=x*x+_*_;let C=0;M>1e-4&&(C=((t-p.x0)*x+(e-p.z0)*_)/M,C=Math.max(0,Math.min(1,C)));const S=p.x0+C*x,b=p.z0+C*_,P=t-S,w=e-b,y=P*P+w*w;y<l&&(l=y,d=S,u=b)}const f=Math.sqrt(l),g=ft(1-f/9,0,1),v=Math.max(o,g);return{distance:Math.min(f,r),isRoad:v>.2,roadMask:v,closestX:d,closestZ:u,isCityStreet:o>=g&&o>.01}}getBridgeInfo(t,e){for(let n=0;n<ji.length;n++){const i=ji[n],o=i.x2-i.x1,r=i.z2-i.z1,a=o*o+r*r,c=((t-i.x1)*o+(e-i.z1)*r)/a;if(c>=-.02&&c<=1.02){const h=ft(c,0,1),l=i.x1+h*o,d=i.z1+h*r,u=Math.hypot(t-l,e-d);if(u<=i.width*.6){const f=Math.sin(ft(c,0,1)*Math.PI)*(i.archHeight||4);return{onBridge:!0,bridge:i,deckY:i.deckHeight+f,lateralDist:u,t:c}}}}return{onBridge:!1,deckY:-9999}}_getRawElevationAndBiomes(t,e){const n=this.noise,i=n.warpedFbm2D(t*45e-6,e*45e-6,4,.5),o=n.fbm2D(t*28e-5,e*28e-5,4),r=n.fbm2D(t*.0018,e*.0018,4),a=n.noise2D(t*.009,e*.009),c=ft(.55+e/18e3*.35+n.fbm2D(t*12e-5,e*12e-5,2)*.25,0,1),h=ft(.5+t/9e3*.32+n.fbm2D(t*18e-5+7.1,e*18e-5-3.4,3)*.35,0,1);let l=26+i*220+o*78+r*13+a*1.1;const d=le(420,1750,e-Math.abs(t-150)*.38);l=vt(l,-48+o*22,d*.88);const u=Math.hypot(t-1550,e-1950);if(u<950){const H=1-le(110,850,u),F=46+r*4*(1-le(0,140,u));l=vt(l,F,H)}const f=le(1600,3800,t-e*.85-1e3)*le(-1200,-3400,e),g=Math.max(0,le(.28,.68,i)*le(3800,11e3,Math.hypot(t,e))),v=Math.min(1,f+g*.85);if(v>.001){const H=n.ridged2D(t*55e-5,e*55e-5,5),F=n.ridged2D(t*.0024,e*.0024,3),W=160+H*920+F*145;l=vt(l,Math.max(l,W),v)}const m=Math.hypot(t-3600,e+3400);if(m<1600){const H=(1-le(95,1500,m))*520;l+=H;const F=1-Pe(55,135,m);l=vt(l,1120,F)}const p=le(-900,-2200,t)*le(-200,-1400,e);if(p>.001){const H=135+n.warpedFbm2D(t*7e-4,e*7e-4,4,.4)*140,F=24,W=Math.floor(H/F)*F+le(.65,.95,H%F/F)*F;let X=vt(H,W,.72);const j=Math.min(Math.hypot(t+2600,e+1580),Math.hypot(t+2600,e+2120));j<240&&(X=vt(X,153.5,1-Pe(45,220,j)));const dt=-1850+Math.sin((t+2600)*.0016)*180,ut=Math.abs(e-dt),Y=1-Pe(45,240,ut);X=vt(X,32,Y),l=vt(l,X,p)}const x=le(-1e3,-2300,t)*le(300,1500,e);if(x>.001){const H=t*.018+e*.009+n.fbm2D(t*.003,e*.003,2)*4.2,F=Math.pow(Math.abs(Math.sin(H)),.65)*26;let W=22+o*35+F;const X=Math.hypot(t+2780,e-2180);if(X<260){const dt=(1-Pe(55,220,X))*34;W-=dt}const j=Math.hypot(t+2950,e-2300);if(j<240){const dt=1-Pe(95,210,j);W=vt(W,28,dt)}l=vt(l,W,x)}const _=Math.hypot(t-5200,e-3800);let M=0;if(_<2600){M=1-le(400,2500,_);const H=(1-le(260,2400,_))*840,F=(1-Pe(180,440,_))*420,W=n.ridged2D(t*.0035,e*.0035,3)*45*M;l=l*(1-M*.6)+H-F+W}if(t>-400&&t<3400&&e<400&&e>-3200){const H=-.78*t-180+Math.sin(t*.0025)*145,F=Math.abs(e-H);if(F<280){const W=1-Pe(28,260,F),X=1-Pe(12,42,F),j=le(-200,300,t)*(1-le(2600,3200,t));l=vt(l,Math.min(l,18+t/2500*35),W*j*.65),l-=X*j*24}}const C=t<-255?-255-t:t>1220?t-1220:0,S=Math.max(0,Math.abs(e)-310),b=Math.hypot(C,S);if(b<260){const H=1-Pe(15,240,b);l=vt(l,12.5,H)}const P=Math.hypot(t-1050,e-880);if(P<290){const H=1-Pe(75,275,P);l=vt(l,13.5,H)}const w=t<-255?-255-t:t>295?t-295:0,y=Math.max(0,Math.abs(e)-295),T=Math.hypot(w,y);let D=0;if(T<90&&(D=1-Pe(10,85,T)),t>-1550&&t<-180&&e>-650&&e<1850){const H=1-Math.exp(-Math.pow((e-220)/140,2)),F=(o*190+r*65)*H,W=Math.max(0,(e-260)*.35),X=-258+F*.45+W*.35,j=-1178-F-W*.55,dt=le(X,X-52,t),ut=1-le(j+52,j,t),Y=-460+o*180,J=le(Y,Y+280,e),ct=dt*ut*J;l=vt(l,-28+r*4,ct)}const I=Math.hypot(t+1220,e-220);I<240&&(l=vt(l,12.8,1-Pe(45,220,I)));const k=Math.hypot(t-1750,e+1400);if(k<360){const H=1-Pe(160,340,k);l=vt(l,48,H)}const N=this.getRoadInfo(t,e);if(N.distance<85&&!N.isCityStreet&&!this.getBridgeInfo(t,e).onBridge){const F=1-Pe(8.5,75,N.distance),W=Math.hypot(t,e),X=12.5+ft(W/2400*38,0,52);l>X&&(l=vt(l,X,F*F))}let V=gn.LUSH_PLAINS;return l<ke+1.8?V=gn.OCEAN:D>.35?V=gn.COASTAL_METROPOLIS:M>.35?V=gn.VOLCANIC_CALDERA:p>.45?V=gn.REDSTONE_CANYON:x>.45||c>.68&&h<.35?V=gn.GOLDEN_DUNES:l>290||v>.55?V=gn.ALPINE_PEAKS:c<.28?V=gn.TUNDRA_FJORD:h>.46&&(V=gn.EMERALD_FOREST),{height:l,biome:V,temperature:c,moisture:h,canyonZone:p,desertZone:x,volcanicWeight:M,mountainWeight:v,cityWeight:D}}getTerrainData(t,e){const n=this._getRawElevationAndBiomes(t,e);let i=n.height;const o=this.getRoadInfo(t,e);if(o.distance<24&&!o.isCityStreet&&!this.getBridgeInfo(t,e).onBridge){const a=this._getRawElevationAndBiomes(o.closestX,o.closestZ).height,c=Math.max(ke+3,a),h=(1-Pe(7.5,20,o.distance))*(1-n.cityWeight);i=vt(i,c,h)}return{height:i,biome:n.biome,temperature:n.temperature,moisture:n.moisture,canyonZone:n.canyonZone,desertZone:n.desertZone,volcanicWeight:n.volcanicWeight,mountainWeight:n.mountainWeight,cityWeight:n.cityWeight,roadMask:o.roadMask,isRoad:o.isRoad}}getHeight(t,e){return this.getTerrainData(t,e).height}getCollisionHeight(t,e){const n=this.getBridgeInfo(t,e);let i=this.getHeight(t,e);if(t>-245&&t<290&&e>-280&&e<285&&Math.hypot(t,e)<350){const o=Math.abs(t-Math.round(t/en)*en),r=Math.abs(e-Math.round(e/en)*en);if(o>9.8&&r>9.8){const a=le(9.8,10.8,o),c=le(9.8,10.8,r);i+=.28*a*c}}return n.onBridge&&n.deckY>i?n.deckY:i}getNormalAndSlope(t,e,n=1.5){const i=this.getCollisionHeight(t-n,e),o=this.getCollisionHeight(t+n,e),r=this.getCollisionHeight(t,e-n),a=this.getCollisionHeight(t,e+n),c=(i-o)/(2*n),h=(r-a)/(2*n),l=1,d=Math.hypot(c,l,h),u=c/d,f=l/d,g=h/d,v=Math.acos(ft(f,-1,1))*(180/Math.PI);return{nx:u,ny:f,nz:g,slopeDeg:v}}}class r0{constructor(t,e){this.scene=t,this.worldGen=e,this.state={timeOfDay:10.2,timeSpeed:.08,cloudCoverage:.46,cloudDensity:.72,waveHeight:1,fogDensity:9e-5,weatherPreset:"clear",stormFactor:0,wetness:0,snowLineOffset:0},this.sunDirection=new U(.5,.7,.3).normalize(),this.skyColorHorizon=new Dt(10405352),this.skyColorZenith=new Dt(1988505),this.sunColor=new Dt(16774368),this._initLights(),this._initSkyDome(),this._initOceanMesh()}_initLights(){this.dirLight=new t0(16774891,2.6),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=1400;const t=340;this.dirLight.shadow.camera.left=-t,this.dirLight.shadow.camera.right=t,this.dirLight.shadow.camera.top=t,this.dirLight.shadow.camera.bottom=-t,this.dirLight.shadow.bias=-1e-4,this.dirLight.shadow.normalBias=.04,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),this.hemiLight=new $p(11852024,4012078,.85),this.scene.add(this.hemiLight)}_initSkyDome(){const t=new ue(36e3,64,40);this.skyUniforms={uTime:{value:0},uAltitude:{value:12},uSunDir:{value:this.sunDirection.clone()},uCloudCoverage:{value:this.state.cloudCoverage},uCloudDensity:{value:this.state.cloudDensity},uStormFactor:{value:0},uHorizonColor:{value:this.skyColorHorizon},uZenithColor:{value:this.skyColorZenith},uSunColor:{value:this.sunColor}};const e=new Ne({side:Ce,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        varying vec3 vWorldPos;
        varying vec3 vDir;

        uniform float uTime;
        uniform float uAltitude;
        uniform vec3 uSunDir;
        uniform float uCloudCoverage;
        uniform float uCloudDensity;
        uniform float uStormFactor;
        uniform vec3 uHorizonColor;
        uniform vec3 uZenithColor;
        uniform vec3 uSunColor;

        // Fast 3D hash & value noise for clouds and stars
        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        float cloudFBM(vec3 p) {
          float v = 0.0;
          float a = 0.52;
          for (int i = 0; i < 5; i++) {
            v += a * noise3D(p);
            p = p * 2.07 + vec3(13.1, 7.7, 19.3);
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 dir = normalize(vDir);
          float elevation = max(dir.y, 0.0);
          float spaceWeight = smoothstep(1400.0, 9500.0, uAltitude);

          // 1. Base Rayleigh + Mie atmospheric gradient (fades to cosmic vacuum in space)
          float horizonPow = pow(1.0 - elevation, 2.8);
          vec3 skyCol = mix(uZenithColor, uHorizonColor, horizonPow);
          skyCol = mix(skyCol, vec3(0.003, 0.005, 0.010), spaceWeight * 0.98);

          // 2. Solar / Mie forward scatter glow
          float sunDot = dot(dir, uSunDir);
          float mie = pow(clamp(sunDot, 0.0, 1.0), 8.0) * 0.45 + pow(clamp(sunDot, 0.0, 1.0), 64.0) * 0.6;
          skyCol += uSunColor * mie * (1.0 - uStormFactor * 0.75) * (1.0 - spaceWeight * 0.7);

          // Crispy solar disc (blazing diamond in space)
          float sunDisc = smoothstep(0.99935, 0.99975, sunDot);
          skyCol += uSunColor * sunDisc * 3.8 * (1.0 - uStormFactor * 0.85);

          // 3. Starfield in Space and at Night
          float nightWeight = smoothstep(0.12, -0.15, uSunDir.y);
          float starFactor = max(nightWeight, spaceWeight);
          if (starFactor > 0.01 && dir.y > -0.2) {
            vec3 starGrid = floor(dir * 520.0);
            float sh = hash31(starGrid);
            float star = smoothstep(0.992, 0.9995, sh);
            float twinkle = 0.75 + 0.25 * sin(uTime * 3.0 + sh * 100.0);
            skyCol += vec3(0.9, 0.95, 1.0) * star * twinkle * starFactor * (1.0 - uStormFactor * (1.0 - spaceWeight));

            // Photorealistic Procedural Moon in the Night Sky (Real Maria, Tycho Craters & Retroreflective Regolith)
            vec3 moonCenterDir = -uSunDir;
            float dForward = dot(dir, moonCenterDir);

            // Construct 2D disk tangent frame
            vec3 moonUp = abs(moonCenterDir.y) > 0.95 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
            vec3 moonRight = normalize(cross(moonCenterDir, moonUp));
            moonUp = cross(moonRight, moonCenterDir);

            // Apparent angular radius on the sky: ~1.1 degrees (prominent, majestic, authentic)
            float lunarRadius = 0.022;
            vec2 moonUV = vec2(dot(dir, moonRight), dot(dir, moonUp)) / lunarRadius;
            float distToMoonCenter = length(moonUV);

            // Atmospheric lunar corona & soft halo surrounding the moon
            float corona = pow(clamp(dForward, 0.0, 1.0), 400.0) * 0.45 +
                           pow(clamp(dForward, 0.0, 1.0), 65.0) * 0.18;
            skyCol += vec3(0.75, 0.86, 1.0) * corona * nightWeight * (1.0 - uStormFactor * 0.7);

            if (distToMoonCenter < 1.02) {
              float discMask = smoothstep(1.0, 0.96, distToMoonCenter);

              // 1. Lunar Highlands: Silver-gray anorthosite regolith
              float highlandFBM = noise3D(vec3(moonUV * 14.0, 1.5)) * 0.55 +
                                  noise3D(vec3(moonUV * 36.0, 4.2)) * 0.32 +
                                  noise3D(vec3(moonUV * 88.0, 8.7)) * 0.13;
              vec3 highlandCol = mix(vec3(0.75, 0.78, 0.82), vec3(0.92, 0.94, 0.96), highlandFBM);

              // 2. Basaltic Dark Maria ("The Man in the Moon" Seas)
              // Oceanus Procellarum, Mare Imbrium, Mare Serenitatis, Tranquillitatis, Crisium, Fecunditatis
              float maria = 0.0;
              maria += smoothstep(0.48, 0.0, length(moonUV - vec2(-0.28, 0.26))) * 0.88;  // Mare Imbrium
              maria += smoothstep(0.55, 0.0, length(moonUV - vec2(-0.46, 0.04))) * 0.82;  // Oceanus Procellarum
              maria += smoothstep(0.35, 0.0, length(moonUV - vec2(0.12, 0.28))) * 0.85;   // Mare Serenitatis
              maria += smoothstep(0.38, 0.0, length(moonUV - vec2(0.28, 0.08))) * 0.88;   // Mare Tranquillitatis
              maria += smoothstep(0.19, 0.0, length(moonUV - vec2(0.60, 0.18))) * 0.95;   // Mare Crisium (isolated sea)
              maria += smoothstep(0.32, 0.0, length(moonUV - vec2(0.34, -0.25))) * 0.75;  // Mare Fecunditatis
              maria += smoothstep(0.38, 0.0, length(moonUV - vec2(-0.24, -0.32))) * 0.78; // Mare Nubium & Humorum

              // Fractal shoreline turbulence
              float mariaNoise = noise3D(vec3(moonUV * 9.0, 2.7)) * 0.65 + noise3D(vec3(moonUV * 26.0, 5.1)) * 0.35;
              maria = clamp(maria * (0.65 + 0.7 * mariaNoise), 0.0, 1.0);
              vec3 mariaCol = mix(vec3(0.24, 0.26, 0.28), vec3(0.34, 0.36, 0.39), mariaNoise);

              vec3 moonSurf = mix(highlandCol, mariaCol, maria * 0.88);

              // 3. Impact Craters with Brilliant Ejecta Ray Systems
              // Tycho Crater at South Pole with radial rays streaming across the southern hemisphere
              vec2 tychoPos = vec2(-0.06, -0.66);
              float dTycho = length(moonUV - tychoPos);
              float tychoAngle = atan(moonUV.y - tychoPos.y, moonUV.x - tychoPos.x);
              float tychoRays = pow(abs(sin(tychoAngle * 7.0 + sin(tychoAngle * 14.0) * 0.6)), 5.0) *
                                smoothstep(0.9, 0.05, dTycho);
              float tychoRim = smoothstep(0.045, 0.0, abs(dTycho - 0.038));
              moonSurf = mix(moonSurf, vec3(0.98, 0.99, 1.0), (tychoRays * 0.45 + tychoRim * 0.75));

              // Copernicus & Kepler Craters with bright ejecta halos
              float dCopernicus = length(moonUV - vec2(-0.22, 0.10));
              float copernicus = smoothstep(0.08, 0.0, dCopernicus) * 0.45 + smoothstep(0.025, 0.0, abs(dCopernicus - 0.025)) * 0.65;
              moonSurf = mix(moonSurf, vec3(0.96, 0.98, 1.0), copernicus);

              // 4. Lommel-Seeliger retroreflective regolith limb shading (crisp, luminous full moon disk)
              float retroLimb = mix(0.92, 1.06, pow(distToMoonCenter, 3.5));
              moonSurf *= retroLimb;

              // Composite Moon onto sky dome
              skyCol = mix(skyCol, moonSurf * 1.85, discMask * nightWeight * (1.0 - uStormFactor * 0.85));
            }

            // Northern Aurora Borealis ribbon (only in upper atmosphere)
            if (spaceWeight < 0.5) {
              float auroraCurtain = sin(dir.x * 8.0 + uTime * 0.15 + noise3D(dir * 4.0) * 3.0) * 0.5 + 0.5;
              float auroraMask = smoothstep(0.15, 0.55, dir.y) * (1.0 - smoothstep(0.55, 0.88, dir.y)) * smoothstep(0.0, -0.7, dir.z);
              vec3 auroraCol = mix(vec3(0.05, 0.85, 0.45), vec3(0.35, 0.2, 0.9), dir.y);
              skyCol += auroraCol * pow(auroraCurtain, 3.0) * auroraMask * nightWeight * 0.38 * (1.0 - uStormFactor);
            }
          }

          // 4. Raymarched Multi-Sample Volumetric Cloud Dome
          if (dir.y > 0.015 && uCloudCoverage > 0.01) {
            vec3 wind = vec3(uTime * 0.014, 0.0, uTime * 0.008);
            // Project ray onto curved cloud shell
            float cloudPlaneDist = 2.4 / (dir.y + 0.08);
            vec3 cloudPos = dir * cloudPlaneDist + wind;

            float density = 0.0;
            float lightAccum = 0.0;
            const int STEPS = 4;
            for (int s = 0; s < STEPS; s++) {
              float fi = float(s) / float(STEPS);
              vec3 samplePos = cloudPos * 0.85 + dir * (fi * 0.35) + wind * (1.0 + fi * 0.2);
              float n = cloudFBM(samplePos);
              float thresh = 1.0 - uCloudCoverage * 0.82;
              float d = smoothstep(thresh, thresh + 0.32, n);
              density += d * (1.0 / float(STEPS));

              // Sample toward sun for volumetric self-shadowing
              float sunSample = cloudFBM(samplePos + uSunDir * 0.22);
              float shadow = smoothstep(thresh - 0.05, thresh + 0.35, sunSample);
              lightAccum += (1.0 - shadow * 0.72) * (1.0 / float(STEPS));
            }

            density = clamp(density * uCloudDensity * 1.45, 0.0, 1.0);
            // Fade clouds smoothly near the very flat horizon
            float horizonFade = smoothstep(0.015, 0.14, dir.y);
            density *= horizonFade;

            // Cloud illumination: sunlit top + silver lining + atmospheric base shadow
            float silverLining = pow(clamp(sunDot, 0.0, 1.0), 10.0) * 0.65;
            vec3 cloudBaseColor = mix(uZenithColor * 0.45 + vec3(0.08), uHorizonColor * 0.72, 0.5);
            cloudBaseColor = mix(cloudBaseColor, vec3(0.14, 0.16, 0.20), uStormFactor * 0.85);
            vec3 cloudLitColor = uSunColor * (0.85 + silverLining);
            vec3 finalCloudColor = mix(cloudBaseColor, cloudLitColor, clamp(lightAccum + silverLining * 0.5, 0.12, 1.0));

            skyCol = mix(skyCol, finalCloudColor, density * 0.94);
          }

          // Below horizon bounce
          if (dir.y < 0.0) {
            skyCol = mix(uHorizonColor, vec3(0.04, 0.09, 0.15), clamp(-dir.y * 4.0, 0.0, 1.0));
          }

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `});this.skyMesh=new R(t,e),this.skyMesh.frustumCulled=!1,this.scene.add(this.skyMesh)}_initOceanMesh(){const t=new an(36e3,36e3,220,220);t.rotateX(-Math.PI/2),this.waterUniforms={uTime:{value:0},uWaveHeight:{value:this.state.waveHeight},uSunDir:{value:this.sunDirection.clone()},uSunColor:{value:this.sunColor},uSkyHorizon:{value:this.skyColorHorizon},uSkyZenith:{value:this.skyColorZenith},uCameraPos:{value:new U},uFogColor:{value:this.skyColorHorizon},uFogDensity:{value:this.state.fogDensity}};const e=new Ne({transparent:!0,uniforms:this.waterUniforms,vertexShader:`
        precision highp float;
        uniform float uTime;
        uniform float uWaveHeight;

        varying vec3 vWorldPos;
        varying float vWaveCrest;

        // Multi-directional Gerstner swell displacement
        vec3 gerstnerWave(vec2 pos, float steepness, float wavelength, vec2 dir, float time) {
          float k = 6.28318 / wavelength;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(dir);
          float f = k * (dot(d, pos) - c * time);
          float a = steepness / k;
          return vec3(d.x * (a * cos(f)), a * sin(f), d.y * (a * cos(f)));
        }

        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vec2 xz = wp.xz;

          // Distance attenuation so distant horizon water stays alias-free
          float camDist = length(position.xz);
          float atten = (1.0 - smoothstep(1200.0, 8500.0, camDist)) * uWaveHeight;

          vec3 disp = vec3(0.0);
          if (atten > 0.001) {
            disp += gerstnerWave(xz, 0.16 * atten, 48.0, vec2(1.0, 0.35), uTime * 1.15);
            disp += gerstnerWave(xz, 0.12 * atten, 24.0, vec2(0.65, -0.75), uTime * 1.35);
            disp += gerstnerWave(xz, 0.09 * atten, 11.5, vec2(-0.4, 0.9), uTime * 1.65);
          }

          wp.xyz += disp;
          vWorldPos = wp.xyz;
          vWaveCrest = disp.y;

          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        varying vec3 vWorldPos;
        varying float vWaveCrest;

        uniform float uTime;
        uniform float uWaveHeight;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkyZenith;
        uniform vec3 uCameraPos;
        uniform vec3 uFogColor;
        uniform float uFogDensity;

        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float noise2(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        // Analytical multi-scale wave surface normal
        vec3 getWaterNormal(vec2 xz, float dist) {
          float detailFade = 1.0 - smoothstep(200.0, 4500.0, dist);
          vec2 p1 = xz * 0.14 + vec2(uTime * 0.45, uTime * 0.28);
          vec2 p2 = xz * 0.37 + vec2(-uTime * 0.35, uTime * 0.52);
          vec2 p3 = xz * 1.15 + vec2(uTime * 0.8, -uTime * 0.6);

          float h0 = noise2(p1) * 0.55 + noise2(p2) * 0.3 + noise2(p3) * 0.15 * detailFade;
          float hx = noise2(p1 + vec2(0.08, 0.0)) * 0.55 + noise2(p2 + vec2(0.08, 0.0)) * 0.3;
          float hz = noise2(p1 + vec2(0.0, 0.08)) * 0.55 + noise2(p2 + vec2(0.0, 0.08)) * 0.3;

          float bumpStrength = (0.28 + 0.18 * uWaveHeight) * (0.25 + 0.75 * detailFade);
          vec3 n = normalize(vec3((h0 - hx) * bumpStrength * 12.0, 1.0, (h0 - hz) * bumpStrength * 12.0));
          return n;
        }

        void main() {
          vec3 viewVec = uCameraPos - vWorldPos;
          float dist = length(viewVec);
          vec3 V = viewVec / max(dist, 0.001);

          vec3 N = getWaterNormal(vWorldPos.xz, dist);
          vec3 R = reflect(-V, N);

          // Schlick Fresnel reflection factor
          float NoV = max(dot(N, V), 0.0);
          float fresnel = 0.04 + 0.96 * pow(1.0 - NoV, 4.5);

          // Sky reflection color
          vec3 skyRefl = mix(uSkyHorizon, uSkyZenith, clamp(R.y * 1.4, 0.0, 1.0));

          // Deep ocean vs turquoise subsurface scattering
          float sss = pow(clamp(dot(V, -uSunDir + N * 0.5), 0.0, 1.0), 3.0) * max(uSunDir.y, 0.0);
          vec3 deepWater = vec3(0.018, 0.095, 0.19) * clamp(uSunDir.y * 1.4 + 0.25, 0.08, 1.0);
          vec3 turquoise = vec3(0.04, 0.38, 0.45) * clamp(uSunDir.y * 1.5 + 0.2, 0.08, 1.0);
          vec3 waterBody = mix(deepWater, turquoise, 0.32 + sss * 0.65);

          // Sun specular glitter trail across wave facets
          vec3 H = normalize(uSunDir + V);
          float NoH = max(dot(N, H), 0.0);
          float specTight = pow(NoH, 320.0) * 3.8;
          float specBroad = pow(NoH, 36.0) * 0.35;
          vec3 specular = uSunColor * (specTight + specBroad) * smoothstep(-0.05, 0.15, uSunDir.y);

          // Whitecap foam on high wave crests
          float crestFoam = smoothstep(0.38, 0.85, vWaveCrest) * noise2(vWorldPos.xz * 0.45 + uTime * 0.3);

          vec3 color = mix(waterBody, skyRefl, fresnel * 0.82) + specular;
          color = mix(color, vec3(0.92, 0.96, 1.0) * clamp(uSunDir.y + 0.35, 0.15, 1.0), clamp(crestFoam * 0.65, 0.0, 1.0));

          // Exponential distance fog matching terrain fog
          float fogFactor = 1.0 - exp(-pow(dist * uFogDensity * 0.85, 1.65));
          color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));

          gl_FragColor = vec4(color, 0.93);
        }
      `});this.waterMesh=new R(t,e),this.waterMesh.position.y=ke,this.waterMesh.frustumCulled=!1,this.scene.add(this.waterMesh)}applyWeatherPreset(t){switch(this.state.weatherPreset=t,t){case"clear":this.state.cloudCoverage=.35,this.state.cloudDensity=.65,this.state.fogDensity=75e-6,this.state.waveHeight=.85,this.state.stormFactor=0,this.state.wetness=0,this.state.snowLineOffset=0;break;case"golden":this.state.timeOfDay=17.65,this.state.cloudCoverage=.52,this.state.cloudDensity=.78,this.state.fogDensity=11e-5,this.state.waveHeight=.95,this.state.stormFactor=.05,this.state.wetness=.15,this.state.snowLineOffset=0;break;case"storm":this.state.cloudCoverage=.92,this.state.cloudDensity=.95,this.state.fogDensity=28e-5,this.state.waveHeight=2.15,this.state.stormFactor=.85,this.state.wetness=.9,this.state.snowLineOffset=0;break;case"blizzard":this.state.cloudCoverage=.88,this.state.cloudDensity=.9,this.state.fogDensity=34e-5,this.state.waveHeight=1.45,this.state.stormFactor=.65,this.state.wetness=.3,this.state.snowLineOffset=-210;break;case"mist":this.state.cloudCoverage=.68,this.state.cloudDensity=.75,this.state.fogDensity=42e-5,this.state.waveHeight=.45,this.state.stormFactor=.35,this.state.wetness=.45,this.state.snowLineOffset=0;break;case"night":this.state.timeOfDay=.8,this.state.cloudCoverage=.22,this.state.cloudDensity=.5,this.state.fogDensity=8e-5,this.state.waveHeight=.75,this.state.stormFactor=0,this.state.wetness=0,this.state.snowLineOffset=0;break}}update(t,e){this.state.timeOfDay=(this.state.timeOfDay+t*this.state.timeSpeed)%24,this.state.timeOfDay<0&&(this.state.timeOfDay+=24);const n=performance.now()*.001,i=(this.state.timeOfDay-6)/24*Math.PI*2,o=Math.sin(i),r=Math.cos(i)*.88,a=Math.sin(i*.5+.6)*.48;this.sunDirection.set(r,o,a).normalize();const c=Ws.smoothstep(o,-.08,.32),h=Math.max(0,1-Math.abs(o-.04)*5),l=this.state.stormFactor,d=new Dt(1254206),u=new Dt(996448),f=new Dt(1973828);this.skyColorZenith.copy(d).lerp(u,c).lerp(f,h*.65),this.skyColorZenith.lerp(new Dt(1712427),l*.8);const g=new Dt(2967144),v=new Dt(9356266),m=new Dt(16477499);this.skyColorHorizon.copy(g).lerp(v,c).lerp(m,h*.88),this.skyColorHorizon.lerp(new Dt(3489354),l*.82);const p=new Dt(16775150),x=new Dt(16747586),_=new Dt(11587829);this.sunColor.copy(_).lerp(p,c).lerp(x,h*.85);const M=o>=-.05?this.sunDirection:this.sunDirection.clone().negate(),S=340*2/2048,b=new re().lookAt(new U(0,0,0),M.clone().negate(),new U(0,1,0)),P=b.clone().invert(),w=e.clone().applyMatrix4(b);w.x=Math.floor(w.x/S)*S,w.y=Math.floor(w.y/S)*S;const y=w.applyMatrix4(P);this.dirLight.position.copy(y).addScaledVector(M,600),this.dirLight.target.position.copy(y),this.dirLight.target.updateMatrixWorld(),this.dirLight.color.copy(this.sunColor);const T=o>=-.05?Ws.lerp(1.15,2.65,c):1.35;this.dirLight.intensity=T*(1-l*.58),this.hemiLight.color.copy(this.skyColorHorizon),this.hemiLight.groundColor.setHex(2630428).lerp(new Dt(2437959),1-c),this.hemiLight.intensity=Ws.lerp(.92,1.05,c)*(1-l*.35),this.skyMesh.position.copy(e),this.waterMesh.position.x=e.x,this.waterMesh.position.z=e.z,this.skyUniforms.uTime.value=n,this.skyUniforms.uAltitude.value=e.y,this.skyUniforms.uSunDir.value.copy(this.sunDirection),this.skyUniforms.uCloudCoverage.value=this.state.cloudCoverage,this.skyUniforms.uCloudDensity.value=this.state.cloudDensity,this.skyUniforms.uStormFactor.value=l,this.waterUniforms.uTime.value=n,this.waterUniforms.uWaveHeight.value=this.state.waveHeight,this.waterUniforms.uSunDir.value.copy(this.sunDirection),this.waterUniforms.uCameraPos.value.copy(e),this.waterUniforms.uFogColor.value.copy(this.skyColorHorizon),this.waterUniforms.uFogDensity.value=this.state.fogDensity}}class a0{constructor(t,e,n){this.scene=t,this.worldGen=e,this.atmosphere=n,this.terrainGroup=new Mt,this.scene.add(this.terrainGroup),this.chunkCache=new Map,this.activeKeys=new Set,this.buildQueue=[],this.maxCacheSize=400,this.chunksPerFrame=3,this.currentRequired=null,this.baseChunkSize=128,this.maxLodLevel=5,this.gridSegments=32,this._initTerrainMaterial(),this.lastUpdatePos=new U(999999,999999,999999)}_initTerrainMaterial(){this.uniforms={uTime:{value:0},uSunDir:{value:new U(.5,.7,.3)},uSunColor:{value:new Dt(16774628)},uSkyHorizon:{value:new Dt(10209259)},uSkyZenith:{value:new Dt(1461903)},uCameraPos:{value:new U},uFogDensity:{value:8e-5},uWetness:{value:0},uSnowLineOffset:{value:0},uCloudCoverage:{value:.45},uHeadlightPos:{value:new U},uHeadlightDir:{value:new U(0,0,-1)},uHeadlightPower:{value:0}},this.material=new Ne({uniforms:this.uniforms,vertexShader:`
        precision highp float;
        attribute vec4 aBiomeWeights; // x: canyon, y: desert, z: volcanic, w: roadMask
        attribute vec2 aClimate;      // x: moisture, y: cityWeight

        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec4 vBiomeWeights;
        varying vec2 vClimate;

        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          vBiomeWeights = aBiomeWeights;
          vClimate = aClimate;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec4 vBiomeWeights;
        varying vec2 vClimate;

        uniform float uTime;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkyZenith;
        uniform vec3 uCameraPos;
        uniform float uFogDensity;
        uniform float uWetness;
        uniform float uSnowLineOffset;
        uniform float uCloudCoverage;
        uniform vec3 uHeadlightPos;
        uniform vec3 uHeadlightDir;
        uniform float uHeadlightPower;

        float hash21(vec2 p) {
          p = fract(p * vec2(234.34, 435.345));
          p += dot(p, p + 34.23);
          return fract(p.x * p.y);
        }

        float noise2(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm4(vec2 p) {
          float v = 0.0;
          v += 0.5000 * noise2(p); p = p * 2.03 + vec2(17.1, 9.2);
          v += 0.2500 * noise2(p); p = p * 2.02 + vec2(5.4, 23.7);
          v += 0.1250 * noise2(p); p = p * 2.04 + vec2(11.8, 3.1);
          v += 0.0625 * noise2(p);
          return v / 0.9375;
        }

        void main() {
          vec3 viewVec = uCameraPos - vWorldPos;
          float dist = length(viewVec);
          vec3 V = viewVec / max(dist, 0.001);

          float h = vWorldPos.y;
          vec3 N = normalize(vNormal);
          float slope = 1.0 - clamp(N.y, 0.0, 1.0);

          // Multi-scale procedural surface detail (macro, meso, micro)
          float macroTex = fbm4(vWorldPos.xz * 0.015);
          float mesoTex = fbm4(vWorldPos.xz * 0.12);
          float microTex = noise2(vWorldPos.xz * 1.45);
          float ultraMicro = noise2(vWorldPos.xz * 6.5);

          // High-resolution micro-normal perturbation for realistic rock/soil/grass relief
          float detailFade = 1.0 - smoothstep(45.0, 900.0, dist);
          if (detailFade > 0.01) {
            vec2 mp = vWorldPos.xz * (slope > 0.18 ? 0.65 : 1.15);
            float h0 = fbm4(mp) + 0.25 * ultraMicro;
            float hx = fbm4(mp + vec2(0.12, 0.0)) + 0.25 * noise2((vWorldPos.xz + vec2(0.05, 0.0)) * 6.5);
            float hz = fbm4(mp + vec2(0.0, 0.12)) + 0.25 * noise2((vWorldPos.xz + vec2(0.0, 0.05)) * 6.5);
            float bumpAmp = mix(1.6, 3.2, clamp(slope * 2.5, 0.0, 1.0)) * (1.0 - vBiomeWeights.w * 0.88);
            vec3 microPerturb = vec3(h0 - hx, 0.0, h0 - hz) * bumpAmp * detailFade;
            N = normalize(N + microPerturb);
          }

          // 1. Realistic Organic Botanical Grass, Fescue, & Forest Humus
          vec3 lushGrass = mix(vec3(0.12, 0.22, 0.08), vec3(0.18, 0.28, 0.11), macroTex);
          vec3 dryPatch = vec3(0.29, 0.27, 0.16);
          lushGrass = mix(lushGrass, dryPatch, smoothstep(0.58, 0.88, mesoTex) * 0.40);
          lushGrass *= (0.86 + 0.22 * microTex);

          vec3 forestFloor = mix(vec3(0.09, 0.16, 0.07), vec3(0.19, 0.15, 0.10), mesoTex);
          vec3 grassCol = mix(lushGrass, forestFloor, smoothstep(0.40, 0.72, vClimate.x));

          // Talus & fertile loam scree on moderate slopes (0.06 .. 0.19)
          float dirtSlope = smoothstep(0.06, 0.19, slope);
          vec3 soilCol = mix(vec3(0.22, 0.18, 0.13), vec3(0.33, 0.28, 0.20), mesoTex);
          grassCol = mix(grassCol, soilCol, dirtSlope * 0.78);

          // 2. Coastal Sand, Pebble Shore & Wet Surf Zone
          float beachWeight = 1.0 - smoothstep(1.2, 6.2, h);
          vec3 drySand = mix(vec3(0.74, 0.67, 0.51), vec3(0.83, 0.76, 0.59), mesoTex * 0.7 + microTex * 0.3);
          vec3 wetSand = vec3(0.32, 0.28, 0.21);
          float shoreWet = 1.0 - smoothstep(-0.5, 2.1, h);
          vec3 coastCol = mix(drySand, wetSand, shoreWet);
          vec3 albedo = mix(grassCol, coastCol, beachWeight);

          // 3. Desert Golden Rippled Sand Dunes
          if (vBiomeWeights.y > 0.01) {
            float ripple = sin(vWorldPos.x * 2.2 + vWorldPos.z * 1.1 + mesoTex * 3.0) * 0.5 + 0.5;
            vec3 duneSand = mix(vec3(0.79, 0.58, 0.30), vec3(0.91, 0.73, 0.43), ripple * 0.65 + macroTex * 0.35);
            albedo = mix(albedo, duneSand, vBiomeWeights.y * (1.0 - shoreWet * 0.6));
          }

          // 4. Stratified Redstone Grand Canyon Terraces
          if (vBiomeWeights.x > 0.01) {
            float strata = sin(h * 0.58 + macroTex * 5.0) * 0.5 + 0.5;
            float fineStrata = sin(h * 2.8 + mesoTex * 2.5) * 0.5 + 0.5;
            vec3 canyonRed = vec3(0.64, 0.25, 0.13);
            vec3 canyonOchre = vec3(0.81, 0.47, 0.24);
            vec3 canyonDark = vec3(0.38, 0.15, 0.10);
            vec3 mesaCol = mix(canyonRed, canyonOchre, strata);
            mesaCol = mix(mesaCol, canyonDark, fineStrata * 0.42);
            albedo = mix(albedo, mesaCol, vBiomeWeights.x);
          }

          // 5. Volcanic Obsidian & Glowing Magma Caldera
          float lavaEmission = 0.0;
          if (vBiomeWeights.z > 0.01) {
            vec3 basalt = mix(vec3(0.09, 0.09, 0.10), vec3(0.18, 0.15, 0.14), mesoTex);
            albedo = mix(albedo, basalt, vBiomeWeights.z);

            float craterDist = length(vWorldPos.xz - vec2(5200.0, 3800.0));
            if (craterDist < 380.0) {
              float crackNoise = abs(noise2(vWorldPos.xz * 0.06 + vec2(uTime * 0.02)) - 0.5);
              float magma = (1.0 - smoothstep(0.0, 0.065, crackNoise)) * (1.0 - smoothstep(160.0, 360.0, craterDist));
              lavaEmission = magma * vBiomeWeights.z;
              albedo = mix(albedo, vec3(1.0, 0.32, 0.04), lavaEmission);
            }
          }

          // 6. Triplanar Stratified Cliff Granite, Slate & Crevice Shadows
          float cliffMask = smoothstep(0.13, 0.35, slope);
          float rockBands = fbm4(vec2(vWorldPos.x * 0.08 + vWorldPos.z * 0.08, h * 0.20));
          vec3 granite = mix(vec3(0.24, 0.24, 0.26), vec3(0.40, 0.39, 0.37), rockBands);
          granite *= (0.80 + 0.35 * microTex) * (0.85 + 0.15 * mesoTex);
          if (vBiomeWeights.x > 0.3) {
            granite = mix(granite, vec3(0.54, 0.21, 0.11), vBiomeWeights.x * 0.82);
          }
          albedo = mix(albedo, granite, cliffMask);

          // 7. High-Altitude Alpine Snow & Glacial Ice with Blue Subsurface Shadows
          float snowThreshold = 230.0 + uSnowLineOffset + macroTex * 42.0;
          float altSnow = smoothstep(snowThreshold, snowThreshold + 85.0, h);
          float snowSlope = 1.0 - smoothstep(0.28, 0.55, slope);
          float snowWeight = altSnow * snowSlope * (1.0 - vBiomeWeights.z * 0.85);
          vec3 snowSunlit = mix(vec3(0.92, 0.95, 0.98), vec3(0.98, 0.99, 1.0), mesoTex);
          vec3 snowShadow = vec3(0.74, 0.82, 0.92);
          vec3 snowColor = mix(snowShadow, snowSunlit, clamp(N.y * 0.7 + 0.3, 0.0, 1.0));
          albedo = mix(albedo, snowColor, clamp(snowWeight, 0.0, 1.0));

          // 8. Solis Metropolis Sidewalks, Curbs & Architectural Plazas
          if (vClimate.y > 0.05) {
            float tileX = step(0.05, fract(vWorldPos.x * 0.5));
            float tileZ = step(0.05, fract(vWorldPos.z * 0.5));
            float paver = tileX * tileZ;
            vec3 sidewalkCol = mix(vec3(0.48, 0.50, 0.53), vec3(0.58, 0.60, 0.63), paver * 0.6 + microTex * 0.4);
            albedo = mix(albedo, sidewalkCol, vClimate.y * 0.88);
          }

          // 9. Paved Highway Asphalt, Crushed Gravel Shoulder & Reflective Markings
          float roadMask = vBiomeWeights.w;
          if (roadMask > 0.04) {
            // High-grade stone-mastic asphalt with aggregate mineral specks
            vec3 asphalt = mix(vec3(0.12, 0.13, 0.15), vec3(0.18, 0.19, 0.21), microTex * 0.6 + ultraMicro * 0.4);

            // Subtle polished rubber tire wear sheen in wheel tracks
            float tireWear = smoothstep(0.38, 0.62, roadMask) * (1.0 - smoothstep(0.78, 0.94, roadMask));
            asphalt = mix(asphalt, asphalt * 0.78, tireWear * 0.42);

            // Natural graded crushed stone / gravel road shoulder transition
            vec3 gravelShoulder = mix(vec3(0.32, 0.30, 0.26), vec3(0.24, 0.22, 0.19), mesoTex);
            albedo = mix(albedo, gravelShoulder, smoothstep(0.04, 0.16, roadMask));

            // Check if on Solis Coastal Airport Runway (x: 430..1110, z: 204..236)
            bool isRunway = (vWorldPos.x > 430.0 && vWorldPos.x < 1110.0 && abs(vWorldPos.z - 220.0) < 16.5);
            vec3 roadColor = asphalt;

            if (isRunway) {
              float rz = abs(vWorldPos.z - 220.0);
              float edgeLine = smoothstep(14.2, 14.6, rz) * (1.0 - smoothstep(15.2, 15.6, rz));
              float rwyCenter = (1.0 - smoothstep(0.35, 0.55, rz)) * step(0.4, fract(vWorldPos.x * 0.04));
              float endDist = min(abs(vWorldPos.x - 455.0), abs(vWorldPos.x - 1085.0));
              float pianoKeys = (1.0 - smoothstep(12.0, 14.0, endDist)) * step(0.45, fract(rz * 0.55)) * step(rz, 13.5);
              float mark = clamp(edgeLine + rwyCenter + pianoKeys, 0.0, 1.0);
              roadColor = mix(asphalt, vec3(0.92, 0.94, 0.96), mark * 0.92);
            } else {
              // Solid reflective white shoulder lines
              float shoulderLine = smoothstep(0.26, 0.29, roadMask) * (1.0 - smoothstep(0.32, 0.36, roadMask));

              // Compute screen-space gradient to automatically align dashed yellow lines with road curve
              vec2 roadGrad = vec2(dFdx(roadMask), dFdy(roadMask));
              float gradLen = length(roadGrad);
              vec2 roadTangent = gradLen > 0.0001 ? vec2(-roadGrad.y, roadGrad.x) / gradLen : vec2(0.7071, 0.7071);
              float alongRoad = dot(vWorldPos.xz, roadTangent);
              float dashPattern = step(0.42, fract(alongRoad * 0.08));
              float centerLine = smoothstep(0.95, 0.985, roadMask) * dashPattern;

              // Zebra crosswalks near city intersections (every 73.3333m in Solis Metropolis)
              float zebra = 0.0;
              if (vClimate.y > 0.35 && vWorldPos.x > -255.0 && vWorldPos.x < 310.0) {
                float gx = abs(vWorldPos.x - round(vWorldPos.x / 73.333333) * 73.333333);
                float gz = abs(vWorldPos.z - round(vWorldPos.z / 73.333333) * 73.333333);
                bool crossBand = (gx > 8.5 && gx < 12.5 && gz < 6.5) || (gz > 8.5 && gz < 12.5 && gx < 6.5);
                if (crossBand) {
                  zebra = step(0.45, fract((vWorldPos.x + vWorldPos.z) * 0.65));
                }
              }

              roadColor = mix(asphalt, vec3(0.92, 0.94, 0.96), clamp(shoulderLine + zebra, 0.0, 1.0) * 0.92);
              roadColor = mix(roadColor, vec3(0.98, 0.78, 0.12), centerLine * (1.0 - zebra) * 0.95);
            }

            albedo = mix(albedo, roadColor, smoothstep(0.14, 0.24, roadMask));
          }

          // Shoreline breaking surf foam right at water level (0.0m .. 0.85m)
          float foamBand = smoothstep(-0.3, 0.15, h) * (1.0 - smoothstep(0.15, 0.95, h));
          float foamAnim = sin(h * 10.0 - uTime * 3.2 + macroTex * 6.0) * 0.5 + 0.5;
          albedo = mix(albedo, vec3(0.92, 0.96, 1.0), foamBand * foamAnim * 0.72);

          // Rain wetness darkening
          albedo *= (1.0 - uWetness * 0.26 * (1.0 - snowWeight));

          // Direct Sun & Moon Lighting + Gentle Large-Scale Cloud Shadows
          float sunVis = smoothstep(-0.04, 0.14, uSunDir.y);
          float nightFactor = 1.0 - sunVis;

          // Realistic Moon vector (opposite sun, elevated above horizon at night)
          vec3 moonDir = normalize(vec3(-uSunDir.x, max(0.24, -uSunDir.y), -uSunDir.z));
          float NoL_sun = max(dot(N, uSunDir), 0.0);
          float NoL_moon = max(dot(N, moonDir), 0.0);

          float cloudShadowNoise = noise2(vWorldPos.xz * 0.00018 + vec2(uTime * 0.0018, uTime * 0.0011));
          float cloudShadow = 1.0 - smoothstep(0.45, 0.72, cloudShadowNoise) * uCloudCoverage * 0.38;

          // Daylight vs Luminous Moonlight direct illumination
          vec3 sunDirect = uSunColor * NoL_sun * cloudShadow * 1.62;
          vec3 moonDirect = vec3(0.38, 0.50, 0.72) * (NoL_moon * 0.65 + 0.35) * 0.88;
          vec3 directLight = mix(moonDirect, sunDirect, sunVis);

          // Atmospheric Ambient Light (Daylight sky vs Soft luminous starlight & city bounce at night)
          float hemiFactor = N.y * 0.5 + 0.5;
          vec3 dayAmbient = mix(vec3(0.18, 0.20, 0.22), uSkyHorizon * 0.65 + uSkyZenith * 0.35, hemiFactor);
          vec3 nightAmbient = mix(vec3(0.16, 0.21, 0.32), vec3(0.26, 0.34, 0.48), hemiFactor);
          vec3 ambientLight = mix(nightAmbient, dayAmbient, sunVis);

          // City Night Glow & Warm Streetlamp Radiance in Metropolis
          if (vClimate.y > 0.02) {
            vec3 citySpill = vec3(0.48, 0.40, 0.26) * vClimate.y * nightFactor * 1.25;
            ambientLight += citySpill;
          }

          // Specular highlight on snow, wet roads, and wet rock
          vec3 activeLightDir = sunVis > 0.5 ? uSunDir : moonDir;
          vec3 H = normalize(activeLightDir + V);
          float specPower = mix(24.0, 110.0, max(snowWeight, max(uWetness, roadMask * 0.55)));
          float specStrength = max(snowWeight * 0.35, (uWetness + roadMask * 0.28) * 0.55);
          float specNoL = sunVis > 0.5 ? NoL_sun : NoL_moon;
          vec3 specular = mix(vec3(0.35, 0.45, 0.65), uSunColor, sunVis) * pow(max(dot(N, H), 0.0), specPower) * specStrength * specNoL;

          vec3 finalColor = albedo * (directLight + ambientLight) + specular;

          // Vehicle Projector Headlights & Flashlight High-Beam on Terrain & Roads
          if (uHeadlightPower > 0.01) {
            vec3 toFrag = vWorldPos - uHeadlightPos;
            float lightDist = length(toFrag);
            if (lightDist < 140.0) {
              vec3 lightRay = toFrag / max(0.001, lightDist);
              float coneDot = dot(lightRay, uHeadlightDir);
              // High-tech projector beam (wide 45-degree beam angle with soft perimeter falloff)
              float cone = smoothstep(0.70, 0.94, coneDot);
              // Inverse-square physical attenuation
              float atten = 1.0 / (1.0 + lightDist * 0.035 + lightDist * lightDist * 0.0006);
              float spotNoL = max(dot(N, -lightRay), 0.0);
              vec3 beamColor = vec3(1.0, 0.97, 0.92) * 3.6;
              float surfaceBoost = 1.0 + roadMask * 0.9;
              finalColor += albedo * beamColor * cone * atten * (spotNoL * 0.75 + 0.25) * surfaceBoost * uHeadlightPower;
            }
          }

          if (lavaEmission > 0.001) {
            finalColor += vec3(1.8, 0.45, 0.05) * lavaEmission;
          }

          // Physical atmospheric aerial perspective with forward solar Mie inscattering
          float fogFactor = 1.0 - exp(-pow(dist * uFogDensity, 1.55));
          vec3 fogCol = mix(uSkyHorizon, uSkyZenith, clamp(V.y * -0.5 + 0.2, 0.0, 0.65));
          float VoL = max(dot(-V, uSunDir), 0.0);
          float sunGlare = pow(VoL, 8.0) * sunVis;
          vec3 inscatterCol = mix(fogCol, uSunColor, sunGlare * 0.45);
          finalColor = mix(finalColor, inscatterCol, clamp(fogFactor, 0.0, 1.0));

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `})}_createChunkMesh(t,e,n){const i=this.baseChunkSize*Math.pow(2,n),o=n===0?36:n===1?32:24,r=i/o,a=t*i,c=e*i,h=o+3,l=h*h,d=new Float32Array(l*3),u=new Float32Array(l*3),f=new Float32Array(l*4),g=new Float32Array(l*2),v=Math.max(18,i*.12),m=new Float32Array(l);let p=0;for(let b=-1;b<=o+1;b++){const P=Math.max(0,Math.min(o,b)),w=c+P*r,y=b===-1||b===o+1;for(let T=-1;T<=o+1;T++){const D=Math.max(0,Math.min(o,T)),I=a+D*r,k=y||T===-1||T===o+1,N=this.worldGen.getTerrainData(I,w),V=k?N.height-v:N.height;m[p]=N.height;const H=p*3;d[H]=I,d[H+1]=V,d[H+2]=w;const F=p*4;f[F]=N.canyonZone,f[F+1]=N.desertZone,f[F+2]=N.volcanicWeight,f[F+3]=N.roadMask;const W=p*2;g[W]=N.moisture,g[W+1]=N.cityWeight,p++}}for(let b=0;b<h;b++){const P=Math.max(0,b-1)*h,w=Math.min(h-1,b+1)*h,y=b*h;for(let T=0;T<h;T++){const D=Math.max(0,T-1),I=Math.min(h-1,T+1),k=m[y+D],N=m[y+I],V=m[P+T],H=m[w+T],F=I===D?1:I-D,W=w===P?1:Math.max(1,(w-P)/h),X=(k-N)/(r*F),j=(V-H)/(r*W),dt=1/Math.hypot(X,1,j),ut=(y+T)*3;u[ut]=X*dt,u[ut+1]=dt,u[ut+2]=j*dt}}const x=(h-1)*(h-1),_=new Uint32Array(x*6);let M=0;for(let b=0;b<h-1;b++)for(let P=0;P<h-1;P++){const w=b*h+P,y=w+1,T=(b+1)*h+P,D=T+1;_[M++]=w,_[M++]=T,_[M++]=y,_[M++]=y,_[M++]=T,_[M++]=D}const C=new be;C.setAttribute("position",new xe(d,3)),C.setAttribute("normal",new xe(u,3)),C.setAttribute("aBiomeWeights",new xe(f,4)),C.setAttribute("aClimate",new xe(g,2)),C.setIndex(new xe(_,1)),C.computeBoundingSphere();const S=new R(C,this.material);return S.receiveShadow=n<=2,S}_collectRequiredChunks(t,e){const n=new Map,i=this.baseChunkSize*Math.pow(2,this.maxLodLevel),o=Math.floor(t/i),r=Math.floor(e/i),a=2,c=(h,l,d)=>{const u=this.baseChunkSize*Math.pow(2,d),f=(h+.5)*u,g=(l+.5)*u,v=Math.hypot(t-f,e-g),m=`${d-1}:${h*2}:${l*2}`,x=d>0&&this.activeKeys.has(m)?u*2.18:u*1.82;if(d>0&&v<x){const _=d-1,M=h*2,C=l*2;c(M,C,_),c(M+1,C,_),c(M,C+1,_),c(M+1,C+1,_)}else{const _=`${d}:${h}:${l}`;n.set(_,{cx:h,cz:l,lod:d,dist:v,key:_})}};for(let h=r-a;h<=r+a;h++)for(let l=o-a;l<=o+a;l++)c(l,h,this.maxLodLevel);return n}update(t,e=null){const n=this.atmosphere;if(this.uniforms.uTime.value=performance.now()*.001,this.uniforms.uSunDir.value.copy(n.sunDirection),this.uniforms.uSunColor.value.copy(n.sunColor),this.uniforms.uSkyHorizon.value.copy(n.skyColorHorizon),this.uniforms.uSkyZenith.value.copy(n.skyColorZenith),this.uniforms.uCameraPos.value.copy(t),this.uniforms.uFogDensity.value=n.state.fogDensity,this.uniforms.uWetness.value=n.state.wetness,this.uniforms.uSnowLineOffset.value=n.state.snowLineOffset,this.uniforms.uCloudCoverage.value=n.state.cloudCoverage,e)if(e.mode==="rover"){const a=-Math.sin(e.yaw),c=-Math.cos(e.yaw);this.uniforms.uHeadlightPos.value.set(e.position.x+a*2.2,e.position.y+.85,e.position.z+c*2.2),this.uniforms.uHeadlightDir.value.set(a,-.06,c).normalize(),this.uniforms.uHeadlightPower.value=e.flashlightOn||n.sunDirection.y<.1?1:0}else if(e.mode==="explorer"){this.uniforms.uHeadlightPos.value.copy(t);const a=new U;e.camera.getWorldDirection(a),this.uniforms.uHeadlightDir.value.copy(a),this.uniforms.uHeadlightPower.value=e.flashlightOn?1:n.sunDirection.y<-.05?.75:0}else this.uniforms.uHeadlightPower.value=0;if(Math.hypot(t.x-this.lastUpdatePos.x,t.z-this.lastUpdatePos.z)>36){this.lastUpdatePos.copy(t);const a=this._collectRequiredChunks(t.x,t.z);this.currentRequired=a;const c=[],h=performance.now();for(const[d,u]of a.entries()){const f=this.chunkCache.get(d);f?(f.lastUsed=h,f.mesh.parent||this.terrainGroup.add(f.mesh),this.activeKeys.add(d)):c.push(u)}c.sort((d,u)=>d.dist-u.dist),this.buildQueue=c;const l=this.baseChunkSize*Math.pow(2,this.maxLodLevel)*3.6;for(const d of this.activeKeys)if(!a.has(d)){const u=this.chunkCache.get(d);if(u){const f=d.split(":"),g=parseInt(f[0],10),v=parseInt(f[1],10),m=parseInt(f[2],10),p=this.baseChunkSize*Math.pow(2,g);Math.hypot(t.x-(v+.5)*p,t.z-(m+.5)*p)>l&&(u.mesh.parent&&this.terrainGroup.remove(u.mesh),this.activeKeys.delete(d))}}}let o=0;const r=performance.now();for(;this.buildQueue.length>0&&o<this.chunksPerFrame&&!(o>=2&&performance.now()-r>9);){const a=this.buildQueue.shift();if(this.chunkCache.has(a.key)){const h=this.chunkCache.get(a.key);h.mesh.parent||this.terrainGroup.add(h.mesh),this.activeKeys.add(a.key);continue}const c=this._createChunkMesh(a.cx,a.cz,a.lod);this.chunkCache.set(a.key,{mesh:c,lastUsed:r,key:a.key}),this.terrainGroup.add(c),this.activeKeys.add(a.key),o++}if(this.buildQueue.length===0&&this.currentRequired){for(const a of this.activeKeys)if(!this.currentRequired.has(a)){const c=this.chunkCache.get(a);c&&c.mesh.parent&&this.terrainGroup.remove(c.mesh),this.activeKeys.delete(a)}}if(this.chunkCache.size>this.maxCacheSize){const a=[];for(const[h,l]of this.chunkCache.entries())this.activeKeys.has(h)||a.push(l);a.sort((h,l)=>h.lastUsed-l.lastUsed);const c=Math.min(a.length,this.chunkCache.size-this.maxCacheSize);for(let h=0;h<c;h++){const l=a[h];l.mesh.geometry.dispose(),this.chunkCache.delete(l.key)}}}primeAround(t,e){this.lastUpdatePos.set(999999,999999,999999);const n=this.chunksPerFrame;this.chunksPerFrame=64,this.update(new U(t,0,e)),this.chunksPerFrame=n}getActiveChunkCount(){return this.activeKeys.size}}function Gn(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new be;let h=0;for(let l=0;l<s.length;++l){const d=s[l];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+l);l+=s[u].attributes.position.count}c.setIndex(d)}for(const l in o){const d=Ha(o[l]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,d)}for(const l in r){const d=r[l][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<r[l].length;++v)f.push(r[l][v][u]);const g=Ha(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Ha(s){let t,e,n,i=-1,o=0;for(let h=0;h<s.length;++h){const l=s[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=l.gpuType),i!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=l.count*e}const r=new t(o),a=new xe(r,e,n);let c=0;for(let h=0;h<s.length;++h){const l=s[h];if(l.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=l.count;u<f;u++)for(let g=0;g<e;g++){const v=l.getComponent(u,g);a.setComponent(u+d,g,v)}}else r.set(l.array,c);c+=l.count*e}return i!==void 0&&(a.gpuType=i),a}class c0{constructor(t,e){this.scene=t,this.worldGen=e,this.group=new Mt,this.scene.add(this.group),this.baseX=1050,this.baseZ=880,this.baseY=13.5,this.group.position.set(this.baseX,this.baseY,this.baseZ),this.flareLight=null,this.flareMesh=null,this.flareTimer=0,this.aviationBeacons=[],this._createMaterials(),this._buildConcreteApronAndRoads(),this._buildOrbitalLaunchMountAndTrench(),this._buildMechazillaTowerAndChopsticks(),this._buildFullStackStarship(),this._buildSuborbitalTestPad(),this._buildCryogenicTankFarm(),this._buildVerticalAssemblyMegaBay(),this._buildLaunchControlCenter(),this._buildFlareStack(),this._buildPerimeterAndGate(),this._registerColliders()}_createMaterials(){this.matStainless=new nt({color:15528181,metalness:.96,roughness:.12}),this.matHeatShield=new nt({color:1118999,metalness:.2,roughness:.88}),this.matTowerSteel=new nt({color:2237998,metalness:.75,roughness:.45}),this.matConcrete=new nt({color:7896453,metalness:.1,roughness:.85}),this.matCryoTank=new nt({color:15857145,metalness:.35,roughness:.3}),this.matRaptorBell=new nt({color:3817287,metalness:.85,roughness:.35}),this.matWarningYellow=new nt({color:16436245,roughness:.4}),this.matSpaceXRed=new nt({color:14427686,roughness:.4}),this.matGlass=new nt({color:959977,metalness:.9,roughness:.1,transparent:!0,opacity:.75})}_buildConcreteApronAndRoads(){const t=new q(260,2.2,220),e=new R(t,this.matConcrete);e.position.set(0,1.1,0),e.receiveShadow=!0,this.group.add(e);const n=new q(85,1.6,60),i=new R(n,this.matConcrete);i.position.set(85,.8,0),i.receiveShadow=!0,this.group.add(i);const o=new Zt({color:16436245});for(let r of[-1,1]){const a=new R(new q(240,.05,.8),o);a.position.set(0,2.23,r*95);const c=new R(new q(.8,.05,190),o);c.position.set(r*120,2.23,0),this.group.add(a,c)}}_buildOrbitalLaunchMountAndTrench(){this.olmGroup=new Mt,this.olmGroup.position.set(0,2.2,0);const t=14.5;for(let h=0;h<6;h++){const l=h/6*Math.PI*2,d=Math.cos(l)*t,u=Math.sin(l)*t,f=new R(new it(1.6,2.2,22,12),this.matTowerSteel);f.position.set(d,11,u),f.castShadow=!0,f.receiveShadow=!0,this.olmGroup.add(f);const g=(h+1)/6*Math.PI*2,v=Math.cos(g)*t,m=Math.sin(g)*t,p=(d+v)*.5,x=(u+m)*.5,_=new R(new q(1,1,t*1.05),this.matTowerSteel);_.position.set(p,15,x),_.rotation.y=l+Math.PI/6,this.olmGroup.add(_)}const e=new it(17.5,17.5,3.8,24,1,!0),n=new R(e,this.matTowerSteel);n.position.y=22,n.castShadow=!0,this.olmGroup.add(n);for(let h=0;h<20;h++){const l=h/20*Math.PI*2,d=new R(new q(1.8,2.5,1.4),this.matWarningYellow);d.position.set(Math.cos(l)*10.5,24.2,Math.sin(l)*10.5),d.rotation.y=l,this.olmGroup.add(d)}const i=new R(new $i(12.2,.75,8,24),this.matStainless);i.position.y=19.5,i.rotation.x=Math.PI*.5,this.olmGroup.add(i);const o=new nt({color:3359061,roughness:.9}),r=new R(new q(65,1.2,22),o);r.position.set(32,-4.5,0),this.olmGroup.add(r);const a=new R(new q(18,2.5,18),this.matStainless);a.position.set(4,2,0),a.rotation.z=.55,this.olmGroup.add(a);const c=new R(new q(18,3.2,4),this.matTowerSteel);c.position.set(-14,24,0),this.olmGroup.add(c),this.group.add(this.olmGroup)}_buildMechazillaTowerAndChopsticks(){this.towerGroup=new Mt,this.towerGroup.position.set(-18,2.2,-18);const t=145,e=1.4,n=6,i=new q(e,t,e);for(const m of[-n,n])for(const p of[-n,n]){const x=new R(i,this.matTowerSteel);x.position.set(m,t*.5,p),x.castShadow=!0,this.towerGroup.add(x)}for(let m=10;m<=t;m+=10){const p=new R(new q(n*2,.9,.9),this.matTowerSteel);p.position.set(0,m,-n);const x=new R(new q(n*2,.9,.9),this.matTowerSteel);x.position.set(0,m,n);const _=new R(new q(.9,.9,n*2),this.matTowerSteel);_.position.set(-n,m,0);const M=new R(new q(.9,.9,n*2),this.matTowerSteel);M.position.set(n,m,0),this.towerGroup.add(p,x,_,M);const C=Math.hypot(n*2,10),S=new R(new q(.65,C,.65),this.matTowerSteel);S.position.set(-n,m-5,0),S.rotation.x=Math.atan2(10,n*2),this.towerGroup.add(S)}const o=88,r=new R(new q(14,12,6.5),this.matTowerSteel);r.position.set(0,o,n+3.2),this.towerGroup.add(r);const a=new q(36,2.6,2.4),c=new R(a,this.matWarningYellow);c.position.set(16,o+1.2,n+7.5),c.rotation.y=.22,c.castShadow=!0;const h=new R(a,this.matWarningYellow);h.position.set(16,o+1.2,n+13.5),h.rotation.y=-.22,h.castShadow=!0,this.towerGroup.add(c,h);const l=new R(new q(28,1.8,1.8),this.matWarningYellow);l.position.set(6,t+4.5,0);const d=new R(new q(6,4.5,4.5),this.matConcrete);d.position.set(-8,t+4.5,0),this.towerGroup.add(l,d);const u=new R(new it(.12,.45,18,6),this.matStainless);u.position.set(0,t+9,0),this.towerGroup.add(u);const f=new ue(.65,8,8),g=new Zt({color:15680580,transparent:!0,opacity:1}),v=new R(f,g);v.position.set(0,t+18,0),this.towerGroup.add(v),this.aviationBeacons.push(v),this.group.add(this.towerGroup)}_buildFullStackStarship(){this.starshipStackGroup=new Mt,this.starshipStackGroup.position.set(0,26.4,0);const t=4.5,e=71,n=new it(t,t,e,32);this.superHeavyMesh=new R(n,this.matStainless),this.superHeavyMesh.position.y=e*.5,this.superHeavyMesh.castShadow=!0,this.superHeavyMesh.receiveShadow=!0,this.starshipStackGroup.add(this.superHeavyMesh);for(let v=0;v<4;v++){const m=v/4*Math.PI*2,p=new Mt;p.position.set(Math.cos(m)*(t+.5),e-4.5,Math.sin(m)*(t+.5)),p.rotation.y=m;const x=new R(new q(.35,3.8,6.2),this.matTowerSteel);x.castShadow=!0,p.add(x),this.starshipStackGroup.add(p)}for(let v=0;v<13;v++){const m=v/12*Math.PI*2,p=v===0?0:1.8,x=new R(new qt(.75,2.2,10,1,!0),this.matRaptorBell);x.position.set(Math.cos(m)*p,-1,Math.sin(m)*p),this.starshipStackGroup.add(x)}for(let v=0;v<20;v++){const m=v/20*Math.PI*2,p=new R(new qt(.72,2.2,10,1,!0),this.matRaptorBell);p.position.set(Math.cos(m)*3.6,-1,Math.sin(m)*3.6),this.starshipStackGroup.add(p)}const i=new R(new it(t,t,2.4,24,1,!0),this.matTowerSteel);i.position.y=e+1.2,this.starshipStackGroup.add(i);const o=e+2.4;this.starshipUpperGroup=new Mt,this.starshipUpperGroup.position.y=o;const r=32,a=new R(new it(t,t,r,32),this.matStainless);a.position.y=r*.5,a.castShadow=!0,this.starshipUpperGroup.add(a);const c=new it(t+.05,t+.05,r,20,1,!1,0,Math.PI);c.rotateY(-Math.PI*.5);const h=new R(c,this.matHeatShield);h.position.y=r*.5,this.starshipUpperGroup.add(h);const l=18,d=new qt(t,l,32),u=new R(d,this.matStainless);u.position.y=r+l*.5,u.castShadow=!0,this.starshipUpperGroup.add(u);const f=new qt(t+.04,l,20,1,!1,0,Math.PI);f.rotateY(-Math.PI*.5);const g=new R(f,this.matHeatShield);g.position.y=r+l*.5,this.starshipUpperGroup.add(g);for(const v of[-1,1]){const m=new R(new q(.3,4.8,3.2),this.matStainless);m.position.set(v*(t+1.2),r+1.5,.2),m.rotation.z=v*.15,m.castShadow=!0,this.starshipUpperGroup.add(m)}for(const v of[-1,1]){const m=new R(new q(.35,12,4.8),this.matStainless);m.position.set(v*(t+1.8),6.5,-.4),m.rotation.z=v*.12,m.castShadow=!0,this.starshipUpperGroup.add(m)}for(let v=0;v<3;v++){const m=v/3*Math.PI*2,p=new R(new qt(.72,2.2,12,1,!0),this.matRaptorBell);p.position.set(Math.cos(m)*1.2,-1,Math.sin(m)*1.2),this.starshipUpperGroup.add(p)}for(let v=0;v<3;v++){const m=v/3*Math.PI*2+Math.PI/3,p=new R(new qt(1.4,2.8,14,1,!0),this.matStainless);p.position.set(Math.cos(m)*2.8,-1.2,Math.sin(m)*2.8),this.starshipUpperGroup.add(p)}this.starshipStackGroup.add(this.starshipUpperGroup),this.group.add(this.starshipStackGroup)}_buildSuborbitalTestPad(){const t=new Mt;t.position.set(-65,1.1,45);const e=new R(new it(18,20,2.5,16),this.matConcrete);e.position.y=1.25,t.add(e);const n=new R(new it(4.5,4.5,38,24),this.matStainless);n.position.y=21.5,n.castShadow=!0,t.add(n);const i=new R(new qt(4.5,14,24),this.matStainless);i.position.y=47.5,i.castShadow=!0,t.add(i),this.group.add(t)}_buildCryogenicTankFarm(){this.tankFarmGroup=new Mt,this.tankFarmGroup.position.set(-75,2.2,-65);const t=new R(new q(75,2.5,55),this.matConcrete);t.position.y=1.25,this.tankFarmGroup.add(t);for(let n=0;n<2;n++)for(let i=0;i<4;i++){const o=(i-1.5)*16.5,r=(n-.5)*22,a=n===0,c=new R(new it(4.2,4.2,28,20),this.matCryoTank);c.position.set(o,16.5,r),c.castShadow=!0,this.tankFarmGroup.add(c);const h=new R(new ue(4.2,16,12,0,Math.PI*2,0,Math.PI*.5),this.matCryoTank);h.position.set(o,30.5,r),this.tankFarmGroup.add(h);const l=new Zt({color:a?165063:1483594}),d=new R(new it(4.25,4.25,1.8,20),l);d.position.set(o,22,r),this.tankFarmGroup.add(d)}for(let n=-1;n<=1;n+=2){const i=new R(new ue(6.2,16,16),this.matStainless);i.position.set(n*28,9.5,34),i.castShadow=!0,this.tankFarmGroup.add(i);const o=new R(new it(.6,.9,7.5,6),this.matTowerSteel);o.position.set(n*28,3.75,34),this.tankFarmGroup.add(o)}const e=new R(new q(65,1.5,2.5),this.matTowerSteel);e.position.set(38,12,28),this.tankFarmGroup.add(e);for(let n=-.6;n<=.6;n+=.4){const i=new R(new it(.35,.35,65,8),this.matStainless);i.rotation.z=Math.PI*.5,i.position.set(38,13.2,28+n),this.tankFarmGroup.add(i)}this.group.add(this.tankFarmGroup)}_buildVerticalAssemblyMegaBay(){this.megaBayGroup=new Mt,this.megaBayGroup.position.set(85,2.2,95);const t=54,e=65,n=85,i=new nt({color:3359061,roughness:.55,metalness:.6}),o=new nt({color:16317180,roughness:.4}),r=new R(new q(t,n,e),i);r.position.y=n*.5,r.castShadow=!0,r.receiveShadow=!0,this.megaBayGroup.add(r);const a=new R(new q(t+.6,n*.75,e*.7),o);a.position.y=n*.55,this.megaBayGroup.add(a);const c=new nt({color:1976635,roughness:.7,metalness:.4}),h=new R(new q(22,68,1.2),c);h.position.set(-t*.5-.2,34,0),this.megaBayGroup.add(h);const l=new R(new q(32,6.5,42),this.matTowerSteel);l.position.y=n+3.25,this.megaBayGroup.add(l);const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u.fillStyle="#1e293b",u.fillRect(0,0,512,128),u.fillStyle="#ffffff",u.font="bold 72px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("SPACEX",256,64);const f=new hr(d),g=new Zt({map:f}),v=new R(new an(28,7),g);v.position.set(0,n-8,e*.5+.4),this.megaBayGroup.add(v),this.group.add(this.megaBayGroup)}_buildLaunchControlCenter(){this.controlGroup=new Mt,this.controlGroup.position.set(-85,2.2,45);const t=new R(new q(36,12,28),this.matConcrete);t.position.y=6,t.castShadow=!0,this.controlGroup.add(t);const e=new R(new q(1.2,4.5,22),this.matGlass);e.position.set(18.2,8.5,0),this.controlGroup.add(e);const n=new R(new it(.8,1.2,4.5,8),this.matTowerSteel);n.position.set(-8,14.25,0);const i=new R(new ue(4.2,16,10,0,Math.PI*2,0,Math.PI*.4),this.matStainless);i.position.set(-8,18,0),i.rotation.x=.65,i.rotation.z=-.45,this.controlGroup.add(n,i);const o=new R(new ue(3.2,16,16),this.matCryoTank);o.position.set(8,15.2,6),this.controlGroup.add(o),this.group.add(this.controlGroup)}_buildFlareStack(){this.flareGroup=new Mt,this.flareGroup.position.set(85,2.2,-65);const t=38,e=new R(new it(.65,.95,t,10),this.matTowerSteel);e.position.y=t*.5,e.castShadow=!0,this.flareGroup.add(e);const n=new bc({color:4674921});for(let r=0;r<3;r++){const a=r/3*Math.PI*2,c=[new U(0,t*.75,0),new U(Math.cos(a)*18,0,Math.sin(a)*18)],h=new be().setFromPoints(c),l=new Kp(h,n);this.flareGroup.add(l)}const i=new qt(1.6,6.2,8),o=new Zt({color:16742144});this.flareMesh=new R(i,o),this.flareMesh.position.y=t+3.1,this.flareGroup.add(this.flareMesh),this.flareLight=new dr(16746496,4.5,45),this.flareLight.position.set(0,t+3.5,0),this.flareGroup.add(this.flareLight),this.group.add(this.flareGroup)}_buildPerimeterAndGate(){this.gateGroup=new Mt,this.gateGroup.position.set(0,2.2,-105);const t=new nt({color:1976635,roughness:.5}),e=new R(new q(2.5,9,2.5),t);e.position.set(-14,4.5,0);const n=new R(new q(2.5,9,2.5),t);n.position.set(14,4.5,0);const i=new R(new q(32,2.2,2.8),t);i.position.set(0,9.5,0),this.gateGroup.add(e,n,i);const o=document.createElement("canvas");o.width=1024,o.height=128;const r=o.getContext("2d");r.fillStyle="#0f172a",r.fillRect(0,0,1024,128),r.fillStyle="#38bdf8",r.font="bold 44px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("★ SPACEX STARBASE — GATEWAY TO MARS ★",512,64);const a=new hr(o),c=new R(new an(28,3.5),new Zt({map:a}));c.position.set(0,9.5,-1.45),c.rotation.y=Math.PI,this.gateGroup.add(c);const h=new R(new q(5.5,3.6,4.5),this.matConcrete);h.position.set(0,1.8,0),this.gateGroup.add(h);for(let l=0;l<6;l++){const d=l/6*Math.PI*2,u=Math.cos(d)*115,f=Math.sin(d)*95,g=new R(new it(.35,.65,34,8),this.matTowerSteel);g.position.set(u,17,f);const v=new R(new q(7.5,2.4,1.2),this.matTowerSteel);v.position.set(u,34,f);const m=new Xi(16776171,12,180,Math.PI*.35,.45);m.position.set(u,34,f),m.target.position.set(0,25,0),this.group.add(g,v,m,m.target)}this.group.add(this.gateGroup)}_registerColliders(){this.worldGen.registerCollider(this.baseX,this.baseZ,18,18,this.baseY+28),this.worldGen.registerCollider(this.baseX-18,this.baseZ-18,8,8,this.baseY+148),this.worldGen.registerCollider(this.baseX+85,this.baseZ+95,28,34,this.baseY+86),this.worldGen.registerCollider(this.baseX-75,this.baseZ-65,38,28,this.baseY+34),this.worldGen.registerCollider(this.baseX-85,this.baseZ+45,19,15,this.baseY+14)}update(t){if(this.flareMesh){this.flareTimer+=t*14;const e=1+Math.sin(this.flareTimer)*.22+Math.cos(this.flareTimer*2.3)*.15;this.flareMesh.scale.set(e,e*(1+Math.sin(this.flareTimer*1.5)*.25),e),this.flareLight&&(this.flareLight.intensity=3.5+Math.sin(this.flareTimer)*1.5)}if(this.aviationBeacons&&this.aviationBeacons.length>0){const e=Math.sin(performance.now()*.005)>.2?1:.15;for(const n of this.aviationBeacons)n.material.opacity=e}}isPlayerNearPad(t){return(t.x-this.baseX)**2+(t.z-this.baseZ)**2<1444&&Math.abs(t.y-this.baseY)<30}}class l0{constructor(t,e){this.scene=t,this.atmosphere=e,this.group=new Mt,this.scene.add(this.group),this.destinations={iss:new U(800,8500,1200),moon:new U(14e3,16200,-12e3),mars:new U(-22e3,22400,24e3)},this.moonRadius=1800,this.marsRadius=2200,this.rotTimer=0,this.solarPanels=[],this.starlinkSatellites=[],this._createMaterials(),this._buildOrbitalCurvedEarth(),this._buildDeepSpaceStarfieldAndNebula(),this._buildInternationalSpaceStation(),this._buildStarlinkTrain(),this._buildTheMoonAndLunarBase(),this._buildPlanetMarsAndMarsBaseAlpha()}_createMaterials(){this.matStationMetal=new nt({color:14870768,metalness:.85,roughness:.25}),this.matTruss=new nt({color:3359061,metalness:.7,roughness:.5}),this.matSolarCell=new nt({color:1920728,metalness:.75,roughness:.15,emissive:468840,emissiveIntensity:.35}),this.matGoldFoil=new nt({color:16096779,metalness:.95,roughness:.2}),this.matRadiator=new nt({color:16317180,metalness:.2,roughness:.8}),this.matCupolaGlass=new nt({color:165063,metalness:.95,roughness:.05,transparent:!0,opacity:.75}),this.matIonGlow=new Zt({color:3718648})}_buildOrbitalCurvedEarth(){this.earthGroup=new Mt;const t=45e3;this.earthGroup.position.set(0,-t+80,0);const e=new ue(t,64,48);this.earthMat=new Ne({uniforms:{uSunDir:{value:new U(.5,.7,.3).normalize()},uTime:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vViewDir = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        uniform vec3 uSunDir;
        uniform float uTime;

        float hash2(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise2D(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash2(i + vec2(0,0)), hash2(i + vec2(1,0)), f.x),
            mix(hash2(i + vec2(0,1)), hash2(i + vec2(1,1)), f.x), f.y
          );
        }

        void main() {
          vec3 n = normalize(vNormal);
          float sunDot = dot(n, uSunDir);
          float day = clamp(sunDot * 1.5 + 0.1, 0.0, 1.0);

          vec2 uv = vec2(
            atan(n.z, n.x) / 6.28318 + 0.5,
            asin(clamp(n.y, -1.0, 1.0)) / 3.14159 + 0.5
          );

          // Continent vs Ocean procedural landmass map
          float land = noise2D(uv * 18.0) * 0.6 + noise2D(uv * 48.0) * 0.4;
          bool isOcean = land < 0.48;

          vec3 dayOcean = vec3(0.04, 0.18, 0.42);
          vec3 dayLand = mix(vec3(0.12, 0.38, 0.18), vec3(0.55, 0.48, 0.32), smoothstep(0.48, 0.75, land));
          vec3 surfColor = isOcean ? dayOcean : dayLand;

          // Swirling White Cloud Weather Bands
          float clouds = noise2D(uv * 26.0 + vec2(uTime * 0.001, 0.0)) * 0.65 +
                         noise2D(uv * 64.0 - vec2(uTime * 0.0015, 0.0)) * 0.35;
          float cloudMask = smoothstep(0.52, 0.78, clouds);
          surfColor = mix(surfColor, vec3(0.95, 0.98, 1.0), cloudMask * 0.85);

          // Night side: glowing golden city lights on land
          vec3 cityLights = vec3(1.0, 0.82, 0.45) * pow(noise2D(uv * 120.0), 3.0) * 2.2;
          if (isOcean) cityLights = vec3(0.0);

          vec3 finalColor = mix(cityLights, surfColor * max(sunDot, 0.04), day);

          // Atmospheric Rayleigh Blue Edge Scattering Limb
          float fresnel = pow(1.0 - clamp(dot(vViewDir, n), 0.0, 1.0), 3.5);
          vec3 atmosLimb = vec3(0.15, 0.65, 1.0) * 2.4;
          finalColor += atmosLimb * fresnel * clamp(sunDot + 0.35, 0.1, 1.0);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}),this.earthMesh=new R(e,this.earthMat),this.earthGroup.add(this.earthMesh),this.group.add(this.earthGroup)}_buildDeepSpaceStarfieldAndNebula(){this.starsGroup=new Mt;const t=6e3,e=new be,n=new Float32Array(t*3),i=new Float32Array(t*3),o=new Dt;for(let a=0;a<t;a++){const c=Math.random(),h=Math.random(),l=c*2*Math.PI,d=Math.acos(2*h-1),u=42e3+Math.random()*8e3;n[a*3]=u*Math.sin(d)*Math.cos(l),n[a*3+1]=Math.abs(u*Math.cos(d))+1200,n[a*3+2]=u*Math.sin(d)*Math.sin(l);const f=Math.random();f<.25?o.setRGB(.75,.88,1):f<.65?o.setRGB(1,.98,.92):o.setRGB(1,.78,.55),i[a*3]=o.r,i[a*3+1]=o.g,i[a*3+2]=o.b}e.setAttribute("position",new xe(n,3)),e.setAttribute("color",new xe(i,3));const r=new Ec({size:42,vertexColors:!0,transparent:!0,opacity:.95});this.starPoints=new Tc(e,r),this.starsGroup.add(this.starPoints),this.group.add(this.starsGroup)}_buildInternationalSpaceStation(){this.issGroup=new Mt,this.issGroup.position.copy(this.destinations.iss);const t=new R(new q(108,3.2,3.2),this.matTruss);t.castShadow=!0,this.issGroup.add(t);const e=new R(new it(2.3,2.3,16,16),this.matStationMetal);e.rotation.x=Math.PI*.5,e.position.set(0,0,4);const n=new R(new it(2.2,2.2,14.5,16),this.matStationMetal);n.rotation.x=Math.PI*.5,n.position.set(5.5,0,10);const i=new R(new it(2.2,2.2,11.5,16),this.matStationMetal);i.position.set(-6.5,0,8);const o=new R(new it(2.1,2.4,18,16),this.matStationMetal);o.rotation.x=Math.PI*.5,o.position.set(0,0,-12);const r=new R(new ue(2,8,6,0,Math.PI*2,0,Math.PI*.5),this.matCupolaGlass);r.rotation.x=Math.PI,r.position.set(0,-2.4,6);const a=new R(new $i(1.6,.25,8,16),this.matTruss);a.position.set(0,0,16.5);const c=new R(new $i(1.4,.12,6,16),new Zt({color:2278750}));c.position.set(0,0,16.6),this.issGroup.add(e,n,i,o,r,a,c);for(let h of[-1,1])for(let l=0;l<2;l++){const d=new Mt,u=h*(26+l*22);d.position.set(u,0,0);const f=new R(new it(.8,.8,4,8),this.matGoldFoil);d.add(f);for(const g of[-1,1]){const v=new q(10.5,.25,34),m=new R(v,this.matSolarCell);m.position.set(0,0,g*18.5),d.add(m)}this.solarPanels.push(d),this.issGroup.add(d)}for(let h of[-1,1]){const l=new R(new q(12,.25,18),this.matRadiator);l.position.set(h*12,4.2,-6),l.rotation.x=.45,this.issGroup.add(l)}this.group.add(this.issGroup)}_buildStarlinkTrain(){this.starlinkGroup=new Mt,this.starlinkGroup.position.set(800,9100,1200);const t=10;for(let e=0;e<t;e++){const n=new Mt;n.position.set(e*38,0,e*14);const i=new R(new q(3.2,.35,1.8),this.matStationMetal),o=new R(new q(8.5,.12,1.8),this.matSolarCell);o.position.set(5.5,0,0);const r=new R(new it(.2,.35,.45,8),this.matIonGlow);r.position.set(-1.7,0,0),r.rotation.z=Math.PI*.5,n.add(i,o,r),this.starlinkSatellites.push(n),this.starlinkGroup.add(n)}this.group.add(this.starlinkGroup)}_buildTheMoonAndLunarBase(){this.moonGroup=new Mt,this.moonGroup.position.copy(this.destinations.moon);const t=new ue(this.moonRadius,64,48);this.moonMat=new Ne({uniforms:{uSunDir:{value:new U(.5,.7,.3)},uTime:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vLocalPos = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        void main() {
          vec3 p = vLocalPos;
          vec3 n = normalize(vNormal);

          // 1. Highland Anorthosite Regolith Noise
          float micro = noise3D(p * 45.0) * 0.55 + noise3D(p * 110.0) * 0.32 + noise3D(p * 240.0) * 0.13;
          vec3 highland = mix(vec3(0.74, 0.77, 0.81), vec3(0.92, 0.94, 0.97), micro);

          // 2. Basaltic Dark Maria Seas (Mare Tranquillitatis, Imbrium, Oceanus Procellarum, Serenitatis, Crisium)
          float maria = 0.0;
          maria += smoothstep(0.48, 0.0, length(p - vec3(-0.25, 0.35, 0.88))) * 0.85;  // Mare Imbrium
          maria += smoothstep(0.55, 0.0, length(p - vec3(-0.55, 0.15, 0.80))) * 0.80;  // Oceanus Procellarum
          maria += smoothstep(0.38, 0.0, length(p - vec3(0.18, 0.32, 0.92))) * 0.85;   // Mare Serenitatis
          maria += smoothstep(0.42, 0.0, length(p - vec3(0.35, 0.12, 0.90))) * 0.88;   // Mare Tranquillitatis
          maria += smoothstep(0.24, 0.0, length(p - vec3(0.68, 0.22, 0.68))) * 0.95;   // Mare Crisium
          maria += smoothstep(0.40, 0.0, length(p - vec3(-0.30, -0.35, 0.88))) * 0.82; // Mare Nubium

          float mariaNoise = noise3D(p * 12.0) * 0.65 + noise3D(p * 32.0) * 0.35;
          maria = clamp(maria * (0.65 + 0.7 * mariaNoise), 0.0, 1.0);
          vec3 mariaCol = mix(vec3(0.25, 0.26, 0.28), vec3(0.36, 0.38, 0.40), mariaNoise);
          vec3 albedo = mix(highland, mariaCol, maria * 0.88);

          // 3. Tycho Crater & Bright Radial Ejecta Ray System
          vec3 tychoCenter = normalize(vec3(-0.08, -0.72, 0.68));
          float dTycho = length(p - tychoCenter);
          vec3 tychoDir = normalize(p - tychoCenter);
          float tychoAngle = atan(tychoDir.y, tychoDir.x);
          float tychoRays = pow(abs(sin(tychoAngle * 7.0 + sin(tychoAngle * 14.0) * 0.5)), 5.0) *
                            smoothstep(0.95, 0.08, dTycho);
          float tychoRim = smoothstep(0.045, 0.0, abs(dTycho - 0.04));
          albedo = mix(albedo, vec3(0.98, 0.99, 1.0), (tychoRays * 0.45 + tychoRim * 0.85));

          // 4. Copernicus Crater with bright ejecta blankets
          vec3 copCenter = normalize(vec3(-0.25, 0.12, 0.95));
          float dCop = length(p - copCenter);
          float copBlanket = smoothstep(0.09, 0.0, dCop) * 0.45 + smoothstep(0.03, 0.0, abs(dCop - 0.03)) * 0.75;
          albedo = mix(albedo, vec3(0.96, 0.98, 1.0), copBlanket);

          // 5. Direct Solar Illumination with Lommel-Seeliger Retroreflective Lunar Scattering
          float NoL = max(dot(n, uSunDir), 0.0);
          vec3 v = normalize(-vWorldPos);
          float NoV = max(dot(n, v), 0.001);
          float lommelSeeliger = NoL / (NoL + NoV * 1.25);
          float day = smoothstep(-0.02, 0.08, NoL);

          // Subtle Earthshine on the night side (pale blue-gray reflected from Earth)
          vec3 earthshine = vec3(0.08, 0.12, 0.18) * 0.22;
          vec3 sunlit = albedo * (0.25 + 1.85 * lommelSeeliger);

          vec3 finalColor = mix(earthshine, sunlit, day);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}),this.moonSphere=new R(t,this.moonMat),this.moonGroup.add(this.moonSphere);const e=new Mt;e.position.set(0,this.moonRadius+2,0);const n=new Mt;n.position.set(0,0,0);const i=new R(new it(4.5,4.5,42,24),this.matStationMetal);i.position.y=25;const o=new R(new qt(4.5,14,24),this.matStationMetal);o.position.y=53;const r=new R(new q(16,8,.4),this.matGoldFoil);r.position.set(0,42,0);for(let l=0;l<4;l++){const d=l/4*Math.PI*2,u=new R(new it(.4,.6,12,8),this.matStationMetal);u.position.set(Math.cos(d)*6.5,5,Math.sin(d)*6.5),u.rotation.z=Math.cos(d)*.35,u.rotation.x=Math.sin(d)*.35;const f=new R(new it(1.6,1.8,.8,12),this.matTruss);f.position.set(Math.cos(d)*8.5,.4,Math.sin(d)*8.5),n.add(u,f)}n.add(i,o,r),e.add(n);for(let l=0;l<3;l++){const d=l/3*Math.PI*2+.4,u=38,f=new R(new ue(12,16,12,0,Math.PI*2,0,Math.PI*.5),this.matGoldFoil);f.position.set(Math.cos(d)*u,0,Math.sin(d)*u);const g=new R(new it(1.8,1.8,14,10),this.matStationMetal);g.rotation.z=Math.PI*.5,g.rotation.y=-d,g.position.set(Math.cos(d)*(u-12),1.8,Math.sin(d)*(u-12)),e.add(f,g)}const a=new R(new q(4.2,1.8,2.8),this.matStationMetal);a.position.set(24,1.5,18);const c=new R(new it(.08,.08,4.5,6),this.matStationMetal);c.position.set(16,2.25,12);const h=new R(new an(2.2,1.4),new Zt({color:3718648,side:Ye}));h.position.set(17.1,3.6,12),e.add(a,c,h),this.moonGroup.add(e),this.group.add(this.moonGroup)}_buildPlanetMarsAndMarsBaseAlpha(){this.marsGroup=new Mt,this.marsGroup.position.copy(this.destinations.mars);const t=new ue(this.marsRadius,64,48);this.marsMat=new Ne({uniforms:{uSunDir:{value:new U(.5,.7,.3)},uTime:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vLocalPos = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        void main() {
          vec3 p = vLocalPos;
          vec3 n = normalize(vNormal);

          // 1. Rust-Red Iron Oxide Martian Desert Regolith
          float fbm = noise3D(p * 24.0) * 0.55 + noise3D(p * 64.0) * 0.30 + noise3D(p * 140.0) * 0.15;
          vec3 redDesert = mix(vec3(0.78, 0.28, 0.12), vec3(0.92, 0.42, 0.20), fbm);

          // 2. Dark Basaltic Volcanic Plains (Syrtis Major & Acidalia Planitia)
          float darkPlains = smoothstep(0.42, 0.85, noise3D(p * 4.5) * 0.65 + noise3D(p * 12.0) * 0.35);
          vec3 darkBasalt = vec3(0.24, 0.14, 0.12);
          vec3 albedo = mix(redDesert, darkBasalt, darkPlains * 0.75);

          // 3. Valles Marineris Grand Canyon Rift (Deep equatorial tectonic canyon)
          float canyonDist = abs(p.y - 0.08) + abs(p.z - 0.95) * 0.35;
          if (canyonDist < 0.12 && p.x > -0.65 && p.x < 0.65) {
            float canyonDepth = 1.0 - smoothstep(0.0, 0.12, canyonDist);
            vec3 canyonShadow = vec3(0.22, 0.08, 0.06);
            albedo = mix(albedo, canyonShadow, canyonDepth * 0.85);
          }

          // 4. Olympus Mons Shield Volcano & Caldera
          vec3 olympusPos = normalize(vec3(-0.48, 0.32, 0.82));
          float dOlympus = length(p - olympusPos);
          if (dOlympus < 0.22) {
            float volcano = smoothstep(0.22, 0.04, dOlympus);
            float caldera = smoothstep(0.035, 0.0, abs(dOlympus - 0.035));
            albedo = mix(albedo, vec3(0.55, 0.18, 0.10), volcano * 0.6);
            albedo = mix(albedo, vec3(0.25, 0.08, 0.05), caldera * 0.8);
          }

          // 5. Brilliant White Polar Ice Caps (CO2 & Water Ice at North and South Poles)
          float northPole = smoothstep(0.78, 0.96, p.y);
          float southPole = smoothstep(0.82, 0.97, -p.y);
          vec3 polarIce = vec3(0.96, 0.98, 1.0);
          albedo = mix(albedo, polarIce, max(northPole, southPole));

          // 6. Direct Solar Lighting & Thin Atmospheric Limb Scattering
          float NoL = max(dot(n, uSunDir), 0.0);
          float day = smoothstep(-0.02, 0.12, NoL);
          vec3 litSurface = albedo * (0.15 + 1.65 * NoL);

          // Thin dusty salmon atmospheric limb
          vec3 v = normalize(-vWorldPos);
          float fresnel = pow(1.0 - clamp(dot(v, n), 0.0, 1.0), 3.0);
          vec3 atmosLimb = vec3(0.95, 0.55, 0.38) * fresnel * clamp(NoL + 0.3, 0.1, 1.0) * 1.5;

          vec3 finalColor = mix(vec3(0.02, 0.01, 0.01), litSurface + atmosLimb, day);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `}),this.marsSphere=new R(t,this.marsMat),this.marsGroup.add(this.marsSphere);const e=new Mt;e.position.set(0,this.marsRadius+2,0);for(let r of[-1,1]){const a=new U(r*45,0,0),c=new R(new it(18,20,1.8,6),this.matTruss);c.position.copy(a),e.add(c);const h=new Mt;h.position.set(a.x,a.y+26,a.z);const l=new R(new it(4.5,4.5,42,24),this.matStationMetal),d=new R(new qt(4.5,14,24),this.matStationMetal);d.position.y=28;for(const u of[-1,1]){const f=new R(new q(.3,10,4),this.matStationMetal);f.position.set(u*5.5,-12,0),h.add(f)}h.add(l,d),e.add(h)}const n=new Mt;n.position.set(0,0,55);const i=new R(new q(18,10,14),this.matStationMetal);i.position.y=5,n.add(i);for(let r=-1;r<=1;r+=2){const a=new R(new it(1.4,1.8,16,12),this.matTruss);a.position.set(r*6,8,-8),n.add(a)}for(let r=-1;r<=1;r+=2){const a=new R(new ue(5.5,14,14),this.matStationMetal);a.position.set(r*14,5.5,0),n.add(a)}e.add(n);const o=new nt({color:2278750,emissive:1409085,emissiveIntensity:.65,transparent:!0,opacity:.85});for(let r=0;r<4;r++){const a=r/4*Math.PI*2,c=42,h=new R(new ue(9,16,12,0,Math.PI*2,0,Math.PI*.5),o);h.position.set(Math.cos(a)*c,0,Math.sin(a)*c-35),e.add(h)}for(let r=0;r<2;r++){const a=new R(new q(4.5,2.2,3.2),this.matStationMetal);a.position.set((r-.5)*22,1.8,-15),e.add(a)}this.marsGroup.add(e),this.group.add(this.marsGroup)}update(t,e){this.rotTimer+=t,this.earthMat&&this.earthMat.uniforms&&(this.earthMat.uniforms.uTime.value=this.rotTimer,this.atmosphere&&this.earthMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection)),this.moonMat&&this.moonMat.uniforms&&this.atmosphere&&(this.moonMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection),this.moonMat.uniforms.uTime.value=this.rotTimer),this.marsMat&&this.marsMat.uniforms&&this.atmosphere&&(this.marsMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection),this.marsMat.uniforms.uTime.value=this.rotTimer);for(const i of this.solarPanels)i.rotation.y=this.rotTimer*.05;this.starlinkGroup&&(this.starlinkGroup.rotation.y+=t*.02),this.moonGroup&&(this.moonGroup.rotation.y+=t*.005),this.marsGroup&&(this.marsGroup.rotation.y+=t*.008);const n=e.y>1800;this.earthGroup.visible=n,this.starsGroup.visible=n||this.atmosphere&&this.atmosphere.sunDirection.y<.1}getNearestCelestialBody(t){const e=t.distanceTo(this.destinations.iss),n=t.distanceTo(this.destinations.moon),i=t.distanceTo(this.destinations.mars);return e<1200?{name:"ISS Space Station",dist:Math.round(e),code:"iss"}:n<4500?{name:"The Moon (Artemis Base)",dist:Math.round(n),code:"moon"}:i<5500?{name:"Planet Mars (Base Alpha)",dist:Math.round(i),code:"mars"}:t.y>6e3?{name:"Low Earth Orbit (LEO)",dist:Math.round(t.y),code:"leo"}:null}}class h0{constructor(t,e,n){this.scene=t,this.worldGen=e,this.atmosphere=n,this.landmarksGroup=new Mt,this.scene.add(this.landmarksGroup),this.foliageGroup=new Mt,this.scene.add(this.foliageGroup),this.densityMultiplier=1,this.totalInstancesRendered=0,this.buildingColliders=[],this.cityTowerMaterials=[],this.aviationBeacons=[],this.beaconTimer=0,this._createProceduralTextures(),this._buildBridges(),this._buildSolisMetropolis(),this._buildSolisAirport(),this._buildOakhavenVillage(),this._buildStormwatchLighthouse(),this._buildHeliosRuins(),this._buildValkyrieObservatory(),this.starbase=new c0(this.landmarksGroup,this.worldGen),this.spaceExploration=new l0(this.landmarksGroup,this.atmosphere),this._initStreamingFoliagePools(),this.lastFoliageCenter=new Yt(999999,999999)}_createProceduralTextures(){const t=X=>{const j=new hr(X);return j.wrapS=Zi,j.wrapT=Zi,j.anisotropy=8,j},e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d"),i=document.createElement("canvas");i.width=1024,i.height=1024;const o=i.getContext("2d");n.fillStyle="#09101d",n.fillRect(0,0,1024,1024),o.fillStyle="#000000",o.fillRect(0,0,1024,1024);const r=32,a=48,c=1024/r,h=1024/a;for(let X=0;X<a;X++){n.fillStyle="#1e293b",n.fillRect(0,X*h,1024,4);for(let j=0;j<r;j++){n.fillStyle="#334155",n.fillRect(j*c,X*h,3,h);const dt=Math.sin(X*23.7+j*71.3)*.5+.5,ut=j*c+3,Y=X*h+4,J=c-4,ct=h-5;if(dt>.42){const tt=dt>.72,rt=tt?"#fef3c7":"#93c5fd",pt=tt?"#ffd166":"#60a5fa";n.fillStyle=rt,n.fillRect(ut,Y,J,ct),o.fillStyle=pt,o.fillRect(ut,Y,J,ct),n.fillStyle="rgba(15, 23, 42, 0.35)";for(let mt=Y+3;mt<Y+ct;mt+=4)n.fillRect(ut,mt,J,1.2)}else n.fillStyle="#0b1626",n.fillRect(ut,Y,J,ct)}}this.texGlass=t(e),this.texGlassEmissive=t(i),this.skyscraperTexture=this.texGlass;const l=document.createElement("canvas");l.width=1024,l.height=1024;const d=l.getContext("2d"),u=document.createElement("canvas");u.width=1024,u.height=1024;const f=u.getContext("2d");d.fillStyle="#1c1510",d.fillRect(0,0,1024,1024),f.fillStyle="#000000",f.fillRect(0,0,1024,1024);const g=24,v=40,m=1024/g,p=1024/v;for(let X=0;X<v;X++){d.fillStyle="#3b2c20",d.fillRect(0,X*p,1024,6);for(let j=0;j<g;j++){d.fillStyle="#2d2016",d.fillRect(j*m,X*p,4,p);const dt=Math.sin(X*17.1+j*59.9)*.5+.5,ut=j*m+4,Y=X*p+6,J=m-6,ct=p-7;dt>.48?(d.fillStyle="#fed7aa",d.fillRect(ut,Y,J,ct),f.fillStyle="#f97316",f.fillRect(ut,Y,J,ct)):(d.fillStyle="#120d09",d.fillRect(ut,Y,J,ct))}}this.texBronze=t(l),this.texBronzeEmissive=t(u);const x=document.createElement("canvas");x.width=1024,x.height=1024;const _=x.getContext("2d"),M=document.createElement("canvas");M.width=1024,M.height=1024;const C=M.getContext("2d");_.fillStyle="#78716c",_.fillRect(0,0,1024,1024),C.fillStyle="#000000",C.fillRect(0,0,1024,1024);const S=20,b=36,P=1024/S,w=1024/b;for(let X=0;X<b;X++){_.fillStyle="#57534e",_.fillRect(0,X*w,1024,7);for(let j=0;j<S;j++){_.fillStyle="#44403c",_.fillRect(j*P,X*w,6,w);const dt=Math.sin(X*31.3+j*43.7)*.5+.5,ut=j*P+7,Y=X*w+8,J=P-10,ct=w-10;dt>.44?(_.fillStyle="#fef08a",_.fillRect(ut,Y,J,ct),C.fillStyle="#eab308",C.fillRect(ut,Y,J,ct)):(_.fillStyle="#1c1917",_.fillRect(ut,Y,J,ct))}}this.texArtDeco=t(x),this.texArtDecoEmissive=t(M);const y=document.createElement("canvas");y.width=1024,y.height=1024;const T=y.getContext("2d"),D=document.createElement("canvas");D.width=1024,D.height=1024;const I=D.getContext("2d");T.fillStyle="#cbd5e1",T.fillRect(0,0,1024,1024),I.fillStyle="#000000",I.fillRect(0,0,1024,1024);const k=18,N=30,V=1024/k,H=1024/N;for(let X=0;X<N;X++){T.fillStyle="#94a3b8",T.fillRect(0,X*H,1024,6);for(let j=0;j<k;j++){const dt=Math.sin(X*19.1+j*83.7)*.5+.5,ut=j*V+4,Y=X*H+7,J=V-7,ct=H-9;dt>.38?(T.fillStyle="#fde68a",T.fillRect(ut,Y,J,ct),I.fillStyle="#f59e0b",I.fillRect(ut,Y,J,ct)):(T.fillStyle="#1e293b",T.fillRect(ut,Y,J,ct)),T.fillStyle="rgba(56, 189, 248, 0.65)",T.fillRect(ut,Y+ct*.6,J,ct*.4)}}this.texRes=t(y),this.texResEmissive=t(D);const F=document.createElement("canvas");F.width=512,F.height=512;const W=F.getContext("2d");W.fillStyle="#1e293b",W.fillRect(0,0,512,512),W.strokeStyle="#eab308",W.lineWidth=14,W.beginPath(),W.arc(256,256,230,0,Math.PI*2),W.stroke(),W.strokeStyle="#f8fafc",W.lineWidth=12,W.beginPath(),W.arc(256,256,160,0,Math.PI*2),W.stroke(),W.fillStyle="#f8fafc",W.fillRect(175,150,32,212),W.fillRect(305,150,32,212),W.fillRect(175,240,162,32),this.texHelipad=t(F)}_buildBridges(){const t=new nt({color:13123115,roughness:.42,metalness:.68}),e=new nt({color:10133670,roughness:.75,metalness:.1}),n=new nt({color:1974308,roughness:.85,metalness:.05}),i=new nt({color:3356736,roughness:.35,metalness:.85});for(const o of ji){const r=new Mt,a=o.x2-o.x1,c=o.z2-o.z1,h=Math.hypot(a,c),l=(o.x1+o.x2)*.5,d=(o.z1+o.z2)*.5,u=Math.atan2(c,a);r.position.set(l,0,d),r.rotation.y=-u;const f=36,g=h/f,v=o.archHeight||4;for(let m=0;m<f;m++){const p=m/f,x=(m+1)/f,M=((p+x)*.5-.5)*h,C=o.deckHeight+Math.sin(p*Math.PI)*v,S=o.deckHeight+Math.sin(x*Math.PI)*v,b=(C+S)*.5,P=Math.atan2(S-C,g),w=new q(g+.35,2,o.width),y=new R(w,n);y.position.set(M,b-1,0),y.rotation.z=P,y.receiveShadow=!0,y.castShadow=!0,r.add(y);for(const T of[-1,1]){const D=new q(g+.2,1.35,.55),I=new R(D,o.type==="suspension"?t:e);I.position.set(M,b+.6,T*(o.width*.5-.35)),I.rotation.z=P,r.add(I)}}if(o.type==="suspension"){const m=[-h*.26,h*.26];for(const x of m){const _=new q(14,24,o.width+8),M=new R(_,e);M.position.set(x,2,0),r.add(M);for(const C of[-1,1]){const S=new q(4.2,o.towerHeight,4.2),b=new R(S,t);b.position.set(x,o.towerHeight*.5+4,C*(o.width*.5+1.2)),b.castShadow=!0,r.add(b)}for(const C of[28,62,92,o.towerHeight]){const S=new q(3.6,3.8,o.width+6.5),b=new R(S,t);b.position.set(x,C,0),r.add(b)}}const p=46;for(const x of[-1,1]){const _=x*(o.width*.5+1.2);for(let M=0;M<p;M++){const C=(M+.5)/p,S=(C-.5)*h,b=o.deckHeight+Math.sin(C*Math.PI)*v,P=Math.abs(C-.5);let w;if(P<=.26){const I=P/.26;w=o.deckHeight+v+6+I*I*(o.towerHeight-o.deckHeight-v)}else{const I=(P-.26)/.24;w=(o.towerHeight+4)*(1-I)+(o.deckHeight+2)*I}const y=Math.max(1,w-b),T=new it(.16,.16,y,6),D=new R(T,i);D.position.set(S,b+y*.5,_),r.add(D)}}}else for(let p=1;p<18;p++){const x=p/18,_=(x-.5)*h,C=Math.sin(x*Math.PI)*95+18,S=new q(3.2,C,o.width-2),b=new R(S,e);b.position.set(_,o.deckHeight-C*.5,0),r.add(b)}this.landmarksGroup.add(r)}}_buildSolisMetropolis(){const t=new Mt,e=new nt({color:14870768,map:this.texGlass,emissive:16770208,emissiveMap:this.texGlassEmissive,emissiveIntensity:.35,roughness:.12,metalness:.85}),n=new nt({color:15391176,map:this.texBronze,emissive:16758605,emissiveMap:this.texBronzeEmissive,emissiveIntensity:.35,roughness:.22,metalness:.78}),i=new nt({color:15197668,map:this.texArtDeco,emissive:16707722,emissiveMap:this.texArtDecoEmissive,emissiveIntensity:.28,roughness:.65,metalness:.15}),o=new nt({color:16317180,map:this.texRes,emissive:16638023,emissiveMap:this.texResEmissive,emissiveIntensity:.32,roughness:.35,metalness:.38});this.cityTowerMaterials=[e,n,i,o],this.cityTowerMaterial=e;const r=new nt({color:4674921,roughness:.7,metalness:.25}),a=new nt({color:1976635,roughness:.45,metalness:.8}),c=new nt({color:14870768,roughness:.15,metalness:.95}),h=new nt({color:9741240,roughness:.8}),l=new nt({color:3718648,roughness:.08,metalness:.92}),d=new nt({color:1976635,roughness:.4,metalness:.8}),u=new Zt({color:16707722}),f=new nt({color:14427686,roughness:.6}),g=new nt({map:this.texHelipad,roughness:.65,metalness:.15}),v=en;for(let m=-3;m<=3;m++)for(let p=-4;p<=3;p++){const x=(m+.5)*v,_=(p+.5)*v,M=Math.hypot(x,_);if(M>345)continue;const C=this.worldGen.getHeight(x,_);if(C<ke+4)continue;const S=new Mt;S.position.set(x,C,_);const b=new R(new q(52,.28,52),h);b.position.y=.14,b.receiveShadow=!0,S.add(b);for(const[k,N]of[[-25.2,-25.2],[25.2,-25.2],[-25.2,25.2],[25.2,25.2]]){const V=new R(new it(.12,.16,6.8,6),d);V.position.set(k,3.4,N),S.add(V);const H=new R(new q(1.4,.1,.1),d);H.position.set(k+(k>0?.6:-.6),6.7,N),S.add(H);const F=new R(new q(.45,.12,.25),u);F.position.set(k+(k>0?1.1:-1.1),6.62,N),S.add(F)}if(m===0&&(p===1||p===2)){const k=new R(new q(40,.34,40),new nt({color:3043136,roughness:.9}));k.position.y=.18,S.add(k);for(const[N,V]of[[-11,-11],[11,-11],[-11,11],[11,11]]){const H=new R(new it(1.2,1.2,.1,10),h);H.position.set(N,1,V);const F=new R(new qt(2.2,.9,8),f);F.position.set(N,2.5,V),S.add(H,F)}t.add(S);continue}const P=Math.abs(Math.sin(m*127.1+p*311.7)),w=Math.max(.3,1-M/370),y=32+Math.pow(w,1.35)*160*(.55+P*.7),T=22+P*8,D=22+P*19%1*8,I=Math.abs(m*3+p*7)%4;if(I===0){const k=new R(new q(T+2,8,D+2),l);k.position.y=4,S.add(k);for(const[F,W]of[[-(T*.48),-(D*.48)],[T*.48,-(D*.48)],[-(T*.48),D*.48],[T*.48,D*.48]]){const X=new R(new it(.45,.45,8,8),r);X.position.set(F,4,W),S.add(X)}const N=new R(new q(T,y,D),e);N.position.y=y*.5+8,N.castShadow=!0,N.receiveShadow=!0,S.add(N);for(const F of[-1,1])for(const W of[-1,1]){const X=new R(new q(.85,y,.85),a);X.position.set(F*(T*.5),y*.5+8,W*(D*.5)),S.add(X)}const V=new R(new q(T+.4,1.2,D+.4),a);V.position.y=y+8+.6,S.add(V);const H=new R(new q(T*.42,5.2,D*.42),r);H.position.y=y+8+2.6,S.add(H);for(const F of[-1,1]){const W=new R(new q(3.2,1.8,2.4),a);W.position.set(F*(T*.28),y+8+.9,0);const X=new R(new it(.8,.8,.2,12),c);X.position.set(F*(T*.28),y+8+1.9,0),S.add(W,X)}if(y>65){const W=new R(new it(.18,.55,26,8),c);W.position.y=y+8+5.2+26*.5,S.add(W);const X=new ue(.55,8,8),j=new Zt({color:15680580,transparent:!0,opacity:1}),dt=new R(X,j);dt.position.y=y+8+5.2+26,S.add(dt),this.aviationBeacons.push(dt)}}else if(I===1){const N=new R(new q(T+4,8,D+4),i);N.position.y=8*.5,S.add(N);const V=new R(new q(8.5,.6,3.2),a);V.position.set(0,4.2,(D+4)*.5+1.5),S.add(V);const H=y*.45,F=new R(new q(T,H,D),i);F.position.y=8+H*.5,F.castShadow=!0,S.add(F);const W=y*.3,X=T*.82,j=D*.82,dt=new R(new q(X,W,j),i);dt.position.y=8+H+W*.5,dt.castShadow=!0,S.add(dt);const ut=y*.17,Y=T*.64,J=D*.64,ct=new R(new q(Y,ut,J),i);ct.position.y=8+H+W+ut*.5,ct.castShadow=!0,S.add(ct);const tt=14,rt=new R(new qt(Y*.45,tt,4),i);rt.position.y=8+H+W+ut+tt*.5,rt.rotation.y=Math.PI*.25,S.add(rt);const pt=new R(new it(.12,.45,18,8),c);pt.position.y=8+H+W+ut+tt+9,S.add(pt);const mt=new R(new ue(.55,8,8),new Zt({color:15680580,transparent:!0,opacity:1}));mt.position.y=8+H+W+ut+tt+18,S.add(mt),this.aviationBeacons.push(mt)}else if(I===2){const k=T*.46,N=new R(new it(k+2,k+2,7.5,24),l);N.position.y=3.75,S.add(N);const V=new R(new it(k,k,y,28),o);V.position.y=y*.5+7.5,V.castShadow=!0,V.receiveShadow=!0,S.add(V);const H=12,F=Math.floor(y/H);for(let dt=1;dt<F;dt++){const ut=new R(new it(k+.65,k+.65,.35,28),r);ut.position.y=7.5+dt*H,S.add(ut)}const W=y+7.5+.3,X=new R(new it(k+.8,k+.8,.6,28),g);X.position.y=W,S.add(X);const j=new Zt({color:2278750});for(let dt=0;dt<8;dt++){const ut=dt/8*Math.PI*2,Y=new R(new ue(.25,6,6),j);Y.position.set(Math.cos(ut)*(k+.7),W+.35,Math.sin(ut)*(k+.7)),S.add(Y)}}else{const N=new R(new q(T+4.5,9.5,D+4.5),r);N.position.y=9.5*.5,N.castShadow=!0,S.add(N);const V=new R(new q(T+4.8,4.2,D*.75),l);V.position.y=2.4,S.add(V);const H=new R(new q(T,y,D),n);H.position.y=y*.5+9.5,H.castShadow=!0,H.receiveShadow=!0,S.add(H);const F=new R(new q(T*.28,y,D+.4),l);F.position.y=y*.5+9.5,S.add(F);const W=new R(new q(T+.2,1.4,D+.2),a);W.position.y=y+9.5+.7,S.add(W);const X=new R(new it(.6,.8,2.5,8),a);X.position.set(0,y+9.5+1.25,0);const j=new R(new ue(2.4,14,8,0,Math.PI*2,0,Math.PI*.38),c);if(j.position.set(0,y+9.5+3.2,0),j.rotation.x=.55,j.rotation.z=-.35,S.add(X,j),y>60){const dt=new R(new it(.15,.42,22,8),c);dt.position.set(T*.32,y+9.5+11,D*.32);const ut=new R(new ue(.55,8,8),new Zt({color:15680580,transparent:!0,opacity:1}));ut.position.set(T*.32,y+9.5+22,D*.32),S.add(dt,ut),this.aviationBeacons.push(ut)}}t.add(S),this.buildingColliders.push({x,z:_,radius:Math.max(T,D)*.55,topY:C+y}),this.worldGen.registerCollider(x,_,(T+4)*.5,(D+4)*.5,C+y+12)}this.landmarksGroup.add(t)}_buildSolisAirport(){const t=new Mt,e=this.worldGen.getHeight(620,165);t.position.set(620,e,165);const n=new nt({color:16317180,roughness:.4,metalness:.3}),i=new nt({color:3359061,roughness:.5,metalness:.6}),o=new nt({color:165063,roughness:.1,metalness:.9}),r=new nt({color:14427686,roughness:.5}),a=new R(new it(4.2,5.6,38,12),n);a.position.set(0,19,0),a.castShadow=!0,t.add(a),this.worldGen.registerCollider(620,165,6,6,e+46);const c=new R(new it(7.2,5.5,5.5,16),o);c.position.set(0,40.5,0),t.add(c);const h=new R(new it(7.8,7.2,1.2,16),i);h.position.set(0,43.8,0),t.add(h);for(let u=0;u<2;u++){const f=52+u*48,g=new Mt;g.position.set(f,0,0);const v=new R(new q(34,11,28),n);v.position.y=5.5,v.castShadow=!0,g.add(v),this.worldGen.registerCollider(620+f,165,17.5,14.5,e+18);const m=new R(new it(17,17,28,16,1,!1,0,Math.PI),i);m.rotation.z=Math.PI*.5,m.rotation.y=Math.PI*.5,m.scale.set(1,.35,1),m.position.y=11,g.add(m);const p=new R(new q(26,8.5,.4),i);p.position.set(0,4.25,14.1),g.add(p),t.add(g)}const l=new R(new it(.12,.15,8,8),i);l.position.set(-120,4,24);const d=new R(new qt(.65,3.2,10),r);d.rotation.z=Math.PI*.5,d.position.set(-118.4,7.6,24),t.add(l,d),this.landmarksGroup.add(t)}_buildOakhavenVillage(){const t=new Mt,e=1750,n=-1400,i=new nt({color:15195336,roughness:.85}),o=new nt({color:4861725,roughness:.8}),r=new nt({color:8138002,roughness:.75}),a=new nt({color:16765286,emissive:16756276,emissiveIntensity:1.4}),c=this.worldGen.getHeight(e,n-36),h=new Mt;h.position.set(e,c,n-36),this.worldGen.registerCollider(e,n-36,7.5,13.5,c+50);const l=new R(new q(14,12,26),i);l.position.y=6,l.castShadow=!0,h.add(l);const d=new R(new q(8,32,8),i);d.position.set(0,16,11),d.castShadow=!0,h.add(d);const u=new R(new qt(6.2,16,4),r);u.position.set(0,40,11),u.rotation.y=Math.PI*.25,h.add(u),t.add(h);for(let f=0;f<26;f++){const g=f<10?68:132,v=f/(f<10?10:16)*Math.PI*2+f*.3,m=e+Math.cos(v)*g,p=n+Math.sin(v)*g;if(this.worldGen.getRoadInfo(m,p).isRoad)continue;const x=this.worldGen.getHeight(m,p),_=new Mt;_.position.set(m,x,p),_.rotation.y=-v+Math.PI*.5,this.worldGen.registerCollider(m,p,6.2,6.2,x+12);const M=new R(new q(10,6.5,13),i);M.position.y=3.25,M.castShadow=!0,_.add(M);const C=new R(new qt(9.6,5.5,4),r);C.position.y=9,C.rotation.y=Math.PI*.25,C.scale.set(1,1,1.25),C.castShadow=!0,_.add(C);const S=new R(new q(10.3,1.6,4),a);S.position.y=3.4,_.add(S);const b=new R(new q(10.4,.5,13.4),o);b.position.y=5.8,_.add(b),t.add(_)}this.landmarksGroup.add(t)}_buildStormwatchLighthouse(){const n=this.worldGen.getHeight(1550,1950);this.worldGen.registerCollider(1550,1950,5.8,5.8,n+46);const i=new Mt;i.position.set(1550,n,1950);const o=new nt({color:16317180,roughness:.5}),r=new nt({color:14427686,roughness:.5}),a=new nt({color:1976635,roughness:.4,metalness:.7}),c=new Zt({color:16776171});for(let m=0;m<6;m++){const p=5.4-m*.35,x=5.4-(m+1)*.35,_=new R(new it(x,p,6,20),m%2===0?o:r);_.position.y=m*6+3,_.castShadow=!0,i.add(_)}const h=new R(new it(4.4,4.4,1.2,24),a);h.position.y=36.5,i.add(h);const l=new R(new it(2.8,2.8,4.5,16),c);l.position.y=39.2,i.add(l);const d=new R(new qt(3.4,3.8,20),r);d.position.y=43,i.add(d),this.lighthousePivot=new Mt,this.lighthousePivot.position.y=39.2;const u=new qt(28,240,24,1,!0);u.translate(0,-120,0),u.rotateX(-Math.PI*.5);const f=new Zt({color:16774064,transparent:!0,opacity:.18,side:Ye,depthWrite:!1,blending:So}),g=new R(u,f),v=new R(u,f);v.rotation.y=Math.PI,this.lighthousePivot.add(g,v),i.add(this.lighthousePivot),this.landmarksGroup.add(i)}_buildHeliosRuins(){const n=this.worldGen.getHeight(-2950,2300),i=new Mt;i.position.set(-2950,n,2300);const o=new nt({color:15125682,roughness:.85}),r=new nt({color:16498468,roughness:.25,metalness:.85}),a=new Zt({color:16739072}),c=new R(new q(58,2.5,42),o);c.position.y=1.25,c.receiveShadow=!0,i.add(c);const h=new R(new q(52,2,36),o);h.position.y=3.2,h.receiveShadow=!0,i.add(h);for(let f=-22;f<=22;f+=8.8)for(let g=-14;g<=14;g+=7){if(Math.abs(f)<20&&Math.abs(g)<12)continue;const m=Math.sin(f*13.7+g*29.3)>-.35?14:5.5+Math.abs(Math.cos(f*g))*5,p=new R(new it(.95,1.15,m,14),o);p.position.set(f,4.2+m*.5,g),p.castShadow=!0,i.add(p)}const l=new R(new q(46,2.2,2.8),o);l.position.set(0,19.2,-14),i.add(l);const d=new R(new it(1.1,2.2,32,4),o);d.position.set(38,16,0),d.rotation.y=Math.PI*.25,d.castShadow=!0,i.add(d);const u=new R(new qt(1.55,3.6,4),r);u.position.set(38,33.8,0),u.rotation.y=Math.PI*.25,i.add(u);for(const f of[-8,8]){const g=new R(new it(1.4,.8,3.2,10),o);g.position.set(28,2.5,f),i.add(g);const v=new R(new ue(1.1,10,10),a);v.position.set(28,4.5,f),i.add(v)}this.landmarksGroup.add(i)}_buildValkyrieObservatory(){const n=this.worldGen.getHeight(3600,-3400);this.worldGen.registerCollider(3600,-3400,15.5,15.5,n+30);const i=new Mt;i.position.set(3600,n,-3400);const o=new nt({color:15857145,roughness:.3,metalness:.5}),r=new nt({color:3359061,roughness:.4,metalness:.7}),a=new nt({color:1920728,roughness:.2,metalness:.8}),c=new R(new it(14,15,14,28),o);c.position.y=7,c.castShadow=!0,i.add(c);const h=new R(new ue(14.2,28,16,0,Math.PI*2,0,Math.PI*.52),o);h.position.y=14,h.castShadow=!0,i.add(h);const l=new R(new q(4.2,14,15),r);l.position.set(0,19,4),l.rotation.x=-.35,i.add(l);const d=new R(new it(2.2,3.2,12,12),r);d.position.set(-28,6,-14),i.add(d);const u=new R(new ue(11,20,12,0,Math.PI*2,0,.9),o);u.position.set(-28,16,-14),u.rotation.x=Math.PI-.5,i.add(u);for(let f=-2;f<=2;f++){const g=new R(new q(8,.3,4.5),a);g.position.set(24,3.5,f*7),g.rotation.z=.35,i.add(g)}this.landmarksGroup.add(i)}_initStreamingFoliagePools(){const t=new it(.48,.95,14,7).toNonIndexed();t.translate(0,5.5,0);const e=new qt(5.2,7.5,8).toNonIndexed();e.translate(0,11,0);const n=new qt(3.8,6.2,8).toNonIndexed();n.translate(0,15.5,0);const i=new qt(2.1,5,7).toNonIndexed();i.translate(0,19.5,0);const o=Gn([t,e,n,i]),r=new nt({color:1721634,roughness:.82}),a=new it(.72,1.35,8.5,8).toNonIndexed();a.translate(0,3.8,0);const c=new it(.35,.55,4.8,6).toNonIndexed();c.rotateZ(.42),c.translate(1.6,7,.3);const h=new it(.32,.5,4.5,6).toNonIndexed();h.rotateZ(-.4),h.translate(-1.5,6.8,-.3);const l=new vi(6.4,2).toNonIndexed();l.scale(1.35,.92,1.28),l.translate(0,12,0);const d=Gn([a,c,h,l]),u=new nt({color:2975780,roughness:.78}),f=new it(.44,.72,7.5,6).toNonIndexed();f.translate(0,3,0);const g=new it(.25,.38,5.2,6).toNonIndexed();g.rotateZ(.55),g.translate(1.8,7.2,.2);const v=new it(5.2,3.8,1.2,8).toNonIndexed();v.translate(1.2,10.2,.2);const m=Gn([f,g,v]),p=new nt({color:7239737,roughness:.85}),x=new it(.36,.75,12,6).toNonIndexed();x.translate(0,4.5,0);const _=new it(.14,.28,4.8,5).toNonIndexed();_.rotateZ(.68),_.translate(1.8,8,.3);const M=new it(.12,.24,4.2,5).toNonIndexed();M.rotateZ(-.72),M.translate(-1.6,8.8,-.4);const C=Gn([x,_,M]),S=new nt({color:5920336,roughness:.92}),b=new it(.15,.26,3.6,6).toNonIndexed();b.translate(0,1.4,0);const P=new vi(1.6,1).toNonIndexed();P.scale(.9,1.3,.9),P.translate(0,3.8,0);const w=Gn([b,P]),y=new nt({color:4761662,roughness:.74}),T=new vi(1.8,1).toNonIndexed();T.scale(1.4,.75,1.25),T.translate(0,.9,0);const D=new nt({color:2514484,roughness:.8}),I=new an(1.8,1.2).toNonIndexed();I.translate(0,.6,0);const k=new an(1.8,1.2).toNonIndexed();k.rotateY(Math.PI*.5),k.translate(0,.6,0);const N=Gn([I,k]),V=new nt({color:3843669,roughness:.72,side:Ye}),H=new it(.38,.5,7,7).toNonIndexed();H.translate(0,2.8,0);const F=new it(.26,.32,2.5,6).toNonIndexed();F.translate(.95,4,0);const W=Gn([H,F]),X=new nt({color:4681776,roughness:.76}),j=new vi(1.6,1);j.scale(1.35,.8,1.15);const dt=new nt({color:6843506,roughness:.9});this.maxPines=1600,this.maxOaks=1200,this.maxDry=500,this.maxDead=200,this.maxBaby=600,this.maxBushes=1500,this.maxGrass=3500,this.maxDesert=350,this.maxRocks=800,this.pineInstanced=new mn(o,r,this.maxPines),this.oakInstanced=new mn(d,u,this.maxOaks),this.dryInstanced=new mn(m,p,this.maxDry),this.deadInstanced=new mn(C,S,this.maxDead),this.babyInstanced=new mn(w,y,this.maxBaby),this.bushInstanced=new mn(T,D,this.maxBushes),this.grassInstanced=new mn(N,V,this.maxGrass),this.desertInstanced=new mn(W,X,this.maxDesert),this.rockInstanced=new mn(j,dt,this.maxRocks),this.foliageMeshes=[this.pineInstanced,this.oakInstanced,this.dryInstanced,this.deadInstanced,this.babyInstanced,this.bushInstanced,this.grassInstanced,this.desertInstanced,this.rockInstanced];for(const ut of this.foliageMeshes)ut.castShadow=ut===this.pineInstanced||ut===this.oakInstanced,ut.receiveShadow=!0,ut.frustumCulled=!1,this.foliageGroup.add(ut)}_rebuildFoliageWindow(t,e){this.lastFoliageCenter.set(t,e);const n=new ge,i=new Dt,o=this.worldGen.noise;let r=0,a=0,c=0,h=0,l=0,d=0,u=0,f=0,g=0;const v=820*Math.sqrt(this.densityMultiplier),m=28,p=Math.floor((t-v)/m)*m,x=Math.ceil((t+v)/m)*m,_=Math.floor((e-v)/m)*m,M=Math.ceil((e+v)/m)*m;for(let C=_;C<=M;C+=m)for(let S=p;S<=x;S+=m){if((S-t)*(S-t)+(C-e)*(C-e)>v*v)continue;const P=o.hash2D(S*.13,C*.13),w=o.hash2D(S*.29+19.1,C*.29+47.3),y=o.hash2D(S*.47+73.5,C*.47+109.2),T=S+(P-.5)*m*.85,D=C+(w-.5)*m*.85,I=Math.hypot(T-t,D-e);if(I>v)continue;const k=1-le(v*.84,v,I);if(k<.05)continue;const N=this.worldGen.getTerrainData(T,D);if(N.height<ke+1.8||N.cityWeight>.15||T>330&&T<1200&&Math.abs(D-205)<95||Math.hypot(T-1750,D+1400)<165||Math.hypot(T+2950,D-2300)<85||Math.hypot(T-1050,D-880)<260)continue;const V=Math.abs(this.worldGen.getHeight(T+4,D)-N.height),H=Math.abs(this.worldGen.getHeight(T,D+4)-N.height),F=V>2.2||H>2.2;if(!(N.roadMask>.35)){if(N.roadMask>.05){if(u<this.maxGrass&&y>.25){const W=(.8+w*.4)*k;n.position.set(T,N.height-.12,D),n.rotation.set(0,P*Math.PI*2,0),n.scale.set(W,W*(.8+y*.3),W),n.updateMatrix(),this.grassInstanced.setMatrixAt(u,n.matrix),i.setHSL(.28+(P-.5)*.04,.6,.3+w*.08),this.grassInstanced.setColorAt(u,i),u++}continue}if(g<this.maxRocks&&(P>.9||N.canyonZone>.4&&P>.75||N.volcanicWeight>.3&&P>.7||F&&P>.72)){const W=(.75+w*1.3)*k;if(n.position.set(T,N.height-.4*W,D),n.rotation.set(P*.4,w*Math.PI*2,y*.4),n.scale.set(W,W*(.75+P*.4),W),n.updateMatrix(),this.rockInstanced.setMatrixAt(g,n.matrix),N.canyonZone>.4)i.setRGB(.68,.29,.16);else if(N.volcanicWeight>.3)i.setRGB(.18,.16,.17);else{const X=.42+P*.16;i.setRGB(X,X,X+.02)}this.rockInstanced.setColorAt(g,i),g++;continue}if(N.desertZone>.38||N.canyonZone>.38){const W=Math.hypot(T+2780,D-2180),X=W>42&&W<175;if(f<this.maxDesert&&(X||P>.8)){const j=(X?1.3:.95)*(.75+w*.4)*k;n.position.set(T,N.height-.35,D),n.rotation.set(0,w*Math.PI*2,0),n.scale.set(j,j,j),n.updateMatrix(),this.desertInstanced.setMatrixAt(f,n.matrix),f++}continue}if(N.height<480&&N.moisture>.16&&!F){const W=w*Math.PI*2,X=(.85+P*.5)*k;if(P>.38||N.moisture>.42)if(P>.95&&h<this.maxDead)n.position.set(T,N.height-.45,D),n.rotation.set(y*.12-.06,W,P*.12-.06),n.scale.set(X*.95,X*(.9+w*.25),X*.95),n.updateMatrix(),this.deadInstanced.setMatrixAt(h,n.matrix),i.setHSL(.08,.06,.38+y*.1),this.deadInstanced.setColorAt(h,i),h++;else if((N.moisture<.36||N.desertZone>.18||N.canyonZone>.18)&&c<this.maxDry)n.position.set(T,N.height-.4,D),n.rotation.set(0,W,0),n.scale.set(X*1.05,X*(.92+w*.25),X*1.05),n.updateMatrix(),this.dryInstanced.setMatrixAt(c,n.matrix),i.setHSL(.2+(P-.5)*.04,.4,.3+y*.08),this.dryInstanced.setColorAt(c,i),c++;else if(y<.18&&N.moisture>.32&&l<this.maxBaby){n.position.set(T,N.height-.22,D),n.rotation.set(0,W,0);const j=(.7+w*.35)*k;n.scale.set(j,j,j),n.updateMatrix(),this.babyInstanced.setMatrixAt(l,n.matrix),i.setHSL(.32+(P-.5)*.04,.6,.36+w*.08),this.babyInstanced.setColorAt(l,i),l++}else(N.height>95||N.moisture>.46&&w>.5)&&r<this.maxPines?(n.position.set(T,N.height-.5,D),n.rotation.set(0,W,0),n.scale.set(X*1.1,X*(1.05+y*.4),X*1.1),n.updateMatrix(),this.pineInstanced.setMatrixAt(r,n.matrix),i.setHSL(.35+(P-.5)*.03,.52,.2+y*.07),this.pineInstanced.setColorAt(r,i),r++):a<this.maxOaks&&N.moisture>.28&&(n.position.set(T,N.height-.45,D),n.rotation.set(0,W,0),n.scale.set(X*1.15,X*(.95+y*.3),X*1.15),n.updateMatrix(),this.oakInstanced.setMatrixAt(a,n.matrix),i.setHSL(.28+(P-.5)*.05,.56,.24+w*.08),this.oakInstanced.setColorAt(a,i),a++);else if(w>.54&&d<this.maxBushes){const j=(.75+y*.5)*k;n.position.set(T,N.height-.2,D),n.rotation.set(0,y*Math.PI*2,0),n.scale.set(j*1.15,j*.85,j*1.1),n.updateMatrix(),this.bushInstanced.setMatrixAt(d,n.matrix),i.setHSL(.3+(w-.5)*.04,.55,.24+y*.07),this.bushInstanced.setColorAt(d,i),d++}else if(u<this.maxGrass&&y>.38){const j=(.8+P*.4)*k;n.position.set(T,N.height-.12,D),n.rotation.set(0,w*Math.PI*2,0),n.scale.set(j,j*(.85+y*.3),j),n.updateMatrix(),this.grassInstanced.setMatrixAt(u,n.matrix),i.setHSL(.29+(P-.5)*.05,.6,.28+w*.08),this.grassInstanced.setColorAt(u,i),u++}}}}this.pineInstanced.count=r,this.oakInstanced.count=a,this.dryInstanced.count=c,this.deadInstanced.count=h,this.babyInstanced.count=l,this.bushInstanced.count=d,this.grassInstanced.count=u,this.desertInstanced.count=f,this.rockInstanced.count=g;for(const C of this.foliageMeshes)C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0);this.totalInstancesRendered=r+a+c+h+l+d+u+f+g}update(t,e){if(this.lighthousePivot&&(this.lighthousePivot.rotation.y+=t*.85),this.cityTowerMaterials&&this.cityTowerMaterials.length>0){const i=le(.22,-.1,this.atmosphere.sunDirection.y);for(const o of this.cityTowerMaterials)o.emissiveIntensity=.15+i*1.45}else if(this.cityTowerMaterial){const i=le(.22,-.1,this.atmosphere.sunDirection.y);this.cityTowerMaterial.emissiveIntensity=.15+i*1.35}if(this.aviationBeacons&&this.aviationBeacons.length>0){this.beaconTimer=(this.beaconTimer||0)+t;const i=Math.sin(this.beaconTimer*4.5)>.15?1:.12;for(const o of this.aviationBeacons)o.material.opacity=i}this.starbase&&this.starbase.update(t),this.spaceExploration&&this.spaceExploration.update(t,e),Math.hypot(e.x-this.lastFoliageCenter.x,e.z-this.lastFoliageCenter.y)>100&&this._rebuildFoliageWindow(e.x,e.z)}forceRefreshFoliage(t){this.lastFoliageCenter.set(999999,999999),this._rebuildFoliageWindow(t.x,t.z)}}const d0=[15843965,14724201,13010498,9262372,16767916],u0=[1976635,3359061,1981066,2565930,4144966,988970],f0=[2450411,14427686,366185,14251782,8141549,561586,12456508],p0=[1976635,3359061,4674921,2696484,1516884],m0=[1579035,4137748,7421714,13273604,5395035],Va=["Elena","Marcus","David","Sofia","Lucas","Hannah","Liam","Maya","Noah","Chloe","Julian","Aria","Ethan","Zoe","Gabriel","Nora","Adrian","Clara","Victor","Leah","Samuel","Eva","Daniel","Amara"],Wa=["Vance","Reed","Chen","Patel","Meyer","Kowalski","Silva","Lindqvist","Rossi","Moreau","Tanaka","Okafor","Bergstrom","Navarro","Keller","Brooks"];function Rn(s={}){const{role:t="explorer",seed:e=.5}=s,n=(tt,rt=0)=>tt[Math.floor((e*997+rt)%1*tt.length)],i=n(d0,.1),o=n(m0,.2);let r=n(f0,.3),a=n(p0,.4);t==="commuter"?(r=n(u0,.3),a=r):t==="executive"?(r=1579035,a=1579035):t==="officer"?(r=1976635,a=988970):t==="medic"?(r=14427686,a=1981066):t==="surveyor"?(r=16347926,a=3359061):t==="sweeper"?(r=15357964,a=10105874):t==="barista"?(r=413243,a=1976635):t==="courier"?(r=165063,a=1976635):t==="tourist"?(r=3718648,a=13941142):t==="student"?(r=6514417,a=3359061):t==="worker"?(r=15381256,a=1981066):t==="explorer"&&(r=1920728,a=1976635);const c=new nt({color:i,roughness:.55}),h=new nt({color:o,roughness:.75}),l=new nt({color:r,roughness:.65}),d=new nt({color:a,roughness:.75}),u=new nt({color:1579035,roughness:.6}),f=new nt({color:15857145,roughness:.7}),g=new nt({color:16317180,roughness:.5}),v=new nt({color:14870768,metalness:.88,roughness:.2}),m=new nt({color:1841431,roughness:.7}),p=new nt({color:592139,roughness:.1,metalness:.95}),x=new Mt,_=new Mt;_.position.y=.94,x.add(_);const M=new R(new it(.155,.145,.18,12),d);M.scale.set(1.15,1,.78),M.castShadow=!0,_.add(M);const C=new R(new it(.162,.158,.045,12),m);C.position.y=.08,C.scale.set(1.16,1,.79);const S=new R(new q(.065,.055,.015),v);S.position.set(0,.08,-.125),_.add(C,S);const b=new Mt;b.position.y=.06,_.add(b);const P=new R(new it(.175,.15,.32,12),l);P.position.y=.16,P.scale.set(1.18,1,.74),P.castShadow=!0,b.add(P);const w=new R(new it(.195,.175,.32,12),l);w.position.y=.44,w.scale.set(1.22,1,.76),w.castShadow=!0,b.add(w);const y=new R(new it(.088,.095,.11,10),g);y.position.set(0,.58,-.02),b.add(y);const T=new q(.075,.22,.02),D=new R(T,l);D.position.set(-.065,.48,-.155),D.rotation.z=-.18;const I=new R(T,l);if(I.position.set(.065,.48,-.155),I.rotation.z=.18,b.add(D,I),t==="explorer"||t==="hiker"||t==="student"){const tt=t==="explorer"?15357964:t==="student"?5195493:1409085,rt=new nt({color:tt,roughness:.6}),pt=new R(new q(.32,.46,.19),rt);if(pt.position.set(0,.38,.19),pt.castShadow=!0,b.add(pt),t==="hiker"){const mt=new R(new it(.06,.06,.34,10),new nt({color:16436245,roughness:.7}));mt.rotation.z=Math.PI*.5,mt.position.set(0,.64,.19),b.add(mt)}}else if(t==="courier"){const tt=new nt({color:1579035,roughness:.5}),rt=new R(new q(.34,.28,.16),tt);rt.position.set(.12,.26,.14),rt.rotation.z=.22,rt.castShadow=!0,b.add(rt)}else if(t==="officer"||t==="medic"){const tt=t==="medic"?new nt({color:14427686}):new nt({color:1579035,roughness:.8}),rt=new R(new q(.12,.14,.1),tt);if(rt.position.set(.22,.04,0),_.add(rt),t==="medic"){const pt=new Zt({color:16777215}),mt=new R(new q(.05,.15,.01),pt),Kt=new R(new q(.15,.05,.01),pt);mt.position.set(0,.44,-.19),Kt.position.set(0,.44,-.19),b.add(mt,Kt)}}else if(t==="worker"||t==="surveyor"||t==="sweeper"){const tt=new Zt({color:14870768}),rt=new R(new it(.198,.182,.05,12),tt);rt.position.y=.34,rt.scale.set(1.23,1,.77),b.add(rt)}const k=new Mt;k.position.y=.62,b.add(k);const N=new R(new it(.06,.07,.12,10),c);N.position.y=.04,k.add(N);const V=new R(new q(.18,.2,.19),c);V.position.set(0,.18,0),V.castShadow=!0,k.add(V);const H=new R(new q(.145,.085,.13),c);H.position.set(0,.12,-.04),k.add(H);for(const tt of[-.095,.095]){const rt=new R(new q(.022,.055,.035),c);rt.position.set(tt,.175,-.01),k.add(rt)}const F=new R(new q(.145,.026,.04),c);F.position.set(0,.208,-.1);const W=new R(new q(.028,.055,.032),c);if(W.position.set(0,.172,-.116),k.add(F,W),t==="commuter"||t==="executive"||t==="officer"||t==="tourist"||t==="explorer"||e>.4){const tt=new R(new q(.155,.042,.026),p);tt.position.set(0,.196,-.112),k.add(tt)}else{const tt=new Zt({color:1976635});for(const rt of[-.045,.045]){const pt=new R(new q(.032,.018,.01),tt);pt.position.set(rt,.196,-.102),k.add(pt)}}if(t==="worker"||t==="surveyor"){const tt=t==="surveyor"?16777215:16436245,rt=new nt({color:tt,roughness:.3}),pt=new R(new q(.22,.09,.24),rt);pt.position.set(0,.28,-.01),k.add(pt)}else if(t==="officer"){const tt=new nt({color:988970,roughness:.4}),rt=new R(new q(.21,.075,.22),tt);rt.position.set(0,.28,-.01);const pt=new R(new q(.18,.02,.11),tt);pt.position.set(0,.24,-.13),pt.rotation.x=.2;const mt=new R(new q(.04,.04,.02),new Zt({color:16436245}));mt.position.set(0,.28,-.12),k.add(rt,pt,mt)}else if(t==="tourist"){const tt=new nt({color:16707722,roughness:.8}),rt=new R(new it(.24,.24,.02,14),tt);rt.position.set(0,.26,0);const pt=new R(new it(.13,.14,.08,12),tt);pt.position.set(0,.3,0),k.add(rt,pt)}else{const tt=new R(new q(.19,.08,.2),h);tt.position.set(0,.27,.01);const rt=new R(new q(.185,.14,.07),h);rt.position.set(0,.2,.08),k.add(tt,rt)}const j=tt=>{const rt=new Mt;rt.position.set(tt*.245,.55,0),b.add(rt);const pt=new R(new it(.052,.044,.29,10),l);pt.position.y=-.13,pt.castShadow=!0,rt.add(pt);const mt=new Mt;mt.position.y=-.28,rt.add(mt);const Kt=t==="jogger"||t==="worker"?c:l,Ft=new R(new it(.042,.035,.26,10),Kt);Ft.position.y=-.12,Ft.castShadow=!0,mt.add(Ft);const ee=new R(new ue(.038,8,8),c);if(ee.position.y=-.26,ee.scale.set(.8,1.2,.6),mt.add(ee),(t==="commuter"||t==="executive")&&tt===1&&e>.25){const B=new nt({color:t==="executive"?1579035:4528643,roughness:.5}),ne=new R(new q(.08,.28,.38),B);ne.position.set(.05,-.36,0),mt.add(ne)}else if(t==="hiker"){const B=new nt({color:9741240,metalness:.8,roughness:.3}),ne=new R(new it(.01,.008,1.15,6),B);ne.position.set(0,-.42,-.08),ne.rotation.x=.22,mt.add(ne)}else if(t==="barista"&&tt===1){const B=new nt({color:16777215,roughness:.3}),ne=new R(new it(.04,.03,.11,8),B);ne.position.set(0,-.32,-.08),mt.add(ne)}else if(t==="surveyor"&&tt===1){const B=new nt({color:7877903,roughness:.6}),ne=new R(new q(.02,.28,.22),B);ne.position.set(.06,-.34,0),mt.add(ne)}else if(t==="sweeper"&&tt===1){const B=new nt({color:14251782,roughness:.6}),ne=new R(new it(.015,.015,1.4,6),B);ne.position.set(0,-.35,-.05);const Xt=new R(new q(.08,.16,.32),new nt({color:7421714}));Xt.position.set(0,-1,-.05),mt.add(ne,Xt)}return{shoulder:rt,elbow:mt}},dt=j(-1),ut=j(1),Y=tt=>{const rt=new Mt;rt.position.set(tt*.105,-.04,0),_.add(rt);const pt=new R(new it(.074,.058,.44,10),d);pt.position.y=-.21,pt.castShadow=!0,rt.add(pt);const mt=new Mt;mt.position.y=-.43,rt.add(mt);const Kt=new R(new it(.056,.042,.43,10),d);Kt.position.y=-.21,Kt.castShadow=!0,mt.add(Kt);const Ft=new Mt;Ft.position.y=-.43,mt.add(Ft);const ee=new R(new q(.098,.065,.23),u);ee.position.set(0,.005,-.045),ee.castShadow=!0;const B=new R(new q(.104,.032,.245),f);return B.position.set(0,-.032,-.045),B.castShadow=!0,Ft.add(ee,B),{hip:rt,knee:mt,ankle:Ft}},J=Y(-1),ct=Y(1);return{root:x,pelvis:_,spine:b,neck:k,leftArm:dt,rightArm:ut,leftLeg:J,rightLeg:ct,phase:e*Math.PI*2}}function Ac(s,t,e,n={}){const{slopePitch:i=0,isSwimming:o=!1,isHiker:r=!1,idleGesture:a=0}=n;if(o){s.pelvis.position.y=.55,s.spine.rotation.x=-1.25,s.phase+=e*5;const c=Math.sin(s.phase);s.leftArm.shoulder.rotation.x=c*1.2-1.4,s.rightArm.shoulder.rotation.x=-c*1.2-1.4,s.leftLeg.hip.rotation.x=-c*.45,s.rightLeg.hip.rotation.x=c*.45,s.leftLeg.knee.rotation.x=.25,s.rightLeg.knee.rotation.x=.25;return}if(t>.15){const c=t>3.2,h=c?3.2+t*.52:2.4+t*1.35;s.phase=(s.phase+e*h)%(Math.PI*2);const l=s.phase,d=c?ft(.65+(t-3.2)*.04,.65,1.05):ft(t*.24,.18,.56),u=Math.sin(l)*d,f=Math.sin(l+Math.PI)*d;s.leftLeg.hip.rotation.x=u,s.rightLeg.hip.rotation.x=f;const g=Math.max(.05,Math.sin(l-.75)*d*(c?1.55:1.35)),v=Math.max(.05,Math.sin(l+Math.PI-.75)*d*(c?1.55:1.35));s.leftLeg.knee.rotation.x=-g,s.rightLeg.knee.rotation.x=-v,s.leftLeg.ankle.rotation.x=Math.cos(l)*.22+g*.3,s.rightLeg.ankle.rotation.x=Math.cos(l+Math.PI)*.22+v*.3;const m=Math.abs(Math.cos(l))*(c?.065:.032)*(d/.5);s.pelvis.position.y=.94+m,s.pelvis.rotation.z=Math.sin(l)*.035;const p=(c?.15:.04)+(r?.12:0)+ft(i*.5,-.1,.25);s.spine.rotation.x=vt(s.spine.rotation.x,-p,e*8),s.spine.rotation.y=-Math.sin(l)*.11,s.neck.rotation.y=Math.sin(l)*.07;const x=c?d*.95:d*.75;s.leftArm.shoulder.rotation.x=Math.sin(l+Math.PI)*x,s.rightArm.shoulder.rotation.x=Math.sin(l)*x;const _=c?1.05:r?.65:.26;s.leftArm.elbow.rotation.x=_+Math.max(0,Math.sin(l+Math.PI))*.35,s.rightArm.elbow.rotation.x=_+Math.max(0,Math.sin(l))*.35}else{s.phase+=e*1.6;const c=Math.sin(s.phase)*.015;s.pelvis.position.y=vt(s.pelvis.position.y,.94,e*8),s.pelvis.rotation.z=vt(s.pelvis.rotation.z,0,e*8),s.spine.rotation.x=vt(s.spine.rotation.x,c,e*6),s.spine.rotation.y=vt(s.spine.rotation.y,Math.sin(s.phase*.4)*.08,e*4),s.neck.rotation.y=Math.sin(s.phase*.55+a)*.18,s.leftLeg.hip.rotation.x=vt(s.leftLeg.hip.rotation.x,0,e*8),s.rightLeg.hip.rotation.x=vt(s.rightLeg.hip.rotation.x,0,e*8),s.leftLeg.knee.rotation.x=vt(s.leftLeg.knee.rotation.x,-.03,e*8),s.rightLeg.knee.rotation.x=vt(s.rightLeg.knee.rotation.x,-.03,e*8),s.leftLeg.ankle.rotation.x=vt(s.leftLeg.ankle.rotation.x,0,e*8),s.rightLeg.ankle.rotation.x=vt(s.rightLeg.ankle.rotation.x,0,e*8),a>.5?(s.rightArm.shoulder.rotation.x=.35+Math.sin(s.phase*2.2)*.18,s.rightArm.elbow.rotation.x=.85,s.leftArm.shoulder.rotation.x=vt(s.leftArm.shoulder.rotation.x,-.05,e*6),s.leftArm.elbow.rotation.x=vt(s.leftArm.elbow.rotation.x,.2,e*6)):(s.leftArm.shoulder.rotation.x=vt(s.leftArm.shoulder.rotation.x,0,e*6),s.rightArm.shoulder.rotation.x=vt(s.rightArm.shoulder.rotation.x,0,e*6),s.leftArm.elbow.rotation.x=vt(s.leftArm.elbow.rotation.x,.12,e*6),s.rightArm.elbow.rotation.x=vt(s.rightArm.elbow.rotation.x,.12,e*6))}}class g0{constructor(t,e,n){this.scene=t,this.worldGen=e,this.atmosphere=n,this.npcGroup=new Mt,this.scene.add(this.npcGroup),this.trafficGroup=new Mt,this.scene.add(this.trafficGroup),this.npcs=[],this.vehicles=[],this.nearestNpc=null,this.nearestNpcDist=1/0,this.activeDialogue=null,this.dialogueTimer=0,this._spawnSolisCityCommutersAndWorkers(),this._spawnMountainHikers(),this._spawnOakhavenVillagers(),this._spawnAutonomousTraffic()}_generateName(t){const e=Va[t%Va.length],n=Wa[(t*7+3)%Wa.length];return`${e} ${n}`}_spawnSolisCityCommutersAndWorkers(){const t=en,e=13.6,n=[{role:"officer",title:"Transit Security Officer",speed:1.4},{role:"barista",title:"Waterfront Barista",speed:1.25},{role:"courier",title:"Express Bicycle Courier",speed:3.1},{role:"medic",title:"EMS First Responder",speed:1.5},{role:"surveyor",title:"Civil Infrastructure Surveyor",speed:1.35},{role:"sweeper",title:"Municipal Sanitation Tech",speed:1.2},{role:"executive",title:"Senior Technology Director",speed:1.6},{role:"tourist",title:"Waterfront Sightseer",speed:1.15},{role:"student",title:"Urban Planning Researcher",speed:1.45},{role:"commuter",title:"Structural Engineer",speed:1.55},{role:"commuter",title:"Financial Analyst",speed:1.65},{role:"commuter",title:"Urban Architect",speed:1.5},{role:"worker",title:"Bridge Maintenance Crew",speed:1.25},{role:"jogger",title:"Coastal Marathon Runner",speed:3.75}];let i=0;for(let r=0;r<35;r++){const a=i*137.5%100/100,c=n[i%n.length],h=Rn({role:c.role,seed:a}),l=(r%2===0?1:-1)*14,d=-360+r/35*680,u=80+r%4*45,f=r%2===0?1:-1,g=[{x:d,z:220+l},{x:d+u*f,z:220+l},{x:d+u*f,z:220+l*.8},{x:d,z:220+l*.8}],v=g[0],m=this.worldGen.getCollisionHeight(v.x,v.z);h.root.position.set(v.x,m,v.z),this.npcGroup.add(h.root),this.npcs.push({id:`npc_city_${i}`,name:this._generateName(i),role:c.role,title:c.title,rig:h,waypoints:g,currentWp:1,baseSpeed:c.speed*(.9+a*.25),pauseTimer:r%5*1.5,seed:a}),i++}for(let r=0;r<20;r++){const a=i*137.5%100/100,c=[{role:"surveyor",title:"Bridge Inspection Engineer",speed:1.35},{role:"worker",title:"Cable Maintenance Tech",speed:1.25},{role:"tourist",title:"Bridge Overlook Tourist",speed:1.15},{role:"jogger",title:"Bay Crossing Runner",speed:3.65},{role:"officer",title:"Bridge Security Patrol",speed:1.4}],h=c[r%c.length],l=Rn({role:h.role,seed:a}),d=r%2===0?211.5:228.5,u=-820+r/20*800,f=140+r%3*60,g=r%2===0?1:-1,v=[{x:u,z:d},{x:u+f*g,z:d}],m=v[0],p=this.worldGen.getCollisionHeight(m.x,m.z);l.root.position.set(m.x,p,m.z),this.npcGroup.add(l.root),this.npcs.push({id:`npc_city_${i}`,name:this._generateName(i),role:h.role,title:h.title,rig:l,waypoints:v,currentWp:1,pingPong:!0,direction:1,baseSpeed:h.speed*(.9+a*.25),pauseTimer:r%4*2,seed:a}),i++}const o=[2,1,0,-1,-2];for(let r=0;r<45;r++){const a=i*137.5%100/100,c=n[i%n.length],h=Rn({role:c.role,seed:a}),l=r%5-2,d=o[r%o.length],u=l*t,f=d*t,g=1+r%2,v=r%2===0?1:-1,m=(r%4<2?-1:1)*e,p=[{x:u+m,z:f+m},{x:u+g*t*v+m,z:f+m},{x:u+g*t*v+m,z:f-t+m},{x:u+m,z:f-t+m}],x=r%p.length,_=p[x],M=this.worldGen.getCollisionHeight(_.x,_.z);h.root.position.set(_.x,M,_.z),this.npcGroup.add(h.root),this.npcs.push({id:`npc_city_${i}`,name:this._generateName(i),role:c.role,title:c.title,rig:h,waypoints:p,currentWp:(x+1)%p.length,baseSpeed:c.speed*(.9+a*.25),pauseTimer:r%6*1.8,seed:a}),i++}for(let r=0;r<15;r++){const a=i*137.5%100/100,c=[{role:"worker",title:"Airport Ground Operations",speed:1.3},{role:"officer",title:"Aviation Security Marshal",speed:1.4},{role:"courier",title:"Air Cargo Dispatcher",speed:2.8},{role:"commuter",title:"Flight Systems Coordinator",speed:1.55},{role:"tourist",title:"Arriving Passenger",speed:1.2}],h=c[r%c.length],l=Rn({role:h.role,seed:a}),d=370+r/15*220,u=195+r%3*16,f=[{x:d,z:u},{x:d+35,z:u},{x:d+35,z:u+18},{x:d,z:u+18}],g=f[0],v=this.worldGen.getCollisionHeight(g.x,g.z);l.root.position.set(g.x,v,g.z),this.npcGroup.add(l.root),this.npcs.push({id:`npc_city_${i}`,name:this._generateName(i),role:h.role,title:h.title,rig:l,waypoints:f,currentWp:1,baseSpeed:h.speed*(.9+a*.25),pauseTimer:r%4*2.2,seed:a}),i++}for(let r=0;r<15;r++){const a=i*137.5%100/100,c=[{role:"barista",title:"Master Espresso Roaster",speed:1.2},{role:"executive",title:"Technology Executive at Lunch",speed:1.4},{role:"student",title:"Student Researcher",speed:1.35},{role:"tourist",title:"Harbor Sightseer",speed:1.15},{role:"commuter",title:"Civil Engineer on Break",speed:1.45}],h=c[r%c.length],l=Rn({role:h.role,seed:a}),d=-90+r/15*180,u=232+r%3*6,f=[{x:d,z:u},{x:d+18,z:u+8},{x:d-12,z:u+6}],g=f[0],v=this.worldGen.getCollisionHeight(g.x,g.z);l.root.position.set(g.x,v,g.z),this.npcGroup.add(l.root),this.npcs.push({id:`npc_city_${i}`,name:this._generateName(i),role:h.role,title:h.title,rig:l,waypoints:f,currentWp:1,baseSpeed:h.speed*(.9+a*.25),pauseTimer:3.5+r%3*4,seed:a}),i++}}_spawnMountainHikers(){const t=["Hiking Valkyrie Alpine Trail","Trekking Cape Stormwatch Cliff Path","Exploring Helios Archaeological Trail"];let e=0;s0.forEach((n,i)=>{const o=this.worldGen._sampleCatmullRom(n,16),r=i===0?14:6;for(let a=0;a<r;a++){const c=e*73.1%100/100,h=Rn({role:"hiker",seed:c}),l=Math.floor(a/r*(o.length-1)),[d,u]=o[l],f=this.worldGen.getCollisionHeight(d,u);h.root.position.set(d,f,u),this.npcGroup.add(h.root);const g=o.map(([v,m])=>({x:v,z:m}));this.npcs.push({id:`npc_hiker_${e}`,name:this._generateName(60+e),role:"hiker",title:"Alpine Mountaineer",customActivity:t[i],rig:h,waypoints:g,currentWp:(l+1)%g.length,pingPong:!0,direction:a%2===0?1:-1,baseSpeed:1.38+c*.3,pauseTimer:0,seed:c}),e++}})}_spawnOakhavenVillagers(){const n=["Village Baker","Timber Craftsman","Market Grocer","Forestry Warden","Innkeeper"];for(let i=0;i<16;i++){const o=i*59.3%100/100,r=Rn({role:"villager",seed:o}),a=i/16*Math.PI*2,c=a+1.4,h=22+i%3*28,l=34+(i+1)%3*24,d=[{x:1750+Math.cos(a)*h,z:-1400+Math.sin(a)*h},{x:1750+Math.cos(c)*l,z:-1400+Math.sin(c)*l},{x:1750+Math.cos(a+3.1)*18,z:-1400+Math.sin(a+3.1)*18}],u=d[0];r.root.position.set(u.x,this.worldGen.getCollisionHeight(u.x,u.z),u.z),this.npcGroup.add(r.root),this.npcs.push({id:`npc_village_${i}`,name:this._generateName(90+i),role:"villager",title:n[i%n.length],rig:r,waypoints:d,currentWp:1,baseSpeed:1.25+o*.25,pauseTimer:i%4*2,seed:o})}}_buildTrafficCarMesh(t,e=!1){const n=new Mt;n.rotation.order="YXZ";const i=new nt({color:t,roughness:.18,metalness:.75}),o=new nt({color:1579035,roughness:.7,metalness:.2}),r=new nt({color:13751771,roughness:.2,metalness:.88}),a=new nt({color:593174,roughness:.06,metalness:.95}),c=new nt({color:1315862,roughness:.88}),h=new Zt({color:16777215}),l=new Zt({color:15680580}),d=new Zt({color:16096779});if(e){const u=new R(new q(2.35,2.3,6.6),i);u.position.y=1.55,u.castShadow=!0,n.add(u);const f=new R(new q(2.38,.42,6.7),o);f.position.y=.58,n.add(f);const g=new R(new q(2.22,1.05,.08),a);g.position.set(0,1.95,-3.31),g.rotation.x=.08,n.add(g);for(const M of[-1.185,1.185]){const C=new R(new q(.04,.92,4.8),a);C.position.set(M,1.95,-.4),n.add(C)}const v=new R(new q(1.6,.65,.08),r);v.position.set(0,1.05,-3.31);const m=new R(new q(1.4,.25,.08),d);m.position.set(0,2.55,-3.31),n.add(v,m);for(const M of[-.85,.85]){const C=new R(new q(.35,.18,.06),h);C.position.set(M,.85,-3.32);const S=new R(new q(.32,.38,.06),l);S.position.set(M,.95,3.32),n.add(C,S)}const p=new it(.42,.42,.28,14);p.rotateZ(Math.PI*.5);const x=new it(.26,.26,.29,10);x.rotateZ(Math.PI*.5);const _=[-2.1,1.45,2.45];for(const M of _)for(const C of[-1.08,1.08]){const S=new R(p,c);S.position.set(C,.42,M);const b=new R(x,r);b.position.set(C,.42,M),n.add(S,b)}}else{const u=new R(new q(1.94,.52,4.45),i);u.position.y=.62,u.castShadow=!0,n.add(u);const f=new R(new q(1.96,.16,4.52),o);f.position.y=.44,n.add(f);const g=new R(new q(1.86,.18,1.42),i);g.position.set(0,.88,-1.45),g.rotation.x=.08,g.castShadow=!0,n.add(g);const v=new R(new q(1.64,.54,2.22),a);v.position.set(0,1.22,.18),n.add(v);const m=new R(new q(1.58,.06,1.85),i);m.position.set(0,1.49,.22),m.castShadow=!0,n.add(m);const p=new R(new q(1.15,.22,.06),o);p.position.set(0,.66,-2.23),n.add(p);for(const S of[-.68,.68]){const b=new R(new q(.36,.14,.06),h);b.position.set(S,.72,-2.23),n.add(b);const P=new R(new q(.18,.1,.12),i);P.position.set(S*1.02,1.12,-.45),n.add(P)}const x=new R(new q(1.68,.1,.06),l);x.position.set(0,.82,2.23),n.add(x);for(const S of[-.48,.48]){const b=new R(new it(.045,.045,.12,8),r);b.rotation.x=Math.PI*.5,b.position.set(S,.42,2.24),n.add(b)}const _=new it(.36,.36,.26,14);_.rotateZ(Math.PI*.5);const M=new it(.24,.24,.27,10);M.rotateZ(Math.PI*.5);const C=1.38;for(const[S,b]of[[-.96,-C],[.96,-C],[-.96,C],[.96,C]]){const P=new R(_,c);P.position.set(S,.36,b);const w=new R(M,r);w.position.set(S,.36,b),n.add(P,w)}}return n}_spawnAutonomousTraffic(){const t=[14870768,3900150,15680580,1096065,16096779,6583435,1976635];let e=0;this.worldGen.roadPolylines.forEach((n,i)=>{for(let r=0;r<6;r++){const a=e%5===0,c=t[e%t.length],h=this._buildTrafficCarMesh(c,a);this.trafficGroup.add(h);const l=r%2===0?1:-1,d=Math.floor((r+.5)/6*(n.length-2));this.vehicles.push({mesh:h,polyline:n,segIdx:d,segT:0,dir:l,speed:a?15.5:19.5+e%4*2.2,laneOffset:3.4}),e++}})}getNpcActivityStatus(t,e){return t.customActivity?e<5.5||e>21.5?"Resting at Basecamp / Alpine Cabin":t.customActivity:t.role==="officer"?e>=6&&e<9.5?"Patrolling Morning Commuter Corridors & Crosswalks":e>=9.5&&e<17.5?"Stationary Civic Security & Harbor Watch":e>=17.5&&e<21?"Managing Evening Transit Congestion":"Night Patrol — Securing Municipal Plazas":t.role==="barista"?e>=5.5&&e<10?"Brewing Morning Roasts & Serving Rush Hour Espressos":e>=10&&e<14?"Serving Midday Lunches & Waterfront Pastries":e>=14&&e<18.5?"Afternoon Coffee Service & Restocking Supplies":"Cleaning Espresso Machines & Closing Cafe":t.role==="courier"?e>=7&&e<12?"Priority Morning Document & Parcel Dispatches":e>=12&&e<13?"Grabbing Quick Lunch at Harbor Kiosk":e>=13&&e<18?"Express Tower-to-Tower Deliveries":"Returning Dispatch Satchel to Depot":t.role==="medic"?e>=7&&e<19?"On-Call Standby at Central Metropolis First Aid Post":"Evening EMS Shift Handover":t.role==="surveyor"?e>=8&&e<12?"Laser Surveying Suspension Bridge Cable Foundations":e>=12&&e<13?"Reviewing Geotechnical Blueprints over Lunch":e>=13&&e<17?"Monitoring Seawall Settlement & Concrete Pavements":"Filing Daily Civil Infrastructure Reports":t.role==="sweeper"?e>=5&&e<9?"Morning Promenade Sweeping & Debris Clearance":e>=9&&e<15?"Emptying Civic Recycling Receptacles":"Off-Duty — Strolling Waterfront":t.role==="executive"?e>=7.5&&e<9?"Walking to Solis Financial Tower Boardroom":e>=9&&e<12?"Directing Regional Infrastructure Investments":e>=12&&e<13.5?"Executive Dining at Waterfront Terrace":e>=13.5&&e<18?"Reviewing Global Architecture Contracts":"Evening Return to Coastal Penthouse":t.role==="tourist"?e>=8&&e<12?"Photographing Golden Bay Bridge from Lookout":e>=12&&e<14?"Sampling Local Seafood at Esplanade Market":e>=14&&e<18.5?"Exploring Historic Helios Ruins & Shoreline":"Evening Stroll along Illuminated Pier":t.role==="student"?e>=8&&e<12?"Gathering Environmental Sensor Data in the Field":e>=12&&e<13.3?"Studying Course Notes at Marina Benches":e>=13.3&&e<17?"Fieldwork along Coastal Wetlands & Dunes":"Relaxing with Classmates at Harbor Steps":t.role==="jogger"?e<10||e>16.5?"Coastal Cardio & 10K Marathon Training":"Light Recovery Jog along Promenade":t.role==="worker"?e>=12&&e<13?"Taking Lunch Break with Civil Crew":e>=7&&e<=17.5?"Inspecting Municipal Utilities & Road Surfacing":"Off-Duty — Heading Home to Residential District":t.role==="villager"?e>=7.5&&e<17.5?"Tending Oakhaven Artisan Craft & Bakery Shops":e>=17.5&&e<21?"Evening Gathering at Village Square Fountain":"Walking Home to Alpine Chalet":e>=6.5&&e<9?"Morning Commute to Downtown Office Tower":e>=9&&e<12?"Working — Structural Modeling & Analysis":e>=12&&e<13.5?"Lunch Break at Solis Esplanade":e>=13.5&&e<17.5?"Client Briefings & Civil Design Work":e>=17.5&&e<20?"Evening Commute across Golden Bay Walkway":"Night Stroll along Harbor Promenade"}interactWithNearestNpc(){if(!this.nearestNpc||this.nearestNpcDist>15)return null;const t=this.nearestNpc,e=this.atmosphere.state.timeOfDay,n=this.getNpcActivityStatus(t,e);t.pauseTimer=5;let i=[];t.role==="officer"?i=['"Municipal security is on point today. Keep your vehicle speed in check on Coastal Boulevard."',`"Looking out over Golden Bay Bridge—she's clear and open in both directions."`,`"If you're flying the twin-jet today, remember ATC tower maintains strict airspace clearance around the coastal runway."`]:t.role==="barista"?i=['"Fresh double-shot macchiato roasted this morning! The sea breeze here on Coastal Boulevard makes it all worthwhile."','"A lot of engineers from the Solis Tower stopped by for cold brews today. Need an espresso for the road?"','"We get our dairy fresh from Oakhaven Alpine Village every morning. Nothing beats local quality."']:t.role==="courier"?i=[`"Got three rush architectural packages heading up to the Solis Tower penthouse. Traffic's smooth today!"`,'"Cycling along the coastal bike lanes is pure joy in this weather. Stay hydrated out there!"']:t.role==="medic"?i=['"All clear across the downtown district. Just running routine paramedic checks on our mobile medical kit."',`"Stay safe if you're hiking up the Valkyrie Alpine Trail—temperature drops fast once you reach the summit snowline."`]:t.role==="surveyor"?i=['"Our laser sensors show the suspension bridge pylons are rock solid, despite the ocean tides."',`"We're cataloging the bedrock integrity near Redstone Canyon next week for the highway extension."`]:t.role==="sweeper"?i=['"Keeping Solis Metropolis pristine! Hard work, but watching the morning sun illuminate the glass towers makes it a pleasure."','"Love hearing the waves crash against the seawall while working along the esplanade."']:t.role==="executive"?i=[`"Aetheria's green infrastructure design is second to none. We're modeling zero-emission transit networks across the bay."`,'"Taking a moment away from board meetings to admire the horizon. That suspension span is a marvel of civil engineering."']:t.role==="tourist"?i=['"I just arrived from the coastal ferry! The view of the skyscrapers against the distant mountains is breathtaking."','"Can you recommend the best viewpoint for sunset? Someone told me Cape Stormwatch lighthouse has an incredible panorama."']:t.role==="student"?i=[`"I'm analyzing the microclimates between the ocean coast and the alpine peaks. The biome diversity in Aetheria is fascinating!"`,`"Check out the air quality index on your HUD—it's phenomenal up near Oakhaven Village."`]:t.role==="hiker"?i=['"The air up here on the ridge is crystal clear today! Have you climbed up to Valkyrie Observatory yet?"','"Watch your footing on the steeper switchbacks—the views across Golden Bay are worth every step."','"I started from Oakhaven Village at dawn. Nothing beats trekking through the pines."']:t.role==="worker"?i=[`"We're running structural checks on the Golden Bay Bridge approaches and the coastal runway."`,`"Traffic's flowing smoothly across the suspension span today—stay safe out there!"`,'"Just finishing up the civil inspection logs before shift change."']:t.role==="villager"?i=['"Welcome to Oakhaven! Fresh mountain timber and warm bread in the square every morning."',`"If you follow the northern highway up past the river valley, it'll take you right to the snowline."`,'"Life is peaceful here in the valley compared to the bustle of Solis Metropolis."']:t.role==="jogger"?i=['"Doing a 10K loop along the Solis Harbor promenade—great sea breeze today!"','"Trying to beat my personal best before the afternoon clouds roll in!"']:e>=6.5&&e<9.5?i=['"Good morning! Trying to catch the early briefing at the Solis Tower before 9:00."','"Grabbed an espresso by the harbor—another busy day in Solis Metropolis!"']:e>=12&&e<13.5?i=['"Stepped out of the office for some fresh ocean air during lunch break."','"The waterfront plaza is always the best spot in the city at midday."']:i=['"Heading back from the downtown financial district—love watching the light hit Golden Bay."','"Have you driven out to Redstone Canyon or the airport runway yet? The highway connects right through."'];const o=Math.floor((performance.now()*.001+t.seed*10)%i.length);return this.activeDialogue={speaker:`${t.name} (${t.title})`,status:n,text:i[o]},this.dialogueTimer=6.5,this.activeDialogue}update(t,e){const n=this.atmosphere.state.timeOfDay;this.dialogueTimer>0&&(this.dialogueTimer-=t,this.dialogueTimer<=0&&(this.activeDialogue=null)),this.nearestNpc=null,this.nearestNpcDist=1/0;for(let i=0;i<this.npcs.length;i++){const o=this.npcs[i],r=o.rig.root.position,a=Math.hypot(r.x-e.x,r.z-e.z);if(a<this.nearestNpcDist&&(this.nearestNpcDist=a,this.nearestNpc=o),a>180){o.rig.root.visible=!1;continue}o.rig.root.visible=!0;let c=0,h=0;if(o.pauseTimer>0){if(o.pauseTimer-=t,a<12){const l=Math.atan2(r.x-e.x,r.z-e.z);o.rig.root.rotation.y=l}}else{const l=o.waypoints[o.currentWp],d=l.x-r.x,u=l.z-r.z,f=Math.hypot(d,u);if(f<1.8)o.pingPong?(o.currentWp+=o.direction,(o.currentWp>=o.waypoints.length||o.currentWp<0)&&(o.direction*=-1,o.currentWp=ft(o.currentWp+o.direction*2,0,o.waypoints.length-1),o.pauseTimer=4.5)):(o.currentWp=(o.currentWp+1)%o.waypoints.length,(n>=12&&n<=13.5&&o.role==="commuter"||o.role==="villager"||o.role==="worker")&&(i+o.currentWp)%3===0&&(o.pauseTimer=3.5+o.seed*4));else{c=o.baseSpeed;const g=d/f*c,v=u/f*c,m=r.y;r.x+=g*t,r.z+=v*t,r.y=Math.max(ke,this.worldGen.getCollisionHeight(r.x,r.z)),h=ft((r.y-m)/Math.max(.01,c*t),-.35,.35);const p=Math.atan2(-g,-v);o.rig.root.rotation.y=p}}a<=65&&Ac(o.rig,c,t,{slopePitch:h,isHiker:o.role==="hiker",idleGesture:o.role==="worker"||o.role==="villager"?1:.3})}for(let i=0;i<this.vehicles.length;i++){const o=this.vehicles[i],r=o.polyline,a=o.segIdx,c=ft(a+o.dir,0,r.length-1);if(a===c){o.dir*=-1;continue}const h=r[a],l=r[c],d=l[0]-h[0],u=l[1]-h[1],f=Math.max(.1,Math.hypot(d,u)),g=vt(h[0],l[0],o.segT),v=vt(h[1],l[1],o.segT),m=Math.hypot(g-e.x,v-e.z);if(m>380){o.mesh.visible=!1;continue}o.mesh.visible=!0;const p=m<16?0:m<32?o.speed*.4:o.speed;o.segT+=p*t/f,o.segT>=1&&(o.segT-=1,o.segIdx=c,(o.segIdx<=0||o.segIdx>=r.length-1)&&(o.dir*=-1));const x=d/f,_=u/f,M=-_,C=x,S=vt(h[0],l[0],o.segT)+M*o.laneOffset,b=vt(h[1],l[1],o.segT)+C*o.laneOffset,P=this.worldGen.getCollisionHeight(S,b),w=P+.04;o.curY===void 0&&(o.curY=w,o.curPitch=0),o.curY=vt(o.curY,w,t*14);const y=this.worldGen.getCollisionHeight(S+x*3.2,b+_*3.2),T=ft((y-P)/3.2,-.25,.25);o.curPitch=vt(o.curPitch,T,t*10),o.mesh.position.set(S,o.curY,b),o.mesh.rotation.y=Math.atan2(-x,-_),o.mesh.rotation.x=o.curPitch}}}const Wt={EXPLORER:"explorer",ROVER:"rover",DRONE:"drone",ROCKET:"rocket"};class v0{constructor(t,e,n,i){this.camera=t,this.camera.rotation.order="YXZ",this.scene=e,this.worldGen=n,this.domElement=i,this.mode=Wt.EXPLORER,this.thirdPerson=!0,this.position=new U(-73.33,12.5,220),this.velocity=new U,this.yaw=1.57,this.pitch=-.05,this.onGround=!0,this.isSwimming=!1,this.speedMs=0,this.walkCycle=0,this.carSpeed=0,this.carSteer=0,this.carLateralVel=0,this.wheelRotation=0,this.engineRpm=850,this.currentGear="N",this.suspensionPitch=0,this.suspensionRoll=0,this.airThrottle=.55,this.airSpeed=0,this.airPitch=.02,this.airRoll=0,this.gForce=1,this.gearDeployed=!0,this.rocketThrottle=0,this.rocketSpeed=0,this.rocketPitch=-Math.PI*.5,this.rocketRoll=0,this.rocketYaw=0,this.rocketStage=1,this.warpBoost=!1,this.launchInitiated=!1,this.smoothLookTarget=new U,this.chassisTerrainPitch=0,this.chassisTerrainRoll=0,this.smoothCamFloorY=0,this.camOrbitYaw=0,this.camOrbitPitch=0,this.orbitResetTimer=0,this.keys={},this.isPointerLocked=!1,this.isDraggingMouse=!1,this.flashlightOn=!1,this._buildExplorerMesh(),this._buildRealisticCarMesh(),this._buildRealisticAircraftMesh(),this._buildRealisticRocketMesh(),this._buildFlashlight(),this._bindInputs(),this.position.y=this.worldGen.getCollisionHeight(this.position.x,this.position.z),this._syncModeMeshes()}_buildExplorerMesh(){this.humanRig=Rn({role:"explorer",seed:.42}),this.explorerGroup=this.humanRig.root,this.scene.add(this.explorerGroup)}_buildRealisticCarMesh(){this.roverGroup=new Mt,this.roverChassis=new Mt,this.roverGroup.add(this.roverChassis);const t=new nt({color:10033947,roughness:.16,metalness:.85}),e=new nt({color:1579035,roughness:.55,metalness:.4}),n=new nt({color:14870768,roughness:.15,metalness:.95}),i=new nt({color:14427686,roughness:.3,metalness:.5}),o=new nt({color:9741240,roughness:.25,metalness:.9}),r=new nt({color:461586,roughness:.05,metalness:.95,transparent:!0,opacity:.82}),a=new nt({color:1315862,roughness:.88}),c=new Zt({color:16777215}),h=new Zt({color:3718648});this.brakeLightMat=new Zt({color:10033947});const l=new R(new q(2.08,.54,4.68),t);l.position.y=.72,l.castShadow=!0,this.roverChassis.add(l);const d=new R(new q(2.14,.12,4.76),e);d.position.y=.46,this.roverChassis.add(d);const u=new R(new q(2.1,.06,.42),e);u.position.set(0,.42,-2.42),this.roverChassis.add(u);const f=new R(new q(2.04,.16,.36),e);f.position.set(0,.48,2.4),this.roverChassis.add(f);const g=new R(new q(1.94,.16,1.48),t);g.position.set(0,1.02,-1.52),g.rotation.x=.09,g.castShadow=!0,this.roverChassis.add(g);const v=new R(new q(.85,.04,.38),e);v.position.set(0,1.06,-1.35),v.rotation.x=.09,this.roverChassis.add(v);const m=new R(new q(1.74,.56,2.38),r);m.position.set(0,1.34,.2),this.roverChassis.add(m);const p=new R(new q(1.68,.06,2.12),t);p.position.set(0,1.63,.24),p.castShadow=!0;const x=new R(new qt(.04,.12,4),e);x.rotation.x=-.4,x.position.set(0,1.7,1.15),this.roverChassis.add(p,x);const _=new nt({color:1841431,roughness:.8});for(const T of[-.44,.44]){const D=new R(new q(.46,.62,.46),_);D.position.set(T,1.08,-.06),this.roverChassis.add(D)}for(const T of[-1.1,1.1]){const D=new R(new q(.24,.12,.16),t);D.position.set(T,1.14,-.66);const I=new R(new q(.245,.03,.04),h);I.position.set(T,1.14,-.74),this.roverChassis.add(D,I)}const M=new R(new q(1.32,.3,.08),e);M.position.set(0,.74,-2.36),this.roverChassis.add(M),this.carHeadlights=[];for(const T of[-.74,.74]){const D=new R(new q(.38,.14,.08),c);D.position.set(T,.84,-2.36);const I=new R(new q(.42,.03,.09),h);I.position.set(T,.92,-2.36),this.roverChassis.add(D,I);const k=new Xi(16775406,38,190,Math.PI*.28,.55,1);k.position.set(T,.84,-2.4);const N=new ge;N.position.set(T*.7,-.2,-65),this.roverChassis.add(k,N),k.target=N,this.carHeadlights.push(k)}const C=new dr(16774374,8.5,45,1.2);C.position.set(0,.88,-2.8),this.roverChassis.add(C),this.carHeadlights.push(C);const S=new R(new q(1.88,.12,.08),this.brakeLightMat);S.position.set(0,.88,2.36),this.roverChassis.add(S);for(const T of[-.72,-.58,.58,.72]){const D=new R(new it(.05,.05,.18,12),n);D.rotation.x=Math.PI*.5,D.position.set(T,.44,2.42),this.roverChassis.add(D)}this.roverWheels=[];const b=new it(.44,.44,.32,22);b.rotateZ(Math.PI*.5);const P=new it(.3,.3,.34,16);P.rotateZ(Math.PI*.5);const w=new it(.24,.24,.06,16);w.rotateZ(Math.PI*.5);const y=[[-1.04,.44,-1.46,!0],[1.04,.44,-1.46,!0],[-1.04,.44,1.46,!1],[1.04,.44,1.46,!1]];for(const[T,D,I,k]of y){const N=new Mt;N.position.set(T,D,I);const V=new Mt,H=new R(b,a);H.castShadow=!0;const F=new R(P,n),W=new R(w,o);V.add(H,F,W);const X=new R(new q(.12,.16,.08),i);X.position.set(T>0?-.06:.06,.12,.12),N.add(X),N.add(V),this.roverGroup.add(N),this.roverWheels.push({steerPivot:N,wheelMesh:V,baseX:T,baseY:D,baseZ:I,isFront:k})}this.scene.add(this.roverGroup)}_buildRealisticAircraftMesh(){this.droneGroup=new Mt,this.droneBody=new Mt,this.droneGroup.add(this.droneBody);const t=new nt({color:16317180,roughness:.18,metalness:.65}),e=new nt({color:165063,roughness:.25,metalness:.6}),n=new nt({color:1976635,roughness:.35,metalness:.85}),i=new nt({color:593174,roughness:.05,metalness:.98}),o=new Zt({color:3718648}),r=new Zt({color:15680580}),a=new Zt({color:2278750}),c=new R(new it(.68,.68,5,18),t);c.rotation.x=Math.PI*.5,c.castShadow=!0,this.droneBody.add(c);const h=new R(new qt(.68,2.6,18),t);h.rotation.x=-Math.PI*.5,h.position.z=-3.8,this.droneBody.add(h);const l=new R(new it(.015,.02,.85,6),n);l.rotation.x=Math.PI*.5,l.position.z=-5.3,this.droneBody.add(l);const d=new R(new qt(.68,2.4,18),t);d.rotation.x=Math.PI*.5,d.position.z=3.7,this.droneBody.add(d);const u=new R(new ue(.58,16,12),i);u.scale.set(.85,.56,2.2),u.position.set(0,.36,-1.75),this.droneBody.add(u);const f=new R(new q(9.8,.12,1.65),t);f.position.set(0,-.06,.25),f.castShadow=!0,this.droneBody.add(f);const g=new R(new q(9.6,.13,.35),e);g.position.set(0,-.06,-.35),this.droneBody.add(g);for(const x of[-1,1]){const _=new R(new q(.1,.85,.72),e);_.position.set(x*4.88,.32,.35),_.rotation.z=x*-.22,this.droneBody.add(_);const M=new R(new ue(.06,8,8),x===-1?r:a);M.position.set(x*4.9,.65,.35),this.droneBody.add(M);const C=new R(new it(.38,.34,1.85,14),t);C.rotation.x=Math.PI*.5,C.position.set(x*1.85,-.38,.3),this.droneBody.add(C);const S=new R(new it(.32,.32,.25,12),n);S.rotation.x=Math.PI*.5,S.position.set(x*1.85,-.38,-.62),this.droneBody.add(S)}for(const x of[-1,1]){const _=new R(new q(.12,1.75,1.45),e);_.position.set(x*.72,1.15,3.45),_.rotation.x=-.32,_.rotation.z=x*-.24,this.droneBody.add(_)}const v=new R(new q(3.6,.08,.95),t);v.position.set(0,.25,3.95),this.droneBody.add(v),this.thrusterGlows=[];for(const x of[-1.85,1.85]){const _=new R(new qt(.26,1.4,12),o);_.rotation.x=Math.PI*.5,_.position.set(x,-.38,1.65),this.droneBody.add(_),this.thrusterGlows.push(_)}this.landingGearGroup=new Mt;const m=new it(.05,.05,.75,6),p=new it(.18,.18,.12,10);p.rotateZ(Math.PI*.5);for(const[x,_]of[[0,-2.5],[-1.35,.45],[1.35,.45]]){const M=new R(m,n);M.position.set(x,-.68,_);const C=new R(p,n);C.position.set(x,-1.02,_),this.landingGearGroup.add(M,C)}this.droneBody.add(this.landingGearGroup),this.aircraftHeadlights=[];for(const x of[-1.2,1.2]){const _=new Xi(16775406,48,320,Math.PI*.28,.6,1);_.position.set(x,-.4,-2.8);const M=new ge;M.position.set(x*.5,-4.5,-140),this.droneBody.add(_,M),_.target=M,this.aircraftHeadlights.push(_)}this.scene.add(this.droneGroup)}_buildRealisticRocketMesh(){this.rocketGroup=new Mt,this.rocketChassis=new Mt,this.rocketGroup.add(this.rocketChassis);const t=new nt({color:15528181,metalness:.96,roughness:.12}),e=new nt({color:1118999,metalness:.15,roughness:.9}),n=new nt({color:2237998,metalness:.75,roughness:.45}),i=new nt({color:3817287,metalness:.85,roughness:.35}),o=4.5;this.starshipStageMesh=new Mt;const r=new R(new it(o,o,32,32),t);r.position.y=16,r.castShadow=!0;const a=new it(o+.04,o+.04,32,20,1,!1,0,Math.PI);a.rotateY(-Math.PI*.5);const c=new R(a,e);c.position.y=16;const h=new qt(o,18,32),l=new R(h,t);l.position.y=41,l.castShadow=!0;const d=new qt(o+.03,18,20,1,!1,0,Math.PI);d.rotateY(-Math.PI*.5);const u=new R(d,e);u.position.y=41,this.rocketForwardFlaps=[];for(const x of[-1,1]){const _=new Mt;_.position.set(x*(o+.2),34,.4);const M=new R(new q(.3,4.8,3.2),t);M.position.x=x*1.5,_.add(M),this.rocketForwardFlaps.push(_),this.starshipStageMesh.add(_)}this.rocketAftFlaps=[];for(const x of[-1,1]){const _=new Mt;_.position.set(x*(o+.2),6.5,-.4);const M=new R(new q(.35,12,4.5),t);M.position.x=x*2.2,_.add(M),this.rocketAftFlaps.push(_),this.starshipStageMesh.add(_)}for(let x=0;x<3;x++){const _=x/3*Math.PI*2,M=new R(new qt(.75,2.2,10,1,!0),i);M.position.set(Math.cos(_)*1.2,-1,Math.sin(_)*1.2),this.starshipStageMesh.add(M)}for(let x=0;x<3;x++){const _=x/3*Math.PI*2+Math.PI/3,M=new R(new qt(1.4,2.8,12,1,!0),t);M.position.set(Math.cos(_)*2.8,-1.2,Math.sin(_)*2.8),this.starshipStageMesh.add(M)}this.starshipStageMesh.add(r,c,l,u),this.rocketChassis.add(this.starshipStageMesh),this.boosterStageMesh=new Mt,this.boosterStageMesh.position.y=-72;const f=new it(o,o,70,32),g=new R(f,t);g.position.y=35,g.castShadow=!0,this.boosterStageMesh.add(g);for(let x=0;x<4;x++){const _=x/4*Math.PI*2,M=new R(new q(.35,3.8,6.2),n);M.position.set(Math.cos(_)*(o+.5),65,Math.sin(_)*(o+.5)),M.rotation.y=_,this.boosterStageMesh.add(M)}for(let x=0;x<13;x++){const _=x/12*Math.PI*2,M=x===0?0:1.8,C=new R(new qt(.75,2.2,10,1,!0),i);C.position.set(Math.cos(_)*M,-1,Math.sin(_)*M),this.boosterStageMesh.add(C)}for(let x=0;x<20;x++){const _=x/20*Math.PI*2,M=new R(new qt(.72,2.2,10,1,!0),i);M.position.set(Math.cos(_)*3.6,-1,Math.sin(_)*3.6),this.boosterStageMesh.add(M)}this.rocketChassis.add(this.boosterStageMesh),this.rocketPlumeGroup=new Mt,this.rocketPlumeGroup.position.y=-1.2;const v=new Zt({color:3718648,transparent:!0,opacity:.95});this.plumeCore=new R(new qt(2.4,18,14,1,!0),v),this.plumeCore.rotation.x=Math.PI,this.plumeCore.position.y=-9;const m=new Zt({color:16739072,transparent:!0,opacity:.75});this.plumeOuter=new R(new qt(5.2,38,14,1,!0),m),this.plumeOuter.rotation.x=Math.PI,this.plumeOuter.position.y=-19,this.rocketEngineLight=new dr(16742144,0,120),this.rocketEngineLight.position.y=-3,this.rocketPlumeGroup.add(this.plumeCore,this.plumeOuter,this.rocketEngineLight),this.rocketChassis.add(this.rocketPlumeGroup);const p=new Zt({color:16729344,transparent:!0,opacity:0,side:Ce});this.reentryPlasma=new R(new it(o+.8,o+1.2,55,20),p),this.reentryPlasma.position.y=26,this.rocketChassis.add(this.reentryPlasma),this.rocketHeadlights=[];for(const x of[-2.4,2.4]){const _=new Xi(16775406,0,450,Math.PI*.32,.5,1);_.position.set(x,48,1.5);const M=new ge;M.position.set(x,180,1.5),this.rocketChassis.add(_,M),_.target=M,this.rocketHeadlights.push(_)}this.scene.add(this.rocketGroup)}_buildFlashlight(){this.spotLight=new Xi(16776171,18,95,Math.PI*.32,.55,1.1),this.spotLight.castShadow=!1,this.scene.add(this.spotLight),this.scene.add(this.spotLight.target)}_bindInputs(){window.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")return;const e=t.code;this.keys[e]=!0,e==="Digit1"&&this.setMode(Wt.EXPLORER),(e==="Digit2"||e==="KeyV")&&this.setMode(this.mode===Wt.ROVER?Wt.EXPLORER:Wt.ROVER),(e==="Digit3"||e==="KeyF")&&this.setMode(this.mode===Wt.DRONE?Wt.EXPLORER:Wt.DRONE),(e==="Digit4"||e==="KeyR")&&this.setMode(this.mode===Wt.ROCKET?Wt.EXPLORER:Wt.ROCKET),e==="KeyC"&&(this.thirdPerson=!this.thirdPerson,this._syncModeMeshes()),e==="KeyL"&&(this.flashlightOn=!this.flashlightOn)}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.domElement.addEventListener("mousedown",t=>{t.button===0&&(this.isDraggingMouse=!0)}),window.addEventListener("mouseup",()=>{this.isDraggingMouse=!1}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement}),window.addEventListener("mousemove",t=>{if(!this.isPointerLocked&&!this.isDraggingMouse)return;const e=.0022;this.mode===Wt.EXPLORER?(this.yaw-=t.movementX*e,this.pitch=ft(this.pitch-t.movementY*e,-1.35,1.35)):this.mode===Wt.ROVER?(this.camOrbitYaw-=t.movementX*e,this.camOrbitPitch=ft(this.camOrbitPitch-t.movementY*e,-.65,.75),this.orbitResetTimer=3):this.mode===Wt.DRONE&&(this.camOrbitYaw-=t.movementX*e,this.camOrbitPitch=ft(this.camOrbitPitch-t.movementY*e,-.75,.75),this.orbitResetTimer=3)}),this.domElement.addEventListener("wheel",t=>{this.mode===Wt.DRONE&&(this.airThrottle=ft(this.airThrottle+(t.deltaY<0?.08:-.08),0,1))},{passive:!0})}setMode(t){if(this.mode!==t){if(this.mode=t,this.camera.up.set(0,1,0),this.smoothLookTarget.set(0,0,0),this.smoothCamFloorY=0,this.camOrbitYaw=0,this.camOrbitPitch=0,this.orbitResetTimer=0,t===Wt.DRONE){const e=this.worldGen.getCollisionHeight(this.position.x,this.position.z);!this.worldGen.getRunwayInfo(this.position.x,this.position.z).onRunway&&this.position.y<e+12?(this.position.y=e+38,this.airSpeed=Math.max(this.speedMs,52),this.airThrottle=.65,this.airPitch=.02):this.airSpeed=this.speedMs}else t===Wt.ROVER?(this.carSpeed=this.speedMs*.8,this.chassisTerrainPitch=0,this.chassisTerrainRoll=0):t===Wt.ROCKET&&(Math.hypot(this.position.x-1050,this.position.z-880)<350&&this.position.y<80?(this.position.set(1050,38,880),this.rocketPitch=-Math.PI*.5,this.rocketYaw=0,this.rocketRoll=0,this.rocketSpeed=0,this.rocketThrottle=0,this.rocketStage=1,this.launchInitiated=!1,this.boosterStageMesh&&(this.boosterStageMesh.visible=!0)):(this.rocketStage=2,this.rocketThrottle=.5,this.rocketSpeed=Math.max(this.speedMs,160),this.rocketPitch=-.05,this.boosterStageMesh&&(this.boosterStageMesh.visible=!1)));this._syncModeMeshes()}}_syncModeMeshes(){this.explorerGroup.visible=this.mode===Wt.EXPLORER&&this.thirdPerson,this.roverGroup.visible=this.mode===Wt.ROVER,this.droneGroup.visible=this.mode===Wt.DRONE&&this.thirdPerson,this.rocketGroup&&(this.rocketGroup.visible=this.mode===Wt.ROCKET)}teleportTo(t,e,n=null){this.position.x=ft(t,-Ie+200,Ie-200),this.position.z=ft(e,-Ie+200,Ie-200);const i=Math.max(ke,this.worldGen.getCollisionHeight(this.position.x,this.position.z)),o=this.worldGen.getRunwayInfo(this.position.x,this.position.z).onRunway;if(this.mode===Wt.ROCKET){Math.hypot(t-1050,e-880)<300?(this.position.set(1050,38,880),this.rocketThrottle=0,this.rocketSpeed=0,this.rocketPitch=-Math.PI*.5,this.rocketStage=1,this.launchInitiated=!1,this.boosterStageMesh&&(this.boosterStageMesh.visible=!0)):Math.hypot(t-800,e-1200)<600?(this.position.set(800,8500,1200),this.rocketThrottle=.45,this.rocketSpeed=420,this.rocketPitch=-.05,this.rocketStage=2,this.boosterStageMesh&&(this.boosterStageMesh.visible=!1)):Math.hypot(t-14e3,e+12e3)<2e3?(this.position.set(14e3,16400,-12e3),this.rocketThrottle=.35,this.rocketSpeed=240,this.rocketPitch=-.05,this.rocketStage=2,this.boosterStageMesh&&(this.boosterStageMesh.visible=!1)):Math.hypot(t+22e3,e-24e3)<2500?(this.position.set(-22e3,22600,24e3),this.rocketThrottle=.35,this.rocketSpeed=240,this.rocketPitch=-.05,this.rocketStage=2,this.boosterStageMesh&&(this.boosterStageMesh.visible=!1)):(this.position.set(t,i+50,e),this.rocketThrottle=.5,this.rocketSpeed=120),this.velocity.set(0,0,0),this.camera.up.set(0,1,0);return}this.position.y=this.mode===Wt.DRONE&&!o?i+55:i+.1,this.velocity.set(0,0,0),this.carSpeed=0,this.airSpeed=this.mode===Wt.DRONE&&!o?55:0,this.smoothLookTarget.set(0,0,0),this.chassisTerrainPitch=0,this.chassisTerrainRoll=0,this.smoothCamFloorY=0,this.camera.up.set(0,1,0),n!==null&&(this.yaw=n,this.pitch=-.04,this.airPitch=0,this.airRoll=0)}update(t){const e=Math.min(t,.05);this.mode===Wt.EXPLORER?this._updateExplorer(e):this.mode===Wt.ROVER?this._updateRealisticCar(e):this.mode===Wt.DRONE?this._updateRealisticAircraft(e):this._updateRealisticRocket(e),this.position.x=ft(this.position.x,-Ie,Ie),this.position.z=ft(this.position.z,-Ie,Ie);const i=(this.atmosphere?this.atmosphere.sunDirection.y:1)<.15||this.flashlightOn;if(this.carHeadlights){const r=this.mode===Wt.ROVER&&(i||this.flashlightOn);for(const a of this.carHeadlights)a.visible=r}if(this.aircraftHeadlights){const r=this.mode===Wt.DRONE&&(i||this.flashlightOn);for(const a of this.aircraftHeadlights)a.visible=r}const o=this.mode===Wt.EXPLORER&&(i||this.flashlightOn);if(this.spotLight.intensity=o?18:0,o){const r=new U(-Math.sin(this.yaw),Math.sin(this.pitch),-Math.cos(this.yaw)).normalize();this.spotLight.position.copy(this.position).add(new U(0,1.55,0)),this.spotLight.target.position.copy(this.spotLight.position).addScaledVector(r,65)}}_updateExplorer(t){const e=-Math.sin(this.yaw),n=-Math.cos(this.yaw),i=Math.cos(this.yaw),o=-Math.sin(this.yaw);let r=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0),a=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0);const c=Math.hypot(r,a);c>.001&&(r/=c,a/=c);const h=!!(this.keys.ShiftLeft||this.keys.ShiftRight),l=this.worldGen.getNormalAndSlope(this.position.x,this.position.z),d=ft(1-l.slopeDeg/65*.35,.55,1),u=c>0?(h?8.2:2.65)*d:0,f=(e*r+i*a)*u,g=(n*r+o*a)*u;this.velocity.x=vt(this.velocity.x,f,Math.min(1,t*8.5)),this.velocity.z=vt(this.velocity.z,g,Math.min(1,t*8.5));const v=this.worldGen.getCollisionHeight(this.position.x,this.position.z),m=ke-1.15;this.isSwimming=v<m&&this.position.y<=m+.2,this.isSwimming?(this.position.y=vt(this.position.y,m,t*6),this.velocity.y=0,this.onGround=!0):(this.onGround&&this.keys.Space&&(this.velocity.y=7.8,this.onGround=!1),this.velocity.y-=20*t);const p=this.position.y;this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.velocity.y*t,this.worldGen.resolveHorizontalCollision(this.position,.55);const x=this.worldGen.getCollisionHeight(this.position.x,this.position.z),_=Math.max(x,m);this.position.y<=_&&(this.position.y=_,this.velocity.y=0,this.onGround=!0),this.speedMs=Math.hypot(this.velocity.x,this.velocity.z);const M=ft((this.position.y-p)/Math.max(.02,this.speedMs*t),-.35,.35);if(this.explorerGroup.position.copy(this.position),this.speedMs>.15){let S=(Math.atan2(-this.velocity.x,-this.velocity.z)-this.explorerGroup.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;this.explorerGroup.rotation.y+=S*Math.min(1,t*12)}else this.explorerGroup.rotation.y=vt(this.explorerGroup.rotation.y,this.yaw,t*5);if(Ac(this.humanRig,this.speedMs,t,{slopePitch:M,isSwimming:this.isSwimming,isHiker:this.position.y>75}),this.walkCycle=this.humanRig.phase,this.thirdPerson){const b=this.position.x+Math.sin(this.yaw)*Math.cos(this.pitch)*4.6,P=this.position.z+Math.cos(this.yaw)*Math.cos(this.pitch)*4.6,w=this.position.y+1.85-Math.sin(this.pitch)*4.6,y=this.worldGen.getCollisionHeight(b,P)+.5,T=new U(b,Math.max(w,y),P);this.worldGen.resolveHorizontalCollision(T,.5),this.camera.position.copy(T),this.camera.lookAt(this.position.x,this.position.y+1.48,this.position.z)}else{const C=this.speedMs>.2?Math.abs(Math.cos(this.humanRig.phase))*.045:0;this.camera.position.set(this.position.x,this.position.y+1.68+C,this.position.z);const S=new U(this.camera.position.x-Math.sin(this.yaw)*Math.cos(this.pitch),this.camera.position.y+Math.sin(this.pitch),this.camera.position.z-Math.cos(this.yaw)*Math.cos(this.pitch));this.camera.lookAt(S)}this.camera.fov=vt(this.camera.fov,h&&this.speedMs>5?69:64,t*6),this.camera.updateProjectionMatrix()}_updateRealisticCar(t){const e=this.keys.KeyW||this.keys.ArrowUp?1:0,n=this.keys.KeyS||this.keys.ArrowDown?1:0,i=(this.keys.KeyA||this.keys.ArrowLeft?1:0)-(this.keys.KeyD||this.keys.ArrowRight?1:0),o=!!(this.keys.ShiftLeft||this.keys.ShiftRight),r=!!this.keys.Space,a=-Math.sin(this.yaw),c=-Math.cos(this.yaw),h=Math.cos(this.yaw),l=-Math.sin(this.yaw),d=this.worldGen.getCollisionHeight(this.position.x+a*2,this.position.z+c*2),u=this.worldGen.getCollisionHeight(this.position.x-a*2,this.position.z-c*2),f=ft((d-u)/4,-.5,.5),g=-9.81*f,v=o?36:25,m=(o?12:7.8)*(1-Math.abs(this.carSpeed)/(v*1.15)),p=18,x=.65+this.carSpeed*Math.abs(this.carSpeed)*.003;let _=g-Math.sign(this.carSpeed)*x;e>0?this.carSpeed<-.3?_+=p:_+=m:n>0&&(this.carSpeed>.4?_-=p:_-=6.5),r&&(_-=Math.sign(this.carSpeed)*24);const M=this.carSpeed;this.carSpeed+=_*t,e===0&&n===0&&Math.abs(this.carSpeed)<.25&&Math.abs(f)<.05&&(this.carSpeed=0),this.carSpeed=ft(this.carSpeed,-7,v);const C=n>0&&this.carSpeed>0||r;this.brakeLightMat.color.setHex(C?16720418:8330525);const S=Math.abs(this.carSpeed)*3.6;if(this.carSpeed<-.5)this.currentGear="R",this.engineRpm=ft(1100+S*85,900,4200);else if(S<1.5&&e===0)this.currentGear="N",this.engineRpm=vt(this.engineRpm,850,t*6);else{const Y=[0,22,45,68,92,115,140];let J=1;for(;J<6&&S>Y[J];)J++;this.currentGear=String(J);const ct=Y[J-1]*.7,tt=Y[J],rt=ft((S-ct)/Math.max(10,tt-ct),.15,1);this.engineRpm=Math.round(1400+rt*4400)}const b=Math.abs(this.carSpeed)/25,P=.5/(1+b*b*2.2),w=i!==0?5.5:12;this.carSteer=vt(this.carSteer,i*P,t*w);const y=2.92;let T=0;Math.abs(this.carSpeed)>.15&&(T=this.carSpeed/y*Math.tan(this.carSteer),T*=ft(1-b*.28,.45,1),this.yaw+=T*t);const D=r?3:12,I=-T*this.carSpeed*(r?.35:.08);this.carLateralVel=vt(this.carLateralVel,I,t*D),this.velocity.x=a*this.carSpeed+h*this.carLateralVel,this.velocity.z=c*this.carSpeed+l*this.carLateralVel,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.worldGen.resolveHorizontalCollision(this.position,1.4),this.speedMs=Math.hypot(this.velocity.x,this.velocity.z);let k=0;const N=[];for(let Y=0;Y<4;Y++){const J=this.roverWheels[Y],ct=this.position.x+h*J.baseX-a*J.baseZ,tt=this.position.z+l*J.baseX-c*J.baseZ,rt=Math.max(ke-.35,this.worldGen.getCollisionHeight(ct,tt));N.push(rt),k+=rt*.25}this.position.y=vt(this.position.y,k,1-Math.exp(-16*t));const V=(N[0]+N[1])*.5,H=(N[2]+N[3])*.5,F=(N[0]+N[2])*.5,W=(N[1]+N[3])*.5,X=Math.atan2(V-H,2.92),j=Math.atan2(W-F,2.04),dt=ft((this.carSpeed-M)/Math.max(t,.005),-25,25),ut=T*this.carSpeed;this.suspensionPitch=vt(this.suspensionPitch,dt*.0038,t*8),this.suspensionRoll=vt(this.suspensionRoll,-ut*.0055,t*8),this.chassisTerrainPitch=vt(this.chassisTerrainPitch,X,1-Math.exp(-14*t)),this.chassisTerrainRoll=vt(this.chassisTerrainRoll,j,1-Math.exp(-14*t)),this.roverGroup.position.copy(this.position),this.roverGroup.rotation.order="YXZ",this.roverGroup.rotation.y=this.yaw,this.roverGroup.rotation.x=this.chassisTerrainPitch,this.roverGroup.rotation.z=this.chassisTerrainRoll,this.roverChassis.rotation.x=this.suspensionPitch,this.roverChassis.rotation.z=this.suspensionRoll,this.wheelRotation-=this.carSpeed/.44*t;for(let Y=0;Y<4;Y++){const J=this.roverWheels[Y];J.wheelMesh.rotation.x=this.wheelRotation,J.isFront&&(J.steerPivot.rotation.y=this.carSteer*1.15);const ct=ft(N[Y]-this.position.y,-.22,.22);J.steerPivot.position.y=J.baseY+ct*.65}if(this.orbitResetTimer>0?this.orbitResetTimer-=t:(this.camOrbitYaw=vt(this.camOrbitYaw,0,t*2.8),this.camOrbitPitch=vt(this.camOrbitPitch,0,t*2.8)),this.thirdPerson){const J=this.yaw+this.camOrbitYaw-this.carSteer*.08,ct=this.camOrbitPitch,tt=this.position.x+Math.sin(J)*Math.cos(ct)*8.2,rt=this.position.z+Math.cos(J)*Math.cos(ct)*8.2,pt=this.position.y+2.75-Math.sin(ct)*8.2,mt=this.worldGen.getCollisionHeight(tt,rt)+.8;this.smoothCamFloorY=vt(this.smoothCamFloorY||mt,mt,1-Math.exp(-10*t));const Kt=Math.max(pt,this.smoothCamFloorY),Ft=new U(tt,Kt,rt);this.worldGen.resolveHorizontalCollision(Ft,.5);const ee=1-Math.exp(-14*t);this.camera.position.lerp(Ft,ee);const B=this.position.y+1.25+this.chassisTerrainPitch*.5,ne=new U(this.position.x,B,this.position.z);this.smoothLookTarget.lengthSq()<.001?this.smoothLookTarget.copy(ne):this.smoothLookTarget.lerp(ne,1-Math.exp(-18*t)),this.camera.up.set(0,1,0),this.camera.lookAt(this.smoothLookTarget)}else{const Y=a+Math.cos(this.yaw)*this.camOrbitYaw,J=c-Math.sin(this.yaw)*this.camOrbitYaw;this.camera.position.set(this.position.x-h*.42+a*.1,this.position.y+1.38,this.position.z-l*.42+c*.1),this.camera.lookAt(this.camera.position.x+Y*30,this.camera.position.y+Math.sin(this.camOrbitPitch+X)*15,this.camera.position.z+J*30)}this.camera.fov=vt(this.camera.fov,64+ft(this.speedMs/60,0,1)*13,t*6),this.camera.updateProjectionMatrix()}_updateRealisticAircraft(t){const e=(this.keys.KeyS||this.keys.ArrowDown?1:0)-(this.keys.KeyW||this.keys.ArrowUp?1:0),n=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0),i=(this.keys.KeyQ?1:0)-(this.keys.KeyE?1:0),o=!!(this.keys.ShiftLeft||this.keys.ShiftRight),r=!!(this.keys.ControlLeft||this.keys.ControlRight),a=!!this.keys.Space;o&&(this.airThrottle=ft(this.airThrottle+t*.45,0,1)),r&&(this.airThrottle=ft(this.airThrottle-t*.55,0,1));const c=Math.max(ke+.5,this.worldGen.getCollisionHeight(this.position.x,this.position.z)),h=this.position.y-(c+1.05),l=h<=.15;this.gearDeployed=h<22,this.landingGearGroup&&(this.landingGearGroup.visible=this.gearDeployed);const d=o&&this.airThrottle>.95?85:45,u=this.airThrottle*d,f=.0055*this.airSpeed*this.airSpeed+(l?1.8:.35),g=-9.81*Math.sin(this.airPitch);this.airSpeed+=(u-f+g)*t;const v=o?380:195;if(this.airSpeed=ft(this.airSpeed,l?0:26,v),e!==0?this.airPitch=ft(this.airPitch+e*1.35*t,-.92,.92):this.airPitch=vt(this.airPitch,.02,t*1.6),a&&(this.airPitch=vt(this.airPitch,.35,t*5),this.airSpeed<45&&(this.airSpeed=vt(this.airSpeed,60,t*3.5))),l&&this.airSpeed<32)this.airRoll=vt(this.airRoll,0,t*8),this.airPitch=Math.max(0,this.airPitch),this.yaw-=n*1.05*ft(this.airSpeed/16,.1,1)*t;else{const b=n!==0?n*1.05:0,P=n!==0?4.2:3.4;this.airRoll=vt(this.airRoll,b,t*P);const w=9.81*Math.tan(this.airRoll)/Math.max(this.airSpeed,28);this.yaw-=w*1.85*t,this.yaw+=i*.75*t}const m=ft((this.airSpeed-22)/16,0,1.25)*Math.cos(this.airRoll*.55),p=this.airSpeed*Math.sin(this.airPitch)*m-9.81*(1-Math.min(1,m)),x=-Math.sin(this.yaw)*Math.cos(this.airPitch),_=-Math.cos(this.yaw)*Math.cos(this.airPitch);this.velocity.set(x*this.airSpeed,p,_*this.airSpeed),this.position.addScaledVector(this.velocity,t);const M=Math.max(ke+1.05,this.worldGen.getCollisionHeight(this.position.x,this.position.z)+1.05);this.position.y<=M&&(this.position.y=vt(this.position.y,M,1-Math.exp(-24*t)),this.velocity.y<0&&(this.velocity.y=0),this.airPitch<0&&(this.airPitch=vt(this.airPitch,0,1-Math.exp(-8*t)))),this.speedMs=this.airSpeed,this.gForce=ft(1+Math.abs(Math.tan(this.airRoll))*.65+e*.8,.4,6.5),this.droneGroup.position.copy(this.position),this.droneGroup.rotation.order="YXZ",this.droneGroup.rotation.y=this.yaw,this.droneBody.rotation.x=this.airPitch,this.droneBody.rotation.z=-this.airRoll;const C=.5+this.airThrottle*1.8;for(const b of this.thrusterGlows)b.scale.set(1,C,1);this.orbitResetTimer>0?this.orbitResetTimer-=t:(this.camOrbitYaw=vt(this.camOrbitYaw,0,t*2.5),this.camOrbitPitch=vt(this.camOrbitPitch,0,t*2.5));const S=new U(-Math.sin(this.yaw)*Math.cos(this.airPitch),Math.sin(this.airPitch),-Math.cos(this.yaw)*Math.cos(this.airPitch)).normalize();if(this.thirdPerson){const b=this.yaw+this.camOrbitYaw,P=this.airPitch+this.camOrbitPitch,w=new U(-Math.sin(b)*Math.cos(P),Math.sin(P),-Math.cos(b)*Math.cos(P)).normalize(),y=this.position.clone().addScaledVector(w,-14.5).add(new U(0,3.2,0)),T=Math.max(ke+1,this.worldGen.getCollisionHeight(y.x,y.z)+1.4);this.smoothCamFloorY=vt(this.smoothCamFloorY||T,T,1-Math.exp(-8*t)),y.y=Math.max(y.y,this.smoothCamFloorY);const D=1-Math.exp(-14*t);this.camera.position.lerp(y,D);const I=this.position.clone().addScaledVector(S,32);this.smoothLookTarget.lengthSq()<.001?this.smoothLookTarget.copy(I):this.smoothLookTarget.lerp(I,1-Math.exp(-18*t));const k=-this.airRoll*.28;this.camera.up.set(-Math.sin(k),Math.cos(k),0),this.camera.lookAt(this.smoothLookTarget)}else{this.camera.position.copy(this.position).add(new U(0,.55,0));const b=-this.airRoll*.65;this.camera.up.set(-Math.sin(b),Math.cos(b),0),this.camera.lookAt(this.position.clone().addScaledVector(S,60))}this.camera.fov=vt(this.camera.fov,65+ft(this.airSpeed/260,0,1)*18,t*5),this.camera.updateProjectionMatrix()}_updateRealisticRocket(t){const e=!!(this.keys.ShiftLeft||this.keys.ShiftRight||this.keys.Space),n=!!(this.keys.ControlLeft||this.keys.ControlRight),i=this.keys.KeyW||this.keys.ArrowUp?1:0,o=this.keys.KeyS||this.keys.ArrowDown?1:0,r=this.keys.KeyA||this.keys.ArrowLeft?1:0,a=this.keys.KeyD||this.keys.ArrowRight?1:0,c=this.keys.KeyQ?1:0,h=this.keys.KeyE?1:0;this.keys.KeyR&&this.position.y>6e3?this.warpBoost=!0:this.warpBoost=!1;const l=Math.max(ke+1,this.worldGen.getCollisionHeight(this.position.x,this.position.z)),u=this.position.y-(l+1)<3;u&&e&&(this.launchInitiated=!0),e?this.rocketThrottle=ft(this.rocketThrottle+t*.85,0,1):n?this.rocketThrottle=ft(this.rocketThrottle-t*.95,0,1):!this.launchInitiated&&u&&(this.rocketThrottle=0);const f=this.position.y,g=Math.exp(-Math.max(0,f)/5200),v=f>7500;f>4500&&this.rocketStage===1&&(this.rocketStage=2,this.boosterStageMesh&&(this.boosterStageMesh.visible=!1));const m=this.warpBoost?2400:this.rocketStage===1?135:85,p=this.rocketThrottle*m,x=.0032*g*this.rocketSpeed*this.rocketSpeed,_=v?0:9.81*(1-smoothstep(1200,14e3,f)),M=i-o,C=a-r,S=c-h,b=v?1.8:.92;if(this.rocketPitch+=M*b*t,this.rocketRoll+=C*b*1.5*t,this.rocketYaw+=S*b*t,this.launchInitiated&&f>220&&f<6200){const I=smoothstep(220,6200,f)*.68;this.rocketPitch=vt(this.rocketPitch,-Math.PI*.5+I,t*.55)}const P=new U(-Math.sin(this.rocketYaw)*Math.cos(this.rocketPitch),-Math.sin(this.rocketPitch),-Math.cos(this.rocketYaw)*Math.cos(this.rocketPitch)).normalize(),w=this.warpBoost?25e3:v?5200:1400;this.rocketSpeed+=(p-x)*t,n&&this.rocketSpeed>10&&(this.rocketSpeed-=55*t),this.rocketSpeed=ft(this.rocketSpeed,u&&!this.launchInitiated?0:5,w),this.velocity.copy(P).multiplyScalar(this.rocketSpeed),this.velocity.y-=_*t;const y=this.position.distanceTo(new U(14e3,16200,-12e3));if(y<3200&&y>1820){const I=new U(14e3,16200,-12e3).sub(this.position).normalize();this.velocity.addScaledVector(I,12*t)}const T=this.position.distanceTo(new U(-22e3,22400,24e3));if(T<4200&&T>2220){const I=new U(-22e3,22400,24e3).sub(this.position).normalize();this.velocity.addScaledVector(I,18*t)}if(this.position.addScaledVector(this.velocity,t),f<5e3){const I=this.worldGen.getCollisionHeight(this.position.x,this.position.z)+1.2;this.position.y<=I&&(this.position.y=I,this.velocity.y<-15&&(this.velocity.y=0),this.rocketSpeed=vt(this.rocketSpeed,0,t*5),this.launchInitiated=!1)}if(this.rocketGroup.position.copy(this.position),this.rocketGroup.rotation.order="YXZ",this.rocketGroup.rotation.y=this.rocketYaw,this.rocketGroup.rotation.x=this.rocketPitch,this.rocketGroup.rotation.z=this.rocketRoll,this.rocketForwardFlaps)for(let I=0;I<this.rocketForwardFlaps.length;I++)this.rocketForwardFlaps[I].rotation.z=(I===0?1:-1)*(.2+M*.45);if(this.rocketAftFlaps)for(let I=0;I<this.rocketAftFlaps.length;I++)this.rocketAftFlaps[I].rotation.z=(I===0?1:-1)*(.2+C*.55);const D=this.rocketThrottle*(this.warpBoost?3:v?1.8:1.1);if(this.rocketPlumeGroup&&(this.rocketPlumeGroup.visible=this.rocketThrottle>.05,this.rocketPlumeGroup.visible)){const I=1+(Math.random()-.5)*.18;this.plumeCore.scale.set(D*I,D*I,D*I),this.plumeOuter.scale.set(D*I,D*I,D*I),this.rocketEngineLight.intensity=this.rocketThrottle*(v?24:55)}if(this.reentryPlasma){const I=f<8e3&&f>1200&&this.rocketSpeed>140;this.reentryPlasma.material.opacity=I?ft((this.rocketSpeed-140)/250,0,.85):0}if(this.rocketHeadlights){const I=this.flashlightOn||f<800;for(const k of this.rocketHeadlights)k.intensity=I?42:0}if(this.thirdPerson){const I=this.warpBoost?55:38,k=new U(0,1,0),N=this.position.clone().sub(P.clone().multiplyScalar(I)).addScaledVector(k,12);this.camera.position.lerp(N,1-Math.exp(-12*t)),this.camera.lookAt(this.position.clone().addScaledVector(P,16));const V=this.warpBoost?88:this.rocketSpeed>600?76:64;this.camera.fov=vt(this.camera.fov,V,t*4),this.camera.updateProjectionMatrix()}else{const I=this.position.clone().addScaledVector(P,24);this.camera.position.copy(I),this.camera.lookAt(I.clone().addScaledVector(P,60))}}}class x0{constructor(t,e){this.scene=t,this.atmosphere=e,this.masterVolume=.55,this.audioInitialized=!1,this.lastStepPhase=0,this._initWeatherParticles()}_initWeatherParticles(){const e=new Float32Array(24e3),n=new Float32Array(8e3);for(let r=0;r<8e3;r++)e[r*3]=(Math.random()-.5)*140,e[r*3+1]=Math.random()*80,e[r*3+2]=(Math.random()-.5)*140,n[r]=Math.random();const i=new be;i.setAttribute("position",new xe(e,3)),i.setAttribute("aSeed",new xe(n,1)),this.weatherUniforms={uTime:{value:0},uCameraPos:{value:new U},uMode:{value:0},uIntensity:{value:0}};const o=new Ne({transparent:!0,depthWrite:!1,uniforms:this.weatherUniforms,vertexShader:`
        attribute float aSeed;
        uniform float uTime;
        uniform vec3 uCameraPos;
        uniform float uMode;
        uniform float uIntensity;

        varying float vAlpha;
        varying float vMode;

        void main() {
          vMode = uMode;
          if (uIntensity < 0.01) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
            return;
          }

          float fallSpeed = uMode > 1.5 ? 6.5 : 34.0;
          vec3 p = position;
          p.y -= uTime * fallSpeed * (0.8 + aSeed * 0.4);
          if (uMode > 1.5) {
            p.x += sin(uTime * 1.8 + aSeed * 25.0) * 3.0;
            p.z += cos(uTime * 1.5 + aSeed * 19.0) * 3.0;
          } else {
            p.x += uTime * 3.5;
          }

          // Wrap particles continuously in a 140x80x140 volume around camera
          vec3 boxSize = vec3(140.0, 80.0, 140.0);
          vec3 rel = mod(p - uCameraPos + boxSize * 0.5, boxSize) - boxSize * 0.5;
          vec3 worldPos = uCameraPos + rel;

          vec4 mvPos = modelViewMatrix * vec4(worldPos, 1.0);
          gl_Position = projectionMatrix * mvPos;

          float dist = length(rel);
          vAlpha = (1.0 - smoothstep(35.0, 68.0, dist)) * uIntensity;
          gl_PointSize = (uMode > 1.5 ? 4.2 : 2.6) * (60.0 / max(-mvPos.z, 5.0));
        }
      `,fragmentShader:`
        precision mediump float;
        varying float vAlpha;
        varying float vMode;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          vec3 col = vMode > 1.5 ? vec3(0.95, 0.98, 1.0) : vec3(0.72, 0.84, 0.96);
          float alpha = (1.0 - d * 2.0) * vAlpha * (vMode > 1.5 ? 0.85 : 0.55);
          gl_FragColor = vec4(col, alpha);
        }
      `});this.weatherPoints=new Tc(i,o),this.weatherPoints.frustumCulled=!1,this.scene.add(this.weatherPoints)}initAudio(){if(!this.audioInitialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.masterVolume,this.masterGain.connect(this.ctx.destination);const e=this.ctx.sampleRate,n=e*3,i=this.ctx.createBuffer(1,n,e),o=i.getChannelData(0);let r=0,a=0,c=0;for(let d=0;d<n;d++){const u=Math.random()*2-1;r=.997*r+u*.029,a=.985*a+u*.032,c=.95*c+u*.045,o[d]=(r+a+c+u*.05)*.35}const h=this.ctx.createBufferSource();h.buffer=i,h.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.value=320,this.windFilter.Q.value=1.8,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.08,h.connect(this.windFilter).connect(this.windGain).connect(this.masterGain),h.start();const l=this.ctx.createBufferSource();l.buffer=i,l.loop=!0,this.oceanFilter=this.ctx.createBiquadFilter(),this.oceanFilter.type="lowpass",this.oceanFilter.frequency.value=240,this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.value=.05,l.connect(this.oceanFilter).connect(this.oceanGain).connect(this.masterGain),l.start(),this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=55,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=180,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineOsc.connect(this.engineFilter).connect(this.engineGain).connect(this.masterGain),this.engineOsc.start(),this.audioInitialized=!0}catch{}}setVolume(t){this.masterVolume=ft(t,0,1),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.masterVolume,this.ctx.currentTime,.05)}_triggerFootstep(){if(!this.audioInitialized||!this.ctx||this.masterVolume<.01)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(115,t),e.frequency.exponentialRampToValueAtTime(38,t+.07),n.gain.setValueAtTime(.11,t),n.gain.exponentialRampToValueAtTime(.001,t+.08),e.connect(n).connect(this.masterGain),e.start(t),e.stop(t+.085)}update(t,e){const n=performance.now()*.001,i=e.position,o=this.atmosphere.state.weatherPreset;if(this.weatherUniforms.uTime.value=n,this.weatherUniforms.uCameraPos.value.copy(e.camera.position),o==="storm"?(this.weatherUniforms.uMode.value=1,this.weatherUniforms.uIntensity.value=.9):o==="blizzard"||i.y>380&&this.atmosphere.state.cloudCoverage>.6?(this.weatherUniforms.uMode.value=2,this.weatherUniforms.uIntensity.value=.95):this.weatherUniforms.uIntensity.value=vt(this.weatherUniforms.uIntensity.value,0,t*3),!this.audioInitialized||!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const r=this.ctx.currentTime,a=e.speedMs,c=ft(i.y/600,0,1),h=ft(a/120,0,1),l=ft(.04+c*.16+h*.25+this.atmosphere.state.stormFactor*.22,.02,.55);this.windGain.gain.setTargetAtTime(l,r,.1),this.windFilter.frequency.setTargetAtTime(250+c*420+h*680,r,.1);const d=ft(1-Math.abs(i.y)/48,0,1),u=(Math.sin(n*.95)*.5+.5)*d*.18;if(this.oceanGain.gain.setTargetAtTime(u,r,.15),this.oceanFilter.frequency.setTargetAtTime(160+Math.sin(n*.95)*90,r,.15),e.mode===Wt.ROVER){const f=a/18%1,g=46+a*1.85+f*24;this.engineOsc.type="sawtooth",this.engineOsc.frequency.setTargetAtTime(g,r,.06),this.engineFilter.frequency.setTargetAtTime(160+a*8,r,.06),this.engineGain.gain.setTargetAtTime(.05+ft(a/45,0,.12),r,.08)}else if(e.mode===Wt.DRONE){const f=110+ft(a*.85,0,340);this.engineOsc.type="triangle",this.engineOsc.frequency.setTargetAtTime(f,r,.08),this.engineFilter.frequency.setTargetAtTime(420+a*4,r,.08),this.engineGain.gain.setTargetAtTime(.04+ft(a/300,0,.1),r,.08)}else if(this.engineGain.gain.setTargetAtTime(0,r,.1),e.onGround&&a>.6){const f=Math.floor(e.walkCycle/Math.PI);f!==this.lastStepPhase&&(this.lastStepPhase=f,this._triggerFootstep())}}}class _0{constructor(t,e,n,i,o,r,a){this.worldGen=t,this.atmosphere=e,this.terrainManager=n,this.worldElements=i,this.traversal=o,this.weatherAudio=r,this.lifeSim=a,this.mapOpen=!1,this.hudVisible=!0,this.mapCenter={x:0,z:0},this.mapHalfSpan=5200,this.isPanningMap=!1,this.panStart={x:0,y:0,cx:0,cz:0},this.mapDragMoved=!1,this.fpsFrames=0,this.fpsTime=performance.now(),this.currentFps=60,this.frameTimeMs=16.6,this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.minimapBuffer=document.createElement("canvas"),this.minimapBuffer.width=140,this.minimapBuffer.height=140,this.minimapBufCtx=this.minimapBuffer.getContext("2d"),this.lastMinimapSnap={x:999999,z:999999},this.worldMapCanvas=document.getElementById("worldmap-canvas"),this.worldMapCtx=this.worldMapCanvas.getContext("2d"),this.worldMapBuffer=document.createElement("canvas"),this.worldMapBuffer.width=512,this.worldMapBuffer.height=458,this.worldMapBufCtx=this.worldMapBuffer.getContext("2d"),this.worldMapDirty=!0,this._bindUIEvents(),this._populateLandmarkLists()}_bindUIEvents(){document.querySelectorAll("[data-mode-btn]").forEach(d=>{d.addEventListener("click",()=>{const u=d.getAttribute("data-mode-btn");this.traversal.setMode(u),this.updateModeButtons()})});const t=document.getElementById("btn-toggle-cam");t&&t.addEventListener("click",()=>{this.traversal.thirdPerson=!this.traversal.thirdPerson,this.traversal._syncModeMeshes(),t.textContent=this.traversal.thirdPerson?"Cam: 3rd Person [C]":"Cam: 1st Person [C]"});const e=document.getElementById("btn-toggle-light");e&&e.addEventListener("click",()=>{this.traversal.flashlightOn=!this.traversal.flashlightOn,e.classList.toggle("active",this.traversal.flashlightOn)});const n=document.getElementById("btn-npc-talk");n&&n.addEventListener("click",()=>{this.lifeSim&&this.lifeSim.interactWithNearestNpc()}),document.getElementById("btn-open-map").addEventListener("click",()=>this.toggleWorldMap(!0)),document.getElementById("btn-close-map").addEventListener("click",()=>this.toggleWorldMap(!1)),document.getElementById("btn-map-zoom-in").addEventListener("click",()=>{this.mapHalfSpan=ft(this.mapHalfSpan*.6,1e3,Ie),this.worldMapDirty=!0,this.renderWorldMap()}),document.getElementById("btn-map-zoom-out").addEventListener("click",()=>{this.mapHalfSpan=ft(this.mapHalfSpan*1.65,1e3,Ie),this.worldMapDirty=!0,this.renderWorldMap()}),document.getElementById("btn-map-reset").addEventListener("click",()=>{this.mapCenter.x=0,this.mapCenter.z=0,this.mapHalfSpan=5200,this.worldMapDirty=!0,this.renderWorldMap()}),document.getElementById("btn-map-continent").addEventListener("click",()=>{this.mapCenter.x=0,this.mapCenter.z=0,this.mapHalfSpan=64e3,this.worldMapDirty=!0,this.renderWorldMap()}),window.addEventListener("keydown",d=>{d.target.tagName!=="INPUT"&&(d.code==="KeyM"?this.toggleWorldMap(!this.mapOpen):d.code==="KeyH"?document.getElementById("studio-panel").classList.toggle("collapsed"):d.code==="KeyE"?this.worldElements&&this.worldElements.starbase&&this.worldElements.starbase.isPlayerNearPad(this.traversal.position)?this.traversal.setMode(Wt.ROCKET):this.lifeSim&&this.lifeSim.interactWithNearestNpc():d.code==="Escape"&&this.mapOpen&&this.toggleWorldMap(!1),this.updateModeButtons())}),document.getElementById("slider-time").addEventListener("input",d=>{this.atmosphere.state.timeOfDay=parseFloat(d.target.value)}),document.getElementById("slider-timespeed").addEventListener("input",d=>{this.atmosphere.state.timeSpeed=parseFloat(d.target.value),document.getElementById("val-timespeed").textContent=`${parseFloat(d.target.value).toFixed(2)}x`});const r=document.getElementById("slider-clouds");r.addEventListener("input",d=>{this.atmosphere.state.cloudCoverage=parseFloat(d.target.value),document.getElementById("val-clouds").textContent=`${Math.round(parseFloat(d.target.value)*100)}%`});const a=document.getElementById("slider-waves");a.addEventListener("input",d=>{this.atmosphere.state.waveHeight=parseFloat(d.target.value),document.getElementById("val-waves").textContent=`${parseFloat(d.target.value).toFixed(1)}x`}),document.getElementById("slider-lod").addEventListener("input",d=>{this.terrainManager.maxLodLevel=parseInt(d.target.value,10),this.terrainManager.lastUpdatePos.set(999999,999999,999999);const u=Math.round(128*Math.pow(2,this.terrainManager.maxLodLevel)*7/1e3);document.getElementById("val-lod").textContent=`${u} km`}),document.getElementById("slider-foliage").addEventListener("input",d=>{this.worldElements.densityMultiplier=parseFloat(d.target.value),this.worldElements.forceRefreshFoliage(this.traversal.position),document.getElementById("val-foliage").textContent=`${Math.round(parseFloat(d.target.value)*100)}%`}),document.getElementById("slider-audio").addEventListener("input",d=>{this.weatherAudio.setVolume(parseFloat(d.target.value)),document.getElementById("val-audio").textContent=`${Math.round(parseFloat(d.target.value)*100)}%`}),document.querySelectorAll("[data-weather-preset]").forEach(d=>{d.addEventListener("click",()=>{const u=d.getAttribute("data-weather-preset");this.atmosphere.applyWeatherPreset(u),document.querySelectorAll("[data-weather-preset]").forEach(f=>f.classList.remove("active")),d.classList.add("active"),r.value=this.atmosphere.state.cloudCoverage,document.getElementById("val-clouds").textContent=`${Math.round(this.atmosphere.state.cloudCoverage*100)}%`,a.value=this.atmosphere.state.waveHeight,document.getElementById("val-waves").textContent=`${this.atmosphere.state.waveHeight.toFixed(1)}x`})}),this.worldMapCanvas.addEventListener("mousedown",d=>{this.isPanningMap=!0,this.mapDragMoved=!1,this.panStart={x:d.clientX,y:d.clientY,cx:this.mapCenter.x,cz:this.mapCenter.z}}),window.addEventListener("mousemove",d=>{if(!this.mapOpen)return;const u=this.worldMapCanvas.getBoundingClientRect();if(this.isPanningMap){const f=d.clientX-this.panStart.x,g=d.clientY-this.panStart.y;Math.hypot(f,g)>5&&(this.mapDragMoved=!0);const v=this.mapHalfSpan*2/u.width,m=this.mapHalfSpan*2/u.height;this.mapCenter.x=ft(this.panStart.cx-f*v,-Ie,Ie),this.mapCenter.z=ft(this.panStart.cz-g*m,-Ie,Ie),this.worldMapDirty=!0,this.renderWorldMap()}else if(d.clientX>=u.left&&d.clientX<=u.right&&d.clientY>=u.top&&d.clientY<=u.bottom){const f=(d.clientX-u.left)/u.width,g=(d.clientY-u.top)/u.height,v=this.mapCenter.x+(f-.5)*this.mapHalfSpan*2,m=this.mapCenter.z+(g-.5)*this.mapHalfSpan*2,p=this.worldGen.getTerrainData(v,m),x=document.getElementById("map-hover-readout");x&&(x.textContent=`Cursor: X ${(v/1e3).toFixed(2)} km, Z ${(m/1e3).toFixed(2)} km | Elev: ${Math.round(p.height)}m | ${p.biome.name} (Click to Fast-Travel)`)}}),window.addEventListener("mouseup",d=>{if(!(!this.mapOpen||!this.isPanningMap)&&(this.isPanningMap=!1,!this.mapDragMoved)){const u=this.worldMapCanvas.getBoundingClientRect(),f=(d.clientX-u.left)/u.width,g=(d.clientY-u.top)/u.height,v=this.mapCenter.x+(f-.5)*this.mapHalfSpan*2,m=this.mapCenter.z+(g-.5)*this.mapHalfSpan*2;this.fastTravelTo(v,m)}}),this.worldMapCanvas.addEventListener("wheel",d=>{d.preventDefault();const u=d.deltaY<0?.75:1.35;this.mapHalfSpan=ft(this.mapHalfSpan*u,900,Ie),this.worldMapDirty=!0,this.renderWorldMap()},{passive:!1})}_populateLandmarkLists(){const t=document.getElementById("landmark-quickbar"),e=document.getElementById("worldmap-landmark-list");t.innerHTML="",e.innerHTML="",Hi.forEach((n,i)=>{if(i<9){const r=document.createElement("button");r.className="landmark-chip",r.textContent=n.name.replace("Solis Harbor ","").replace("Solis Coastal ","").replace("Summit ",""),r.title=`${n.name} (${n.biome}) - Click to Fast-Travel`,r.addEventListener("click",()=>this.fastTravelTo(n.x,n.z,n.heading)),t.appendChild(r)}const o=document.createElement("div");o.className="map-landmark-card",o.innerHTML=`
        <div class="lm-card-header">
          <span class="lm-card-title">${n.name}</span>
          <span class="lm-card-tag">${n.category}</span>
        </div>
        <div class="lm-card-meta">X: ${(n.x/1e3).toFixed(1)} km, Z: ${(n.z/1e3).toFixed(1)} km • Elev: ${Math.round(n.baseElevation)}m</div>
        <div class="lm-card-desc">${n.description}</div>
      `,o.addEventListener("click",()=>this.fastTravelTo(n.x,n.z,n.heading)),e.appendChild(o)})}fastTravelTo(t,e,n=null){(Math.abs(t-800)<500&&Math.abs(e-1200)<500||Math.abs(t-14e3)<2500&&Math.abs(e+12e3)<2500||Math.abs(t+22e3)<3500&&Math.abs(e-24e3)<3500)&&this.traversal.mode!==Wt.ROCKET&&this.traversal.setMode(Wt.ROCKET),this.traversal.teleportTo(t,e,n),this.terrainManager.primeAround(t,e),this.worldElements.forceRefreshFoliage(this.traversal.position),this.lastMinimapSnap={x:999999,z:999999},this.mapOpen&&this.toggleWorldMap(!1)}toggleWorldMap(t){this.mapOpen=t,document.getElementById("worldmap-modal").classList.toggle("hidden",!t),t&&(document.pointerLockElement&&document.exitPointerLock(),this.worldMapDirty=!0,this.renderWorldMap())}updateModeButtons(){document.querySelectorAll("[data-mode-btn]").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-mode-btn")===this.traversal.mode)})}_sampleMapPixelRGB(t,e){const n=this.worldGen.getTerrainData(t,e),i=n.height;if(i<ke){const x=ft(-i/65,0,1),_=1-ft(-i/6,0,1),M=Math.round(10*(1-x)+6*x+_*35),C=Math.round(82*(1-x)+24*x+_*78),S=Math.round(142*(1-x)+54*x+_*68);return[ft(M,0,255),ft(C,0,255),ft(S,0,255)]}const o=22,r=this.worldGen.getHeight(t+o,e),a=this.worldGen.getHeight(t,e+o),c=(i-r)/o,h=(i-a)/o,l=1+(c+h)*.52,d=ft(l,.56,1.44),u=1-ft((i-.5)/4,0,1);let f=72,g=125,v=58;if(n.moisture>.4){const x=ft((n.moisture-.4)/.3,0,1);f=Math.round(f*(1-x)+32*x),g=Math.round(g*(1-x)+84*x),v=Math.round(v*(1-x)+40*x)}if(n.canyonZone>.12){const x=ft((n.canyonZone-.12)/.5,0,1);f=Math.round(f*(1-x)+188*x),g=Math.round(g*(1-x)+86*x),v=Math.round(v*(1-x)+48*x)}if(n.desertZone>.12){const x=ft((n.desertZone-.12)/.5,0,1);f=Math.round(f*(1-x)+218*x),g=Math.round(g*(1-x)+165*x),v=Math.round(v*(1-x)+74*x)}if(n.volcanicWeight>.12){const x=ft((n.volcanicWeight-.12)/.5,0,1),_=Math.hypot(t-5200,e-3800);if(_<320){const M=1-ft((_-110)/200,0,1);f=Math.round(f*(1-x)+(235*M+46*(1-M))*x),g=Math.round(g*(1-x)+(72*M+42*(1-M))*x),v=Math.round(v*(1-x)+(24*M+44*(1-M))*x)}else f=Math.round(f*(1-x)+46*x),g=Math.round(g*(1-x)+42*x),v=Math.round(v*(1-x)+44*x)}if(i>140){const x=ft((i-140)/240,0,1);f=Math.round(f*(1-x)+116*x),g=Math.round(g*(1-x)+120*x),v=Math.round(v*(1-x)+126*x)}if(i>280){const x=ft((i-280)/200,0,1)*(1-n.volcanicWeight*.75);f=Math.round(f*(1-x)+242*x),g=Math.round(g*(1-x)+246*x),v=Math.round(v*(1-x)+252*x)}if(u>.01&&(f=Math.round(f*(1-u)+214*u),g=Math.round(g*(1-u)+196*u),v=Math.round(v*(1-u)+148*u)),n.cityWeight>.15){const x=ft((n.cityWeight-.15)/.5,0,1);f=Math.round(f*(1-x)+104*x),g=Math.round(g*(1-x)+114*x),v=Math.round(v*(1-x)+126*x)}if(n.roadMask>.28){const x=ft((n.roadMask-.28)/.45,0,1);f=Math.round(f*(1-x)+238*x),g=Math.round(g*(1-x)+188*x),v=Math.round(v*(1-x)+64*x)}const m=Math.abs(i%80-40)<1.8?.91:1,p=d*m;return[ft(Math.round(f*p),0,255),ft(Math.round(g*p),0,255),ft(Math.round(v*p),0,255)]}_updateMinimap(){const t=this.traversal.position,e=260,n=this.minimapCanvas.width,i=this.minimapCanvas.height,o=n*.5/e,r=e*1.5;if(Math.hypot(t.x-this.lastMinimapSnap.x,t.z-this.lastMinimapSnap.z)>120){this.lastMinimapSnap={x:t.x,z:t.z};const v=this.minimapBuffer.width,m=this.minimapBuffer.height,p=this.minimapBufCtx.createImageData(v,m),x=p.data;let _=0;for(let M=0;M<m;M++){const C=t.z+(M/m-.5)*(r*2);for(let S=0;S<v;S++){const b=t.x+(S/v-.5)*(r*2),[P,w,y]=this._sampleMapPixelRGB(b,C);x[_++]=P,x[_++]=w,x[_++]=y,x[_++]=255}}this.minimapBufCtx.putImageData(p,0,0)}const c=this.minimapCtx;c.clearRect(0,0,n,i),c.save(),c.beginPath(),c.arc(n*.5,i*.5,n*.48,0,Math.PI*2),c.clip();const h=r*2*o,l=(t.x-this.lastMinimapSnap.x)*o,d=(t.z-this.lastMinimapSnap.z)*o,u=n*.5-h*.5-l,f=i*.5-h*.5-d;if(c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(this.minimapBuffer,u,f,h,h),c.strokeStyle="rgba(56, 189, 248, 0.16)",c.lineWidth=1,c.beginPath(),c.arc(n*.5,i*.5,n*.25,0,Math.PI*2),c.stroke(),this.lifeSim){c.fillStyle="#4ade80";for(const v of this.lifeSim.npcs){const m=v.rig.root.position,p=n*.5+(m.x-t.x)*o,x=i*.5+(m.z-t.z)*o;(p-n*.5)**2+(x-i*.5)**2<(n*.46)**2&&(c.beginPath(),c.arc(p,x,2.2,0,Math.PI*2),c.fill())}c.fillStyle="#fbbf24";for(const v of this.lifeSim.vehicles){const m=v.mesh.position,p=n*.5+(m.x-t.x)*o,x=i*.5+(m.z-t.z)*o;(p-n*.5)**2+(x-i*.5)**2<(n*.46)**2&&c.fillRect(p-2,x-2,4,4)}}for(const v of Hi){const m=n*.5+(v.x-t.x)*o,p=i*.5+(v.z-t.z)*o;(m-n*.5)**2+(p-i*.5)**2<(n*.46)**2&&(c.fillStyle="#0284c7",c.beginPath(),c.arc(m,p,4.5,0,Math.PI*2),c.fill(),c.fillStyle="#38bdf8",c.beginPath(),c.arc(m,p,2.8,0,Math.PI*2),c.fill())}const g=-this.traversal.yaw-Math.PI*.5;c.save(),c.translate(n*.5,i*.5),c.rotate(g),c.fillStyle="rgba(56, 189, 248, 0.28)",c.beginPath(),c.moveTo(0,0),c.arc(0,0,36,-.55,.55),c.closePath(),c.fill(),c.fillStyle="#ffffff",c.strokeStyle="#0284c7",c.lineWidth=2,c.beginPath(),c.moveTo(9,0),c.lineTo(-6,-5.5),c.lineTo(-3,0),c.lineTo(-6,5.5),c.closePath(),c.fill(),c.stroke(),c.restore(),c.restore()}renderWorldMap(){if(!this.mapOpen)return;const t=this.worldMapBuffer.width,e=this.worldMapBuffer.height;if(this.worldMapDirty){const C=this.worldMapBufCtx.createImageData(t,e),S=C.data;let b=0;for(let P=0;P<e;P++){const w=this.mapCenter.z+(P/e-.5)*this.mapHalfSpan*2;for(let y=0;y<t;y++){const T=this.mapCenter.x+(y/t-.5)*this.mapHalfSpan*2,[D,I,k]=this._sampleMapPixelRGB(T,w);S[b++]=D,S[b++]=I,S[b++]=k,S[b++]=255}}this.worldMapBufCtx.putImageData(C,0,0),this.worldMapDirty=!1}const n=this.worldMapCtx,i=this.worldMapCanvas.width,o=this.worldMapCanvas.height;n.clearRect(0,0,i,o),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(this.worldMapBuffer,0,0,i,o);const r=(C,S)=>[(.5+(C-this.mapCenter.x)/(this.mapHalfSpan*2))*i,(.5+(S-this.mapCenter.z)/(this.mapHalfSpan*2))*o];n.strokeStyle="rgba(255, 255, 255, 0.12)",n.lineWidth=1;const a=this.mapHalfSpan>2e4?1e4:this.mapHalfSpan>5e3?2e3:1e3,c=Math.floor((this.mapCenter.x-this.mapHalfSpan)/a)*a,h=Math.floor((this.mapCenter.z-this.mapHalfSpan)/a)*a;for(let C=c;C<=this.mapCenter.x+this.mapHalfSpan;C+=a){const[S]=r(C,0);n.beginPath(),n.moveTo(S,0),n.lineTo(S,o),n.stroke()}for(let C=h;C<=this.mapCenter.z+this.mapHalfSpan;C+=a){const[,S]=r(0,C);n.beginPath(),n.moveTo(0,S),n.lineTo(i,S),n.stroke()}const[l,d]=r(430,204),[u,f]=r(1110,236),g=Math.min(l,u),v=Math.min(d,f),m=Math.abs(u-l),p=Math.max(3,Math.abs(f-d));m>2&&(n.fillStyle="#0f172a",n.fillRect(g-1,v-1,m+2,p+2),n.fillStyle="#334155",n.fillRect(g,v,m,p),n.strokeStyle="#f8fafc",n.lineWidth=1,n.setLineDash([4,4]),n.beginPath(),n.moveTo(g+2,v+p*.5),n.lineTo(g+m-2,v+p*.5),n.stroke(),n.setLineDash([])),n.strokeStyle="#1e293b",n.lineWidth=4,n.lineCap="round",n.lineJoin="round";for(const C of this.worldGen.roadPolylines)n.beginPath(),C.forEach(([S,b],P)=>{const[w,y]=r(S,b);P===0?n.moveTo(w,y):n.lineTo(w,y)}),n.stroke();n.strokeStyle="#fbbf24",n.lineWidth=2.2;for(const C of this.worldGen.roadPolylines)n.beginPath(),C.forEach(([S,b],P)=>{const[w,y]=r(S,b);P===0?n.moveTo(w,y):n.lineTo(w,y)}),n.stroke();n.strokeStyle="#0f172a",n.lineWidth=5.5;for(const C of ji){const[S,b]=r(C.x1,C.z1),[P,w]=r(C.x2,C.z2);n.beginPath(),n.moveTo(S,b),n.lineTo(P,w),n.stroke()}n.strokeStyle="#ef4444",n.lineWidth=3.2;for(const C of ji){const[S,b]=r(C.x1,C.z1),[P,w]=r(C.x2,C.z2);n.beginPath(),n.moveTo(S,b),n.lineTo(P,w),n.stroke()}n.font="600 12px Inter, system-ui, sans-serif";for(const C of Hi){const[S,b]=r(C.x,C.z);if(S<-40||S>i+40||b<-20||b>o+20)continue;n.fillStyle="#0f172a",n.beginPath(),n.arc(S,b,7.5,0,Math.PI*2),n.fill(),n.fillStyle="#38bdf8",n.beginPath(),n.arc(S,b,5,0,Math.PI*2),n.fill(),n.fillStyle="rgba(15, 23, 42, 0.88)";const P=n.measureText(C.name).width,w=C.id==="golden_bridge"||C.id==="solis_airport",y=w?b+9:b-24,T=w?b+21:b-12;n.fillRect(S-P*.5-5,y,P+10,16),n.fillStyle="#f8fafc",n.fillText(C.name,S-P*.5,T)}const[x,_]=r(this.traversal.position.x,this.traversal.position.z),M=-this.traversal.yaw-Math.PI*.5;n.save(),n.translate(x,_),n.rotate(M),n.fillStyle="#22c55e",n.strokeStyle="#ffffff",n.lineWidth=2.5,n.beginPath(),n.moveTo(11,0),n.lineTo(-7,-6),n.lineTo(-4,0),n.lineTo(-7,6),n.closePath(),n.fill(),n.stroke(),n.restore()}_updateCompassAndTelemetry(){const t=this.traversal.position,e=this.worldGen.getTerrainData(t.x,t.z),n=this.worldGen.getNormalAndSlope(t.x,t.z);let i=-this.traversal.yaw*180/Math.PI%360;i<0&&(i+=360);const r=["N","NE","E","SE","S","SW","W","NW"][Math.round(i/45)%8];document.getElementById("compass-heading").textContent=`${String(Math.round(i)).padStart(3,"0")}° ${r}`;let a=Hi[0],c=1/0;for(const _ of Hi){const M=Math.hypot(_.x-t.x,_.z-t.z);M<c&&(c=M,a=_)}const h=c>=1e3?`${(c/1e3).toFixed(2)} km`:`${Math.round(c)} m`;document.getElementById("compass-landmark").textContent=`Nearest: ${a.name} (${h})`;const l=document.getElementById("hud-biome-name");if(t.y>6e3){const _=this.worldElements&&this.worldElements.spaceExploration?this.worldElements.spaceExploration.getNearestCelestialBody(t):null;_?(l.textContent=`${_.name} (${_.dist}m)`,l.style.color="#38bdf8"):(l.textContent="Low Earth Orbit (LEO)",l.style.color="#38bdf8"),document.getElementById("hud-altitude").textContent=`${(t.y/1e3).toFixed(1)} km ASL (Outer Space)`}else l.textContent=e.biome.name,l.style.color=e.biome.badge,document.getElementById("hud-altitude").textContent=`${Math.round(t.y)} m ASL (Slope ${Math.round(n.slopeDeg)}°)`;document.getElementById("hud-coords").textContent=`X: ${(t.x/1e3).toFixed(2)} km | Z: ${(t.z/1e3).toFixed(2)} km`;const d=Math.round(this.traversal.speedMs*3.6);if(this.traversal.mode===Wt.ROVER)document.getElementById("hud-speed").textContent=`${d} km/h | Gear ${this.traversal.currentGear} (${this.traversal.engineRpm} RPM)`;else if(this.traversal.mode===Wt.DRONE){const _=Math.round(this.traversal.airThrottle*100),M=this.traversal.gearDeployed?"GEAR DN":"GEAR UP";document.getElementById("hud-speed").textContent=`${d} km/h | Thr ${_}% | ${this.traversal.gForce.toFixed(1)}G (${M})`}else if(this.traversal.mode===Wt.ROCKET){const _=Math.round(this.traversal.rocketThrottle*100),M=this.traversal.rocketStage===1?"BOOSTER 9 + SHIP 25":"ORBITAL STARSHIP",C=this.traversal.warpBoost?" [WARP SPEED]":"",S=Math.round(this.traversal.rocketSpeed*3.6);document.getElementById("hud-speed").textContent=`${S} km/h | Thrust ${_}% | ${M}${C}`}else{const _=this.traversal.isSwimming?"Swimming":this.traversal.speedMs>4?"Running":this.traversal.speedMs>.2?"Walking":"Standing";document.getElementById("hud-speed").textContent=`${d} km/h (${_})`}document.getElementById("hud-fps").textContent=`${this.currentFps} FPS (${this.frameTimeMs.toFixed(1)} ms)`;const u=this.lifeSim?this.lifeSim.npcs.length+this.lifeSim.vehicles.length:0;document.getElementById("hud-chunks").textContent=`${this.terrainManager.getActiveChunkCount()} Chunks | ${u} NPCs & Cars`;const f=this.atmosphere.state.timeOfDay,g=Math.floor(f),v=Math.floor((f-g)*60),m=`${String(g).padStart(2,"0")}:${String(v).padStart(2,"0")}`;document.getElementById("val-time").textContent=m;const p=document.getElementById("slider-time");document.activeElement!==p&&(p.value=f);const x=document.getElementById("npc-proximity-card");if(this.worldElements&&this.worldElements.starbase&&this.worldElements.starbase.isPlayerNearPad(t)&&this.traversal.mode===Wt.EXPLORER)x&&(x.classList.remove("hidden"),document.getElementById("npc-card-name").textContent="SpaceX Starbase — Orbital Launch Mount",document.getElementById("npc-card-routine").textContent="Starship S25 & Super Heavy B9 ready on pad! Press [E] or [4] to Board & Launch",document.getElementById("npc-card-dialogue").classList.add("hidden"));else if(this.lifeSim&&x)if(this.lifeSim.activeDialogue){const _=this.lifeSim.activeDialogue;x.classList.remove("hidden"),document.getElementById("npc-card-name").textContent=_.speaker,document.getElementById("npc-card-routine").textContent=_.status,document.getElementById("npc-card-dialogue").textContent=_.text,document.getElementById("npc-card-dialogue").classList.remove("hidden")}else if(this.lifeSim.nearestNpc&&this.lifeSim.nearestNpcDist<15){const _=this.lifeSim.nearestNpc,M=this.lifeSim.getNpcActivityStatus(_,f);x.classList.remove("hidden"),document.getElementById("npc-card-name").textContent=`${_.name} — ${_.title} (${Math.round(this.lifeSim.nearestNpcDist)}m)`,document.getElementById("npc-card-routine").textContent=`Routine [${m}]: ${M}`,document.getElementById("npc-card-dialogue").classList.add("hidden")}else x.classList.add("hidden")}update(t){this.fpsFrames++;const e=performance.now();e-this.fpsTime>=400&&(this.currentFps=Math.min(144,Math.round(this.fpsFrames*1e3/(e-this.fpsTime))),this.frameTimeMs=(e-this.fpsTime)/this.fpsFrames,this.fpsFrames=0,this.fpsTime=e),this.updateModeButtons(),this._updateCompassAndTelemetry(),this._updateMinimap()}}class M0{constructor(){this.canvas=document.getElementById("world-canvas"),this.renderer=new Xp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ya,this.renderer.toneMapping=Za,this.renderer.toneMappingExposure=1.08,this.scene=new Yp,this.camera=new Be(65,window.innerWidth/window.innerHeight,.8,6e4),this.worldGen=new o0(20261017),this.atmosphere=new r0(this.scene,this.worldGen),this.terrainManager=new a0(this.scene,this.worldGen,this.atmosphere),this.worldElements=new h0(this.scene,this.worldGen,this.atmosphere),this.traversal=new v0(this.camera,this.scene,this.worldGen,this.canvas),this.lifeSim=new g0(this.scene,this.worldGen,this.atmosphere),this.weatherAudio=new x0(this.scene,this.atmosphere),this.mapAndHUD=new _0(this.worldGen,this.atmosphere,this.terrainManager,this.worldElements,this.traversal,this.weatherAudio,this.lifeSim),this.terrainManager.primeAround(this.traversal.position.x,this.traversal.position.z),this.worldElements.forceRefreshFoliage(this.traversal.position),this._bindWindowEvents(),this._runPlaytestScenarioIfRequested(),this.lastTime=performance.now(),this._animate()}_runPlaytestScenarioIfRequested(){const e=new URLSearchParams(window.location.search).get("scn");if(!e)return;const n=(i,o=.033)=>{for(let r=0;r<i;r++)this.traversal.update(o),this.atmosphere.update(o,this.camera.position),this.lifeSim.update(o,this.traversal.position),this.weatherAudio.update(o,this.traversal),this.mapAndHUD.update(o);this.terrainManager.primeAround(this.traversal.position.x,this.traversal.position.z),this.terrainManager.update(this.camera.position),this.worldElements.forceRefreshFoliage(this.traversal.position),this.worldElements.update(.033,this.camera.position),this.mapAndHUD.update(.25)};if(e==="walk_npc"){if(this.traversal.setMode("explorer"),this.traversal.teleportTo(-73.33,207.8,1.57),this.traversal.keys.KeyW=!0,n(25),this.traversal.keys.KeyW=!1,this.lifeSim.nearestNpc){const i=this.lifeSim.nearestNpc.rig.root.position;this.traversal.position.set(i.x+1.8,i.y,i.z-1.6),this.traversal.yaw=Math.atan2(this.traversal.position.x-i.x,this.traversal.position.z-i.z)}n(10),this.lifeSim.interactWithNearestNpc(),n(5)}else e==="car_bridge"?(this.traversal.setMode("rover"),this.traversal.teleportTo(-235,217,1.57),this.traversal.keys.KeyW=!0,this.traversal.keys.ShiftLeft=!0,n(72),this.traversal.keys.KeyW=!1,this.traversal.keys.ShiftLeft=!1):e==="plane_takeoff"?(this.traversal.setMode("drone"),this.traversal.teleportTo(495,220,-1.57),this.traversal.keys.ShiftLeft=!0,this.traversal.keys.Space=!0,n(68),this.traversal.keys.KeyA=!0,n(18),this.traversal.keys.ShiftLeft=!1,this.traversal.keys.Space=!1,this.traversal.keys.KeyA=!1):e==="hike_village"?(this.traversal.setMode("explorer"),this.traversal.teleportTo(1820,-1460,.72),this.traversal.keys.KeyW=!0,n(45),this.traversal.keys.KeyW=!1,this.lifeSim.nearestNpc&&this.lifeSim.nearestNpcDist<14&&this.lifeSim.interactWithNearestNpc(),n(5)):e==="golden_canyon"?(this.atmosphere.applyWeatherPreset("golden"),this.traversal.setMode("rover"),this.traversal.teleportTo(-2600,-1575,0),this.traversal.keys.KeyW=!0,n(60),this.traversal.keys.KeyW=!1):e==="worldmap"?(n(10),this.mapAndHUD.toggleWorldMap(!0),this.mapAndHUD.renderWorldMap()):e==="spacex_launch"?(this.traversal.setMode("rocket"),this.traversal.teleportTo(1050,880,0),this.traversal.keys.ShiftLeft=!0,this.traversal.keys.Space=!0,n(60),this.traversal.keys.KeyW=!0,n(40),this.traversal.keys.ShiftLeft=!1,this.traversal.keys.Space=!1,this.traversal.keys.KeyW=!1):e==="space_moon"&&(this.traversal.setMode("rocket"),this.traversal.teleportTo(14e3,-12e3,0),this.traversal.position.y=16400,n(25));console.log("PLAYTEST_STATE:",JSON.stringify({scn:e,mode:this.traversal.mode,pos:{x:Math.round(this.traversal.position.x*10)/10,y:Math.round(this.traversal.position.y*10)/10,z:Math.round(this.traversal.position.z*10)/10},speedKmh:Math.round(this.traversal.speedMs*3.6),gear:this.traversal.currentGear,rpm:this.traversal.engineRpm,nearestNpc:this.lifeSim.nearestNpc?this.lifeSim.nearestNpc.name:null,nearestNpcDist:Math.round(this.lifeSim.nearestNpcDist*10)/10,dialogueActive:!!this.lifeSim.activeDialogue}))}_bindWindowEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)});const t=document.getElementById("btn-enter-world"),e=document.getElementById("welcome-overlay");t&&e&&t.addEventListener("click",()=>{e.classList.add("hidden"),this.weatherAudio.initAudio();try{this.canvas.requestPointerLock()}catch{}}),this.canvas.addEventListener("dblclick",()=>{if(this.weatherAudio.initAudio(),!document.pointerLockElement&&!this.mapAndHUD.mapOpen)try{this.canvas.requestPointerLock()}catch{}})}_animate(){requestAnimationFrame(()=>this._animate());const t=performance.now(),e=Math.min((t-this.lastTime)*.001,.1);this.lastTime=t;const i=this.camera.position.y>6e3?12e4:6e4;this.camera.far!==i&&(this.camera.far=i,this.camera.updateProjectionMatrix()),this.traversal.update(e),this.atmosphere.update(e,this.camera.position),this.terrainManager.update(this.camera.position,this.traversal),this.worldElements.update(e,this.camera.position),this.lifeSim.update(e,this.traversal.position),this.weatherAudio.update(e,this.traversal),this.mapAndHUD.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.aetheria=new M0});
