import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country ;

  constructor(private activateRouted: ActivatedRoute,
    private paiseService: PaisService) { }

  ngOnInit(): void {

    this.activateRouted.params
    .pipe(
      switchMap((param) => this.paiseService.getPaisPorCodigo(param.id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais[0])
    /*this.activateRouted.params.subscribe( ({id}) =>{
      console.log(id);

      this.paiseService.getPaisPorCodigo(id).subscribe(pais =>{
        console.log(pais);
      })
    });*/
  }

}
