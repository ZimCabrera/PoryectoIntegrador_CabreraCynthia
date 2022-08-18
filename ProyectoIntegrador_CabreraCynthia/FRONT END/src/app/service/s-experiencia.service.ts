import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://backendportf.herokuapp.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista'); 
  }

  public detail(idExp: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${idExp}`);
  }
 
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(idExp: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${idExp}`, experiencia);
  }

  public delete(idExp: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${idExp}`);
  }

}
