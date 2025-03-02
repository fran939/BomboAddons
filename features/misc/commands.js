// Register a chat listener for party chat messages
import { request } from "axios"; // SOOPY COMMANDS


// Register a chat listener for party chat messages
register("chat", (rank, username, message, event) => {
    // Convert the message to lowercase
    const lowerCaseMessage = message.toLowerCase();
    const args = lowerCaseMessage.split(" ");
    
    // Check if the command starts with !, ?, or .
    if (/^[!?\.]pasa$/.test(args[0]) && args.length === 2) {
        const inviteName = args[1];
        ChatLib.command(`cc invite ${inviteName}`);
    }
}).setCriteria("Party > [${rank}] ${username}: ${message}");



//ChatLib.chat("cc chat listener has been enabled.");


register("command", () => {
    const looking = Player.lookingAt()
    if (looking?.getClassName() != "EntityOtherPlayerMP") return;
    ChatLib.command(`trade ${ looking?.getName() }`);
   // ChatLib.addToSentMessageHistory(-1, `/trade ${ looking?.getName() }`)
}).setName("deal", true);

register("command", () => {
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
    }).start()
}).setName('pene', true);

register("command", () => {
  ChatLib.clearChat()
}).setName("clearchat", true)

register("command", () => {
  let rarity = "None"
  const holding = Player.getHeldItem()
  holding?.getLore()?.forEach(line => {
    if (line.toString().includes("COMMON") || line.toString().includes("RARE") || line.toString().includes("EPIC") || line.toString().includes("LEGENDARY") || line.toString().includes("MYTHIC") || line.toString().includes("DIVINE") || line.toString().includes("SPECIAL")) rarity = line
  })
  ChatLib.chat(`\nName: ${ holding?.getName() }\nRegistry Name: ${ holding?.getRegistryName() }\nSkyblock ID: ${ holding?.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")?.getString("id") }\nRarity: ${ rarity }\n`)
}).setName("itemInfo", true).setAliases("item");

register("command", () => {
  const looking = Player.lookingAt()

  if (!looking.toString().startsWith("Entity")) {
    ChatLib.chat(looking)
    return
  }
  ChatLib.chat(`\nName: ${looking.getName()}\nEntityClass: ${looking.getClassName()}\nPos: ${looking.getPos()}\nHP: ${comma(looking.getEntity().func_110143_aJ())}/${comma(looking.getEntity().func_110148_a(Java.type('net.minecraft.entity.SharedMonsterAttributes').field_111267_a).func_111125_b())}\n`)
}).setName("entityInfo", true).setAliases("entity");












//COMMANDS

register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://sky.shiiyu.moe/stats/${name}`));
}).setName("sky").setAliases(["sk"]);
  
register("chat", (event) => {
    const message = ChatLib.getChatMessage(event);
    if (message.includes("You were kicked while joining that server!")) {
      // Your code to handle the event
      ChatLib.command("pc You were kicked while joining that server!");
    }
}).setCriteria("You were kicked while joining that server!");
  
register("chat", (event) => {
    const message = ChatLib.getChatMessage(event);
    if (message.includes("Cannot join SkyBlock for a moment! (Queue join in cooldown)")) {
      // Your code to handle the event
      ChatLib.command("pc Cannot join SkyBlock for a moment! (Queue join in cooldown)");
    }
}).setCriteria("Cannot join SkyBlock for a moment! (Queue join in cooldown)");

register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name if no name is provided
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://sky.coflnet.com/player/${name}`));
}).setName("cofl");
  //coflitem
register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name if no name is provided
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://sky.coflnet.com/item/${name}`));
}).setName("cofli");
  
register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name if no name is provided
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://namemc.com/search?q=${name}`));
}).setName("namemc");
  //laby (names)
register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name if no name is provided
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://laby.net/@${name}`));
}).setName("laby");
  
register("command", (name) => {
    if (!name) {
      name = Player.getName(); // Get the player's own name if no name is provided
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(`https://plancke.io/hypixel/player/stats/${name}`));
}).setName("plack");

// Register the /wiki command
register("command", (...args) => {
    let url;
    if (args.length === 0) {
      url = "https://wiki.hypixel.net/";
    } else if (args[0].toLowerCase() === "hand") {
      const heldItem = Player.getHeldItem();
      if (heldItem) {
        const nbt = heldItem.getNBT();
        const skyblockId = nbt.getCompoundTag("tag").getCompoundTag("ExtraAttributes").getString("id");
        if (skyblockId) {
          url = `https://wiki.hypixel.net/${skyblockId}`;
        } else {
          ChatLib.chat("Could not retrieve the SkyBlock ID of the held item.");
          return;
        }
      } else {
        ChatLib.chat("You are not holding any item.");
        return;
      }
    } else {
      const item = args.join(" "); // Join all arguments into a single string
      const formattedItem = formatItemName(item); // Format the item name
      url = `https://wiki.hypixel.net/${formattedItem}`;
    }
    java.awt.Desktop.getDesktop().browse(new java.net.URI(url));
}).setName("wiki");
  

  //calculator

// Function to parse shorthand notations
function parseShorthand(value) {
    const shorthandRegex = /^(\d+(\.\d+)?)([kKmMbB])?$/;
    const match = value.match(shorthandRegex);
    if (!match) return NaN;
  
    let number = parseFloat(match[1]);
    const unit = match[3] ? match[3].toLowerCase() : null;
  
    switch (unit) {
      case 'k':
        number *= 1000;
        break;
      case 'm':
        number *= 1000000;
        break;
      case 'b':
        number *= 1000000000;
        break;
    }
  
    return number;
  }
  
  // Function to convert a number to shorthand notation
  function toShorthand(number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + 'b';
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  }
  
  // Function to format numbers with commas
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // Function to evaluate the expression
  function evaluateExpression(expression) {
    const parsedExpression = expression.replace(/(\d+(\.\d+)?[kKmMbB])/g, (match) => parseShorthand(match));
    try {
      const result = eval(parsedExpression);
      const formattedParsedExpression = expression.replace(/(\d+(\.\d+)?[kKmMbB])/g, (match) => {
        const parsedValue = parseShorthand(match);
        return `${match} (${formatNumberWithCommas(parsedValue)})`;
      });
      return `${formattedParsedExpression} = ${formatNumberWithCommas(result)} (${toShorthand(result)})`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
  
  // Register the /calc command
  register("command", (...args) => {
    if (args.length === 0) {
      ChatLib.chat("Usage: /calc <expression>");
      return;
    }
  
    const expression = args.join(" ");
    const result = evaluateExpression(expression);
    ChatLib.chat(`&dResult: &5 ${result}`);
  }).setName("calc").setAliases(["c"]);







  // SoOPY COMMANDS


register("command", (command, user) => {
    if (!command) {
       // ChatLib.chat("&cUsage: /sp <command> [user]");
        ChatLib.chat("&aUse: /sp help for help")
        return;
    }

    // If command is "help", show available commands
    if (command.toLowerCase() === "help") {
        ChatLib.chat("&6Bombo &c» &aAvailable commands for /sp:");
        ChatLib.chat("&b auctions, bestiary, bank, classaverage, currdungeon, dojo, dungeon, essence, faction, guildof, kuudra, nucleus, nw, overflowskillaverage, overflowskills, pet, rtca, sblvl, secrets, skillaverage, skills");
        return;
    }

    if (!user) {
        user = Player.getName();
    }

    const url = `https://soopy.dev/api/soopyv2/botcommand?m=${command}&u=${user}`;
    ChatLib.chat(`&6Bombo &c» &aCommand ${command}`);

    request({
        url: url,
        method: "GET",
        headers: {
            "User-Agent": "ChatTriggers"
        }
    }).then(response => {
        ChatLib.chat(`&aResponse: &b${JSON.stringify(response.data, null, 2)}`);
        console.log(response.data);
    }).catch(error => {
        ChatLib.chat("&cAn error occurred while fetching the data.");
        console.error(error);
    });
}).setName("sp");







const commands = ["rtca", "auctions", "bestiary", "bank", "classaverage", "currdungeon", "dojo", "dungeon", "essence", "faction", "guildof", "kuudra", "nucleus", "nw", "overflowskillaverage", "overflowskills", "pet", "sblvl", "secrets", "skillaverage", "skills"];

commands.forEach(command => {
    register("chat", (rank, username, message, event) => {
        // Convert the message to lowercase
        const lowerCaseMessage = message.toLowerCase();
        const args = lowerCaseMessage.split(" ");
        
        // Check if the command matches
        if (args[0] === `!${command}`) {
            const user = args.length === 2 ? args[1] : username;

            const url = `https://soopy.dev/api/soopyv2/botcommand?m=${command}&u=${user}`;
            ChatLib.chat(`&6Bombo &c» &aCommand ${command} for user ${user}`);
            setTimeout(() => {
              ChatLib.command(`pc wachiwachiwa ${command}`);
            }, 300);

            request({
                url: url,
                method: "GET",
                headers: {
                    "User-Agent": "ChatTriggers"
                }
            }).then(response => {
                ChatLib.command(`pc ${JSON.stringify(response.data, null, 2)}`);
                console.log(response.data);
            }).catch(error => {
                ChatLib.command("pc An error occurred while fetching the data.");
                console.error(error);
            });
        }
    }).setCriteria("Party > [${rank}] ${username}: ${message}");
});

commands.forEach(command => {
  register("chat", (rank, username, message, event) => {
      // Convert the message to lowercase
      const lowerCaseMessage = message.toLowerCase();
      const args = lowerCaseMessage.split(" ");
      
      // Check if the command matches
      if (args[0] === `!${command}`) {
          const user = args.length === 2 ? args[1] : username;

          const url = `https://soopy.dev/api/soopyv2/botcommand?m=${command}&u=${user}`;
          ChatLib.chat(`&6Bombo &c» &aCommand ${command} for user ${user}`);
          setTimeout(() => {
            ChatLib.command(`w ${username} wachiwachiwa ${command}`);
          }, 300);

          request({
              url: url,
              method: "GET",
              headers: {
                  "User-Agent": "ChatTriggers"
              }
          }).then(response => {
              ChatLib.command(`w ${username} ${JSON.stringify(response.data, null, 2)}`);
              console.log(response.data);
          }).catch(error => {
              ChatLib.command(`w ${username} An error occurred while fetching the data.`);
              console.error(error);
          });
      }
  }).setCriteria("From [${rank}] ${username}: ${message}");
});
register("chat", (rank, username, message, event) => {
  if (message.toLowerCase() === "!sp") {
      const commandList = commands.map(cmd => `${cmd}`).join(", ");
      setTimeout(() => {
        ChatLib.command(`pc Available commands: ${commandList}`);
      }, 100);
      
  }
}).setCriteria("Party > [${rank}] ${username}: ${message}");


//LAST BZ/AH?
/*
let lastBZItem = null;
let lastAHItem = null;
let lastUsed = null; // Track last used command: "bz", "ah", "managebazaarorders"

// Command to store and open Bazaar item
register("command", (...args) => {
    if (args.length > 0) {
        lastBZItem = args.join(" ");
        lastUsed = "bz"; // Track last used command
        //ChatLib.chat(`&6Bombo &c» &aStored Bazaar item: &b${lastBZItem}`);
        ChatLib.command(`bz ${lastBZItem}`); // Open Bazaar
    } else {
        //ChatLib.chat("&6Bombo &c» &cUsage: /bz (item)");
    }
}).setName("bz", true);

// Command to store and open Auction House item
register("command", (...args) => {
    if (args.length > 0) {
        lastAHItem = args.join(" ");
        lastUsed = "ah"; // Track last used command
        //ChatLib.chat(`&6Bombo &c» &aStored AH item: &b${lastAHItem}`);
        ChatLib.command(`ahs ${lastAHItem}`); // Open AH
    } else {
        //ChatLib.chat("&6Bombo &c» &cUsage: /ahs (item)");
    }
}).setName("ahs", true);

// Command to track /managebazaarorders
register("command", () => {
    lastUsed = "managebazaarorders"; // Track last used command
    //ChatLib.chat("&6Bombo &c» &aStored last command: &b/managebazaarorders");
    ChatLib.command("managebazaarorders"); // Open the menu
}).setName("managebazaarorders", true);

// Command to retrieve last Bazaar item
register("command", () => {
    if (lastBZItem) {
        ChatLib.command(`bz ${lastBZItem}`);
        //ChatLib.chat(`&6Bombo &c» &aOpening Bazaar for: &b${lastBZItem}`);
    } else {
        //ChatLib.chat("&6Bombo &c» &cNo Bazaar item stored yet.");
    }
}).setName("lastbz", true);

// Command to retrieve last Auction House item
register("command", () => {
    if (lastAHItem) {
        ChatLib.command(`ahs ${lastAHItem}`);
        //ChatLib.chat(`&6Bombo &c» &aOpening AH for: &b${lastAHItem}`);
    } else {
        //ChatLib.chat("&6Bombo &c» &cNo Auction House item stored yet.");
    }
}).setName("lastah", true);

// Command to retrieve last used command (AH, BZ, or ManageBazaarOrders)
register("command", () => {
    if (lastUsed === "ah" && lastAHItem) {
        ChatLib.command(`ahs ${lastAHItem}`);
        //ChatLib.chat(`&6Bombo &c» &aOpening AH for: &b${lastAHItem}`);
    } else if (lastUsed === "bz" && lastBZItem) {
        ChatLib.command(`bz ${lastBZItem}`);
        //ChatLib.chat(`&6Bombo &c» &aOpening Bazaar for: &b${lastBZItem}`);
    } else if (lastUsed === "managebazaarorders") {
        ChatLib.command("managebazaarorders");
        //ChatLib.chat("&6Bombo &c» &aOpening Manage Bazaar Orders");
    } else {
        ChatLib.chat("&6Bombo &c» &cNo last item stored yet.");
    }
}).setName("last", true);*/


//LAST STORAGE

let lastBZItem = null;
let lastAHItem = null;
let lastBP = null;
let lastEC = null;
let lastUsed = null; // Only tracks BZ or AH

// 🔥 Capture and execute /ec or /enderchest
register("command", (...args) => {
    lastEC = args.join(" ") || "";
    ChatLib.command(`ec ${lastEC}`); // Execute the command normally
}).setName("ec", true).setAliases(["enderchest"]);

// 🔥 Capture and execute /bp or /backpack
register("command", (...args) => {
    lastBP = args.join(" ") || "";
    ChatLib.command(`bp ${lastBP}`); // Execute the command normally
}).setName("bp", true).setAliases(["backpack"]);

// 🔥 Capture and execute /bz
register("command", (...args) => {
    lastBZItem = args.join(" ") || "";
    lastUsed = "bz"; // Only track BZ/AH in lastUsed
    ChatLib.command(`bz ${lastBZItem}`);
}).setName("bz", true);

// 🔥 Capture and execute /ah
register("command", (...args) => {
    lastAHItem = args.join(" ") || "";
    lastUsed = "ah"; // Only track BZ/AH in lastUsed
    ChatLib.command(`ahs ${lastAHItem}`);
}).setName("ahs", true);

// 🔥 Detect when ANY mod executes /ec or /enderchest
register("messageSent", (message, event) => {
    if (message.startsWith("/ec") || message.startsWith("/enderchest")) {
        let args = message.split(" ").slice(1).join(" ");
        lastEC = args || "";
    }
});

// 🔥 Detect when ANY mod executes /bp or /backpack
register("messageSent", (message, event) => {
    if (message.startsWith("/bp") || message.startsWith("/backpack")) {
        let args = message.split(" ").slice(1).join(" ");
        lastBP = args || "";
    }
});

// ✅ Open last Backpack
register("command", () => {
    if (lastBP !== null) {
        ChatLib.command(`bp ${lastBP}`);
    } else {
        ChatLib.chat("&6Bombo &c» &cNo last Backpack opened.");
    }
}).setName("lastbp", true);

// ✅ Open last Ender Chest
register("command", () => {
    if (lastEC !== null) {
        ChatLib.command(`ec ${lastEC}`);
    } else {
        ChatLib.chat("&6Bombo &c» &cNo last Ender Chest opened.");
    }
}).setName("lastec", true);

// ✅ Open last BZ or AH (ONLY THESE TWO)
register("command", () => {
    if (lastUsed === "ah" && lastAHItem) {
        ChatLib.command(`ahs ${lastAHItem}`);
    } else if (lastUsed === "bz" && lastBZItem) {
        ChatLib.command(`bz ${lastBZItem}`);
    } else {
        ChatLib.chat("&6Bombo &c» &cNo last AH or BZ command stored.");
    }
}).setName("last", true);

// ✅ Open last BP & EC together
register("command", () => {
    if (lastBP !== null) ChatLib.command(`bp ${lastBP}`);
    if (lastEC !== null) ChatLib.command(`ec ${lastEC}`);
    if (lastBP === null && lastEC === null) {
        ChatLib.chat("&6Bombo &c» &cNo last Backpack or Ender Chest opened.");
    }
}).setName("lastst", true);



//visit on click

register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/visit ${username}`).setClick('run_command', `/visit ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*visit.*$/i)

register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/visit ${username}`).setClick('run_command', `/visit ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*lowball.*$/i)

//!invite
register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/party ${username}`).setClick('run_command', `/party invite ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*inv.*$/i)
//!invite
register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/party ${username}`).setClick('run_command', `/party invite ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*party.*$/i)
//!invite
register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/party ${username}`).setClick('run_command', `/party invite ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*p me.*$/i)
//!invite
register('chat', (username, event) => {
  ChatLib.command(`party invite ${username}`);
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*invitame2.*$/i);

//!ah
register('chat', (username, event) => {
  cancel(event)
  ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true)).setHover('show_text', `/ah ${username}`).setClick('run_command', `/ah ${username}`))
  
}).setCriteria(/^(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*ah.*$/i)


