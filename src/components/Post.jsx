import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { Comment } from './comment';

export function Post() {
    return (
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src="https://github.com/luhfig.png" />
                <div className={styles.authorInfo}>
                    <strong>Luiz Henrique</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title="10 de Agosto às 12:02:00" dateTime="2023-08-10 12:02:00">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala Galera.</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat.</p>

            <p><a href="">github.com/luhfig</a></p>

            <p>
             <a href="">#novoprojeto</a>{' '} 
            <a href="">#nlw</a>{' '}
            <a href="">#rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
              placeholder="Deixe um comentário"
            />
            <footer>
             < button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
       </article>
    )
}