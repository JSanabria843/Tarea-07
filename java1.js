// Función saludar
function saludar() {
    return `Hola, ${persona.nombre}!`;
    }
   
    const persona = {
   nombre: 'Juan'
    };
    
    const saludo = saludar.call(persona, persona.nombre);
    
    console.log(saludo); 