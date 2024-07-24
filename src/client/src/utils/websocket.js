export const connectWebSocket = (onMessage) => {
  const socket = new WebSocket('ws://localhost:3000');

  socket.onopen = () => {
      console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
  };

  socket.onerror = (error) => {
      console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
      console.log('WebSocket closed');
  };

  return socket;
};
