function validateForm(){
	/* Escribe tú código aquí */
	
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var regexMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; // !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))
	var contrasena = document.getElementById("input-password").value;
	var select = document.getElementById("seleccionar").selectedIndex;
	//var select = document.getElementsByClassName("form-control").selectedIndex;	var selectElecc = select.option(select.selectedIndex).value;
	
	var regPassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)== true || !isNaN(nombre)// isNan = "no es número"
		|| /^[A-Z][a-z]*/.test(nombre)==false/*Admite solo letras !nombre.charAt(0).toUpperCase()==true*/
		|| /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre) == false)
		{alert ("Elemento no válido, escriba su nombre comenzando con mayúscula");
		}
		else{
			document.getElementById("lastname").focus();
		}

	 if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)== true || !isNaN(apellido) //isNan = "no es número"
		|| /^[A-Z][a-z]*/.test(apellido)==false /*Admite solo letras*/ || /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s?]*)+$/.test(apellido) == false)
		{alert ("Elemento no válido, escriba su apellido comenzando con mayúscula");
		}
		else{
			document.getElementById("input-email").focus();
		}

	if(/^[\w]+@{1}[\w\-]+\.[a-z]{2,3}$/.test(email) == false){
		alert("Ingrese email completo")}
		else{
		document.getElementById("input-password").focus();
	}

	if (contrasena == "password" || contrasena == "123456" || contrasena == "098754"){alert ("Ingrese un password válido");}
	if(contrasena.length < 6)//.match(regPassw) == false)
		{alert ("El password debe contener mínimo 6 dígitos")}
	else{document.getElementById("seleccionar").focus()}
	
	if (select == null || select == 0){
		alert("Seleccione algun campo");
	}
	
 	/*
	else if (nombre =/[A-Za-zñÑ\s]/){
		return true;
	}
 	
 	if(regexMail)*/

 	//document.form.submit();
}


