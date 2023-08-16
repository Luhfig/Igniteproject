import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
          <Avatar src="https://github.com/luhfig.png" alt="" />
          < div className={styles.commentBox}>
            < div className={styles.commentContent}>
                <header>
                  <div className={styles.authorAndTime}>
                    <strong>Luiz Henrique</strong>
                    <time title="10 de Agosto às 12:02:00" dateTime="2023-08-10 12:02:00">Cerca de 1h atrás</time>
                  </div>

                  <button title="Deletar comentário">
                    <Trash size={24} />
                  </button>
                </header>

                <p>Muito bom Devon, Parabéns!!</p>

            </div>

             <footer>
                <button>
                  <ThumbsUp size={20} />  
                  Aplaudir <span>20</span>
                </button>
             </footer>
            </div>  
        </div>
    )
}