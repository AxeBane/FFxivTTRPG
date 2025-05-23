/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return foundry.applications.handlebars.loadTemplates([
    // Actor partials.
    'systems/ffxiv/templates/actor/parts/actor-abilities.hbs',
    'systems/ffxiv/templates/actor/parts/actor-attributes.hbs',
    'systems/ffxiv/templates/actor/parts/actor-profile.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-abilities.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-pet-abilities.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-augment.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-limitbreak.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-minion.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-pet.hbs',
    'systems/ffxiv/templates/actor/parts/actor-card-traits.hbs',
    'systems/ffxiv/templates/actor/parts/actor-companions.hbs',
    'systems/ffxiv/templates/actor/parts/actor-gear.hbs',
    'systems/ffxiv/templates/actor/parts/actor-items.hbs',
    'systems/ffxiv/templates/actor/parts/actor-npc-statblock.hbs',
    'systems/ffxiv/templates/actor/parts/actor-settings.hbs',
    'systems/ffxiv/templates/actor/parts/actor-sidebar.hbs',
    'systems/ffxiv/templates/actor/parts/tabs.hbs',
    // Item partials
    'systems/ffxiv/templates/item/parts/box.hbs',
    // Item user-side
    'systems/ffxiv/templates/item/item-sheet-dialog.hbs',
    'systems/ffxiv/templates/item/item-sheet-dialog-gear.hbs',
    // Chat templates
    'systems/ffxiv/templates/chat/ability-chat-card.hbs',
    'systems/ffxiv/templates/chat/ability-chat-card.hbs',
    'systems/ffxiv/templates/chat/item-chat-card.hbs',
    'systems/ffxiv/templates/chat/modifiers-chat-card.hbs'
  ]);
};
