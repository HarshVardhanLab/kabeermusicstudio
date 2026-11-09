import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Small dependency-free GLB generator for a stylized, printable-looking figure.
const here = path.dirname(fileURLToPath(import.meta.url));
const groups = new Map();
const materials = [
  ['skin', [0.67, 0.39, 0.25, 1]], ['hair', [0.035, 0.025, 0.022, 1]],
  ['red', [0.56, 0.035, 0.035, 1]], ['redTrim', [0.77, 0.12, 0.08, 1]],
  ['cream', [0.91, 0.84, 0.65, 1]], ['white', [0.92, 0.89, 0.79, 1]],
  ['dark', [0.075, 0.045, 0.035, 1]], ['eye', [0.025, 0.018, 0.015, 1]],
  ['gold', [0.77, 0.55, 0.16, 1]],
];
for (const [name] of materials) groups.set(name, { p: [], n: [], i: [] });
const v3 = (a,b,c) => [a,b,c];
function addVert(g, p, n) { g.p.push(...p); g.n.push(...n); return g.p.length / 3 - 1; }
function tri(g,a,b,c) { g.i.push(a,b,c); }

function ellipsoid(mat, center, radii, seg=18, rings=12) {
  const g=groups.get(mat), start=g.p.length/3;
  for(let j=0;j<=rings;j++){
    const lat=-Math.PI/2 + Math.PI*j/rings;
    for(let k=0;k<=seg;k++){
      const lon=2*Math.PI*k/seg, ux=Math.cos(lat)*Math.cos(lon), uy=Math.cos(lat)*Math.sin(lon), uz=Math.sin(lat);
      const p=[center[0]+radii[0]*ux,center[1]+radii[1]*uy,center[2]+radii[2]*uz];
      const nn=[ux/radii[0],uy/radii[1],uz/radii[2]], len=Math.hypot(...nn);
      addVert(g,p,nn.map(x=>x/len));
    }
  }
  for(let j=0;j<rings;j++)for(let k=0;k<seg;k++){
    const a=start+j*(seg+1)+k,b=a+seg+1; tri(g,a,a+1,b); tri(g,a+1,b+1,b);
  }
}
function tube(mat, a, b, r0, r1=r0, sides=12) {
  const g=groups.get(mat), axis=b.map((x,i)=>x-a[i]), len=Math.hypot(...axis), w=axis.map(x=>x/len);
  let u=Math.abs(w[2])<.85?[0,0,1]:[0,1,0];
  let dot=u.reduce((s,x,i)=>s+x*w[i],0); u=u.map((x,i)=>x-dot*w[i]); let ul=Math.hypot(...u); u=u.map(x=>x/ul);
  const v=[w[1]*u[2]-w[2]*u[1],w[2]*u[0]-w[0]*u[2],w[0]*u[1]-w[1]*u[0]];
  const st=g.p.length/3;
  for(let q=0;q<2;q++)for(let s=0;s<=sides;s++){
    const t=2*Math.PI*s/sides, c=Math.cos(t), z=Math.sin(t), rr=q?r1:r0, base=q?b:a;
    const radial=u.map((x,i)=>x*c+v[i]*z);
    addVert(g,base.map((x,i)=>x+radial[i]*rr),radial);
  }
  for(let s=0;s<sides;s++){const a0=st+s,b0=st+s+1,c0=st+sides+1+s,d0=c0+1;tri(g,a0,b0,c0);tri(g,b0,d0,c0);}
  const cap0=addVert(g,a,w.map(x=>-x)), cap1=addVert(g,b,w);
  for(let s=0;s<sides;s++){tri(g,cap0,st+s+1,st+s);const q=st+sides+1;tri(g,cap1,q+s,q+s+1);}
}

// Lower body, tunic, and shoes.
ellipsoid('white',[0,0.02,1.18],[0.39,0.35,0.7]);
ellipsoid('white',[-0.23,-0.02,0.65],[0.22,0.25,0.55]);
ellipsoid('white',[0.23,-0.02,0.65],[0.22,0.25,0.55]);
ellipsoid('cream',[-0.25,-0.12,0.14],[0.31,0.42,0.14]); ellipsoid('cream',[0.25,-0.12,0.14],[0.31,0.42,0.14]);
ellipsoid('red',[0,0.02,2.65],[0.78,0.43,1.1]);
ellipsoid('red',[0,0.01,3.32],[0.61,0.39,0.55]);
// Sleeves bend inward to a joined namaste pose.
tube('red',[-0.58,0.01,3.55],[-0.88,-0.02,2.95],0.24,0.21);
tube('red',[-0.88,-0.02,2.95],[-0.39,-0.32,3.43],0.21,0.17);
tube('red',[0.58,0.01,3.55],[0.88,-0.02,2.95],0.24,0.21);
tube('red',[0.88,-0.02,2.95],[0.39,-0.32,3.43],0.21,0.17);
// Hands, thumbs, and gold wrist bangles.
ellipsoid('skin',[0,-0.39,3.75],[0.12,0.13,0.36]);
ellipsoid('skin',[0,-0.4,3.47],[0.115,0.12,0.13]);
tube('gold',[-0.26,-0.31,3.42],[-0.18,-0.31,3.56],0.19,0.19,16);
tube('gold',[0.26,-0.31,3.42],[0.18,-0.31,3.56],0.19,0.19,16);
// Cream stole hanging over the shoulders.
ellipsoid('cream',[-0.43,-0.32,3.16],[0.17,0.12,1.05]);
ellipsoid('cream',[0.43,-0.32,3.16],[0.17,0.12,1.05]);
ellipsoid('cream',[0,-0.23,3.67],[0.55,0.15,0.16]);
// Neck and head, facing toward -Y.
ellipsoid('skin',[0,-0.02,4.03],[0.23,0.22,0.32]);
ellipsoid('skin',[0,-0.04,4.75],[0.55,0.48,0.73],24,16);
// Ears, swept hair cap, sideburns.
ellipsoid('skin',[-0.54,-0.02,4.76],[0.12,0.12,0.2]); ellipsoid('skin',[0.54,-0.02,4.76],[0.12,0.12,0.2]);
ellipsoid('hair',[0,0.005,5.25],[0.56,0.47,0.35],24,14);
ellipsoid('hair',[-0.46,0.02,5.06],[0.12,0.42,0.38]); ellipsoid('hair',[0.46,0.02,5.06],[0.12,0.42,0.38]);
// Brows, eyes, nose, moustache and mouth.
ellipsoid('hair',[-0.22,-0.477,4.88],[0.16,0.045,0.055]); ellipsoid('hair',[0.22,-0.477,4.88],[0.16,0.045,0.055]);
ellipsoid('white',[-0.22,-0.485,4.77],[0.12,0.035,0.055]); ellipsoid('white',[0.22,-0.485,4.77],[0.12,0.035,0.055]);
ellipsoid('eye',[-0.22,-0.518,4.77],[0.045,0.025,0.04]); ellipsoid('eye',[0.22,-0.518,4.77],[0.045,0.025,0.04]);
ellipsoid('skin',[0,-0.52,4.63],[0.10,0.13,0.2]);
ellipsoid('hair',[-0.105,-0.54,4.47],[0.17,0.075,0.075]); ellipsoid('hair',[0.105,-0.54,4.47],[0.17,0.075,0.075]);
ellipsoid('dark',[0,-0.51,4.33],[0.13,0.035,0.035]);
// Subtle kurta placket and buttons.
ellipsoid('redTrim',[0,-0.416,2.92],[0.035,0.025,0.56]);
for(const z of [3.23,3.0,2.76,2.52]) ellipsoid('gold',[0,-0.445,z],[0.035,0.025,0.035],10,8);

// Pack grouped, indexed meshes into a binary glTF file.
const bufferParts=[]; let byteLength=0; const views=[], accessors=[], primitives=[];
function pushBytes(bytes,target){while(byteLength%4){bufferParts.push(Buffer.from([0]));byteLength++;}const offset=byteLength;bufferParts.push(bytes);byteLength+=bytes.length;const v={buffer:0,byteOffset:offset,byteLength:bytes.length};if(target)v.target=target;views.push(v);return views.length-1;}
function accessor(view,componentType,count,type,min,max){accessors.push({bufferView:view,componentType,count,type,min,max});return accessors.length-1;}
for(const [matName,g] of groups){if(!g.i.length)continue;const pos=Buffer.alloc(g.p.length*4), norm=Buffer.alloc(g.n.length*4), idx=Buffer.alloc(g.i.length*4);
  g.p.forEach((x,i)=>pos.writeFloatLE(x,i*4));g.n.forEach((x,i)=>norm.writeFloatLE(x,i*4));g.i.forEach((x,i)=>idx.writeUInt32LE(x,i*4));
  const min=[0,1,2].map(k=>Math.min(...g.p.filter((_,i)=>i%3===k))),max=[0,1,2].map(k=>Math.max(...g.p.filter((_,i)=>i%3===k)));
  const pv=pushBytes(pos,34962),nv=pushBytes(norm,34962),iv=pushBytes(idx,34963);
  primitives.push({attributes:{POSITION:accessor(pv,5126,g.p.length/3,'VEC3',min,max),NORMAL:accessor(nv,5126,g.n.length/3,'VEC3')},indices:accessor(iv,5125,g.i.length,'SCALAR'),material:materials.findIndex(m=>m[0]===matName),mode:4});
}
const bin=Buffer.concat(bufferParts);const gltf={asset:{version:'2.0',generator:'Kabeer Studio stylized figure generator'},scene:0,scenes:[{nodes:[0]}],nodes:[{mesh:0,name:'Namaste figure'}],meshes:[{name:'Stylized namaste figure',primitives}],materials:materials.map(([name,color])=>({name,pbrMetallicRoughness:{baseColorFactor:color,metallicFactor:name==='gold'?0.5:0,roughnessFactor:name==='gold'?0.3:0.78},doubleSided:true})),buffers:[{byteLength:bin.length}],bufferViews:views,accessors};
let json=Buffer.from(JSON.stringify(gltf));while(json.length%4)json=Buffer.concat([json,Buffer.from(' ')]);
const total=12+8+json.length+8+bin.length;const header=Buffer.alloc(12);header.writeUInt32LE(0x46546c67,0);header.writeUInt32LE(2,4);header.writeUInt32LE(total,8);
const jh=Buffer.alloc(8);jh.writeUInt32LE(json.length,0);jh.writeUInt32LE(0x4e4f534a,4);const bh=Buffer.alloc(8);bh.writeUInt32LE(bin.length,0);bh.writeUInt32LE(0x004e4942,4);
const out=path.join(here,'namaste-figure.glb');fs.writeFileSync(out,Buffer.concat([header,jh,json,bh,bin]));console.log(`Wrote ${out} (${(total/1024).toFixed(1)} KiB)`);
