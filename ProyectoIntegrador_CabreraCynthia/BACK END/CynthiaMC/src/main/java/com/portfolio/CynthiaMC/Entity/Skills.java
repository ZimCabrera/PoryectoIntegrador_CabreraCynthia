
package com.portfolio.CynthiaMC.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Skills {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long idSkill;
    private String nombreE;
    private String imgSkill;
    private int porcentaje;

    public Skills() {
    }

    public Skills(Long idSkill, String nombreE, String imgSkill, int porcentaje) {
        this.idSkill = idSkill;
        this.nombreE = nombreE;
        this.imgSkill = imgSkill;
        this.porcentaje = porcentaje;
    }

    public Skills(String nombreE, int porcentaje, String imgSkill) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    public Long getIdSkill() {
        return idSkill;
    }

    public void setIdSkill(Long idSkill) {
        this.idSkill = idSkill;
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
