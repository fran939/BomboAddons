
//ChatLib.command("cc Auction house module loaded!"); //debug
// keys

// Register key listener for the down arrow key
// This will send "Hello" in chat when the down arrow key is pressed
// This will send "Hello" in chat when the down arrow key is pressed, even in GUI


function getTokenCount() {
    let scoreboard = Scoreboard.getLines(); // Get scoreboard lines
    for (let line of scoreboard) {
        let text = line.getName().removeFormatting();
        if (text.includes("Tokens")) { 
            let tokens = text.replace(/[^0-9]/g, ""); // Extract only numbers
            return parseInt(tokens) || 0;
        }
    }
    return 0; // Default to 0 if no tokens found
}



const C0EPacketClickWindow = Java.type(
    "net.minecraft.network.play.client.C0EPacketClickWindow"
);

//const der = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
const slot = (slot) => {
    Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slot, 0, 0, null, 0));
}
const der = (slot) => {
    Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slot, 1, 0, null, 0));
}
const shift = (slot) => {
    Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slot, 0, 1, null, 0));
}

let guiOpen = false;
let timeouts = [];


register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Wardrobe")) return;

    const slot = (slotNumber) => {
        const item = Player.getContainer().getStackInSlot(slotNumber);
        if (item && item.getName().includes("Equipped")) {
            ChatLib.chat(`&6Armor ${slotNumber -35} already equipped`);
            cancel(event);
        } else {
            Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slotNumber, 0, 0, null, 0));
        }
    };

    const keyToSlotMap = {
        2: 36,
        3: 37,
        4: 38,
        5: 39,
        6: 40,
        45: 41,
        36: 42,
        44: 43,
        46: 44
    };

    if (keyToSlotMap[key]) {
        slot(keyToSlotMap[key]);
    }
});
//PETKEYS
/*
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();

    if (containerName.includes("Pet")) {
        if (key === 2) { // Pressing "2"
            let found = false;

            const items = Player.getContainer().getItems(); // Get all items in the container
            ChatLib.chat("&b=== DEBUG: Pet Menu Items ===");

            for (let i = 0; i < items.length; i++) {
                if (items[i]) {
                    let itemName = ChatLib.removeFormatting(items[i].getName());

                    // DEBUG: Print all items in the menu
                    ChatLib.chat(`Slot ${i}: ${itemName}`);

                    if (itemName.includes("Blasck Cat")) {
                        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                        ChatLib.chat(`&aClicked slot ${i} for Black Cat.`);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                ChatLib.chat("&cNo Black Cat pet found in the container.");
            }
        }
    }
});

*/



register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Auctions")) return;

    const slot = (slotNumber) => {
        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slotNumber, 0, 0, null, 0));
    };

    const keyToSlotMap = {
        //203: 46, // Left Arrow
        //205: 53, // Right Arrow
        "W": 50,  // W calls der(50)
        "S": 50   // Slot for S
    };

    const charUpper = String(char).toUpperCase(); // Normalize to uppercase for consistency

    // Check for 'W' to call der(50)
    if (charUpper === "W") {
        der(50); // Call your der function here with 50
    } else if (charUpper === "S") {
        slot(keyToSlotMap["S"]); // Call slot function for 'S'
    } else if (key in keyToSlotMap) {
        slot(keyToSlotMap[key]); // Use key code for left/right arrows
    }
});

register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Minion")) return;

    const slot = (slotNumber) => {
        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slotNumber, 0, 0, null, 0));
    };

    const keyToSlotMap = {
        2: 19, // Left Arrow
        3: 48, // Right Arrow
        "W": 50,  // W calls der(50)
        "S": 50   // Slot for S
    };

    const charUpper = String(char).toUpperCase(); // Normalize to uppercase for consistency

    // Check for 'W' to call der(50)
    if (charUpper === "W") {
        der(50); // Call your der function here with 50
    } else if (charUpper === "S") {
        slot(keyToSlotMap["S"]); // Call slot function for 'S'
    } else if (key in keyToSlotMap) {
        slot(keyToSlotMap[key]); // Use key code for left/right arrows
    }
});




register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Co-op Auction")) return;

    const slot = (slotNumber) => {
        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), slotNumber, 0, 0, null, 0));
    };

    const keyToSlotMap = {
        2: 11,
        3: 13,
        4: 15

    };

    if (key in keyToSlotMap) {
        slot(keyToSlotMap[key]);
    }
});








/*register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Auctions")) return;
    const charString = String(char);
    if (key === 2) {
        slot(36);
    }
    if (key === 3) {
        slot(37);
    }
    if (key === 4) {
        slot(38)    
    }
    if (key === 5) {
        slot(39);
    }
    if (key === 45) {
        slot(40);
    }
    if (key === 36) {
        slot(41);
    }
    if (key === 44) {
        slot(42)    
    }
    if (key === 46) {
        slot(43);
    }




    }

);*/

let lastClickedChestIndex = -1;
//CROESUS
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();

    if (containerName.includes("Croesus")) {
        if (key === 57) { // Pressing "2"
            let found = false;
            const items = Player.getContainer().getItems(); // Get all items in the container
            //ChatLib.chat("&b=== DEBUG: Croesus GUI Items ===");   //debug

            for (let i = 0; i < items.length; i++) {
                if (items[i]) {
                    let itemName = ChatLib.removeFormatting(items[i].getName());
                    let itemLore = items[i].getLore().map(line => ChatLib.removeFormatting(line));

                    // DEBUG: Print all items in the menu
                    //ChatLib.chat(`Slot ${i}: ${itemName}, Lore: ${itemLore.join(" | ")}`);    //debug

                    if (itemLore.some(line => line.includes("No Chests Opened!"))) {
                        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                        //ChatLib.chat(`&aClicked slot ${i} containing 'No Chests Opened!' in its lore.`);  //debug
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i]) {
                        let itemLore = items[i].getLore().map(line => ChatLib.removeFormatting(line));

                        if (itemLore.some(line => line.includes("Opened Chest:"))) {
                            if (i > lastClickedChestIndex) {
                                Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                                //ChatLib.chat(`&aClicked slot ${i} containing 'Opened Chest: ...' in its lore.`); //debug
                                lastClickedChestIndex = i;
                                found = true;
                                break;
                            }
                        }
                    }
                }
            }

            if (!found) {
                ChatLib.chat("&cNo relevant slot found in the container.");
                lastClickedChestIndex = -1; // Reset to start again
            }
        }
    } else if (containerName.includes("Catacombs")) {
        if (key === 2) { // Pressing "2"
            const items = Player.getContainer().getItems();
            for (let i = 0; i < items.length; i++) {
                if (items[i]) {
                    let itemName = ChatLib.removeFormatting(items[i].getName());
                    if (itemName === "Go Back") {
                        Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                        //ChatLib.chat(`&aClicked slot ${i} containing 'Go Back'.`);    //debug
                        break;
                    }
                }
            }
        }
        else if (containerName.includes("Catacombs")) {
            if (key === 4) { // Pressing "2"
                const items = Player.getContainer().getItems();
                for (let i = 0; i < items.length; i++) {
                    if (items[i]) {
                        let itemName = ChatLib.removeFormatting(items[i].getName());
                        if (itemName === "Bedrock Chest") {
                            Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                            //ChatLib.chat(`&aClicked slot ${i} containing 'Go Back'.`);    //debug
                            break;
                        }
                    }
                }
        }
    }
}});

register("guiKey", (char, key) => {
    if (key !== 57) return; // Only trigger when spacebar (key 57) is pressed
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName();
    if (!containerName.includes("Chest")) return; // Only run if the GUI name contains "Chest"

    const items = Player.getContainer().getItems();

    for (let i = 0; i < items.length; i++) {
        if (items[i] && ChatLib.removeFormatting(items[i].getName()) === "Open Reward Chest") {
            Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
            //ChatLib.chat(`&aClicked slot ${i} containing 'Open Reward Chest'.`); // Debug message
            break;
        }
    }
});


register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const items = Player.getContainer().getItems();

    if (key === 205 || key === 203) { // 205: Right Arrow, 203: Left Arrow
        let pageTypes = key === 205 ? ["next page", "next recipe", "manage orders"] : ["previous page", "previous recipe", "go back"];
        
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                
                if (pageTypes.some(type => itemName.includes(type))) { // Check for any matching type
                    Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                    // ChatLib.chat(`&aClicked slot ${i} containing '${itemName}'.`);
                    break;
                }
            }
        }
    }
});




// VISIT

register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("visit") && key === 57) { // 57 is the spacebar key
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("visit player island")) {
                    Client.sendPacket(new C0EPacketClickWindow(Player.getContainer().getWindowId(), i, 0, 0, null, 0));
                    //ChatLib.chat(`&aClicked slot ${i} containing 'Visit Player Island'.`);
                    break;
                }
            }
        }
    }
});
//SACKS
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("sack")  && key === 57) { // 57 is the spacebar key
        if (Client.isInChat()) return; // Prevents execution if the chat is open
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("insert")) { // Check for the item name
                    slot(i); // Click the slot
                    //ChatLib.chat(`&aClicked slot ${i} containing 'Insert Inventory'.`);
                    break;
                }
            }
        }
    }
});
ChatLib.chat("opened")
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("view stash") && key === 57) { // 57 = spacebar
        //ChatLib.chat("&aDetected 'View Stash' GUI. Searching for 'Insert into Sacks'...");
        
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("insert into sacks")) { // Find the correct item
                    //ChatLib.chat(`&aFound item in slot ${i}, clicking...`);
                    slot(i)
                    break;
                }
            }
        }
    }
});

/*
register("step", () => {
    let scoreboard = Scoreboard.getLines(); // Get all scoreboard lines

    scoreboard.forEach(line => {
        let text = line.getName().removeFormatting(); // Get text without colors

        if (text.includes("Tokens")) { 
            let tokens = text.match(/\d+/); // Extract numbers (Token count)
            if (tokens) {
                ChatLib.chat(`&6Bombo &c» &aYou have &b${tokens[0]} Tokens`);
            }
        }
    });
}).setDelay(20); // Runs every second (20 ticks)*/


/*
register("step", () => {
    let inventory = Player.getContainer();
    if (!inventory || !inventory.getName().includes("Perk Menu")) return;

    let tokens = getTokenCount(); // Fetch latest token count
    if (!tokens) return;

    for (let i = 0; i < inventory.getSize(); i++) {
        let item = inventory.getStackInSlot(i);
        if (!item) continue;

        let name = item.getName().removeFormatting();
        let lore = item.getLore().map(line => line.removeFormatting());

        if (name.startsWith("Ballista Mechanic")) {
            let costLine = lore.find(line => line.startsWith("Cost: "));
            if (!costLine) continue;

            let cost = parseInt(costLine.replace(/[^\d]/g, "")); // Extract numbers

            if (tokens >= cost) {
                ChatLib.chat(`&6Bombo Debug » Clicking on Ballista Mechanic in slot ${i}...`);  

                // Actual clicking action
                inventory.click(i, false); // Right-click

                // Wait a bit before checking again to avoid spam clicking
                setTimeout(() => {
                    register("step", () => {
                        let newTokens = getTokenCount();
                        if (newTokens >= cost) {
                            ChatLib.chat(`&6Bombo Debug » Clicking again! Still have ${newTokens} Tokens.`);
                            inventory.click(i, false);
                        } else {
                            ChatLib.chat("&6Bombo Debug » Stopping clicks! Not enough tokens.");
                        }
                    }).setDelay(1);
                }, 20);
            }
        }
    }
}).setDelay(1);

*/

register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    // Get container name
    const containerName = ChatLib.removeFormatting(Player.getContainer().getName()).toLowerCase();

    // Debugging: Print container name
    //ChatLib.chat(`&6[DEBUG] Opened container: ${containerName}`);

    // Check if container is "Alchemist" and key pressed is "2"
    if (containerName.includes("alchemist") && key === 2) { // 3 is the keycode for "2"
        der(23);
        //ChatLib.chat("&aClicked slot 23 in Alchemist.");
    }

    // Check if container is "Shop Trading Options" and key pressed is "3"
    if (containerName.includes("shop trading options") && key === 2) { // 4 is the keycode for "3"
        slot(24);
        //ChatLib.chat("&aClicked slot 24 in Shop Trading Options.");
    }
});

register("guiKey", (char, key, gui, event) => {
    if (Client.isInChat()) return; 
    if (!Player.getContainer()) return;
    
    // Prevent execution if a sign GUI is open
    if (gui instanceof net.minecraft.client.gui.inventory.GuiEditSign) return;

    const items = Player.getContainer().getItems();

    if (key === 3 || key === 4) { 
        let pageType = key === 3 ? "Large Agronomy Sack" : "Large Enchanted Agronomy Sack";
        
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName === pageType.toLowerCase()) {
                    der(i);
                    //ChatLib.chat(`&aClicked slot ${i} containing '${pageType}'.`);
                    break;
                }
            }
        }
    }
});


//DUNGEONS
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("undersized") && key === 57) { // 57 is the spacebar key
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("undersized")) { // Corrected lowercase issue
                    slot(i);
                    ChatLib.chat(`&aClicked slot ${i} containing 'Undersized'.`);
                    break;
                }
            }
        }
    }
});
/*
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;
    
    // Prevents execution if the chat is open
    if (Client.isInChat()) return; 

    if (key === 24) { // 24 is the keycode for "O"
        ChatLib.command("managebazaarorders"); // Runs command only if chat is NOT open
    }
});
*/




//REROLL

register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("bedrock chest") && key === 19) { // 19 is the "R" key
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("reroll chest")) {
                    slot(i);
                    //ChatLib.chat(`&aClicked slot ${i} containing 'Reroll Chest'.`);
                    break;
                }
            }
        }
    }
});
register("guiKey", (char, key, gui, event) => {
    if (!Player.getContainer()) return;

    const containerName = Player.getContainer().getName().toLowerCase();
    const items = Player.getContainer().getItems();

    if (containerName.includes("anvil") && key === 57) { // 57 is the Spacebar key
        for (let i = 0; i < items.length; i++) {
            if (items[i]) {
                let itemName = ChatLib.removeFormatting(items[i].getName()).toLowerCase();
                if (itemName.includes("combine items") || itemName.includes("anvil")) {
                    slot(i);
                    //ChatLib.chat(`&aClicked slot ${i} containing '${itemName}'.`);
                    break;
                }
            }
        }
    }
});



//PV ON PFINDER
register("guiKey", (char, keyCode, gui, event) => {
    if (!gui) return;
    
    const container = Player.getContainer();
    if (!container) return;

    // Get hovered slot
    const slot = Client.currentGui.getSlotUnderMouse();
    if (!slot) return;

    // Get item in the slot
    const item = slot.getItem();
    if (!item) return;

    // Get item name
    const itemName = item.getName().removeFormatting();
    if (!itemName.includes("'s Party")) return;

    // Get item lore
    const lore = item.getLore();
    if (!lore || lore.length === 0) return;

    // Extract names from "Members:" section
    let membersStart = lore.findIndex(line => line.includes("Members:"));
    if (membersStart === -1) return;

    let members = [];
    for (let i = membersStart + 1; i < lore.length; i++) {
        let line = lore[i].removeFormatting().trim();
        if (line === "" || line.toLowerCase().includes("empty") || !line.includes(":")) continue;

        let username = line.split(":")[0].trim();
        members.push(username);
    }

    if (members.length === 0) return;

    // Map keyCode to index (1 = first member, etc.)
    let index = keyCode - 2;
    if (index < 0 || index >= members.length) return;

    const selectedUser = members[index];
    if (!selectedUser) return;

    // Execute /pv command
    ChatLib.chat(`&0[&4Bombo&0]&6 Opening &b${selectedUser}'s &6profile...`);
    ChatLib.command(`pv ${selectedUser}`, true);

    // Cancel the event to prevent slot movement
    cancel(event);
});
