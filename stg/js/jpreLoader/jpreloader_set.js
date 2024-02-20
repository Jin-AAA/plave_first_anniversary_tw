$(document).ready( function() {
	$('body').jpreLoader({
		splashID: "#jk2u_load",
		loaderVPos: '50%',
		autoClose: true
	})

});


/*
OPTIONS

Name			Type		Default				Description
showSplash		Boolean		true				Enables showing the Splash Screen.
showPercentage	Boolean		true				Enables showing the progress percentage.
loaderVPos		Int/String	”75%”				Vertical position from top of progress bar.
splashVPos		Int/String	”35%”				Vertical position from top of Splash Screen.
splashID		String		”#jpreContent”		Selected element of Splash Screen Content.
splashFunction	Function	null				This function is called once the Splash Screen is created. You can use this to animate the Splash Screen.
autoClose		Boolean		true				Should jPreLoader close by itself once preload completed? If no user have to click on button to close the jPreLoader.
closeBtnText	String		”Start!”			Text to be show inside close button if autoClose is false.
onetimeLoad		Boolean		false				Should jPreLoader preload images for new user only? (using cookie to check and will expired once user close their browser)
debugMode		Boolean		false				Enable this only if you want to check for broken images.

*/