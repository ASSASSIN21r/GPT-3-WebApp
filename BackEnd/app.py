from flask import Flask, request
import os
import openai
from flask_cors import CORS, cross_origin
# app = Flask(__name__)


app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
openai.api_key = "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"


@app.route("/test_prompt", methods=["POST"])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def test_prompt():
    prompt = request.get_json().get("prompt")
    return complete_prompt(prompt)


def complete_prompt(prompt):
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=prompt,
        temperature=0.7,
        max_tokens=64,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    # Get and return just the text response

    print(response['choices'])
    return response["choices"][0]["text"]
