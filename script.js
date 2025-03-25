const builds = {
    "LIGHT": {
        "SPECIALIZATIONS": ["CLOAKING DEVICE", "EVASIVE DASH", "GRAPPLING HOOK"],
        "WEAPONS": ["93R", "ARN-220", "DAGGER", "LH1", "M11", "M26 MATTER", "RECURVE BOW", "SH1900", "SR-84", "SWORD", "THROWING KNIVES", "V9S", "XP-54"],
        "GADGETS": ["FLASHBANG", "FRAG GRENADE", "GAS GRENADE", "GLITCH GRENADE", "GOO GRENADE", "JUMP PAD", "SMOKE GRENADE", "STUN GUN", "BREACH CHARGE", "GATEWAY", "PYRO GRENADE", "SONAR GRENADE", "THERMAL BORE", "THERMAL VISION", "TRACKING DART", "VANISHING BOMB", "GRAVITY VORTEX"]
    },
    "MEDIUM": {
        "SPECIALIZATIONS": ["DEMATERIALIZER", "GUARDIAN TURRET", "HEALING BEAM"],
        "WEAPONS": ["AKM", "FCAR", "MODEL 1887", "R.357", "SHAK-50", "CERBERUS 12GA", "CB-01 REPEATER", "CL-40", "DUAL BLADES", "FAMAS", "PIKE-556", "RIOT SHIELD"],
        "GADGETS": ["DEFIBRILLATOR", "ZIPLINE", "FRAG GRENADE", "GAS MINE", "JUMP PAD", "EXPLOSIVE MINE", "FLASHBANG", "GAS GRENADE", "GLITCH TRAP", "GOO GRENADE", "PYRO GRENADE", "SMOKE GRENADE", "APS TURRET", "DATA RESHAPER", "PROXIMITY SENSOR"]
    },
    "HEAVY": {
        "SPECIALIZATIONS": ["WINCH CLAW", "MESH SHIELD", "CHARGE 'N SLAM", "GOO GUN"],
        "WEAPONS": ["FLAMETHROWER", "LMG", "SLEDGEHAMMER", "LEWIS GUN", "SA1216", "KS-23", ".50 AKIMBO", "M60", "MGL32", "SHAK-50", "M134 MINIGUN", "SPEAR"],
        "GADGETS": ["BARRICADE", "C4", "DOME SHIELD", "EXPLOSIVE MINE", "RPG-7", "PYRO MINE", "FLASHBANG", "FRAG GRENADE", "GAS GRENADE", "GOO GRENADE", "LOCKBOLT", "PYRO GRENADE", "SMOKE GRENADE", "ANTI-GRAVITY CUBE", "PROXIMITY SENSOR"]
    }
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomKit() {
    const build = getRandomItem(Object.keys(builds));
    const specialization = getRandomItem(builds[build]["SPECIALIZATIONS"]);
    const weapon = getRandomItem(builds[build]["WEAPONS"]);
    const gadgets = [...builds[build]["GADGETS"]].sort(() => 0.5 - Math.random()).slice(0, 3);

    return { build, specialization, weapon, gadgets };
}

function generateKit() {
    const kit = getRandomKit();
    document.getElementById("kit").innerHTML = `
        <h2>BUILD: ${kit.build}</h2>
        <p><strong>SPECIALIZATION:</strong> ${kit.specialization}</p>
        <p><strong>WEAPON:</strong> ${kit.weapon}</p>
        <p><strong>GADGETS:</strong></p>
        <ul>${kit.gadgets.map(g => `<li>${g}</li>`).join('')}</ul>
    `;
}
