package sopra.monRdv.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.monRdv.model.Administrateur;
import sopra.monRdv.model.Patient;
import sopra.monRdv.model.Praticien;
import sopra.monRdv.model.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long>{
	@Query("select p from Praticien p")
	List<Praticien> findAllPraticien();
	
	@Query("select p from Patient p")
	List<Patient> findAllPatient();
	
	@Query("select a from Administrateur a")
	List<Administrateur> findAllAdministrateur();	
	
	@Query("select p from Praticien p where p.id = :id")
	Optional<Praticien> findPraticienById(@Param("id") Long id);
	
	@Query("select p from Patient p where p.id = :id")
	Optional<Patient> findPatientById(@Param("id") Long id);
	
	@Query("select a from Administrateur a where a.id = :id")
	Optional<Administrateur> findAdministrateurById(@Param("id") Long id);
	
	@Query("select u from Utilisateur u where u.email = :email")
	Optional<Utilisateur> findByEmail(@Param("email") String email);
	
	@Query("select u from Utilisateur u where u.email = :email and u.motDePasse = :motDePasse")
	Optional<Utilisateur> findByEmailAndMotDePasse(@Param("email") String email, @Param("motDePasse") String motDePasse);
}
