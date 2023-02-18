from pytube import YouTube
from flask import Flask, request, render_template, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/download', methods=['POST'])
def download():
    url = request.form['url']
    try:
        yt = YouTube(url)
        video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
        video.download()
        return send_file(f'{yt.title}.mp4', as_attachment=True)
    except:
        return 'An error occurred. Please try again later.'

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000)
