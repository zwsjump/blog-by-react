import "./Blog.css";
import styled from "styled-components";
import SideBar from "./sidebar/SideBar";

let Container = styled.div`
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
`;

let ContentRow = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .leftcolumn {
    float: left;
    width: 75%;
  }
  @media screen and (max-width: 800px) {
  .leftcolumn {   
    width: 100%;
    padding: 0;
  }
}
`;

/* Header/Blog Title */
let Header = styled.div`
  padding: 0.8em;
  font-size: 3rem;
  text-align: center;
  background: white;
`;

const Blog = function() {
  return (
    <div>
      <SideBar />
      <Container>
        <Header>
          <h2>Blog Name</h2>
        </Header>

        <ContentRow>
          <div className="leftcolumn">
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg" style={{ height: 200 }}>Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg" style={{ height: 200 }}>Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2>About Me</h2>
              <div className="fakeimg" >Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
            <div className="card">
              <h3>Popular Post</h3>
              <div className="fakeimg">Image</div><br />
              <div className="fakeimg">Image</div><br />
              <div className="fakeimg">Image</div>
            </div>
            <div className="card">
              <h3>Follow Me</h3>
              <p>Some text..</p>
            </div>
          </div>
        </ContentRow>

        <div className="footer">
          <h2>Footer</h2>
        </div>
      </Container>
    </div>
  );
}

export default Blog;