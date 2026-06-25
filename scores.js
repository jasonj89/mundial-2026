// scores.js
// Nightly update file for the World Cup tracker.
// Edit ONLY this file for new scores, then commit it to GitHub.

// Optional dashboard fields shown at the top of the site.
window.CURRENT_MATCHDAY = 'Jornada 3';
window.SCORE_LAST_UPDATED = '25 de junio de 2026';
window.TODAY_DATE = 25; // June day number for "Partidos de hoy".

// Add completed matches here.
// Format:
// { date: 24, team1: 'Equipo 1', team2: 'Equipo 2', score1: 2, score2: 1 },
// Use the Spanish team names exactly as they appear on the site.
window.SCORE_UPDATES = [
  // Corrections from original build
  { date: 17, team1: 'Uzbekistán', team2: 'Colombia', score1: 1, score2: 3 },
  { date: 18, team1: 'México', team2: 'Corea del Sur', score1: 1, score2: 0 },
  { date: 19, team1: 'Escocia', team2: 'Marruecos', score1: 0, score2: 1 },
  { date: 21, team1: 'España', team2: 'Arabia Saudita', score1: 4, score2: 0 },

  // Latest completed matches
  { date: 22, team1: 'Argentina', team2: 'Austria', score1: 2, score2: 0 },
  { date: 22, team1: 'Francia', team2: 'Irak', score1: 3, score2: 0 },
  { date: 22, team1: 'Noruega', team2: 'Senegal', score1: 3, score2: 2 },
  { date: 22, team1: 'Jordania', team2: 'Argelia', score1: 1, score2: 2 },
  { date: 23, team1: 'Portugal', team2: 'Uzbekistán', score1: 5, score2: 0 },
  { date: 23, team1: 'Inglaterra', team2: 'Ghana', score1: 0, score2: 0 },
  { date: 23, team1: 'Panamá', team2: 'Croacia', score1: 0, score2: 1 },
  { date: 23, team1: 'Colombia', team2: 'Congo', score1: 1, score2: 0 },
  { date: 24, team1: 'Suiza', team2: 'Canadá', score1: 2, score2: 1 },
  { date: 24, team1: 'Bosnia', team2: 'Catar', score1: 3, score2: 1 },
  { date: 24, team1: 'Marruecos', team2: 'Haití', score1: 4, score2: 2 },
  { date: 24, team1: 'Escocia', team2: 'Brasil', score1: 0, score2: 3 },
  { date: 24, team1: 'Sudáfrica', team2: 'Corea del Sur', score1: 1, score2: 0 },
  { date: 24, team1: 'Chequia', team2: 'México', score1: 0, score2: 3 },
];

// Teams that have qualified but whose exact bracket slot is not settled yet.
// These appear in the dashboard/standings, but they DO NOT fill the bracket.
window.QUALIFIED_TEAMS = [
  // 'México',
  // 'Suiza',
];

// Exact clinched bracket slots.
// Use this ONLY when a team has secured its exact group finish.
// These DO fill the bracket before the full group is complete.
// Examples: A1 = Group A winner, A2 = Group A runner-up, T1 = best third-place team #1.
window.CLINCHED_SLOTS = {
  // A1: 'México',
  // B1: 'Suiza',
  // B2: 'Canadá',
};

// Optional knockout score updates later in the tournament.
// Format examples:
// window.KNOCKOUT_SCORE_UPDATES = {
//   'r32_0': { s1: 2, s2: 1 },
//   'r16_0': { s1: 0, s2: 1 }
// };
window.KNOCKOUT_SCORE_UPDATES = {};
