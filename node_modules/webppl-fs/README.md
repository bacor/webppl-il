# webppl-fs

This package wraps Node's `fs.readFileSync` and `fs.writeFileSync`.

## Installation

To globally install `webppl-fs`, run:

    mkdir -p ~/.webppl
    npm install --prefix ~/.webppl https://github.com/null-a/webppl-fs

This may print warnings (npm WARN ENOENT...) which can be ignored.

## Usage

Once installed, you can make `fs.read` and `fs.write` available to
`program.wppl` by running:

    webppl program.wppl --require webppl-fs

### `fs.read(filename)`

Returns the entire contents of the file specified by `filename` as a
string.

### `fs.write(filename, data)`

Writes the string `data` to the file specified by `filename`. The file
is overwritten if it already exists.

## License

MIT
