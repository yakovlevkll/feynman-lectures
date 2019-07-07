from glob import glob
from re import sub

# Source folder
src = './docs/ru'

# List with replacements
repls = [
    [',_', '_,'],
    [r'\._', '_.'],
    ['!_', '_!'],
    [r'\?_', '_?'],
    [';_', '_;'],
    [':_', '_:'],
    ['--_', '_--'],
    ['-_', '_-'],
    [r'\^([+\d-]{0,4})\^', r'<sup>\1</sup>']
]


def beautify(text):
    temp = text
    for r in repls:
        test, res = r
        temp = sub(test, res, temp)
    return temp


def main():
    # Find files
    files = glob('{}/**/*.md'.format(src))

    for file in files:

        # Read and beautify
        with open(file, 'r', encoding='utf-8') as f:
            text = beautify(f.read())

        with open(file, 'w', encoding='utf-8') as f:
            f.write(text)


if __name__ == '__main__':
    main()
