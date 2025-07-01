/**
 * Extensions pour Actor et Item
 * Système "Les Lames du Cardinal"
 * 
 * A REVOIR CAR JE NE SAIS PAS DU TOUT SI CA CORRESPOND AU BESOIN !!
 */

import { CARDINAL } from "./config.js";

export class CardinalActor extends Actor {
    /** 
     * Préparation des données dérivées (calculs à la volée)
     */
    prepareDerivedData() {
        super.prepareDerivedData();
        const data = this.system;

        // Exemple : calculer le Panache disponible
        data.panacheMax = Object.values(data.competences)
            .reduce((max, skill) => Math.max(max, Math.floor(skill.value / 2)), 0);
    }
}

export class CardinalItem extends Item {
    /**
     * Préparation des données spécifiques à l'objet
     */
    prepareData() {
        super.prepareData();
        // On pourrait gérer ici les feintes/bottes, effets d'arcane, etc.
    }
}

// Au démarrage de Foundry, on enregistre nos classes
Hooks.once("init", () => {
    CONFIG.Actor.documentClass = CardinalActor;
    CONFIG.Item.documentClass = CardinalItem;
});
