async function decryptMessage(tx) {
  const data = await arweave.transactions.getData(tx.id, {decode: true, string: true});
  let message;
  try {
    message = JSON.parse(data);
  } catch (e) {
    message = {subject: tx.id, body: data};
  }
  return message;
}
