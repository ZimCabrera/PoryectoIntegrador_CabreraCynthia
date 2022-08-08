export class Skills {
    idSkill : number;
    nombreE : string;
    imgSkill : string;
    porcentaje: number;

    constructor(nombreE: string, imgSkill: string, porcentaje: number){
       this.nombreE = nombreE;
       this.imgSkill = imgSkill;
       this.porcentaje = porcentaje;
    }
}
