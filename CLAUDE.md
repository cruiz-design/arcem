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

Estos son datos reales que hay que pedirle al cliente. Están marcados en el código con corchetes:

- [ ] `[##]` — las cuatro cifras de la barra de prueba: años asesorando, empresas bajo asesoría, carriers con acceso directo, vidas cubiertas
- [ ] `[DIRECCIÓN]` — dirección de la oficina
- [ ] `[787-000-0000]` — teléfono
- [ ] `[NÚMERO]` — número de licencia OCS (aparece en el hero y en el footer)
- [ ] `hola@arcempartners.com` — confirmar el correo real
- [ ] `https://www.arcempartners.com/` — confirmar el dominio en el `<link rel="canonical">` y en los meta Open Graph
- [ ] Horario de oficina — verificar que sea correcto

Busca `[` y `TODO:` en `index.html` para encontrarlos todos.

### 🟠 Funcionalidad

- [ ] **El formulario no envía a ningún lado.** Hoy abre el cliente de correo con `mailto:` y el mensaje redactado. Funciona, pero no captura leads. Conectar a Formspree, Netlify Forms, o al CRM que use el cliente. Preguntar cuál antes de elegir.
- [ ] `og-image.png` — falta generar la imagen de Open Graph (1200×630). Usar el mark sobre `#13201A` con el wordmark.
- [ ] Analítica — preguntar al cliente qué usa antes de instalar nada.
- [ ] Aviso de cookies solo si se instala analítica con cookies.

### 🟡 Páginas por construir

La landing es la base. El sitio completo propuesto:

| Ruta | Contenido |
|---|---|
| `/` | Landing (ya existe) |
| `/beneficios` · `/benefits` | Detalle de Employee Benefits: qué cubre, proceso de renovación, apoyo al empleado |
| `/comercial` · `/commercial` | Detalle de Commercial P&C: líneas, riesgo de viento, continuidad de negocio |
| `/firma` · `/about` | La firma: origen del nombre, principales, credenciales |
| `/contacto` · `/contact` | Formulario ampliado, mapa, horario |
| `/recursos` | Opcional. Guías de renovación, calendario de temporada de huracanes |

**Al construir cada página nueva:** reutiliza el encabezado, el footer, los tokens y los patrones de `index.html` tal cual. Misma retícula, mismo ritmo vertical, mismos componentes. No inventes un lenguaje visual nuevo por página.

### 🟢 Pendientes de diseño

- [ ] **Convertir el texto de los lockups SVG a trazos.** Hoy llevan texto vivo que necesita Jost instalada. Para proveedores externos e impresión hay que convertirlo. En la web no aplica — ahí el wordmark se compone con HTML.
- [ ] Fotografía. No hay ninguna todavía. Si se añade: San Juan real, oficinas reales, gente real. **Nada de stock de ejecutivos dándose la mano.**
- [ ] Estados de foco y hover revisados en todos los enlaces nuevos.

---

## Preguntas abiertas para el cliente

No las resuelvas por tu cuenta:

1. **¿«Partners» es la marca paraguas?** Los briefs originales hablaban de *ARCEM Benefits* y *ARCEM Commercial P&C* como marcas. El board de identidad usa *ARCEM Partners* con las dos prácticas como endosos. Si Partners está por encima, la arquitectura de navegación cambia.
2. **¿El nombre legal coincide con el nombre comercial?** Afecta el footer y los avisos legales.
3. **¿Qué requiere la OCS de Puerto Rico** en la web de un corredor: número de licencia, avisos, lenguaje obligatorio. Verificar antes de publicar.
4. **¿Hay que declarar relaciones con carriers** por regulación o por política de la firma.

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
