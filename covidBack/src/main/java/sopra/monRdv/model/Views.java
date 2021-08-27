package sopra.monRdv.model;

public class Views {
	public static class ViewCommon {}
	
	public static class ViewUtilisateur extends ViewCommon {}
	
	public static class ViewPraticien extends ViewUtilisateur {}
	
	public static class ViewPraticienWithSpecialites extends ViewPraticien {}
	
	public static class ViewLieu extends ViewCommon {}
	
	public static class ViewMotif extends ViewCommon {}
	
	public static class ViewAdmin extends ViewUtilisateur {}
}