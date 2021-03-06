		var link = document.querySelector(".login-link");
		var popup = document.querySelector(".modal-login");

		var login = popup.querySelector("[name=login]");
		var password = popup.querySelector("[name=password]");

		var form = popup.querySelector("form");

		var storage = localStorage.getItem("login");

		link.addEventListener("click", function( evt ) {
			evt.preventDefault();
			popup.classList.add("modal-show");
			if (storage) {
				login.value = storage;
				login.focus();
			} else {
				password.focus();
			}

		});

		var close = document.querySelector(".modal-close");

		close.addEventListener("click", function ( evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		} );

		window.addEventListener("keydown", function ( evt) {
			if (evt.keyCode === 27) {
				if (popup.classList.contains("modal-show")) {
					evt.preventDefault();
					popup.classList.remove("modal-show");
					popup.classList.remove("modal-error");
				}
			}

		} );

		form.addEventListener("submit", function( evt ) {
			if (!login.value || !password.value) {
			evt.preventDefault();
			console.log("Нужно ввести логин и пароль");
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;	
			popup.classList.add("modal-error");
		} else {
			localStorage.setItem("login", login.value);
		}
		} );