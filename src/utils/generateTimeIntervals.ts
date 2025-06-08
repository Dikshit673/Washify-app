// Convert a 12-hour format time string (e.g., "2:30 PM") to a Date object
function parseTime(timeStr: string): Date {
  const [time, meridian] = timeStr.trim().split(/(AM|PM)/i);
  const splittedTime = time.trim().split(':').map(Number);

  let hours = splittedTime[0];
  const minutes = splittedTime[1];

  if (meridian.toUpperCase() === 'PM' && hours !== 12) {
    hours += 12;
  }
  if (meridian.toUpperCase() === 'AM' && hours === 12) {
    hours = 0;
  }

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

// Format a Date object to a 12-hour time string with AM/PM
function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const meridian = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const minutesStr = minutes.toString().padStart(2, '0');
  return `${hours}:${minutesStr} ${meridian}`;
}

// Add minutes to a Date object and return a new Date
function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60000);
}

// Main function to generate intervals
export function generateTimeIntervals(
  startTime: string,
  endTime: string,
  interval: number
): string[] {
  const result: string[] = [];
  let current = parseTime(startTime);
  const end = parseTime(endTime);

  while (current <= end) {
    result.push(formatTime(current));
    current = addMinutes(current, interval);
  }

  return result;
}
