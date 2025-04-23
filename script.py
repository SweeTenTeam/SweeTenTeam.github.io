import csv
from collections import defaultdict

# Inserisci il percorso corretto del file CSV qui
csv_file_path = "gloss.csv"
output_html_path = "glossario_generato.html"

# Dizionario per raccogliere i termini per lettera iniziale
terms_by_letter = defaultdict(list)

# Legge il file CSV
with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        term = row["Term"].strip()
        definition = row["Definition"].strip()
        first_letter = term[0].upper()
        terms_by_letter[first_letter].append((term, definition))

# Genera l'HTML
html_output = ""
for letter in sorted(terms_by_letter):
    html_output += f'<div id="{letter}">\n\t<h3>{letter}</h3>\n'
    for term, definition in sorted(terms_by_letter[letter], key=lambda x: x[0].lower()):
        html_output += f'\t<div id="{term.lower().replace(" ", "-")}" class="termine">\n'
        html_output += f'\t\t<h4>{term}</h4>\n'
        html_output += f'\t\t<p>{definition}</p>\n'
        html_output += f'\t</div>\n'
    html_output += '</div>\n\n'

# Salva l'output in un file HTML
with open(output_html_path, "w", encoding="utf-8") as output_file:
    output_file.write(html_output)

print(f"File HTML generato: {output_html_path}")