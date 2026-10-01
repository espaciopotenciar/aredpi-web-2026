/* aREDPI · lenguaje de movimiento compartido.
   [data-reveal]  fade + 20px hacia arriba, escalonado 60ms
   [data-words]   párrafo que se revela palabra por palabra (#C9C9C5 → #2F2F2F) con el scroll
   [data-type]    texto que se tipea al aparecer
   [data-draw="x"|"y"]  línea que se dibuja con el scroll (scaleX / scaleY)
   [data-count]   número que cuenta una sola vez
   [data-magnetic] botón que sigue al cursor hasta 6px (solo escritorio)
   Respeta prefers-reduced-motion: todo queda en su estado final. */
window.AredpiMotion = window.AredpiMotion || (function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const EASE = 'cubic-bezier(.22,1,.36,1)';
  const subs = new Set();
  let started = false, frameN = 0;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  function prep() {
    document.querySelectorAll('[data-reveal]:not([data-rv])').forEach(el => {
      el.setAttribute('data-rv', 'shown');
      if (reduce) return;
      if (el.getBoundingClientRect().top < innerHeight * 0.92) return;
      el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.setAttribute('data-rv', 'hidden');
    });
    document.querySelectorAll('[data-words]:not([data-wd])').forEach(el => {
      el.setAttribute('data-wd', '1');
      if (reduce) return;
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map(w => '<span style="color:#C9C9C5;transition:color .35s ' + EASE + '">' + w.replace(/</g, '&lt;') + '</span>').join(' ');
      el._words = [...el.children]; el._lit = 0;
    });
  }

  function tick() {
    const h = innerHeight;
    if (frameN++ % 20 === 0) prep();
    let i = 0;
    document.querySelectorAll('[data-rv="hidden"]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.9 && r.bottom > 0) {
        el.setAttribute('data-rv', 'shown');
        const dl = el.dataset.revealDelay != null ? +el.dataset.revealDelay : i * 60;
        el.style.transition = 'opacity 700ms ' + EASE + ' ' + dl + 'ms, transform 700ms ' + EASE + ' ' + dl + 'ms';
        el.style.opacity = '1'; el.style.transform = 'none'; i++;
      }
    });
    document.querySelectorAll('[data-wd]').forEach(el => {
      if (!el._words) return;
      const r = el.getBoundingClientRect();
      const p = clamp((h * 0.85 - r.top) / (r.height + h * 0.35));
      const lit = Math.round(p * el._words.length);
      if (lit !== el._lit) { el._words.forEach((s, k) => s.style.color = k < lit ? '#2F2F2F' : '#C9C9C5'); el._lit = lit; }
    });
    document.querySelectorAll('[data-seq]').forEach(el => {
      const kids = [...el.children]; if (!kids.length) return;
      const r = el.getBoundingClientRect();
      const p = reduce ? 1 : clamp((h * 0.9 - r.top) / (r.height + h * 0.45));
      const lit = Math.round(p * (kids.length + 0.4));
      if (lit === el._lit) return; el._lit = lit;
      kids.forEach((k, i) => {
        const on = i < lit;
        k.style.transition = 'transform 700ms ' + EASE + ', border-color 500ms, box-shadow 700ms ' + EASE + ', background 500ms';
        k.style.transform = on ? 'translateY(-8px)' : 'translateY(0)';
        k.style.borderColor = on ? 'rgba(255,111,49,0.45)' : '#E4E4E1';
        k.style.boxShadow = on ? '0 20px 50px rgba(47,47,47,0.07)' : 'none';
        const bar = k.querySelector('[data-seq-bar]'); if (bar) { bar.style.transition = 'transform 700ms ' + EASE; bar.style.transform = on ? 'scaleX(1)' : 'scaleX(0)'; }
      });
    });
    document.querySelectorAll('[data-draw]').forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      const p = reduce ? 1 : clamp((h * 0.8 - r.top) / (r.height + h * 0.2));
      el.style.transform = el.dataset.draw === 'y' ? 'scaleY(' + p + ')' : 'scaleX(' + p + ')';
    });
    document.querySelectorAll('[data-type]:not([data-typed])').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top > h * 0.9 || r.bottom < 0) return;
      el.setAttribute('data-typed', '1');
      if (reduce) return;
      const full = el.textContent; el.style.minHeight = el.offsetHeight + 'px'; el.textContent = '';
      let n = 0; const iv = setInterval(() => { n += 2; el.textContent = full.slice(0, n); if (n >= full.length) clearInterval(iv); }, 22);
    });
    document.querySelectorAll('[data-count]:not([data-counted])').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top > h * 0.9 || r.bottom < 0) return;
      el.setAttribute('data-counted', '1');
      const m = el.textContent.match(/^(\D*)([\d.]+)(.*)$/); if (!m || reduce) return;
      const target = parseInt(m[2].replace(/\./g, ''), 10), t0 = performance.now();
      const step = t => { const k = clamp((t - t0) / 1400); const v = Math.round(target * (1 - Math.pow(1 - k, 4)));
        el.textContent = m[1] + v.toLocaleString('es-AR') + m[3]; if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    subs.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
    requestAnimationFrame(tick);
  }

  function onMove(e) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const r = el.getBoundingClientRect();
      const inside = e.clientX >= r.left - 8 && e.clientX <= r.right + 8 && e.clientY >= r.top - 8 && e.clientY <= r.bottom + 8;
      el.style.transition = 'transform 260ms ' + EASE;
      if (!inside) { el.style.transform = 'none'; return; }
      const dx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1) * 6;
      const dy = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1) * 6;
      el.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
    });
  }

  return {
    reduce, clamp,
    start() { if (started) return; started = true; if (fine && !reduce && innerWidth >= 1024) addEventListener('mousemove', onMove, { passive: true }); requestAnimationFrame(tick); },
    onFrame(fn) { subs.add(fn); return () => subs.delete(fn); }
  };
})();
