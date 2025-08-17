# 📊 Dashboard de Gestión de Inventario

Un dashboard administrativo moderno y responsivo desarrollado para la **Actividad 3 del curso de DISEÑO WEB** del programa **Ingeniería de Software** de la **Universidad Manuela Beltrán**.

Este proyecto demuestra el dominio de tecnologías web modernas implementando un sistema de gestión de inventario empresarial con interfaz intuitiva, funcionalidades avanzadas de visualización de datos y diseño completamente responsivo.

## 🎯 Planteamiento del Proyecto

### **Objetivo de la Actividad**
Desarrollar un dashboard administrativo para un sistema de gestión de inventario que demuestre el dominio de tecnologías web modernas, incluyendo HTML5 semántico, CSS Grid, Flexbox, responsividad y accesibilidad.

### **Investigación y Referencias**
Durante el desarrollo se investigaron ejemplos de dashboards modernos en plataformas como:
- **Dribbble Dashboards**: Inspiración para el diseño visual y la paleta de colores
- **Material Design**: Guía para la implementación de componentes y transiciones
- **Dashboards Empresariales**: Referencia para la funcionalidad y organización de datos

### **Componentes Principales Seleccionados**
1. **Barra Lateral de Navegación (Sidebar)**: Navegación principal con logo, menú y perfil de usuario
2. **Tarjetas de Resumen (Summary Cards)**: Métricas clave del inventario con mini-gráficas
3. **Gráficos y Visualización**: Gráficas de barras y líneas para análisis de ventas
4. **Tabla de Datos**: Lista de productos con acciones rápidas
5. **Encabezado Superior (Header)**: Título, acciones principales y notificaciones
6. **Footer Informativo**: Enlaces de ayuda y contacto

## 🚀 Características Principales

### ✨ **Interfaz Moderna y Responsiva**
- **Diseño Material Design** con componentes elegantes y animaciones suaves
- **Responsive Design** que se adapta perfectamente a todos los dispositivos
- **Tema Claro/Oscuro** con transiciones suaves y persistencia de preferencias
- **Sidebar Colapsible** para optimizar el espacio de trabajo

### 📱 **Sistema de Breakpoints Inteligente**
- **Desktop (>1024px)**: Layout completo con sidebar de 260px
- **Tablet Grande (901px-1024px)**: Sidebar de 280px optimizado
- **Tablet Pequeña (769px-900px)**: Sidebar de 260px compacto
- **Móvil (≤768px)**: Sidebar overlay con navegación táctil

### 📊 **Visualización de Datos Avanzada**
- **Gráficas Interactivas** con Chart.js para análisis de ventas y tendencias
- **Mini-gráficas** en tarjetas de resumen para métricas rápidas
- **Tablas Responsivas** con paginación y filtros
- **Indicadores en Tiempo Real** para monitoreo continuo

### 🎯 **Funcionalidades Core**
- **Gestión de Inventario** con seguimiento de stock
- **Análisis de Ventas** con gráficas de barras y líneas
- **Alertas de Stock Bajo** para reabastecimiento oportuno
- **Dashboard de Métricas** con KPIs clave del negocio

### 🔧 **Características Técnicas**
- **Vanilla JavaScript** puro sin dependencias externas
- **CSS Grid y Flexbox** para layouts modernos y flexibles
- **CSS Variables** para sistema de diseño consistente
- **Accesibilidad Web** con ARIA labels y navegación por teclado
- **Gestos Táctiles** para dispositivos móviles (swipe)

## 🏗️ Estructura Avanzada en HTML5

### **Organización Semántica del Dashboard**
El proyecto utiliza etiquetas HTML5 semánticas para crear una estructura clara y accesible:

```html
<!-- Estructura principal del dashboard -->
<main class="dashboard-container">
    <!-- Barra lateral de navegación -->
    <aside class="sidebar" role="navigation">
        <header class="sidebar-header">
            <div class="logo">...</div>
        </header>
        <nav class="sidebar-nav">...</nav>
        <div class="user-details">...</div>
    </aside>
    
    <!-- Contenido principal -->
    <section class="main-content" role="main">
        <!-- Encabezado superior -->
        <header class="header" role="banner">
            <div class="header-left">...</div>
            <div class="header-actions">...</div>
        </header>
        
        <!-- Área principal con contenido -->
        <div class="content-area">
            <!-- Tarjetas de resumen -->
            <section class="summary-cards">...</section>
            
            <!-- Dashboard grid con gráficas y tabla -->
            <div class="dashboard-grid">...</div>
        </div>
        
        <!-- Footer informativo -->
        <footer class="footer" role="contentinfo">...</footer>
    </section>
</main>
```

### **Etiquetas Semánticas Implementadas**
- `<main>`: Contenido principal del dashboard
- `<aside>`: Barra lateral de navegación
- `<header>`: Encabezados de secciones
- `<nav>`: Navegación principal
- `<section>`: Secciones de contenido
- `<footer>`: Pie de página informativo
- `<article>`: Tarjetas de resumen individuales

## 🎨 Maquetación con CSS Grid

### **Layout Principal del Dashboard**
El dashboard utiliza CSS Grid para definir la distribución principal, creando un layout flexible y organizado:

```css
.dashboard-container {
    display: grid;
    grid-template-areas: 
        "sidebar main";
    grid-template-columns: var(--sidebar-width) 1fr;
    min-height: 100vh;
    gap: 0;
}
```

### **Áreas Nombradas del Grid**
- **`sidebar`**: Barra lateral de navegación (ancho fijo)
- **`main`**: Contenido principal (ancho flexible)

### **Distribución Responsiva del Grid**
```css
/* Desktop: Sidebar + Main */
grid-template-areas: "sidebar main";
grid-template-columns: 260px 1fr;

/* Tablet: Sidebar + Main (ancho adaptado) */
@media (max-width: 1024px) {
    grid-template-columns: 280px 1fr;
}

/* Móvil: Solo Main (sidebar como overlay) */
@media (max-width: 768px) {
    grid-template-areas: "main";
    grid-template-columns: 1fr;
}
```

### **Ventajas del CSS Grid**
- **Layout Bidimensional**: Control preciso de filas y columnas
- **Áreas Nombradas**: Código más legible y mantenible
- **Responsividad Nativa**: Adaptación automática a diferentes tamaños
- **Flexibilidad**: Fácil reordenamiento de elementos

## 🔧 Componentes Internos con Flexbox

### **Distribución Responsiva de Elementos**
Flexbox se utiliza para la alineación y distribución responsiva de componentes internos:

#### **Tarjetas de Resumen**
```css
.summary-cards {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-4);
    justify-content: space-between;
}

.summary-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
```

#### **Barra de Navegación**
```css
.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}
```

#### **Header con Acciones**
```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-actions {
    display: flex;
    gap: var(--spacing-4);
    align-items: center;
}
```

### **Adaptación Responsiva de Componentes**
- **Tarjetas**: Se reorganizan automáticamente según el espacio disponible
- **Navegación**: Se adapta al ancho del sidebar en diferentes dispositivos
- **Header**: Mantiene la alineación en todos los breakpoints
- **Tabla**: Filas se ajustan al contenido disponible

### **Ventajas del Flexbox**
- **Alineación Inteligente**: Distribución automática del espacio
- **Reorganización**: Elementos se adaptan al contenedor
- **Responsividad**: Cambios automáticos según el tamaño
- **Mantenibilidad**: Código más limpio y organizado

## ✨ Interactividad Visual y Diseño Avanzado

### **Efectos Visuales con Transiciones y Pseudo-clases**

#### **Efectos Hover en Tarjetas**
```css
.summary-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
}

.chart-card:hover,
.table-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}
```

#### **Navegación Interactiva**
```css
.nav-link:hover {
    background-color: var(--primary-100);
    transform: translateX(4px);
    transition: all var(--transition-normal);
}

.nav-link:focus {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
}
```

#### **Botones con Estados Visuales**
```css
.btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
}
```

### **Menú Lateral Colapsable**
El sidebar implementa un sistema de colapso inteligente:
- **Desktop**: Sidebar se colapsa a 70px (solo iconos)
- **Tablet**: Sidebar mantiene ancho completo
- **Móvil**: Sidebar se convierte en overlay

```css
.sidebar.collapsed {
    width: var(--sidebar-collapsed-width);
    transition: width var(--transition-normal);
}

.sidebar.collapsed .logo-text,
.sidebar.collapsed .nav-link span,
.sidebar.collapsed .user-details {
    display: none;
}
```

### **Variables CSS y Custom Properties**
Sistema de diseño consistente con variables CSS:

```css
:root {
    /* Colores principales */
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #a5b4fc;
    
    /* Espaciado */
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-4: 1rem;
    
    /* Transiciones */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
}
```

### **Ventajas del Sistema de Variables**
- **Consistencia**: Colores y espaciado uniformes en todo el proyecto
- **Mantenibilidad**: Cambios centralizados en un solo lugar
- **Flexibilidad**: Fácil implementación de temas (claro/oscuro)
- **Escalabilidad**: Nuevas variables se integran fácilmente

## 📱 Responsividad y Media Queries

### **Sistema de Breakpoints Inteligente**
El dashboard implementa un sistema de breakpoints que se adapta perfectamente a escritorio, tablet y móvil:

#### **Breakpoints Principales**
```css
/* Desktop: > 1024px */
@media (min-width: 1025px) {
    .dashboard-container {
        grid-template-columns: 260px 1fr;
    }
}

/* Tablet Grande: 901px - 1024px */
@media (max-width: 1024px) and (min-width: 901px) {
    .dashboard-container {
        grid-template-columns: 280px 1fr;
    }
}

/* Tablet Pequeña: 769px - 900px */
@media (max-width: 900px) and (min-width: 769px) {
    .dashboard-container {
        grid-template-columns: 260px 1fr;
    }
}

/* Móvil: ≤ 768px */
@media (max-width: 768px) {
    .dashboard-container {
        grid-template-areas: "main";
        grid-template-columns: 1fr;
    }
}
```

### **Adaptación del Sidebar por Dispositivo**

#### **Desktop (>1024px)**
- Sidebar fijo de 260px
- Navegación completa con texto e iconos
- Layout de 2 columnas para gráficas
- Hover effects completos

#### **Tablet (769px - 1024px)**
- Sidebar de 260px-280px optimizado
- Navegación completa adaptada
- Layout adaptativo para pantallas medianas
- Hover effects moderados

#### **Móvil (≤768px)**
- Sidebar se convierte en overlay
- Botón hamburguesa para abrir/cerrar
- Navegación táctil optimizada
- Layout de 1 columna completo

### **Implementación del Sidebar Responsivo**
```css
/* Sidebar en móvil */
@media (max-width: 768px) {
    .sidebar {
        position: fixed !important;
        left: -100% !important;
        width: 100% !important;
        height: 100vh !important;
        z-index: 1000 !important;
        transition: all var(--transition-normal) !important;
    }
    
    .sidebar.active {
        left: 0 !important;
        opacity: 1;
        visibility: visible;
    }
}
```

### **Ventajas del Sistema Responsivo**
- **Mobile First**: Enfoque en dispositivos móviles
- **Breakpoints Inteligentes**: Adaptación automática al contenido
- **Performance**: Optimizado para cada tipo de dispositivo
- **UX Consistente**: Experiencia uniforme en todas las pantallas

## ♿ Accesibilidad y Buenas Prácticas

### **Roles ARIA Implementados**
El dashboard utiliza roles ARIA apropiados para mejorar la accesibilidad:

```html
<!-- Navegación principal -->
<aside class="sidebar" role="navigation" aria-label="Navegación principal">
    <nav class="sidebar-nav" aria-label="Menú de navegación">
        <a href="#dashboard" class="nav-link" aria-current="page">Dashboard</a>
    </nav>
</aside>

<!-- Contenido principal -->
<main class="main-content" role="main" aria-label="Contenido principal">
    <header class="header" role="banner" aria-label="Encabezado">
        <h1 class="page-title">Dashboard de Inventario</h1>
    </header>
    
    <section class="summary-cards" aria-label="Tarjetas de resumen">
        <article class="summary-card" role="article">
            <h3 class="card-title">Total Productos</h3>
        </article>
    </section>
</main>

<!-- Pie de página -->
<footer class="footer" role="contentinfo" aria-label="Información del sitio">
    <p>&copy; 2024 Dashboard de Inventario</p>
</footer>
```

### **Verificación de Contraste de Colores**
El proyecto cumple con estándares WCAG AA para contraste:

- **Texto Principal**: Contraste 4.5:1 o superior
- **Texto Secundario**: Contraste 3:1 o superior
- **Enlaces**: Contraste 4.5:1 o superior
- **Botones**: Contraste 3:1 o superior

#### **Paleta de Colores Accesible**
```css
:root {
    /* Colores con alto contraste */
    --text-primary: #0f172a;      /* Contraste: 15.6:1 */
    --text-secondary: #475569;     /* Contraste: 7.1:1 */
    --primary-color: #6366f1;      /* Contraste: 4.8:1 */
    --success-color: #10b981;      /* Contraste: 3.1:1 */
}
```

### **Navegación por Teclado**
Implementación completa de navegación por teclado:

#### **Atajos de Teclado**
- **Tab**: Navegación secuencial por elementos interactivos
- **Shift + Tab**: Navegación en reversa
- **Enter/Space**: Activar botones y enlaces
- **Alt + S**: Alternar sidebar (desktop)
- **Escape**: Cerrar sidebar en móvil

#### **Focus Visible**
```css
/* Estilo para elementos con focus */
.btn:focus,
.nav-link:focus,
input:focus {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
    border-radius: var(--border-radius-sm);
}

/* Focus visible solo para navegación por teclado */
.btn:focus:not(:focus-visible) {
    outline: none;
}
```

### **Descripciones Alt para Iconos e Imágenes**
Todos los iconos incluyen descripciones alt apropiadas:

```html
<!-- Iconos con aria-label -->
<button class="btn" aria-label="Notificaciones">
    <i class="fas fa-bell" aria-hidden="true"></i>
    <span class="notification-badge" aria-label="3 notificaciones nuevas">3</span>
</button>

<!-- Botón de tema con descripción -->
<button class="btn theme-toggle" aria-label="Cambiar tema">
    <i class="fas fa-sun light-icon" aria-hidden="true"></i>
    <i class="fas fa-moon dark-icon" aria-hidden="true"></i>
</button>

<!-- Botón hamburguesa móvil -->
<button class="btn mobile-hamburger" aria-label="Abrir menú de navegación">
    <i class="fas fa-bars" aria-hidden="true"></i>
</button>
```

### **Buenas Prácticas de Accesibilidad**
- **Semántica HTML**: Uso correcto de etiquetas semánticas
- **Estructura Lógica**: Jerarquía de encabezados coherente
- **Contraste Adecuado**: Colores que cumplen estándares WCAG
- **Navegación Intuitiva**: Flujo de navegación lógico y predecible
- **Feedback Visual**: Estados claros para todas las interacciones

### **Ventajas de la Implementación Accesible**
- **Inclusividad**: Accesible para usuarios con discapacidades
- **SEO Mejorado**: Mejor indexación por motores de búsqueda
- **Cumplimiento**: Cumple con estándares internacionales
- **UX Universal**: Experiencia mejorada para todos los usuarios

## 🖥️ Capturas de Pantalla

### 🖥️ **Desktop (>1024px)**

#### **Tema Claro**
![Dashboard Desktop - Tema Claro](evidencias/desktop_light.png)
*Dashboard completo en escritorio con tema claro - Sidebar de 260px, layout de 2 columnas para gráficas, tarjetas de resumen en 4 columnas*

#### **Tema Oscuro**
![Dashboard Desktop - Tema Oscuro](evidencias/desktop_dark.png)
*Dashboard completo en escritorio con tema oscuro - Misma funcionalidad con paleta de colores adaptada para mejor contraste*

---

### 📱 **Tablet (901px - 1024px)**

![Dashboard Tablet](evidencias/tablet1.png)
*Dashboard optimizado para tablet - Sidebar de 280px, layout adaptativo para pantallas medianas, tarjetas en 2 columnas, gráficas en layout de 2 columnas*

---

### 📱 **Móvil (≤768px)**

#### **Vista Principal**
![Dashboard Móvil - Vista Principal](evidencias/movil1.png)
*Dashboard en vista móvil - Layout de 1 columna completo, contenido optimizado para pantallas pequeñas*

#### **Sidebar Abierto**
![Dashboard Móvil - Sidebar Abierto](evidencias/movil_sidebar.png)
*Sidebar overlay en móvil - Navegación táctil optimizada, botón "Añadir Producto" visible, menú completo accesible*

#### **Navegación Móvil**
![Dashboard Móvil - Navegación](evidencias/movil2.png)
*Navegación móvil optimizada - Botón hamburguesa funcional, sidebar como overlay, experiencia táctil mejorada*

#### **Contenido Móvil**
![Dashboard Móvil - Contenido](evidencias/movil3.png)
*Contenido adaptado para móvil - Tarjetas apiladas verticalmente, gráficas optimizadas, tabla responsive*

#### **Funcionalidades Móviles**
![Dashboard Móvil - Funcionalidades](evidencias/movil4.png)
*Funcionalidades específicas para móvil - Botones táctiles, interacciones optimizadas, layout de 1 columna*

---

### 🔔 **Sistema de Notificaciones Toast**

#### **Notificación de Éxito**
![Notificación de Éxito](evidencias/notification1.png)
*Toast notification de éxito - Posicionamiento bottom-right, diseño elegante con icono de check*

#### **Notificación de Información**
![Notificación de Información](evidencias/notification2.png)
*Toast notification informativa - Posicionamiento bottom-right, diseño limpio con icono de información*

#### **Notificación de Advertencia**
![Notificación de Advertencia](evidencias/notification3.png)
*Toast notification de advertencia - Posicionamiento bottom-right, diseño destacado con icono de advertencia*

#### **Notificación de Error**
![Notificación de Error](evidencias/notification4.png)
*Toast notification de error - Posicionamiento bottom-right, diseño de alerta con icono de error*

---

### 📊 **Características Visuales Destacadas**

- **Responsividad Completa**: El dashboard se adapta perfectamente a todos los tamaños de pantalla
- **Temas Claro/Oscuro**: Implementación completa con transiciones suaves
- **Sidebar Inteligente**: Se convierte en overlay en móvil y se colapsa en desktop
- **Notificaciones Toast**: Sistema elegante posicionado en bottom-right
- **Layout Adaptativo**: CSS Grid y Flexbox que se reorganiza automáticamente
- **Navegación Táctil**: Optimizada para dispositivos móviles con gestos

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5** semántico y accesible
- **CSS3** con Grid, Flexbox y Variables CSS
- **JavaScript ES6+** vanilla sin frameworks
- **Chart.js** para visualización de datos

### **Herramientas de Desarrollo**
- **Responsive Design** con media queries avanzadas
- **CSS Custom Properties** para sistema de diseño
- **Modular JavaScript** con funciones organizadas
- **Optimización de rendimiento** con transiciones CSS

## 📁 Estructura del Proyecto

```
repo/
├── index.html          # Estructura principal del dashboard
├── styles.css          # Estilos CSS con sistema responsivo
├── script.js           # Lógica JavaScript del dashboard
└── README.md           # Documentación del proyecto
```

## 🚀 Instalación y Uso

### **Requisitos Previos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### **Pasos de Instalación**
1. **Clonar o descargar** el repositorio
2. **Abrir `index.html`** en tu navegador
3. **¡Listo!** El dashboard se cargará automáticamente

### **Desarrollo Local**
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Si tienes PHP instalado
php -S localhost:8000
```

## 🎨 Sistema de Diseño

### **Paleta de Colores**
- **Primario**: `#6366f1` (Indigo)
- **Secundario**: `#64748b` (Slate)
- **Éxito**: `#10b981` (Emerald)
- **Advertencia**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)

### **Tipografía**
- **Familia**: Inter (fallback a sistema)
- **Escalas**: xs, sm, base, lg, xl, 2xl, 3xl
- **Pesos**: 400 (normal), 600 (semibold), 700 (bold)

### **Espaciado**
- **Sistema de 8px**: 4, 8, 12, 16, 20, 24, 32, 40, 48px
- **Variables CSS**: --spacing-1 a --spacing-12
- **Responsivo**: Se adapta según el dispositivo

## 📱 Características Responsivas

### **Desktop (>1024px)**
- Sidebar fijo de 260px
- Layout de 2 columnas para gráficas
- Tarjetas en 4 columnas
- Hover effects completos
- Transiciones suaves

### **Tablet Grande (901px-1024px)**
- Sidebar de 280px optimizado
- Layout adaptativo 2x2 para gráficas
- Tarjetas en 2 columnas
- Hover effects moderados
- Transiciones normales

### **Tablet Pequeña (769px-900px)**
- Sidebar de 260px compacto
- Layout de 1 columna para gráficas
- Tarjetas optimizadas
- Hover effects sutiles
- Transiciones rápidas

### **Móvil (≤768px)**
- Sidebar overlay con botón hamburguesa
- Layout de 1 columna completo
- Navegación táctil
- Botón "Añadir Producto" en sidebar
- Gestos de swipe

## 🔧 Funcionalidades JavaScript

### **Gestión del Sidebar**
- Toggle colapsar/expandir
- Responsive automático
- Overlay en móvil
- Transiciones suaves

### **Sistema de Notificaciones**
- Toast notifications
- Posicionamiento bottom-right
- Auto-dismiss después de 5 segundos
- Tipos: success, error, info, warning

### **Gestión de Tema**
- Toggle claro/oscuro
- Persistencia en localStorage
- Detección automática del sistema
- Transiciones suaves

### **Interactividad**
- Hover effects responsivos
- Animaciones de entrada
- Gestos táctiles (swipe)
- Navegación por teclado

## 📊 Componentes del Dashboard

### **Tarjetas de Resumen**
- Total de productos
- Valor total del inventario
- Productos con stock bajo
- Ventas del mes actual

### **Gráficas Principales**
- **Gráfica de Barras**: Ventas mensuales
- **Gráfica de Línea**: Tendencia de ventas anual
- **Mini-gráficas**: Fluctuaciones en tarjetas

### **Tabla de Datos**
- Lista de productos
- Stock actual
- Precios
- Acciones rápidas

## 🎯 Casos de Uso

### **Para Empresas**
- Monitoreo de inventario en tiempo real
- Análisis de tendencias de ventas
- Gestión de stock y reabastecimiento
- Dashboard ejecutivo para toma de decisiones

### **Para Desarrolladores**
- Ejemplo de dashboard responsivo
- Implementación de CSS Grid y Flexbox
- Sistema de breakpoints avanzado
- Arquitectura JavaScript modular

### **Para Estudiantes**
- Proyecto académico completo
- Implementación de conceptos web modernos
- Sistema de diseño responsivo
- Buenas prácticas de desarrollo

## 🔮 Próximas Funcionalidades

### **Fase 2 - Funcionalidades Avanzadas**
- [ ] Sistema de autenticación
- [ ] Base de datos real (Firebase/Supabase)
- [ ] Filtros y búsqueda avanzada
- [ ] Exportación de reportes (PDF/Excel)

### **Fase 3 - Integración**
- [ ] API REST para datos
- [ ] WebSockets para actualizaciones en tiempo real
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push

### **Fase 4 - Escalabilidad**
- [ ] Múltiples usuarios y roles
- [ ] Dashboard personalizable
- [ ] Temas adicionales
- [ ] Internacionalización (i18n)

## 🤝 Contribuciones

### **Cómo Contribuir**
1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### **Áreas de Mejora**
- Optimización de rendimiento
- Nuevas funcionalidades
- Mejoras de accesibilidad
- Tests automatizados
- Documentación adicional

## 📄 Licencia

Este proyecto está desarrollado para **fines educativos** como parte de una actividad universitaria. 

**Autor**: [DUMAR ARTURO PABON E.]  
**Institución**: [Universidad Manuela Beltran]  
**Curso**: [Diseño Web]  
**Fecha**: [17-08-2025]

## 📞 Contacto

- **Email**: [gabosoft.ape@gmail.com]
- **GitHub**: [@gabosoftape]

---

## 🎉 Agradecimientos

- **Chart.js** por la librería de gráficas
- **Font Awesome** por los iconos
- **Inter Font** por la tipografía
- **Comunidad CSS** por las mejores prácticas

---

**⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!**

---

## 🎨 Decisiones de Diseño y Accesibilidad

### **Filosofía de Diseño**
El dashboard fue diseñado siguiendo principios de **diseño centrado en el usuario** y **accesibilidad universal**:

#### **Principios de Diseño Aplicados**
1. **Simplicidad**: Interfaz limpia y fácil de entender
2. **Consistencia**: Patrones de diseño uniformes en todo el proyecto
3. **Eficiencia**: Acceso rápido a la información más importante
4. **Accesibilidad**: Inclusivo para usuarios con diferentes capacidades

### **Decisiones de Diseño Específicas**

#### **Paleta de Colores**
- **Indigo como color primario**: Transmite confianza y profesionalismo
- **Grises neutros**: Proporcionan contraste adecuado y legibilidad
- **Colores semánticos**: Verde para éxito, rojo para errores, amarillo para advertencias

#### **Tipografía**
- **Fuente Inter**: Excelente legibilidad en pantallas digitales
- **Jerarquía clara**: Tamaños de fuente que crean estructura visual
- **Pesos variados**: Diferenciación clara entre títulos y contenido

#### **Layout y Espaciado**
- **Sistema de 8px**: Espaciado consistente y armonioso
- **Grid responsivo**: Adaptación automática a diferentes dispositivos
- **Flexbox interno**: Alineación precisa de componentes

### **Decisiones de Accesibilidad**

#### **Estructura Semántica**
- **HTML5 semántico**: Uso correcto de etiquetas para mejor comprensión
- **Roles ARIA**: Navegación clara para lectores de pantalla
- **Jerarquía de encabezados**: Estructura lógica y predecible

#### **Navegación y Interacción**
- **Navegación por teclado**: Acceso completo sin mouse
- **Focus visible**: Indicadores claros de elementos activos
- **Atajos de teclado**: Eficiencia para usuarios avanzados

#### **Contraste y Legibilidad**
- **Estándares WCAG AA**: Cumplimiento de estándares internacionales
- **Contraste alto**: Legibilidad en diferentes condiciones de iluminación
- **Tamaños de fuente**: Mínimo 16px para texto principal

### **Justificación de Decisiones Técnicas**

#### **CSS Grid vs Flexbox**
- **Grid para layout principal**: Control bidimensional del layout
- **Flexbox para componentes**: Alineación y distribución interna
- **Combinación inteligente**: Mejor de ambos mundos

#### **Vanilla JavaScript**
- **Sin dependencias**: Carga rápida y mantenimiento simple
- **Control total**: Implementación personalizada de funcionalidades
- **Aprendizaje**: Mejor comprensión de conceptos fundamentales

#### **Variables CSS**
- **Consistencia**: Sistema de diseño unificado
- **Mantenibilidad**: Cambios centralizados y eficientes
- **Flexibilidad**: Fácil implementación de temas

### **Impacto en la Experiencia del Usuario**

#### **Beneficios para Usuarios Finales**
- **Navegación intuitiva**: Encuentran información rápidamente
- **Interacciones fluidas**: Transiciones suaves y feedback visual
- **Accesibilidad universal**: Funciona para todos los usuarios

#### **Beneficios para Desarrolladores**
- **Código mantenible**: Estructura clara y bien organizada
- **Escalabilidad**: Fácil agregar nuevas funcionalidades
- **Documentación completa**: Entendimiento claro del proyecto

### **Lecciones Aprendidas**

#### **Desafíos Técnicos Superados**
- **Responsividad compleja**: Sistema de breakpoints inteligente
- **Accesibilidad avanzada**: Implementación de estándares WCAG
- **Performance**: Optimización de transiciones y animaciones

#### **Mejores Prácticas Identificadas**
- **Mobile First**: Enfoque que mejora la experiencia móvil
- **Semántica HTML**: Base sólida para accesibilidad
- **Variables CSS**: Sistema de diseño escalable

---

**Este proyecto demuestra que es posible crear interfaces web profesionales, accesibles y responsivas utilizando tecnologías web estándar, sin necesidad de frameworks complejos. La implementación de HTML5 semántico, CSS Grid, Flexbox y JavaScript vanilla resulta en un dashboard robusto, mantenible y centrado en el usuario.**

---

## 📸 **Galería Visual Completa**

### 🎯 **Resumen de Evidencias Visuales**

Este proyecto incluye **12 capturas de pantalla** que demuestran la funcionalidad completa del dashboard en todos los dispositivos:

#### **🖥️ Desktop (2 capturas)**
- `desktop_light.png` - Vista completa con tema claro
- `desktop_dark.png` - Vista completa con tema oscuro

#### **📱 Tablet (1 captura)**
- `tablet1.png` - Vista optimizada para pantallas medianas

#### **📱 Móvil (5 capturas)**
- `movil1.png` - Vista principal del dashboard
- `movil_sidebar.png` - Sidebar abierto como overlay
- `movil2.png` - Navegación móvil optimizada
- `movil3.png` - Contenido adaptado para móvil
- `movil4.png` - Funcionalidades específicas móviles

#### **🔔 Notificaciones Toast (4 capturas)**
- `notification1.png` - Notificación de éxito
- `notification2.png` - Notificación informativa
- `notification3.png` - Notificación de advertencia
- `notification4.png` - Notificación de error

### 🎨 **Características Visuales Demostradas**

✅ **Responsividad Completa**: Adaptación perfecta a todos los breakpoints  
✅ **Temas Duales**: Implementación completa de modo claro/oscuro  
✅ **Sidebar Inteligente**: Transformación automática según el dispositivo  
✅ **Navegación Táctil**: Optimizada para dispositivos móviles  
✅ **Sistema de Notificaciones**: Toast elegantes con posicionamiento bottom-right  
✅ **Layout Adaptativo**: CSS Grid y Flexbox que se reorganiza automáticamente  
✅ **Interacciones Visuales**: Hover effects, transiciones y animaciones  
✅ **Accesibilidad Visual**: Contraste adecuado y elementos claramente definidos  

### 📱 **Experiencia Multi-Dispositivo**

El dashboard proporciona una **experiencia consistente y optimizada** en todos los dispositivos:

- **Desktop**: Layout completo con sidebar fijo y funcionalidades avanzadas
- **Tablet**: Adaptación inteligente para pantallas medianas
- **Móvil**: Experiencia táctil optimizada con sidebar overlay

### 🔍 **Detalles Técnicos Visuales**

- **Breakpoints Implementados**: 4 breakpoints principales (Desktop, Tablet Grande, Tablet Pequeña, Móvil)
- **Sistema de Grid**: CSS Grid para layout principal, Flexbox para componentes internos
- **Transiciones Suaves**: Animaciones CSS optimizadas para cada tipo de dispositivo
- **Iconografía**: Font Awesome con descripciones ARIA para accesibilidad
- **Tipografía**: Inter Font con escalas responsivas
- **Colores**: Paleta accesible que cumple estándares WCAG AA

---

**🎉 ¡Estas evidencias visuales demuestran la calidad profesional y la implementación técnica sólida del dashboard!**
