// Dashboard de Gestión de Inventario - Script de Interactividad
// Desarrollado para Actividad Universitaria

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard cargado correctamente');
    
    // Elementos del DOM
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const summaryCards = document.querySelectorAll('.summary-card');
    const chartBars = document.querySelectorAll('.chart-bar');
    
    // Estado del sidebar
    let sidebarCollapsed = false;
    
    // Función para alternar el sidebar
    function toggleSidebar() {
        if (sidebarCollapsed) {
            // Expandir sidebar
            sidebar.classList.remove('active');
            dashboardContainer.classList.remove('sidebar-collapsed');
            sidebarCollapsed = false;
            
            // Actualizar aria-expanded
            sidebarToggle.setAttribute('aria-expanded', 'true');
            
            // Mostrar elementos del sidebar
            const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
            hiddenElements.forEach(el => el.style.display = 'block');
            
        } else {
            // Colapsar sidebar
            sidebar.classList.add('active');
            dashboardContainer.classList.add('sidebar-collapsed');
            sidebarCollapsed = true;
            
            // Actualizar aria-expanded
            sidebarToggle.setAttribute('aria-expanded', 'false');
            
            // Ocultar elementos del sidebar
            const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
            hiddenElements.forEach(el => el.style.display = 'none');
        }
    }
    
    // Event listener para el botón de toggle del sidebar
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Función para manejar la navegación activa
    function setActiveNavigation(clickedLink) {
        // Remover clase active de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        
        // Agregar clase active al enlace clickeado
        clickedLink.classList.add('active');
        clickedLink.setAttribute('aria-current', 'page');
        
        // Simular cambio de página (en un proyecto real aquí se cargaría el contenido)
        console.log('Navegando a:', clickedLink.getAttribute('href'));
    }
    
    // Event listeners para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setActiveNavigation(this);
            
            // Efecto visual de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Función para animar las tarjetas de resumen
    function animateSummaryCards() {
        summaryCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Función para animar las barras del gráfico
    function animateChartBars() {
        chartBars.forEach((bar, index) => {
            const originalHeight = bar.style.height;
            bar.style.height = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'height 0.8s ease-out';
                bar.style.height = originalHeight;
            }, index * 200);
        });
    }
    
    // Función para actualizar datos en tiempo real (simulado)
    function updateDashboardData() {
        // Simular actualización de datos
        const cardValues = document.querySelectorAll('.card-value');
        const cardChanges = document.querySelectorAll('.card-change');
        
        cardValues.forEach((value, index) => {
            // Efecto de parpadeo para indicar actualización
            value.style.transition = 'all 0.3s ease';
            value.style.transform = 'scale(1.1)';
            value.style.color = '#6366f1';
            
            setTimeout(() => {
                value.style.transform = 'scale(1)';
                value.style.color = '';
            }, 300);
        });
        
        console.log('Datos del dashboard actualizados');
    }
    
    // Función para manejar notificaciones
    function handleNotifications() {
        const notificationBtn = document.querySelector('.btn-secondary');
        const notificationBadge = document.querySelector('.notification-badge');
        
        if (notificationBtn && notificationBadge) {
            notificationBtn.addEventListener('click', function() {
                // Simular apertura de panel de notificaciones
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Mostrar mensaje de notificaciones
                showNotification('Panel de notificaciones abierto', 'info');
            });
        }
    }
    
    // Función para mostrar notificaciones toast
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close" aria-label="Cerrar notificación">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Estilos de la notificación usando variables CSS
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);
        
        const bgColor = computedStyle.getPropertyValue('--bg-card').trim();
        const borderColor = computedStyle.getPropertyValue('--gray-200').trim();
        const textColor = computedStyle.getPropertyValue('--text-primary').trim();
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            border: 1px solid ${borderColor};
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
            color: ${textColor};
        `;
        
        // Agregar al DOM
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Event listener para cerrar
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Función para manejar el botón "Nuevo Producto"
    function handleNewProduct() {
        const newProductBtn = document.querySelector('.btn-primary');
        
        if (newProductBtn) {
            newProductBtn.addEventListener('click', function() {
                // Efecto visual
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Simular apertura de modal
                showNotification('Modal de nuevo producto abierto', 'success');
            });
        }
    }
    
    // Función para manejar la tabla de datos
    function handleDataTable() {
        const tableRows = document.querySelectorAll('.data-table tbody tr');
        const actionButtons = document.querySelectorAll('.data-table .btn-primary');
        
        // Efectos hover en filas de la tabla
        tableRows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8fafc';
                this.style.transform = 'scale(1.01)';
            });
            
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
                this.style.transform = '';
            });
        });
        
        // Event listeners para botones de acción
        actionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener información del producto
                const row = this.closest('tr');
                const productName = row.cells[0].textContent;
                
                // Efecto visual
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Mostrar notificación
                showNotification(`Reabasteciendo ${productName}`, 'success');
            });
        });
    }
    
    // Función para manejar el cambio de tema
    function handleThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Obtener tema guardado en localStorage o usar el del sistema
        const savedTheme = localStorage.getItem('dashboard-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Función para aplicar tema
        function applyTheme(theme) {
            if (theme === 'dark') {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('dashboard-theme', 'dark');
                console.log('Tema oscuro aplicado');
            } else {
                html.setAttribute('data-theme', 'light');
                localStorage.setItem('dashboard-theme', 'light');
                console.log('Tema claro aplicado');
            }
        }
        
        // Aplicar tema inicial
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (prefersDark.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
        
        // Event listener para el botón de cambio de tema
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                // Efecto visual del botón
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Aplicar nuevo tema
                applyTheme(newTheme);
                
                // Actualizar notificaciones existentes
                updateExistingNotifications(newTheme);
                
                // Mostrar notificación
                const themeName = newTheme === 'dark' ? 'oscuro' : 'claro';
                showNotification(`Tema ${themeName} activado`, 'success');
            });
        }
        
        // Escuchar cambios en el tema del sistema
        prefersDark.addListener((e) => {
            if (!localStorage.getItem('dashboard-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    // Función para actualizar notificaciones existentes cuando cambie el tema
    function updateExistingNotifications(theme) {
        const notifications = document.querySelectorAll('.notification');
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);
        
        notifications.forEach(notification => {
            const bgColor = computedStyle.getPropertyValue('--bg-card').trim();
            const borderColor = computedStyle.getPropertyValue('--gray-200').trim();
            const textColor = computedStyle.getPropertyValue('--text-primary').trim();
            
            notification.style.backgroundColor = bgColor;
            notification.style.borderColor = borderColor;
            notification.style.color = textColor;
        });
    }
    
    // Función para manejar la responsividad
    function handleResponsiveness() {
        function checkScreenSize() {
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
            
            if (isMobile) {
                document.body.classList.add('mobile-view');
                document.body.classList.remove('tablet-view', 'desktop-view');
            } else if (isTablet) {
                document.body.classList.add('tablet-view');
                document.body.classList.remove('mobile-view', 'desktop-view');
            } else {
                document.body.classList.add('desktop-view');
                document.body.classList.remove('mobile-view', 'tablet-view');
            }
        }
        
        // Verificar tamaño inicial
        checkScreenSize();
        
        // Escuchar cambios de tamaño de ventana
        window.addEventListener('resize', checkScreenSize);
    }
    
    // Función para inicializar todas las funcionalidades
    function initializeDashboard() {
        console.log('Inicializando dashboard...');
        
        // Animar elementos al cargar
        setTimeout(() => {
            animateSummaryCards();
            animateChartBars();
        }, 500);
        
        // Inicializar funcionalidades
        handleNotifications();
        handleNewProduct();
        handleDataTable();
        handleThemeToggle();
        handleResponsiveness();
        
        // Simular actualización de datos cada 30 segundos
        setInterval(updateDashboardData, 30000);
        
        console.log('Dashboard inicializado correctamente');
    }
    
    // Función para manejar errores
    function handleErrors() {
        window.addEventListener('error', function(e) {
            console.error('Error en el dashboard:', e.error);
            showNotification('Ha ocurrido un error en el dashboard', 'error');
        });
        
        window.addEventListener('unhandledrejection', function(e) {
            console.error('Promesa rechazada:', e.reason);
            showNotification('Error en operación asíncrona', 'error');
        });
    }
    
    // Función para mejorar la accesibilidad
    function enhanceAccessibility() {
        // Agregar navegación por teclado
        document.addEventListener('keydown', function(e) {
            // Alt + S para alternar sidebar
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                toggleSidebar();
            }
            
            // Escape para cerrar sidebar en móvil
            if (e.key === 'Escape' && window.innerWidth <= 768) {
                if (sidebar.classList.contains('active')) {
                    toggleSidebar();
                }
            }
        });
        
        // Mejorar focus visible
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #6366f1';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    
    // Inicializar dashboard cuando el DOM esté listo
    try {
        initializeDashboard();
        handleErrors();
        enhanceAccessibility();
        
        // Mostrar mensaje de bienvenida
        setTimeout(() => {
            showNotification('¡Bienvenido al Dashboard de Inventario!', 'success');
        }, 1000);
        
    } catch (error) {
        console.error('Error al inicializar el dashboard:', error);
        showNotification('Error al cargar el dashboard', 'error');
    }
    
    // Exportar funciones para uso externo (si es necesario)
    window.Dashboard = {
        toggleSidebar,
        showNotification,
        updateDashboardData,
        setActiveNavigation
    };
});
