var LoginModalController = { // On initialise les paramètres de la fonction
    tabsElementName: ".deezer_tabs li", // Les différents onglets
    tabElementName: ".deezer_tab", // Le nom de la jointure des onglets
    inputElementsName: ".deezer_form .input", // le nom du formulaire
    hidePasswordName: ".hide-password", // le nom de l'emplacement du cacher/voir mot de passe

    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    activeTab: null,
    tabSelection: 0,

    findElements: function() { // On vérifie s'il y a bien les éléments.
        var base = this; 

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function(state) { // On vérifie l'état dans lequel sont les éléments
        var base = this,
            elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
            elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }

        return base;
    },

    getActiveTab: function() { // On trouve l'élément qui est actif
        var base = this;

        base.tabsElement.each(function(i, el) {
            if ($(el).hasClass("current")) {
                base.activeTab = $(el);
            }
        });

        return base;
    },

    addClickEvents: function() { // On attribue les éventuels événements au clic
        var base = this;

        base.hidePassword.on("click", function(e) {
            var $this = $(this),
                $pwInput = $this.prev("input");

            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Cacher");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Voir");
            }
        });

        base.tabsElement.on("click", function(e) { // On met la classe current à l'élément est actif
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function(i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });

        base.inputElements.find("label").on("click", function(e) {
            var $this = $(this),
                $input = $this.next("input");

            $input.focus();
        });

        return base;
    },

    initialize : function() { // On initialise toutes les fonctions sur la variable d'entrée
        var base = this;
        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function() { // Au chargement de la page, on lance les fonctions avec l'initialisation
    LoginModalController.initialize();
});
