var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<html>
<title>Client Commands</title>
<!-- most of these were tested on a Philips Old Plus MAT972, running client 2.5 Internal / build 7183. information about commands may be incorrect/irrelevant on other hardware models/client builds -->

<a href="client:BottomOfPage">client:BottomOfPage</a>
<br>

<a href="client:showalert?message=This will show the hardware manufacturer logo and dialing screen, however if you're already connected you will get stuck on 'Connected to WebTV.'<br><br>You'll have to power off your box to get out of it.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Dial me up, Scotty!&buttonAction2=client:activ">client:activ (!!)</a>
<br>

<a href="client:showalert?message=This will show the dialing screen, however if you're already connected you will get stuck on 'Connected to WebTV.'<br><br>You'll have to power off your box to get out of it.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Dial me up, Scotty!&buttonAction2=client:BeginDialing">client:BeginDialing (!!)</a>
<br>

<a href="client:CrossoverMark">client:CrossoverMark (turns on PiP feature on Plus units, does not turn off)</a>
<br>

<a href="client:DoNothing">client:DoNothing (yeah)</a>
<br>

<a href="client:showalert?message=This will immediately reboot your box (or crash your viewer), possibly clear your Tellyscript, and who knows what else. Use caution.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=haha button&buttonAction2=client:find">client:find (!!!)</a>
<br>

<a href="client:GoBack">client:GoBack</a>
<br>

<a href="client:GoHome">client:GoHome</a>
<br>

<a href="wtv-client:/explain">client:GoToExplanationPage (to do: figure out)</a>
<br>

<a href="client:GoToInfoPage">client:GoToInfoPage (411 poweroff code page)</a>
<br>

<a href="client:showalert?message=This will hang up the phone, will not show the Reconnect dialog, and disables most of the shortcut keys.<br><br>Use activ or BeginDialing at the top of the page to reconnect.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Okay&buttonAction2=client:HangUpPhone">client:HangUpPhone (!)</a>
<br>

<a href="client:LogOnToPage">client:LogOnToPage (shows connecting screen, can back out)</a>
<br>

<a href="client:LogoShown">client:LogoShown (shows connecting screen, can back out)</a>
<br>

<a href="client:OpenAddressPanel">client:OpenAddressPanel (does nothing?)</a>
<br>

client:OpenKeyboard (only works when focused on text box)
<br>

<a href="client:showalert?message=This will turn off your box, similar to PowerOff.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Hit me!&buttonAction2=client:PowerOn">client:PowerOn (!)</a>
<br>

<a href="client:showalert?message=This will turn off your box, as if you pressed the power button and pressed Power off.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Hit me!&buttonAction2=client:PowerOff">client:PowerOff (!)</a>
<br>

<a href="client:showalert?message=This will turn off your box and put you into MiniBrowser once rebooted (if you're not running an Old Classic).&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Hit me!&buttonAction2=client:PowerOff?miniBrowser&autoPowerOn">client:PowerOff?miniBrowser&autoPowerOn (!)</a>
<br>

<a href="client:ReloadPage">client:ReloadPage</a>
<br>

<a href="client:showalert?message=This will initiate a relog and show the user selector screen (if applicable), similar to selecting Switch User on the home screen. &buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Sounds cool&buttonAction2=client:relog">client:relog (!)</a>
<br>

<!-- not our problem if we get customer support emails about this. i told them not to do it officer -->
<a href="client:showalert?message=THIS WILL CLEAR YOUR TERMINAL'S NVRAM (which includes some settings and Tellyscript).<br><br>Only use this if you are ABSOLUTELY sure what that means and you want to do it.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=ASS BLAAAAAAAST!!&buttonAction2=client:ResetNVAndPowerOff">client:ResetNVAndPowerOff (!!!)</a>
<br>

<!-- missing args to actually save, not sure what they are however the expected output of saving a favorite normally is like this:
wtv-favorite:/add?favorite-category=Personal&favorite-title=[page name]&favorite-thumbnail-type=image/wtv-bitmap&favorite-url=[url]
with an image encoded in the POST data (otherwise defaults to canned/favorite_default.gif)
putting the URL in the Go to panel causes it to give an error, but still saves properly.
-->
<a href="client:SaveToFavorite">client:SaveToFavorite (shows animation but does nothing)</a>
<br>

<a href="client:setleds?power=off&connected=on&message=off">client:setleds (connected)</a>
<br>

<a href="client:ShowCrashLog">client:ShowCrashLog (only works on internal builds?)</a>
<br>

<a href="client:showalert?message=This will show the 'preparing your update' screen, however it seems to do nothing else. It may do something if your hard drive has an update ready to be installed.<br><br>Hit back on your remote/keyboard to exit.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Got it, boss&buttonAction2=client:ShowAutoDisk">client:ShowAutoDisk (!)
<br>

<!-- not even sure if this works without a printer somehow set -->
<a href="client:ShowPrintWindow">client:ShowPrintWindow</a>
<br>

<a href="client:ShowServices">client:ShowServices</a>
<br>

<a href="client:ShowTVCrossoverRecent">client:ShowTVCrossoverRecent (TV home, press View after clicking)
<br>

<a href="client:ShowTVFullScreen">client:ShowTVFullScreen (RF input, press View after clicking)</a>
<br>

<a href="client:ShowTVFullScreen?UseVideoIn">client:ShowTVFullScreen?UseVideoIn (composite input, press View after clicking)</a>
<br>

<a href="client:ShowTVHome">client:ShowTVHome (press View after clicking)</a>
<br>

<a href="client:soundcapture?notify=client:donothing&device=audio&rate=8000&name=cache%3Avoicemail.wav&donebuttonlabel=Add%20to%20Message&open">client:SoundCapture (shows dialog, submitting does nothing)</a>
<br>

<a href="client:TogglePIP">client:TogglePIP (does nothing?)</a>
<br>

<a href="client:TriggerFlashDownload">client:TriggerFlashDownload (triggers update, only on Old Classic hardware)
<br>

<a href="client:UpdateFlash">client:UpdateFlash (triggers update, only on Old Classic hardware, may also reboot others)</a>
<br>

<!-- on viewer, it gives the dialing screen and after doing client:activ it hangs on a black screen -->
<a href="client:showalert?message=This will disconnect, redial, and go through the whole connection process. It may also override your server and connect to whatever the default in your route settings is.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Yeah, I'm a switch(er)&buttonAction2=client:UnpluggedAndMoved">client:UnpluggedAndMoved (!!)
<br>

<a href="client:vfathax">client:vfathax (only works on internal builds?)</a>
<br>

<a href="client:TopOfPage">client:TopOfPage</a>
<br>

</html>`;
