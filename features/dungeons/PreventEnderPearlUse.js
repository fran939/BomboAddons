/*import config from "../../config"
import { registerWhen } from "../../core/Event"

const items = [
    "Ender Pearl"
];

registerWhen(register("playerInteract", (action, pos, event) => {
    if (action.toString() !== "RIGHT_CLICK_BLOCK") return;
    let itemName = Player.getHeldItem()?.getName();
    if (!itemName || !items.some(a => itemName.includes(a))) return;
    cancel(event);
}), () => config().preventEnderPearlUse);
*/