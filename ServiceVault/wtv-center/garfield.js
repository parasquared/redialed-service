var wtvrsvc_service_file = true;

if(typeof request_headers.query.exists == 'undefined'){
headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

const date = new Date();
const month = null;
const day = null;

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
<blackface><font color=e7ce4a size=+2>Garfield Comic Strip Reader</font></blackface>
<form>
<input type="hidden" name="exists" id="exists" Value=1>
<p></p>
<table cellapacing=0 cellpadding=0 width=100%><tr>
<td width=25%>Year: <input name=year id=year Value="` + date.getFullYear() + `" bgcolor=444444 text=ffdd33 cursor=cc9933 type=text asciionly size=4 maxlength=4></td>
<td width=25%>Month: <input name=month id=month Value="` + (date.getMonth() + 1).toLocaleString('en-US') + `" bgcolor=444444 text=ffdd33 cursor=cc9933 type=text asciionly size=2 maxlength=2></td>
<td width=25%>Date: <input name=date id=date Value="` + date.getDate().toLocaleString('en-US') + `" bgcolor=444444 text=ffdd33 cursor=cc9933 type=text asciionly size=2 maxlength=2></td>
</tr></table>
<br><br>
<!-- todo: figure out what counts as "modern-ish" (8/6/2000 is apparently not modern enough) -->
<input type=checkbox name=sunday value=true>Modern-ish Sunday Strip</input
<br>
<spacer type=block height=150 width=270></spacer>
<font color="#E7CE4A"><shadow>
<input type=reset borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Reset" usestyle>
<spacer type=block height=0 width=5></spacer>
<input type=submit borderimage="file://ROM/Borders/ButtonBorder2.bif" value="Go" usestyle>
</shadow></font>
</td>
</table>
</body>
</html>`;
} else {

// required for newer sunday comics
if (request_headers.query.sunday){
ext = '.jpg'
} else {
ext = '.gif'
}

// add a zero in front of single-digit months/days (required for the urls)
if (request_headers.query.month.length < 2) {
    month = "0" + request_headers.query.month
} else if (request_headers.query.month.length = 2){
    month = request_headers.query.month
}

if (request_headers.query.date.length < 2) {
    day = "0" + request_headers.query.date
} else if (request_headers.query.date.length = 2){
    day = request_headers.query.date
}

fulldate = request_headers.query.year.substring(2) + month + day
headers = `301 Moved Permanently
Connection: Keep-Alive
Location: http://picayune.uclick.com/comics/ga/` + request_headers.query.year + '/ga' + fulldate + ext + '?wtv-title=Strip for ' + month + '/' + day + '/' + request_headers.query.year

data = ''

}
