import { Notifyer } from "./Notifyer.js";

const App = {
  async start() {
    try {
      await Notifyer.init()
      Notifyer.notify({
          title: "Hora dos Post",
          body: "Crie algum conteúdo para ajudar a comunidade"

      })
    } catch (error) {
      console.log(error.message);
    }
  },
};

export { App };
