# elm-3d-playground-exploration

A modification of [evancz/elm-playground](https://package.elm-lang.org/packages/evancz/elm-playground/latest/) where elm/svg is replaced by [ianmackenzie/elm-3d-scene](https://package.elm-lang.org/packages/ianmackenzie/elm-3d-scene/latest/).

# Demos
[link to all demos](https://github.com/erkal/elm-3d-playground-exploration/blob/main/DEMOS.md)

# For Development 
First [install yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) if you don't have it already.

Clone the repository
```bash
git clone https://github.com/erkal/elm-3d-playground-exploration.git
```
and navigate into it:
```bash
cd elm-3d-playground-exploration
```

To install all dependencies, type
```bash
yarn install
```

Then, if you want to work on a game, type
```bash
yarn dev
```
enter the number you asked for and open the shown url in your browser.

To create a new game, just duplicate one of the directories in `games` directory and you are ready: `yarn dev` will show your new game in  the list.