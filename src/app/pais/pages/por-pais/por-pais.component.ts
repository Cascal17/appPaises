import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino:string ="";
  hayError:boolean= false;
  paises: Country[]= [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError=false;

    this.termino=termino;
    this.paisService.buscarPais(this.termino).subscribe( resp =>{
      this.paises= resp;
      console.log(this.paises[0].flags.svg);
    }, (err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }

  sugerencias( termino: string){
    this.hayError=false;
    //TODO crear sugerencia
  }
}
