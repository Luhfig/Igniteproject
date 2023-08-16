import { Post } from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

import styles from './App.module.css';

import './global.css';


export function App() 
{
  return (
   <div>
      <Header />
      
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
        <Post 
        author="Luiz Henrique" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis aspernatur laudantium quibusdam at itaque quasi ex molestiae ea culpa accusamus, modi delectus perspiciatis, nihil provident nisi asperiores deleniti nulla." />
        <Post 
        author="Shaiene Araújo"
        content="Um novo post muito legal."
        />
        </main>
      </div>
    </div>
  )
}

