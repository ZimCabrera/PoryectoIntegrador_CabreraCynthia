package com.portfolio.CynthiaMC.Entity;



import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity
public class Persona implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 1, max = 100, message = "no cumple con la longitud")
    private String nombre;
    
    @NotNull
    @Size(min = 1, max = 100, message = "no cumple con la longitud")
    private String apellido;
    
    @Size(min = 1, max = 100, message = "no cumple con la longitud")
    private String img;
    
    @Size(min = 1, max = 500, message = "no cumple con la longitud")
    private String descripcionE;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "idEdu")
    private List<Educacion> educacionList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "idExp")
    private List<Experiencia> expList;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "idSkill")
    private List<Skills> skillsList;

    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String img, String descripcionE) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcionE = descripcionE;
    }
    
    
}
