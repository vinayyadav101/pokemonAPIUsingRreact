

function call(status){
    
    console.log({...status , downloading:false});
    
}

call({
    pokemonList:[],
    downloading:true,
    pokemonUrl:'https://pokeapi.co/api/v2/pokemon',
    nextUrl:null,
    previousUrl:null
})