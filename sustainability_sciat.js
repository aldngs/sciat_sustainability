define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
    
    var API = new APIConstructor();
    return stiatExtension({
        category : { 
            name : 'Sustainability', 
            title : {
                media : {word : 'Sustainability'},
                css : {color:'#1E90FF','font-size':'2em'},
                height : 7
            }, 
            media : [
                {word: 'Eco-friendly'},
                {word: 'Renewable energy'},
                {word: 'Recycle'},
                {word: 'Plastic-free'},
                {word: 'Conservation'},
                {word: 'Organic products'},
                {word: 'Climate action'},
                {word: 'Carbon footprint'},
                {word: 'Sustainable packaging'},
                {word: 'Fair trade'}
            ],
            css : {color:'#31b404','font-size':'3em'}
        },
        
        attribute1 : {
            name : 'Fatiguing',
            title : {
                media : {word : 'Fatiguing'},
                css : {color:'#FF0000','font-size':'2em'},
                height : 7
            },
            media : [
                {word: 'Tired'},
                {word: 'Exhausted'},
                {word: 'Repetitive'},
                {word: 'Overwhelmed'},
                {word: 'Drained'},
                {word: 'Tedious'},
                {word: 'Monotonous'},
                {word: 'Bored'},
                {word: 'Redundant'},
                {word: 'Fatigued'}
            ],
            css : {color:'#FF0000','font-size':'3em'}
        },
        
        attribute2 : {
            name : 'Motivating',
            title : {
                media : {word : 'Motivating'},
                css : {color:'#31b404','font-size':'2em'},
                height : 7
            },
            media : [
                {word: 'Energized'},
                {word: 'Inspired'},
                {word: 'Invigorated'},
                {word: 'Fresh'},
                {word: 'Empowered'},
                {word: 'Engaged'},
                {word: 'Thriving'},
                {word: 'Optimistic'},
                {word: 'Innovative'},
                {word: 'Stimulated'}
            ],
            css : {color:'#31b404','font-size':'3em'}
        },

        base_url : {
            image : 'https://baranan.github.io/minno-tasks/images/'
        }
    });
});
