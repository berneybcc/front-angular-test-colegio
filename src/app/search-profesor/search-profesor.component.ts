import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { ListDataService } from '../services/list-data.service';

@Component({
  selector: 'search-profesor',
  templateUrl: './search-profesor.component.html',
  styleUrls: ['./search-profesor.component.css']
})
export class SearchProfesorComponent implements OnInit {

  @Output() docente = new EventEmitter();
  constructor(private api: ListDataService) { }

  ngOnInit(): void {
  }

  changeDocente(id){
    if(id==="0"){
      this.cargarTodo();
    }else{
      this.cargarId(id);
    }
  }

  cargarTodo(){
    this.api.listaTodo().subscribe((data:any)=>{
      console.log(data);
      if(data){
        this.docente.emit(data);
      }
    })
  }

  cargarId(id:any){
    this.api.listaId(id).subscribe((data:any)=>{
      if(data){
        this.docente.emit(data);
      }
    })
  }
}
