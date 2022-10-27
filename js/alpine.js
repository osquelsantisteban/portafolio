function main(){
    return {
      lang: 'es',
      dark: false,
      
      // Inicializacion
      init: function(){
        this.lang = 'es';
        this.dark = true;
      },

      // Cambio a Ingles/Español
      langToggle: function(){

        if(this.lang === 'es'){
          this.lang = 'en'; 
          return; 
        }
        
        if(this.lang === 'en'){
          this.lang = 'es'; 
          return; 
        }
      }
    }
  }
