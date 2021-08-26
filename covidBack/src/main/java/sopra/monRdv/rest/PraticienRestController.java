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

import sopra.monRdv.model.Praticien;
import sopra.monRdv.repository.IUtilisateurRepository;

@RestController
@RequestMapping("/praticien")
@CrossOrigin("*")
public class PraticienRestController {

	@Autowired
	private IUtilisateurRepository utilisateurRepo;

	@GetMapping("")
	public List<Praticien> findAll() {
		return utilisateurRepo.findAllPraticien();
	}

	@GetMapping("/{id}")
	public Praticien find(@PathVariable Long id) {

		Optional<Praticien> optPraticien = utilisateurRepo.findPraticienById(id);

		if (optPraticien.isPresent()) {
			return optPraticien.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Praticien create(@RequestBody Praticien praticien) {
		praticien = utilisateurRepo.save(praticien);

		return praticien;
	}

	@PutMapping("/{id}")
	public Praticien update(@RequestBody Praticien praticien, @PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		praticien = utilisateurRepo.save(praticien);

		return praticien;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		utilisateurRepo.deleteById(id);
	}
}
