import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  mode = "login",
  onSwitchMode,
  serverError = "",
  onSubmit,
}) {
  const isSignup = mode === "signup";
  const isSuccess = mode === "success";

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={onClose}
    >
      <div
        className={`popup__container ${
          isSuccess ? "popup__container_type_success" : ""
        }`}
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          className="popup__close-button"
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
        />

        {isSuccess ? (
          <>
            <h2 className="popup__title popup__title_type_success">
              ¡El registro se ha completado con éxito!
            </h2>
            <button
              className="popup__success-link"
              type="button"
              onClick={onSwitchMode}
            >
              Iniciar sesión
            </button>
          </>
        ) : (
          <>
            <h2 className="popup__title">
              {isSignup ? "Inscribirse" : "Iniciar sesión"}
            </h2>

            <form className="popup__form" onSubmit={onSubmit}>
              <label className="popup__label">
                Correo electrónico
                <input
                  className="popup__input"
                  type="email"
                  placeholder="Introduce tu correo electrónico"
                  required
                />
              </label>

              <label className="popup__label">
                Contraseña
                <input
                  className="popup__input"
                  type="password"
                  placeholder="Introduce tu contraseña"
                  required
                />
              </label>

              {isSignup && (
                <label className="popup__label">
                  Nombre de usuario
                  <input
                    className="popup__input"
                    type="text"
                    placeholder="Introduce tu nombre de usuario"
                    required
                  />
                </label>
              )}

              <span className="popup__server-error">{serverError}</span>

              <button className="popup__submit-button" type="submit">
                {isSignup ? "Inscribirse" : "Iniciar sesión"}
              </button>
            </form>

            <p className="popup__alternate">
              o{" "}
              <button
                className="popup__link"
                type="button"
                onClick={onSwitchMode}
              >
                {isSignup ? "iniciar sesión" : "inscribirse"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
