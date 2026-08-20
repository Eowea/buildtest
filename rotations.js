/* =========================================================================
   ROTATION DES HÉROS GRATUITS

   Blizzard fait tourner les héros gratuits sur une boucle fixe : elle change
   les 1er, 8, 15 et 22 de chaque mois, soit 48 fenêtres qui se répètent
   d'année en année. Le calendrier est donc connu à l'avance et se calcule
   depuis la date du jour, sans aucun appel réseau.

   Chaque entrée vaut [mois, jour de début, [identifiants des héros]].
   Relevé sur icy-veins.com/heroes/free-to-play-hero-rotations.
   ========================================================================= */
const HERO_ROTATIONS = [
  [ 1,  1, ["muradin", "nazeebo", "raynor", "sonya", "uther", "ana", "luisaile", "jaina", "tyrael", "zeratul", "dva", "hanzo", "leoric", "medivh"]],
  [ 1,  8, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "arthas", "chromie", "dehaka", "kerrigan", "kharazim", "kelthuzad", "rexxar", "stukov", "lostvikings"]],
  [ 1, 15, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "auriel", "garrosh", "ragnaros", "valeera", "cassia", "malganis", "tassadar", "zuljin"]],
  [ 1, 22, ["muradin", "nazeebo", "raynor", "sonya", "uther", "alexstrasza", "blaze", "jaina", "malthael", "tychus", "anubarak", "mephisto", "nova", "tracer"]],
  [ 2,  1, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "falstad", "greymane", "lucio", "xul", "abathur", "alarak", "tyrande", "zarya"]],
  [ 2,  8, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "chromie", "diablo", "kerrigan", "rehgar", "azmodan", "junkrat", "medivh", "stukov"]],
  [ 2, 15, ["muradin", "nazeebo", "raynor", "sonya", "uther", "alexstrasza", "greymane", "jaina", "leoric", "varian", "deathwing", "qhira", "tassadar", "yrel"]],
  [ 2, 22, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "liming", "malganis", "mephisto", "tyrael", "arthas", "genji", "ltmorales", "samuro"]],
  [ 3,  1, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "dva", "garrosh", "valeera", "whitemane", "maiev", "nova", "probius", "sgthammer"]],
  [ 3,  8, ["muradin", "nazeebo", "raynor", "sonya", "uther", "blaze", "jaina", "kharazim", "lunara", "orphea", "ragnaros", "tyrande", "xul", "zarya"]],
  [ 3, 15, ["muradin", "nazeebo", "raynor", "sonya", "uther", "azmodan", "luisaile", "jaina", "kelthuzad", "rehgar", "medivh", "rexxar", "samuro", "valeera"]],
  [ 3, 22, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "garrosh", "malganis", "tassadar", "zuljin", "ana", "nova", "tracer", "zeratul"]],
  [ 4,  1, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "arthas", "auriel", "cassia", "mephisto", "greymane", "lucio", "qhira", "lostvikings"]],
  [ 4,  8, ["muradin", "nazeebo", "raynor", "sonya", "uther", "anubarak", "jaina", "malthael", "ragnaros", "stukov", "liming", "maiev", "sgthammer", "zarya"]],
  [ 4, 15, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "alexstrasza", "blaze", "hogger", "tychus", "tyrande", "alarak", "junkrat", "probius", "xul"]],
  [ 4, 22, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "dva", "illidan", "ltmorales", "lunara", "abathur", "guldan", "murky", "sylvanas"]],
  [ 5,  1, ["muradin", "nazeebo", "raynor", "sonya", "uther", "chen", "deckard", "falstad", "genji", "jaina", "kerrigan", "orphea", "stitches", "whitemane"]],
  [ 5,  8, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "anduin", "dehaka", "fenix", "hanzo", "imperius", "kelthuzad", "kharazim", "leoric", "yrel"]],
  [ 5, 15, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "azmodan", "luisaile", "chromie", "zuljin", "ana", "chogall", "gall", "rexxar"]],
  [ 5, 22, ["muradin", "nazeebo", "raynor", "sonya", "uther", "diablo", "jaina", "mephisto", "rehgar", "varian", "auriel", "cassia", "samuro", "tracer"]],
  [ 6,  1, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "greymane", "lucio", "malganis", "nova", "medivh", "qhira", "tassadar", "tyrael"]],
  [ 6,  8, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "arthas", "malthael", "rehgar", "sylvanas", "abathur", "ana", "azmodan", "garrosh"]],
  [ 6, 15, ["muradin", "nazeebo", "raynor", "sonya", "uther", "luisaile", "jaina", "leoric", "lunara", "stukov", "chromie", "hanzo", "kelthuzad", "rexxar"]],
  [ 6, 22, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "cassia", "dehaka", "malganis", "ragnaros", "tychus", "illidan", "rehgar", "tassadar", "varian"]],
  [ 7,  1, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "anubarak", "artanis", "auriel", "blaze", "zuljin", "alarak", "chen", "tracer", "xul"]],
  [ 7,  8, ["muradin", "nazeebo", "raynor", "sonya", "uther", "alexstrasza", "falstad", "jaina", "maiev", "zarya", "mephisto", "murky", "probius", "tyrande"]],
  [ 7, 15, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "diablo", "liming", "ltmorales", "lucio", "genji", "samuro", "sgthammer", "lostvikings"]],
  [ 7, 22, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "deckard", "junkrat", "orphea", "stitches", "chogall", "fenix", "gall", "whitemane"]],
  [ 8,  1, ["muradin", "nazeebo", "raynor", "sonya", "uther", "ana", "guldan", "jaina", "kharazim", "yrel", "imperius", "lunara", "medivh", "zeratul"]],
  [ 8,  8, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "luisaile", "dehaka", "dva", "rehgar", "tyrael", "abathur", "deathwing", "sylvanas", "valeera"]],
  [ 8, 15, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "azmodan", "garrosh", "hanzo", "nova", "chromie", "leoric", "rexxar", "stukov"]],
  [ 8, 22, ["muradin", "nazeebo", "raynor", "sonya", "uther", "arthas", "auriel", "jaina", "kelthuzad", "malthael", "cassia", "ragnaros", "tassadar", "tracer"]],
  [ 9,  1, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "alexstrasza", "anubarak", "dehaka", "greymane", "tychus", "malganis", "tyrande", "xul", "zuljin"]],
  [ 9,  8, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "falstad", "illidan", "lucio", "mephisto", "alarak", "murky", "sgthammer", "zarya"]],
  [ 9, 15, ["muradin", "nazeebo", "raynor", "sonya", "uther", "chen", "jaina", "liming", "ltmorales", "varian", "genji", "junkrat", "maiev", "orphea"]],
  [ 9, 22, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "blaze", "deckard", "dehaka", "fenix", "probius", "anduin", "guldan", "imperius", "stitches"]],
  [10,  1, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "diablo", "lunara", "sylvanas", "whitemane", "azmodan", "rehgar", "samuro", "yrel"]],
  [10,  8, ["muradin", "nazeebo", "raynor", "sonya", "uther", "ana", "luisaile", "jaina", "tyrael", "zeratul", "dva", "hanzo", "leoric", "medivh"]],
  [10, 15, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "arthas", "chromie", "dehaka", "kerrigan", "kharazim", "kelthuzad", "rexxar", "stukov", "lostvikings"]],
  [10, 22, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "auriel", "garrosh", "ragnaros", "valeera", "cassia", "malganis", "tassadar", "zuljin"]],
  [11,  1, ["muradin", "nazeebo", "raynor", "sonya", "uther", "alexstrasza", "blaze", "jaina", "malthael", "tychus", "anubarak", "mephisto", "nova", "tracer"]],
  [11,  8, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "falstad", "greymane", "lucio", "xul", "abathur", "alarak", "tyrande", "zarya"]],
  [11, 15, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "genji", "illidan", "liming", "ltmorales", "chogall", "gall", "maiev", "probius"]],
  [11, 22, ["muradin", "nazeebo", "raynor", "sonya", "uther", "chen", "deckard", "jaina", "junkrat", "sgthammer", "fenix", "imperius", "murky", "varian"]],
  [12,  1, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "anduin", "dehaka", "guldan", "orphea", "stitches", "dva", "lunara", "sylvanas", "yrel"]],
  [12,  8, ["etc", "kaelthas", "lili", "thebutcher", "zagara", "artanis", "diablo", "hanzo", "leoric", "whitemane", "chromie", "kerrigan", "kharazim", "tyrael"]],
  [12, 15, ["muradin", "nazeebo", "raynor", "sonya", "uther", "azmodan", "luisaile", "jaina", "kelthuzad", "rehgar", "medivh", "rexxar", "samuro", "valeera"]],
  [12, 22, ["gazlowe", "johanna", "malfurion", "thrall", "valla", "dehaka", "garrosh", "malganis", "tassadar", "zuljin", "ana", "nova", "tracer", "zeratul"]]
];
