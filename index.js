// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton1" : { image: "./assets/images/autogen/SITE_MAP_Nnavbutton.gif", rollover: "./assets/images/autogen/SITE_MAP_NRnavbutton.gif", w: 120, h: 20 },
	"NavigationButton2" : { image: "./assets/images/autogen/PRIVACY_POLICY_Nnavbutton.gif", rollover: "./assets/images/autogen/PRIVACY_POLICY_NRnavbutton.gif", w: 120, h: 20 },
	"NavigationButton3" : { image: "./assets/images/autogen/TERMS_OF_USE_Nnavbutton.gif", rollover: "./assets/images/autogen/TERMS_OF_USE_NRnavbutton.gif", w: 120, h: 20 },
	"NavigationButton4" : { image: "./assets/images/autogen/CONTACT_US_Nnavbutton.gif", rollover: "./assets/images/autogen/CONTACT_US_NRnavbutton.gif", w: 120, h: 20 },
	"NavigationButton5" : { image: "./assets/images/autogen/FAQ_Nnavbutton.gif", rollover: "./assets/images/autogen/FAQ_NRnavbutton.gif", w: 120, h: 20 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars

