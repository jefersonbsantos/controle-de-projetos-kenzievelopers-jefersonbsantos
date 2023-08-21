class AppError extends Error {
  constructor(message: string, public status: number = 400) {
    super(message);
  }
}

export default AppError;
