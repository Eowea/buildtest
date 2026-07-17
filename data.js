const APP_CONFIG = {
  "showGuideBadge": false
};

const STREAMER_CONFIG = {
  "siteTitle": {
    "fr": "Eowea builds",
    "en": "Eowea builds"
  },
  "siteSubtitle": {
    "fr": "Recherche le build du héros qui t'intéresse grâce à la barre de recherche, aux filtres ou en cliquant dans la liste. Passe ton curseur sur les sorts et talents pour un descriptif écrit et vidéo.",
    "en": "Search for the hero build you're interested in using the search bar, filters, or by clicking in the list. Hover over spells and talents for a written and video description."
  },
  "twitchChannel": "eowea",
  "socials": [
    {
      "label": "Twitch",
      "url": "https://www.twitch.tv/eowea",
      "icon": "twitch"
    },
    {
      "label": "YouTube",
      "url": "https://www.youtube.com/@eowea?sub_confirmation=1",
      "icon": "youtube"
    },
    {
      "label": "X",
      "url": "https://x.com/eowea_",
      "icon": "x"
    },
    {
      "label": "Discord",
      "url": "https://discord.gg/KTAKdKUe5g",
      "icon": "discord"
    },
    {
      "label": "Ko-fi",
      "url": "https://ko-fi.com/eowea",
      "icon": "kofi"
    }
  ]
};

const HEROES = [
  {
    "id": "kaelthas",
    "enabled": true,
    "name": {
      "fr": "Kael'thas",
      "en": "Kael'thas"
    },
    "role": "AssassinDistance",
    "isNew": true,
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_kaelthas.png",
    "headline": {
      "fr": "Dégâts de zone massifs, punition des regroupements et contrôle puissant.",
      "en": "Massive AoE damage, group punishment, and strong crowd control."
    },
    "gameplay": {
      "fr": "Kael'thas est le maître du zoning. En utilisant ses Sphères verdoyantes (Trait), il peut booster ses sorts pour infliger plus de dégâts, étendre ses zones d'effet ou étourdir plusieurs cibles.",
      "en": "Kael'thas is the master of zoning. By using Verdant Spheres (Trait), he can empower his spells to deal more damage, increase area of effect, or stun multiple targets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Sphères verdoyantes",
          "en": "Verdant Spheres"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_verdantspheres.png",
        "description": {
          "fr": "Activez pour que votre prochain sort de base soit plus puissant.",
          "en": "Activate to empower your next basic spell."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Choc de flammes",
          "en": "Flamestrike"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_flamestrike.png",
        "description": {
          "fr": "Explosion de zone après un court délai.",
          "en": "AoE explosion after a short delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Bombe vivante",
          "en": "Living Bomb"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_livingbomb.png",
        "description": {
          "fr": "Dégâts sur la durée qui explosent et se propagent aux ennemis proches.",
          "en": "DoT that explodes and spreads to nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Rupture de gravité",
          "en": "Gravity Lapse"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_gravitylapse.png",
        "description": {
          "fr": "Étourdit le premier ennemi touché (jusqu'à 3 avec le Trait).",
          "en": "Stuns the first enemy hit (up to 3 with Trait)."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Phénix",
          "en": "Phoenix"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_phoenix.png",
        "description": {
          "fr": "Invoque un phénix qui inflige des dégâts de zone constants.",
          "en": "Summons a phoenix that deals constant AoE damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Explosion pyrotechnique",
          "en": "Pyroblast"
        },
        "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_pyroblast.png",
        "description": {
          "fr": "Lance une énorme boule de feu lente mais dévastatrice.",
          "en": "Casts a massive, slow, but devastating fireball."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Utilise ton Trait (D) avant Bombe vivante (Z) pour consommer un minimum de mana.",
        "en": "Use your Trait (D) before Living Bomb (W) to consume no mana."
      },
      {
        "fr": "L'augmentation du Choc de Flamme grâce à ton trait n'augmente que sa zone d'effet, pas ses dégâts.",
        "en": "The Flamestrike (Q) empowerment from your Trait only increases its area of effect, not its damage."
      },
      {
        "fr": "La Rupture de gravité (E) boostée par le Trait est vitale pour stopper un plongeon (dive) de plusieurs ennemis ou suivre de très loin ton tank.",
        "en": "Trait-empowered Gravity Lapse (E) is vital for stopping a multi-enemy dive or following up your tank from a distance."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommended Build (Poke)"
        },
        "summary": {
          "fr": "Le meilleur build, tout simplement.",
          "en": "The best build, plain and simple."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T3111124,Kaelthas]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Accro au mana",
              "en": "Mana Addict"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/talents/storm_ui_icon_kaelthas_manaaddict.png",
            "description": {
              "fr": "Quête : les globes de régénération augmente le maximum de mana. Récompense : Peut activer un bouclier équivalent au montant de mana.",
              "en": "Quest: Gathering Regeneration Globes increases maximum Mana. Reward: Activate to gain a shield based on your total Mana."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Vent du Néant",
              "en": "Nether Wind"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_gravitylapse.png",
            "description": {
              "fr": "Augmente la portée de Rupture de gravité et rend du mana.",
              "en": "Increases Gravity Lapse range and refunds mana."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Chair brûlée",
              "en": "Burned Flesh"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_flamestrike.png",
            "description": {
              "fr": "Choc de flammes inflige des dégâts bonus si plusieurs héros sont touchés.",
              "en": "Flamestrike deals bonus damage if 2 or more heroes are hit."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Phénix",
              "en": "Phoenix"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_phoenix.png",
            "description": {
              "fr": "Idéal pour le contrôle de zone et les objectifs.",
              "en": "Ideal for zone control and objectives."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Pyromane",
              "en": "Pyromaniac"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_livingbomb.png",
            "description": {
              "fr": "Chaque fois que Bombe vivante inflige des dégâts, réduit le temps de recharge des capacités de base.",
              "en": "Each time Living Bomb deals periodic damage, reduce basic abilities cooldowns."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Enflammer",
              "en": "Ignite"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_livingbomb.png",
            "description": {
              "fr": "Choc de flammes applique aussi Bombe vivante au héros le plus au centre.",
              "en": "Flamestrike also applies Living Bomb to heroes hit."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Lance-flamme",
              "en": "Flamethrower"
            },
            "icon": "assets/heroes/base_spells/kaelthas/images/spells/storm_ui_icon_kaelthas_flamestrike.png",
            "description": {
              "fr": "Augmente la portée de Choc de flammes, si plusieurs héros sont touchés, le temps de recharge de Choc de flammes est réduit.",
              "en": "Increases Flamestrike range. If 2 or more heroes are hit, its cooldown is reduced."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "14 Juillet 2026",
          "en": "July 14, 2026"
        }
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build Bombe Vivante (Anti-Mêlée)",
          "en": "Living Bomb Build (Anti-Melee)"
        },
        "summary": {
          "fr": "Dévastateur contre les compositions avec beaucoup de corps à corps.",
          "en": "Devastating against melee-heavy compositions."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T2322131,Kaelthas]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Infusion gangrenée",
              "en": "Fel Infusion"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_fel_infusion.png",
            "description": {
              "fr": "Augmente la puissance de sort et soigne lors de l'utilisation du Trait.",
              "en": "Increases spell power and heals when using Trait."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Accro à la mana",
              "en": "Mana Addict"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_mana_addict.png",
            "description": {
              "fr": "Indispensable pour la survie tard dans la partie.",
              "en": "Essential for late-game survival."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Enchantement du Feu solaire",
              "en": "Sunfire Enchantment"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_sunfire_enchantment.png",
            "description": {
              "fr": "Activer le Trait booste vos prochaines attaques de base.",
              "en": "Activating Trait empowers your next basic attacks."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Explosion pyrotechnique",
              "en": "Pyroblast"
            },
            "icon": "https://static.icy-veins.com/images/heroes/skills/kaelthas_pyroblast.png",
            "description": {
              "fr": "Pour punir une cible fragile hors de position.",
              "en": "To punish a fragile target out of position."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Pyromane",
              "en": "Pyromaniac"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_pyromaniac.png",
            "description": {
              "fr": "Les dégâts de Bombe vivante réduisent vos temps de recharge.",
              "en": "Living Bomb damage reduces your cooldowns."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Fureur du Roi-Soleil",
              "en": "Sun King's Fury"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_sun_kings_fury.png",
            "description": {
              "fr": "Augmente considérablement les dégâts de Bombe vivante sur les cibles principales.",
              "en": "Greatly increases Living Bomb damage on primary targets."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Présence d'esprit",
              "en": "Presence of Mind"
            },
            "icon": "https://static.icy-veins.com/images/heroes/talents/kaelthas_presence_of_mind.png",
            "description": {
              "fr": "Réduit le temps de recharge de l'Explosion pyrotechnique.",
              "en": "Reduces Pyroblast cooldown."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=VTFz5fFd77A"
      }
    ]
  },
  {
    "id": "anduin",
    "enabled": false,
    "name": {
      "fr": "Anduin",
      "en": "Anduin"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_anduin.png",
    "headline": {
      "fr": "Soins fiables, sauvetage cible et backline stable.",
      "en": "Reliable healing, targeted rescue, and stable backline."
    },
    "gameplay": {
      "fr": "Anduin apporte un soin lisible, un gros bouton de sauvetage et une excellente reponse aux engages front to back.",
      "en": "Anduin provides straightforward healing, a massive rescue button, and an excellent response to front-to-back engages."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Foi désespérée",
          "en": "Leap of Faith"
        },
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_leap_of_faith.png",
        "description": {
          "fr": "Repositionne un allié en danger.",
          "en": "Reposition an ally in danger."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Soin éclair",
          "en": "Flash Heal"
        },
        "icon": "",
        "description": {
          "fr": "Soin direct et fiable.",
          "en": "Direct and reliable heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Étoile divine",
          "en": "Divine Star"
        },
        "icon": "",
        "description": {
          "fr": "Ligne qui soigne et poke.",
          "en": "A line that heals and pokes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Châtiment",
          "en": "Chastise"
        },
        "icon": "",
        "description": {
          "fr": "Contrôle linéaire utile pour stopper une entrée.",
          "en": "Linear CC useful for stopping an engage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Mot sacré : Salut",
          "en": "Holy Word: Salvation"
        },
        "icon": "",
        "description": {
          "fr": "Gros outil défensif de teamfight.",
          "en": "Massive defensive teamfight tool."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Bombe de lumière",
          "en": "Lightbomb"
        },
        "icon": "",
        "description": {
          "fr": "Excellent follow-up sur un allié qui plonge.",
          "en": "Excellent follow-up on an engaging ally."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Garde ton pull pour la vraie cible menacée.",
        "en": "Keep your pull for the actual threatened target."
      },
      {
        "fr": "Place Châtiment avant l'engage adverse.",
        "en": "Place Chastise before the enemy engage."
      },
      {
        "fr": "Bombe de lumière adore les tanks qui foncent.",
        "en": "Lightbomb loves diving tanks."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Heal fiable",
          "en": "Reliable Heal"
        },
        "summary": {
          "fr": "Build généraliste pour garder régularité, contrôle et sécurité.",
          "en": "Generalist build to keep consistency, control, and safety."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1111111,Anduin]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build Lumière",
          "en": "Light Build"
        },
        "summary": {
          "fr": "Build centré sur la Bombe de Lumière et les attaques de base.",
          "en": "Build centered around Lightbomb and basic attacks."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T2222222,Anduin]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "rehgar",
    "enabled": true,
    "name": {
      "fr": "Rehgar",
      "en": "Rehgar"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_rehgar.png",
    "headline": {
      "fr": "Waveclear, soins multi comme monocible, aggressif",
      "en": "Waveclear, multi and single-target healing, aggressive"
    },
    "gameplay": {
      "fr": "Rehgar est un soigneur aggressif qui possede beaucoup de dégâts et plein d'utilitaire.",
      "en": "Rehgar is an aggressive healer boasting great damage and utility."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Purge",
          "en": "Purge"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_purge.png",
        "description": {
          "fr": "Utiliser sur un allié le rend Insensible, sur un ennemi le ralenti.",
          "en": "Targeting an ally grants Unstoppable, targeting an enemy slows them."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_purge.mp4"
      },
      {
        "key": "A",
        "name": {
          "fr": "Salve de guérison",
          "en": "Chain Heal"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_chainheal.png",
        "description": {
          "fr": "Soin qui rebondit sur les alliés autour de la cible.",
          "en": "Heal that bounces to allies near the target."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_a.mp4"
      },
      {
        "key": "Z",
        "name": {
          "fr": "Bouclier de foudre",
          "en": "Lightning Shield"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_lightningshield.png",
        "description": {
          "fr": "Place un bouclier de foudre qui inflige des dégâts et rend du mana.",
          "en": "Places a lightning shield that deals damage and restores mana."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_z.mp4"
      },
      {
        "key": "E",
        "name": {
          "fr": "Totem de liens terrestres",
          "en": "Earthbind Totem"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_earthbindtotem.png",
        "description": {
          "fr": "Pose un totem qui ralentit autour.",
          "en": "Spawns a totem that slows nearby enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_e.mp4"
      },
      {
        "key": "R1",
        "name": {
          "fr": "Guérison ancestrale",
          "en": "Ancestral Healing"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ancestralhealing.png",
        "description": {
          "fr": "Gros soin qui permet de sauver.",
          "en": "Massive burst heal that saves lives."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_ancestral.mp4"
      },
      {
        "key": "R2",
        "name": {
          "fr": "Furie sanguinaire",
          "en": "Bloodlust"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_bloodlust.png",
        "description": {
          "fr": "Augmente la vitesse de déplacement et d'attaque, les attaques de base soignent.",
          "en": "Increases movement & attack speed, basic attacks heal."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_bloodlust.mp4"
      },
      {
        "key": "W",
        "name": {
          "fr": "Loup fantôme",
          "en": "Ghost Wolf"
        },
        "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ghostwolf.png",
        "description": {
          "fr": "Augmente la vitesse de déplacement, la prochaine auto-attaque est plus forte.",
          "en": "Increases movement speed; next basic attack deals bonus damage."
        },
        "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_mount.mp4"
      }
    ],
    "tips": [
      {
        "fr": "Utilise ton totem pour protéger un allié ou attraper un ennemi",
        "en": "Use your totem to protect an ally or catch an enemy."
      },
      {
        "fr": "Place ton Bouclier de foudre sur ton tank",
        "en": "Place Lightning Shield on your frontline tank."
      },
      {
        "fr": "Ne pas avoir peur d'aller mettre des attaques de base",
        "en": "Don't be afraid to auto-attacks."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build totem",
          "en": "Totem Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build le plus simple à jouer: le totem devient le point central du gameplay",
          "en": "Easiest build: the totem becomes the central point of your gameplay."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T2111121,Rehgar]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_chainheal.png",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_earthbindtotem.png",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": "assets/heroes/base_spells/rehgar/videos/spells/rehgar_ancestral.mp4"
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_chainheal.png",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_earthbindtotem.png",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ancestralhealing.png",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build loup",
          "en": "Wolf Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build plus aggressif: demande une connaissance de jeu impéccable",
          "en": "More aggressive build: requires flawless game knowledge."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T3131231,Rehgar]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Cœur farouche",
              "en": "Feral Heart"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ghostwolf.png",
            "description": {
              "fr": "Augmente la vitesse de déplacement de Loup fantôme et confère de l'armure.",
              "en": "Increases Ghost Wolf movement speed and grants armor."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_chainheal.png",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Sang et tonnerre",
              "en": "Blood and Thunder"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ghostwolf.png",
            "description": {
              "fr": "Les attaques faites en Loup fantôme réduisent les temps de recharge des capacités de base et rend du mana.",
              "en": "Attacks in Ghost Wolf form reduce basic ability cooldowns and restore mana."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Bouclier de terre",
              "en": "Earth Shield"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_lightningshield.png",
            "description": {
              "fr": "Applique un bouclier à son porteur en %pv.",
              "en": "Applies a shield to its target based on % max health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Faim de loup",
              "en": "Hunger of the Wolf"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ghostwolf.png",
            "description": {
              "fr": "Les attaques sous forme de Loup fantôme infligent des dégâts en %pv et rendent des points de vie",
              "en": "Attacks in Ghost Wolf form deal % health damage and restore health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "assets/heroes/base_spells/rehgar/images/spells/storm_ui_icon_rehgar_ancestralhealing.png",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ]
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "ESl4DLgmJVo",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces.",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      }
    ]
  },
  {
    "id": "luisaile",
    "enabled": true,
    "name": {
      "fr": "Luisaile",
      "en": "Brightwing"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_brightwing.png",
    "headline": {
      "fr": "Global, beaucoup d'utilitaire, et control en point and click",
      "en": "Global presence, high utility, point-and-click control"
    },
    "gameplay": {
      "fr": "Luisaile est une soigneuse avec un global et beaucoup de sorts utilitaires",
      "en": "Brightwing is a global healer armed with fantastic utility spells."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Brume apaisante",
          "en": "Soothing Mist"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_soothingmist.png",
        "description": {
          "fr": "À l'activation, supprime les effets incapacitants sur les alliés proches et Luisaile. Passivement, envoie des vagues de soins.",
          "en": "On activation, removes disabling effects from nearby allies and Brightwing. Passively sends out healing waves."
        },
        "demoYoutubeId": null
      },
      {
        "key": "A",
        "name": {
          "fr": "Embrasement des Arcanes",
          "en": "Arcane Flare"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_arcaneflare.png",
        "description": {
          "fr": "Crache une zone au sol qui inflige des dégâts. Si la cible est au centre, déclenche un effet de soin de Brume Apaisante.",
          "en": "Spits a ground AoE that deals damage. If target is in the center, triggers a Soothing Mist heal."
        },
        "demoYoutubeId": null
      },
      {
        "key": "Z",
        "name": {
          "fr": "Métamorphose",
          "en": "Polymorph"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_polymorph.png",
        "description": {
          "fr": "Neutralise un ennemi.",
          "en": "Neutralizes an enemy hero."
        },
        "demoYoutubeId": null
      },
      {
        "key": "E",
        "name": {
          "fr": "Poudre de perlimpinpin",
          "en": "Pixie Dust"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_pixiedust.png",
        "description": {
          "fr": "Applique de l'armure anti-sort et augmente la vitesse de déplacement.",
          "en": "Applies spell armor and increases movement speed."
        },
        "demoYoutubeId": null
      },
      {
        "key": "R1",
        "name": {
          "fr": "Papillonnage",
          "en": "Blink Heal"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_blinkheal.png",
        "description": {
          "fr": "Se téléporte vers un allié et le soigne.",
          "en": "Teleports to an ally and heals them."
        },
        "demoYoutubeId": null
      },
      {
        "key": "R2",
        "name": {
          "fr": "Vent d'émeraude",
          "en": "Emerald Wind"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_emeraldwind.png",
        "description": {
          "fr": "Créer une vague qui repousse et inflige des dégâts aux ennemis.",
          "en": "Creates an expanding wave that damages and pushes enemies away."
        },
        "demoYoutubeId": null
      },
      {
        "key": "W",
        "name": {
          "fr": "Déphasage",
          "en": "Phase Shift"
        },
        "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_hypershift.png",
        "description": {
          "fr": "Se téléporte sur un allié et le soigne en %pv.",
          "en": "Teleports to an ally and heals them based on % max health."
        },
        "demoYoutubeId": null
      }
    ],
    "tips": [
      {
        "fr": "Utilise ta Métamorphose pour casser les canalisations adverses ou protèger un allié",
        "en": "Use your Polymorph to interrupt enemy channels or protect your allies."
      },
      {
        "fr": "Garde un oeil sur la mini-carte pour ton global.",
        "en": "Keep an eye on the minimap to use your global effectively."
      },
      {
        "fr": "Essaye d'utiliser Poudre de perlimpinpin sur allié quand il va se faire burst",
        "en": "Try to use Pixie Dust on an ally when they’re about to get bursted."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build qui permet d'utiliser plus souvent sa cleanse.",
          "en": "Build that allows more frequent use of Cleanse."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T2331323,Brightwing]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Hyperphase",
              "en": "Hyper Shift"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_hypershift.png",
            "description": {
              "fr": "Augmente le montant de soins de Déphasage et son temps de recharge est réduit pour chaque serviteur tué.",
              "en": "Increases Phase Shift healing amount and its cooldown is reduced for each minion killed."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Crachat magique",
              "en": "Magic Spit"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_talent_autoattack_cooldown.jpg",
            "description": {
              "fr": "Augmente la portée d'auto-attaque et ses auto-attaques réduisent le temps de recharge de Brume Apaisante.",
              "en": "Increases basic attack range and basic attacks reduce Soothing Mist cooldown."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Brume opportune",
              "en": "Critical Mist"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_soothingmist.png",
            "description": {
              "fr": "À l'activation de Brume apaisante, la purge est plus efficace.",
              "en": "Activating Soothing Mist removes disabling effects more effectively."
            },
            "demoYoutubeId": null,
            "alternatives": [
              {
                "name": {
                  "fr": "Je te vois !",
                  "en": "Peekaboo!"
                },
                "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg",
                "description": {
                  "fr": "Déphasage confère un bouclier à Luisaile et sa cible, puis révèle la zone autour.",
                  "en": "Phase Shift grants a shield to Brightwing and her target, then reveals the surrounding area."
                },
                "demoYoutubeId": null
              }
            ]
          },
          {
            "level": 10,
            "name": {
              "fr": "Papillonnage",
              "en": "Blink Heal"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_blinkheal.png",
            "description": {
              "fr": "Se téléporte vers un allié et le soigne.",
              "en": "Teleports to an ally and heals them."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Superlimpinpin",
              "en": "Pixie Power"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/talents/storm_ui_icon_brightwing_pixiedust_b.png",
            "description": {
              "fr": "Réduit le temps de recharge de Poudre de perlimpinpin et augmente l'armure anti-sort.",
              "en": "Reduces Pixie Dust cooldown and increases spell armor."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Bestiolifier",
              "en": "Critterize"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_polymorph.png",
            "description": {
              "fr": "Métamorphose réduit l'armure.",
              "en": "Polymorph reduces armor."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Dragon express",
              "en": "Speedy Dragon"
            },
            "icon": "assets/heroes/base_spells/brightwing/images/spells/storm_ui_icon_brightwing_hypershift.png",
            "description": {
              "fr": "Déphasage se canalise plus rapidement et augmente passivement la vitesse de déplacement.",
              "en": "Phase Shift channels faster and passively increases movement speed."
            },
            "demoYoutubeId": null
          }
        ]
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "BGavE-q8NJY",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      }
    ]
  },
  {
    "id": "deckard",
    "enabled": true,
    "name": {
      "fr": "Deckard Cain",
      "en": "Deckard Cain"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_deckard.png",
    "headline": {
      "fr": "Contrôles de zone et soins de préparation.",
      "en": "Heavy crowd control, AoE healing and setup potions."
    },
    "gameplay": {
      "fr": "Deckard jette des potions sur le sol pour préparer le combat et bloque l'ennemi avec ses puissants contrôles de zone.",
      "en": "Deckard throws potions on the ground to prepare the battlefield and locks down enemies with powerful AoE control."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Fidèle auditoire",
          "en": "Fortitude of the Faithful"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_protectors_of_cain.png",
        "description": {
          "fr": "Lorsqu'au moins un allié est proche de Deckard Cain, il obtient de l'armure et ses temps de recharge se rechargent plus vite.",
          "en": "When at least one allied Hero is nearby, Deckard gains Armor and his Basic Abilities recharge faster."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_trait.mp4"
      },
      {
        "key": "A",
        "name": {
          "fr": "Potion de soin",
          "en": "Healing Potion"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_healing_potion.png",
        "description": {
          "fr": "Lance une potion qui peut rester au sol et être consommée par les alliés pour se soigner.",
          "en": "Throws a potion that heals the first allied Hero to touch it."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_a.mp4"
      },
      {
        "key": "Z",
        "name": {
          "fr": "Cube horadrique",
          "en": "Horadric Cube"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_horadric_cube.png",
        "description": {
          "fr": "Cube qui inflige des dégâts et ralentit en zone.",
          "en": "Throws a cube that deals damage and slows enemies in an area."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_z.mp4"
      },
      {
        "key": "E",
        "name": {
          "fr": "Parchemin de confinement",
          "en": "Scroll of Sealing"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_scroll_of_sealing.png",
        "description": {
          "fr": "Triangle qui immobilise et inflige des dégâts.",
          "en": "Unfurls a scroll that roots and damages enemies inside."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_e.mp4"
      },
      {
        "key": "R1",
        "name": {
          "fr": "Restez un instant et écoutez",
          "en": "Stay Awhile and Listen"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_stay_awhile_and_listen.png",
        "description": {
          "fr": "Canalise un cône devant lui qui endort les ennemis.",
          "en": "Channels a large cone that puts enemies to sleep."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_r1.mp4"
      },
      {
        "key": "R2",
        "name": {
          "fr": "Vous avez lu mon livre ?",
          "en": "Lorenado"
        },
        "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_lorenado.png",
        "description": {
          "fr": "Crée une tornade qui repousse les ennemis sur son passage.",
          "en": "Creates a swirling tornado that knocks away enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_r2.mp4"
      }
    ],
    "tips": [
      {
        "fr": "Prépare toujours des potions avant l'objectif.",
        "en": "Always setup potions before the objective starts."
      },
      {
        "fr": "Combine le Cube (Z) avec le Parchemin (E) pour garantir l'immobilisation.",
        "en": "Combine your Cube (W) with your Scroll (E) to guarantee the root."
      },
      {
        "fr": "Vise les potions directement sur tes alliés, personne ne veut courir après un soin !",
        "en": "Aim your potions directly on your allies—no one wants to have to walk to get healed!"
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build qui passe partout, peu importe le mode de jeu.",
          "en": "A build that works in any situation, no matter the game mode."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T3121331,Deckard]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Saphir",
              "en": "Sapphire"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_sapphire.png",
            "description": {
              "fr": "Augmente le ralentissement du Cube horadrique.",
              "en": "Increases Horadric Cube slow."
            },
            "demoYoutubeId": null,
            "alternatives": []
          },
          {
            "level": 4,
            "name": {
              "fr": "Potion de bouclier",
              "en": "Shielding Potion"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_healing_potion.png",
            "description": {
              "fr": "Les potions confèrent un bouclier.",
              "en": "Potions grant a shield upon healing."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Cube de Kanai",
              "en": "Kanai's Cube"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_kanais_cube.png",
            "description": {
              "fr": "Le Cube horadrique réduit les dégâts infligés par les ennemis.",
              "en": "Horadric Cube reduces damage dealt by enemies."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Restez un instant et écoutez",
              "en": "Stay Awhile and Listen"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_stay_awhile_and_listen.png",
            "description": {
              "fr": "Endort les ennemis en face.",
              "en": "Channels to put enemies in front to sleep."
            },
            "demoYoutubeId": "assets/heroes/base_spells/deckard/videos/spells/deckard_r1.mp4"
          },
          {
            "level": 13,
            "name": {
              "fr": "Bénédiction antique",
              "en": "Ancient Blessings"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_angelic_conduit.png",
            "description": {
              "fr": "Renforce les attaques de base de tous les alliés à proximité et les soigne.",
              "en": "Empowers nearby allies' basic attacks and heals them."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Bâton horadrique",
              "en": "Horadric Staff"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_horadric_staff.png",
            "description": {
              "fr": "Les attaques de base étourdissent.",
              "en": "Basic attacks stun."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Respectez vos aînés",
              "en": "Respect the Elderly"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_stay_awhile_and_listen.png",
            "description": {
              "fr": "Restez un instant et écoutez rend les ennemis Silence et Aveugle au réveil.",
              "en": "Stay Awhile and listen silences and blinds enemies upon waking up."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build ARAM",
          "en": "ARAM Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Ça fait ding ding et des dégats.",
          "en": "It goes ding-ding and deals damage."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T1311314,Deckard]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Parchemin d'identification",
              "en": "Scroll of Identify"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_scroll_of_sealing.png",
            "description": {
              "fr": "Quête: augmente les dégâts de Parchemin de confinement et réduit l'armure une fois les paliers atteints.",
              "en": "Quest: increases Scroll of Sealing's damage and reduces Armor once the rewards are unlocked."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Rubis",
              "en": "Ruby"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_ruby.png",
            "description": {
              "fr": "Le proche Cube horadrique génère des petites potions de soin.",
              "en": "The next Horadric Cube spawns Lesser Healing Potions."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Cube de Kanai",
              "en": "Kanai's Cube"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_kanais_cube.png",
            "description": {
              "fr": "Le Cube horadrique réduit les dégâts infligés par les ennemis.",
              "en": "Horadric Cube reduces the damage dealt by enemies."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Restez un instant et écoutez",
              "en": "Stay Awhile and Listen"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_stay_awhile_and_listen.png",
            "description": {
              "fr": "Endort les ennemis en face.",
              "en": "Puts enemies in front of Deckard to Sleep."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Bénédiction antique",
              "en": "Ancient Blessings"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_angelic_conduit.png",
            "description": {
              "fr": "Renforce les attaques de base de tous les alliés à proximité et les soigne.",
              "en": "Empowers nearby allies' Basic Attacks and heals them."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Parchemin de pétrification",
              "en": "Scroll of Stone Curse"
            },
            "icon": "assets/heroes/base_spells/deckard/images/spells/storm_ui_icon_deckard_scroll_of_sealing.png",
            "description": {
              "fr": "Parchemin de confinement inflige plus de dégâts lorsque plusieurs héros sont touchés.",
              "en": "Scroll of Sealing deals much more damage when it hits multiple Heroes."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Gemmes sans défaut",
              "en": "Perfect Gems"
            },
            "icon": "assets/heroes/base_spells/deckard/images/talents/storm_ui_icon_deckard_perfect_gems.png",
            "description": {
              "fr": "Réduit le temps de recharge des gemmes et de Cube horadique.",
              "en": "Reduces the cooldown of Gems and Horadric Cube."
            },
            "demoYoutubeId": null
          }
        ]
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "onnCA8ibYQk",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide, in French"
        },
        "youtubeId": "https://www.youtube.com/watch?v=Ovv6Dc7wzyU"
      }
    ]
  },
  {
    "id": "alexstrasza",
    "enabled": false,
    "name": {
      "fr": "Alexstrasza",
      "en": "Alexstrasza"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_alexstrasza.png",
    "headline": {
      "fr": "Soins en zone massifs et forme de dragon.",
      "en": "Massive AoE healing and dragon form."
    },
    "gameplay": {
      "fr": "Elle sacrifie sa propre santé pour soigner ses alliés et se transforme en Reine-dragon pour dominer les combats d'équipe.",
      "en": "She sacrifices her own health to heal allies and transforms into the Dragonqueen to dominate teamfights."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Reine-dragon",
          "en": "Dragonqueen"
        },
        "icon": "",
        "description": {
          "fr": "Se transforme en dragon surpuissant.",
          "en": "Transforms into a massively powerful dragon."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Don de vie",
          "en": "Gift of Life"
        },
        "icon": "",
        "description": {
          "fr": "Sacrifie de la vie pour soigner un allié.",
          "en": "Sacrifices health to heal an ally."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Abondance",
          "en": "Abundance"
        },
        "icon": "",
        "description": {
          "fr": "Pose une zone qui soigne après un délai.",
          "en": "Plants an AoE that heals after a delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Rafale de flammes",
          "en": "Flame Buffet"
        },
        "icon": "",
        "description": {
          "fr": "Enflamme un ennemi. Toucher un ennemi enflammé le ralentit.",
          "en": "Ignites an enemy. Hitting an ignited enemy slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Lieuse-de-vie",
          "en": "Life-Binder"
        },
        "icon": "",
        "description": {
          "fr": "Égalise les pourcentages de vie entre elle et un allié.",
          "en": "Equalizes health percentages between her and an ally."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Flammes purificatrices",
          "en": "Cleansing Flame"
        },
        "icon": "",
        "description": {
          "fr": "S'envole et bombarde la zone.",
          "en": "Takes to the skies and bombs the area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "N'utilise pas ton D pour un petit combat.",
        "en": "Do not waste your D for a small skirmish."
      },
      {
        "fr": "Pose ton W là où tes alliés vont reculer.",
        "en": "Place your W where your allies will retreat."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "W Build",
          "en": "W Build"
        },
        "summary": {
          "fr": "Max de soins en zone.",
          "en": "Max AoE healing."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T2222222,Alexstrasza]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "E Build",
          "en": "E Build"
        },
        "summary": {
          "fr": "Dégâts et dragons fréquents.",
          "en": "Damage and frequent dragons."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3331333,Alexstrasza]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "ana",
    "enabled": false,
    "name": {
      "fr": "Ana",
      "en": "Ana"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_ana.png",
    "headline": {
      "fr": "Sniper de soins avec un anti-soin puissant.",
      "en": "Healing sniper with powerful anti-heal."
    },
    "gameplay": {
      "fr": "Ana soigne ses alliés à très longue distance avec des tirs de précision et bloque les soins ennemis avec sa grenade.",
      "en": "Ana heals allies from extreme range with skillshots and blocks enemy healing with her grenade."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Pie-grièche",
          "en": "Shrike"
        },
        "icon": "",
        "description": {
          "fr": "Empoisonne les ennemis avec ses attaques.",
          "en": "Poisons enemies with basic attacks."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fléchette de soins",
          "en": "Healing Dart"
        },
        "icon": "",
        "description": {
          "fr": "Tire un soin en ligne droite.",
          "en": "Fires a healing dart in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Grenade biotique",
          "en": "Biotic Grenade"
        },
        "icon": "",
        "description": {
          "fr": "Soigne les alliés et empêche les ennemis de se soigner.",
          "en": "Heals allies and prevents enemy healing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Fléchette hypodermique",
          "en": "Sleep Dart"
        },
        "icon": "",
        "description": {
          "fr": "Endort le premier ennemi touché.",
          "en": "Puts the first enemy hit to sleep."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Nanoboost",
          "en": "Nano Boost"
        },
        "icon": "",
        "description": {
          "fr": "Booste massivement la magie d'un allié.",
          "en": "Massively boosts an ally's spell power and cooldowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Œil d'Horus",
          "en": "Eye of Horus"
        },
        "icon": "",
        "description": {
          "fr": "Prend position pour tirer à portée illimitée.",
          "en": "Sets up to fire unlimited range rounds."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Garde la grenade pour empêcher un sauvetage ennemi.",
        "en": "Save the grenade to prevent an enemy rescue."
      },
      {
        "fr": "Place-toi très en arrière pour soigner.",
        "en": "Position yourself very far back to heal."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Grenade",
          "en": "Grenade"
        },
        "summary": {
          "fr": "Amplifie l'anti-heal et le soin burst.",
          "en": "Amplifies anti-heal and burst healing."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1111111,Ana]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Sleep / Trait",
          "en": "Sleep / Trait"
        },
        "summary": {
          "fr": "Plus de dégâts et de contrôles.",
          "en": "More damage and CC."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3331333,Ana]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "auriel",
    "enabled": true,
    "name": {
      "fr": "Auriel",
      "en": "Auriel"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_auriel.png",
    "headline": {
      "fr": "Soigne grâce à de l'énergie procurés par ses alliés.",
      "en": "Healing fueled by Energy provided by her allies."
    },
    "gameplay": {
      "fr": "Auriel convertit les dégâts infligés par son équipe et les siens en énergie pour soigner massivement en zone.",
      "en": "Auriel converts the damage dealt by her team and by herself into Energy to provide massive area healing."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Don d'espoir",
          "en": "Bestow Hope"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_bestowhope.png",
        "description": {
          "fr": "Place une couronne sur un allié pour récupérer de l'énergie selon ses dégâts.",
          "en": "Places a crown on an ally to gain Energy based on the damage they deal."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_trait.mp4"
      },
      {
        "key": "A",
        "name": {
          "fr": "Arc vertueux",
          "en": "Sacred Sweep"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_angelicsweep.png",
        "description": {
          "fr": "Inflige des dégâts en arc de cercle. Dégâts augmentés au centre.",
          "en": "Deals damage in an arc. Damage is increased in the center."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_a.mp4"
      },
      {
        "key": "Z",
        "name": {
          "fr": "Rayon des Cieux",
          "en": "Ray of Heaven"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_rayofheaven.png",
        "description": {
          "fr": "Consomme l'énergie pour soigner en zone.",
          "en": "Consumes Energy to heal in an area."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_z.mp4"
      },
      {
        "key": "E",
        "name": {
          "fr": "Entrave",
          "en": "Detainment Strike"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_restrainingblow.png",
        "description": {
          "fr": "Repousse un ennemi (étourdit si contre un mur).",
          "en": "Knocks an enemy back. If they collide with terrain, they are Stunned."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_e.mp4"
      },
      {
        "key": "R1",
        "name": {
          "fr": "Égide de cristal",
          "en": "Crystal Aegis"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_ribboncocoon.png",
        "description": {
          "fr": "Place un allié en Stase puis inflige des dégâts autour.",
          "en": "Places an ally in Stasis, then deals damage around them."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_r1.mp4"
      },
      {
        "key": "R2",
        "name": {
          "fr": "Réssurection",
          "en": "Resurrect"
        },
        "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_resurrect.png",
        "description": {
          "fr": "Ramène un allié mort à la vie. Peut être utiliser sur soi.",
          "en": "Brings a dead ally back to life. Can be used on yourself."
        },
        "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_r2.mp4"
      }
    ],
    "tips": [
      {
        "fr": "Change la couronne de cible si ton allié ne fait pas de dégâts ou lorsqu'il est mort.",
        "en": "Switch your crown to another target if your ally is not dealing damage or if they are dead."
      },
      {
        "fr": "Cherche les étourdissements sur les murs avec ton E.",
        "en": "Look for wall stuns with Detainment Strike."
      },
      {
        "fr": "Utiliser ton A sur des vagues de sbires te donne beaucoup d'énergie.",
        "en": "Using Sacred Sweep on minion waves gives you a lot of Energy."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Génère énormément d'énergie par soi-même.",
          "en": "Generates a huge amount of Energy on its own."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T3332332,Auriel]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Lumière ardente",
              "en": "Searing Light"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_rayofheaven.png",
            "description": {
              "fr": "Rayon des Cieux inflige des dégâts aux héros adverses présents dans la zone de soin.",
              "en": "Ray of Heaven deals damage to enemy Heroes in the healing area."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Sentence",
              "en": "Repeated Offense"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_restrainingblow_a.png",
            "description": {
              "fr": "Augmente le repoussement d'Entrave. Quête: étourdir des héros augmente les dégats.",
              "en": "Increases Detainment Strike's knockback distance. Quest: Stunning Heroes increases its damage."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Corde sacrée",
              "en": "Energized Cord"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
            "description": {
              "fr": "Augmente l'énergie conférée par les attaques de base d'Auriel aux héros et aux cibles non héroïques. Passif: augmente la portée des attaques de bases",
              "en": "Increases the Energy gained from Auriel's Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Égide de Cristal",
              "en": "Crystal Aegis"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_ribboncocoon.png",
            "description": {
              "fr": "Place un allié en Stase puis inflige des dégâts autour.",
              "en": "Places an ally in Stasis, then deals damage around them."
            },
            "demoYoutubeId": "assets/heroes/base_spells/auriel/videos/spells/auriel_r1.mp4"
          },
          {
            "level": 13,
            "name": {
              "fr": "Fouet perforant",
              "en": "Piercing Lash"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_restrainingblow_a.png",
            "description": {
              "fr": "Entrave touche tous les héros adverses possibles, et son temps de recharge est réduit selon le nombre de héros touchés.",
              "en": "Detainment Strike pierces enemy Heroes, and its cooldown is reduced based on the number of Heroes hit."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Courroux des Cieux",
              "en": "Wrath of Heaven"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
            "description": {
              "fr": "Augmente la puissance de capacité de l'allié affecté par Don d'espoir. Réduit l'armure anti-sort des héros adverses touchés par le centre d'Arc vertueux et par l'étourdissement d'Entrave.",
              "en": "Increases the Spell Power of the ally affected by Bestow Hope. Reduces Spell Armor on enemy Heroes hit by the center of Sacred Sweep and by Detainment Strike's Stun."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Résolution d'airain",
              "en": "Diamond Resolve"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_ribboncocoon.png",
            "description": {
              "fr": "Égide de Cristal confère de l'armure à la sortie.",
              "en": "Crystal Aegis grants Armor when it ends."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build ARAM",
          "en": "ARAM Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Ça fait ding ding et des dégats.",
          "en": "Ideal if you have a very strong hyper-carry."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T1112232,Auriel]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Révélation céleste",
              "en": "Increasing Clarity"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_angelicsweep.png",
            "description": {
              "fr": "Quête : Augmente les dégâts de la zone centrale. Récompense : Augmente à nouveau les dégâts de la zone centrale.",
              "en": "More Energy."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Amplitude majestueuse",
              "en": "Increasing Clarity"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_angelicsweep.png",
            "description": {
              "fr": "Augmente le rayon de Arc vertueux.",
              "en": "More Energy."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Lueur d'espoir",
              "en": "Energized Cord"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_rayofheaven.png",
            "description": {
              "fr": "Récolter un globe réduit le coût en énergie du prochain Rayon des Cieux",
              "en": "Increases the Energy gained from Auriel's Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range."
            },
            "demoYoutubeId": null,
            "alternatives": [
              {
                "name": {
                  "fr": "Corde sacrée",
                  "en": "Energized Cord"
                },
                "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
                "description": {
                  "fr": "Augmente l'énergie conférée par les attaques de base d'Auriel aux héros et aux cibles non héroïques. Passif: augmente la portée des attaques de bases",
                  "en": "Increases the Energy gained from Auriel's Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range."
                },
                "demoYoutubeId": null
              }
            ]
          },
          {
            "level": 10,
            "name": {
              "fr": "Égide de Cristal",
              "en": "Crystal Aegis"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_ribboncocoon.png",
            "description": {
              "fr": "Place un allié en Stase puis inflige des dégâts autour.",
              "en": "Places an ally in Stasis, then deals damage around them."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Force convergente",
              "en": "Increasing Clarity"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_angelicsweep_b.png",
            "description": {
              "fr": "Les ennemis sont repoussés au centre.",
              "en": "More Energy."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Courroux des Cieux",
              "en": "Wrath of Heaven"
            },
            "icon": "assets/heroes/base_spells/auriel/images/talents/storm_ui_icon_auriel_bestowhope_a.png",
            "description": {
              "fr": "Augmente la puissance de capacité de l'allié affecté par Don d'espoir. Réduit l'armure anti-sort des héros adverses touchés par le centre d'Arc vertueux et par l'étourdissement d'Entrave.",
              "en": "Increases the Spell Power of the ally affected by Bestow Hope. Reduces Spell Armor on enemy Heroes hit by the center of Sacred Sweep and by Detainment Strike's Stun."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Résolution d'airain",
              "en": "Diamond Resolve"
            },
            "icon": "assets/heroes/base_spells/auriel/images/spells/storm_ui_icon_auriel_ribboncocoon.png",
            "description": {
              "fr": "Égide de Cristal confère de l'armure à la sortie.",
              "en": "Crystal Aegis grants Armor when it ends."
            },
            "demoYoutubeId": null
          }
        ]
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "Sa04Z6PPmbg",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      }
    ]
  },
  {
    "id": "kharazim",
    "enabled": false,
    "name": {
      "fr": "Kharazim",
      "en": "Kharazim"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_monk.png",
    "headline": {
      "fr": "Soigneur de mêlée ultra mobile.",
      "en": "Ultra mobile melee healer."
    },
    "gameplay": {
      "fr": "Kharazim bondit d'allié en ennemi, infligeant des dégâts de mêlée pour générer ses soins.",
      "en": "Kharazim dashes between allies and enemies, dealing melee damage to fuel his healing."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Dogme",
          "en": "Dogma"
        },
        "icon": "",
        "description": {
          "fr": "Le Trait se choisit au niveau 1 (Dégâts, Soins ou Mana).",
          "en": "Trait is chosen at level 1 (Damage, Heals or Mana)."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Frappe éclair",
          "en": "Radiant Dash"
        },
        "icon": "",
        "description": {
          "fr": "Bondit vers un allié ou un ennemi.",
          "en": "Dashes to an ally or enemy."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Souffle divin",
          "en": "Breath of Heaven"
        },
        "icon": "",
        "description": {
          "fr": "Soigne les alliés proches et donne de la vitesse.",
          "en": "Heals nearby allies and grants movement speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Frappe mortelle",
          "en": "Deadly Reach"
        },
        "icon": "",
        "description": {
          "fr": "Augmente la vitesse d'attaque et la portée.",
          "en": "Increases attack speed and range."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Paume divine",
          "en": "Divine Palm"
        },
        "icon": "",
        "description": {
          "fr": "Sauve un allié de la mort avec un gros soin.",
          "en": "Saves an ally from death with a massive heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Les Sept frappes",
          "en": "Seven-Sided Strike"
        },
        "icon": "",
        "description": {
          "fr": "Inflige des dégâts lourds en pourcentage de vie dans une zone.",
          "en": "Deals heavy percentage health damage in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tape sans arrêt pour maximiser ton passif.",
        "en": "Attack constantly to maximize your passive."
      },
      {
        "fr": "Garde un Q pour fuir.",
        "en": "Keep a Q charge to escape."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Poings de fer",
          "en": "Iron Fists"
        },
        "summary": {
          "fr": "Soins via l'élimination rapide des cibles.",
          "en": "Healing through quick target elimination."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1222222,Kharazim]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Transcendance",
          "en": "Transcendence"
        },
        "summary": {
          "fr": "Le build soin classique et soutenu.",
          "en": "The classic sustained healing build."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T2111111,Kharazim]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "lili",
    "enabled": false,
    "name": {
      "fr": "Li Li",
      "en": "Li Li"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_lili.png",
    "headline": {
      "fr": "Soigneuse esquiveuse, aveugle les attaquants.",
      "en": "Slippery healer, blinds attackers."
    },
    "gameplay": {
      "fr": "Li Li court vite quand elle prend des dégâts et distribue des soins automatiquement aux alliés proches.",
      "en": "Li Li runs fast when taking damage and automatically distributes heals to nearby allies."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Pied véloce",
          "en": "Fast Feet"
        },
        "icon": "",
        "description": {
          "fr": "Gagne en vitesse de déplacement quand elle prend des dégâts.",
          "en": "Gains movement speed when taking damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Cruche des mille tasses",
          "en": "Healing Brew"
        },
        "icon": "",
        "description": {
          "fr": "Soigne automatiquement l'allié le plus blessé à portée.",
          "en": "Automatically heals the most injured ally in range."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Serpent nuageux",
          "en": "Cloud Serpent"
        },
        "icon": "",
        "description": {
          "fr": "Place un serpent sur un allié qui attaque et soigne.",
          "en": "Places a serpent on an ally that attacks and heals."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Vent aveuglant",
          "en": "Blinding Wind"
        },
        "icon": "",
        "description": {
          "fr": "Aveugle automatiquement les cibles proches.",
          "en": "Automatically blinds nearby targets."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Cruche des 1 000 tasses",
          "en": "Jug of 1,000 Cups"
        },
        "icon": "",
        "description": {
          "fr": "Canalise d'énormes soins continus en zone.",
          "en": "Channels massive continuous AoE heals."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Dragon d'eau",
          "en": "Water Dragon"
        },
        "icon": "",
        "description": {
          "fr": "Invoque un dragon qui ralentit et blesse un ennemi.",
          "en": "Summons a dragon that slows and damages an enemy."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Maintiens la touche Q enfoncée en combat.",
        "en": "Hold down the Q key during combat."
      },
      {
        "fr": "Ne te fais pas étourdir pendant ton R1.",
        "en": "Do not get stunned during your R1."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build Aveuglement",
          "en": "Blind Build"
        },
        "summary": {
          "fr": "Parfait contre les attaquants physiques.",
          "en": "Perfect against physical attackers."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3331333,LiLi]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build Serpent",
          "en": "Serpent Build"
        },
        "summary": {
          "fr": "Soins supplémentaires via le W.",
          "en": "Extra healing via W."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1111111,LiLi]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "ltmorales",
    "enabled": false,
    "name": {
      "fr": "Lt. Morales",
      "en": "Lt. Morales"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_medic.png",
    "headline": {
      "fr": "Soins monocibles ininterrompus et gestion d'énergie.",
      "en": "Uninterrupted single-target heals and energy management."
    },
    "gameplay": {
      "fr": "Morales maintient un allié en vie indéfiniment avec son rayon tant qu'elle a de l'énergie et se tient à bonne distance.",
      "en": "Morales keeps an ally alive indefinitely with her beam as long as she has energy and stays safely in the back."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Réacteur Caduceus",
          "en": "Caduceus Reactor"
        },
        "icon": "",
        "description": {
          "fr": "Régénère de la vie quand le rayon de soins n'est pas utilisé.",
          "en": "Regenerates health when healing beam is not active."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Rayon de soins",
          "en": "Healing Beam"
        },
        "icon": "",
        "description": {
          "fr": "Canalise un soin continu sur un allié.",
          "en": "Channels a continuous heal on an ally."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Protection",
          "en": "Safeguard"
        },
        "icon": "",
        "description": {
          "fr": "Donne de l'armure à un allié.",
          "en": "Grants armor to an ally."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Grenade de déplacement",
          "en": "Displacement Grenade"
        },
        "icon": "",
        "description": {
          "fr": "Tire une grenade qui explose et repousse les ennemis.",
          "en": "Fires a grenade that explodes and knocks enemies back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Drone de transport",
          "en": "Medivac Dropship"
        },
        "icon": "",
        "description": {
          "fr": "Transporte l'équipe n'importe où sur la carte.",
          "en": "Transports the team anywhere on the map."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Rayon stimulant",
          "en": "Stim Drone"
        },
        "icon": "",
        "description": {
          "fr": "Augmente massivement la vitesse d'un allié.",
          "en": "Massively increases an ally's speed."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Surveille ton niveau d'énergie.",
        "en": "Monitor your energy level."
      },
      {
        "fr": "Ta grenade est ton seul moyen de te défendre.",
        "en": "Your grenade is your only self-defense tool."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build Protection",
          "en": "Safeguard Build"
        },
        "summary": {
          "fr": "Armure maximale pour sauver les cibles.",
          "en": "Maximum armor to save targets."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T2222222,LtMorales]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build Grenade",
          "en": "Grenade Build"
        },
        "summary": {
          "fr": "Plus de repoussements et de régénération d'énergie.",
          "en": "More knockbacks and energy regeneration."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3332333,LtMorales]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "malfurion",
    "enabled": true,
    "name": {
      "fr": "Malfurion",
      "en": "Malfurion"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_malfurion.png",
    "headline": {
      "fr": "Soins sur la durée avec beaucoup de sorts utilitaires.",
      "en": "Heals over time with plenty of utility spells."
    },
    "gameplay": {
      "fr": "Malfurion pose des soins sur la durée sur ses alliés, puis frappe les ennemis avec Éclat lunaire pour déclencher des soins instantanés.",
      "en": "Malfurion applies heals over time on his allies, then hits enemies with Moonfire to trigger instant burst heals."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Innervation",
          "en": "Innervate"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_innerrvate.jpg",
        "description": {
          "fr": "Rend du mana à un allié et réduit ses temps de recharge.",
          "en": "Restores Mana to an ally and reduces their cooldowns."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_trait.mp4"
      },
      {
        "key": "A",
        "name": {
          "fr": "Rétablissement",
          "en": "Regrowth"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_regrowth.jpg",
        "description": {
          "fr": "Soin sur la durée.",
          "en": "Heal over time."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_a.mp4"
      },
      {
        "key": "Z",
        "name": {
          "fr": "Éclat lunaire",
          "en": "Moonfire"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_moonfire.jpg",
        "description": {
          "fr": "Dégâts de zone rapides qui soignent tous les alliés sous A et révèle les ennemis.",
          "en": "Quick AoE damage that heals all allies with Q active and reveals enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_z.mp4"
      },
      {
        "key": "E",
        "name": {
          "fr": "Sarments",
          "en": "Entangling Roots"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_entanglingroots.jpg",
        "description": {
          "fr": "Immobilise les ennemis dans une zone et inflige des dégâts.",
          "en": "Roots enemies in an area and deals damage."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_e.mp4"
      },
      {
        "key": "R1",
        "name": {
          "fr": "Tranquillité",
          "en": "Tranquility"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_tranquility.jpg",
        "description": {
          "fr": "Rend continuellement des points de vie aux héros alliés et proches, et donne de l'armure lorsque les alliés sont sous Rétablissement.",
          "en": "Continually restores health to nearby allied Heroes, and grants Armor to allies affected by Regrowth."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_r1.mp4"
      },
      {
        "key": "R2",
        "name": {
          "fr": "Rêve du crépuscule",
          "en": "Twilight Dream"
        },
        "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_twilightdream.jpg",
        "description": {
          "fr": "Silence tous les ennemis autour et inflige de gros dégâts.",
          "en": "Silences all nearby enemies and deals heavy damage."
        },
        "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_r2.mp4"
      }
    ],
    "tips": [
      {
        "fr": "Maintiens ton A sur autant d'alliés que possible.",
        "en": "Keep your Q on as many allies as possible."
      },
      {
        "fr": "Spam le Z sur les ennemis pour soigner.",
        "en": "Spam W on enemies to heal."
      },
      {
        "fr": "Utilise ton E pour suivre des controles ou protèger tes alliés",
        "en": "Use your E to follow up on crowd control or protect your allies."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommended Build"
        },
        "isNew": false,
        "updatedAt": {
          "fr": "14 Juin 2026",
          "en": "June 14, 2026"
        },
        "summary": {
          "fr": "Dégâts et soins continus très élevés.",
          "en": "Very high continuous damage and healing."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T3131131,Malfurion]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Rêves d'émeraude",
              "en": "Emerald Dreams"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_entanglingroots_a.jpg",
            "description": {
              "fr": "À la fin de Sarments, les cibles immobilisées sont endormis.",
              "en": "When Entangling Roots expires, rooted targets are put to Sleep."
            },
            "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/talents/malfurion_lvl1_e.mp4"
          },
          {
            "level": 4,
            "name": {
              "fr": "Récupération",
              "en": "Rejuvenation"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_regrowth.jpg",
            "description": {
              "fr": "Rétablissement s'applique aussi désormais à Malfurion.",
              "en": "Regrowth now also applies to Malfurion."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Soins naturels",
              "en": "Nature's Cure"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_regrowth.jpg",
            "description": {
              "fr": "Supprime les effets incapacitants affectant les alliés à l'activation.",
              "en": "Removes disabling effects from allies upon activation."
            },
            "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/talents/malfurion_lvl7_purge.mp4"
          },
          {
            "level": 10,
            "name": {
              "fr": "Tranquilité",
              "en": "Tranquility"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_tranquility.jpg",
            "description": {
              "fr": "Rend continuellement des points de vie aux héros alliés et proches, et donne de l'armure lorsque les alliés sont sous Rétablissement.",
              "en": "Continually restores health to nearby allied Heroes, and grants Armor to allies affected by Regrowth."
            },
            "demoYoutubeId": "assets/heroes/base_spells/malfurion/videos/spells/malfurion_r1.mp4"
          },
          {
            "level": 13,
            "name": {
              "fr": "Rapidité de la nature",
              "en": "Nature's Swiftness"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_regrowth.jpg",
            "description": {
              "fr": "Les Rétablissements augmentent la vitesse de déplacement de Malfurion.",
              "en": "Active Regrowths increase Malfurion's Movement Speed."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Harmonie lunaire",
              "en": "Moonlit Harmony"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_wildgrowth_a.jpg",
            "description": {
              "fr": "Éclat lunaire procure plus de soins, et ce montant augmente selon le nombre de Rétablissements actifs.",
              "en": "Moonfire provides more healing, and this amount increases based on the number of active Regrowths."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Sérénité",
              "en": "Serenity"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_malfurion_tranquility.jpg",
            "description": {
              "fr": "Éclat lunaire réduit le temps de recharge de Tranquilité. Augmente les soins de Tranquilité de base, et ce montant augmente selon le nombre de Rétablissements actifs.",
              "en": "Moonfire reduces the cooldown of Tranquility. Increases Tranquility's baseline healing, and this amount increases based on the number of active Regrowths."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build Sarments",
          "en": "Roots Build"
        },
        "summary": {
          "fr": "Plus de contrôle et de zoning.",
          "en": "More control and zoning."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3332333,Malfurion]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "auMuOt9X1FQ",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces.",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles and English AI voice."
        }
      }
    ]
  },
  {
    "id": "stukov",
    "enabled": true,
    "name": {
      "fr": "Stukov",
      "en": "Stukov"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_stukov.png",
    "headline": {
      "fr": "Contrôle de zone énorme et soins propagatifs.",
      "en": "Massive zone control and spreading heals."
    },
    "gameplay": {
      "fr": "Stukov propage des virus soignants sur son équipe et des pustules sur l'ennemi, avant de tout faire exploser avec son Trait.",
      "en": "Stukov spreads healing viruses to his team and pustules to enemies, then detonates them all with his Trait."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Éruption éruptive",
          "en": "Bio-Kill Switch"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_bio-killswitch.png",
        "description": {
          "fr": "Fait exploser ses virus : soigne grandement les alliés ou ralentit/blesse les ennemis.",
          "en": "Detonates viruses: greatly heals allies or slows/damages enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_trait.mp4"
      },
      {
        "key": "A",
        "name": {
          "fr": "Virus régénérateur",
          "en": "Healing Pathogen"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_healingpathogen.png",
        "description": {
          "fr": "Un soin qui se propage d'allié en allié.",
          "en": "A heal that spreads from ally to ally."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_a.mp4"
      },
      {
        "key": "Z",
        "name": {
          "fr": "Agent infectieux",
          "en": "Weighted Pustule"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_weightedpustule.png",
        "description": {
          "fr": "Lance un projectile qui infecte et ralentit les ennemis.",
          "en": "Throws a projectile that infects and slows enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_z.mp4"
      },
      {
        "key": "E",
        "name": {
          "fr": "Menace larvée",
          "en": "Lurking Arm"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_lurkingarm.png",
        "description": {
          "fr": "Canalise une zone qui réduit au silence et inflige des dégâts.",
          "en": "Channels a zone that silences and damages enemies."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_e.mp4"
      },
      {
        "key": "R1",
        "name": {
          "fr": "Poussée éruptive",
          "en": "Massive Shove"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_massiveshove.png",
        "description": {
          "fr": "Pousse un ennemi jusqu'à ce qu'il percute un obstacle.",
          "en": "Pushes an enemy until they hit terrain."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_r1.mp4"
      },
      {
        "key": "R2",
        "name": {
          "fr": "Frappe chaotique",
          "en": "Flailing Swipe"
        },
        "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_flailingswipe.png",
        "description": {
          "fr": "Balaye les ennemis en face de lui plusieurs fois.",
          "en": "Swipes enemies in front of him multiple times."
        },
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_r2.mp4"
      }
    ],
    "tips": [
      {
        "fr": "Attends que le A se propage à tout le monde avant de faire péter le D.",
        "en": "Wait for Q to spread to everyone before pressing D."
      },
      {
        "fr": "Place le E sur un CC allié.",
        "en": "Place E on top of an allied CC."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build qui passe partout, peu importe le mode de jeu.",
          "en": "Maximizes the impact of the silence zone."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T3322212,Stukov]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Ballistospores réactives",
              "en": "Reactive Ballistospores"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_bio-killswitch.png",
            "description": {
              "fr": "Actif : Propage Agent infectieux autour de Stukov à ses ennemis et annule le temps de recharge d'Éruption éruptive. Passif : Quand les points de vie de Stukov sont bas, le temps de recharge d'Éruption éruptive est plus rapide.",
              "en": "Active: Spreads Weighted Pustule to nearby enemies and resets Bio-Kill Switch's cooldown. Passive: When Stukov's Health is low, Bio-Kill Switch recharges faster."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Régénération virale",
              "en": "Vigorous Reuptake"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_bio-killswitch.png",
            "description": {
              "fr": "Augmente les points de vie rendus par Éruption virale si un certain nombre d'alliés sont sous Virus régénérateur.",
              "en": "Increases the healing provided by Bio-Kill Switch if a certain number of allies are affected by Healing Pathogen."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Contamination de masse",
              "en": "Growing Infestation"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_lurkingarm.png",
            "description": {
              "fr": "Augmente la zone d'effet de Menace larvée sur la durée, mais sa durée devient limité.",
              "en": "Increases the area of effect of Lurking Arm over time, but its duration becomes limited."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Poussée éruptive",
              "en": "Massive Shove"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_massiveshove.png",
            "description": {
              "fr": "Pousse un ennemi jusqu'à ce qu'il percute un obstacle.",
              "en": "Pushes an enemy until they hit terrain."
            },
            "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_r1.mp4",
            "alternatives": [
              {
                "name": {
                  "fr": "Frappe chaotique",
                  "en": "Flailing Swipe"
                },
                "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_flailingswipe.jpg",
                "description": {
                  "fr": "Balaye les ennemis en face de lui plusieurs fois.",
                  "en": "Swipes enemies in front of him multiple times."
                },
                "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_r2.mp4"
              }
            ]
          },
          {
            "level": 13,
            "name": {
              "fr": "Réaction infectieuse",
              "en": "Virulent Reaction"
            },
            "icon": "assets/heroes/base_spells/stukov/images/talents/storm_ui_icon_stukov_lurkingarm_a.png",
            "description": {
              "fr": "Exploser les Agents infectieux sur les ennemis dans Menace larvée les immobilise.",
              "en": "Detonating Weighted Pustules on enemies inside Lurking Arm Roots them."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Souche résistante",
              "en": "Superstrain"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_healingpathogen.png",
            "description": {
              "fr": "Virus régénérateur rend des points de vie supplémentaires en cas d'étourdissement ou d'immobilisation",
              "en": "Healing Pathogen heals for an additional amount when the target is Stunned or Rooted."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Force de propulsion",
              "en": "Push Comes To Shove"
            },
            "icon": "assets/heroes/base_spells/stukov/images/spells/storm_ui_icon_stukov_massiveshove.png",
            "description": {
              "fr": "Poussée éruptive ralentit lorsque la cible percute un obstacle et peut voir son temps de recharge réduit.",
              "en": "Massive Shove slows the target when they hit terrain, and can have its cooldown reduced."
            },
            "demoYoutubeId": null,
            "alternatives": [
              {
                "name": {
                  "fr": "Chaos maîtrisé",
                  "en": "Controlled Chaos"
                },
                "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_flailingswipe.jpg",
                "description": {
                  "fr": "Frappes chaotiques touche une seule fois mais possède plusieurs charges.",
                  "en": "Flailing Swipe hits only once but has multiple charges."
                },
                "demoYoutubeId": null
              }
            ]
          }
        ]
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build Pustule",
          "en": "Pustule Build"
        },
        "summary": {
          "fr": "Gros burst et ralentissement sur l'explosion du W.",
          "en": "Huge burst and slow on W explosion."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1112111,Stukov]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Éclatement",
              "en": "Fetid Touch"
            },
            "icon": "",
            "description": {
              "fr": "Améliore W.",
              "en": "Improves W."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "VufmXqAOcAM",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      }
    ]
  },
  {
    "id": "tyrande",
    "enabled": true,
    "name": {
      "fr": "Tyrande",
      "en": "Tyrande"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tyrande.png",
    "headline": {
      "fr": "Soigneur utilitaire, avec étourdissements et réduction d'armure.",
      "en": "Utility Healer with stuns and Armor reduction."
    },
    "gameplay": {
      "fr": "Tyrande doit attaquer en permanence pour réduire les temps de recharge de ses soins et peut aider à burst une cible marquée.",
      "en": "Tyrande must keep attacking to reduce her healing cooldowns and help burst down marked targets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Marque du chasseur",
          "en": "Hunter's Mark"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_huntersmark.png",
        "description": {
          "fr": "Actif: Révèle et réduit l'armure d'un ennemi. Passif: les attaques de base de Tyrande lui rendent des points de vie, montant augmenté si la cible est marquée.",
          "en": "Active: Reveals an enemy and reduces their Armor. Passive: Tyrande's Basic Attacks heal her, with increased healing against marked targets."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Lumière d'Élune",
          "en": "Light of Elune"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_elunesgrace.png",
        "description": {
          "fr": "Soigne un allié. Les attaques de base réduisent le CD.",
          "en": "Heals an ally. Basic Attacks reduce its cooldown."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Sentinelle",
          "en": "Sentinel"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_sentinel.png",
        "description": {
          "fr": "Chouette qui scout et inflige des dégâts globaux.",
          "en": "Sends an Owl that scouts and deals global damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Éclat de lune",
          "en": "Lunar Flare"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_lunarflare.png",
        "description": {
          "fr": "Étourdit les ennemis dans une petite zone.",
          "en": "Stuns enemies in a small area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Éclipse d'Élune",
          "en": "Shadowstalk"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_shadowstalk.png",
        "description": {
          "fr": "Camoufle et soigne tous les alliés.",
          "en": "Stealths and heals all allied Heroes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Météores",
          "en": "Starfall"
        },
        "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_starfall.png",
        "description": {
          "fr": "Dégâts de zone et ralentissement.",
          "en": "Deals area damage and Slows enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Lance ta chouette pour scouter les boss.",
        "en": "Use your Owl to scout Bosses."
      },
      {
        "fr": "Marque la cible que ton tank engage.",
        "en": "Mark the target your tank engages on."
      },
      {
        "fr": "Les dégâts que fait Tyrande réduisent le temps de recharge son A, même les dégâts de sa capacité héroïque !",
        "en": "Any damage Tyrande deals reduces Light of Elune's cooldown, even the damage from her Heroic Ability!"
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build E",
          "en": "E Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Étourdissements réguliers et soins continus.",
          "en": "Reliable stuns and sustained healing."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T2332312,Tyrande]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Flèche lunaires",
              "en": "Moonlit Arrows"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_elunesgrace.png",
            "description": {
              "fr": "Les attaques de base réduisent davantage le temps de recharge du Lumière d'Élune.",
              "en": "Basic Attacks further reduce Light of Elune's cooldown."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Élue d'Élune",
              "en": "Elune's Chosen"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_talent_autoattack_heal.jpg",
            "description": {
              "fr": "Applique une marque sur un allié, les attaques de base de Tyrande le soigne.",
              "en": "Activate to make Tyrande's Basic Attacks heal the targeted allied Hero for 175% of the damage dealt."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Fureur de la chasseresse",
              "en": "Huntress' Fury"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_huntersmark.png",
            "description": {
              "fr": "Les attaques de base de Tyrande sur une cible sous Marque du chasseur rebondissent sur les héros adverses proches. Passif: Augmente la durée et la portée de Marque du chasseur.",
              "en": "Tyrande's Basic Attacks against targets with Hunter's Mark bounce to nearby enemy Heroes. Passive: increases Hunter's Mark duration and cast range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Météores",
              "en": "Starfall"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_starfall.png",
            "description": {
              "fr": "Zone de dégâts qui ralentit.",
              "en": "Creates a damaging area that Slows enemies."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Marque du forestier",
              "en": "Ranger's Mark"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_huntersmark.png",
            "description": {
              "fr": "Les attaques de base réduisent le temps de recharge de Marque du chasseur. Les attaques de base portées à une cible marquée réduisent le temps de recharge d'Éclat d'Élune.",
              "en": "Basic Attacks reduce Hunter's Mark's cooldown. Basic Attacks against marked targets reduce Lunar Flare's cooldown."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Harmonisation céleste",
              "en": "Celestial Attunement"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_elunesgrace.png",
            "description": {
              "fr": "Lumière d'Élune supprime les étourdissements, les silences et les ralentissements.",
              "en": "Light of Elune removes Stuns, Silences, and Slows from its target."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Courroux céleste",
              "en": "Celestial Wrath"
            },
            "icon": "assets/heroes/base_spells/tyrande/images/spells/storm_ui_icon_tyrande_starfall.png",
            "description": {
              "fr": "Météores applique Marque du chasseur et ralentit davantage.",
              "en": "Starfall applies Hunter's Mark and increases its Slow."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build soin",
          "en": "Healing Build"
        },
        "summary": {
          "fr": "Sniper à très longue distance pour poke.",
          "en": "Very long-range sniper build for poke."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T2332312,Tyrande]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Ranger",
              "en": "Ranger"
            },
            "icon": "",
            "description": {
              "fr": "Améliore W.",
              "en": "Improves Sentinel."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "UqAPjuoxI94",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces. Build non à jour dans la vidéo, mais le reste est toujours d'actualité.",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles. The build shown in the video is outdated, but the rest is still relevant."
        }
      }
    ]
  },
  {
    "id": "uther",
    "enabled": false,
    "name": {
      "fr": "Uther",
      "en": "Uther"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_uther.png",
    "headline": {
      "fr": "Soigneur tanky, armure et contrôle.",
      "en": "Tanky healer, armor and crowd control."
    },
    "gameplay": {
      "fr": "Uther joue en mêlée, encaisse les dégâts, étourdit les ennemis et confère une armure vitale avec ses soins.",
      "en": "Uther plays in melee, absorbs damage, stuns enemies, and grants vital armor with his heals."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Dévotion d'avant-garde",
          "en": "Vanguard"
        },
        "icon": "",
        "description": {
          "fr": "Les soins d'Uther donnent de l'armure. S'il meurt, il soigne en fantôme.",
          "en": "Uther's heals grant armor. If he dies, he heals as a ghost."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Lumière sacrée",
          "en": "Holy Light"
        },
        "icon": "",
        "description": {
          "fr": "Soin monocible massif.",
          "en": "Massive single-target heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Radiance sacrée",
          "en": "Holy Radiance"
        },
        "icon": "",
        "description": {
          "fr": "Vague qui soigne les alliés et blesse les ennemis.",
          "en": "Wave that heals allies and damages enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Marteau de la justice",
          "en": "Hammer of Justice"
        },
        "icon": "",
        "description": {
          "fr": "Étourdit un ennemi au corps-à-corps.",
          "en": "Stuns an enemy in melee range."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Bouclier divin",
          "en": "Divine Shield"
        },
        "icon": "",
        "description": {
          "fr": "Rend un allié invulnérable.",
          "en": "Makes an ally Invulnerable."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Tempête divine",
          "en": "Divine Storm"
        },
        "icon": "",
        "description": {
          "fr": "Étourdit tous les ennemis en zone.",
          "en": "Stuns all enemies in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "N'utilise pas tes soins juste pour la vie, utilise-les pour l'armure.",
        "en": "Do not just heal for HP, use heals for the armor buff."
      },
      {
        "fr": "N'hésite pas à mourir pour sauver ton équipe.",
        "en": "Do not hesitate to die to save your team as a ghost."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build Q",
          "en": "Q Build"
        },
        "summary": {
          "fr": "Soins massifs et réduction de CD sur soi.",
          "en": "Massive heals and self-CD reduction."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1111111,Uther]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": true,
        "order": 2,
        "label": {
          "fr": "Build Tank",
          "en": "Tank Build"
        },
        "summary": {
          "fr": "Joue comme un second tank avec ses contrôles.",
          "en": "Plays like a secondary tank with his CC."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T3332333,Uther]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Totem Colossal",
              "en": "Colossal Totem"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png",
            "description": {
              "fr": "Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.",
              "en": "Increases health, radius, and duration of the totem. Can be repositioned once."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Viveterre",
              "en": "Earthliving Enchant"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Renforce Salve de guerison pour les héros dont les points de vie sont bas.",
              "en": "Empowers Chain Heal for heroes at low health."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Totem lié à la terre",
              "en": "Grounded Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Réduis la vitesse d'attaque et la puissance de capacité, augmente la portée du totem.",
              "en": "Reduces attack and spell power of enemies in range."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Guérison ancestrale",
              "en": "Ancestral Healing"
            },
            "icon": "https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png",
            "description": {
              "fr": "Gros soin monocible, utilisable sur soi.",
              "en": "Massive single-target heal, usable on self."
            },
            "demoYoutubeId": null
          },
          {
            "level": 13,
            "name": {
              "fr": "Raz-de-marée",
              "en": "Tidal Waves"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg",
            "description": {
              "fr": "Réduit le temps de recharge de Salve de guérison et son coût en mana.",
              "en": "Reduces Chain Heal cooldown and mana cost."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Totem d’emprise de la terre",
              "en": "Earthgrasp Totem"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg",
            "description": {
              "fr": "Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.",
              "en": "When first spawned, the totem deals AoE damage and heavily slows."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Bénédiction du long-voyant",
              "en": "Farseer's Blessing"
            },
            "icon": "https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg",
            "description": {
              "fr": "Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.",
              "en": "A second Ancestral Healing triggers and heals in an AoE."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": []
  },
  {
    "id": "whitemane",
    "enabled": true,
    "name": {
      "fr": "Blanchetête",
      "en": "Whitemane"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_whitemane.png",
    "headline": {
      "fr": "Soigne en infligeant des dégâts, gestion du Zèle.",
      "en": "Heals by dealing damage, Zeal management."
    },
    "gameplay": {
      "fr": "Blanchetête applique Zèle à ses alliés, puis inflige un maximum de dégâts aux ennemis pour les soigner proportionnellement.",
      "en": "Whitemane applies Zeal to allies, then deals maximum damage to enemies to heal them proportionally."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Zèle",
          "en": "Zeal"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_zeal.png",
        "description": {
          "fr": "Les alliés avec Zèle sont soignés quand Blanchetête inflige des dégâts.",
          "en": "Allies with Zeal are healed when Whitemane deals damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "&",
        "name": {
          "fr": "Mansuétude",
          "en": "Clemency"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_clemency.png",
        "description": {
          "fr": "Canalise un laser de soin sur un allié. Retire du Désespoir.",
          "en": "Channels damage and slows an enemy."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Supplique",
          "en": "Desperate Plea"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_desperation.png",
        "description": {
          "fr": "Soigne un allié et génère du Désespoir. Désespoir: Coûte de plus en plus de mana.",
          "en": "Heals an ally and grants Zeal. Costs increasingly more mana."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Inquisition",
          "en": "Inquisition"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_inquisition.png",
        "description": {
          "fr": "Canalise des dégâts et ralentit un ennemi. Retire du Désespoir.",
          "en": "Channels damage and slows an enemy."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Flagellation",
          "en": "Searing Lash"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_lash.png",
        "description": {
          "fr": "Frappe en ligne, déclenche un second coup si un héros est touché.",
          "en": "Strikes in a line, strikes again if a hero is hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Égide écarlate",
          "en": "Scarlet Aegis"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_aegis.png",
        "description": {
          "fr": "Donne de l'armure, soigne et applique Zèle en zone.",
          "en": "Grants armor and Zeal in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Sainte colère",
          "en": "Divine Reckoning"
        },
        "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_reckoning.png",
        "description": {
          "fr": "Zone de dégâts qui rend du mana quand des héros sont touchés.",
          "en": "Massive AoE damage (and thus massive healing)."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Gère ton mana, ne spamme pas le A.",
        "en": "Manage your Mana, do not spam Desperate Plea."
      },
      {
        "fr": "Égide écarlate est parfait pour contrer les engages ennemis ou appliqué Zèle en masse.",
        "en": "Scarlet Aegis is perfect to counter enemy engages or to apply Zeal to multiple allies."
      },
      {
        "fr": "Utilise Mansuétude entre deux A pour consommer le moins de mana possible.",
        "en": "Use Clemency between Desperate Plea casts to minimize Mana consumption."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded Build"
        },
        "updatedAt": {
          "fr": "6 Mai 2026",
          "en": "May 6, 2026"
        },
        "summary": {
          "fr": "Build tourné autour du laser.",
          "en": "Build focused on Inquisition (W)."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T1231121,Whitemane]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Compassion",
              "en": "Compassion"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/talents/storm_ui_icon_whitemane_inquisition_lash.png",
            "description": {
              "fr": "Flagellation réduit le temps de recharge d'Inquisition. Les points de vie rendus aux héros avec des points de vie faibles sont augmentés.",
              "en": "Searing Lash reduces the cooldown of Inquisition. Healing is increased against low Health Heroes."
            },
            "demoYoutubeId": null
          },
          {
            "level": 4,
            "name": {
              "fr": "Martyre",
              "en": "Martyrdom"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/talents/storm_ui_icon_whitemane_desperation_alt_1.png",
            "description": {
              "fr": "Les soins de Supplique sont augmentés. Chaque Zèle augmente davantage le soin de Supplique.",
              "en": "Desperate Plea heals for more. Each active Zeal increases its healing."
            },
            "demoYoutubeId": null
          },
          {
            "level": 7,
            "name": {
              "fr": "Intercession",
              "en": "Intercession"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/talents/storm_ui_icon_whitemane_intercession.png",
            "description": {
              "fr": "Rend un allié Insensible.",
              "en": "Grant an ally Unstoppable."
            },
            "demoYoutubeId": null
          },
          {
            "level": 10,
            "name": {
              "fr": "Égide écarlate",
              "en": "Scarlet Aegis"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_aegis.png",
            "description": {
              "fr": "Donne de l'armure, soigne et applique Zèle en zone.",
              "en": "Grant Armor to allies, heal them, and apply Zeal in an area."
            },
            "demoYoutubeId": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_aegis.png"
          },
          {
            "level": 13,
            "name": {
              "fr": "Idolâtrie",
              "en": "Subjugation"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_inquisition.png",
            "description": {
              "fr": "Inquisition réduit les dégâts de l'adversaire.",
              "en": "Inquisition reduces the damage dealt by enemies."
            },
            "demoYoutubeId": null
          },
          {
            "level": 16,
            "name": {
              "fr": "Pénitence collective",
              "en": "Shared Punishment"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_inquisition.png",
            "description": {
              "fr": "Inquisition se propage à un ennemi proche de la cible, puis réduit leurs armures.",
              "en": "Inquisition spreads to a nearby enemy and reduces their Armor."
            },
            "demoYoutubeId": null
          },
          {
            "level": 20,
            "name": {
              "fr": "Croisade écarlate",
              "en": "Scarlet Crusade"
            },
            "icon": "assets/heroes/base_spells/whitemane/images/spells/storm_ui_icon_whitemane_aegis.png",
            "description": {
              "fr": "Augmente les soins procurés par Égide écarlate et rend les alliés Insensible.",
              "en": "Scarlet Aegis heals for more and grants Unstoppable to affected allies."
            },
            "demoYoutubeId": null
          }
        ]
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build Pitié (Q)",
          "en": "Plea (Q) Build"
        },
        "summary": {
          "fr": "Soins directs plus puissants mais mana intensif.",
          "en": "Stronger direct heals but very mana intensive."
        },
        "buildCodeTitle": {
          "fr": "A COLLER",
          "en": "PASTE"
        },
        "buildCode": "[T1112111,Whitemane]",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Martyre",
              "en": "Martyrdom"
            },
            "icon": "",
            "description": {
              "fr": "Améliore Q.",
              "en": "Improves Q."
            },
            "demoYoutubeId": null
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide express",
          "en": "Express Guide"
        },
        "youtubeId": "anZnNHdEhKM",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      }
    ]
  },
  {
    "id": "lucio",
    "enabled": true,
    "name": {
      "fr": "Lúcio",
      "en": "Lúcio"
    },
    "role": "Healer",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_lucio.png",
    "headline": {
      "fr": "En construction.",
      "en": "Under construction."
    },
    "gameplay": {
      "fr": "En construction.",
      "en": "Under construction."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Saute-Muraille",
          "en": "Push Off"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_accelerando.png",
        "description": {
          "fr": "Activable utilisable pendant Wall Ride qui permet à Lúcio de se propulser. Inflige des dégâts aux ennemis et les ralentit.",
          "en": "An ability that can be activated during Wall Ride, allowing Lúcio to propel himself forward. It deals damage to enemies and slows them down."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Onde sonore",
          "en": "Soundwave"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_soundwave.png",
        "description": {
          "fr": "Repousse les ennemis et leur inflige des dégats.",
          "en": "Pushes enemies back and deals damage to them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Crossfade",
          "en": "Crossfade"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_crossfade_all.png",
        "description": {
          "fr": "Diffuse l'un des deux Beats. Beat de soin : Soigne sur la durée Lúcio et ses alliés. Beat de vitesse : Augmente la vitesse de déplacement de Lúcio et ses alliés. ",
          "en": "Plays one of the two Beats. Healing Beat: Heals Lúcio and his allies over time. Speed Beat: Increases the movement speed of Lúcio and his allies. "
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Volume max.",
          "en": "Amp It Up"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_ampitup.png",
        "description": {
          "fr": "Augmente le soin procuré par Beat de soin ou augmente la vitesse de déplacement procuré par Beat de vitesse pendant une courte durée.",
          "en": "Increases the healing provided by \"Healing Beat\" or increases the movement speed provided by \"Speed Beat\" for a short time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Mur du son",
          "en": "Sound Barrier"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_soundbarrier.png",
        "description": {
          "fr": "Après une courte canalisation, applique un bouclier à Lúcio et ses alliés qui se réduit sur le temps.",
          "en": "After a brief channeling period, grants Lúcio and his allies a shield that gradually diminishes over time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Top là",
          "en": "High Five"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_highfive.png",
        "description": {
          "fr": "Lúcio va vers un allié pour le rendre Insensible et le soigner ainsi que lui-même. ",
          "en": "Lúcio moves toward an ally to make him Invulnerable and heal both them and himself. "
        },
        "demoYoutubeId": ""
      },
      {
        "key": "",
        "name": {
          "fr": "Wall Ride",
          "en": "Wall Ride"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_wallride.png",
        "description": {
          "fr": "Permet à Lúcio de glisser sur les décors de la carte, ce qui augmente sa vitesse de déplacement.",
          "en": "Allows Lúcio to slide across the map's terrain, increasing his movement speed. "
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "En construction.",
        "en": "Under construction."
      },
      {
        "fr": "En construction.",
        "en": "Under construction."
      },
      {
        "fr": "En construction.",
        "en": "Under construction."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build recommandé",
          "en": "Recommanded build"
        },
        "summary": {
          "fr": "LE seul build jouable",
          "en": "Under construction."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "Accelerando",
              "en": "Accelerando"
            },
            "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_wallride.png",
            "description": {
              "fr": "La vitesse de déplacement sous l'effet de Wall Ride augmente sur la durée.",
              "en": "Under construction."
            },
            "demoYoutubeId": ""
          },
          {
            "level": 4,
            "name": {
              "fr": "Double tempo",
              "en": "Supersonic"
            },
            "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_accelerando.png",
            "description": {
              "fr": "Tant que l'effet de Wall ride est actif, le temps de recharge de Saute-Muraille est réduit.",
              "en": "Under construction."
            },
            "demoYoutubeId": ""
          },
          {
            "level": 7,
            "name": {
              "fr": "Mauvaises ondes",
              "en": "Reverse Amp"
            },
            "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_crossfade_all.png",
            "description": {
              "fr": "Tant que Volume Max est actif, le Beat de soin inflige des dégâts et le Beat de déplacement ralentit.",
              "en": "Under construction."
            },
            "demoYoutubeId": ""
          },
          {
            "level": 10,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "aqz-KE-bpKQ"
          },
          {
            "level": 13,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "M7lc1UVf-VE"
          },
          {
            "level": 16,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ysz5S6PUM-U"
          },
          {
            "level": 20,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ScMzIvxBSi4"
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      },
      {
        "enabled": false,
        "order": 2,
        "label": {
          "fr": "Build 2 (À venir)",
          "en": "Build 2 (TBA)"
        },
        "summary": {
          "fr": "En construction.",
          "en": "Under construction."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "",
        "videos": [],
        "talents": [
          {
            "level": 1,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "M7lc1UVf-VE"
          },
          {
            "level": 4,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ysz5S6PUM-U"
          },
          {
            "level": 7,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ScMzIvxBSi4"
          },
          {
            "level": 10,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "aqz-KE-bpKQ"
          },
          {
            "level": 13,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "M7lc1UVf-VE"
          },
          {
            "level": 16,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ysz5S6PUM-U"
          },
          {
            "level": 20,
            "name": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "icon": "",
            "description": {
              "fr": "En construction.",
              "en": "Under construction."
            },
            "demoYoutubeId": "ScMzIvxBSi4"
          }
        ],
        "updatedAt": {
          "fr": "",
          "en": ""
        }
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide Express",
          "en": "Guide Express"
        },
        "youtubeId": "https://youtu.be/lA3w9KGURrg"
      }
    ]
  }
];
