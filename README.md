# ARCEM Partners — Sitio web

Paquete de entrega: landing page terminada, identidad visual completa y archivos de logo editables.

---

## Cómo verlo ahora mismo

Abre `index.html` con doble clic. No hace falta instalar nada.

Para que las rutas funcionen igual que en producción, levanta un servidor local:

```bash
python3 -m http.server 8000
```

Y abre `http://localhost:8000`.

---

## Qué hay aquí

```
index.html          La landing page. Terminada y responsive.
CLAUDE.md           Instrucciones para continuar el trabajo con Claude Code.
assets/logo/        Logos en SVG (editables) y PNG (exportados).
brand/              Guía de marca, colores y tipografía.
content/            Toda la copy en español e inglés.
```

---

## Cómo seguir con Claude Code

1. Sube esta carpeta a un repositorio de Git.
2. Abre una terminal en la carpeta y ejecuta `claude`.
3. Claude Code lee `CLAUDE.md` automáticamente y ya sabe qué es el proyecto, qué reglas respetar y qué falta.

Un primer encargo razonable:

> Lee CLAUDE.md. Construye la página de detalle de Employee Benefits reutilizando el encabezado, el footer y los patrones de index.html.

---

## Antes de publicar

Hay datos marcadores en el código, escritos entre corchetes: `[##]`, `[DIRECCIÓN]`, `[787-000-0000]`, `[NÚMERO]`. **Son marcadores a propósito, no datos reales** — hay que pedirle las cifras verdaderas a ARCEM y sustituirlas.

El formulario de contacto tampoco envía a ningún sistema todavía: hoy abre el cliente de correo con el mensaje redactado. Hay que conectarlo a un CRM o a un servicio de formularios.

La lista completa está en `CLAUDE.md`, bajo «Qué falta».

---

## Editar los logos

Los `.svg` se abren en Illustrator, Figma, Inkscape o cualquier editor vectorial. También se pueden editar con un editor de texto: son rutas legibles y con comentarios.

Una nota: los archivos de *lockup* (mark + wordmark) llevan el texto vivo, así que necesitan la fuente **Jost** instalada para verse correctos. Es gratis, está en Google Fonts. Para artes finales que vayan a un proveedor externo, conviene convertir el texto a trazos.

---

## Las tres cosas que no hay que romper

1. **La junta central del logo nunca se cierra.** El aire entre las dos mitades es lo que las separa y lo que hace que la marca funcione.
2. **El gris del logo es `#6E7772`, no `#AFB5B1`.** El segundo desaparece sobre fondo claro.
3. **Todo texto nuevo va en los dos idiomas.** El sistema está explicado en `CLAUDE.md`.

Lo demás está en `brand/BRAND-GUIDELINES.md`.
