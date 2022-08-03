
package com.portfolio.CynthiaMC.Controller;

import com.portfolio.CynthiaMC.Dto.dtoSkills;
import com.portfolio.CynthiaMC.Entity.Skills;
import com.portfolio.CynthiaMC.Security.Controller.Mensaje;
import com.portfolio.CynthiaMC.Service.SSkills;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("skillab")
@CrossOrigin(origins = "http://localhost:4200")
public class CSkills {
     @Autowired
     SSkills sSkills;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Skills>> list(){
        List<Skills> list = sSkills.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Skills> getById(@PathVariable("id") Long id){
        if(!sSkills.existsById(id))
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        Skills skills = sSkills.getOne(id).get();
        return new ResponseEntity(skills, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoSkills dtoskills){
        if(StringUtils.isBlank(dtoskills.getNombreE()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sSkills.existsByNombreE(dtoskills.getNombreE()))
            return new ResponseEntity(new Mensaje("Esa nombre ya existe"), HttpStatus.BAD_REQUEST);
        
        Skills skills = new Skills(dtoskills.getNombreE(), dtoskills.getPorcentaje(), dtoskills.getImgSkill());
        sSkills.save(skills);
        
        return new ResponseEntity(new Mensaje("Skill agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{idSkill}")
    public ResponseEntity<?> update(@PathVariable("idSkill") Long idSkill, @RequestBody dtoSkills dtoskills){
        if(!sSkills.existsById(idSkill))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        if(sSkills.existsByNombreE(dtoskills.getNombreE()) && sSkills.getByNombreE(dtoskills.getNombreE()).get().getIdSkill() != idSkill)
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(dtoskills.getNombreE()))
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        
        Skills skills = sSkills.getOne(idSkill).get();
        skills.setNombreE(dtoskills.getNombreE());
        skills.setPorcentaje(dtoskills.getPorcentaje());
        skills.setImgSkill(dtoskills.getImgSkill());
        
        sSkills.save(skills);
        return new ResponseEntity(new Mensaje("Skill actualizada"), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{idSkill}")
    public ResponseEntity<?> delete(@PathVariable("idSkill") Long idSkill){
        if(!sSkills.existsById(idSkill))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.NOT_FOUND);
        sSkills.delete(idSkill);
        return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
    }
}
