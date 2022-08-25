import './App.css'
import styled from "styled-components"

const cardStyles = {
  container : styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    width: 400px;
    box-shadow: 0 0 3px 2px #cec7c759;
    padding: 20px;
    border-radius: 20px;
  `,
  profilePicture: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    color: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 10px;
    font-weight: bold
  `,
  bio: styled.div`
    margin-left: 24px;
    text-align: left
  `,
  userName: styled.div`
    font-weight: bold
  `
}

export default function App() {
  return (
    <main>
     <cardStyles.container>
        <cardStyles.profilePicture>D</cardStyles.profilePicture>
        <cardStyles.bio>
          <cardStyles.userName>Desmond Nyamador</cardStyles.userName>
          <p>I just learned an easy way to style React Components</p>
        </cardStyles.bio>
      </cardStyles.container>
    </main>
  )
}