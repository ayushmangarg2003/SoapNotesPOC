import streamlit as st 
import google.generativeai as genai
import os

from dotenv import load_dotenv
load_dotenv()

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

input_prompt=""" You are a professional text organiser, you will get transcript text and you will organise it with proper headings, covering important points in not more than 250 words. The Transcript Text will be appended here :  """

def get_response(input_prompt, transcript):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(input_prompt + transcript)
    return response.text

# App
st.set_page_config("Text Organiser")
st.header("Text Organiser")

input_text = st.text_input("Give me the unorganised text")

submit = st.button("Organise")

if submit:
    response = get_response(input_prompt=input_prompt, transcript=input_text)
    st.subheader("Result is:")
    st.write(response)

