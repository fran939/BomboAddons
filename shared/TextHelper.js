const ClientCommandHandler = net.minecraftforge.client.ClientCommandHandler.instance
const romanNumerals = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1}
const numberFormat = {"k": 1000, "M": 1000000, "B": 1000000000}

export class TextHelper {
    static PREFIX = "&0[&4Bombo&0]&r"
    static PREFIX2 = "§0[§4Bombo§0]§r"

    /**
     * - Matches the given regex with the given string
     * @param {RegExp} regex 
     * @param {String} string 
     * @returns {RegExpMatchArray | null}
     */
    static getRegexMatch(regex, string) {
        return regex.test(string) ? string.match(regex) : null
    }

    // This function was inspired from BloomCore
    /**
    * Decodes a roman numeral into it's respective number. Eg VII -> 7, LII -> 52 etc.
    * Returns null if the numeral is invalid.
    * Supported symbols: I, V, X, L, C, D, M
    * @param {String} numeral 
    * @returns {Number | null}
    */
    static decodeNumeral(numeral) {
        if (!numeral.match(/^[IVXLCDM]+$/)) return null
        
        let number = 0
        
        for (let index = 0; index < numeral.length; index++) {
            // Get the current symbol
            let currentSymbolValue = romanNumerals[numeral[index]]
            // If it is possible, get the next one
            let nextSymbolValue = (index + 1 < numeral.length) ? romanNumerals[numeral[index + 1]] : 0
   
            // Check if the current one is smaller than the next,
            // if so it falls under the special rules of roman numerals
            if (currentSymbolValue < nextSymbolValue) {
                number += nextSymbolValue - currentSymbolValue
                // Skip the next numeral
                index++
            } else {
                // Otherwise just add the number
                number += currentSymbolValue
            }
            
        }

        return number
   }

   /**
    * - Check if the criteria is a regex or a string
    * - Regex is way more intensive so only use that if needed
    * @param {Function} fn Callback function
    * @param {String | RegExp} criteria The criteria to match with
    * @param {String} unformatted The current unformatted text
    * @param {Event} event The current packet event
    * @param {String} formatted The current formatted text
    * @returns returns the callback fn with the given matches or the current msg if the criteria is null
    */
   static matchesCriteria(fn, criteria, unformatted, event, formatted) {
        if (!criteria) return fn(unformatted, event, formatted)

        else if (typeof criteria === "string") {
            if (unformatted !== criteria) return

            return fn(unformatted, event, formatted)
        }

        else if (criteria instanceof RegExp) {
            const match = unformatted.match(criteria)
            if (!match) return

            return fn(...match.slice(1), event, formatted)
        }
    }

    static convertToRoman(number) {
        if (!number) return number

        let result = ""
  
        // Loop over the romanNumerals
        for ([roman, value] in romanNumerals) {
            // If the number is greater than the value of the current roman numeral
            // it means that part of it can be replaced by the current roman numeral
            while (number >= value) {
                // Add the numeral to the result
                result += roman 
                // Remove that value from the number
                number -= value
            }
        }
  
        return result
    }

    static dropToRoman(selectedDrop, formattedDrop) {
        if (!/(Rune|Enchanted Book)/.test(selectedDrop)) return selectedDrop

        if (selectedDrop === "Enchanted Book Bundle") return selectedDrop = formattedDrop === "§5§o§6Enchanted Book Bundle" ? "The One Bundle" : "Quantum Bundle"

        const number = selectedDrop.match(/([\d]+)/)?.[1]
        if (!number) return selectedDrop

        return selectedDrop.replace(number, this.convertToRoman(number))
    }

    static addCommas(number) {
        return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? number
    }

    static addCommasTrunc(number) {
        return this.addCommas(Math.trunc((Math.round(number * 100) / 100)))
    }

    /**
     * - Gets the extra attributes of the Item
     * @param {Item} item 
     * @returns {Object}
     */
    static getExtraAttribute(item) {
        return item?.getNBT()?.toObject()?.tag?.ExtraAttributes
    }

    // From BloomCore
    /**
     * - Gets the Skyblock item ID of the given MCItem or CT Item
     * @param {Item | MCItemStack} item 
     */
    static getSkyblockItemID(item) {
        if (item instanceof net.minecraft.item.ItemStack) item = new Item(item)
        if (!(item instanceof Item)) return

        const extraAttributes = item.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")
        const itemID = extraAttributes?.getString("id")

        if (itemID !== "ENCHANTED_BOOK") return itemID
        
        // Enchanted books are a pain in the ass
        const enchantments = extraAttributes.getCompoundTag("enchantments")
        const enchants = [...enchantments.getKeySet()]

        if (!enchants.length) return

        const enchantment = enchants[0]
        const level = enchantments.getInteger(enchants[0])

        return `ENCHANTMENT_${enchantment.toUpperCase()}_${level}`
    }

    /**
     * - Gets the seconds since starting date
     * @param {Date} startingDate 
     * @param {Date} endingDate 
     * @returns string that contains the time in a fixed decimal value of 2
     */
    static getSecondsSince(startingDate, endingDate) {
        if (!startingDate || !endingDate || (startingDate instanceof Array && !startingDate[1])) return "0s"

        if (startingDate instanceof Array) return `${((startingDate[0]-startingDate[1])/1000).toFixed(2)}s`
        
        return `${((startingDate-endingDate)/1000).toFixed(2)}s`
    }

    /**
     * - Converts a string into it's value in number e.g 1.2k to 1200
     * @param {String} string 
     * @returns {Number}
     */
    static convertToNumber(string) {
        if (!/^([\d.,]+)([A-z]+)$/.test(string)) return parseFloat(string.replace(/,/g, ""))

        const [ _, number, format ] = string.match(/^([\d.,]+)([A-z]+)$/)

        return parseFloat(number) * numberFormat[format]
    }

    /**
     * - Gets the time since old date from current date
     * @param {Date} oldDate 
     * @returns {String} hrs:mins:secs
     */
    static getTime(oldDate) {
        const seconds = Math.round((Date.now() - oldDate) / 1000 % 60)
        const mins = Math.floor((Date.now() - oldDate) / 1000 / 60 % 60)
        const hours = Math.floor((Date.now() - oldDate) / 1000 / 60 / 60 % 24)
    
        return `${hours}:${mins}:${seconds}`
    }

    /**
     * - Gets the items/hr with the given time and items
     * @param {Item} item 
     * @param {Date} time 
     * @returns {String}
     */
    static getHourPerItems(item, time) {
        return this.addCommasTrunc(Math.round(((item ?? 0)/(time ?? 1)) * 3600))
    }

    /**
     * - Checks wheather the [x, y] array1 is in the bounding box of [x1, y1, x2, y2] array2
     * @param {Array} array1 
     * @param {Array} array2 
     * @returns {Boolean}
     */
    static checkBoundingBox([x, y], [x1, y1, x2, y2]) {
        return (x >= x1 && x <= x2) && (y >= y1 && y <= y2)
    }

    // From BloomCore
    /**
     * Maps real world coords to 0-5 depending on where they are in the dungeon.
     * @param {Number} realX 
     * @param {Number} realZ 
     * @returns {Number[]}
     */
    static getRoomComponent(realX=null, realZ=null) {
        if (realX == null && realZ == null) {
            realX = Player.getX()
            realZ = Player.getZ()
        }

        return [
            Math.floor((realX + 200 + 0.5) / 32),
            Math.floor((realZ + 200 + 0.5) / 32)
        ]
    }

    // From BloomCore
    /**
     * Gets the corner of the room component at the given real-world coordinates.
     * @param {Number} x 
     * @param {Number} z 
     * @returns {Number[]}
     */
    static getRoomCorner(x=null, z=null) {
        if (!x || !z) {
            x = Player.getX()
            z = Player.getZ()
        }
        let [cx, cz] = this.getRoomComponent(x, z)
        return [-200 + cx*32, -200 + cz*32]
    }

    // From BloomCore
    /**
     * Gets the [x, z] coordinate of the center of the room at a certain x, z position.
     * @param {Number | null} x 
     * @param {Number | null} z 
     * @returns 
     */
    static getRoomCenter(x=null, z=null) {
        const [x2, z2] = this.getRoomCorner(x, z)
        return [x2+15, z2+15]
    }

    /**
     * - Rotates the coords by the given angle and returns a new array with rotated coords
     * @param {[]} param0 
     * @param {Number} degree 
     * @returns {[]}
     */
    static rotateCoords(array, degree) {
        if (degree < 0) degree = degree + 360
    
        if (degree == 0) return array
        if (degree == 90) return [array[2], array[1], -array[0]]
        if (degree == 180) return [-array[0], array[1], -array[2]]
        if (degree == 270) return [-array[2], array[1], array[0]]
        return array
    }
    
    static offsetsToCheck = [
        [0, 16],
        [-16, 0],
        [0, -16],
        [16, 0]
    ]
    
    /**
     * - Gets the relative coords for the current room with the given [ x, y, z ]
     * @param {[]} param0 
     * @returns {[]}
     */
    static getRelativeCoord(array) {
        const [ cx, cz ] = this.getRoomCenter()
    
        return [ array[0] - cx, array[1], array[2] - cz ]
    }
    
    /**
     * - Gets the real coord from the given relative coords and room rotation
     * @param {[]} param0 
     * @param {Number} rotation 
     * @returns {[]}
     */
    static getRealCoord(array, rotation) {
        const [ cx, cz ] = this.getRoomCenter()
        const [ dx, dy, dz ] = this.rotateCoords(array, 360 - rotation)
    
        return [ cx + dx, dy, cz + dz ]
    }

    // Big thank bloom
    /**
     * - Gets the rotation of the current puzzle room
     * - only puzzles work for this since it scans to see how many doors it has
     * @returns {Number}
     */
    static getPuzzleRotation() {
        const xIndex = Math.floor((Player.getX() + 200) / 32)
        const zIndex = Math.floor((Player.getZ() + 200) / 32)   
        const centerX = xIndex * 32 - 200 + 15
        const centerZ = zIndex * 32 - 200 + 15

        let rotation = null

        for (let i = 0; i < this.offsetsToCheck.length; i++) {
            let [ dx, dz ] = this.offsetsToCheck[i]
            let block = World.getBlockAt(centerX + dx, 68, centerZ + dz)

            if (block.type.getID() === 0) continue
        
            // If the rotation has already been set, there is more than one door
            if (rotation !== null) return
        
            rotation = i*90
        }

        return rotation
    }

    static distanceBetweeen(block1, block2) {
        return Math.hypot(block1.getX() - block2.getX(), block1.getY() - block2.getY(), block1.getZ() - block2.getZ())
    }
    
    // Big thank bloom
    static getDungeonsPosIndex() {
        const xIndex = Math.floor((Player.getX() + 200) / 32)
        const zIndex = Math.floor((Player.getZ() + 200) / 32)
        const posIndex = xIndex * 6 + zIndex

        return posIndex
    }

    /**
     * - Sends a message formatted specifically for puzzle timer
     * @param {string} name The name of the puzzle/solver
     * @param {number} time The time of when the room was entered or puzzle was started at
     */
    static sendPuzzleMsg(name, time) {
        ChatLib.chat(`${TextHelper.PREFIX} &a${name} took&f: &6${((Date.now() - time) / 1000).toFixed(2)}s`)
    }

    /**
    * - Checks whether the current player can send this command as client or not
    * @param {string} command The command without `/`
    * @returns {boolean} Whether it can or not
    */
    static shouldSendAsClient(command) {
       const iCommand = ClientCommandHandler.func_71555_a().get(command)
       if (!iCommand || !iCommand.func_71519_b(Player.getPlayer())) return false

       return true
   }
}