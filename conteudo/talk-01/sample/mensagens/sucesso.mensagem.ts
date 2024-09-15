import chalk from 'chalk';

const mensagemSucesso = (mensagem: string): void => {
  console.error(chalk.green(`${mensagem}`));
};

export default mensagemSucesso
