// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false ];
var arrayMetadata    = [ [ "1", "GSM156764", "Unstimulated HELA cells", "GSE6783", "HeLa" ], [ "2", "GSM159933", "DMSO O hr 1", "GSE6932", "keratinocytes" ], [ "3", "GSM159934", "DMSO O hr 2", "GSE6932", "keratinocytes" ], [ "4", "GSM189384", "Normal Cervix NC__C-12N", "GSE7803", "NormCervix" ], [ "5", "GSM189385", "Normal Cervix NC__C-2N", "GSE7803", "NormCervix" ], [ "6", "GSM189386", "Normal Cervix NC__C-3N", "GSE7803", "NormCervix" ], [ "7", "GSM189387", "Normal Cervix NC__C-6N", "GSE7803", "NormCervix" ], [ "8", "GSM189388", "Normal Cervix NC__C-9N", "GSE7803", "NormCervix" ], [ "9", "GSM189389", "Normal Cervix NC__CN55", "GSE7803", "NormCervix" ], [ "10", "GSM189390", "Normal Cervix NC__CN9", "GSE7803", "NormCervix" ], [ "11", "GSM189391", "Normal Cervix NC__N2", "GSE7803", "NormCervix" ], [ "12", "GSM189392", "Normal Cervix NC__N4", "GSE7803", "NormCervix" ], [ "13", "GSM189393", "Normal Cervix NC__UMC-7N", "GSE7803", "NormCervix" ], [ "14", "GSM189394", "high grade squamous intraepithelial lesion of the cervix HSIL__H10_A", "GSE7803", "lesion-high" ], [ "15", "GSM189395", "high grade squamous intraepithelial lesion of the cervix HSIL__H1_A", "GSE7803", "lesion-high" ], [ "16", "GSM189396", "high grade squamous intraepithelial lesion of the cervix HSIL__H2_A", "GSE7803", "lesion-high" ], [ "17", "GSM189397", "high grade squamous intraepithelial lesion of the cervix HSIL__H4_A", "GSE7803", "lesion-high" ], [ "18", "GSM189398", "high grade squamous intraepithelial lesion of the cervix HSIL__H7_A", "GSE7803", "lesion-high" ], [ "19", "GSM189399", "high grade squamous intraepithelial lesion of the cervix HSIL__H9_A", "GSE7803", "lesion-high" ], [ "20", "GSM189400", "high grade squamous intraepithelial lesion of the cervix HSIL__H3-2_A", "GSE7803", "lesion-high" ], [ "21", "GSM189401", "squamous cell carcinoma of the cervix SCC__C-16T", "GSE7803", "CervixCancer-SCC" ], [ "22", "GSM189402", "squamous cell carcinoma of the cervix SCC__C-19T", "GSE7803", "CervixCancer-SCC" ], [ "23", "GSM189403", "squamous cell carcinoma of the cervix SCC__C-20T", "GSE7803", "CervixCancer-SCC" ], [ "24", "GSM189404", "squamous cell carcinoma of the cervix SCC__C-27T", "GSE7803", "CervixCancer-SCC" ], [ "25", "GSM189405", "squamous cell carcinoma of the cervix SCC__C-2T-3", "GSE7803", "CervixCancer-SCC" ], [ "26", "GSM189406", "squamous cell carcinoma of the cervix SCC__C-30T", "GSE7803", "CervixCancer-SCC" ], [ "27", "GSM189407", "squamous cell carcinoma of the cervix SCC__C-31T", "GSE7803", "CervixCancer-SCC" ], [ "28", "GSM189408", "squamous cell carcinoma of the cervix SCC__C-33T", "GSE7803", "CervixCancer-SCC" ], [ "29", "GSM189409", "squamous cell carcinoma of the cervix SCC__C-3T", "GSE7803", "CervixCancer-SCC" ], [ "30", "GSM189410", "squamous cell carcinoma of the cervix SCC__C-9T", "GSE7803", "CervixCancer-SCC" ], [ "31", "GSM189411", "squamous cell carcinoma of the cervix SCC__CS-16T", "GSE7803", "CervixCancer-SCC" ], [ "32", "GSM189412", "squamous cell carcinoma of the cervix SCC__CS-188T", "GSE7803", "CervixCancer-SCC" ], [ "33", "GSM189413", "squamous cell carcinoma of the cervix SCC__CS-196T", "GSE7803", "CervixCancer-SCC" ], [ "34", "GSM189414", "squamous cell carcinoma of the cervix SCC__CS-48", "GSE7803", "CervixCancer-SCC" ], [ "35", "GSM189415", "squamous cell carcinoma of the cervix SCC__CS-80T", "GSE7803", "CervixCancer-SCC" ], [ "36", "GSM189416", "squamous cell carcinoma of the cervix SCC__CS-87", "GSE7803", "CervixCancer-SCC" ], [ "37", "GSM189417", "squamous cell carcinoma of the cervix SCC__UMC-11T", "GSE7803", "CervixCancer-SCC" ], [ "38", "GSM189418", "squamous cell carcinoma of the cervix SCC__UMC-4T", "GSE7803", "CervixCancer-SCC" ], [ "39", "GSM189419", "squamous cell carcinoma of the cervix SCC__UMC-5T", "GSE7803", "CervixCancer-SCC" ], [ "40", "GSM189420", "squamous cell carcinoma of the cervix SCC__UMC-8T", "GSE7803", "CervixCancer-SCC" ], [ "41", "GSM189421", "squamous cell carcinoma of the cervix SCC__UMC-9T", "GSE7803", "CervixCancer-SCC" ], [ "42", "GSM23373", "Untreated HeLa Replicate 2 U133A", "GSE1417", "HeLa" ], [ "43", "GSM23377", "Untreated HeLa Replicate 3 U133A", "GSE1417", "HeLa" ], [ "44", "GSM23378", "Untreated HeLa Replicate 4 U133A", "GSE1417", "HeLa" ], [ "45", "GSM246123", "Cervical cancer cell line, HeLa", "GSE9750", "HeLa" ], [ "46", "GSM246484", "Normal cervix, commercial_BioChain", "GSE9750", "NormCervix" ], [ "47", "GSM246486", "Normal cervix epithelium_CaCx4", "GSE9750", "NormCervix" ], [ "48", "GSM246487", "Normal cervix epithelium_CaCx5", "GSE9750", "NormCervix" ], [ "49", "GSM246488", "Normal cervix epithelium_03-3505", "GSE9750", "NormCervix" ], [ "50", "GSM246489", "Normal cervix epithelium_03-4216", "GSE9750", "NormCervix" ], [ "51", "GSM246490", "Normal cervix epithelium_03-4508", "GSE9750", "NormCervix" ], [ "52", "GSM246491", "Normal cervix epithelium_03-4986", "GSE9750", "NormCervix" ], [ "53", "GSM247162", "Normal cervix epithelium_03-5419", "GSE9750", "NormCervix" ], [ "54", "GSM247163", "Normal cervix epithelium_03-5438", "GSE9750", "NormCervix" ], [ "55", "GSM247164", "Normal cervix_03-5611", "GSE9750", "NormCervix" ], [ "56", "GSM247165", "Normal cervix_03-5657", "GSE9750", "NormCervix" ], [ "57", "GSM247166", "Normal cervix_05-15", "GSE9750", "NormCervix" ], [ "58", "GSM247168", "Normal cervix_05-31", "GSE9750", "NormCervix" ], [ "59", "GSM247169", "Normal cervix_05-446", "GSE9750", "NormCervix" ], [ "60", "GSM247171", "Normal cervix_05-1308", "GSE9750", "NormCervix" ], [ "61", "GSM247173", "Normal cervix_05-1352", "GSE9750", "NormCervix" ], [ "62", "GSM247174", "Normal cervix_05-1981", "GSE9750", "NormCervix" ], [ "63", "GSM247175", "Normal cervix_05-4602", "GSE9750", "NormCervix" ], [ "64", "GSM247188", "Normal cervix_05-4615", "GSE9750", "NormCervix" ], [ "65", "GSM247189", "Normal cervix_05-4959", "GSE9750", "NormCervix" ], [ "66", "GSM247190", "Normal cervix_05-5007", "GSE9750", "NormCervix" ], [ "67", "GSM247651", "Cervical cancer_CC128", "GSE9750", "CervixCancer-SCC" ], [ "68", "GSM247652", "Cervical cancer_CC140", "GSE9750", "CervixCancer-SCC" ], [ "69", "GSM247653", "Cervical cancer_CC163", "GSE9750", "CervixCancer-SCC" ], [ "70", "GSM247657", "Cervical cancer_CC218", "GSE9750", "CervixCancer-SCC" ], [ "71", "GSM247658", "Cervical cancer_CC222", "GSE9750", "CervixCancer-SCC" ], [ "72", "GSM247659", "Cervical cancer_892T", "GSE9750", "CervixCancer-SCC" ], [ "73", "GSM247661", "Cervical cancer_1798T", "GSE9750", "CervixCancer-SCC" ], [ "74", "GSM247856", "Cervical cacner_654T", "GSE9750", "CervixCancer-SCC" ], [ "75", "GSM247859", "Cervical cancer_1434T", "GSE9750", "CervixCancer-SCC" ], [ "76", "GSM247860", "Cervical cancer_1509T", "GSE9750", "CervixCancer-SCC" ], [ "77", "GSM247862", "Cervical cancer_1898T", "GSE9750", "CervixCancer-SCC" ], [ "78", "GSM247864", "Cervical cancer_1900T", "GSE9750", "CervixCancer-SCC" ], [ "79", "GSM247865", "Cervical cancer_1907T", "GSE9750", "CervixCancer-SCC" ], [ "80", "GSM247866", "Cervical cancer_2035T", "GSE9750", "CervixCancer-SCC" ], [ "81", "GSM247878", "Cervical cancer_88-04T", "GSE9750", "CervixCancer-SCC" ], [ "82", "GSM247879", "Cervical cancer_98-04T", "GSE9750", "CervixCancer-SCC" ], [ "83", "GSM247881", "Cervical cancer_103-04T", "GSE9750", "CervixCancer-SCC" ], [ "84", "GSM247882", "Cervical cancer_CaCx28", "GSE9750", "CervixCancer-SCC" ], [ "85", "GSM247883", "Cervical cancer_CaCx54", "GSE9750", "CervixCancer-SCC" ], [ "86", "GSM247884", "Cervical cancer_CaCx60", "GSE9750", "CervixCancer-SCC" ], [ "87", "GSM247885", "Cervical cancer_CaCx70", "GSE9750", "CervixCancer-SCC" ], [ "88", "GSM247886", "Cervical cancer_CaCx81", "GSE9750", "CervixCancer-SCC" ], [ "89", "GSM247887", "Cervical cancer_CaCx83", "GSE9750", "CervixCancer-SCC" ], [ "90", "GSM263955", "HeLa total RNA, chip HG-U133A", "GSE10436", "HeLa" ], [ "91", "GSM44684", "Normal Uterus", "GSE2361", "NormCervix" ], [ "92", "GSM656384", "Sample-2B-U133A Day0", "GSE26688", "keratinocytes" ] ];
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
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
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
