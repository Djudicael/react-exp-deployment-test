# Compliation jsx en js pour reactJs a l'aide de babel
babel --plugins transform-react-jsx src/app.jsx --out-file=public/scripts/app.js --preset=react,env

# Compliation jsx en js pour reactJs a l'aide de babel avec watcher
babel --plugins transform-react-jsx src/app.jsx --out-file=public/scripts/app.js --preset=react,env --watch

# Utilisation de webpack
Ne pas oublier d'installer le webpack cli
ce projet est créer a l'aide de yarn , afo, de le lancer il faut utiliser le commandr
yarn run build


