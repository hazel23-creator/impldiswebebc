
console.log("¡Hola! Bienvenido a mi portafolio web.");
console.log("Este sitio fue desarrollado con HTML, CSS, JavaScript y Bootstrap.");

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // CONTADOR INTERACTIVO
  // ========================================

  const botonContador = document.getElementById("boton-contador");
  const numeroContador = document.getElementById("numero-contador");
  const mensajeContador = document.getElementById("mensaje-contador");

  let contador = 0;

  if (botonContador && numeroContador) {
    botonContador.addEventListener("click", function () {
      contador++;
      numeroContador.textContent = contador;

      if (mensajeContador) {
        mensajeContador.textContent =
          contador === 1
            ? "¡Gracias por visitar mi portafolio!"
            : "¡Gracias por seguir explorando mi página!";
      }
    });
  }

  // ========================================
  // MODO CLARO Y MODO OSCURO
  // ========================================

  const botonTema = document.getElementById("boton-tema");
  let temaGuardado = "claro";

  try {
    temaGuardado = localStorage.getItem("tema-portafolio") || "claro";
  } catch (error) {
    console.warn("No fue posible recuperar el tema guardado.");
  }

  if (temaGuardado === "oscuro") {
    document.body.classList.add("modo-oscuro");
  }

  function actualizarBotonTema() {
    if (!botonTema) return;

    const modoOscuroActivo =
      document.body.classList.contains("modo-oscuro");

    botonTema.textContent = modoOscuroActivo
      ? "☀ Modo claro"
      : "☾ Modo oscuro";

    botonTema.setAttribute(
      "aria-label",
      modoOscuroActivo ? "Activar modo claro" : "Activar modo oscuro"
    );

    botonTema.setAttribute("aria-pressed", String(modoOscuroActivo));
  }

  actualizarBotonTema();

  if (botonTema) {
    botonTema.addEventListener("click", function () {
      document.body.classList.toggle("modo-oscuro");

      const temaActual =
        document.body.classList.contains("modo-oscuro")
          ? "oscuro"
          : "claro";

      try {
        localStorage.setItem("tema-portafolio", temaActual);
      } catch (error) {
        console.warn("El tema cambiará, pero no se podrá guardar.");
      }

      actualizarBotonTema();
    });
  }

  // ========================================
  // ANIMACIONES AOS
  // ========================================

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80
    });

    document.body.classList.add("aos-ready");
  } else {
    console.warn(
      "AOS no se pudo cargar. Las animaciones CSS siguen disponibles."
    );
  }
});
