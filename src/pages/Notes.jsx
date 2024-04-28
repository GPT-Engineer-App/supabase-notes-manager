import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const fetchNotes = async () => {
    const response = await fetch('https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/notes', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setNotes(data);
  };

  const addNote = async () => {
    await fetch('https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/notes', {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: input })
    });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`https://mnwefvnykbgyhbdzpleh.supabase.co/rest/v1/notes?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg',
        'Content-Type': 'application/json'
      }
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <VStack spacing={4}>
      <Input placeholder="Add a new note" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={addNote}>Add Note</Button>
      {notes.map(note => (
        <Box key={note.id} p={5} shadow="md" borderWidth="1px">
          <Text>{note.content}</Text>
          <Button onClick={() => deleteNote(note.id)}><FaTrash /></Button>
        </Box>
      ))}
    </VStack>
  );
};

export default Notes;