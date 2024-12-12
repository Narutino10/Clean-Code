import api from './api';

export const getNotifications = async () => {
  const response = await api.get('/notifications');
  return response.data;
};

export const createNotification = async (data: { message: string }) => {
  const response = await api.post('/notifications', data);
  return response.data;
};
