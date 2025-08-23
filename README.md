<h1 align="center" >AI-ChatBot</h1>

<p align="center">
This chatbot uses a machine learning model to understand user messages and generate intelligent responses based on pre-defined intents. It leverages natural language processing techniques like tokenization, stemming, and bag-of-words to interpret and predict appropriate replies. The model is integrated into a web interface using HTML, CSS, JavaScript, and Flask, enabling real-time interaction directly on a website.
</p>

---

<h2>Languages, Libraries, Tools, Frameworks, Concepts</h2>

- **Python**
- **JavaScript**
- **Flask**
- **HTML/CSS**
- **Anaconda** 
- **PyTorch**
- **NumPy**  
- **Natural Language Toolkit (nltk)**  
- **Tokenizer, Stemming, Bag of Words**
- **JSON**  
- **REST APIs**
- **Fetch API**  
- **Event Listeners (JS)**
- **Deep Learning**  


<h2>Demo</h2>
<img width="1906" height="908" alt="image" src="https://github.com/shafiq33/AI-ChatBot/blob/master/demo.png" />

<h2>How to run</h2>
  <h3>1. Clone the repository:</h3> 
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app

<h3>2. Install dependencies:</h3>
pip install torch flask nltk

3. Must Run #nltk.download('punkt_tab') atleast once before you train the model:
   Uncomment on nltk_utils.py. 

4. Run the model:
   python train.py
   
5. Run the Flask app:
   python app.py

6. Open your browser and go to:
   http://127.0.0.1:5000
