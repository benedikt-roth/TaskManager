function isDateExpired(date): boolean {
  if (!date) {
    return false;
  }

  return new Date().getTime() > new Date(date).getTime();
}

export {
  isDateExpired
}
