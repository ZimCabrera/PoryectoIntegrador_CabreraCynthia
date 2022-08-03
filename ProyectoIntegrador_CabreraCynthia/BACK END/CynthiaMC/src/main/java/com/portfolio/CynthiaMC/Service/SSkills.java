
package com.portfolio.CynthiaMC.Service;

import com.portfolio.CynthiaMC.Entity.Skills;
import com.portfolio.CynthiaMC.Repository.RSkills;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SSkills {
    @Autowired
    RSkills rSkills;
    
     public List<Skills> list(){
        return rSkills.findAll();
    }
    
    public Optional<Skills> getOne(Long id){
        return rSkills.findById(id);
    }
    
    public Optional<Skills> getByNombreE(String nombreE){
        return rSkills.findByNombreE(nombreE);
    }
    
    public void save(Skills skill){
        rSkills.save(skill);
    }
    
    public void delete(Long id){
        rSkills.deleteById(id);
    }
    
    public boolean existsById(Long id){
        return rSkills.existsById(id);
    }
    
    public boolean existsByNombreE(String nombreE){
        return rSkills.existsByNombreE(nombreE);
    }
}
