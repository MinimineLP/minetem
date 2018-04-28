# Minetem

[Minetem](github.com/MinimineLP/Minetem) is a good possibility to add new items and blocks to Minecraft in Vanilla

## Installation

* Install npm
* Just type `npm i -g minetem`

## Usage

Type **minetem** and add your arguments:
- compile <source-json\> <dest-folder\> - compile source json
- debug - use debug mode (get debug information)
### JSON format
```json
{
  "blocks": [
    {
      "id": 1,
      "textures": "misc/underwater"
    },
    {
      "id": 2,
      "textures": {
        "up": "blocks/vine",
        "down": "blocks/tube_coral",
        "east": "blocks/tnt_top",
        "west": "blocks/terracotta",
        "north": "blocks/structure_block_save",
        "south": "blocks/stripped_birch_log_top"
      }
    }
  ],
  "items": [
    {
      "id": 1,
      "parent": "diamond_sword",
      "texture": "blocks/birch_log"
    },
    {
      "id": 2,
      "parent": "diamond_sword",
      "model": "block/anvil"
    }
  ],
  "guis": [
    {
  		"id": 1,
  		"texture": "customguis/1"
	 }
  ]
}
```
- This is the json structure of the source json. in the first example of a block you define the id of the block (1) and then the texture. The parent of a block is automatically set to a diamond hoe. So to place the first block you have to execute this command:
```
/setblock ~ ~ ~ minecraft:mob_spawner{SpawnData:{id:"minecraft:armor_stand",ArmorItems:[{},{},{},{id:"minecraft:diamond_hoe",Count:1b,tag:{Unbreakable:1b,Damage:1}}]}}
```
- The second block is the same as the first, but in this example the block is not the same texture on the first every page of the block. We also do this with the id, the second block has also a diamond_hoe as parent like every block, so we mustn't have the same id for it. But this block has for every page side another texture, so we have to write them all manually, and cant use the short form. To place this block type
```
/setblock ~ ~ ~ minecraft:mob_spawner{SpawnData:{id:"minecraft:armor_stand",ArmorItems:[{},{},{},{id:"minecraft:diamond_hoe",Count:1b,tag:{Unbreakable:1b,Damage:2}}]}}
```
- For an item we have to manually define the parent. Because it has another parent as the diamond_hoe, we can take an id we already used for the blocks, the 1. Here we can just define one side of the texture, because an item texture has only one side. You can use the following parent types:
```
wooden_sword
golden_sword
stone_sword
iron_sword
diamond_sword
wooden_pickaxe
golden_pickaxe
stone_pickaxe
iron_pickaxe
diamond_pickaxe
wooden_shovel
golden_shovel
stone_shovel
iron_shovel
diamond_shovel
wooden_axe
golden_axe
stone_axe
iron_axe
diamond_axe
wooden_hoe
golden_hoe
stone_hoe
iron_hoe
diamond_hoe
leather_helmet
golden_helmet
chainmail_helmet
iron_helmet
diamond_helmet
leather_chestplate
golden_chestplate
chainmail_chestplate
iron_chestplate
diamond_chestplate
leather_leggings
golden_leggings
chainmail_leggings
iron_leggings
diamond_leggings
leather_boots
golden_boots
chainmail_boots
iron_boots
diamond_boots
elytra
carrot_on_a_stick
fishing_rod
```
To get the Item from the last example just type
```
/give @s minecraft:diamond_sword{Unbreakable:1b,Damage:1}
```
- The second item is nearly the same as the first, but this time it has a custom model, no custom texture. With this model it will look like an anvil. To get it just type
```
/give @s minecraft:diamond_sword{Unbreakable:1b,Damage:2}
```
- The creating of an Inventory is nearly the same as the creating of a block, but we just can use one texture, not 6. As parent it has a diamond_shovel. To place it just type
```
/setblock ~ ~ ~ minecraft:chest{Items:[{Slot:0b,id:"minecraft:diamond_shovel",Count:1b,tag:{Unbreakable:1b,Damage:1}}]} replace
```

## Authors

* **Minimine** - *Initial work* - [Minimine](https://github.com/MinimineLP)

## Built in

* [NodeJS](https://nodejs.org/en/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Issues
It would be very nice, if you find a issue to report it via the github issue function.
