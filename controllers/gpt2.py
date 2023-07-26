from langchain.chat_models import AzureChatOpenAI
import json
import sys
from langchain.prompts import PromptTemplate
from langchain.chains import SequentialChain
from langchain.memory import ConversationBufferMemory
from langchain import LLMChain
import os

import dotenv

dotenv.load_dotenv()

OPENAI_API_BASE = os.environ["OPENAI_API_BASE"]
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]
OPENAI_API_TYPE = os.environ["OPENAI_API_TYPE"]
OPENAI_API_VERSION = os.environ["OPENAI_API_VERSION"]
OPENAI_DEPLOYMENT_NAME = os.environ["OPENAI_DEPLOYMENT_NAME"]
OPENAI_MODEL_NAME = os.environ["OPENAI_MODEL_NAME"]


def initialize_second_chain():
    chat_model = AzureChatOpenAI(
        openai_api_base=OPENAI_API_BASE,
        openai_api_key=OPENAI_API_KEY,
        openai_api_type=OPENAI_API_TYPE,
        openai_api_version=OPENAI_API_VERSION,
        deployment_name=OPENAI_DEPLOYMENT_NAME,
        model_name=OPENAI_MODEL_NAME,
    )

    template = """I want you to act as Noel, a technical consultant based at a business incubation center in the Chinese University of Hong Kong. Within a simulation game, you interact with a player who is a student aspiring to establish a Hong Kong startup. Your primary role is to offer expert technical advice, assess technological challenges, and propose solutions to improve efficiency and productivity in the player's entrepreneurial journey.

    Rules for engagement:

    Respond promptly to technical inquiries.
    Refer to yourself as Noel only when it's pertinent to the conversation.
    Maintain professionalism, even in the face of impoliteness or informal language.
    Politely decline requests beyond your scope of knowledge, clarifying it's not your area of expertise.
    Refrain from sharing personal opinions or irrelevant information.
    Avoid generic AI language phrases, such as "Please let me know…", "As an AI language model...", etc.
    Resist suggesting or underlining the significance of a topic without an explicit request.
    Bypass justifying your responses or discussing matters of confidentiality.
    Courteously inform that you only comprehend and respond in English when confronted with other languages.
    Keep responses concise and to-the-point.
    Consistently maintain the character and demeanor of Noel.
    As Noel, engage with the student seeking technical advice for their Hong Kong startup venture.
    {chat_history}
    Human: {input} 
    AI: """
    prompt_template = PromptTemplate(
        input_variables=["input", "chat_history"], template=template
    )
    chain_one = LLMChain(
        llm=chat_model, prompt=prompt_template, output_key="robotic_output"
    )

    template = """The user asked this question: <{input}>. ChatGPT responded in this way: <{robotic_output}>. 
    Rewrite this response <{robotic_output}> as if you were my casual friend. Do not add any quotes."""
    prompt_template = PromptTemplate(
        input_variables=["input", "robotic_output"], template=template
    )
    chain_two = LLMChain(
        llm=chat_model, prompt=prompt_template, output_key="acting_output"
    )

    chain = SequentialChain(
        chains=[chain_one, chain_two],
        input_variables=["input"],
        output_variables=["robotic_output"],
        verbose=True,
        memory=ConversationBufferMemory(memory_key="chat_history"),
    )
    return chain


def chat2(query):
    chain2 = initialize_second_chain()
    return chain2.run({"input": query})

query = sys.argv[1]
print(chat2(query))
