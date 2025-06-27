// TODO: come back to this when i'm not half-awake and figure out why it doesn't work

var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

var wtvc = new WTVCache(minisrv_config);

request_is_async = true; // Make us async

function renderPage(stockData) {
    // test function for stocks
    var ticker = "AAPL";

data = `
<html>
`;

try {
    if (stockData.results != null) {
        data += `<b><font color=#345463>&#128;</font>&nbsp;<p>${stockData.results[0].ticker}</p></b><br><spacer type=vertical height=18><p>${stockData.results[0].close_price}</p><br><br>`;
    } else {
        data += "Stock Quotes are temporarily unavailable.";
        console.log(" # Stock API is unavailable?");
    }
} catch (e) {
    data += "Stock Quotes are temporarily unavailable.";
    console.log("An error occured with the stocks API: " + e)
}

data = `
</html>
`;
return data;
}

(async () => {
    // Load the stock
    let stockData = await wtvc.getStockCache();
    sendToClient(
        socket,
        headers,
        renderPage(
            stockData,
        )
    );
})();
