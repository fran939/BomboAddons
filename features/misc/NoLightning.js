import { Event } from "../../core/Event"
import EventEnums from "../../core/EventEnums"
import Feature from "../../core/Feature"

// Credits: https://github.com/UnclaimedBloom6/BloomModule/blob/main/Bloom/features/HideLightning.js
// straight up copy and paste ^

new Feature("noLightning")
    .addEvent(
        new Event(EventEnums.RENDERENTITY, (_, __, ___, event) => {
            cancel(event)
        }, net.minecraft.entity.effect.EntityLightningBolt)
    )


    import { registerWhen } from "../../BloomCore/utils/Utils"
import Config from "../Config"

const EntityLightningBolt = Java.type("net.minecraft.entity.effect.EntityLightningBolt")

registerWhen(register("renderEntity", (entity, pos, ticks, event) => {
    cancel(event)
}).setFilteredClass(EntityLightningBolt), () => Config.hideLightning)