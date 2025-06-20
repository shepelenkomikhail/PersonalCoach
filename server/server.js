const crypto = require("crypto");
const http = require("http");

function generateSignature({ m_shop, m_orderid, m_amount, m_curr, m_desc, m_key }) {
    const signString = [m_shop, m_orderid, m_amount, m_curr, m_desc, m_key].join(":");
    return crypto.createHash("sha256").update(signString).digest("hex").toUpperCase();
}

const shopId = "2235028440";
const secretKey = "2235028440";


const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === "POST" && req.url === "/create-payment") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            console.log(body);

            const { amount, description } = JSON.parse(body);

            const m_orderid = "order_" + Date.now();
            const m_amount = parseFloat(amount).toFixed(2);
            const m_curr = "EUR";
            const m_desc = Buffer.from(description).toString("base64");

            const m_sign = generateSignature({
                m_shop: shopId,
                m_orderid,
                m_amount,
                m_curr,
                m_desc,
                m_key: secretKey
            });

            const payload = {
                m_shop: shopId,
                m_orderid,
                m_amount,
                m_curr,
                m_desc,
                m_sign
            };

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(payload));
        });
    } else {
        res.writeHead(404);
        res.end("Not found");
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


