document.getElementById('r').addEventListener('input', (e) => {
  socket.emit('r', {r: e.target.value}); 
});
document.getElementById('g').addEventListener('input', (e) => {
  socket.emit('g', {g: e.target.value}); 
});
document.getElementById('b').addEventListener('input', (e) => {
  socket.emit('b', {b: e.target.value}); 
});


document.getElementById('fill').addEventListener('click', (e) => {
  socket.emit('fill', 'fill'); 
  console.log('click');
});
document.getElementById('clear').addEventListener('click', (e) => {
  socket.emit('clear', 'clear'); 
  console.log('clear');
});