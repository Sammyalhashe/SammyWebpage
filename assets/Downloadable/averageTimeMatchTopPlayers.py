from __future__ import division
import csv
import json
import matplotlib.pyplot as plt


players = {'Roger Federer': {}, 'Rafael Nadal': {},
           'Novak Djokovic': {}, 'Andy Murray': {}, 'Stanislas Wawrinka': {}}


yearStart, yearEnd = 1998, 2017
xrange = [year for year in range(yearStart, yearEnd + 1)]
dir_matches = '../'
prefix = 'atp_matches_'
matches = [row for row in csv.reader(
    open(dir_matches+prefix+str(yearStart)+'.csv'))]
for year in range(yearStart+1, yearEnd + 1):
    matches += [row for row in csv.reader(
        open(dir_matches + prefix+str(year)+'.csv'))]

for player in players:
    matches_filtered = filter(
        lambda x: player in x[10] or player in x[20], matches)

    year_summary = {}

    for match in matches_filtered:
        year = int(match[5][0:4])
        if year not in year_summary:
            year_summary[year] = {
                'year': year,
                'sets': 0,
                'minutes': 0,
                'matches': 0
            }
        year_summary[year]['sets'] += 0 if match[30].strip() == '' else len(
            match[27].replace('RET', '').strip().split(' '))
        year_summary[year]['minutes'] += 0 if match[30].strip() == '' else int(match[30].strip())
        year_summary[year]['matches'] += 0 if match[30].strip() == '' else 1
    players[player] = year_summary


plt.figure()
for player in players:
    plt.subplot(211)
    years = sorted([year for year in players[player]], key=lambda x: int(x))
    averageMin = [(players[player][year]['minutes'] /
                   players[player][year]['matches']) for year in years]
    plt.plot(years, averageMin, lw=2, label=player)
    plt.scatter(years, averageMin, s=35)
    plt.subplot(212)
    averageSets = [(players[player][year]['sets'] /
                    players[player][year]['matches']) for year in years]
    plt.plot(years, averageSets, lw=2)
    plt.scatter(years, averageSets, s=35)

plt.subplot(211)
plt.legend(loc='upper left')
plt.title('Comparison of Big Four Matches')
plt.ylabel('Av. Length of Match [min]')
plt.subplot(212)
plt.ylabel('Av. # of sets in Match')
plt.xlabel('year')
plt.show()
