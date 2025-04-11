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
                {word: 'Renewable'},
                {word: 'Recycle'},
                {word: 'Plastic-free'},
                {word: 'Conservation'},
                {word: 'Climate action'},
                {word: 'Carbon footprint'},
                {word: 'Fair trade'}
            ],
            css : {color:'#000000','font-size':'3em'}
        },
        
        attribute1 : {
            name : 'Fatiguing',
            title : {
                media : {word : 'Fatiguing'},
                css : {color:'#FF0000','font-size':'2em'},
                height : 7
            },
            media : [
                {word: 'Exhausted'},
                {word: 'Overwhelmed'},
                {word: 'Repetitive'},
                {word: 'Tedious'},
                {word: 'Weary'},
                {word: 'Depleted'}
            ],
            css : {color:'#000000','font-size':'3em'}
        },
        
        attribute2 : {
            name : 'Motivating',
            title : {
                media : {word : 'Motivating'},
                css : {color:'#31b404','font-size':'2em'},
                height : 7
            },
            media : [
             {word: 'Exhausted'},
                {word: 'Overwhelmed'},
                {word: 'Repetitive'},
                {word: 'Tedious'},
                {word: 'Weary'},
                {word: 'Depleted'}
            ],
            css : {color:'#000000','font-size':'3em'}
        },

        base_url : {
            image : 'https://baranan.github.io/minno-tasks/images/'
        }
    });
});
