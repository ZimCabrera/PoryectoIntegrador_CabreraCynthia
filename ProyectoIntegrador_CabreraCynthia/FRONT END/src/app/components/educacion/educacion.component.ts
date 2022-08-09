import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  isLoged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    }else{
      this.isLoged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(data =>{this.educacion= data;}
    )
  }



  borrar(idEdu?: number){
    if(idEdu != undefined){
      this.educacionS.delete(idEdu).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo borrar educacion");
        }
      )
    }
  }

}
