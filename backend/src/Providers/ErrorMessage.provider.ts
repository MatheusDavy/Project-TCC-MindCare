import { AppError } from "../Errors/App.erros";

export class ErrorProvider {
  async sendError(message: string, status: number) {
    throw new AppError(message, status);
  }

  async sendExpiredSessionError() {
    throw new AppError("Sessão expirada, faça login novamente!", 401);
  }

  async sendNoExpecificResponseChatbotError() {
    throw new AppError("no-specific-chatbot-error", 500);
  }

  async sendEmailAlreadyExistError() {
    throw new AppError("Email já cadastrado!", 400);
  }

  async sendIncorrectUserOrPasswordError() {
    throw new AppError("Email ou senhas estão incorretos", 400);
  }

  async sendEmailNotExistInSystem() {
    throw new AppError("Email não existe no sistema!", 400);
  }

  async sendResetPasswordError() {
    throw new AppError("reset-password-error", 503);
  }

  async sendCannotExectuActionError() {
    throw new AppError(
      "Erro ao executar essa ação, tente novamente mais tarde!",
      503
    );
  }

  async addFriendNotPossible(nickname: string) {
    throw new AppError(
      `Usuário foi encontrar o usuário "${nickname}", tente novamente mais tarde`,
      404
    );
  }

  async acceptFriendNotPossible(nickname: string) {
    throw new AppError(
      `Erro ao aceitar a solicitação de amizado do usuário "${nickname}", tente novamente mais tarde`,
      404
    );
  }

  async cancelFriendRequestNotPossible(nickname: string) {
    throw new AppError(
      `Não foi possível cancelar a solicitação para o usuário "${nickname}", tente novamente mais tarde`,
      404
    );
  }

  async cancelFriendNotPossible() {
    throw new AppError(
      `Não foi possível cancelar recusar o pedido de amizade, tente novamente mais tarde!`,
      404
    );
  }
}
