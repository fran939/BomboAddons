

const Executors = Java.type("java.util.concurrent.Executors")
const getBlockPosIdAt = (b) => World.getBlockAt(b).type.getID()






const greenArray = [
    new BlockPos(45, 169, 44),
    new BlockPos(46, 169, 44),
    new BlockPos(47, 169, 44),
    new BlockPos(44, 169, 43),
    new BlockPos(45, 169, 43),
    new BlockPos(46, 169, 43),
    new BlockPos(47, 169, 43),
    new BlockPos(48, 169, 43),
    new BlockPos(43, 169, 42),
    new BlockPos(44, 169, 42),
    new BlockPos(45, 169, 42),
    new BlockPos(46, 169, 42),
    new BlockPos(47, 169, 42),
    new BlockPos(48, 169, 42),
    new BlockPos(49, 169, 42),
    new BlockPos(43, 169, 41),
    new BlockPos(44, 169, 41),
    new BlockPos(45, 169, 41),
    new BlockPos(46, 169, 41),
    new BlockPos(47, 169, 41),
    new BlockPos(48, 169, 41),
    new BlockPos(49, 169, 41),
    new BlockPos(43, 169, 40),
    new BlockPos(44, 169, 40),
    new BlockPos(45, 169, 40),
    new BlockPos(46, 169, 40),
    new BlockPos(47, 169, 40),
    new BlockPos(48, 169, 40),
    new BlockPos(49, 169, 40),
    new BlockPos(44, 169, 39),
    new BlockPos(45, 169, 39),
    new BlockPos(46, 169, 39),
    new BlockPos(47, 169, 39),
    new BlockPos(48, 169, 39),
    new BlockPos(45, 169, 38),
    new BlockPos(46, 169, 38),
    new BlockPos(47, 169, 38)
];

const blueArray = [
    new BlockPos(99, 169, 68),
    new BlockPos(100, 169, 68),
    new BlockPos(101, 169, 68),
    new BlockPos(98, 169, 67),
    new BlockPos(99, 169, 67),
    new BlockPos(100, 169, 67),
    new BlockPos(101, 169, 67),
    new BlockPos(102, 169, 67),
    new BlockPos(97, 169, 66),
    new BlockPos(98, 169, 66),
    new BlockPos(99, 169, 66),
    new BlockPos(100, 169, 66),
    new BlockPos(101, 169, 66),
    new BlockPos(102, 169, 66),
    new BlockPos(103, 169, 66),
    new BlockPos(97, 169, 65),
    new BlockPos(98, 169, 65),
    new BlockPos(99, 169, 65),
    new BlockPos(100, 169, 65),
    new BlockPos(101, 169, 65),
    new BlockPos(102, 169, 65),
    new BlockPos(103, 169, 65),
    new BlockPos(97, 169, 64),
    new BlockPos(98, 169, 64),
    new BlockPos(99, 169, 64),
    new BlockPos(100, 169, 64),
    new BlockPos(101, 169, 64),
    new BlockPos(102, 169, 64),
    new BlockPos(103, 169, 64),
    new BlockPos(98, 169, 63),
    new BlockPos(99, 169, 63),
    new BlockPos(100, 169, 63),
    new BlockPos(101, 169, 63),
    new BlockPos(102, 169, 63),
    new BlockPos(101, 169, 62),
    new BlockPos(100, 169, 62),
    new BlockPos(99, 169, 62),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43)
];

const yellowArray = [
    new BlockPos(45, 169, 68),
    new BlockPos(46, 169, 68),
    new BlockPos(47, 169, 68),
    new BlockPos(44, 169, 67),
    new BlockPos(45, 169, 67),
    new BlockPos(46, 169, 67),
    new BlockPos(47, 169, 67),
    new BlockPos(48, 169, 67),
    new BlockPos(43, 169, 66),
    new BlockPos(44, 169, 66),
    new BlockPos(45, 169, 66),
    new BlockPos(46, 169, 66),
    new BlockPos(47, 169, 66),
    new BlockPos(48, 169, 66),
    new BlockPos(49, 169, 66),
    new BlockPos(43, 169, 65),
    new BlockPos(44, 169, 65),
    new BlockPos(45, 169, 65),
    new BlockPos(46, 169, 65),
    new BlockPos(47, 169, 65),
    new BlockPos(48, 169, 65),
    new BlockPos(49, 169, 65),
    new BlockPos(43, 169, 64),
    new BlockPos(44, 169, 64),
    new BlockPos(45, 169, 64),
    new BlockPos(46, 169, 64),
    new BlockPos(47, 169, 64),
    new BlockPos(48, 169, 64),
    new BlockPos(49, 169, 64),
    new BlockPos(44, 169, 63),
    new BlockPos(45, 169, 63),
    new BlockPos(46, 169, 63),
    new BlockPos(47, 169, 63),
    new BlockPos(48, 169, 63),
    new BlockPos(45, 169, 62),
    new BlockPos(46, 169, 62),
    new BlockPos(47, 169, 62),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43)
];

const redArray = [
    new BlockPos(99, 169, 38),
    new BlockPos(100, 169, 38),
    new BlockPos(101, 169, 38),
    new BlockPos(98, 169, 39),
    new BlockPos(99, 169, 39),
    new BlockPos(100, 169, 39),
    new BlockPos(101, 169, 39),
    new BlockPos(102, 169, 43),
    new BlockPos(97, 169, 40),
    new BlockPos(98, 169, 40),
    new BlockPos(99, 169, 40),
    new BlockPos(100, 169, 40),
    new BlockPos(101, 169, 40),
    new BlockPos(102, 169, 42),
    new BlockPos(103, 169, 40),
    new BlockPos(97, 169, 41),
    new BlockPos(98, 169, 41),
    new BlockPos(99, 169, 41),
    new BlockPos(100, 169, 41),
    new BlockPos(101, 169, 41),
    new BlockPos(102, 169, 41),
    new BlockPos(103, 169, 41),
    new BlockPos(97, 169, 42),
    new BlockPos(98, 169, 42),
    new BlockPos(99, 169, 42),
    new BlockPos(100, 169, 42),
    new BlockPos(101, 169, 42),
    new BlockPos(102, 169, 40),
    new BlockPos(103, 169, 42),
    new BlockPos(98, 169, 43),
    new BlockPos(99, 169, 43),
    new BlockPos(100, 169, 43),
    new BlockPos(101, 169, 43),
    new BlockPos(102, 169, 39),
    new BlockPos(101, 169, 44),
    new BlockPos(100, 169, 44),
    new BlockPos(99, 169, 44),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43)
];

const green = new Set(greenArray);
const yellow = new Set(yellowArray);
const blue = new Set(blueArray);
const red = new Set(redArray);

const glass = new BlockType("glass").getDefaultState();

var runLoop = Executors.newSingleThreadExecutor();

runLoop.execute(() => {
    register("step", () => {
        for (let height = 0; height < 37; height++) {
            for (let block of green) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 1) {
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                }
            }
            for (let block of blue) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 1) {
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                }
            }
            for (let block of yellow) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 1) {
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                } 
            }
            for (let block of red) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 1) {
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                }
            }
        }
    }).setFps(10);
});




register("command", () => {
    let block = Player.lookingAt();
    if (!block) {
        ChatLib.chat("You're not looking at a block!");
        return;
    }
    
    let blockID = block.type.getID();
    let blockName = block.type.getName();
    
    ChatLib.chat(`&aBlock: &b${blockName} &a(ID: &b${blockID}&a)`);
}).setName("blockid");




//CARPET

/*
const carpetArray = [
    new BlockPos(45, 169, 44),
    
    new BlockPos(46, 169, 38),
    new BlockPos(47, 169, 38),
    new BlockPos(-86, 69, -90),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43)
];


const carpet = new Set(greenArray);


const air = new BlockType("glass").getDefaultState();

var runLoop = Executors.newSingleThreadExecutor();

runLoop.execute(() => {
    register("step", () => {
        for (let height = 0; height < 37; height++) {
            for (let block of carpet) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 171) {
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                }
            }
        }
    }).setFps(10);
});
*/


const stoneReplaceList = [
    new BlockPos(46, 169, 38),
    new BlockPos(47, 169, 38),
    new BlockPos(-86, 69, -90),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43)
];

const carpetReplaceList = [
    new BlockPos(46, 169, 38),
    new BlockPos(47, 169, 38),
    new BlockPos(-86, 69, -90),
    new BlockPos(67, 221, 46),
    new BlockPos(54, 224, 43),
    new BlockPos(92, 224, 43),
    new BlockPos(73, 225, 73),
    new BlockPos(67, 221, 38),
    new BlockPos(87, 127, 47),// level alta
    new BlockPos(87, 127, 46),
    new BlockPos(87, 127, 45),
    new BlockPos(86, 127, 45),
    new BlockPos(85, 127, 45),
    new BlockPos(85, 127, 46),
    new BlockPos(85, 127, 47),
    new BlockPos(86, 127, 47),
    new BlockPos(85, 120, 35),//lever baja
    new BlockPos(85, 120, 34),
    new BlockPos(85, 120, 33),
    new BlockPos(84, 120, 33),
    new BlockPos(83, 120, 33),
    new BlockPos(83, 120, 34),
    new BlockPos(83, 120, 35),
    new BlockPos(84, 120, 35),

    new BlockPos(72, 115, 40),    // pasarela
    new BlockPos(68, 115, 40),
    new BlockPos(65, 115, 40),
    new BlockPos(62, 115, 40),
    new BlockPos(59, 115, 40),
    new BlockPos(54, 115, 47),
    new BlockPos(54, 115, 50),
];

//const glass = new BlockType("glass").getDefaultState();
const bedrock = new BlockType("air").getDefaultState();

var runLoop = Executors.newSingleThreadExecutor();

runLoop.execute(() => {
    register("step", () => {
        for (let height = 0; height < 37; height++) {
            // Replace stone with glass
            for (let block of stoneReplaceList) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 1) { // Stone
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), glass);
                }
            }

            // Replace carpets with bedrock
            for (let block of carpetReplaceList) {
                if (getBlockPosIdAt(block.add(0, height, 0)) === 171) { // Carpet
                    World.getWorld().func_175656_a(block.add(0, height, 0).toMCBlock(), bedrock);
                }

                // Check for carpets in a 5-block radius
                /*for (let x = -5; x <= 5; x++) {
                    for (let z = -5; z <= 5; z++) {
                        let nearbyBlock = block.add(x, height, z);
                        if (getBlockPosIdAt(nearbyBlock) === 171) { // Carpet found
                            World.getWorld().func_175656_a(nearbyBlock.toMCBlock(), bedrock);
                        }
                    }
                }*/
            }
        }
    }).setFps(10);
});
