import { Component, Input, OnInit } from '@angular/core';
import { ListDataService } from '../services/list-data.service';

@Component({
  selector: 'list-asignaturas',
  templateUrl: './list-asignaturas.component.html',
  styleUrls: ['./list-asignaturas.component.css']
})
export class ListAsignaturasComponent implements OnInit {

  @Input() info:any;
  datosEstudiante:any;

  constructor(private api: ListDataService) {
    console.log("ingresa");
    
  }

  ngOnInit(): void {
    this.cargarTodo();
  }

  cargarTodo(){
    this.api.listaTodo().subscribe((data:any)=>{
      console.log(data);
      if(data){
        this.info = data;
        console.log(this.info)
      }
    })
  }

  cargarEstuId(id:any){
    this.api.listaEstId(id).subscribe((data:any)=>{
      if(data){
        console.log(data)
        this.datosEstudiante=data;
      }
    })
  }

}
