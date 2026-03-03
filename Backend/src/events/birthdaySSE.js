// Store all active SSE connections
const clients = new Set();

// When a user opens the dashboard, they connect here
function addClient(res) {
  // Set SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Add to active clients list
  clients.add(res);

  // Remove when user disconnects (closes tab/browser)
  res.on('close', () => {
    clients.delete(res);
  });
}

// Push birthday data to ALL connected users at once
function pushBirthdayAlert(birthdayList) {
  const data = JSON.stringify(birthdayList);

  clients.forEach(client => {
    client.write(`event: birthday\n`);
    client.write(`data: ${data}\n\n`);
  });
}

module.exports = { addClient, pushBirthdayAlert };