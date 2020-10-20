// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
var arrayMetadata    = [ [ "1", "GSM1025049", "HeLa control, biological rep1", "cell line: cervical cancer (HeLa) cells-|-agent: control", "GSE41827", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "2", "GSM1025050", "HeLa control, biological rep2", "cell line: cervical cancer (HeLa) cells-|-agent: control", "GSE41827", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "3", "GSM1025051", "HeLa control, biological rep3", "cell line: cervical cancer (HeLa) cells-|-agent: control", "GSE41827", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "4", "GSM1035823", "HeLa", "cell line: HeLa", "GSE42222", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "5", "GSM1068623", "HeLa cells-control", "cell line: HeLa-|-treatment: none-|-gender: female-|-age: 31 years-|-tissue: cervix-|-life span: infinite-|-morphology: epithelial-like", "GSE43701", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "6", "GSM135229", "Cervical Cancer Patient 10, Biopsy 6", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 57.5-|-HGB: 129-|-ifp: 13.875-|-age: 30.52-|-tumsizeMR: 7-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "7", "GSM135230", "Cervical Cancer Patient 10, Biopsy 3", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 57.5-|-HGB: 129-|-ifp: 13.875-|-age: 30.52-|-tumsizeMR: 7-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "8", "GSM135231", "Cervical Cancer Patient 6, Biopsy 2", "FIGO: 2B-|-Histology: SCC-|-Grade: PD-|-hp5: 65.3-|-HGB: 140-|-ifp: 9.88-|-age: 62.79-|-tumsizeMR: 4-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "9", "GSM135233", "Cervical Cancer Patient 1, Biopsy 3", "FIGO: 1B-|-Histology: SCC-|-Grade: MD-|-hp5: 66.3-|-HGB: 126-|-ifp: 27.02-|-age: 46.52-|-tumsizeMR: 5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "10", "GSM135234", "Cervical Cancer Patient 1, Biopsy 6", "FIGO: 1B-|-Histology: SCC-|-Grade: MD-|-hp5: 66.3-|-HGB: 126-|-ifp: 27.02-|-age: 46.52-|-tumsizeMR: 5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "11", "GSM135235", "Cervical Cancer Patient 4, Biopsy 1", "FIGO: 1B-|-Histology: SCC-|-Grade: MD-|-hp5: 36.7-|-HGB: 138-|-ifp: 11.94-|-age: 37.36-|-tumsizeMR: 4.3-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "12", "GSM135236", "Cervical Cancer Patient 4, Biopsy 3", "FIGO: 1B-|-Histology: SCC-|-Grade: MD-|-hp5: 36.7-|-HGB: 138-|-ifp: 11.94-|-age: 37.36-|-tumsizeMR: 4.3-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "13", "GSM135237", "Cervical Cancer Patient 12, Biopsy 1", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 22.1-|-HGB: 105-|-ifp: 33.08-|-age: 46.83-|-tumsizeMR: 8.5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "14", "GSM135238", "Cervical Cancer Patient 12, Biopsy 4", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 22.1-|-HGB: 105-|-ifp: 33.08-|-age: 46.83-|-tumsizeMR: 8.5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "15", "GSM135239", "Cervical Cancer Patient 12, Biopsy 5", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 22.1-|-HGB: 105-|-ifp: 33.08-|-age: 46.83-|-tumsizeMR: 8.5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "16", "GSM135240", "Cervical Cancer Patient 15, Biopsy 2", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 70.7-|-HGB: 157-|-ifp: 4.233333333-|-age: 69.57-|-tumsizeMR: 6.2-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "17", "GSM135241", "Cervical Cancer Patient 16, Biopsy 1", "FIGO: 3B-|-Histology: SCC-|-Grade: WD-|-hp5: 25-|-HGB: 112-|-ifp: 13.325-|-age: 60.9-|-tumsizeMR: 10.5-|-ResponseToTherapy: NR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "18", "GSM135242", "Cervical Cancer Patient 6, Biopsy 1", "FIGO: 2B-|-Histology: SCC-|-Grade: PD-|-hp5: 65.3-|-HGB: 140-|-ifp: 9.88-|-age: 62.79-|-tumsizeMR: 4-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "19", "GSM135243", "Cervical Cancer Patient 6, Biopsy 4", "FIGO: 2B-|-Histology: SCC-|-Grade: PD-|-hp5: 65.3-|-HGB: 140-|-ifp: 9.88-|-age: 62.79-|-tumsizeMR: 4-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "20", "GSM135244", "Cervical Cancer Patient 7, Biopsy 1", "FIGO: 3B-|-Histology: ASC-|-Grade: MD-|-hp5: 79.2-|-HGB: 129-|-ifp: 40.96-|-age: 30.89-|-tumsizeMR: 6-|-ResponseToTherapy: PR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "21", "GSM135245", "Cervical Cancer Patient 10, Biopsy 2", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 57.5-|-HGB: 129-|-ifp: 13.875-|-age: 30.52-|-tumsizeMR: 7-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "22", "GSM135246", "Cervical Cancer Patient 10, Biopsy 7", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 57.5-|-HGB: 129-|-ifp: 13.875-|-age: 30.52-|-tumsizeMR: 7-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "23", "GSM135247", "Cervical Cancer Patient 11, Biopsy 6", "FIGO: 4B-|-Histology: SCC-|-Grade: PD-|-hp5: 62.9-|-HGB: 113-|-ifp: 21.34-|-age: 51.42-|-tumsizeMR: 8.6-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "24", "GSM135248", "Cervical Cancer Patient 15, Biopsy 3", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 70.7-|-HGB: 157-|-ifp: 4.233333333-|-age: 69.57-|-tumsizeMR: 6.2-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "25", "GSM135249", "Cervical Cancer Patient 16, Biopsy 2", "FIGO: 3B-|-Histology: SCC-|-Grade: WD-|-hp5: 25-|-HGB: 112-|-ifp: 13.325-|-age: 60.9-|-tumsizeMR: 10.5-|-ResponseToTherapy: NR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "26", "GSM135250", "Cervical Cancer Patient 11, Biopsy 7", "FIGO: 4B-|-Histology: SCC-|-Grade: PD-|-hp5: 62.9-|-HGB: 113-|-ifp: 21.34-|-age: 51.42-|-tumsizeMR: 8.6-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "27", "GSM135251", "Cervical Cancer Patient 6, Biopsy 5", "FIGO: 2B-|-Histology: SCC-|-Grade: PD-|-hp5: 65.3-|-HGB: 140-|-ifp: 9.88-|-age: 62.79-|-tumsizeMR: 4-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "28", "GSM135252", "Cervical Cancer Patient 6, Biopsy 3", "FIGO: 2B-|-Histology: SCC-|-Grade: PD-|-hp5: 65.3-|-HGB: 140-|-ifp: 9.88-|-age: 62.79-|-tumsizeMR: 4-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "29", "GSM135253", "Cervical Cancer Patient 15, Biopsy 4", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 70.7-|-HGB: 157-|-ifp: 4.233333333-|-age: 69.57-|-tumsizeMR: 6.2-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "30", "GSM135254", "Cervical Cancer Patient 9, Biopsy 2", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 64.6-|-HGB: 133-|-ifp: 27.21666667-|-age: 41.53-|-tumsizeMR: 6-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "31", "GSM135255", "Cervical Cancer Patient 9, Biopsy 3", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 64.6-|-HGB: 133-|-ifp: 27.21666667-|-age: 41.53-|-tumsizeMR: 6-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "32", "GSM135256", "Cervical Cancer Patient 13, Biopsy 5", "FIGO: 2B-|-Histology: ASC-|-Grade: MD-|-hp5: 90.4-|-HGB: 127-|-ifp: 10.22-|-age: 35.13-|-tumsizeMR: 2.9-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "33", "GSM135258", "Cervical Cancer Patient 10, Biopsy 5", "FIGO: 2B-|-Histology: SCC-|-Grade: MD-|-hp5: 57.5-|-HGB: 129-|-ifp: 13.875-|-age: 30.52-|-tumsizeMR: 7-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "34", "GSM135259", "Cervical Cancer Patient 7, Biopsy 4", "FIGO: 3B-|-Histology: ASC-|-Grade: MD-|-hp5: 79.2-|-HGB: 129-|-ifp: 40.96-|-age: 30.89-|-tumsizeMR: 6-|-ResponseToTherapy: PR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "35", "GSM135260", "Cervical Cancer Patient 1, Biopsy 4", "FIGO: 1B-|-Histology: SCC-|-Grade: MD-|-hp5: 66.3-|-HGB: 126-|-ifp: 27.02-|-age: 46.52-|-tumsizeMR: 5-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "36", "GSM135261", "Cervical Cancer Patient 9, Biopsy 5", "FIGO: 3B-|-Histology: SCC-|-Grade: MD-|-hp5: 64.6-|-HGB: 133-|-ifp: 27.21666667-|-age: 41.53-|-tumsizeMR: 6-|-ResponseToTherapy: CR", "GSE5787", "biopsy", "cancer_cervix", "unknown", "epithelial", "unknown" ], [ "37", "GSM155646", "CC028", "Case: Cervical cancer-|-Anatomical sites: Cervix-|-gender: Female-|-age: 27-|-Tumor Stage: IB2", "GSE6791", "biopsy", "cancer_cervix", "IB2", "epithelial", "unknown" ], [ "38", "GSM155649", "CC034B", "Case: Cervical cancer-|-Anatomical sites: Cervix-|-gender: Female-|-age: 44-|-Tumor Stage: II/III", "GSE6791", "biopsy", "cancer_cervix", "II/III", "epithelial", "unknown" ], [ "39", "GSM155650", "CC068", "Case: Cervical cancer-|-Anatomical sites: Cervix-|-gender: Female-|-age: 41-|-Tumor Stage: IB", "GSE6791", "biopsy", "cancer_cervix", "IB", "epithelial", "unknown" ], [ "40", "GSM155654", "CC237", "Case: Cervical cancer-|-Anatomical sites: Cervix-|-gender: Female-|-age: 25-|-Tumor Stage: IB", "GSE6791", "biopsy", "cancer_cervix", "IB", "epithelial", "unknown" ], [ "41", "GSM155659", "CC507", "Case: Cervical cancer-|-Anatomical sites: Cervix-|-gender: Female-|-age: 52-|-Tumor Stage: IIIB", "GSE6791", "biopsy", "cancer_cervix", "IIIB", "epithelial", "unknown" ], [ "42", "GSM162953", "HeLa_uninfected_rep1", "HeLa cell line control sample", "GSE7047", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "43", "GSM162955", "HeLa_uninfected_rep2", "HeLa cell line control sample", "GSE7047", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "44", "GSM162964", "HeLa_uninfected_rep3", "HeLa cell line control sample", "GSE7047", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "45", "GSM650992", "HeLa U133_Plus2 gene expression", "cell line: HeLa (ATCC CCL-2)", "GSE26471", "cell_line", "cancer_HeLa", "unknown", "adeno", "HPV_18" ], [ "46", "GSM685524", "normal_N21_expression", "tissue: normal uterine cervix-|-type: Normal", "GSE27678", "biopsy", "normal_cervix", "none", "epithelial", "unknown" ], [ "47", "GSM685525", "SCC_K3_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "48", "GSM685527", "SCC_22_04_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "49", "GSM685528", "SCC_G1_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "50", "GSM685529", "SCC_G31_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "51", "GSM685531", "SCC_G18_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "52", "GSM685532", "SCC_C4I_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "53", "GSM685533", "SCC_G16_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "54", "GSM685535", "SCC_8_04_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "55", "GSM685537", "SCC_81_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "56", "GSM685538", "normal_S98_306_expression", "tissue: normal uterine cervix-|-type: Normal", "GSE27678", "biopsy", "normal_cervix", "none", "epithelial", "unknown" ], [ "57", "GSM685540", "SCC_N14_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "58", "GSM685541", "SCC_71_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "59", "GSM685542", "SCC_87_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "60", "GSM685544", "SCC_N24_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "61", "GSM685545", "SCC_76_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "62", "GSM685546", "SCC_G14_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "63", "GSM685547", "SCC_K7_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "64", "GSM685548", "SCC_54_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "65", "GSM685550", "SCC_G23_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "66", "GSM685551", "SCC_58a_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "67", "GSM685552", "SCC_72_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "68", "GSM685553", "SCC_88_05_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "69", "GSM685554", "SCC_G11_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "70", "GSM685555", "SCC_G22_expression", "tissue: Squamous cell carcinoma-|-type: SCC", "GSE27678", "biopsy", "cancer_cervix", "unknown", "squamous", "unknown" ], [ "71", "GSM886421", "Keratinocytes_untreated_subject1", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ], [ "72", "GSM886422", "Keratinocytes_untreated_subject2", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ], [ "73", "GSM886423", "Keratinocytes_untreated_subject3", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ], [ "74", "GSM886433", "Keratinocytes_untreated_replicate1", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ], [ "75", "GSM886434", "Keratinocytes_untreated_replicate2", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ], [ "76", "GSM886435", "Keratinocytes_untreated_replicate3", "tissue: primary keratinocytes-|-treatment: untreated control", "GSE36287", "cell_line", "normal_keratinocyte", "none", "squamous", "negative" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
	var success = false;
	i = 0; 
	/* Some of this looping could already be cached in reportInit() */
	while( (!success) & (i < ssrules.length) ) {
	    selector = ssrules[i].selectorText;  // The selector 
            if (!selector) 
		continue; // Skip @import and other nonstyle rules
            if (selector == (".aqm" + reportObjId)) {
		success = true; 
		ssrules[i].style.cssText = cssText[0+status];
	    } else {
		i++;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
