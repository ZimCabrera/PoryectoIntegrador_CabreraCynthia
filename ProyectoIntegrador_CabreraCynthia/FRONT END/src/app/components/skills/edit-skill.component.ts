import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skillab: Skills = null;

  constructor(private sSkills: SSkillsService, private activatedRouter :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idSkill = this.activatedRouter.snapshot.params['idSkill'];
    this.sSkills.detail(idSkill).subscribe(
      data =>{
        this.skillab = data;
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const idSkill = this.activatedRouter.snapshot.params['idSkill'];
    this.sSkills.update(idSkill, this.skillab).subscribe(
       data =>{
        this.router.navigate(['']);
      }, err =>{
       alert("Error al modificar skill");
       this.router.navigate(['']);
      }
    )
  }

}
