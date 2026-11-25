#!/usr/bin/env python3
"""Refresh _data/newsletter.json from the public Buttondown RSS feed.

The newsletter page and the homepage list past issues from this file, so they render without
JavaScript and without an iframe. Run from the repo root after sending an issue:

    python3 _tools/sync-newsletter.py

(The newsletter page also checks the live feed in the browser, so a missed sync only means the
static list is briefly behind.)
"""
import html, json, re, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

FEED = 'https://newsletter.tomcritchlow.com/rss'
req = urllib.request.Request(FEED, headers={'User-Agent': 'newsletter-sync'})
root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
channel = root.find('channel')

def text(node, tag):
    found = node.find(tag)
    return (found.text or '').strip() if found is not None else ''

def summary(raw):
    plain = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', raw))).strip()
    return plain if len(plain) <= 220 else plain[:220].rsplit(' ', 1)[0] + '…'

issues = []
for item in channel.findall('item'):
    issues.append({
        'title': text(item, 'title'),
        'url': text(item, 'link'),
        'date': parsedate_to_datetime(text(item, 'pubDate')).strftime('%Y-%m-%d'),
        'summary': summary(text(item, 'description')),
    })

data = {'title': text(channel, 'title'), 'description': text(channel, 'description'), 'feed': FEED, 'issues': issues}
with open('_data/newsletter.json', 'w') as out:
    json.dump(data, out, indent=1, ensure_ascii=False)
    out.write('\n')
print(f"{len(issues)} issues; latest: {issues[0]['date']} {issues[0]['title']}" if issues else 'no issues found')
