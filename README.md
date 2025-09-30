#  Landing Page – Startup

Landing page desarrollada en HTML5 + CSS Grid + Sass, con despliegue en Netlify (https://actividad-aulica-14.netlify.app/).  
Incluye componentes reutilizables en Sass, estructura modular y un modelo EORM documentado.

---

##  Modelo EORM (Entidad, objeto, recurso, modulo)

### 1. Entidad (E)
La **entidad** representa el núcleo conceptual del proyecto.  
- **Entidad principal:** Startup (empresa/servicio digital).  
- **Entidades secundarias:**  
  - Usuario visitante (potencial cliente).  
  - Planes de suscripción.  
  - Contacto/soporte.  

---

### 2. Objeto (O)
Los objetos son representaciones visuales/funcionales de las entidades.  
- Logo y marca = Objeto de la entidad **Startup**.  
- Hero section (`h1`, imagen, botones) → Objeto que representa el servicio.  
- Feature cards = Objetos que representan las características.  
- CTA con formulario = Objeto que representa la acción de registrarse.  
- Footer = Objeto que representa la información institucional.  

---

### 3. Recurso (R)
Los **recursos** son elementos técnicos reutilizables que sostienen los objetos.  
- **HTML5**: estructura semántica.  
- **Sass (SCSS)**:  
  - Variables de color, tipografía y espaciado.  
  - Mixins (ej: `@mixin container`, `@mixin button`).  
  - Componentes reutilizables (`.btn`, `.feature-card`, `.section-header`).  
- **Imágenes/íconos**: `logo.png`, placeholders, emojis de features.  
- **JavaScript**:  
  - Contador dinámico en el hero.
  - efecto de hover en los features

---

### 4. Módulo (M)
Los módulos son agrupaciones de recursos y objetos que cumplen una función.  
- **Header module** = Logo + navegación + botón.  
- **Hero module** = Título + subtítulo + botones + visual.  
- **Features module** = Grilla de características.  
- **CTA module** = Texto + formulario de registro.  
- **Footer module** = Links, contacto y copyright.  

---
## EORM como *Entity Oriented Relationship Model* 

En un enfoque más cercano al modelado de datos, el EORM puede representarse como un diagrama de entidades y relaciones.  
Aplicado al proyecto:  

- **Entidad: Usuario**  
  - Atributos: nombre, email, plan elegido.  
  - Relación: se registra en → Startup.  

- **Entidad: Startup**  
  - Atributos: nombre, logo, descripción, contacto.  
  - Relación: ofrece → Plan.  

- **Entidad: Plan**  
  - Atributos: tipo, precio, características.  
  - Relación: incluye → Feature.  

- **Entidad: Feature (Característica)**  
  - Atributos: nombre, icono, descripción.  
  - Relación: pertenece a → Plan.  

 Esto se puede visualizar como un diagrama ER en el que:  
- Un usuario se relaciona con la startup al registrarse.  
- La startup ofrece planes.  
- Cada plan agrupa varias features.  

---
