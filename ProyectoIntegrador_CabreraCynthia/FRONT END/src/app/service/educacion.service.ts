import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://backendportf.herokuapp.com/educacion/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'lista'); 
  }

  public detail(idEdu: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${idEdu}`);
  }
 
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(idEdu: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${idEdu}`, educacion);
  }

  public delete(idEdu: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${idEdu}`);
  }
}
