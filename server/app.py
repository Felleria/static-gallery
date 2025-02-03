from flask import Flask

app =Flask(__name__)


@app.route ('/')
def index ():
    return '<p>My name is Telly ogana hahahahahahha<p>'



if __name__ == '__main__':
    app.run(port=5555, debug=True)