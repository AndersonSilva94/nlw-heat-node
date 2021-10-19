import axios from "axios";
// 1 - Receber o código (string)
// 2 - Recuperar o access_token no github
// 3 - Recuperar infos do user no github
// 4 - Verificar se o usuário existe no db
// ----- SIM = Gera um token
// ----- NÃO = Cria no db, gera um token
// 5 - Retorna o token com as infos do token

interface IAccessTokenResponse {
  access_token: string
}

interface IUserResponse {
  avatar_url: string,
  login: string,
  id: number,
  name: string
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json"
      }
    });

    const response = await axios.get<IUserResponse>("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`
      }
    });

    return response.data;
  }
}

export { AuthenticateUserService }