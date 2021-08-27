package sopra.monRdv.model;

public class Views {
	public static class ViewCommon {}
	
	public static class ViewUtilisateur extends ViewCommon {}
	
	public static class ViewPatient extends ViewCommon {}
	
	public static class ViewPraticien extends ViewUtilisateur {}
	
	public static class ViewConsultation extends ViewPraticien {}
	
	public static class ViewPraticienWithSpecialites extends ViewPraticien {}
	
	public static class ViewLieu extends ViewCommon {}
	
	public static class ViewMotif extends ViewCommon {}
	
	public static class ViewAdmin extends ViewUtilisateur {}
	
	public static class ViewConsultationWithPatient extends ViewConsultation {}

	public static class ViewConsultation extends ViewCommon {}
	
	public static class ViewSpecialite extends ViewCommon {}
	
	public static class ViewPraticienSpecialite extends ViewCommon {}
}