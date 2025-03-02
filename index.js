// Dungeons

import "./features/dungeons/BoxStarMobs"
import "./features/dungeons/SecretsClickedBox"
import "./features/dungeons/RunSplits"
import "./features/dungeons/CroesusClicks"
import "./features/dungeons/ExtraStats"
import "./features/dungeons/CryptsDisplay"
import "./features/dungeons/DeathsDisplay"
import "./features/dungeons/MilestoneDisplay"
import "./features/dungeons/PuzzleDisplay"
import "./features/dungeons/MimicKilled"
import "./features/dungeons/RemoveDmgTag"
import "./features/dungeons/HideNoStarTag"
import "./features/dungeons/SecretsSound"
import "./features/dungeons/CroesusProfit"
import "./features/dungeons/ChestProfit"
import "./features/dungeons/BlazeSolver"
import "./features/dungeons/BoulderSolver"
import "./features/dungeons/CreeperBeamsSolver"
import "./features/dungeons/ThreeWeirdosSolver"
import "./features/dungeons/WaterBoardSolver"
import "./features/dungeons/TriviaSolver"
import "./features/misc/fdiorite"
import "./features/gui/click"


import { data } from "./data/data"



// Gui
import "./features/misc/party"
import "./features/gui/CommandAliases"
import "./features/gui/KeyShortcuts"
import "./features/gui/CancelMessage"
import "./features/gui/TitleMessage"
//import "./features/gui/SlotBinding"
// Kuudra
import "./features/kuudra/KuudraSplits"
import "./features/kuudra/CratesWaypoints"
// Commands
import "./features/commands/InventoryLog"
//import "./features/misc/hoppity"

// Slayers
import "./features/slayers/BossSlainTime"
import "./features/slayers/BossSpawnTime"
import "./features/slayers/SlayerBossDisplay"
// Misc
//import "./features/dungeons/PreventEnderPearlUse"
//import "./data/functions"

import "./features/misc/commands"
import "./features/misc/BlockOverlay"
import "./features/misc/MiddleClickGuis"
import "./features/misc/RemoveFrontView"
import "./features/misc/NoDeathAnimation"
//import "./features/misc/NoLightning"
import "./features/misc/ItemRarity"
import "./features/misc/BonzoMaskInvincibility"
import "./features/misc/PhoenixInvincibility"
import "./features/misc/CopyChat"
import "./features/misc/ChampionDisplay"
import "./features/misc/EtherwarpOverlay"
import "./features/misc/FactoryHelper"
import "./features/misc/ArmorDisplay"
import "./features/misc/WorldAgeDisplay"
import "./features/misc/SystemTimeDisplay"
import "./features/misc/RagnarokAxeCooldown"
import "./features/misc/NoCursorReset"
import "./features/misc/EnchantedBookDisplay"
import "./features/misc/AttributeShardDisplay"
import "./features/misc/ChatWaypoint"
import "./features/misc/HideEmptyTooltip"
import "./features/misc/InventoryButtons"
import "./features/misc/EquipmentDisplay"
import "./features/misc/RenderItems"
import "./features/misc/SlotLocking"
import "./features/misc/SearchBar"
import "./features/misc/CultivatingDisplay"
import "./features/misc/InventoryHud"
import "./features/misc/CompactDisplay"
import "./features/misc/DrillFuelDisplay"
import "./features/misc/NoEndermanTeleport"
import "./features/misc/InventoryHistory"

register("chat", (pet) => {
    data.pet = pet
    data.save()
}).setCriteria("&cAutopet &eequipped your &7[${*}] ${pet}&e! &a&lVIEW RULE&r");
  
register("chat", (pet) => {
    data.pet = pet
    data.save()
}).setCriteria("&r&aYou summoned your &r${pet}&r&a!&r");
  
register("chat", () => {
    data.pet = "None"
    data.save()
}).setCriteria("You despawned your ${*}!");



const items = [
    "Ender Pearl"
];

