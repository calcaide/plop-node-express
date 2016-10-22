module.exports = function(plop){
    plop.setGenerator('Node express generator', {
        description: 'Plop generator for Node + Express applications',
        prompts: [
            {
                type: 'input',
                name: 'project-name',
                message: 'Project name?',
                validate: function (value) {
                    if ((/.+/).test(value)) { return true; }
                    return 'Project name is required';
                }
            },
            {
                type: 'input',
                name: 'project-description',
                message: 'Project description?'
            },
            {
                type: 'input',
                name: 'project-author',
                message: 'Project author?'
            }
        ],
        actions: function(data){
            var actions = [];

            // Copy package.json changing project name, description and author.
            actions.push({
                type: 'add',
                path: 'package.json',
                templateFile: 'node_modules/plop-node-express/templates/package.json'
            });

            // Copy .gitignore file
            actions.push({
                type: 'add',
                path: '.gitignore',
                templateFile: 'node_modules/plop-node-express/templates/.gitignore'
            });

            // Copy .editorconfig file
            actions.push({
                type: 'add',
                path: '.editorconfig',
                templateFile: 'node_modules/plop-node-express/templates/.editorconfig'
            });

            // Copy .babelrc file
            actions.push({
                type: 'add',
                path: '.babelrc',
                templateFile: 'node_modules/plop-node-express/templates/.babelrc'
            });

            // Copy .eslintrc file
            actions.push({
                type: 'add',
                path: '.eslintrc.js',
                templateFile: 'node_modules/plop-node-express/templates/.eslintrc.js'
            });

            // Copy src/main.js files
            actions.push({
                type: 'add',
                path: 'src/main.js',
                templateFile: 'node_modules/plop-node-express/templates/src/main.js'
            });

            // Copy test/main.test.js file
            actions.push({
                type: 'add',
                path: 'test/main.test.js',
                templateFile: 'node_modules/plop-node-express/templates/test/main.test.js'
            });

            return actions;
        }
    })
};