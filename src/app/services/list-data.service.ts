import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url_server = "http://localhost:8080/resportes/";

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor(private http: HttpClient) { }

  listaTodo(){
    return this.http.get(url_server+'todo');
  }

  listaId(id:any){
    return this.http.get(url_server+id);
  }

  listaEstId(id:any){
    console.log('Service lista  Estudiantes Id');
    // return null;
    return this.http.get(url_server+'est/'+id);
  }
}
