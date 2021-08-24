const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx') ,//Arquivo inicial da aplicação
    output:{ //Configuração do arquivo de saída
        path: path.resolve(__dirname, 'dist'), //caminho
        filename: 'bundle.js' //nome
    },
    resolve:{
        extensions: ['.js', '.jsx'],  //tipos de arquivos que webpack poderá ler
    },
    module: {
        rules: [
            { // regras para arquivos js
                test: /\.jsx$/, //retorna um booleano dizendo se o arquivo é js ou não
                exclude: /node_modules/, //não aplica as regras para arquivos que vierem de node_modules, visto que esses já devem vir preparados para serem entendidos pelo browser (a responsabilidade de fazer essa compatibibilidade, deve ser da biblioteca e não do projeto em si)
                use:'babel-loader' //Realiza a integração entre o babel e webpack, portanto para todo arquivo js, o webpack utilizará o babel para converte-lo para um formato compatível ao browser

            }
        ],
    }
};

//PARA EXECUTAR --> yarn webpack