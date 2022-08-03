
package com.portfolio.CynthiaMC.Dto;

import javax.validation.constraints.NotBlank;


public class dtoSkills {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String imgSkill;
    @NotBlank
    private int porcentaje;

    public dtoSkills() {
    }

    public dtoSkills(String nombreE, String imgSkill, int porcentaje) {
        this.nombreE = nombreE;
        this.imgSkill = imgSkill;
        this.porcentaje = porcentaje;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getImgSkill() {
        return imgSkill;
    }

    public void setImgSkill(String imgSkill) {
        this.imgSkill = imgSkill;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
    
}
