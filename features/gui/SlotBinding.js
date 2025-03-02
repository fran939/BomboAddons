import PogObject from "../../../PogData"

const data = new PogObject("SlotBinding", {
    slotBindings: {},
    welcome: false
})
const prefix = "&0[&4Bombo&0] &7>"

const bindingKeybind = new KeyBind("Bind Slots", Keyboard.KEY_NONE, "BomboAddons")

let previousSlot = null

const getPlayerController = () => Client.getMinecraft().field_71442_b

const handleShiftClick = (slotClicked) => {
    const container = Player.getContainer()
    const hotbarSlot = data.slotBindings[slotClicked] % 36
    if (hotbarSlot == null || hotbarSlot >= 9) return

    getPlayerController().func_78753_a(
        container.getWindowId(),
        slotClicked,
        hotbarSlot,
        2,
        Player.getPlayer()
    )
}

register("guiMouseClick", (_, __, mbtn, gui, event) => {
    if (mbtn !== 0 || !(gui instanceof net.minecraft.client.gui.inventory.GuiInventory)) return

    const slot = gui.getSlotUnderMouse()?.field_75222_d

    // 0 - 4 crafting slots
    if (!slot || slot < 5) return

    if (previousSlot && (slot < 36 || slot > 44)) {
        ChatLib.chat(`${prefix} &cPlease click a valid hotbar slot!`)
        previousSlot = null

        return
    }

    if (Keyboard.isKeyDown(Keyboard.KEY_LSHIFT) && slot in data.slotBindings) {
        cancel(event)
        handleShiftClick(slot)

        return
    }

    if (!Keyboard.isKeyDown(bindingKeybind.getKeyCode())) return

    if (!previousSlot) previousSlot = slot

    if (!(slot in data.slotBindings) && !previousSlot) {
        data.slotBindings[slot] = null
        data.save()
    }

    cancel(event)

    if (slot === previousSlot) return
    
    data.slotBindings[previousSlot] = slot
    data.save()

    ChatLib.chat(`${prefix} &aSaved binding&r: &6${previousSlot} &b-> &6${slot}`)

    previousSlot = null
})

register("command", (slotNumber) => {
    const slot = parseInt(slotNumber)
    if (!(slot in data.slotBindings)) return ChatLib.chat(`${prefix} &cPlease set a valid slot! &7slots&r: &b${Object.keys(data.slotBindings).join(", &b")}`)

    delete data.slotBindings[slot]
    data.save()

    ChatLib.chat(`${prefix} &aBinding with slot &b${slot} &adeleted`)
}).setName("deletebinding")

const welcomeReg = register("step", () => {
    if (!World.isLoaded()) return
    if (data.welcome) return welcomeReg.unregister()

    ChatLib.chat(ChatLib.getChatBreak("&b-"))
    ChatLib.chat(`${prefix} &aThanks for importing &bSlotBinding`)
    ChatLib.chat(`&7> &aTo use this module you need to set a keybind in your &6Controls options &7(there should be a keybind called &6Bind Slots&7)`)
    ChatLib.chat(`&7> &aOnce the keybind is set you can now head to your &bInventory &ahold the keybind down and click the two slots you wish to bind`)
    ChatLib.chat(`&7> &cYou can only bind the second slot to a hotbar slot`)
    ChatLib.chat(`&7> &aIf you wish to delete a bind you'd simply need to do &6/deletebinding &b<number> &7(if you send this command without the slot number it should give you a list of valid slot numbers you currently have saved)`)
    ChatLib.chat(ChatLib.getChatBreak("&b-"))

    data.welcome = true
    data.save()
    
    welcomeReg.unregister()
}).setFps(1)