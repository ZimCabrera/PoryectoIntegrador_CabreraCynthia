import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {
  skURL = 'https://backendzim.onrender.com/skillab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skURL + 'lista'); 
  }

  public detail(idSkill: number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skURL + `detail/${idSkill}`);
  }
 
  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.skURL + 'create', skills);
  }

  public update(idSkill: number, skills: Skills): Observable<any>{
    return this.httpClient.put<any>(this.skURL + `update/${idSkill}`, skills);
  }

  public delete(idSkill: number): Observable<any>{
    return this.httpClient.delete<any>(this.skURL + `delete/${idSkill}`);
  }
}
