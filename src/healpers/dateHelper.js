export function TodayDate() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayName = daysOfWeek[dayOfWeek];
  
  return dayName
  }