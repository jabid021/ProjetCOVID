package sopra.monRdv.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@Entity
public class Specialite {
	@Id
	@GeneratedValue
	private Long id;
	@Version
	private int version;
	@Column(length = 100)
	private String nom;
	@Column(length = 255)
	private String description;
	@OneToMany(mappedBy = "specialite")
	private List<PraticienSpecialite> praticiens = new ArrayList<PraticienSpecialite>();

	public Specialite() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<PraticienSpecialite> getPraticiens() {
		return praticiens;
	}

	public void setPraticiens(List<PraticienSpecialite> praticiens) {
		this.praticiens = praticiens;
	}

}
