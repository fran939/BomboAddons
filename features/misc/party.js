import { data } from "../../data/data";

let registers = [];

register("chat", (power) => {
    data.power = power
    data.save()
  }).setCriteria("You selected the ${power} power for your Accessory Bag!")

register("chat", (num, enrich) => {
    data.enrich = `${ num } enrichments on ${ enrich }`
    data.save()
}).setCriteria("Swapped ${num} enrichments to ${enrich}!")

register("renderSlot", (slot) => {
    if (!slot?.toString().includes("ContainerLocalMenu: Stats Tuning") || !slot?.toString().includes("Slot 4 of")) return
    slot = slot.getItem()?.getLore()
    let tune = ""
    let mp = ""
    slot?.forEach(line => {
      if (line.toString()?.includes("+")) {
        line = ChatLib.removeFormatting(line)
        tune += line.substring(line.indexOf("+") + 1, line.indexOf(" "))
      }
      else if (line.toString()?.includes("Magical Power:")) {
        line = ChatLib.removeFormatting(line)
        mp = line.substring(line.indexOf(":") + 2)
      }
    })
    data.tuning = tune
    data.mp = mp
    data.save()
})

export function registerWhen(trigger, dependency) {
  registers.push([trigger, dependency]);
  trigger.register();
}

export function setRegisters() {
  registers.forEach(([trigger]) => {
    trigger.register();
  });
}

function numberToWords(num) {
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                   "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    return words[num - 1];
}

registerWhen(register("chat", (player, command) => {
  player = player.removeFormatting().substring(player.indexOf(" ") + 1).replace(/[^A-Za-z0-9_]/g, "");
  let CommandMsg;

  command = command.toLowerCase();
  setTimeout(() => {
    switch (command) {
    case "time":
    ChatLib.command(`pc ${ new Date().toLocaleTimeString() }`); break;
    case "coord":
    case "loc":
    case "location":
case "coords":
    ChatLib.command(`pc x: ${ ~~Player.getX() }, y: ${ ~~Player.getY() }, z: ${ ~~Player.getZ() }`); break;
    case "server":
    case "area":
    case "world":
    ChatLib.command(`pc ${ WorldUtil.toString() }`); break;
    case "pow":
    case "power":
    ChatLib.command(`pc i think i have ${ data.power } | with like ${ data.tuning } tunnings | if i remember ${ data.enrich } enrichments | and at least ${ data.mp } mp`); break;
    case "pet":
    ChatLib.command(`pc ${ data.pet.removeFormatting() }`); break;
    case "build":
    ChatLib.command(`pc https://i.imgur.com/tsg6tx5.jpg`); break;
    case "ver":
    case "version":
    ChatLib.command(`pc ${version}`)
    case "riader":
    case "riedar":
    case "tier5":
    case "reiadar":
    case "esternon":
    case "radier": 
    case "no":
    case "si":
    case "illo":
    case "raider":
    case "t5":
    case "rembutquaglet":
    case "kuudra":
    case "kudraa":
    case "kudura":
    case "kuudar":
    case "5":
    CommandMsg = `joininstance kuudra_infernal`; break;
    case "t4":
    CommandMsg = `joininstance kuudra_fiery`; break;
    case "t3":
    CommandMsg = `joininstance kuudra_burning`; break;
    case "t2":
    CommandMsg = `joininstance kuudra_hot`; break;
    case "t1":
    CommandMsg = `joininstance kuudra_normal`; break;
    case "zama":
    CommandMsg = `pc Party > [MVP+] zamasu12045: illo`; break;
    case "ikergu":
    CommandMsg = `pc Party > [VIP] ikergu: pasa warden`; break;
    case "dropper":
    CommandMsg = `play arcade_dropper`; break;
    case "illo":
    CommandMsg = `pc illo`; break;
    case "m7":
    case "emesiete":
    case "algo":
    case "m 7":
    CommandMsg = `joindungeon master_catacombs_floor_seven`; break;
    case "m6":
    case "m 6":
    CommandMsg = `joindungeon master_catacombs_floor_six`; break;
    case "m5":
    case "m 5":
    CommandMsg = `joindungeon master_catacombs_floor_five`; break;
    case "m4":
    case "m 4":
    CommandMsg = `joindungeon master_catacombs_floor_four`; break;
    case "m3":
    case "m 3":
    CommandMsg = `joindungeon master_catacombs_floor_three`; break;
    case "m2":
    case "m 2":
    CommandMsg = `joindungeon master_catacombs_floor_two`; break;
    case "m1":
    case "m 1":
    CommandMsg = `joindungeon master_catacombs_floor_one`; break;
    case "f7":
    case "f 7":
    CommandMsg = `joindungeon catacombs_floor_seven`; break;
    case "f6":
    case "f 6":
    CommandMsg = `joindungeon catacombs_floor_six`; break;
    case "f5":
    case "f 5":
    CommandMsg = `joindungeon catacombs_floor_five`; break;
    case "f4":
    case "f 4":
    CommandMsg = `joindungeon catacombs_floor_four`; break;
    case "f3":
    case "f 3":
    CommandMsg = `joindungeon catacombs_floor_three`; break;
    case "f2":
    case "f 2":
    CommandMsg = `joindungeon catacombs_floor_two`; break;
    case "f1":
    case "f 1":
    CommandMsg = `joindungeon catacombs_floor_one`; break;
    case "ent":
    case "entrance":
    case "e":
    case "f0":
    case "f none":
    case "f nada":
    case "f 0":
    CommandMsg = `joindungeon catacombs_entrance`; break;
    case "wrpa":
    case "wapr": 
    case "pw":
    case "warp":
    case "wiap":
    case "wiarp":
    case "wriap":
    CommandMsg = `p warp`; break;
    case "transfer":
    case "pt":
    case "ptme":
    case "pmte":
    CommandMsg = `party transfer ${ player }`; break;
    case "psa":
    case "allinvite":
    case "allinv":
    CommandMsg = `p settings allinvite`; break;
    case "lf tara trade":
    case "hardened":
    case "leave":
    case "pelo":
    case "liave":
    CommandMsg = `p kick ${ player } calvo`; break;
    case "hail":
    CommandMsg = `p promote ${ player } `;break;
    case "nico":
    CommandMsg = `pc Party > [MVP+] Nicolasmv7: Stop Gambling`; break;
    case "invite ${ player }":
    case "inv ${ player }":
    CommandMsg = `p invite ${ player }`; break;
    case "pene":
    new Thread(() => {
      const [x, y, z] = [~~Player.getX(), ~~Player.getY(), ~~Player.getZ()]
      ChatLib.say(`/pc x: ${x}, y: ${y}, z: ${z}`)
      Thread.sleep(300)
      ChatLib.say(`/pc x: ${x + 2}, y: ${y}, z: ${z}`)
      Thread.sleep(300)
      ChatLib.say(`/pc x: ${x + 1}, y: ${y + 1}, z: ${z}`)
      Thread.sleep(300)
      ChatLib.say(`/pc x: ${x + 1}, y: ${y + 2}, z: ${z}`)
      Thread.sleep(300)
    }).start();break;
    case "limbo":
    CommandMsg = `p kick ${ player } limbo`; break;
    case "freakys":
    CommandMsg = `pc ${ player } you are not freaky`; break;
    case "iker":
    case "ikre":
    case "ikencio":
    CommandMsg = `pc Party > [VIP+] JupiterFinder: skibidi rizzler ohio mewing `; break;
    case "tetrio":
    case "puterio":
    CommandMsg = `pc Party > [MVP+] Tetrio: estoy freaky`; break;
    case "sex":
    CommandMsg = `pc Party > ${ player }: 7sex.`; break;
    case "help":
    CommandMsg = `pc (7,.?!-/)time, coords, pow, riader, t(tier), wapr, pmte, leave, freaky `; break;
    case "droppe":
    case "dropppe":
    CommandMsg = `pc [MVP+] Tetrio: the freaky dropper`; break;
    case "sigma":
    CommandMsg = `pc why so serious`; break;
    case "cc":
    CommandMsg = `pc 383.88 Crit Chance Con Flare`; break;
    case "cd":
    case "skily":
    case "silky":
    case "mage":
    case "magespeed":
    CommandMsg = `pc 106 tunning speed `; break;
    case "ping":
    const pingnum = Math.floor(Math.random() * 2500) + 120;
    CommandMsg = `pc ping: ${pingnum} seconds`; break;
    case "tps":
    const tpsNum = Math.floor(Math.random() * 10) + 1;
    const tpsWord = numberToWords(tpsNum);
    const tpsjk = Math.floor(Math.random() * 10) + 1;
    CommandMsg = `pc at least ${tpsWord} tps`; break;

    case "haste":
    CommandMsg = `pc Cookie menu > Toggle pot effects > Click twice on "Toggle al effects"`; break;

    case "in":
    case "ein":
    case "fin":
    case "fein":
    CommandMsg = `p kick ${player} fin fin fin`; break;
    case "bw":
    CommandMsg = `play bedwars_eight_two`; break;
    case "bedwars":
    CommandMsg = `play bedwars_four_four`; break;
    case `borrarbomboaddons`:
    CommandMsg = `pc Deleted BomboAddons 100% [=============================================== ]`; break;
    case "pko":
    CommandMsg = `p kickoffline`; break;
    case "freaky":
    const randomFreakyNumber = Math.floor(Math.random() * 100) + 1;
    CommandMsg = `pc ${player} is ${randomFreakyNumber}% freaky!`; break;

    case "tptorift":
    CommandMsg = `warp rift`; break;
    
    case "island":
    CommandMsg = `warp home`; break;

    case "visitme":
    CommandMsg = `visit ${ player }`; break;
    
    case "gohub":
    CommandMsg = `warp hub`; break;
    
    case "garden": 
    CommandMsg = `warp garden`; break;

    case "ctload":
    ChatTriggers.reloadCT(); break;
    
    case "barn":
    CommandMsg = `tptoplot barn`; break;
    
    /*case "yfr":
    CommandMsg = `pc !dt ${ player }`;break;
    case "yfrs":
    CommandMsg = `pc !dt ${ player }`;break;
    case "tyfr":
    CommandMsg = `pc !dt ${ player }`;break;
    case "tyfrs":
    CommandMsg = `pc !dt ${ player } `;break;*/

    

            
    default: return;
    }
    ChatLib.command(CommandMsg);
  }, 300);
}).setCriteria(/Guild|Party > (.+): [7.t?!/](.+)/), () => true);


const items = [
    "Ender Pearl"
  ];
  
  registerWhen(register("playerInteract", (action, pos, event) => {
    if (action.toString() !== "RIGHT_CLICK_BLOCK") return;
    let itemName = Player.getHeldItem()?.getName();
    if (!itemName || !items.some(a => itemName.includes(a))) return;
    cancel(event);
  }), () => true);

register("chat", (username, message, event) => {
    const args = message.split(" ");
    if (args[0] === "!kick45" && args.length === 2) {
        const inviteName = args[1];
        ChatLib.command(`p kick ${inviteName}`);
    }
}).setCriteria("Party > ${username}: ${message}");

register("chat", (username, message, event) => {
  const args = message.split(" ");
  if (args[0] === "!inv" && args.length === 2) {
      const inviteName = args[1];
      ChatLib.command(`p invite ${inviteName}`);
  }
}).setCriteria("Party > ${username}: ${message}");





register('guiOpened', () => {
  Client.scheduleTask(2, () => {
      if (Player?.getContainer()?.getName() != 'Click the button on time!') return;
      ChatLib.say(`/pc nmelody`);
      // Repopulate claySlots when GUI opens
      populateClaySlots();
  });
});

// Function to populate claySlots
function populateClaySlots() {
  claySlots = new Map([
      [25, `pc ${getRandomMessage()} 1/4`],
      [34, `pc ${getRandomMessage()} 2/4`],
      [43, `pc ${getRandomMessage()} 3/4`]
  ]);
}

// Array of possible messages
const messages = [
  "Feeling overwhelmed by persistent sadness.",
  "Struggling with unshakeable feelings of despair.",
  "Experiencing a heavy emotional burden.",
  "Constantly battling thoughts of hopelessness.",
  "Sinking into a deep mental fog.",
  "Isolating oneself from friends and family.",
  "Lacking motivation to engage in activities.",
  "Finding joy in nothing anymore.",
  "Feeling disconnected from reality and self.",
  "Enduring relentless waves of negativity.",
  "Difficulty concentrating on daily tasks.",
  "Experiencing fatigue despite adequate rest.",
  "Struggling with feelings of worthlessness.",
  "Constantly second-guessing oneself and abilities.",
  "Having trouble sleeping or oversleeping.",
  "Feeling like a burden to others.",
  "Dreading each day with uncertainty.",
  "Emotional pain that feels unbearable.",
  "Losing interest in previously enjoyed hobbies.",
  "Sensing a dark cloud overhead always.",
  "Thoughts racing, yet feeling immobilized.",
  "Constantly questioning one’s purpose in life.",
  "Seeking solace in solitude and silence.",
  "Wishing for relief from mental anguish.",
  "Grappling with self-doubt and insecurity.",
  "A desire to escape from reality.",
  "Emotions fluctuating between sadness and numbness.",
  "Feeling trapped within one’s own mind.",
  "Memories overshadowed by current suffering.",
  "Searching for answers but finding none.",
  "Experiencing a sense of emptiness daily.",
  "Finding it hard to communicate emotions.",
  "Living in a world of gray.",
  "Feeling alienated from loved ones often.",
  "Desiring help but feeling unworthy.",
  "Waking up to the same struggle.",
  "Constantly seeking validation from others.",
  "Doubting the possibility of happiness again.",
  "Undergoing emotional turmoil without explanation.",
  "Questioning reality due to overwhelming feelings.",
  "Experiencing pain that others cannot see.",
  "Longing for peace amidst chaos within.",
  "Struggling to find hope in darkness.",
  "Feeling like one’s life is stagnant.",
  "Enduring a silent battle with depression.",
  "Wishing for a break from suffering.",
  "Trying to maintain a brave facade.",
  "Experiencing grief without a clear reason.",
  "Facing each day with reluctance and dread."
];

// Function to get a random message
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// Map for clay slots
let claySlots = new Map([
  [25, `pc ${getRandomMessage()} 1/4`],
  [34, `pc ${getRandomMessage()} 2/4`],
  [43, `pc ${getRandomMessage()} 3/4`]
]);

// Example usage to get a message
claySlots.forEach((msg, key) => {
  console.log(`Key: ${key}, Message: ${msg}`);
});

register('step', () => {
  if (Player?.getContainer()?.getName() != 'Click the button on time!') return;

  let greenClays = Array.from(claySlots.keys()).filter(index => Player?.getContainer()?.getItems()[index]?.getMetadata() == 5);
  if (!greenClays.length) return;

  // Execute the command for the last green clay
  ChatLib.command(claySlots.get(greenClays[greenClays.length - 1]));

  // Remove the executed slot
  greenClays.forEach(clay => claySlots.delete(clay));
  
  // Optionally repopulate or handle case when claySlots is empty
  if (claySlots.size === 0) {
    populateClaySlots(); // Call to repopulate if needed
  }
}).setFps(5);




//GRANDE??

register("renderEntity", (entity) => {
  if (entity.getName() !== Mort) return
  [x, y, z] = Settings.playerScale.split("2")
  Tessellator.pushMatrix()
  Tessellator.scale(x, y, z)
})

register("postRenderEntity", (entity) => {
  if (entity.getName() !== Mort) return
  Tessellator.popMatrix()
})

