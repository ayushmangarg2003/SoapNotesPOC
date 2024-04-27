import streamlit as st 
import google.generativeai as genai
import os
from streamlit_mic_recorder import mic_recorder
from streamlit_mic_recorder import speech_to_text

from dotenv import load_dotenv
load_dotenv()

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

input_prompt=""" ou are an AI assistant that helps summarize doctor and patient conversations in a SOP format like below:

Subjective. The subjective part details the observation of a health care provider to a patient. This could also be the observations that are verbally expressed by the patient. some examples could be answers to questions like:

- Describe your symptoms in detail. When did they start and how long have they been going on?
- What is the severity of your symptoms and what makes them better or worse?
- What is your medical and mental health history?
- What other health-related issues are you experiencing?
- What medications are you taking?

Objective. All measurable data such as vital signs, pulse rate, temperature, etc. are written here. It means that all the data that you can hear, see, smell, feel, and taste are objective observations. If there are any changes regarding of the patient’s data, it will also be written here. This part of your SOAP note should be made up of physical findings gathered from the session with your client. Some examples include:

- Vital signs
- Relevant medical records or information from from other specialists
- The client’s appearance, behavior, and mood in session.Note: This section should consist of factual information that you observe and not include anything the patient has told you.


This section combines all the information gathered from the subjective and objective sections. It’s where you describe what you think is going on with the patient.

 
Assessment:
You can include your impressions and your interpretation of all of the above information, and also draw from any clinical professional knowledge or DSM criteria/therapeutic models to arrive at a diagnosis (or list of possible diagnoses).

Plan. The plan refers to the treatment that the patient need or advised by the doctor. Such as additional lab test to verify the findings. The changes in the intervention are also written here.

The SOAP note must be concise and well-written. 

Medical terminologies and jargon are allowed in the SOAP note.  """

def get_response(input_prompt, transcript):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(input_prompt + transcript)
    return response.text

# App
st.set_page_config("Text Organiser",layout='wide')
st.header("Text Organiser")

col1, col2 = st.columns(2)

with col1:
    input_text = st.text_area("Give me the unorganised text",  height=150)

    text = speech_to_text(
        language='en',
        start_prompt="Start Speaking",
        stop_prompt="Stop",
        just_once=False,
        use_container_width=True,
        callback=None,
        args=(),
        kwargs={},
        key=None
    )
    if text:
        input_text += text
        st.write(text)
    submit = st.button("Organise")

with col2:
    if submit:
        response = get_response(input_prompt=input_prompt, transcript=input_text)
        st.subheader("Result is:")
        st.write(response)


