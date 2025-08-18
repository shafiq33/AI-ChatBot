import nltk
nltk.download('punkt')

from nltk.stem.porter import PorterStemmer
stemmer = PorterStemmer()

def tokensize(sentence):
    return nltk.word_tokensize(sentence)

def stem(word):
    pass





def bag_of_words(tokenized_sentence, all_words):
    pass
    

