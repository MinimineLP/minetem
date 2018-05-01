/*
 *
 *  Minetem compiler
 *  Repository: github.com/MinimineLP/Minetem
 *  Licensed under MIT, see LICENSE od LICENSE.md file
 *  Copyright (c) Minimine 2018
 *
 */

const overwriteLayout = {
  start: `{"__createdwith": "Minetem Compiler","parent": "item/handheld","textures": {"layer0": "items/%type%"},"overrides": [`,
  overwrite: `{ "predicate": {"damaged": 0, "damage": %damage%}, "model": "%location%"},`,
  end: `{ "predicate": {"damaged": 1, "damage": 0}, "model": "item/%type%"}]}`,
}

const textureFileLayout = {
  credits: `"__createdwith": "Minetem Compiler"`,
  display: `"display": {"head": {"rotation": [-30, 0, 0],"translation": [ 0, -18.4825, -14.29 ],"scale": [ 1.9845, 1.9845, 1.9845 ]}}`,
  elements: `"elements":[{"from":[-16,-16,-16],"to":[32,32,32],"faces":{"up":{"texture":"#up","uv":[0,0,16,16]},"down":{"texture":"#down","uv":[0,0,16,16]},"west":{"texture":"#west","uv":[0,0,16,16]},"east":{"texture":"#east","uv":[0,0,16,16]},"north":{"texture":"#north","uv":[0,0,16,16]},"south":{"texture":"#south","uv":[0,0,16,16]}}}]`,
  onelayer: `{"__createdwith": "Minetem Compiler","parent": "item/generated","textures": {"layer0": "%path%"}}}`,
  inventory: `{"__createdwith": "Minetem Compiler","textures":{"texture":"%path%"},"elements":[{"from":[-16,-16,15.9375],"to":[32,32,16],"faces":{"north":{"uv":[0,0,16,16],"rotation":180,"texture":"#texture"},"south":{"uv":[0,0,16,16],"texture":"#texture"}}}],"display":{"firstperson_lefthand":{"scale":[0,0,0]},"gui":{"translation":[72,-62,-80],"scale":[3.66,3.66,3.66]}}}`,
  gui: `{"__createdwith": "Minetem Compiler","textures":{"texture":"%path%"},"elements":[{"from":[-16,-16,15.9375],"to":[32,32,16],"faces":{"north":{"uv":[0,0,16,16],"rotation":180,"texture":"#texture"},"south":{"uv":[0,0,16,16],"texture":"#texture"}}}],"display":{"firstperson_lefthand":{"translation":[-9,3.1,0],"scale":[0.45,0.45,0.45]},"firstperson_righthand":{"translation":[-9,3.1,0],"scale":[0.45,0.45,0.45]}, "thirdperson_righthand":{"scale":[0,0,0]},"thirdperson_lefthand":{"scale":[0,0,0]},"gui":{"translation":[72,-62,-80],"scale":[0,0,0]}}}`,
}

const damage = {

  // Swords
  wooden_sword: 60,
  golden_sword: 33,
  stone_sword: 132,
  iron_sword: 251,
  diamond_sword: 1562,

  // Pickaxes
  wooden_pickaxe: 60,
  golden_pickaxe: 33,
  stone_pickaxe: 132,
  iron_pickaxe: 251,
  diamond_pickaxe: 1562,

  // Shovels
  wooden_shovel: 60,
  golden_shovel: 33,
  stone_shovel: 132,
  iron_shovel: 251,
  diamond_shovel: 1562,

  // Axe
  wooden_axe: 60,
  golden_axe: 33,
  stone_axe: 132,
  iron_axe: 251,
  diamond_axe: 1562,

  // Hoes
  wooden_hoe: 60,
  golden_hoe: 33,
  stone_hoe: 132,
  iron_hoe: 251,
  diamond_hoe: 1562,

  // Helmet
  leather_helmet: 56,
  golden_helmet: 78,
  chainmail_helmet: 166,
  iron_helmet: 166,
  diamond_helmet: 364,

  // Chestplates
  leather_chestplate: 81,
  golden_chestplate: 113,
  chainmail_chestplate: 241,
  iron_chestplate: 241,
  diamond_chestplate: 529,

  // Leggings
  leather_leggings: 76,
  golden_leggings: 106,
  chainmail_leggings: 226,
  iron_leggings: 226,
  diamond_leggings: 496,

  // Shoes
  leather_boots: 66,
  golden_boots: 92,
  chainmail_boots: 196,
  iron_boots: 196,
  diamond_boots: 430,

  // Elytra
  elytra: 433,

  // Carrot on a stick
  carrot_on_a_stick: 26,

  // Fishing rod
  fishing_rod: 65,
}
module.exports = {
  overwriteLayout: overwriteLayout,
  textureFileLayout: textureFileLayout,
  damage: damage,
}
