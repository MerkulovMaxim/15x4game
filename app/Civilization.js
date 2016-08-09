

    var Civilization = {
    global_bonus: 0,

    buildings: {
        communication: new Building('communication', ['upgradable'], 1.5, 'culture', function(){return 1;}, culture_rate, "Raises culture soft-cap."),
        attentiveness: new Building('attentiveness', ['upgradable'], 1.6, 'culture', function(){return 1;}, culture_rate, "Soften culture soft-cap."),
        teamwork: new Building('teamwork', ['upgradable'], 1.7, 'culture', function(){return 1;}, culture_rate, "Expands the maximum size of the teams."),
        sharing: new Building('sharing', ['upgradable'], 1.8, 'culture', function(){return 1;}, 10*culture_rate, "Expands maximum storage size."),
        popularization: new Building('popularization', ['upgradable', 'maintainable'], 1.3, 'culture', function(){return 0.01;}, culture_rate, "Slowly increase your volunteers, consuming culture."),
        education: new Building('education', ['upgradable', 'maintainable'], 1.4, 'culture', function(){return 0.01;}, culture_rate, "Slowly increase your knowledge, consuming culture."),
        motivation: new Building('motivation', ['upgradable', 'maintainable'], 1.5, 'culture', function(){return 1;}, culture_rate, "Increases a global production bonus, consuming culture."),
        activism: new Building('activism', ['upgradable', 'maintainable'], 1.6, 'culture', function(){return 1;}, culture_rate, "Decreases a global production bonus, slowly increase your action points."),
    }
};

Civilization.getGlobalBonus = function() {
    return (1+(Civilization.global_bonus / 100));
};

Civilization.tick = function() {
  //  console.log(Player, Civilization);
    Player.culture_rate = 0;

    this.global_bonus = 0;

    Player.culture_soft_cap = (Civilization.buildings.communication.level + 1) * 10;
    if (!Player.culture_soft_cap) Player.culture_soft_cap = 10;
    if (Player.culture_soft_cap < 10) Player.culture_soft_cap = 10;

    var soft_cap = Math.sqrt(Player.culture - Player.culture_soft_cap);
    Player.culture_rate = Civilization.getGlobalBonus() * Player.volunteers * 0.1 / (soft_cap ? (soft_cap / ((Civilization.buildings.attentiveness.level * 0.1) + 1)) : 1);
   // console.log(Player.culture_rate, Civilization.global_bonus, Player.volunteers, soft_cap);
    if (Player.culture_rate > 0) Player.reward('culture', Player.culture_rate, 1);

    if (Civilization.buildings.motivation.workers > 0 &&
        Player.withdraw('culture', Civilization.buildings.motivation.workers * 0.01, 1)) {
        Player.culture_rate -= Civilization.buildings.motivation.workers * 0.01;
        this.global_bonus += Civilization.buildings.motivation.getEfficiency() / Civilization.getGlobalBonus();
    }

    if (Civilization.buildings.activism.workers > 0) {
        Player.culture_rate -= Civilization.buildings.activism.workers * 0.01;
        this.global_bonus -= Civilization.buildings.activism.getEfficiency() / Civilization.getGlobalBonus();
        var debuff = Player.volunteers_memory * 1000 + Player.action_points * 1000 + (Player.likes + Player.design * 10 + Player.money * 100 + Player.ideas * 1000);
        Player.action_points += Civilization.buildings.activism.getEfficiency() * 10 / (1 + debuff);
    }

    if (Civilization.buildings.popularization.workers > 0 &&
        Player.withdraw('culture', Civilization.buildings.popularization.workers * 0.01, 1)) {
        Player.culture_rate -= Civilization.buildings.popularization.workers * 0.01;
        var new_volunteers = Civilization.buildings.popularization.getEfficiency() * 100 / Math.pow(Player.volunteers_memory, 2);
        Gatherer.found(new_volunteers);
        Player.volunteers += new_volunteers;
        Player.volunteers_memory += new_volunteers;
    }

    if (Civilization.buildings.education.workers > 0 &&
        Player.withdraw('culture', Civilization.buildings.education.workers * 0.01, 1)) {
        Player.culture_rate -= Civilization.buildings.education.workers * 0.01;
        Player.revealSecret('knowledge');
        Player.knowledge += Civilization.buildings.education.getEfficiency() * 2 / (2 * (1 + Player.writing + Player.drawing + Player.programming + Player.management + 5*Player.knowledge + 0.5*Player.volunteers_memory));
    }

};


Civilization.increaseBuilding = function(building) {
    this.buildings[building].increase();
};

Civilization.decreaseBuilding = function(building) {
    this.buildings[building].decrease();
};

Civilization.upgradeBuilding = function(building) {
    this.buildings[building].upgrade();
};

Civilization.getUpgradeCostBuilding = function(building) {
    return this.buildings[building].getUpgradeCost();
};

Civilization.getBuildingEfficiency = function(building) {
    return this.buildings[building].getEfficiency();
};

Civilization.getBuildingProductivity = function(building) {
    return this.buildings[building].getProductivity();
};

