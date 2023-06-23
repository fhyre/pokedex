export const abilities = [
  {
    name: "stench",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pok\u00e9mon is first in the party.",
      short_effect:
        "Has a 10% chance of making target Pok\u00e9mon flinch with each hit.",
    },
  },
  {
    name: "drizzle",
    effect_entry: {
      effect:
        "The weather changes to rain when this Pok\u00e9mon enters battle and does not end unless replaced by another weather condition.\n\nIf multiple Pok\u00e9mon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pok\u00e9mon will stay.",
      short_effect:
        "Summons rain that lasts indefinitely upon entering battle.",
    },
  },
  {
    name: "speed-boost",
    effect_entry: {
      effect: "This Pok\u00e9mon's Speed rises one stage after each turn.",
      short_effect: "Raises Speed one stage after each turn.",
    },
  },
  {
    name: "battle-armor",
    effect_entry: {
      effect:
        "Moves cannot score critical hits against this Pok\u00e9mon.\n\nThis ability functions identically to shell armor.",
      short_effect: "Protects against critical hits.",
    },
  },
  {
    name: "sturdy",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pok\u00e9mon is holding a focus sash, this ability takes precedence and the item will not be consumed.",
      short_effect:
        "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
    },
  },
  {
    name: "damp",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
      short_effect:
        "Prevents self destruct, explosion, and aftermath from working while the Pok\u00e9mon is in battle.",
    },
  },
  {
    name: "limber",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be paralyzed.\n\nIf a Pok\u00e9mon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.",
      short_effect: "Prevents paralysis.",
    },
  },
  {
    name: "sand-veil",
    effect_entry: {
      effect:
        "During a sandstorm, this Pok\u00e9mon has 1.25\u00d7 its evasion, and it does not take sandstorm damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is halved in a sandstorm.",
      short_effect:
        "Increases evasion to 1.25\u00d7 during a sandstorm.  Protects against sandstorm damage.",
    },
  },
  {
    name: "static",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user has a 30% chance of being paralyzed.\n\nPok\u00e9mon that are immune to electric-type moves can still be paralyzed by this ability.\n\nOverworld: If the lead Pok\u00e9mon has this ability, there is a 50% chance that encounters will be with an electric Pok\u00e9mon, if applicable.",
      short_effect:
        "Has a 30% chance of paralyzing attacking Pok\u00e9mon on contact.",
    },
  },
  {
    name: "volt-absorb",
    effect_entry: {
      effect:
        "Whenever an electric-type move hits this Pok\u00e9mon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nThis ability will not take effect if this Pok\u00e9mon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pok\u00e9mon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
      short_effect: "Absorbs electric moves, healing for 1/4 max HP.",
    },
  },
  {
    name: "water-absorb",
    effect_entry: {
      effect:
        "Whenever a water-type move hits this Pok\u00e9mon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nWater moves will ignore this Pok\u00e9mon's substitute.",
      short_effect: "Absorbs water moves, healing for 1/4 max HP.",
    },
  },
  {
    name: "oblivious",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be infatuated and is immune to captivate.\n\nIf a Pok\u00e9mon is infatuated and acquires this ability, its infatuation is cleared.",
      short_effect: "Prevents infatuation and protects against captivate.",
    },
  },
  {
    name: "cloud-nine",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to air lock.",
      short_effect:
        "Negates all effects of weather, but does not prevent the weather itself.",
    },
  },
  {
    name: "compound-eyes",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have 1.3\u00d7 their accuracy.\n\nThis ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).\n\nOverworld: If the first Pok\u00e9mon in the party has this ability, the chance of a wild Pok\u00e9mon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
      short_effect: "Increases moves' accuracy to 1.3\u00d7.",
    },
  },
  {
    name: "insomnia",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pok\u00e9mon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to vital spirit in battle.",
      short_effect: "Prevents sleep.",
    },
  },
  {
    name: "color-change",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon takes damage from a move, the Pok\u00e9mon's type changes to match the move.\n\nIf the Pok\u00e9mon has two types, both are overridden.  The Pok\u00e9mon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes.\n\nThis ability takes effect on only the last hit of a multiple-hit attack.\n\nIn Pok\u00e9mon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
      short_effect: "Changes type to match when hit by a damaging move.",
    },
  },
  {
    name: "immunity",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be poisoned.  This includes bad poison.\n\nIf a Pok\u00e9mon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.",
      short_effect: "Prevents poison.",
    },
  },
  {
    name: "flash-fire",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to fire-type moves.  Once this Pok\u00e9mon has been hit by a Fire move, its own Fire moves will inflict 1.5\u00d7 as much damage until it leaves battle.\n\nThis ability has no effect while the Pok\u00e9mon is frozen.  The Fire damage bonus is retained even if the Pok\u00e9mon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pok\u00e9mon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
      short_effect:
        "Protects against fire moves.  Once one has been blocked, the Pok\u00e9mon's own Fire moves inflict 1.5\u00d7 damage until it leaves battle.",
    },
  },
  {
    name: "shield-dust",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to the extra effects of moves used against it.\n\nAn extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
      short_effect: "Protects against incoming moves' extra effects.",
    },
  },
  {
    name: "own-tempo",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be confused.\n\nIf a Pok\u00e9mon is confused and acquires this ability, its confusion will immediately be healed.",
      short_effect: "Prevents confusion.",
    },
  },
  {
    name: "suction-cups",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be forced out of battle by moves such as whirlwind.\n\ndragon tail and circle throw still inflict damage against this Pok\u00e9mon.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the success rate while fishing is increased.",
      short_effect:
        "Prevents being forced out of battle by other Pok\u00e9mon's moves.",
    },
  },
  {
    name: "intimidate",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.\n\nThis ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.\n\nThis ability has no effect on an opponent that has a substitute.\n\nOverworld: If the first Pok\u00e9mon in the party has this ability, any random encounter with a Pok\u00e9mon five or more levels lower than it has a 50% chance of being skipped.",
      short_effect: "Lowers opponents' Attack one stage upon entering battle.",
    },
  },
  {
    name: "shadow-tag",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, opposing Pok\u00e9mon cannot flee or switch out.\n\nOther Pok\u00e9mon with this ability are unaffected.  Pok\u00e9mon with run away can still flee.  Pok\u00e9mon can still switch out with the use of a move or item.",
      short_effect: "Prevents opponents from fleeing or switching out.",
    },
  },
  {
    name: "rough-skin",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to iron barbs.",
      short_effect:
        "Damages attacking Pok\u00e9mon for 1/8 their max HP on contact.",
    },
  },
  {
    name: "wonder-guard",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to damaging moves that are not super effective against it.\n\nMoves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented.\n\nThis ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pok\u00e9mon can still use Role Play itself to lose this ability, but not Skill Swap.\n\nIf this Pok\u00e9mon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.",
      short_effect:
        "Protects against damaging moves that are not super effective.",
    },
  },
  {
    name: "levitate",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\nThis ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.",
      short_effect: "Evades ground moves.",
    },
  },
  {
    name: "effect-spore",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.\n\nNothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
      short_effect:
        "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pok\u00e9mon on contact.",
    },
  },
  {
    name: "synchronize",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon is burned, paralyzed, or poisoned, the Pok\u00e9mon who gave this Pok\u00e9mon that ailment is also given the ailment.\n\nThis ability passes back bad poison when this Pok\u00e9mon is badly poisoned.  This ability cannot pass on a status ailment that the Pok\u00e9mon did not directly receive from another Pok\u00e9mon, such as the poison from toxic spikes or the burn from a flame orb.\n\nOverworld: If the lead Pok\u00e9mon has this ability, wild Pok\u00e9mon have a 50% chance of having the lead Pok\u00e9mon's nature, and a 50% chance of being given a random nature as usual, including the lead Pok\u00e9mon's nature.  This does not work on Pok\u00e9mon received outside of battle or roaming legendaries.",
      short_effect:
        "Copies burns, paralysis, and poison received onto the Pok\u00e9mon that inflicted them.",
    },
  },
  {
    name: "clear-body",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot have its stats lowered by other Pok\u00e9mon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pok\u00e9mon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to white smoke in battle.",
      short_effect: "Prevents stats from being lowered by other Pok\u00e9mon.",
    },
  },
  {
    name: "natural-cure",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is cured of any major status ailment when it is switched out for another Pok\u00e9mon.\n\nIf this ability is acquired during battle, the Pok\u00e9mon is cured upon leaving battle before losing the temporary ability.",
      short_effect: "Cures any major status ailment upon switching out.",
    },
  },
  {
    name: "lightning-rod",
    effect_entry: {
      effect:
        "All other Pok\u00e9mon's single-target electric-type moves are redirected to this Pok\u00e9mon if it is an eligible target.  Other Pok\u00e9mon's Electric moves raise this Pok\u00e9mon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pok\u00e9mon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pok\u00e9mon.  follow me takes precedence over this ability.\n\nIf the Pok\u00e9mon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
      short_effect:
        "Redirects single-target electric moves to this Pok\u00e9mon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
    },
  },
  {
    name: "serene-grace",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have twice their usual effect chance.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected.\n\nsecret power is unaffected.",
      short_effect: "Doubles the chance of moves' extra effects occurring.",
    },
  },
  {
    name: "swift-swim",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Speed is doubled during rain.\n\nThis bonus does not count as a stat modifier.",
      short_effect: "Doubles Speed during rain.",
    },
  },
  {
    name: "chlorophyll",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
      short_effect: "Doubles Speed during strong sunlight.",
    },
  },
  {
    name: "illuminate",
    effect_entry: {
      effect:
        "Overworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is doubled.\n\nThis ability has no effect in battle.",
      short_effect: "Doubles the wild encounter rate.",
    },
  },
  {
    name: "trace",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it copies a random opponent's ability.\n\nThis ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
      short_effect: "Copies an opponent's ability upon entering battle.",
    },
  },
  {
    name: "huge-power",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack is doubled while in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to pure power.",
      short_effect: "Doubles Attack in battle.",
    },
  },
  {
    name: "poison-point",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user has a 30% chance of being poisoned.",
      short_effect:
        "Has a 30% chance of poisoning attacking Pok\u00e9mon on contact.",
    },
  },
  {
    name: "inner-focus",
    effect_entry: {
      effect: "This Pok\u00e9mon cannot flinch.",
      short_effect: "Prevents flinching.",
    },
  },
  {
    name: "magma-armor",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be frozen.\n\nIf a Pok\u00e9mon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle.\n\nOverworld: If any Pok\u00e9mon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pok\u00e9mon have this ability or flame body.",
      short_effect: "Prevents freezing.",
    },
  },
  {
    name: "water-veil",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be burned.\n\nIf a Pok\u00e9mon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.",
      short_effect: "Prevents burns.",
    },
  },
  {
    name: "magnet-pull",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, opposing steel-type Pok\u00e9mon cannot flee or switch out.\n\nPok\u00e9mon with run away can still flee.  Pok\u00e9mon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pok\u00e9mon has this ability, Steel-type Pok\u00e9mon have a higher encounter rate.",
      short_effect: "Prevents steel opponents from fleeing or switching out.",
    },
  },
  {
    name: "soundproof",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to moves flagged as being sound-based.\n\nheal bell is unaffected.  uproar still prevents this Pok\u00e9mon from sleeping.  This Pok\u00e9mon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used.\n\nhowl, roar of time, sonic boom, and yawn are not flagged as sound-based.",
      short_effect: "Protects against sound-based moves.",
    },
  },
  {
    name: "rain-dish",
    effect_entry: {
      effect:
        "This Pok\u00e9mon heals for 1/16 of its maximum HP after each turn during rain.",
      short_effect: "Heals for 1/16 max HP after each turn during rain.",
    },
  },
  {
    name: "sand-stream",
    effect_entry: {
      effect:
        "The weather changes to a sandstorm when this Pok\u00e9mon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pok\u00e9mon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pok\u00e9mon will stay.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is halved in a sandstorm.",
      short_effect:
        "Summons a sandstorm that lasts indefinitely upon entering battle.",
    },
  },
  {
    name: "pressure",
    effect_entry: {
      effect:
        "Moves targetting this Pok\u00e9mon use one extra PP.\n\nThis ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pok\u00e9mon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pok\u00e9mon, ally moves that target all other Pok\u00e9mon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP.\n\nWhen this Pok\u00e9mon enters battle, all participating trainers are notified that it has this ability.\n\nOverworld: If the lead Pok\u00e9mon has this ability, higher-levelled Pok\u00e9mon have their encounter rate increased.",
      short_effect:
        "Increases the PP cost of moves targetting the Pok\u00e9mon by one.",
    },
  },
  {
    name: "thick-fat",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes half as much damage from fire- and ice-type moves.",
      short_effect: "Halves damage from fire and ice moves.",
    },
  },
  {
    name: "early-bird",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's remaining sleep turn count falls by 2 rather than 1.\n\nIf this Pok\u00e9mon's sleep counter is at 1, it will fall to 0 and then the Pok\u00e9mon will wake up.",
      short_effect: "Makes sleep pass twice as quickly.",
    },
  },
  {
    name: "flame-body",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user has a 30% chance of being burned.\n\nOverworld: If any Pok\u00e9mon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pok\u00e9mon have this ability or magma armor.",
      short_effect:
        "Has a 30% chance of burning attacking Pok\u00e9mon on contact.",
    },
  },
  {
    name: "run-away",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is always successful fleeing from wild battles, even if trapped by a move or ability.",
      short_effect: "Ensures success fleeing from wild battles.",
    },
  },
  {
    name: "keen-eye",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot have its accuracy lowered.\n\nThis ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pok\u00e9mon's evasion from making this Pok\u00e9mon's moves less accurate.  This Pok\u00e9mon can still be passed negative accuracy modifiers through heart swap.\n\nOverworld: If the first Pok\u00e9mon in the party has this ability, any random encounter with a Pok\u00e9mon five or more levels lower than it has a 50% chance of being skipped.",
      short_effect: "Prevents accuracy from being lowered.",
    },
  },
  {
    name: "hyper-cutter",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack cannot be lowered by other Pok\u00e9mon.\n\nThis ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pok\u00e9mon can still be passed negative Attack modifiers through heart swap or power swap.",
      short_effect: "Prevents Attack from being lowered by other Pok\u00e9mon.",
    },
  },
  {
    name: "pickup",
    effect_entry: {
      effect:
        "At the end of each turn, if another Pok\u00e9mon consumed or Flung a held item that turn, this Pok\u00e9mon picks up the item if it is not already holding one.  After each battle, this Pok\u00e9mon has a 10% chance of picking up an item if it is not already holding one.\n\nThe air balloon and eject button cannot be picked up.\n\nThe items that may be found vary by game, and, since Pok\u00e9mon Emerald, by the Pok\u00e9mon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
      short_effect:
        "Picks up other Pok\u00e9mon's used and Flung held items.  May also pick up an item after battle.",
    },
  },
  {
    name: "truant",
    effect_entry: {
      effect:
        'Every second turn on which this Pok\u00e9mon should attempt to use a move, it will instead do nothing ("loaf around").\n\nLoafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual.\n\nIf this Pok\u00e9mon is confused, its confusion is not checked when loafing around; the Pok\u00e9mon cannot hurt itself, and its confusion does not end or come closer to ending.\n\nIf this Pok\u00e9mon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did.\n\nThis ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.',
      short_effect: "Skips every second turn.",
    },
  },
  {
    name: "hustle",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's physical moves do 1.5\u00d7 as much regular damage, but have 0.8\u00d7 their usual accuracy.\n\nSpecial moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.\n\nOverworld: If the lead Pok\u00e9mon has this ability, higher-levelled Pok\u00e9mon have their encounter rate increased.",
      short_effect:
        "Strengthens physical moves to inflict 1.5\u00d7 damage, but decreases their accuracy to 0.8\u00d7.",
    },
  },
  {
    name: "cute-charm",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user has a 30% chance of being infatuated.\n\nOverworld: If the first Pok\u00e9mon in the party has this ability, any wild Pok\u00e9mon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
      short_effect:
        "Has a 30% chance of infatuating attacking Pok\u00e9mon on contact.",
    },
  },
  {
    name: "plus",
    effect_entry: {
      effect:
        "This Pok\u00e9mon has 1.5\u00d7 its Special Attack if any friendly Pok\u00e9mon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
      short_effect:
        "Increases Special Attack to 1.5\u00d7 when a friendly Pok\u00e9mon has plus or minus.",
    },
  },
  {
    name: "minus",
    effect_entry: {
      effect:
        "This Pok\u00e9mon has 1.5\u00d7 its Special Attack if any friendly Pok\u00e9mon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
      short_effect:
        "Increases Special Attack to 1.5\u00d7 when a friendly Pok\u00e9mon has plus or minus.",
    },
  },
  {
    name: "forecast",
    effect_entry: {
      effect:
        "During rain, strong sunlight, or hail, this Pok\u00e9mon's type changes to water, fire, or ice, respectively, and its form changes to match.\n\nThis ability has no effect for any Pok\u00e9mon other than castform.\n\nIf the weather ends or becomes anything that does not trigger this ability, or a Pok\u00e9mon with air lock or cloud nine enters battle, this Pok\u00e9mon's type and form revert to their default.  If this ability is lost or disabled, this Pok\u00e9mon cannot change its current type and form until it regains its ability.",
      short_effect: "Changes castform's type and form to match the weather.",
    },
  },
  {
    name: "sticky-hold",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's hold item cannot be removed by other Pok\u00e9mon.\n\nDamaging moves that would remove this Pok\u00e9mon's item can still inflict damage against this Pok\u00e9mon, e.g. knock off or pluck.  This Pok\u00e9mon can still use moves that involve the loss of its own item, e.g. fling or trick.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the encounter rate while fishing is increased.",
      short_effect:
        "Prevents a held item from being removed by other Pok\u00e9mon.",
    },
  },
  {
    name: "shed-skin",
    effect_entry: {
      effect:
        "After each turn, this Pok\u00e9mon has a 33% of being cured of any major status ailment.",
      short_effect:
        "Has a 33% chance of curing any major status ailment after each turn.",
    },
  },
  {
    name: "guts",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon is asleep, burned, paralyzed, or poisoned, it has 1.5\u00d7 its Attack.  This Pok\u00e9mon is not affected by the usual Attack cut from a burn.\n\nThis bonus does not count as a stat modifier.",
      short_effect:
        "Increases Attack to 1.5\u00d7 with a major status ailment.",
    },
  },
  {
    name: "marvel-scale",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon has a major status ailment, it has 1.5\u00d7 its Defense.\n\nThis bonus does not count as a stat modifier.",
      short_effect:
        "Increases Defense to 1.5\u00d7 with a major status ailment.",
    },
  },
  {
    name: "liquid-ooze",
    effect_entry: {
      effect:
        "Whenever a Pok\u00e9mon would heal after hitting this Pok\u00e9mon with a leeching move like absorb, it instead loses as many HP as it would usually gain.\n\ndream eater is unaffected.",
      short_effect:
        "Damages opponents using leeching moves for as much as they would heal.",
    },
  },
  {
    name: "overgrow",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5\u00d7 as much regular damage.",
      short_effect:
        "Strengthens grass moves to inflict 1.5\u00d7 damage at 1/3 max HP or less.",
    },
  },
  {
    name: "blaze",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5\u00d7 as much regular damage.",
      short_effect:
        "Strengthens fire moves to inflict 1.5\u00d7 damage at 1/3 max HP or less.",
    },
  },
  {
    name: "torrent",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5\u00d7 as much regular damage.",
      short_effect:
        "Strengthens water moves to inflict 1.5\u00d7 damage at 1/3 max HP or less.",
    },
  },
  {
    name: "swarm",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5\u00d7 as much regular damage.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is increased.",
      short_effect:
        "Strengthens bug moves to inflict 1.5\u00d7 damage at 1/3 max HP or less.",
    },
  },
  {
    name: "rock-head",
    effect_entry: {
      effect:
        "This Pok\u00e9mon does not receive recoil damage from its recoil moves.\n\nstruggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
      short_effect: "Protects against recoil damage.",
    },
  },
  {
    name: "drought",
    effect_entry: {
      effect:
        "The weather changes to strong sunlight when this Pok\u00e9mon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pok\u00e9mon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pok\u00e9mon will stay.",
      short_effect:
        "Summons strong sunlight that lasts indefinitely upon entering battle.",
    },
  },
  {
    name: "arena-trap",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, opposing Pok\u00e9mon cannot flee or switch out.  flying-type Pok\u00e9mon and Pok\u00e9mon in the air, e.g. due to levitate or magnet rise, are unaffected.\n\nPok\u00e9mon with run away can still flee.  Pok\u00e9mon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is doubled.",
      short_effect:
        "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pok\u00e9mon in the air.",
    },
  },
  {
    name: "vital-spirit",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pok\u00e9mon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to insomnia in battle.\n\nOverworld: If the lead Pok\u00e9mon has this ability, higher-levelled Pok\u00e9mon have their encounter rate increased.",
      short_effect: "Prevents sleep.",
    },
  },
  {
    name: "white-smoke",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot have its stats lowered by other Pok\u00e9mon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pok\u00e9mon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to clear body in battle.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is halved.",
      short_effect: "Prevents stats from being lowered by other Pok\u00e9mon.",
    },
  },
  {
    name: "pure-power",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack is doubled in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to huge power.",
      short_effect: "Doubles Attack in battle.",
    },
  },
  {
    name: "shell-armor",
    effect_entry: {
      effect:
        "Moves cannot score critical hits against this Pok\u00e9mon.\n\nThis ability functions identically to battle armor.",
      short_effect: "Protects against critical hits.",
    },
  },
  {
    name: "air-lock",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to cloud nine.",
      short_effect:
        "Negates all effects of weather, but does not prevent the weather itself.",
    },
  },
  {
    name: "tangled-feet",
    effect_entry: {
      effect: "When this Pok\u00e9mon is confused, it has twice its evasion.",
      short_effect: "Doubles evasion when confused.",
    },
  },
  {
    name: "motor-drive",
    effect_entry: {
      effect:
        "Whenever an electric-type move hits this Pok\u00e9mon, its Speed rises one stage, negating any other effect on it.\n\nThis ability will not take effect if this Pok\u00e9mon is immune to Electric moves.  Electric moves will ignore this Pok\u00e9mon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
      short_effect: "Absorbs electric moves, raising Speed one stage.",
    },
  },
  {
    name: "rivalry",
    effect_entry: {
      effect:
        "This Pok\u00e9mon inflicts 1.25\u00d7 as much regular damage against Pok\u00e9mon of the same gender and 0.75\u00d7 as much regular damage against Pok\u00e9mon of the opposite gender.\n\nIf either Pok\u00e9mon is genderless, damage is unaffected.",
      short_effect:
        "Increases damage inflicted to 1.25\u00d7 against Pok\u00e9mon of the same gender, but decreases damage to 0.75\u00d7 against the opposite gender.",
    },
  },
  {
    name: "steadfast",
    effect_entry: {
      effect: "Whenever this Pok\u00e9mon flinches, its Speed rises one stage.",
      short_effect: "Raises Speed one stage upon flinching.",
    },
  },
  {
    name: "snow-cloak",
    effect_entry: {
      effect:
        "During hail, this Pok\u00e9mon has 1.25\u00d7 its evasion, and it does not take hail damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is halved in snow.",
      short_effect:
        "Increases evasion to 1.25\u00d7 during hail.  Protects against hail damage.",
    },
  },
  {
    name: "gluttony",
    effect_entry: {
      effect:
        "This Pok\u00e9mon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold.",
      short_effect:
        "Makes the Pok\u00e9mon eat any held Berry triggered by low HP below 1/2 its max HP.",
    },
  },
  {
    name: "anger-point",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon receives a critical hit, its Attack rises to the maximum of 6 stages.\n\nThis ability will still take effect if the critical hit is received by a substitute.",
      short_effect:
        "Raises Attack to the maximum of six stages upon receiving a critical hit.",
    },
  },
  {
    name: "unburden",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon uses or loses its held item, its Speed is doubled.  If it gains another item or leaves battle, this bonus is lost.\n\nThis includes when the Pok\u00e9mon drops its item because of knock off.  This bonus does not count as a stat modifier.  There is no notification when this ability takes effect.",
      short_effect: "Doubles Speed upon using or losing a held item.",
    },
  },
  {
    name: "heatproof",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes half as much damage from fire-type moves and burns.",
      short_effect: "Halves damage from fire moves and burns.",
    },
  },
  {
    name: "simple",
    effect_entry: {
      effect:
        "Each stage of this Pok\u00e9mon's stat modifiers acts as two stages.  These doubled stages are still limited to a minimum of -6 and a maximum of 6.\n\nThis Pok\u00e9mon can still accumulate less than -3 or more than 3 stages of stat modifiers, even though the extra ones have no effect after doubling.",
      short_effect:
        "Doubles the Pok\u00e9mon's stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
    },
  },
  {
    name: "dry-skin",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pok\u00e9mon takes 1.25\u00d7 as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
      short_effect:
        "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25\u00d7, but absorbs water moves, healing for 1/4 max HP.",
    },
  },
  {
    name: "download",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, its Attack or Special Attack, whichever corresponds to its opponents' weaker total defensive stat, rises one stage.  In the event of a tie, Special Attack is raised.\n\nThis ability also takes effect when acquired during a battle.",
      short_effect:
        "Raises the attack stat corresponding to the opponents' weaker defense one stage upon entering battle.",
    },
  },
  {
    name: "iron-fist",
    effect_entry: {
      effect:
        'Moves flagged as being punch-based have 1.2\u00d7 their base power for this Pok\u00e9mon.\n\nsucker punch is not flagged as punch-based; its original, Japanese name only means "surprise attack".',
      short_effect: "Strengthens punch-based moves to 1.2\u00d7 their power.",
    },
  },
  {
    name: "poison-heal",
    effect_entry: {
      effect:
        "If this Pok\u00e9mon is poisoned, it will heal for 1/8 of its maximum HP after each turn rather than taking damage.  This includes bad poison.",
      short_effect:
        "Heals for 1/8 max HP after each turn when poisoned in place of damage.",
    },
  },
  {
    name: "adaptability",
    effect_entry: {
      effect:
        "This Pok\u00e9mon inflicts twice as much damage with moves whose types match its own, rather than the usual same-type attack bonus of 1.5\u00d7.",
      short_effect:
        "Increases the same-type attack bonus from 1.5\u00d7 to 2\u00d7.",
    },
  },
  {
    name: "skill-link",
    effect_entry: {
      effect:
        "This Pok\u00e9mon always hits five times with two-to-five-hit moves, such as icicle spear.  It also bypasses the accuracy checks on triple kick's second and third hits.",
      short_effect:
        "Extends two-to-five-hit moves and triple kick to their full length every time.",
    },
  },
  {
    name: "hydration",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is cured of any major status ailment after each turn during rain.",
      short_effect:
        "Cures any major status ailment after each turn during rain.",
    },
  },
  {
    name: "solar-power",
    effect_entry: {
      effect:
        "During strong sunlight, this Pok\u00e9mon has 1.5\u00d7 its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
      short_effect:
        "Increases Special Attack to 1.5\u00d7 but costs 1/8 max HP after each turn during strong sunlight.",
    },
  },
  {
    name: "quick-feet",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon has a major status ailment, it has 1.5\u00d7 its Speed.  This Pok\u00e9mon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is halved.",
      short_effect: "Increases Speed to 1.5\u00d7 with a major status ailment.",
    },
  },
  {
    name: "normalize",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves all act as if they were normal-type.\n\nMoves that inflict typeless damage do so as usual.  Moves of variable type, such as hidden power, are affected.  They otherwise work as usual, however; weather ball, for example, is always forced to be Normal, but it still has doubled power and looks different during weather.\n\nAs thunder wave is prevented by immunities, unlike most non-damaging moves, it does not affect ghost-type Pok\u00e9mon under the effect of this ability.",
      short_effect: "Makes the Pok\u00e9mon's moves all act normal-type.",
    },
  },
  {
    name: "sniper",
    effect_entry: {
      effect:
        "This Pok\u00e9mon inflicts triple damage with critical hits, rather than the usual double damage.",
      short_effect:
        "Strengthens critical hits to inflict 3\u00d7 damage rather than 2\u00d7.",
    },
  },
  {
    name: "magic-guard",
    effect_entry: {
      effect:
        "This Pok\u00e9mon is immune to damage not directly caused by a move.\n\nFor example, this Pok\u00e9mon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pok\u00e9mon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pok\u00e9mon nor heal the opponent, and Pok\u00e9mon with a jaboca berry or rowap berry will not consume the berry when hit by this Pok\u00e9mon.\n\nThe following are unaffected: struggle, pain split (whether used by or against this Pok\u00e9mon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.\n\nThis Pok\u00e9mon will neither lose nor regain HP if it drains HP from a Pok\u00e9mon with liquid ooze.\n\nIf this Pok\u00e9mon is badly poisoned, the poison counter is still increased each turn; if the Pok\u00e9mon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
      short_effect: "Protects against damage not directly caused by a move.",
    },
  },
  {
    name: "no-guard",
    effect_entry: {
      effect:
        "Moves used by or against this Pok\u00e9mon never miss.\n\nOne-hit KO moves are unaffected.  Moves affected by this ability can hit Pok\u00e9mon during the preparation turn of moves like dig or fly.\n\nOverworld: If the lead Pok\u00e9mon has this ability, the wild encounter rate is doubled.",
      short_effect:
        "Ensures all moves used by and against the Pok\u00e9mon hit.",
    },
  },
  {
    name: "stall",
    effect_entry: {
      effect:
        "This Pok\u00e9mon moves last within its priority bracket.\n\nMultiple Pok\u00e9mon with this ability move in order of Speed amongst themselves.\n\nThe full incense and lagging tail take precedence over this ability; that is, Pok\u00e9mon with these items move after Pok\u00e9mon with this ability.  Pok\u00e9mon with both this ability and one of these items are delayed as much as if they had only the item.\n\nThis ability works as usual during trick room: Pok\u00e9mon with this ability will move in reverse order of Speed after Pok\u00e9mon without it.",
      short_effect:
        "Makes the Pok\u00e9mon move last within its move's priority bracket.",
    },
  },
  {
    name: "technician",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have 1.5\u00d7 their power if their base power is 60 or less.\n\nThis includes moves of variable power, such as hidden power and magnitude, when their power is 60 or less.  helping hand's power boost is taken into account for any move, as is defense curl's power boost for rollout.",
      short_effect:
        "Strengthens moves of 60 base power or less to 1.5\u00d7 their power.",
    },
  },
  {
    name: "leaf-guard",
    effect_entry: {
      effect:
        "This Pok\u00e9mon cannot be given a major status ailment during strong sunlight.\n\nThis ability does not heal prior status ailments.  rest will fail altogether with this ability in effect.  yawn will immediately fail if used on this Pok\u00e9mon during strong sunlight, and an already-used Yawn will fail if the weather turns to strong sunlight in the meantime.",
      short_effect:
        "Protects against major status ailments during strong sunlight.",
    },
  },
  {
    name: "klutz",
    effect_entry: {
      effect:
        "In battle, this Pok\u00e9mon cannot use its held item, nor will the item have any passive effect on the battle, positive or negative.  This Pok\u00e9mon also cannot use fling.\n\nThe Speed cut from the iron ball and the effort items (the macho brace, power weight, power bracer, power belt, power lens, power band, and power anklet) is unaffected.  Items that do not directly affect the battle, such as the exp share, the amulet coin, or the soothe bell, work as usual.  All held items work as usual out of battle.\n\nOther moves that use the held item, such as natural gift and switcheroo, work as usual.",
      short_effect:
        "Prevents the Pok\u00e9mon from using its held item in battle.",
    },
  },
  {
    name: "mold-breaker",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pok\u00e9mon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pok\u00e9mon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pok\u00e9mon's moves can paralyze a Pok\u00e9mon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pok\u00e9mon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pok\u00e9mon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to teravolt and turboblaze.",
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent a move.",
    },
  },
  {
    name: "super-luck",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have critical hit rates one stage higher than normal.",
      short_effect: "Raises moves' critical hit rates one stage.",
    },
  },
  {
    name: "aftermath",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon is knocked out by a move that makes contact, the move's user takes 1/4 its maximum HP in damage.",
      short_effect:
        "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
    },
  },
  {
    name: "anticipation",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, if one of its opponents has a move that is super effective against it, self destruct, explosion, or a one-hit knockout move, all participating trainers are notified.\n\nThe move itself is not revealed; only that there is such a move.  Moves that inflict typeless damage, such as future sight, and moves of variable type, such as hidden power, count as their listed types.  counter, metal burst, mirror coat, and one-hit KO moves to which this Pok\u00e9mon is immune do not trigger this ability.",
      short_effect:
        "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
    },
  },
  {
    name: "forewarn",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it reveals the move with the highest base power known by any opposing Pok\u00e9mon to all participating trainers.\n\nIn the event of a tie, one is chosen at random.\n\nMoves without a listed base power are assigned one as follows:\n\nPower | Moves\n----: | -----\n  160 | One-hit KO moves: fissure, guillotine, horn drill, and sheer cold\n  120 | Counter moves: counter, metal burst, and mirror coat\n   80 | Variable power or set damage: crush grip, dragon rage, electro ball, endeavor, final gambit, flail, frustration, grass knot, gyro ball, heat crash, heavy slam, hidden power, low kick, natural gift, night shade, psywave, return, reversal, seismic toss, sonic boom, trump card, and wring out\n    0 | Any such move not listed\n",
      short_effect:
        "Reveals the opponents' strongest move upon entering battle.",
    },
  },
  {
    name: "unaware",
    effect_entry: {
      effect:
        "This Pok\u00e9mon ignores other Pok\u00e9mon's stat modifiers for the purposes of damage and accuracy calculation.\n\nEffectively, this affects modifiers of every stat except Speed.\n\nThe power of punishment and stored power is calculated as usual.  When this Pok\u00e9mon hurts itself in confusion, its stat modifiers affect damage as usual.",
      short_effect:
        "Ignores other Pok\u00e9mon's stat modifiers for damage and accuracy calculation.",
    },
  },
  {
    name: "tinted-lens",
    effect_entry: {
      effect:
        "This Pok\u00e9mon deals twice as much damage with moves that are not very effective against the target.",
      short_effect: "Doubles damage inflicted with not-very-effective moves.",
    },
  },
  {
    name: "filter",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes 0.75\u00d7 as much damage from moves that are super effective against it.\n\nThis ability functions identically to solid rock.",
      short_effect: "Decreases damage taken from super-effective moves by 1/4.",
    },
  },
  {
    name: "slow-start",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack and Speed are halved for five turns upon entering battle.\n\nThis ability also takes effect when acquired during battle.  If this Pok\u00e9mon loses its ability before the five turns are up, its Attack and Speed return to normal; if it then regains this ability without leaving battle, its Attack and Speed are halved again, but the counter keeps counting from where it was.",
      short_effect:
        "Halves Attack and Speed for five turns upon entering battle.",
    },
  },
  {
    name: "scrappy",
    effect_entry: {
      effect:
        "This Pok\u00e9mon ignores ghost-type Pok\u00e9mon's immunity to normal- and fighting-type moves.\n\nGhost Pok\u00e9mon's other types affect damage as usual.",
      short_effect:
        "Lets the Pok\u00e9mon's normal and fighting moves hit ghost Pok\u00e9mon.",
    },
  },
  {
    name: "storm-drain",
    effect_entry: {
      effect:
        "All other Pok\u00e9mon's single-target water-type moves are redirected to this Pok\u00e9mon, if it is an eligible target.  Other Pok\u00e9mon's Water moves raise this Pok\u00e9mon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pok\u00e9mon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pok\u00e9mon.  follow me takes precedence over this ability.",
      short_effect:
        "Redirects single-target water moves to this Pok\u00e9mon where possible.  Absorbs Water moves, raising Special Attack one stage.",
    },
  },
  {
    name: "ice-body",
    effect_entry: {
      effect:
        "This Pok\u00e9mon heals for 1/16 of its maximum HP after each turn during hail, and it does not take hail damage regardless of type.",
      short_effect:
        "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
    },
  },
  {
    name: "solid-rock",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes 0.75\u00d7 as much damage from moves that are super effective against it.\n\nThis ability functions identically to filter.",
      short_effect: "Decreases damage taken from super-effective moves by 1/4.",
    },
  },
  {
    name: "snow-warning",
    effect_entry: {
      effect:
        "The weather changes to hail when this Pok\u00e9mon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pok\u00e9mon with this ability, drizzle, drought, or sand stream are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pok\u00e9mon will stay.",
      short_effect:
        "Summons hail that lasts indefinitely upon entering battle.",
    },
  },
  {
    name: "honey-gather",
    effect_entry: {
      effect:
        "This Pok\u00e9mon has a chance of picking up honey after each battle.  This chance starts at 5% and rises another 5% after every tenth level: 5% from level 1\u201310, 10% from 11\u201320, and so on, up to 50% from 91\u2013100.\n\nThis ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
      short_effect: "The Pok\u00e9mon may pick up honey after battle.",
    },
  },
  {
    name: "frisk",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it reveals an opposing Pok\u00e9mon's held item to all participating trainers.\n\nIn a double battle, if one opponent has an item, this Pok\u00e9mon will Frisk that Pok\u00e9mon; if both have an item, it will Frisk one at random.",
      short_effect: "Reveals an opponent's held item upon entering battle.",
    },
  },
  {
    name: "reckless",
    effect_entry: {
      effect:
        'This Pok\u00e9mon\'s recoil moves and crash moves have 1.2\u00d7 their base power.\n\nstruggle is unaffected.\n\nThe "crash moves" are the moves that damage the user upon missing: jump kick and high jump kick.',
      short_effect: "Strengthens recoil moves to 1.2\u00d7 their power.",
    },
  },
  {
    name: "multitype",
    effect_entry: {
      effect:
        "If this Pok\u00e9mon is holding an elemental Plate, its type and form change to match the Plate.\n\nThis Pok\u00e9mon's held item, whether or not it is a Plate, cannot be taken by covet or thief, nor removed by knock off, nor traded by switcheroo or trick.  Covet, Thief, and Knock Off still inflict damage against this Pok\u00e9mon.  Unlike with sticky hold, this Pok\u00e9mon cannot use fling, Switcheroo, or Trick to lose its item itself, nor gain an item through Switcheroo or Trick if it does not have one.\n\nThis ability has no effect for any Pok\u00e9mon other than arceus.  This ability cannot be traded with skill swap, nor copied with role play or trace, nor disabled with gastro acid, nor changed with worry seed.  This Pok\u00e9mon cannot use Skill Swap or Role Play to lose its ability itself.  mold breaker cannot ignore this ability.\n\nIf a Pok\u00e9mon Transforms into an Arceus with this ability, it will Transform into Arceus's default, normal-type form.  If the Transforming Pok\u00e9mon is holding a Plate, this ability will then activate and change the Pok\u00e9mon into the corresponding form.",
      short_effect: "Changes arceus's type and form to match its held Plate.",
    },
  },
  {
    name: "flower-gift",
    effect_entry: {
      effect:
        "Friendly Pok\u00e9mon have 1.5\u00d7 their Attack and Special Defense during strong sunlight if any friendly Pok\u00e9mon has this ability.\n\nUnlike forecast, multitype, and zen mode, this ability is not tied to its Pok\u00e9mon's form change; cherrim will switch between its forms even if it loses this ability.  As such, this ability also works if obtained by a Pok\u00e9mon other than Cherrim.",
      short_effect:
        "Increases friendly Pok\u00e9mon's Attack and Special Defense to 1.5\u00d7 during strong sunlight.",
    },
  },
  {
    name: "bad-dreams",
    effect_entry: {
      effect:
        "Opposing Pok\u00e9mon take 1/8 of their maximum HP in damage after each turn while they are asleep.",
      short_effect:
        "Damages sleeping opponents for 1/8 their max HP after each turn.",
    },
  },
  {
    name: "pickpocket",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, if it does not have a held item, it steals the attacker's held item.\n\nThis Pok\u00e9mon cannot steal upon being knocked out.  It can steal if the attacker has a substitute, but cannot steal when its own Substitute is hit.  If a move hits multiple times, only the last hit triggers this ability.  If this Pok\u00e9mon is wild, it cannot steal from a trained Pok\u00e9mon.",
      short_effect: "Steals attacking Pok\u00e9mon's held items on contact.",
    },
  },
  {
    name: "sheer-force",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves with extra effects have 1.3\u00d7 their power, but lose their extra effects.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.\n\nMoves that lower the user's stats are unaffected.",
      short_effect:
        "Strengthens moves with extra effects to 1.3\u00d7 their power, but prevents their extra effects.",
    },
  },
  {
    name: "contrary",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon's stats would be raised, they are instead lowered by the same amount, and vice versa.",
      short_effect: "Inverts stat changes.",
    },
  },
  {
    name: "unnerve",
    effect_entry: {
      effect:
        "Opposing Pok\u00e9mon cannot eat held Berries while this Pok\u00e9mon is in battle.\n\nAffected Pok\u00e9mon can still use bug bite or pluck to eat a target's Berry.",
      short_effect: "Prevents opposing Pok\u00e9mon from eating held Berries.",
    },
  },
  {
    name: "defiant",
    effect_entry: {
      effect:
        "When any of this Pok\u00e9mon's stats are lowered, its Attack rises by two stages.\n\nIf multiple stats are lowered at once, this ability takes effect with each stat lowered.",
      short_effect: "Raises Attack two stages upon having any stat lowered.",
    },
  },
  {
    name: "defeatist",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack and Special Attack are halved when it has half its HP or less.",
      short_effect: "Halves Attack and Special Attack at 50% max HP or less.",
    },
  },
  {
    name: "cursed-body",
    effect_entry: {
      effect:
        "Moves that hit this Pok\u00e9mon have a 30% chance of being Disabled afterward.",
      short_effect:
        "Has a 30% chance of Disabling any move that hits the Pok\u00e9mon.",
    },
  },
  {
    name: "healer",
    effect_entry: {
      effect:
        "Friendly Pok\u00e9mon next to this Pok\u00e9mon in double and triple battles each have a 30% chance of being cured of any major status ailment after each turn.",
      short_effect:
        "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
    },
  },
  {
    name: "friend-guard",
    effect_entry: {
      effect:
        "All friendly Pok\u00e9mon take 0.75\u00d7 as much direct damage from moves while this Pok\u00e9mon is in battle.\n\nThis effect stacks if multiple allied Pok\u00e9mon have it.",
      short_effect:
        "Decreases all direct damage taken by friendly Pok\u00e9mon to 0.75\u00d7.",
    },
  },
  {
    name: "weak-armor",
    effect_entry: {
      effect:
        "Whenever a physical move hits this Pok\u00e9mon, its Speed rises one stage and its Defense falls one stage.\n\nThis ability triggers on every hit of a multiple-hit move.",
      short_effect:
        "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
    },
  },
  {
    name: "heavy-metal",
    effect_entry: {
      effect: "This Pok\u00e9mon has double the usual weight for its species.",
      short_effect: "Doubles the Pok\u00e9mon's weight.",
    },
  },
  {
    name: "light-metal",
    effect_entry: {
      effect: "This Pok\u00e9mon has half the usual weight for its species.",
      short_effect: "Halves the Pok\u00e9mon's weight.",
    },
  },
  {
    name: "multiscale",
    effect_entry: {
      effect:
        "This Pok\u00e9mon takes half as much damage when it is hit having full HP.",
      short_effect: "Halves damage taken from full HP.",
    },
  },
  {
    name: "toxic-boost",
    effect_entry: {
      effect: "This Pok\u00e9mon has 1.5\u00d7 its Attack when poisoned.",
      short_effect: "Increases Attack to 1.5\u00d7 when poisoned.",
    },
  },
  {
    name: "flare-boost",
    effect_entry: {
      effect: "This Pok\u00e9mon has 1.5\u00d7 its Special Attack when burned.",
      short_effect: "Increases Special Attack to 1.5\u00d7 when burned.",
    },
  },
  {
    name: "harvest",
    effect_entry: {
      effect:
        "After each turn, if the last item this Pok\u00e9mon consumed was a Berry and it is not currently holding an item, it has a 50% chance of regaining that Berry, or a 100% chance during strong sunlight.",
      short_effect:
        "Has a 50% chance of restoring a used Berry after each turn if the Pok\u00e9mon has held no items in the meantime.",
    },
  },
  {
    name: "telepathy",
    effect_entry: {
      effect:
        "This Pok\u00e9mon does not take damage from friendly Pok\u00e9mon's moves, including single-target moves aimed at it.",
      short_effect: "Protects against friendly Pok\u00e9mon's damaging moves.",
    },
  },
  {
    name: "moody",
    effect_entry: {
      effect:
        "After each turn, one of this Pok\u00e9mon's stats at random rises two stages, and another falls one stage.\n\nIf a stat is already at 6 or -6 stages, it will not be chosen to be increased or decreased, respectively.",
      short_effect:
        "Raises a random stat two stages and lowers another one stage after each turn.",
    },
  },
  {
    name: "overcoat",
    effect_entry: {
      effect: "This Pok\u00e9mon does not take damage from weather.",
      short_effect: "Protects against damage from weather.",
    },
  },
  {
    name: "poison-touch",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's contact moves have a 30% chance of poisoning the target with each hit.\n\nThis counts as an extra effect for the purposes of shield dust.  This ability takes effect before mummy.",
      short_effect:
        "Has a 30% chance of poisoning target Pok\u00e9mon upon contact.",
    },
  },
  {
    name: "regenerator",
    effect_entry: {
      effect:
        "This Pok\u00e9mon regains 1/3 of its maximum HP when it is switched out for another Pok\u00e9mon under any circumstances other than having fainted.\n\nThis ability does not take effect when a battle ends.",
      short_effect: "Heals for 1/3 max HP upon switching out.",
    },
  },
  {
    name: "big-pecks",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Defense cannot be lowered by other Pok\u00e9mon.\n\nThis Pok\u00e9mon can still be passed negative Defense modifiers through heart swap or guard swap.",
      short_effect: "Protects against Defense drops.",
    },
  },
  {
    name: "sand-rush",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
      short_effect:
        "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
    },
  },
  {
    name: "wonder-skin",
    effect_entry: {
      effect:
        "Non-damaging moves have exactly 50% base accuracy against this Pok\u00e9mon.",
      short_effect:
        "Lowers incoming non-damaging moves' base accuracy to exactly 50%.",
    },
  },
  {
    name: "analytic",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have 1.3\u00d7 their power when it moves last in a turn.\n\nfuture sight and doom desire are unaffected.",
      short_effect:
        "Strengthens moves to 1.3\u00d7 their power when moving last.",
    },
  },
  {
    name: "illusion",
    effect_entry: {
      effect:
        "This Pok\u00e9mon, upon being sent out, appears to have the species, nickname, and Pok\u00e9 Ball of the last Pok\u00e9mon in the party that is able to battle.  This illusion breaks upon being hit by a damaging move.\n\nOther damage, e.g. from weather or spikes, does not break the illusion, nor does damage done to a substitute.\n\nIf the party order becomes temporarily shuffled around as Pok\u00e9mon are switched out in battle, this ability chooses the last Pok\u00e9mon according to that shuffled order.",
      short_effect:
        "Takes the appearance of the last conscious party Pok\u00e9mon upon being sent out until hit by a damaging move.",
    },
  },
  {
    name: "imposter",
    effect_entry: {
      effect:
        "This Pok\u00e9mon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.",
      short_effect: "Transforms upon entering battle.",
    },
  },
  {
    name: "infiltrator",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves ignore light screen, reflect, and safeguard.",
      short_effect: "Bypasses light screen, reflect, and safeguard.",
    },
  },
  {
    name: "mummy",
    effect_entry: {
      effect:
        "Whenever a contact move hits this Pok\u00e9mon, the attacking Pok\u00e9mon's ability changes to Mummy.\n\nmultitype is unaffected.  If a Pok\u00e9mon with moxie knocks this Pok\u00e9mon out, the former's ability will change without taking effect.",
      short_effect:
        "Changes attacking Pok\u00e9mon's abilities to Mummy on contact.",
    },
  },
  {
    name: "moxie",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Attack rises one stage upon knocking out another Pok\u00e9mon, even a friendly Pok\u00e9mon.\n\nThis ability does not take effect when the Pok\u00e9mon indirectly causes another Pok\u00e9mon to faint, e.g. through poison or spikes.\n\nIf this Pok\u00e9mon knocks out a Pok\u00e9mon with mummy, the former's ability will change without taking effect.",
      short_effect: "Raises Attack one stage upon KOing a Pok\u00e9mon.",
    },
  },
  {
    name: "justified",
    effect_entry: {
      effect:
        "Whenever a dark-type move hits this Pok\u00e9mon, its Attack rises one stage.\n\nThe move is not negated in any way.",
      short_effect:
        "Raises Attack one stage upon taking damage from a dark move.",
    },
  },
  {
    name: "rattled",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move.",
      short_effect:
        "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
    },
  },
  {
    name: "magic-bounce",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon is targeted by a move flagged as being reflectable, the move is redirected to its user.\n\nAll reflectable moves are non-damaging, and most non-damaging moves that target other Pok\u00e9mon are reflectable.\n\nA move reflected by this ability or magic coat cannot be reflected back.",
      short_effect: "Reflects most non-damaging moves back at their user.",
    },
  },
  {
    name: "sap-sipper",
    effect_entry: {
      effect:
        "Whenever a grass-type move hits this Pok\u00e9mon, its Attack rises one stage, negating any other effect on it.",
      short_effect: "Absorbs grass moves, raising Attack one stage.",
    },
  },
  {
    name: "prankster",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's non-damaging moves have their priority increased by one stage.",
      short_effect: "Raises non-damaging moves' priority by one stage.",
    },
  },
  {
    name: "sand-force",
    effect_entry: {
      effect:
        "During a sandstorm, this Pok\u00e9mon's rock-, ground-, and steel-type moves have 1.3\u00d7 their base power.  This Pok\u00e9mon does not take sandstorm damage, regardless of type.",
      short_effect:
        "Strengthens rock, ground, and steel moves to 1.3\u00d7 their power during a sandstorm.  Protects against sandstorm damage.",
    },
  },
  {
    name: "iron-barbs",
    effect_entry: {
      effect:
        "Whenever a move makes contact with this Pok\u00e9mon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to rough skin.",
      short_effect:
        "Damages attacking Pok\u00e9mon for 1/8 their max HP on contact.",
    },
  },
  {
    name: "zen-mode",
    effect_entry: {
      effect:
        "This Pok\u00e9mon switches between Standard Mode and Zen Mode after each turn depending on its HP.  Below 50% of its maximum HP, it switches to Zen Mode, and at 50% or above, it switches to Standard Mode.\n\nThis Pok\u00e9mon returns to Standard Mode upon leaving battle or losing this ability.  This ability has no effect if this Pok\u00e9mon is not a darmanitan.",
      short_effect:
        "Changes darmanitan's form after each turn depending on its HP: Zen Mode below 50% max HP, and Standard Mode otherwise.",
    },
  },
  {
    name: "victory-star",
    effect_entry: {
      effect:
        "All friendly Pok\u00e9mon's moves, including this Pok\u00e9mon's own moves, have 1.1\u00d7 their usual accuracy while this Pok\u00e9mon is in battle.",
      short_effect:
        "Increases moves' accuracy to 1.1\u00d7 for friendly Pok\u00e9mon.",
    },
  },
  {
    name: "turboblaze",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pok\u00e9mon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pok\u00e9mon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pok\u00e9mon's moves can paralyze a Pok\u00e9mon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pok\u00e9mon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pok\u00e9mon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and teravolt.",
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent moves.",
    },
  },
  {
    name: "teravolt",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pok\u00e9mon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pok\u00e9mon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pok\u00e9mon's moves can paralyze a Pok\u00e9mon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pok\u00e9mon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pok\u00e9mon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and turboblaze.",
      short_effect:
        "Bypasses targets' abilities if they could hinder or prevent moves.",
    },
  },
  {
    name: "aroma-veil",
    effect_entry: {
      effect: "Protects allies against moves that affect their mental state.",
      short_effect:
        "Protects allies against moves that affect their mental state.",
    },
  },
  {
    name: "flower-veil",
    effect_entry: {
      effect:
        "Protects friendly grass Pok\u00e9mon from having their stats lowered by other Pok\u00e9mon.",
      short_effect:
        "Protects friendly grass Pok\u00e9mon from having their stats lowered by other Pok\u00e9mon.",
    },
  },
  {
    name: "cheek-pouch",
    effect_entry: {
      effect:
        "Restores HP upon eating a Berry, in addition to the Berry's effect.",
      short_effect:
        "Restores HP upon eating a Berry, in addition to the Berry's effect.",
    },
  },
  {
    name: "protean",
    effect_entry: {
      effect:
        "Changes the bearer's type to match each move it uses.\n\nThe type change takes place just before the move is used.",
      short_effect: "Changes the bearer's type to match each move it uses.",
    },
  },
  {
    name: "fur-coat",
    effect_entry: {
      effect: "Halves damage from physical attacks.",
      short_effect: "Halves damage from physical attacks.",
    },
  },
  {
    name: "magician",
    effect_entry: {
      effect:
        "Steals the target's held item when the bearer uses a damaging move.",
      short_effect:
        "Steals the target's held item when the bearer uses a damaging move.",
    },
  },
  {
    name: "bulletproof",
    effect_entry: {
      effect: "Protects against bullet, ball, and bomb-based moves.",
      short_effect: "Protects against bullet, ball, and bomb-based moves.",
    },
  },
  {
    name: "competitive",
    effect_entry: {
      effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
      short_effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
    },
  },
  {
    name: "strong-jaw",
    effect_entry: {
      effect: "Strengthens biting moves to 1.5\u00d7 their power.",
      short_effect: "Strengthens biting moves to 1.5\u00d7 their power.",
    },
  },
  {
    name: "refrigerate",
    effect_entry: {
      effect:
        "Turns the bearer's normal-type moves into ice-type moves.  Moves changed by this ability have 1.3\u00d7 their power.",
      short_effect:
        "Turns the bearer's normal moves into ice moves and strengthens them to 1.3\u00d7 their power.",
    },
  },
  {
    name: "sweet-veil",
    effect_entry: {
      effect: "Prevents friendly Pok\u00e9mon from sleeping.",
      short_effect: "Prevents friendly Pok\u00e9mon from sleeping.",
    },
  },
  {
    name: "stance-change",
    effect_entry: {
      effect:
        "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
      short_effect:
        "Changes aegislash to Blade Forme before using a damaging move, or Shield Forme before using kings shield.",
    },
  },
  {
    name: "gale-wings",
    effect_entry: {
      effect: "Raises flying moves' priority by one stage.",
      short_effect: "Raises flying moves' priority by one stage.",
    },
  },
  {
    name: "mega-launcher",
    effect_entry: {
      effect: "Strengthens aura and pulse moves to 1.5\u00d7 their power.",
      short_effect:
        "Strengthens aura and pulse moves to 1.5\u00d7 their power.",
    },
  },
  {
    name: "grass-pelt",
    effect_entry: {
      effect: "Boosts Defense while grassy terrain is in effect.",
      short_effect: "Boosts Defense while grassy terrain is in effect.",
    },
  },
  {
    name: "symbiosis",
    effect_entry: {
      effect:
        "Passes the bearer's held item to an ally when the ally uses up its item.",
      short_effect:
        "Passes the bearer's held item to an ally when the ally uses up its item.",
    },
  },
  {
    name: "tough-claws",
    effect_entry: {
      effect: "Strengthens moves that make contact to 1.33\u00d7 their power.",
      short_effect:
        "Strengthens moves that make contact to 1.33\u00d7 their power.",
    },
  },
  {
    name: "pixilate",
    effect_entry: {
      effect:
        "Turns the bearer's normal-type moves into fairy moves.  Moves changed by this ability have 1.3\u00d7 their power.",
      short_effect:
        "Turns the bearer's normal moves into fairy moves and strengthens them to 1.3\u00d7 their power.",
    },
  },
  {
    name: "gooey",
    effect_entry: {
      effect: "Lowers attacking Pok\u00e9mon's Speed by one stage on contact.",
      short_effect:
        "Lowers attacking Pok\u00e9mon's Speed by one stage on contact.",
    },
  },
  {
    name: "aerilate",
    effect_entry: {
      effect:
        "Turns the bearer's normal-type moves into flying-type moves.  Moves changed by this ability have 1.3\u00d7 their power.",
      short_effect:
        "Turns the bearer's normal moves into flying moves and strengthens them to 1.3\u00d7 their power.",
    },
  },
  {
    name: "parental-bond",
    effect_entry: {
      effect:
        "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
      short_effect:
        "Lets the bearer hit twice with damaging moves.  The second hit has half power.",
    },
  },
  {
    name: "dark-aura",
    effect_entry: {
      effect:
        "Strengthens dark moves for all friendly and opposing Pok\u00e9mon.",
      short_effect:
        "Strengthens dark moves to 1.33\u00d7 their power for all friendly and opposing Pok\u00e9mon.",
    },
  },
  {
    name: "fairy-aura",
    effect_entry: {
      effect:
        "Strengthens fairy moves for all friendly and opposing Pok\u00e9mon.",
      short_effect:
        "Strengthens fairy moves to 1.33\u00d7 their power for all friendly and opposing Pok\u00e9mon.",
    },
  },
  {
    name: "aura-break",
    effect_entry: {
      effect:
        "While this Pok\u00e9mon is on the field, dark aura and fairy aura weaken moves of their respective types to 2/3 their power, rather than strengthening them.",
      short_effect:
        "Makes dark aura and fairy aura weaken moves of their respective types.",
    },
  },
  {
    name: "primordial-sea",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle or gains this ability, the weather becomes heavy rain.  Heavy rain has all the properties of rain dance and also causes damaging Fire moves to fail.\n\nHeavy rain ends when this Pok\u00e9mon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and desolate land.\n\nair lock and cloud nine will prevent the effects of heavy rain, including allowing Fire moves to work, but will not allow the weather to be changed.",
      short_effect:
        "Creates heavy rain, which has all the properties of Rain Dance, cannot be replaced, and causes damaging Fire moves to fail.",
    },
  },
  {
    name: "desolate-land",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle or gains this ability, the weather becomes extremely harsh sunlight.  Extremely harsh sunlight has all the properties of sunny day and also causes damaging Water moves to fail.\n\nExtremely harsh sunlight ends when this Pok\u00e9mon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of delta stream and primordial sea.\n\nair lock and cloud nine will prevent the effects of extremely harsh sunlight, including allowing Water moves to work, but will not allow the weather to be changed.",
      short_effect:
        "Creates extremely harsh sunlight, which has all the properties of Sunny Day, cannot be replaced, and causes damaging Water moves to fail.",
    },
  },
  {
    name: "delta-stream",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle or gains this ability, the weather becomes a mysterious air current.  A mysterious air current causes moves to not be super effective against Flying; they do neutral damage instead.  anticipation and stealth rock are not affected.\n\nThe mysterious air current ends when this Pok\u00e9mon leaves battle or loses this ability, or when this ability is nullified.  The weather cannot otherwise be changed except by the effects of desolate land and primordial sea.\n\nair lock and cloud nine will prevent the effect of a mysterious air current, but will not allow the weather to be changed.",
      short_effect:
        "Creates a mysterious air current, which cannot be replaced and causes moves to never be super effective against Flying Pok\u00e9mon.",
    },
  },
  {
    name: "stamina",
    effect_entry: {
      effect:
        "Raises this Pok\u00e9mon's Defense by one stage when it takes damage from a move.",
      short_effect:
        "Raises this Pok\u00e9mon's Defense by one stage when it takes damage from a move.",
    },
  },
  {
    name: "wimp-out",
    effect_entry: {
      effect:
        "After this Pok\u00e9mon is hit by a move, if that move caused this Pok\u00e9mon's HP to drop below half, it switches out.",
      short_effect:
        "This Pok\u00e9mon automatically switches out when its HP drops below half.",
    },
  },
  {
    name: "emergency-exit",
    effect_entry: {
      effect:
        "After this Pok\u00e9mon is hit by a move, if that move caused this Pok\u00e9mon's HP to drop below half, it switches out.",
      short_effect:
        "This Pok\u00e9mon automatically switches out when its HP drops below half.",
    },
  },
  {
    name: "water-compaction",
    effect_entry: {
      effect:
        "Raises this Pok\u00e9mon's Defense by two stages when it's hit by a Water move.",
      short_effect:
        "Raises this Pok\u00e9mon's Defense by two stages when it's hit by a Water move.",
    },
  },
  {
    name: "merciless",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves critical hit against poisoned targets.",
      short_effect:
        "This Pok\u00e9mon's moves critical hit against poisoned targets.",
    },
  },
  {
    name: "shields-down",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle and at the end of each turn, if its HP is 50% or above, it changes into Meteor Form; otherwise, it changes into Core Form.  In Meteor Form, it cannot be given a major status ailment (though existing ones are not cured), cannot become drowsy from yawn, and cannot use rest (which will simply fail).\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Minior.",
      short_effect:
        "Transforms this Minior between Core Form and Meteor Form.  Prevents major status ailments and drowsiness while in Meteor Form.",
    },
  },
  {
    name: "stakeout",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves have double power against Pok\u00e9mon that switched in this turn.",
      short_effect:
        "This Pok\u00e9mon's moves have double power against Pok\u00e9mon that switched in this turn.",
    },
  },
  {
    name: "water-bubble",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon is hit by a Fire move, the damage is halved.  When this Pok\u00e9mon uses a Water move, the power is doubled. This Pok\u00e9mon cannot be burned, and if it becomes burned, the burn is immediately cured.",
      short_effect:
        "Halves damage from Fire moves, doubles damage of Water moves, and prevents burns.",
    },
  },
  {
    name: "steelworker",
    effect_entry: {
      effect: "This Pok\u00e9mon's Steel moves have 1.5\u00d7 power.",
      short_effect: "This Pok\u00e9mon's Steel moves have 1.5\u00d7 power.",
    },
  },
  {
    name: "berserk",
    effect_entry: {
      effect:
        "Whenever this Pok\u00e9mon takes damage from a move that causes its HP to drop below 50%, its Special Attack rises by one stage.",
      short_effect:
        "Raises this Pok\u00e9mon's Special Attack by one stage every time its HP drops below half.",
    },
  },
  {
    name: "slush-rush",
    effect_entry: {
      effect: "During Hail, this Pok\u00e9mon has double Speed.",
      short_effect: "During Hail, this Pok\u00e9mon has double Speed.",
    },
  },
  {
    name: "long-reach",
    effect_entry: {
      effect: "A move used by this Pok\u00e9mon will not make contact.",
      short_effect: "This Pok\u00e9mon's moves do not make contact.",
    },
  },
  {
    name: "liquid-voice",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon uses a move that is sound-based, that move's type is Water.",
      short_effect: "Sound-based moves become Water-type.",
    },
  },
  {
    name: "triage",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's healing moves have their priority increased by 3.",
      short_effect:
        "This Pok\u00e9mon's healing moves have their priority increased by 3.",
    },
  },
  {
    name: "galvanize",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon uses a Normal moves, that move is Electric its power is 1.2\u00d7.",
      short_effect:
        "This Pok\u00e9mon's Normal moves are Electric and have their power increased to 1.2\u00d7.",
    },
  },
  {
    name: "surge-surfer",
    effect_entry: {
      effect: "Doubles this Pok\u00e9mon's Speed on Electric Terrain.",
      short_effect: "Doubles this Pok\u00e9mon's Speed on Electric Terrain.",
    },
  },
  {
    name: "schooling",
    effect_entry: {
      effect:
        "If this Pok\u00e9mon is a wishiwashi and level 20 or above, then when it enters battle and at the start of each turn, it becomes Schooling Form if its HP is 25% or higher and Solo Form otherwise.\n\nThis ability cannot be replaced, copied, or nullified.",
      short_effect:
        "Wishiwashi becomes Schooling Form when its HP is 25% or higher.",
    },
  },
  {
    name: "disguise",
    effect_entry: {
      effect:
        "If this Pok\u00e9mon is in its Disguised Form and takes damage from a move, it switches to its Busted Form and the damage is prevented.  Other effects are not prevented.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Mimikyu.",
      short_effect: "Prevents the first instance of battle damage.",
    },
  },
  {
    name: "battle-bond",
    effect_entry: {
      effect:
        "Transforms this Pok\u00e9mon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Greninja.",
      short_effect:
        "Transforms this Pok\u00e9mon into Ash-Greninja after fainting an opponent.  Water Shuriken's power is 20 and always hits three times.",
    },
  },
  {
    name: "power-construct",
    effect_entry: {
      effect:
        "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.\n\nThis ability cannot be copied or replaced.  This ability only takes effect for Zygarde.",
      short_effect:
        "Transforms 10% or 50% Zygarde into Complete Forme when its HP is below 50%.",
    },
  },
  {
    name: "corrosion",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's moves and item ignore the usual immunity of Poison and Steel Pok\u00e9mon when attempting to inflict poison.",
      short_effect:
        "This Pok\u00e9mon can inflict poison on Poison and Steel Pok\u00e9mon.",
    },
  },
  {
    name: "comatose",
    effect_entry: {
      effect:
        "This Pok\u00e9mon always acts as though it were Asleep.  It cannot be given another status ailment; it's unaffected by yawn; it can use sleep talk; and so on.",
      short_effect: "This Pok\u00e9mon always  acts as though it were Asleep.",
    },
  },
  {
    name: "queenly-majesty",
    effect_entry: {
      effect:
        "When an opposing Pok\u00e9mon attempts to use a move that targets this Pok\u00e9mon or an ally, and that move has priority, it will fail.",
      short_effect: "Opposing Pok\u00e9mon cannot use priority attacks.",
    },
  },
  {
    name: "innards-out",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon faints from an opponent's move, that opponent takes damage equal to the HP this Pok\u00e9mon had remaining.",
      short_effect:
        "When this Pok\u00e9mon faints from an opponent's move, that opponent takes damage equal to the HP this Pok\u00e9mon had remaining.",
    },
  },
  {
    name: "dancer",
    effect_entry: {
      effect:
        "Whenever another Pok\u00e9mon uses a dance move, this Pok\u00e9mon will use the same move immediately afterwards.",
      short_effect:
        "Whenever another Pok\u00e9mon uses a dance move, this Pok\u00e9mon will use the same move immediately afterwards.",
    },
  },
  {
    name: "battery",
    effect_entry: {
      effect:
        "Ally Pok\u00e9mon's moves have their power increased to 1.3\u00d7.",
      short_effect:
        "Ally Pok\u00e9mon's moves have their power increased to 1.3\u00d7.",
    },
  },
  {
    name: "fluffy",
    effect_entry: {
      effect:
        "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
      short_effect:
        "Damage from contact moves is halved.  Damage from Fire moves is doubled.",
    },
  },
  {
    name: "dazzling",
    effect_entry: {
      effect:
        "When an opposing Pok\u00e9mon attempts to use a move that targets this Pok\u00e9mon or an ally, and that move has priority, it will fail.",
      short_effect: "Opposing Pok\u00e9mon cannot use priority attacks.",
    },
  },
  {
    name: "soul-heart",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's Special Attack rises by one stage every time any Pok\u00e9mon faints.",
      short_effect:
        "This Pok\u00e9mon's Special Attack rises by one stage every time any Pok\u00e9mon faints.",
    },
  },
  {
    name: "tangling-hair",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon takes regular damage from a contact move, the attacking Pok\u00e9mon's Speed lowers by one stage.",
      short_effect:
        "When this Pok\u00e9mon takes regular damage from a contact move, the attacking Pok\u00e9mon's Speed lowers by one stage.",
    },
  },
  {
    name: "receiver",
    effect_entry: {
      effect: "When an ally faints, this Pok\u00e9mon gains its Ability.",
      short_effect: "When an ally faints, this Pok\u00e9mon gains its Ability.",
    },
  },
  {
    name: "power-of-alchemy",
    effect_entry: {
      effect: "When an ally faints, this Pok\u00e9mon gains its Ability.",
      short_effect: "When an ally faints, this Pok\u00e9mon gains its Ability.",
    },
  },
  {
    name: "beast-boost",
    effect_entry: {
      effect:
        "Raises this Pok\u00e9mon's highest stat by one stage when it faints another Pok\u00e9mon.",
      short_effect:
        "Raises this Pok\u00e9mon's highest stat by one stage when it faints another Pok\u00e9mon.",
    },
  },
  {
    name: "rks-system",
    effect_entry: {
      effect:
        "Changes this Pok\u00e9mon's type to match its held Memory.\n\nThis ability cannot be copied, replaced, or nullified.  This ability only takes effect for Silvally.",
      short_effect:
        "Changes this Pok\u00e9mon's type to match its held Memory.",
    },
  },
  {
    name: "electric-surge",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to electric terrain.",
      short_effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to Electric Terrain.",
    },
  },
  {
    name: "psychic-surge",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to psychic terrain.",
      short_effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to Psychic Terrain.",
    },
  },
  {
    name: "misty-surge",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to misty terrain.",
      short_effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to Misty Terrain.",
    },
  },
  {
    name: "grassy-surge",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to grassy terrain.",
      short_effect:
        "When this Pok\u00e9mon enters battle, it changes the terrain to Grassy Terrain.",
    },
  },
  {
    name: "full-metal-body",
    effect_entry: {
      effect:
        "This Pok\u00e9mon's stats cannot be lowered by other Pok\u00e9mon's moves or abilities.  This effect only applies to normal stat modifications and not more exotic effects such as topsy turvy or power swap.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
      short_effect:
        "Other Pok\u00e9mon cannot lower this Pok\u00e9mon's stats.",
    },
  },
  {
    name: "shadow-shield",
    effect_entry: {
      effect:
        "When this Pok\u00e9mon has full HP, regular damage (not fixed damage!) from moves is halved.\n\nThis ability cannot be nullified.",
      short_effect:
        "When this Pok\u00e9mon has full HP, regular damage from moves is halved.",
    },
  },
  {
    name: "prism-armor",
    effect_entry: {
      effect:
        "Super-effective damage this Pok\u00e9mon takes is reduced to 0.75\u00d7.\n\nThis Ability is not bypassed by mold breaker, teravolt, or turboblaze.",
      short_effect: "Reduces super-effective damage to 0.75\u00d7.",
    },
  },
  {
    name: "neuroforce",
    effect_entry: {
      effect: "Increases super-effective damage dealt to 1.25\u00d7.",
      short_effect: "Increases super-effective damage dealt to 1.25\u00d7.",
    },
  },
  {
    name: "intrepid-sword",
    effect_entry: {},
  },
  {
    name: "dauntless-shield",
    effect_entry: {},
  },
  {
    name: "libero",
    effect_entry: {},
  },
  {
    name: "ball-fetch",
    effect_entry: {},
  },
  {
    name: "cotton-down",
    effect_entry: {},
  },
  {
    name: "propeller-tail",
    effect_entry: {},
  },
  {
    name: "mirror-armor",
    effect_entry: {},
  },
  {
    name: "gulp-missile",
    effect_entry: {},
  },
  {
    name: "stalwart",
    effect_entry: {},
  },
  {
    name: "steam-engine",
    effect_entry: {},
  },
  {
    name: "punk-rock",
    effect_entry: {},
  },
  {
    name: "sand-spit",
    effect_entry: {},
  },
  {
    name: "ice-scales",
    effect_entry: {},
  },
  {
    name: "ripen",
    effect_entry: {},
  },
  {
    name: "ice-face",
    effect_entry: {},
  },
  {
    name: "power-spot",
    effect_entry: {},
  },
  {
    name: "mimicry",
    effect_entry: {},
  },
  {
    name: "screen-cleaner",
    effect_entry: {},
  },
  {
    name: "steely-spirit",
    effect_entry: {},
  },
  {
    name: "perish-body",
    effect_entry: {},
  },
  {
    name: "wandering-spirit",
    effect_entry: {},
  },
  {
    name: "gorilla-tactics",
    effect_entry: {},
  },
  {
    name: "neutralizing-gas",
    effect_entry: {},
  },
  {
    name: "pastel-veil",
    effect_entry: {},
  },
  {
    name: "hunger-switch",
    effect_entry: {},
  },
  {
    name: "quick-draw",
    effect_entry: {},
  },
  {
    name: "unseen-fist",
    effect_entry: {},
  },
  {
    name: "curious-medicine",
    effect_entry: {},
  },
  {
    name: "transistor",
    effect_entry: {},
  },
  {
    name: "dragons-maw",
    effect_entry: {},
  },
  {
    name: "chilling-neigh",
    effect_entry: {},
  },
  {
    name: "grim-neigh",
    effect_entry: {},
  },
  {
    name: "as-one-glastrier",
    effect_entry: {},
  },
  {
    name: "as-one-spectrier",
    effect_entry: {},
  },
  {
    name: "lingering-aroma",
    effect_entry: {},
  },
  {
    name: "seed-sower",
    effect_entry: {},
  },
  {
    name: "thermal-exchange",
    effect_entry: {},
  },
  {
    name: "anger-shell",
    effect_entry: {},
  },
  {
    name: "purifying-salt",
    effect_entry: {},
  },
  {
    name: "well-baked-body",
    effect_entry: {},
  },
  {
    name: "wind-rider",
    effect_entry: {},
  },
  {
    name: "guard-dog",
    effect_entry: {},
  },
  {
    name: "rocky-payload",
    effect_entry: {},
  },
  {
    name: "wind-power",
    effect_entry: {},
  },
  {
    name: "zero-to-hero",
    effect_entry: {},
  },
  {
    name: "commander",
    effect_entry: {},
  },
  {
    name: "electromorphosis",
    effect_entry: {},
  },
  {
    name: "protosynthesis",
    effect_entry: {},
  },
  {
    name: "quark-drive",
    effect_entry: {},
  },
  {
    name: "good-as-gold",
    effect_entry: {},
  },
  {
    name: "vessel-of-ruin",
    effect_entry: {},
  },
  {
    name: "sword-of-ruin",
    effect_entry: {},
  },
  {
    name: "tablets-of-ruin",
    effect_entry: {},
  },
  {
    name: "beads-of-ruin",
    effect_entry: {},
  },
  {
    name: "orichalcum-pulse",
    effect_entry: {},
  },
  {
    name: "hadron-engine",
    effect_entry: {},
  },
  {
    name: "opportunist",
    effect_entry: {},
  },
  {
    name: "cud-chew",
    effect_entry: {},
  },
  {
    name: "sharpness",
    effect_entry: {},
  },
  {
    name: "supreme-overlord",
    effect_entry: {},
  },
  {
    name: "costar",
    effect_entry: {},
  },
  {
    name: "toxic-debris",
    effect_entry: {},
  },
  {
    name: "armor-tail",
    effect_entry: {},
  },
  {
    name: "earth-eater",
    effect_entry: {},
  },
  {
    name: "mycelium-might",
    effect_entry: {},
  },
  {
    name: "mountaineer",
    effect_entry: {},
  },
  {
    name: "wave-rider",
    effect_entry: {},
  },
  {
    name: "skater",
    effect_entry: {},
  },
  {
    name: "thrust",
    effect_entry: {},
  },
  {
    name: "perception",
    effect_entry: {},
  },
  {
    name: "parry",
    effect_entry: {},
  },
  {
    name: "instinct",
    effect_entry: {},
  },
  {
    name: "dodge",
    effect_entry: {},
  },
  {
    name: "jagged-edge",
    effect_entry: {},
  },
  {
    name: "frostbite",
    effect_entry: {},
  },
  {
    name: "tenacity",
    effect_entry: {},
  },
  {
    name: "pride",
    effect_entry: {},
  },
  {
    name: "deep-sleep",
    effect_entry: {},
  },
  {
    name: "power-nap",
    effect_entry: {},
  },
  {
    name: "spirit",
    effect_entry: {},
  },
  {
    name: "warm-blanket",
    effect_entry: {},
  },
  {
    name: "gulp",
    effect_entry: {},
  },
  {
    name: "herbivore",
    effect_entry: {},
  },
  {
    name: "sandpit",
    effect_entry: {},
  },
  {
    name: "hot-blooded",
    effect_entry: {},
  },
  {
    name: "medic",
    effect_entry: {},
  },
  {
    name: "life-force",
    effect_entry: {},
  },
  {
    name: "lunchbox",
    effect_entry: {},
  },
  {
    name: "nurse",
    effect_entry: {},
  },
  {
    name: "melee",
    effect_entry: {},
  },
  {
    name: "sponge",
    effect_entry: {},
  },
  {
    name: "bodyguard",
    effect_entry: {},
  },
  {
    name: "hero",
    effect_entry: {},
  },
  {
    name: "last-bastion",
    effect_entry: {},
  },
  {
    name: "stealth",
    effect_entry: {},
  },
  {
    name: "vanguard",
    effect_entry: {},
  },
  {
    name: "nomad",
    effect_entry: {},
  },
  {
    name: "sequence",
    effect_entry: {},
  },
  {
    name: "grass-cloak",
    effect_entry: {},
  },
  {
    name: "celebrate",
    effect_entry: {},
  },
  {
    name: "lullaby",
    effect_entry: {},
  },
  {
    name: "calming",
    effect_entry: {},
  },
  {
    name: "daze",
    effect_entry: {},
  },
  {
    name: "frighten",
    effect_entry: {},
  },
  {
    name: "interference",
    effect_entry: {},
  },
  {
    name: "mood-maker",
    effect_entry: {},
  },
  {
    name: "confidence",
    effect_entry: {},
  },
  {
    name: "fortune",
    effect_entry: {},
  },
  {
    name: "bonanza",
    effect_entry: {},
  },
  {
    name: "explode",
    effect_entry: {},
  },
  {
    name: "omnipotent",
    effect_entry: {},
  },
  {
    name: "share",
    effect_entry: {},
  },
  {
    name: "black-hole",
    effect_entry: {},
  },
  {
    name: "shadow-dash",
    effect_entry: {},
  },
  {
    name: "sprint",
    effect_entry: {},
  },
  {
    name: "disgust",
    effect_entry: {},
  },
  {
    name: "high-rise",
    effect_entry: {},
  },
  {
    name: "climber",
    effect_entry: {},
  },
  {
    name: "flame-boost",
    effect_entry: {},
  },
  {
    name: "aqua-boost",
    effect_entry: {},
  },
  {
    name: "run-up",
    effect_entry: {},
  },
  {
    name: "conqueror",
    effect_entry: {},
  },
  {
    name: "shackle",
    effect_entry: {},
  },
  {
    name: "decoy",
    effect_entry: {},
  },
  {
    name: "shield",
    effect_entry: {},
  },
];