
function navigate(section) {
  const content = document.getElementById('content');
  if (section === 'dashboard') {
    content.innerHTML = '<h2>Dashboard</h2><p>Player stats and options will show here.</p>';
  } else if (section === 'inchat') {
    content.innerHTML = '<h2>INChat</h2><p>Live chat will load here...</p>';
  } else if (section === 'leaderboard') {
    content.innerHTML = '<h2>Leaderboard</h2><p>Top players listed here...</p>';
  }
}
