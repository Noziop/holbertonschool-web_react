#!/bin/bash

# Fonction pour créer un fichier avec son contenu
create_file_with_content() {
    local file_path="$1"
    local content="$2"
    echo "$content" > "$file_path"
}

# Création des répertoires principaux
for i in {0..5}; do
    mkdir -p "task_${i}/js"
done

# Contenu du package.json
PACKAGE_JSON='{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}'

# Contenu du tsconfig.json
TSCONFIG_JSON='{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}'

# Contenu du webpack.config.js
WEBPACK_CONFIG='const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}'

# Contenu du .eslintrc.js
ESLINT_CONFIG='module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
  },
};'

# Création des fichiers de configuration pour chaque tâche
for i in {0..5}; do
    create_file_with_content "task_${i}/package.json" "$PACKAGE_JSON"
    create_file_with_content "task_${i}/tsconfig.json" "$TSCONFIG_JSON"
    create_file_with_content "task_${i}/webpack.config.js" "$WEBPACK_CONFIG"
    
    # .eslintrc.js uniquement pour task_0
    if [ $i -eq 0 ]; then
        create_file_with_content "task_${i}/.eslintrc.js" "$ESLINT_CONFIG"
    fi
    
    # Création du fichier main.ts vide
    touch "task_${i}/js/main.ts"
done

# Structure spéciale pour task_3
mkdir -p "task_3/js"
touch "task_3/js/crud.d.ts"
touch "task_3/js/interface.ts"

# Structure spéciale pour task_4
mkdir -p "task_4/js/subjects"
cd "task_4/js/subjects"
touch "Teacher.ts"
touch "Subject.ts"
touch "Cpp.ts"
touch "React.ts"
touch "Java.ts"


# Installation des dépendances pour chaque tâche
for i in {0..5}; do
    echo "Installation des dépendances pour task_${i}..."
    cd "task_${i}"
    npm install
    cd ..
done

echo "✨ Structure du projet TypeScript créée et dépendances installées avec succès ! ✨"