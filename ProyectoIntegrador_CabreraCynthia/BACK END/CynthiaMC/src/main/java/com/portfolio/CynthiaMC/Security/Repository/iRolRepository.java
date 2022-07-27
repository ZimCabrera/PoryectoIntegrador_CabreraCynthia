
package com.portfolio.CynthiaMC.Security.Repository;

import com.portfolio.CynthiaMC.Security.Entity.Rol;
import com.portfolio.CynthiaMC.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    
}
