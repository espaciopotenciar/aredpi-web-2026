/* aREDPI · configuración, tracking y utilidades compartidas por las 3 páginas y el calificador. */
var CONFIG = window.CONFIG || {
  CALENDLY_URL: 'https://calendly.com/aredpi_/webapp',
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbz5Pv5FSuwC_AY1FyjNpD6T8UcUSEf3yOQRBgAs2CdXkhbgiiW2o4YzE4t1vqsTt9WNow/exec',
  NO_CALIFICA: ['Hasta 200'],
  FREE_DOMAINS: ['gmail.com','googlemail.com','hotmail.com','outlook.com','live.com','msn.com','yahoo.com','ymail.com','icloud.com','me.com','aol.com','proton.me','protonmail.com','gmx.com','zoho.com','mail.com','yandex.com'],
  // TODO: poner en true al publicar. Dentro del lienzo de diseño el POST a la Google Sheet queda armado
  // pero no se envía: el payload se muestra en la consola (console.info) para revisarlo.
  ENVIO_ACTIVO: false,
  // TODO: poner en true al publicar: monta el widget inline de Calendly dentro de #calendly-inline (reemplaza el placeholder).
  CALENDLY_ACTIVO: true
};

window.CONFIG = CONFIG;
window.AREDPI = window.AREDPI || (function () {
  const PARAMS = ['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
  const ss = {
    get: k => { try { return sessionStorage.getItem('aredpi_' + k) || ''; } catch (e) { return ''; } },
    set: (k, v) => { try { sessionStorage.setItem('aredpi_' + k, v); } catch (e) {} }
  };
  // Al aterrizar: guardar gclid / gbraid / wbraid / utm_* para todas las páginas de la sesión.
  try {
    const q = new URLSearchParams(location.search);
    PARAMS.forEach(k => { const v = q.get(k); if (v) ss.set(k, v); });
  } catch (e) {}

  function getParams() { const o = {}; PARAMS.forEach(k => o[k] = ss.get(k)); return o; }

  function leadId() {
    let id = ss.get('id');
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }));
      ss.set('id', id);
    }
    return id;
  }

  function emailCheck(v) {
    const s = (v || '').trim().toLowerCase();
    if (!s) return 'empty';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return 'format';
    const d = s.split('@')[1];
    const first = d.split('.')[0];
    if (CONFIG.FREE_DOMAINS.includes(d) || ['gmail','hotmail','outlook','live','yahoo'].includes(first)) return 'free';
    return 'ok';
  }

  function push(event, data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event }, data || {}));
  }

  function post(payload) {
    if (!CONFIG.ENVIO_ACTIVO) { console.info('[aREDPI] POST (TODO: activar CONFIG.ENVIO_ACTIVO)', CONFIG.ENDPOINT, payload); return; }
    fetch(CONFIG.ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }).catch(() => {});
  }

  // Exactamente las claves que mapea el script de la Google Sheet.
  function buildPayload(d) {
    const c = d.calc || {}; const p = getParams();
    return {
      id: leadId(), origen: d.origen, pagina: location.origin + location.pathname,
      nombre: d.nombre || '', email: (d.email || '').trim(), empresa: '', cargo: '',
      empleados: d.empleados || '', paises: d.paises || '', como_arman_budget: d.como_arman_budget || '', revisiones_anio: d.revisiones_anio || '',
      personas: c.personas ?? '', dias_presupuesto: c.dias_presupuesto ?? '', versiones: c.versiones ?? '', escenarios: c.escenarios ?? '',
      dias_por_revision: c.dias_por_revision ?? '', horas_anuales: c.horas_anuales ?? '', horas_liberadas: c.horas_liberadas ?? '',
      gclid: p.gclid, gbraid: p.gbraid, wbraid: p.wbraid,
      utm_source: p.utm_source, utm_medium: p.utm_medium, utm_campaign: p.utm_campaign, utm_term: p.utm_term, utm_content: p.utm_content,
      web_sitio: d.web_sitio || ''
    };
  }

  async function sha256(s) {
    try { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); } catch (e) { return ''; }
  }

  // Calendly: reunión agendada → POST { accion, id } + evento de dataLayer.
  window.addEventListener('message', e => {
    if (!/calendly\.com$/.test((() => { try { return new URL(e.origin).hostname; } catch (x) { return ''; } })())) return;
    if (e.data && e.data.event === 'calendly.event_scheduled') {
      post({ accion: 'reunion', id: leadId() });
      push('reunion_agendada', { lead_id: leadId() });
    }
  });

  const fmt = (n, dec) => Number(n || 0).toLocaleString('es-AR', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });

  return { CONFIG, getParams, leadId, emailCheck, push, post, buildPayload, sha256, fmt };
})();
