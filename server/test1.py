import twint

tweets = []

tw = twint.Config()
tw.Search = 'sad'
tw.Limit = 100
tw.Store_object = True
tw.Store_object_tweets_list = tweets

twint.run.Search(tw)
print(tweets)
