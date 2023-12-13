import { reactive } from "vue";

export const store = reactive({
    cardlist: [],
    optionList: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    apiArchetypeURL: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})