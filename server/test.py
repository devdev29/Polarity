import snscrape.modules.twitter as sntwitter
import re
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
from nltk.stem.wordnet import WordNetLemmatizer
import joblib
import time


def remove_emoji(text):
    emoji_pattern = re.compile("["
                               u"\U0001F600-\U0001F64F"  # emoticons
                               u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                               u"\U0001F680-\U0001F6FF"  # transport & map symbols
                               u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                               "]+", flags=re.UNICODE)
    text = emoji_pattern.sub(r'', text)
    return text


def cleaner(tweets):
    cleaned_tweets = []

    for tweet in tweets:
        tweet = tweet.lower()

        tweet = re.sub('@\w*', '', tweet)
        tweet = re.sub('http\S+', '', tweet)
        tweet = re.sub('[0-9]', '', tweet)
        tweet = re.sub(r"[',!%?/;:{}()\-\*\+\[\]\.\^#]", '', tweet)
        tweet = remove_emoji(tweet)

        tokens = word_tokenize(tweet)
        lemmatizer = WordNetLemmatizer()
        tweet = ''
        for token, tag in pos_tag(tokens):
            if tag.startswith("NN"):
                pos = 'n'
            elif tag.startswith('VB'):
                pos = 'v'
            else:
                pos = 'a'

            token = lemmatizer.lemmatize(token, pos)
            tweet += token+' '
        if tweet is not None:
            cleaned_tweets.append(tweet)
    return cleaned_tweets


t = time.time()
tweets = []
max = 200
hashtag = 'rip'
for i, tweet in enumerate(sntwitter.TwitterSearchScraper(f'#{hashtag} lang:en').get_items()):
    if i > max:
        break
    tweets.append(tweet.content)

cleaned = cleaner(tweets)
model = joblib.load('./final_classifier.pickle')
predicts = model.predict(cleaned)
count = 0
for value in predicts:
    if value == 0:
        count += 1
print(count/len(tweets))
print(time.time()-t)
