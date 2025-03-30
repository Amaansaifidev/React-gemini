// src/lib/appwrite.js
import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67e95c8a0005dfa3d156'); // Replace with your project ID

export const account = new Account(client);