import { reactive } from "vue";

export const store = reactive({
    cardlist: [],
    optionList: [],
    searchArchetype: '',
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiArchetypeURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})