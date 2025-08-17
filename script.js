// Dashboard de Gestión de Inventario - Script de Interactividad
// Desarrollado para Actividad Universitaria

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard cargado correctamente');
    
    // Elementos del DOM
    const logoToggle = document.getElementById('logo-toggle');
    const sidebar = document.querySelector('.sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarGestureArea = document.getElementById('sidebar-gesture-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const summaryCards = document.querySelectorAll('.summary-card');
    
    // Estado del sidebar
    let sidebarCollapsed = false;
    
    // Variables para detección de gesto
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isGestureActive = false;
    
    // Función para forzar la visualización de elementos del sidebar en móvil
    function forceShowSidebarElements() {
        const logoText = sidebar.querySelector('.logo-text');
        const navSpans = sidebar.querySelectorAll('.nav-link span');
        const userDetails = sidebar.querySelector('.user-details');
        const mobileAddBtn = sidebar.querySelector('.mobile-add-product');
        
        // Forzar visualización del logo
        if (logoText) {
            logoText.style.setProperty('display', 'block', 'important');
            logoText.style.setProperty('visibility', 'visible', 'important');
            logoText.style.setProperty('opacity', '1', 'important');
            logoText.style.setProperty('transform', 'none', 'important');
            logoText.style.setProperty('position', 'static', 'important');
        }
        
        // Forzar visualización de los spans de navegación
        navSpans.forEach(span => {
            span.style.setProperty('display', 'inline', 'important');
            span.style.setProperty('visibility', 'visible', 'important');
            span.style.setProperty('opacity', '1', 'important');
            span.style.setProperty('transform', 'none', 'important');
            span.style.setProperty('position', 'static', 'important');
        });
        
        // Forzar visualización de los detalles de usuario
        if (userDetails) {
            userDetails.style.setProperty('display', 'block', 'important');
            userDetails.style.setProperty('visibility', 'visible', 'important');
            userDetails.style.setProperty('opacity', '1', 'important');
            userDetails.style.setProperty('transform', 'none', 'important');
            userDetails.style.setProperty('position', 'static', 'important');
        }
        
        // Forzar visualización del botón móvil
        if (mobileAddBtn) {
            mobileAddBtn.style.setProperty('display', 'block', 'important');
            mobileAddBtn.style.setProperty('visibility', 'visible', 'important');
            mobileAddBtn.style.setProperty('opacity', '1', 'important');
        }
        
        console.log('Elementos del sidebar forzados a mostrar');
    }
    
    // Función para alternar el sidebar
    function toggleSidebar() {
        const isMobile = window.innerWidth <= 768;
        console.log('toggleSidebar llamado');
        console.log('isMobile:', isMobile);
        console.log('sidebarCollapsed:', sidebarCollapsed);
        
        if (sidebarCollapsed) {
            // Expandir sidebar
            console.log('Expandir sidebar');
            if (isMobile) {
                // En móvil: mostrar sidebar como overlay
                console.log('Mostrando sidebar en móvil');
                sidebar.classList.add('active');
                dashboardContainer.classList.add('sidebar-active');
                if (sidebarOverlay) {
                    sidebarOverlay.classList.add('active');
                }
                
                // En móvil, mostrar todos los elementos del sidebar
                const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
                hiddenElements.forEach(el => {
                    el.style.display = 'block';
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    el.style.position = 'static';
                });
                
                // Mostrar también el botón móvil
                const mobileAddBtn = document.querySelector('.mobile-add-product');
                if (mobileAddBtn) {
                    mobileAddBtn.style.display = 'block';
                    mobileAddBtn.style.visibility = 'visible';
                    mobileAddBtn.style.opacity = '1';
                }
                
                // Llamar a la función que fuerza la visualización de elementos
                forceShowSidebarElements();
                
                // Agregar un pequeño delay para asegurar que los estilos se apliquen
                setTimeout(() => {
                    forceShowSidebarElements();
                }, 100);
            } else {
                // En desktop: expandir sidebar normal
                console.log('Expandir sidebar en desktop');
                sidebar.classList.remove('active');
                dashboardContainer.classList.remove('sidebar-collapsed');
                
                // En desktop, mostrar todos los elementos del sidebar
                const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
                hiddenElements.forEach(el => el.style.display = 'block');
            }
            sidebarCollapsed = false;
            
            // Actualizar aria-expanded
            logoToggle.setAttribute('aria-expanded', 'true');
            
            // Cambiar icono del botón
            const icon = logoToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-chevron-left';
            }
            
        } else {
            // Colapsar sidebar
            console.log('Colapsar sidebar');
            if (isMobile) {
                // En móvil: ocultar sidebar overlay
                console.log('Ocultando sidebar en móvil');
                sidebar.classList.remove('active');
                dashboardContainer.classList.remove('sidebar-active');
                if (sidebarOverlay) {
                    sidebarOverlay.classList.remove('active');
                }
                
                // Ocultar el botón móvil cuando se cierra
                const mobileAddBtn = document.querySelector('.mobile-add-product');
                if (mobileAddBtn) {
                    mobileAddBtn.style.display = 'none';
                }
            } else {
                // En desktop: colapsar sidebar normal
                console.log('Colapsar sidebar en desktop');
                sidebar.classList.add('active');
                dashboardContainer.classList.add('sidebar-collapsed');
            }
            sidebarCollapsed = true;
            
            // Actualizar aria-expanded
            logoToggle.setAttribute('aria-expanded', 'false');
            
            // Ocultar elementos del sidebar
            const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
            hiddenElements.forEach(el => el.style.display = 'none');
            
            // Cambiar icono del botón
            const icon = logoToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-chevron-right';
            }
        }
        
        // Log final del estado
        console.log('Estado final sidebarCollapsed:', sidebarCollapsed);
        console.log('Clases del sidebar:', sidebar.className);
        console.log('Clases del dashboardContainer:', dashboardContainer.className);
        
                        // Log adicional para debuggear elementos del sidebar
                if (isMobile) {
                    const logoText = sidebar.querySelector('.logo-text');
                    const navSpans = sidebar.querySelectorAll('.nav-link span');
                    const userDetails = sidebar.querySelector('.user-details');
                    const mobileAddBtn = sidebar.querySelector('.mobile-add-product');
                    
                    console.log('Logo text display:', logoText ? logoText.style.display : 'No encontrado');
                    console.log('Logo text visibility:', logoText ? logoText.style.visibility : 'No encontrado');
                    console.log('Logo text opacity:', logoText ? logoText.style.opacity : 'No encontrado');
                    console.log('Nav spans encontrados:', navSpans.length);
                    navSpans.forEach((span, index) => {
                        console.log(`Nav span ${index} display:`, span.style.display);
                        console.log(`Nav span ${index} visibility:`, span.style.visibility);
                        console.log(`Nav span ${index} opacity:`, span.style.opacity);
                    });
                    console.log('User details display:', userDetails ? userDetails.style.display : 'No encontrado');
                    console.log('User details visibility:', userDetails ? userDetails.style.visibility : 'No encontrado');
                    console.log('User details opacity:', userDetails ? userDetails.style.opacity : 'No encontrado');
                    console.log('Mobile add button display:', mobileAddBtn ? mobileAddBtn.style.display : 'No encontrado');
                    
                    // Verificar también el computed style
                    if (logoText) {
                        const computedStyle = window.getComputedStyle(logoText);
                        console.log('Logo text computed display:', computedStyle.display);
                        console.log('Logo text computed visibility:', computedStyle.visibility);
                        console.log('Logo text computed opacity:', computedStyle.opacity);
                    }
                }
    }
    
    // Event listener para el logo toggle del sidebar
    if (logoToggle) {
        logoToggle.addEventListener('click', toggleSidebar);
        logoToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSidebar();
            }
        });
    }
    
    // Event listener para el botón hamburguesa móvil
    const mobileHamburger = document.getElementById('mobile-hamburger');
    if (mobileHamburger) {
        mobileHamburger.addEventListener('click', function() {
            console.log('Botón hamburguesa clickeado');
            console.log('Estado actual sidebarCollapsed:', sidebarCollapsed);
            console.log('Ancho de ventana:', window.innerWidth);
            toggleSidebar();
            
            // Forzar visualización de elementos después de un pequeño delay
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    forceShowSidebarElements();
                }, 200);
            }
        });
        mobileHamburger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSidebar();
            }
        });
    }
    
    // Event listener para cerrar sidebar al hacer click en el overlay (móvil)
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sidebarCollapsed) {
                toggleSidebar();
            }
        });
    }
    
    // Event listener para asegurar que los elementos se muestren cuando el sidebar esté activo
    sidebar.addEventListener('transitionend', function() {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            console.log('Transición del sidebar completada, forzando visualización de elementos');
            forceShowSidebarElements();
        }
    });
    
    // Event listener para el botón Añadir Producto del sidebar móvil
    const mobileAddBtn = document.querySelector('.mobile-add-btn');
    if (mobileAddBtn) {
        mobileAddBtn.addEventListener('click', function() {
            console.log('Botón Añadir Producto del sidebar móvil clickeado');
            
            // Efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simular apertura de modal
            showNotification('Modal de nuevo producto abierto desde sidebar móvil', 'success');
            
            // Cerrar sidebar en móvil después de la acción
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    toggleSidebar();
                }, 300);
            }
        });
    }
    
    // Función para detectar gesto de swipe
    function handleGesture() {
        if (window.innerWidth > 768) return; // Solo en móvil
        
        const minSwipeDistance = 50;
        const swipeDistance = touchEndX - touchStartX;
        const verticalDistance = Math.abs(touchEndY - touchStartY);
        
        // Verificar que el swipe sea horizontal y suficientemente largo
        if (Math.abs(swipeDistance) > minSwipeDistance && verticalDistance < 100) {
            if (swipeDistance > 0) {
                // Swipe hacia la derecha - abrir sidebar
                if (sidebarCollapsed) {
                    toggleSidebar();
                }
            } else {
                // Swipe hacia la izquierda - cerrar sidebar
                if (!sidebarCollapsed) {
                    toggleSidebar();
                }
            }
        }
    }
    
    // Event listeners para detección de gesto
    if (sidebarGestureArea) {
        // Touch events para móvil
        sidebarGestureArea.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isGestureActive = true;
        });
        
        sidebarGestureArea.addEventListener('touchmove', function(e) {
            if (!isGestureActive) return;
            touchEndX = e.touches[0].clientX;
            touchEndY = e.touches[0].clientY;
        });
        
        sidebarGestureArea.addEventListener('touchend', function(e) {
            if (!isGestureActive) return;
            handleGesture();
            isGestureActive = false;
        });
        
        // Mouse events para desktop (testing)
        sidebarGestureArea.addEventListener('mousedown', function(e) {
            touchStartX = e.clientX;
            touchStartY = e.clientY;
            isGestureActive = true;
        });
        
        sidebarGestureArea.addEventListener('mousemove', function(e) {
            if (!isGestureActive) return;
            touchEndX = e.clientX;
            touchEndY = e.clientY;
        });
        
        sidebarGestureArea.addEventListener('mouseup', function(e) {
            if (!isGestureActive) return;
            handleGesture();
            isGestureActive = false;
        });
        
        // Detección de gesto en toda la pantalla para cerrar sidebar
        document.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768 && !sidebarCollapsed) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                isGestureActive = true;
            }
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isGestureActive || window.innerWidth > 768 || sidebarCollapsed) return;
            touchEndX = e.touches[0].clientX;
            touchEndY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', function(e) {
            if (!isGestureActive || window.innerWidth > 768 || sidebarCollapsed) return;
            handleGesture();
            isGestureActive = false;
        });
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
            bottom: 20px;
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
            
            // Actualizar tema de las gráficas
            setTimeout(() => {
                updateChartsTheme();
            }, 100);
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
            const isDesktop = window.innerWidth > 1024;
            
            if (isMobile) {
                document.body.classList.add('mobile-view');
                document.body.classList.remove('tablet-view', 'desktop-view');
                
                // En móvil, asegurar que el sidebar esté cerrado por defecto
                sidebar.classList.remove('active');
                dashboardContainer.classList.remove('sidebar-active');
                sidebarCollapsed = true;
                logoToggle.setAttribute('aria-expanded', 'false');
                
                // En móvil, mantener los elementos del sidebar visibles para cuando se abra
                // No los ocultamos porque queremos que se vean cuando el sidebar esté activo
                
                // Asegurar que el contenido principal sea visible
                dashboardContainer.style.gridTemplateAreas = '"main"';
                dashboardContainer.style.gridTemplateColumns = '1fr';
                
                // Ocultar overlay
                if (sidebarOverlay) {
                    sidebarOverlay.classList.remove('active');
                }
                
                // Ocultar el botón móvil por defecto
                const mobileAddBtn = document.querySelector('.mobile-add-product');
                if (mobileAddBtn) {
                    mobileAddBtn.style.display = 'none';
                }
                
            } else if (isTablet) {
                document.body.classList.add('tablet-view');
                document.body.classList.remove('mobile-view', 'desktop-view');
                
                // En tablet, restaurar el sidebar normal
                if (sidebarCollapsed) {
                    sidebar.classList.remove('active');
                    dashboardContainer.classList.remove('sidebar-collapsed');
                    sidebarCollapsed = false;
                    logoToggle.setAttribute('aria-expanded', 'true');
                    
                    // Mostrar elementos del sidebar
                    const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
                    hiddenElements.forEach(el => el.style.display = 'block');
                }
                
                // Restaurar layout de sidebar
                dashboardContainer.style.gridTemplateAreas = '"sidebar main"';
                dashboardContainer.style.gridTemplateColumns = 'var(--sidebar-width) 1fr';
                
            } else {
                document.body.classList.add('desktop-view');
                document.body.classList.remove('mobile-view', 'tablet-view');
                
                // En desktop, restaurar el sidebar normal
                if (sidebarCollapsed) {
                    sidebar.classList.remove('active');
                    dashboardContainer.classList.remove('sidebar-collapsed');
                    sidebarCollapsed = false;
                    logoToggle.setAttribute('aria-expanded', 'true');
                    
                    // Mostrar elementos del sidebar
                    const hiddenElements = sidebar.querySelectorAll('.logo-text, .nav-link span, .user-details');
                    hiddenElements.forEach(el => el.style.display = 'block');
                }
                
                // Restaurar layout de sidebar
                dashboardContainer.style.gridTemplateAreas = '"sidebar main"';
                dashboardContainer.style.gridTemplateColumns = 'var(--sidebar-width) 1fr';
            }
            
            // Ocultar overlay en desktop/tablet
            if (sidebarOverlay && !isMobile) {
                sidebarOverlay.classList.remove('active');
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
    
    // Función para inicializar las gráficas con Chart.js
    function initializeCharts() {
        console.log('Inicializando gráficas con Chart.js...');
        
        // Configuración del tema para Chart.js
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#ffffff' : '#0f172a';
        const gridColor = isDark ? '#475569' : '#e2e8f0';
        const backgroundColor = isDark ? '#1e293b' : '#ffffff';
        
        // Mini-gráficas para las tarjetas de resumen
        initializeMiniCharts(isDark, backgroundColor);
        
        // Gráfica de barras - Ventas Mensuales
        const salesChartCtx = document.getElementById('salesChart');
        if (salesChartCtx) {
            const salesChart = new Chart(salesChartCtx, {
                type: 'bar',
                data: {
                    labels: ['Junio', 'Julio', 'Agosto', 'Septiembre'],
                    datasets: [{
                        label: 'Ventas ($)',
                        data: [12450, 9870, 15680, 18920],
                        backgroundColor: [
                            'rgba(99, 102, 241, 0.8)',
                            'rgba(99, 102, 241, 0.7)',
                            'rgba(99, 102, 241, 0.9)',
                            'rgba(99, 102, 241, 0.6)'
                        ],
                        borderColor: [
                            'rgba(99, 102, 241, 1)',
                            'rgba(99, 102, 241, 1)',
                            'rgba(99, 102, 241, 1)',
                            'rgba(99, 102, 241, 1)'
                        ],
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: backgroundColor,
                            titleColor: textColor,
                            bodyColor: textColor,
                            borderColor: gridColor,
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return `Ventas: $${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: gridColor,
                                drawBorder: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 12
                                },
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 12
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    }
                }
            });
            
            // Guardar referencia para actualización de tema
            window.salesChart = salesChart;
        }
        
        // Gráfica de línea - Tendencia de Ventas
        const trendChartCtx = document.getElementById('trendChart');
        if (trendChartCtx) {
            const trendChart = new Chart(trendChartCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
                    datasets: [{
                        label: 'Ventas Mensuales',
                        data: [8500, 9200, 10500, 11800, 13200, 12450, 9870, 15680, 18920],
                        borderColor: 'rgba(16, 185, 129, 1)',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                        pointBorderColor: backgroundColor,
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: backgroundColor,
                            titleColor: textColor,
                            bodyColor: textColor,
                            borderColor: gridColor,
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return `Ventas: $${context.parsed.y.toLocaleString()}`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: gridColor,
                                drawBorder: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 12
                                },
                                callback: function(value) {
                                    return '$' + value.toLocaleString();
                                }
                            }
                        },
                        x: {
                            grid: {
                                color: gridColor,
                                drawBorder: false
                            },
                            ticks: {
                                color: textColor,
                                font: {
                                    size: 12
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    }
                }
            });
            
            // Guardar referencia para actualización de tema
            window.trendChart = trendChart;
        }
        
        console.log('Gráficas inicializadas correctamente');
    }
    
    // Función para inicializar las mini-gráficas de las tarjetas
    function initializeMiniCharts(isDark, backgroundColor) {
        console.log('Inicializando mini-gráficas...');
        
        // Configuración común para mini-gráficas
        const miniChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { 
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false,
                    titleFont: { size: 12, weight: '600' },
                    bodyFont: { size: 11 },
                    padding: 8,
                    callbacks: {
                        title: function(context) {
                            return context[0].label;
                        },
                        label: function(context) {
                            return context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            elements: {
                point: { radius: 3 },
                line: { borderWidth: 2 }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        };
        
        // Mini-gráfica 1: Total Productos - Fluctuaciones realistas
        const totalProductsCtx = document.getElementById('totalProductsChart');
        if (totalProductsCtx) {
            const totalProductsOptions = {
                ...miniChartOptions,
                plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: {
                        ...miniChartOptions.plugins.tooltip,
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.parsed.y;
                                return `${value.toLocaleString()} productos`;
                            }
                        }
                    }
                }
            };
            
            window.totalProductsChart = new Chart(totalProductsCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        data: [980, 1020, 1080, 1050, 1120, 1247],
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.3)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: '#6366f1',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4
                    }]
                },
                options: totalProductsOptions
            });
        }
        
        // Mini-gráfica 2: Valor Total - Fluctuaciones realistas
        const totalValueCtx = document.getElementById('totalValueChart');
        if (totalValueCtx) {
            const totalValueOptions = {
                ...miniChartOptions,
                plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: {
                        ...miniChartOptions.plugins.tooltip,
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.parsed.y;
                                return `$${value.toLocaleString()}`;
                            }
                        }
                    }
                }
            };
            
            window.totalValueChart = new Chart(totalValueCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        data: [38000, 36500, 39500, 41000, 39500, 45230],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.3)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: '#10b981',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4
                    }]
                },
                options: totalValueOptions
            });
        }
        
        // Mini-gráfica 3: Stock Bajo - Fluctuaciones realistas (ALERTA)
        const lowStockCtx = document.getElementById('lowStockChart');
        if (lowStockCtx) {
            const lowStockOptions = {
                ...miniChartOptions,
                plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: {
                        ...miniChartOptions.plugins.tooltip,
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.parsed.y;
                                return `${value} productos con stock bajo`;
                            }
                        }
                    }
                }
            };
            
            window.lowStockChart = new Chart(lowStockCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        data: [15, 12, 18, 25, 22, 42],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.3)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: '#ef4444',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4
                    }]
                },
                options: lowStockOptions
            });
        }
        
        // Mini-gráfica 4: Ventas Mes - Fluctuaciones realistas
        const monthlySalesCtx = document.getElementById('monthlySalesChart');
        if (monthlySalesCtx) {
            const monthlySalesOptions = {
                ...miniChartOptions,
                plugins: {
                    ...miniChartOptions.plugins,
                    tooltip: {
                        ...miniChartOptions.plugins.tooltip,
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                const value = context.parsed.y;
                                return `$${value.toLocaleString()} en ventas`;
                            }
                        }
                    }
                }
            };
            
            window.monthlySalesChart = new Chart(monthlySalesCtx, {
                type: 'line',
                data: {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                    datasets: [{
                        data: [8500, 7800, 9200, 10500, 9800, 12450],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        fill: true,
                        tension: 0.3,
                        borderWidth: 2,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 1,
                        pointRadius: 3,
                        pointHoverRadius: 4
                    }]
                },
                options: monthlySalesOptions
            });
        }
        
        console.log('Mini-gráficas inicializadas correctamente');
    }
    
    // Función para actualizar el tema de las gráficas
    function updateChartsTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#ffffff' : '#0f172a';
        const gridColor = isDark ? '#475569' : '#e2e8f0';
        const backgroundColor = isDark ? '#1e293b' : '#ffffff';
        
        // Actualizar gráfica de ventas
        if (window.salesChart) {
            window.salesChart.options.scales.y.ticks.color = textColor;
            window.salesChart.options.scales.x.ticks.color = textColor;
            window.salesChart.options.scales.y.grid.color = gridColor;
            window.salesChart.options.plugins.tooltip.backgroundColor = backgroundColor;
            window.salesChart.options.plugins.tooltip.titleColor = textColor;
            window.salesChart.options.plugins.tooltip.bodyColor = textColor;
            window.salesChart.options.plugins.tooltip.borderColor = gridColor;
            window.salesChart.update();
        }
        
        // Actualizar gráfica de tendencia
        if (window.trendChart) {
            window.trendChart.options.scales.y.ticks.color = textColor;
            window.trendChart.options.scales.x.ticks.color = textColor;
            window.trendChart.options.scales.y.grid.color = gridColor;
            window.trendChart.options.scales.x.grid.color = gridColor;
            window.trendChart.options.plugins.tooltip.backgroundColor = backgroundColor;
            window.trendChart.options.plugins.tooltip.titleColor = textColor;
            window.trendChart.options.plugins.tooltip.bodyColor = textColor;
            window.trendChart.options.plugins.tooltip.borderColor = gridColor;
            window.trendChart.update();
        }
        
        // Actualizar mini-gráficas
        updateMiniChartsTheme(isDark, backgroundColor);
    }
    
    // Función para actualizar el tema de las mini-gráficas
    function updateMiniChartsTheme(isDark, backgroundColor) {
        const textColor = isDark ? '#ffffff' : '#0f172a';
        const tooltipBg = isDark ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        const tooltipBorder = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
        
        // Actualizar mini-gráfica de Total Productos
        if (window.totalProductsChart) {
            window.totalProductsChart.options.plugins.tooltip.backgroundColor = tooltipBg;
            window.totalProductsChart.options.plugins.tooltip.titleColor = textColor;
            window.totalProductsChart.options.plugins.tooltip.bodyColor = textColor;
            window.totalProductsChart.options.plugins.tooltip.borderColor = tooltipBorder;
            window.totalProductsChart.update();
        }
        
        // Actualizar mini-gráfica de Valor Total
        if (window.totalValueChart) {
            window.totalValueChart.options.plugins.tooltip.backgroundColor = tooltipBg;
            window.totalValueChart.options.plugins.tooltip.titleColor = textColor;
            window.totalValueChart.options.plugins.tooltip.bodyColor = textColor;
            window.totalValueChart.options.plugins.tooltip.borderColor = tooltipBorder;
            window.totalValueChart.update();
        }
        
        // Actualizar mini-gráfica de Stock Bajo
        if (window.lowStockChart) {
            window.lowStockChart.options.plugins.tooltip.backgroundColor = tooltipBg;
            window.lowStockChart.options.plugins.tooltip.titleColor = textColor;
            window.lowStockChart.options.plugins.tooltip.bodyColor = textColor;
            window.lowStockChart.options.plugins.tooltip.borderColor = tooltipBorder;
            window.lowStockChart.update();
        }
        
        // Actualizar mini-gráfica de Ventas Mes
        if (window.monthlySalesChart) {
            window.monthlySalesChart.options.plugins.tooltip.backgroundColor = tooltipBg;
            window.monthlySalesChart.options.plugins.tooltip.titleColor = textColor;
            window.monthlySalesChart.options.plugins.tooltip.bodyColor = textColor;
            window.monthlySalesChart.options.plugins.tooltip.borderColor = tooltipBorder;
            window.monthlySalesChart.update();
        }
    }
    
    // Inicializar dashboard cuando el DOM esté listo
    try {
        initializeDashboard();
        initializeCharts();
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
