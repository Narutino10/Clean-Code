import  { Notification }  from  '../../domain/entities/Notification';

export interface NotificationRepository {
  saveNotification(notification: Notification): Promise<void>;
}