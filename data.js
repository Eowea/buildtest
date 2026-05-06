  const APP_CONFIG = { showGuideBadge: false };
    const STREAMER_CONFIG = {
      siteTitle: { fr: 'Eowea builds', en: 'Eowea builds' },
      siteSubtitle: {
        fr: "Recherche le build du héros qui t'intéresse grâce à la barre de recherche, aux filtres ou en cliquant dans la liste. Passe ton curseur sur les sorts et talents pour un descriptif écrit et vidéo.",
        en: "Search for the hero build you're interested in using the search bar, filters, or by clicking in the list. Hover over spells and talents for a written and video description."
      },
      twitchChannel: 'eowea',
      socials:[
        { label: 'Twitch', url: 'https://www.twitch.tv/eowea', icon: 'twitch' },
        { label: 'YouTube', url: 'https://www.youtube.com/@eowea?sub_confirmation=1', icon: 'youtube' },
        { label: 'X', url: 'https://x.com/eowea_', icon: 'x' },
        { label: 'Discord', url: 'https://discord.gg/KTAKdKUe5g', icon: 'discord' },
        { label: 'Ko-fi', url: 'https://ko-fi.com/eowea', icon: 'kofi' }
      ]
    };

    const HEROES =[
      /* =======================================================
         ==== HÉROS ORIGINAUX (SANS LES HEALERS) ====
         ======================================================= */
      {
        id: 'diablo',
        enabled: false,
        name: { fr: 'Diablo', en: 'Diablo' },
        role: 'Tank',
        portrait: 'https://unpkg.com/heroes-talents@1.0.0/assets/heroes-talents/images/heroes/diablo.png',
        headline: {
          fr: 'Engage brutal, controle de zone et punition immediate des erreurs de placement.',
          en: 'Brutal engage, zone control, and immediate punishment of positional errors.'
        },
        gameplay: {
          fr: 'Diablo veut ouvrir les fights au bon timing, creer un pick rapide et forcer les carries ennemis a jouer mal positionnes.',
          en: 'Diablo wants to open fights at the right timing, create a quick pick, and force enemy carries to play out of position.'
        },
        guideVideo: {
          title: { fr: 'Guide complet du build engage', en: 'Complete guide to the engage build' },
          desc: {
            fr: 'Video principale du build avec les timings d\'engage, les priorites et les erreurs a eviter.',
            en: 'Main video detailing engage timings, priorities, and mistakes to avoid.'
          },
          youtubeId: 'dFwcMZ73-wo'
        },
        spells:[
          {
            key: 'Trait',
            name: { fr: 'Trait - Pierre d\'ame noire', en: 'Trait - Black Soulstone' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_blacksoulstone_var1.jpg',
            description: {
              fr: 'Diablo gagne des ames sur les globes et les eliminations, ce qui augmente sa vie maximale. A sa mort, assez d\'ames lui permettent de reapparaitre instantanement.',
              en: 'Diablo gains souls from globes and takedowns, increasing max health. On death, having enough souls allows instant respawn.'
            },
            demoYoutubeId: 'M7lc1UVf-VE'
          },
          {
            key: 'A',
            name: { fr: 'Charge d\'ombre', en: 'Shadow Charge' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_shadowcharge_var1.jpg',
            description: {
              fr: 'Charge un ennemi et le projette en arriere. Si la cible touche un obstacle, elle est etourdie.',
              en: 'Charges an enemy and knocks them back. If they hit terrain, they are stunned.'
            },
            demoYoutubeId: 'ysz5S6PUM-U'
          },
          {
            key: 'Z',
            name: { fr: 'Ecrasement', en: 'Overpower' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_overpower_var1.jpg',
            description: {
              fr: 'Souleve un heros ennemi au-dessus de Diablo et le projette derriere lui, ideal pour casser un positionnement.',
              en: 'Grabs an enemy hero and slams them behind Diablo, perfect for breaking positioning.'
            },
            demoYoutubeId: 'ScMzIvxBSi4'
          },
          {
            key: 'E',
            name: { fr: 'Pietinement de feu', en: 'Fire Stomp' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_firestomp_var1.jpg',
            description: {
              fr: 'Libere des vagues de flammes qui reviennent vers Diablo, utiles pour poke, waveclear et sustain selon le build.',
              en: 'Unleashes fire waves that return to Diablo, useful for poke, waveclear, and sustain depending on build.'
            },
            demoYoutubeId: 'aqz-KE-bpKQ'
          },
          {
            key: 'R1',
            name: { fr: 'Apocalypse', en: 'Apocalypse' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_apocalypse_var1.jpg',
            description: {
              fr: 'Fait apparaitre des runes sous tous les heros ennemis. Apres un delai, elles explosent et etourdissent.',
              en: 'Creates a demonic rune under all enemy heroes. After a delay, they explode, stunning them.'
            },
            demoYoutubeId: 'M7lc1UVf-VE'
          },
          {
            key: 'R2',
            name: { fr: 'Souffle de foudre', en: 'Lightning Breath' },
            icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_lightningbreath_var1.jpg',
            description: {
              fr: 'Diablo canalise un large souffle devant lui, inflige des degats continus et sert surtout a zoner ou finir un fight.',
              en: 'Channels a wide breath of lightning, dealing continuous damage. Great for zoning or finishing a fight.'
            },
            demoYoutubeId: 'ysz5S6PUM-U'
          }
        ],
        tips:[
          { fr: 'Cherche les angles de Shadow Charge contre un mur.', en: 'Look for Shadow Charge angles against walls.' },
          { fr: 'Garde Overpower pour casser un dash.', en: 'Keep Overpower to interrupt an enemy dash.' },
          { fr: 'En rotation, cache-toi pour menacer.', en: 'Hide during rotations to exert map pressure.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'engage', en: 'engage' },
            summary: { fr: 'Build standard pour initier fort et garder une vraie menace de pick.', en: 'Standard build for strong initiation and maintaining a real pick threat.' },
            videos:[
              { title: { fr: 'Combo Mur (Q+E)', en: 'Wall Combo (Q+E)' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Q contre mur suivi de E immediat.', en: 'Q into wall followed immediately by E.' } },
              { title: { fr: 'Combo Apoc', en: 'Apoc Combo' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'R puis combo Q+E pour stun-lock.', en: 'R then Q+E combo for a stun-lock.' } },
              { title: { fr: 'Safe Peel', en: 'Safe Peel' }, youtubeId: 'ScMzIvxBSi4', desc: { fr: 'Utiliser E pour sortir un allie du danger.', en: 'Use E to rescue an ally from danger.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'La part du diable', en: 'Devil\'s Due' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_blacksoulstone_var1.jpg', description: { fr: 'Les globes rendent encore plus de vie et aident Diablo a stabiliser sa phase.', en: 'Globes grant more health and help Diablo stabilize in lane.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'Ame sacrificielle', en: 'Soul Shield' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_shadowcharge_var1.jpg', description: { fr: 'Charge d\'ombre accorde des ames et de l\'armure.', en: 'Shadow Charge grants souls and armor.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Diabolical Momentum', en: 'Diabolical Momentum' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_firestomp_var1.jpg', description: { fr: 'Reduit les delais de recuperation grace aux attaques de base.', en: 'Basic attacks reduce cooldowns, perfect for chaining cc.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Apocalypse', en: 'Apocalypse' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_apocalypse_var1.jpg', description: { fr: 'Heroique global qui pose un enorme setup.', en: 'Global heroic that provides massive setup.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 13, name: { fr: 'Cruelty', en: 'Cruelty' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_overpower_var1.jpg', description: { fr: 'Augmente la vitesse d\'attaque pour accelerer les procs.', en: 'Increases attack speed to accelerate procs.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 16, name: { fr: 'Domination', en: 'Domination' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_shadowcharge_var1.jpg', description: { fr: 'Permet un reset explosif sur Charge d\'ombre.', en: 'Allows an explosive reset on Shadow Charge.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 20, name: { fr: 'Hellgate', en: 'Hellgate' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_apocalypse_var1.jpg', description: { fr: 'Apporte une mobilite brutale en late game.', en: 'Provides brutal late game mobility.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'safe front', en: 'safe front' },
            summary: { fr: 'Build plus calme si tu dois tenir la ligne et encaisser.', en: 'A more passive build to hold the frontline and absorb damage.' },
            videos:[
              { title: { fr: 'Combo Mur (Q+E)', en: 'Wall Combo (Q+E)' }, youtubeId: 'aqz-KE-bpKQ', desc: { fr: 'Q contre mur suivi de E immediat.', en: 'Q into wall followed immediately by E.' } },
              { title: { fr: 'Combo Apoc', en: 'Apoc Combo' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'R puis combo Q+E pour stun-lock.', en: 'R then Q+E combo for a stun-lock.' } },
              { title: { fr: 'Safe Peel', en: 'Safe Peel' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'Utiliser E pour sortir un allie du danger.', en: 'Use E to rescue an ally from danger.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Devils Due', en: 'Devil\'s Due' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_blacksoulstone_var1.jpg', description: { fr: 'Ameliore le sustain general pour une frontline plus reguliere.', en: 'Improves overall sustain for a more consistent frontline.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'From the Shadows', en: 'From the Shadows' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_shadowcharge_var1.jpg', description: { fr: 'Augmente la portee d\'engage pour attraper des cibles plus prudemment.', en: 'Increases engage range to catch targets more safely.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Life Leech', en: 'Life Leech' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_overpower_var1.jpg', description: { fr: 'Ajoute du soin sur les attaques de base pour mieux durer.', en: 'Adds healing on basic attacks for better sustain.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Lightning Breath', en: 'Lightning Breath' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_lightningbreath_var1.jpg', description: { fr: 'Heroique de zoning pour les fights plus longs et controles.', en: 'Zoning heroic for longer, controlled fights.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 13, name: { fr: 'Hellfire', en: 'Hellfire' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_firestomp_var1.jpg', description: { fr: 'Ajoute des degats de zone pour punir les packs.', en: 'Adds area damage to punish grouped enemies.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 16, name: { fr: 'Debilitating Flames', en: 'Debilitating Flames' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_firestomp_var1.jpg', description: { fr: 'Reduit l\'impact offensif des ennemis touches.', en: 'Reduces the offensive impact of affected enemies.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 20, name: { fr: 'Hellstorm', en: 'Hellstorm' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_diablo_lightningbreath_var1.jpg', description: { fr: 'Renforce enormement le souffle de foudre au late game.', en: 'Massively empowers Lightning Breath in the late game.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          }
        ]
      },
      {
        id: 'sonya',
        enabled: false,
        name: { fr: 'Sonya', en: 'Sonya' },
        role: 'Bruiser',
        portrait: 'https://unpkg.com/heroes-talents@1.0.0/assets/heroes-talents/images/heroes/sonya.png',
        headline: {
          fr: 'Bruiser agressif, pression de lane et duel solide.',
          en: 'Aggressive bruiser, lane pressure and solid dueling.'
        },
        gameplay: {
          fr: 'Sonya prend la side lane, nettoie les camps vite et rejoint le fight quand une cible est deja entamee.',
          en: 'Sonya takes the side lane, clears camps quickly, and joins the fight when a target is already weakened.'
        },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Trait - Fureur', en: 'Trait - Fury' }, icon: '', description: { fr: 'Ressource qui nourrit son rythme de trade.', en: 'Resource that fuels her trading rhythm.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'A', name: { fr: 'Lance ancestrale', en: 'Ancient Spear' }, icon: '', description: { fr: 'Gap close pour punir un mauvais placement.', en: 'Gap closer to punish bad positioning.' }, demoYoutubeId: 'ysz5S6PUM-U' },
          { key: 'Z', name: { fr: 'Coup sismique', en: 'Seismic Slam' }, icon: '', description: { fr: 'Gros impact direct pour gagner le trade.', en: 'Heavy direct impact to win trades.' }, demoYoutubeId: 'ScMzIvxBSi4' },
          { key: 'E', name: { fr: 'Tourbillon', en: 'Whirlwind' }, icon: '', description: { fr: 'Soin en melee pour durer dans les combats prolonges.', en: 'Melee healing to sustain in prolonged fights.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
          { key: 'R1', name: { fr: 'Bond', en: 'Leap' }, icon: '', description: { fr: 'Engage simple et fiable.', en: 'Simple and reliable engage.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'R2', name: { fr: 'Courroux du Berserker', en: 'Wrath of the Berserker' }, icon: '', description: { fr: 'Pic offensif pour rester menacante longtemps.', en: 'Offensive spike to remain threatening for a long time.' }, demoYoutubeId: 'ysz5S6PUM-U' }
        ],
        tips:[
          { fr: 'Prends la pression sur la lane tot.', en: 'Take lane pressure early.' },
          { fr: 'Entre apres ton tank.', en: 'Go in after your tank.' },
          { fr: 'Tourbillon vaut surtout si tu touches plusieurs cibles.', en: 'Whirlwind is most valuable when hitting multiple targets.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'slam bruiser', en: 'slam bruiser' },
            summary: { fr: 'Build simple et solide pour lane, camp et teamfight sans prise de tete.', en: 'Simple and solid build for laning, camps, and teamfights without overthinking.' },
            videos:[
              { title: { fr: 'Trade court', en: 'Short Trade' }, youtubeId: 'ScMzIvxBSi4', desc: { fr: 'Gagner un duel proprement.', en: 'Win a duel cleanly.' } },
              { title: { fr: 'Fin de combo', en: 'Combo Finisher' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Convertir une cible ralentie.', en: 'Convert a slowed target.' } },
              { title: { fr: 'Tempo de fight', en: 'Fight Tempo' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'Entrer au bon moment.', en: 'Go in at the right moment.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Lane durable', en: 'Durable Lane' }, icon: '', description: { fr: 'Plus de stabilite sur la lane.', en: 'More stability in the lane.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'Chase', en: 'Chase' }, icon: '', description: { fr: 'Aide a suivre une cible.', en: 'Helps chase a target.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Pression W', en: 'W Pressure' }, icon: '', description: { fr: 'Renforce les echanges courts.', en: 'Strengthens short trades.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Bond', en: 'Leap' }, icon: '', description: { fr: 'Heroique polyvalent.', en: 'Versatile heroic.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 13, name: { fr: 'Sustain melee', en: 'Melee Sustain' }, icon: '', description: { fr: 'Confort en frontline.', en: 'Comfort in the frontline.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 16, name: { fr: 'Burst de finition', en: 'Finisher Burst' }, icon: '', description: { fr: 'Meilleure conversion des kills.', en: 'Better kill conversion.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 20, name: { fr: 'Closing', en: 'Closing' }, icon: '', description: { fr: 'Ferme mieux les fights.', en: 'Closes out fights better.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          }
        ]
      },
      {
        id: 'medivh',
        enabled: false,
        name: { fr: 'Medivh', en: 'Medivh' },
        role: 'Support',
        portrait: 'https://unpkg.com/heroes-talents@1.0.0/assets/heroes-talents/images/heroes/medivh.png',
        headline: { fr: 'Utility pur, portail, scout et protection ciblee.', en: 'Pure utility, portals, scouting, and targeted protection.' },
        gameplay: { fr: 'Medivh controle le rythme, protege une cible cle et ouvre des angles que l\'ennemi suit mal.', en: 'Medivh controls the pace, protects a key target, and opens angles the enemy struggles to follow.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Trait - Forme de corbeau', en: 'Trait - Raven Form' }, icon: '', description: { fr: 'Permet de scout et de preparer les rotations.', en: 'Allows scouting and preparing rotations safely.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'A', name: { fr: 'Fissure arcanique', en: 'Arcane Rift' }, icon: '', description: { fr: 'Poke principal qui recompense la precision.', en: 'Main poke tool that rewards accuracy.' }, demoYoutubeId: 'ysz5S6PUM-U' },
          { key: 'Z', name: { fr: 'Volonte de force', en: 'Force of Will' }, icon: '', description: { fr: 'Bouclier clutch qui nie un enorme burst.', en: 'Clutch shield that completely negates massive burst.' }, demoYoutubeId: 'ScMzIvxBSi4' },
          { key: 'E', name: { fr: 'Portail', en: 'Portal' }, icon: '', description: { fr: 'Repositionne, engage ou sauve un allie.', en: 'Reposition, engage, or rescue an ally.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
          { key: 'R1', name: { fr: 'Bombe polymorphe', en: 'Poly Bomb' }, icon: '', description: { fr: 'Tres forte pour casser un pack.', en: 'Very strong tool to break up a grouped enemy team.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'R2', name: { fr: 'Sceau de ligne temporelle', en: 'Ley Line Seal' }, icon: '', description: { fr: 'Coupe une fight en deux.', en: 'Cuts a teamfight right in half.' }, demoYoutubeId: 'ysz5S6PUM-U' }
        ],
        tips:[
          { fr: 'Scout avant la fight.', en: 'Scout thoroughly before the fight.' },
          { fr: 'Ton shield vaut souvent plus qu\'un soin si le timing est bon.', en: 'Your shield is often worth more than a heal if timed perfectly.' },
          { fr: 'Les portails doivent servir un vrai plan.', en: 'Portals must serve a real, communicated plan.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'portal utility', en: 'portal utility' },
            summary: { fr: 'Build clair autour de la protection, du portail et du controle du tempo.', en: 'Clear build around protection, portals, and tempo control.' },
            videos:[
              { title: { fr: 'Portail engage', en: 'Portal Engage' }, youtubeId: 'ScMzIvxBSi4', desc: { fr: 'Creer une entree propre.', en: 'Create a clean entry.' } },
              { title: { fr: 'Shield timing', en: 'Shield Timing' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Nier un burst au bon moment.', en: 'Negate a burst at the perfect moment.' } },
              { title: { fr: 'Tempo seal', en: 'Tempo Ley Line' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'Couper le fight.', en: 'Cut the teamfight.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Vision', en: 'Vision' }, icon: '', description: { fr: 'Lecture de map plus simple.', en: 'Easier map reading.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'Portail pratique', en: 'Handy Portal' }, icon: '', description: { fr: 'Plus de valeur sur les rotations.', en: 'More value on rotations.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Protection fiable', en: 'Reliable Protection' }, icon: '', description: { fr: 'Shield encore plus clutch.', en: 'Even more clutch shielding.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Sceau de ligne temporelle', en: 'Ley Line Seal' }, icon: '', description: { fr: 'Controle fort du tempo.', en: 'Strong tempo control.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 13, name: { fr: 'Poke constant', en: 'Constant Poke' }, icon: '', description: { fr: 'Presence entre deux engages.', en: 'Presence between engages.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 16, name: { fr: 'Utility renforcee', en: 'Enhanced Utility' }, icon: '', description: { fr: 'Plus d\'impact mid game.', en: 'More mid-game impact.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 20, name: { fr: 'Macro tempo', en: 'Macro Tempo' }, icon: '', description: { fr: 'Tres fort pour fermer la partie.', en: 'Very strong to close out the game.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build 2 (À venir)', en: 'Build 2 (TBA)' },
            summary: { fr: 'En construction.', en: 'Under construction.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: '', videos:[], talents:[]
          }
        ]
      },
      {
        id: 'zeratul',
        enabled: false,
        name: { fr: 'Zeratul', en: 'Zeratul' },
        role: 'Assassin Melee',
        portrait: 'https://unpkg.com/heroes-talents@1.0.0/assets/heroes-talents/images/heroes/zeratul.png',
        headline: { fr: 'Pick rapide, pression laterale et reset explosif.', en: 'Quick pick, lateral pressure, and explosive resets.' },
        gameplay: { fr: 'Zeratul menace les angles, punit les carries avances et ressort avant la reponse adverse.', en: 'Zeratul threatens angles, punishes overextended carries, and gets out before the enemy responds.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Trait - Camouflage permanent', en: 'Trait - Permanent Cloak' }, icon: '', description: { fr: 'Permet de preparer des angles tres dangereux.', en: 'Allows setting up very dangerous attack angles.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'A', name: { fr: 'Entaille', en: 'Cleave' }, icon: '', description: { fr: 'Degats rapides pour valider une entree courte.', en: 'Quick AoE damage to validate a short engage.' }, demoYoutubeId: 'ysz5S6PUM-U' },
          { key: 'Z', name: { fr: 'Pointe de singularite', en: 'Singularity Spike' }, icon: '', description: { fr: 'Ralenti utile pour suivre une cible.', en: 'Useful slow to stick to a target.' }, demoYoutubeId: 'ScMzIvxBSi4' },
          { key: 'E', name: { fr: 'Transfert', en: 'Blink' }, icon: '', description: { fr: 'Dash cle pour entrer puis sortir.', en: 'Key dash tool to engage and then escape.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
          { key: 'R1', name: { fr: 'Prison du Vide', en: 'Void Prison' }, icon: '', description: { fr: 'Outil massif de tempo pour couper une fight.', en: 'Massive tempo tool to cut a fight in half.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'R2', name: { fr: 'Puissance des Nerezim', en: 'Might of the Nerazim' }, icon: '', description: { fr: 'Plan offensif pour burst tres vite.', en: 'Offensive plan for incredibly fast burst.' }, demoYoutubeId: 'ysz5S6PUM-U' }
        ],
        tips:[
          { fr: 'Ne te revele pas pour rien.', en: 'Do not reveal yourself for nothing.' },
          { fr: 'Entre quand les gros controles sont deja partis.', en: 'Go in when major crowd controls have already been used.' },
          { fr: 'Prison du Vide peut sauver autant que tuer.', en: 'Void Prison can save allies just as well as it sets up kills.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'reset burst', en: 'reset burst' },
            summary: { fr: 'Build lisible pour chercher le pick rapide, ressortir et replonger.', en: 'Clear build to find quick picks, get out, and dive back in.' },
            videos:[
              { title: { fr: 'Entree rapide', en: 'Quick Engage' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Burst court puis sortie.', en: 'Short burst then exit.' } },
              { title: { fr: 'Timing du blink', en: 'Blink Timing' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'Ne pas gaspiller le dash.', en: 'Do not waste your dash.' } },
              { title: { fr: 'Void utile', en: 'Useful Void' }, youtubeId: 'ScMzIvxBSi4', desc: { fr: 'Couper la fight avant de replonger.', en: 'Cut the fight before diving back in.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Ouverture discrete', en: 'Stealth Opening' }, icon: '', description: { fr: 'Menace plus forte avant l\'engage.', en: 'Stronger threat before the engage.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'Chase', en: 'Chase' }, icon: '', description: { fr: 'Facilite la poursuite.', en: 'Makes chasing easier.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Burst rotation', en: 'Burst Rotation' }, icon: '', description: { fr: 'Renforce les combos courts.', en: 'Enhances short combos.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Puissance des Nerezim', en: 'Might of the Nerazim' }, icon: '', description: { fr: 'Choix offensif clair.', en: 'Clear offensive choice.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 13, name: { fr: 'Sortie sure', en: 'Safe Exit' }, icon: '', description: { fr: 'Plus de marge apres l\'entree.', en: 'More margin after the engage.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 16, name: { fr: 'Pic de degats', en: 'Damage Spike' }, icon: '', description: { fr: 'Tres gros palier de menace.', en: 'Huge threat milestone.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 20, name: { fr: 'Finisher', en: 'Finisher' }, icon: '', description: { fr: 'Cherche la decision en fin de partie.', en: 'Looks for the decision in the late game.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build 2 (À venir)', en: 'Build 2 (TBA)' },
            summary: { fr: 'En construction.', en: 'Under construction.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: '', videos: [], talents:[]
          }
        ]
      },
      {
        id: 'jaina',
        enabled: false,
        name: { fr: 'Jaina', en: 'Jaina' },
        role: 'Assassin Distance',
        portrait: 'https://unpkg.com/heroes-talents@1.0.0/assets/heroes-talents/images/heroes/jaina.png',
        headline: { fr: 'Burst, controle et capacite a verrouiller une zone.', en: 'Burst, control, and ability to lock down a zone.' },
        gameplay: { fr: 'Jaina brille quand elle peut preparer la zone avant l\'engage principal.', en: 'Jaina shines when she can set up the zone before the main engage.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Trait - Frisson de la mort', en: 'Trait - Frostbite' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_trait_var1.jpg', description: { fr: 'Ses capacites refroidissent les ennemis, augmentant les degats que Jaina leur inflige ensuite.', en: 'Her abilities chill enemies, increasing the damage Jaina subsequently deals to them.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'A', name: { fr: 'Eclair de givre', en: 'Frostbolt' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_frostbolt_var1.jpg', description: { fr: 'Projectile rapide qui inflige des degats et applique le refroidissement a distance.', en: 'Fast projectile that deals damage and applies chill from a distance.' }, demoYoutubeId: 'ysz5S6PUM-U' },
          { key: 'Z', name: { fr: 'Blizzard', en: 'Blizzard' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_blizzard_var1.jpg', description: { fr: 'Fait tomber trois vagues de glace dans une zone, excellent pour le zoning et le setup.', en: 'Drops three waves of ice in an area, excellent for zoning and setup.' }, demoYoutubeId: 'ScMzIvxBSi4' },
          { key: 'E', name: { fr: 'Cone de froid', en: 'Cone of Cold' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_coneofcold_var1.jpg', description: { fr: 'Explosion frontale a courte portee qui complete tres bien les combos burst.', en: 'Short-range frontal explosion that perfectly completes burst combos.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
          { key: 'R1', name: { fr: 'Anneau de givre', en: 'Ring of Frost' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_ringoffrost_var1.jpg', description: { fr: 'Cree une zone qui gele les ennemis apres un bref delai. Tres fort pour punir un engage ou en follow-up.', en: 'Creates an area that freezes enemies after a short delay. Very strong to punish an engage or as follow-up.' }, demoYoutubeId: 'M7lc1UVf-VE' },
          { key: 'R2', name: { fr: 'Elementaire d\'eau', en: 'Water Elemental' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_jaina_summonwaterelemental_var1.jpg', description: { fr: 'Invoque un elementaire d\'eau qui poursuit les ennemis, ralentit et apporte de la pression continue en teamfight.', en: 'Summons a water elemental that chases enemies, slows, and applies continuous pressure in teamfights.' }, demoYoutubeId: 'ysz5S6PUM-U' }
        ],
        tips:[
          { fr: 'Reste a portee maximale.', en: 'Stay at maximum range.' },
          { fr: 'Blizzard se pose avant le vrai engage.', en: 'Place Blizzard before the actual engage happens.' },
          { fr: 'Cone of Cold valide le burst.', en: 'Cone of Cold validates your burst combo.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'burst standard', en: 'standard burst' },
            summary: { fr: 'Gros burst et setup fiable.', en: 'Massive burst and reliable setup.' },
            videos:[
              { title: { fr: 'One Shot Combo', en: 'One Shot Combo' }, youtubeId: 'ScMzIvxBSi4', desc: { fr: 'Z + E + Q rapide.', en: 'Fast W + E + Q.' } },
              { title: { fr: 'Ring Placement', en: 'Ring Placement' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Anticiper les dash adverses.', en: 'Anticipate enemy dashes.' } },
              { title: { fr: 'Ice Block Bait', en: 'Ice Block Bait' }, youtubeId: 'ysz5S6PUM-U', desc: { fr: 'Attendre les CDs ennemis.', en: 'Wait out enemy cooldowns.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Lingering Chill', en: 'Lingering Chill' }, icon: '', description: { fr: 'Allonge la duree du ralentissement pour faciliter tout le combo derriere.', en: 'Extends the slow duration to facilitate the follow-up combo.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 4, name: { fr: 'Arcane Intellect', en: 'Arcane Intellect' }, icon: '', description: { fr: 'Aide a la gestion du mana et permet de jouer plus librement.', en: 'Helps with mana management and allows playing more freely.' }, demoYoutubeId: 'ysz5S6PUM-U' },
              { level: 7, name: { fr: 'Ice Lance', en: 'Ice Lance' }, icon: '', description: { fr: 'Renforce fortement le burst mono-cible avec Frostbolt.', en: 'Strongly enhances single-target burst with Frostbolt.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 10, name: { fr: 'Ring of Frost', en: 'Ring of Frost' }, icon: '', description: { fr: 'Heroique de setup qui punit tres fort une equipe immobile.', en: 'Setup heroic that heavily punishes an immobile team.' }, demoYoutubeId: 'M7lc1UVf-VE' },
              { level: 13, name: { fr: 'Ice Barrier', en: 'Ice Barrier' }, icon: '', description: { fr: 'Ajoute un bouclier pour securiser les phases dangereuses.', en: 'Adds a shield to secure dangerous phases.' }, demoYoutubeId: 'aqz-KE-bpKQ' },
              { level: 16, name: { fr: 'Northern Exposure', en: 'Northern Exposure' }, icon: '', description: { fr: 'Reduit l\'armure adverse pour faire exploser les cibles plus vite.', en: 'Reduces enemy armor to blow up targets much faster.' }, demoYoutubeId: 'ScMzIvxBSi4' },
              { level: 20, name: { fr: 'Cold Snap', en: 'Cold Snap' }, icon: '', description: { fr: 'Tres gros spike de puissance en fin de partie.', en: 'Huge power spike in the late game.' }, demoYoutubeId: 'ysz5S6PUM-U' }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build 2 (À venir)', en: 'Build 2 (TBA)' },
            summary: { fr: 'En construction.', en: 'Under construction.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: '', videos:[], talents:[]
          }
        ]
      },

      /* =======================================================
         ==== TOUS LES HEALERS DU JEU (Corrigés et ajoutés) ====
         ======================================================= */

      {
        id: 'anduin',
        enabled: false,
        name: { fr: 'Anduin', en: 'Anduin' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/anduin.jpg',
        headline: {
          fr: 'Soins fiables, sauvetage cible et backline stable.',
          en: 'Reliable healing, targeted rescue, and stable backline.'
        },
        gameplay: {
          fr: 'Anduin apporte un soin lisible, un gros bouton de sauvetage et une excellente reponse aux engages front to back.',
          en: 'Anduin provides straightforward healing, a massive rescue button, and an excellent response to front-to-back engages.'
        },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Foi désespérée', en: 'Leap of Faith' }, icon: '', description: { fr: 'Repositionne un allié en danger.', en: 'Reposition an ally in danger.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Soin éclair', en: 'Flash Heal' }, icon: '', description: { fr: 'Soin direct et fiable.', en: 'Direct and reliable heal.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Étoile divine', en: 'Divine Star' }, icon: '', description: { fr: 'Ligne qui soigne et poke.', en: 'A line that heals and pokes.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Châtiment', en: 'Chastise' }, icon: '', description: { fr: 'Contrôle linéaire utile pour stopper une entrée.', en: 'Linear CC useful for stopping an engage.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Mot sacré : Salut', en: 'Holy Word: Salvation' }, icon: '', description: { fr: 'Gros outil défensif de teamfight.', en: 'Massive defensive teamfight tool.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Bombe de lumière', en: 'Lightbomb' }, icon: '', description: { fr: 'Excellent follow-up sur un allié qui plonge.', en: 'Excellent follow-up on an engaging ally.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Garde ton pull pour la vraie cible menacée.', en: 'Keep your pull for the actual threatened target.' },
          { fr: 'Place Châtiment avant l\'engage adverse.', en: 'Place Chastise before the enemy engage.' },
          { fr: 'Bombe de lumière adore les tanks qui foncent.', en: 'Lightbomb loves diving tanks.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Heal fiable', en: 'Reliable Heal' },
            summary: { fr: 'Build généraliste pour garder régularité, contrôle et sécurité.', en: 'Generalist build to keep consistency, control, and safety.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1111111,Anduin]", videos: [], talents:[]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build Lumière', en: 'Light Build' },
            summary: { fr: 'Build centré sur la Bombe de Lumière et les attaques de base.', en: 'Build centered around Lightbomb and basic attacks.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T2222222,Anduin]", videos:[], talents:[]
          }
        ]
      },

      {
        id: 'rehgar',
        enabled: true,
        name: { fr: 'Rehgar', en: 'Rehgar' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/rehgar.jpg',
        headline: {
          fr: 'Waveclear, soins multi comme monocible, aggressif',
          en: 'Waveclear, multi and single-target healing, aggressive'
        },
        gameplay: {
          fr: 'Rehgar est un soigneur aggressif qui possede beaucoup de degats et plein d\'utilitaire.',
          en: 'Rehgar is an aggressive healer boasting great damage and utility.'
        },
        guideVideo: {
          title: { fr: 'Guide express: Rehgar', en: 'Express Guide: Rehgar' },
          youtubeId: 'ESl4DLgmJVo',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces.', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles.' }
        },
        spells:[
          { key: 'Trait', name: { fr: 'Purge', en: 'Purge' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_purge.jpg', description: { fr: 'Utiliser sur un allié le rend Insensible, sur un ennemi le ralenti.', en: 'Targeting an ally grants Unstoppable, targeting an enemy slows them.' }, demoYoutubeId: null },
          { key: 'A', name: { fr: 'Salve de guérison', en: 'Chain Heal' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg', description: { fr: 'Soin qui rebondit sur les alliés autour de la cible.', en: 'Heal that bounces to allies near the target.' }, demoYoutubeId: 'h2hoOxlp7R4' },
          { key: 'Z', name: { fr: 'Bouclier de foudre', en: 'Lightning Shield' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_lightningshield.jpg', description: { fr: 'Place un bouclier de foudre qui inflige des dégâts et rend du mana.', en: 'Places a lightning shield that deals damage and restores mana.' }, demoYoutubeId: 'z4HDw9SqJPg' },
          { key: 'E', name: { fr: 'Totem de liens terrestres', en: 'Earthbind Totem' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg', description: { fr: 'Pose un totem qui ralentit autour.', en: 'Spawns a totem that slows nearby enemies.' }, demoYoutubeId: '6O82JwEzy0I' },
          { key: 'R1', name: { fr: 'Guérison ancestrale', en: 'Ancestral Healing' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg', description: { fr: 'Gros soin qui permet de sauver.', en: 'Massive burst heal that saves lives.' }, demoYoutubeId: 'wExHslPmNjo' },
          { key: 'R2', name: { fr: 'Furie sanguinaire', en: 'Bloodlust' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_bloodlust.jpg', description: { fr: 'Augmente la vitesse de déplacement et d\'attaque, les attaques de base soignent.', en: 'Increases movement & attack speed, basic attacks heal.' }, demoYoutubeId: '00IZzFmMYis'},
          { key: 'W', name: { fr: 'Loup fantôme', en: 'Ghost Wolf' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ghostwolf.jpg', description: { fr: 'Augmente la vitesse de déplacement, la prochaine auto-attaque est plus forte.', en: 'Increases movement speed; next basic attack deals bonus damage.' }, demoYoutubeId: 'IeX0464Mf7g' }
        ],
        tips:[
          { fr: 'Utilise ton totem pour protéger un allié ou attraper un ennemi', en: 'Use your totem to protect an ally or catch an enemy.' },
          { fr: 'Place son Bouclier de foudre sur ton tank', en: 'Place Lightning Shield on your frontline tank.' },
          { fr: 'Ne pas avoir peur d\'aller mettre des attaques de base', en: 'Don\'t be afraid to auto-attacks.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build totem', en: 'Totem Build' },
            summary: { fr: 'Build le plus simple à jouer: le totem devient le point central du gameplay', en: 'Easiest build: the totem becomes the central point of your gameplay.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T2111121,Rehgar]",
            videos:[
              //{ title: { fr: 'Tempo de soin', en: 'Heal Tempo' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Soigner avant le vrai all-in.', en: 'Healing before the real all-in.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Totem Colossal', en: 'Colossal Totem' }, icon: 'https://psionic-storm.com/media/img/talents/rehgar_earthbindtotem.png', description: { fr: 'Augmente les points de vie, le rayon et la durée du totem. Permet de le repositionner une nouvelle fois.', en: 'Increases health, radius, and duration of the totem. Can be repositioned once.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Viveterre', en: 'Earthliving Enchant' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg', description: { fr: 'Renforce Salve de guerison pour les héros dont les points de vie sont bas.', en: 'Empowers Chain Heal for heroes at low health.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Totem lié à la terre', en: 'Grounded Totem' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg', description: { fr: 'Réduis la vitesse d\'attaque et la puissance de capacité, augmente la portée du totem.', en: 'Reduces attack and spell power of enemies in range.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Guérison ancestrale', en: 'Ancestral Healing' }, icon: 'https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png', description: { fr: 'Gros soin monocible, utilisable sur soi.', en: 'Massive single-target heal, usable on self.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Raz-de-marée', en: 'Tidal Waves' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg', description: { fr: 'Réduit le temps de recharge de Salve de guérison et son coût en mana.', en: 'Reduces Chain Heal cooldown and mana cost.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Totem d’emprise de la terre', en: 'Earthgrasp Totem' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_earthbindtotem.jpg', description: { fr: 'Quand le totem est posé pour la première fois, il inflige des dégâts en zone et ralentit fortement.', en: 'When first spawned, the totem deals AoE damage and heavily slows.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Bénédiction du long-voyant', en: 'Farseer\'s Blessing' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg', description: { fr: 'Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.', en: 'A second Ancestral Healing triggers and heals in an AoE.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build loup', en: 'Wolf Build' },
            summary: { fr: 'Build plus aggressif: demande une connaissance de jeu impéccable', en: 'More aggressive build: requires flawless game knowledge.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T3131231,Rehgar]",
            videos:[
              //{ title: { fr: 'Tempo de soin', en: 'Heal Tempo' }, youtubeId: 'M7lc1UVf-VE', desc: { fr: 'Soigner avant le vrai all-in.', en: 'Healing before the real all-in.' } }
            ],
            talents:[
              { level: 1, name: { fr: 'Cœur farouche', en: 'Feral Heart' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ghostwolf.jpg', description: { fr: 'Augmente la vitesse de déplacement de Loup fantôme et confère de l\'armure.', en: 'Increases Ghost Wolf movement speed and grants armor.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Viveterre', en: 'Earthliving Enchant' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_chainheal.jpg', description: { fr: 'Renforce Salve de guerison pour les héros dont les points de vie sont bas.', en: 'Empowers Chain Heal for heroes at low health.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Sang et tonnerre', en: 'Blood and Thunder' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ghostwolf.jpg', description: { fr: 'Les attaques faites en Loup fantôme réduisent les temps de recharge des capacités de base et rend du mana.', en: 'Attacks in Ghost Wolf form reduce basic ability cooldowns and restore mana.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Guérison ancestrale', en: 'Ancestral Healing' }, icon: 'https://psionic-storm.com/media/img/talents/rehgar_ancestralhealing.png', description: { fr: 'Gros soin monocible, utilisable sur soi.', en: 'Massive single-target heal, usable on self.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Bouclier de terre', en: 'Earth Shield' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_lightningshield.jpg', description: { fr: 'Applique un bouclier à son porteur en %pv.', en: 'Applies a shield to its target based on % max health.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Faim de loup', en: 'Hunger of the Wolf' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ghostwolf.jpg', description: { fr: 'Les attaques sous forme de Loup fantôme infligent des dégâts en %pv et rendent des points de vie', en: 'Attacks in Ghost Wolf form deal % health damage and restore health.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Bénédiction du long-voyant', en: 'Farseer\'s Blessing' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_rehgar_ancestralhealing.jpg', description: { fr: 'Une deuxième Guérison Ancestrale apparait, et soigne en zone autour de la cible.', en: 'A second Ancestral Healing triggers and heals in an AoE.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'luisaile',
        enabled: true,
        name: { fr: 'Luisaile', en: 'Brightwing' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/brightwing.jpg',
        headline: {
          fr: 'Global, beaucoup d\'utilitaire, et control en point and click',
          en: 'Global presence, high utility, point-and-click control'
        },
        gameplay: {
          fr: 'Luisaile est une soigneuse avec un global et beaucoup de sorts utilitaires',
          en: 'Brightwing is a global healer armed with fantastic utility spells.'
        },
        guideVideo: {
          title: { fr: 'Guide express: Luisaile', en: 'Express Guide: Brightwing' },
          youtubeId: 'BGavE-q8NJY',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles.' }
        },
        spells:[
          { key: 'Trait', name: { fr: 'Brume apaisante', en: 'Soothing Mist' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_soothingmist.jpg', description: { fr: 'À l\'activation, supprime les effets incapacitants sur les alliés proches et Luisaile. Passivement, envoie des vagues de soins.', en: 'On activation, removes disabling effects from nearby allies and Brightwing. Passively sends out healing waves.' }, demoYoutubeId: null },
          { key: 'A', name: { fr: 'Embrasement des Arcanes', en: 'Arcane Flare' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_arcaneflare.jpg', description: { fr: 'Crache une zone au sol qui inflige des dégâts. Si la cible est au centre, déclenche un effet de soin de Brume Apaisante.', en: 'Spits a ground AoE that deals damage. If target is in the center, triggers a Soothing Mist heal.' }, demoYoutubeId: null },
          { key: 'Z', name: { fr: 'Métamorphose', en: 'Polymorph' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_polymorph.jpg', description: { fr: 'Neutralise un ennemi.', en: 'Neutralizes an enemy hero.' }, demoYoutubeId: null },
          { key: 'E', name: { fr: 'Poudre de perlimpinpin', en: 'Pixie Dust' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_pixiedust.jpg', description: { fr: 'Applique de l\'armure anti-sort et augmente la vitesse de déplacement.', en: 'Applies spell armor and increases movement speed.' }, demoYoutubeId: null },
          { key: 'R1', name: { fr: 'Papillonnage', en: 'Blink Heal' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_blinkheal.jpg', description: { fr: 'Se téléporte vers un allié et le soigne.', en: 'Teleports to an ally and heals them.' }, demoYoutubeId: null },
          { key: 'R2', name: { fr: 'Vent d\'émeraude', en: 'Emerald Wind' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_emeraldwind.jpg', description: { fr: 'Créer une vague qui repousse et inflige des dégâts aux ennemis.', en: 'Creates an expanding wave that damages and pushes enemies away.' }, demoYoutubeId: null },
          { key: 'W', name: { fr: 'Déphasage', en: 'Phase Shift' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Se téléporte sur un allié et le soigne en %pv.', en: 'Teleports to an ally and heals them based on % max health.' }, demoYoutubeId: null }
        ],
        tips:[
          { fr: 'Utilise ta Métamorphose pour casser les canalisations adverses ou protèger un allié', en: 'Use your Polymorph to interrupt enemy channels or protect your allies.' },
          { fr: 'Garde un oeil sur la mini-carte pour ton global.', en: 'Keep an eye on the minimap to use your global effectively.' },
          { fr: 'Essaye d\'utiliser Poudre de perlimpinpin sur allié quand il va se faire burst', en: 'Try to use Pixie Dust on an ally when they’re about to get bursted.' },

        ],
        builds:[
          {
            enabled: true, order: 2, label: { fr: 'Build TP', en: 'TP Build' },
            summary: { fr: 'Build le plus simple à jouer: empêche le oneshot sur votre allié', en: 'Easiest build: prevents your ally from getting oneshot.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T2321323,Brightwing]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Hyperphase', en: 'Hyper Shift' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Augmente le montant de soins de Déphasage et son temps de recharge est réduit pour chaque serviteur tué.', en: 'Increases Phase Shift healing amount and its cooldown is reduced for each minion killed.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Crachat magique', en: 'Magic Spit' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_talent_autoattack_cooldown.jpg', description: { fr: 'Augmente la portée d\'auto-attaque et ses auto-attaques réduisent le temps de recharge de Brume Apaisante.', en: 'Increases basic attack range and basic attacks reduce Soothing Mist cooldown.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Je te vois !', en: 'Peekaboo!' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Déphasage confère un bouclier à Luisaile et sa cible, puis révèle la zone autour.', en: 'Phase Shift grants a shield to Brightwing and her target, then reveals the surrounding area.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Papillonnage', en: 'Blink Heal' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_blinkheal.jpg', description: { fr: 'Se téléporte vers un allié et le soigne.', en: 'Teleports to an ally and heals them.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Superlimpinpin', en: 'Pixie Power' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_pixiedust_b.jpg', description: { fr: 'Réduit le temps de recharge de Poudre de perlimpinpin et augmente l\'armure anti-sort.', en: 'Reduces Pixie Dust cooldown and increases spell armor.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Bestiolifier', en: 'Critterize' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_polymorph.jpg', description: { fr: 'Métamorphose réduit l\'armure.', en: 'Polymorph reduces armor.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Dragon express', en: 'Speedy Dragon' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Déphasage se canalise plus rapidement et augmente passivement la vitesse de déplacement.', en: 'Phase Shift channels faster and passively increases movement speed.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 1, label: { fr: 'Build passif', en: 'Cleanse Build' },
            summary: { fr: 'Build qui permet d\'utiliser plus souvent sa cleanse.', en: 'Build that allows more frequent use of Cleanse.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T2331323,Brightwing]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Hyperphase', en: 'Hyper Shift' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Augmente le montant de soins de Déphasage et son temps de recharge est réduit pour chaque serviteur tué.', en: 'Increases Phase Shift healing amount and its cooldown is reduced for each minion killed.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Crachat magique', en: 'Magic Spit' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_talent_autoattack_cooldown.jpg', description: { fr: 'Augmente la portée d\'auto-attaque et ses auto-attaques réduisent le temps de recharge de Brume Apaisante.', en: 'Increases basic attack range and basic attacks reduce Soothing Mist cooldown.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Brume opportune', en: 'Critical Mist' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_soothingmist.jpg', description: { fr: 'À l\'activation de Brume apaisante, la purge est plus efficace.', en: 'Activating Soothing Mist removes disabling effects more effectively.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Papillonnage', en: 'Blink Heal' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_blinkheal.jpg', description: { fr: 'Se téléporte vers un allié et le soigne.', en: 'Teleports to an ally and heals them.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Superlimpinpin', en: 'Pixie Power' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_pixiedust_b.jpg', description: { fr: 'Réduit le temps de recharge de Poudre de perlimpinpin et augmente l\'armure anti-sort.', en: 'Reduces Pixie Dust cooldown and increases spell armor.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Bestiolifier', en: 'Critterize' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_polymorph.jpg', description: { fr: 'Métamorphose réduit l\'armure.', en: 'Polymorph reduces armor.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Dragon express', en: 'Speedy Dragon' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_brightwing_hypershift.jpg', description: { fr: 'Déphasage se canalise plus rapidement et augmente passivement la vitesse de déplacement.', en: 'Phase Shift channels faster and passively increases movement speed.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'deckard',
        enabled: true,
        name: { fr: 'Deckard Cain', en: 'Deckard Cain' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/deckard.jpg',
        headline: {
          fr: 'Contrôles de zone et soins de préparation.',
          en: 'Heavy crowd control, AoE healing and setup potions.'
        },
        gameplay: {
          fr: 'Deckard jette des potions sur le sol pour préparer le combat et bloque l\'ennemi avec ses puissants contrôles de zone.',
          en: 'Deckard throws potions on the ground to prepare the battlefield and locks down enemies with powerful AoE control.'
        },
        guideVideo: {
          title: { fr: 'Guide express: Deckard Cain', en: 'Express Guide: Deckard Cain' },
          youtubeId: 'onnCA8ibYQk',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles.' }
        },
        spells:[
          { key: 'Trait', name: { fr: 'Fidèle auditoire', en: 'Fortitude of the Faithful' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_protectors_of_cain.jpg', description: { fr: 'Lorsqu\'au moins un allié est proche de Deckard Cain, il obtient de l\'armure et ses temps de recharge se rechargent plus vite.', en: 'When at least one allied Hero is nearby, Deckard gains Armor and his Basic Abilities recharge faster.' }, demoYoutubeId: null },
          { key: 'A', name: { fr: 'Potion de soin', en: 'Healing Potion' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_healing_potion.jpg', description: { fr: 'Lance une potion qui peut rester au sol et être consommée par les alliés pour se soigner.', en: 'Throws a potion that heals the first allied Hero to touch it.' }, demoYoutubeId: null },
          { key: 'Z', name: { fr: 'Cube horadrique', en: 'Horadric Cube' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_horadric_cube.jpg', description: { fr: 'Cube qui inflige des dégâts et ralentit en zone.', en: 'Throws a cube that deals damage and slows enemies in an area.' }, demoYoutubeId: null },
          { key: 'E', name: { fr: 'Parchemin de confinement', en: 'Scroll of Sealing' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_scroll_of_sealing.jpg', description: { fr: 'Triangle qui immobilise et inflige des dégâts.', en: 'Unfurls a scroll that roots and damages enemies inside.' }, demoYoutubeId: null },
          { key: 'R1', name: { fr: 'Restez un instant et écoutez', en: 'Stay Awhile and Listen' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_stay_awhile_and_listen.jpg', description: { fr: 'Canalise un cône devant lui qui endort les ennemis.', en: 'Channels a large cone that puts enemies to sleep.' }, demoYoutubeId: null },
          { key: 'R2', name: { fr: 'Vous avez lu mon livre ?', en: 'Lorenado' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_lorenado.jpg', description: { fr: 'Crée une tornade qui repousse les ennemis sur son passage.', en: 'Creates a swirling tornado that knocks away enemies.' }, demoYoutubeId: null }
        ],
        tips:[
          { fr: 'Prépare toujours des potions avant l\'objectif.', en: 'Always setup potions before the objective starts.' },
          { fr: 'Combine le Cube (Z) avec le Parchemin (E) pour garantir l\'immobilisation.', en: 'Combine your Cube (W) with your Scroll (E) to guarantee the root.' },
          { fr: 'Vise les potions directement sur tes alliés, personne ne veut courir après un soin !', en: 'Aim your potions directly on your allies—no one wants to have to walk to get healed!' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build recommandé', en: 'Recommanded build' },
            summary: { fr: 'Build qui passe partout, peu importe le mode de jeu.', en: 'A build that works in any situation, no matter the game mode.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T3121331,Deckard]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Saphir', en: 'Sapphire' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_sapphire.jpg', description: { fr: 'Augmente le ralentissement du Cube horadrique.', en: 'Increases Horadric Cube slow.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Potion de bouclier', en: 'Shielding Potion' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_healing_potion.jpg', description: { fr: 'Les potions confèrent un bouclier.', en: 'Potions grant a shield upon healing.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Cube de Kanai', en: 'Kanai\'s Cube' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_kanais_cube.jpg', description: { fr: 'Le Cube horadrique réduit les dégâts infligés par les ennemis.', en: 'Horadric Cube reduces damage dealt by enemies.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Restez un instant et écoutez', en: 'Stay Awhile and Listen' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_stay_awhile_and_listen.jpg', description: { fr: 'Endort les ennemis en face.', en: 'Channels to put enemies in front to sleep.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Bénédiction antique', en: 'Ancient Blessings' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_angelic_conduit.jpg', description: { fr: 'Renforce les attaques de base de tous les alliés à proximité et les soigne.', en: 'Empowers nearby allies\' basic attacks and heals them.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Bâton horadrique', en: 'Horadric Staff' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_horadric_staff.jpg', description: { fr: 'Les attaques de base étourdissent.', en: 'Basic attacks stun.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Respectez vos aînés', en: 'Respect the Elderly' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_stay_awhile_and_listen.jpg', description: { fr: 'Restez un instant et écoutez rend les ennemis Silence et Aveugle au réveil.', en: 'Stay Awhile and listen silences and blinds enemies upon waking up.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build ARAM', en: 'ARAM Build' },
            summary: { fr: 'Ça fait ding ding et des dégats.', en: 'It goes ding-ding and deals damage.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T1311314,Deckard]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Parchemin d\'identification', en: 'Scroll of Identify' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_scroll_of_sealing.jpg', description: { fr: 'Quête: augmente les dégâts de Parchemin de confinement et réduit l\'armure une fois les paliers atteints.', en: 'Quest: increases Scroll of Sealing\'s damage and reduces Armor once the rewards are unlocked.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Rubis', en: 'Ruby' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_ruby.jpg', description: { fr: 'Le proche Cube horadrique génère des petites potions de soin.', en: 'The next Horadric Cube spawns Lesser Healing Potions.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Cube de Kanai', en: 'Kanai\'s Cube' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_kanais_cube.jpg', description: { fr: 'Le Cube horadrique réduit les dégâts infligés par les ennemis.', en: 'Horadric Cube reduces the damage dealt by enemies.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Restez un instant et écoutez', en: 'Stay Awhile and Listen' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_stay_awhile_and_listen.jpg', description: { fr: 'Endort les ennemis en face.', en: 'Puts enemies in front of Deckard to Sleep.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Bénédiction antique', en: 'Ancient Blessings' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_angelic_conduit.jpg', description: { fr: 'Renforce les attaques de base de tous les alliés à proximité et les soigne.', en: 'Empowers nearby allies\' Basic Attacks and heals them.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Parchemin de pétrification', en: 'Scroll of Stone Curse' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_scroll_of_sealing.jpg', description: { fr: 'Parchemin de confinement inflige plus de dégâts lorsque plusieurs héros sont touchés.', en: 'Scroll of Sealing deals much more damage when it hits multiple Heroes.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Gemmes sans défaut', en: 'Perfect Gems' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_deckard_perfect_gems.jpg', description: { fr: 'Réduit le temps de recharge des gemmes et de Cube horadique.', en: 'Reduces the cooldown of Gems and Horadric Cube.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'alexstrasza',
        enabled: false,
        name: { fr: 'Alexstrasza', en: 'Alexstrasza' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/alexstrasza.jpg',
        headline: { fr: 'Soins en zone massifs et forme de dragon.', en: 'Massive AoE healing and dragon form.' },
        gameplay: { fr: 'Elle sacrifie sa propre santé pour soigner ses alliés et se transforme en Reine-dragon pour dominer les combats d\'équipe.', en: 'She sacrifices her own health to heal allies and transforms into the Dragonqueen to dominate teamfights.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Reine-dragon', en: 'Dragonqueen' }, icon: '', description: { fr: 'Se transforme en dragon surpuissant.', en: 'Transforms into a massively powerful dragon.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Don de vie', en: 'Gift of Life' }, icon: '', description: { fr: 'Sacrifie de la vie pour soigner un allié.', en: 'Sacrifices health to heal an ally.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Abondance', en: 'Abundance' }, icon: '', description: { fr: 'Pose une zone qui soigne après un délai.', en: 'Plants an AoE that heals after a delay.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Rafale de flammes', en: 'Flame Buffet' }, icon: '', description: { fr: 'Enflamme un ennemi. Toucher un ennemi enflammé le ralentit.', en: 'Ignites an enemy. Hitting an ignited enemy slows them.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Lieuse-de-vie', en: 'Life-Binder' }, icon: '', description: { fr: 'Égalise les pourcentages de vie entre elle et un allié.', en: 'Equalizes health percentages between her and an ally.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Flammes purificatrices', en: 'Cleansing Flame' }, icon: '', description: { fr: 'S\'envole et bombarde la zone.', en: 'Takes to the skies and bombs the area.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'N\'utilise pas ton D pour un petit combat.', en: 'Do not waste your D for a small skirmish.' },
          { fr: 'Pose ton W là où tes alliés vont reculer.', en: 'Place your W where your allies will retreat.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'W Build', en: 'W Build' },
            summary: { fr: 'Max de soins en zone.', en: 'Max AoE healing.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T2222222,Alexstrasza]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Cercle de vie', en: 'Circle of Life' }, icon: '', description: { fr: 'Améliore le soin de zone.', en: 'Improves AoE heal.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'E Build', en: 'E Build' },
            summary: { fr: 'Dégâts et dragons fréquents.', en: 'Damage and frequent dragons.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3331333,Alexstrasza]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Flammes de fureur', en: 'Flames of Fury' }, icon: '', description: { fr: 'Réduit le CD du Trait.', en: 'Reduces Trait CD.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'ana',
        enabled: false,
        name: { fr: 'Ana', en: 'Ana' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/ana.jpg',
        headline: { fr: 'Sniper de soins avec un anti-soin puissant.', en: 'Healing sniper with powerful anti-heal.' },
        gameplay: { fr: 'Ana soigne ses alliés à très longue distance avec des tirs de précision et bloque les soins ennemis avec sa grenade.', en: 'Ana heals allies from extreme range with skillshots and blocks enemy healing with her grenade.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Pie-grièche', en: 'Shrike' }, icon: '', description: { fr: 'Empoisonne les ennemis avec ses attaques.', en: 'Poisons enemies with basic attacks.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Fléchette de soins', en: 'Healing Dart' }, icon: '', description: { fr: 'Tire un soin en ligne droite.', en: 'Fires a healing dart in a line.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Grenade biotique', en: 'Biotic Grenade' }, icon: '', description: { fr: 'Soigne les alliés et empêche les ennemis de se soigner.', en: 'Heals allies and prevents enemy healing.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Fléchette hypodermique', en: 'Sleep Dart' }, icon: '', description: { fr: 'Endort le premier ennemi touché.', en: 'Puts the first enemy hit to sleep.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Nanoboost', en: 'Nano Boost' }, icon: '', description: { fr: 'Booste massivement la magie d\'un allié.', en: 'Massively boosts an ally\'s spell power and cooldowns.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Œil d\'Horus', en: 'Eye of Horus' }, icon: '', description: { fr: 'Prend position pour tirer à portée illimitée.', en: 'Sets up to fire unlimited range rounds.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Garde la grenade pour empêcher un sauvetage ennemi.', en: 'Save the grenade to prevent an enemy rescue.' },
          { fr: 'Place-toi très en arrière pour soigner.', en: 'Position yourself very far back to heal.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Grenade', en: 'Grenade' },
            summary: { fr: 'Amplifie l\'anti-heal et le soin burst.', en: 'Amplifies anti-heal and burst healing.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1111111,Ana]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Grenade de soins', en: 'Healing Grenade' }, icon: '', description: { fr: 'Améliore la grenade.', en: 'Improves the grenade.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Sleep / Trait', en: 'Sleep / Trait' },
            summary: { fr: 'Plus de dégâts et de contrôles.', en: 'More damage and CC.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3331333,Ana]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Vampirique', en: 'Vampiric' }, icon: '', description: { fr: 'Soigne avec le trait.', en: 'Heals with the trait.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'auriel',
        enabled: true,
        name: { fr: 'Auriel', en: 'Auriel' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/auriel.jpg',
        headline: { fr: 'Soigne grâce à de l\'énergie procurés par ses alliés.', en: 'Healing fueled by Energy provided by her allies.' },
        gameplay: { fr: 'Auriel convertit les dégâts infligés par son équipe et les siens en énergie pour soigner massivement en zone.', en: 'Auriel converts the damage dealt by her team and by herself into Energy to provide massive area healing.' },
        guideVideo: {
          title: { fr: 'Guide express: Auriel', en: 'Express Guide: Auriel' },
          youtubeId: 'Sa04Z6PPmbg',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles.' },
        },
        spells:[
          { key: 'Trait', name: { fr: 'Don d\'espoir', en: 'Bestow Hope' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_bestowhope.jpg', description: { fr: 'Place une couronne sur un allié pour récupérer de l\'énergie selon ses dégâts.', en: 'Places a crown on an ally to gain Energy based on the damage they deal.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Arc vertueux', en: 'Sacred Sweep' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_angelicsweep.jpg', description: { fr: 'Inflige des dégâts en arc de cercle. Dégâts augmentés au centre.', en: 'Deals damage in an arc. Damage is increased in the center.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Rayon des Cieux', en: 'Ray of Heaven' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_rayofheaven.jpg', description: { fr: 'Consomme l\'énergie pour soigner en zone.', en: 'Consumes Energy to heal in an area.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Entrave', en: 'Detainment Strike' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_restrainingblow.jpg', description: { fr: 'Repousse un ennemi (étourdit si contre un mur).', en: 'Knocks an enemy back. If they collide with terrain, they are Stunned.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Égide de cristal', en: 'Crystal Aegis' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_ribboncocoon.jpg', description: { fr: 'Place un allié en Stase puis inflige des dégâts autour.', en: 'Places an ally in Stasis, then deals damage around them.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Réssurection', en: 'Resurrect' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_resurrect.jpg', description: { fr: 'Ramène un allié mort à la vie. Peut être utiliser sur soi.', en: 'Brings a dead ally back to life. Can be used on yourself.' }, demoYoutubeId: '' },
          
        ],
        tips:[
          { fr: 'Change la couronne de cible si ton allié ne fait pas de dégâts ou lorsqu\'il est mort.', en: 'Switch your crown to another target if your ally is not dealing damage or if they are dead.' },
          { fr: 'Cherche les étourdissements sur les murs avec ton E.', en: 'Look for wall stuns with Detainment Strike.' },
          { fr: 'Utiliser ton A sur des vagues de sbires te donne beaucoup d\'énergie.', en: 'Using Sacred Sweep on minion waves gives you a lot of Energy.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build recommandé', en: 'Recommanded Build' },
            summary: { fr: 'Génère énormément d\'énergie par soi-même.', en: 'Generates a huge amount of Energy on its own.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T3332332,Auriel]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Lumière ardente', en: 'Searing Light' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_rayofheaven.jpg', description: { fr: 'Rayon des Cieux inflige des dégâts aux héros adverses présents dans la zone de soin.', en: 'Ray of Heaven deals damage to enemy Heroes in the healing area.' }, demoYoutubeId: null,  
    }, // ------------------------------- 
              { level: 4, name: { fr: 'Sentence', en: 'Repeated Offense' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_restrainingblow_a.jpg', description: { fr: 'Augmente le repoussement d\'Entrave. Quête: étourdir des héros augmente les dégats.', en: 'Increases Detainment Strike\'s knockback distance. Quest: Stunning Heroes increases its damage.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Corde sacrée', en: 'Energized Cord' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_bestowhope_a.jpg', description: { fr: 'Augmente l\'énergie conférée par les attaques de base d\'Auriel aux héros et aux cibles non héroïques. Passif: augmente la portée des attaques de bases', en: 'Increases the Energy gained from Auriel\'s Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Égide de Cristal', en: 'Crystal Aegis' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_ribboncocoon.jpg', description: { fr: 'Place un allié en Stase puis inflige des dégâts autour.', en: 'Places an ally in Stasis, then deals damage around them.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Fouet perforant', en: 'Piercing Lash' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_restrainingblow.jpg', description: { fr: 'Entrave touche tous les héros adverses possibles, et son temps de recharge est réduit selon le nombre de héros touchés.', en: 'Detainment Strike pierces enemy Heroes, and its cooldown is reduced based on the number of Heroes hit.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Courroux des Cieux', en: 'Wrath of Heaven' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_bestowhope_a.jpg', description: { fr: 'Augmente la puissance de capacité de l\'allié affecté par Don d\'espoir. Réduit l\'armure anti-sort des héros adverses touchés par le centre d\'Arc vertueux et par l\'étourdissement d\'Entrave.', en: 'Increases the Spell Power of the ally affected by Bestow Hope. Reduces Spell Armor on enemy Heroes hit by the center of Sacred Sweep and by Detainment Strike\'s Stun.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Résolution d\'airain', en: 'Diamond Resolve' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_ribboncocoon.jpg', description: { fr: 'Égide de Cristal confère de l\'armure à la sortie.', en: 'Crystal Aegis grants Armor when it ends.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build ARAM', en: 'ARAM Build' },
            summary: { fr: 'Ça fait ding ding et des dégats.', en: 'Ideal if you have a very strong hyper-carry.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T1112232,Auriel]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Révélation céleste', en: 'Increasing Clarity' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_angelicsweep.jpg', description: { fr: 'Quête : Augmente les dégâts de la zone centrale. Récompense : Augmente à nouveau les dégâts de la zone centrale.', en: 'More Energy.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Amplitude majestueuse', en: 'Increasing Clarity' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_angelicsweep.jpg', description: { fr: 'Augmente le rayon de Arc vertueux.', en: 'More Energy.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Lueur d\'espoir', en: 'Energized Cord' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_rayofheaven.jpg', description: { fr: 'Récolter un globe réduit le coût en énergie du prochain Rayon des Cieux', en: 'Increases the Energy gained from Auriel\'s Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range.' }, demoYoutubeId: null, 

               alternatives: [
      {
        name: { fr: 'Corde sacrée', en: 'Energized Cord' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_bestowhope_a.jpg',
        description: { fr: 'Augmente l\'énergie conférée par les attaques de base d\'Auriel aux héros et aux cibles non héroïques. Passif: augmente la portée des attaques de bases', en: 'Increases the Energy gained from Auriel\'s Basic Attacks against Heroes and non-Heroic targets. Passive: increases Basic Attack range.' },
        demoYoutubeId: null 
      },
    ]
    }, // ------------------------------- 
          
              { level: 10, name: { fr: 'Égide de Cristal', en: 'Crystal Aegis' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_ribboncocoon.jpg', description: { fr: 'Place un allié en Stase puis inflige des dégâts autour.', en: 'Places an ally in Stasis, then deals damage around them.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Force convergente', en: 'Increasing Clarity' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_angelicsweep_b.jpg', description: { fr: 'Les ennemis sont repoussés au centre.', en: 'More Energy.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Courroux des Cieux', en: 'Wrath of Heaven' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_bestowhope_a.jpg', description: { fr: 'Augmente la puissance de capacité de l\'allié affecté par Don d\'espoir. Réduit l\'armure anti-sort des héros adverses touchés par le centre d\'Arc vertueux et par l\'étourdissement d\'Entrave.', en: 'Increases the Spell Power of the ally affected by Bestow Hope. Reduces Spell Armor on enemy Heroes hit by the center of Sacred Sweep and by Detainment Strike\'s Stun.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Résolution d\'airain', en: 'Diamond Resolve' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_auriel_ribboncocoon.jpg', description: { fr: 'Égide de Cristal confère de l\'armure à la sortie.', en: 'Crystal Aegis grants Armor when it ends.' }, demoYoutubeId: null },
            ]
          }
        ]
      },

      {
        id: 'kharazim',
        enabled: false,
        name: { fr: 'Kharazim', en: 'Kharazim' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/kharazim.jpg',
        headline: { fr: 'Soigneur de mêlée ultra mobile.', en: 'Ultra mobile melee healer.' },
        gameplay: { fr: 'Kharazim bondit d\'allié en ennemi, infligeant des dégâts de mêlée pour générer ses soins.', en: 'Kharazim dashes between allies and enemies, dealing melee damage to fuel his healing.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Dogme', en: 'Dogma' }, icon: '', description: { fr: 'Le Trait se choisit au niveau 1 (Dégâts, Soins ou Mana).', en: 'Trait is chosen at level 1 (Damage, Heals or Mana).' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Frappe éclair', en: 'Radiant Dash' }, icon: '', description: { fr: 'Bondit vers un allié ou un ennemi.', en: 'Dashes to an ally or enemy.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Souffle divin', en: 'Breath of Heaven' }, icon: '', description: { fr: 'Soigne les alliés proches et donne de la vitesse.', en: 'Heals nearby allies and grants movement speed.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Frappe mortelle', en: 'Deadly Reach' }, icon: '', description: { fr: 'Augmente la vitesse d\'attaque et la portée.', en: 'Increases attack speed and range.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Paume divine', en: 'Divine Palm' }, icon: '', description: { fr: 'Sauve un allié de la mort avec un gros soin.', en: 'Saves an ally from death with a massive heal.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Les Sept frappes', en: 'Seven-Sided Strike' }, icon: '', description: { fr: 'Inflige des dégâts lourds en pourcentage de vie dans une zone.', en: 'Deals heavy percentage health damage in an area.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Tape sans arrêt pour maximiser ton passif.', en: 'Attack constantly to maximize your passive.' },
          { fr: 'Garde un Q pour fuir.', en: 'Keep a Q charge to escape.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Poings de fer', en: 'Iron Fists' },
            summary: { fr: 'Soins via l\'élimination rapide des cibles.', en: 'Healing through quick target elimination.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1222222,Kharazim]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Poings de fer', en: 'Iron Fists' }, icon: '', description: { fr: 'Bonus de dégâts sur la 3ème attaque.', en: 'Bonus damage on 3rd attack.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Transcendance', en: 'Transcendence' },
            summary: { fr: 'Le build soin classique et soutenu.', en: 'The classic sustained healing build.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T2111111,Kharazim]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Transcendance', en: 'Transcendence' }, icon: '', description: { fr: 'Soin sur la 3ème attaque.', en: 'Heal on 3rd attack.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'lili',
        enabled: false,
        name: { fr: 'Li Li', en: 'Li Li' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/lili.jpg',
        headline: { fr: 'Soigneuse esquiveuse, aveugle les attaquants.', en: 'Slippery healer, blinds attackers.' },
        gameplay: { fr: 'Li Li court vite quand elle prend des dégâts et distribue des soins automatiquement aux alliés proches.', en: 'Li Li runs fast when taking damage and automatically distributes heals to nearby allies.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Pied véloce', en: 'Fast Feet' }, icon: '', description: { fr: 'Gagne en vitesse de déplacement quand elle prend des dégâts.', en: 'Gains movement speed when taking damage.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Cruche des mille tasses', en: 'Healing Brew' }, icon: '', description: { fr: 'Soigne automatiquement l\'allié le plus blessé à portée.', en: 'Automatically heals the most injured ally in range.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Serpent nuageux', en: 'Cloud Serpent' }, icon: '', description: { fr: 'Place un serpent sur un allié qui attaque et soigne.', en: 'Places a serpent on an ally that attacks and heals.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Vent aveuglant', en: 'Blinding Wind' }, icon: '', description: { fr: 'Aveugle automatiquement les cibles proches.', en: 'Automatically blinds nearby targets.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Cruche des 1 000 tasses', en: 'Jug of 1,000 Cups' }, icon: '', description: { fr: 'Canalise d\'énormes soins continus en zone.', en: 'Channels massive continuous AoE heals.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Dragon d\'eau', en: 'Water Dragon' }, icon: '', description: { fr: 'Invoque un dragon qui ralentit et blesse un ennemi.', en: 'Summons a dragon that slows and damages an enemy.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Maintiens la touche Q enfoncée en combat.', en: 'Hold down the Q key during combat.' },
          { fr: 'Ne te fais pas étourdir pendant ton R1.', en: 'Do not get stunned during your R1.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build Aveuglement', en: 'Blind Build' },
            summary: { fr: 'Parfait contre les attaquants physiques.', en: 'Perfect against physical attackers.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3331333,LiLi]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Vent persistant', en: 'Gale Force' }, icon: '', description: { fr: 'Améliore E.', en: 'Improves E.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build Serpent', en: 'Serpent Build' },
            summary: { fr: 'Soins supplémentaires via le W.', en: 'Extra healing via W.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1111111,LiLi]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Ami des serpents', en: 'Wind Serpent' }, icon: '', description: { fr: 'Améliore W.', en: 'Improves W.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'ltmorales',
        enabled: false,
        name: { fr: 'Lt. Morales', en: 'Lt. Morales' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/ltmorales.jpg',
        headline: { fr: 'Soins monocibles ininterrompus et gestion d\'énergie.', en: 'Uninterrupted single-target heals and energy management.' },
        gameplay: { fr: 'Morales maintient un allié en vie indéfiniment avec son rayon tant qu\'elle a de l\'énergie et se tient à bonne distance.', en: 'Morales keeps an ally alive indefinitely with her beam as long as she has energy and stays safely in the back.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Réacteur Caduceus', en: 'Caduceus Reactor' }, icon: '', description: { fr: 'Régénère de la vie quand le rayon de soins n\'est pas utilisé.', en: 'Regenerates health when healing beam is not active.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Rayon de soins', en: 'Healing Beam' }, icon: '', description: { fr: 'Canalise un soin continu sur un allié.', en: 'Channels a continuous heal on an ally.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Protection', en: 'Safeguard' }, icon: '', description: { fr: 'Donne de l\'armure à un allié.', en: 'Grants armor to an ally.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Grenade de déplacement', en: 'Displacement Grenade' }, icon: '', description: { fr: 'Tire une grenade qui explose et repousse les ennemis.', en: 'Fires a grenade that explodes and knocks enemies back.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Drone de transport', en: 'Medivac Dropship' }, icon: '', description: { fr: 'Transporte l\'équipe n\'importe où sur la carte.', en: 'Transports the team anywhere on the map.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Rayon stimulant', en: 'Stim Drone' }, icon: '', description: { fr: 'Augmente massivement la vitesse d\'un allié.', en: 'Massively increases an ally\'s speed.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Surveille ton niveau d\'énergie.', en: 'Monitor your energy level.' },
          { fr: 'Ta grenade est ton seul moyen de te défendre.', en: 'Your grenade is your only self-defense tool.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build Protection', en: 'Safeguard Build' },
            summary: { fr: 'Armure maximale pour sauver les cibles.', en: 'Maximum armor to save targets.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T2222222,LtMorales]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Protection longue', en: 'Prolonged Safeguard' }, icon: '', description: { fr: 'Améliore W.', en: 'Improves W.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build Grenade', en: 'Grenade Build' },
            summary: { fr: 'Plus de repoussements et de régénération d\'énergie.', en: 'More knockbacks and energy regeneration.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3332333,LtMorales]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Clear!', en: 'Clear!' }, icon: '', description: { fr: 'Améliore E.', en: 'Improves E.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'malfurion',
        enabled: false,
        name: { fr: 'Malfurion', en: 'Malfurion' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/malfurion.jpg',
        headline: { fr: 'Soins sur la durée activés par des dégâts magiques.', en: 'HoT activated by spell damage.' },
        gameplay: { fr: 'Malfurion pose des soins sur la durée sur ses alliés, puis frappe les ennemis avec Éclat lunaire pour déclencher des soins instantanés.', en: 'Malfurion applies HoTs on allies, then hits enemies with Moonfire to trigger instant burst heals.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Innervation', en: 'Innervate' }, icon: '', description: { fr: 'Rend du mana à un allié et réduit ses temps de recharge.', en: 'Restores mana to an ally and reduces their cooldowns.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Rétablissement', en: 'Regrowth' }, icon: '', description: { fr: 'Soin sur la durée majeur.', en: 'Major Heal over time.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Éclat lunaire', en: 'Moonfire' }, icon: '', description: { fr: 'Dégâts de zone rapides qui soignent tous les alliés sous Q.', en: 'Quick AoE damage that heals all allies with Q active.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Sarments', en: 'Entangling Roots' }, icon: '', description: { fr: 'Immobilise les ennemis dans une zone grandissante.', en: 'Roots enemies in a growing area.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Tranquillité', en: 'Tranquility' }, icon: '', description: { fr: 'Soigne massivement tous les alliés en zone.', en: 'Massively heals all allies in an area.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Rêve du crépuscule', en: 'Twilight Dream' }, icon: '', description: { fr: 'Silence tous les ennemis autour et inflige de gros dégâts.', en: 'Silences all enemies around him and deals heavy damage.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Maintiens ton Q sur autant d\'alliés que possible.', en: 'Keep your Q on as many allies as possible.' },
          { fr: 'Spam le W sur les ennemis pour soigner.', en: 'Spam W on enemies to heal.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build Moonfire', en: 'Moonfire Build' },
            summary: { fr: 'Dégâts et soins continus très élevés.', en: 'High continuous damage and healing.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1111111,Malfurion]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Éclat céleste', en: 'Celestial Alignment' }, icon: '', description: { fr: 'Améliore W.', en: 'Improves W.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build Sarments', en: 'Roots Build' },
            summary: { fr: 'Plus de contrôle et de zoning.', en: 'More control and zoning.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3332333,Malfurion]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Sarments profonds', en: 'Deep Roots' }, icon: '', description: { fr: 'Améliore E.', en: 'Improves E.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'stukov',
        enabled: true,
        name: { fr: 'Stukov', en: 'Stukov' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/stukov.jpg',
        headline: { fr: 'Contrôle de zone énorme et soins propagatifs.', en: 'Massive zone control and spreading heals.' },
        gameplay: { fr: 'Stukov propage des virus soignants sur son équipe et des pustules sur l\'ennemi, avant de tout faire exploser avec son Trait.', en: 'Stukov spreads healing viruses to his team and pustules to enemies, then detonates them all with his Trait.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Éruption éruptive', en: 'Bio-Kill Switch' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_bio-killswitch.jpg', description: { fr: 'Fait exploser ses virus : soigne grandement les alliés ou ralentit/blesse les ennemis.', en: 'Detonates viruses: greatly heals allies or slows/damages enemies.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Virus régénérateur', en: 'Healing Pathogen' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_healingpathogen.jpg', description: { fr: 'Un soin qui se propage d\'allié en allié.', en: 'A heal that spreads from ally to ally.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Agent infectieux', en: 'Weighted Pustule' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_weightedpustule.jpg', description: { fr: 'Lance un projectile qui infecte et ralentit les ennemis.', en: 'Throws a projectile that infects and slows enemies.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Menace larvée', en: 'Lurking Arm' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_lurkingarm.jpg', description: { fr: 'Canalise une zone qui réduit au silence et inflige des dégâts.', en: 'Channels a zone that silences and damages enemies.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Poussée éruptive', en: 'Massive Shove' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_massiveshove.jpg', description: { fr: 'Pousse un ennemi jusqu\'à ce qu\'il percute un obstacle.', en: 'Pushes an enemy until they hit terrain.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Frappe chaotique', en: 'Flailing Swipe' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_flailingswipe.jpg', description: { fr: 'Balaye les ennemis en face de lui plusieurs fois.', en: 'Swipes enemies in front of him multiple times.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'Attends que le A se propage à tout le monde avant de faire péter le D.', en: 'Wait for Q to spread to everyone before pressing D.' },
          { fr: 'Place le E sur un CC allié.', en: 'Place E on top of an allied CC.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build recommandé', en: 'Recommanded Build' },
            summary: { fr: 'Build qui passe partout, peu importe le mode de jeu.', en: 'Maximizes the impact of the silence zone.' },
            buildCodeTitle: { fr: "A COLLER DANS L\'ARBRE DES TALENTS", en: "PASTE" },
            buildCode: "[T3322212,Stukov]", videos:[],
            talents:[
{ 
    level: 1, 
    name: { fr: 'Ballistospores réactives', en: 'Reactive Ballistospores' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_bio-killswitch.jpg', 
    description: { 
      fr: 'Actif : Propage Agent infectieux autour de Stukov à ses ennemis et annule le temps de recharge d\'Éruption éruptive. Passif : Quand les points de vie de Stukov sont bas, le temps de recharge d\'Éruption éruptive est plus rapide.', 
      en: 'Active: Spreads Weighted Pustule to nearby enemies and resets Bio-Kill Switch\'s cooldown. Passive: When Stukov\'s Health is low, Bio-Kill Switch recharges faster.' 
    }, 
    demoYoutubeId: null 
  },
  { 
    level: 4, 
    name: { fr: 'Régénération virale', en: 'Vigorous Reuptake' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_bio-killswitch.jpg', 
    description: { 
      fr: 'Augmente les points de vie rendus par Éruption virale si un certain nombre d\'alliés sont sous Virus régénérateur.', 
      en: 'Increases the healing provided by Bio-Kill Switch if a certain number of allies are affected by Healing Pathogen.' 
    }, 
    demoYoutubeId: null 
  },
  { 
    level: 7, 
    name: { fr: 'Contamination de masse', en: 'Growing Infestation' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_lurkingarm.jpg', 
    description: { 
      fr: 'Augmente la zone d\'effet de Menace larvée sur la durée, mais sa durée devient limité.', 
      en: 'Increases the area of effect of Lurking Arm over time, but its duration becomes limited.' 
    }, 
    demoYoutubeId: null 
  },
  { 
    level: 10, 
    name: { fr: 'Poussée éruptive', en: 'Massive Shove' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_massiveshove.jpg', 
    description: { 
      fr: 'Pousse un ennemi jusqu\'à ce qu\'il percute un obstacle.', 
      en: 'Pushes an enemy until they hit terrain.' 
    }, 
    demoYoutubeId: null, alternatives: [
      {
        name: { fr: 'Frappe chaotique', en: 'Flailing Swipe' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_flailingswipe.jpg', 
        description: { fr: 'Balaye les ennemis en face de lui plusieurs fois.', 
        en: 'Swipes enemies in front of him multiple times.' }, 
        demoYoutubeId: null,
      },
]
  },
  { 
    level: 13, 
    name: { fr: 'Réaction infectieuse', en: 'Virulent Reaction' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_lurkingarm_a.jpg', 
    description: { 
      fr: 'Exploser les Agents infectieux sur les ennemis dans Menace larvée les immobilise.', 
      en: 'Detonating Weighted Pustules on enemies inside Lurking Arm Roots them.' 
    }, 
    demoYoutubeId: null 
  },
  { 
    level: 16, 
    name: { fr: 'Souche résistante', en: 'Superstrain' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_healingpathogen.jpg', 
    description: { 
      fr: 'Virus régénérateur rend des points de vie supplémentaires en cas d\'étourdissement ou d\'immobilisation', 
      en: 'Healing Pathogen heals for an additional amount when the target is Stunned or Rooted.' 
    }, 
    demoYoutubeId: null 
  },
  { 
    level: 20, 
    name: { fr: 'Force de propulsion', en: 'Push Comes To Shove' }, 
    icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_massiveshove.jpg', 
    description: { 
      fr: 'Poussée éruptive ralentit lorsque la cible percute un obstacle et peut voir son temps de recharge réduit.', 
      en: 'Massive Shove slows the target when they hit terrain, and can have its cooldown reduced.' 
    }, 
    demoYoutubeId: null, alternatives: [
  {
      name: { fr: 'Chaos maîtrisé', en: 'Controlled Chaos' },
      icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_stukov_flailingswipe.jpg',
      description: { fr: 'Frappes chaotiques touche une seule fois mais possède plusieurs charges.', 
                    en: 'Flailing Swipe hits only once but has multiple charges.' 
  },
    demoYoutubeId: null 
}
]
  }
]
          },
          {
            enabled: false, order: 2, label: { fr: 'Build Pustule', en: 'Pustule Build' },
            summary: { fr: 'Gros burst et ralentissement sur l\'explosion du W.', en: 'Huge burst and slow on W explosion.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1112111,Stukov]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Éclatement', en: 'Fetid Touch' }, icon: '', description: { fr: 'Améliore W.', en: 'Improves W.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'tyrande',
        enabled: true,
        name: { fr: 'Tyrande', en: 'Tyrande' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/tyrande.jpg',
        headline: { fr: 'Soigneur utilitaire, avec étourdissements et réduction d\'armure.', en: 'Utility Healer with stuns and Armor reduction.' },
        gameplay: { fr: 'Tyrande doit attaquer en permanence pour réduire les temps de recharge de ses soins et peut aider à burst une cible marquée.', en: 'Tyrande must keep attacking to reduce her healing cooldowns and help burst down marked targets.' },
        guideVideo: {
          title: { fr: 'Guide express: Tyrande', en: 'Express Guide: Tyrande' },
          youtubeId: 'UqAPjuoxI94',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces. Build non à jour dans la vidéo, mais le reste est toujours d\'actualité.', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles. The build shown in the video is outdated, but the rest is still relevant.' }
        },
        spells:[
          { key: 'Trait', name: { fr: 'Marque du chasseur', en: 'Hunter\'s Mark' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_huntersmark.jpg', description: { fr: 'Actif: Révèle et réduit l\'armure d\'un ennemi. Passif: les attaques de base de Tyrande lui rendent des points de vie, montant augmenté si la cible est marquée.', en: 'Active: Reveals an enemy and reduces their Armor. Passive: Tyrande\'s Basic Attacks heal her, with increased healing against marked targets.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Lumière d\'Élune', en: 'Light of Elune' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_lightofelune.jpg', description: { fr: 'Soigne un allié. Les attaques de base réduisent le CD.', en: 'Heals an ally. Basic Attacks reduce its cooldown.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Sentinelle', en: 'Sentinel' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_sentinel.jpg', description: { fr: 'Chouette qui scout et inflige des dégâts globaux.', en: 'Sends an Owl that scouts and deals global damage.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Éclat de lune', en: 'Lunar Flare' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_lunarflare.jpg', description: { fr: 'Étourdit les ennemis dans une petite zone.', en: 'Stuns enemies in a small area.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Éclipse d\'Élune', en: 'Shadowstalk' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_shadowstalk.jpg', description: { fr: 'Camoufle et soigne tous les alliés.', en: 'Stealths and heals all allied Heroes.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Météores', en: 'Starfall' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_starfall.jpg', description: { fr: 'Dégâts de zone et ralentissement.', en: 'Deals area damage and Slows enemies.' }, demoYoutubeId: '' }
          
        ],
        tips:[
          { fr: 'Lance ta chouette pour scouter les boss.', en: 'Use your Owl to scout Bosses.' },
          { fr: 'Marque la cible que ton tank engage.', en: 'Mark the target your tank engages on.' },
          { fr: 'Les dégâts que fait Tyrande réduisent le temps de recharge son A, même les dégâts de sa capacité héroïque !', en: 'Any damage Tyrande deals reduces Light of Elune\'s cooldown, even the damage from her Heroic Ability!' },
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build E', en: 'E Build' },
            summary: { fr: 'Étourdissements réguliers et soins continus.', en: 'Reliable stuns and sustained healing.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T2332312,Tyrande]", videos: [],
            talents:[
              { level: 1, name: { fr: 'Flèche lunaires', en: 'Moonlit Arrows' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_lightofelune.jpg', description: { fr: 'Les attaques de base réduisent davantage le temps de recharge du Lumière d\'Élune.', en: 'Basic Attacks further reduce Light of Elune\'s cooldown.' }, demoYoutubeId: null },
              { level: 4, name: { fr: 'Élue d\'Élune', en: 'Elune\'s Chosen' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_talent_autoattack_heal.jpg', description: { fr: 'Applique une marque sur un allié, les attaques de base de Tyrande le soigne.', en: 'Activate to make Tyrande\'s Basic Attacks heal the targeted allied Hero for 175% of the damage dealt.' }, demoYoutubeId: null },
              { level: 7, name: { fr: 'Fureur de la chasseresse', en: 'Huntress\' Fury' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_huntersmark.jpg', description: { fr: 'Les attaques de base de Tyrande sur une cible sous Marque du chasseur rebondissent sur les héros adverses proches. Passif: Augmente la durée et la portée de Marque du chasseur.', en: 'Tyrande\'s Basic Attacks against targets with Hunter\'s Mark bounce to nearby enemy Heroes. Passive: increases Hunter\'s Mark duration and cast range.' }, demoYoutubeId: null },
              { level: 10, name: { fr: 'Météores', en: 'Starfall' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_starfall.jpg', description: { fr: 'Zone de dégâts qui ralentit.', en: 'Creates a damaging area that Slows enemies.' }, demoYoutubeId: null },
              { level: 13, name: { fr: 'Marque du forestier', en: 'Ranger\'s Mark' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_huntersmark.jpg', description: { fr: 'Les attaques de base réduisent le temps de recharge de Marque du chasseur. Les attaques de base portées à une cible marquée réduisent le temps de recharge d\'Éclat d\'Élune.', en: 'Basic Attacks reduce Hunter\'s Mark\'s cooldown. Basic Attacks against marked targets reduce Lunar Flare\'s cooldown.' }, demoYoutubeId: null },
              { level: 16, name: { fr: 'Harmonisation céleste', en: 'Celestial Attunement' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_lightofelune.jpg', description: { fr: 'Lumière d\'Élune supprime les étourdissements, les silences et les ralentissements.', en: 'Light of Elune removes Stuns, Silences, and Slows from its target.' }, demoYoutubeId: null },
              { level: 20, name: { fr: 'Courroux céleste', en: 'Celestial Wrath' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_tyrande_starfall.jpg', description: { fr: 'Météores applique Marque du chasseur et ralentit davantage.', en: 'Starfall applies Hunter\'s Mark and increases its Slow.' }, demoYoutubeId: null },
            ]
          },
          {
            enabled: false, order: 2, label: { fr: 'Build soin', en: 'Healing Build' },
            summary: { fr: 'Sniper à très longue distance pour poke.', en: 'Very long-range sniper build for poke.' },
            buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
            buildCode: "[T2332312,Tyrande]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Ranger', en: 'Ranger' }, icon: '', description: { fr: 'Améliore W.', en: 'Improves Sentinel.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'uther',
        enabled: false,
        name: { fr: 'Uther', en: 'Uther' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/uther.jpg',
        headline: { fr: 'Soigneur tanky, armure et contrôle.', en: 'Tanky healer, armor and crowd control.' },
        gameplay: { fr: 'Uther joue en mêlée, encaisse les dégâts, étourdit les ennemis et confère une armure vitale avec ses soins.', en: 'Uther plays in melee, absorbs damage, stuns enemies, and grants vital armor with his heals.' },
        guideVideo: null,
        spells:[
          { key: 'Trait', name: { fr: 'Dévotion d\'avant-garde', en: 'Vanguard' }, icon: '', description: { fr: 'Les soins d\'Uther donnent de l\'armure. S\'il meurt, il soigne en fantôme.', en: 'Uther\'s heals grant armor. If he dies, he heals as a ghost.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Lumière sacrée', en: 'Holy Light' }, icon: '', description: { fr: 'Soin monocible massif.', en: 'Massive single-target heal.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Radiance sacrée', en: 'Holy Radiance' }, icon: '', description: { fr: 'Vague qui soigne les alliés et blesse les ennemis.', en: 'Wave that heals allies and damages enemies.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Marteau de la justice', en: 'Hammer of Justice' }, icon: '', description: { fr: 'Étourdit un ennemi au corps-à-corps.', en: 'Stuns an enemy in melee range.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Bouclier divin', en: 'Divine Shield' }, icon: '', description: { fr: 'Rend un allié invulnérable.', en: 'Makes an ally Invulnerable.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Tempête divine', en: 'Divine Storm' }, icon: '', description: { fr: 'Étourdit tous les ennemis en zone.', en: 'Stuns all enemies in an area.' }, demoYoutubeId: '' }
        ],
        tips:[
          { fr: 'N\'utilise pas tes soins juste pour la vie, utilise-les pour l\'armure.', en: 'Do not just heal for HP, use heals for the armor buff.' },
          { fr: 'N\'hésite pas à mourir pour sauver ton équipe.', en: 'Do not hesitate to die to save your team as a ghost.' }
        ],
        builds:[
          {
            enabled: true, order: 1, label: { fr: 'Build Q', en: 'Q Build' },
            summary: { fr: 'Soins massifs et réduction de CD sur soi.', en: 'Massive heals and self-CD reduction.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1111111,Uther]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Choc sacré', en: 'Holy Shock' }, icon: '', description: { fr: 'Permet au Q de faire des dégâts.', en: 'Allows Q to deal damage.' }, demoYoutubeId: null }
            ]
          },
          {
            enabled: true, order: 2, label: { fr: 'Build Tank', en: 'Tank Build' },
            summary: { fr: 'Joue comme un second tank avec ses contrôles.', en: 'Plays like a secondary tank with his CC.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T3332333,Uther]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Marteau', en: 'Hammer' }, icon: '', description: { fr: 'Améliore E.', en: 'Improves E.' }, demoYoutubeId: null }
            ]
          }
        ]
      },

      {
        id: 'whitemane',
        enabled: true,
        name: { fr: 'Blanchetête', en: 'Whitemane' },
        role: 'Healer',
        portrait: 'https://static.icy-veins.com/images/heroes/hero-portraits/whitemane.jpg',
        headline: { fr: 'Soigne en infligeant des dégâts, gestion du Zèle.', en: 'Heals by dealing damage, Zeal management.' },
        gameplay: { fr: 'Blanchetête applique Zèle à ses alliés, puis inflige un maximum de dégâts aux ennemis pour les soigner proportionnellement.', en: 'Whitemane applies Zeal to allies, then deals maximum damage to enemies to heal them proportionally.' },
        guideVideo: {
          title: { fr: 'Guide express: Blanchetête', en: 'Express Guide: Whitemane' },
          youtubeId: 'anZnNHdEhKM',
          desc: { fr: 'Guide rapide pour apprendre les mécaniques de base et quelques astuces', en: 'Quick guide to learn basic mechanics and some tips. In French, with English subtitles.' }
        },
        spells:[
          { key: 'Trait', name: { fr: 'Zèle', en: 'Zeal' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_zeal.jpg', description: { fr: 'Les alliés avec Zèle sont soignés quand Blanchetête inflige des dégâts.', en: 'Allies with Zeal are healed when Whitemane deals damage.' }, demoYoutubeId: '' },
          { key: '&', name: { fr: 'Mansuétude', en: 'Inquisition' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_clemency.jpg', description: { fr: 'Canalise un laser de soin sur un allié. Retire du Désespoir.', en: 'Channels damage and slows an enemy.' }, demoYoutubeId: '' },
          { key: 'A', name: { fr: 'Supplique', en: 'Desperate Plea' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_desperation.jpg', description: { fr: 'Soigne un allié et génère du Désespoir. Désespoir: Coûte de plus en plus de mana.', en: 'Heals an ally and grants Zeal. Costs increasingly more mana.' }, demoYoutubeId: '' },
          { key: 'Z', name: { fr: 'Inquisition', en: 'Inquisition' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_inquisition.jpg', description: { fr: 'Canalise des dégâts et ralentit un ennemi. Retire du Désespoir.', en: 'Channels damage and slows an enemy.' }, demoYoutubeId: '' },
          { key: 'E', name: { fr: 'Flagellation', en: 'Searing Lash' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_lash.jpg', description: { fr: 'Frappe en ligne, déclenche un second coup si un héros est touché.', en: 'Strikes in a line, strikes again if a hero is hit.' }, demoYoutubeId: '' },
          { key: 'R1', name: { fr: 'Égide écarlate', en: 'Scarlet Aegis' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_aegis.jpg', description: { fr: 'Donne de l\'armure, soigne et applique Zèle en zone.', en: 'Grants armor and Zeal in an area.' }, demoYoutubeId: '' },
          { key: 'R2', name: { fr: 'Sainte colère', en: 'Divine Reckoning' }, icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_reckoning.jpg', description: { fr: 'Zone de dégâts qui rend du mana quand des héros sont touchés.', en: 'Massive AoE damage (and thus massive healing).' }, demoYoutubeId: '' }
        ],
        tips:[
  { 
    fr: 'Gère ton mana, ne spamme pas le A.', 
    en: 'Manage your Mana, do not spam Desperate Plea.' 
  },
  { 
    fr: 'Égide écarlate est parfait pour contrer les engages ennemis ou appliqué Zèle en masse.', 
    en: 'Scarlet Aegis is perfect to counter enemy engages or to apply Zeal to multiple allies.' 
  },
  { 
    fr: 'Utilise Mansuétude entre deux A pour consommer le moins de mana possible.', 
    en: 'Use Clemency between Desperate Plea casts to minimize Mana consumption.' 
  }
],
        builds:[
  {
    enabled: true,
    order: 1,
    label: { fr: 'Build recommandé', en: 'Recommanded Build' },
    summary: { fr: 'Build tourné autour du laser.', en: 'Build focused on Inquisition (W).' },
    buildCodeTitle: { fr: "A COLLER DANS L'ARBRE DES TALENTS", en: "PASTE IN TALENT TREE" },
    buildCode: "[T1231121,Whitemane]",
    videos: [],
    talents:[
      {
        level: 1,
        name: { fr: 'Compassion', en: 'Compassion' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_inquisition_lash.jpg',
        description: {
          fr: 'Flagellation réduit le temps de recharge d\'Inquisition. Les points de vie rendus aux héros avec des points de vie faibles sont augmentés.',
          en: 'Searing Lash reduces the cooldown of Inquisition. Healing is increased against low Health Heroes.'
        },
        demoYoutubeId: null
      },
      {
        level: 4,
        name: { fr: 'Martyre', en: 'Martyrdom' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_desperation_alt_1.jpg',
        description: {
          fr: 'Les soins de Supplique sont augmentés. Chaque Zèle augmente davantage le soin de Supplique.',
          en: 'Desperate Plea heals for more. Each active Zeal increases its healing.'
        },
        demoYoutubeId: null
      },
      {
        level: 7,
        name: { fr: 'Intercession', en: 'Intercession' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_intercession.jpg',
        description: {
          fr: 'Rend un allié Insensible.',
          en: 'Grant an ally Unstoppable.'
        },
        demoYoutubeId: null
      },
      {
        level: 10,
        name: { fr: 'Égide écarlate', en: 'Scarlet Aegis' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_aegis.jpg',
        description: {
          fr: 'Donne de l\'armure, soigne et applique Zèle en zone.',
          en: 'Grant Armor to allies, heal them, and apply Zeal in an area.'
        },
        demoYoutubeId: null
      },
      {
        level: 13,
        name: { fr: 'Idolâtrie', en: 'Subjugation' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_inquisition.jpg',
        description: {
          fr: 'Inquisition réduit les dégâts de l\'adversaire.',
          en: 'Inquisition reduces the damage dealt by enemies.'
        },
        demoYoutubeId: null
      },
      {
        level: 16,
        name: { fr: 'Pénitence collective', en: 'Shared Punishment' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_inquisition.jpg',
        description: {
          fr: 'Inquisition se propage à un ennemi proche de la cible, puis réduit leurs armures.',
          en: 'Inquisition spreads to a nearby enemy and reduces their Armor.'
        },
        demoYoutubeId: null
      },
      {
        level: 20,
        name: { fr: 'Croisade écarlate', en: 'Scarlet Crusade' },
        icon: 'https://static.icy-veins.com/images/heroes/icons/large/storm_ui_icon_whitemane_aegis.jpg',
        description: {
          fr: 'Augmente les soins procurés par Égide écarlate et rend les alliés Insensible.',
          en: 'Scarlet Aegis heals for more and grants Unstoppable to affected allies.'
        },
        demoYoutubeId: null
        
  }
]
          },
          {
            enabled: false, order: 2, label: { fr: 'Build Pitié (Q)', en: 'Plea (Q) Build' },
            summary: { fr: 'Soins directs plus puissants mais mana intensif.', en: 'Stronger direct heals but very mana intensive.' },
            buildCodeTitle: { fr: "A COLLER", en: "PASTE" },
            buildCode: "[T1112111,Whitemane]", videos:[],
            talents:[
              { level: 1, name: { fr: 'Martyre', en: 'Martyrdom' }, icon: '', description: { fr: 'Améliore Q.', en: 'Improves Q.' }, demoYoutubeId: null }
            ]
          }
        ]
      }
    ];
