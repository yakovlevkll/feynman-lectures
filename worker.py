from glob import glob
from os import path
import subprocess
from re import sub

# Source and dist folders
src = './docs/src/'
dist = './docs/ru/vol-1/'

# List with replacements
repls = [
    [chr(173), ''],
    ['---', '--'],
    [r'\[\]\{.+\}\*{2}.+\.\s([\w\s]+)\*{2}', r'## \1'],
    # Images with description
    [r'!\[\]\(media.+\)\{.+\}\n\n\*Фиг\.\s([\d\.]{3,5}.+)\*',
     r'<svgz src="vol-1/01/" alt="\1" />'],
    # Tables with description
    [r'!\[\]\(media.+\)\{.+\}',
     r'<svgz src="vol-1/01/" alt="img" />']
]


def beautify(text):
    temp = text
    for r in repls:
        test, res = r
        temp = sub(test, res, temp)
    return temp


def main():
    # Find files
    files = glob('{}*.docx'.format(src))

    for file in files:
        # Convert to markdown
        md_file = '{}{}.md'.format(dist, path.basename(file).split('.')[0])
        subprocess.call(['pandoc', file, '-o', md_file, '--wrap=none'])

        # Read and beautify
        with open(md_file, 'r', encoding='utf-8') as f:
            text = beautify(f.read())

        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(text)


if __name__ == '__main__':
    main()
