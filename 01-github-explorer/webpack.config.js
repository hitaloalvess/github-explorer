const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
    mode: isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Source-map -> em casos de erro possibilita a visualização do arquivo estático original, sem as alterações feitas pelo webpack
    entry: path.resolve(__dirname, 'src', 'index.jsx') ,//Arquivo inicial da aplicação
    output:{ //Configuração do arquivo de saída
        path: path.resolve(__dirname, 'dist'), //caminho
        filename: 'bundle.js' //nome
    },
    resolve:{
        extensions: ['.js', '.jsx'],  //tipos de arquivos que webpack poderá ler
    },
    devServer:{
        static:{
            directory:  path.resolve(__dirname, 'public'), //referencia a pasta onde se encontra o arquivo html estático
        } 
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'public/index.html'), //utilizará o arquivo index.html como template e irá gerar um novo arquivo index dentro de dist, com a referência a este arquivo de config do webpack já embutido
        })
    ],
    module: {
        rules: [
            { // regras para arquivos js
                test: /\.jsx$/, //retorna um booleano dizendo se o arquivo é js ou não
                exclude: /node_modules/, //não aplica as regras para arquivos que vierem de node_modules, visto que esses já devem vir preparados para serem entendidos pelo browser (a responsabilidade de fazer essa compatibibilidade, deve ser da biblioteca e não do projeto em si)
                use:'babel-loader' //Realiza a integração entre o babel e webpack, portanto para todo arquivo js, o webpack utilizará o babel para converte-lo para um formato compatível ao browser

            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:['style-loader', 'css-loader', 'sass-loader' ]
            }
        ],
    }
};

//PARA EXECUTAR --> yarn webpack