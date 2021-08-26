package sopra.monRdv.model;

public class Views {
	public static class ViewCommon {}
	
	public static class ViewAdmin extends ViewUtilisateur {}
	
	public static class ViewPatient extends ViewUtilisateur {}
	
	public static class ViewUtilisateur extends ViewCommon {}
	
}
