interface DecodedMessage {
  command: number;
  message: any;
}

function encodeMessage(command: number, message: object): Uint8Array {
  const numberBytes = new Uint8Array([command]);
  const messageBytes = new TextEncoder().encode(JSON.stringify(message));
  const result = new Uint8Array(numberBytes.length + messageBytes.length);
  result.set(numberBytes);
  result.set(messageBytes, numberBytes.length);
  return result;
}

async function decodeMessage(blob: Blob): Promise<DecodedMessage | null> {
  try {
    const buffer = await blob.arrayBuffer();
    const messageBytes = new Uint8Array(buffer);
    const command = messageBytes[0];
    const message = JSON.parse(new TextDecoder().decode(messageBytes.slice(1)));
    return { command, message };
  } catch (error) {
    console.error('Error decoding message:', error);
    return null;
  }
}

export { encodeMessage, decodeMessage };
