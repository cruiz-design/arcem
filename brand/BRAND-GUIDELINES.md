# ARCEM Partners — Identidad de marca

Versión 1.0 · Documento de trabajo

---

## 1. La marca en una frase

ARCEM viene del latín *arcem*: ciudadela, fortaleza. Es la misma raíz asociada a las fortificaciones del Viejo San Juan. La identidad no ilustra esa idea con un castillo — la traduce a una estructura.

**Tagline:** *A stronger tomorrow. Together.*

---

## 2. El símbolo — «La Cuña Escalonada»

Dos cuñas espejadas que ascienden desde una base ancha hasta un vértice afilado cerca del centro superior, separadas por un canal vertical de aire que recorre toda la altura. Juntas forman una **A sin travesaño**; leídas de otra manera, dos muros de fortaleza que se encuentran en una proa.

### Las cuatro reglas de la forma

Todo se construye sobre un módulo **M = 1/18 de la altura del mark**. Cada vértice cae en un múltiplo de M.

| Medida | Valor | Por qué |
|---|---|---|
| Junta central | **1M** | Nunca se cierra. Es lo que separa las dos mitades — por eso los dos tonos pueden ser vecinos sin que la forma se aplane. |
| Resalto de contrafuerte | **2M** de profundidad, a 10M del vértice | El escalón en el borde exterior. Es el detalle que saca la forma del territorio de aerolínea: ese quiebre es contrafuerte, no ala. |
| Base de cada cuña | **5M** | El grosor se mantiene casi constante del vértice a la base. Una forma que adelgaza hacia arriba lee como flecha; una de grosor constante lee como construcción. |
| Área de respeto | **2M** en todo el perímetro | Nada entra ahí, ni el wordmark. |

### Proporciones

- Altura total: **18M**
- Ancho total: **16M**
- viewBox de referencia: `0 0 200 200`, con M = 8 unidades

### Tamaños mínimos

| Contexto | Mínimo |
|---|---|
| Impreso, versión de dos colores | **15 mm** de alto |
| Pantalla, versión de dos colores | **40 px** de alto |
| Por debajo de esos límites | **Monocolor obligatorio** |

Debajo del mínimo la junta se cierra ópticamente y el mark se parte en dos objetos de peso desigual.

---

## 3. Color

### Colores de marca

| Nombre | Hex | Uso |
|---|---|---|
| Verde | `#1C3A2C` | Mitad izquierda sobre fondo claro. Color primario de acción. |
| Verde medio | `#2F5A44` | Hover, estados intermedios. |
| Verde luz | `#4E8568` | Mitad izquierda sobre fondo oscuro. |
| Piedra | `#6E7772` | Mitad derecha sobre fondo claro. |
| Piedra luz | `#C3C8C4` | Mitad derecha sobre fondo oscuro. |
| Oscuro | `#13201A` | Superficie de marca: hero y footer. |

### Parejas obligatorias

- **Sobre claro** (`#F1F1EE`): verde `#1C3A2C` + piedra `#6E7772`
- **Sobre oscuro** (`#13201A`): verde luz `#4E8568` + piedra luz `#C3C8C4`

### Un gris que NO se usa

El gris `#AFB5B1` del board original da **1.86:1** de contraste sobre fondo claro. Solo se veía en el mockup porque el render 3D le ponía sombra y bisel; en plano esa mitad desaparece. Está sustituido por `#6E7772` (4.12:1). No volver atrás.

### Por qué el contraste entre mitades puede ser bajo

Lo que separa las dos mitades **no es el contraste entre ellas, es el aire de la junta**. Con un vano real de por medio, los dos tonos pueden ser vecinos. Por eso la junta es estructura y no adorno — y por eso nunca se cierra.

---

## 4. Tipografía

| Rol | Familia | Google Fonts | Respaldo |
|---|---|---|---|
| Display / wordmark | **Jost** | `Jost:wght@300;400;500;600` | Helvetica Neue, Arial, sans-serif |
| Cuerpo | **Source Serif 4** | `Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400` | Georgia, Times New Roman, serif |
| Etiquetas y datos | **IBM Plex Mono** | `IBM+Plex+Mono:wght@400;500` | ui-monospace, SFMono-Regular, Menlo |

### Wordmark

- `ARCEM` — Jost 500, `letter-spacing: 0.27em`
- `PARTNERS` — Jost 400, tamaño ~40% del anterior, `letter-spacing: 0.40em`
- Ambos siempre en mayúsculas
- Al usar `letter-spacing` en CSS, añadir `text-indent` del mismo valor para compensar el espacio final

### Reglas de uso

- Etiquetas en mayúsculas: siempre mono, 10–11px, `letter-spacing: .22em`
- Titulares: `text-wrap: balance`
- Texto corrido: alrededor de 65 caracteres por línea
- Máximo tres familias. No añadir una cuarta.

---

## 5. Lockups

| Archivo | Uso |
|---|---|
| `arcem-lockup-horizontal.svg` | Principal. Encabezados, firmas de correo, documentos. |
| `arcem-lockup-horizontal-reverse.svg` | Sobre fondo oscuro. |
| `arcem-lockup-vertical.svg` | Espacios estrechos, formatos cuadrados. |

**Los endosos por práctica** sustituyen la línea `PARTNERS`, no se apilan con ella:

```
[mark]  ARCEM
        EMPLOYEE BENEFITS
```

El mark **no cambia** entre prácticas. Solo cambia el endoso.

> ⚠️ **Pendiente:** los SVG de lockup llevan texto vivo que requiere la fuente Jost instalada. Para artes finales (impresión, proveedores externos) hay que convertir el texto a trazos — en Illustrator: *Texto → Crear contornos*. En el sitio web el wordmark se compone con HTML y CSS, así que ahí no aplica.

---

## 6. La versión en volumen (3D)

El acabado tridimensional es para fachada, hero y piezas de presentación. **No** para papelería ni para tamaños pequeños.

| Parámetro | Valor |
|---|---|
| Profundidad de extrusión | 0.22 × altura |
| Chaflán de canto | 45°, recto, 0.015 × altura |
| Junta central | **Pasante** — atraviesa toda la profundidad |
| Resalto de contrafuerte | 90° vivo, sin radio |
| Cara posterior | Plana, sin vaciado |
| Luz key | Azimut 225°, elevación 55° |
| Fill frontal | Difuso, 25% |
| Cámara maestra | Frontal ortográfica |

**Materiales.** Verde: pintura mate microtexturada, rugosidad alta, absorbe la luz. Piedra: aluminio cepillado con veta vertical, reflexión anisotrópica, devuelve la luz. El contraste de **acabado** hace más trabajo que el de color — una mitad absorbe y la otra refleja, así que se distinguen aunque cambie la iluminación.

### Qué no hacer

- ❌ Redondear el canto. Un bisel suave convierte la pieza en plástico.
- ❌ Cerrar la junta por detrás. Si las mitades se tocan, deja de ser una sociedad y pasa a ser un objeto.
- ❌ Poner degradado en las caras frontales. El volumen lo dan el canto y la sombra.
- ❌ Rotar o inclinar el mark en el asset maestro. El 3D es acabado, no pose.

---

## 7. Voz

Directa, concreta, sin inflación. La marca vende criterio, no tranquilidad genérica.

**Sí:**
- «El seguro se prueba un solo día.»
- «Leemos sus pólizas actuales antes de proponer nada.»
- «El trabajo real empieza después de firmar.»

**No:**
- «Su tranquilidad es nuestra prioridad.»
- «Soluciones integrales a la medida.»
- «Más de X años de experiencia comprometidos con usted.»

Regla práctica: si la frase podría estar en la página de cualquier otro corredor de la isla, se reescribe.

---

## 8. Regla madre

**El diseño tiene que verse bien apagado.** Sin color, sin volumen, sin sombra. Si la forma no funciona en plano y a un solo tono, el 3D no la va a salvar — solo la va a disimular por un rato.
