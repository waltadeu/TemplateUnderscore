// rc (Request Context / Colletion) 
_.templateSettings.variable = "rc";

var template = _.template(
    $( "script.template" ).html()
);
// Define a estrutura dados (dentro da variavel "rc").
var templateData = {
    listadeItens: "Nomes",
    Items: [
        {
            name: "Nome Um",
            temMedalhaOuro: true
        },
        {
            name: "Nome Dois",
            temMedalhaOuro: true
        },
        {
            name: "Nome Tres",
            temMedalhaOuro: false
        },
        {
            name: "Nome Quatro",
            temMedalhaOuro: false
        }
    ]
};
// Injeta o template no HTML depois do H1
$( "h1" ).after(
    template( templateData )
);