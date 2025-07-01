/**
 * Configuration globale du système "Les Lames du Cardinal"
 */
export const CARDINAL = {
    /** Nom interne du système (ID dans Foundry) */
    SYSTEM_ID: "lames-du-cardinal",

    /** Types d’acteurs */
    Actor: {
        TYPES: ["lame", "pnj"]
    },

    /** Types d’objets */
    Item: {
        TYPES: ["competence", "arcane", "epee", "botteFeinte"]
    },

    /** Signes draconiques et leurs couleurs */
    Signs: {
        GRIFFE: "Griffe",
        SOUFFLE: "Souffle",
        SANG: "Sang",
        ECAILLE: "Écaille"
    },
    SignColors: {
        Griffe: "black",
        Souffle: "black",
        Sang: "red",
        Écaille: "red"
    },

    /** Niveaux de difficulté (valeur → label) */
    Difficulties: {
        1: "moyenne",
        2: "difficile",
        3: "très difficile",
        4: "extrêmement difficile",
        5: "insensée",
        6: "chimérique"
    },

    /** Types de Test */
    RollTypes: {
        QUICK: "Test éclair",
        DRAMATIC: "Test dramatique"
    },

    /** Clés pour stocker dans `actor.system` ou `item.system` */
    Keys: {
        Characteristics: "caracteristiques",
        Skills: "competences",
        Vitality: "vitalite",
        Tenacity: "tenacite",
        ArcaneEphem: "arcaneEphem",
        ArcaneBenis: "arcanesBenis",
        Fencing: "escrime",
        Contacts: "contacts",
        Resources: "ressources",
        Links: "liens"
    }
};
