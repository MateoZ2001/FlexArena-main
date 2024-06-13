import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = Constants.expoConfig.extra.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const isGymOrSupplementRelated = (input) => {
  const keywords = [
    'gym', 'workout', 'exercise', 'fitness', 'routine', 
    'training', 'muscle', 'weightlifting', 'cardio', 'yoga', 
    'supplement', 'protein', 'creatine', 'pre-workout', 'vitamins',
    'nutrition', 'diet', 'health', 'supplements','hi','hello','thank you','bye','yasmin'
  ];
  return keywords.some(keyword => input.toLowerCase().includes(keyword));
};

const Chatbot = () => {
  const [history, setHistory] = useState([{ role: 'model', text: 'Looking for supplements or advice? Ask me anything ☺️🫶' }]);
  const [input, setInput] = useState('');
  const [chatSession, setChatSession] = useState(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    if (!isGymOrSupplementRelated(input)) {
      const newHistory = [...history, { role: 'user', text: input }, { role: 'model', text: 'I can only answer questions about gym workouts and supplements. Please ask me something related to these topics.' }];
      setHistory(newHistory);
      setInput('');
      return;
    }

    const newHistory = [...history, { role: 'user', text: input }];
    setHistory(newHistory);
    setInput('');

    try {
      let session = chatSession;
      if (!session) {
        session = model.startChat({
          generationConfig,
          safetySettings,
          history: newHistory.slice(1).map((message) => ({
            role: message.role,
            parts: [{ text: message.text }],
          })),
        });
        setChatSession(session);
      }

      const result = await session.sendMessage(input);
      const botResponse = await result.response.text();

      setHistory((prevHistory) => [
        ...prevHistory,
        { role: 'model', text: botResponse },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.history}>
        {history.map((message, index) => (
          <Text key={index} style={styles[message.role]}>
            {message.text}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type your question..."
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={{ color: 'white' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  history: {
    flex: 1,
    marginBottom: 10,
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: 'blue', 
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 18
  },
  model: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 18
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Chatbot;
