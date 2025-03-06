'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

type TMessages = {
  _id?: string;
  name: string;
  email: string;
  messages: string;
  timestamp?: string | number;
};

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          'https://portfolio-server-cyan-sigma.vercel.app/api/v1/messages'
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>

      {loading && (
        <div className="space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && messages.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Sender</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((msg: TMessages) => (
              <TableRow key={msg._id}>
                <TableCell>{msg.name}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.messages}</TableCell>
                <TableCell>
                  {msg.timestamp
                    ? new Date(msg.timestamp).toLocaleDateString()
                    : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {!loading && !error && messages.length === 0 && <p>No messages found.</p>}
    </div>
  );
};

export default Messages;
