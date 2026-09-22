# CLAUDE.md — ARCEM Partners

Instrucciones para Claude Code. Léelas completas antes de tocar un archivo.

---

## Qué es este proyecto

Sitio web de **ARCEM Partners**, corredores de seguros (broker) en San Juan, Puerto Rico. Dos prácticas: **Employee Benefits** y **Commercial Property & Casualty**.

Lo que ya existe en el repositorio es la **landing page terminada** (`index.html`), la identidad visual completa y los archivos de logo. Lo que falta es construir el resto del sitio a partir de esa base y sustituir los datos marcadores.

El público son dueños y directivos de empresas medianas en Puerto Rico: HR, CFO, gerentes generales. No es un público técnico y no es un público *startup*. El tono es de firma profesional establecida, no de SaaS.

---

## Stack — y por qué

**HTML, CSS y JavaScript planos. Sin framework, sin build step, sin dependencias.**

Se abre `index.html` en el navegador y funciona. Esta decisión es deliberada: el sitio es de contenido, lo va a mantener gente que no es desarrolladora, y tiene que poder alojarse en cualquier hosting estático.

**No migres a React, Next, Astro, Vite ni Tailwind por iniciativa propia.** Si el cliente pide un CMS o un blog con muchas entradas, propónselo y espera respuesta antes de convertir nada.

Se permite: un generador estático mínimo *si y solo si* el cliente lo pide explícitamente, conservando el CSS tal cual.

---

## Mapa de archivos

```
.
├── index.html                    Landing page terminada. Punto de partida de todo.
├── CLAUDE.md                     Este archivo.
├── README.md                     Guía para la persona, no para el agente.
├── assets/
│   ├── css/styles.css            Todos los estilos del sitio.
│   ├── js/main.js                Selector de idioma + envío del formulario.
│   └── logo/                     SVG editables + PNG exportados. Ver inventario abajo.
├── brand/
│   ├── BRAND-GUIDELINES.md       Identidad completa. LÉELO antes de diseñar nada nuevo.
│   ├── tokens.css                Design tokens. Fuente de verdad del color y la tipografía.
│   └── colors.json               Los mismos colores en JSON, con ratios de contraste.
└── content/
    └── copy-es-en.md             Toda la copy bilingüe en un solo lugar.
```

### Inventario de logos

| Archivo | Cuándo usarlo |
|---|---|
| `arcem-mark.svg` | Marca principal, dos colores, sobre fondo claro |
| `arcem-mark-reverse.svg` | Sobre fondo oscuro |
| `arcem-mark-mono-green.svg` | Monocolor verde |
| `arcem-mark-mono-black.svg` | Monocolor negro — grabados, fax, documentos |
| `arcem-mark-mono-white.svg` | Monocolor blanco |
| `arcem-mark-currentcolor.svg` | Hereda `color` del CSS. **Este es el que se usa en la web** cuando el mark debe cambiar con el tema |
| `arcem-lockup-horizontal.svg` | Mark + wordmark, horizontal |
| `arcem-lockup-horizontal-reverse.svg` | Lo mismo sobre oscuro |
| `arcem-lockup-vertical.svg` | Formatos estrechos o cuadrados |
| `arcem-mark-3d.svg` | Versión con bisel y sombra. Solo hero y piezas grandes |
| `arcem-mark-construccion.svg` | Retícula de construcción. Referencia, no para producción |
| `favicon.svg` | Favicon |
| `*.png` | Exportaciones rasterizadas para correo y ofimática |

---

## Reglas duras

Estas no se negocian sin hablar con el cliente primero.

1. **La junta central del logo nunca se cierra.** Es lo que separa las dos mitades. Si el mark aparece con las mitades tocándose, está mal.
2. **Nunca uses `#AFB5B1` como el gris del mark.** Da 1.86:1 de contraste sobre fondo claro y desaparece. El gris correcto es `#6E7772` sobre claro y `#C3C8C4` sobre oscuro.
3. **El hero y el footer se mantienen verde oscuro `#13201A` en tema claro y oscuro.** Son superficies de marca, no cromo de página. Todo lo demás sí cambia con el tema.
4. **Tres fuentes, ni una más:** Jost (display), Source Serif 4 (cuerpo), IBM Plex Mono (etiquetas).
5. **Todo texto visible tiene que existir en español e inglés.** Ver el sistema bilingüe abajo.
6. **Nunca inventes datos.** Ni cifras, ni años de experiencia, ni nombres de clientes, ni números de licencia. Si falta un dato, déjalo entre corchetes como marcador.
7. **Contraste mínimo AA (4.5:1) para texto normal.** Los ratios verificados están en `brand/colors.json`.
8. **Gutter lateral mínimo de 16px en cualquier ancho** y cero scroll horizontal a 390px.

---

## El sistema bilingüe

Español por defecto, inglés con el selector del encabezado. Funciona así:

Cualquier elemento con texto traducible lleva **dos atributos**:

```html
<h3 data-es="Diagnóstico" data-en="Diagnosis">Diagnóstico</h3>
```

`assets/js/main.js` recorre `[data-es][data-en]` y asigna el `innerHTML` correspondiente. La preferencia se guarda en `localStorage` bajo la clave `arcem-lang`, envuelta en `try/catch`.

**Al añadir cualquier texto nuevo:**
- Ponle `data-es` y `data-en`
- El contenido visible inicial va en español (es el idioma por defecto)
- Los valores pueden llevar HTML simple (`<em>`, `<strong>`) — se asigna por `innerHTML`, y el contenido es propio, no de usuario
- No metas comillas dobles sin escapar dentro de los atributos

**Al traducir al inglés:** no traduzcas literalmente. La copy en español se escribió primero y algunas frases tienen que reformularse para funcionar. `content/copy-es-en.md` tiene los dos idiomas lado a lado.

---

## Qué falta — en orden de prioridad

### 🔴 Bloqueantes antes de publicar

- [x] Dirección de la oficina — 753 Valle del Toa, Campos de Montehiedra, San Juan, PR 00926
- [x] Teléfono — 787-718-7751
- [x] Correo real — servicio@arcempr.com (sustituye a hola@arcempartners.com en `index.html` y `assets/js/main.js`)
- [x] Dominio — www.arcempr.com (canonical actualizado; **falta** actualizar `og:image` y generar `og-image.png` con la ruta correcta)
- [x] Licencia OCS — confirmado con compliance: **la OCS no exige mostrar el número de licencia** en el sitio de un corredor. Se queda fuera del hero y del footer, sin pendiente.
- [x] Barra de prueba (`sección .proof`) — rellenada con cifras reales: **20+** años de experiencia combinada de los socios, **$100M+** en prima colocada, acceso **global** a carriers (PR + mercados como Lloyd's of London), **100,000+** vidas cubiertas. Como ARCEM se fundó el 15 de septiembre de 2026, los rótulos atribuyen explícitamente estas cifras a la trayectoria de los socios, no a la historia de la empresa.
- [x] Horario de oficina — confirmado con el cliente: "Lunes a viernes · 8:30 a.m. – 5:00 p.m. AST" es correcto tal cual está.
- [x] Credenciales/certificaciones en `/firma` — Carlos A. Ruiz: CPCU · AU · ARe · AINS. Edgar Almodóvar: ninguna por ahora (confirmado); si más adelante quiere añadir algo, se actualiza entonces.

### 🟠 Funcionalidad

- [x] Formulario — el cliente confirmó que **no usarán CRM ni servicio de formularios por ahora**. Se mantiene `mailto:` a servicio@arcempr.com, ahora también en `/contacto` con campo de teléfono opcional.
- [x] `og-image.png` — generado en `assets/logo/og-image.png` (1200×630, mark + wordmark sobre `#13201A`, a partir de `arcem-lockup-horizontal-reverse.svg`). Referenciado en las 5 páginas.
- [x] Analítica — confirmado con el cliente: **no usan analítica por ahora**. No se instala nada. Si más adelante se agrega algo con cookies no esenciales, hay que añadir aviso de cookies entonces — no aplica hoy.

### 🟡 Páginas por construir

La landing es la base. El sitio completo propuesto:

| Ruta | Contenido | Estado |
|---|---|---|
| `/` (`index.html`) | Landing | Hecho |
| `/beneficios` (`beneficios.html`) | Detalle de Employee Benefits: qué cubre, proceso de renovación, apoyo al empleado | Hecho |
| `/comercial` (`comercial.html`) | Detalle de Commercial P&C: líneas, riesgo de viento, continuidad de negocio | Hecho |
| `/firma` (`firma.html`) | Origen del nombre, principales (Carlos A. Ruiz y Edgar Almodóvar), valores | Hecho — Carlos con credenciales (CPCU · AU · ARe · AINS), Edgar sin ninguna por ahora |
| `/contacto` (`contacto.html`) | Formulario ampliado (+ teléfono), dirección, horario, mapa embebido de Google Maps | Hecho |
| `/benefits` (`benefits.html`) | Alias en inglés de `/beneficios` | Hecho |
| `/commercial` (`commercial.html`) | Alias en inglés de `/comercial` | Hecho |
| `/about` (`about.html`) | Alias en inglés de `/firma` | Hecho |
| `/contact` (`contact.html`) | Alias en inglés de `/contacto` | Hecho |
| `/recursos` | Opcional. Guías de renovación, calendario de temporada de huracanes | **Descartada por ahora** — el cliente decidió no construirla. Necesitaría contenido técnico propio (checklists, fechas) que nadie ha escrito todavía; retomar si algún día quieren ese contenido. |

**Al construir cada página nueva:** reutiliza el encabezado, el footer, los tokens y los patrones de `index.html` tal cual. Misma retícula, mismo ritmo vertical, mismos componentes. No inventes un lenguaje visual nuevo por página.

El header ahora incluye un enlace a "La firma" en las 9 páginas existentes, y el botón "Agendar consulta" del header y las CTAs de las páginas nuevas apuntan a `contacto.html`/`contact.html` (la landing conserva su propio formulario en `#contacto` sin cambios, y no tiene alias en inglés — `index.html` es la única URL para `/`).

### Cómo funcionan los alias en inglés

Son archivos separados (`benefits.html`, `commercial.html`, `about.html`, `contact.html`), no redirects. Cada uno tiene su contenido **ya resuelto en inglés** en el HTML fuente (no solo `<html lang="en">` con texto en español esperando a que corra `main.js`) — evita el parpadeo de idioma y mantiene el `lang` del documento consistente con el contenido para SEO/accesibilidad desde la primera carga. Se generan a partir de su par en español; si editas `beneficios.html`, `comercial.html`, `firma.html` o `contacto.html`, hay que regenerar el alias correspondiente (o pedírselo a Claude Code) para que no queden desincronizados.

`assets/js/main.js` toma el idioma por defecto del propio `<html lang="...">` de cada página en vez de asumir español siempre — así el toggle y el guardado en `localStorage` funcionan igual en las 9 páginas sin duplicar el script. Visitar cualquier página en inglés deja todo el sitio en inglés (vía `localStorage`), incluida la landing, aunque esta no tenga URL propia en inglés.

### 🟢 Pendientes de diseño

- [ ] **Convertir el texto de los lockups SVG a trazos** — **pospuesto a propósito**, el cliente lo dejó para más adelante (retomar cuando haya papelería o material de imprenta en curso). Hoy llevan texto vivo que necesita Jost instalada. En la web no aplica — ahí el wordmark se compone con HTML.
- [ ] Fotografía. No hay ninguna todavía. Si se añade: San Juan real, oficinas reales, gente real. **Nada de stock de ejecutivos dándose la mano.**
- [ ] Estados de foco y hover revisados en todos los enlaces nuevos.

---

## Preguntas abiertas para el cliente

1. ~~¿«Partners» es la marca paraguas?~~ **Resuelto:** el nombre de la compañía es ARCEM Partners — es la marca paraguas, las dos prácticas son líneas de negocio bajo ella, no marcas propias. La arquitectura de navegación actual (endosos, no marcas separadas) es correcta.
2. ~~¿El nombre legal coincide con el nombre comercial?~~ **Resuelto:** sí, ARCEM Partners es también el nombre legal de la entidad.
3. ~~¿Qué requiere la OCS de Puerto Rico?~~ **Resuelto:** confirmado con compliance, no exige mostrar el número de licencia en el sitio.
4. ~~¿Hay que declarar relaciones con carriers?~~ **Resuelto:** el cliente confirmó que no aplica. No se agrega ningún texto de divulgación de compensación de carriers al sitio.

---

## Cómo trabajar

```bash
# Servidor local — cualquiera de los dos
python3 -m http.server 8000
npx serve .
```

Luego `http://localhost:8000`.

No hay build, no hay tests, no hay linter configurado. Si añades herramientas, que sean opcionales: el sitio tiene que seguir abriéndose sin ellas.

### Antes de dar por terminado un cambio

- Míralo a **390px de ancho** y confirma que no hay scroll horizontal
- Prueba **el selector de idioma** en las dos direcciones
- Prueba en **tema claro y oscuro** del sistema
- Navega **con Tab** y confirma que el foco se ve en todo elemento interactivo
- Confirma que **no quedó ningún dato inventado** donde debía haber un marcador

---

## Despliegue

Sitio estático. Netlify, Vercel, Cloudflare Pages o GitHub Pages sirven sin configuración: se apunta al directorio raíz y listo.

Antes del primer despliegue: sustituir los marcadores bloqueantes, generar `og-image.png` y confirmar el dominio en los metadatos.
