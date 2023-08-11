# Elm 3D Playground Exploration

You can preview examples of what this playground can do
by [clicking here](https://erkal.github.io/elm-3d-playground-exploration/WebPage/index.html).

This is an experimental playground created for game development
using [Elm](https://elm-lang.org/). This project is a modification
of [evancz/elm-playground](https://package.elm-lang.org/packages/evancz/elm-playground/latest/). Here, `elm/svg` is
replaced by [ianmackenzie/elm-3d-scene](https://package.elm-lang.org/packages/ianmackenzie/elm-3d-scene/latest/).

## Development Setup

You have to have Node.js installed on your machine.
If you don't have it, I strongly recommend you to install it using a version manager like [nvm](https://github.com/nvm-sh/nvm).

To begin with the development setup, follow the steps listed below:

1. **Clone the repository:**

```bash
git clone https://github.com/erkal/elm-3d-playground-exploration.git
```

2. **Navigate to the project directory:**

```bash
cd elm-3d-playground-exploration
```

3. **Install all dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

This starts serving all examples. Open `http://localhost:8000/` in your browser and navigate to the served page.
Then, navigate to the `index.html` of your example.

This setup uses the fast and reliable [lydell/elm-watch](https://github.com/lydell/elm-watch), which handles hot
reloading seamlessly.
