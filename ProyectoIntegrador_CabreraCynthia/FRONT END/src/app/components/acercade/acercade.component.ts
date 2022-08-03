import { Renderer2, Inject, Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","","");

  constructor(
    private _renderer2: Renderer2,
 	  @Inject(DOCUMENT) private _document: Document,
    public personaService: PersonaService,
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

  }

}

