const basicRole = require("./baseRole");
const EnfantSauvage = require("./personnages/enfantSauvage").EnfantSauvage;
const JoueurDeFlute = require("./nouvelle_lune/joueurDeFlute").JoueurDeFlute;
const BoucEmissaire = require("./nouvelle_lune/boucEmissaire").BoucEmissaire;
const IdiotDuVillage = require("./nouvelle_lune/idiotDuVillage").IdiotDuVillage;
const Salvateur = require("./nouvelle_lune/salvateur").Salvateur;
const PetiteFille = require("./thiercelieux/petiteFille").PetiteFille;
const Chasseur = require("./thiercelieux/chasseur").Chasseur;
const Voleur = require("./thiercelieux/voleur").Voleur;
const Voyante = require("./thiercelieux/voyante").Voyante;
const Sorciere = require("./thiercelieux/sorciere").Sorciere;
const Cupidon = require("./thiercelieux/cupidon").Cupidon;

class Create {

    static allRoles = {
        Villageois: this.villageois,
        LoupGarou: this.loupGarou,
        Voyante: this.voyante,
        Salvateur: this.salvateur,
        Sorciere: this.sorciere,
        Chasseur: this.chasseur,
        Cupidon: this.cupidon,
        //Ancien: this.ancien,
        //LoupBlanc: this.loupBlanc,
        Voleur: this.voleur,
        PetiteFille: this.petiteFille,
        IdiotDuVillage: this.idiotDuVillage,
        BoucEmissaire: this.boucEmissaire,
        JoueurDeFlute: this.joueurDeFlute,
        EnfantSauvage: this.enfantSauvage,
        //Ange: this.ange,
        //InfectPereDesLoups: this.infectPereDesLoups,
        //GrandMechantLoup: this.grandMechantLoup,
        //Soeur: this.soeur,
        //MontreurOurs: this.montreurOurs,
        //Renard: this.renard,
        //ChienLoup: this.chienLoup,
        //Frere: this.frere,
        //Chevalier: this.chevalier,
        //JugeBegue: this.jugeBegue,
        //Corbeau: this.corbeau,
    };

    static petiteFille(guildMember, gameInfo) {
        return new PetiteFille(guildMember, gameInfo);
    }

    static villageois(guildMember, gameInfo) {
        return new basicRole.Villageois(guildMember, gameInfo);
    }

    static salvateur(guildMember, gameInfo) {
        return new Salvateur(guildMember, gameInfo);
    }

    static idiotDuVillage(guildMember, gameInfo) {
        return new IdiotDuVillage(guildMember, gameInfo);
    }

    static boucEmissaire(guildMember, gameInfo) {
        return new BoucEmissaire(guildMember, gameInfo);
    }

    static joueurDeFlute(guildMember, gameInfo) {
        return new JoueurDeFlute(guildMember, gameInfo);
    }

    static enfantSauvage(guildMember, gameInfo) {
        return new EnfantSauvage(guildMember, gameInfo);
    }

    /*static chevalier(guildMember, gameInfo) {
        return new Chevalier(guildMember, gameInfo);
    }

    static ange(guildMember, gameInfo) {
        return new Ange(guildMember, gameInfo);
    }

    static infectPereDesLoups(guildMember, gameInfo) {
        return new InfectPereDesLoups(guildMember, gameInfo);
    }

    static soeur(guildMember, gameInfo) {
        return new Soeur(guildMember, gameInfo);
    }

    static renard(guildMember, gameInfo) {
        return new Renard(guildMember, gameInfo);
    }

    static servanteDevouee(guildMember, gameInfo) {
        return new ServanteDevouee(guildMember, gameInfo);
    }

    static frere(guildMember, gameInfo) {
        return new Frere(guildMember, gameInfo);
    }

    static montreurOurs(guildMember, gameInfo) {
        return new MontreurOurs(guildMember);
    }

    static comedien(guildMember, gameInfo) {
        return new Comedien(guildMember, gameInfo);
    }

    static abominableSectaire(guildMember, gameInfo) {
        return new AbominableSectaire(guildMember, gameInfo);
    }

    static chienLoup(guildMember, gameInfo) {
        return new ChienLoup(guildMember, gameInfo);
    }

    static villageoisVillageois(guildMember, gameInfo) {
        return new VillageoisVillageois(guildMember, gameInfo);
    }

    static grandMechantLoup(guildMember, gameInfo) {
        return new GrandMechantLoup(guildMember, gameInfo);
    }

    static ancien(guildMember, gameInfo) {
        return new Ancien(guildMember, gameInfo);
    }

    static jugeBegue(guildMember, gameInfo) {
        return new JugeBegue(guildMember, gameInfo);
    }

    static loupBlanc(guildMember, gameInfo) {
        return new LoupBlanc(guildMember, gameInfo);
    }

    static maire(guildMember, gameInfo) {
        return new Maire(guildMember, gameInfo);
    }*/

    static chasseur(guildMember, gameInfo) {
        return new Chasseur(guildMember, gameInfo);
    }

    static cupidon(guildMember, gameInfo) {
        return new Cupidon(guildMember, gameInfo);
    }

    static loupGarou(guildMember, gameInfo) {
        return new basicRole.LoupGarou(guildMember, gameInfo);
    }

    static sorciere(guildMember, gameInfo) {
        return new Sorciere(guildMember, gameInfo);
    }

    static voleur(guildMember, gameInfo) {
        return new Voleur(guildMember, gameInfo);
    }

    static voyante(guildMember, gameInfo) {
        return new Voyante(guildMember, gameInfo);
    }

}

module.exports = {Create};