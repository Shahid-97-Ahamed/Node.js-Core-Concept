const crypto = require("crypto");

console.log("\n MD5 Hash: ");

const md5Hash =crypto.createHash("md5").update("Shahid2890$@").digest("hex"); /*not recommended*/

console.log("Inpute: Shahid2890$@");
console.log("MD5 HashedPassword :",md5Hash);

/*for SHA256*/

const sha256Hash =crypto.createHash("sha256")
.update("Rumi9852")
.digest("hex");
console.log("input : Rumi9852");
console.log("SHA256 HashedPassword :",sha256Hash);

/*for SHA512*/

const sha512Hash =crypto
                .createHash("sha512")
                .update("Rumi9852")
                .digest("hex");

console.log("sha512 HashedPasswoed:");
console.log("sha512 :",sha512Hash)