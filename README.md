# Minetem

[Minetem](github.com/MinimineLP/Minetem) is a good possibility to add new items and blocks to Minecraft in Vanilla

## Built in

* [NodeJS](https://nodejs.org/en/)

## Installation

* Install npm
* Just type **npm i -g minetem**

## Usage

Type **minetem** and add your arguments:
- compile <souce-json\> <dest-folder\> - compile source json
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
    }
  ]
}
```
- This is the json structure of the source json. in the first example of a block you define the id of the block (1) and than the texture. The parent of a block is automatically set to a diamond hoe. So to place the first block you habe to execute this command: **/setblock ~ ~ ~ minecraft:mob_spawner{SpawnData:{id:"minecraft:armor_stand",ArmorItems:[{},{},{},{id:"minecraft:diamond_hoe",Count:1b,tag:{Unbreakable:1b,Damage:1}}]}}**.
- The first block is the same as the first, but in this example the block is not the same texture on the first every page of the block. We Also do this with the id, the secound block has also a diamond_hoe as parent like every block, so we mustn't have the same id for it. But this block has for every page side another texture, so we have to write them all manualy, and cant use the short form. To place this block type **/setblock ~ ~ ~ minecraft:mob_spawner{SpawnData:{id:"minecraft:armor_stand",ArmorItems:[{},{},{},{id:"minecraft:diamond_hoe",Count:1b,tag:{Unbreakable:1b,Damage:2}}]}}**.
- For an item we have to manualy define the parent. Becouse it has another parent as the diamond_hoe, we can take an id we already used for the blocks, the 1. Here we can just define one side of the texture, because an item texture has only one side. You can use the following parent types:
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


## Authors

* **Minimine** - *Initial work* - [Minimine](https://github.com/MinimineLP)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Planned
Model support for the items, **not the block**, with this block generating technology is that not possible!
