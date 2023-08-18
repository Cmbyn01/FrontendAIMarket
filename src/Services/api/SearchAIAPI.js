import axios from 'axios';

const openaiApiKey = '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'; // Replace with your actual API key

export const searchAIAPI = async (query) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/search',
      {
        documents: ['AI tools', 'list of AI tools', 'AI tool directory'], // You can provide documents to search within if needed
        query: query,
        max_rerank: 10, // Adjust as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error('Error making API request:', error);
    return [];
  }
};
