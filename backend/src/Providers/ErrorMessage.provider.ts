import { AppError } from "../Errors/App.erros";

export class ErrorProvider {
  async sendExpiredSessionError() {
    throw new AppError("expired-session", 401);
  }

  async sendNoExpecificResponseChatbotError() {
    throw new AppError("no-specific-chatbot-error", 500);
  }

  async sendEmailAlreadyExistError() {
    throw new AppError("email-already-exists", 400);
  }

  async sendIncorrectUserOrPasswordError() {
    throw new AppError("incorrect-user-or-password", 400);
  }

  async sendEmailNotExistInSystem() {
    throw new AppError("email-not-exist-in-system", 400);
  }

  async sendResetPasswordError(){
    throw new AppError("reset-password-error", 503)
  }

  async sendCannotExectuActionError(){
    throw new AppError("cannot-execute-action", 503)
  }
}
