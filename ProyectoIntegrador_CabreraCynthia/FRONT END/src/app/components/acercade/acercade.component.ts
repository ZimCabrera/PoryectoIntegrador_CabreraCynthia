import { Renderer2, Inject, Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/service/token.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","");
  expe: Experiencia[] = [];

  constructor(
    private _renderer2: Renderer2,
 	  @Inject(DOCUMENT) private _document: Document,
    public personaService: PersonaService,
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService
  ){}

  isLogged = false;

  ngOnInit(): void {
    let body = this._document.body;
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'assets/js/main.js';
    this._renderer2.appendChild(body, script);

    this.personaService.getPersona().subscribe(data => {this.persona = data});

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data =>{this.expe= data;}
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}

