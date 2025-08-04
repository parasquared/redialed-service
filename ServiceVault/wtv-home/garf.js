var wtvrsvc_service_file = true;

if(typeof request_headers.query.exists == 'undefined'){
headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const date = new Date();

data = `<html>
<head>
<display hspace=0 vspace=0 fontsize=medium noscroll showwhencomplete>
<title>
Garfield
</title>
</head>
<sidebar width=110>
<table cellspacing=0 cellpadding=0 bgcolor=774421 gradcolor=452A17 gradangle=0>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="wtv-home:/ROMCache/WebTVLogoJewel.gif" width=87 height=67>
</table>
<td abswidth=6>
<tr>
<td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=104 absheight=2 bgcolor=000000 transparency=64>
<spacer>
<tr>
<td abswidth=104 absheight=1>
<tr>
<td abswidth=104 absheight=2 bgcolor=000000 transparency=88>
<spacer>
</table>
<tr>
<td absheight=54>
<tr>
<td absheight=242 align=right colspan=3>
<tr>
<td absheight=39>
</table>
</sidebar>
<body bgcolor=191919 text=44cc55 link=189CD6 vlink=189CD6 hspace=0 vspace=0 fontsize=medium>
<table>
<tr>
<td>
<spacer type=block width=10 height=1>
</td>
<td>
<spacer type=block width=1 height=30>
<blackface><font color=e7ce4a size=+2>Go Go Gadget Garfield Comic Strip-inator</font></blackface>
<form>
<input type="hidden" name="exists" id="exists" Value=1>
<p>Year: <input name="year" id="year" Value="` + date.getFullYear() + `" bgcolor=#444444 text=#ffdd33 cursor=#cc9933 TYPE="input" ASCIIONLY SIZE="4" MAXLENGTH="4">

<p>Month: <input name="month" id="month" Value="` + (date.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + `" bgcolor=#444444 text=#ffdd33 cursor=#cc9933 TYPE="input" ASCIIONLY SIZE="2" MAXLENGTH="2">

<p>Date: <input name="date" id="date" Value="` + date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + `" bgcolor=#444444 text=#ffdd33 cursor=#cc9933 TYPE="input" ASCIIONLY SIZE="2" MAXLENGTH="2">
<br><br>
<input type=checkbox name=sunday value=true> Modern-ish Sunday Strip
<br>
<p><b><font size=-1>ATTENTION! </font></b>Due to this code being Not Very Good, the date and month numbers NEED to be in two digits.<br>
<spacer type=block height=150 width=300>
<font color="#E7CE4A"><shadow>
<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="See strip" usestyle>
</shadow></font>
</td>
</table>
</body>
</html>`;
}else{
if (request_headers.query.sunday){
ext = '.jpg'
}else{
ext = '.gif'
}
fulldate = request_headers.query.year.substring(2) + request_headers.query.month + request_headers.query.date
headers = `301 Moved Permanently
Connection: Keep-Alive
Location: http://picayune.uclick.com/comics/ga/` + request_headers.query.year + '/ga' + fulldate + ext + '?wtv-title=Strip for ' + request_headers.query.month + '/' + request_headers.query.date + '/' + request_headers.query.year

data = ''

}
