events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: [{ tag: 'forge:rods/blaze' }],
                output: 'minecraft:blaze_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'thermal:basalz_rod' }],
                output: 'thermal:basalz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'thermal:blizz_rod' }],
                output: 'thermal:blizz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'thermal:blitz_rod' }],
                output: 'thermal:blitz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'minecraft:dirt' }, { item: 'minecraft:bone_meal' }, { tag: 'forge:mushrooms' }],
                output: 'minecraft:mycelium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'minecraft:dirt' }, { item: 'minecraft:bone_meal' }, { tag: 'minecraft:leaves' }],
                output: 'minecraft:podzol',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: [{ item: 'byg:quartzite_sand' }, { item: 'byg:quartzite_sand' }, { tag: 'byg:quartzite_sand' }],
                output: 'minecraft:quartz',
                count: 3,
                syphon: 50,
                ticks: 20,
                orbLevel: 0
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
    });
});
