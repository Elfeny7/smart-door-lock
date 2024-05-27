import axios from "axios";
import { useState } from 'react';
import Router from 'next/router';

export const fetchDoors = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors`);
  return response.data.data.data;
};

export const fetchDoorById = async (id: any) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);
  return response.data.data;
};

export const deleteDoor = async (id: number) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/doors/${id}`);

  } catch (error) {
    console.error('Error deleting post:', error);
  }
}