const { execSync } = require("child_process");

const output = execSync("node hola_mundo.js").toString().trim();

if (output === "¡Hola Mundo!") {
    console.log("✅ Test passed");
} else {
    console.error("❌ Test failed");
    process.exit(1);
}