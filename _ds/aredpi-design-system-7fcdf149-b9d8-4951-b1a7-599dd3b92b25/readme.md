# aREDPI Design System

aREDPI es un software boutique argentino para organizaciones de gran escala: 25 años, +50 clientes, +500 aplicaciones, +3.000 usuarios, 9 países. Producto estrella: **aREDPI WebApp de Budget & Forecast**, para planificar, simular y controlar el gasto salarial todo el año, con analista de IA. Público: RR. HH., Compensaciones, Payroll y Finanzas de grandes empresas de Latinoamérica. Integraciones: SAP, SuccessFactors, Workday, Power BI.

El tema **Claro** es la marca de base. El **Oscuro** (`[data-theme="dark"]`) existe solo para piezas cinematográficas puntuales.

## Fuentes
- `uploads/README.md` — ficha de marca completa (origen: aredpi.com, calculadora aREDPI MVP, logo oficial y rediseño web 2026 de Espacio Potenciar). Copiada en espíritu a este readme.
- `uploads/tokens.json` — valores exactos (copia en `tokens/tokens.json`). Los CSS de `tokens/` los reproducen sin cambios.
- `uploads/logo-aredpi-320.jpg`, `uploads/logo-aredpi-blanco.png` → `assets/logos/`.
- `uploads/home-v2-frame-1.png` → `assets/imagery/seda-grilla-hero.png` (estilo de imagen de marca).
- No se recibió código, Figma ni archivos de fuentes.

## Índice
- `styles.css` — entrada global (solo `@import`).
- `tokens/` — `fonts.css` (Google Fonts), `colors.css`, `typography.css`, `spacing.css` (espacios + radios), `effects.css` (sombras, vidrio, movimiento), `base.css` (reset mínimo, links), `tokens.json`.
- `components/` — primitivas React:
  - `actions/Button` — principal (degradado + chevron en círculo blanco) y secundario (borde fino).
  - `surfaces/GlassCard` — vidrio esmerilado, sólida o destacada, con muesca escalonada opcional.
  - `forms/OptionChip` — opción grande del calificador (radio / checkbox).
  - `forms/EmailField` — correo corporativo; bloquea Gmail, Hotmail, Outlook, Yahoo y similares.
  - `data/Kpi` — número en mono que cuenta al aparecer + etiqueta.
- `ui_kits/website/` — home de aredpi.com 2026 + calificador de leads (clickeable).
- `guidelines/` — tarjetas de fundamentos (Colors, Type, Spacing, Brand).
- `assets/` — logos e imagen de marca.
- `thumbnail.html`, `SKILL.md`.

## Components
Button · GlassCard · OptionChip · EmailField · Kpi. Sin agregados intencionales: el inventario es exactamente el pedido.

---

## CONTENT FUNDAMENTALS

- **Idioma y persona:** español rioplatense con **voseo** ("Centralizá", "Agendá", "Armás", "Podés"). Se le habla al lector de **vos**; la marca habla en **nosotros** ("Lo resolvemos", "Te escribimos").
- **Tono:** socio senior, claro y seguro. Frases cortas. Siempre en positivo: mostrar lo que cambia, no asustar con lo que falla.
- **Nombrar el dolor real y resolverlo:** versiones de Excel, retrabajo, dependencia de pocas personas, escenarios que tardan días.
- **Vocabulario de marca:** *hecho a medida*, *trazabilidad*, *escenarios*, *desvíos*, *todo el año*, *del dato a la decisión*.
- **Nombre del producto:** siempre **aREDPI WebApp de Budget & Forecast** (nunca "PMO" ni "la Web App de aREDPI"). La marca se escribe **aREDPI** (a minúscula).
- **Casing:** oración (solo la primera mayúscula) en títulos y botones. Eyebrows/etiquetas en MAYÚSCULAS mono (`NUEVO EN LA WEBAPP`).
- **Puntuación:** títulos con punto final cuando son afirmaciones ("Del dato a la decisión."). Separador `·` entre datos.
- **Números:** formato es-AR — miles con punto (`3.000`), decimales con coma (`1,3 %`), porcentaje con espacio (`80 %`), signo `+` en logros (`+25`). Siempre en mono.
- **CTAs:** imperativo con voseo: "Agendá una reunión", "Calculá tu ahorro", "Hablá con un especialista", "Empezá ahora".
- **Emoji:** nunca.
- **Ejemplos:** "Tu presupuesto salarial. En días, no semanas." · "Especialistas, no generalistas." · "No te pedimos sueldos ni datos de nómina: solo horas."
- **Datos reales para usar:** +25 años · +50 clientes · +500 aplicaciones · +3.000 usuarios · 9 países · 80 % menos de tiempo en el armado · 5 escenarios en simultáneo · 90 días de implementación.
- **Testimonios:** solo los reales y textuales — Mario Nigro (ex Gerente de RR. HH., Eurofarma), Jorge Del Águila (Soldexa Perú), Patricia Maidana (Sr. Manager HR, Cirion). Nunca inventar otros ni parafrasear.

## VISUAL FOUNDATIONS

- **Principio:** blanco, aire y una sola protagonista de color. El naranja aparece poco y con intención (logo, botón principal, línea del gráfico, una palabra que importa). Lo disruptivo es el movimiento, no la oscuridad. Precisión de tablero: mono, líneas finas, grillas ordenadas.
- **Color:** fondo `--bg #FAFAF8` cálido, tinta `--ink #2F2F2F`, naranjas `--orange #FF6F31` → `--orange-deep #F0501F` (degradado 135° en CTA y bandas). `--orange-text #C4430F` para links y palabras destacadas (5,0:1) — **nunca** `#FF6F31` como texto chico sobre blanco (2,9:1). Blanco sobre naranja (3,6:1) solo a 16px semibold o más. `--amber #FFC655` solo como relleno/línea (chevron del logo, serie "Real"). Tintes `--orange-soft`, `--amber-soft` para fondos de selección y badges. `success`/`error` solo para estados. Nada de azules ni violetas; un solo acento por pantalla.
- **Tipografía:** Host Grotesk para todo; titulares grandes en **peso 400** con tracking negativo (−0.035em en 80px), nunca negritas pesadas. JetBrains Mono para números, KPIs, tablas (`tabular-nums`) y etiquetas en mayúsculas con +0.06em.
- **Espacio y layout:** contenido a 1200px máx. Secciones de 128px verticales (72px en celular, 24px laterales). 48px entre título de sección y contenido. Header fijo como píldora de vidrio flotante a 14px del borde.
- **Fondos e imagen:** blanco cálido liso o bandas `surface-2`. Imagen de marca: seda naranja satinada sobre blanco que se convierte en grilla fina / gráfico ascendente; cálida, luminosa, sin grano. Full-bleed a la derecha del hero con protección por degradado de `bg` desde la izquierda. Nada de stock, personas en oficinas ni laptops. Única banda saturada: CTA final en degradado de marca con radio 32px.
- **Bordes:** 1px `--border #E4E4E1` en todo. Preferir bordes a sombras fuertes.
- **Sombras:** `--shadow-card` (0 20px 50px ink al 6 %) muy difusa para tarjetas y ventanas; `--shadow-cta` (0 10px 30px deep al 25 %) solo en el botón principal. Sin sombras internas.
- **Transparencia y blur:** vidrio esmerilado blanco (72 % + `blur(14px)`) para tarjetas y header sobre la imagen de seda. No usar blur sobre fondos lisos sin motivo.
- **Radios:** 12 (campos), 18 (opciones, tarjetas chicas), 24 (tarjetas, ventanas de app), 32 (bandas CTA), píldora (botones, etiquetas, header).
- **Tarjetas:** fondo vidrio o blanco, borde 1px, radio 24, padding 32, `shadow-card`. Destacada: `orange-soft` + muesca. Nunca borde de color a la izquierda.
- **Motivos:** esquinas escalonadas del logo (muesca cuadrada de 28px en la esquina superior derecha de 1 tarjeta clave por sección) y el chevron `>` como flecha de todos los CTA, dentro de un círculo blanco.
- **Movimiento:** curva `cubic-bezier(.22,1,.36,1)`. Entradas: fade + 20px hacia arriba, 700ms, escalonadas cada 60ms. Hero contado con el scroll (escena fija, 3 mensajes de a uno). Párrafos editoriales que se revelan palabra por palabra de `ink-faint` a `ink`. Números que cuentan una sola vez. Botón principal con efecto magnético leve (≤6px, solo escritorio). Sin rebotes. Siempre respetar `prefers-reduced-motion` (estado final, sin scroll secuestrado).
- **Hover:** botón principal pasa a `orange-deep` plano, sube 1px, sombra más amplia y el chevron se corre 2px. Secundario: borde se oscurece a `ink-muted`. Opciones: borde a `ink-faint`. Links: `orange-text` → `orange-deep`.
- **Press:** `scale(.98)`. **Focus:** borde `orange` + halo de 3px naranja al 12–14 %.
- **Gráficos:** budget en `ink` punteado, forecast en `orange`, real en `amber`; grilla en `border`; ejes y valores en mono.

## ICONOGRAPHY

- La ficha define: íconos de **línea de 1,8px, puntas redondeadas**, en `ink` u `orange`. Nunca emojis. No se recibió un set de íconos propio.
- **Sustitución:** se usa **Lucide** por CDN (`https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js`) con `stroke-width: 1.8` — mismo estilo de línea redondeada. ⚠️ Confirmar o reemplazar por el set oficial si existe.
- Los componentes embeben solo dos glifos de Lucide: `chevron-right` (CTA) y `check` (selección/validación).
- El chevron `>` es la única flecha de CTA. No se usan caracteres unicode como íconos.
- Logos: `assets/logos/logo-aredpi-320.jpg` (bloque naranja escalonado, letras blancas, chevron ámbar; sobre fondos claros — tiene fondo blanco, usar `mix-blend-mode: multiply` sobre `#FAFAF8`) y `assets/logos/logo-aredpi-blanco.png` (solo letras blancas; sobre naranja u oscuro). No redibujar, recolorear ni estirar. Alto mínimo 32px.

## Fuentes tipográficas
Host Grotesk y JetBrains Mono se cargan desde Google Fonts (son las fuentes oficiales; no hay sustitución). No hay binarios locales en el proyecto.
