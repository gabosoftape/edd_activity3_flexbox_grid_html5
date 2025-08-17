# 🚀 Dashboard de Gestión de Inventario

Un dashboard administrativo moderno y responsivo desarrollado para la actividad universitaria de Estructuras de Datos. Este proyecto demuestra el uso avanzado de HTML5, CSS Grid, Flexbox y JavaScript para crear una interfaz de usuario profesional y accesible.

## 📋 Descripción del Proyecto

Este dashboard simula un sistema de gestión de inventario empresarial con las siguientes características principales:

- **Sistema de Gestión de Inventario**: Control de productos, stock, ventas y proveedores
- **Interfaz Moderna**: Diseño inspirado en dashboards profesionales como Dribbble
- **Totalmente Responsivo**: Adaptable a escritorio, tablet y móvil
- **Accesibilidad Avanzada**: Cumple con estándares ARIA y buenas prácticas de UX

## 🎯 Componentes Principales Implementados

### 1. Barra Lateral de Navegación (Sidebar)
- Logo y branding de la empresa
- Menú de navegación principal con iconos
- Información del usuario administrador
- Colapsable en dispositivos móviles
- Gradiente visual atractivo

### 2. Encabezado Superior (Header)
- Título de la página y subtítulo descriptivo
- Botones de acción principales
- Sistema de notificaciones con badge
- Botón para agregar nuevos productos

### 3. Tarjetas de Resumen (Summary Cards)
- **Total Productos**: Cantidad total en inventario
- **Valor Total**: Valor monetario del inventario
- **Stock Bajo**: Productos que requieren reabastecimiento
- **Ventas del Mes**: Ingresos del período actual
- Indicadores de cambio con colores y porcentajes

### 4. Gráficos y Visualización
- Gráfico de barras para ventas por categoría
- Categorías: Electrónicos, Ropa, Hogar, Deportes
- Barras interactivas con efectos hover
- Valores porcentuales para cada categoría

### 5. Tabla de Datos
- Lista de productos con stock bajo
- Columnas: Producto, Categoría, Stock Actual, Stock Mínimo, Estado, Acciones
- Estados visuales (Crítico, Bajo) con badges de colores
- Botones de acción para cada producto
- Efectos hover en las filas

### 6. Footer Informativo
- Información de copyright
- Enlaces de ayuda, contacto y privacidad
- Diseño limpio y profesional

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica con etiquetas modernas
- **CSS3**: Estilos avanzados con variables CSS y custom properties
- **JavaScript ES6+**: Funcionalidad interactiva y dinámica
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter para mejor legibilidad

### Características CSS
- **CSS Grid**: Layout principal del dashboard
- **Flexbox**: Alineación y distribución de componentes internos
- **Variables CSS**: Sistema de diseño consistente
- **Media Queries**: Responsividad completa
- **Transiciones y Animaciones**: Efectos visuales suaves
- **Sombras y Gradientes**: Profundidad visual moderna

### Características JavaScript
- **DOM Manipulation**: Interactividad dinámica
- **Event Handling**: Gestión de interacciones del usuario
- **Responsive Design**: Adaptación automática a diferentes dispositivos
- **Accessibility**: Navegación por teclado y roles ARIA
- **Error Handling**: Manejo robusto de errores

## 🎨 Decisiones de Diseño

### Paleta de Colores
- **Primario**: Indigo (#6366f1) - Confianza y profesionalismo
- **Secundario**: Grises neutros - Legibilidad y elegancia
- **Estado**: Verde (éxito), Amarillo (advertencia), Rojo (crítico)
- **Contraste**: Alto contraste para mejor accesibilidad

### Tipografía
- **Fuente Principal**: Inter - Excelente legibilidad en pantallas
- **Jerarquía Visual**: Tamaños claros para títulos, subtítulos y texto
- **Peso de Fuente**: Variedad para crear jerarquía visual

### Layout y Espaciado
- **Sistema de Espaciado**: Escala consistente (4px, 8px, 16px, 24px, 32px)
- **Bordes Redondeados**: Estilo moderno y amigable
- **Sombras**: Profundidad visual sin ser abrumador
- **Espaciado Generoso**: Respiración visual para mejor legibilidad

### Responsividad
- **Mobile First**: Enfoque en dispositivos móviles
- **Breakpoints**: 768px (móvil), 1024px (tablet), 1200px+ (desktop)
- **Sidebar Adaptativo**: Se convierte en menú superior en móviles
- **Grid Flexible**: Se adapta automáticamente al contenido

## ♿ Accesibilidad y Buenas Prácticas

### Roles ARIA
- `role="navigation"` para la barra lateral
- `role="main"` para el contenido principal
- `role="banner"` para el encabezado
- `role="contentinfo"` para el footer
- `role="table"` para la tabla de datos

### Navegación por Teclado
- **Alt + S**: Alternar sidebar
- **Escape**: Cerrar sidebar en móviles
- **Tab**: Navegación secuencial por elementos
- **Enter/Space**: Activar botones y enlaces

### Contraste y Legibilidad
- **Contraste Alto**: Cumple con estándares WCAG AA
- **Tamaños de Fuente**: Mínimo 16px para texto principal
- **Espaciado de Líneas**: 1.6 para mejor legibilidad
- **Colores Semánticos**: Verde para éxito, rojo para errores

### Modo Oscuro
- **Detección Automática**: Se adapta al tema del sistema
- **Variables CSS**: Cambio dinámico de colores
- **Contraste Mantenido**: Legibilidad en ambos modos

## 📱 Responsividad y Breakpoints

### Desktop (1200px+)
- Sidebar completo visible
- Layout de 2 columnas para gráficos
- Tarjetas en grid de 4 columnas
- Espaciado generoso

### Tablet (768px - 1024px)
- Sidebar colapsable
- Gráficos en columna única
- Tarjetas en grid de 2 columnas
- Espaciado moderado

### Móvil (≤768px)
- Sidebar como overlay
- Layout de columna única
- Tarjetas apiladas verticalmente
- Espaciado compacto
- Botón de menú flotante

## 🚀 Funcionalidades Interactivas

### Sidebar
- **Colapsado/Expandido**: Alternar entre modos
- **Navegación Activa**: Indicador visual de página actual
- **Responsivo**: Se adapta automáticamente al tamaño de pantalla

### Tarjetas de Resumen
- **Efectos Hover**: Elevación y cambio de color de borde
- **Animaciones**: Entrada escalonada al cargar
- **Indicadores de Cambio**: Porcentajes con colores semánticos

### Gráficos
- **Barras Interactivas**: Efectos hover y animaciones
- **Responsivo**: Se adapta al tamaño del contenedor
- **Valores Dinámicos**: Porcentajes claramente visibles

### Tabla de Datos
- **Filas Interactivas**: Efectos hover
- **Botones de Acción**: Funcionalidad para cada producto
- **Estados Visuales**: Badges de colores para diferentes niveles

### Notificaciones
- **Sistema Toast**: Notificaciones temporales
- **Tipos de Mensaje**: Éxito, error, información
- **Auto-cierre**: Desaparecen después de 5 segundos
- **Posicionamiento**: Esquina superior derecha

## 🔧 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+)
- Conexión a internet para cargar fuentes e iconos

### Pasos de Instalación
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! El dashboard se cargará automáticamente

### Estructura de Archivos
```
actividad3/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🎯 Características Destacadas

### Para la Actividad Universitaria
- **CSS Grid Avanzado**: Implementación completa del layout principal
- **Flexbox Inteligente**: Distribución responsiva de componentes
- **Variables CSS**: Sistema de diseño profesional
- **Media Queries**: Responsividad en todos los dispositivos
- **Semántica HTML5**: Estructura clara y accesible

### Funcionalidades Técnicas
- **Modular**: Código organizado y reutilizable
- **Performance**: Optimizado para carga rápida
- **Mantenible**: Estructura clara y comentada
- **Escalable**: Fácil de extender con nuevas funcionalidades

## 📸 Capturas de Pantalla

### Escritorio
- Layout completo con sidebar expandido
- Tarjetas de resumen en grid de 4 columnas
- Gráficos y tabla lado a lado
- Colores vibrantes y diseño profesional

### Tablet
- Sidebar colapsable
- Layout adaptado a pantalla media
- Gráficos en columna única
- Navegación optimizada para touch

### Móvil
- Sidebar como overlay
- Layout de columna única
- Botón de menú flotante
- Navegación táctil optimizada

## 🔮 Futuras Mejoras

### Funcionalidades Adicionales
- **Gráficos Reales**: Integración con Chart.js o D3.js
- **Base de Datos**: Conexión con backend real
- **Autenticación**: Sistema de login y usuarios
- **Notificaciones Push**: Alertas en tiempo real
- **Exportación**: PDF y Excel de reportes

### Mejoras Técnicas
- **PWA**: Aplicación web progresiva
- **Offline**: Funcionalidad sin conexión
- **Testing**: Pruebas automatizadas
- **Build Process**: Optimización de producción
- **TypeScript**: Tipado estático

## 📚 Recursos y Referencias

### Inspiración de Diseño
- [Dribbble Dashboards](https://dribbble.com/tags/dashboard)
- [Behance UI/UX](https://www.behance.net/search/projects?search=dashboard)
- [Material Design](https://material.io/design)

### Documentación Técnica
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [ARIA Guidelines](https://www.w3.org/WAI/ARIA/apg/)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

## 👨‍🎓 Autor y Propósito

**Desarrollado para**: Actividad Universitaria de Estructuras de Datos  
**Objetivo**: Demostrar dominio de tecnologías web modernas  
**Enfoque**: Profesional, accesible y técnicamente sólido  

---

## 📄 Licencia

Este proyecto es desarrollado con fines educativos para la actividad universitaria. Se permite su uso y modificación para propósitos educativos.

---

**¡Gracias por revisar este proyecto!** 🎉

Para cualquier pregunta o sugerencia sobre el dashboard, no dudes en contactar al desarrollador.
