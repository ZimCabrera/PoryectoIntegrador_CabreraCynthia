import { Renderer2, Inject, Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
 	  @Inject(DOCUMENT) private _document: Document
  ){}

  ngOnInit(): void {
    let body = this._document.body;
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'assets/js/main.js';
    this._renderer2.appendChild(body, script);
  }

}
