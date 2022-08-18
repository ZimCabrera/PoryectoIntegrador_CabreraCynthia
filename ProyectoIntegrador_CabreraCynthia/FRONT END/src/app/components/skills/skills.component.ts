import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skills[] = [];

  constructor(private sSkills: SSkillsService, private tokenService: TokenService) { }

  isLoged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    }else{
      this.isLoged = false;
    }
  }

  cargarSkills(): void {
    this.sSkills.lista().subscribe(data =>{this.skill= data;}
    )
  }

  delete(idSkill?: number){
    if(idSkill != undefined){
      this.sSkills.delete(idSkill).subscribe(
        data =>{
          this.cargarSkills();
        }, err =>{
          alert("No se pudo borrar skill");
        }
      )
    }
  }
  

}
