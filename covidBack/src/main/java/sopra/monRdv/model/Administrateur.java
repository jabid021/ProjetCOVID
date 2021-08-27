package sopra.monRdv.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("admin")
public class Administrateur extends Utilisateur {
	public Administrateur() {
		super();
	}
}
