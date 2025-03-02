import config from "../../config"
import { Event } from "../../core/Event"
import EventEnums from "../../core/EventEnums"
import Feature from "../../core/Feature"

// Array of possible messages
const messages = [
    "The mimic has met its end.",
    "The mimic has finally breathed its last.",
    "The mimic has succumbed to death.",
    "The mimic is no longer with us.",
    "The mimic has crossed the threshold of death.",
    "The mimic has departed from existence.",
    "The mimic has been extinguished completely.",
    "The mimic is lifeless and unresponsive now.",
    "The mimic has lost its vitality entirely.",
    "The mimic has faded into oblivion.",
    "The mimic has passed beyond the grave.",
    "The mimic is permanently out of action.",
    "The mimic has perished and is gone.",
    "The mimic has been rendered lifeless.",
    "The mimic is forever beyond the living.",
    "The mimic has exited the realm of life.",
    "The mimic is no longer part of reality.",
    "The mimic's life force has been extinguished.",
    "The mimic has reached the end of its journey.",
    "The mimic's existence has come to a halt.",
    "The mimic has officially met its demise.",
    "The mimic has been finally laid to rest.",
    "The mimic is now devoid of life.",
    "The mimic has completely ceased to exist.",
    "The mimic's time on this world is over.",
    "The mimic has been consigned to oblivion.",
    "The mimic has succumbed to its fate.",
    "The mimic's spirit has departed from here.",
    "The mimic has left this mortal coil.",
    "The mimic's life has been cut short.",
    "The mimic has been put to rest eternally.",
    "The mimic is now part of the past.",
    "The mimic has met its unfortunate end.",
    "The mimic's existence has come to an end.",
    "The mimic is now an empty shell.",
    "The mimic's lifeline has been severed forever.",
    "The mimic has been snuffed out completely.",
    "The mimic is now a memory of the past.",
    "The mimic has transitioned into the void.",
    "The mimic is gone without a trace.",
    "The mimic has exited life’s stage for good.",
    "The mimic has finally slipped away from life.",
    "The mimic is permanently absent from this world.",
    "The mimic is forever lost to the void.",
    "The mimic has been silenced once and for all.",
    "The mimic's heart has ceased to beat.",
    "The mimic is beyond the reach of life.",
    "The mimic has finally left the scene.",
    "The mimic's life chapter has come to a close.",
    "The mimic has taken its final bow in life.",
    "zamaasuuuuuuuuuuuuuuuuuuuuuuuu depiertaaaaaaaaa siiiiiiiiiii"
];


let msgSent = false;

new Feature("sendMimicDead", "catacombs")
    .addEvent(
        new Event(EventEnums.ENTITYDEATH, (entity) => {
            if (msgSent || !entity.entity.func_70631_g_() || entity.entity.func_82169_q(0)) return;

            // Select a random message from the array
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            ChatLib.command(`pc ${randomMessage}`);

            // Delay the second command by 1 second
            /*setTimeout(() => {
                ChatLib.command("pc Mimic Killed!");
            }, 300);*/

            msgSent = true;
        }, net.minecraft.entity.monster.EntityZombie)
    )
    .onUnregister(() => msgSent = false);
