events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        event.recipes.create.filling(Item.of(honeyVariety + '_bottle'), [
            Fluid.of(honeyVariety, 250),
            Item.of('minecraft:glass_bottle')
        ]);
    });

    var data = {
        recipes: [
        	{
        		input: Item.of('upgrade_aquatic:squid_bucket'),
        		fluid: Fluid.of('astralsorcery:liquid_starlight', 250),
        		output: Item.of('upgrade_aquatic:glow_squid_bucket')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: {fluidTag: 'forge:milk', amount: 250},
        		output: Item.of('farmersdelight:milk_bottle')
        	},
        	{
        		input: Item.of('farmersdelight:milk_bottle'),
        		fluid: Fluid.of('create:chocolate', 250),
        		output: Item.of('farmersdelight:hot_cocoa')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('thermal:syrup', 25),
        		output: Item.of('autumnity:syrup_bottle')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('thermal:sap', 500),
        		output: Item.of('autumnity:sap_bottle')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('industrialforegoing:essence', 250),
        		output: Item.of('minecraft:experience_bottle')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
        		output: Item.of('minecraft:experience_bottle')
        	},
        	{
        		input: Item.of('minecraft:glass_bottle'),
        		fluid: Fluid.of('cofh_core:experience', 250),
        		output: Item.of('minecraft:experience_bottle')
        	},
            {
                input: Ingredient.of('#forge:glass/colorless'),
                fluid: Fluid.of('integrateddynamics:menril_resin', 1000),
                output: 'integratedterminals:menril_glass'
            },
            {
                input: Ingredient.of('#forge:glass/colorless'),
                fluid: Fluid.of('integrateddynamics:liquid_chorus', 1000),
                output: 'integratedterminals:chorus_glass'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.filling(recipe.output, [recipe.fluid, recipe.input]);
    });
});
