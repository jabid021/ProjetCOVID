package sopra.monRdv.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;

@Entity
public class Praticien extends Utilisateur {
	@Column(length = 15)
	private String matricule;
	@Column(length = 15)
	private String telephone;
	@Column(length = 255)
	private String photo;
	@Column(length = 15)
	@Enumerated(EnumType.STRING)
	private Convention convention;
	private boolean carteVitale;
	private boolean cb;
	private boolean cheque;
	private boolean espece;
	private int dureeCreneau;
	@OneToMany(mappedBy = "praticien")
	private List<Consultation> consultations = new ArrayList<Consultation>();
	@OneToMany(mappedBy = "praticien")
	private List<Motif> motifs = new ArrayList<Motif>();
	@OneToMany(mappedBy = "praticien")
	private List<Lieu> lieux = new ArrayList<Lieu>();
	@OneToMany(mappedBy = "praticien")
	private List<Creneau> creneaux = new ArrayList<Creneau>();
	@OneToMany(mappedBy = "praticien")
	private List<PraticienSpecialite> specialites = new ArrayList<PraticienSpecialite>();

	public Praticien() {
		super();
	}

	public String getMatricule() {
		return matricule;
	}

	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Convention getConvention() {
		return convention;
	}

	public void setConvention(Convention convention) {
		this.convention = convention;
	}

	public boolean isCarteVitale() {
		return carteVitale;
	}

	public void setCarteVitale(boolean carteVitale) {
		this.carteVitale = carteVitale;
	}

	public boolean isCb() {
		return cb;
	}

	public void setCb(boolean cb) {
		this.cb = cb;
	}

	public boolean isCheque() {
		return cheque;
	}

	public void setCheque(boolean cheque) {
		this.cheque = cheque;
	}

	public boolean isEspece() {
		return espece;
	}

	public void setEspece(boolean espece) {
		this.espece = espece;
	}

	public int getDureeCreneau() {
		return dureeCreneau;
	}

	public void setDureeCreneau(int dureeCreneau) {
		this.dureeCreneau = dureeCreneau;
	}

	public List<Consultation> getConsultations() {
		return consultations;
	}

	public void setConsultations(List<Consultation> consultations) {
		this.consultations = consultations;
	}

	public List<Motif> getMotifs() {
		return motifs;
	}

	public void setMotifs(List<Motif> motifs) {
		this.motifs = motifs;
	}

	public List<Lieu> getLieux() {
		return lieux;
	}

	public void setLieux(List<Lieu> lieux) {
		this.lieux = lieux;
	}

	public List<Creneau> getCreneaux() {
		return creneaux;
	}

	public void setCreneaux(List<Creneau> creneaux) {
		this.creneaux = creneaux;
	}

	public List<PraticienSpecialite> getSpecialites() {
		return specialites;
	}

	public void setSpecialites(List<PraticienSpecialite> specialites) {
		this.specialites = specialites;
	}

}
