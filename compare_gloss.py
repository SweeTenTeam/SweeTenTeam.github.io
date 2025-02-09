import csv
import re
import sys
import argparse


def get_glossary_terms(csv_path='gloss.csv'):
    """Extract terms from the glossary CSV file."""
    terms = []
    try:
        with open(csv_path, 'r', encoding='utf-8') as file:
            csv_reader = csv.reader(file, delimiter=',')
            next(csv_reader)
            for row in csv_reader:
                if row:
                    term = row[0].strip('"').strip().lower()
                    terms.append(term)
    except FileNotFoundError:
        print(f"Error: Could not find {csv_path}")
        return []
    except Exception as e:
        print(f"Error reading CSV file: {e}")
        return []

    return terms


def compare_glossary_terms(csv_pathMDX, csv_path2='gloss.csv'):
    valid_terms = set(get_glossary_terms(csv_pathMDX))
    new_terms = set(get_glossary_terms(csv_path2))

    missing_terms = new_terms - valid_terms
    print(f"\nMissing terms: {missing_terms}")
    return


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Compare two glossary CSV files')
    parser.add_argument('csv1', help='Path to first CSV file (MDX glossary)')
    parser.add_argument('csv2', help='Path to second CSV file (new glossary)')

    args = parser.parse_args()

    compare_glossary_terms(args.csv1, args.csv2)

    # usage--> python compare_gloss.py MDX_glossary.csv new_glossary.csv
