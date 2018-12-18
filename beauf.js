const beauf = {
  dict: {
    'A': 'Absinthe Agneau Aubergines Ail Asperges Artichauts Anisette',
    'B': 'Bidoche Beaufort Baguette Bleu Blanc Brie Beurre Brebis Beaujolais Betteraves Barbaque Bavette Blanquette',
    'C': 'Choucroute Chartreuse Cantal Charolais Ciboulette Chèvre Calvados Cidre Cointreau Clairette Cabernet Champignons Caille Carottes Courgettes Cornichons Choux Civet Couscous Cassoulet Cognac Calvados Comté',
    'D': 'Dinde',
    'E': 'Emmental Eau-de-vie Echalotes Epinards Entrecôte',
    'F': 'Foie-gras Fouasse Faisselle Fromage Fondue Frites',
    'G': 'Gnôle Gouda Gruyère Génépi Gratin Gigot Grillade',
    'H': 'Haricots Hachis Huîtres',
    'I': '',
    'J': 'Jambon Jambonneau',
    'K': '',
    'L': 'Liqueur Lentilles',
    'M': 'Mimolette Morbier Munster Miche Moutarde Marinade Magret Mousseux',
    'N': 'Navets',
    'O': 'Oignons Omelette Olives',
    'P': 'Pinard Pain Persil Pot-au-feu Poireaux Patates Poivre Porc Poulet Pintade Pesto Poitrine Pâté Poulet Potage',
    'Q': 'Quiche',
    'R': 'Rouge Rosé Roblochon Roti Ricard Raclette Roquefort Rhum Ragoût Rillettes',
    'S': 'Saucisse Sauciflard Sauvignon Suze Soupe Sel Sauce',
    'T': 'Tartiflette Terrine Tequila Triple-sec Tomates Tabasco Truffes Tapenade',
    'U': '',
    'V': 'Villageoise Vacherin Vodka Veau',
    'W': 'Whisky',
    'X': '',
    'Y': '',
    'Z': ''
  },
  randWord: function (letter) {
    const words = beauf.dict[letter].split(' ');
    if (words[0] === '')
      return letter;
    return words[Math.floor(Math.random() * words.length)];
  },
  process: function (arg) {
    const letters = arg.toUpperCase().split('');
    const output = [];
    letters.forEach(function(letter){
      let i = 0;
      let word;
      do{
        word = beauf.randWord(letter);
      }while(i++ < 10 && word.length > 1 && output.includes(word))
      output.push(word);
    });
    return output.join(' ');
  }
};

try {
  //nodejs
  module.exports = beauf;

  //command line
  if (process.argv[2])
    console.log(beauf.process(process.argv[2]));
}catch(ignored){}
