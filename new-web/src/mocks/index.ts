export async function initializeMsw() {
  if (typeof window === "undefined") {
    const { server } = await import("./node");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    await worker.start();
  }
}
