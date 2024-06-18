
const auto = {
    marca: 'Toyota',
    mostrarmarca: function() {
    return `La marca del auto es ${this.marca}.`;
    }
    };
   
    const moto = {
    marca: 'Honda'
    };
    
    const mensaje = auto.mostrarmarca.call(moto);
  
    console.log(mensaje);