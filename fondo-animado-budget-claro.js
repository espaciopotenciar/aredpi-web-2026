/* aREDPI · Fondo animado claro del hero de /budget (y de /costo-presupuesto al 35 %).
   Es el <script> de fondo-animado-budget-claro.html sin cambios de dibujo, envuelto para recibir el <canvas>
   del hero (position:absolute; inset:0; z-index:0) y pausarse cuando el hero sale de pantalla (IntersectionObserver). */
window.initFondoBudget = function (cv) {
  if (!cv || cv._fondo) return; cv._fondo = true;
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W, H, dpr, chart, running = true, rafId = 0;
  const MESES = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  const HOY = 6.4;
  const real   = [0.10,0.16,0.24,0.29,0.37,0.44,0.50,0.56];
  const budget = m => 0.09 + m*0.078;
  const ESC = [ {k:-0.16,a:.25}, {k:-0.07,a:.35}, {k:0.0,a:1,main:true}, {k:0.08,a:.35}, {k:0.17,a:.25} ];
  const cols = [];
  function initCols(){
    cols.length = 0;
    const n = Math.floor(W/34);
    for(let i=0;i<n;i++) cols.push({x:i*34+8, y:Math.random()*H, v:.15+Math.random()*.35, s:[]});
    cols.forEach(c=>{ for(let j=0;j<14;j++) c.s.push(rnd()); });
  }
  function rnd(){ const r=Math.random(); return r<.33 ? (Math.random()*99).toFixed(1) : r<.66 ? Math.floor(Math.random()*9999).toString() : (Math.random()*9).toFixed(2)+'%'; }
  function resize(){
    dpr = Math.min(devicePixelRatio||1, 2);
    W = cv.clientWidth; H = cv.clientHeight; if(!W||!H) return;
    cv.width = W*dpr; cv.height = H*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    const mobile = W < 1024;
    chart = mobile
      ? {x:24, y:H*0.52, w:W-48, h:H*0.34}
      : {x:Math.max(W*0.5, W/2+20), y:H*0.24, w:Math.min(W*0.44, 700), h:H*0.48};
    initCols();
  }
  const X = m => chart.x + (m/11)*chart.w;
  const Y = v => chart.y + chart.h - (v/1.35)*chart.h;
  function smooth(pts, upto){
    ctx.beginPath();
    for(let i=0;i<pts.length-1;i++){
      const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
      if(i===0) ctx.moveTo(p1[0],p1[1]);
      const t = Math.min(1, Math.max(0, upto - i)); if(t<=0) break;
      const c1=[p1[0]+(p2[0]-p0[0])/6, p1[1]+(p2[1]-p0[1])/6], c2=[p2[0]-(p3[0]-p1[0])/6, p2[1]-(p3[1]-p1[1])/6];
      if(t<1){ const q = bez(p1,c1,c2,p2,t); ctx.lineTo(q[0],q[1]); break; }
      ctx.bezierCurveTo(c1[0],c1[1],c2[0],c2[1],p2[0],p2[1]);
    }
  }
  function bez(a,b,c,d,t){ const u=1-t; return [u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0], u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]]; }
  const ease = t => t<0?0:t>1?1:1-Math.pow(1-t,3);
  function escPts(e){
    const v0 = real[real.length-1]; const pts=[[X(HOY),Y(v0)]];
    for(let m=Math.ceil(HOY); m<=11; m++){
      const d=(m-HOY)/(11-HOY); pts.push([X(m), Y(v0 + (m-HOY)*0.078 + e.k*d*d*1.6 + e.k*d*.4)]);
    }
    return pts;
  }
  const LOOP = 12000; let t0 = performance.now(), pausedAt = 0;
  function frame(now){
    if(!running){ rafId = 0; return; }
    if(!W||!H){ resize(); rafId = requestAnimationFrame(frame); return; }
    const t = reduce ? 9000 : (now - t0) % LOOP;
    ctx.clearRect(0,0,W,H);
    const g = ctx.createRadialGradient(X(HOY), Y(.6), 0, X(HOY), Y(.6), chart.w*.9);
    g.addColorStop(0,'rgba(255,111,49,.08)'); g.addColorStop(1,'rgba(255,111,49,0)');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    ctx.font='11px "JetBrains Mono", monospace';
    cols.forEach((c,i)=>{
      if(!reduce) c.y += c.v; if(c.y > H+200) { c.y = -200; c.s = c.s.map(rnd); }
      c.s.forEach((s,j)=>{
        const y = c.y + j*18 - 120; if(y<0||y>H) return;
        const a = (0.035 + 0.05*Math.sin((i*7+j)*.9)) * (c.x > W*.42 ? 1 : .4);
        ctx.fillStyle = 'rgba(47,47,47,'+Math.max(0,a)+')'; ctx.fillText(s, c.x, y);
      });
    });
    ctx.lineWidth=1;
    for(let m=0;m<12;m++){
      ctx.strokeStyle='rgba(47,47,47,.07)'; ctx.beginPath(); ctx.moveTo(X(m),chart.y); ctx.lineTo(X(m),chart.y+chart.h); ctx.stroke();
      ctx.fillStyle='rgba(47,47,47,.28)'; ctx.fillText(MESES[m], X(m)-10, chart.y+chart.h+22);
    }
    for(let r=0;r<=4;r++){ ctx.strokeStyle="rgba(47,47,47,.06)"; ctx.beginPath(); ctx.moveTo(chart.x,Y(r*0.33)); ctx.lineTo(chart.x+chart.w,Y(r*0.33)); ctx.stroke(); }
    ctx.setLineDash([3,6]); ctx.strokeStyle='rgba(47,47,47,.28)'; ctx.lineWidth=1.2;
    ctx.beginPath(); ctx.moveTo(X(0),Y(budget(0))); ctx.lineTo(X(11),Y(budget(11))); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle='rgba(47,47,47,.4)'; ctx.fillText('BUDGET', X(11)-54, Y(budget(11))-10);
    const pr = ease(t/2600);
    const ptsR = real.map((v,i)=>[X(i*(HOY/(real.length-1))), Y(v)]);
    ctx.lineWidth=2.2; ctx.strokeStyle='rgba(47,47,47,.9)'; ctx.shadowColor='rgba(47,47,47,.12)'; ctx.shadowBlur=8;
    smooth(ptsR, pr*(ptsR.length-1)); ctx.stroke(); ctx.shadowBlur=0;
    const ph = ease((t-2300)/700);
    if(ph>0){
      ctx.globalAlpha=ph; ctx.strokeStyle='rgba(217,72,15,.55)'; ctx.setLineDash([2,4]);
      ctx.beginPath(); ctx.moveTo(X(HOY),chart.y-10); ctx.lineTo(X(HOY),chart.y+chart.h); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle='#C4430F'; ctx.fillText('HOY', X(HOY)-12, chart.y-18); ctx.globalAlpha=1;
    }
    const pf = ease((t-2800)/3200);
    if(pf>0){
      const top = escPts(ESC[4]), bot = escPts(ESC[0]);
      ctx.beginPath(); top.forEach((p,i)=> i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));
      bot.slice().reverse().forEach(p=>ctx.lineTo(p[0],p[1])); ctx.closePath();
      const cg = ctx.createLinearGradient(X(HOY),0,X(11),0);
      cg.addColorStop(0,'rgba(255,111,49,0)'); cg.addColorStop(1,'rgba(255,111,49,'+(0.13*pf)+')');
      ctx.fillStyle=cg; ctx.fill();
      ESC.forEach(e=>{
        const pts=escPts(e);
        ctx.lineWidth = e.main?2.6:1.2;
        ctx.strokeStyle = e.main ? '#FF6F31' : 'rgba(240,80,31,'+(e.a*.9)+')';
        if(!e.main) ctx.setLineDash([4,5]);
        ctx.shadowColor = e.main ? 'rgba(255,111,49,.8)' : 'transparent'; ctx.shadowBlur = e.main?14:0;
        smooth(pts, pf*(pts.length-1)); ctx.stroke(); ctx.setLineDash([]); ctx.shadowBlur=0;
      });
    }
    const pp = (t-6000)/5000;
    if(pp>0 && pp<1){
      const pts = escPts(ESC[2]); const idx = pp*(pts.length-1); const i=Math.floor(idx), f=idx-i;
      const a=pts[i], b=pts[Math.min(i+1,pts.length-1)];
      const x=a[0]+(b[0]-a[0])*f, y=a[1]+(b[1]-a[1])*f;
      const rg=ctx.createRadialGradient(x,y,0,x,y,26); rg.addColorStop(0,'rgba(255,111,49,.75)'); rg.addColorStop(1,'rgba(255,111,49,0)');
      ctx.fillStyle=rg; ctx.beginPath(); ctx.arc(x,y,26,0,Math.PI*2); ctx.fill();
    }
    if(pf>=1){
      const e=escPts(ESC[2]).pop(); const pulse = reduce?0:(Math.sin(now/500)+1)/2;
      ctx.fillStyle='#F0501F'; ctx.shadowColor='#FF6F31'; ctx.shadowBlur=12+pulse*10;
      ctx.beginPath(); ctx.arc(e[0],e[1],4,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0;
      ctx.fillStyle='rgba(47,47,47,.65)'; ctx.fillText('FORECAST · ESCENARIO BASE', e[0]-200, e[1]+28);
    }
    if(!reduce && t > LOOP-900){ ctx.fillStyle='rgba(250,250,248,'+ease((t-(LOOP-900))/900)+')'; ctx.fillRect(chart.x-40,chart.y-40,chart.w+80,chart.h+80); }
    rafId = requestAnimationFrame(frame);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(cv); else addEventListener('resize', resize);
  resize();
  // Pausa fuera de pantalla
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { if (!running) { running = true; t0 += performance.now() - pausedAt; if (!rafId) rafId = requestAnimationFrame(frame); } }
      else if (running) { running = false; pausedAt = performance.now(); }
    }, { threshold: 0 }).observe(cv);
  }
  rafId = requestAnimationFrame(frame);
};
