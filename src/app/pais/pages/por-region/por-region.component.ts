import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right : 5px;
  }
  `
  ]
})
export class PorRegionComponent {

  termino:string ="";
  hayError:boolean= false;
  paises: Country[]= [];

  constructor(private paisService: PaisService) { }

  regiones: string[]= [ "africa", "americas", "asia", "europe", "oceania"];
  regionActiva:string = "";


  getClaseCSS(region:string):string{
    return (region !== this.regionActiva) ? 'btn btn-outline-primary' : 'btn btn-primary'
  }

  activarRegion(region:string){

    if( region === this.regionActiva ) {return;}

    this.regionActiva= region;
    this.paisService.buscarRegion(this.regionActiva).subscribe( resp =>{
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
