const crypto = require("crypto");

//  Changed the Exports Module to CommonJS Standard

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;
  //  Eliminating Else Statements
  if (event) {
    if (!event.partitionKey) {
      const data = JSON.stringify(event);
      return (candidate = crypto
        .createHash("sha3-512")
        .update(data)
        .digest("hex"));
    }
    return (candidate = event.partitionKey);
  }

  // Instead of Else Statement we are introudicing a negation in IF
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    return candidate;
  }
};

module.exports = { deterministicPartitionKey };
