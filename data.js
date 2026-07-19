const APP_CONFIG = {
  "showGuideBadge": false
};

const STREAMER_CONFIG = {
  "logoImage": "",
  "siteTitle": {
    "fr": "EOWEA BUILDS",
    "en": "EOWEA BUILDS"
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
  ],
  "navLinks": [
    {
      "enabled": true,
      "label": {
        "fr": "Patchs",
        "en": "Patches"
      },
      "url": "https://nexus-patch-notes.github.io",
      "newTab": true
    }
  ],
  "latestVideos": [
    {
      "title": {
        "fr": "Dehaka Grand Master Gameplay - Analyse & Explications",
        "en": "Dehaka Grandmaster Gameplay - Analysis & Explanations"
      },
      "youtubeId": "Nfp1w2JU-DQ"
    },
    {
      "title": {
        "fr": "Tableau Noir Dehaka Bronze 5",
        "en": "Dehaka Bronze 5 Blackboard"
      },
      "youtubeId": "https://youtu.be/QQ7259LX4gc?si=s1_XK3TrBcDE0ti1"
    },
    {
      "title": {
        "fr": "Zagara Grand Master Gameplay - Analyse & Explications",
        "en": "Zagara Grandmaster Gameplay - Analysis & Explanations"
      },
      "youtubeId": "https://youtu.be/iPxEnYt_2Y0"
    }
  ],
  "patchVideos": [
    {
      "title": {
        "fr": "Un NOUVEAU GROS Patch HotS sur le PTR",
        "en": "A NEW BIG HotS Patch on the PTR"
      },
      "youtubeId": "https://youtu.be/KBS90rC-w5k?si=E1vDh5K36u2zpveA"
    },
    {
      "title": {
        "fr": "Patch PTR Juin 2026 ",
        "en": "June 2026 PTR Patch "
      },
      "youtubeId": "https://youtu.be/I3DyDDecWgM?si=0_y_wQHn99dNslst"
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
          "fr": "Explosion de zone après un court délai. Amélioré : Zone d'effet augmenté.",
          "en": "AoE explosion after a short delay. Empowered: Increased area of effect."
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
          "fr": "Dégâts sur la durée qui explosent et se propagent aux ennemis proches. Amélioré : Ne coûte plus de mana et n'a pas de temps de recharge.",
          "en": "DoT that explodes and spreads to nearby enemies. Empowered: No longer costs mana and has no cooldown."
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
          "fr": "Étourdit le premier ennemi touché. Amélioré : Touche plusieurs ennemis.",
          "en": "Stuns the first enemy hit. Empowered: Hits multiple enemies."
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
          "en": "Recommended Build"
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
        "updatedAt": {
          "fr": "14 Juillet 2026",
          "en": "July 14, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6josup2d",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joaeole",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jorbvgs",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joc5n98",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jod13x2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jouhnqn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jobfvo1",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo4c48q",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jocmbtu",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo6zsl2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joeg80q",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jod13x2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo3iuli",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jowrwxu",
            "alternativeIds": []
          }
        ]
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
    ],
    "talentPool": [
      {
        "id": "tmrryr6josup2d",
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
        "id": "tmrryr6joaeole",
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
        "id": "tmrryr6jorbvgs",
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
        "id": "tmrryr6joc5n98",
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
        "id": "tmrryr6jod13x2",
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
        "id": "tmrryr6jouhnqn",
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
        "id": "tmrryr6jobfvo1",
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
      },
      {
        "id": "tmrryr6jo4c48q",
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
        "id": "tmrryr6jocmbtu",
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
        "id": "tmrryr6jo6zsl2",
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
        "id": "tmrryr6joeg80q",
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
        "id": "tmrryr6jo3iuli",
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
        "id": "tmrryr6jowrwxu",
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
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_flash_heal.png",
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
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_divine_star.png",
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
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_chastise.png",
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
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_holy_word_salvation.png",
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
        "icon": "assets/heroes/base_spells/anduin/images/spells/storm_ui_icon_anduin_light_bomb.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joy25rj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joeu4zo",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jofjb75",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joopacq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jopq9n2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo7jzzn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jop1tna",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joy25rj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joeu4zo",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jofjb75",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joopacq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jopq9n2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo7jzzn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jop1tna",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joy25rj",
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
        "id": "tmrryr6joeu4zo",
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
        "id": "tmrryr6jofjb75",
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
        "id": "tmrryr6joopacq",
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
        "id": "tmrryr6jopq9n2",
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
        "id": "tmrryr6jo7jzzn",
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
        "id": "tmrryr6jop1tna",
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
    ]
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jop5xhv",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jogpczq",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joztnl3",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joh25bq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo4kb21",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jofazqq",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joboe03",
            "alternativeIds": []
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo32lfc",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jogpczq",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jow9pm2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joh25bq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joixvcf",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo349qt",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joboe03",
            "alternativeIds": []
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
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=5nT8hJGclic"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jop5xhv",
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
        "id": "tmrryr6jogpczq",
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
        "id": "tmrryr6joztnl3",
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
        "id": "tmrryr6joh25bq",
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
        "id": "tmrryr6jo4kb21",
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
        "id": "tmrryr6jofazqq",
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
        "id": "tmrryr6joboe03",
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
      },
      {
        "id": "tmrryr6jo32lfc",
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
        "id": "tmrryr6jow9pm2",
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
        "id": "tmrryr6joixvcf",
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
        "id": "tmrryr6jo349qt",
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jome9rw",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jor0547",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joakoqq",
            "alternativeIds": [
              "tmrryr6jo0t2i6"
            ]
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jolvf0t",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joepa11",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joo1r0b",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joubnhr",
            "alternativeIds": []
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
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=xtlSafuiFOQ"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jome9rw",
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
        "id": "tmrryr6jor0547",
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
        "id": "tmrryr6joakoqq",
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
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0t2i6",
        "level": 7,
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
      },
      {
        "id": "tmrryr6jolvf0t",
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
        "id": "tmrryr6joepa11",
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
        "id": "tmrryr6joo1r0b",
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
        "id": "tmrryr6joubnhr",
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo1dr6a",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jodjpjn",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozz1s4",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joo4yqd",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joejko6",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jorbr2s",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jodwv3i",
            "alternativeIds": []
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jod429a",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jop0u2u",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozz1s4",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joo4yqd",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joejko6",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jowomnf",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo35wyo",
            "alternativeIds": []
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
    ],
    "talentPool": [
      {
        "id": "tmrryr6jo1dr6a",
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
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodjpjn",
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
        "id": "tmrryr6jozz1s4",
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
        "id": "tmrryr6joo4yqd",
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
        "id": "tmrryr6joejko6",
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
        "id": "tmrryr6jorbr2s",
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
        "id": "tmrryr6jodwv3i",
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
      },
      {
        "id": "tmrryr6jod429a",
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
        "id": "tmrryr6jop0u2u",
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
        "id": "tmrryr6jowomnf",
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
        "id": "tmrryr6jo35wyo",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_dragon_queen.png",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_gift_of_life.png",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_abundance.png",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_flame_buffet.png",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_life_binder.png",
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
        "icon": "assets/heroes/base_spells/alexstrasza/images/spells/storm_ui_icon_alexstrasza_cleansing_flame.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joeq0ja",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jou3tky",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jokn8xj",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joiests",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jol2wqz",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joxdbs0",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo8uzwx",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joeq0ja",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jou3tky",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jokn8xj",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joiests",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jol2wqz",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joxdbs0",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo8uzwx",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joeq0ja",
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
        "id": "tmrryr6jou3tky",
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
        "id": "tmrryr6jokn8xj",
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
        "id": "tmrryr6joiests",
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
        "id": "tmrryr6jol2wqz",
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
        "id": "tmrryr6joxdbs0",
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
        "id": "tmrryr6jo8uzwx",
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
    ]
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_aim_down_sights.png",
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_healing_dart.png",
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_biotic_grenade.png",
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_sleep_dart.png",
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_nano_bost.png",
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
        "icon": "assets/heroes/base_spells/ana/images/spells/storm_ui_icon_ana_overwatch.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jotiqpq",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jorgbfi",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo5tq30",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo6yhcn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jon5jc2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joljrqh",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jozz7tm",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jotiqpq",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jorgbfi",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo5tq30",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo6yhcn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jon5jc2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joljrqh",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jozz7tm",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jotiqpq",
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
        "id": "tmrryr6jorgbfi",
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
        "id": "tmrryr6jo5tq30",
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
        "id": "tmrryr6jo6yhcn",
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
        "id": "tmrryr6jon5jc2",
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
        "id": "tmrryr6joljrqh",
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
        "id": "tmrryr6jozz7tm",
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
    ]
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jofg48b",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jorifo1",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodgthn",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jowt03g",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jocysqw",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jopudm3",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jocv1nn",
            "alternativeIds": []
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jom09qo",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo273cn",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jocweb8",
            "alternativeIds": [
              "tmrryr6jodgthn"
            ]
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jowt03g",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo4uzyq",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jopudm3",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jocv1nn",
            "alternativeIds": []
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
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malgany's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=rkF9kvUTNk4"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jofg48b",
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
        "id": "tmrryr6jorifo1",
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
        "id": "tmrryr6jodgthn",
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
        "id": "tmrryr6jowt03g",
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
        "id": "tmrryr6jocysqw",
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
        "id": "tmrryr6jopudm3",
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
        "id": "tmrryr6jocv1nn",
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
      },
      {
        "id": "tmrryr6jom09qo",
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
        "id": "tmrryr6jo273cn",
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
        "id": "tmrryr6jocweb8",
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
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4uzyq",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_trait1.png",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_dash.png",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_breath0fheaven.png",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_deadlyreach.png",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_sevensidedstrike.png",
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
        "icon": "assets/heroes/base_spells/kharazim/images/spells/storm_ui_icon_monk_divinepalm.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joui4y6",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joa02vm",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joykuho",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joh3ve9",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jottn94",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6job0tif",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joau8lk",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joui4y6",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joa02vm",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joykuho",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joh3ve9",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jottn94",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6job0tif",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joau8lk",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joui4y6",
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
        "id": "tmrryr6joa02vm",
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
        "id": "tmrryr6joykuho",
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
        "id": "tmrryr6joh3ve9",
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
        "id": "tmrryr6jottn94",
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
        "id": "tmrryr6job0tif",
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
        "id": "tmrryr6joau8lk",
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
    ]
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_fastfeet.png",
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_healingbrew.png",
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_cloudserpent.png",
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_blindingwind.png",
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_jugofathousandcups.png",
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
        "icon": "assets/heroes/base_spells/lili/images/spells/storm_ui_icon_lili_waterdragon.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johevnj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jobg6i4",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo0r4c1",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jon76p9",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joi0k87",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jofjzpn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joscwni",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johevnj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jobg6i4",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo0r4c1",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jon76p9",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joi0k87",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jofjzpn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joscwni",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6johevnj",
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
        "id": "tmrryr6jobg6i4",
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
        "id": "tmrryr6jo0r4c1",
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
        "id": "tmrryr6jon76p9",
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
        "id": "tmrryr6joi0k87",
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
        "id": "tmrryr6jofjzpn",
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
        "id": "tmrryr6joscwni",
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
    ]
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_caduceusreactor.png",
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_healingbeam.png",
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_deployshield.png",
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_displacementgrenade.png",
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_stim.png",
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
        "icon": "assets/heroes/base_spells/ltmorales/images/spells/storm_ui_icon_medic_medivacdropship.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo9zwh9",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0cg7a",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodpj3a",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jobpccn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joi10l5",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jomqwbp",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jonimet",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo9zwh9",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0cg7a",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodpj3a",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jobpccn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joi10l5",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jomqwbp",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jonimet",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo9zwh9",
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
        "id": "tmrryr6jo0cg7a",
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
        "id": "tmrryr6jodpj3a",
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
        "id": "tmrryr6jobpccn",
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
        "id": "tmrryr6joi10l5",
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
        "id": "tmrryr6jomqwbp",
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
        "id": "tmrryr6jonimet",
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
    ]
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo1ctvl",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jore7pp",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joavs7q",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jok08jz",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jom7lz6",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jogsl5g",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jolpvlj",
            "alternativeIds": []
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joly4w2",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6johb0pd",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joxw1hy",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jou7rf3",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jobvr7p",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jot3iju",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jof5cds",
            "alternativeIds": []
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
        "youtubeId": "auMuOt9X1FQ",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces.",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles and English AI voice."
        }
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=7VnV7bh9GeY"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jo1ctvl",
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
        "id": "tmrryr6jore7pp",
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
        "id": "tmrryr6joavs7q",
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
        "id": "tmrryr6jok08jz",
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
        "id": "tmrryr6jom7lz6",
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
        "id": "tmrryr6jogsl5g",
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
        "id": "tmrryr6jolpvlj",
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
      },
      {
        "id": "tmrryr6joly4w2",
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
        "id": "tmrryr6johb0pd",
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
        "id": "tmrryr6joxw1hy",
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
        "id": "tmrryr6jou7rf3",
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
        "id": "tmrryr6jobvr7p",
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
        "id": "tmrryr6jot3iju",
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
        "id": "tmrryr6jof5cds",
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo198ci",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joxl4ad",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo7l2de",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo7i88o",
            "alternativeIds": [
              "tmrryr6jo6tk4z"
            ]
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo10dez",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jou2537",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo02dpa",
            "alternativeIds": [
              "tmrryr6joxwsxq"
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jotcxbw",
            "alternativeIds": []
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
        "youtubeId": "VufmXqAOcAM",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=qWDSnOgXIeA"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jo198ci",
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
        "id": "tmrryr6joxl4ad",
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
        "id": "tmrryr6jo7l2de",
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
        "id": "tmrryr6jo7i88o",
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
        "demoYoutubeId": "assets/heroes/base_spells/stukov/videos/spells/stukov_r1.mp4"
      },
      {
        "id": "tmrryr6jo6tk4z",
        "level": 10,
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
      },
      {
        "id": "tmrryr6jo10dez",
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
        "id": "tmrryr6jou2537",
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
        "id": "tmrryr6jo02dpa",
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
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joxwsxq",
        "level": 20,
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
      },
      {
        "id": "tmrryr6jotcxbw",
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo5wcgu",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joa0l8n",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo0ea2i",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo11r25",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jokobuh",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo38r1p",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joj6pwf",
            "alternativeIds": []
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joux1d1",
            "alternativeIds": []
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
        "youtubeId": "UqAPjuoxI94",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces. Build non à jour dans la vidéo, mais le reste est toujours d'actualité.",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles. The build shown in the video is outdated, but the rest is still relevant."
        }
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=D_qs3gSMgNY"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6jo5wcgu",
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
        "id": "tmrryr6joa0l8n",
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
        "id": "tmrryr6jo0ea2i",
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
        "id": "tmrryr6jo11r25",
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
        "id": "tmrryr6jokobuh",
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
        "id": "tmrryr6jo38r1p",
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
        "id": "tmrryr6joj6pwf",
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
      },
      {
        "id": "tmrryr6joux1d1",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_eternaldevotion.png",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_holylight.png",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_holyradiance.png",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_hammerofjustice.png",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_divineshield.png",
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
        "icon": "assets/heroes/base_spells/uther/images/spells/storm_ui_icon_uther_divinestorm.png",
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joiw0g8",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo83h5w",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozq27b",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo3kqgp",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo3f78a",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo5uuj6",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joafxbi",
            "alternativeIds": []
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joiw0g8",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo83h5w",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozq27b",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo3kqgp",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo3f78a",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo5uuj6",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joafxbi",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joiw0g8",
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
        "id": "tmrryr6jo83h5w",
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
        "id": "tmrryr6jozq27b",
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
        "id": "tmrryr6jo3kqgp",
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
        "id": "tmrryr6jo3f78a",
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
        "id": "tmrryr6jo5uuj6",
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
        "id": "tmrryr6joafxbi",
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
    ]
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
          "fr": "Les alliés avec Zèle sont soignés quand Blanchetête inflige des dégâts. Actif  : Augmente la puissance de capacité et réduit l'armure de Blanchetête. ",
          "en": "Allies with Zeal are healed when Whitemane deals damage. Active: Increases Whitemane's spell power and reduces her armor. "
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
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joatafp",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo3sgqb",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6josvjkq",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jojnohm",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joqdu17",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jonkn4s",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo7szcd",
            "alternativeIds": []
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo7l6vs",
            "alternativeIds": []
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
        "youtubeId": "anZnNHdEhKM",
        "desc": {
          "fr": "Guide rapide pour apprendre les mécaniques de base et quelques astuces",
          "en": "Quick guide to learn basic mechanics and some tips. In French, with English subtitles."
        }
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=wxn44r6DQRw"
      }
    ],
    "talentPool": [
      {
        "id": "tmrryr6joatafp",
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
        "id": "tmrryr6jo3sgqb",
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
        "id": "tmrryr6josvjkq",
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
        "id": "tmrryr6jojnohm",
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
        "id": "tmrryr6joqdu17",
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
        "id": "tmrryr6jonkn4s",
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
        "id": "tmrryr6jo7szcd",
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
      },
      {
        "id": "tmrryr6jo7l6vs",
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
      "fr": "Soins sur la durée, mobilité et protection des alliés.",
      "en": "Healing over time, mobility, and protection of allies."
    },
    "gameplay": {
      "fr": "Lúcio peut soigner sur la durée ainsi qu'apporter de la vitesse de déplacement à son équipe. Il possède une énorme mobilité. ",
      "en": "Lúcio can provide sustained healing and grant his team movement speed. He has tremendous mobility. "
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
        "fr": "Pense à toujours être en Wall Ride afin de profiter au maximum de ta mobilité.",
        "en": "Remember to always stay in the Wall Ride position to make the most of your mobility."
      },
      {
        "fr": "Ton Onde Sonore (A) servira dans la majorité des cas à protéger tes alliés et non à juste faire des dégâts.",
        "en": "In most cases, your Soundwave (Q) will be used to protect your allies rather than just to deal damage."
      },
      {
        "fr": "Le beat de Soin est de couleur jaune, et non vert qui est le Beat de déplacement. ",
        "en": "Healing's beat is yellow, not green, which is the movement beat. "
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
          "fr": "LE SEUL BUILD JOUABLE",
          "en": "THE ONLY PLAYABLE BUILD"
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE IN TALENT TREE"
        },
        "buildCode": "[T2322222,Lucio]",
        "videos": [],
        "updatedAt": {
          "fr": "17 Juillet 2026",
          "en": "July 17, 2026 "
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jofzn8j",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jow6vxf",
            "alternativeIds": [
              "tmrryr6jolzx95"
            ]
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jorjwu1",
            "alternativeIds": [
              "tmrryr6jos8k4e"
            ]
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jokntzy",
            "alternativeIds": [
              "tmrryr6jox2br4"
            ]
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo78l3k",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jofk3td",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jop6d0c",
            "alternativeIds": [
              "tmrryr6jobmfb8"
            ]
          }
        ]
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
        "updatedAt": {
          "fr": "",
          "en": ""
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jolrbje",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jose80b",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joo20az",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo7e4aa",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo3xmty",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jojw3or",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jokvrk1",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [
      {
        "title": {
          "fr": "Guide Express",
          "en": "Guide Express"
        },
        "youtubeId": "https://youtu.be/lA3w9KGURrg"
      },
      {
        "title": {
          "fr": "Guide de Malganyr",
          "en": "Malganyr's Guide"
        },
        "youtubeId": "https://www.youtube.com/watch?v=BBs6DDOFGS8"
      }
    ],
    "isNew": true,
    "talentPool": [
      {
        "id": "tmrryr6jofzn8j",
        "level": 1,
        "name": {
          "fr": "Accelerando",
          "en": "Accelerando"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_wallride.png",
        "description": {
          "fr": "La vitesse de déplacement sous l'effet de Wall Ride augmente sur la durée.",
          "en": "Movement speed while under the effect of Wall Ride increases over time."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jow6vxf",
        "level": 4,
        "name": {
          "fr": "Double tempo",
          "en": "Supersonic"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_accelerando.png",
        "description": {
          "fr": "Tant que l'effet de Wall ride est actif, le temps de recharge de Saute-Muraille est réduit.",
          "en": "As long as the Wall Ride effect is active, the cooldown for Push Off is reduced."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolzx95",
        "level": 4,
        "name": {
          "fr": "Mur d'amplis",
          "en": "Off the Wall"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_soundwave_a.png",
        "description": {
          "fr": "Toucher un ennemi avec Onde Sonore pendant l'effet de Wall Ride, réduit le temps de recharge et rend du mana. ",
          "en": "Hitting an enemy with Soundwave while the Wall Ride effect is active reduces the cooldown and restores mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jorjwu1",
        "level": 7,
        "name": {
          "fr": "Mauvaises ondes",
          "en": "Reverse Amp"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_crossfade_all.png",
        "description": {
          "fr": "Tant que Volume Max est actif, le Beat de soin inflige des dégâts et le Beat de déplacement ralentit.",
          "en": "As long as Amp It up is active, the Healing Beat deals damage and the Movement Beat slows you down."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jos8k4e",
        "level": 7,
        "name": {
          "fr": "Enceinte nomade",
          "en": "Boombox"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_fineshrine.png",
        "description": {
          "fr": "Pose une enceinte qui reproduit le beat joué pet applique de l'armure aux héros alliés présents dans la zone. Volume Max. augmente les effets. ",
          "en": "Place a boombox that plays the beat and applies armor to allied heroes in the area. Amp It Up increases the effects. "
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokntzy",
        "level": 10,
        "name": {
          "fr": "Top là",
          "en": "High Five"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_highfive.png",
        "description": {
          "fr": "Lúcio va vers un allié pour le rendre Insensible et le soigner ainsi que lui-même. ",
          "en": "After a brief channeling period, grants Lúcio and his allies a shield that gradually diminishes over time."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox2br4",
        "level": 10,
        "name": {
          "fr": "Mur du son",
          "en": "Sound Barrier"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_soundbarrier.png",
        "description": {
          "fr": "Après une courte canalisation, applique un bouclier à Lúcio et ses alliés qui se réduit sur le temps.",
          "en": "After a brief channeling period, grants Lúcio and his allies a shield that gradually diminishes over time."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo78l3k",
        "level": 13,
        "name": {
          "fr": "Patins de combat",
          "en": "Heavy Casters"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_accelerando.png",
        "description": {
          "fr": "Saute-Muraille ne ralentit plus, mais étourdit.",
          "en": "Push Off no longer slows enemies down, but stuns them."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofk3td",
        "level": 16,
        "name": {
          "fr": "Haute fréquence",
          "en": "Up the Frequency"
        },
        "icon": "assets/heroes/base_spells/lucio/images/talents/storm_ui_icon_lucio_ampitup_b.png",
        "description": {
          "fr": "Les attaques de base réduisent le temps de recharge de Volume Max. Passif : Augmente la portée des attaques de base.",
          "en": "Basic attacks reduce the cooldown of Volume Max. Passive: Increases auto-attack range."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jop6d0c",
        "level": 20,
        "name": {
          "fr": "Mix offensif",
          "en": "Mixing Fire"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_highfive.png",
        "description": {
          "fr": "Top là peut désormais infliger des dégâts aux ennemis et leur appliquer un anti-soin. Passif : Réduit le temps de recharge et le coût en mana de Top là. ",
          "en": "High Five can now deal damage to enemies and apply a healing reduction effect to them. Passive: Reduces the cooldown and mana cost of High Five."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jobmfb8",
        "level": 20,
        "name": {
          "fr": "Méga-teuf",
          "en": "House Party"
        },
        "icon": "assets/heroes/base_spells/lucio/images/spells/storm_ui_icon_lucio_crossfade_all.png",
        "description": {
          "fr": "Selon le nombre de héros présents dans Crossfade, le soin est augmenté.",
          "en": "The amount of healing is increased based on the number of heroes present in Crossfade."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolrbje",
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
        "id": "tmrryr6jose80b",
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
        "id": "tmrryr6joo20az",
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
        "id": "tmrryr6jo7e4aa",
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
        "id": "tmrryr6jo3xmty",
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
        "id": "tmrryr6jojw3or",
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
        "id": "tmrryr6jokvrk1",
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
    ]
  },
  {
    "id": "abathur",
    "enabled": false,
    "name": {
      "fr": "Abathur",
      "en": "Abathur"
    },
    "role": "Support",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_abathur.png",
    "headline": {
      "fr": "Soutien global qui influence toute la carte sans jamais y être.",
      "en": "Global support who influences the whole map without ever being there."
    },
    "gameplay": {
      "fr": "Abathur reste à l'abri et se greffe sur ses alliés pour les protéger et amplifier leurs dégâts, tout en poussant les lignes avec ses sbires.",
      "en": "Abathur stays safe and symbiotes onto allies to protect them and amplify their damage, while pushing lanes with his minions."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Souche de criquets",
          "en": "Locust Strain"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_spawnlocust.png",
        "description": {
          "fr": "Génère régulièrement des criquets qui poussent les lignes.",
          "en": "Periodically spawns locusts that push lanes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Symbiote",
          "en": "Symbiote"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_symbiote.png",
        "description": {
          "fr": "Se greffe sur un allié pour lui donner un bouclier et des capacités.",
          "en": "Attaches to an ally, granting a shield and extra abilities."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Nid toxique",
          "en": "Toxic Nest"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_toxicnest.png",
        "description": {
          "fr": "Pose une mine qui explose au passage d'un ennemi.",
          "en": "Places a mine that explodes when an enemy walks over it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Monstruosité évoluée",
          "en": "Evolve Monstrosity"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_evolvemonstrosity.png",
        "description": {
          "fr": "Crée une monstruosité qui grandit à chaque victime.",
          "en": "Creates a Monstrosity that grows with every kill."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Évolution ultime",
          "en": "Ultimate Evolution"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_ultimateevolution.png",
        "description": {
          "fr": "Clone un héros allié et le contrôle temporairement.",
          "en": "Clones an allied Hero and controls it temporarily."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Tunnel profond",
          "en": "Deep Tunnel"
        },
        "icon": "assets/heroes/base_spells/abathur/images/spells/storm_ui_icon_abathur_mount.png",
        "description": {
          "fr": "Se téléporte vers n'importe quelle zone visible de la carte.",
          "en": "Teleports to any visible area of the map."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne te fais jamais surprendre : ta position réelle doit rester secrète.",
        "en": "Never get caught: your real position must stay hidden."
      },
      {
        "fr": "Symbiote sur le tank pendant un engagement, sur un assassin pour les dégâts.",
        "en": "Symbiote the tank during an engage, an assassin for damage."
      },
      {
        "fr": "Nids toxiques posés dans les buissons donnent de la vision et de la sécurité.",
        "en": "Toxic Nests in bushes give vision and safety."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Abathur]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johcnly",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jozvn10",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo65u4b",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jomwjcq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jowkmum",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jozch9k",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo06qcu",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6johcnly",
        "level": 1,
        "name": {
          "fr": "Pressurized Glands",
          "en": "Pressurized Glands"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_spikeburst.png",
        "description": {
          "fr": "Increases the range of Symbiote's Spike Burst by 25% and decreases the cooldown by 1 second.",
          "en": "Increases the range of Symbiote's Spike Burst by 25% and decreases the cooldown by 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozvn10",
        "level": 4,
        "name": {
          "fr": "Adrenal Overload",
          "en": "Adrenal Overload"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_symbiote.png",
        "description": {
          "fr": "Heroic Symbiote hosts gain 25% increased Attack Speed.",
          "en": "Heroic Symbiote hosts gain 25% increased Attack Speed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo65u4b",
        "level": 7,
        "name": {
          "fr": "Vile Nest",
          "en": "Vile Nest"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_toxicnest.png",
        "description": {
          "fr": "Toxic Nests Slow enemy Movement Speed by 40% for 2.5 seconds.",
          "en": "Toxic Nests Slow enemy Movement Speed by 40% for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomwjcq",
        "level": 10,
        "name": {
          "fr": "Ultimate Evolution",
          "en": "Ultimate Evolution"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_ultimateevolution.png",
        "description": {
          "fr": "Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Spell Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability.",
          "en": "Clone target allied Hero and control it for 20 seconds. Abathur has perfected the clone, granting it 20% Spell Power, 20% bonus Attack Damage, and 10% bonus Movement Speed. Cannot use their Heroic Ability."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowkmum",
        "level": 13,
        "name": {
          "fr": "Spatial Efficiency",
          "en": "Spatial Efficiency"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_stab.png",
        "description": {
          "fr": "Symbiote's Stab gains 1 additional charge and its cooldown is reduced by .5 seconds.",
          "en": "Symbiote's Stab gains 1 additional charge and its cooldown is reduced by .5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozch9k",
        "level": 16,
        "name": {
          "fr": "Envenomed Spikes",
          "en": "Envenomed Spikes"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_spikeburst.png",
        "description": {
          "fr": "Abathur's Symbiote's Spike Burst also Slows enemy Movement Speed by 40% for 2 seconds.",
          "en": "Abathur's Symbiote's Spike Burst also Slows enemy Movement Speed by 40% for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo06qcu",
        "level": 20,
        "name": {
          "fr": "Evolutionary Link",
          "en": "Evolutionary Link"
        },
        "icon": "assets/heroes/base_spells/abathur/images/talents/storm_ui_icon_abathur_ultimateevolution.png",
        "description": {
          "fr": "Increase the duration of Ultimate Evolution by 50%.  As long as the Ultimate Evolution is alive, the original target of the clone gains a Shield equal to 35% of their maximum Health.  Refreshes every 5 seconds.",
          "en": "Increase the duration of Ultimate Evolution by 50%.  As long as the Ultimate Evolution is alive, the original target of the clone gains a Shield equal to 35% of their maximum Health.  Refreshes every 5 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "alarak",
    "enabled": false,
    "name": {
      "fr": "Alarak",
      "en": "Alarak"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_alarak.png",
    "headline": {
      "fr": "Assassin de mêlée à burst énorme qui punit les erreurs de placement.",
      "en": "High-burst melee assassin who punishes positioning mistakes."
    },
    "gameplay": {
      "fr": "Alarak repousse une cible avec Télékinésie puis enchaîne Frappe discordante et Vague de foudre. Chaque héros tué augmente définitivement ses dégâts.",
      "en": "Alarak shoves a target with Telekinesis, then chains Discord Strike and Lightning Surge. Every Hero takedown permanently increases his damage."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Sadisme",
          "en": "Sadism"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_sadism.png",
        "description": {
          "fr": "Tes dégâts et tes soins augmentent avec tes éliminations.",
          "en": "Your damage and self-healing increase with takedowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Frappe discordante",
          "en": "Discord Strike"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_discordstrike.png",
        "description": {
          "fr": "Cône de dégâts qui réduit les ennemis au silence.",
          "en": "Cone of damage that silences enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Télékinésie",
          "en": "Telekinesis"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_telekinesis.png",
        "description": {
          "fr": "Pousse les héros dans la direction ciblée.",
          "en": "Pushes Heroes in the targeted direction."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Vague de foudre",
          "en": "Lightning Surge"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_lightningsurge.png",
        "description": {
          "fr": "Éclair qui rebondit entre les ennemis.",
          "en": "Lightning that bounces between enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Charge mortelle",
          "en": "Deadly Charge"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_recklesscharge.png",
        "description": {
          "fr": "Charge canalisée qui inflige d'énormes dégâts en ligne.",
          "en": "Channeled charge dealing huge damage in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Contre-attaque",
          "en": "Counter-Strike"
        },
        "icon": "assets/heroes/base_spells/alarak/images/spells/storm_ui_icon_alarak_counterstrike.png",
        "description": {
          "fr": "Bloque tous les dégâts et les renvoie en zone.",
          "en": "Blocks all damage and reflects it in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Télékinésie repousse aussi les alliés : sers-t'en pour sauver ou engager.",
        "en": "Telekinesis also pushes allies: use it to save or engage."
      },
      {
        "fr": "Ton Sadisme augmente à chaque élimination : cherche les prises sûres.",
        "en": "Your Sadism grows with every takedown: look for safe kills."
      },
      {
        "fr": "Contre-attaque bloque les dégâts et les renvoie : utilise-la en engage.",
        "en": "Counter-Strike blocks and reflects damage: use it while engaging."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Alarak]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joqxfra",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joujm1e",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozk5kx",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jopy7wv",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jokgryl",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jonztr1",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jogsf80",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joqxfra",
        "level": 1,
        "name": {
          "fr": "Overwhelming Power",
          "en": "Overwhelming Power"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_discordstrike.png",
        "description": {
          "fr": "Hitting an enemy Hero with Discord Strike grants 40% Attack Speed and causes Basic Attacks to heal for 50% of the damage dealt for 4 seconds.",
          "en": "Hitting an enemy Hero with Discord Strike grants 40% Attack Speed and causes Basic Attacks to heal for 50% of the damage dealt for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joujm1e",
        "level": 4,
        "name": {
          "fr": "Chaos Reigns",
          "en": "Chaos Reigns"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_discordstrike.png",
        "description": {
          "fr": "Quest: Hit Heroes with Discord Strike.  Reward: After hitting 15 Heroes, increase Discord Strike's damage by 60.  Reward: After hitting 2 Heroes with a single Discord Strike, increase its damage by 60.  Reward: After hitting 3 Heroes with a single Discord Strike, increase its damage by 100 and instantly gain all other Rewards.",
          "en": "Quest: Hit Heroes with Discord Strike.  Reward: After hitting 15 Heroes, increase Discord Strike's damage by 60.  Reward: After hitting 2 Heroes with a single Discord Strike, increase its damage by 60.  Reward: After hitting 3 Heroes with a single Discord Strike, increase its damage by 100 and instantly gain all other Rewards."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozk5kx",
        "level": 7,
        "name": {
          "fr": "Dissonance",
          "en": "Dissonance"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_discordstrike.png",
        "description": {
          "fr": "Increase Discord Strike's Silence duration by 0.75 seconds.",
          "en": "Increase Discord Strike's Silence duration by 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jopy7wv",
        "level": 10,
        "name": {
          "fr": "Deadly Charge",
          "en": "Deadly Charge"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_recklesscharge.png",
        "description": {
          "fr": "After channeling, Alarak charges forward dealing 200 (+4% per level) damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.5 seconds.  Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling.",
          "en": "After channeling, Alarak charges forward dealing 200 (+4% per level) damage to all enemies in his path. Distance is increased based on the amount of time channeled, up to 1.5 seconds.  Issuing a Move order while this is channeling will cancel it at no cost. Taking damage will interrupt the channeling."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokgryl",
        "level": 13,
        "name": {
          "fr": "Blade of the Highlord",
          "en": "Blade of the Highlord"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_sadism.png",
        "description": {
          "fr": "Basic Attacks against Heroes increase Sadism by 2% stacking up to 40%.  Sadism gained from Blade of the Highlord is lost on death.",
          "en": "Basic Attacks against Heroes increase Sadism by 2% stacking up to 40%.  Sadism gained from Blade of the Highlord is lost on death."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonztr1",
        "level": 16,
        "name": {
          "fr": "Lethal Onslaught",
          "en": "Lethal Onslaught"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_discordstrike.png",
        "description": {
          "fr": "Hitting an enemy Hero with Discord Strike grants 50% of Sadism's damage bonus to Alarak's Basic Attacks for 4 seconds. Basic Attacks against Heroes refresh this duration.",
          "en": "Hitting an enemy Hero with Discord Strike grants 50% of Sadism's damage bonus to Alarak's Basic Attacks for 4 seconds. Basic Attacks against Heroes refresh this duration."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogsf80",
        "level": 20,
        "name": {
          "fr": "Counter-Strike",
          "en": "Counter-Strike"
        },
        "icon": "assets/heroes/base_spells/alarak/images/talents/storm_ui_icon_alarak_counterstrike.png",
        "description": {
          "fr": "Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 (+4% per level) damage.  This ability will take over Alarak's Trait button.",
          "en": "Alarak targets an area and channels for 1 second, becoming Protected and Unstoppable. After, if he took damage from an enemy Hero, he sends a shockwave that deals 275 (+4% per level) damage.  This ability will take over Alarak's Trait button."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "anubarak",
    "enabled": false,
    "name": {
      "fr": "Anub'arak",
      "en": "Anub'arak"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_anubarak.png",
    "headline": {
      "fr": "Tank plongeur qui isole une cible et encaisse à la place de son équipe.",
      "en": "Diving tank who isolates a target and soaks damage for his team."
    },
    "gameplay": {
      "fr": "Anub'arak entre en combat avec Charge fouisseuse pour étourdir la ligne arrière, puis survit grâce à Carapace durcie et à ses scarabées qui le soignent en permanence.",
      "en": "Anub'arak engages with Burrow Charge to stun the back line, then survives thanks to Harden Carapace and his beetles, which heal him constantly."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Hôte à scarabées",
          "en": "Scarab Host"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_scarabhost.png",
        "description": {
          "fr": "Les dégâts de sorts génèrent des scarabées qui attaquent et te soignent.",
          "en": "Spell damage spawns beetles that attack enemies and heal you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Empaler",
          "en": "Impale"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_impale.png",
        "description": {
          "fr": "Projette des pointes en ligne qui infligent des dégâts et étourdissent.",
          "en": "Launches spikes in a line, dealing damage and stunning."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Carapace durcie",
          "en": "Harden Carapace"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_hardencarapace_var1.png",
        "description": {
          "fr": "Gagne un bouclier temporaire important.",
          "en": "Gain a large temporary shield."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Charge fouisseuse",
          "en": "Burrow Charge"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_burrowcharge.png",
        "description": {
          "fr": "Fonce sous terre puis émerge en étourdissant les ennemis proches.",
          "en": "Burrow forward and erupt, stunning nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Nuée de sauterelles",
          "en": "Locust Swarm"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_locustswarm.png",
        "description": {
          "fr": "Dégâts de zone continus autour de toi, avec vol de vie.",
          "en": "Continuous AoE damage around you with lifesteal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Cocon",
          "en": "Cocoon"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/spells/storm_ui_icon_anubarak_webblast.png",
        "description": {
          "fr": "Enferme un héros ennemi, le rendant intouchable et inactif.",
          "en": "Traps an enemy Hero, making them untargetable and unable to act."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Empale ne traverse pas les murs : utilise-le pour bloquer une fuite dans un couloir.",
        "en": "Impale doesn't go through walls: use it to cut off an escape in a corridor."
      },
      {
        "fr": "Attaque les héros ennemis pour générer des scarabées avant un engagement.",
        "en": "Basic attack enemy heroes to build up beetles before an engage."
      },
      {
        "fr": "Cocon est un excellent outil d'isolement sur un tank ennemi pendant un objectif.",
        "en": "Cocoon is an excellent isolation tool on an enemy tank during an objective."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Anubarak]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jof92bn",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jon3v3s",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6josnttk",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joaprte",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo4hx5p",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jot7cv7",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo56pql",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jof92bn",
        "level": 1,
        "name": {
          "fr": "Nerubian Armor",
          "en": "Nerubian Armor"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
        "description": {
          "fr": "Increase Hardened Carapace's Spell Armor by 25.",
          "en": "Increase Hardened Carapace's Spell Armor by 25."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jon3v3s",
        "level": 4,
        "name": {
          "fr": "Bed of Barbs",
          "en": "Bed of Barbs"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_impale.png",
        "description": {
          "fr": "Create a bed of spikes along Impale's path that slows enemies by 25% and deals 21 (+4% per level) damage per second.  Spikes persist for 3.5 seconds.",
          "en": "Create a bed of spikes along Impale's path that slows enemies by 25% and deals 21 (+4% per level) damage per second.  Spikes persist for 3.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josnttk",
        "level": 7,
        "name": {
          "fr": "Chitinous Plating",
          "en": "Chitinous Plating"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
        "description": {
          "fr": "While Harden Carapace is active, taking damage from enemy Abilities reduces its cooldown by 1 second, up to 3 seconds.",
          "en": "While Harden Carapace is active, taking damage from enemy Abilities reduces its cooldown by 1 second, up to 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joaprte",
        "level": 10,
        "name": {
          "fr": "Locust Swarm",
          "en": "Locust Swarm"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_locustswarm.png",
        "description": {
          "fr": "Deal 68 (+4% per level) damage per second to nearby enemies. Each enemy damaged restores 24 (+4% per level) Health. Lasts 6 seconds.",
          "en": "Deal 68 (+4% per level) damage per second to nearby enemies. Each enemy damaged restores 24 (+4% per level) Health. Lasts 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4hx5p",
        "level": 13,
        "name": {
          "fr": "Urticating Spines",
          "en": "Urticating Spines"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_hardencarapace_var1.png",
        "description": {
          "fr": "Casting Harden Carapace will also deal 90 (+4% per level) damage to nearby enemies. Deals double damage against Heroes.",
          "en": "Casting Harden Carapace will also deal 90 (+4% per level) damage to nearby enemies. Deals double damage against Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jot7cv7",
        "level": 16,
        "name": {
          "fr": "Epicenter",
          "en": "Epicenter"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_burrowcharge.png",
        "description": {
          "fr": "Increases Burrow Charge impact area by 60% and lowers the cooldown by 1 second for each Hero hit.",
          "en": "Increases Burrow Charge impact area by 60% and lowers the cooldown by 1 second for each Hero hit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo56pql",
        "level": 20,
        "name": {
          "fr": "Hive Master",
          "en": "Hive Master"
        },
        "icon": "assets/heroes/base_spells/anubarak/images/talents/storm_ui_icon_anubarak_locustswarm.png",
        "description": {
          "fr": "Gain a permanent Vampire Locust that attacks a nearby enemy every 3 seconds. The Vampire Locust deals 165 (+4% per level) damage and returns to heal Anub'arak for 80 (+4% per level) health.",
          "en": "Gain a permanent Vampire Locust that attacks a nearby enemy every 3 seconds. The Vampire Locust deals 165 (+4% per level) damage and returns to heal Anub'arak for 80 (+4% per level) health."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "artanis",
    "enabled": false,
    "name": {
      "fr": "Artanis",
      "en": "Artanis"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_artanis.png",
    "headline": {
      "fr": "Bruiser d'engagement qui échange sa position avec un ennemi.",
      "en": "Engage bruiser who swaps position with an enemy."
    },
    "gameplay": {
      "fr": "Artanis attire un héros ennemi hors de position avec Prisme de phase, encaisse grâce à ses boucliers automatiques et pousse fort en ligne.",
      "en": "Artanis pulls an enemy Hero out of position with Phase Prism, tanks through his automatic shields, and pushes lanes hard."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Surcharge de boucliers",
          "en": "Shield Overload"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_shieldoverload.png",
        "description": {
          "fr": "Gagne automatiquement un bouclier quand ta vie descend.",
          "en": "Automatically gain a shield when your Health drops."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Charge de lame",
          "en": "Blade Dash"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_powerstrikes.png",
        "description": {
          "fr": "Charge en avant puis reviens à ta position de départ.",
          "en": "Dashes forward, then returns to your starting position."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Lames jumelles",
          "en": "Twin Blades"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_doubleslash_on.png",
        "description": {
          "fr": "Ta prochaine attaque frappe deux fois et te fait avancer.",
          "en": "Your next Basic Attack strikes twice and moves you forward."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Prisme de phase",
          "en": "Phase Prism"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_repositionmatrix.png",
        "description": {
          "fr": "Échange ta position avec le héros ennemi touché.",
          "en": "Swaps your position with the enemy Hero hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Rayon purificateur",
          "en": "Purifier Beam"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_purifierbeam.png",
        "description": {
          "fr": "Un rayon suit un ennemi et brûle tout sur son passage.",
          "en": "A beam follows an enemy, burning everything in its path."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Impulsion de suppression",
          "en": "Suppression Pulse"
        },
        "icon": "assets/heroes/base_spells/artanis/images/spells/storm_ui_icon_artanis_disruptionweb.png",
        "description": {
          "fr": "Aveugle tous les ennemis d'une très grande zone.",
          "en": "Blinds all enemies in a very large area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Prisme de phase peut ramener un tank ennemi loin de son équipe.",
        "en": "Phase Prism can drag an enemy tank away from their team."
      },
      {
        "fr": "Lames jumelles s'active après une capacité : enchaîne toujours les attaques.",
        "en": "Twin Blades procs after abilities: always weave in Basic Attacks."
      },
      {
        "fr": "Rayon purificateur force les ennemis à se disperser autour de leur porteur.",
        "en": "Purifier Beam forces enemies to scatter away from its target."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Artanis]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johc28c",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo4g7a8",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo3zjo4",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jojk3mh",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6josn69m",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo8yxd8",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jox1wwx",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6johc28c",
        "level": 1,
        "name": {
          "fr": "Reactive Parry",
          "en": "Reactive Parry"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
        "description": {
          "fr": "Damaging enemy Heroes with Twin Blades or Blade Dash grants Artanis 50 Physical Armor against the next enemy Hero Basic Attack, reducing its damage by 50%.  Stores up to 2 charges.",
          "en": "Damaging enemy Heroes with Twin Blades or Blade Dash grants Artanis 50 Physical Armor against the next enemy Hero Basic Attack, reducing its damage by 50%.  Stores up to 2 charges."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4g7a8",
        "level": 4,
        "name": {
          "fr": "Psionic Synergy",
          "en": "Psionic Synergy"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_repositionmatrix.png",
        "description": {
          "fr": "Hitting an enemy Hero with Phase Prism grants 30 Armor for 5 seconds.",
          "en": "Hitting an enemy Hero with Phase Prism grants 30 Armor for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3zjo4",
        "level": 7,
        "name": {
          "fr": "Solarite Reaper",
          "en": "Solarite Reaper"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_powerstrikes.png",
        "description": {
          "fr": "Increases the damage of the first dash of Blade Dash by 175%.",
          "en": "Increases the damage of the first dash of Blade Dash by 175%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojk3mh",
        "level": 10,
        "name": {
          "fr": "Suppression Pulse",
          "en": "Suppression Pulse"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_disruptionweb.png",
        "description": {
          "fr": "Fire a large area pulse from the Spear of Adun, dealing 114 (+4% per level) damage and Blinding enemies for 4 seconds. Unlimited range.",
          "en": "Fire a large area pulse from the Spear of Adun, dealing 114 (+4% per level) damage and Blinding enemies for 4 seconds. Unlimited range."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josn69m",
        "level": 13,
        "name": {
          "fr": "Templar's Zeal",
          "en": "Templar's Zeal"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_powerstrikes.png",
        "description": {
          "fr": "Reduce the Mana cost of Blade Dash from 50 to 25. Each time that Shield Overload activates, reduce the cooldown of Blade Dash by 6 seconds.",
          "en": "Reduce the Mana cost of Blade Dash from 50 to 25. Each time that Shield Overload activates, reduce the cooldown of Blade Dash by 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8yxd8",
        "level": 16,
        "name": {
          "fr": "Titan Killer",
          "en": "Titan Killer"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_doubleslash_on.png",
        "description": {
          "fr": "Basic Attacks against Heroes deal bonus damage equal to 0.5% of the target's maximum Health in damage, increased to 1.5% when empowered by Twin Blades.",
          "en": "Basic Attacks against Heroes deal bonus damage equal to 0.5% of the target's maximum Health in damage, increased to 1.5% when empowered by Twin Blades."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox1wwx",
        "level": 20,
        "name": {
          "fr": "Orbital Bombardment",
          "en": "Orbital Bombardment"
        },
        "icon": "assets/heroes/base_spells/artanis/images/talents/storm_ui_icon_artanis_disruptionweb.png",
        "description": {
          "fr": "Suppression Pulse gains an additional charge.  There is a 10 second cooldown between uses.",
          "en": "Suppression Pulse gains an additional charge.  There is a 10 second cooldown between uses."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "arthas",
    "enabled": false,
    "name": {
      "fr": "Arthas",
      "en": "Arthas"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_arthas.png",
    "headline": {
      "fr": "Tank de zone qui ralentit et englue toute une équipe.",
      "en": "Area tank who slows and locks down an entire team."
    },
    "gameplay": {
      "fr": "Arthas colle aux ennemis avec Tempête glaciale et Explosion hurlante, empêche les fuites et se soigne grâce à Deuillegivre.",
      "en": "Arthas sticks to enemies with Frozen Tempest and Howling Blast, denies escapes, and heals himself through Frostmourne."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Faim de Deuillegivre",
          "en": "Frostmourne Hungers"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_frostmournehungers_off.png",
        "description": {
          "fr": "Ton attaque suivante rend des points de vie et régénère du mana.",
          "en": "Your next Basic Attack restores Health and Mana."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Trait de mort",
          "en": "Death Coil"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_deathcoil.png",
        "description": {
          "fr": "Inflige des dégâts à une cible ou soigne un mort-vivant allié.",
          "en": "Deals damage to a target or heals an allied undead."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Explosion hurlante",
          "en": "Howling Blast"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_howlingblast.png",
        "description": {
          "fr": "Immobilise les ennemis proches.",
          "en": "Roots nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Tempête glaciale",
          "en": "Frozen Tempest"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_frosentempest.png",
        "description": {
          "fr": "Aura de dégâts et de ralentissement autour d'Arthas.",
          "en": "Damaging, slowing aura around Arthas."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Armée des morts",
          "en": "Army of the Dead"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_armyofthedead.png",
        "description": {
          "fr": "Invoque des goules qui combattent pour toi.",
          "en": "Summons ghouls that fight for you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Invocation de Sindragosa",
          "en": "Summon Sindragosa"
        },
        "icon": "assets/heroes/base_spells/arthas/images/spells/storm_ui_icon_arthas_summonsindragosa.png",
        "description": {
          "fr": "Sindragosa traverse la zone, ralentit puis étourdit les ennemis.",
          "en": "Sindragosa flies across, slowing then stunning enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Garde Explosion hurlante pour immobiliser un ennemi qui tente de fuir.",
        "en": "Save Howling Blast to root an enemy trying to escape."
      },
      {
        "fr": "Tempête glaciale coûte du mana en continu : désactive-la hors combat.",
        "en": "Frozen Tempest drains mana continuously: turn it off out of combat."
      },
      {
        "fr": "Armée des morts est excellente pour pousser une ligne et bloquer les ennemis.",
        "en": "Army of the Dead is great for pushing a lane and body-blocking."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Arthas]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jomqjtw",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joip8cx",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo2m40x",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jof55f7",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo4cndl",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jox4k0q",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jouhosx",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jomqjtw",
        "level": 1,
        "name": {
          "fr": "Frost Presence",
          "en": "Frost Presence"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_howlingblast.png",
        "description": {
          "fr": "Quest: Root enemy Heroes with Howling Blast.  Reward: After Rooting 5 Heroes, Howling Blast's cooldown is reduced by 2 seconds.  Reward: After Rooting 10 Heroes, Howling Blast's range is increased by 20%.  Reward: After Rooting 20 Heroes, Howling Blast also Roots enemies in its path.",
          "en": "Quest: Root enemy Heroes with Howling Blast.  Reward: After Rooting 5 Heroes, Howling Blast's cooldown is reduced by 2 seconds.  Reward: After Rooting 10 Heroes, Howling Blast's range is increased by 20%.  Reward: After Rooting 20 Heroes, Howling Blast also Roots enemies in its path."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joip8cx",
        "level": 4,
        "name": {
          "fr": "Deathlord",
          "en": "Deathlord"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_deathcoil.png",
        "description": {
          "fr": "Increase the range of Death Coil by 30%, reduce its cooldown by 3 seconds, and if Death Coil is used on an enemy Hero, its Mana cost is refunded.",
          "en": "Increase the range of Death Coil by 30%, reduce its cooldown by 3 seconds, and if Death Coil is used on an enemy Hero, its Mana cost is refunded."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2m40x",
        "level": 7,
        "name": {
          "fr": "Immortal Coil",
          "en": "Immortal Coil"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_deathcoil.png",
        "description": {
          "fr": "Gain the healing effect of Death Coil even when used on enemies. If Death Coil is used on Arthas, it heals for an additional 50% bonus healing.",
          "en": "Gain the healing effect of Death Coil even when used on enemies. If Death Coil is used on Arthas, it heals for an additional 50% bonus healing."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jof55f7",
        "level": 10,
        "name": {
          "fr": "Army of the Dead",
          "en": "Army of the Dead"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_armyofthedead.png",
        "description": {
          "fr": "Summons Ghouls that last 15 seconds and atttack for 20 (+4% per level) damage. Sacrifice Ghouls to heal for 267 (+4% per level) Health.",
          "en": "Summons Ghouls that last 15 seconds and atttack for 20 (+4% per level) damage. Sacrifice Ghouls to heal for 267 (+4% per level) Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4cndl",
        "level": 13,
        "name": {
          "fr": "Shattered Armor",
          "en": "Shattered Armor"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_howlingblast.png",
        "description": {
          "fr": "Enemy Heroes hit by Howling Blast have their Armor reduced by 15 for 4 seconds.",
          "en": "Enemy Heroes hit by Howling Blast have their Armor reduced by 15 for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox4k0q",
        "level": 16,
        "name": {
          "fr": "Embrace Death",
          "en": "Embrace Death"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_deathcoil.png",
        "description": {
          "fr": "Death Coil deals more damage and heals more the lower Arthas's current Health is, to a maximum of 100% bonus damage and healing.",
          "en": "Death Coil deals more damage and heals more the lower Arthas's current Health is, to a maximum of 100% bonus damage and healing."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jouhosx",
        "level": 20,
        "name": {
          "fr": "Legion of Northrend",
          "en": "Legion of Northrend"
        },
        "icon": "assets/heroes/base_spells/arthas/images/talents/storm_ui_icon_arthas_armyofthedead.png",
        "description": {
          "fr": "3 additional Ghouls are created. Ghouls deal 50% more damage, heal for an additional 50%, and last 5 seconds longer.",
          "en": "3 additional Ghouls are created. Ghouls deal 50% more damage, heal for an additional 50%, and last 5 seconds longer."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "azmodan",
    "enabled": false,
    "name": {
      "fr": "Asmodan",
      "en": "Azmodan"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_azmodan.png",
    "headline": {
      "fr": "Assassin de siège qui pousse les lignes et frappe de très loin.",
      "en": "Siege assassin who pushes lanes and hits from very far away."
    },
    "gameplay": {
      "fr": "Azmodan invoque des démons pour pousser en permanence et lance des Globes d'annihilation qui deviennent de plus en plus puissants.",
      "en": "Azmodan summons demons to push constantly and throws Globes of Annihilation that grow stronger over the game."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Lieutenant démoniaque",
          "en": "Demon Lieutenant"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_generalofhell.png",
        "description": {
          "fr": "Invoque un démon qui pousse la ligne pour toi.",
          "en": "Summons a demon that pushes the lane for you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Globe d'annihilation",
          "en": "Globe of Annihilation"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_globeofannihilation.png",
        "description": {
          "fr": "Projectile de zone à très longue portée.",
          "en": "Very long-range area projectile."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Invocation d'un guerrier démoniaque",
          "en": "Summon Demon Warrior"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_summondemonwarrior.png",
        "description": {
          "fr": "Invoque un guerrier qui bloque et attaque.",
          "en": "Summons a warrior that blocks and attacks."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Tout doit brûler",
          "en": "All Shall Burn"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_allshallburn.png",
        "description": {
          "fr": "Rayon canalisé dont les dégâts augmentent.",
          "en": "Channeled beam whose damage ramps up."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Invasion démoniaque",
          "en": "Demonic Invasion"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_demonicinvasion.png",
        "description": {
          "fr": "Fait pleuvoir des démons sur une zone.",
          "en": "Rains demons onto an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Marée du péché",
          "en": "Tide of Sin"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/spells/storm_ui_icon_azmodan_blackpool.png",
        "description": {
          "fr": "Vague de péché qui inflige des dégâts continus en zone.",
          "en": "Wave of sin dealing continuous area damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Lance ton Globe sur les vagues de sbires pour cumuler les quêtes.",
        "en": "Throw your Globe at minion waves to stack your quests."
      },
      {
        "fr": "Tes démons poussent une ligne pendant que tu joues ailleurs.",
        "en": "Your demons push a lane while you play elsewhere."
      },
      {
        "fr": "Tout doit brûler s'annule si tu bouges : reste à couvert.",
        "en": "All Shall Burn breaks if you move: stay behind cover."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Azmodan]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joolasi",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jou3j10",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jop5he2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo9kq2l",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jopcq0q",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo3ewh3",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jomzmpi",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joolasi",
        "level": 1,
        "name": {
          "fr": "Greed",
          "en": "Greed"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
        "description": {
          "fr": "Globe of Annihilation deals 15% more damage to non-Heroic targets.  Quest: After gaining 200 Annihilation, increase the range of All Shall Burn by 25% and Demon Warriors gain 20% Attack Speed and Movement Speed.",
          "en": "Globe of Annihilation deals 15% more damage to non-Heroic targets.  Quest: After gaining 200 Annihilation, increase the range of All Shall Burn by 25% and Demon Warriors gain 20% Attack Speed and Movement Speed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jou3j10",
        "level": 4,
        "name": {
          "fr": "Army of Hell",
          "en": "Army of Hell"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_summondemonwarrior.png",
        "description": {
          "fr": "Summon Demon Warrior spawns an additional Demon, but its cooldown is increased by 10 seconds.",
          "en": "Summon Demon Warrior spawns an additional Demon, but its cooldown is increased by 10 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jop5he2",
        "level": 7,
        "name": {
          "fr": "Art of Chaos",
          "en": "Art of Chaos"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
        "description": {
          "fr": "If Globe of Annihilation hits 2 or more Heroes, restore 40 Mana and gain an extra 4 Annihilation.",
          "en": "If Globe of Annihilation hits 2 or more Heroes, restore 40 Mana and gain an extra 4 Annihilation."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9kq2l",
        "level": 10,
        "name": {
          "fr": "Demonic Invasion",
          "en": "Demonic Invasion"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_demonicinvasion.png",
        "description": {
          "fr": "Rain a small army of Demonic Grunts down on enemies, dealing 85 (+4% per level) damage per impact. Grunts deal 39 (+4% per level) damage, have 750 (+4% per level) Health and last up to 10 seconds. When Grunts die they explode, dealing 40 (+4% per level) damage to nearby enemies, doubled against enemy Heroes.  Usable while Channeling All Shall Burn.",
          "en": "Rain a small army of Demonic Grunts down on enemies, dealing 85 (+4% per level) damage per impact. Grunts deal 39 (+4% per level) damage, have 750 (+4% per level) Health and last up to 10 seconds. When Grunts die they explode, dealing 40 (+4% per level) damage to nearby enemies, doubled against enemy Heroes.  Usable while Channeling All Shall Burn."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jopcq0q",
        "level": 13,
        "name": {
          "fr": "Brutish Vanguard",
          "en": "Brutish Vanguard"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_summondemonwarrior.png",
        "description": {
          "fr": "Demon Warriors and Lieutenants gain 25% increased Health. Demon Warriors Slow nearby enemies by 20%.",
          "en": "Demon Warriors and Lieutenants gain 25% increased Health. Demon Warriors Slow nearby enemies by 20%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3ewh3",
        "level": 16,
        "name": {
          "fr": "Total Annihilation",
          "en": "Total Annihilation"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_globeofannihilation.png",
        "description": {
          "fr": "Globe of Annihilation damages Heroes for an additional 4% of their maximum Health.",
          "en": "Globe of Annihilation damages Heroes for an additional 4% of their maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomzmpi",
        "level": 20,
        "name": {
          "fr": "Siegebreaker",
          "en": "Siegebreaker"
        },
        "icon": "assets/heroes/base_spells/azmodan/images/talents/storm_ui_icon_azmodan_demonicinvasion.png",
        "description": {
          "fr": "Azmodan's Demons deal 40% increased damage to Structures.",
          "en": "Azmodan's Demons deal 40% increased damage to Structures."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "blaze",
    "enabled": false,
    "name": {
      "fr": "Kramer",
      "en": "Blaze"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_firebat.png",
    "headline": {
      "fr": "Tank de zone qui enflamme le terrain et repositionne les ennemis.",
      "en": "Area tank who sets the ground on fire and repositions enemies."
    },
    "gameplay": {
      "fr": "Blaze pose des nappes d'huile qu'il enflamme pour créer des zones interdites, et son bunker offre un point de repli imprenable pendant les objectifs.",
      "en": "Blaze lays oil spills that he ignites to create no-go zones, and his bunker offers a safe fallback point during objectives."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Pyromanie",
          "en": "Pyromania"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_pyromania.png",
        "description": {
          "fr": "Après avoir touché des ennemis avec des capacités, gagne un bouclier régénérant.",
          "en": "After hitting enemies with abilities, gain a regenerating shield."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Flot de flammes",
          "en": "Flame Stream"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_flame.png",
        "description": {
          "fr": "Projette un jet de flammes qui enflamme l'huile au sol.",
          "en": "Fires a stream of flame that ignites oil on the ground."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Nappe d'huile",
          "en": "Oil Spill"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_oil.png",
        "description": {
          "fr": "Répand de l'huile qui ralentit et peut être enflammée.",
          "en": "Spreads oil that slows and can be ignited."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Propulsion à réaction",
          "en": "Jet Propulsion"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_jet.png",
        "description": {
          "fr": "Fonce en avant en bousculant les ennemis.",
          "en": "Charges forward, knocking enemies aside."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Largage de bunker",
          "en": "Bunker Drop"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_bunker.png",
        "description": {
          "fr": "Largue un bunker où toi et tes alliés pouvez vous abriter et tirer.",
          "en": "Drops a bunker you and allies can enter to shoot from safety."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Combustion",
          "en": "Combustion"
        },
        "icon": "assets/heroes/base_spells/blaze/images/spells/storm_ui_icon_blaze_combustion.png",
        "description": {
          "fr": "Explosion de flammes autour de toi qui ralentit fortement.",
          "en": "Blast of flames around you that heavily slows."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Enflamme la nappe d'huile avec Flot de flammes pour étourdir tous les ennemis dessus.",
        "en": "Ignite the oil spill with Flame Stream to stun every enemy standing on it."
      },
      {
        "fr": "Le bunker peut sauver un allié en danger : il devient intouchable à l'intérieur.",
        "en": "The bunker can save an endangered ally: they become untargetable inside."
      },
      {
        "fr": "Propulsion à réaction sert autant à engager qu'à décoller après un combat.",
        "en": "Jet Propulsion is as good for engaging as it is for disengaging."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Firebat]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joojy99",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jodv561",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo6xbdx",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo6khxm",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jooivyw",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jobqown",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joxbq1m",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joojy99",
        "level": 1,
        "name": {
          "fr": "Adrenaline Stimpack",
          "en": "Adrenaline Stimpack"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_stim_2.png",
        "description": {
          "fr": "Passive: While over 80% Health, gain 25% bonus Attack Speed and 10% bonus Movement Speed.  Activate to gain 100% Attack Speed and 25% Movement Speed for 5 seconds.",
          "en": "Passive: While over 80% Health, gain 25% bonus Attack Speed and 10% bonus Movement Speed.  Activate to gain 100% Attack Speed and 25% Movement Speed for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodv561",
        "level": 4,
        "name": {
          "fr": "Oil Dispersal",
          "en": "Oil Dispersal"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_oil.png",
        "description": {
          "fr": "Increase Oil Spill's area by 20%. Each enemy Hero hit by Flame Stream reduces the cooldown of Oil Spill by 0.75 seconds and refunds 5 Mana.",
          "en": "Increase Oil Spill's area by 20%. Each enemy Hero hit by Flame Stream reduces the cooldown of Oil Spill by 0.75 seconds and refunds 5 Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6xbdx",
        "level": 7,
        "name": {
          "fr": "Suppressive Fire",
          "en": "Suppressive Fire"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_flame.png",
        "description": {
          "fr": "Each stream of Flame Stream reduces the Spell Power of Heroes hit by 25% for 4 seconds, up to 50%.",
          "en": "Each stream of Flame Stream reduces the Spell Power of Heroes hit by 25% for 4 seconds, up to 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6khxm",
        "level": 10,
        "name": {
          "fr": "Bunker Drop",
          "en": "Bunker Drop"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_bunker.png",
        "description": {
          "fr": "After 0.5 seconds, deploy and enter a Bunker with 1435 (+4% per level) Health. Blaze and his allies can enter and exit the Bunker at will. While in the Bunker, occupants gain access to Flamethrower, dealing 170 (+4% per level) damage to enemies in a line.  Exiting the Bunker grants 25 Armor for 2 seconds. Bunkers last 10 seconds, or until destroyed.",
          "en": "After 0.5 seconds, deploy and enter a Bunker with 1435 (+4% per level) Health. Blaze and his allies can enter and exit the Bunker at will. While in the Bunker, occupants gain access to Flamethrower, dealing 170 (+4% per level) damage to enemies in a line.  Exiting the Bunker grants 25 Armor for 2 seconds. Bunkers last 10 seconds, or until destroyed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jooivyw",
        "level": 13,
        "name": {
          "fr": "Grill and Kill",
          "en": "Grill and Kill"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_oil.png",
        "description": {
          "fr": "Increase Ignited Oil Spill damage by 45%.  Quest: Damage enemy Heroes with Ignited Oil Spills 30 times.  Reward: Increase Oil Spill's Ignite duration by 2.5 seconds.",
          "en": "Increase Ignited Oil Spill damage by 45%.  Quest: Damage enemy Heroes with Ignited Oil Spills 30 times.  Reward: Increase Oil Spill's Ignite duration by 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jobqown",
        "level": 16,
        "name": {
          "fr": "Thermal Protection",
          "en": "Thermal Protection"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_jet.png",
        "description": {
          "fr": "Each enemy hit by Jet Propulsion grants 10 Armor for 3 seconds and reduces its cooldown by 1.25 seconds.",
          "en": "Each enemy hit by Jet Propulsion grants 10 Armor for 3 seconds and reduces its cooldown by 1.25 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joxbq1m",
        "level": 20,
        "name": {
          "fr": "Fortified Bunker",
          "en": "Fortified Bunker"
        },
        "icon": "assets/heroes/base_spells/blaze/images/talents/storm_ui_icon_blaze_bunker.png",
        "description": {
          "fr": "Occupants can cast Oil Spill from Bunker Drop every 6 seconds. Additionally, Bunker Drop's Armor bonus upon exiting is increased by 25, and its duration by 1 second.",
          "en": "Occupants can cast Oil Spill from Bunker Drop every 6 seconds. Additionally, Bunker Drop's Armor bonus upon exiting is increased by 25, and its duration by 1 second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "cassia",
    "enabled": false,
    "name": {
      "fr": "Cassia",
      "en": "Cassia"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_amazon.png",
    "headline": {
      "fr": "Assassin d'attaques de base qui punit les héros à distance.",
      "en": "Auto-attack assassin who punishes ranged Heroes."
    },
    "gameplay": {
      "fr": "Cassia gagne de l'armure contre les attaques de base quand elle se déplace, et inflige des dégâts bonus aux ennemis aveuglés.",
      "en": "Cassia gains Armor against Basic Attacks while moving and deals bonus damage to blinded enemies."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Évitement",
          "en": "Avoidance"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_avoidance_b.png",
        "description": {
          "fr": "Gagne de l'armure contre les attaques de base en te déplaçant.",
          "en": "Gain Armor against Basic Attacks while moving."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fureur de la foudre",
          "en": "Lightning Fury"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_lightningfury.png",
        "description": {
          "fr": "Javelot qui se divise en éclairs.",
          "en": "Javelin that splits into lightning bolts."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Lumière aveuglante",
          "en": "Blinding Light"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_blindinglight.png",
        "description": {
          "fr": "Aveugle les ennemis proches.",
          "en": "Blinds nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Parade",
          "en": "Fend"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_fend.png",
        "description": {
          "fr": "Charge en avant en frappant plusieurs fois.",
          "en": "Charges forward, striking repeatedly."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Boule de foudre",
          "en": "Ball Lightning"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_balllightning.png",
        "description": {
          "fr": "Projectile lent qui inflige d'énormes dégâts.",
          "en": "Slow projectile dealing massive damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Valkyrie",
          "en": "Valkyrie"
        },
        "icon": "assets/heroes/base_spells/cassia/images/spells/storm_ui_icon_cassia_valkrie.png",
        "description": {
          "fr": "Invoque une valkyrie qui attire et étourdit les ennemis.",
          "en": "Summons a Valkyrie that pulls and stuns enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Reste en mouvement : ton armure disparaît si tu t'arrêtes.",
        "en": "Keep moving: your Armor disappears when you stand still."
      },
      {
        "fr": "Aveugle puis frappe : tes dégâts sont bien plus élevés sur cible aveuglée.",
        "en": "Blind first, then hit: your damage is far higher on blinded targets."
      },
      {
        "fr": "Fureur de la foudre traverse les ennemis : cherche les alignements.",
        "en": "Lightning Fury pierces enemies: look for line-ups."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Amazon]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jorcbxs",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joqy604",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo21ge5",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6johjdln",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jofgm70",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joahluq",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jowckui",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jorcbxs",
        "level": 1,
        "name": {
          "fr": "Thunderstroke",
          "en": "Thunderstroke"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_lightningfury.png",
        "description": {
          "fr": "Increase the damage of Lightning Fury by 15.  Quest: Lightning Fury's damage is increased by 1.5 every time it hits a Hero.",
          "en": "Increase the damage of Lightning Fury by 15.  Quest: Lightning Fury's damage is increased by 1.5 every time it hits a Hero."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqy604",
        "level": 4,
        "name": {
          "fr": "Plate of the Whale",
          "en": "Plate of the Whale"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_avoidance_b.png",
        "description": {
          "fr": "Regenerate 6 (+4% per level) Health per second while Avoidance is active. If fully charged, gain an additional 12 (+4% per level) Health per second.",
          "en": "Regenerate 6 (+4% per level) Health per second while Avoidance is active. If fully charged, gain an additional 12 (+4% per level) Health per second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo21ge5",
        "level": 7,
        "name": {
          "fr": "Grounding Rod",
          "en": "Grounding Rod"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_combo_q_e.png",
        "description": {
          "fr": "Enemies hit by Lightning Fury or Fend are Slowed by 20% for 2 seconds.",
          "en": "Enemies hit by Lightning Fury or Fend are Slowed by 20% for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johjdln",
        "level": 10,
        "name": {
          "fr": "Ball Lightning",
          "en": "Ball Lightning"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_balllightning.png",
        "description": {
          "fr": "Throw a ball of lightning at an enemy Hero that bounces up to 6 times between nearby enemy Heroes and Cassia, dealing 180 (+4% per level) damage to enemies hit.",
          "en": "Throw a ball of lightning at an enemy Hero that bounces up to 6 times between nearby enemy Heroes and Cassia, dealing 180 (+4% per level) damage to enemies hit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofgm70",
        "level": 13,
        "name": {
          "fr": "War Matron",
          "en": "War Matron"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_fend.png",
        "description": {
          "fr": "Cassia becomes Protected while Channeling Fend and for an additional 1 second if the Channel is completed.",
          "en": "Cassia becomes Protected while Channeling Fend and for an additional 1 second if the Channel is completed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joahluq",
        "level": 16,
        "name": {
          "fr": "Power Strike",
          "en": "Power Strike"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_combo_q_w.png",
        "description": {
          "fr": "Lightning Fury pierces but only splits on Heroes. Enemy Heroes hit reduce its cooldown by 1 second and become marked for 15 seconds. Upon reaching 3 marks, remove them and cast a Blinding Light at their feet.",
          "en": "Lightning Fury pierces but only splits on Heroes. Enemy Heroes hit reduce its cooldown by 1 second and become marked for 15 seconds. Upon reaching 3 marks, remove them and cast a Blinding Light at their feet."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowckui",
        "level": 20,
        "name": {
          "fr": "Infinite Lightning",
          "en": "Infinite Lightning"
        },
        "icon": "assets/heroes/base_spells/cassia/images/talents/storm_ui_icon_cassia_balllightning.png",
        "description": {
          "fr": "Ball Lightning can now bounce indefinitely. Every bounce reduces its cooldown by 5 seconds.",
          "en": "Ball Lightning can now bounce indefinitely. Every bounce reduces its cooldown by 5 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "chen",
    "enabled": false,
    "name": {
      "fr": "Chen",
      "en": "Chen"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_chen.png",
    "headline": {
      "fr": "Bruiser increvable qui absorbe les dégâts puis les efface.",
      "en": "Unkillable bruiser who absorbs damage then wipes it away."
    },
    "gameplay": {
      "fr": "Chen stocke les dégâts subis avec Report puis les annule en buvant. Il excelle à occuper plusieurs ennemis très longtemps.",
      "en": "Chen stores incoming damage with Stagger, then drinks it away. He excels at tying up several enemies for a long time."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Report / Breuvage fortifiant",
          "en": "Fortifying Brew"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_fortifyingbrew.png",
        "description": {
          "fr": "Reporte une partie des dégâts subis, puis bois pour les annuler.",
          "en": "Staggers part of the damage taken, then drink to remove it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Coup de pied volant",
          "en": "Flying Kick"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_flyingkick.png",
        "description": {
          "fr": "Bondit vers un ennemi ou une unité.",
          "en": "Leaps toward an enemy or unit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Fracas de tonneau",
          "en": "Keg Smash"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_kegsmash.png",
        "description": {
          "fr": "Asperge les ennemis de bière et les ralentit.",
          "en": "Douses enemies in Brew and slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Souffle de feu",
          "en": "Stagger"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_stagger.png",
        "description": {
          "fr": "Cône de flammes, dégâts accrus sur les cibles imbibées.",
          "en": "Cone of flame, extra damage on Brew-soaked targets."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Tempête, Terre, Feu",
          "en": "Storm, Earth, Fire"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_stormearthfire.png",
        "description": {
          "fr": "Invoque trois esprits qui combattent séparément.",
          "en": "Summons three spirits that fight independently."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Tonneau vagabond",
          "en": "Wandering Keg"
        },
        "icon": "assets/heroes/base_spells/chen/images/spells/storm_ui_icon_chen_wanderingkeg.png",
        "description": {
          "fr": "Deviens un tonneau roulant qui bouscule les ennemis.",
          "en": "Become a rolling keg that knocks enemies around."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Bois toujours après avoir accumulé un maximum de dégâts reportés.",
        "en": "Always drink after stacking as much Staggered damage as possible."
      },
      {
        "fr": "Coup de pied volant sur un sbire permet d'atteindre un ennemi plus loin.",
        "en": "Flying Kick on a minion lets you reach an enemy further away.'"
      },
      {
        "fr": "Souffle de feu inflige plus de dégâts aux cibles imbibées de bière.",
        "en": "Breath of Fire deals bonus damage to Brew-soaked targets."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Chen]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jowd5ie",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jolpl0e",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jol1tf7",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jok4sfc",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jom20jr",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joptvz5",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo562d6",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jowd5ie",
        "level": 1,
        "name": {
          "fr": "Eye of the Tiger",
          "en": "Eye of the Tiger"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_kegsmash.png",
        "description": {
          "fr": "Basic Attacks against Brew-soaked enemy Heroes deal 40% more damage and heal Chen for 40% of the damage done.",
          "en": "Basic Attacks against Brew-soaked enemy Heroes deal 40% more damage and heal Chen for 40% of the damage done."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolpl0e",
        "level": 4,
        "name": {
          "fr": "Deadly Strike",
          "en": "Deadly Strike"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_flyingkick.png",
        "description": {
          "fr": "Flying Kick no longer costs Brew. Additionally, its damage is increased by 125% while Chen has Shields from Fortifying Brew.",
          "en": "Flying Kick no longer costs Brew. Additionally, its damage is increased by 125% while Chen has Shields from Fortifying Brew."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jol1tf7",
        "level": 7,
        "name": {
          "fr": "Gift of the Ox",
          "en": "Gift of the Ox"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_stagger.png",
        "description": {
          "fr": "Increase the duration of Stagger's damage prevention by 1.5 seconds, and reduce the amount of damage taken over time to 50% of damage taken.",
          "en": "Increase the duration of Stagger's damage prevention by 1.5 seconds, and reduce the amount of damage taken over time to 50% of damage taken."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok4sfc",
        "level": 10,
        "name": {
          "fr": "Wandering Keg",
          "en": "Wandering Keg"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_wanderingkeg.png",
        "description": {
          "fr": "Roll around inside an Unstoppable barrel with 70% increased Movement Speed and 25 Armor, dealing 59 (+4% per level) damage to enemies in the way and knocking them back. Lasts for 5 seconds.",
          "en": "Roll around inside an Unstoppable barrel with 70% increased Movement Speed and 25 Armor, dealing 59 (+4% per level) damage to enemies in the way and knocking them back. Lasts for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jom20jr",
        "level": 13,
        "name": {
          "fr": "Pressure Point",
          "en": "Pressure Point"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_flyingkick.png",
        "description": {
          "fr": "Flying Kick Slows the target enemy by 40% for 1 second, or by 80% if Chen has Shields from Fortifying Brew.",
          "en": "Flying Kick Slows the target enemy by 40% for 1 second, or by 80% if Chen has Shields from Fortifying Brew."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joptvz5",
        "level": 16,
        "name": {
          "fr": "Flying Leap",
          "en": "Flying Leap"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_flyingkick.png",
        "description": {
          "fr": "Increase Flying Kick's range by 15% and reduce its cooldown by 0.5 seconds each time an enemy Hero takes damage from being Ignited.",
          "en": "Increase Flying Kick's range by 15% and reduce its cooldown by 0.5 seconds each time an enemy Hero takes damage from being Ignited."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo562d6",
        "level": 20,
        "name": {
          "fr": "Untapped Potential",
          "en": "Untapped Potential"
        },
        "icon": "assets/heroes/base_spells/chen/images/talents/storm_ui_icon_chen_wanderingkeg.png",
        "description": {
          "fr": "Increase Wandering Keg's Movement Speed bonus from 70% to 125%, and its Armor bonus to 75 for its duration and 3 seconds afterwards.",
          "en": "Increase Wandering Keg's Movement Speed bonus from 70% to 125%, and its Armor bonus to 75 for its duration and 3 seconds afterwards."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "chogall",
    "enabled": false,
    "name": {
      "fr": "Cho",
      "en": "Cho"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_cho.png",
    "headline": {
      "fr": "Moitié tank du duo à deux têtes : il conduit, Gall tire.",
      "en": "The tank half of the two-headed duo: he drives, Gall shoots."
    },
    "gameplay": {
      "fr": "Cho contrôle les déplacements du corps partagé avec Gall. Son rôle est d'engager, d'encaisser et de placer Gall dans la meilleure position pour infliger des dégâts.",
      "en": "Cho controls the movement of the body he shares with Gall. His job is to engage, soak damage, and put Gall in the best position to deal damage."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Cuir d'ogre",
          "en": "Ogre Hide"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_ogrehide.png",
        "description": {
          "fr": "Cho et Gall partagent le même corps et la même barre de vie.",
          "en": "Cho and Gall share one body and one health bar."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Poing déferlant",
          "en": "Surging Fist"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_moltensurge_a.png",
        "description": {
          "fr": "Charge en avant et étourdit le premier ennemi touché.",
          "en": "Charges forward, stunning the first enemy hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Brasier dévorant",
          "en": "Consuming Blaze"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_consumingflame.png",
        "description": {
          "fr": "Dégâts de zone autour de toi et régénération accrue.",
          "en": "AoE damage around you and increased regeneration."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Bombe runique",
          "en": "Rune Bomb"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_runebomb.png",
        "description": {
          "fr": "Lance une bombe que tu peux faire exploser à distance.",
          "en": "Throws a bomb you can detonate remotely."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Soulèvement",
          "en": "Upheaval"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_upheaval.png",
        "description": {
          "fr": "Attire les ennemis vers toi et les ralentit.",
          "en": "Pulls enemies toward you and slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Marteau du Crépuscule",
          "en": "Hammer of Twilight"
        },
        "icon": "assets/heroes/base_spells/chogall/images/spells/storm_ui_icon_cho_hammeroftwilight.png",
        "description": {
          "fr": "Améliore tes attaques de base avec des dégâts de zone et un ralentissement.",
          "en": "Empowers your Basic Attacks with AoE damage and a slow."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Communique en permanence avec ton Gall : vous partagez la même barre de vie.",
        "en": "Communicate constantly with your Gall: you share the same health bar."
      },
      {
        "fr": "Poing déferlant est plus rapide sur une surface enflammée par Brasier dévorant.",
        "en": "Surging Fist is faster over ground burned by Consuming Blaze."
      },
      {
        "fr": "Ne plonge que si Gall a ses sorts disponibles.",
        "en": "Only dive if Gall has his abilities up."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Cho]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joasmt5",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo162zh",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joo38p2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jod36wi",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo5jac0",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joc2vcd",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jogigqv",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joasmt5",
        "level": 1,
        "name": {
          "fr": "Consuming Fire",
          "en": "Consuming Fire"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_consumingflame.png",
        "description": {
          "fr": "Consuming Blaze heals for 150% more when a Hero is Ignited.",
          "en": "Consuming Blaze heals for 150% more when a Hero is Ignited."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo162zh",
        "level": 4,
        "name": {
          "fr": "Uppercut",
          "en": "Uppercut"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_moltensurge_a.png",
        "description": {
          "fr": "Hitting an enemy Hero with Surging Fist deals additional damage to Heroes equal to 5% of their max Health and reduces the cooldown of Surging Fist by 5 seconds.",
          "en": "Hitting an enemy Hero with Surging Fist deals additional damage to Heroes equal to 5% of their max Health and reduces the cooldown of Surging Fist by 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joo38p2",
        "level": 7,
        "name": {
          "fr": "Power Surge",
          "en": "Power Surge"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_moltensurge_a.png",
        "description": {
          "fr": "Enemy Heroes who are hit by Surging Fist are Slowed by 30% for 2.5 seconds.  Gain 15% Movement Speed while charging Surging Fist and for 2.5 seconds after casting the Ability.",
          "en": "Enemy Heroes who are hit by Surging Fist are Slowed by 30% for 2.5 seconds.  Gain 15% Movement Speed while charging Surging Fist and for 2.5 seconds after casting the Ability."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod36wi",
        "level": 10,
        "name": {
          "fr": "Hammer of Twilight",
          "en": "Hammer of Twilight"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_hammeroftwilight.png",
        "description": {
          "fr": "Activate to swing the Hammer of Twilight, dealing 150 (+4.5% per level) damage, pushing enemies away, and Stunning them for 0.75 seconds.  Passive: Cho's Basic Attacks deal 25% increased damage.",
          "en": "Activate to swing the Hammer of Twilight, dealing 150 (+4.5% per level) damage, pushing enemies away, and Stunning them for 0.75 seconds.  Passive: Cho's Basic Attacks deal 25% increased damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5jac0",
        "level": 13,
        "name": {
          "fr": "Surging Dash",
          "en": "Surging Dash"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_moltensurge_a.png",
        "description": {
          "fr": "While Channeling Surging Fist, Cho heals for 150 (+4% per level) Health per second.",
          "en": "While Channeling Surging Fist, Cho heals for 150 (+4% per level) Health per second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc2vcd",
        "level": 16,
        "name": {
          "fr": "Frenzied Fists",
          "en": "Frenzied Fists"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_moltensurge_a.png",
        "description": {
          "fr": "Gain 75% Attack Speed for 5 seconds after using Surging Fist.",
          "en": "Gain 75% Attack Speed for 5 seconds after using Surging Fist."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogigqv",
        "level": 20,
        "name": {
          "fr": "C'Thun's Gift",
          "en": "C'Thun's Gift"
        },
        "icon": "assets/heroes/base_spells/chogall/images/talents/storm_ui_icon_cho_hammeroftwilight.png",
        "description": {
          "fr": "Cho's Basic Attack becomes ranged and Slows targets by 20% for 2 seconds.",
          "en": "Cho's Basic Attack becomes ranged and Slows targets by 20% for 2 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "chromie",
    "enabled": false,
    "name": {
      "fr": "Chromie",
      "en": "Chromie"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_chromie.png",
    "headline": {
      "fr": "Assassin à très longue portée qui punit les erreurs de placement.",
      "en": "Extreme-range assassin who punishes positioning mistakes."
    },
    "gameplay": {
      "fr": "Chromie inflige d'énormes dégâts avec Souffle de sable depuis une distance à laquelle personne ne peut la toucher, mais elle est extrêmement fragile.",
      "en": "Chromie deals huge damage with Sand Blast from a range nobody can answer, but she is extremely fragile."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Voyageuse temporelle",
          "en": "Timewalker"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_timetraveler.png",
        "description": {
          "fr": "Tu montes de niveau plus vite que les autres héros.",
          "en": "You gain levels faster than other Heroes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Souffle de sable",
          "en": "Sand Blast"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_aethercannon.png",
        "description": {
          "fr": "Projectile à très longue portée qui inflige de gros dégâts.",
          "en": "Very long-range projectile dealing heavy damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Souffle du dragon",
          "en": "Dragon's Breath"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_sandstrike.png",
        "description": {
          "fr": "Explosion de zone retardée.",
          "en": "Delayed area explosion."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Piège temporel",
          "en": "Time Trap"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_timetrap.png",
        "description": {
          "fr": "Pose un piège qui fige l'ennemi qui le déclenche.",
          "en": "Places a trap that freezes the enemy who triggers it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Boucle temporelle",
          "en": "Temporal Loop"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_looper.png",
        "description": {
          "fr": "Renvoie un ennemi à sa position d'il y a quelques secondes.",
          "en": "Returns an enemy to where they were seconds ago."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Sables ralentisseurs",
          "en": "Slowing Sands"
        },
        "icon": "assets/heroes/base_spells/chromie/images/spells/storm_ui_icon_chromie_timewarp.png",
        "description": {
          "fr": "Zone qui ralentit fortement et durablement.",
          "en": "Zone that heavily and persistently slows."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Reste au maximum de ta portée : tu meurs en une seconde si on t'atteint.",
        "en": "Stay at max range: you die instantly if anyone reaches you."
      },
      {
        "fr": "Piège temporel donne de la vision et bloque les approches.",
        "en": "Time Trap gives vision and denies approaches."
      },
      {
        "fr": "Boucle temporelle renvoie une cible en arrière : parfait pour annuler une fuite.",
        "en": "Temporal Loop rewinds a target: perfect to deny an escape."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Chromie]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo6pyth",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jot2qmd",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo1rkry",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joa5yeq",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo2rqk0",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo05h68",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo9nu16",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo6pyth",
        "level": 1,
        "name": {
          "fr": "Once Again the First Time",
          "en": "Once Again the First Time"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_aethercannon.png",
        "description": {
          "fr": "Quest: Hit 40 Heroes with Sand Blast from Chromie or her Echoes.  Reward: Increase the maximum number of active Echoes to 2, and increase Echo damage to 45%.",
          "en": "Quest: Hit 40 Heroes with Sand Blast from Chromie or her Echoes.  Reward: Increase the maximum number of active Echoes to 2, and increase Echo damage to 45%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jot2qmd",
        "level": 4,
        "name": {
          "fr": "Chronic Conditions",
          "en": "Chronic Conditions"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_timetrap.png",
        "description": {
          "fr": "After its Time Stop ends, enemies affected by Time Trap are Slowed by 30% for 3 seconds and allies gain 30% Movement Speed for 3 seconds.",
          "en": "After its Time Stop ends, enemies affected by Time Trap are Slowed by 30% for 3 seconds and allies gain 30% Movement Speed for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1rkry",
        "level": 7,
        "name": {
          "fr": "Bronze Talons",
          "en": "Bronze Talons"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_aethercannon.png",
        "description": {
          "fr": "Hitting a Hero with Sand Blast from Chromie or her Echoes grants 50% additional Basic Attack damage for 5 seconds.",
          "en": "Hitting a Hero with Sand Blast from Chromie or her Echoes grants 50% additional Basic Attack damage for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joa5yeq",
        "level": 10,
        "name": {
          "fr": "Slowing Sands",
          "en": "Slowing Sands"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_timewarp.png",
        "description": {
          "fr": "Summon a sand vortex that Slows enemies by 10% every 0.25 seconds, up to 70%.",
          "en": "Summon a sand vortex that Slows enemies by 10% every 0.25 seconds, up to 70%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2rqk0",
        "level": 13,
        "name": {
          "fr": "Gnome Speed Ahead!",
          "en": "Gnome Speed Ahead!"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_aethercannon.png",
        "description": {
          "fr": "After casting Sand Blast, Chromie gains 20% Movement Speed and 200% increased Health Regeneration for 3 seconds.",
          "en": "After casting Sand Blast, Chromie gains 20% Movement Speed and 200% increased Health Regeneration for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo05h68",
        "level": 16,
        "name": {
          "fr": "Shifting Sands",
          "en": "Shifting Sands"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_aethercannon.png",
        "description": {
          "fr": "Hitting an enemy Hero with Chromie's primary Sand Blast grants 5% Spell Power for 8 seconds, up to a maximum of 50%. The duration is refreshed whenever an enemy is damaged by the primary Sand Blast.",
          "en": "Hitting an enemy Hero with Chromie's primary Sand Blast grants 5% Spell Power for 8 seconds, up to a maximum of 50%. The duration is refreshed whenever an enemy is damaged by the primary Sand Blast."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9nu16",
        "level": 20,
        "name": {
          "fr": "Unravelling",
          "en": "Unravelling"
        },
        "icon": "assets/heroes/base_spells/chromie/images/talents/storm_ui_icon_chromie_timewarp.png",
        "description": {
          "fr": "Every 0.25 seconds, enemy Heroes Slowed by Slowing Sands have their Spell Armor reduced by 10 up to 50. Slowing Sands persists for 5 seconds after it is cancelled.",
          "en": "Every 0.25 seconds, enemy Heroes Slowed by Slowing Sands have their Spell Armor reduced by 10 up to 50. Slowing Sands persists for 5 seconds after it is cancelled."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "deathwing",
    "enabled": false,
    "name": {
      "fr": "Aile de Mort",
      "en": "Deathwing"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_deathwing.png",
    "headline": {
      "fr": "Colosse imblocable qui domine les combats de zone.",
      "en": "Unstoppable colossus who dominates teamfights."
    },
    "gameplay": {
      "fr": "Aile de la Mort est en permanence imblocable mais ne peut recevoir aucun soin allié. Il change de forme pour choisir entre dégâts ciblés et dégâts de zone.",
      "en": "Deathwing is permanently Unstoppable but cannot receive any ally healing. He switches forms to choose between focused and area damage."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Aspect de la mort",
          "en": "Aspect of Death"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_aspect_of_death.png",
        "description": {
          "fr": "Imblocable en permanence, mais insensible aux soins alliés.",
          "en": "Permanently Unstoppable, but immune to allied healing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Flamme en fusion",
          "en": "Molten Flame"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_molten_flame.png",
        "description": {
          "fr": "Souffle continu de flammes devant toi.",
          "en": "Continuous stream of flame in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Incinération",
          "en": "Incinerate"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_incinerate.png",
        "description": {
          "fr": "Dégâts de zone autour de toi (mare de lave en forme Briseur de monde).",
          "en": "AoE damage around you (lava pool in World Breaker form)."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Assaut",
          "en": "Onslaught"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_onslaught.png",
        "description": {
          "fr": "Bondit en avant en mordant les ennemis.",
          "en": "Lunges forward, biting enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Cataclysme",
          "en": "Cataclysm"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_cataclysm.png",
        "description": {
          "fr": "Survole une ligne et laisse un sol brûlant.",
          "en": "Flies across a line, leaving scorched ground."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Vol draconique",
          "en": "Dragonflight"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/spells/storm_ui_icon_deathwing_mount.png",
        "description": {
          "fr": "S'envole pour se régénérer et se déplacer sur la carte.",
          "en": "Fly into the sky to regenerate and reposition across the map."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tu ne peux pas être soigné : utilise Vol draconique pour te régénérer.",
        "en": "You cannot be healed: use Dragonflight to regenerate."
      },
      {
        "fr": "Forme Destructeur pour le combat rapproché, Briseur de monde pour le zonage.",
        "en": "Destroyer form for close combat, World Breaker for zoning."
      },
      {
        "fr": "Tes plaques d'armure se rechargent en atterrissant : reviens à pleine vie.",
        "en": "Your armor plates refresh when landing: return at high Health."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Deathwing]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jon5uul",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joaj5gz",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jox1emg",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jotz521",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo6ley3",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joa9gj8",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joqsuyq",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jon5uul",
        "level": 1,
        "name": {
          "fr": "Dragon Soul",
          "en": "Dragon Soul"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_heat_wave.png",
        "description": {
          "fr": "Destroyer: Incinerate heals Deathwing for 75% of the damage dealt to enemy Heroes.  World Breaker: Lava Burst's explosion damage heals Deathwing for 150% of the damage dealt to enemy Heroes.",
          "en": "Destroyer: Incinerate heals Deathwing for 75% of the damage dealt to enemy Heroes.  World Breaker: Lava Burst's explosion damage heals Deathwing for 150% of the damage dealt to enemy Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joaj5gz",
        "level": 4,
        "name": {
          "fr": "Infernus",
          "en": "Infernus"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        "description": {
          "fr": "Increase the damage of Molten Flame against enemy Heroes by 25%.  Increase this damage bonus to 75% when Molten Flame is cast at 75 Energy or higher.",
          "en": "Increase the damage of Molten Flame against enemy Heroes by 25%.  Increase this damage bonus to 75% when Molten Flame is cast at 75 Energy or higher."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox1emg",
        "level": 7,
        "name": {
          "fr": "Firestorm",
          "en": "Firestorm"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_firestorm.png",
        "description": {
          "fr": "Reduce the cooldown of Deathwing's landing Abilities by 2 seconds.  When Deathwing lands, he drops 7 meteors near the landing area, dealing 70 (+4% per level) damage to enemies hit. Heroes hit by the meteors reduce Dragonflight's cooldown by 25 seconds.  Meteors prioritize landing on Heroes, otherwise they fall randomly in the area.",
          "en": "Reduce the cooldown of Deathwing's landing Abilities by 2 seconds.  When Deathwing lands, he drops 7 meteors near the landing area, dealing 70 (+4% per level) damage to enemies hit. Heroes hit by the meteors reduce Dragonflight's cooldown by 25 seconds.  Meteors prioritize landing on Heroes, otherwise they fall randomly in the area."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotz521",
        "level": 10,
        "name": {
          "fr": "Burn Beneath My Shadow",
          "en": "Burn Beneath My Shadow"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_cataclysm.png",
        "description": {
          "fr": "When an enemy Fort or Keep is destroyed the cooldown of Cataclysm is reset. Cataclysm's periodic damage is increased by 80%.",
          "en": "When an enemy Fort or Keep is destroyed the cooldown of Cataclysm is reset. Cataclysm's periodic damage is increased by 80%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6ley3",
        "level": 13,
        "name": {
          "fr": "Wicked Inferno",
          "en": "Wicked Inferno"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        "description": {
          "fr": "Molten Flame's Energy cost per second is reduced by 10.  After using Molten Flame, Deathwing gains 15 Energy over 3 seconds.",
          "en": "Molten Flame's Energy cost per second is reduced by 10.  After using Molten Flame, Deathwing gains 15 Energy over 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joa9gj8",
        "level": 16,
        "name": {
          "fr": "Conflagration",
          "en": "Conflagration"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_molten_flame.png",
        "description": {
          "fr": "Dealing 320 (+4% per level) damage with Molten Flame to enemy Heroes within 4 seconds causes them to burn for an additional 100 (+4% per level) damage over 4 seconds. While burning, they explode every 1 second, dealing 80 (+4% per level) damage to all nearby enemies.",
          "en": "Dealing 320 (+4% per level) damage with Molten Flame to enemy Heroes within 4 seconds causes them to burn for an additional 100 (+4% per level) damage over 4 seconds. While burning, they explode every 1 second, dealing 80 (+4% per level) damage to all nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqsuyq",
        "level": 20,
        "name": {
          "fr": "Stood in the Fire",
          "en": "Stood in the Fire"
        },
        "icon": "assets/heroes/base_spells/deathwing/images/talents/storm_ui_icon_deathwing_cataclysm.png",
        "description": {
          "fr": "Enemy Heroes are Slowed by 40% while standing in scorched ground, and its duration is increased by 50%.",
          "en": "Enemy Heroes are Slowed by 40% while standing in scorched ground, and its duration is increased by 50%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "dehaka",
    "enabled": false,
    "name": {
      "fr": "Dehaka",
      "en": "Dehaka"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_dehaka.png",
    "headline": {
      "fr": "Bruiser mobile qui peut apparaître n'importe où sur la carte.",
      "en": "Mobile bruiser who can show up anywhere on the map."
    },
    "gameplay": {
      "fr": "Dehaka récolte l'essence pour se soigner et gagner en puissance, et utilise Traqueur des fourrés pour rejoindre n'importe quel buisson allié.",
      "en": "Dehaka collects Essence to heal and grow stronger, and uses Brushstalker to travel to any allied bush."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Récolte d'essence",
          "en": "Essence Collection"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_essencecollection.png",
        "description": {
          "fr": "Récupère l'essence des ennemis tués pour te soigner et évoluer.",
          "en": "Collect Essence from slain enemies to heal and evolve."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Traction",
          "en": "Drag"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_drag.png",
        "description": {
          "fr": "Attrape un ennemi et le tire vers toi.",
          "en": "Grabs an enemy and drags them to you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Nuée noire",
          "en": "Dark Swarm"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_trample.png",
        "description": {
          "fr": "Attaques de zone qui esquivent les attaques ennemies.",
          "en": "Area attacks that also dodge enemy Basic Attacks."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Terrer",
          "en": "Burrow"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_burrow.png",
        "description": {
          "fr": "S'enfouit, deviens intouchable et regagne de la vie.",
          "en": "Burrow, becoming untargetable and regenerating Health."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Isolement",
          "en": "Isolation"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_isolation.png",
        "description": {
          "fr": "Rend un ennemi vulnérable et le coupe de son équipe.",
          "en": "Makes an enemy vulnerable and cuts them off from their team."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Adaptation",
          "en": "Adaptation"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_adaptation.png",
        "description": {
          "fr": "Se régénère massivement après quelques secondes.",
          "en": "Massively regenerates Health after a few seconds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Traqueur des fourrés",
          "en": "Brushstalker"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/spells/storm_ui_icon_dehaka_mount.png",
        "description": {
          "fr": "Se téléporte vers un buisson allié n'importe où sur la carte.",
          "en": "Teleports to an allied bush anywhere on the map."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Prends l'essence des sbires : c'est ta principale source de soins.",
        "en": "Pick up Essence from minions: it's your main source of healing."
      },
      {
        "fr": "Traqueur des fourrés te rend présent partout : soutiens tes lignes.",
        "en": "Brushstalker lets you be everywhere: support every lane."
      },
      {
        "fr": "Terrer te soigne et échappe aux contrôles ennemis.",
        "en": "Burrow heals you and dodges enemy crowd control."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Dehaka]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jom8roz",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo5e25i",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joc7c6c",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jogslw3",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo15rg9",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo0nbts",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo1pblg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jom8roz",
        "level": 1,
        "name": {
          "fr": "Enduring Swarm",
          "en": "Enduring Swarm"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_trample.png",
        "description": {
          "fr": "Dark Swarm's duration is increased by 0.5 seconds and grants 50 Spell Armor while active.",
          "en": "Dark Swarm's duration is increased by 0.5 seconds and grants 50 Spell Armor while active."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5e25i",
        "level": 4,
        "name": {
          "fr": "Lurker Strain",
          "en": "Lurker Strain"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_burrow.png",
        "description": {
          "fr": "Emerging from Burrow grants Dehaka Stealth for 3 seconds and knocks nearby enemies back, dealing 125 (+4% per level) damage and Slowing them by 30% for 3 seconds.  Passive: Reduce the cooldown of Burrow by 3 seconds.",
          "en": "Emerging from Burrow grants Dehaka Stealth for 3 seconds and knocks nearby enemies back, dealing 125 (+4% per level) damage and Slowing them by 30% for 3 seconds.  Passive: Reduce the cooldown of Burrow by 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc7c6c",
        "level": 7,
        "name": {
          "fr": "Feeding Frenzy",
          "en": "Feeding Frenzy"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_drag.png",
        "description": {
          "fr": "Basic Attacks reduce Drag's cooldown by 1.5 seconds.  Passive: Increase Drag's duration by 0.5 seconds.",
          "en": "Basic Attacks reduce Drag's cooldown by 1.5 seconds.  Passive: Increase Drag's duration by 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogslw3",
        "level": 10,
        "name": {
          "fr": "Isolation",
          "en": "Isolation"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_isolation.png",
        "description": {
          "fr": "Launch biomass that hits the first enemy Hero dealing 200 (+4% per level) damage, revealing, Silencing, and Slowing them 30% for 3 seconds. Additionally, their vision radius is greatly reduced for 6 seconds.",
          "en": "Launch biomass that hits the first enemy Hero dealing 200 (+4% per level) damage, revealing, Silencing, and Slowing them 30% for 3 seconds. Additionally, their vision radius is greatly reduced for 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo15rg9",
        "level": 13,
        "name": {
          "fr": "Ferocious Stalker",
          "en": "Ferocious Stalker"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_trample.png",
        "description": {
          "fr": "Dark Swarm Slows enemy Heroes by 15% for 0.75 seconds and deals 60% more damage while Brushstalker's Movement Speed bonus is active.",
          "en": "Dark Swarm Slows enemy Heroes by 15% for 0.75 seconds and deals 60% more damage while Brushstalker's Movement Speed bonus is active."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0nbts",
        "level": 16,
        "name": {
          "fr": "Elongated Tongue",
          "en": "Elongated Tongue"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_drag.png",
        "description": {
          "fr": "Increase Drag range by 20%.",
          "en": "Increase Drag range by 20%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1pblg",
        "level": 20,
        "name": {
          "fr": "Contagion",
          "en": "Contagion"
        },
        "icon": "assets/heroes/base_spells/dehaka/images/talents/storm_ui_icon_dehaka_isolation.png",
        "description": {
          "fr": "Isolation hits all Heroes near the first target.",
          "en": "Isolation hits all Heroes near the first target."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "diablo",
    "enabled": false,
    "name": {
      "fr": "Diablo",
      "en": "Diablo"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_diablo.png",
    "headline": {
      "fr": "Tank d'engagement qui projette les ennemis contre les murs.",
      "en": "Engage tank who slams enemies into walls."
    },
    "gameplay": {
      "fr": "Diablo cherche à isoler une cible avec Charge d'ombre puis Domination pour la ramener vers son équipe. Son trait lui offre une seconde vie en fin de partie.",
      "en": "Diablo looks to isolate a target with Shadow Charge, then Overpower to drag them back to his team. His trait grants him a second life late game."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Pierre spirituelle noire",
          "en": "Black Soulstone"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_blacksoulstone_var1.png",
        "description": {
          "fr": "Collecte des âmes pour gagner de la vie et ressusciter sur place.",
          "en": "Collect souls to gain Health and resurrect on the spot."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Charge d'ombre",
          "en": "Shadow Charge"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_shadowcharge_var1.png",
        "description": {
          "fr": "Pousse un ennemi ; l'étourdit s'il percute un mur.",
          "en": "Shoves an enemy; stuns them if they hit a wall."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Piétinement enflammé",
          "en": "Fire Stomp"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_firestomp.png",
        "description": {
          "fr": "Vague de feu en zone autour de toi.",
          "en": "Wave of fire around you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Domination",
          "en": "Overpower"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_overpower_var1.png",
        "description": {
          "fr": "Attrape un ennemi et le jette derrière toi en l'étourdissant.",
          "en": "Grabs an enemy and throws them behind you, stunning them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Apocalypse",
          "en": "Apocalypse"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_apocalypse.png",
        "description": {
          "fr": "Étourdit tous les héros ennemis dans une très grande zone.",
          "en": "Stuns all enemy Heroes in a very large area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Souffle de foudre",
          "en": "Lightning Breath"
        },
        "icon": "assets/heroes/base_spells/diablo/images/spells/storm_ui_icon_diablo_lightningbreath.png",
        "description": {
          "fr": "Souffle continu qui inflige des dégâts et ralentit.",
          "en": "Continuous breath that damages and slows."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Charge d'ombre étourdit seulement si la cible percute un mur.",
        "en": "Shadow Charge only stuns if the target hits a wall."
      },
      {
        "fr": "Enchaîne Charge d'ombre puis Domination pour ramener une cible dans ton équipe.",
        "en": "Chain Shadow Charge into Overpower to drag a target into your team."
      },
      {
        "fr": "Collecte les âmes en continu : ton retour à la vie en dépend.",
        "en": "Collect souls constantly: your resurrection depends on it."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Diablo]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6job5g76",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo6q90u",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joc4ph1",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo1cmj0",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jozab0h",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo8ne6t",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jove4ni",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6job5g76",
        "level": 1,
        "name": {
          "fr": "Feast on Fear",
          "en": "Feast on Fear"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_combo_1.png",
        "description": {
          "fr": "Stunning an enemy Hero with Shadow Charge or Overpower heals Diablo for 10% of his maximum Health over 3 seconds.",
          "en": "Stunning an enemy Hero with Shadow Charge or Overpower heals Diablo for 10% of his maximum Health over 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6q90u",
        "level": 4,
        "name": {
          "fr": "Sacrificial Soul",
          "en": "Sacrificial Soul"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        "description": {
          "fr": "Stunning a Hero with Shadow Charge grants 10 Souls and 20 Armor for 3 seconds. While at 100 Souls, increase this Armor to 40.",
          "en": "Stunning a Hero with Shadow Charge grants 10 Souls and 20 Armor for 3 seconds. While at 100 Souls, increase this Armor to 40."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc4ph1",
        "level": 7,
        "name": {
          "fr": "Eternal Flames",
          "en": "Eternal Flames"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_firestomp.png",
        "description": {
          "fr": "Reduce the cooldown of Fire Stomp by 1 second. When Diablo Stuns an enemy Hero with Shadow Charge or Overpower, reset the cooldown of Fire Stomp and restore 45 Mana.",
          "en": "Reduce the cooldown of Fire Stomp by 1 second. When Diablo Stuns an enemy Hero with Shadow Charge or Overpower, reset the cooldown of Fire Stomp and restore 45 Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1cmj0",
        "level": 10,
        "name": {
          "fr": "Apocalypse",
          "en": "Apocalypse"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_apocalypse.png",
        "description": {
          "fr": "Create a demonic rune under each enemy Hero on the battleground. After 1.75 seconds the rune explodes dealing 137 (+4% per level) damage and Stunning them for 1.75 seconds.",
          "en": "Create a demonic rune under each enemy Hero on the battleground. After 1.75 seconds the rune explodes dealing 137 (+4% per level) damage and Stunning them for 1.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozab0h",
        "level": 13,
        "name": {
          "fr": "Devastating Charge",
          "en": "Devastating Charge"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        "description": {
          "fr": "Increase Shadow Charge's terrain collision damage by 50%.  Quest: Hit an enemy Hero against terrain 5 times.  Reward: Hitting enemy Heroes against terrain reduces their Armor by 20 for 4 seconds.",
          "en": "Increase Shadow Charge's terrain collision damage by 50%.  Quest: Hit an enemy Hero against terrain 5 times.  Reward: Hitting enemy Heroes against terrain reduces their Armor by 20 for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8ne6t",
        "level": 16,
        "name": {
          "fr": "Domination",
          "en": "Domination"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_shadowcharge_var1.png",
        "description": {
          "fr": "Casting Overpower resets the cooldown of Shadow Charge.",
          "en": "Casting Overpower resets the cooldown of Shadow Charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jove4ni",
        "level": 20,
        "name": {
          "fr": "Dying Breath",
          "en": "Dying Breath"
        },
        "icon": "assets/heroes/base_spells/diablo/images/talents/storm_ui_icon_diablo_apocalypse.png",
        "description": {
          "fr": "Apocalypse's cooldown is reduced by 25 seconds for every enemy Hero hit (to a minimum of 5 seconds) and is cast for free when Diablo dies.",
          "en": "Apocalypse's cooldown is reduced by 25 seconds for every enemy Hero hit (to a minimum of 5 seconds) and is cast for free when Diablo dies."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "dva",
    "enabled": false,
    "name": {
      "fr": "D.Va",
      "en": "D.Va"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_dva.png",
    "headline": {
      "fr": "Bruiser à deux vies qui plonge et revient sans cesse.",
      "en": "Two-life bruiser who dives in and keeps coming back."
    },
    "gameplay": {
      "fr": "D.Va plonge avec son méca, absorbe les projectiles avec la Matrice défensive, puis continue à se battre en pilote avant de rappeler un nouveau méca.",
      "en": "D.Va dives in her mech, eats projectiles with Defense Matrix, then keeps fighting as the pilot before calling down a fresh mech."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Mode méca",
          "en": "Mech Mode"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_mechmode.png",
        "description": {
          "fr": "Quand le méca est détruit, tu continues à jouer en pilote.",
          "en": "When the mech is destroyed, you keep playing as the pilot."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Propulseurs",
          "en": "Boosters"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_boosters.png",
        "description": {
          "fr": "Fonce en avant et bouscule les ennemis.",
          "en": "Boost forward, knocking enemies aside."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Matrice défensive",
          "en": "Defense Matrix"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_defensematrix.png",
        "description": {
          "fr": "Réduit fortement les dégâts subis par les ennemis ciblés.",
          "en": "Heavily reduces damage dealt by targeted enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Autodestruction",
          "en": "Self-Destruct"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_selfdestruct.png",
        "description": {
          "fr": "Fait exploser le méca après quelques secondes.",
          "en": "Detonates the mech after a few seconds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Saut de lapin",
          "en": "Bunny Hop"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_bunnyhop.png",
        "description": {
          "fr": "Bondit plusieurs fois en étourdissant les ennemis.",
          "en": "Hops several times, stunning enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Micro-missiles",
          "en": "Micro Missiles"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_micromissiles.png",
        "description": {
          "fr": "Salve de missiles en zone devant toi.",
          "en": "Volley of missiles in an area in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Marcheur mécanisé",
          "en": "Mechanized Walker"
        },
        "icon": "assets/heroes/base_spells/dva/images/spells/storm_ui_icon_dva_mount.png",
        "description": {
          "fr": "Monture mécanisée.",
          "en": "Mechanized mount."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne gaspille pas l'Autodestruction : combine-la avec un contrôle allié.",
        "en": "Don't waste Self-Destruct: pair it with allied crowd control."
      },
      {
        "fr": "En mode pilote, continue d'attaquer pour rappeler ton méca plus vite.",
        "en": "In pilot mode, keep attacking to call your mech back faster."
      },
      {
        "fr": "Matrice défensive annule les gros sorts ennemis ciblés.",
        "en": "Defense Matrix negates big targeted enemy abilities."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,DVa]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo2v11i",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joz6jvp",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jogics2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jod4gam",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jofsdx4",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jou2nq0",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jokyu1g",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo2v11i",
        "level": 1,
        "name": {
          "fr": "Full Metal",
          "en": "Full Metal"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_mechmode.png",
        "description": {
          "fr": "D.Va's Mech gains 10% increased Health and its Fusion Cannons heal for 16% of the damage dealt to enemies in its bonus area.",
          "en": "D.Va's Mech gains 10% increased Health and its Fusion Cannons heal for 16% of the damage dealt to enemies in its bonus area."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joz6jvp",
        "level": 4,
        "name": {
          "fr": "Rush-down",
          "en": "Rush-down"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_boosters.png",
        "description": {
          "fr": "Boosters deals an additional 2% of maximum Health as damage to Heroes and heals D.Va's Mech for the damage dealt. Boosters deals 50% increased damage to non-Heroic enemies.",
          "en": "Boosters deals an additional 2% of maximum Health as damage to Heroes and heals D.Va's Mech for the damage dealt. Boosters deals 50% increased damage to non-Heroic enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogics2",
        "level": 7,
        "name": {
          "fr": "Get On The Point!",
          "en": "Get On The Point!"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_boosters.png",
        "description": {
          "fr": "Casting Boosters grants nearby allies 20% Movement Speed for 2 seconds.  Passive: If D.Va has not taken damage in the last 3 seconds, Boosters' cooldown refreshes 100% faster.",
          "en": "Casting Boosters grants nearby allies 20% Movement Speed for 2 seconds.  Passive: If D.Va has not taken damage in the last 3 seconds, Boosters' cooldown refreshes 100% faster."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod4gam",
        "level": 10,
        "name": {
          "fr": "Bunny Hop",
          "en": "Bunny Hop"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_bunnyhop.png",
        "description": {
          "fr": "D.Va's Mech becomes Unstoppable and stomps every 0.5 seconds, dealing 70 (+4% per level) damage in a large area. Every 4th consecutive hit on a Hero deals 100% more damage and Stuns them for 0.5 seconds.  Lasts for 4 seconds.  Requires Mech Mode.",
          "en": "D.Va's Mech becomes Unstoppable and stomps every 0.5 seconds, dealing 70 (+4% per level) damage in a large area. Every 4th consecutive hit on a Hero deals 100% more damage and Stuns them for 0.5 seconds.  Lasts for 4 seconds.  Requires Mech Mode."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofsdx4",
        "level": 13,
        "name": {
          "fr": "Target Locked",
          "en": "Target Locked"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_defensematrix.png",
        "description": {
          "fr": "Enemy Heroes that remain in your Defense Matrix for 1 seconds have their Armor reduced by 15 and their Movement Speed reduced by 25% for 3 seconds.",
          "en": "Enemy Heroes that remain in your Defense Matrix for 1 seconds have their Armor reduced by 15 and their Movement Speed reduced by 25% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jou2nq0",
        "level": 16,
        "name": {
          "fr": "In For The Kill",
          "en": "In For The Kill"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_boosters.png",
        "description": {
          "fr": "Casting Boosters grants a Shield equal to 10% of maximum life for 2.5 seconds. Each Enemy Hero hit by Boosters increases D.Va's Mech's Basic Attack damage by 10% for 5 seconds, stacking up to 5 times.",
          "en": "Casting Boosters grants a Shield equal to 10% of maximum life for 2.5 seconds. Each Enemy Hero hit by Boosters increases D.Va's Mech's Basic Attack damage by 10% for 5 seconds, stacking up to 5 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokyu1g",
        "level": 20,
        "name": {
          "fr": "Stop and Pop",
          "en": "Stop and Pop"
        },
        "icon": "assets/heroes/base_spells/dva/images/talents/storm_ui_icon_dva_bunnyhop.png",
        "description": {
          "fr": "Increase Bunny Hop's duration by 4 seconds, and it does not decay while D.Va's Mech is stationary.",
          "en": "Increase Bunny Hop's duration by 4 seconds, and it does not decay while D.Va's Mech is stationary."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "etc",
    "enabled": false,
    "name": {
      "fr": "E.T.C.",
      "en": "E.T.C."
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_l90etc.png",
    "headline": {
      "fr": "Tank de contrôle avec l'un des meilleurs engagements du jeu.",
      "en": "Control tank with one of the best engages in the game."
    },
    "gameplay": {
      "fr": "E.T.C. glisse dans la mêlée pour étourdir plusieurs cibles, puis enchaîne avec Pogo endiablé ou repousse les plongeurs avec un riff bien placé.",
      "en": "E.T.C. slides into the fray to stun multiple targets, then follows up with Mosh Pit or peels divers away with a well-placed riff."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Rockstar",
          "en": "Rockstar"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_rockstar.png",
        "description": {
          "fr": "Améliore la vitesse d'attaque des alliés proches.",
          "en": "Increases nearby allies' Attack Speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Glissade",
          "en": "Powerslide"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_powerslide.png",
        "description": {
          "fr": "Glisse en avant et étourdit les ennemis touchés.",
          "en": "Slides forward, stunning enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Riff dévastateur",
          "en": "Face Melt"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_facemelt.png",
        "description": {
          "fr": "Repousse les ennemis proches et les ralentit.",
          "en": "Knocks back nearby enemies and slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Solo de guitare",
          "en": "Guitar Solo"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_guitarsolo.png",
        "description": {
          "fr": "Se soigne progressivement pendant l'incantation.",
          "en": "Heals you over the duration of the channel."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Pogo endiablé",
          "en": "Mosh Pit"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_moshpit.png",
        "description": {
          "fr": "Étourdit tous les ennemis proches pendant plusieurs secondes.",
          "en": "Stuns all nearby enemies for several seconds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Plongeon de scène",
          "en": "Stage Dive"
        },
        "icon": "assets/heroes/base_spells/etc/images/spells/storm_ui_icon_etc_stagedive.png",
        "description": {
          "fr": "Saute sur une zone lointaine, dégâts et ralentissement à l'arrivée.",
          "en": "Leaps to a distant area, damaging and slowing on landing."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Glissade peut aussi servir à repousser un plongeur loin de ton soigneur.",
        "en": "Powerslide can also be used to knock a diver away from your healer."
      },
      {
        "fr": "Pogo endiablé se lance souvent depuis un buisson ou après un Glissade.",
        "en": "Mosh Pit is usually cast from a bush or right after a Powerslide."
      },
      {
        "fr": "Solo de guitare te soigne : lance-le avant de perdre trop de vie.",
        "en": "Guitar Solo heals you: start it before you get too low."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,L90ETC]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo1mx5p",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo2ahdv",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jocejfo",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jossite",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jog9qse",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo25cxe",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jogjg6j",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo1mx5p",
        "level": 1,
        "name": {
          "fr": "Guitar Hero",
          "en": "Guitar Hero"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_guitarsolo.png",
        "description": {
          "fr": "While Guitar Solo is active, E.T.C. heals for 60% of his damage dealt by Basic Attacks.  Basic Attacks increase the duration of Guitar Solo by 0.5 seconds.",
          "en": "While Guitar Solo is active, E.T.C. heals for 60% of his damage dealt by Basic Attacks.  Basic Attacks increase the duration of Guitar Solo by 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2ahdv",
        "level": 4,
        "name": {
          "fr": "Crowd Surfer",
          "en": "Crowd Surfer"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_powerslide.png",
        "description": {
          "fr": "Allows Powerslide to travel over walls and terrain. If no enemies are hit, reduce the cooldown by 7 seconds and refund the Mana cost.",
          "en": "Allows Powerslide to travel over walls and terrain. If no enemies are hit, reduce the cooldown by 7 seconds and refund the Mana cost."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jocejfo",
        "level": 7,
        "name": {
          "fr": "Pinball Wizard",
          "en": "Pinball Wizard"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_facemelt.png",
        "description": {
          "fr": "Face Melt does 300% more damage to enemies recently affected by Powerslide.",
          "en": "Face Melt does 300% more damage to enemies recently affected by Powerslide."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jossite",
        "level": 10,
        "name": {
          "fr": "Mosh Pit",
          "en": "Mosh Pit"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_moshpit.png",
        "description": {
          "fr": "After 0.75 seconds, channel to stun nearby enemies for 4 seconds.",
          "en": "After 0.75 seconds, channel to stun nearby enemies for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jog9qse",
        "level": 13,
        "name": {
          "fr": "Mic Check",
          "en": "Mic Check"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_facemelt.png",
        "description": {
          "fr": "Hitting at least 2 targets with Face Melt reduces its cooldown by 6 seconds.",
          "en": "Hitting at least 2 targets with Face Melt reduces its cooldown by 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo25cxe",
        "level": 16,
        "name": {
          "fr": "Show Stopper",
          "en": "Show Stopper"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_powerslide.png",
        "description": {
          "fr": "After using Powerslide, gain 35 Armor for 4 seconds, reducing all damage taken by 35%.",
          "en": "After using Powerslide, gain 35 Armor for 4 seconds, reducing all damage taken by 35%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogjg6j",
        "level": 20,
        "name": {
          "fr": "Tour Bus",
          "en": "Tour Bus"
        },
        "icon": "assets/heroes/base_spells/etc/images/talents/storm_ui_icon_etc_moshpit.png",
        "description": {
          "fr": "Channeling Mosh Pit refreshes Powerslide's cooldown, and it can be cast to increase Mosh Pit's duration by 2 seconds.",
          "en": "Channeling Mosh Pit refreshes Powerslide's cooldown, and it can be cast to increase Mosh Pit's duration by 2 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "falstad",
    "enabled": false,
    "name": {
      "fr": "Falstad",
      "en": "Falstad"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_falstad.png",
    "headline": {
      "fr": "Assassin d'attaques à distance avec une mobilité globale.",
      "en": "Ranged auto-attack assassin with global mobility."
    },
    "gameplay": {
      "fr": "Falstad frappe de loin, harcèle avec son Marteaurang, et peut traverser la carte entière avec Vol pour surprendre l'ennemi.",
      "en": "Falstad hits from afar, harasses with Hammerang, and can cross the entire map with Flight to catch the enemy off guard."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Vent arrière",
          "en": "Tailwind"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_tailwind.png",
        "description": {
          "fr": "Gagne de la vitesse de déplacement hors combat.",
          "en": "Gain Movement Speed out of combat."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Marteaurang",
          "en": "Hammerang"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_hammerang.png",
        "description": {
          "fr": "Lance ton marteau qui blesse à l'aller et au retour.",
          "en": "Throws your hammer, damaging out and back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Paratonnerre",
          "en": "Lightning Rod"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_lightningrod.png",
        "description": {
          "fr": "Éclair qui frappe une cible et te soigne.",
          "en": "Lightning that strikes a target and heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Tonneau",
          "en": "Barrel Roll"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_barrelroll.png",
        "description": {
          "fr": "Déplacement rapide en diagonale.",
          "en": "Quick dash to reposition."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Puissante bourrasque",
          "en": "Mighty Gust"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_mightygust.png",
        "description": {
          "fr": "Repousse fortement les ennemis et les ralentit.",
          "en": "Strongly knocks back enemies and slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Explosion des Hinterlands",
          "en": "Hinterland Blast"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_hinterlandblast.png",
        "description": {
          "fr": "Rayon global qui inflige de très gros dégâts.",
          "en": "Global beam dealing very heavy damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Vol",
          "en": "Flight"
        },
        "icon": "assets/heroes/base_spells/falstad/images/spells/storm_ui_icon_falstad_mount.png",
        "description": {
          "fr": "S'envole et traverse la carte.",
          "en": "Take flight and cross the map."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Vol permet de sauver une ligne ou de fuir : garde-le pour les moments clés.",
        "en": "Flight can save a lane or escape: keep it for key moments."
      },
      {
        "fr": "Marteaurang blesse à l'aller et au retour.",
        "en": "Hammerang damages on the way out and back."
      },
      {
        "fr": "Puissante bourrasque repousse les plongeurs loin de ton équipe.",
        "en": "Mighty Gust pushes divers far away from your team."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Falstad]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo55waz",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joflmsw",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joef55k",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo10tg8",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jojbmbu",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo5kixs",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo00941",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo55waz",
        "level": 1,
        "name": {
          "fr": "Gathering Storm",
          "en": "Gathering Storm"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_hammerang.png",
        "description": {
          "fr": "Quest: Every time Hammerang hits a Hero increase its damage by 0.5% and refund 6 Mana.  Reward: After hitting 30 Heroes with Hammerang, increase its damage by 15%.",
          "en": "Quest: Every time Hammerang hits a Hero increase its damage by 0.5% and refund 6 Mana.  Reward: After hitting 30 Heroes with Hammerang, increase its damage by 15%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joflmsw",
        "level": 4,
        "name": {
          "fr": "Static Shield",
          "en": "Static Shield"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_lightningrod.png",
        "description": {
          "fr": "Lightning Rod strikes grant a Shield equal to 4% of Falstad's maximum Health, up to 28%, for 4 seconds.",
          "en": "Lightning Rod strikes grant a Shield equal to 4% of Falstad's maximum Health, up to 28%, for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joef55k",
        "level": 7,
        "name": {
          "fr": "Secret Weapon",
          "en": "Secret Weapon"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_hammerang.png",
        "description": {
          "fr": "Increases Hammerang's range by 30% and Basic Attacks deal 75% bonus damage while Hammerang is in flight.",
          "en": "Increases Hammerang's range by 30% and Basic Attacks deal 75% bonus damage while Hammerang is in flight."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo10tg8",
        "level": 10,
        "name": {
          "fr": "Hinterland Blast",
          "en": "Hinterland Blast"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_hinterlandblast.png",
        "description": {
          "fr": "After 1 second, deal 475 (+4.75% per level) damage to enemies within a long line. The cooldown is reduced by 30 seconds for every enemy Hero hit.",
          "en": "After 1 second, deal 475 (+4.75% per level) damage to enemies within a long line. The cooldown is reduced by 30 seconds for every enemy Hero hit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojbmbu",
        "level": 13,
        "name": {
          "fr": "Thunderstrikes",
          "en": "Thunderstrikes"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_lightningrod.png",
        "description": {
          "fr": "Lightning Rod deals 25% more damage each subsequent strike.",
          "en": "Lightning Rod deals 25% more damage each subsequent strike."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5kixs",
        "level": 16,
        "name": {
          "fr": "Crippling Hammer",
          "en": "Crippling Hammer"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_hammerang.png",
        "description": {
          "fr": "Increase Hammerang's Slow from 25% to 50%, and Hammerang's explosion also Slows.",
          "en": "Increase Hammerang's Slow from 25% to 50%, and Hammerang's explosion also Slows."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo00941",
        "level": 20,
        "name": {
          "fr": "Call of the Wildhammer",
          "en": "Call of the Wildhammer"
        },
        "icon": "assets/heroes/base_spells/falstad/images/talents/storm_ui_icon_falstad_hinterlandblast.png",
        "description": {
          "fr": "Hinterland Blast has double the range and deals 25% more damage.",
          "en": "Hinterland Blast has double the range and deals 25% more damage."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "fenix",
    "enabled": false,
    "name": {
      "fr": "Fenix",
      "en": "Fenix"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_fenix.png",
    "headline": {
      "fr": "Assassin à distance robuste grâce à ses boucliers réguliers.",
      "en": "Durable ranged assassin thanks to his recharging shields."
    },
    "gameplay": {
      "fr": "Fenix alterne entre son canon à répétition pour les dégâts soutenus et son Découpeur plasma pour toucher plusieurs cibles, tout en se repositionnant avec Distorsion.",
      "en": "Fenix alternates between Repeater Cannon for sustained damage and Plasma Cutter for multi-target hits, repositioning with Warp."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Condensateur de bouclier",
          "en": "Shield Capacitor"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_shield_1.png",
        "description": {
          "fr": "Bouclier qui se recharge quand tu ne subis pas de dégâts.",
          "en": "Shield that recharges when you avoid damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Découpeur plasma",
          "en": "Plasma Cutter"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_q.png",
        "description": {
          "fr": "Rayon qui traverse les ennemis en ligne.",
          "en": "Beam that pierces enemies in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Mode canon à répétition",
          "en": "Weapon Mode: Repeater Cannon"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_w_2.png",
        "description": {
          "fr": "Change ton mode d'attaque pour des dégâts soutenus.",
          "en": "Switches your weapon mode for sustained damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Distorsion",
          "en": "Warp"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_teleport.png",
        "description": {
          "fr": "Se téléporte sur une courte distance.",
          "en": "Teleports a short distance."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Casseur de planète",
          "en": "Planet Cracker"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_r_planet_cracker.png",
        "description": {
          "fr": "Rayon géant qui balaie une large zone.",
          "en": "Giant beam sweeping a wide area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Salve de purification",
          "en": "Purification Salvo"
        },
        "icon": "assets/heroes/base_spells/fenix/images/spells/storm_ui_icon_fenix_r_scan.png",
        "description": {
          "fr": "Marque plusieurs ennemis puis les bombarde.",
          "en": "Marks several enemies, then bombards them."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tes boucliers se rechargent hors combat : recule quelques secondes.",
        "en": "Your shields recharge out of combat: step back for a few seconds."
      },
      {
        "fr": "Découpeur plasma traverse les ennemis alignés.",
        "en": "Plasma Cutter pierces enemies lined up."
      },
      {
        "fr": "Casseur de planète est un rayon énorme : combine-le à un contrôle allié.",
        "en": "Planet Cracker is a huge beam: combine it with allied crowd control."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Fenix]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johl6st",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joy7tf3",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jofanap",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jothpjn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jos8s8y",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joll72v",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joze0zy",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6johl6st",
        "level": 1,
        "name": {
          "fr": "Advanced Targeting",
          "en": "Advanced Targeting"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_q.png",
        "description": {
          "fr": "Quest: Hitting enemy Heroes with Plasma Cutter permanently increases Fenix's Basic Attack damage by 0.5, up to 60.  Reward: After hitting 30 Heroes, Plasma Cutter circles an additional time.",
          "en": "Quest: Hitting enemy Heroes with Plasma Cutter permanently increases Fenix's Basic Attack damage by 0.5, up to 60.  Reward: After hitting 30 Heroes, Plasma Cutter circles an additional time."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joy7tf3",
        "level": 4,
        "name": {
          "fr": "Target Acquired",
          "en": "Target Acquired"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_w_2.png",
        "description": {
          "fr": "Basic Attacks against Slowed Heroes with Repeater Cannon active grant 10% Movement Speed for 4 seconds, up to 40%.",
          "en": "Basic Attacks against Slowed Heroes with Repeater Cannon active grant 10% Movement Speed for 4 seconds, up to 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofanap",
        "level": 7,
        "name": {
          "fr": "Combat Advantage",
          "en": "Combat Advantage"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_q.png",
        "description": {
          "fr": "Plasma Cutter deals 35% more damage to Slowed targets.",
          "en": "Plasma Cutter deals 35% more damage to Slowed targets."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jothpjn",
        "level": 10,
        "name": {
          "fr": "Purification Salvo",
          "en": "Purification Salvo"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_r_scan.png",
        "description": {
          "fr": "Channel for 1.5 seconds, sweeping a laser in front of Fenix that locks onto enemy Heroes. Once Channeling finishes, fire 5 missiles at each locked Hero, dealing 79 (+4% per level) damage each. Deals 50% increased damage to Slowed targets.",
          "en": "Channel for 1.5 seconds, sweeping a laser in front of Fenix that locks onto enemy Heroes. Once Channeling finishes, fire 5 missiles at each locked Hero, dealing 79 (+4% per level) damage each. Deals 50% increased damage to Slowed targets."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jos8s8y",
        "level": 13,
        "name": {
          "fr": "Adanium Shell",
          "en": "Adanium Shell"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_teleport.png",
        "description": {
          "fr": "After arriving with Warp, gain 50 Armor for 4 seconds.",
          "en": "After arriving with Warp, gain 50 Armor for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joll72v",
        "level": 16,
        "name": {
          "fr": "Offensive Cadence",
          "en": "Offensive Cadence"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_w_2.png",
        "description": {
          "fr": "Every 3rd Basic Attack against Heroes while Repeater Cannon is active deals an additional 6% of the target's maximum Health as damage.",
          "en": "Every 3rd Basic Attack against Heroes while Repeater Cannon is active deals an additional 6% of the target's maximum Health as damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joze0zy",
        "level": 20,
        "name": {
          "fr": "Armageddon Beam",
          "en": "Armageddon Beam"
        },
        "icon": "assets/heroes/base_spells/fenix/images/talents/storm_ui_icon_fenix_r_planet_cracker.png",
        "description": {
          "fr": "Planet Cracker's width increases by 100% over 1.5 seconds.  Passive: Reduce Planet Cracker's cooldown by 40 seconds.",
          "en": "Planet Cracker's width increases by 100% over 1.5 seconds.  Passive: Reduce Planet Cracker's cooldown by 40 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "gall",
    "enabled": false,
    "name": {
      "fr": "Gall",
      "en": "Gall"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_gall.png",
    "headline": {
      "fr": "Moitié dégâts du duo à deux têtes : il ne se déplace pas seul.",
      "en": "The damage half of the two-headed duo: he doesn't move on his own."
    },
    "gameplay": {
      "fr": "Gall inflige d'énormes dégâts de zone depuis le corps de Cho. Il ne contrôle pas ses déplacements et doit donc viser en permanence.",
      "en": "Gall deals huge area damage from Cho's body. He doesn't control movement, so he must focus entirely on aiming."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Rage d'ogre",
          "en": "Ogre Rage"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_ogrerage.png",
        "description": {
          "fr": "Tes dégâts augmentent quand vos points de vie baissent.",
          "en": "Your damage increases as your Health drops."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Flamme d'ombre",
          "en": "Shadowflame"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_shadowflame.png",
        "description": {
          "fr": "Vague de flammes sombres en ligne.",
          "en": "Wave of shadowflame in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Orbe de terreur",
          "en": "Dread Orb"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_chaoscollision.png",
        "description": {
          "fr": "Orbe qui rebondit trois fois et blesse en zone.",
          "en": "Orb that bounces three times, damaging in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Explosion runique",
          "en": "Runic Blast"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_detonaterunes.png",
        "description": {
          "fr": "Fait exploser la bombe runique de Cho.",
          "en": "Detonates Cho's Rune Bomb."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Néant distordu",
          "en": "Twisting Nether"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_twistingnether_a.png",
        "description": {
          "fr": "Zones de dégâts continus autour des ennemis touchés.",
          "en": "Zones of continuous damage around hit enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Volée de traits de l'ombre",
          "en": "Shadow Bolt Volley"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_shadowboltvolley.png",
        "description": {
          "fr": "Salve de projectiles qui blesse toute une zone.",
          "en": "Volley of bolts damaging an entire area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Bousculade",
          "en": "Shove"
        },
        "icon": "assets/heroes/base_spells/gall/images/spells/storm_ui_icon_gall_shove.png",
        "description": {
          "fr": "Repousse les ennemis proches.",
          "en": "Shoves nearby enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tu ne vois pas très loin : suis les appels de ton Cho.",
        "en": "Your vision is limited: follow your Cho's calls."
      },
      {
        "fr": "Orbe de terreur rebondit : anticipe les trajectoires.",
        "en": "Dread Orb bounces: anticipate its path."
      },
      {
        "fr": "Explosion runique déclenche la bombe de Cho : coordonnez-vous.",
        "en": "Runic Blast detonates Cho's bomb: coordinate."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Gall]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo4kfqe",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo2ze0c",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jotw8y7",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jonl8qw",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jodvwfl",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joci63c",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo8ergm",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo4kfqe",
        "level": 1,
        "name": {
          "fr": "Keep Moving!",
          "en": "Keep Moving!"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_shove.png",
        "description": {
          "fr": "Increases the Movement Speed bonus of Shove by 10% and its duration by 2 seconds.",
          "en": "Increases the Movement Speed bonus of Shove by 10% and its duration by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2ze0c",
        "level": 4,
        "name": {
          "fr": "Rising Dread",
          "en": "Rising Dread"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_chaoscollision.png",
        "description": {
          "fr": "Each bounce of Dread Orb increases its radius by 25% and damage by 15%. Activate Dread Orb before the second bounce ends to reverse the direction of the third bounce.",
          "en": "Each bounce of Dread Orb increases its radius by 25% and damage by 15%. Activate Dread Orb before the second bounce ends to reverse the direction of the third bounce."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotw8y7",
        "level": 7,
        "name": {
          "fr": "Edge of Madness",
          "en": "Edge of Madness"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_shadowflame.png",
        "description": {
          "fr": "Every subsequent hit of Shadowflame against the same enemy Hero deals an additional 12% damage, to a maximum of 60%. These bonuses are lost if the Hero has not been hit for 7 seconds.",
          "en": "Every subsequent hit of Shadowflame against the same enemy Hero deals an additional 12% damage, to a maximum of 60%. These bonuses are lost if the Hero has not been hit for 7 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonl8qw",
        "level": 10,
        "name": {
          "fr": "Shadow Bolt Volley",
          "en": "Shadow Bolt Volley"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_shadowboltvolley.png",
        "description": {
          "fr": "After 1 second, unleash 20 Shadow Bolts over 4 seconds, each dealing 87 (+4% per level) damage to the first target hit. The bolts fire towards your mouse.",
          "en": "After 1 second, unleash 20 Shadow Bolts over 4 seconds, each dealing 87 (+4% per level) damage to the first target hit. The bolts fire towards your mouse."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodvwfl",
        "level": 13,
        "name": {
          "fr": "Searing Shadows",
          "en": "Searing Shadows"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_shadowflame.png",
        "description": {
          "fr": "Enemy Heroes hit by Shadowflame take an additional 2% of their maximum Health as damage.",
          "en": "Enemy Heroes hit by Shadowflame take an additional 2% of their maximum Health as damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joci63c",
        "level": 16,
        "name": {
          "fr": "Leaden Orb",
          "en": "Leaden Orb"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_chaoscollision.png",
        "description": {
          "fr": "Dread Orb Stuns enemy Heroes for 0.75 seconds.",
          "en": "Dread Orb Stuns enemy Heroes for 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8ergm",
        "level": 20,
        "name": {
          "fr": "Shadowfury",
          "en": "Shadowfury"
        },
        "icon": "assets/heroes/base_spells/gall/images/talents/storm_ui_icon_gall_shadowboltvolley.png",
        "description": {
          "fr": "Shadow Bolt Volley hits all enemies in its path.",
          "en": "Shadow Bolt Volley hits all enemies in its path."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "garrosh",
    "enabled": false,
    "name": {
      "fr": "Garrosh",
      "en": "Garrosh"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_garrosh.png",
    "headline": {
      "fr": "Tank qui déplace les ennemis et sauve ses alliés.",
      "en": "Tank who throws enemies around and saves allies."
    },
    "gameplay": {
      "fr": "Garrosh utilise Boulet de démolition pour jeter un ennemi dans son équipe ou éjecter un allié en danger. Plus il perd de vie, plus il devient résistant.",
      "en": "Garrosh uses Wrecking Ball to throw an enemy into his team or fling an endangered ally to safety. The lower his Health, the tougher he gets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Blindage",
          "en": "Armor Up"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_armor_up.png",
        "description": {
          "fr": "Gagne de l'armure lorsque tes points de vie sont bas.",
          "en": "Gain Armor as your Health gets lower."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fracasseur",
          "en": "Groundbreaker"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_groundbreaker.png",
        "description": {
          "fr": "Frappe le sol en cône, inflige des dégâts et ralentit.",
          "en": "Smashes the ground in a cone, damaging and slowing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Soif de sang",
          "en": "Bloodthirst"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_bloodthirst.png",
        "description": {
          "fr": "Inflige des dégâts et te soigne davantage si la cible est ralentie.",
          "en": "Deals damage and heals you more if the target is slowed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Boulet de démolition",
          "en": "Wrecking Ball"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_wrecking_ball.png",
        "description": {
          "fr": "Attrape un ennemi ou un allié et le projette derrière toi.",
          "en": "Grabs an enemy or ally and throws them behind you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Défi du chef de guerre",
          "en": "Warlord's Challenge"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_warlords_challenge.png",
        "description": {
          "fr": "Provoque tous les héros ennemis proches et les force à t'attaquer.",
          "en": "Taunts all nearby enemy Heroes, forcing them to attack you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Décimer",
          "en": "Decimate"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/spells/storm_ui_icon_garrosh_decimate.png",
        "description": {
          "fr": "Dégâts de zone autour de toi qui réduisent les dégâts des ennemis touchés.",
          "en": "AoE damage around you that reduces hit enemies' damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Boulet de démolition peut lancer un allié : c'est un outil de sauvetage énorme.",
        "en": "Wrecking Ball can throw an ally: it's a huge saving tool."
      },
      {
        "fr": "Soif de sang te soigne, garde-la pour te sortir d'un burst.",
        "en": "Bloodthirst heals you, save it to survive burst damage."
      },
      {
        "fr": "Défi du chef de guerre force un désengagement ennemi complet.",
        "en": "Warlord's Challenge completely denies an enemy disengage."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Garrosh]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jolx70j",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0ddn4",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joef1qi",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo8jbxu",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jot558d",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo94rxx",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo0ie2d",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jolx70j",
        "level": 1,
        "name": {
          "fr": "Warbreaker",
          "en": "Warbreaker"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        "description": {
          "fr": "Quest: Stun Heroes with Groundbreaker.  Reward: After Stunning 5 Heroes, Groundbreaker's Stun deals an additional 165 (+4% per level) damage over 3 seconds to Heroes.  Reward: After Stunning 15 Heroes, permanently reduce Groundbreaker's cooldown by 2 seconds.",
          "en": "Quest: Stun Heroes with Groundbreaker.  Reward: After Stunning 5 Heroes, Groundbreaker's Stun deals an additional 165 (+4% per level) damage over 3 seconds to Heroes.  Reward: After Stunning 15 Heroes, permanently reduce Groundbreaker's cooldown by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0ddn4",
        "level": 4,
        "name": {
          "fr": "In For the Kill",
          "en": "In For the Kill"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_bloodthirst.png",
        "description": {
          "fr": "Increase Bloodthirst's damage against non-Heroes by 70%. Killing enemies with Bloodthirst resets its cooldown and refunds its Mana cost.",
          "en": "Increase Bloodthirst's damage against non-Heroes by 70%. Killing enemies with Bloodthirst resets its cooldown and refunds its Mana cost."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joef1qi",
        "level": 7,
        "name": {
          "fr": "Intimidation",
          "en": "Intimidation"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        "description": {
          "fr": "Groundbreaker reduces the Attack Speed of Heroes hit by 30% for 4 seconds.",
          "en": "Groundbreaker reduces the Attack Speed of Heroes hit by 30% for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8jbxu",
        "level": 10,
        "name": {
          "fr": "Warlord's Challenge",
          "en": "Warlord's Challenge"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_warlords_challenge.png",
        "description": {
          "fr": "Silence nearby Heroes and force them to attack Garrosh for 2 seconds.",
          "en": "Silence nearby Heroes and force them to attack Garrosh for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jot558d",
        "level": 13,
        "name": {
          "fr": "Defensive Measures",
          "en": "Defensive Measures"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        "description": {
          "fr": "If Groundbreaker Stuns a Hero, Garrosh gains a 350 (+4% per level) Shield for 6 seconds.",
          "en": "If Groundbreaker Stuns a Hero, Garrosh gains a 350 (+4% per level) Shield for 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo94rxx",
        "level": 16,
        "name": {
          "fr": "Mortal Combo",
          "en": "Mortal Combo"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_groundbreaker.png",
        "description": {
          "fr": "Hitting a Hero with Groundbreaker's Stun and throwing them with Wrecking Ball within 3 seconds reduces Wrecking Ball's cooldown by 10 seconds, regardless of order.",
          "en": "Hitting a Hero with Groundbreaker's Stun and throwing them with Wrecking Ball within 3 seconds reduces Wrecking Ball's cooldown by 10 seconds, regardless of order."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0ie2d",
        "level": 20,
        "name": {
          "fr": "Death Wish",
          "en": "Death Wish"
        },
        "icon": "assets/heroes/base_spells/garrosh/images/talents/storm_ui_icon_garrosh_warlords_challenge.png",
        "description": {
          "fr": "Increase the duration of Warlord's Challenge by 0.5 seconds.  If an enemy Hero is killed while Taunted by Warlord's Challenge, its cooldown is reduced by 45 seconds.",
          "en": "Increase the duration of Warlord's Challenge by 0.5 seconds.  If an enemy Hero is killed while Taunted by Warlord's Challenge, its cooldown is reduced by 45 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "gazlowe",
    "enabled": false,
    "name": {
      "fr": "Gazleu",
      "en": "Gazlowe"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tinker.png",
    "headline": {
      "fr": "Spécialiste des structures qui détruit les forts et pose des tourelles.",
      "en": "Structure specialist who wrecks forts and drops turrets."
    },
    "gameplay": {
      "fr": "Gazlowe installe des tourelles pour tenir une zone, ramasse les débris pour réduire ses temps de recharge et démolit rapidement les bâtiments.",
      "en": "Gazlowe sets up turrets to hold an area, picks up scrap to reduce his cooldowns, and quickly demolishes structures."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Réduire, réutiliser, recycler",
          "en": "Reduce, Reuse, Recycle"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_salvager.png",
        "description": {
          "fr": "Ramasse des débris pour réduire tes temps de recharge.",
          "en": "Collect scrap to reduce your cooldowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tourelle Boum-Boum",
          "en": "Rock-It! Turret"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_rockitturret.png",
        "description": {
          "fr": "Déploie une tourelle qui tire sur les ennemis proches.",
          "en": "Deploys a turret that shoots nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Rayon de la mort",
          "en": "Deth Lazor"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_dethlazor.png",
        "description": {
          "fr": "Rayon perçant qui inflige de gros dégâts en ligne.",
          "en": "Piercing laser dealing heavy damage in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Charge d'explodium",
          "en": "Xplodium Charge"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_explodiumcharge.png",
        "description": {
          "fr": "Pose une bombe qui explose après un délai.",
          "en": "Plants a bomb that explodes after a delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Robo-gobelin",
          "en": "Robo-Goblin"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_robogoblin.png",
        "description": {
          "fr": "Renforce tes attaques et te rend plus résistant.",
          "en": "Empowers your attacks and makes you tougher."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Grav-o-bombe 3000",
          "en": "Grav-O-Bomb 3000"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/spells/storm_ui_icon_gazlowe_gravobomb.png",
        "description": {
          "fr": "Attire les ennemis d'une zone puis les fait exploser.",
          "en": "Pulls enemies in an area together, then detonates."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ramasse toujours les débris : ils réduisent tes temps de recharge.",
        "en": "Always pick up scrap: it reduces your cooldowns."
      },
      {
        "fr": "Pose tes tourelles derrière un mur pour qu'elles soient difficiles à détruire.",
        "en": "Place turrets behind walls so they are hard to destroy."
      },
      {
        "fr": "Grav-o-bombe 3000 combinée à un contrôle allié fait des ravages.",
        "en": "Grav-O-Bomb 3000 combined with allied CC is devastating."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Tinker]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joio3eo",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jowrr0t",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joduxxi",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jowqe6s",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jotjjgr",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jom98uc",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jowvcvd",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joio3eo",
        "level": 1,
        "name": {
          "fr": "Rocket Boots",
          "en": "Rocket Boots"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_explodiumcharge.png",
        "description": {
          "fr": "Increase the cast range of Xplodium Charge by 30% and its damage by 35%. Hitting an enemy Hero increases Movement Speed by 20% for 3 seconds.",
          "en": "Increase the cast range of Xplodium Charge by 30% and its damage by 35%. Hitting an enemy Hero increases Movement Speed by 20% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowrr0t",
        "level": 4,
        "name": {
          "fr": "Rock It Sock It",
          "en": "Rock It Sock It"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
        "description": {
          "fr": "Casting Rock-It! Turret grants Gazlowe a Shield that absorbs up to 200 (+4% per level) damage for 2.5 seconds.",
          "en": "Casting Rock-It! Turret grants Gazlowe a Shield that absorbs up to 200 (+4% per level) damage for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joduxxi",
        "level": 7,
        "name": {
          "fr": "Goblin Fusion",
          "en": "Goblin Fusion"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_combo_q_w.png",
        "description": {
          "fr": "Generate 3 Scrap for each Hero hit by Deth Lazor.",
          "en": "Generate 3 Scrap for each Hero hit by Deth Lazor."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowqe6s",
        "level": 10,
        "name": {
          "fr": "Robo-Goblin",
          "en": "Robo-Goblin"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_robogoblin.png",
        "description": {
          "fr": "Activate to become Unstoppable for 1.5 seconds.  Passive: Basic Attacks deal 90 (+4% per level) bonus damage over 5 seconds, stacking up to 3 times.",
          "en": "Activate to become Unstoppable for 1.5 seconds.  Passive: Basic Attacks deal 90 (+4% per level) bonus damage over 5 seconds, stacking up to 3 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotjjgr",
        "level": 13,
        "name": {
          "fr": "Positive Reinforcement",
          "en": "Positive Reinforcement"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_rockitturret.png",
        "description": {
          "fr": "Primary Rock-It! Turret attacks against Heroes increase Gazlowe's Attack Speed by 40% for 3 seconds.",
          "en": "Primary Rock-It! Turret attacks against Heroes increase Gazlowe's Attack Speed by 40% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jom98uc",
        "level": 16,
        "name": {
          "fr": "Firin' Mah Lazorz",
          "en": "Firin' Mah Lazorz"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_dethlazor.png",
        "description": {
          "fr": "Firing Deth Lazor causes all of Gazlowe's Rock-It! Turrets to fire a Deth Lazor of their own that deals 125 (+4% per level) damage.",
          "en": "Firing Deth Lazor causes all of Gazlowe's Rock-It! Turrets to fire a Deth Lazor of their own that deals 125 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowvcvd",
        "level": 20,
        "name": {
          "fr": "Mecha-Lord",
          "en": "Mecha-Lord"
        },
        "icon": "assets/heroes/base_spells/gazlowe/images/talents/storm_ui_icon_gazlowe_robogoblin.png",
        "description": {
          "fr": "Basic Attacks increase Gazlowe's Armor by 10 for 10 seconds, up to a maximum of 30, and deal 50% bonus damage to Stunned or Slowed enemies.",
          "en": "Basic Attacks increase Gazlowe's Armor by 10 for 10 seconds, up to a maximum of 30, and deal 50% bonus damage to Stunned or Slowed enemies."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "genji",
    "enabled": false,
    "name": {
      "fr": "Genji",
      "en": "Genji"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_genji.png",
    "headline": {
      "fr": "Assassin très mobile qui plonge, tue et ressort.",
      "en": "Highly mobile assassin who dives in, kills, and gets out."
    },
    "gameplay": {
      "fr": "Genji harcèle avec ses shurikens, renvoie les projectiles avec Déviation et enchaîne les Frappes rapides pour éliminer les cibles fragiles.",
      "en": "Genji harasses with shuriken, reflects projectiles with Deflect, and chains Swift Strikes to finish squishy targets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Cyber-agilité",
          "en": "Cyber Agility"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_cyberagility.png",
        "description": {
          "fr": "Peut franchir les murs par-dessus.",
          "en": "Can vault over walls."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Shuriken",
          "en": "Shuriken"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_shurikens.png",
        "description": {
          "fr": "Lance trois shurikens.",
          "en": "Throws three shuriken."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Déviation",
          "en": "Deflect"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_deflect.png",
        "description": {
          "fr": "Bloque et renvoie les projectiles.",
          "en": "Blocks and reflects projectiles."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Frappe rapide",
          "en": "Swift Strike"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_swiftstrike.png",
        "description": {
          "fr": "Traverse les ennemis en les blessant ; se recharge sur une élimination.",
          "en": "Dashes through enemies; resets on a takedown."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Lame du dragon",
          "en": "Dragonblade"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_dragonblade.png",
        "description": {
          "fr": "Renforce fortement tes attaques pendant quelques secondes.",
          "en": "Greatly empowers your attacks for a few seconds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Frappe en X",
          "en": "X-Strike"
        },
        "icon": "assets/heroes/base_spells/genji/images/spells/storm_ui_icon_genji_shurikens_xblade.png",
        "description": {
          "fr": "Deux frappes croisées qui explosent en zone.",
          "en": "Two crossing strikes that explode in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Déviation renvoie les projectiles ennemis : utilise-la sur les gros sorts.",
        "en": "Deflect reflects enemy projectiles: use it on big abilities."
      },
      {
        "fr": "Frappe rapide se recharge sur une élimination : enchaîne les cibles.",
        "en": "Swift Strike resets on a takedown: chain into the next target."
      },
      {
        "fr": "Ne plonge jamais sans une porte de sortie.",
        "en": "Never dive without an exit."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Genji]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo6ogvh",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joq91ob",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jonhz6y",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6johneew",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jolmmql",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo8p28z",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo2kdii",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo6ogvh",
        "level": 1,
        "name": {
          "fr": "Swift as the Wind",
          "en": "Swift as the Wind"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_swiftstrike.png",
        "description": {
          "fr": "Hitting an enemy Hero with Swift Strike increases Genji's Movement Speed by 30% for 3 seconds.",
          "en": "Hitting an enemy Hero with Swift Strike increases Genji's Movement Speed by 30% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joq91ob",
        "level": 4,
        "name": {
          "fr": "Shuriken Mastery",
          "en": "Shuriken Mastery"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_shurikens.png",
        "description": {
          "fr": "Quest: Hit enemy Heroes with Shuriken.  Reward: After hitting 30 Heroes, Shuriken damage is increased by 25.  Reward: After hitting 60 Heroes, Cyber Agility now refunds 3 charges of Shuriken.",
          "en": "Quest: Hit enemy Heroes with Shuriken.  Reward: After hitting 30 Heroes, Shuriken damage is increased by 25.  Reward: After hitting 60 Heroes, Cyber Agility now refunds 3 charges of Shuriken."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonhz6y",
        "level": 7,
        "name": {
          "fr": "Augmented Guard",
          "en": "Augmented Guard"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_deflect.png",
        "description": {
          "fr": "When Deflect ends, Genji gains a Shield equal to 100% of the damage blocked for 4 seconds.",
          "en": "When Deflect ends, Genji gains a Shield equal to 100% of the damage blocked for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johneew",
        "level": 10,
        "name": {
          "fr": "Dragonblade",
          "en": "Dragonblade"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_dragonblade.png",
        "description": {
          "fr": "Unleash the Dragonblade for 8 seconds. While active, Dragonblade can be reactivated to lunge forward and slash in a huge arc, dealing 240 (+4% per level) damage.",
          "en": "Unleash the Dragonblade for 8 seconds. While active, Dragonblade can be reactivated to lunge forward and slash in a huge arc, dealing 240 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolmmql",
        "level": 13,
        "name": {
          "fr": "Shingan",
          "en": "Shingan"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_shurikens.png",
        "description": {
          "fr": "Hitting an enemy with all 3 Shuriken deals 115 (+4% per level) bonus damage.",
          "en": "Hitting an enemy with all 3 Shuriken deals 115 (+4% per level) bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8p28z",
        "level": 16,
        "name": {
          "fr": "Reflect",
          "en": "Reflect"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_deflect.png",
        "description": {
          "fr": "Deflect also deals an additional 33% of the damage blocked.",
          "en": "Deflect also deals an additional 33% of the damage blocked."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2kdii",
        "level": 20,
        "name": {
          "fr": "The Dragon Becomes Me",
          "en": "The Dragon Becomes Me"
        },
        "icon": "assets/heroes/base_spells/genji/images/talents/storm_ui_icon_genji_dragonblade.png",
        "description": {
          "fr": "Each time Dragonblade hits an enemy Hero, the duration of Dragonblade is increased by 0.5 seconds. If a Hero is killed within 1.5 seconds of being hit by Dragonblade, Swift Strike's cooldown is reset.",
          "en": "Each time Dragonblade hits an enemy Hero, the duration of Dragonblade is increased by 0.5 seconds. If a Hero is killed within 1.5 seconds of being hit by Dragonblade, Swift Strike's cooldown is reset."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "greymane",
    "enabled": false,
    "name": {
      "fr": "Grisetête",
      "en": "Greymane"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_greymane.png",
    "headline": {
      "fr": "Assassin à double forme : distance pour harceler, worgen pour tuer.",
      "en": "Dual-form assassin: ranged to poke, worgen to kill."
    },
    "gameplay": {
      "fr": "Grisetête harcèle à distance, puis se transforme en worgen pour plonger et achever sa cible avec des attaques rapides.",
      "en": "Greymane pokes at range, then shifts into worgen form to dive and finish his target with fast attacks."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Malédiction du worgen",
          "en": "Curse of the Worgen"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_curseoftheworgen.png",
        "description": {
          "fr": "Change de forme entre humain à distance et worgen en mêlée.",
          "en": "Swaps between ranged human and melee worgen form."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Cocktail gilnéen",
          "en": "Gilnean Cocktail"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_qattack.png",
        "description": {
          "fr": "Lance un cocktail enflammé en zone.",
          "en": "Throws a flaming cocktail in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Bête intérieure",
          "en": "Inner Beast"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_beastfocus.png",
        "description": {
          "fr": "Augmente fortement ta vitesse d'attaque.",
          "en": "Greatly increases your Attack Speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Vol des ténèbres",
          "en": "Darkflight"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_darkflight.png",
        "description": {
          "fr": "Bondit sur les ennemis en forme worgen.",
          "en": "Leaps at enemies in worgen form."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "À la gorge !",
          "en": "Go for the Throat"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_goforthethroat.png",
        "description": {
          "fr": "Bondit sur un héros et le maintient au sol.",
          "en": "Leaps onto a Hero and keeps them pinned."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Balle maudite",
          "en": "Cursed Bullet"
        },
        "icon": "assets/heroes/base_spells/greymane/images/spells/storm_ui_icon_greymane_snapshot.png",
        "description": {
          "fr": "Inflige un pourcentage de la vie actuelle de la cible.",
          "en": "Deals a percentage of the target's current Health."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne reste pas en forme worgen si tu ne peux pas tuer : repasse à distance.",
        "en": "Don't stay in worgen form if you can't secure the kill: shift back."
      },
      {
        "fr": "Balle maudite inflige des dégâts en pourcentage : utilise-la sur les tanks.",
        "en": "Cursed Bullet deals %-Health damage: use it on tanks."
      },
      {
        "fr": "Vol des ténèbres sert d'engagement, Désengagement de fuite.",
        "en": "Darkflight engages, Disengage escapes."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Greymane]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jovnpoj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joy83fe",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo5kks6",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jon2rzn",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joctxsj",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jodo57x",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joz6acg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jovnpoj",
        "level": 1,
        "name": {
          "fr": "Wolfheart",
          "en": "Wolfheart"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_beastfocus.png",
        "description": {
          "fr": "Increase the cooldown reduction from Basic Attacks during Inner Beast from 0.5 to 1.2 seconds.",
          "en": "Increase the cooldown reduction from Basic Attacks during Inner Beast from 0.5 to 1.2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joy83fe",
        "level": 4,
        "name": {
          "fr": "Thick Skin",
          "en": "Thick Skin"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_darkflight.png",
        "description": {
          "fr": "Using Darkflight grants 50 Physical Armor against the next 2 Hero Basic Attacks while in Worgen Form, reducing the damage taken by 50%.",
          "en": "Using Darkflight grants 50 Physical Armor against the next 2 Hero Basic Attacks while in Worgen Form, reducing the damage taken by 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5kks6",
        "level": 7,
        "name": {
          "fr": "Quicksilver Bullets",
          "en": "Quicksilver Bullets"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_curseoftheworgen.png",
        "description": {
          "fr": "Increases Greymane's Human Basic Attack range by 1.1.",
          "en": "Increases Greymane's Human Basic Attack range by 1.1."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jon2rzn",
        "level": 10,
        "name": {
          "fr": "Go for the Throat",
          "en": "Go for the Throat"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_goforthethroat.png",
        "description": {
          "fr": "Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 (+4% per level) damage. If this kills them, the Ability can be used a second time within 10 seconds for free.",
          "en": "Leap at an enemy Hero and shapeshift into a Worgen, slashing for 355 (+4% per level) damage. If this kills them, the Ability can be used a second time within 10 seconds for free."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joctxsj",
        "level": 13,
        "name": {
          "fr": "Running Wild",
          "en": "Running Wild"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_darkflight.png",
        "description": {
          "fr": "Increases Darkflight and Disengage's range by 35%, and reduce their cooldowns by 1 second.",
          "en": "Increases Darkflight and Disengage's range by 35%, and reduce their cooldowns by 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodo57x",
        "level": 16,
        "name": {
          "fr": "Eager Wolf",
          "en": "Eager Wolf"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_beastfocus.png",
        "description": {
          "fr": "Increases the Attack Speed bonus of Inner Beast by an additional 40% after it has been active for 4 seconds.",
          "en": "Increases the Attack Speed bonus of Inner Beast by an additional 40% after it has been active for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joz6acg",
        "level": 20,
        "name": {
          "fr": "Unleashed",
          "en": "Unleashed"
        },
        "icon": "assets/heroes/base_spells/greymane/images/talents/storm_ui_icon_greymane_goforthethroat.png",
        "description": {
          "fr": "Passive: Go For The Throat's damage is increased by 25%.  If Go for the Throat kills its target, refund its Mana cost and reset the cooldowns of Greymane's Abilities.",
          "en": "Passive: Go For The Throat's damage is increased by 25%.  If Go for the Throat kills its target, refund its Mana cost and reset the cooldowns of Greymane's Abilities."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "guldan",
    "enabled": false,
    "name": {
      "fr": "Gul'dan",
      "en": "Gul'dan"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_guldan.png",
    "headline": {
      "fr": "Mage de dégâts continus qui échange sa vie contre de la puissance.",
      "en": "Damage-over-time mage who trades Health for power."
    },
    "gameplay": {
      "fr": "Gul'dan n'utilise pas de mana mais sa propre vie. Il inflige des dégâts massifs en zone et se soigne avec Drain de vie.",
      "en": "Gul'dan doesn't use mana, he spends Health. He deals massive area damage and heals with Drain Life."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Connexion de vie",
          "en": "Life Tap"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_lifetap.png",
        "description": {
          "fr": "Convertit ta vie en mana.",
          "en": "Converts Health into Mana."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Flamme gangrenée",
          "en": "Fel Flame"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_felflame.png",
        "description": {
          "fr": "Trois vagues de flammes en ligne.",
          "en": "Three waves of fel flame in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Drain de vie",
          "en": "Drain Life"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_healthfunnel.png",
        "description": {
          "fr": "Draine la vie d'un ennemi pour te soigner.",
          "en": "Drains an enemy's Health to heal you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Corruption",
          "en": "Corruption"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_handofguldan.png",
        "description": {
          "fr": "Zones de dégâts continus qui se propagent.",
          "en": "Zones of damage over time that spread."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Effroi",
          "en": "Horrify"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_horrify.png",
        "description": {
          "fr": "Terrorise les ennemis proches et les fait fuir.",
          "en": "Fears nearby enemies, making them flee."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Pluie de destruction",
          "en": "Rain of Destruction"
        },
        "icon": "assets/heroes/base_spells/guldan/images/spells/storm_ui_icon_guldan_rainoffire.png",
        "description": {
          "fr": "Fait pleuvoir des météores sur une grande zone.",
          "en": "Rains meteors over a large area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Surveille ta vie : c'est ta ressource, pas ton mana.",
        "en": "Watch your Health: it's your resource, not mana."
      },
      {
        "fr": "Corruption fait d'énormes dégâts sur les vagues de sbires.",
        "en": "Corruption clears minion waves extremely well."
      },
      {
        "fr": "Effroi te débarrasse des plongeurs et sauve tes alliés.",
        "en": "Horrify removes divers and saves your allies."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Guldan]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joyzkc7",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jon3z1n",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo1xine",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joqge2w",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joid1s7",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jod45dn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo3jrm0",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joyzkc7",
        "level": 1,
        "name": {
          "fr": "Pursuit of Flame",
          "en": "Pursuit of Flame"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_felflame.png",
        "description": {
          "fr": "Quest: Hit 30 enemy Heroes with Fel Flame.  Reward: Fel Flame's radius is increased by 10%.",
          "en": "Quest: Hit 30 enemy Heroes with Fel Flame.  Reward: Fel Flame's radius is increased by 10%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jon3z1n",
        "level": 4,
        "name": {
          "fr": "Health Funnel",
          "en": "Health Funnel"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_healthfunnel.png",
        "description": {
          "fr": "Drain Life's cooldown recharges 100% faster while it is channeling. If an enemy dies while under the effect of Drain Life, the cooldown is instantly refreshed.",
          "en": "Drain Life's cooldown recharges 100% faster while it is channeling. If an enemy dies while under the effect of Drain Life, the cooldown is instantly refreshed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1xine",
        "level": 7,
        "name": {
          "fr": "Bound by Shadow",
          "en": "Bound by Shadow"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_felflame.png",
        "description": {
          "fr": "Each enemy Hero hit with Fel Flame reduces the cooldown of Corruption by 1.75 seconds.",
          "en": "Each enemy Hero hit with Fel Flame reduces the cooldown of Corruption by 1.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqge2w",
        "level": 10,
        "name": {
          "fr": "Horrify",
          "en": "Horrify"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_horrify.png",
        "description": {
          "fr": "After 0.5 seconds, deal 120 (+4% per level) damage to enemy Heroes in an area and Fear them for 2 seconds. While Feared, Heroes are Silenced and are forced to run away from Horrify's center.",
          "en": "After 0.5 seconds, deal 120 (+4% per level) damage to enemy Heroes in an area and Fear them for 2 seconds. While Feared, Heroes are Silenced and are forced to run away from Horrify's center."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joid1s7",
        "level": 13,
        "name": {
          "fr": "Fel Armor",
          "en": "Fel Armor"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_felflame.png",
        "description": {
          "fr": "Hitting an enemy Hero with Fel Flame grants 50 Spell Armor for 2.5 seconds, reducing Ability Damage taken by 50%.",
          "en": "Hitting an enemy Hero with Fel Flame grants 50 Spell Armor for 2.5 seconds, reducing Ability Damage taken by 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod45dn",
        "level": 16,
        "name": {
          "fr": "Rampant Hellfire",
          "en": "Rampant Hellfire"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_felflame.png",
        "description": {
          "fr": "Fel Flame's damage is increased by 12% for 5 seconds when hitting an enemy Hero. This can stack up to 5 times.",
          "en": "Fel Flame's damage is increased by 12% for 5 seconds when hitting an enemy Hero. This can stack up to 5 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3jrm0",
        "level": 20,
        "name": {
          "fr": "Haunt",
          "en": "Haunt"
        },
        "icon": "assets/heroes/base_spells/guldan/images/talents/storm_ui_icon_guldan_horrify.png",
        "description": {
          "fr": "Increases the duration of Horrify by 1 second, and while Feared, enemies lose 20 Armor, causing them to take 20% increased damage.",
          "en": "Increases the duration of Horrify by 1 second, and while Feared, enemies lose 20 Armor, causing them to take 20% increased damage."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "hanzo",
    "enabled": false,
    "name": {
      "fr": "Hanzo",
      "en": "Hanzo"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_hanzo.png",
    "headline": {
      "fr": "Assassin de poke qui frappe fort de très loin.",
      "en": "Poke assassin who hits hard from very far away."
    },
    "gameplay": {
      "fr": "Hanzo charge son arc pour des tirs puissants, donne de la vision avec sa Flèche sonique et peut sauter par-dessus les murs.",
      "en": "Hanzo charges his bow for powerful shots, gives vision with Sonic Arrow, and can vault over walls."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Agilité naturelle",
          "en": "Natural Agility"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_wallvault.png",
        "description": {
          "fr": "Franchit les murs par-dessus.",
          "en": "Vaults over walls."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Arc de la tempête",
          "en": "Storm Bow"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_stormbow.png",
        "description": {
          "fr": "Tir chargé dont les dégâts augmentent.",
          "en": "Charged shot whose damage ramps up."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Flèche dispersée",
          "en": "Scatter Arrow"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_scatterarrow.png",
        "description": {
          "fr": "Flèche qui rebondit sur le décor.",
          "en": "Arrow that ricochets off terrain."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Flèche sonique",
          "en": "Sonic Arrow"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_sonicarrow.png",
        "description": {
          "fr": "Donne une vision durable d'une zone.",
          "en": "Grants lasting vision of an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Frappe du dragon",
          "en": "Dragonstrike"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_dragonstrike.png",
        "description": {
          "fr": "Deux dragons traversent la carte en infligeant des dégâts.",
          "en": "Two dragons cross the map dealing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Flèche du dragon",
          "en": "Dragon's Arrow"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/spells/storm_ui_icon_hanzo_thedragonsarrow.png",
        "description": {
          "fr": "Flèche globale qui étourdit et inflige de gros dégâts.",
          "en": "Global arrow that stuns and deals heavy damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Flèche sonique donne une vision permanente : place-la sur les objectifs.",
        "en": "Sonic Arrow gives lasting vision: place it on objectives."
      },
      {
        "fr": "Flèche dispersée rebondit sur les murs : sers-t'en dans les couloirs.",
        "en": "Scatter Arrow bounces off walls: use it in corridors."
      },
      {
        "fr": "Ton trait te permet de franchir les murs : garde toujours une échappatoire.",
        "en": "Your trait lets you vault walls: always keep an escape route."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Hanzo]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joip7yb",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo6h8tl",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jos86sm",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6johcpay",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jotu0j3",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joseddm",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jora6ub",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joip7yb",
        "level": 1,
        "name": {
          "fr": "Target Practice",
          "en": "Target Practice"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_stormbow.png",
        "description": {
          "fr": "Quest: Hit every enemy Hero with Storm Bow.  Reward: After hitting every enemy Hero once with Storm Bow, its range is increased by 30%.  Reward: After hitting every enemy Hero 3 times with Storm Bow, its damage is increased by 100.",
          "en": "Quest: Hit every enemy Hero with Storm Bow.  Reward: After hitting every enemy Hero once with Storm Bow, its range is increased by 30%.  Reward: After hitting every enemy Hero 3 times with Storm Bow, its damage is increased by 100."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6h8tl",
        "level": 4,
        "name": {
          "fr": "Explosive Arrows",
          "en": "Explosive Arrows"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_stormbow.png",
        "description": {
          "fr": "Upon hitting a Minion or Monster, Storm Bow deals 60% of its damage to enemies around its target.",
          "en": "Upon hitting a Minion or Monster, Storm Bow deals 60% of its damage to enemies around its target."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jos86sm",
        "level": 7,
        "name": {
          "fr": "The Dragon Hungers",
          "en": "The Dragon Hungers"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_draconicadvantage.png",
        "description": {
          "fr": "Hitting a Hero with Storm Bow grants 5% Spell Power for 12 seconds, stacking up to 20%.",
          "en": "Hitting a Hero with Storm Bow grants 5% Spell Power for 12 seconds, stacking up to 20%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johcpay",
        "level": 10,
        "name": {
          "fr": "Dragonstrike",
          "en": "Dragonstrike"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_dragonstrike.png",
        "description": {
          "fr": "After 1.5 seconds, summon a pair of Spirit Dragons which travel forward, dealing 84 (+4% per level) damage every 0.25 seconds to enemy Heroes in its area.  Enemies in the center take 75% increased damage.",
          "en": "After 1.5 seconds, summon a pair of Spirit Dragons which travel forward, dealing 84 (+4% per level) damage every 0.25 seconds to enemy Heroes in its area.  Enemies in the center take 75% increased damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotu0j3",
        "level": 13,
        "name": {
          "fr": "Fleet of Foot",
          "en": "Fleet of Foot"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_stormbow.png",
        "description": {
          "fr": "Hitting a Hero with Storm Bow grants 10% Movement Speed for 6 seconds, up to 30%.",
          "en": "Hitting a Hero with Storm Bow grants 10% Movement Speed for 6 seconds, up to 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joseddm",
        "level": 16,
        "name": {
          "fr": "Flawless Technique",
          "en": "Flawless Technique"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_fromonething.png",
        "description": {
          "fr": "Hitting Heroes with Storm Bow increases the damage of Hanzo's next Basic Attack within 5 seconds by 40%. Basic Attacks against Heroes increase the damage of Hanzo's next Storm Bow within 5 seconds by 40%.",
          "en": "Hitting Heroes with Storm Bow increases the damage of Hanzo's next Basic Attack within 5 seconds by 40%. Basic Attacks against Heroes increase the damage of Hanzo's next Storm Bow within 5 seconds by 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jora6ub",
        "level": 20,
        "name": {
          "fr": "The Dragon Awakens",
          "en": "The Dragon Awakens"
        },
        "icon": "assets/heroes/base_spells/hanzo/images/talents/storm_ui_icon_hanzo_dragonstrike.png",
        "description": {
          "fr": "Hitting a Hero with Storm Bow, Scatter Arrow, or Basic Attacks reduces the cooldown of Dragonstrike by 4 seconds.",
          "en": "Hitting a Hero with Storm Bow, Scatter Arrow, or Basic Attacks reduces the cooldown of Dragonstrike by 4 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "hogger",
    "enabled": false,
    "name": {
      "fr": "Lardeur",
      "en": "Hogger"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_hogger.png",
    "headline": {
      "fr": "Bruiser de mêlée qui projette les ennemis contre les murs.",
      "en": "Melee bruiser who slams enemies into walls."
    },
    "gameplay": {
      "fr": "Hogger génère de la Rage avec ses attaques, gagne de la vie grâce à son butin et enchaîne les ennemis contre le décor pour les étourdir.",
      "en": "Hogger builds Rage with his attacks, gains Health from his loot hoard, and slams enemies into terrain to stun them."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Magot",
          "en": "Loot Hoard"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_trait.png",
        "description": {
          "fr": "Lâche un butin qui te soigne et te donne un bouclier.",
          "en": "Drops loot that heals you and grants a shield."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Coup renversant",
          "en": "Staggering Blow"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_q.png",
        "description": {
          "fr": "Repousse les ennemis ; les étourdit contre un mur.",
          "en": "Knocks enemies back; stuns them against walls."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Dynamite bricolée",
          "en": "Ez-Thro Dynamite"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_w.png",
        "description": {
          "fr": "Lance de la dynamite qui explose en zone.",
          "en": "Throws dynamite that explodes in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Ruée sauvage",
          "en": "Hogg Wild"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_e.png",
        "description": {
          "fr": "Tournoie sur place puis fonce en infligeant des dégâts.",
          "en": "Spins in place, then charges forward dealing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Catapulte à magot",
          "en": "Hoardapult"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_r1.png",
        "description": {
          "fr": "Projette du butin sur une longue distance.",
          "en": "Launches loot over a long distance."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Onde de choc",
          "en": "Shockwave"
        },
        "icon": "assets/heroes/base_spells/hogger/images/spells/storm_ui_icon_hogger_r2.png",
        "description": {
          "fr": "Onde en ligne qui repousse et blesse les ennemis.",
          "en": "Shockwave in a line that knocks back and damages."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Frappe les ennemis contre un mur avec ton Coup renversant pour les étourdir.",
        "en": "Knock enemies into walls with Staggering Blow to stun them."
      },
      {
        "fr": "Ramasse ton butin après un combat pour te soigner.",
        "en": "Pick up your loot after a fight to heal."
      },
      {
        "fr": "Ruée sauvage sert autant à fuir qu'à poursuivre.",
        "en": "Hogg Wild is as good for escaping as for chasing."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Hogger]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jozow6r",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo43a7b",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jozwr08",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo6i6du",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo41mu9",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joqz93u",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joy3fs0",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jozow6r",
        "level": 1,
        "name": {
          "fr": "Journeyman Cooking",
          "en": "Journeyman Cooking"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_w.png",
        "description": {
          "fr": "Each Hero hit by Ez-Thro Dynamite heals you for 8% of maximum Health.  Quest: Hitting Heroes with Ez-Thro Dynamite permanently increases your maximum Health by 10, to a maximum of 750 bonus Health.",
          "en": "Each Hero hit by Ez-Thro Dynamite heals you for 8% of maximum Health.  Quest: Hitting Heroes with Ez-Thro Dynamite permanently increases your maximum Health by 10, to a maximum of 750 bonus Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo43a7b",
        "level": 4,
        "name": {
          "fr": "Brute Force",
          "en": "Brute Force"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_combo_q_d.png",
        "description": {
          "fr": "Increase the range of Loot Hoard by 20% and its damage by 50%.  Quest: Hitting Heroes with Staggering Blow permanently increases Basic Attack damage by 2, to a maximum of 150 bonus damage. Enemy Heroes that hit terrain grant an additional 8 damage.",
          "en": "Increase the range of Loot Hoard by 20% and its damage by 50%.  Quest: Hitting Heroes with Staggering Blow permanently increases Basic Attack damage by 2, to a maximum of 150 bonus damage. Enemy Heroes that hit terrain grant an additional 8 damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozwr08",
        "level": 7,
        "name": {
          "fr": "Dense Blasting Powder",
          "en": "Dense Blasting Powder"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_w.png",
        "description": {
          "fr": "Instant detonations of Ez-Thro Dynamite creates an additional dynamite behind the Hero hit.  Hitting the bundle of Ez-Thro Dynamite with Staggering Blow breaks it into three sticks and launches them forward in an arc.",
          "en": "Instant detonations of Ez-Thro Dynamite creates an additional dynamite behind the Hero hit.  Hitting the bundle of Ez-Thro Dynamite with Staggering Blow breaks it into three sticks and launches them forward in an arc."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6i6du",
        "level": 10,
        "name": {
          "fr": "Hoardapult",
          "en": "Hoardapult"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_r1.png",
        "description": {
          "fr": "Launch an empowered Loot Hoard with Hogger attached, dealing 100 (+4% per level) damage and Slowing enemies by 50% for 2 seconds.  Hoardapult's Loot Hoard lasts for up to 20 seconds, decaying rapidly while not nearby. Every 10 seconds Hogger can take a chunk of Meat from the Loot Hoard.",
          "en": "Launch an empowered Loot Hoard with Hogger attached, dealing 100 (+4% per level) damage and Slowing enemies by 50% for 2 seconds.  Hoardapult's Loot Hoard lasts for up to 20 seconds, decaying rapidly while not nearby. Every 10 seconds Hogger can take a chunk of Meat from the Loot Hoard."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo41mu9",
        "level": 13,
        "name": {
          "fr": "Dust Devil",
          "en": "Dust Devil"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_e.png",
        "description": {
          "fr": "Gain 20 Armor while Hogg Wild is active and for 3 seconds after. When at or above 50 Rage, increase this Armor to 40.",
          "en": "Gain 20 Armor while Hogg Wild is active and for 3 seconds after. When at or above 50 Rage, increase this Armor to 40."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqz93u",
        "level": 16,
        "name": {
          "fr": "Headbanger",
          "en": "Headbanger"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_q.png",
        "description": {
          "fr": "Enemy Heroes Stunned by Staggering Blow take an additional 8% of their maximum Health as damage and are Stunned for an additional 0.5 seconds.",
          "en": "Enemy Heroes Stunned by Staggering Blow take an additional 8% of their maximum Health as damage and are Stunned for an additional 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joy3fs0",
        "level": 20,
        "name": {
          "fr": "Secret Stash",
          "en": "Secret Stash"
        },
        "icon": "assets/heroes/base_spells/hogger/images/talents/storm_ui_icon_hogger_r1.png",
        "description": {
          "fr": "Every 2 seconds, Hoardapults' Loot Hoard randomly launches Ez-Thro Dynamite, prioritizing nearby enemy Heroes.  Every 5 seconds, it also launches a chunk of Meat towards Hogger.",
          "en": "Every 2 seconds, Hoardapults' Loot Hoard randomly launches Ez-Thro Dynamite, prioritizing nearby enemy Heroes.  Every 5 seconds, it also launches a chunk of Meat towards Hogger."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "illidan",
    "enabled": false,
    "name": {
      "fr": "Illidan",
      "en": "Illidan"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_illidan.png",
    "headline": {
      "fr": "Assassin de mêlée ultra mobile qui esquive les attaques.",
      "en": "Ultra-mobile melee assassin who dodges Basic Attacks."
    },
    "gameplay": {
      "fr": "Illidan enchaîne les plongeons et se soigne à chaque coup. Il excelle contre les héros immobiles mais souffre face aux contrôles.",
      "en": "Illidan chains dives and heals with every hit. He excels against immobile Heroes but suffers against crowd control."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Soif du traître",
          "en": "Betrayer's Thirst"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_betrayersthirst.png",
        "description": {
          "fr": "Tes attaques te soignent et réduisent tes temps de recharge.",
          "en": "Your attacks heal you and reduce your cooldowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Plongeon",
          "en": "Dive"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_dive.png",
        "description": {
          "fr": "Bondit sur une cible et la frappe.",
          "en": "Leaps to a target and strikes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Balayage",
          "en": "Sweeping Strike"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_sweepingstrike.png",
        "description": {
          "fr": "Traverse les ennemis en infligeant des dégâts.",
          "en": "Dashes through enemies, dealing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Esquive",
          "en": "Evasion"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_evasion.png",
        "description": {
          "fr": "Esquive toutes les attaques de base pendant un court instant.",
          "en": "Dodges all Basic Attacks for a short time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "La Chasse",
          "en": "The Hunt"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_thehunt.png",
        "description": {
          "fr": "Fonce sur un ennemi à travers toute la carte et l'étourdit.",
          "en": "Charges an enemy across the map and stuns them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Métamorphose",
          "en": "Metamorphosis"
        },
        "icon": "assets/heroes/base_spells/illidan/images/spells/storm_ui_icon_illidan_metamorphosis.png",
        "description": {
          "fr": "Se transforme en démon : plus de vie et plus de dégâts.",
          "en": "Transform into a demon: more Health and damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne plonge jamais en premier : attends que le tank ait engagé.",
        "en": "Never dive first: wait until your tank has engaged."
      },
      {
        "fr": "Esquive te rend immunisé aux attaques de base : garde-la pour l'ennemi qui te vise.",
        "en": "Evasion makes you immune to Basic Attacks: save it for whoever focuses you."
      },
      {
        "fr": "Balayage sert autant à poursuivre qu'à traverser un groupe.",
        "en": "Sweeping Strike is as good for chasing as for slipping through a group."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Illidan]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jook6dq",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo6ob4u",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo8cqj4",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6johrowu",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jos5jyn",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo9dwm1",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jomyb88",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jook6dq",
        "level": 1,
        "name": {
          "fr": "Immolation",
          "en": "Immolation"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
        "description": {
          "fr": "After using Sweeping Strike, burn nearby enemies for 22 (+4% per level) damage a second for 4 seconds.",
          "en": "After using Sweeping Strike, burn nearby enemies for 22 (+4% per level) damage a second for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6ob4u",
        "level": 4,
        "name": {
          "fr": "Reflexive Block",
          "en": "Reflexive Block"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_dive.png",
        "description": {
          "fr": "Using Dive grants 75 Physical Armor against the next 3 Hero Basic Attacks for 4 seconds, reducing the damage taken by 75%.",
          "en": "Using Dive grants 75 Physical Armor against the next 3 Hero Basic Attacks for 4 seconds, reducing the damage taken by 75%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8cqj4",
        "level": 7,
        "name": {
          "fr": "Rapid Chase",
          "en": "Rapid Chase"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_dive.png",
        "description": {
          "fr": "Dive grants 20% Movement Speed for 3 seconds. If the target is an enemy Hero, reduce its cooldown by 1 second.",
          "en": "Dive grants 20% Movement Speed for 3 seconds. If the target is an enemy Hero, reduce its cooldown by 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johrowu",
        "level": 10,
        "name": {
          "fr": "Metamorphosis",
          "en": "Metamorphosis"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_metamorphosis.png",
        "description": {
          "fr": "Transform into Demon Form at the target location, dealing 46 (+4% per level) damage in the area. Temporarily increases maximum Health by 220 (+4% per level) for each Hero hit by the initial impact. Lasts for 18 seconds.",
          "en": "Transform into Demon Form at the target location, dealing 46 (+4% per level) damage in the area. Temporarily increases maximum Health by 220 (+4% per level) for each Hero hit by the initial impact. Lasts for 18 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jos5jyn",
        "level": 13,
        "name": {
          "fr": "Nimble Defender",
          "en": "Nimble Defender"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_sweepingstrike.png",
        "description": {
          "fr": "If Sweeping Strike hits an enemy Hero, gain 25 Armor for 2 seconds, reducing damage taken by 25%.",
          "en": "If Sweeping Strike hits an enemy Hero, gain 25 Armor for 2 seconds, reducing damage taken by 25%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9dwm1",
        "level": 16,
        "name": {
          "fr": "Marked for Death",
          "en": "Marked for Death"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_dive.png",
        "description": {
          "fr": "Dive deals an extra 180 (+4% per level) damage if used consecutively on a target within 10 seconds.",
          "en": "Dive deals an extra 180 (+4% per level) damage if used consecutively on a target within 10 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomyb88",
        "level": 20,
        "name": {
          "fr": "Demonic Form",
          "en": "Demonic Form"
        },
        "icon": "assets/heroes/base_spells/illidan/images/talents/storm_ui_icon_illidan_metamorphosis.png",
        "description": {
          "fr": "Permanently remain in Demonic Form. Metamorphosis also increases Attack Speed by 20% and reduces the duration of Stuns, Roots, and Slows by 50%. Illidan can now mount in Demonic Form.",
          "en": "Permanently remain in Demonic Form. Metamorphosis also increases Attack Speed by 20% and reduces the duration of Stuns, Roots, and Slows by 50%. Illidan can now mount in Demonic Form."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "imperius",
    "enabled": false,
    "name": {
      "fr": "Imperius",
      "en": "Imperius"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_imperius.png",
    "headline": {
      "fr": "Bruiser angélique qui plonge et se soigne au contact.",
      "en": "Angelic bruiser who dives in and heals through contact."
    },
    "gameplay": {
      "fr": "Imperius applique sa marque sur les ennemis puis la fait exploser pour se soigner. Il est extrêmement dangereux quand il combat plusieurs cibles.",
      "en": "Imperius brands enemies, then detonates the brand to heal himself. He is extremely dangerous when fighting multiple targets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Marque valeureuse",
          "en": "Valorous Brand"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_trait.png",
        "description": {
          "fr": "Marque les ennemis ; la marque explose et te soigne.",
          "en": "Brands enemies; the brand detonates and heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Charge céleste",
          "en": "Celestial Charge"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_q.png",
        "description": {
          "fr": "Fonce en avant et repousse les ennemis touchés.",
          "en": "Charges forward, knocking enemies back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Feu de Solarion",
          "en": "Solarion's Fire"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_w.png",
        "description": {
          "fr": "Vague de flammes en cône.",
          "en": "Wave of flame in a cone."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Armure de feu",
          "en": "Molten Armor"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_e.png",
        "description": {
          "fr": "Aura de dégâts autour de toi qui applique ta marque.",
          "en": "Damaging aura around you that applies your brand."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Armement angélique",
          "en": "Angelic Armaments"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_r1.png",
        "description": {
          "fr": "Bouclier et lames tournoyantes que tu peux projeter.",
          "en": "Shield and spinning blades you can launch outward."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Courroux des Angiris",
          "en": "Wrath of the Angiris"
        },
        "icon": "assets/heroes/base_spells/imperius/images/spells/storm_ui_icon_imperius_r2.png",
        "description": {
          "fr": "S'envole et frappe un héros, étourdissant les ennemis proches.",
          "en": "Flies up and slams a Hero, stunning nearby enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Applique ta marque sur un maximum de cibles avant de la déclencher.",
        "en": "Apply your brand to as many targets as possible before triggering it."
      },
      {
        "fr": "Armement angélique te donne un bouclier : engage avec.",
        "en": "Angelic Armaments gives you a shield: engage with it."
      },
      {
        "fr": "Courroux des Angiris est un excellent outil pour isoler un soigneur.",
        "en": "Wrath of the Angiris is a great tool to isolate a healer."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Imperius]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jorjzdo",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jopt9ou",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jow176u",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jou4upd",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo97mla",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo5b9iq",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jossi2v",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jorjzdo",
        "level": 1,
        "name": {
          "fr": "Impaling Light",
          "en": "Impaling Light"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_q.png",
        "description": {
          "fr": "Celestial Charge's final damage is increased by 75% and its cooldown is reduced by 1.25 seconds for each Valorous Brand on the target when the Stun completes.",
          "en": "Celestial Charge's final damage is increased by 75% and its cooldown is reduced by 1.25 seconds for each Valorous Brand on the target when the Stun completes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jopt9ou",
        "level": 4,
        "name": {
          "fr": "Sovereign Armor",
          "en": "Sovereign Armor"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_e.png",
        "description": {
          "fr": "Molten Armor grants 20 Armor for 1.5 seconds. Damaging an enemy Hero with Molten Armor increases the duration of the Armor by 0.5 seconds.",
          "en": "Molten Armor grants 20 Armor for 1.5 seconds. Damaging an enemy Hero with Molten Armor increases the duration of the Armor by 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jow176u",
        "level": 7,
        "name": {
          "fr": "Flash of Anger",
          "en": "Flash of Anger"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_q.png",
        "description": {
          "fr": "Consuming a mark from Celestial Charge deals 150 (+4% per level) damage to the target and nearby enemies and grants Imperius a 250 (+4% per level) point Shield for 4 seconds.",
          "en": "Consuming a mark from Celestial Charge deals 150 (+4% per level) damage to the target and nearby enemies and grants Imperius a 250 (+4% per level) point Shield for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jou4upd",
        "level": 10,
        "name": {
          "fr": "Angelic Armaments",
          "en": "Angelic Armaments"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_r1.png",
        "description": {
          "fr": "Summon a ring of blazing swords that grants 850 (+4% per level) Shield for 3 seconds.  If the Shield lasts the full duration, this ability can be reactivated within 5 seconds to launch 6 swords toward an area, each dealing 140 (+4% per level) damage to the first enemy hit.",
          "en": "Summon a ring of blazing swords that grants 850 (+4% per level) Shield for 3 seconds.  If the Shield lasts the full duration, this ability can be reactivated within 5 seconds to launch 6 swords toward an area, each dealing 140 (+4% per level) damage to the first enemy hit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo97mla",
        "level": 13,
        "name": {
          "fr": "Pathetic Mortals",
          "en": "Pathetic Mortals"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_q.png",
        "description": {
          "fr": "Stunning enemy Heroes with Celestial Charge reduces their Movement Speed by 25% and their damage by 50% for 4 seconds.",
          "en": "Stunning enemy Heroes with Celestial Charge reduces their Movement Speed by 25% and their damage by 50% for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5b9iq",
        "level": 16,
        "name": {
          "fr": "Celestial Swiftness",
          "en": "Celestial Swiftness"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_q.png",
        "description": {
          "fr": "Gain 20% Movement Speed for 5 seconds after casting Celestial Charge. Gain 40% Attack Speed for 5 seconds for each Hero stunned with Celestial Charge.",
          "en": "Gain 20% Movement Speed for 5 seconds after casting Celestial Charge. Gain 40% Attack Speed for 5 seconds for each Hero stunned with Celestial Charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jossi2v",
        "level": 20,
        "name": {
          "fr": "Heavenly Host",
          "en": "Heavenly Host"
        },
        "icon": "assets/heroes/base_spells/imperius/images/talents/storm_ui_icon_imperius_r1.png",
        "description": {
          "fr": "Nearby allied Heroes gain 600 (+4% per level) Shield for 3 seconds.  If the Shield lasts the full duration, fire a sword at the nearest enemy Hero, dealing 140 (+4% per level) damage.",
          "en": "Nearby allied Heroes gain 600 (+4% per level) Shield for 3 seconds.  If the Shield lasts the full duration, fire a sword at the nearest enemy Hero, dealing 140 (+4% per level) damage."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "jaina",
    "enabled": false,
    "name": {
      "fr": "Jaina",
      "en": "Jaina"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_jaina.png",
    "headline": {
      "fr": "Mage de burst qui gèle et supprime les cibles fragiles.",
      "en": "Burst mage who freezes and deletes squishy targets."
    },
    "gameplay": {
      "fr": "Jaina ralentit tout ce qu'elle touche avec Morsure du froid, ce qui augmente ses propres dégâts et rend les fuites impossibles.",
      "en": "Jaina slows everything she hits with Frostbite, which boosts her own damage and makes escaping impossible."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Morsure du froid",
          "en": "Frostbite"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_frostbite.png",
        "description": {
          "fr": "Tes sorts ralentissent et augmentent tes dégâts sur les cibles gelées.",
          "en": "Your abilities slow and increase your damage against chilled targets."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Trait de givre",
          "en": "Frostbolt"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_frostbolt.png",
        "description": {
          "fr": "Projectile qui blesse et ralentit.",
          "en": "Projectile that damages and slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Blizzard",
          "en": "Blizzard"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_blizzard.png",
        "description": {
          "fr": "Zone de dégâts répétés.",
          "en": "Area of repeated damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Cône de froid",
          "en": "Cone of Cold"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_coneofcold.png",
        "description": {
          "fr": "Explosion de zone devant toi.",
          "en": "Burst of damage in an area in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Élémentaire d'eau",
          "en": "Summon Water Elemental"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_summonwaterelemental.png",
        "description": {
          "fr": "Invoque un élémentaire qui blesse et ralentit.",
          "en": "Summons an elemental that damages and slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Anneau de givre",
          "en": "Ring of Frost"
        },
        "icon": "assets/heroes/base_spells/jaina/images/spells/storm_ui_icon_jaina_ringoffrost.png",
        "description": {
          "fr": "Gèle tous les ennemis pris dans l'anneau.",
          "en": "Freezes all enemies caught in the ring."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Applique toujours ton ralentissement avant ton burst.",
        "en": "Always apply your slow before your burst."
      },
      {
        "fr": "Blizzard sur une vague de sbires accélère énormément ta ligne.",
        "en": "Blizzard on a minion wave clears your lane very fast."
      },
      {
        "fr": "Anneau de givre est un contrôle de zone gigantesque : anticipe-le.",
        "en": "Ring of Frost is huge area control: telegraph it well."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Jaina]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo4okkp",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jouynv0",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joi8q47",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6josygjr",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo7bsis",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jopdypt",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joo977e",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo4okkp",
        "level": 1,
        "name": {
          "fr": "Winter's Reach",
          "en": "Winter's Reach"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_frostbolt.png",
        "description": {
          "fr": "Increase the range and travel speed of Frostbolt by 30%.",
          "en": "Increase the range and travel speed of Frostbolt by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jouynv0",
        "level": 4,
        "name": {
          "fr": "Frost Shards",
          "en": "Frost Shards"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_frostbolt.png",
        "description": {
          "fr": "Frostbolt will now pierce the first two targets.",
          "en": "Frostbolt will now pierce the first two targets."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joi8q47",
        "level": 7,
        "name": {
          "fr": "Ice Lance",
          "en": "Ice Lance"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_frostbolt.png",
        "description": {
          "fr": "Hitting a Chilled target with Frostbolt reduces its cooldown by 1.5 seconds and restores 10 Mana.",
          "en": "Hitting a Chilled target with Frostbolt reduces its cooldown by 1.5 seconds and restores 10 Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josygjr",
        "level": 10,
        "name": {
          "fr": "Ring of Frost",
          "en": "Ring of Frost"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_ringoffrost.png",
        "description": {
          "fr": "After a 1.5 second delay, create a Ring of Frost in an area that deals 310 (+4% per level) damage and Roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it.",
          "en": "After a 1.5 second delay, create a Ring of Frost in an area that deals 310 (+4% per level) damage and Roots enemies for 3 seconds. The ring persists for 3 seconds afterward, Chilling any enemies who touch it."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7bsis",
        "level": 13,
        "name": {
          "fr": "Storm Front",
          "en": "Storm Front"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_blizzard.png",
        "description": {
          "fr": "Increase the cast range of Blizzard by 75% and its radius by 30%.",
          "en": "Increase the cast range of Blizzard by 75% and its radius by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jopdypt",
        "level": 16,
        "name": {
          "fr": "Snowstorm",
          "en": "Snowstorm"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_blizzard.png",
        "description": {
          "fr": "The damage of the second wave of Blizzard is increased by 50%. The damage of the third wave is increased by 100%.",
          "en": "The damage of the second wave of Blizzard is increased by 50%. The damage of the third wave is increased by 100%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joo977e",
        "level": 20,
        "name": {
          "fr": "Cold Snap",
          "en": "Cold Snap"
        },
        "icon": "assets/heroes/base_spells/jaina/images/talents/storm_ui_icon_jaina_ringoffrost.png",
        "description": {
          "fr": "The center area of Ring of Frost deals 310 (+4% per level) damage and Roots enemies after the outer ring expires. Each enemy Hero hit reduces its cooldown by 15 seconds.",
          "en": "The center area of Ring of Frost deals 310 (+4% per level) damage and Roots enemies after the outer ring expires. Each enemy Hero hit reduces its cooldown by 15 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "johanna",
    "enabled": false,
    "name": {
      "fr": "Johanna",
      "en": "Johanna"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_crusader.png",
    "headline": {
      "fr": "Tank increvable, référence contre les compositions à contrôles.",
      "en": "Unkillable tank, the go-to answer against crowd-control comps."
    },
    "gameplay": {
      "fr": "Johanna encaisse énormément grâce à Peau de fer et à son immunité aux ralentissements. Elle excelle à protéger sa ligne arrière avec Éclat du bouclier.",
      "en": "Johanna soaks enormous damage with Iron Skin and her slow immunity. She excels at protecting her back line with Shield Glare."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Peau de fer",
          "en": "Iron Skin"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_iron_skin.png",
        "description": {
          "fr": "Gagne un bouclier et deviens insensible aux ralentissements.",
          "en": "Gain a shield and become immune to slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Punition",
          "en": "Punish"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_punish.png",
        "description": {
          "fr": "Frappe en cône, inflige des dégâts et ralentit.",
          "en": "Strikes in a cone, damaging and slowing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Condamnation",
          "en": "Condemn"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_condemn.png",
        "description": {
          "fr": "Attire les ennemis proches puis les frappe après un court délai.",
          "en": "Pulls nearby enemies in, then damages them after a short delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Éclat du bouclier",
          "en": "Shield Glare"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_shield_glare.png",
        "description": {
          "fr": "Aveugle les ennemis en cône devant toi.",
          "en": "Blinds enemies in a cone in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Épée tombante",
          "en": "Falling Sword"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_falling_sword.png",
        "description": {
          "fr": "Bondit sur une zone lointaine et inflige des dégâts en atterrissant.",
          "en": "Leaps to a distant area, dealing damage on landing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Bouclier béni",
          "en": "Blessed Shield"
        },
        "icon": "assets/heroes/base_spells/johanna/images/spells/storm_ui_icon_johanna_blessed_shield.png",
        "description": {
          "fr": "Lance ton bouclier qui rebondit et étourdit jusqu'à trois ennemis.",
          "en": "Throws your shield, bouncing to stun up to three enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Peau de fer absorbe un burst : anticipe plutôt que de la lancer trop tard.",
        "en": "Iron Skin absorbs burst: anticipate rather than casting it too late."
      },
      {
        "fr": "Éclat du bouclier aveugle : parfait contre les assassins d'attaques de base.",
        "en": "Shield Glare blinds: perfect against auto-attack assassins."
      },
      {
        "fr": "Épée tombante permet de rejoindre un allié en difficulté à l'autre bout du combat.",
        "en": "Falling Sword lets you reach a struggling ally across the fight."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Crusader]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jot31eu",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joftd16",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jojvyzk",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joeh429",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo3ujb9",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jod7an3",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo3pwyq",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jot31eu",
        "level": 1,
        "name": {
          "fr": "Zealous Glare",
          "en": "Zealous Glare"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_shield_glare.png",
        "description": {
          "fr": "Shield Glare gains 1 additional charge, and deals 75% more damage.",
          "en": "Shield Glare gains 1 additional charge, and deals 75% more damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joftd16",
        "level": 4,
        "name": {
          "fr": "Subdue",
          "en": "Subdue"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_punish.png",
        "description": {
          "fr": "Hitting 2 or more Heroes at the same time with Punish increases the Slow to 80% and the Slow amount does not decay.  Quest: Hit 4 or more Heroes at the same time with Punish.  Reward: Punish always Slows by 80%.",
          "en": "Hitting 2 or more Heroes at the same time with Punish increases the Slow to 80% and the Slow amount does not decay.  Quest: Hit 4 or more Heroes at the same time with Punish.  Reward: Punish always Slows by 80%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojvyzk",
        "level": 7,
        "name": {
          "fr": "Sins Exposed",
          "en": "Sins Exposed"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_punish.png",
        "description": {
          "fr": "Punish reduces healing received by 35% for 3 seconds. Basic Attacks against them refresh this duration.",
          "en": "Punish reduces healing received by 35% for 3 seconds. Basic Attacks against them refresh this duration."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joeh429",
        "level": 10,
        "name": {
          "fr": "Falling Sword",
          "en": "Falling Sword"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_falling_sword.png",
        "description": {
          "fr": "Johanna leaps into the air for 2 seconds and she can steer the landing location by moving. While in the air, allies below Johanna are Unstoppable. Upon landing enemies hit take 225 (+4% per level) damage and are Stunned for 0.25 seconds.",
          "en": "Johanna leaps into the air for 2 seconds and she can steer the landing location by moving. While in the air, allies below Johanna are Unstoppable. Upon landing enemies hit take 225 (+4% per level) damage and are Stunned for 0.25 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3ujb9",
        "level": 13,
        "name": {
          "fr": "Roar",
          "en": "Roar"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_punish.png",
        "description": {
          "fr": "Increase Punish's damage by 50%. This bonus is increased to 150% whenever Punish hits 2 or more Heroes.",
          "en": "Increase Punish's damage by 50%. This bonus is increased to 150% whenever Punish hits 2 or more Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod7an3",
        "level": 16,
        "name": {
          "fr": "Shrinking Vacuum",
          "en": "Shrinking Vacuum"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_condemn.png",
        "description": {
          "fr": "Condemn reduces enemy Heroes damage by 25% and Slows by 25% for 2 seconds.",
          "en": "Condemn reduces enemy Heroes damage by 25% and Slows by 25% for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3pwyq",
        "level": 20,
        "name": {
          "fr": "Heaven's Fury",
          "en": "Heaven's Fury"
        },
        "icon": "assets/heroes/base_spells/johanna/images/talents/storm_ui_icon_johanna_falling_sword.png",
        "description": {
          "fr": "Falling Sword rains down holy bolts, dealing 50 (+4% per level) damage to enemies, healing allied Heroes for 68 (+4% per level), and reducing its cooldown by 1 second for each Hero hit.",
          "en": "Falling Sword rains down holy bolts, dealing 50 (+4% per level) damage to enemies, healing allied Heroes for 68 (+4% per level), and reducing its cooldown by 1 second for each Hero hit."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "junkrat",
    "enabled": false,
    "name": {
      "fr": "Chacal",
      "en": "Junkrat"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_junkrat.png",
    "headline": {
      "fr": "Assassin de zone qui rend toute approche impossible.",
      "en": "Area assassin who makes any approach impossible."
    },
    "gameplay": {
      "fr": "Chacal couvre le terrain de grenades, de mines et de pièges, et devient extrêmement dangereux dans les couloirs étroits.",
      "en": "Junkrat covers the ground with grenades, mines, and traps, and becomes extremely dangerous in narrow corridors."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Chaos total",
          "en": "Total Mayhem"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_bomb_pack.png",
        "description": {
          "fr": "À ta mort, tu lâches des bombes qui explosent autour de toi.",
          "en": "On death you drop bombs that explode around you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Lance-grenades",
          "en": "Frag Launcher"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_frag_launcher.png",
        "description": {
          "fr": "Tire des grenades qui rebondissent.",
          "en": "Fires bouncing grenades."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Mine à concussion",
          "en": "Concussion Mine"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_concussion_mine.png",
        "description": {
          "fr": "Mine qui repousse toi et les ennemis.",
          "en": "Mine that knocks you and enemies back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Piège en acier",
          "en": "Steel Trap"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_steel_trap.png",
        "description": {
          "fr": "Immobilise le premier ennemi qui marche dessus.",
          "en": "Roots the first enemy who steps on it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Pneumatique",
          "en": "RIP-Tire"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_rip_tire.png",
        "description": {
          "fr": "Pneu télécommandé qui explose violemment.",
          "en": "Remote-controlled tire that explodes violently."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Fusée mobile",
          "en": "Rocket Ride"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/spells/storm_ui_icon_junkrat_rocket_ride.png",
        "description": {
          "fr": "S'envole sur la carte puis retombe en explosant.",
          "en": "Rockets across the map, then lands with an explosion."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tes grenades rebondissent : sers-t'en pour tirer par-dessus les murs.",
        "en": "Your grenades bounce: use them to shoot over walls."
      },
      {
        "fr": "Mine à concussion sert autant à te déplacer qu'à repousser un ennemi.",
        "en": "Concussion Mine repositions you as well as knocking enemies back."
      },
      {
        "fr": "À ta mort, tu lâches des bombes : elles tuent souvent le poursuivant.",
        "en": "On death you drop bombs: they often kill your chaser."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Junkrat]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joxsbgs",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jop9ska",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodj2dj",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo3jxnb",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jotcbd2",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jowztzt",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jok1yqm",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joxsbgs",
        "level": 1,
        "name": {
          "fr": "Tricky Shuffles",
          "en": "Tricky Shuffles"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
        "description": {
          "fr": "While Frag Launcher has no charges left, Junkrat gains 10% Movement Speed and his Basic Attacks deal 15% bonus damage.",
          "en": "While Frag Launcher has no charges left, Junkrat gains 10% Movement Speed and his Basic Attacks deal 15% bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jop9ska",
        "level": 4,
        "name": {
          "fr": "Taste For Explosions",
          "en": "Taste For Explosions"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
        "description": {
          "fr": "Quest: Hitting a Hero with Frag Launcher increases its damage by 0.2%, up to 40%.",
          "en": "Quest: Hitting a Hero with Frag Launcher increases its damage by 0.2%, up to 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodj2dj",
        "level": 7,
        "name": {
          "fr": "Bogged Down",
          "en": "Bogged Down"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_concussion_mine.png",
        "description": {
          "fr": "Enemies launched by Concussion Mine are Slowed by 40% for 2.5 seconds upon landing.",
          "en": "Enemies launched by Concussion Mine are Slowed by 40% for 2.5 seconds upon landing."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3jxnb",
        "level": 10,
        "name": {
          "fr": "RIP-Tire",
          "en": "RIP-Tire"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_rip_tire.png",
        "description": {
          "fr": "Create a motorized bomb with 530 (+4% per level) Health that lasts 15 seconds. While active, Junkrat is immobile but gains control of RIP-Tire's movement.  RIP-Tire can be reactivated to detonate immediately, knocking nearby enemies back and dealing 720 (+4% per level) damage to enemies near the center gradually reduced to 445 (+4% per level) to enemies on the edge.",
          "en": "Create a motorized bomb with 530 (+4% per level) Health that lasts 15 seconds. While active, Junkrat is immobile but gains control of RIP-Tire's movement.  RIP-Tire can be reactivated to detonate immediately, knocking nearby enemies back and dealing 720 (+4% per level) damage to enemies near the center gradually reduced to 445 (+4% per level) to enemies on the edge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotcbd2",
        "level": 13,
        "name": {
          "fr": "Bombs Away",
          "en": "Bombs Away"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_frag_launcher.png",
        "description": {
          "fr": "Increase Junkrat's Basic Attack range by 1.  Frag Launcher grenades fired within 0.5 seconds of using a Basic Attack deal 30% bonus damage.",
          "en": "Increase Junkrat's Basic Attack range by 1.  Frag Launcher grenades fired within 0.5 seconds of using a Basic Attack deal 30% bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowztzt",
        "level": 16,
        "name": {
          "fr": "Burst Fire",
          "en": "Burst Fire"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_frag_launcher_f.png",
        "description": {
          "fr": "Frag Launcher fires all of its charges in a continuous burst, its cooldown is reduced by 6 seconds, but it loses 1 maximum charge.",
          "en": "Frag Launcher fires all of its charges in a continuous burst, its cooldown is reduced by 6 seconds, but it loses 1 maximum charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok1yqm",
        "level": 20,
        "name": {
          "fr": "Extra Oomph",
          "en": "Extra Oomph"
        },
        "icon": "assets/heroes/base_spells/junkrat/images/talents/storm_ui_icon_junkrat_rip_tire.png",
        "description": {
          "fr": "Increase RIP-Tire's knockback distance by 50%, and its cooldown is reduced by 25 seconds for each enemy Hero hit.",
          "en": "Increase RIP-Tire's knockback distance by 50%, and its cooldown is reduced by 25 seconds for each enemy Hero hit."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "kelthuzad",
    "enabled": false,
    "name": {
      "fr": "Kel'Thuzad",
      "en": "Kel'Thuzad"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_kelthuzad.png",
    "headline": {
      "fr": "Mage de contrôle qui enchaîne ses cibles contre les murs.",
      "en": "Control mage who chains targets into walls."
    },
    "gameplay": {
      "fr": "Kel'Thuzad attire ses cibles avec ses Chaînes et enchaîne un combo dévastateur. Il devient de plus en plus puissant en accumulant sa quête.",
      "en": "Kel'Thuzad pulls targets with his Chains and follows with a devastating combo. He grows stronger as he stacks his quest."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Maître du froid obscur",
          "en": "Master of the Cold Dark"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_powerofthecolddark.png",
        "description": {
          "fr": "Tes sorts se renforcent en accumulant ta quête.",
          "en": "Your abilities grow stronger as you complete your quest."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Mort et décrépitude",
          "en": "Death and Decay"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_deathanddecay.png",
        "description": {
          "fr": "Vagues de dégâts en zone.",
          "en": "Waves of area damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Nova de givre",
          "en": "Frost Nova"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_frostnova.png",
        "description": {
          "fr": "Explosion glaciale qui ralentit.",
          "en": "Frost blast that slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Chaînes de Kel'Thuzad",
          "en": "Chains of Kel'Thuzad"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_chains.png",
        "description": {
          "fr": "Attire l'ennemi ; l'étourdit contre un mur.",
          "en": "Pulls the enemy; stuns them against a wall."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Explosion de givre",
          "en": "Frost Blast"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_frozentomb.png",
        "description": {
          "fr": "Gèle complètement les ennemis touchés.",
          "en": "Completely freezes enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Fissure d'ombre",
          "en": "Shadow Fissure"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/spells/storm_ui_icon_kelthuzad_shadowfissure.png",
        "description": {
          "fr": "Fissure qui explose en infligeant de gros dégâts.",
          "en": "Fissure that erupts, dealing heavy damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Chaînes contre un mur = étourdissement : cherche toujours cet angle.",
        "en": "Chains into a wall equals a stun: always look for that angle."
      },
      {
        "fr": "Accumule ta quête tôt : tes dégâts en fin de partie en dépendent.",
        "en": "Stack your quest early: your late-game damage depends on it."
      },
      {
        "fr": "Mort et décrépitude est ton principal outil de nettoyage de vague.",
        "en": "Death and Decay is your main wave clear."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,KelThuzad]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo89g2m",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jojdabr",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo9ho30",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joyjcuh",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joaon3w",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jogac8p",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jotgpj8",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo89g2m",
        "level": 1,
        "name": {
          "fr": "The Plaguelands",
          "en": "The Plaguelands"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_deathanddecay.png",
        "description": {
          "fr": "Increase Death and Decay's duration by 1 second. After gaining 30 Blight, increase the radius of Death and Decay's pool by 30%.",
          "en": "Increase Death and Decay's duration by 1 second. After gaining 30 Blight, increase the radius of Death and Decay's pool by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojdabr",
        "level": 4,
        "name": {
          "fr": "Strip Shields",
          "en": "Strip Shields"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_chains.png",
        "description": {
          "fr": "Pulling a Hero with Chains of Kel'Thuzad grants Kel'Thuzad a permanent 128 (+4% per level) Shield, stacking up to 2 times.  Additionally, Chains of Kel'Thuzad deals up to 270 (+2.5% per level) bonus damage to Heroes' Shields.",
          "en": "Pulling a Hero with Chains of Kel'Thuzad grants Kel'Thuzad a permanent 128 (+4% per level) Shield, stacking up to 2 times.  Additionally, Chains of Kel'Thuzad deals up to 270 (+2.5% per level) bonus damage to Heroes' Shields."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9ho30",
        "level": 7,
        "name": {
          "fr": "Accelerated Decay",
          "en": "Accelerated Decay"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_deathanddecay.png",
        "description": {
          "fr": "Each time a Hero is hit by Death and Decay's pool, they take 25% more periodic damage from Death and Decay for the next 4 seconds, stacking up to 4 times.",
          "en": "Each time a Hero is hit by Death and Decay's pool, they take 25% more periodic damage from Death and Decay for the next 4 seconds, stacking up to 4 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyjcuh",
        "level": 10,
        "name": {
          "fr": "Frost Blast",
          "en": "Frost Blast"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_frozentomb.png",
        "description": {
          "fr": "Launch a meteor of ice at an enemy Hero. Upon impact, the meteor deals 115 (+2.5% per level) damage to its target and 275 (+2.5% per level) damage to enemies in the area. All enemies hit by Frost Blast are Rooted for 2 seconds.",
          "en": "Launch a meteor of ice at an enemy Hero. Upon impact, the meteor deals 115 (+2.5% per level) damage to its target and 275 (+2.5% per level) damage to enemies in the area. All enemies hit by Frost Blast are Rooted for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joaon3w",
        "level": 13,
        "name": {
          "fr": "Icy Grasp",
          "en": "Icy Grasp"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_frostnova.png",
        "description": {
          "fr": "Increase Frost Nova's Slow by 20%. Each time Kel'Thuzad damages enemies Slowed by Frost Nova, reduce the cooldown of Frost Nova by 0.75 seconds.",
          "en": "Increase Frost Nova's Slow by 20%. Each time Kel'Thuzad damages enemies Slowed by Frost Nova, reduce the cooldown of Frost Nova by 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogac8p",
        "level": 16,
        "name": {
          "fr": "Arcane Echoes",
          "en": "Arcane Echoes"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_deathanddecay.png",
        "description": {
          "fr": "Whenever Kel'Thuzad hits an enemy Hero with Death and Decay's explosion, its cooldown is reduced by 1.5 seconds.",
          "en": "Whenever Kel'Thuzad hits an enemy Hero with Death and Decay's explosion, its cooldown is reduced by 1.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotgpj8",
        "level": 20,
        "name": {
          "fr": "Deathchill",
          "en": "Deathchill"
        },
        "icon": "assets/heroes/base_spells/kelthuzad/images/talents/storm_ui_icon_kelthuzad_frozentomb.png",
        "description": {
          "fr": "When Frost Blast's Root expires, enemies are Slowed by 40% for 3 seconds. Heroes killed while under the effects of Frost Blast instantly release another Frost Blast explosion.",
          "en": "When Frost Blast's Root expires, enemies are Slowed by 40% for 3 seconds. Heroes killed while under the effects of Frost Blast instantly release another Frost Blast explosion."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "kerrigan",
    "enabled": false,
    "name": {
      "fr": "Kerrigan",
      "en": "Kerrigan"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_kerrigan.png",
    "headline": {
      "fr": "Assassin d'élimination qui attrape une cible et la supprime.",
      "en": "Burst assassin who grabs a target and deletes it."
    },
    "gameplay": {
      "fr": "Kerrigan enchaîne Étreinte primordiale, Lames empaleuses et Ravage pour éliminer une cible isolée, en gagnant des boucliers à chaque victime.",
      "en": "Kerrigan chains Primal Grasp, Impaling Blades, and Ravage to delete an isolated target, gaining shields from every kill."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Assimilation",
          "en": "Assimilation"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_assimilation.png",
        "description": {
          "fr": "Gagne un bouclier en blessant des ennemis.",
          "en": "Gain shields by damaging enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Ravage",
          "en": "Ravage"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_ravage.png",
        "description": {
          "fr": "Fonce sur une cible et la frappe ; se recharge si elle meurt.",
          "en": "Dashes to a target and strikes; resets if they die."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Lames empaleuses",
          "en": "Impaling Blades"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_impalingblades.png",
        "description": {
          "fr": "Immobilise les ennemis d'une zone après un délai.",
          "en": "Roots enemies in an area after a delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Étreinte primordiale",
          "en": "Primal Grasp"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_primalgrasp.png",
        "description": {
          "fr": "Attire les ennemis vers toi.",
          "en": "Pulls enemies toward you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Invocation d'ultralisk",
          "en": "Summon Ultralisk"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_ultralisk.png",
        "description": {
          "fr": "Invoque un ultralisk qui combat à tes côtés.",
          "en": "Summons an Ultralisk to fight beside you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Maelström",
          "en": "Maelstrom"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/spells/storm_ui_icon_kerrigan_maelstrom.png",
        "description": {
          "fr": "Dégâts de zone continus autour de toi.",
          "en": "Continuous AoE damage around you."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Attire puis empale : la combinaison est presque impossible à esquiver.",
        "en": "Pull then impale: the combo is nearly impossible to dodge."
      },
      {
        "fr": "Attends toujours qu'un contrôle allié soit posé avant de plonger.",
        "en": "Always wait for allied crowd control before diving."
      },
      {
        "fr": "Tes boucliers d'assimilation te permettent de rester en combat.",
        "en": "Your Assimilation shields let you stay in the fight."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Kerrigan]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6josg7p8",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jofpb2k",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jocbplb",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joyydsm",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo9j7bs",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo5qbr7",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joap1pk",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6josg7p8",
        "level": 1,
        "name": {
          "fr": "Siphoning Impact",
          "en": "Siphoning Impact"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_ravage.png",
        "description": {
          "fr": "Hitting an enemy Hero with Ravage grants 100 (+4% per level) points of Assimilation Shields.",
          "en": "Hitting an enemy Hero with Ravage grants 100 (+4% per level) points of Assimilation Shields."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofpb2k",
        "level": 4,
        "name": {
          "fr": "Sharpened Blades",
          "en": "Sharpened Blades"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_ravage.png",
        "description": {
          "fr": "Quest: Minions and Heroes that die within 1.5 seconds of being hit by Ravage increase its damage up to a maximum of 75.  Minions grant 1 increased damage and Heroes grant 5 increased damage.  Reward: After reaching a 75 damage increase, Ravage gains 50 additional damage.",
          "en": "Quest: Minions and Heroes that die within 1.5 seconds of being hit by Ravage increase its damage up to a maximum of 75.  Minions grant 1 increased damage and Heroes grant 5 increased damage.  Reward: After reaching a 75 damage increase, Ravage gains 50 additional damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jocbplb",
        "level": 7,
        "name": {
          "fr": "Queen of Blades",
          "en": "Queen of Blades"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_ravage.png",
        "description": {
          "fr": "Reduce the cooldown of Ravage by 3 seconds and increase its damage to Minions and Mercenaries by 100%.",
          "en": "Reduce the cooldown of Ravage by 3 seconds and increase its damage to Minions and Mercenaries by 100%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyydsm",
        "level": 10,
        "name": {
          "fr": "Maelstrom",
          "en": "Maelstrom"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_maelstrom.png",
        "description": {
          "fr": "Deals 74 (+4% per level) damage per second to nearby enemies. Lasts for 7 seconds.",
          "en": "Deals 74 (+4% per level) damage per second to nearby enemies. Lasts for 7 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9j7bs",
        "level": 13,
        "name": {
          "fr": "Psionic Barrier",
          "en": "Psionic Barrier"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_primalgrasp.png",
        "description": {
          "fr": "Each enemy Hero hit by Primal Grasp grants 20 Spell Armor and 4% Movement Speed for 4 seconds, stacking up to 20% Movement Speed.",
          "en": "Each enemy Hero hit by Primal Grasp grants 20 Spell Armor and 4% Movement Speed for 4 seconds, stacking up to 20% Movement Speed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5qbr7",
        "level": 16,
        "name": {
          "fr": "Mounting Potency",
          "en": "Mounting Potency"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_ravage.png",
        "description": {
          "fr": "Ravage grants 5% Spell Power for 5 seconds, up to 40%.",
          "en": "Ravage grants 5% Spell Power for 5 seconds, up to 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joap1pk",
        "level": 20,
        "name": {
          "fr": "Omegastorm",
          "en": "Omegastorm"
        },
        "icon": "assets/heroes/base_spells/kerrigan/images/talents/storm_ui_icon_kerrigan_maelstrom.png",
        "description": {
          "fr": "Maelstrom's duration is increased by 0.25 seconds every time it damages a Hero.",
          "en": "Maelstrom's duration is increased by 0.25 seconds every time it damages a Hero."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "leoric",
    "enabled": false,
    "name": {
      "fr": "Leoric",
      "en": "Leoric"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_leoric.png",
    "headline": {
      "fr": "Bruiser immortel qui continue de gêner même après sa mort.",
      "en": "Immortal bruiser who keeps being a nuisance even after death."
    },
    "gameplay": {
      "fr": "Leoric revient plus vite en frappant les ennemis sous forme de fantôme, et draine la vie de sa cible avec Vol d'espoir.",
      "en": "Leoric respawns faster by hitting enemies in ghost form and drains his target's Health with Drain Hope."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Immortel",
          "en": "Undying"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_trait.png",
        "description": {
          "fr": "À ta mort tu deviens un fantôme et peux hâter ta réapparition.",
          "en": "On death you become a ghost and can speed up your respawn."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Balayage squelettique",
          "en": "Skeletal Swing"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_skeletalswing.png",
        "description": {
          "fr": "Frappe en cône et te soigne selon les cibles touchées.",
          "en": "Strikes in a cone, healing you per target hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Vol d'espoir",
          "en": "Drain Hope"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_drainhope.png",
        "description": {
          "fr": "Draine la vie d'un ennemi tant qu'il reste proche.",
          "en": "Drains an enemy's Health while they stay close."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Marche spectrale",
          "en": "Wraith Walk"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_wraithwalk.png",
        "description": {
          "fr": "Deviens intangible et te déplace plus vite.",
          "en": "Become intangible and move faster."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Tombeau",
          "en": "Entomb"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_entomb.png",
        "description": {
          "fr": "Crée un mur d'os qui enferme les ennemis.",
          "en": "Creates a wall of bone that traps enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Marche du Roi noir",
          "en": "March of the Black King"
        },
        "icon": "assets/heroes/base_spells/leoric/images/spells/storm_ui_icon_leoric_r2.png",
        "description": {
          "fr": "Trois frappes de zone qui te soignent énormément.",
          "en": "Three AoE slams that heal you heavily."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "En fantôme, reste au contact des ennemis pour réduire ton temps de réapparition.",
        "en": "As a ghost, stay near enemies to shorten your respawn timer."
      },
      {
        "fr": "Vol d'espoir doit durer : place-toi pour que la cible ne s'éloigne pas.",
        "en": "Drain Hope needs time: position so the target can't run away."
      },
      {
        "fr": "Tombeau isole une cible ou coupe complètement une retraite.",
        "en": "Entomb isolates a target or completely cuts off a retreat."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Leoric]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jod8ieo",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo1ntq8",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joccc8q",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo0vdfe",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joj0rxt",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6josugbp",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jorw0ew",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jod8ieo",
        "level": 1,
        "name": {
          "fr": "Consume Vitality",
          "en": "Consume Vitality"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_skeletalswing.png",
        "description": {
          "fr": "Skeletal Swing's cooldown is reduced by 2 seconds. Enemy Heroes hit heal Leoric for 4% of his maximum Health.",
          "en": "Skeletal Swing's cooldown is reduced by 2 seconds. Enemy Heroes hit heal Leoric for 4% of his maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1ntq8",
        "level": 4,
        "name": {
          "fr": "Ghastly Reach",
          "en": "Ghastly Reach"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_skeletalswing.png",
        "description": {
          "fr": "Increase the range of Skeletal Swing by 25%.",
          "en": "Increase the range of Skeletal Swing by 25%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joccc8q",
        "level": 7,
        "name": {
          "fr": "Willing Vessel",
          "en": "Willing Vessel"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_drainhope.png",
        "description": {
          "fr": "Increase the healing from Drain Hope to 25% of Leoric's maximum Health. If Drain Hope lasts its full duration, Leoric instantly heals for an additional 5% of his maximum Health.",
          "en": "Increase the healing from Drain Hope to 25% of Leoric's maximum Health. If Drain Hope lasts its full duration, Leoric instantly heals for an additional 5% of his maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0vdfe",
        "level": 10,
        "name": {
          "fr": "Entomb",
          "en": "Entomb"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_entomb.png",
        "description": {
          "fr": "Create an unpassable tomb for 4 seconds.",
          "en": "Create an unpassable tomb for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joj0rxt",
        "level": 13,
        "name": {
          "fr": "Unyielding Despair",
          "en": "Unyielding Despair"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_drainhope.png",
        "description": {
          "fr": "Drain Hope's cooldown is reduced by 0.75 seconds for every 1 second it is active. If Drain Hope lasts its full duration, its cooldown is reduced by an additional 2 seconds.",
          "en": "Drain Hope's cooldown is reduced by 0.75 seconds for every 1 second it is active. If Drain Hope lasts its full duration, its cooldown is reduced by an additional 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josugbp",
        "level": 16,
        "name": {
          "fr": "Crushing Hope",
          "en": "Crushing Hope"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_drainhope.png",
        "description": {
          "fr": "If Drain Hope lasts its full duration, it instantly deals an additional 15% of the target's maximum Health as damage. This damage does not heal Leoric.",
          "en": "If Drain Hope lasts its full duration, it instantly deals an additional 15% of the target's maximum Health as damage. This damage does not heal Leoric."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jorw0ew",
        "level": 20,
        "name": {
          "fr": "Buried Alive",
          "en": "Buried Alive"
        },
        "icon": "assets/heroes/base_spells/leoric/images/talents/storm_ui_icon_leoric_entomb.png",
        "description": {
          "fr": "The duration of Entomb is lowered by 1 second, but enemies trapped inside are Silenced and take 50 (+4% per level) damage every 1 second.",
          "en": "The duration of Entomb is lowered by 1 second, but enemies trapped inside are Silenced and take 50 (+4% per level) damage every 1 second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "liming",
    "enabled": false,
    "name": {
      "fr": "Li-Ming",
      "en": "Li-Ming"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_wizard.png",
    "headline": {
      "fr": "Mage de burst extrême qui se recharge à chaque élimination.",
      "en": "Extreme burst mage whose cooldowns reset on takedowns."
    },
    "gameplay": {
      "fr": "Li-Ming supprime les cibles fragiles en un combo. Chaque élimination réinitialise ses temps de recharge et lui permet d'enchaîner.",
      "en": "Li-Ming deletes squishy targets in a single combo. Every takedown resets her cooldowns, letting her chain kills."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Masse critique",
          "en": "Critical Mass"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_criticalmass.png",
        "description": {
          "fr": "Tes temps de recharge sont réinitialisés à chaque élimination.",
          "en": "Your cooldowns reset on every takedown."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Missiles magiques",
          "en": "Magic Missiles"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_magicmissiles.png",
        "description": {
          "fr": "Trois missiles qui suivent la cible.",
          "en": "Three homing missiles."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Orbe arcanique",
          "en": "Arcane Orb"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_arcaneorb.png",
        "description": {
          "fr": "Orbe qui fait plus de dégâts de loin.",
          "en": "Orb that deals more damage at range."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Téléportation",
          "en": "Teleport"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_teleport.png",
        "description": {
          "fr": "Se téléporte sur une courte distance.",
          "en": "Teleports a short distance."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Désintégration",
          "en": "Disintegrate"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_disintegrate.png",
        "description": {
          "fr": "Rayon canalisé orientable.",
          "en": "Channeled beam you can steer."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Vague de force",
          "en": "Wave of Force"
        },
        "icon": "assets/heroes/base_spells/liming/images/spells/storm_ui_icon_wizard_waveofforce.png",
        "description": {
          "fr": "Repousse les ennemis proches.",
          "en": "Knocks nearby enemies back."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Une élimination remet tes sorts à zéro : enchaîne immédiatement.",
        "en": "A takedown resets your abilities: chain immediately."
      },
      {
        "fr": "Téléportation est ta seule survie : ne la gaspille pas pour l'agression.",
        "en": "Teleport is your only survival tool: don't waste it on aggression."
      },
      {
        "fr": "Orbe arcanique fait beaucoup plus mal à longue distance.",
        "en": "Arcane Orb hits far harder at long range."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Wizard]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jonupaj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jotbsn3",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jow4khn",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo4z76i",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joc6xfn",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6josj97v",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6josnvzg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jonupaj",
        "level": 1,
        "name": {
          "fr": "Force Armor",
          "en": "Force Armor"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        "description": {
          "fr": "When Magic Missiles damages an enemy Hero, gain 50 Spell Armor, reducing the damage taken by the next Ability by 50%. Gain 1 charge per cast and store up to 4 charges.  Passive: Li-Ming's Mana regeneration is increased by 100% while below 35% Mana.",
          "en": "When Magic Missiles damages an enemy Hero, gain 50 Spell Armor, reducing the damage taken by the next Ability by 50%. Gain 1 charge per cast and store up to 4 charges.  Passive: Li-Ming's Mana regeneration is increased by 100% while below 35% Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotbsn3",
        "level": 4,
        "name": {
          "fr": "Charged Blast",
          "en": "Charged Blast"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        "description": {
          "fr": "Basic Attacking a target recently hit by a Magic Missile does an extra 87 (+4% per level) damage.",
          "en": "Basic Attacking a target recently hit by a Magic Missile does an extra 87 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jow4khn",
        "level": 7,
        "name": {
          "fr": "Seeker",
          "en": "Seeker"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        "description": {
          "fr": "If three Magic Missiles hit the same target, the third one deals an additional 140 (+4% per level) damage.",
          "en": "If three Magic Missiles hit the same target, the third one deals an additional 140 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4z76i",
        "level": 10,
        "name": {
          "fr": "Disintegrate",
          "en": "Disintegrate"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_disintegrate.png",
        "description": {
          "fr": "Channel a powerful beam, dealing 480 (+5% per level) damage over 2.6 seconds to enemies while they are in it. The direction of the beam changes with your mouse cursor position.",
          "en": "Channel a powerful beam, dealing 480 (+5% per level) damage over 2.6 seconds to enemies while they are in it. The direction of the beam changes with your mouse cursor position."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc6xfn",
        "level": 13,
        "name": {
          "fr": "Illusionist",
          "en": "Illusionist"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_teleport.png",
        "description": {
          "fr": "If Li-Ming loses more than 20% of her Health at once, its cooldown is instantly refreshed.  This effect has a 4 second cooldown.  Passive: Increases Teleport range by 50%",
          "en": "If Li-Ming loses more than 20% of her Health at once, its cooldown is instantly refreshed.  This effect has a 4 second cooldown.  Passive: Increases Teleport range by 50%"
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josj97v",
        "level": 16,
        "name": {
          "fr": "Fireflies",
          "en": "Fireflies"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_magicmissiles.png",
        "description": {
          "fr": "Drastically increases Magic Missiles speed. Its cooldown is reduced by 1 second, and its Mana cost is reduced by 5.",
          "en": "Drastically increases Magic Missiles speed. Its cooldown is reduced by 1 second, and its Mana cost is reduced by 5."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josnvzg",
        "level": 20,
        "name": {
          "fr": "Temporal Flux",
          "en": "Temporal Flux"
        },
        "icon": "assets/heroes/base_spells/liming/images/talents/storm_ui_icon_wizard_disintegrate.png",
        "description": {
          "fr": "Disintegrate gradually slows enemies caught in its beam, to a maximum of 60%.",
          "en": "Disintegrate gradually slows enemies caught in its beam, to a maximum of 60%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "lostvikings",
    "enabled": false,
    "name": {
      "fr": "Les Vikings perdus",
      "en": "The Lost Vikings"
    },
    "role": "Support",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_lostvikings.png",
    "headline": {
      "fr": "Trois héros pour le prix d'un : la meilleure présence de carte du jeu.",
      "en": "Three Heroes for the price of one: the best map presence in the game."
    },
    "gameplay": {
      "fr": "Les Vikings occupent trois lignes en même temps. Le défi est de les garder en vie tout en gagnant beaucoup plus d'expérience que l'adversaire.",
      "en": "The Vikings soak three lanes at once. The challenge is keeping them alive while gaining far more experience than the enemy."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Trésor viking",
          "en": "Viking Hoard"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_vikinghoard.png",
        "description": {
          "fr": "Les Vikings accumulent des bonus en survivant et en collectant.",
          "en": "The Vikings gain bonuses by surviving and collecting."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tourbillon !",
          "en": "Spin To Win!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_spintowin.png",
        "description": {
          "fr": "Olaf tournoie et inflige des dégâts autour de lui.",
          "en": "Olaf spins, damaging enemies around him."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Saut !",
          "en": "Jump!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_jump.png",
        "description": {
          "fr": "Erik bondit pour se repositionner.",
          "en": "Erik leaps to reposition."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Corruption viking",
          "en": "Viking Bribery"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_talent_bribe.png",
        "description": {
          "fr": "Corrompt un camp de mercenaires pour le rallier.",
          "en": "Bribes a mercenary camp to join you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Raid en drakkar !",
          "en": "Longboat Raid!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_longboatraid.png",
        "description": {
          "fr": "Les trois Vikings montent dans un drakkar et bombardent.",
          "en": "The three Vikings board a longboat and bombard enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "On rejoue !",
          "en": "Play Again!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_playagain.png",
        "description": {
          "fr": "Les Vikings ressuscitent bien plus vite.",
          "en": "The Vikings respawn much faster."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Allez, allez !",
          "en": "Go Go Go!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/spells/storm_ui_icon_lostvikings_mount.png",
        "description": {
          "fr": "Augmente la vitesse de déplacement des trois Vikings.",
          "en": "Increases all three Vikings' Movement Speed."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Sépare les Vikings sur trois lignes pour prendre l'avantage en niveaux.",
        "en": "Split the Vikings across three lanes to build an XP lead."
      },
      {
        "fr": "Regroupe-les avant tout objectif important.",
        "en": "Regroup them before any major objective."
      },
      {
        "fr": "Un Viking perdu, c'est de l'expérience offerte : joue prudemment.",
        "en": "A lost Viking is free XP for the enemy: play carefully."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,LostVikings]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jottmsq",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jolz5hd",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joplq4y",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joubqlk",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jok4izl",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jomttxx",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joz1okt",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jottmsq",
        "level": 1,
        "name": {
          "fr": "Olaf the Stout",
          "en": "Olaf the Stout"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        "description": {
          "fr": "Passive: Olaf gains 20% bonus maximum Health.  Every 5 seconds, Olaf gains 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%.  Stores up to 2 charges.",
          "en": "Passive: Olaf gains 20% bonus maximum Health.  Every 5 seconds, Olaf gains 75 Physical Armor against the next enemy Hero Basic Attack, reducing the damage taken by 75%.  Stores up to 2 charges."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolz5hd",
        "level": 4,
        "name": {
          "fr": "Pain Don't Hurt",
          "en": "Pain Don't Hurt"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_selectbaleog.png",
        "description": {
          "fr": "Baleog's Basic Attacks and splash damage heal for 20% of the damage dealt. Healing is doubled against Heroes.",
          "en": "Baleog's Basic Attacks and splash damage heal for 20% of the damage dealt. Healing is doubled against Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joplq4y",
        "level": 7,
        "name": {
          "fr": "Baleog the Fierce",
          "en": "Baleog the Fierce"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_selectbaleog.png",
        "description": {
          "fr": "Increase Baleog's attack range by 2.5.  While near Olaf and Erik, he becomes inspired by the power of teamwork and his Attack Speed is increased by 50%.",
          "en": "Increase Baleog's attack range by 2.5.  While near Olaf and Erik, he becomes inspired by the power of teamwork and his Attack Speed is increased by 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joubqlk",
        "level": 10,
        "name": {
          "fr": "Longboat Raid!",
          "en": "Longboat Raid!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_longboatraid.png",
        "description": {
          "fr": "Hop into an Unstoppable Longboat that fires at nearby enemies for 128 (+4% per level) damage per second and can fire a mortar that deals 228 (+4% per level) damage in an area.  The boat has increased Health for each Viking inside. If the boat is destroyed by enemies, all Vikings are Stunned for 1 second. Lasts 15 seconds.  Requires all surviving Vikings to be nearby.",
          "en": "Hop into an Unstoppable Longboat that fires at nearby enemies for 128 (+4% per level) damage per second and can fire a mortar that deals 228 (+4% per level) damage in an area.  The boat has increased Health for each Viking inside. If the boat is destroyed by enemies, all Vikings are Stunned for 1 second. Lasts 15 seconds.  Requires all surviving Vikings to be nearby."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok4izl",
        "level": 13,
        "name": {
          "fr": "Hunka' Burning Olaf",
          "en": "Hunka' Burning Olaf"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        "description": {
          "fr": "Olaf deals 34 (+4% per level) damage every second to nearby enemies.",
          "en": "Olaf deals 34 (+4% per level) damage every second to nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomttxx",
        "level": 16,
        "name": {
          "fr": "Large and In Charge",
          "en": "Large and In Charge"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_selectolaf.png",
        "description": {
          "fr": "When Olaf charges enemies, they are stunned for 1 second.",
          "en": "When Olaf charges enemies, they are stunned for 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joz1okt",
        "level": 20,
        "name": {
          "fr": "Ragnarok 'n' Roll!",
          "en": "Ragnarok 'n' Roll!"
        },
        "icon": "assets/heroes/base_spells/lostvikings/images/talents/storm_ui_icon_lostvikings_longboatraid.png",
        "description": {
          "fr": "The Longboat can attack two targets at once and the range of its Mortar is increased by 100%. Reduce Longboat Raid!'s cooldown by 30 seconds.",
          "en": "The Longboat can attack two targets at once and the range of its Mortar is increased by 100%. Reduce Longboat Raid!'s cooldown by 30 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "lunara",
    "enabled": false,
    "name": {
      "fr": "Lunara",
      "en": "Lunara"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_dryad.png",
    "headline": {
      "fr": "Assassin de poison qui empoisonne toute une équipe.",
      "en": "Poison assassin who stacks damage over time on a whole team."
    },
    "gameplay": {
      "fr": "Lunara ne monte pas : elle est toujours plus rapide. Ses attaques appliquent un poison qui s'accumule et devient très dangereux.",
      "en": "Lunara never mounts: she's always faster. Her attacks apply a stacking poison that becomes very dangerous."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Toxine naturelle",
          "en": "Nature's Toxin"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_stiflingblossom.png",
        "description": {
          "fr": "Tes attaques appliquent un poison qui s'accumule.",
          "en": "Your attacks apply a stacking poison."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fleur nocive",
          "en": "Noxious Blossom"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_pollencloud.png",
        "description": {
          "fr": "Explosion de zone à distance.",
          "en": "Ranged area explosion."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Spores paralysantes",
          "en": "Crippling Spores"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_fullbloom.png",
        "description": {
          "fr": "Ralentit tous les ennemis empoisonnés.",
          "en": "Slows all poisoned enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Feu follet",
          "en": "Wisp"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_wisp.png",
        "description": {
          "fr": "Envoie un feu follet qui donne de la vision.",
          "en": "Sends a wisp that grants vision."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Ronce d'épines",
          "en": "Thornwood Vine"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_wildspear.png",
        "description": {
          "fr": "Trois lances qui traversent les ennemis.",
          "en": "Three spears that pierce enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Frappe bondissante",
          "en": "Leaping Strike"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_boundlessstride.png",
        "description": {
          "fr": "Bondit vers une cible et applique un poison renforcé.",
          "en": "Leaps to a target and applies an empowered poison."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Rapidité de dryade",
          "en": "Dryad's Swiftness"
        },
        "icon": "assets/heroes/base_spells/lunara/images/spells/storm_ui_icon_lunara_mount.png",
        "description": {
          "fr": "Tu te déplaces toujours plus vite, sans monture.",
          "en": "You always move faster, without a mount."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Empoisonne un maximum de cibles avant un combat.",
        "en": "Poison as many targets as possible before a fight."
      },
      {
        "fr": "Tu ne montes jamais : profite de ta vitesse permanente pour tourner.",
        "en": "You never mount: use your permanent speed to rotate."
      },
      {
        "fr": "Spores paralysantes est un excellent outil de désengagement.",
        "en": "Crippling Spores is an excellent disengage tool."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Dryad]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo85fmj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jozn4hj",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo0jjwj",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joi6n9t",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jorb6h3",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joi9fzu",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jowmmdc",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo85fmj",
        "level": 1,
        "name": {
          "fr": "Sentinel Wisp",
          "en": "Sentinel Wisp"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_wisp.png",
        "description": {
          "fr": "After remaining in a bush for 5 seconds, Wisp's vision radius is increased by 200% and reveals the surrounding area.",
          "en": "After remaining in a bush for 5 seconds, Wisp's vision radius is increased by 200% and reveals the surrounding area."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozn4hj",
        "level": 4,
        "name": {
          "fr": "Blossom Swell",
          "en": "Blossom Swell"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_pollencloud.png",
        "description": {
          "fr": "Increases Noxious Blossom's range by 25% and its radius by 20%.  Blossom Swell applies 2 stacks of Nature's Toxin to enemies hit.",
          "en": "Increases Noxious Blossom's range by 25% and its radius by 20%.  Blossom Swell applies 2 stacks of Nature's Toxin to enemies hit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0jjwj",
        "level": 7,
        "name": {
          "fr": "Splintered Spear",
          "en": "Splintered Spear"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_pollencloud.png",
        "description": {
          "fr": "Using Noxious Blossom causes Lunara's next Basic Attack to hit up to 4 enemies. These extra attacks can apply Nature's Toxin.",
          "en": "Using Noxious Blossom causes Lunara's next Basic Attack to hit up to 4 enemies. These extra attacks can apply Nature's Toxin."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joi6n9t",
        "level": 10,
        "name": {
          "fr": "Thornwood Vine",
          "en": "Thornwood Vine"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_wildspear.png",
        "description": {
          "fr": "Send forth vines that deal 184 (+4% per level) damage to all enemies in a line.  Stores up to 3 charges.",
          "en": "Send forth vines that deal 184 (+4% per level) damage to all enemies in a line.  Stores up to 3 charges."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jorb6h3",
        "level": 13,
        "name": {
          "fr": "Endless Spores",
          "en": "Endless Spores"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_fullbloom.png",
        "description": {
          "fr": "Casting Crippling Spores while at least 2 Heroes are afflicted by Nature's Toxin reduces the cooldown by 4 seconds.",
          "en": "Casting Crippling Spores while at least 2 Heroes are afflicted by Nature's Toxin reduces the cooldown by 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joi9fzu",
        "level": 16,
        "name": {
          "fr": "Accelerated Contamination",
          "en": "Accelerated Contamination"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_pollencloud.png",
        "description": {
          "fr": "Reduce the Mana cost of Noxious Blossom from 60 to 40.  While at least 1 enemy Hero is afflicted with Nature's Toxin, Noxious Blossom's cooldown recharges 75% faster.",
          "en": "Reduce the Mana cost of Noxious Blossom from 60 to 40.  While at least 1 enemy Hero is afflicted with Nature's Toxin, Noxious Blossom's cooldown recharges 75% faster."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowmmdc",
        "level": 20,
        "name": {
          "fr": "Forest's Wrath",
          "en": "Forest's Wrath"
        },
        "icon": "assets/heroes/base_spells/lunara/images/talents/storm_ui_icon_lunara_wildspear.png",
        "description": {
          "fr": "Thornwood Vine now applies 2 stacks of Nature's Toxin.  Increase Thornwood Vine's range by 30% and Lunara's vision radius by 35%.",
          "en": "Thornwood Vine now applies 2 stacks of Nature's Toxin.  Increase Thornwood Vine's range by 30% and Lunara's vision radius by 35%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "maiev",
    "enabled": false,
    "name": {
      "fr": "Maiev",
      "en": "Maiev"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_maiev.png",
    "headline": {
      "fr": "Assassin de mêlée qui immobilise et enferme ses cibles.",
      "en": "Melee assassin who roots and cages her targets."
    },
    "gameplay": {
      "fr": "Maiev enchaîne Éventail de couteaux et Lien ténébreux pour empêcher toute fuite, et son Disque de confinement neutralise un héros clé.",
      "en": "Maiev chains Fan of Knives and Umbral Bind to deny any escape, and her Containment Disc neutralizes a key Hero."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Chambre forte des Gardiennes",
          "en": "Vault of the Wardens"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_trait.png",
        "description": {
          "fr": "Gagne des charges de déplacement rapide.",
          "en": "Gains charges of a quick dash."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Éventail de couteaux",
          "en": "Fan of Knives"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_knives.png",
        "description": {
          "fr": "Projette des lames en cône.",
          "en": "Throws blades in a cone."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Lien ténébreux",
          "en": "Umbral Bind"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_umbra_1.png",
        "description": {
          "fr": "Enchaîne les ennemis touchés et les immobilise.",
          "en": "Chains hit enemies and roots them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Esprit de vengeance",
          "en": "Spirit of Vengeance"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_rush_1.png",
        "description": {
          "fr": "Envoie un esprit et te téléporte à sa position.",
          "en": "Sends a spirit and teleports you to it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Disque de confinement",
          "en": "Containment Disc"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_heroic_1_a.png",
        "description": {
          "fr": "Rend un héros intouchable et incapable d'agir.",
          "en": "Makes a Hero untargetable and unable to act."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Cage de la Gardienne",
          "en": "Warden's Cage"
        },
        "icon": "assets/heroes/base_spells/maiev/images/spells/storm_ui_icon_maiev_heroic_2.png",
        "description": {
          "fr": "Crée une prison qui empêche les ennemis de sortir.",
          "en": "Creates a cage enemies cannot leave."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Lien ténébreux immobilise la cible : attaque-la juste après.",
        "en": "Umbral Bind roots the target: attack right after."
      },
      {
        "fr": "Esprit de vengeance sert d'engagement et de repli.",
        "en": "Spirit of Vengeance works as both engage and escape."
      },
      {
        "fr": "Disque de confinement peut aussi protéger un allié en le rendant intouchable.",
        "en": "Containment Disc can also protect an ally by making them untargetable."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Maiev]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joucbs7",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jok5i6e",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jod7hq3",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joc6q3s",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo2ykpe",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6johoytp",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jox3293",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joucbs7",
        "level": 1,
        "name": {
          "fr": "Bonds of Justice",
          "en": "Bonds of Justice"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_umbra_1.png",
        "description": {
          "fr": "Quest: Each tether applied to a secondary target of Umbral Bind permanently increases Umbral Bind's pull damage by 15.  Reward: After applying 5 tethers to secondary targets, increase Umbral Bind's pull damage by 75.  Reward: After applying 10 tethers to secondary targets, increase Umbral Bind's cleave damage by 30%.",
          "en": "Quest: Each tether applied to a secondary target of Umbral Bind permanently increases Umbral Bind's pull damage by 15.  Reward: After applying 5 tethers to secondary targets, increase Umbral Bind's pull damage by 75.  Reward: After applying 10 tethers to secondary targets, increase Umbral Bind's cleave damage by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok5i6e",
        "level": 4,
        "name": {
          "fr": "Pin Down",
          "en": "Pin Down"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_knives.png",
        "description": {
          "fr": "Quest: Hit 3 enemy Heroes with a single Fan of Knives.  Reward: Increase Fan of Knives damage by 35%.  Reward: Each additional time 3 enemy Heroes are hit by a single Fan of Knives, gain an additional 5% damage, up to 50%.  Reward: Hit 4 enemy Heroes with a single Fan of Knives to instantly gain all Rewards.",
          "en": "Quest: Hit 3 enemy Heroes with a single Fan of Knives.  Reward: Increase Fan of Knives damage by 35%.  Reward: Each additional time 3 enemy Heroes are hit by a single Fan of Knives, gain an additional 5% damage, up to 50%.  Reward: Hit 4 enemy Heroes with a single Fan of Knives to instantly gain all Rewards."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod7hq3",
        "level": 7,
        "name": {
          "fr": "Elune's Wrath",
          "en": "Elune's Wrath"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_knives.png",
        "description": {
          "fr": "Hitting at least 2 Heroes with a single Fan of Knives causes the next Fan of Knives to drop a star on targets that deals 77 (+4% per level) damage when it impacts.",
          "en": "Hitting at least 2 Heroes with a single Fan of Knives causes the next Fan of Knives to drop a star on targets that deals 77 (+4% per level) damage when it impacts."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc6q3s",
        "level": 10,
        "name": {
          "fr": "Containment Disc",
          "en": "Containment Disc"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_heroic_1_a.png",
        "description": {
          "fr": "Throw a glaive in the target direction. If an enemy Hero is hit, Containment Disc can be reactivated to remove their vision and Time Stop them for 4 seconds. Leaving Containment Silences the enemy Hero for 1.5 seconds.  Containment Disc automatically activates 6 seconds after hitting a Hero.",
          "en": "Throw a glaive in the target direction. If an enemy Hero is hit, Containment Disc can be reactivated to remove their vision and Time Stop them for 4 seconds. Leaving Containment Silences the enemy Hero for 1.5 seconds.  Containment Disc automatically activates 6 seconds after hitting a Hero."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo2ykpe",
        "level": 13,
        "name": {
          "fr": "Bladed Armor",
          "en": "Bladed Armor"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_knives.png",
        "description": {
          "fr": "Each enemy Hero hit by Fan of Knives grants 5 Armor for 5 seconds, up to 20 Armor.",
          "en": "Each enemy Hero hit by Fan of Knives grants 5 Armor for 5 seconds, up to 20 Armor."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johoytp",
        "level": 16,
        "name": {
          "fr": "Vengeful Knives",
          "en": "Vengeful Knives"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_knives.png",
        "description": {
          "fr": "Dealing damage to enemy Heroes causes the next cast of Fan of Knives that hits enemy Heroes to deal 1% maximum Health as bonus damage, up to 5%.",
          "en": "Dealing damage to enemy Heroes causes the next cast of Fan of Knives that hits enemy Heroes to deal 1% maximum Health as bonus damage, up to 5%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox3293",
        "level": 20,
        "name": {
          "fr": "Shadow Orb: Vengeance",
          "en": "Shadow Orb: Vengeance"
        },
        "icon": "assets/heroes/base_spells/maiev/images/talents/storm_ui_icon_maiev_shadoworb_vengeance.png",
        "description": {
          "fr": "Activate to reset the cooldown of Spirit of Vengeance.  Recharge Shadow Orb by damaging enemy Heroes with Spirit of Vengeance 5 times.",
          "en": "Activate to reset the cooldown of Spirit of Vengeance.  Recharge Shadow Orb by damaging enemy Heroes with Spirit of Vengeance 5 times."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "malganis",
    "enabled": false,
    "name": {
      "fr": "Mal'Ganis",
      "en": "Mal'Ganis"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_malganis.png",
    "headline": {
      "fr": "Tank vampirique très difficile à tuer, excellent en plongeon.",
      "en": "Vampiric tank who is very hard to kill and excels at diving."
    },
    "gameplay": {
      "fr": "Mal'Ganis se soigne à chaque coup grâce au Toucher vampirique et peut se rendre intouchable pour survivre à n'importe quel burst.",
      "en": "Mal'Ganis heals with every hit thanks to Vampiric Touch and can become untargetable to survive any burst."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Toucher vampirique",
          "en": "Vampiric Touch"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_trait.png",
        "description": {
          "fr": "Tes attaques et tes sorts te rendent de la vie.",
          "en": "Your attacks and abilities restore Health."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Griffes gangrenées",
          "en": "Fel Claws"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_fel_1.png",
        "description": {
          "fr": "Deux frappes rapides en cône devant toi.",
          "en": "Two quick strikes in a cone in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Étreinte nécrotique",
          "en": "Necrotic Embrace"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_necrotic.png",
        "description": {
          "fr": "Dégâts de zone et bouclier proportionnel aux ennemis touchés.",
          "en": "AoE damage and a shield based on enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Ruée nocturne",
          "en": "Night Rush"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_nightrush.png",
        "description": {
          "fr": "Déplacement rapide qui traverse le décor et ralentit.",
          "en": "Quick movement through terrain that slows enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Conversion sombre",
          "en": "Dark Conversion"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_ult_conversion.png",
        "description": {
          "fr": "Échange ta vie avec un allié et le rend intouchable.",
          "en": "Swaps Health with an ally and makes them untargetable."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Nuée de charognards",
          "en": "Carrion Swarm"
        },
        "icon": "assets/heroes/base_spells/malganis/images/spells/storm_ui_icon_malganis_ult_swarm.png",
        "description": {
          "fr": "Vague de chauves-souris qui inflige des dégâts en ligne.",
          "en": "Wave of bats dealing damage in a line."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Utilise Ruée nocturne pour traverser les murs et couper une retraite.",
        "en": "Use Night Rush to travel through walls and cut off a retreat."
      },
      {
        "fr": "Conversion sombre sauve un allié en le rendant intouchable.",
        "en": "Dark Conversion saves an ally by making them untargetable."
      },
      {
        "fr": "Reste au contact de plusieurs ennemis pour maximiser tes soins.",
        "en": "Stay in contact with multiple enemies to maximize your healing."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,MalGanis]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo0wrlm",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0xy5v",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo5tih8",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo0jman",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jozen8k",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jojuao0",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jonzdq8",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo0wrlm",
        "level": 1,
        "name": {
          "fr": "Winged Guard",
          "en": "Winged Guard"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_necrotic.png",
        "description": {
          "fr": "Each time Necrotic Embrace hits an enemy Hero, gain 75 Physical Armor against the next enemy Hero Basic Attack.  If Winged Guard has no charges, Mal'Ganis will gain 1 charge after 6 seconds.",
          "en": "Each time Necrotic Embrace hits an enemy Hero, gain 75 Physical Armor against the next enemy Hero Basic Attack.  If Winged Guard has no charges, Mal'Ganis will gain 1 charge after 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0xy5v",
        "level": 4,
        "name": {
          "fr": "Fueled by Torment",
          "en": "Fueled by Torment"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_necrotic.png",
        "description": {
          "fr": "While Necrotic Embrace is active, Mal'Ganis heals for 12 (+4% per level) when damage is taken and Vampiric Touch converts 20% more Hero damage into healing.",
          "en": "While Necrotic Embrace is active, Mal'Ganis heals for 12 (+4% per level) when damage is taken and Vampiric Touch converts 20% more Hero damage into healing."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5tih8",
        "level": 7,
        "name": {
          "fr": "Black Claws",
          "en": "Black Claws"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_fel_1.png",
        "description": {
          "fr": "After Mal'Ganis hits an enemy Hero with Fel Claws, his next Basic Attack deals 60% more damage and reduces the Armor of enemy Heroes by 15 for 2 seconds.",
          "en": "After Mal'Ganis hits an enemy Hero with Fel Claws, his next Basic Attack deals 60% more damage and reduces the Armor of enemy Heroes by 15 for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0jman",
        "level": 10,
        "name": {
          "fr": "Carrion Swarm",
          "en": "Carrion Swarm"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_ult_swarm.png",
        "description": {
          "fr": "After 1 second, disperse into an Invulnerable swarm of bats for 3 seconds, dealing 120 (+4% per level) damage per second to enemies.  Vampiric Touch heals for 75% of Carrion Swarm's damage to Heroes.",
          "en": "After 1 second, disperse into an Invulnerable swarm of bats for 3 seconds, dealing 120 (+4% per level) damage per second to enemies.  Vampiric Touch heals for 75% of Carrion Swarm's damage to Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozen8k",
        "level": 13,
        "name": {
          "fr": "Deep Sleep",
          "en": "Deep Sleep"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_nightrush.png",
        "description": {
          "fr": "Increase Night Rush's Sleep duration by 0.75 seconds and its Movement Speed bonus by 10%.",
          "en": "Increase Night Rush's Sleep duration by 0.75 seconds and its Movement Speed bonus by 10%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojuao0",
        "level": 16,
        "name": {
          "fr": "Plague Bats",
          "en": "Plague Bats"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_necrotic.png",
        "description": {
          "fr": "Necrotic Embrace unleashes a wave of bats in front of Mal'Ganis, dealing 81 (+4% per level) damage.",
          "en": "Necrotic Embrace unleashes a wave of bats in front of Mal'Ganis, dealing 81 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonzdq8",
        "level": 20,
        "name": {
          "fr": "Seeker Swarm",
          "en": "Seeker Swarm"
        },
        "icon": "assets/heroes/base_spells/malganis/images/talents/storm_ui_icon_malganis_ult_swarm.png",
        "description": {
          "fr": "Upon expiring, Carrion Swarm's bats seek nearby enemy Heroes, dealing 132 (+4% per level) damage and Sleeping them for 2.5 seconds.",
          "en": "Upon expiring, Carrion Swarm's bats seek nearby enemy Heroes, dealing 132 (+4% per level) damage and Sleeping them for 2.5 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "malthael",
    "enabled": false,
    "name": {
      "fr": "Malthael",
      "en": "Malthael"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_malthael.png",
    "headline": {
      "fr": "Bruiser anti-tank qui inflige des dégâts en pourcentage de vie.",
      "en": "Anti-tank bruiser who deals percentage-of-Health damage."
    },
    "gameplay": {
      "fr": "Malthael marque ses cibles puis récolte leurs âmes pour se soigner. Plus les ennemis ont de vie, plus il fait mal.",
      "en": "Malthael marks his targets, then reaps their souls to heal. The more Health enemies have, the harder he hits."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Marque du Faucheur",
          "en": "Reaper's Mark"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_reapersmark.png",
        "description": {
          "fr": "Tes attaques marquent les ennemis et infligent des dégâts continus.",
          "en": "Your attacks mark enemies and deal damage over time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Arrachage d'âme",
          "en": "Soul Rip"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_soulrip.png",
        "description": {
          "fr": "Récolte les âmes marquées : dégâts et soins.",
          "en": "Reaps marked souls: damage and healing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Frappe spectrale",
          "en": "Wraith Strike"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_wraithstrike.png",
        "description": {
          "fr": "Se téléporte sur une cible marquée.",
          "en": "Teleports to a marked target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Voile de mort",
          "en": "Death Shroud"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_deathshroud.png",
        "description": {
          "fr": "Nuage qui marque les ennemis et traverse les murs.",
          "en": "Cloud that marks enemies and passes through walls."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Âmes tourmentées",
          "en": "Tormented Souls"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_tormentedsoul.png",
        "description": {
          "fr": "Marque en continu tous les ennemis proches.",
          "en": "Continually marks all nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Derniers sacrements",
          "en": "Last Rites"
        },
        "icon": "assets/heroes/base_spells/malthael/images/spells/storm_ui_icon_malthael_lastrites.png",
        "description": {
          "fr": "Condamne un héros à perdre une part énorme de sa vie.",
          "en": "Condemns a Hero to lose a huge chunk of Health."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ta marque inflige des dégâts en % de vie : concentre les tanks.",
        "en": "Your mark deals %-Health damage: focus tanks."
      },
      {
        "fr": "Voile de mort permet de traverser les murs pour engager ou fuir.",
        "en": "Death Shroud lets you pass through walls to engage or escape."
      },
      {
        "fr": "Ne récolte les âmes qu'après avoir marqué plusieurs ennemis.",
        "en": "Only reap souls after marking several enemies."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Malthael]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jofwp0t",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jovnx32",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jolgf7h",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joonwcu",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo8wdyn",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo3wj93",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo51f7t",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jofwp0t",
        "level": 1,
        "name": {
          "fr": "Death's Reach",
          "en": "Death's Reach"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_wraithstrike.png",
        "description": {
          "fr": "Increase Wraith Strike's range by 35%.",
          "en": "Increase Wraith Strike's range by 35%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jovnx32",
        "level": 4,
        "name": {
          "fr": "Die Alone",
          "en": "Die Alone"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_soulrip.png",
        "description": {
          "fr": "Soul Rip deals 50% more damage to Heroes if it hits only one Hero.",
          "en": "Soul Rip deals 50% more damage to Heroes if it hits only one Hero."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolgf7h",
        "level": 7,
        "name": {
          "fr": "Cold Hand",
          "en": "Cold Hand"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_soulrip.png",
        "description": {
          "fr": "Soul Rip Slows enemies by 20% for 2.5 seconds.",
          "en": "Soul Rip Slows enemies by 20% for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joonwcu",
        "level": 10,
        "name": {
          "fr": "Tormented Souls",
          "en": "Tormented Souls"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_tormentedsoul.png",
        "description": {
          "fr": "Unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds.  When Tormented Souls is cast and when it expires, reset the cooldown of Wraith Strike.",
          "en": "Unleash a torrent of souls, continually applying Reaper's Mark to nearby enemies for 4 seconds.  When Tormented Souls is cast and when it expires, reset the cooldown of Wraith Strike."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8wdyn",
        "level": 13,
        "name": {
          "fr": "Soul Siphon",
          "en": "Soul Siphon"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_soulrip.png",
        "description": {
          "fr": "Increase Soul Rip's bonus healing from Heroes to 4.75% of the Hero's maximum Health.",
          "en": "Increase Soul Rip's bonus healing from Heroes to 4.75% of the Hero's maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3wj93",
        "level": 16,
        "name": {
          "fr": "Soul Collector",
          "en": "Soul Collector"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_soulrip.png",
        "description": {
          "fr": "Reduce Soul Rip's cooldown by 0.5 seconds and increase its range by 25%.",
          "en": "Reduce Soul Rip's cooldown by 0.5 seconds and increase its range by 25%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo51f7t",
        "level": 20,
        "name": {
          "fr": "Reaper of Souls",
          "en": "Reaper of Souls"
        },
        "icon": "assets/heroes/base_spells/malthael/images/talents/storm_ui_icon_malthael_tormentedsoul.png",
        "description": {
          "fr": "Increase Tormented Souls' duration by 2 seconds.  While Tormented Souls is active, Hero Takedowns refresh the duration.",
          "en": "Increase Tormented Souls' duration by 2 seconds.  While Tormented Souls is active, Hero Takedowns refresh the duration."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "medivh",
    "enabled": false,
    "name": {
      "fr": "Medivh",
      "en": "Medivh"
    },
    "role": "Support",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_medivh.png",
    "headline": {
      "fr": "Soutien de mobilité qui téléporte son équipe et bloque les dégâts.",
      "en": "Mobility support who teleports his team and blocks damage."
    },
    "gameplay": {
      "fr": "Medivh ouvre des portails pour créer des engagements impossibles, protège ses alliés avec Force de volonté et échappe à tout sous forme de corbeau.",
      "en": "Medivh opens portals to create impossible engages, protects allies with Force of Will, and escapes anything in Raven Form."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Forme de corbeau",
          "en": "Raven Form"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_ravenform.png",
        "description": {
          "fr": "Se transforme en corbeau, intouchable mais incapable d'agir.",
          "en": "Transform into a raven, untargetable but unable to act."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Faille arcanique",
          "en": "Arcane Rift"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_arcanemissile.png",
        "description": {
          "fr": "Projette une faille qui explose sur les ennemis.",
          "en": "Fires a rift that explodes on enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Force de volonté",
          "en": "Force of Will"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_forceofwill.png",
        "description": {
          "fr": "Protège un allié et absorbe les dégâts subis.",
          "en": "Shields an ally and absorbs damage taken."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Portail",
          "en": "Portal"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_portal.png",
        "description": {
          "fr": "Crée deux portails reliés que ton équipe peut emprunter.",
          "en": "Creates two linked portals your team can use."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Bombe polymorphe",
          "en": "Poly Bomb"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_polybomb.png",
        "description": {
          "fr": "Transforme les ennemis touchés en moutons en chaîne.",
          "en": "Turns hit enemies into sheep, spreading between them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Sceau de ligne tellurique",
          "en": "Ley Line Seal"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_leylineblast.png",
        "description": {
          "fr": "Une ligne d'énergie étourdit les ennemis touchés.",
          "en": "A ley line stuns enemies caught in it."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Forme de corbeau",
          "en": "Raven Form"
        },
        "icon": "assets/heroes/base_spells/medivh/images/spells/storm_ui_icon_medivh_mount.png",
        "description": {
          "fr": "Monture volante.",
          "en": "Flying mount."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Un portail bien placé permet une rotation ou une fuite impossible autrement.",
        "en": "A well-placed portal enables a rotation or escape nothing else can."
      },
      {
        "fr": "Force de volonté annule un gros sort ennemi : anticipe le lancement.",
        "en": "Force of Will negates a big enemy ability: anticipate the cast."
      },
      {
        "fr": "Forme de corbeau te rend intouchable : c'est ta sécurité permanente.",
        "en": "Raven Form makes you untargetable: it's your permanent safety."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Medivh]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jon3onf",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jof9o9n",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jotczzv",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joyw5wj",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo7dufs",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joyqpjq",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jowk9ga",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jon3onf",
        "level": 1,
        "name": {
          "fr": "Winds of Celerity",
          "en": "Winds of Celerity"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_ravenform.png",
        "description": {
          "fr": "Increases Raven Form's Movement Speed bonus by 50%.",
          "en": "Increases Raven Form's Movement Speed bonus by 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jof9o9n",
        "level": 4,
        "name": {
          "fr": "Mage Armor",
          "en": "Mage Armor"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_portal.png",
        "description": {
          "fr": "The first time an ally uses a Portal, they gain 30 Armor for 4 seconds, reducing their damage taken by 30%.",
          "en": "The first time an ally uses a Portal, they gain 30 Armor for 4 seconds, reducing their damage taken by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotczzv",
        "level": 7,
        "name": {
          "fr": "Mystic Assault",
          "en": "Mystic Assault"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_arcanemissile.png",
        "description": {
          "fr": "If Arcane Rift hits an enemy Hero, Medivh's next Basic Attack within 6 seconds deals 50% more damage and heals for 50% of the damage dealt.",
          "en": "If Arcane Rift hits an enemy Hero, Medivh's next Basic Attack within 6 seconds deals 50% more damage and heals for 50% of the damage dealt."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyw5wj",
        "level": 10,
        "name": {
          "fr": "Poly Bomb",
          "en": "Poly Bomb"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_polybomb.png",
        "description": {
          "fr": "Polymorph an enemy Hero for 2 seconds, Silencing them and making them unable to attack. On expiration, Poly Bomb spreads to other nearby enemy Heroes.",
          "en": "Polymorph an enemy Hero for 2 seconds, Silencing them and making them unable to attack. On expiration, Poly Bomb spreads to other nearby enemy Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7dufs",
        "level": 13,
        "name": {
          "fr": "Circle of Protection",
          "en": "Circle of Protection"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_forceofwill.png",
        "description": {
          "fr": "Force of Will also applies to allies near the target, but its cooldown is increased by 2 seconds.",
          "en": "Force of Will also applies to allies near the target, but its cooldown is increased by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyqpjq",
        "level": 16,
        "name": {
          "fr": "Arcane Charge",
          "en": "Arcane Charge"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_arcanemissile.png",
        "description": {
          "fr": "When Arcane Rift damages an enemy Hero, the next Arcane Rift deals 15% more damage.",
          "en": "When Arcane Rift damages an enemy Hero, the next Arcane Rift deals 15% more damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jowk9ga",
        "level": 20,
        "name": {
          "fr": "Glyph Of Poly Bomb",
          "en": "Glyph Of Poly Bomb"
        },
        "icon": "assets/heroes/base_spells/medivh/images/talents/storm_ui_icon_medivh_polybomb.png",
        "description": {
          "fr": "Poly Bomb explodes 1 second sooner and the spread radius is increased by 25%.",
          "en": "Poly Bomb explodes 1 second sooner and the spread radius is increased by 25%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "mei",
    "enabled": false,
    "name": {
      "fr": "Mei",
      "en": "Mei"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_meiow.png",
    "headline": {
      "fr": "Tank de zonage capable de couper une équipe en deux.",
      "en": "Zoning tank able to split a team in half."
    },
    "gameplay": {
      "fr": "Mei ralentit, aveugle et gèle les ennemis pour rendre chaque combat impossible à gagner pour eux. Cryostase la rend invulnérable au bon moment.",
      "en": "Mei slows, blinds and freezes enemies to make every fight unwinnable for them. Cryo-Freeze makes her invulnerable at the right moment."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Cryostase",
          "en": "Cryo-Freeze"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_trait.png",
        "description": {
          "fr": "Deviens invulnérable et regagne de la vie, mais sans pouvoir agir.",
          "en": "Become invulnerable and regenerate Health, but unable to act."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Aveuglement neigeux",
          "en": "Snow Blind"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_q_snowblind.png",
        "description": {
          "fr": "Projette de la neige qui aveugle et ralentit.",
          "en": "Throws snow that blinds and slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Blizzard",
          "en": "Blizzard"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_w_blizzard.png",
        "description": {
          "fr": "Zone de dégâts qui empile un ralentissement puis gèle.",
          "en": "Damage zone that stacks a slow, then freezes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Verglas",
          "en": "Icing"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_e1_slide.png",
        "description": {
          "fr": "Glisse en avant en poussant les ennemis touchés.",
          "en": "Slides forward, pushing enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Avalanche",
          "en": "Avalanche"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_r1_avalanche.png",
        "description": {
          "fr": "Gèle et fait des dégâts à tous les ennemis d'une grande zone.",
          "en": "Freezes and damages all enemies in a large area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Mur de glace",
          "en": "Ice Wall"
        },
        "icon": "assets/heroes/base_spells/mei/images/spells/storm_ui_icon_mei_r2_icewall.png",
        "description": {
          "fr": "Crée un mur infranchissable qui coupe le terrain.",
          "en": "Creates an impassable wall that cuts off terrain."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Cryostase te soigne et te rend invulnérable : utilise-la sur les gros dégâts.",
        "en": "Cryo-Freeze heals you and makes you invulnerable: use it on big damage."
      },
      {
        "fr": "Mur de glace peut isoler un ennemi ou bloquer une fuite complète.",
        "en": "Ice Wall can isolate one enemy or completely block an escape."
      },
      {
        "fr": "Verglas sert autant à engager qu'à repositionner un ennemi.",
        "en": "Icing is as good for engaging as for repositioning an enemy."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,MeiOW]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jozund0",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo1u1e4",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodby5o",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo83m74",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jonrqrp",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jobrpus",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo3p0uy",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jozund0",
        "level": 1,
        "name": {
          "fr": "Heavy Pack",
          "en": "Heavy Pack"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_q_snowblind.png",
        "description": {
          "fr": "Increases the duration of Snow Blind's Slow by 1.5 seconds. Each time Blizzard damages an enemy Hero, reduce the cooldown of Snow Blind by 0.5 seconds and gain 3 Mana.",
          "en": "Increases the duration of Snow Blind's Slow by 1.5 seconds. Each time Blizzard damages an enemy Hero, reduce the cooldown of Snow Blind by 0.5 seconds and gain 3 Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1u1e4",
        "level": 4,
        "name": {
          "fr": "Slushball",
          "en": "Slushball"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_q_snowblind.png",
        "description": {
          "fr": "Snow Blind deals 75% increased damage and Structures hit are disabled for 3 seconds.",
          "en": "Snow Blind deals 75% increased damage and Structures hit are disabled for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodby5o",
        "level": 7,
        "name": {
          "fr": "Induce Hibernation",
          "en": "Induce Hibernation"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_w_blizzard.png",
        "description": {
          "fr": "Blizzard reduces the damage dealt by enemy Heroes inside of its area by 40%.  When Blizzard ends, enemy Heroes still within its area gain this effect for an additional 4 seconds.",
          "en": "Blizzard reduces the damage dealt by enemy Heroes inside of its area by 40%.  When Blizzard ends, enemy Heroes still within its area gain this effect for an additional 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo83m74",
        "level": 10,
        "name": {
          "fr": "Avalanche",
          "en": "Avalanche"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_r1_avalanche.png",
        "description": {
          "fr": "After 0.5 seconds, roll a massive snowball that consumes enemy Heroes in its path. At the end of its path, the snowball crumbles, releasing the consumed Heroes, dealing 220 (+4% per level) damage and Stunning them for 0.5 seconds per Hero consumed.",
          "en": "After 0.5 seconds, roll a massive snowball that consumes enemy Heroes in its path. At the end of its path, the snowball crumbles, releasing the consumed Heroes, dealing 220 (+4% per level) damage and Stunning them for 0.5 seconds per Hero consumed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonrqrp",
        "level": 13,
        "name": {
          "fr": "Flurry",
          "en": "Flurry"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_w_blizzard.png",
        "description": {
          "fr": "While in her own Blizzard, Mei gains 50% increased Attack Speed and Blizzard's cooldown refreshes 125% faster. If Mei is in her own Blizzard when it ends, gain these bonuses for 3 additional seconds.",
          "en": "While in her own Blizzard, Mei gains 50% increased Attack Speed and Blizzard's cooldown refreshes 125% faster. If Mei is in her own Blizzard when it ends, gain these bonuses for 3 additional seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jobrpus",
        "level": 16,
        "name": {
          "fr": "Fresh Powder",
          "en": "Fresh Powder"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_q_snowblind.png",
        "description": {
          "fr": "Snow Blind gains an additional charge and its range is increased by 33%.",
          "en": "Snow Blind gains an additional charge and its range is increased by 33%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3p0uy",
        "level": 20,
        "name": {
          "fr": "Cascade",
          "en": "Cascade"
        },
        "icon": "assets/heroes/base_spells/mei/images/talents/storm_ui_icon_mei_r1_avalanche.png",
        "description": {
          "fr": "While traveling, Avalanche constantly launches a volley of untalented Snow Blind snowballs ahead of itself.  Passive: Reduce the cooldown of Avalanche by 30 seconds.",
          "en": "While traveling, Avalanche constantly launches a volley of untalented Snow Blind snowballs ahead of itself.  Passive: Reduce the cooldown of Avalanche by 30 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "mephisto",
    "enabled": false,
    "name": {
      "fr": "Méphisto",
      "en": "Mephisto"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_mephisto.png",
    "headline": {
      "fr": "Mage de zone qui se recharge en touchant plusieurs héros.",
      "en": "Area mage who refreshes cooldowns by hitting multiple Heroes."
    },
    "gameplay": {
      "fr": "Méphisto fait des dégâts de zone continus et réduit ses temps de recharge à chaque héros touché. Son Ombre lui permet d'entrer et de sortir sans risque.",
      "en": "Mephisto deals continuous area damage and reduces his cooldowns with every Hero hit. His Shade lets him get in and out safely."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Seigneur de la haine",
          "en": "Lord Of Hatred"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_hatred.png",
        "description": {
          "fr": "Toucher des héros réduit fortement tes temps de recharge.",
          "en": "Hitting Heroes greatly reduces your cooldowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Missile de crânes",
          "en": "Skull Missile"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_skull.png",
        "description": {
          "fr": "Crâne qui traverse les ennemis en ligne.",
          "en": "Skull that pierces enemies in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Nova de foudre",
          "en": "Lightning Nova"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_lightning.png",
        "description": {
          "fr": "Dégâts continus en zone autour de toi.",
          "en": "Continuous area damage around you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Ombre de Méphisto",
          "en": "Shade of Mephisto"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_shade.png",
        "description": {
          "fr": "Envoie une ombre puis reviens à ta position initiale.",
          "en": "Sends a shade, then returns you to your original position."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Consumer les âmes",
          "en": "Consume Souls"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_souls.png",
        "description": {
          "fr": "Inflige des dégâts à tous les héros ennemis de la carte.",
          "en": "Damages all enemy Heroes on the map."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Geôle de la haine",
          "en": "Durance of Hate"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/spells/storm_ui_icon_mephisto_durance.png",
        "description": {
          "fr": "Immobilise les ennemis touchés en ligne.",
          "en": "Roots enemies hit in a line."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Touche plusieurs héros pour recharger tes sorts en permanence.",
        "en": "Hit multiple Heroes to keep your cooldowns rolling."
      },
      {
        "fr": "Ombre de Méphisto : entre, lance tes sorts, reviens en sécurité.",
        "en": "Shade of Mephisto: go in, cast, then return to safety."
      },
      {
        "fr": "Consumer les âmes est global : sers-t'en pour aider une autre ligne.",
        "en": "Consume Souls is global: use it to help another lane."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Mephisto]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jorw9oy",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joc2v2m",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jomqnbw",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo7b7jw",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joql1f7",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joyk6sd",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo7dv9t",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jorw9oy",
        "level": 1,
        "name": {
          "fr": "Unyielding Power",
          "en": "Unyielding Power"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_skull.png",
        "description": {
          "fr": "Quest: Hit Heroes with Skull Missile.  Reward: After hitting 20 Heroes, increase Skull Missile's damage by 100.  Reward: After hitting 40 Heroes, Skull Missile gains an additional charge.",
          "en": "Quest: Hit Heroes with Skull Missile.  Reward: After hitting 20 Heroes, increase Skull Missile's damage by 100.  Reward: After hitting 40 Heroes, Skull Missile gains an additional charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joc2v2m",
        "level": 4,
        "name": {
          "fr": "Hateful Mending",
          "en": "Hateful Mending"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_skull.png",
        "description": {
          "fr": "Skull Missile grants 10 Mana and heals Mephisto for 70% of the damage it deals to Heroes.",
          "en": "Skull Missile grants 10 Mana and heals Mephisto for 70% of the damage it deals to Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomqnbw",
        "level": 7,
        "name": {
          "fr": "Ghastly Armor",
          "en": "Ghastly Armor"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_shade.png",
        "description": {
          "fr": "Shade of Mephisto grants 25 Armor while active and for 2.5 seconds after it ends.",
          "en": "Shade of Mephisto grants 25 Armor while active and for 2.5 seconds after it ends."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7b7jw",
        "level": 10,
        "name": {
          "fr": "Consume Souls",
          "en": "Consume Souls"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_souls.png",
        "description": {
          "fr": "Channel for 2.5 seconds, revealing all enemy Heroes. After the Channel completes, all enemy Heroes take 357 (+4% per level) damage and are Slowed by 25% for 2.5 seconds.",
          "en": "Channel for 2.5 seconds, revealing all enemy Heroes. After the Channel completes, all enemy Heroes take 357 (+4% per level) damage and are Slowed by 25% for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joql1f7",
        "level": 13,
        "name": {
          "fr": "Abhorred Skull",
          "en": "Abhorred Skull"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_skull.png",
        "description": {
          "fr": "Hitting a Hero with Skull Missile grants 25% Spell Power for 6 seconds. Skull Missile deals 40% more damage to Heroes under 50% Health.",
          "en": "Hitting a Hero with Skull Missile grants 25% Spell Power for 6 seconds. Skull Missile deals 40% more damage to Heroes under 50% Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyk6sd",
        "level": 16,
        "name": {
          "fr": "Lightning Reaction",
          "en": "Lightning Reaction"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_skull.png",
        "description": {
          "fr": "Skull Missile explodes on contact with Lightning Nova, dealing 138 (+4% per level) damage to nearby enemies.",
          "en": "Skull Missile explodes on contact with Lightning Nova, dealing 138 (+4% per level) damage to nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7dv9t",
        "level": 20,
        "name": {
          "fr": "Consumed by Hatred",
          "en": "Consumed by Hatred"
        },
        "icon": "assets/heroes/base_spells/mephisto/images/talents/storm_ui_icon_mephisto_souls.png",
        "description": {
          "fr": "Consume Souls deals bonus damage equal to 10% of the target's missing Health. If Consume Souls initial cast kills a Hero it will cast 1 additional time.",
          "en": "Consume Souls deals bonus damage equal to 10% of the target's missing Health. If Consume Souls initial cast kills a Hero it will cast 1 additional time."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "muradin",
    "enabled": false,
    "name": {
      "fr": "Muradin",
      "en": "Muradin"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_muradin.png",
    "headline": {
      "fr": "Tank robuste et polyvalent, parfait pour débuter.",
      "en": "Sturdy, versatile tank, perfect for beginners."
    },
    "gameplay": {
      "fr": "Muradin enchaîne Éclair foudroyant et Coup de tonnerre pour contrôler la zone, et se soigne en continu grâce à Second souffle.",
      "en": "Muradin chains Storm Bolt and Thunder Clap to control the area, healing continuously with Second Wind."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Second souffle",
          "en": "Second Wind"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_secondwind.png",
        "description": {
          "fr": "Régénère de la vie en continu, plus vite à faible vie.",
          "en": "Continuously regenerates Health, faster when low."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Éclair foudroyant",
          "en": "Storm Bolt"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_stormbolt.png",
        "description": {
          "fr": "Lance ton marteau, dégâts et étourdissement sur la première cible.",
          "en": "Throws your hammer, damaging and stunning the first target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Coup de tonnerre",
          "en": "Thunder Clap"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_thunderclap.png",
        "description": {
          "fr": "Dégâts de zone et ralentissement autour de toi.",
          "en": "AoE damage and slow around you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Lancer de nain",
          "en": "Dwarf Toss"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_dwarftoss.png",
        "description": {
          "fr": "Bondit sur une courte distance en infligeant des dégâts.",
          "en": "Leaps a short distance, dealing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Avatar",
          "en": "Avatar"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_avatar.png",
        "description": {
          "fr": "Gagne énormément de vie et renforce tes capacités.",
          "en": "Gain massive Health and empower your abilities."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Grand droit",
          "en": "Haymaker"
        },
        "icon": "assets/heroes/base_spells/muradin/images/spells/storm_ui_icon_muradin_haymaker.png",
        "description": {
          "fr": "Frappe un ennemi et le projette loin en arrière.",
          "en": "Punches an enemy, knocking them far back."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Recule quelques instants hors des dégâts pour relancer Second souffle.",
        "en": "Step out of damage for a moment to let Second Wind kick in."
      },
      {
        "fr": "Grand droit projette un ennemi vers ton équipe : vise bien la direction.",
        "en": "Haymaker knocks an enemy toward your team: aim the direction carefully."
      },
      {
        "fr": "Lancer de nain sert aussi à fuir un mauvais engagement.",
        "en": "Dwarf Toss is also a great escape from a bad engage."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Muradin]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo7bniz",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jot9dra",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joz2g6u",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joscnss",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo8jg8f",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jodckhu",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo3ylhs",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo7bniz",
        "level": 1,
        "name": {
          "fr": "Perfect Storm",
          "en": "Perfect Storm"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_stormbolt.png",
        "description": {
          "fr": "Quest: Every time Muradin hits an enemy Hero with a Basic Attack, increase Storm Bolt's damage by 0.75. If an enemy Hero is killed within 3 seconds of being hit by a Storm Bolt increase its damage by an additional 10.",
          "en": "Quest: Every time Muradin hits an enemy Hero with a Basic Attack, increase Storm Bolt's damage by 0.75. If an enemy Hero is killed within 3 seconds of being hit by a Storm Bolt increase its damage by an additional 10."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jot9dra",
        "level": 4,
        "name": {
          "fr": "Sledgehammer",
          "en": "Sledgehammer"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_stormbolt.png",
        "description": {
          "fr": "Stormbolt deals 350% damage to non-Heroic enemies. Increase Storm Bolt's cooldown reduction from 1 second to 1.25 seconds per Basic Attack.",
          "en": "Stormbolt deals 350% damage to non-Heroic enemies. Increase Storm Bolt's cooldown reduction from 1 second to 1.25 seconds per Basic Attack."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joz2g6u",
        "level": 7,
        "name": {
          "fr": "Heavy Impact",
          "en": "Heavy Impact"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_dwarftoss.png",
        "description": {
          "fr": "Enemies hit by Dwarf Toss are Slowed by 80% for 1.5 seconds.",
          "en": "Enemies hit by Dwarf Toss are Slowed by 80% for 1.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joscnss",
        "level": 10,
        "name": {
          "fr": "Avatar",
          "en": "Avatar"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_avatar.png",
        "description": {
          "fr": "Transform for 20 seconds, gaining 1000 (+4% per level) Health.",
          "en": "Transform for 20 seconds, gaining 1000 (+4% per level) Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8jg8f",
        "level": 13,
        "name": {
          "fr": "Bronzebeard Rage",
          "en": "Bronzebeard Rage"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_talent_burningrage.png",
        "description": {
          "fr": "Deal 15 (+4% per level) damage per second to nearby enemies and heal for 75% of the damage dealt. Hitting an enemy Hero with Storm Bolt increase this damage by 200% for 3 seconds.",
          "en": "Deal 15 (+4% per level) damage per second to nearby enemies and heal for 75% of the damage dealt. Hitting an enemy Hero with Storm Bolt increase this damage by 200% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodckhu",
        "level": 16,
        "name": {
          "fr": "Dwarf Launch",
          "en": "Dwarf Launch"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_dwarftoss.png",
        "description": {
          "fr": "Increase the range of Dwarf Toss by 40%. Hitting an enemy Hero with Dwarf Toss reduces its cooldown by 2 seconds.",
          "en": "Increase the range of Dwarf Toss by 40%. Hitting an enemy Hero with Dwarf Toss reduces its cooldown by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3ylhs",
        "level": 20,
        "name": {
          "fr": "Unstoppable Force",
          "en": "Unstoppable Force"
        },
        "icon": "assets/heroes/base_spells/muradin/images/talents/storm_ui_icon_muradin_avatar.png",
        "description": {
          "fr": "While active, Avatar grants 20 Armor and causes Muradin's Basic Attacks to reduce the cooldowns of Thunder Clap and Dwarf Toss by 0.75 seconds.",
          "en": "While active, Avatar grants 20 Armor and causes Muradin's Basic Attacks to reduce the cooldowns of Thunder Clap and Dwarf Toss by 0.75 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "murky",
    "enabled": false,
    "name": {
      "fr": "Bourbie",
      "en": "Murky"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_murky.png",
    "headline": {
      "fr": "Nuisance permanente qui revient sans arrêt grâce à son œuf.",
      "en": "Endless nuisance who keeps coming back thanks to his egg."
    },
    "gameplay": {
      "fr": "Murky pousse les lignes et harcèle l'ennemi. Sa mort ne coûte pas d'expérience à son équipe tant que son œuf est bien caché.",
      "en": "Murky pushes lanes and harasses the enemy. His death costs his team no experience as long as his egg is well hidden."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Pondre un œuf",
          "en": "Spawn Egg"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_trait_spawnegg.png",
        "description": {
          "fr": "Pond un œuf : tu ressuscites dessus à ta mort.",
          "en": "Lays an egg: you respawn at it when you die."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Vase",
          "en": "Slime"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_slime.png",
        "description": {
          "fr": "Laisse une flaque qui blesse et ralentit.",
          "en": "Leaves a puddle that damages and slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Poisson-globe",
          "en": "Pufferfish"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_pufferfish.png",
        "description": {
          "fr": "Pose un poisson qui explose en zone.",
          "en": "Places a fish that explodes in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Bulle de sécurité",
          "en": "Safety Bubble"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_safetybubble.png",
        "description": {
          "fr": "Deviens invulnérable pendant un court instant.",
          "en": "Become invulnerable for a short time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Marche des murlocs",
          "en": "March of the Murlocs"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_marchofthemurlocs.png",
        "description": {
          "fr": "Une horde de murlocs traverse la zone.",
          "en": "A horde of murlocs charges across the area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Pieuvre-attaque",
          "en": "Octo-Grab"
        },
        "icon": "assets/heroes/base_spells/murky/images/spells/storm_ui_icon_murky_octograb.png",
        "description": {
          "fr": "Immobilise un héros ennemi pendant plusieurs secondes.",
          "en": "Stuns an enemy Hero for several seconds."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Cache toujours ton œuf dans un endroit imprévisible.",
        "en": "Always hide your egg somewhere unpredictable."
      },
      {
        "fr": "Poisson-globe étourdit : combine-le avec Bulle de sécurité.",
        "en": "Pufferfish stuns: combine it with Safety Bubble."
      },
      {
        "fr": "Ta mort ne donne pas d'expérience : joue agressivement.",
        "en": "Your death gives no experience: play aggressively."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Murky]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo7tthp",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0iw3z",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo7aekv",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jobrhx0",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo7kjnl",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jobezln",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joy9px8",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo7tthp",
        "level": 1,
        "name": {
          "fr": "Fish Eye",
          "en": "Fish Eye"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_trait_spawnegg.png",
        "description": {
          "fr": "Egg's Health is increased by 100%, its sight radius is increased by 300% and it can see Stealthed enemies.  Passive: Spawning from his Egg increases Murky's mount speed to 45% for 5 seconds.",
          "en": "Egg's Health is increased by 100%, its sight radius is increased by 300% and it can see Stealthed enemies.  Passive: Spawning from his Egg increases Murky's mount speed to 45% for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0iw3z",
        "level": 4,
        "name": {
          "fr": "Slime Time",
          "en": "Slime Time"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_slime.png",
        "description": {
          "fr": "Quest: Slime enemy Heroes that are already Slimed.  Reward: After Sliming 10 Heroes, increase Slime's bonus damage by 125.  Reward: After Sliming 20 Heroes, increase Slime's slow amount to 30%.",
          "en": "Quest: Slime enemy Heroes that are already Slimed.  Reward: After Sliming 10 Heroes, increase Slime's bonus damage by 125.  Reward: After Sliming 20 Heroes, increase Slime's slow amount to 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7aekv",
        "level": 7,
        "name": {
          "fr": "Black Lagoon",
          "en": "Black Lagoon"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_slime.png",
        "description": {
          "fr": "Increase Slime's radius by 30%.",
          "en": "Increase Slime's radius by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jobrhx0",
        "level": 10,
        "name": {
          "fr": "March of the Murlocs",
          "en": "March of the Murlocs"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_marchofthemurlocs.png",
        "description": {
          "fr": "After 0.75 seconds, Murky commands a legion of Murlocs to march in a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals 125 (+4% per level) damage and slows its target by 15% for 5 seconds. Murlocs deal 50% damage to Structures.",
          "en": "After 0.75 seconds, Murky commands a legion of Murlocs to march in a target direction, each one leaping onto the first enemy Hero or Structure they find. Each Murloc deals 125 (+4% per level) damage and slows its target by 15% for 5 seconds. Murlocs deal 50% damage to Structures."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7kjnl",
        "level": 13,
        "name": {
          "fr": "Rejuvenating Bubble",
          "en": "Rejuvenating Bubble"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_safetybubble.png",
        "description": {
          "fr": "Safety Bubble restores 40% of Murky's maximum Health.",
          "en": "Safety Bubble restores 40% of Murky's maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jobezln",
        "level": 16,
        "name": {
          "fr": "Toxic Buildup",
          "en": "Toxic Buildup"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_slime.png",
        "description": {
          "fr": "Every 3rd consecutive Basic Attack against an enemy Hero causes a free Slime to be cast upon them.",
          "en": "Every 3rd consecutive Basic Attack against an enemy Hero causes a free Slime to be cast upon them."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joy9px8",
        "level": 20,
        "name": {
          "fr": "Never-Ending Murlocs",
          "en": "Never-Ending Murlocs"
        },
        "icon": "assets/heroes/base_spells/murky/images/talents/storm_ui_icon_murky_marchofthemurlocs.png",
        "description": {
          "fr": "March of the Murlocs can be channeled, sending little Murlocs indefinitely.",
          "en": "March of the Murlocs can be channeled, sending little Murlocs indefinitely."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "nazeebo",
    "enabled": false,
    "name": {
      "fr": "Nazeebo",
      "en": "Nazeebo"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_witchdoctor.png",
    "headline": {
      "fr": "Mage de zone qui devient monstrueux en fin de partie.",
      "en": "Area mage who becomes monstrous late game."
    },
    "gameplay": {
      "fr": "Nazeebo accumule des points de vie en tuant des sbires grâce à sa quête, et couvre le terrain d'araignées, de crapauds et de murs de zombies.",
      "en": "Nazeebo stacks Health by killing minions through his quest and covers the ground with spiders, toads, and zombie walls."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Rituel vaudou",
          "en": "Voodoo Ritual"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_voodooritual.png",
        "description": {
          "fr": "Empoisonne les ennemis ; les sbires tués accumulent ta quête.",
          "en": "Poisons enemies; slain minions stack your quest."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Araignées de cadavre",
          "en": "Corpse Spiders"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_corpsespider.png",
        "description": {
          "fr": "Invoque des araignées qui poursuivent les ennemis.",
          "en": "Summons spiders that chase enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Mur de zombies",
          "en": "Zombie Wall"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_zombiewall.png",
        "description": {
          "fr": "Emprisonne les ennemis dans un cercle de zombies.",
          "en": "Traps enemies inside a ring of zombies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Peste de crapauds",
          "en": "Plague of Toads"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_plagueoftoads.png",
        "description": {
          "fr": "Crapauds qui se propagent et explosent.",
          "en": "Toads that spread and explode."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Gargantuesque",
          "en": "Gargantuan"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_gargantuan.png",
        "description": {
          "fr": "Invoque un géant qui combat pour toi.",
          "en": "Summons a giant that fights for you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Esprit vorace",
          "en": "Ravenous Spirit"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/spells/storm_ui_icon_nazeebo_ravenousspirit.png",
        "description": {
          "fr": "Esprit canalisé qui inflige d'énormes dégâts de zone.",
          "en": "Channeled spirit dealing huge area damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Accumule ta quête sur les sbires dès les premières minutes.",
        "en": "Start stacking your quest on minions from the first minutes."
      },
      {
        "fr": "Mur de zombies bloque une fuite ou coupe un plongeur.",
        "en": "Zombie Wall blocks an escape or cuts off a diver."
      },
      {
        "fr": "Esprit vorace est très puissant, mais te laisse immobile : protège-toi.",
        "en": "Ravenous Spirit is very strong but leaves you channeling: stay safe."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,WitchDoctor]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jox2oe0",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jollflx",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo6ym40",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo3fl6c",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jokwyx0",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jojxk2w",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jonokbk",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jox2oe0",
        "level": 1,
        "name": {
          "fr": "Widowmakers",
          "en": "Widowmakers"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
        "description": {
          "fr": "Enemies hit by Corpse Spiders' jar are Slowed by 25% for 1 second.  Reward: After Corpse Spiders attack Heroes 100 times, their attack damage is increased by 25% and their duration is increased by 1 second.",
          "en": "Enemies hit by Corpse Spiders' jar are Slowed by 25% for 1 second.  Reward: After Corpse Spiders attack Heroes 100 times, their attack damage is increased by 25% and their duration is increased by 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jollflx",
        "level": 4,
        "name": {
          "fr": "Hexed Crawlers",
          "en": "Hexed Crawlers"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
        "description": {
          "fr": "Corpse Spiders restore 1% of Nazeebo's maximum Health and Mana when they attack an enemy Hero.",
          "en": "Corpse Spiders restore 1% of Nazeebo's maximum Health and Mana when they attack an enemy Hero."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6ym40",
        "level": 7,
        "name": {
          "fr": "Spirit of Arachyr",
          "en": "Spirit of Arachyr"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
        "description": {
          "fr": "The number of Corpse Spiders spawned is increased from 3 to 4. If Corpse Spiders' jar hits only one enemy, it creates an additional spider.",
          "en": "The number of Corpse Spiders spawned is increased from 3 to 4. If Corpse Spiders' jar hits only one enemy, it creates an additional spider."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3fl6c",
        "level": 10,
        "name": {
          "fr": "Gargantuan",
          "en": "Gargantuan"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_gargantuan.png",
        "description": {
          "fr": "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% per level) damage when summoned, attacks for 140 (+4% per level) damage, and can be ordered to stomp nearby enemies. The Gargantuan's Stomp deals 140 (+4% per level) damage and Slows by 30% for 2 seconds.",
          "en": "Summon a Gargantuan to guard an area for 20 seconds. Deals 100 (+4% per level) damage when summoned, attacks for 140 (+4% per level) damage, and can be ordered to stomp nearby enemies. The Gargantuan's Stomp deals 140 (+4% per level) damage and Slows by 30% for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokwyx0",
        "level": 13,
        "name": {
          "fr": "Guardian Toads",
          "en": "Guardian Toads"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_plagueoftoads.png",
        "description": {
          "fr": "Hitting an enemy Hero with Plague of Toads grants 30 Armor for 3 seconds, stacking up to 6 seconds.",
          "en": "Hitting an enemy Hero with Plague of Toads grants 30 Armor for 3 seconds, stacking up to 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojxk2w",
        "level": 16,
        "name": {
          "fr": "Spider Colony",
          "en": "Spider Colony"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_corpsespider.png",
        "description": {
          "fr": "Corpse Spider Attacks against Heroes reduce the cooldown of Nazeebo's Basic Abilities by 0.125 seconds.",
          "en": "Corpse Spider Attacks against Heroes reduce the cooldown of Nazeebo's Basic Abilities by 0.125 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonokbk",
        "level": 20,
        "name": {
          "fr": "Humongoid",
          "en": "Humongoid"
        },
        "icon": "assets/heroes/base_spells/nazeebo/images/talents/storm_ui_icon_nazeebo_gargantuan.png",
        "description": {
          "fr": "Gargantuan Stomp's area is increased by 25% and its Slow amount is increased to 50%.  Passive: Reduce Gargantuan's cooldown by 40 seconds and its Mana cost by 50%.",
          "en": "Gargantuan Stomp's area is increased by 25% and its Slow amount is increased to 50%.  Passive: Reduce Gargantuan's cooldown by 40 seconds and its Mana cost by 50%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "nova",
    "enabled": false,
    "name": {
      "fr": "Nova",
      "en": "Nova"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_nova.png",
    "headline": {
      "fr": "Sniper furtive qui supprime une cible isolée.",
      "en": "Stealth sniper who deletes an isolated target."
    },
    "gameplay": {
      "fr": "Nova reste invisible et cherche l'ennemi hors de position pour l'éliminer d'un burst. Elle offre aussi une excellente vision de carte.",
      "en": "Nova stays cloaked and hunts out-of-position enemies to burst them down. She also provides excellent map vision."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Camouflage permanent",
          "en": "Permanent Cloak"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_personalcloaking.png",
        "description": {
          "fr": "Tu es invisible en permanence hors combat.",
          "en": "You are permanently cloaked out of combat."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tir de précision",
          "en": "Snipe"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_snipe.png",
        "description": {
          "fr": "Tir puissant sur une cible.",
          "en": "Powerful shot on a target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Tir paralysant",
          "en": "Pinning Shot"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_pinningshot.png",
        "description": {
          "fr": "Blesse et ralentit fortement une cible.",
          "en": "Damages and heavily slows a target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Leurre holographique",
          "en": "Holo Decoy"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_holodecoy.png",
        "description": {
          "fr": "Crée un clone qui trompe les ennemis.",
          "en": "Creates a clone that fools enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Triple tir",
          "en": "Triple Tap"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_tripletap.png",
        "description": {
          "fr": "Trois tirs successifs sur une cible unique.",
          "en": "Three successive shots on a single target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Frappe de précision",
          "en": "Precision Strike"
        },
        "icon": "assets/heroes/base_spells/nova/images/spells/storm_ui_icon_nova_orbitalstrike.png",
        "description": {
          "fr": "Frappe orbitale à très longue portée.",
          "en": "Very long-range orbital strike."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne révèle jamais ta position pour un peu de dégâts.",
        "en": "Never reveal your position for a little chip damage."
      },
      {
        "fr": "Ton leurre trompe l'ennemi et te fait gagner du temps.",
        "en": "Your decoy fools the enemy and buys you time."
      },
      {
        "fr": "Frappe de précision est excellente pour sécuriser une prise à distance.",
        "en": "Precision Strike is excellent to secure a kill from afar."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Nova]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joh3ntg",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jomeujf",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo1j6ht",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jov3424",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jonpwmy",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joqimxc",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joenjmr",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joh3ntg",
        "level": 1,
        "name": {
          "fr": "Longshot",
          "en": "Longshot"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_pinningshot.png",
        "description": {
          "fr": "Increases the cast range of Pinning Shot by 30%. Pinning Shot also increases the range of Nova's next Basic Attack by 2.",
          "en": "Increases the cast range of Pinning Shot by 30%. Pinning Shot also increases the range of Nova's next Basic Attack by 2."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomeujf",
        "level": 4,
        "name": {
          "fr": "Rapid Projection",
          "en": "Rapid Projection"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_holodecoy.png",
        "description": {
          "fr": "Reduces Holo Decoy's cooldown and Mana cost by 60%.",
          "en": "Reduces Holo Decoy's cooldown and Mana cost by 60%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1j6ht",
        "level": 7,
        "name": {
          "fr": "Perfect Shot",
          "en": "Perfect Shot"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_snipe.png",
        "description": {
          "fr": "Hitting an enemy with Snipe reduces its cooldown by 2 seconds and refunds half its Mana cost, doubled against enemy Heroes.",
          "en": "Hitting an enemy with Snipe reduces its cooldown by 2 seconds and refunds half its Mana cost, doubled against enemy Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jov3424",
        "level": 10,
        "name": {
          "fr": "Triple Tap",
          "en": "Triple Tap"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_tripletap.png",
        "description": {
          "fr": "Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for 372 (+4% per level) damage each.",
          "en": "Locks in on the target Hero, then fires 3 shots that hit the first Hero or Structure they come in contact with for 372 (+4% per level) damage each."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jonpwmy",
        "level": 13,
        "name": {
          "fr": "Psionic Efficiency",
          "en": "Psionic Efficiency"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_snipe.png",
        "description": {
          "fr": "Snipe's range is increased by 15% and hitting a Hero grants an additional stack of Precision Sniper.",
          "en": "Snipe's range is increased by 15% and hitting a Hero grants an additional stack of Precision Sniper."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqimxc",
        "level": 16,
        "name": {
          "fr": "Explosive Round",
          "en": "Explosive Round"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_snipe.png",
        "description": {
          "fr": "Snipe also deals 90% damage to enemies near the impact.",
          "en": "Snipe also deals 90% damage to enemies near the impact."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joenjmr",
        "level": 20,
        "name": {
          "fr": "Fast Reload",
          "en": "Fast Reload"
        },
        "icon": "assets/heroes/base_spells/nova/images/talents/storm_ui_icon_nova_tripletap.png",
        "description": {
          "fr": "Triple Tap's cooldown is reset if it kills an enemy Hero.",
          "en": "Triple Tap's cooldown is reset if it kills an enemy Hero."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "orphea",
    "enabled": false,
    "name": {
      "fr": "Orphea",
      "en": "Orphea"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_orphea.png",
    "headline": {
      "fr": "Mage de combo qui se soigne en touchant ses cibles.",
      "en": "Combo mage who heals herself by hitting targets."
    },
    "gameplay": {
      "fr": "Orphea enchaîne Valse d'ombre pour se repositionner, puis convertit ses charges de chaos en dégâts renforcés et en soins.",
      "en": "Orphea uses Shadow Waltz to reposition, then converts her chaos stacks into empowered damage and healing."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Chaos débordant",
          "en": "Overflowing Chaos"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_trait.png",
        "description": {
          "fr": "Tes sorts génèrent des charges qui renforcent le suivant.",
          "en": "Your abilities build stacks that empower the next one."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Valse d'ombre",
          "en": "Shadow Waltz"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_q.png",
        "description": {
          "fr": "Projectile qui te propulse si tu touches.",
          "en": "Projectile that dashes you forward on hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Croc",
          "en": "Chomp"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_w.png",
        "description": {
          "fr": "Morsure de zone qui te soigne.",
          "en": "Area bite that heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Effroi",
          "en": "Dread"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_e.png",
        "description": {
          "fr": "Vague en cône qui blesse et ralentit.",
          "en": "Cone wave that damages and slows."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Mâchoires broyeuses",
          "en": "Crushing Jaws"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_ult_thrasher.png",
        "description": {
          "fr": "Attire les ennemis d'une zone et les étourdit.",
          "en": "Pulls enemies in an area together and stuns them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Festin éternel",
          "en": "Eternal Feast"
        },
        "icon": "assets/heroes/base_spells/orphea/images/spells/storm_ui_icon_orphea_ult_darkfall.png",
        "description": {
          "fr": "Explosions répétées dans une zone.",
          "en": "Repeated explosions in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Toucher avec Valse d'ombre te donne un déplacement supplémentaire.",
        "en": "Hitting with Shadow Waltz grants you an extra dash."
      },
      {
        "fr": "Consomme tes charges de chaos avec Croc : c'est ton soin principal.",
        "en": "Spend your chaos stacks with Chomp: it's your main self-heal."
      },
      {
        "fr": "Mâchoires broyeuses est un contrôle majeur pour ton équipe.",
        "en": "Crushing Jaws is a major setup tool for your team."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Orphea]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo7t285",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jocvlax",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joduut5",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joj1l8u",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo5xxj4",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jofqycp",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo88d58",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo7t285",
        "level": 1,
        "name": {
          "fr": "En Pointe",
          "en": "En Pointe"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_q.png",
        "description": {
          "fr": "Shadow Waltz deals an increased 90% damage to enemies hit by its end and grants 1 additional Chaos.",
          "en": "Shadow Waltz deals an increased 90% damage to enemies hit by its end and grants 1 additional Chaos."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jocvlax",
        "level": 4,
        "name": {
          "fr": "Allegrissimo",
          "en": "Allegrissimo"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_q.png",
        "description": {
          "fr": "Reduce the cooldown of Shadow Waltz by 1 second.  Hitting Heroes with the end of Shadow Waltz sets its cooldown to 0.75 seconds.",
          "en": "Reduce the cooldown of Shadow Waltz by 1 second.  Hitting Heroes with the end of Shadow Waltz sets its cooldown to 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joduut5",
        "level": 7,
        "name": {
          "fr": "Insatiable",
          "en": "Insatiable"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_w.png",
        "description": {
          "fr": "Hitting a Hero with Chomp sets its cooldown to 2 seconds.",
          "en": "Hitting a Hero with Chomp sets its cooldown to 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joj1l8u",
        "level": 10,
        "name": {
          "fr": "Eternal Feast",
          "en": "Eternal Feast"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_ult_darkfall.png",
        "description": {
          "fr": "After 1.5 seconds, deal 210 (+4% per level) damage in an area. Eternal Feast repeats every 1 second as long as it hits an enemy Hero.",
          "en": "After 1.5 seconds, deal 210 (+4% per level) damage in an area. Eternal Feast repeats every 1 second as long as it hits an enemy Hero."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo5xxj4",
        "level": 13,
        "name": {
          "fr": "Determination",
          "en": "Determination"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_q.png",
        "description": {
          "fr": "After dashing with Shadow Waltz, Orphea gains 50 Spell Armor against the next enemy Ability, stacking up to 2 times. While Orphea has Determination, her Physical damage is increased by 15%.",
          "en": "After dashing with Shadow Waltz, Orphea gains 50 Spell Armor against the next enemy Ability, stacking up to 2 times. While Orphea has Determination, her Physical damage is increased by 15%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofqycp",
        "level": 16,
        "name": {
          "fr": "Bond of Anguish",
          "en": "Bond of Anguish"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_q.png",
        "description": {
          "fr": "Shadow Waltz deals bonus damage to Heroes equal to 3% of their maximum Health, healing Orphea for 50% of damage dealt.",
          "en": "Shadow Waltz deals bonus damage to Heroes equal to 3% of their maximum Health, healing Orphea for 50% of damage dealt."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo88d58",
        "level": 20,
        "name": {
          "fr": "Monster Within",
          "en": "Monster Within"
        },
        "icon": "assets/heroes/base_spells/orphea/images/talents/storm_ui_icon_orphea_ult_darkfall.png",
        "description": {
          "fr": "Eternal Feast grants 1 Chaos each time it hits a Hero. While Eternal Feast is active and for 5 seconds afterwards, Orphea's Basic Abilities recharge 150% faster.",
          "en": "Eternal Feast grants 1 Chaos each time it hits a Hero. While Eternal Feast is active and for 5 seconds afterwards, Orphea's Basic Abilities recharge 150% faster."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "probius",
    "enabled": false,
    "name": {
      "fr": "EDN-OS",
      "en": "Probius"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_probius.png",
    "headline": {
      "fr": "Spécialiste de zonage qui rend un couloir infranchissable.",
      "en": "Zoning specialist who makes a corridor impassable."
    },
    "gameplay": {
      "fr": "Probius pose pylônes et canons photoniques pour tenir une zone, et empile ses Failles de distorsion pour punir toute approche.",
      "en": "Probius sets up pylons and photon cannons to hold an area and stacks Warp Rifts to punish any approach."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Invocation de pylône",
          "en": "Warp In Pylon"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_warpinpylon.png",
        "description": {
          "fr": "Pose un pylône qui alimente tes structures.",
          "en": "Places a pylon that powers your structures."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Impulsion perturbatrice",
          "en": "Disruption Pulse"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_disruptionpulse.png",
        "description": {
          "fr": "Projectile qui traverse les ennemis.",
          "en": "Projectile that pierces enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Faille de distorsion",
          "en": "Warp Rift"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_warprift.png",
        "description": {
          "fr": "Faille qui explose et étourdit.",
          "en": "Rift that detonates and stuns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Canon photonique",
          "en": "Photon Cannon"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_photoncannon.png",
        "description": {
          "fr": "Construit une tourelle près d'un pylône.",
          "en": "Builds a turret near a pylon."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Surcharge de pylône",
          "en": "Pylon Overcharge"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_pylonovercharge.png",
        "description": {
          "fr": "Ton pylône devient une tourelle très puissante.",
          "en": "Your pylon becomes a very powerful turret."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Barrière du néant",
          "en": "Null Gate"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_voidgate.png",
        "description": {
          "fr": "Mur d'énergie qui ralentit fortement les ennemis.",
          "en": "Wall of energy that heavily slows enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Ruée de l'ouvrier",
          "en": "Worker Rush"
        },
        "icon": "assets/heroes/base_spells/probius/images/spells/storm_ui_icon_probius_mount.png",
        "description": {
          "fr": "Se déplace plus vite hors combat.",
          "en": "Move faster out of combat."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tes structures ont besoin d'un pylône : place-le d'abord.",
        "en": "Your structures need a pylon: place it first."
      },
      {
        "fr": "Faille de distorsion étourdit une fois déclenchée : combine-la.",
        "en": "Warp Rift stuns when triggered: combine it with your team."
      },
      {
        "fr": "Barrière du néant coupe totalement un couloir.",
        "en": "Null Gate completely seals a corridor."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Probius]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joz1r77",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo0o2cb",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6johvn74",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joprq3m",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jolgrku",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jok6tla",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6joufyqm",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joz1r77",
        "level": 1,
        "name": {
          "fr": "Echo Pulse",
          "en": "Echo Pulse"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_disruptionpulse.png",
        "description": {
          "fr": "Disruption Pulse now returns to Probius 1.25 seconds after reaching its target, dealing 100% damage on the return trip.",
          "en": "Disruption Pulse now returns to Probius 1.25 seconds after reaching its target, dealing 100% damage on the return trip."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0o2cb",
        "level": 4,
        "name": {
          "fr": "Photon Barrier",
          "en": "Photon Barrier"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_photoncannon.png",
        "description": {
          "fr": "While a Photon Cannon is alive and powered, Probius gains 40 Spell Armor.",
          "en": "While a Photon Cannon is alive and powered, Probius gains 40 Spell Armor."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johvn74",
        "level": 7,
        "name": {
          "fr": "Particle Accelerator",
          "en": "Particle Accelerator"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_disruptionpulse.png",
        "description": {
          "fr": "After hitting 3 Heroes with Disruption Pulse, the next Warp Rift detonated by a Disruption Pulse fires 4 additional pulses that deal 78 (+5% per level) damage from the impact location in different directions.  Passive: Reduce the cooldown of Disruption Pulse by 0.5 seconds.",
          "en": "After hitting 3 Heroes with Disruption Pulse, the next Warp Rift detonated by a Disruption Pulse fires 4 additional pulses that deal 78 (+5% per level) damage from the impact location in different directions.  Passive: Reduce the cooldown of Disruption Pulse by 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joprq3m",
        "level": 10,
        "name": {
          "fr": "Pylon Overcharge",
          "en": "Pylon Overcharge"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_pylonovercharge.png",
        "description": {
          "fr": "For 8 seconds, increase the size of Pylon power fields and allow them to attack enemy Heroes within it for 96 (+4% per level) damage per second. Pylons are Invulnerable for the duration.",
          "en": "For 8 seconds, increase the size of Pylon power fields and allow them to attack enemy Heroes within it for 96 (+4% per level) damage per second. Pylons are Invulnerable for the duration."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jolgrku",
        "level": 13,
        "name": {
          "fr": "Aggressive Matrix",
          "en": "Aggressive Matrix"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_warpinpylon.png",
        "description": {
          "fr": "Pylon's Power Field grants allied Heroes 35% increased Attack Damage.",
          "en": "Pylon's Power Field grants allied Heroes 35% increased Attack Damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok6tla",
        "level": 16,
        "name": {
          "fr": "Quantum Entanglement",
          "en": "Quantum Entanglement"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_warprift.png",
        "description": {
          "fr": "Enemies continue to be slowed for 3 seconds after their last contact with a Warp Rift.",
          "en": "Enemies continue to be slowed for 3 seconds after their last contact with a Warp Rift."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joufyqm",
        "level": 20,
        "name": {
          "fr": "Construct Additional Pylons",
          "en": "Construct Additional Pylons"
        },
        "icon": "assets/heroes/base_spells/probius/images/talents/storm_ui_icon_probius_pylonovercharge.png",
        "description": {
          "fr": "Probius can now have up to 3 active Pylons, and increase the damage of Pylon Overcharge by 25%.",
          "en": "Probius can now have up to 3 active Pylons, and increase the damage of Pylon Overcharge by 25%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "qhira",
    "enabled": false,
    "name": {
      "fr": "Qhira",
      "en": "Qhira"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_nexushunter.png",
    "headline": {
      "fr": "Assassin de mêlée qui inflige des saignements et rattrape tout le monde.",
      "en": "Melee assassin who stacks bleeds and catches anyone."
    },
    "gameplay": {
      "fr": "Qhira applique des saignements avec ses attaques, se déplace avec son grappin et isole une cible avec Balayage tournoyant.",
      "en": "Qhira applies bleeds with her attacks, moves with her grappling hook, and isolates targets with Revolving Sweep."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Grappin",
          "en": "Grappling Hook"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_d.png",
        "description": {
          "fr": "Se projette vers un point, y compris à travers les murs.",
          "en": "Launches you to a point, even across walls."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Carnage",
          "en": "Carnage"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_q.png",
        "description": {
          "fr": "Frappe en cercle et applique un saignement.",
          "en": "Strikes in a circle, applying a bleed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Rage sanglante",
          "en": "Blood Rage"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_w.png",
        "description": {
          "fr": "Se soigne selon les saignements actifs.",
          "en": "Heals based on active bleeds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Balayage tournoyant",
          "en": "Revolving Sweep"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_e.png",
        "description": {
          "fr": "Lance une lame et se téléporte à elle en attirant les ennemis.",
          "en": "Throws a blade and teleports to it, pulling enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Frappes implacables",
          "en": "Unrelenting Strikes"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_r1.png",
        "description": {
          "fr": "Renforce fortement tes attaques de base.",
          "en": "Greatly empowers your Basic Attacks."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Frappe finale",
          "en": "Final Strike"
        },
        "icon": "assets/heroes/base_spells/qhira/images/spells/storm_ui_icon_nexushunter_r2.png",
        "description": {
          "fr": "Frappe globale qui inflige d'énormes dégâts à distance.",
          "en": "Global strike dealing huge damage from afar."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Le grappin permet de traverser les murs : repère les bons angles.",
        "en": "The hook lets you cross walls: learn the good angles."
      },
      {
        "fr": "Balayage tournoyant ramène une cible vers ton équipe.",
        "en": "Revolving Sweep drags a target back to your team."
      },
      {
        "fr": "Tes saignements se cumulent : reste au contact.",
        "en": "Your bleeds stack: stay in contact."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,NexusHunter]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jodh7on",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6johfu9x",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jod0k2g",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jozmwvh",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jopd9cp",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jojpe49",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo4blvk",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jodh7on",
        "level": 1,
        "name": {
          "fr": "Maximum Effort",
          "en": "Maximum Effort"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_q.png",
        "description": {
          "fr": "If Carnage damages the same enemy Hero 3 times it deals an additional 108 (+4% per level) damage and Slows by 25% for 2.5 seconds.",
          "en": "If Carnage damages the same enemy Hero 3 times it deals an additional 108 (+4% per level) damage and Slows by 25% for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6johfu9x",
        "level": 4,
        "name": {
          "fr": "Upstage",
          "en": "Upstage"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_w.png",
        "description": {
          "fr": "Damaging at least 2 Heroes with Blood Rage causes Qhira to Evade the next 4 Heroic Basic Attacks within 12 seconds.",
          "en": "Damaging at least 2 Heroes with Blood Rage causes Qhira to Evade the next 4 Heroic Basic Attacks within 12 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jod0k2g",
        "level": 7,
        "name": {
          "fr": "The Thirst",
          "en": "The Thirst"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_q.png",
        "description": {
          "fr": "Carnage heals for 50% of the damage dealt to enemy Heroes. Anytime Carnage damages an enemy Hero, Qhira's next Basic Attack within 4 seconds against an enemy Hero deals 15% additional damage, stacking up to 10 times.",
          "en": "Carnage heals for 50% of the damage dealt to enemy Heroes. Anytime Carnage damages an enemy Hero, Qhira's next Basic Attack within 4 seconds against an enemy Hero deals 15% additional damage, stacking up to 10 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozmwvh",
        "level": 10,
        "name": {
          "fr": "Unrelenting Strikes",
          "en": "Unrelenting Strikes"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_r1.png",
        "description": {
          "fr": "Deal 44 (+4% per level) damage to nearby enemies every 0.5 seconds for 2.5 seconds as your sword grows outward. Upon expiring, deal 160 (+4% per level) damage to nearby enemy Heroes and Stun them for 1.5 seconds.",
          "en": "Deal 44 (+4% per level) damage to nearby enemies every 0.5 seconds for 2.5 seconds as your sword grows outward. Upon expiring, deal 160 (+4% per level) damage to nearby enemy Heroes and Stun them for 1.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jopd9cp",
        "level": 13,
        "name": {
          "fr": "Chainsaw",
          "en": "Chainsaw"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_q.png",
        "description": {
          "fr": "Carnage's cooldown recharges 100% faster while an enemy Hero has maximum Blood Rage stacks.",
          "en": "Carnage's cooldown recharges 100% faster while an enemy Hero has maximum Blood Rage stacks."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojpe49",
        "level": 16,
        "name": {
          "fr": "Booming Kick",
          "en": "Booming Kick"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_e.png",
        "description": {
          "fr": "Increase the Stun duration of Revolving Sweep's re-activation by 0.25 seconds. Enemy Heroes around the primary target are also affected by Revolving Sweep's re-activation.",
          "en": "Increase the Stun duration of Revolving Sweep's re-activation by 0.25 seconds. Enemy Heroes around the primary target are also affected by Revolving Sweep's re-activation."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4blvk",
        "level": 20,
        "name": {
          "fr": "Silent Killer",
          "en": "Silent Killer"
        },
        "icon": "assets/heroes/base_spells/qhira/images/talents/storm_ui_icon_nexushunter_r1.png",
        "description": {
          "fr": "Hitting enemy Heroes with Unrelenting Strikes Silences them for 0.5 seconds and reduces its cooldown by 3 seconds.",
          "en": "Hitting enemy Heroes with Unrelenting Strikes Silences them for 0.5 seconds and reduces its cooldown by 3 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "ragnaros",
    "enabled": false,
    "name": {
      "fr": "Ragnaros",
      "en": "Ragnaros"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_ragnaros.png",
    "headline": {
      "fr": "Bruiser de siège capable de prendre le contrôle d'un fort.",
      "en": "Siege bruiser who can take control of a fort."
    },
    "gameplay": {
      "fr": "Ragnaros alterne entre combat rapproché et poussée de ligne, et peut se transformer en Noyau en fusion pour défendre ou attaquer une structure.",
      "en": "Ragnaros alternates between melee brawling and lane pushing, and can become a Molten Core to defend or attack a structure."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Noyau en fusion",
          "en": "Molten Core"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_moltencore.png",
        "description": {
          "fr": "Prends possession d'une structure et deviens une tourelle géante.",
          "en": "Take over a structure and become a giant turret."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Sulfuras renforcé",
          "en": "Empower Sulfuras"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_empowersulfuras.png",
        "description": {
          "fr": "Renforce tes prochaines attaques avec des dégâts de zone et des soins.",
          "en": "Empowers your next attacks with AoE damage and healing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Météore vivant",
          "en": "Living Meteor"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_livingmeteor.png",
        "description": {
          "fr": "Météore qui roule, blesse, puis revient vers toi.",
          "en": "A meteor that rolls, damages, then returns to you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Onde de choc",
          "en": "Blast Wave"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_blastwave.png",
        "description": {
          "fr": "Repousse les ennemis proches.",
          "en": "Knocks back nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Frappe de Sulfuras",
          "en": "Sulfuras Smash"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_sulfurassmash.png",
        "description": {
          "fr": "Saute et frappe le sol, étourdissant les ennemis.",
          "en": "Leaps and slams the ground, stunning enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Vague de lave",
          "en": "Lava Wave"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/spells/storm_ui_icon_ragnaros_lavawave.png",
        "description": {
          "fr": "Envoie une vague de lave qui détruit la vague de sbires.",
          "en": "Sends a lava wave that wipes the minion wave."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Noyau en fusion sert autant à sauver un fort qu'à en détruire un.",
        "en": "Molten Core is as good at saving a fort as destroying one."
      },
      {
        "fr": "Météore vivant revient vers toi : place-toi pour le toucher deux fois.",
        "en": "Living Meteor returns to you: position to hit twice."
      },
      {
        "fr": "Vague de lave permet de pousser une ligne entière depuis la sécurité.",
        "en": "Lava Wave lets you push a whole lane from safety."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Ragnaros]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jov0aau",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joqk5r3",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jodz7mx",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joo7p5s",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jon7blo",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jooeymc",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo3osyq",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jov0aau",
        "level": 1,
        "name": {
          "fr": "Sulfuras Hungers",
          "en": "Sulfuras Hungers"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
        "description": {
          "fr": "Quest: Every time Empower Sulfuras kills a Minion, its damage is increased by 1, up to 25.  Reward: After killing 25 Minions, increase its damage by an additional 100.",
          "en": "Quest: Every time Empower Sulfuras kills a Minion, its damage is increased by 1, up to 25.  Reward: After killing 25 Minions, increase its damage by an additional 100."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqk5r3",
        "level": 4,
        "name": {
          "fr": "Fire Ward",
          "en": "Fire Ward"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_livingmeteor.png",
        "description": {
          "fr": "When Living Meteor hits an enemy Hero, gain a charge of Spell Armor, reducing damage from the next enemy ability by 50%.  Stores up to 2 charges.",
          "en": "When Living Meteor hits an enemy Hero, gain a charge of Spell Armor, reducing damage from the next enemy ability by 50%.  Stores up to 2 charges."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodz7mx",
        "level": 7,
        "name": {
          "fr": "Hand of Ragnaros",
          "en": "Hand of Ragnaros"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
        "description": {
          "fr": "If Empower Sulfuras hits at least 2 enemy Heroes, refund 10 Mana and its cooldown recharges 100% faster for 4 seconds.",
          "en": "If Empower Sulfuras hits at least 2 enemy Heroes, refund 10 Mana and its cooldown recharges 100% faster for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joo7p5s",
        "level": 10,
        "name": {
          "fr": "Sulfuras Smash",
          "en": "Sulfuras Smash"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
        "description": {
          "fr": "Hurl Sulfuras at the target area, landing after 0.75 seconds, dealing 250 (+4% per level) damage. Enemies in the center take 594 (+4% per level) damage instead and are Stunned for 0.5 seconds.",
          "en": "Hurl Sulfuras at the target area, landing after 0.75 seconds, dealing 250 (+4% per level) damage. Enemies in the center take 594 (+4% per level) damage instead and are Stunned for 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jon7blo",
        "level": 13,
        "name": {
          "fr": "Cauterize Wounds",
          "en": "Cauterize Wounds"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
        "description": {
          "fr": "Empower Sulfuras heals for an additional 45% of damage dealt to Heroes over 2 seconds.",
          "en": "Empower Sulfuras heals for an additional 45% of damage dealt to Heroes over 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jooeymc",
        "level": 16,
        "name": {
          "fr": "Giant Scorcher",
          "en": "Giant Scorcher"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_empowersulfuras.png",
        "description": {
          "fr": "Empower Sulfuras burns enemy Heroes for 9% of their maximum Health over 3 seconds. This additional damage does not heal Ragnaros.",
          "en": "Empower Sulfuras burns enemy Heroes for 9% of their maximum Health over 3 seconds. This additional damage does not heal Ragnaros."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo3osyq",
        "level": 20,
        "name": {
          "fr": "Flames of Sulfuron",
          "en": "Flames of Sulfuron"
        },
        "icon": "assets/heroes/base_spells/ragnaros/images/talents/storm_ui_icon_ragnaros_sulfurassmash.png",
        "description": {
          "fr": "Sulfuras Smash Slows enemies by 50% for 2.5 seconds, and the Stun duration of enemies hit in the center is increased by 1 second.",
          "en": "Sulfuras Smash Slows enemies by 50% for 2.5 seconds, and the Stun duration of enemies hit in the center is increased by 1 second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "raynor",
    "enabled": false,
    "name": {
      "fr": "Raynor",
      "en": "Raynor"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_raynor.png",
    "headline": {
      "fr": "Assassin d'attaques de base simple, solide et polyvalent.",
      "en": "Simple, solid, versatile auto-attack assassin."
    },
    "gameplay": {
      "fr": "Raynor inflige des dégâts constants à distance et repousse les plongeurs avec Tir perforant, tout en soutenant son équipe avec Inspiration.",
      "en": "Raynor deals steady ranged damage, pushes divers away with Penetrating Round, and supports his team with Inspire."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Poivre !",
          "en": "Give 'Em Some Pepper"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_acquireweakspot.png",
        "description": {
          "fr": "Tes attaques renforcées infligent des dégâts bonus.",
          "en": "Your empowered attacks deal bonus damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tir perforant",
          "en": "Penetrating Round"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_penetratinground.png",
        "description": {
          "fr": "Tir en ligne qui blesse et repousse.",
          "en": "Line shot that damages and knocks back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Inspiration",
          "en": "Inspire"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_inspire.png",
        "description": {
          "fr": "Augmente ta vitesse d'attaque et celle de tes alliés.",
          "en": "Increases your and nearby allies' Attack Speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Montée d'adrénaline",
          "en": "Adrenaline Rush"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_adrenalinrush.png",
        "description": {
          "fr": "Se soigne instantanément.",
          "en": "Instantly heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Hypérion",
          "en": "Hyperion"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_hyperion.png",
        "description": {
          "fr": "Un vaisseau traverse la zone et bombarde les ennemis.",
          "en": "A battlecruiser flies across, bombarding enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Raiders de Raynor",
          "en": "Raynor's Raider"
        },
        "icon": "assets/heroes/base_spells/raynor/images/spells/storm_ui_icon_raynor_raynorsraiders.png",
        "description": {
          "fr": "Invoque un vaisseau qui combat à tes côtés.",
          "en": "Summons a ship that fights alongside you."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tir perforant repousse : c'est ton meilleur outil défensif.",
        "en": "Penetrating Round knocks back: it's your best defensive tool."
      },
      {
        "fr": "Inspiration accélère aussi tes alliés : lance-la avant un combat.",
        "en": "Inspire also speeds up allies: cast it before a fight."
      },
      {
        "fr": "Hypérion est excellent pour tenir un objectif ou pousser un fort.",
        "en": "Hyperion is excellent for holding an objective or pushing a fort."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Raynor]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jof9xe8",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joqecmn",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6josbv02",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jornml6",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joetzyu",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jok4lxd",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo22ceg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jof9xe8",
        "level": 1,
        "name": {
          "fr": "Exterminator",
          "en": "Exterminator"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_inspire.png",
        "description": {
          "fr": "Basic Attacks deal 50% more damage to Minions, Mercenaries, and Monsters. This is increased to 125% while Inspire is active.  Passive: Inspire does not expire on friendly Minions and Mercenaries.",
          "en": "Basic Attacks deal 50% more damage to Minions, Mercenaries, and Monsters. This is increased to 125% while Inspire is active.  Passive: Inspire does not expire on friendly Minions and Mercenaries."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqecmn",
        "level": 4,
        "name": {
          "fr": "Fight or Flight",
          "en": "Fight or Flight"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_adrenalinrush.png",
        "description": {
          "fr": "Reduce Adrenaline Rush's cooldown by 10 seconds. Casting Adrenaline Rush grants 25 Armor for 3 seconds.",
          "en": "Reduce Adrenaline Rush's cooldown by 10 seconds. Casting Adrenaline Rush grants 25 Armor for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6josbv02",
        "level": 7,
        "name": {
          "fr": "Heavy Slugs",
          "en": "Heavy Slugs"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_penetratinground.png",
        "description": {
          "fr": "Increase Penetrating Round's Slow by 15% and its duration by 2 seconds.",
          "en": "Increase Penetrating Round's Slow by 15% and its duration by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jornml6",
        "level": 10,
        "name": {
          "fr": "Hyperion",
          "en": "Hyperion"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_hyperion.png",
        "description": {
          "fr": "Order the Hyperion to make a strafing run for 12 seconds, hitting up to 4 enemies for 66 (+4% per level) damage every second. Every 4 seconds, it can fire its Yamato Cannon at a Structure, dealing 794 (+4% per level) damage.",
          "en": "Order the Hyperion to make a strafing run for 12 seconds, hitting up to 4 enemies for 66 (+4% per level) damage every second. Every 4 seconds, it can fire its Yamato Cannon at a Structure, dealing 794 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joetzyu",
        "level": 13,
        "name": {
          "fr": "Line 'Em Up",
          "en": "Line 'Em Up"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_penetratinground.png",
        "description": {
          "fr": "Reduce the cooldown of Penetrating Round by 3 seconds. Penetrating Round hitting two or more enemy Heroes reduces its cooldown by an additional 3 seconds.",
          "en": "Reduce the cooldown of Penetrating Round by 3 seconds. Penetrating Round hitting two or more enemy Heroes reduces its cooldown by an additional 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jok4lxd",
        "level": 16,
        "name": {
          "fr": "Paint Them Red",
          "en": "Paint Them Red"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_penetratinground.png",
        "description": {
          "fr": "Increase the damage of Penetrating Round by 50% and heal for 90% of the damage Penetrating Round deals to Heroes.",
          "en": "Increase the damage of Penetrating Round by 50% and heal for 90% of the damage Penetrating Round deals to Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo22ceg",
        "level": 20,
        "name": {
          "fr": "Cavalry's Arrived",
          "en": "Cavalry's Arrived"
        },
        "icon": "assets/heroes/base_spells/raynor/images/talents/storm_ui_icon_raynor_hyperion.png",
        "description": {
          "fr": "Give 'Em Some Pepper lowers the cooldown of Hyperion by 5 seconds if the primary target is a Hero. These Heroes are targeted by the Hyperion for 100% increased damage for 6 seconds.",
          "en": "Give 'Em Some Pepper lowers the cooldown of Hyperion by 5 seconds if the primary target is a Hero. These Heroes are targeted by the Hyperion for 100% increased damage for 6 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "rexxar",
    "enabled": false,
    "name": {
      "fr": "Rexxar",
      "en": "Rexxar"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_rexxar.png",
    "headline": {
      "fr": "Duo bruiser : Rexxar reste en retrait, Misha encaisse.",
      "en": "Bruiser duo: Rexxar stays back while Misha tanks."
    },
    "gameplay": {
      "fr": "Rexxar dirige Misha, son ours, qui charge et encaisse pour lui. Il peut soigner Misha en permanence, ce qui le rend très difficile à évincer d'une ligne.",
      "en": "Rexxar commands Misha, his bear, who charges and tanks for him. He can heal Misha constantly, making him very hard to push out of a lane."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Misha, concentre-toi !",
          "en": "Misha, Focus!"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_mishafixate.png",
        "description": {
          "fr": "Ordonne à Misha d'attaquer une cible.",
          "en": "Orders Misha to attack a target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fonte de l'esprit",
          "en": "Spirit Swoop"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_spiritswoop.png",
        "description": {
          "fr": "Envoie un faucon qui blesse et ralentit en ligne.",
          "en": "Sends a hawk that damages and slows in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Misha, charge !",
          "en": "Misha, Charge!"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_mishacharge.png",
        "description": {
          "fr": "Misha charge et étourdit les ennemis touchés.",
          "en": "Misha charges, stunning enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Soin de familier",
          "en": "Mend Pet"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_mendpet.png",
        "description": {
          "fr": "Soigne Misha progressivement.",
          "en": "Heals Misha over time."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Lâchez les sangliers",
          "en": "Unleash the Boars"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_unleashtheboars.png",
        "description": {
          "fr": "Des sangliers poursuivent et ralentissent les héros ennemis.",
          "en": "Boars chase and slow enemy Heroes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Fureur bestiale",
          "en": "Bestial Wrath"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/spells/storm_ui_icon_rexxar_bestialwrath.png",
        "description": {
          "fr": "Renforce fortement les dégâts de Misha et de Rexxar.",
          "en": "Greatly empowers Misha's and Rexxar's damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Misha peut bloquer un couloir ou intercepter un plongeur.",
        "en": "Misha can body-block a corridor or intercept a diver."
      },
      {
        "fr": "Soin de familier ne s'interrompt pas si tu bouges bien : reste à portée.",
        "en": "Mend Pet keeps ticking if you stay in range."
      },
      {
        "fr": "Ne laisse jamais Misha mourir sans raison : c'est ton bouclier.",
        "en": "Never let Misha die for nothing: she's your shield."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Rexxar]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6joce63n",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jox3rqz",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo6juro",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo1qi38",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo46v72",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jozdaak",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jojtq4j",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6joce63n",
        "level": 1,
        "name": {
          "fr": "Bird of Prey",
          "en": "Bird of Prey"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        "description": {
          "fr": "Increases Spirit Swoop's damage by 150% to Minions.",
          "en": "Increases Spirit Swoop's damage by 150% to Minions."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jox3rqz",
        "level": 4,
        "name": {
          "fr": "Hungry Bear",
          "en": "Hungry Bear"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_heremishaactive.png",
        "description": {
          "fr": "Misha's Basic Attacks heal her for 4.5% of her maximum Health.",
          "en": "Misha's Basic Attacks heal her for 4.5% of her maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6juro",
        "level": 7,
        "name": {
          "fr": "Crippling Talons",
          "en": "Crippling Talons"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        "description": {
          "fr": "Increases Spirit Swoop's slow amount to 50% and its duration to 3.5 seconds.",
          "en": "Increases Spirit Swoop's slow amount to 50% and its duration to 3.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1qi38",
        "level": 10,
        "name": {
          "fr": "Bestial Wrath",
          "en": "Bestial Wrath"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_bestialwrath.png",
        "description": {
          "fr": "Increases Misha's Basic Attack damage by 200% for 12 seconds.",
          "en": "Increases Misha's Basic Attack damage by 200% for 12 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo46v72",
        "level": 13,
        "name": {
          "fr": "Aspect of the Hawk",
          "en": "Aspect of the Hawk"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_spiritswoop.png",
        "description": {
          "fr": "When Spirit Swoop hits an enemy Hero, Rexxar gains 125% Attack Speed for 4 seconds. Misha's Basic Attacks increase the duration of this buff by 0.75 seconds.",
          "en": "When Spirit Swoop hits an enemy Hero, Rexxar gains 125% Attack Speed for 4 seconds. Misha's Basic Attacks increase the duration of this buff by 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozdaak",
        "level": 16,
        "name": {
          "fr": "Thrill of the Hunt",
          "en": "Thrill of the Hunt"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_heremishaactive.png",
        "description": {
          "fr": "Rexxar's Basic Attacks increase both his and Misha's Movement Speed by 25% for 2 seconds.",
          "en": "Rexxar's Basic Attacks increase both his and Misha's Movement Speed by 25% for 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jojtq4j",
        "level": 20,
        "name": {
          "fr": "Spirit Bond",
          "en": "Spirit Bond"
        },
        "icon": "assets/heroes/base_spells/rexxar/images/talents/storm_ui_icon_rexxar_bestialwrath.png",
        "description": {
          "fr": "Increases the duration of Bestial Wrath by 50% and Misha's Basic Attacks heal Rexxar for 50% of her damage dealt during Bestial Wrath.",
          "en": "Increases the duration of Bestial Wrath by 50% and Misha's Basic Attacks heal Rexxar for 50% of her damage dealt during Bestial Wrath."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "samuro",
    "enabled": false,
    "name": {
      "fr": "Samuro",
      "en": "Samuro"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_samuro.png",
    "headline": {
      "fr": "Assassin furtif qui sème la confusion avec ses images miroir.",
      "en": "Stealth assassin who sows confusion with mirror images."
    },
    "gameplay": {
      "fr": "Samuro crée des clones indiscernables pour tromper l'ennemi, pousser plusieurs lignes et frapper depuis l'invisibilité.",
      "en": "Samuro creates indistinguishable clones to deceive the enemy, push multiple lanes, and strike from stealth."
    },
    "spells": [
      {
        "key": "A",
        "name": {
          "fr": "Image miroir",
          "en": "Mirror Image"
        },
        "icon": "assets/heroes/base_spells/samuro/images/spells/storm_ui_icon_samuro_mirrorimage.png",
        "description": {
          "fr": "Crée deux clones qui imitent tes actions.",
          "en": "Creates two clones that mimic your actions."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Frappe critique",
          "en": "Critical Strike"
        },
        "icon": "assets/heroes/base_spells/samuro/images/spells/storm_ui_icon_samuro_criticalstrike.png",
        "description": {
          "fr": "Ta prochaine attaque est un coup critique.",
          "en": "Your next Basic Attack is a critical strike."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Marche du vent",
          "en": "Wind Walk"
        },
        "icon": "assets/heroes/base_spells/samuro/images/spells/storm_ui_icon_samuro_windwalk.png",
        "description": {
          "fr": "Deviens invisible, plus rapide et te soigne.",
          "en": "Become invisible, faster, and heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Tempête de lames",
          "en": "Bladestorm"
        },
        "icon": "assets/heroes/base_spells/samuro/images/spells/storm_ui_icon_samuro_bladestorm.png",
        "description": {
          "fr": "Tournoie en infligeant de lourds dégâts de zone.",
          "en": "Spins, dealing heavy area damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Maître des illusions",
          "en": "Illusion Master"
        },
        "icon": "assets/heroes/base_spells/samuro/images/spells/storm_ui_icon_samuro_illusiondancer.png",
        "description": {
          "fr": "Permet de prendre la place d'une de tes images.",
          "en": "Lets you swap places with one of your images."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Utilise tes images pour pousser une ligne pendant que tu es ailleurs.",
        "en": "Use your images to push a lane while you are elsewhere."
      },
      {
        "fr": "Marche du vent te soigne et permet de disparaître d'un combat perdu.",
        "en": "Wind Walk heals you and lets you vanish from a lost fight."
      },
      {
        "fr": "Alterne image et corps réel pour rendre le focus ennemi impossible.",
        "en": "Swap between images and your real body to make enemy focus impossible."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Samuro]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6johsv2r",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joqfw7g",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jow9lzc",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6joiz4hx",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo80xe0",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jokdqpr",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jo9dkqu",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6johsv2r",
        "level": 1,
        "name": {
          "fr": "Way of Illusion",
          "en": "Way of Illusion"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_mirrorimage.png",
        "description": {
          "fr": "Quest: Every time a Mirror Image Critically Strikes a Hero, Samuro gains 0.25 Attack Damage, up to 10.  Reward: After hitting 40 Heroes, Samuro gains an additional 30 Attack Damage.",
          "en": "Quest: Every time a Mirror Image Critically Strikes a Hero, Samuro gains 0.25 Attack Damage, up to 10.  Reward: After hitting 40 Heroes, Samuro gains an additional 30 Attack Damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joqfw7g",
        "level": 4,
        "name": {
          "fr": "Mirage",
          "en": "Mirage"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_mirrorimage.png",
        "description": {
          "fr": "Mirror Image grants Samuro and his Images 40 Spell Armor against the next 2 sources of Spell Damage, reducing their damage by 40%.",
          "en": "Mirror Image grants Samuro and his Images 40 Spell Armor against the next 2 sources of Spell Damage, reducing their damage by 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jow9lzc",
        "level": 7,
        "name": {
          "fr": "Burning Blade",
          "en": "Burning Blade"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_criticalstrike.png",
        "description": {
          "fr": "Critical Strikes from Samuro and Mirror Images deal an additional 50% of their Basic Attack damage as Spell Damage to the target and nearby enemies.",
          "en": "Critical Strikes from Samuro and Mirror Images deal an additional 50% of their Basic Attack damage as Spell Damage to the target and nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joiz4hx",
        "level": 10,
        "name": {
          "fr": "Bladestorm",
          "en": "Bladestorm"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_bladestorm.png",
        "description": {
          "fr": "Cause a Bladestorm of destructive force around Samuro for 3 seconds, granting him 25 Armor and dealing 180 (+4% per level) damage per second to nearby enemies.",
          "en": "Cause a Bladestorm of destructive force around Samuro for 3 seconds, granting him 25 Armor and dealing 180 (+4% per level) damage per second to nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo80xe0",
        "level": 13,
        "name": {
          "fr": "Mirrored Steel",
          "en": "Mirrored Steel"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_mirrorimage.png",
        "description": {
          "fr": "Samuro's Basic Attacks against Heroes reduce the cooldown of Mirror Image by 0.75 seconds.",
          "en": "Samuro's Basic Attacks against Heroes reduce the cooldown of Mirror Image by 0.75 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokdqpr",
        "level": 16,
        "name": {
          "fr": "Merciless Strikes",
          "en": "Merciless Strikes"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_criticalstrike.png",
        "description": {
          "fr": "Samuro's Basic Attacks against Stunned, Rooted, or Slowed enemies are always Critical Strikes.",
          "en": "Samuro's Basic Attacks against Stunned, Rooted, or Slowed enemies are always Critical Strikes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo9dkqu",
        "level": 20,
        "name": {
          "fr": "Dance Of Death",
          "en": "Dance Of Death"
        },
        "icon": "assets/heroes/base_spells/samuro/images/talents/storm_ui_icon_samuro_bladestorm.png",
        "description": {
          "fr": "Mirror Images use Bladestorm when Samuro does, but for 45% damage.  If Samuro hits at least 20 enemy Heroes with Bladestorm, then reset its cooldown.",
          "en": "Mirror Images use Bladestorm when Samuro does, but for 45% damage.  If Samuro hits at least 20 enemy Heroes with Bladestorm, then reset its cooldown."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "sgthammer",
    "enabled": false,
    "name": {
      "fr": "Sgt. Marteau",
      "en": "Sgt. Hammer"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_sgthammer.png",
    "headline": {
      "fr": "Spécialiste de siège avec une portée gigantesque en mode siège.",
      "en": "Siege specialist with enormous range in Siege Mode."
    },
    "gameplay": {
      "fr": "Sgt. Hammer se déploie en mode siège pour bombarder les forts et les regroupements ennemis depuis une distance impossible à contester.",
      "en": "Sgt. Hammer deploys into Siege Mode to bombard forts and enemy groups from an untouchable distance."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Mode siège",
          "en": "Siege Mode"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_siegemode.png",
        "description": {
          "fr": "Immobile mais portée et dégâts considérablement augmentés.",
          "en": "Immobile, but greatly increased range and damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Mines à araignées",
          "en": "Spider Mines"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_spidermines.png",
        "description": {
          "fr": "Pose des mines qui explosent au contact.",
          "en": "Places mines that detonate on contact."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Souffle à concussion",
          "en": "Concussive Blast"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_concussiveblast.png",
        "description": {
          "fr": "Repousse fortement les ennemis proches.",
          "en": "Strongly knocks back nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Blindage néo-acier",
          "en": "Neosteel Plating"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_neosteelplating.png",
        "description": {
          "fr": "Gagne de l'armure temporairement.",
          "en": "Temporarily gain Armor."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Frappe au napalm",
          "en": "Napalm Strike"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_napalmstrike.png",
        "description": {
          "fr": "Bombarde une zone en la laissant enflammée.",
          "en": "Bombards an area, leaving it burning."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Canon de force brute",
          "en": "Blunt Force Gun"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_bluntforcegun.png",
        "description": {
          "fr": "Tir global qui inflige des dégâts massifs.",
          "en": "Global shot dealing massive damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "W",
        "name": {
          "fr": "Propulseurs",
          "en": "Thrusters"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/spells/storm_ui_icon_sgthammer_mount.png",
        "description": {
          "fr": "Se déplace plus vite hors mode siège.",
          "en": "Move faster while out of Siege Mode."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ne te déploie que si ton équipe peut te protéger.",
        "en": "Only deploy if your team can protect you."
      },
      {
        "fr": "Souffle à concussion repousse : c'est ta seule échappatoire.",
        "en": "Concussive Blast knocks back: it's your only escape."
      },
      {
        "fr": "Tes mines donnent de la vision et bloquent les approches.",
        "en": "Your mines give vision and deny approaches."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,SgtHammer]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo3sun5",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jodkd9k",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jov7hmk",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jos1465",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joln008",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jozc7dk",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jogeqcn",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo3sun5",
        "level": 1,
        "name": {
          "fr": "Ambush",
          "en": "Ambush"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_siegemode.png",
        "description": {
          "fr": "Gain Stealth when entering Siege Mode or after not taking or dealing damage for 3 seconds while in Siege Mode. Basic Attacks while Stealthed deal 125% more damage.  Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible.",
          "en": "Gain Stealth when entering Siege Mode or after not taking or dealing damage for 3 seconds while in Siege Mode. Basic Attacks while Stealthed deal 125% more damage.  Remaining stationary for at least 1.5 seconds while Stealthed grants Invisible."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodkd9k",
        "level": 4,
        "name": {
          "fr": "Barricade",
          "en": "Barricade"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_concussiveblast.png",
        "description": {
          "fr": "Reduce Concussive Blast's cooldown by 4 seconds, its Mana cost by 40, and when cast create an impassable wall in front of Sgt. Hammer for 4 seconds.",
          "en": "Reduce Concussive Blast's cooldown by 4 seconds, its Mana cost by 40, and when cast create an impassable wall in front of Sgt. Hammer for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jov7hmk",
        "level": 7,
        "name": {
          "fr": "Pulse Detonation Core",
          "en": "Pulse Detonation Core"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_spidermines.png",
        "description": {
          "fr": "Spider Mines detonate 3 times over 3 seconds.  Basic Attacks against enemy Heroes grant 5 Mana and reduce the cooldown of Spider Mines by 1.5 seconds.  Increase this bonus to 2.5 seconds while in Siege Mode.",
          "en": "Spider Mines detonate 3 times over 3 seconds.  Basic Attacks against enemy Heroes grant 5 Mana and reduce the cooldown of Spider Mines by 1.5 seconds.  Increase this bonus to 2.5 seconds while in Siege Mode."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jos1465",
        "level": 10,
        "name": {
          "fr": "Blunt Force Gun",
          "en": "Blunt Force Gun"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_bluntforcegun.png",
        "description": {
          "fr": "Fire a missile across the battlefield, dealing 500 (+3% per level) damage to non-Structure enemies in its path.",
          "en": "Fire a missile across the battlefield, dealing 500 (+3% per level) damage to non-Structure enemies in its path."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joln008",
        "level": 13,
        "name": {
          "fr": "Tactical Mine Deployment",
          "en": "Tactical Mine Deployment"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_spidermines.png",
        "description": {
          "fr": "Moving while Thrusters is active leaves a trail of up to 5 Spider Mines. Additionally, increase the Slow of Spider Mines by 15%.",
          "en": "Moving while Thrusters is active leaves a trail of up to 5 Spider Mines. Additionally, increase the Slow of Spider Mines by 15%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozc7dk",
        "level": 16,
        "name": {
          "fr": "Mechanical Know-how",
          "en": "Mechanical Know-how"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_neosteelplating.png",
        "description": {
          "fr": "Neosteel Plating grants 20% maximum Health as a Shield for 2 seconds and increases Basic Attack damage by 30% for 5 seconds.",
          "en": "Neosteel Plating grants 20% maximum Health as a Shield for 2 seconds and increases Basic Attack damage by 30% for 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jogeqcn",
        "level": 20,
        "name": {
          "fr": "Orbital BFG",
          "en": "Orbital BFG"
        },
        "icon": "assets/heroes/base_spells/sgthammer/images/talents/storm_ui_icon_sgthammer_bluntforcegun.png",
        "description": {
          "fr": "Blunt Force Gun's missile orbits the planet every 5 seconds. Only the last missile fired orbits.",
          "en": "Blunt Force Gun's missile orbits the planet every 5 seconds. Only the last missile fired orbits."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "sonya",
    "enabled": false,
    "name": {
      "fr": "Sonya",
      "en": "Sonya"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_barbarian.png",
    "headline": {
      "fr": "Bruiser autonome qui n'a besoin ni de mana ni de soigneur.",
      "en": "Self-sufficient bruiser who needs neither mana nor a healer."
    },
    "gameplay": {
      "fr": "Sonya génère de la Furie pour se soigner avec Tourbillon. Elle est la meilleure ligne solo du jeu grâce à son autonomie totale.",
      "en": "Sonya builds Fury to heal herself with Whirlwind. She's one of the best solo laners in the game thanks to her total self-sufficiency."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Furie",
          "en": "Fury"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_fury.png",
        "description": {
          "fr": "Génère de la Furie qui alimente tes capacités.",
          "en": "Builds Fury that powers your abilities."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Lance de l'ancien",
          "en": "Ancient Spear"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_ancientspear.png",
        "description": {
          "fr": "Harponne un ennemi et te tire vers lui.",
          "en": "Harpoons an enemy and pulls you to them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Frappe sismique",
          "en": "Seismic Slam"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_seismicslam.png",
        "description": {
          "fr": "Frappe puissante en cône devant toi.",
          "en": "Powerful strike in a cone in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Tourbillon",
          "en": "Whirlwind"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_whirlwind.png",
        "description": {
          "fr": "Tournoie en infligeant des dégâts et en te soignant.",
          "en": "Spins, dealing damage and healing you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Bond",
          "en": "Leap"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_leap.png",
        "description": {
          "fr": "Bondit vers une zone et étourdit à l'atterrissage.",
          "en": "Leaps to an area, stunning on landing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Courroux du berserker",
          "en": "Wrath of the Berserker"
        },
        "icon": "assets/heroes/base_spells/sonya/images/spells/storm_ui_icon_sonya_wrathoftheberserker.png",
        "description": {
          "fr": "Augmente fortement tes dégâts et ta résistance.",
          "en": "Greatly increases your damage and toughness."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Lance de l'ancien te permet de rejoindre une cible ou de fuir.",
        "en": "Ancient Spear lets you close on a target or escape."
      },
      {
        "fr": "Tourbillon te soigne : utilise-le sur un groupe de sbires pour rester en ligne.",
        "en": "Whirlwind heals you: use it on minions to stay in lane."
      },
      {
        "fr": "Bond réduit son temps de recharge : c'est ton principal outil d'engagement.",
        "en": "Leap has a short cooldown: it's your main engage tool."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Barbarian]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo43t7j",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jo4tx6q",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo96wy2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo0vw85",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6joakqh1",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jo8bdt8",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jofcbo9",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo43t7j",
        "level": 1,
        "name": {
          "fr": "Furious Blow",
          "en": "Furious Blow"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_seismicslam.png",
        "description": {
          "fr": "Every 4th cast of Seismic Slam deals 40% more damage to the primary target and costs no Fury.",
          "en": "Every 4th cast of Seismic Slam deals 40% more damage to the primary target and costs no Fury."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo4tx6q",
        "level": 4,
        "name": {
          "fr": "Shattered Ground",
          "en": "Shattered Ground"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_seismicslam.png",
        "description": {
          "fr": "Increase Seismic Slam's splash damage by 250%. Targeting a Hero with Seismic Slam further increases its splash damage by 250%, while targeting other enemies increases the length of its splash by 66%.",
          "en": "Increase Seismic Slam's splash damage by 250%. Targeting a Hero with Seismic Slam further increases its splash damage by 250%, while targeting other enemies increases the length of its splash by 66%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo96wy2",
        "level": 7,
        "name": {
          "fr": "Poisoned Spear",
          "en": "Poisoned Spear"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_ancientspear.png",
        "description": {
          "fr": "Ancient Spear deals an additional 100% damage over 6 seconds.",
          "en": "Ancient Spear deals an additional 100% damage over 6 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo0vw85",
        "level": 10,
        "name": {
          "fr": "Leap",
          "en": "Leap"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_leap.png",
        "description": {
          "fr": "Leap into the air, dealing 135 (+4% per level) damage to nearby enemies, and stunning them for 1.25 seconds.",
          "en": "Leap into the air, dealing 135 (+4% per level) damage to nearby enemies, and stunning them for 1.25 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joakqh1",
        "level": 13,
        "name": {
          "fr": "Mystical Spear",
          "en": "Mystical Spear"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_ancientspear.png",
        "description": {
          "fr": "Ancient Spear always pulls Sonya to the target location even if it doesn't hit an enemy. When used this way, Ancient Spear's cooldown is reduced by 5 seconds.",
          "en": "Ancient Spear always pulls Sonya to the target location even if it doesn't hit an enemy. When used this way, Ancient Spear's cooldown is reduced by 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo8bdt8",
        "level": 16,
        "name": {
          "fr": "Giant Slammer",
          "en": "Giant Slammer"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_seismicslam.png",
        "description": {
          "fr": "Basic Attacks and Seismic Slam deal an additional 1.5% of Heroes' maximum Health as damage and heal Sonya for 60% of the damage dealt.",
          "en": "Basic Attacks and Seismic Slam deal an additional 1.5% of Heroes' maximum Health as damage and heal Sonya for 60% of the damage dealt."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jofcbo9",
        "level": 20,
        "name": {
          "fr": "Arreat Crater",
          "en": "Arreat Crater"
        },
        "icon": "assets/heroes/base_spells/sonya/images/talents/storm_ui_icon_sonya_leap.png",
        "description": {
          "fr": "Leap leaves behind an impassable crater for 5 seconds.  Reduces Leap's cooldown by 20 seconds.",
          "en": "Leap leaves behind an impassable crater for 5 seconds.  Reduces Leap's cooldown by 20 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "stitches",
    "enabled": false,
    "name": {
      "fr": "Balafré",
      "en": "Stitches"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_stitches.png",
    "headline": {
      "fr": "Tank d'attrape : un crochet réussi et le combat est plié.",
      "en": "Hook tank: one good grab and the fight is over."
    },
    "gameplay": {
      "fr": "Stitches cherche à isoler une cible avec Crochet depuis un buisson, puis à la garder au contact avec Coup fracassant et Ingurgiter.",
      "en": "Stitches looks to isolate a target with Hook from a bush, then keep them locked down with Slam and Gorge."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Horreur titubante",
          "en": "Shambling Horror"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_acidcloud.png",
        "description": {
          "fr": "Un nuage toxique t'entoure et inflige des dégâts continus.",
          "en": "A toxic cloud surrounds you, dealing continuous damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Crochet",
          "en": "Hook"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_hook.png",
        "description": {
          "fr": "Attrape le premier ennemi touché et l'attire vers toi.",
          "en": "Grabs the first enemy hit and pulls them to you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Coup fracassant",
          "en": "Slam"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_slam.png",
        "description": {
          "fr": "Dégâts de zone et ralentissement devant toi.",
          "en": "AoE damage and slow in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Dévorer",
          "en": "Devour"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_devour.png",
        "description": {
          "fr": "Mange un ennemi ou un sbire pour te soigner.",
          "en": "Eats an enemy or minion to heal yourself."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Bile putride",
          "en": "Putrid Bile"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_putridbile.png",
        "description": {
          "fr": "Laisse une traînée de bile qui ralentit et blesse.",
          "en": "Leaves a trail of bile that slows and damages."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Ingurgiter",
          "en": "Gorge"
        },
        "icon": "assets/heroes/base_spells/stitches/images/spells/storm_ui_icon_stitches_cannibalize.png",
        "description": {
          "fr": "Avale un héros ennemi et l'emporte avec toi.",
          "en": "Swallows an enemy Hero and carries them with you."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Crochet depuis un buisson : c'est là que tu es le plus dangereux.",
        "en": "Hook from a bush: that's where you're most dangerous."
      },
      {
        "fr": "Dévorer sur les sbires te rend de la vie et augmente ta vie maximale.",
        "en": "Devour minions to restore Health and grow your maximum Health."
      },
      {
        "fr": "Ingurgiter peut simplement retirer un tank du combat pendant plusieurs secondes.",
        "en": "Gorge can simply remove a tank from the fight for several seconds."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Stitches]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo0lvb6",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jokqxoe",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joyukuy",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jodbbd0",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jodlyg6",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jozjugz",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jomns18",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo0lvb6",
        "level": 1,
        "name": {
          "fr": "Patchwork Creation",
          "en": "Patchwork Creation"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_patchwork.png",
        "description": {
          "fr": "Gain 3 Armor for every unit afflicted with Vile Gas, stacking up to 8 times. While Shambling Horror is active, this Armor amount is doubled.  Passive: Increase regeneration effects and all healing received by 15%.",
          "en": "Gain 3 Armor for every unit afflicted with Vile Gas, stacking up to 8 times. While Shambling Horror is active, this Armor amount is doubled.  Passive: Increase regeneration effects and all healing received by 15%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jokqxoe",
        "level": 4,
        "name": {
          "fr": "Playtime!",
          "en": "Playtime!"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_slam.png",
        "description": {
          "fr": "Basic Attacks reduce the cooldown of Slam by 0.75 seconds and restores 5 Mana. Hitting Heroes with the inner area of Slam reduces its cooldown by 1.5 seconds.",
          "en": "Basic Attacks reduce the cooldown of Slam by 0.75 seconds and restores 5 Mana. Hitting Heroes with the inner area of Slam reduces its cooldown by 1.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joyukuy",
        "level": 7,
        "name": {
          "fr": "Serrated Edge",
          "en": "Serrated Edge"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_hook.png",
        "description": {
          "fr": "Hitting an enemy Hero with Hook deals bonus damage equal to 5% of their maximum Health, reduces Hook's cooldown by 4 seconds, and restores 35 Mana.",
          "en": "Hitting an enemy Hero with Hook deals bonus damage equal to 5% of their maximum Health, reduces Hook's cooldown by 4 seconds, and restores 35 Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodbbd0",
        "level": 10,
        "name": {
          "fr": "Putrid Bile",
          "en": "Putrid Bile"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_putridbile.png",
        "description": {
          "fr": "Emit bile that deals 37 (+4% per level) damage per second to enemies within, Slowing them by 35% for 1.5 seconds. Gain 20% Movement Speed while emitting bile. Lasts 8 seconds.",
          "en": "Emit bile that deals 37 (+4% per level) damage per second to enemies within, Slowing them by 35% for 1.5 seconds. Gain 20% Movement Speed while emitting bile. Lasts 8 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodlyg6",
        "level": 13,
        "name": {
          "fr": "Meat Hook",
          "en": "Meat Hook"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_hook.png",
        "description": {
          "fr": "Hitting an enemy Hero with Hook heals Stitches for 20% of his maximum Health over 5 seconds. While active, Basic Attacks against the Hero hit refresh the duration of this effect.",
          "en": "Hitting an enemy Hero with Hook heals Stitches for 20% of his maximum Health over 5 seconds. While active, Basic Attacks against the Hero hit refresh the duration of this effect."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozjugz",
        "level": 16,
        "name": {
          "fr": "Pulverize",
          "en": "Pulverize"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_slam.png",
        "description": {
          "fr": "All enemies hit by Slam are Slowed by 70% for 0.75 seconds and Heroes have their Armor reduced by 10 for 3 seconds.",
          "en": "All enemies hit by Slam are Slowed by 70% for 0.75 seconds and Heroes have their Armor reduced by 10 for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jomns18",
        "level": 20,
        "name": {
          "fr": "Gift From The Embalmer",
          "en": "Gift From The Embalmer"
        },
        "icon": "assets/heroes/base_spells/stitches/images/talents/storm_ui_icon_stitches_putridbile.png",
        "description": {
          "fr": "Putrid Bile deals 100% more damage to Heroes.  Quest: Each time Putrid Bile damages an enemy Hero, the duration of Stitches' next death timer is reduced by 2%, to a maximum of 80% total reduction. All stacks of this effect are lost upon death.",
          "en": "Putrid Bile deals 100% more damage to Heroes.  Quest: Each time Putrid Bile damages an enemy Hero, the duration of Stitches' next death timer is reduced by 2%, to a maximum of 80% total reduction. All stacks of this effect are lost upon death."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "sylvanas",
    "enabled": false,
    "name": {
      "fr": "Sylvanas",
      "en": "Sylvanas"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_sylvanas.png",
    "headline": {
      "fr": "Assassin de poussée qui désactive toutes les structures.",
      "en": "Push assassin who disables every structure."
    },
    "gameplay": {
      "fr": "Sylvanas paralyse les tourelles et les forts avec ses sorts, ce qui en fait la meilleure héroïne de poussée du jeu.",
      "en": "Sylvanas stuns towers and forts with her abilities, making her the best pushing Hero in the game."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Flèches noires",
          "en": "Black Arrows"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_blackarrows.png",
        "description": {
          "fr": "Tes dégâts paralysent les sbires et les structures.",
          "en": "Your damage stuns minions and structures."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tir flétrissant",
          "en": "Withering Fire"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_witheringfire.png",
        "description": {
          "fr": "Tirs rapides sur les ennemis les plus faibles.",
          "en": "Rapid shots at the weakest nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Dague d'ombre",
          "en": "Shadow Dagger"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_shadowdagger.png",
        "description": {
          "fr": "Dégâts sur la durée qui se propagent.",
          "en": "Damage over time that spreads."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Vague spectrale",
          "en": "Haunting Wave"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_hauntingwave.png",
        "description": {
          "fr": "Se téléporte en avant ; réactive pour revenir.",
          "en": "Teleports forward; reactivate to return."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Flèche gémissante",
          "en": "Wailing Arrow"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_wailingarrow.png",
        "description": {
          "fr": "Flèche qui explose et réduit au silence.",
          "en": "Arrow that explodes and silences."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Contrôle mental",
          "en": "Mind Control"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/spells/storm_ui_icon_sylvanas_mindcontrol.png",
        "description": {
          "fr": "Prend le contrôle d'un héros ennemi.",
          "en": "Takes control of an enemy Hero."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tes sorts désactivent les structures : entre dans le fort sans risque.",
        "en": "Your abilities disable structures: walk into forts safely."
      },
      {
        "fr": "Vague spectrale sert d'aller-retour : engage puis reviens.",
        "en": "Haunting Wave is a there-and-back: engage, then return."
      },
      {
        "fr": "Contrôle mental peut arracher un ennemi à toute son équipe.",
        "en": "Mind Control can rip an enemy away from their whole team."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Sylvanas]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jolkow4",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jozcx3g",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jovqey7",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jorow95",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jotjb3l",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joh5jqx",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jozf1yg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jolkow4",
        "level": 1,
        "name": {
          "fr": "Might of the Banshee Queen",
          "en": "Might of the Banshee Queen"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
        "description": {
          "fr": "Hitting an enemy Hero with Withering Fire increases Sylvanas's Attack Speed and Spell Power by 5% for 6 seconds, stacking up to 5 times.",
          "en": "Hitting an enemy Hero with Withering Fire increases Sylvanas's Attack Speed and Spell Power by 5% for 6 seconds, stacking up to 5 times."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozcx3g",
        "level": 4,
        "name": {
          "fr": "Unstable Poison",
          "en": "Unstable Poison"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
        "description": {
          "fr": "Minions that die under the effects of Shadow Dagger or Sylvanas's Traits explode, dealing 130 (+4% per level) damage to nearby Minions, Mercenaries, and Summons.",
          "en": "Minions that die under the effects of Shadow Dagger or Sylvanas's Traits explode, dealing 130 (+4% per level) damage to nearby Minions, Mercenaries, and Summons."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jovqey7",
        "level": 7,
        "name": {
          "fr": "Barbed Shot",
          "en": "Barbed Shot"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
        "description": {
          "fr": "Hitting the same enemy with 5 shots of Withering Fire causes the 5th shot to deal 350% bonus damage.",
          "en": "Hitting the same enemy with 5 shots of Withering Fire causes the 5th shot to deal 350% bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jorow95",
        "level": 10,
        "name": {
          "fr": "Wailing Arrow",
          "en": "Wailing Arrow"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_wailingarrow.png",
        "description": {
          "fr": "Shoot an arrow that can be reactivated to deal 228 (+4% per level) damage and Silence enemies in an area for 2.5 seconds. The arrow detonates automatically if it reaches maximum range.",
          "en": "Shoot an arrow that can be reactivated to deal 228 (+4% per level) damage and Silence enemies in an area for 2.5 seconds. The arrow detonates automatically if it reaches maximum range."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jotjb3l",
        "level": 13,
        "name": {
          "fr": "Cold Embrace",
          "en": "Cold Embrace"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_shadowdagger.png",
        "description": {
          "fr": "Shadow Dagger reduces the Armor of the initial target by 25 and any enemy it spreads to by 10 for 2.5 seconds.",
          "en": "Shadow Dagger reduces the Armor of the initial target by 25 and any enemy it spreads to by 10 for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joh5jqx",
        "level": 16,
        "name": {
          "fr": "Evasive Fire",
          "en": "Evasive Fire"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_witheringfire.png",
        "description": {
          "fr": "Hitting an enemy with Withering Fire grants 6% Movement Speed for 2 seconds, up to 30%. Basic Attacks refresh this duration.",
          "en": "Hitting an enemy with Withering Fire grants 6% Movement Speed for 2 seconds, up to 30%. Basic Attacks refresh this duration."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozf1yg",
        "level": 20,
        "name": {
          "fr": "Deafening Blast",
          "en": "Deafening Blast"
        },
        "icon": "assets/heroes/base_spells/sylvanas/images/talents/storm_ui_icon_sylvanas_wailingarrow.png",
        "description": {
          "fr": "Enemies at the center of Wailing Arrow's explosion take 50% more damage and are Silenced for twice as long.",
          "en": "Enemies at the center of Wailing Arrow's explosion take 50% more damage and are Silenced for twice as long."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "tassadar",
    "enabled": false,
    "name": {
      "fr": "Tassadar",
      "en": "Tassadar"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tassadar.png",
    "headline": {
      "fr": "Mage de zone qui punit les regroupements avec ses rayons.",
      "en": "Area mage who punishes grouped enemies with his beams."
    },
    "gameplay": {
      "fr": "Tassadar accumule des charges de résonance sur ses cibles pour amplifier ses dégâts, et bloque le terrain avec son Mur de force.",
      "en": "Tassadar stacks resonance on his targets to amplify his damage and blocks terrain with Force Wall."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Rayon de résonance",
          "en": "Resonance Beam"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_rework_trait.png",
        "description": {
          "fr": "Tes attaques accumulent une charge qui amplifie tes dégâts.",
          "en": "Your attacks stack a charge that amplifies your damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Rayon de choc",
          "en": "Shock Ray"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_rework_q_ray.png",
        "description": {
          "fr": "Rayon qui traverse les ennemis.",
          "en": "Beam that pierces enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Tempête psionique",
          "en": "Psionic Storm"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_psionicstorm.png",
        "description": {
          "fr": "Zone de dégâts continus.",
          "en": "Zone of continuous damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Mur de force",
          "en": "Force Wall"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_forcewall.png",
        "description": {
          "fr": "Crée un mur d'énergie infranchissable.",
          "en": "Creates an impassable energy wall."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Archon",
          "en": "Archon"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_archon.png",
        "description": {
          "fr": "Se transforme en archonte : dégâts et résistance accrus.",
          "en": "Transform into an Archon: increased damage and durability."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Trou noir",
          "en": "Black Hole"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/spells/storm_ui_icon_tassadar_rework_blackhole.png",
        "description": {
          "fr": "Attire et blesse les ennemis d'une zone.",
          "en": "Pulls in and damages enemies in an area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Mur de force peut couper une équipe en deux : place-le avec soin.",
        "en": "Force Wall can split a team in half: place it carefully."
      },
      {
        "fr": "Empile la résonance avant de lancer ton burst.",
        "en": "Stack resonance before committing to your burst."
      },
      {
        "fr": "Archon augmente énormément tes dégâts pendant un combat.",
        "en": "Archon massively increases your damage during a fight."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Tassadar]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jonptyn",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jov7mz1",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jo1j0pe",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jorz12g",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo6srim",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6joap34g",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jodqjg3",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jonptyn",
        "level": 1,
        "name": {
          "fr": "Static Charge",
          "en": "Static Charge"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
        "description": {
          "fr": "Quest: Heroes hit by Shock Ray permanently increases its damage by 5 and grants 33% Resonance Beam charge.  Maximum of 200 bonus damage.",
          "en": "Quest: Heroes hit by Shock Ray permanently increases its damage by 5 and grants 33% Resonance Beam charge.  Maximum of 200 bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jov7mz1",
        "level": 4,
        "name": {
          "fr": "Induction",
          "en": "Induction"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
        "description": {
          "fr": "Tassadar gains 10% increased Movement Speed. Casting Shock Ray increases this bonus to 30% for 3 seconds.",
          "en": "Tassadar gains 10% increased Movement Speed. Casting Shock Ray increases this bonus to 30% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo1j0pe",
        "level": 7,
        "name": {
          "fr": "Beam Alignment",
          "en": "Beam Alignment"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
        "description": {
          "fr": "While Resonance Beam is fully charged, Shock Ray's cooldown refreshes 100% faster and its Slow duration is increased to 4 seconds.  Passive: Reduce the Mana cost of Shock Ray from 55 to 40.",
          "en": "While Resonance Beam is fully charged, Shock Ray's cooldown refreshes 100% faster and its Slow duration is increased to 4 seconds.  Passive: Reduce the Mana cost of Shock Ray from 55 to 40."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jorz12g",
        "level": 10,
        "name": {
          "fr": "Archon",
          "en": "Archon"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_archon.png",
        "description": {
          "fr": "Tassadar transforms into an Archon, gaining a Shield equal to 25% of his maximum Health and empowering Resonance Beam. Lasts for 12 seconds.  Resonance Beam: Deals 140 (+4% per level) damage to the target and splashes 70 (+4% per level) damage to nearby enemies. Heroes hit have their Spell Armor reduced by 20 for 2 seconds. Resonance Beam is fully charged while Archon is active.",
          "en": "Tassadar transforms into an Archon, gaining a Shield equal to 25% of his maximum Health and empowering Resonance Beam. Lasts for 12 seconds.  Resonance Beam: Deals 140 (+4% per level) damage to the target and splashes 70 (+4% per level) damage to nearby enemies. Heroes hit have their Spell Armor reduced by 20 for 2 seconds. Resonance Beam is fully charged while Archon is active."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo6srim",
        "level": 13,
        "name": {
          "fr": "Feedback",
          "en": "Feedback"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_psionicstorm.png",
        "description": {
          "fr": "When an enemy Hero is affected by Psionic Storm, Resonance Beam's Slow is increased to 50% and it reduces Physical Armor by 25.",
          "en": "When an enemy Hero is affected by Psionic Storm, Resonance Beam's Slow is increased to 50% and it reduces Physical Armor by 25."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joap34g",
        "level": 16,
        "name": {
          "fr": "Thermal Lance",
          "en": "Thermal Lance"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_rework_q_ray.png",
        "description": {
          "fr": "Shock Ray deals an additional 8% of maximum Health as damage to the first Hero it hits.",
          "en": "Shock Ray deals an additional 8% of maximum Health as damage to the first Hero it hits."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jodqjg3",
        "level": 20,
        "name": {
          "fr": "Twilight Archon",
          "en": "Twilight Archon"
        },
        "icon": "assets/heroes/base_spells/tassadar/images/talents/storm_ui_icon_tassadar_archon.png",
        "description": {
          "fr": "Basic Attacks while in Archon form increase its duration by 2 seconds.",
          "en": "Basic Attacks while in Archon form increase its duration by 2 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "thebutcher",
    "enabled": false,
    "name": {
      "fr": "Le Boucher",
      "en": "The Butcher"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_butcher.png",
    "headline": {
      "fr": "Assassin qui devient terrifiant s'il accumule sa viande.",
      "en": "Assassin who becomes terrifying once he stacks his meat."
    },
    "gameplay": {
      "fr": "Le Boucher collecte de la chair fraîche pour augmenter définitivement ses dégâts, puis fonce sur une cible unique et la déchiquette.",
      "en": "The Butcher collects Fresh Meat to permanently increase his damage, then charges a single target and shreds it."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Chair fraîche",
          "en": "Fresh Meat"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_freshmeat.png",
        "description": {
          "fr": "Les ennemis tués laissent de la viande qui augmente tes dégâts.",
          "en": "Slain enemies drop meat that increases your damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tendon coupé",
          "en": "Hamstring"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_hamstring.png",
        "description": {
          "fr": "Frappe et ralentit la cible.",
          "en": "Strikes and slows the target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Marque du Boucher",
          "en": "Butcher's Brand"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_tenderize.png",
        "description": {
          "fr": "Marque une cible : tes attaques sur elle te soignent.",
          "en": "Marks a target: your attacks on them heal you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Ruée impitoyable",
          "en": "Ruthless Onslaught"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_fullboar.png",
        "description": {
          "fr": "Fonce sur un ennemi et l'étourdit.",
          "en": "Charges an enemy and stuns them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Souffle de fournaise",
          "en": "Furnace Blast"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_furnaceblast.png",
        "description": {
          "fr": "Explosion de zone retardée.",
          "en": "Delayed area explosion."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Agneau à l'abattoir",
          "en": "Lamb to the Slaughter"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/spells/storm_ui_icon_butcher_lambtotheslaughter.png",
        "description": {
          "fr": "Enchaîne un héros à un pieu, l'empêchant de fuir.",
          "en": "Chains a Hero to a post, preventing escape."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Farme ta viande en début de partie : c'est toute ta puissance.",
        "en": "Farm your meat early: it's your entire power curve."
      },
      {
        "fr": "Ruée impitoyable étourdit : c'est ton engagement principal.",
        "en": "Ruthless Onslaught stuns: it's your main engage."
      },
      {
        "fr": "Agneau à l'abattoir isole totalement un héros pendant plusieurs secondes.",
        "en": "Lamb to the Slaughter fully isolates a Hero for several seconds."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Butcher]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jo9b1rr",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6joxklg1",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6joaswnt",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jo7v2vc",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jo716yt",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jozxphn",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jovwh8q",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jo9b1rr",
        "level": 1,
        "name": {
          "fr": "Invigoration",
          "en": "Invigoration"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_hamstring.png",
        "description": {
          "fr": "If Hamstring hits a Hero, half of the Mana cost is refunded and the cooldown is reduced by 1 second.",
          "en": "If Hamstring hits a Hero, half of the Mana cost is refunded and the cooldown is reduced by 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joxklg1",
        "level": 4,
        "name": {
          "fr": "Flail Axe",
          "en": "Flail Axe"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_hamstring.png",
        "description": {
          "fr": "Increases the length of Hamstring by 40%.",
          "en": "Increases the length of Hamstring by 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6joaswnt",
        "level": 7,
        "name": {
          "fr": "Insatiable Blade",
          "en": "Insatiable Blade"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_tenderize.png",
        "description": {
          "fr": "While facing a branded enemy, The Butcher's Movement Speed is increased by 25%.",
          "en": "While facing a branded enemy, The Butcher's Movement Speed is increased by 25%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo7v2vc",
        "level": 10,
        "name": {
          "fr": "Furnace Blast",
          "en": "Furnace Blast"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_furnaceblast.png",
        "description": {
          "fr": "After a 3 second delay, fire explodes around The Butcher dealing 500 (+4% per level) damage to enemies.  Can be cast while using Ruthless Onslaught.",
          "en": "After a 3 second delay, fire explodes around The Butcher dealing 500 (+4% per level) damage to enemies.  Can be cast while using Ruthless Onslaught."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jo716yt",
        "level": 13,
        "name": {
          "fr": "Cleaver",
          "en": "Cleaver"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_talent_autoattack_aoe.png",
        "description": {
          "fr": "Basic Attacks deal 35% of The Butcher's Basic Attack Damage in an area around the target.",
          "en": "Basic Attacks deal 35% of The Butcher's Basic Attack Damage in an area around the target."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jozxphn",
        "level": 16,
        "name": {
          "fr": "Crippling Slam",
          "en": "Crippling Slam"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_hamstring.png",
        "description": {
          "fr": "Hamstring's slow no longer fades out, and the duration is increased by 30%.",
          "en": "Hamstring's slow no longer fades out, and the duration is increased by 30%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jovwh8q",
        "level": 20,
        "name": {
          "fr": "Fires of Hell",
          "en": "Fires of Hell"
        },
        "icon": "assets/heroes/base_spells/thebutcher/images/talents/storm_ui_icon_butcher_furnaceblast.png",
        "description": {
          "fr": "Furnace Blast explodes a second time 3 seconds after the initial explosion.",
          "en": "Furnace Blast explodes a second time 3 seconds after the initial explosion."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "thrall",
    "enabled": false,
    "name": {
      "fr": "Thrall",
      "en": "Thrall"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_thrall.png",
    "headline": {
      "fr": "Bruiser de dégâts soutenus avec un excellent contrôle de zone.",
      "en": "Sustained damage bruiser with excellent zone control."
    },
    "gameplay": {
      "fr": "Thrall enchaîne Éclair en chaîne et attaques renforcées par Furie-des-vents, et sépare l'équipe ennemie avec Fracture.",
      "en": "Thrall weaves Chain Lightning with Windfury-empowered attacks and splits the enemy team with Sundering."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Résilience Loup-de-Givre",
          "en": "Frostwolf Resilience"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_frostwolfresilience.png",
        "description": {
          "fr": "Se soigne automatiquement quand ta vie est basse.",
          "en": "Automatically heals you when your Health is low."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Éclair en chaîne",
          "en": "Chain Lightning"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_chainlightning.png",
        "description": {
          "fr": "Éclair qui rebondit entre les ennemis et te soigne.",
          "en": "Lightning that bounces between enemies and heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Loups spectraux",
          "en": "Feral Spirit"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_feralspirit.png",
        "description": {
          "fr": "Envoie des loups qui ralentissent les ennemis touchés.",
          "en": "Sends wolves that slow enemies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Furie-des-vents",
          "en": "Windfury"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_windfury.png",
        "description": {
          "fr": "Gagne de la vitesse de déplacement et d'attaque.",
          "en": "Gain Movement and Attack Speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Fracture",
          "en": "Sundering"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_sundering.png",
        "description": {
          "fr": "Fissure le sol en ligne, repoussant et étourdissant.",
          "en": "Splits the ground in a line, knocking back and stunning."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Tremblement de terre",
          "en": "Earthquake"
        },
        "icon": "assets/heroes/base_spells/thrall/images/spells/storm_ui_icon_thrall_earthquake.png",
        "description": {
          "fr": "Ralentit fortement tous les ennemis de la zone à répétition.",
          "en": "Repeatedly and heavily slows all enemies in the area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Utilise Éclair en chaîne pour rester en ligne : il te soigne.",
        "en": "Use Chain Lightning to stay in lane: it heals you."
      },
      {
        "fr": "Fracture coupe l'équipe ennemie en deux : vise plusieurs cibles.",
        "en": "Sundering splits the enemy team in half: aim for multiple targets."
      },
      {
        "fr": "Furie-des-vents sert aussi bien à poursuivre qu'à fuir.",
        "en": "Windfury is as good for chasing as for escaping."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Thrall]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpqyten",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpyt8av",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpiz3ng",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpkmi8c",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpwa7d3",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpbnice",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jpoo4sg",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpqyten",
        "level": 1,
        "name": {
          "fr": "Echo of the Elements",
          "en": "Echo of the Elements"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_chainlightning.png",
        "description": {
          "fr": "Quest: Kill Minions or Heroes within 1.5 seconds of hitting them with Chain Lightning.  Reward: After killing 10 enemies, reduce the Mana cost of Chain Lightning from 40 to 20.  Reward: After killing 20 enemies, gain a second charge of Chain Lightning.",
          "en": "Quest: Kill Minions or Heroes within 1.5 seconds of hitting them with Chain Lightning.  Reward: After killing 10 enemies, reduce the Mana cost of Chain Lightning from 40 to 20.  Reward: After killing 20 enemies, gain a second charge of Chain Lightning."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpyt8av",
        "level": 4,
        "name": {
          "fr": "Feral Resilience",
          "en": "Feral Resilience"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_feralspirit.png",
        "description": {
          "fr": "Heroes damaged by Feral Spirit grant 4 stacks of Frostwolf Resilience and 2 stacks of Feral Resilience, granting 75 Physical Armor against the next incoming Hero Basic Attack.  Stacks are consumed on the next cast of Feral Spirit.",
          "en": "Heroes damaged by Feral Spirit grant 4 stacks of Frostwolf Resilience and 2 stacks of Feral Resilience, granting 75 Physical Armor against the next incoming Hero Basic Attack.  Stacks are consumed on the next cast of Feral Spirit."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpiz3ng",
        "level": 7,
        "name": {
          "fr": "Maelstrom Weapon",
          "en": "Maelstrom Weapon"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_windfury.png",
        "description": {
          "fr": "Repeatable Quest: Basic Attacks against Heroes while Windfury's Movement Speed bonus is active increase Attack Damage by 1.  Reward: After gaining 20 Attack Damage, increase the Movement Speed bonus of Windfury to 40%.  Reward: After gaining 40 Attack Damage, Thrall permanently gains 15% increased Movement Speed.",
          "en": "Repeatable Quest: Basic Attacks against Heroes while Windfury's Movement Speed bonus is active increase Attack Damage by 1.  Reward: After gaining 20 Attack Damage, increase the Movement Speed bonus of Windfury to 40%.  Reward: After gaining 40 Attack Damage, Thrall permanently gains 15% increased Movement Speed."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpkmi8c",
        "level": 10,
        "name": {
          "fr": "Sundering",
          "en": "Sundering"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_sundering.png",
        "description": {
          "fr": "After 0.5 seconds, sunder the earth in a long line, dealing 290 (+4% per level) damage and shoving enemies to the side, Stunning them for 1 second.",
          "en": "After 0.5 seconds, sunder the earth in a long line, dealing 290 (+4% per level) damage and shoving enemies to the side, Stunning them for 1 second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpwa7d3",
        "level": 13,
        "name": {
          "fr": "Grace Of Air",
          "en": "Grace Of Air"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_windfury.png",
        "description": {
          "fr": "Windfury attacks grant twice as many stacks of Frostwolf Resilience.",
          "en": "Windfury attacks grant twice as many stacks of Frostwolf Resilience."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpbnice",
        "level": 16,
        "name": {
          "fr": "Tempest Fury",
          "en": "Tempest Fury"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_windfury.png",
        "description": {
          "fr": "The final strike of Windfury hits 3 times for 75% normal damage.",
          "en": "The final strike of Windfury hits 3 times for 75% normal damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpoo4sg",
        "level": 20,
        "name": {
          "fr": "Worldbreaker",
          "en": "Worldbreaker"
        },
        "icon": "assets/heroes/base_spells/thrall/images/talents/storm_ui_icon_thrall_sundering.png",
        "description": {
          "fr": "Lower the cooldown of Sundering by 40 seconds. After Sundering impacts, it leaves behind an impassable rift, blocking unit movement for 3 seconds.",
          "en": "Lower the cooldown of Sundering by 40 seconds. After Sundering impacts, it leaves behind an impassable rift, blocking unit movement for 3 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "tracer",
    "enabled": false,
    "name": {
      "fr": "Tracer",
      "en": "Tracer"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tracer.png",
    "headline": {
      "fr": "Assassin ultra mobile impossible à attraper.",
      "en": "Ultra-mobile assassin who is impossible to catch."
    },
    "gameplay": {
      "fr": "Tracer harcèle en permanence, ne monte jamais et peut remonter le temps pour annuler les dégâts subis. Elle est parfaite pour le harcèlement de carte.",
      "en": "Tracer harasses nonstop, never mounts, and can rewind time to undo damage taken. She's perfect for map harassment."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Recharge",
          "en": "Reload"
        },
        "icon": "assets/heroes/base_spells/tracer/images/spells/storm_ui_icon_tracer_reload.png",
        "description": {
          "fr": "Tes attaques rechargent automatiquement ton chargeur.",
          "en": "Your attacks automatically reload your clip."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Translocation",
          "en": "Blink"
        },
        "icon": "assets/heroes/base_spells/tracer/images/spells/storm_ui_icon_tracer_blink_empty.png",
        "description": {
          "fr": "Se téléporte sur une courte distance.",
          "en": "Blinks a short distance."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Mêlée",
          "en": "Melee"
        },
        "icon": "assets/heroes/base_spells/tracer/images/spells/storm_ui_icon_tracer_melee.png",
        "description": {
          "fr": "Frappe de mêlée qui repousse.",
          "en": "Melee strike that knocks back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Retour",
          "en": "Recall"
        },
        "icon": "assets/heroes/base_spells/tracer/images/spells/storm_ui_icon_tracer_recall.png",
        "description": {
          "fr": "Reviens à ta position d'il y a quelques secondes et te soigne.",
          "en": "Return to where you were seconds ago and heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Bombe à fusion",
          "en": "Pulse Bomb"
        },
        "icon": "assets/heroes/base_spells/tracer/images/spells/storm_ui_icon_tracer_pulsebomb.png",
        "description": {
          "fr": "Colle une bombe sur un ennemi et l'inflige de gros dégâts.",
          "en": "Sticks a bomb on an enemy, dealing heavy damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Retour te ramène en arrière et te soigne : garde-le pour survivre.",
        "en": "Recall rewinds and heals you: save it to survive."
      },
      {
        "fr": "Tu ne montes pas : tu es toujours prête à te battre.",
        "en": "You don't mount: you're always ready to fight."
      },
      {
        "fr": "Bombe à fusion sur un tank est souvent du gâchis : vise les cibles fragiles.",
        "en": "Pulse Bomb on a tank is usually wasted: aim for squishies."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Tracer]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpinf92",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpkrkyt",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jplief3",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpc01nb",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpxzu75",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpt85ox",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp50nth",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpinf92",
        "level": 1,
        "name": {
          "fr": "One-Two Punch",
          "en": "One-Two Punch"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_melee.png",
        "description": {
          "fr": "Reduce the cooldown of Melee by 1 second and it gains an additional charge.",
          "en": "Reduce the cooldown of Melee by 1 second and it gains an additional charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpkrkyt",
        "level": 4,
        "name": {
          "fr": "Leeching Rounds",
          "en": "Leeching Rounds"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_reload.png",
        "description": {
          "fr": "Increase the healing from Basic Attacks by up to 200%, based on the amount of health Tracer is missing.",
          "en": "Increase the healing from Basic Attacks by up to 200%, based on the amount of health Tracer is missing."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jplief3",
        "level": 7,
        "name": {
          "fr": "Sleight of Hand",
          "en": "Sleight of Hand"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_reload.png",
        "description": {
          "fr": "Reduces Reload time by 50%. This equals 20% more damage per second.",
          "en": "Reduces Reload time by 50%. This equals 20% more damage per second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpc01nb",
        "level": 10,
        "name": {
          "fr": "Sticky Bomb",
          "en": "Sticky Bomb"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_pulsebomb.png",
        "description": {
          "fr": "Increases Pulse Bomb's radius by 50% and enemies hit are Slowed by 70% for 3 seconds.",
          "en": "Increases Pulse Bomb's radius by 50% and enemies hit are Slowed by 70% for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpxzu75",
        "level": 13,
        "name": {
          "fr": "Untouchable",
          "en": "Untouchable"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_combo_q_trait.png",
        "description": {
          "fr": "Passive: After Blinking, gain 20% Movement Speed for 1.25 seconds.  Quest: Takedowns increase Tracer's Basic Attack damage by 5%, up to 25%. These bonuses are lost on death.",
          "en": "Passive: After Blinking, gain 20% Movement Speed for 1.25 seconds.  Quest: Takedowns increase Tracer's Basic Attack damage by 5%, up to 25%. These bonuses are lost on death."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpt85ox",
        "level": 16,
        "name": {
          "fr": "Bullet Spray",
          "en": "Bullet Spray"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_melee.png",
        "description": {
          "fr": "Increases the radius of Melee by 30%, and causes it to damage all enemies in range.",
          "en": "Increases the radius of Melee by 30%, and causes it to damage all enemies in range."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp50nth",
        "level": 20,
        "name": {
          "fr": "Chrono Triggers",
          "en": "Chrono Triggers"
        },
        "icon": "assets/heroes/base_spells/tracer/images/talents/storm_ui_icon_tracer_combo_q_trait.png",
        "description": {
          "fr": "Casting Blink causes Basic Attacks to not consume ammo for 1 second.",
          "en": "Casting Blink causes Basic Attacks to not consume ammo for 1 second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "tychus",
    "enabled": false,
    "name": {
      "fr": "Tychus",
      "en": "Tychus"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tychus.png",
    "headline": {
      "fr": "Assassin anti-tank qui inflige des dégâts en pourcentage de vie.",
      "en": "Anti-tank assassin dealing percentage-of-Health damage."
    },
    "gameplay": {
      "fr": "Tychus fond sur les cibles les plus résistantes grâce à ses dégâts en pourcentage, et tient les combats longs avec Cavale.",
      "en": "Tychus melts the toughest targets thanks to %-Health damage and survives long fights with Run and Gun."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Minigun",
          "en": "Minigun"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_minigun.png",
        "description": {
          "fr": "Tes attaques successives infligent de plus en plus de dégâts.",
          "en": "Your successive attacks deal increasing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Tir en rafale",
          "en": "Overkill"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_overkill.png",
        "description": {
          "fr": "Rafale qui inflige des dégâts basés sur la vie de la cible.",
          "en": "Burst dealing damage based on the target's Health."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Grenade à fragmentation",
          "en": "Frag Grenade"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_fraggrenade.png",
        "description": {
          "fr": "Explosion de zone qui repousse.",
          "en": "Area explosion that knocks back."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Cavale",
          "en": "Run and Gun"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_runandgun.png",
        "description": {
          "fr": "Déplacement rapide en tirant.",
          "en": "Quick dash while shooting."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Foreuse laser Drakken",
          "en": "Drakken Laser Drill"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_drakkinlaserdrill.png",
        "description": {
          "fr": "Un laser bombarde une zone en continu.",
          "en": "A laser bombards an area continuously."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Réquisition d'Odin",
          "en": "Commandeer Odin"
        },
        "icon": "assets/heroes/base_spells/tychus/images/spells/storm_ui_icon_tychus_commandeerodin.png",
        "description": {
          "fr": "Pilote un Odin, très résistant et très puissant.",
          "en": "Pilot an Odin: very tough and very powerful."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tes dégâts sont proportionnels à la vie : concentre les tanks.",
        "en": "Your damage scales with Health: focus tanks."
      },
      {
        "fr": "Cavale sert autant à fuir qu'à replacer ton tir.",
        "en": "Run and Gun is as good for escaping as for repositioning."
      },
      {
        "fr": "Odin transforme un combat d'objectif entier.",
        "en": "Odin can swing an entire objective fight."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Tychus]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jp7s9yu",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpq3ak9",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpgxzl1",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpbaiiw",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jp1e25e",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpi88qo",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp4r79i",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jp7s9yu",
        "level": 1,
        "name": {
          "fr": "Quarterback",
          "en": "Quarterback"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_fraggrenade.png",
        "description": {
          "fr": "Increases Frag Grenade's damage by 10% and its range by 50%.",
          "en": "Increases Frag Grenade's damage by 10% and its range by 50%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpq3ak9",
        "level": 4,
        "name": {
          "fr": "In the Rhythm",
          "en": "In the Rhythm"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_minigun.png",
        "description": {
          "fr": "Quest: While Minigun is active, Basic Attacks against Heroes permanently increase future Minigun durations by 0.03 seconds.",
          "en": "Quest: While Minigun is active, Basic Attacks against Heroes permanently increase future Minigun durations by 0.03 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpgxzl1",
        "level": 7,
        "name": {
          "fr": "Melting Point",
          "en": "Melting Point"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_fraggrenade.png",
        "description": {
          "fr": "Enemies hit by Frag Grenade take an additional 75 (+4% per level) damage over 3 seconds. This damage is increased by 100% against Minions, Mercenaries, and Monsters.",
          "en": "Enemies hit by Frag Grenade take an additional 75 (+4% per level) damage over 3 seconds. This damage is increased by 100% against Minions, Mercenaries, and Monsters."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpbaiiw",
        "level": 10,
        "name": {
          "fr": "Commandeer Odin",
          "en": "Commandeer Odin"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_commandeerodin.png",
        "description": {
          "fr": "Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. The Odin has 25 Armor and lasts 23 seconds.",
          "en": "Call down an Odin to pilot. The Odin deals increased Damage, has 100% increased Basic Attack range, and uses different Abilities. The Odin has 25 Armor and lasts 23 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp1e25e",
        "level": 13,
        "name": {
          "fr": "Spray 'n' Pray",
          "en": "Spray 'n' Pray"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_overkill.png",
        "description": {
          "fr": "Overkill Slows enemy Movement Speed by 25% and its range is increased by 25%.",
          "en": "Overkill Slows enemy Movement Speed by 25% and its range is increased by 25%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpi88qo",
        "level": 16,
        "name": {
          "fr": "Armor Piercing Rounds",
          "en": "Armor Piercing Rounds"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_overkill.png",
        "description": {
          "fr": "Each time Overkill hits an enemy, its damage against them is increased by 15%, stacking up to 60% bonus damage.",
          "en": "Each time Overkill hits an enemy, its damage against them is increased by 15%, stacking up to 60% bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp4r79i",
        "level": 20,
        "name": {
          "fr": "Big Red Button",
          "en": "Big Red Button"
        },
        "icon": "assets/heroes/base_spells/tychus/images/talents/storm_ui_icon_tychus_commandeerodin.png",
        "description": {
          "fr": "Odin lasts 50% longer and Ragnarok Missiles also launches a Nuclear Missile which lands 2.5 seconds later, dealing 319 (+4% per level) damage in its area.",
          "en": "Odin lasts 50% longer and Ragnarok Missiles also launches a Nuclear Missile which lands 2.5 seconds later, dealing 319 (+4% per level) damage in its area."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "tyrael",
    "enabled": false,
    "name": {
      "fr": "Tyrael",
      "en": "Tyrael"
    },
    "role": "Tank",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_tyrael.png",
    "headline": {
      "fr": "Tank de soutien qui bouclie toute son équipe.",
      "en": "Supportive tank who shields his whole team."
    },
    "gameplay": {
      "fr": "Tyrael plante El'Druin puis se téléporte à l'épée pour se replacer, tout en donnant des boucliers de zone avec Droiture.",
      "en": "Tyrael plants El'Druin then teleports to the sword to reposition, all while granting AoE shields with Righteousness."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Courroux de l'archange",
          "en": "Archangel's Wrath"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_archangelswrath.png",
        "description": {
          "fr": "À ta mort, tu continues d'agir puis explose en infligeant des dégâts.",
          "en": "On death you keep acting, then explode dealing damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Puissance d'El'Druin",
          "en": "El'druin's Might"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_eldruinsmight_a.png",
        "description": {
          "fr": "Plante ton épée ; réactive pour t'y téléporter et attirer les ennemis.",
          "en": "Plants your sword; reactivate to teleport to it and pull enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Droiture",
          "en": "Righteousness"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_righteousness.png",
        "description": {
          "fr": "Bouclier pour toi et les alliés proches.",
          "en": "Shields you and nearby allies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Châtiment",
          "en": "Smite"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_smite.png",
        "description": {
          "fr": "Frappe en avant et accélère les alliés touchés.",
          "en": "Strikes forward and speeds up allies hit."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Jugement",
          "en": "Judgment"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_judgement.png",
        "description": {
          "fr": "Fonce sur un héros, l'étourdit ainsi que les ennemis proches.",
          "en": "Charges a Hero, stunning them and nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Sanctification",
          "en": "Sanctification"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/spells/storm_ui_icon_tyrael_sanctification.png",
        "description": {
          "fr": "Crée un dôme qui rend tes alliés insensibles aux contrôles.",
          "en": "Creates a dome making allies immune to crowd control."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Plante El'Druin en retrait avant d'engager pour garder une sortie.",
        "en": "Plant El'Druin behind you before engaging to keep an exit."
      },
      {
        "fr": "Droiture protège aussi tes alliés proches : place-toi entre eux et l'ennemi.",
        "en": "Righteousness also shields nearby allies: stand between them and the enemy."
      },
      {
        "fr": "Ta mort déclenche une explosion : elle peut retourner un combat.",
        "en": "Your death triggers an explosion: it can turn a fight around."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Tyrael]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpyxduu",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jp979s5",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpcrc47",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpzhr23",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpoxt1j",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpbs7t7",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp3guw0",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpyxduu",
        "level": 1,
        "name": {
          "fr": "Salvation",
          "en": "Salvation"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_righteousness.png",
        "description": {
          "fr": "Increase the Shield amount Tyrael gains from Righteousness by 40% and heal Tyrael for 140 (+4% per level) Health if his Shield is destroyed. Does not increase the Shield amount gained by allies.",
          "en": "Increase the Shield amount Tyrael gains from Righteousness by 40% and heal Tyrael for 140 (+4% per level) Health if his Shield is destroyed. Does not increase the Shield amount gained by allies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp979s5",
        "level": 4,
        "name": {
          "fr": "Stalwart Angel",
          "en": "Stalwart Angel"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
        "description": {
          "fr": "Gain 25 Armor while El'druin's Might is active, and for 3 seconds after teleporting.",
          "en": "Gain 25 Armor while El'druin's Might is active, and for 3 seconds after teleporting."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpcrc47",
        "level": 7,
        "name": {
          "fr": "Reciprocate",
          "en": "Reciprocate"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_righteousness.png",
        "description": {
          "fr": "When Tyrael's Shield from Righteousness expires or is destroyed, it deals 190 (+4% per level) damage to nearby enemies.",
          "en": "When Tyrael's Shield from Righteousness expires or is destroyed, it deals 190 (+4% per level) damage to nearby enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpzhr23",
        "level": 10,
        "name": {
          "fr": "Judgment",
          "en": "Judgment"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_judgement.png",
        "description": {
          "fr": "After 0.75 seconds, charge an enemy Hero, dealing 150 (+4% per level) damage and Stunning them for 1.5 seconds. Nearby enemies are knocked away and take 75 (+4% per level) damage.",
          "en": "After 0.75 seconds, charge an enemy Hero, dealing 150 (+4% per level) damage and Stunning them for 1.5 seconds. Nearby enemies are knocked away and take 75 (+4% per level) damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpoxt1j",
        "level": 13,
        "name": {
          "fr": "Sword of Justice",
          "en": "Sword of Justice"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_eldruinsmight_a.png",
        "description": {
          "fr": "Upon teleporting using El'druin's Might, El'druin swaps places with Tyrael, and El'druin's Might can be reactivated to teleport an additional time.",
          "en": "Upon teleporting using El'druin's Might, El'druin swaps places with Tyrael, and El'druin's Might can be reactivated to teleport an additional time."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpbs7t7",
        "level": 16,
        "name": {
          "fr": "Horadric Reforging",
          "en": "Horadric Reforging"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_talent_autoattack_cooldown.png",
        "description": {
          "fr": "Tyrael's Basic Attacks reduce the cooldown of El'druin's Might by 2 seconds.",
          "en": "Tyrael's Basic Attacks reduce the cooldown of El'druin's Might by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp3guw0",
        "level": 20,
        "name": {
          "fr": "Angel of Justice",
          "en": "Angel of Justice"
        },
        "icon": "assets/heroes/base_spells/tyrael/images/talents/storm_ui_icon_tyrael_judgement.png",
        "description": {
          "fr": "Increases the cast range of Judgment by 50%, and reduces the cooldown by 40 seconds.",
          "en": "Increases the cast range of Judgment by 50%, and reduces the cooldown by 40 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "valeera",
    "enabled": false,
    "name": {
      "fr": "Valeera",
      "en": "Valeera"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_valeera.png",
    "headline": {
      "fr": "Assassin furtif qui supprime une cible isolée en quelques secondes.",
      "en": "Stealth assassin who deletes an isolated target in seconds."
    },
    "gameplay": {
      "fr": "Valeera reste invisible, ouvre le combat par une ouverture depuis la furtivité et dépense ses points de combo pour éliminer sa cible.",
      "en": "Valeera stays hidden, opens from stealth, and spends combo points to finish her target."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Disparition",
          "en": "Vanish"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_vanish.png",
        "description": {
          "fr": "Deviens invisible et renforce ta prochaine capacité.",
          "en": "Become invisible and empower your next ability."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Attaque sournoise",
          "en": "Sinister Strike"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_sinisterstrike.png",
        "description": {
          "fr": "Fonce sur une cible et la frappe.",
          "en": "Dashes to a target and strikes."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Déluge de lames",
          "en": "Blade Flurry"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_bladeflurry.png",
        "description": {
          "fr": "Dégâts de zone autour de toi.",
          "en": "Area damage around you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Éviscération",
          "en": "Eviscerate"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_eviscerate.png",
        "description": {
          "fr": "Finisher qui consomme tes points de combo.",
          "en": "Finisher that spends your combo points."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Cape d'ombre",
          "en": "Cloak of Shadows"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_cloakofshadows.png",
        "description": {
          "fr": "Immunité aux sorts pendant quelques secondes.",
          "en": "Spell immunity for a few seconds."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Bombe fumigène",
          "en": "Smoke Bomb"
        },
        "icon": "assets/heroes/base_spells/valeera/images/spells/storm_ui_icon_valeera_smokebomb.png",
        "description": {
          "fr": "Zone où toi et tes alliés êtes intouchables.",
          "en": "Zone where you and allies are untargetable."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ouvre toujours depuis la furtivité : tes sorts sont renforcés.",
        "en": "Always open from stealth: your abilities are empowered."
      },
      {
        "fr": "Disparition remet à zéro le focus ennemi : sers-t'en pour survivre.",
        "en": "Vanish resets enemy focus: use it to survive."
      },
      {
        "fr": "Bombe fumigène protège aussi tes alliés d'un burst.",
        "en": "Smoke Bomb also protects allies from burst damage."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Valeera]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpvdvud",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpcs6kq",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpzv8d2",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpi68sc",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpwkxnt",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jp918ov",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jpk5svk",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpvdvud",
        "level": 1,
        "name": {
          "fr": "Vigor",
          "en": "Vigor"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_talent_conjurerspursuit.png",
        "description": {
          "fr": "Valeera regenerates an additional 3 Energy per second.  Reward: After Gathering 20 Regen Globes, increase Valeera's maximum Energy to 120.",
          "en": "Valeera regenerates an additional 3 Energy per second.  Reward: After Gathering 20 Regen Globes, increase Valeera's maximum Energy to 120."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpcs6kq",
        "level": 4,
        "name": {
          "fr": "Relentless Strikes",
          "en": "Relentless Strikes"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        "description": {
          "fr": "Reduces the Energy cost of Sinister Strike by 10.",
          "en": "Reduces the Energy cost of Sinister Strike by 10."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpzv8d2",
        "level": 7,
        "name": {
          "fr": "Mutilate",
          "en": "Mutilate"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        "description": {
          "fr": "Sinister Strike now hits with both blades, dealing 125% additional damage, but its range is reduced by 1.",
          "en": "Sinister Strike now hits with both blades, dealing 125% additional damage, but its range is reduced by 1."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpi68sc",
        "level": 10,
        "name": {
          "fr": "Smoke Bomb",
          "en": "Smoke Bomb"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_smokebomb.png",
        "description": {
          "fr": "Create a cloud of smoke. While in the smoke, Valeera is Unrevealable, can pass through other units, and gains 60 Armor, reducing damage taken by 60%. Valeera can continue to attack and use abilities without being revealed. Lasts 5 seconds.  Using this Ability does not break Stealth.",
          "en": "Create a cloud of smoke. While in the smoke, Valeera is Unrevealable, can pass through other units, and gains 60 Armor, reducing damage taken by 60%. Valeera can continue to attack and use abilities without being revealed. Lasts 5 seconds.  Using this Ability does not break Stealth."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpwkxnt",
        "level": 13,
        "name": {
          "fr": "Death From Above",
          "en": "Death From Above"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_ambush.png",
        "description": {
          "fr": "Teleporting with Ambush reduces the cooldown of Vanish by 4 seconds.",
          "en": "Teleporting with Ambush reduces the cooldown of Vanish by 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp918ov",
        "level": 16,
        "name": {
          "fr": "Seal Fate",
          "en": "Seal Fate"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_sinisterstrike.png",
        "description": {
          "fr": "Sinister Strike deals 50% additional damage and generates an additional Combo Point when used against Silenced, Rooted, or Stunned enemy Heroes.",
          "en": "Sinister Strike deals 50% additional damage and generates an additional Combo Point when used against Silenced, Rooted, or Stunned enemy Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpk5svk",
        "level": 20,
        "name": {
          "fr": "Adrenaline Rush",
          "en": "Adrenaline Rush"
        },
        "icon": "assets/heroes/base_spells/valeera/images/talents/storm_ui_icon_valeera_smokebomb.png",
        "description": {
          "fr": "While in the Smoke Bomb, Valeera regenerates an additional 40 Energy per second.",
          "en": "While in the Smoke Bomb, Valeera regenerates an additional 40 Energy per second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "valla",
    "enabled": false,
    "name": {
      "fr": "Valla",
      "en": "Valla"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_demonhunter.png",
    "headline": {
      "fr": "Assassin d'attaques de base qui monte en puissance dans le combat.",
      "en": "Auto-attack assassin who ramps up during a fight."
    },
    "gameplay": {
      "fr": "Valla accumule la Haine en attaquant pour augmenter ses dégâts et sa vitesse, et se repositionne sans arrêt avec Saut.",
      "en": "Valla builds Hatred by attacking to raise her damage and speed, and constantly repositions with Vault."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Haine",
          "en": "Hatred"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_hatred.png",
        "description": {
          "fr": "Tes attaques accumulent la Haine et augmentent tes dégâts.",
          "en": "Your attacks build Hatred, increasing your damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Flèche affamée",
          "en": "Hungering Arrow"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_hungeringarrow.png",
        "description": {
          "fr": "Flèche qui rebondit entre les ennemis.",
          "en": "Arrow that bounces between enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Tir multiple",
          "en": "Multishot"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_multishot.png",
        "description": {
          "fr": "Salve de flèches en cône.",
          "en": "Volley of arrows in a cone."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Saut",
          "en": "Vault"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_vault.png",
        "description": {
          "fr": "Roulade rapide pour te repositionner.",
          "en": "Quick roll to reposition."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Tir en rafale",
          "en": "Strafe"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_strafe.png",
        "description": {
          "fr": "Tirs automatiques rapides sur les ennemis proches.",
          "en": "Rapid automatic shots at nearby enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Pluie vengeresse",
          "en": "Rain of Vengeance"
        },
        "icon": "assets/heroes/base_spells/valla/images/spells/storm_ui_icon_valla_rainofvengeance.png",
        "description": {
          "fr": "Fait pleuvoir des vengeurs qui étourdissent.",
          "en": "Rains avengers that stun enemies."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Garde tes charges de Haine actives en attaquant régulièrement.",
        "en": "Keep your Hatred stacks up by attacking regularly."
      },
      {
        "fr": "Saut sert à esquiver un contrôle, pas seulement à fuir.",
        "en": "Vault dodges crowd control, not just escapes."
      },
      {
        "fr": "Tir en rafale te rend immobile : lance-le au bon moment.",
        "en": "Strafe locks you in place: cast it at the right time."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,DemonHunter]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpydn7y",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpsqzvn",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jptj132",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpziqdj",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpcrzjc",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpby46p",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jps7nly",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpydn7y",
        "level": 1,
        "name": {
          "fr": "Puncturing Arrow",
          "en": "Puncturing Arrow"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        "description": {
          "fr": "Increase the number of Hungering Arrow bounces by 1.  Quest: Hitting an enemy Hero with the initial impact of Hungering Arrow refunds 40 Mana and permanently increases the damage of its initial impact by 6.",
          "en": "Increase the number of Hungering Arrow bounces by 1.  Quest: Hitting an enemy Hero with the initial impact of Hungering Arrow refunds 40 Mana and permanently increases the damage of its initial impact by 6."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpsqzvn",
        "level": 4,
        "name": {
          "fr": "Arsenal",
          "en": "Arsenal"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_multishot.png",
        "description": {
          "fr": "Increase the range of Multishot by 20%. Multishot also fires 3 grenades that deal 100 (+4% per level) damage and refund 25 Mana after hitting enemy Heroes.",
          "en": "Increase the range of Multishot by 20%. Multishot also fires 3 grenades that deal 100 (+4% per level) damage and refund 25 Mana after hitting enemy Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jptj132",
        "level": 7,
        "name": {
          "fr": "Monster Hunter",
          "en": "Monster Hunter"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_hungeringarrow.png",
        "description": {
          "fr": "Hungering Arrow deals 150% additional damage to Minions, Mercenaries, and Monsters.",
          "en": "Hungering Arrow deals 150% additional damage to Minions, Mercenaries, and Monsters."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpziqdj",
        "level": 10,
        "name": {
          "fr": "Strafe",
          "en": "Strafe"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_strafe.png",
        "description": {
          "fr": "Rapidly attack enemies within 10 range for 60 (+4% per level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds.",
          "en": "Rapidly attack enemies within 10 range for 60 (+4% per level) damage per hit, prioritizing Heroes over Minions. Valla is able to move and use Vault while strafing. Lasts for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpcrzjc",
        "level": 13,
        "name": {
          "fr": "Siphoning Arrows",
          "en": "Siphoning Arrows"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_siphoningarrow.png",
        "description": {
          "fr": "Hitting a Hero with Hungering Arrow heals Valla for 4% of her maximum Health, and Multishot heals for 2%.",
          "en": "Hitting a Hero with Hungering Arrow heals Valla for 4% of her maximum Health, and Multishot heals for 2%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpby46p",
        "level": 16,
        "name": {
          "fr": "Punishment",
          "en": "Punishment"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_multishot.png",
        "description": {
          "fr": "While at max Hatred, Multishot's cooldown recharges 50% faster.",
          "en": "While at max Hatred, Multishot's cooldown recharges 50% faster."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jps7nly",
        "level": 20,
        "name": {
          "fr": "Death Siphon",
          "en": "Death Siphon"
        },
        "icon": "assets/heroes/base_spells/valla/images/talents/storm_ui_icon_valla_strafe.png",
        "description": {
          "fr": "Hitting an enemy Hero with Strafe increases its duration by 0.125 seconds. Strafe also fires penetrating bolts in a line for 34 (+4% per level) damage every 0.25 seconds.",
          "en": "Hitting an enemy Hero with Strafe increases its duration by 0.125 seconds. Strafe also fires penetrating bolts in a line for 34 (+4% per level) damage every 0.25 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "varian",
    "enabled": false,
    "name": {
      "fr": "Varian",
      "en": "Varian"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_varian.png",
    "headline": {
      "fr": "Bruiser modulable : tank, dégâts ou provocation selon ton niveau 10.",
      "en": "Flexible bruiser: tank, damage, or taunt depending on your level 10."
    },
    "gameplay": {
      "fr": "Varian choisit son rôle au niveau 10 : Provocation pour tanker, Lames jumelles de fureur pour les dégâts soutenus, ou Broyeur de colosse pour le burst.",
      "en": "Varian picks his role at level 10: Taunt to tank, Twin Blades of Fury for sustained damage, or Colossus Smash for burst."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Frappe héroïque",
          "en": "Heroic Strike"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_heroicstrike.png",
        "description": {
          "fr": "Ta prochaine attaque inflige des dégâts bonus.",
          "en": "Your next Basic Attack deals bonus damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Croc du lion",
          "en": "Lion's Fang"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_lionsfang.png",
        "description": {
          "fr": "Projette une onde qui blesse et ralentit en ligne.",
          "en": "Fires a wave that damages and slows in a line."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Parade",
          "en": "Parry"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_parry.png",
        "description": {
          "fr": "Réduit fortement les dégâts d'attaques reçus.",
          "en": "Greatly reduces incoming Basic Attack damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Charge",
          "en": "Charge"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_charge.png",
        "description": {
          "fr": "Fonce sur un ennemi et le ralentit.",
          "en": "Charges an enemy and slows them."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Provocation",
          "en": "Taunt"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_taunt.png",
        "description": {
          "fr": "Force les ennemis proches à t'attaquer et gagne de l'armure.",
          "en": "Forces nearby enemies to attack you and grants Armor."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Broyeur de colosse",
          "en": "Colossus Smash"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_colossus_smash.png",
        "description": {
          "fr": "Frappe massive qui rend la cible vulnérable.",
          "en": "Massive strike that makes the target Vulnerable."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R3",
        "name": {
          "fr": "Lames jumelles de fureur",
          "en": "Twin Blades of Fury"
        },
        "icon": "assets/heroes/base_spells/varian/images/spells/storm_ui_icon_varian_twinbladesoffury.png",
        "description": {
          "fr": "Combat à deux armes pour des dégâts soutenus.",
          "en": "Dual-wield for sustained damage."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Décide de ton niveau 10 en fonction de la composition de ton équipe.",
        "en": "Choose your level 10 based on your team composition."
      },
      {
        "fr": "Charge sert à engager mais aussi à rattraper une cible qui fuit.",
        "en": "Charge engages but also catches a fleeing target."
      },
      {
        "fr": "Parade réduit les dégâts d'attaque : utilise-la contre les assassins.",
        "en": "Parry reduces Basic Attack damage: use it against auto-attackers."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Varian]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpwqevc",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jph0nw0",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpnx6p6",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jp4qclx",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpp97q6",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jp6h5lj",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp33536",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpwqevc",
        "level": 1,
        "name": {
          "fr": "Lion's Maw",
          "en": "Lion's Maw"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_lionsfang.png",
        "description": {
          "fr": "Quest: Every time Lion's Fang hits a Hero, increase its damage by 7, up to 175.  Reward: After hitting 25 Heroes, the Slow is increased to 50% and its duration is increased to 2 seconds.",
          "en": "Quest: Every time Lion's Fang hits a Hero, increase its damage by 7, up to 175.  Reward: After hitting 25 Heroes, the Slow is increased to 50% and its duration is increased to 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jph0nw0",
        "level": 4,
        "name": {
          "fr": "Taunt",
          "en": "Taunt"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_taunt.png",
        "description": {
          "fr": "Silence a target Hero and force them to attack Varian for 1.25 seconds.  Passive: Maximum Health and Health Regeneration increased by 40%.",
          "en": "Silence a target Hero and force them to attack Varian for 1.25 seconds.  Passive: Maximum Health and Health Regeneration increased by 40%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpnx6p6",
        "level": 7,
        "name": {
          "fr": "Lionheart",
          "en": "Lionheart"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_lionsfang.png",
        "description": {
          "fr": "Increase Lion's Fang's healing from Heroes by 75%.",
          "en": "Increase Lion's Fang's healing from Heroes by 75%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp4qclx",
        "level": 10,
        "name": {
          "fr": "Shield Wall",
          "en": "Shield Wall"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_parry.png",
        "description": {
          "fr": "Parry grants Protected, preventing all incoming damage while active. Additionally, Parry's cooldown is reduced by 5 seconds, but it loses 1 charge.",
          "en": "Parry grants Protected, preventing all incoming damage while active. Additionally, Parry's cooldown is reduced by 5 seconds, but it loses 1 charge."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpp97q6",
        "level": 13,
        "name": {
          "fr": "Juggernaut",
          "en": "Juggernaut"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_charge.png",
        "description": {
          "fr": "Charge deals bonus damage to Heroes equal to 4% of their maximum Health.",
          "en": "Charge deals bonus damage to Heroes equal to 4% of their maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp6h5lj",
        "level": 16,
        "name": {
          "fr": "Banner of Stormwind",
          "en": "Banner of Stormwind"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_bannerofstormwind.png",
        "description": {
          "fr": "Activate to place a Banner that grants 25% increased Movement Speed to nearby allied Heroes. Lasts 12 seconds.",
          "en": "Activate to place a Banner that grants 25% increased Movement Speed to nearby allied Heroes. Lasts 12 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp33536",
        "level": 20,
        "name": {
          "fr": "Vigilance",
          "en": "Vigilance"
        },
        "icon": "assets/heroes/base_spells/varian/images/talents/storm_ui_icon_varian_taunt.png",
        "description": {
          "fr": "Being hit by a Hero Basic Attack reduces the cooldown of Taunt by 1 second.",
          "en": "Being hit by a Hero Basic Attack reduces the cooldown of Taunt by 1 second."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "xul",
    "enabled": false,
    "name": {
      "fr": "Xul",
      "en": "Xul"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_necromancer.png",
    "headline": {
      "fr": "Spécialiste de poussée qui transforme chaque sbire en squelette.",
      "en": "Push specialist who turns every minion into a skeleton."
    },
    "gameplay": {
      "fr": "Xul crée une armée de squelettes à partir des sbires tués, bloque les ennemis avec Prison d'os et affaiblit les attaques adverses.",
      "en": "Xul raises an army of skeletons from slain minions, locks enemies down with Bone Prison, and cripples enemy attacks."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Relever un squelette",
          "en": "Raise Skeleton"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_raiseskeleton.png",
        "description": {
          "fr": "Les sbires tués à proximité se relèvent en squelettes.",
          "en": "Nearby dying minions rise as skeletons."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Faux spectrale",
          "en": "Spectral Scythe"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_reap.png",
        "description": {
          "fr": "Projette une faux qui traverse les ennemis.",
          "en": "Throws a scythe that pierces enemies."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Frappes maudites",
          "en": "Cursed Strikes"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_cursedstrikes_off.png",
        "description": {
          "fr": "Tes attaques touchent en zone et aveuglent.",
          "en": "Your attacks hit in an area and blind."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Prison d'os",
          "en": "Bone Prison"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_boneprison.png",
        "description": {
          "fr": "Immobilise un ennemi après un court délai.",
          "en": "Roots an enemy after a short delay."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Mages squelettes",
          "en": "Skeletal Mages"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_skeletalmages.png",
        "description": {
          "fr": "Invoque des mages qui ralentissent fortement.",
          "en": "Summons mages that heavily slow."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Nova empoisonnée",
          "en": "Poison Nova"
        },
        "icon": "assets/heroes/base_spells/xul/images/spells/storm_ui_icon_necromancer_poisonnova.png",
        "description": {
          "fr": "Vague de poison en zone autour de toi.",
          "en": "Wave of poison around you."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tue les sbires proches des ennemis pour lever un maximum de squelettes.",
        "en": "Kill minions near enemies to raise as many skeletons as possible."
      },
      {
        "fr": "Frappes maudites aveugle : c'est un contre puissant aux assassins d'attaque.",
        "en": "Cursed Strikes blinds: a strong counter to auto-attack assassins."
      },
      {
        "fr": "Prison d'os immobilise après un délai : anticipe le déplacement.",
        "en": "Bone Prison roots after a delay: anticipate the movement."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Necromancer]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpamssj",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpsat44",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jp7wzxx",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpk18l2",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpbu5g4",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jp2id04",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jpxap3s",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpamssj",
        "level": 1,
        "name": {
          "fr": "Backlash",
          "en": "Backlash"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_bonearmor_b.png",
        "description": {
          "fr": "When Bone Armor expires, nearby enemy Heroes take damage equal to 12% of their maximum Health.",
          "en": "When Bone Armor expires, nearby enemy Heroes take damage equal to 12% of their maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpsat44",
        "level": 4,
        "name": {
          "fr": "Reaper's Toll",
          "en": "Reaper's Toll"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_reap.png",
        "description": {
          "fr": "Reduce the cooldown of Spectral Scythe by 2 seconds and its Mana cost by 15.",
          "en": "Reduce the cooldown of Spectral Scythe by 2 seconds and its Mana cost by 15."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp7wzxx",
        "level": 7,
        "name": {
          "fr": "Harvest Vitality",
          "en": "Harvest Vitality"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_cursedstrikes_off.png",
        "description": {
          "fr": "Cursed Strikes heals for 70% of the damage dealt to Heroes.",
          "en": "Cursed Strikes heals for 70% of the damage dealt to Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpk18l2",
        "level": 10,
        "name": {
          "fr": "Poison Nova",
          "en": "Poison Nova"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_poisonnova.png",
        "description": {
          "fr": "After 0.5 seconds, release poisonous missiles that deal 630 (+4% per level) damage to all enemies hit over 10 seconds.",
          "en": "After 0.5 seconds, release poisonous missiles that deal 630 (+4% per level) damage to all enemies hit over 10 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpbu5g4",
        "level": 13,
        "name": {
          "fr": "Echoes of Death",
          "en": "Echoes of Death"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_reap.png",
        "description": {
          "fr": "Spectral Scythe spawns 2 additional scythes next to the first after 1.5 seconds, dealing 40% damage.",
          "en": "Spectral Scythe spawns 2 additional scythes next to the first after 1.5 seconds, dealing 40% damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp2id04",
        "level": 16,
        "name": {
          "fr": "Decrepify",
          "en": "Decrepify"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_reap.png",
        "description": {
          "fr": "Enemy Heroes that are damaged by Spectral Scythe or Skeletal Warriors are Slowed by 30% for 2.5 seconds.",
          "en": "Enemy Heroes that are damaged by Spectral Scythe or Skeletal Warriors are Slowed by 30% for 2.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpxap3s",
        "level": 20,
        "name": {
          "fr": "Andariel's Visage",
          "en": "Andariel's Visage"
        },
        "icon": "assets/heroes/base_spells/xul/images/talents/storm_ui_icon_necromancer_poisonnova.png",
        "description": {
          "fr": "Poison Nova heals for 50% of the damage dealt and its duration is increased by 50%.",
          "en": "Poison Nova heals for 50% of the damage dealt and its duration is increased by 50%."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "yrel",
    "enabled": false,
    "name": {
      "fr": "Yrel",
      "en": "Yrel"
    },
    "role": "Bruiser",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_yrel.png",
    "headline": {
      "fr": "Bruiser de zone dont les sorts se renforcent en les chargeant.",
      "en": "Area bruiser whose abilities grow stronger when charged."
    },
    "gameplay": {
      "fr": "Yrel charge ses capacités pour maximiser leur effet, encaisse énormément avec Défenseur zélé et impose son terrain avec Sol sacré.",
      "en": "Yrel charges her abilities to maximize their effect, tanks huge damage with Ardent Defender, and claims ground with Sacred Ground."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Dessein divin",
          "en": "Divine Purpose"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_divine_purpose.png",
        "description": {
          "fr": "Tes capacités réduisent le temps de recharge de tes autres sorts.",
          "en": "Your abilities reduce your other cooldowns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Revendication",
          "en": "Vindication"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_vindication.png",
        "description": {
          "fr": "Explosion de zone qui étourdit une fois chargée.",
          "en": "AoE blast that stuns when fully charged."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Marteau vertueux",
          "en": "Righteous Hammer"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_righteous_hammer.png",
        "description": {
          "fr": "Frappe en zone et te soigne.",
          "en": "Area strike that heals you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Colère vengeresse",
          "en": "Avenging Wrath"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_avenging_wrath.png",
        "description": {
          "fr": "Bondit vers une zone et ralentit à l'atterrissage.",
          "en": "Leaps to an area, slowing on landing."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Défenseur zélé",
          "en": "Ardent Defender"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_ardent_defender.png",
        "description": {
          "fr": "Deviens presque invulnérable puis te soigne.",
          "en": "Become nearly invulnerable, then heal."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Sol sacré",
          "en": "Sacred Ground"
        },
        "icon": "assets/heroes/base_spells/yrel/images/spells/storm_ui_icon_yrel_sacred_ground.png",
        "description": {
          "fr": "Crée une zone où tu gagnes une grande quantité d'armure.",
          "en": "Creates a zone where you gain a large amount of Armor."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Charger tes sorts au maximum double presque leur effet.",
        "en": "Fully charging your abilities nearly doubles their effect."
      },
      {
        "fr": "Défenseur zélé annule un burst complet : garde-le pour le bon moment.",
        "en": "Ardent Defender negates an entire burst: save it."
      },
      {
        "fr": "Marteau vertueux te rend de la vie : reste au contact.",
        "en": "Righteous Hammer restores Health: stay in melee range."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Yrel]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpqex8k",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpr6w52",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpxgsp6",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jp3ewtt",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpm2qku",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpgpqv1",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jpgny13",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpqex8k",
        "level": 1,
        "name": {
          "fr": "Light of Karabor",
          "en": "Light of Karabor"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_vindication.png",
        "description": {
          "fr": "Increase Vindication's radius by 15%. Hitting an enemy Hero increases Vindication's healing by 45%. If more than one Hero is hit, the bonus is increased to 90%.",
          "en": "Increase Vindication's radius by 15%. Hitting an enemy Hero increases Vindication's healing by 45%. If more than one Hero is hit, the bonus is increased to 90%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpr6w52",
        "level": 4,
        "name": {
          "fr": "Aegis of Light",
          "en": "Aegis of Light"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_avenging_wrath.png",
        "description": {
          "fr": "Upon landing, Avenging Wrath grants other nearby allied Heroes 30 Armor for 4 seconds.",
          "en": "Upon landing, Avenging Wrath grants other nearby allied Heroes 30 Armor for 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpxgsp6",
        "level": 7,
        "name": {
          "fr": "Righteous Momentum",
          "en": "Righteous Momentum"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_righteous_hammer.png",
        "description": {
          "fr": "Gain 5% Movement Speed. Yrel is no longer Slowed while Channeling Righteous Hammer, and instead this bonus is quadrupled.",
          "en": "Gain 5% Movement Speed. Yrel is no longer Slowed while Channeling Righteous Hammer, and instead this bonus is quadrupled."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp3ewtt",
        "level": 10,
        "name": {
          "fr": "Ardent Defender",
          "en": "Ardent Defender"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_ardent_defender.png",
        "description": {
          "fr": "Surround Yrel in a barrier for 3 seconds, absorbing all damage taken and healing her for 50% of the damage received.",
          "en": "Surround Yrel in a barrier for 3 seconds, absorbing all damage taken and healing her for 50% of the damage received."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpm2qku",
        "level": 13,
        "name": {
          "fr": "Aldor Peacekeeper",
          "en": "Aldor Peacekeeper"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_vindication.png",
        "description": {
          "fr": "Enemy Heroes hit by Vindication at maximum charge deal 40% less damage for 3 seconds.",
          "en": "Enemy Heroes hit by Vindication at maximum charge deal 40% less damage for 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpgpqv1",
        "level": 16,
        "name": {
          "fr": "Templar's Verdict",
          "en": "Templar's Verdict"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_righteous_hammer.png",
        "description": {
          "fr": "Righteous Hammer reduces the Armor of enemy Heroes hit by 20 for 4 seconds and deals bonus damage equal to 7% of their maximum Health.",
          "en": "Righteous Hammer reduces the Armor of enemy Heroes hit by 20 for 4 seconds and deals bonus damage equal to 7% of their maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpgny13",
        "level": 20,
        "name": {
          "fr": "Word of Glory",
          "en": "Word of Glory"
        },
        "icon": "assets/heroes/base_spells/yrel/images/talents/storm_ui_icon_yrel_ardent_defender.png",
        "description": {
          "fr": "Increase the amount that Yrel heals from damage received from 50% to 75%. Ardent Defender heals nearby allied Heroes for 100% of the healing received by Yrel.",
          "en": "Increase the amount that Yrel heals from damage received from 50% to 75%. Ardent Defender heals nearby allied Heroes for 100% of the healing received by Yrel."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "zagara",
    "enabled": false,
    "name": {
      "fr": "Zagara",
      "en": "Zagara"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_zagara.png",
    "headline": {
      "fr": "Spécialiste zerg qui pousse les lignes sans jamais s'exposer.",
      "en": "Zerg specialist who pushes lanes without ever exposing herself."
    },
    "gameplay": {
      "fr": "Zagara couvre la carte de mucus pour la vision, invoque des zergs pour pousser en continu et peut se téléporter avec son réseau de nydus.",
      "en": "Zagara covers the map in creep for vision, summons zerg to push constantly, and can teleport with her Nydus Network."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Tumeur de mucus",
          "en": "Creep Tumor"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_creep.png",
        "description": {
          "fr": "Pose du mucus qui donne vision et vitesse.",
          "en": "Places creep that grants vision and speed."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Barrage de banelings",
          "en": "Baneling Barrage"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_banelingbarrage.png",
        "description": {
          "fr": "Lance des banelings qui explosent en zone.",
          "en": "Throws banelings that explode in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Chasseur tueur",
          "en": "Hunter Killer"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_hunterkiller.png",
        "description": {
          "fr": "Invoque un hydralisk qui poursuit une cible.",
          "en": "Summons a hydralisk that chases a target."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Largage infesté",
          "en": "Infested Drop"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_infesteddrop.png",
        "description": {
          "fr": "Invoque des zergs qui bloquent et attaquent.",
          "en": "Summons zerg that block and attack."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Réseau de nydus",
          "en": "Nydus Network"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_nydusworm.png",
        "description": {
          "fr": "Crée des vers de nydus pour te déplacer sur la carte.",
          "en": "Creates Nydus worms to travel across the map."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Gueule dévorante",
          "en": "Devouring Maw"
        },
        "icon": "assets/heroes/base_spells/zagara/images/spells/storm_ui_icon_zagara_devouringmaw.png",
        "description": {
          "fr": "Avale les ennemis d'une zone pendant plusieurs secondes.",
          "en": "Swallows enemies in an area for several seconds."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Ton mucus donne de la vision : couvre les objectifs.",
        "en": "Your creep grants vision: cover the objectives."
      },
      {
        "fr": "Chasseur tueur est une excellente source de dégâts à distance.",
        "en": "Hunter Killer is an excellent ranged damage source."
      },
      {
        "fr": "Réseau de nydus te permet d'être partout sur la carte.",
        "en": "Nydus Network lets you be everywhere on the map."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Zagara]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jphvmr4",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpu2ulv",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpdo4h5",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jp610sg",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpl7w7r",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpyxbcr",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp9er44",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jphvmr4",
        "level": 1,
        "name": {
          "fr": "Volatile Acid",
          "en": "Volatile Acid"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
        "description": {
          "fr": "Banelings can travel 50% further before exploding.",
          "en": "Banelings can travel 50% further before exploding."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpu2ulv",
        "level": 4,
        "name": {
          "fr": "Envenomed Spines",
          "en": "Envenomed Spines"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_talent_autoattack_range.png",
        "description": {
          "fr": "Activate to have Zagara's next Basic Attack apply 230 (+4% per level) damage over 5 seconds.",
          "en": "Activate to have Zagara's next Basic Attack apply 230 (+4% per level) damage over 5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpdo4h5",
        "level": 7,
        "name": {
          "fr": "Baneling Massacre",
          "en": "Baneling Massacre"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_banelingbarrage.png",
        "description": {
          "fr": "Gain 2 additional charges of Banelings Barrage, but increase its cooldown by 2 seconds.",
          "en": "Gain 2 additional charges of Banelings Barrage, but increase its cooldown by 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp610sg",
        "level": 10,
        "name": {
          "fr": "Devouring Maw",
          "en": "Devouring Maw"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_devouringmaw.png",
        "description": {
          "fr": "Summon a Devouring Maw that devours enemies for 4 seconds. Devoured enemies cannot fight and take 94 (+4% per level) damage per second.  Usable on Unstoppable enemies.",
          "en": "Summon a Devouring Maw that devours enemies for 4 seconds. Devoured enemies cannot fight and take 94 (+4% per level) damage per second.  Usable on Unstoppable enemies."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpl7w7r",
        "level": 13,
        "name": {
          "fr": "Hydralisk Transfusion",
          "en": "Hydralisk Transfusion"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_hunterkiller.png",
        "description": {
          "fr": "Zagara is healed for 60% of the damage dealt by Hunter Killers' Basic Attacks to Heroes.",
          "en": "Zagara is healed for 60% of the damage dealt by Hunter Killers' Basic Attacks to Heroes."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpyxbcr",
        "level": 16,
        "name": {
          "fr": "Corrosive Saliva",
          "en": "Corrosive Saliva"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_hunterkiller.png",
        "description": {
          "fr": "When attacking Heroes, Hunter Killers and Roachlings deal additional damage equal to 1.75% of their maximum Health.",
          "en": "When attacking Heroes, Hunter Killers and Roachlings deal additional damage equal to 1.75% of their maximum Health."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp9er44",
        "level": 20,
        "name": {
          "fr": "Tyrant Maw",
          "en": "Tyrant Maw"
        },
        "icon": "assets/heroes/base_spells/zagara/images/talents/storm_ui_icon_zagara_devouringmaw.png",
        "description": {
          "fr": "Devouring Maw deals 50% more damage. Takedowns reduce its cooldown by 25 seconds.",
          "en": "Devouring Maw deals 50% more damage. Takedowns reduce its cooldown by 25 seconds."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "zarya",
    "enabled": false,
    "name": {
      "fr": "Zarya",
      "en": "Zarya"
    },
    "role": "Support",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_zarya.png",
    "headline": {
      "fr": "Soutien qui bouclie ses alliés et devient de plus en plus destructrice.",
      "en": "Support who shields allies and becomes increasingly destructive."
    },
    "gameplay": {
      "fr": "Zarya gagne de l'énergie quand ses boucliers absorbent des dégâts. Bien jouée, elle finit par infliger des dégâts d'assassin tout en protégeant son équipe.",
      "en": "Zarya gains Energy when her shields absorb damage. Played well, she ends up dealing assassin-level damage while protecting her team."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Énergie",
          "en": "Energy"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_energy.png",
        "description": {
          "fr": "Les dégâts absorbés par tes boucliers augmentent tes dégâts.",
          "en": "Damage absorbed by your shields increases your damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Grenade à particules",
          "en": "Particle Grenade"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_particlegrenade.png",
        "description": {
          "fr": "Grenade qui rebondit et inflige des dégâts de zone.",
          "en": "Bouncing grenade that deals area damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Barrière personnelle",
          "en": "Personal Barrier"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_personalbarrier.png",
        "description": {
          "fr": "Te bouclie et te charge en énergie.",
          "en": "Shields you and charges your Energy."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Bouclier allié",
          "en": "Shield Ally"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_shieldally.png",
        "description": {
          "fr": "Bouclie un allié et te charge en énergie.",
          "en": "Shields an ally and charges your Energy."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Onde de gravité",
          "en": "Graviton Surge"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_gravitonsurge.png",
        "description": {
          "fr": "Attire et emprisonne les ennemis dans une zone.",
          "en": "Pulls and traps enemies in an area."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Zone d'expulsion",
          "en": "Expulsion Zone"
        },
        "icon": "assets/heroes/base_spells/zarya/images/spells/storm_ui_icon_zarya_expulsionzone.png",
        "description": {
          "fr": "Repousse les ennemis et interdit la zone.",
          "en": "Knocks enemies back and denies the area."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Bouclie juste avant l'impact d'un gros sort pour gagner un maximum d'énergie.",
        "en": "Shield right before a big ability lands to gain maximum Energy."
      },
      {
        "fr": "Ton énergie décroît : entretiens-la en boucliant régulièrement.",
        "en": "Your Energy decays: keep it up by shielding regularly."
      },
      {
        "fr": "Onde de gravité combinée à un sort de zone allié est dévastatrice.",
        "en": "Graviton Surge combined with an allied AoE is devastating."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Zarya]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpfmmxl",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpthtkk",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpw3t2z",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpy9b3c",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jp42w4b",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpnkspe",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp8wkwh",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpfmmxl",
        "level": 1,
        "name": {
          "fr": "Demolitions Expert",
          "en": "Demolitions Expert"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_particlegrenade.png",
        "description": {
          "fr": "Quest: For every 5 enemy Heroes hit by Particle Grenade, its recharge rate lowers by 0.4375 seconds, up to 3.5 seconds.  Reward: Once Particle Grenade has hit 40 enemy Heroes, its radius is increased by 15%.",
          "en": "Quest: For every 5 enemy Heroes hit by Particle Grenade, its recharge rate lowers by 0.4375 seconds, up to 3.5 seconds.  Reward: Once Particle Grenade has hit 40 enemy Heroes, its radius is increased by 15%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpthtkk",
        "level": 4,
        "name": {
          "fr": "I Am the Strongest",
          "en": "I Am the Strongest"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_personalbarrier.png",
        "description": {
          "fr": "Personal Barrier absorbs an additional 140 (+4% per level) damage.  Passive: Damage absorbed by Zarya's Shields contributes 20% more Energy.",
          "en": "Personal Barrier absorbs an additional 140 (+4% per level) damage.  Passive: Damage absorbed by Zarya's Shields contributes 20% more Energy."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpw3t2z",
        "level": 7,
        "name": {
          "fr": "Pinpoint Accuracy",
          "en": "Pinpoint Accuracy"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_particlegrenade.png",
        "description": {
          "fr": "Particle Grenade deals 30 (+4% per level) more damage and Slows Movement Speed by 25% for 2 seconds to enemies hit by the center of the blast.",
          "en": "Particle Grenade deals 30 (+4% per level) more damage and Slows Movement Speed by 25% for 2 seconds to enemies hit by the center of the blast."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpy9b3c",
        "level": 10,
        "name": {
          "fr": "Graviton Surge",
          "en": "Graviton Surge"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_gravitonsurge.png",
        "description": {
          "fr": "Launch a gravity bomb that detonates after 1 second and draws enemy Heroes toward the center for 2.5 seconds. Affected Heroes take 30 (+4% per level) damage a second.",
          "en": "Launch a gravity bomb that detonates after 1 second and draws enemy Heroes toward the center for 2.5 seconds. Affected Heroes take 30 (+4% per level) damage a second."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp42w4b",
        "level": 13,
        "name": {
          "fr": "Unstoppable Competitor",
          "en": "Unstoppable Competitor"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_personalbarrier.png",
        "description": {
          "fr": "Personal Barrier makes Zarya Unstoppable for up to 2 seconds.",
          "en": "Personal Barrier makes Zarya Unstoppable for up to 2 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpnkspe",
        "level": 16,
        "name": {
          "fr": "Cleansing Shield",
          "en": "Cleansing Shield"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_shieldally.png",
        "description": {
          "fr": "Causes Shield Ally to remove all disabling effects and reduces its cooldown by 3 seconds.",
          "en": "Causes Shield Ally to remove all disabling effects and reduces its cooldown by 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp8wkwh",
        "level": 20,
        "name": {
          "fr": "Gravity Kills",
          "en": "Gravity Kills"
        },
        "icon": "assets/heroes/base_spells/zarya/images/talents/storm_ui_icon_zarya_gravitonsurge.png",
        "description": {
          "fr": "Increases Graviton Surge's duration by 1 second and it Silences Heroes caught in its area.",
          "en": "Increases Graviton Surge's duration by 1 second and it Silences Heroes caught in its area."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "zeratul",
    "enabled": false,
    "name": {
      "fr": "Zeratul",
      "en": "Zeratul"
    },
    "role": "AssassinMelee",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_zeratul.png",
    "headline": {
      "fr": "Assassin furtif qui frappe fort et disparaît aussitôt.",
      "en": "Stealth assassin who bursts hard and vanishes instantly."
    },
    "gameplay": {
      "fr": "Zeratul se déplace en invisibilité permanente, place sa Pointe de singularité pour étourdir sa cible, puis s'échappe avec Clignotement.",
      "en": "Zeratul roams permanently cloaked, lands Singularity Spike to stun his target, then escapes with Blink."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Camouflage permanent",
          "en": "Permanent Cloak"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_cloak.png",
        "description": {
          "fr": "Tu es invisible en permanence hors combat.",
          "en": "You are permanently cloaked out of combat."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Fendoir",
          "en": "Cleave"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_cleave.png",
        "description": {
          "fr": "Frappe en cône devant toi.",
          "en": "Strikes in a cone in front of you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Pointe de singularité",
          "en": "Singularity Spike"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_singularityspike.png",
        "description": {
          "fr": "Plante une pointe qui explose et étourdit.",
          "en": "Plants a spike that detonates and stuns."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Clignotement",
          "en": "Blink"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_blink.png",
        "description": {
          "fr": "Se téléporte sur une courte distance.",
          "en": "Teleports a short distance."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Puissance des Nerazim",
          "en": "Might Of The Nerazim"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_mightofnerazim.png",
        "description": {
          "fr": "Renforce fortement tes capacités de base.",
          "en": "Greatly empowers your Basic Abilities."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Prison du Vide",
          "en": "Void Prison"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/spells/storm_ui_icon_zeratul_voidprison.png",
        "description": {
          "fr": "Fige tous les héros de la zone, alliés comme ennemis.",
          "en": "Freezes all Heroes in the area, allies and enemies alike."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Garde toujours une charge de Clignotement pour t'échapper.",
        "en": "Always keep a Blink charge to escape."
      },
      {
        "fr": "Pointe de singularité étourdit après un délai : anticipe le déplacement.",
        "en": "Singularity Spike stuns after a delay: anticipate movement."
      },
      {
        "fr": "Prison du Vide peut annuler tout un engagement ennemi.",
        "en": "Void Prison can completely negate an enemy engage."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Zeratul]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jp5k3jd",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jp5u6sz",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jp8f2oy",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jpz6zn4",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jp1l2m5",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpzc0ab",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jpxxm4u",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jp5k3jd",
        "level": 1,
        "name": {
          "fr": "Greater Cleave",
          "en": "Greater Cleave"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_cleave.png",
        "description": {
          "fr": "Increases the radius of Cleave by 33%.",
          "en": "Increases the radius of Cleave by 33%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp5u6sz",
        "level": 4,
        "name": {
          "fr": "Rending Cleave",
          "en": "Rending Cleave"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_cleave.png",
        "description": {
          "fr": "Cleave deals an additional 40% damage over 3 seconds.",
          "en": "Cleave deals an additional 40% damage over 3 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp8f2oy",
        "level": 7,
        "name": {
          "fr": "Wormhole",
          "en": "Wormhole"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_blink.png",
        "description": {
          "fr": "After 1.25 seconds, reactivate Blink to return to the point where it was cast from within 4 seconds.",
          "en": "After 1.25 seconds, reactivate Blink to return to the point where it was cast from within 4 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpz6zn4",
        "level": 10,
        "name": {
          "fr": "Might Of The Nerazim",
          "en": "Might Of The Nerazim"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_mightofnerazim.png",
        "description": {
          "fr": "Activate to cast an untalented version of Zeratul's most recently used Basic Ability, dealing 50% less damage.  Passive: After using an Ability, Zeratul's next Basic Attack within 6 seconds deals 30% more damage.",
          "en": "Activate to cast an untalented version of Zeratul's most recently used Basic Ability, dealing 50% less damage.  Passive: After using an Ability, Zeratul's next Basic Attack within 6 seconds deals 30% more damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp1l2m5",
        "level": 13,
        "name": {
          "fr": "Shroud of Adun",
          "en": "Shroud of Adun"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_cloak.png",
        "description": {
          "fr": "Zeratul gains a Shield equal to 20% of his Maximum Health over 3 seconds while under Permanent Cloak.",
          "en": "Zeratul gains a Shield equal to 20% of his Maximum Health over 3 seconds while under Permanent Cloak."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpzc0ab",
        "level": 16,
        "name": {
          "fr": "Master Warp-Blade",
          "en": "Master Warp-Blade"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_talent_autoattack_damage.png",
        "description": {
          "fr": "Every third consecutive Basic Attack against the same target deals 125% bonus damage.",
          "en": "Every third consecutive Basic Attack against the same target deals 125% bonus damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpxxm4u",
        "level": 20,
        "name": {
          "fr": "Twilight Falls",
          "en": "Twilight Falls"
        },
        "icon": "assets/heroes/base_spells/zeratul/images/talents/storm_ui_icon_zeratul_mightofnerazim.png",
        "description": {
          "fr": "Might of the Nerazim resets the cooldown of all Basic Abilities.",
          "en": "Might of the Nerazim resets the cooldown of all Basic Abilities."
        },
        "demoYoutubeId": null
      }
    ]
  },
  {
    "id": "zuljin",
    "enabled": false,
    "name": {
      "fr": "Zul'jin",
      "en": "Zul'jin"
    },
    "role": "AssassinDistance",
    "portrait": "assets/heroes/portraits/storm_ui_glues_draft_portrait_zuljin.png",
    "headline": {
      "fr": "Assassin d'attaques de base qui devient dangereux à faible vie.",
      "en": "Auto-attack assassin who gets scarier the lower his Health."
    },
    "gameplay": {
      "fr": "Zul'jin gagne en vitesse d'attaque à mesure qu'il perd de la vie, et se soigne massivement avec Régénération. Sa Guillotine punit les cibles blessées.",
      "en": "Zul'jin gains Attack Speed as he loses Health and heals massively with Regeneration. His Guillotine punishes wounded targets."
    },
    "spells": [
      {
        "key": "Trait",
        "name": {
          "fr": "Berserker",
          "en": "Berserker"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_berzerker.png",
        "description": {
          "fr": "Ta vitesse d'attaque augmente quand ta vie baisse.",
          "en": "Your Attack Speed increases as your Health drops."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "A",
        "name": {
          "fr": "Jet cruel",
          "en": "Grievous Throw"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_grievousthrow.png",
        "description": {
          "fr": "Marque une cible : tes attaques sur elle infligent des dégâts bonus.",
          "en": "Marks a target: your attacks on them deal bonus damage."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "Z",
        "name": {
          "fr": "Double fendoir",
          "en": "Twin Cleave"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_twincleave.png",
        "description": {
          "fr": "Deux haches qui reviennent vers toi.",
          "en": "Two axes that return to you."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "E",
        "name": {
          "fr": "Régénération",
          "en": "Regeneration"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_regeneration.png",
        "description": {
          "fr": "Canalise pour regagner beaucoup de vie.",
          "en": "Channel to restore a large amount of Health."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R1",
        "name": {
          "fr": "Taz'dingo !",
          "en": "Taz'dingo!"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_tazdingo.png",
        "description": {
          "fr": "Tu ne peux pas descendre en dessous d'un point de vie.",
          "en": "You cannot be reduced below one Health."
        },
        "demoYoutubeId": ""
      },
      {
        "key": "R2",
        "name": {
          "fr": "Guillotine",
          "en": "Guillotine"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/spells/storm_ui_icon_zuljin_guillotine.png",
        "description": {
          "fr": "Dégâts proportionnels à la vie manquante de la cible.",
          "en": "Damage based on the target's missing Health."
        },
        "demoYoutubeId": ""
      }
    ],
    "tips": [
      {
        "fr": "Tu es plus fort à faible vie : n'aie pas peur de rester en combat.",
        "en": "You're stronger at low Health: don't be afraid to stay in the fight."
      },
      {
        "fr": "Régénération t'immobilise mais te rend énormément de vie.",
        "en": "Regeneration roots you in place but restores a lot of Health."
      },
      {
        "fr": "Taz'dingo t'empêche de mourir : c'est ton meilleur outil d'agression.",
        "en": "Taz'dingo prevents your death: it's your best aggression tool."
      }
    ],
    "builds": [
      {
        "enabled": true,
        "order": 1,
        "label": {
          "fr": "Build de départ",
          "en": "Starter Build"
        },
        "summary": {
          "fr": "Une base solide et polyvalente, à personnaliser selon la partie.",
          "en": "A solid, versatile baseline to adapt to each game."
        },
        "buildCodeTitle": {
          "fr": "A COLLER DANS L'ARBRE DES TALENTS",
          "en": "PASTE INTO TALENT TREE"
        },
        "buildCode": "[T1111111,Zuljin]",
        "videos": [],
        "updatedAt": {
          "fr": "19 Juillet 2026",
          "en": "July 19, 2026"
        },
        "talentSelections": [
          {
            "level": 1,
            "primaryId": "tmrryr6jpz9e84",
            "alternativeIds": []
          },
          {
            "level": 4,
            "primaryId": "tmrryr6jpl4l5u",
            "alternativeIds": []
          },
          {
            "level": 7,
            "primaryId": "tmrryr6jpdiybn",
            "alternativeIds": []
          },
          {
            "level": 10,
            "primaryId": "tmrryr6jp9l8iy",
            "alternativeIds": []
          },
          {
            "level": 13,
            "primaryId": "tmrryr6jpxp4bf",
            "alternativeIds": []
          },
          {
            "level": 16,
            "primaryId": "tmrryr6jpqugg4",
            "alternativeIds": []
          },
          {
            "level": 20,
            "primaryId": "tmrryr6jp3jttd",
            "alternativeIds": []
          }
        ]
      }
    ],
    "guideVideos": [],
    "talentPool": [
      {
        "id": "tmrryr6jpz9e84",
        "level": 1,
        "name": {
          "fr": "Boneslicer",
          "en": "Boneslicer"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
        "description": {
          "fr": "Grievous Throw now pierces through all enemies hit and restores 15 Mana per Hero hit. Additionally, Grievous Throw's mark is no longer removed by Basic Attacks.",
          "en": "Grievous Throw now pierces through all enemies hit and restores 15 Mana per Hero hit. Additionally, Grievous Throw's mark is no longer removed by Basic Attacks."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpl4l5u",
        "level": 4,
        "name": {
          "fr": "Troll's Blood",
          "en": "Troll's Blood"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_regeneration.png",
        "description": {
          "fr": "Increase Regeneration's healing by 25%. If Regeneration fully finishes, restore 10% of Zul'jin's maximum Mana.",
          "en": "Increase Regeneration's healing by 25%. If Regeneration fully finishes, restore 10% of Zul'jin's maximum Mana."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpdiybn",
        "level": 7,
        "name": {
          "fr": "Vicious Assault",
          "en": "Vicious Assault"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
        "description": {
          "fr": "Increase the duration of Grievous Throw's mark by 3 seconds and its damage bonus by 45%.",
          "en": "Increase the duration of Grievous Throw's mark by 3 seconds and its damage bonus by 45%."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp9l8iy",
        "level": 10,
        "name": {
          "fr": "Taz'dingo!",
          "en": "Taz'dingo!"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_tazdingo.png",
        "description": {
          "fr": "For the next 4 seconds, Zul'jin is Unkillable, and cannot be reduced to less than 1 Health. Taz'dingo!",
          "en": "For the next 4 seconds, Zul'jin is Unkillable, and cannot be reduced to less than 1 Health. Taz'dingo!"
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpxp4bf",
        "level": 13,
        "name": {
          "fr": "Lacerate",
          "en": "Lacerate"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_twincleave.png",
        "description": {
          "fr": "Increase the Slow amount of each Twin Cleave axe by 10% and its duration by 0.5 seconds.",
          "en": "Increase the Slow amount of each Twin Cleave axe by 10% and its duration by 0.5 seconds."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jpqugg4",
        "level": 16,
        "name": {
          "fr": "No Mercy!",
          "en": "No Mercy!"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_grievousthrow.png",
        "description": {
          "fr": "Zul'jin's Basic Attacks against enemy Heroes marked with Grievous Throw ignore Armor and deal an additional 2% of maximum Health as damage.",
          "en": "Zul'jin's Basic Attacks against enemy Heroes marked with Grievous Throw ignore Armor and deal an additional 2% of maximum Health as damage."
        },
        "demoYoutubeId": null
      },
      {
        "id": "tmrryr6jp3jttd",
        "level": 20,
        "name": {
          "fr": "Amani Resilience",
          "en": "Amani Resilience"
        },
        "icon": "assets/heroes/base_spells/zuljin/images/talents/storm_ui_icon_zuljin_tazdingo.png",
        "description": {
          "fr": "Increase Taz'dingo's duration by 1 second. Upon expiring, Zul'jin heals for 50% of the damage he dealt during Taz'dingo.",
          "en": "Increase Taz'dingo's duration by 1 second. Upon expiring, Zul'jin heals for 50% of the damage he dealt during Taz'dingo."
        },
        "demoYoutubeId": null
      }
    ]
  }
];
