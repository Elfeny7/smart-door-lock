import axios from "axios";

const formatDate = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return date.toLocaleString('en-US', options);
};

export const fetchLogs = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/logs`);
    const logs = response.data.data.map((log: any) => ({
      ...log,
      date_time: formatDate(log.created_at),
    }));
    return logs;
  } catch (error) {
    console.error('Error fetching log:', error);
  }
};