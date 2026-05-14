/* ================================================================
   PRINCIPAL.JS — El Hada de los Lentes
   JavaScript básico de interactividad.
   Agrega funciones aquí según vayas necesitando.
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------------
     1. NAVEGACIÓN — Sombra al hacer scroll
     Agrega la clase .navegacion--con-sombra cuando el usuario
     desplaza la página hacia abajo.
     ---------------------------------------------------------------- */
  const navegacion = document.querySelector('.navegacion');

  function manejarScrollNavegacion() {
    if (window.scrollY > 20) {
      navegacion.classList.add('navegacion--con-sombra');
    } else {
      navegacion.classList.remove('navegacion--con-sombra');
    }
  }

  window.addEventListener('scroll', manejarScrollNavegacion);


  /* ----------------------------------------------------------------
     2. MENÚ HAMBURGUESA (para móvil — activar en media queries)
     Alterna la visibilidad del menú en pantallas pequeñas.
     ---------------------------------------------------------------- */
  const hamburguesa = document.getElementById('hamburguesa');
  const menuNavegacion = document.querySelector('.navegacion__menu');

  if (hamburguesa && menuNavegacion) {
    hamburguesa.addEventListener('click', function () {
      menuNavegacion.classList.toggle('navegacion__menu--activo');
      hamburguesa.classList.toggle('navegacion__hamburguesa--activo');
    });
  }


  /* ----------------------------------------------------------------
     3. CIERRE DE MENÚ AL HACER CLIC EN UN ENLACE (móvil)
     ---------------------------------------------------------------- */
  const enlacesMenu = document.querySelectorAll('.navegacion__enlace');

  enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      if (menuNavegacion) {
        menuNavegacion.classList.remove('navegacion__menu--activo');
        if (hamburguesa) {
          hamburguesa.classList.remove('navegacion__hamburguesa--activo');
        }
      }
    });
  });


  /* ----------------------------------------------------------------
     4. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
     Los elementos con la clase .animar-al-scroll aparecen
     suavemente cuando entran en el viewport.
     Agrega esta clase en el HTML a los elementos que quieras animar.
     ---------------------------------------------------------------- */
  const elementosAnimados = document.querySelectorAll('.animar-al-scroll');

  if (elementosAnimados.length > 0) {
    const observadorAnimacion = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('animar-al-scroll--visible');
            observadorAnimacion.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.15,      /* El elemento se activa cuando el 15% es visible */
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementosAnimados.forEach(function (elemento) {
      observadorAnimacion.observe(elemento);
    });
  }

});
