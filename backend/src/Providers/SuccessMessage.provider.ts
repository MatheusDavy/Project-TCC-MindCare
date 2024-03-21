export class SuccessProvider {
  async sendUserSuccessfullyUpdated() {
    return("Seus dados foram atualizados com sucesso!");
  }

  async addFriendRequest() {
    return("Sua solicitação de amizade foi enviada!");
  }

  async cancelFriendRequest(){
    return("Sua solicitação de amizade foi cancelada com sucesso!");
  }

  async cancelFriend(){
    return("Amizade cancelada!");
  }

}
