package sopra.monRdv.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.Version;

@Entity
@Table(name = "praticien_specialite", uniqueConstraints = @UniqueConstraint(columnNames = { "praticien_id",
		"specialite_id" }))
public class PraticienSpecialite {
	@Id
	@GeneratedValue
	private Long id;
	@Version
	private int version;
	@ManyToOne
	@JoinColumn(name = "praticien_id")
	private Praticien praticien;
	@ManyToOne
	@JoinColumn(name = "specialite_id")
	private Specialite specialite;

	public PraticienSpecialite() {
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

}
