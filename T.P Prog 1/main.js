let materias=[]
function escribir(materias){
	const divContenedorM = document.getElementById('contenedorM');
	limpiar();
	for (let i = 0; i < materias.length; i++) {
		const promedio = (parseInt(materias[i].n1) +  parseInt(materias[i].n2) + parseInt(materias[i].n3)) /3;
		const materiasHTML = `<div class="Cuadradito">
	<span onclick="eliminar(${i})" class="EliminarMateria"> x </span>
	<span>${materias[i].nombre}</span>
	<span>${materias[i].docente}, ${materias[i].horas}</span>
	<span>cod: ${materias[i].codigo} - ${materias[i].n1}</span>
	<span>${materias[i].n2} - ${materias[i].n3}</span>
	<span>prom: ${promedio} </span>
	</div>`

	divContenedorM.innerHTML += materiasHTML;
	}
}
	
function eliminar(index){
	materias.splice(index, 1);
	escribir(materias);

}
function limpiar(){
	const divContenedorM = document.getElementById('contenedorM');
	divContenedorM.innerHTML = "";

}

function eliminarTodos(){
	materias = [];
	limpiar();
}


function alerta(){
	const nombre = document.getElementById('materia').value;
	const docente = document.getElementById('docente').value;
	const horas = document.getElementById('horas').value;
	const codigo = document.getElementById('codigo').value;
	const n1 = document.getElementById('n1').value;
	const n2 = document.getElementById('n2').value;
	const n3 = document.getElementById('n3').value;
	const materia = {
		nombre,
		docente,
		horas,
		codigo,
		n1,
		n2,
		n3
	}
	materias.push(materia)

 	escribir(materias);


}