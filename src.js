(function(){
	var dinero = "dinero";
	var errores = new Array();
	var rimo = 0;
	
	alert( "el dinero es "+ dinero );
	while( dinero == "dinero" ){
		if( rimo < 4 ){
			alert( dinero );
			errores[rimo] = "no hay error";
		}
		else{
			errores.forEach(function(error){
				alert(error);
			});
			dinero = "ya no es dinero";
		}
		rimo++;
	}
})();
