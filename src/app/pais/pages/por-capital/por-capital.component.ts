import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino:string ="";
  hayError:boolean= false;
  paises: Country[]= [];
  capitalSugerida: Country[] = [];
  mostrarSugerencia: boolean = false;



  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.mostrarSugerencia=false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino).subscribe(resp =>{
      this.paises= resp;
    }, (err)=>{
      this.hayError=true;
      this.paises=[];
    },
    );
  }

  buscarSugerido( termino:string){
    this.buscar(this.termino);

  }

  sugerencias( termino: string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencia=true;
    this.paisService.buscarCapital(termino).subscribe(
      paises => this.capitalSugerida=paises.splice(0,5),
      (err)=> this.capitalSugerida=[]);
  }

}
