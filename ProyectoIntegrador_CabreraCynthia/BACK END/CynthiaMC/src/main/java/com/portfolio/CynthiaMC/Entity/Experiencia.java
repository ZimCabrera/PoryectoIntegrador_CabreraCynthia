
package com.portfolio.CynthiaMC.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long idExp;
    private String nombreE;
    private String descripcionE;

    public Experiencia() {
    }

    public Experiencia(Long idExp, String nombreE, String descripcionE) {
        this.idExp = idExp;
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }

    public Experiencia(String nombreE, String descripcionE) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    public Long getIdExp() {
        return idExp;
    }

    public void setIdExp(Long idExp) {
        this.idExp = idExp;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcionE() {
        return descripcionE;
    }

    public void setDescripcionE(String descripcionE) {
        this.descripcionE = descripcionE;
    }

}
