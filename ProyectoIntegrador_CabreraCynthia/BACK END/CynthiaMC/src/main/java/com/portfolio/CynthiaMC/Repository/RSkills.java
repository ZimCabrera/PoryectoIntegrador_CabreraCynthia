
package com.portfolio.CynthiaMC.Repository;

import com.portfolio.CynthiaMC.Entity.Skills;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RSkills extends JpaRepository<Skills, Long> {
     public Optional<Skills> findByNombreE(String nombreE);
    public boolean existsByNombreE(String nombreE);
}
