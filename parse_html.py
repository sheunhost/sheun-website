from html.parser import HTMLParser
import sys

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = []
        self.in_script = False
        self.in_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.in_script = tag == 'script'
            self.in_style = tag == 'style'

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.in_script = False
            self.in_style = False

    def handle_data(self, d):
        if not self.in_script and not self.in_style:
            self.text.append(d)

    def get_data(self):
        return ''.join(self.text)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

with open(sys.argv[1], 'r') as f:
    text = strip_tags(f.read())
    # remove excessive empty lines
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    print('\n'.join(lines))
