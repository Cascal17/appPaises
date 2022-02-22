import { Component, Output, EventEmitter , OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit {

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe( valor => {
      this.onDebbounce.emit(valor);
    })
  }

  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  @Output() onDebbounce: EventEmitter<string>= new EventEmitter();

  debouncer:Subject<string>= new Subject();

  termino:string="";

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada( ){

    this.debouncer.next(this.termino);
  }


}
