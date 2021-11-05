module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', {
            runtime:'automatic', //Faz com que não seja necessário a importação do react dentro de cada componente, (básicamente diz que todo o componente automaticamente já terá a importação do react)
        }],
    ]
};