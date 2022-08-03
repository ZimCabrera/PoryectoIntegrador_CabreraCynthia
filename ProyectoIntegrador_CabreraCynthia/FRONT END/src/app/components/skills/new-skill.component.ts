import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreE : string = '';
  imgSkill : string = '';
  porcentaje: string = '';

  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skills(this.nombreE, this.imgSkill, this.porcentaje);
    this.sSkills.save(skills).subscribe(data=>{
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate([''])
    }
    )
  }

}
