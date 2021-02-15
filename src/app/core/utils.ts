function isDateExpired(date): boolean {
  if (!date) {
    return false;
  }

  const endDate = new Date();
  endDate.setHours(23,59,59);

  return new Date().getTime() > new Date(date).getTime();
}

export {
  isDateExpired
}
