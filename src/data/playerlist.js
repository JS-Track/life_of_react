const players =  [
  {
    "identifier": 1003,
    "first_name": "Hector",
    "last_name": "Bellerin",
    "team": "Arsenal",
    "position": "Defender",
    "image": "hectorbellerin.jpg"
  },
  {
    "identifier": 1101,
    "first_name": "Petr",
    "last_name": "Cech",
    "team": "Arsenal",
    "position": "Goalkeeper",
    "image": "petrcech.jpg"
  },
  {
    "identifier": 1402,
    "first_name": "Olivier",
    "last_name": "Giroud",
    "team": "Arsenal",
    "position": "Striker",
    "image": "oliviergiroud.jpg"
  },
  {
    "identifier": 1027,
    "first_name": "Alex",
    "last_name": "Iwobi",
    "team": "Arsenal",
    "position": "Midfielder 2",
    "image": "alexiwobi.jpg"
  },
  {
    "identifier": 1009,
    "first_name": "Laurent",
    "last_name": "Koscielny",
    "team": "Arsenal",
    "position": "Defender",
    "image": "laurentkoscielny.jpg"
  },
  {
    "identifier": 1033,
    "first_name": "Mesut",
    "last_name": "Ozil",
    "team": "Arsenal",
    "position": "Midfielder 1",
    "image": "mesutozil.jpg"
  },
  {
    "identifier": 1048,
    "first_name": "Alexis",
    "last_name": "Sanchez",
    "team": "Arsenal",
    "position": "Striker",
    "image": "alexissanchez.jpg"
  },
  {
    "identifier": 1041,
    "first_name": "Theo",
    "last_name": "Walcott",
    "team": "Arsenal",
    "position": "Midfielder 2",
    "image": "theowalcott.jpg"
  },
  {
    "identifier": 1404,
    "first_name": "Marcos",
    "last_name": "Alonso",
    "team": "Chelsea",
    "position": "Defender",
    "image": "marcosalonso.jpg"
  },
  {
    "identifier": 1201,
    "first_name": "Cesar",
    "last_name": "Azpilicueta",
    "team": "Chelsea",
    "position": "Defender",
    "image": "cesarazpilicueta.jpg"
  },
  {
    "identifier": 1304,
    "first_name": "Gary",
    "last_name": "Cahill",
    "team": "Chelsea",
    "position": "Defender",
    "image": "garycahill.jpg"
  },
  {
    "identifier": 1043,
    "first_name": "Diego",
    "last_name": "Costa",
    "team": "Chelsea",
    "position": "Striker",
    "image": "diegocosta.jpg"
  },
  {
    "identifier": 1016,
    "first_name": "Thibaut",
    "last_name": "Courtois",
    "team": "Chelsea",
    "position": "Goalkeeper",
    "image": "thibautcourtois.jpg"
  },
  {
    "identifier": 1026,
    "first_name": "Eden",
    "last_name": "Hazard",
    "team": "Chelsea",
    "position": "Midfielder 1",
    "image": "edenhazard.jpg"
  },
  {
    "identifier": 1104,
    "first_name": "Nemanja",
    "last_name": "Matic",
    "team": "Chelsea",
    "position": "Midfielder 2",
    "image": "nemanjamatic.jpg"
  },
  {
    "identifier": 1032,
    "first_name": "Victor",
    "last_name": "Moses",
    "team": "Chelsea",
    "position": "Midfielder 2",
    "image": "victormoses.jpg"
  },
  {
    "identifier": 1701,
    "last_name": "Willian",
    "team": "Chelsea",
    "position": "Midfielder 1",
    "image": "willian.jpg"
  },
  {
    "identifier": 1103,
    "first_name": "Christian",
    "last_name": "Benteke",
    "team": "Crystal Palace",
    "position": "Striker",
    "image": "christianbenteke.jpg"
  },
  {
    "identifier": 1038,
    "first_name": "Daniel",
    "last_name": "Amartey",
    "team": "Leicester",
    "position": "Midfielder 2",
    "image": "danielamartey.jpg"
  },
  {
    "identifier": 1007,
    "first_name": "Robert",
    "last_name": "Huth",
    "team": "Leicester",
    "position": "Defender",
    "image": "roberthuth.jpg"
  },
  {
    "identifier": 1029,
    "first_name": "Riyad",
    "last_name": "Mahrez",
    "team": "Leicester",
    "position": "Midfielder 2",
    "image": "riyadmahrez.jpg"
  },
  {
    "identifier": 1012,
    "first_name": "Wes",
    "last_name": "Morgan",
    "team": "Leicester",
    "position": "Defender",
    "image": "wesmorgan.jpg"
  },
  {
    "identifier": 2306,
    "first_name": "Kasper",
    "last_name": "Schmeichel",
    "team": "Leicester",
    "position": "Goalkeeper",
    "image": "kasperschmeichel.jpg"
  },
  {
    "identifier": 1049,
    "first_name": "Islam",
    "last_name": "Slimani",
    "team": "Leicester",
    "position": "Striker",
    "image": "islamslimani.jpg"
  },
  {
    "identifier": 1302,
    "first_name": "Jamie",
    "last_name": "Vardy",
    "team": "Leicester",
    "position": "Striker",
    "image": "jamievardy.jpg"
  },
  {
    "identifier": 1042,
    "first_name": "Sergio",
    "last_name": "Aguero",
    "team": "Manchester City",
    "position": "Striker",
    "image": "sergioaguero.jpg"
  },
  {
    "identifier": 1015,
    "first_name": "Claudio",
    "last_name": "Bravo",
    "team": "Manchester City",
    "position": "Goalkeeper",
    "image": "claudiobravo.jpg"
  },
  {
    "identifier": 1703,
    "first_name": "Gael",
    "last_name": "Clichy",
    "team": "Manchester City",
    "position": "Defender",
    "image": "gaelclichy.jpg"
  },
  {
    "identifier": 1203,
    "first_name": "Kevin",
    "last_name": "De Bruyne",
    "team": "Manchester City",
    "position": "Midfielder 2",
    "image": "kevindebruyne.jpg"
  },
  {
    "identifier": 1045,
    "first_name": "Kelechi",
    "last_name": "Iheanacho",
    "team": "Manchester City",
    "position": "Striker",
    "image": "kelechiiheanacho.jpg"
  },
  {
    "identifier": 2200,
    "first_name": "Gabriel",
    "last_name": "Jesus",
    "team": "Manchester City",
    "position": "Striker",
    "image": "gabrieljesus.jpg"
  },
  {
    "identifier": 1008,
    "first_name": "Aleksandar",
    "last_name": "Kolarov",
    "team": "Manchester City",
    "position": "Defender",
    "image": "aleksandarkolarov.jpg"
  },
  {
    "identifier": 2201,
    "first_name": "Leroy",
    "last_name": "Sane",
    "team": "Manchester City",
    "position": "Midfielder 1",
    "image": "leroysane.jpg"
  },
  {
    "identifier": 1040,
    "first_name": "David",
    "last_name": "Silva",
    "team": "Manchester City",
    "position": "Midfielder 1",
    "image": "davidsilva.jpg"
  },
  {
    "identifier": 1036,
    "first_name": "Raheem",
    "last_name": "Sterling",
    "team": "Manchester City",
    "position": "Midfielder 2",
    "image": "raheemsterling.jpg"
  },
  {
    "identifier": 1500,
    "first_name": "Yaya",
    "last_name": "Toure",
    "team": "Manchester City",
    "position": "Midfielder 1",
    "image": "yayatoure.jpg"
  },
  {
    "identifier": 1001,
    "first_name": "Eric",
    "last_name": "Bailly",
    "team": "Manchester United",
    "position": "Defender",
    "image": "ericbailly.jpg"
  },
  {
    "identifier": 1017,
    "first_name": "David",
    "last_name": "De Gea",
    "team": "Manchester United",
    "position": "Goalkeeper",
    "image": "daviddegea.jpg"
  },
  {
    "identifier": 1706,
    "first_name": "Ander",
    "last_name": "Herrera",
    "team": "Manchester United",
    "position": "Midfielder 1",
    "image": "anderherrera.jpg"
  },
  {
    "identifier": 1044,
    "first_name": "Zlatan",
    "last_name": "Ibrahimovic",
    "team": "Manchester United",
    "position": "Striker",
    "image": "zlatanibrahimovic.jpg"
  },
  {
    "identifier": 1705,
    "first_name": "Phil",
    "last_name": "Jones",
    "team": "Manchester United",
    "position": "Defender",
    "image": "philjones.jpg"
  },
  {
    "identifier": 1031,
    "first_name": "Juan",
    "last_name": "Mata",
    "team": "Manchester United",
    "position": "Midfielder 1",
    "image": "juanmata.jpg"
  },
  {
    "identifier": 2202,
    "first_name": "Henrikh",
    "last_name": "Mkhitaryan",
    "team": "Manchester United",
    "position": "Midfielder 2",
    "image": "henrikhmkhitaryan.jpg"
  },
  {
    "identifier": 1034,
    "first_name": "Paul",
    "last_name": "Pogba",
    "team": "Manchester United",
    "position": "Midfielder 2",
    "image": "paulpogba.jpg"
  },
  {
    "identifier": 1204,
    "first_name": "Marcus",
    "last_name": "Rashford",
    "team": "Manchester United",
    "position": "Striker",
    "image": "marcusrashford.jpg"
  },
  {
    "identifier": 1704,
    "first_name": "Antonio",
    "last_name": "Valencia",
    "team": "Manchester United",
    "position": "Defender",
    "image": "antoniovalencia.jpg"
  },
  {
    "identifier": 1709,
    "first_name": "Joe",
    "last_name": "Allen",
    "team": "Stoke",
    "position": "Midfielder 1",
    "image": "joeallen.jpg"
  },
  {
    "identifier": 2001,
    "first_name": "Marko",
    "last_name": "Arnautovic",
    "team": "Stoke",
    "position": "Midfielder 2",
    "image": "markoarnautovic.jpg"
  },
  {
    "identifier": 2002,
    "first_name": "Peter",
    "last_name": "Crouch",
    "team": "Stoke",
    "position": "Striker",
    "image": "petercrouch.jpg"
  },
  {
    "identifier": 2307,
    "first_name": "Erik",
    "last_name": "Pieters",
    "team": "Stoke",
    "position": "Defender",
    "image": "erikpieters.jpg"
  },
  {
    "identifier": 2308,
    "first_name": "Ryan",
    "last_name": "Shawcross",
    "team": "Stoke",
    "position": "Defender",
    "image": "ryanshawcross.jpg"
  },
  {
    "identifier": 1000,
    "first_name": "Toby",
    "last_name": "Alderweireld",
    "team": "Tottenham",
    "position": "Defender",
    "image": "tobyalderweireld.jpg"
  },
  {
    "identifier": 1401,
    "first_name": "Dele",
    "last_name": "Alli",
    "team": "Tottenham",
    "position": "Midfielder 1",
    "image": "delealli.jpg"
  },
  {
    "identifier": 2310,
    "first_name": "Eric",
    "last_name": "Dier",
    "team": "Tottenham",
    "position": "Midfielder 2",
    "image": "ericdier.jpg"
  },
  {
    "identifier": 1208,
    "first_name": "Christian",
    "last_name": "Eriksen",
    "team": "Tottenham",
    "position": "Midfielder 2",
    "image": "christianeriksen.jpg"
  },
  {
    "identifier": 1209,
    "first_name": "Harry",
    "last_name": "Kane",
    "team": "Tottenham",
    "position": "Striker",
    "image": "harrykane.jpg"
  },
  {
    "identifier": 1018,
    "first_name": "Hugo",
    "last_name": "Lloris",
    "team": "Tottenham",
    "position": "Goalkeeper",
    "image": "hugolloris.jpg"
  },
  {
    "identifier": 1035,
    "first_name": "Heung-Min",
    "last_name": "Son",
    "team": "Tottenham",
    "position": "Midfielder 1",
    "image": "heung-minson.jpg"
  },
  {
    "identifier": 1014,
    "first_name": "Kyle",
    "last_name": "Walker",
    "team": "Tottenham",
    "position": "Defender",
    "image": "kylewalker.jpg"
  },
  {
    "identifier": 1037,
    "first_name": "Victor",
    "last_name": "Wanyama",
    "team": "Tottenham",
    "position": "Midfielder 1",
    "image": "victorwanyama.jpg"
  },
  {
    "identifier": 1021,
    "first_name": "Nacer",
    "last_name": "Chadli",
    "team": "West Brom",
    "position": "Midfielder 2",
    "image": "nacerchadli.jpg"
  },
  {
    "identifier": 1006,
    "first_name": "Jonny",
    "last_name": "Evans",
    "team": "West Brom",
    "position": "Defender",
    "image": "jonnyevans.jpg"
  },
  {
    "identifier": 2311,
    "first_name": "Ben",
    "last_name": "Foster",
    "team": "West Brom",
    "position": "Goalkeeper",
    "image": "benfoster.jpg"
  },
  {
    "identifier": 1011,
    "first_name": "Gareth",
    "last_name": "McAuley",
    "team": "West Brom",
    "position": "Defender",
    "image": "garethmcauley.jpg"
  },
  {
    "identifier": 1707,
    "first_name": "Matt",
    "last_name": "Phillips",
    "team": "West Brom",
    "position": "Midfielder 1",
    "image": "mattphillips.jpg"
  },
  {
    "identifier": 1047,
    "first_name": "Salomon",
    "last_name": "Rondon",
    "team": "West Brom",
    "position": "Striker",
    "image": "salomonrondon.jpg"
  }
]


export default players