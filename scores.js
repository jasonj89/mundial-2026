// scores.js
// Nightly update file for the World Cup tracker.
// Edit ONLY this file for new scores, then commit it to GitHub.
//
// Format:
// { date: 24, team1: 'Team 1', team2: 'Team 2', score1: 2, score2: 1 },
//
// Use the team names exactly as they appear on the site when possible.
// You can add new lines at the bottom as matches are completed.

window.SCORE_UPDATES = [
  // Corrections from original build
  { date: 17, team1: 'Uzbekistán', team2: 'Colombia', score1: 1, score2: 3 },
  { date: 18, team1: 'México', team2: 'Corea del Sur', score1: 1, score2: 0 },
  { date: 19, team1: 'Escocia', team2: 'Marruecos', score1: 0, score2: 1 },
  { date: 21, team1: 'España', team2: 'Arabia Saudita', score1: 4, score2: 0 },

  // Add new completed matches below this line.
  // Example:
  // { date: 24, team1: 'Suiza', team2: 'Canadá', score1: 2, score2: 1 },
];

// Optional knockout score updates later in the tournament.
// Usually you can leave this empty.
// Format examples:
// window.KNOCKOUT_SCORE_UPDATES = {
//   'r32_0': { s1: 2, s2: 1 },
//   'r16_0': { s1: 0, s2: 1 }
// };
window.KNOCKOUT_SCORE_UPDATES = {};
