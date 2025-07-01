var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<html>
<title>Client Commands</title>
<!-- everything here was tested on a Philips Old Plus unit, running client 2.5.5 Internal / build 7352. information about commands may be incorrect/irrelevant on other hardware models/client builds -->

<a href="client:BottomOfPage">client:BottomOfPage</a>
<br>

<a href="client:activ">client:activ</a>
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

<a href="wtv-client:/explain">client:GoToExplanationPage (to do: figure out)</a>
<br>

<a href="client:GoToInfoPage">client:GoToInfoPage (the page that 411 poweroff code shows)</a>
<br>

<a href="client:showalert?message=This will hang up the phone, will not show the Reconnect dialog, and disables most of the shortcut keys.<br><br>Use activ or BeginDialing at the top of the page to reconnect.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Okay&buttonAction2=client:HangUpPhone">client:HangUpPhone (!)</a>
<br>

client:OpenKeyboard (only works when focused on text box)
<br>

<a href="client:showalert?message=This will turn off your box, similar to PowerOff.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Hit me!&buttonAction2=client:PowerOn">client:PowerOn (!)</a>

<br>
<a href="client:showalert?message=This will turn off your box, as if you pressed the power button and pressed Power off.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Hit me!&buttonAction2=client:PowerOff">client:PowerOff (!)</a>
<br>

<!-- not our problem if we get customer support emails about this. i told them not to do it officer -->
<a href="client:showalert?message=THIS WILL CLEAR YOUR TERMINAL'S NVRAM (which includes some settings and Tellyscript).<br><br>Only use this if you are ABSOLUTELY sure what that means and you want to do it.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=ASS BLAAAAAAAST!!&buttonAction2=client:ResetNVAndPowerOff">client:ResetNVAndPowerOff (!!!)</a>
<br>

<a href="client:SaveToFavorite">client:SaveToFavorite (shows animation but does nothing; missing arguments?)</a>
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

<!-- on viewer, it gives the dialing screen and after doing client:activ it hangs on a black screen -->
<a href="client:showalert?message=This will disconnect, redial, and go through the whole connection process. It may also override your server and connect to whatever the default in your route settings is.&buttonLabel1=Cancel&buttonAction1=client:donothing&buttonLabel2=Yeah, I'm a switch(er)&buttonAction2=client:UnpluggedAndMoved">client:UnpluggedAndMoved (!!)
<br>

<a href="client:vfathax">client:vfathax (only works on internal builds?)</a>
<br>

<a href="client:TopOfPage">client:TopOfPage</a>
<br>

</html>`;
