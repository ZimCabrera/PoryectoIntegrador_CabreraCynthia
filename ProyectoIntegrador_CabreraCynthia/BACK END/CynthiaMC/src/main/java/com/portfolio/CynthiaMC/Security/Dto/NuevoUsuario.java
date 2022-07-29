
package com.portfolio.CynthiaMC.Security.Dto;

import java.util.HashSet;
import java.util.Set;


public class NuevoUsuario {
    private String nombreUsuario;
    private String contraseña;
    private Set<String> roles = new HashSet<>();

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public <Rol> getRoles() {
        return roles;
    }

    public void setRoles(<any> roles) {
        this.roles = roles;
    }
}
