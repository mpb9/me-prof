// const playersUrl = '/static/ALL_PLAYERS.json';

// export const fetchAllPlayerData = async () => {
//   try {
//     const response = await fetch(playersUrl);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error('Error fetching player data:', err);
//   }
// };

export const generatePlayer = (playerIds, points, starters, ir, taxi) => {
  return playerIds.map((playerId) => {
    const player_name = ACTIVE_PLAYERS.find((player) => player[0] === playerId)[1];
    const player_points = points[playerId];

    if (starters.includes(playerId)) {
      return [playerId, player_name, player_points, 'starter'];
    } else if (ir.includes(playerId)) {
      return [playerId, player_name, player_points, 'ir'];
    } else if (taxi.includes(playerId)) {
      return [playerId, player_name, player_points, 'taxi'];
    }
    return [playerId, player_name, player_points, 'bench'];
  });
};

export const ACTIVE_PLAYERS = [
  ['11640', 'Jermaine Burton'],
  ['6819', 'Michael Pittman'],
  ['11619', "Ja'Lynn Polk"],
  ['9502', 'Tank Dell'],
  ['10235', 'Roschon Johnson'],
  ['11834', 'Devaughn Vele'],
  ['6803', 'Brandon Aiyuk'],
  ['8144', 'Chris Olave'],
  ['1067', 'Marvin Jones'],
  ['9224', 'Chase Brown'],
  ['11637', 'Keon Coleman'],
  ['11603', 'AJ Barner'],
  ['8280', 'Nik Bonitto'],
  ['5041', 'Fred Warner'],
  ['2306', 'Jameis Winston'],
  ['11628', 'Marvin Harrison'],
  ['NO', 'Saints'],
  ['9229', 'Anthony Richardson'],
  ['2374', 'Tyler Lockett'],
  ['5022', 'Dallas Goedert'],
  ['4983', 'DJ Moore'],
  ['4866', 'Saquon Barkley'],
  ['7021', 'Rico Dowdle'],
  ['4881', 'Lamar Jackson'],
  ['9486', 'Dontayvion Wicks'],
  ['8110', 'Jake Ferguson'],
  ['8205', 'Isiah Pacheco'],
  ['4037', 'Chris Godwin'],
  ['9998', 'Hendon Hooker'],
  ['8147', 'John Metchie'],
  ['PIT', 'Steelers'],
  ['11620', 'Rome Odunze'],
  ['6904', 'Jalen Hurts'],
  ['5844', 'T.J. Hockenson'],
  ['4666', 'Younghoe Koo'],
  ['BAL', 'Ravens'],
  ['7526', 'Jaylen Waddle'],
  ['7608', 'Khalil Herbert'],
  ['8111', 'Cade Otton'],
  ['11574', 'Dylan Laube'],
  ['8138', 'James Cook'],
  ['421', 'Matthew Stafford'],
  ['19', 'Joe Flacco'],
  ['11439', 'Jaleel McLaughlin'],
  ['9487', 'Parker Washington'],
  ['6788', 'Xavier McKinney'],
  ['5849', 'Kyler Murray'],
  ['9753', 'Zach Charbonnet'],
  ['1466', 'Travis Kelce'],
  ['4098', 'Kareem Hunt'],
  ['5045', 'Courtland Sutton'],
  ['5012', 'Mark Andrews'],
  ['11626', 'Xavier Legette'],
  ['9225', 'Tank Bigsby'],
  ['11646', 'Jalen Coker'],
  ['4199', 'Aaron Jones'],
  ['11583', 'Jonathon Brooks'],
  ['5892', 'David Montgomery'],
  ['11631', 'Brian Thomas'],
  ['2449', 'Stefon Diggs'],
  ['11581', 'MarShawn Lloyd'],
  ['7547', 'Amon-Ra St. Brown'],
  ['187', 'Thomas Davis'],
  ['1945', 'Chris Boswell'],
  ['9509', 'Bijan Robinson'],
  ['5248', 'Gus Edwards'],
  ['11655', 'Tyrone Tracy'],
  ['ATL', 'Falcons'],
  ['8142', 'Alec Pierce'],
  ['8130', 'Trey McBride'],
  ['4981', 'Calvin Ridley'],
  ['10226', 'Andrei Iosivas'],
  ['9493', 'Puka Nacua'],
  ['3198', 'Derrick Henry'],
  ['8132', 'Tyler Allgeier'],
  ['LAC', 'Chargers'],
  ['8146', 'Garrett Wilson'],
  ['9228', 'Bryce Young'],
  ['9501', 'DeMario Douglas'],
  ['4046', 'Patrick Mahomes'],
  ['1339', 'Zach Ertz'],
  ['IND', 'Colts'],
  ['10232', 'Michael Wilson'],
  ['11635', 'Ladd McConkey'],
  ['6130', 'Devin Singletary'],
  ['11647', 'Kimani Vidal'],
  ['10222', 'Jayden Reed'],
  ['4943', 'Sam Darnold'],
  ['7828', 'Noah Gray'],
  ['3294', 'Dak Prescott'],
  ['4033', 'David Njoku'],
  ['9756', 'Jordan Addison'],
  ['11566', 'Jayden Daniels'],
  ['5850', 'Josh Jacobs'],
  ['8139', 'Zamir White'],
  ['11539', 'Jake Bates'],
  ['DEN', 'Broncos'],
  ['8126', "Wan'Dale Robinson"],
  ['11562', 'Spencer Rattler'],
  ['8228', 'Jaylen Warren'],
  ['7600', 'Pat Freiermuth'],
  ['8123', 'Hassan Haskins'],
  ['8121', 'Romeo Doubs'],
  ['8150', 'Kyren Williams'],
  ['DET', 'Lions'],
  ['7571', 'Rashod Bateman'],
  ['9508', 'Tyjae Spears'],
  ['9221', 'Jahmyr Gibbs'],
  ['10866', "Aidan O'Connell"],
  ['4993', 'Mike Gesicki'],
  ['10229', 'Rashee Rice'],
  ['8676', 'Rashid Shaheed'],
  ['3214', 'Hunter Henry'],
  ['11596', 'Ben Sinnott'],
  ['4070', 'T.J. Watt'],
  ['2216', 'Mike Evans'],
  ['3321', 'Tyreek Hill'],
  ['11586', 'Blake Corum'],
  ['7596', 'Elijah Moore'],
  ['11597', 'Theo Johnson'],
  ['7569', 'Nico Collins'],
  ['4988', 'Nick Chubb'],
  ['9506', 'Sean Tucker'],
  ['5872', 'Deebo Samuel'],
  ['11618', 'Jalen McMillan'],
  ['6797', 'Justin Herbert'],
  ['7564', "Ja'Marr Chase"],
  ['4528', 'Trevor Knight'],
  ['7496', 'Nick Westbrook-Ikhine'],
  ['6804', 'Jordan Love'],
  ['6768', 'Tua Tagovailoa'],
  ['1373', 'Geno Smith'],
  ['6790', "D'Andre Swift"],
  ['8136', 'Rachaad White'],
  ['9504', 'Kayshon Boutte'],
  ['6813', 'Jonathan Taylor'],
  ['11575', 'Ray Davis'],
  ['5001', 'Dalton Schultz'],
  ['11604', 'Brock Bowers'],
  ['1426', 'DeAndre Hopkins'],
  ['9227', 'Israel Abanikanda'],
  ['9758', 'C.J. Stroud'],
  ['4035', 'Alvin Kamara'],
  ['3451', "Ka'imi Fairbairn"],
  ['4984', 'Josh Allen'],
  ['11625', 'Adonai Mitchell'],
  ['9754', 'Quentin Johnston'],
  ['7670', 'Joshua Palmer'],
  ['9757', 'Kendre Miller'],
  ['5927', 'Terry McLaurin'],
  ['6845', 'Zack Moss'],
  ['1386', 'Giovani Bernard'],
  ['8151', 'Kenneth Walker'],
  ['8183', 'Brock Purdy'],
  ['8148', 'Jameson Williams'],
  ['GB', 'Packers'],
  ['3163', 'Jared Goff'],
  ['5848', 'Hollywood Brown'],
  ['11632', 'Malik Nabers'],
  ['8112', 'Drake London'],
  ['11627', 'Troy Franklin'],
  ['9226', "De'Von Achane"],
  ['3973', 'Myles Garrett'],
  ['5859', 'A.J. Brown'],
  ['11577', 'Will Shipley'],
  ['8143', 'Jerome Ford'],
  ['11650', 'Luke McCaffrey'],
  ['8408', 'Jordan Mason'],
  ['11638', 'Ricky Pearsall'],
  ['9999', 'Will Levis'],
  ['4892', 'Baker Mayfield'],
  ['10859', 'Sam LaPorta'],
  ['6801', 'Tee Higgins'],
  ['8154', 'Brian Robinson'],
  ['11571', 'Isaiah Davis'],
  ['8134', 'Khalil Shakir'],
  ['11579', 'Audric Estime'],
  ['7553', 'Kyle Pitts'],
  ['6786', 'CeeDee Lamb'],
  ['11533', 'Brandon Aubrey'],
  ['8155', 'Breece Hall'],
  ['5846', 'DK Metcalf'],
  ['7527', 'Mac Jones'],
  ['8210', 'Chig Okonkwo'],
  ['10871', 'Luke Schoonmaker'],
  ['9482', 'Michael Mayer'],
  ['7594', 'Chuba Hubbard'],
  ['4144', 'Jonnu Smith'],
  ['SF', '49ers'],
  ['PHI', 'Eagles'],
  ['4018', 'Joe Mixon'],
  ['3160', 'Jalen Ramsey'],
  ['7567', 'Kenneth Gainwell'],
  ['3678', 'Wil Lutz'],
  ['1234', 'Russell Wilson'],
  ['4217', 'George Kittle'],
  ['4039', 'Cooper Kupp'],
  ['11624', 'Xavier Worthy'],
  ['6770', 'Joe Burrow'],
  ['11559', 'Michael Penix'],
  ['1689', 'Adam Thielen'],
  ['8220', 'Sincere McCormick'],
  ['11565', 'J.J. McCarthy'],
  ['4066', 'Evan Engram'],
  ['7591', 'Justin Fields'],
  ['4034', 'Christian McCaffrey'],
  ['11576', 'Braelon Allen'],
  ['5987', 'Alexander Mattison'],
  ['11630', 'Roman Wilson'],
  ['5947', 'Jakobi Meyers'],
  ['8167', 'Christian Watson'],
  ['4137', 'James Conner'],
  ['96', 'Aaron Rodgers'],
  ['2133', 'Davante Adams'],
  ['11589', 'Trey Benson'],
  ['1166', 'Kirk Cousins'],
  ['4574', 'Cooper Rush'],
  ['7561', 'Elijah Mitchell'],
  ['9488', 'Jaxon Smith-Njigba'],
  ['7049', 'Jauan Jennings'],
  ['5995', 'Justice Hill'],
  ['4054', 'Mo Alie-Cox'],
  ['6783', 'Jerry Jeudy'],
  ['7588', 'Javonte Williams'],
  ['11564', 'Drake Maye'],
  ['6806', 'J.K. Dobbins'],
  ['KC', 'Chiefs'],
  ['11643', 'Jaylen Wright'],
  ['5095', 'Daniel Carlson'],
  ['11560', 'Caleb Williams'],
  ['8162', 'Sam Howell'],
  ['7528', 'Najee Harris'],
  ['9997', 'Zay Flowers'],
  ['9500', 'Josh Downs'],
  ['6938', 'Cam Akers'],
  ['11600', "Ja'Tavion Sanders"],
  ['6794', 'Justin Jefferson'],
  ['7611', 'Rhamondre Stevenson'],
  ['BUF', 'Bills'],
  ['4950', 'Christian Kirk'],
  ['7543', 'Travis Etienne'],
  ['11563', 'Bo Nix'],
  ['6943', 'Gabe Davis'],
  ['6826', 'Cole Kmet'],
  ['10236', 'Dalton Kincaid'],
  ['4381', 'Taysom Hill'],
  ['1479', 'Keenan Allen'],
  ['7090', 'Darnell Mooney'],
  ['10444', 'Cedric Tillman'],
  ['2028', 'Derek Carr'],
  ['7525', 'DeVonta Smith'],
  ['7329', 'Cole Christiansen'],
  ['7523', 'Trevor Lawrence'],
  ['5967', 'Tony Pollard'],
  ['2309', 'Amari Cooper'],
  ['5991', 'Maxx Crosby'],
  ['9511', 'Keaton Mitchell'],
  ['4663', 'Austin Ekeler'],
  ['9484', 'Tucker Kraft'],
  ['8137', 'George Pickens'],
  ['11651', 'Isaac Guerendo'],
  ['8131', 'Isaiah Likely'],
  ['5870', 'Daniel Jones'],
  ['4227', 'Harrison Butker'],
  ['11584', 'Bucky Irving'],
];
