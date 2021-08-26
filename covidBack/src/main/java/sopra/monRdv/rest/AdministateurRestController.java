package sopra.monRdv.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import sopra.monRdv.model.Administrateur;
import sopra.monRdv.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/administrateur")
@CrossOrigin("*")
public class AdministateurRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@GetMapping("")
	public List<Administrateur> findAll() {
		return utilisateurRepo.findAllAdministrateur();
	}

	@GetMapping("/{id}")
	public Administrateur find(@PathVariable Long id) {

		Optional<Administrateur> optAdministrateur = utilisateurRepo.findAdministrateurById(id);

		if (optAdministrateur.isPresent()) {
			return optAdministrateur.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Administrateur create(@RequestBody Administrateur administrateur) {
		administrateur = utilisateurRepo.save(administrateur);

		return administrateur;
	}

	@PutMapping("/{id}")
	public Administrateur update(@RequestBody Administrateur administrateur, @PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		administrateur = utilisateurRepo.save(administrateur);

		return administrateur;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		utilisateurRepo.deleteById(id);
	}
}
