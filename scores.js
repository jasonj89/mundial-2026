// scores.js
// Nightly update file for the World Cup tracker.
// Edit ONLY this file for new scores, then commit it to GitHub.

// Optional dashboard fields shown at the top of the site.
window.CURRENT_MATCHDAY = 'Dieciseisavos de Final';
window.SCORE_LAST_UPDATED = '30 de junio de 2026';
window.TODAY_DATE = 30; // June day number for "Partidos de hoy".

// You can now use either Spanish team names OR short team codes.
// Codes are safer because they avoid accent/spelling issues.
// Examples:
// { date: 25, team1: 'TUR', team2: 'USA', score1: 3, score2: 2 },
// { date: 26, team1: 'Cabo Verde', team2: 'Arabia Saudita', score1: 0, score2: 0 },

window.SCORE_UPDATES = [
  // Corrections from original build
  { date: 17, team1: 'UZB', team2: 'COL', score1: 1, score2: 3 },
  { date: 18, team1: 'MEX', team2: 'KOR', score1: 1, score2: 0 },
  { date: 19, team1: 'SCO', team2: 'MAR', score1: 0, score2: 1 },
  { date: 21, team1: 'ESP', team2: 'KSA', score1: 4, score2: 0 },

  // Group stage: June 22
  { date: 22, team1: 'ARG', team2: 'AUT', score1: 2, score2: 0 },
  { date: 22, team1: 'FRA', team2: 'IRQ', score1: 3, score2: 0 },
  { date: 22, team1: 'NOR', team2: 'SEN', score1: 3, score2: 2 },
  { date: 22, team1: 'JOR', team2: 'DZA', score1: 1, score2: 2 },

  // Group stage: June 23
  { date: 23, team1: 'POR', team2: 'UZB', score1: 5, score2: 0 },
  { date: 23, team1: 'ENG', team2: 'GHA', score1: 0, score2: 0 },
  { date: 23, team1: 'PAN', team2: 'CRO', score1: 0, score2: 1 },
  { date: 23, team1: 'COL', team2: 'COD', score1: 1, score2: 0 },

  // Group stage: June 24
  { date: 24, team1: 'SUI', team2: 'CAN', score1: 2, score2: 1 },
  { date: 24, team1: 'BIH', team2: 'QAT', score1: 3, score2: 1 },
  { date: 24, team1: 'MAR', team2: 'HTI', score1: 4, score2: 2 },
  { date: 24, team1: 'SCO', team2: 'BRA', score1: 0, score2: 3 },
  { date: 24, team1: 'RSA', team2: 'KOR', score1: 1, score2: 0 },
  { date: 24, team1: 'CZE', team2: 'MEX', score1: 0, score2: 3 },

  // Group stage: June 25
  { date: 25, team1: 'CUW', team2: 'CIV', score1: 0, score2: 2 },
  { date: 25, team1: 'ECU', team2: 'GER', score1: 2, score2: 1 },
  { date: 25, team1: 'TUN', team2: 'NED', score1: 1, score2: 3 },
  { date: 25, team1: 'JPN', team2: 'SWE', score1: 1, score2: 1 },
  { date: 25, team1: 'TUR', team2: 'USA', score1: 3, score2: 2 },
  { date: 25, team1: 'PAR', team2: 'AUS', score1: 0, score2: 0 },

  // Group stage: June 26
  { date: 26, team1: 'NOR', team2: 'FRA', score1: 1, score2: 4 },
  { date: 26, team1: 'SEN', team2: 'IRQ', score1: 5, score2: 0 },
  { date: 26, team1: 'CPV', team2: 'KSA', score1: 0, score2: 0 },
  { date: 26, team1: 'URU', team2: 'ESP', score1: 0, score2: 1 },
  { date: 26, team1: 'NZL', team2: 'BEL', score1: 1, score2: 5 },
  { date: 26, team1: 'EGY', team2: 'IRI', score1: 1, score2: 1 },

  // Group stage: June 27
  { date: 27, team1: 'PAN', team2: 'ENG', score1: 0, score2: 2 },
  { date: 27, team1: 'CRO', team2: 'GHA', score1: 2, score2: 1 },
  { date: 27, team1: 'COL', team2: 'POR', score1: 0, score2: 0 },
  { date: 27, team1: 'COD', team2: 'UZB', score1: 3, score2: 1 },
  { date: 27, team1: 'DZA', team2: 'AUT', score1: 3, score2: 3 },
  { date: 27, team1: 'JOR', team2: 'ARG', score1: 1, score2: 3 },
];

// Teams that have qualified but whose exact bracket slot is not settled yet.
// These appear in the dashboard/standings, but they DO NOT fill the bracket.
window.QUALIFIED_TEAMS = [];

// Exact clinched bracket slots.
// Use this only when a team has secured its exact group finish before the group is complete.
// Examples: A1 = Group A winner, A2 = Group A runner-up.
window.CLINCHED_SLOTS = {};

// Knockout score updates.
// Preferred format: use team codes. score1/score2 = match goals, pen1/pen2 = penalty shootout goals.
// Penalty fields are only needed when the match score is tied after play.
window.KNOCKOUT_SCORE_UPDATES = [
  { round: 'r32', team1: 'RSA', team2: 'CAN', score1: 0, score2: 1 },
  { round: 'r32', team1: 'BRA', team2: 'JPN', score1: 2, score2: 1 },
  { round: 'r32', team1: 'GER', team2: 'PAR', score1: 1, score2: 1, pen1: 3, pen2: 4 },
  { round: 'r32', team1: 'NED', team2: 'MAR', score1: 1, score2: 1, pen1: 2, pen2: 3 },
  { round: 'r32', team1: 'CIV', team2: 'NOR', score1: 1, score2: 2 },
  { round: 'r32', team1: 'FRA', team2: 'SWE', score1: 3, score2: 0 },
];
