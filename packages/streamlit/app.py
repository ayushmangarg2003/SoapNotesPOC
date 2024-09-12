import os
import time
import streamlit as st 
from constants import default_prompt,prompt_to_label_speech 
from whisper import whisper_stt
from dotenv import load_dotenv #type: ignore
load_dotenv()
from langchain_openai import ChatOpenAI # type: ignore

def get_response(prompt, transcript):
    llm = ChatOpenAI(model="gpt-4o", temperature=0)    
    openai_prompt = prompt + transcript
    response = llm.invoke(openai_prompt)
    return response.content


# App
st.set_page_config("SOAP Generator",layout='wide')
st.header("SOAP Generator")

col1, col2 = st.columns(2)

with col1:
    # Text that user enters
    input_by_user = st.text_area("Give me the unorganised text",  height=150)
    
    # Audio that is recorded
    # transcript_by_whisper =  whisper_stt(openai_api_key=OPENAI_API_KEY, language = 'en')  
    transcript_by_whisper =  whisper_stt(openai_api_key=os.getenv('OPENAI_API_KEY'), language = 'en')  

    # Variable to audio transcript
    text=""

    # Organize and label the transcript
    if transcript_by_whisper:
        # text = get_response(prompt_to_label_speech, transcript_by_whisper)    
        st.write(text)
        st.write(transcript_by_whisper)
    
    # Adding Transcript to user text
    if len(text)>0:
        input_by_user+= text    
        
    # Edit Prompt
    with st.expander("Edit Prompt"):
        prompt_by_user = st.text_area("Prompt",  height=150, value=default_prompt)

    # Submit Button
    submit = st.button("Organize")

with col2:
    if submit:
        response = get_response(prompt_by_user, input_by_user)
        response = f''' {response}'''
        result = st.markdown(response)


#  Sidebar

past_chats = {}
new_chat_id = f'{time.time()}'

with st.sidebar:
    st.write('# Past Chats')
    if st.session_state.get('chat_id') is None:
        st.session_state.chat_id = st.selectbox(
            label='Pick a past chat',
            options=[new_chat_id] + list(past_chats.keys()),
            format_func=lambda x: past_chats.get(x, 'New Chat'),
            placeholder='_',
        )
    else:
        st.session_state.chat_id = st.selectbox(
            label='Pick a past chat',
            options=[new_chat_id, st.session_state.chat_id] + list(past_chats.keys()),
            index=1,
            format_func=lambda x: past_chats.get(x, 'New Chat' if x != st.session_state.chat_id else st.session_state.chat_title),
            placeholder='_',
        )
    st.session_state.chat_title = f'ChatSession-{st.session_state.chat_id}'
