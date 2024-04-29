import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import hobbyImg1 from "../assets/img/hobby-img1.png";
import hobbyImg2 from "../assets/img/hobby-img2.png";
import hobbyImg3 from "../assets/img/hobby-img3.png";
import lifeImg1 from "../assets/img/life-img1.png";
import lifeImg2 from "../assets/img/life-img2.png";
import lifeImg3 from "../assets/img/life-img3.png";
import lifeImg4 from "../assets/img/life-img4.png";
import lifeImg5 from "../assets/img/life-img5.png";
import lifeImg6 from "../assets/img/life-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import PreviewImages from "./PreviewImage";
import {useState} from "react";

export const Projects = () => {

  // const [show, setShow] = useState(false)
  // const [index, setIndex] = useState(0)
  const projects = [
    {
      title: "个人介绍页面",
      description: "基于 React 技术开发",
      imgUrl: projImg1,
    },
    {
      title: "“放心吃”前端页面",
      description: "UI设计，基于Vue3 + Vite + Vuetify 开发",
      imgUrl: projImg2,
    },
    {
      title: "“放心吃”前端页面",
      description: "基于Vue3 + Vite + Vuetify 开发与前后端联调",
      imgUrl: projImg3,
    },
  ];

  // const hobbiesImg = [{src: hobbyImg1}, {src: hobbyImg2}, {src: hobbyImg3}];

  const hobbies = [
    {
      title: "音律炫动",
      description: "Sound Voltex Exceed Gear",
      imgUrl: hobbyImg1,
    },
    {
      title: "中二节奏",
      description: "Chunithm Luminous",
      imgUrl: hobbyImg2,
    },
    {
      title: "真女神转生 V Vengeance",
      description: "还没发售但是想要",
      imgUrl: hobbyImg3,
    },
  ];

  const lifes = [
    {
      title: "部门团建其一",
      description: "纸杯奶油蛋糕",
      imgUrl: lifeImg1,
    },
    {
      title: "部门团建其二",
      description: "寿星分食蛋糕",
      imgUrl: lifeImg2,
    },
    {
      title: "部门团建其三",
      description: "浩然激情献唱",
      imgUrl: lifeImg3,
    },
    {
      title: "某一天的午饭",
      description: "蜜汁叉烧饭",
      imgUrl: lifeImg4,
    },
    {
      title: "游玩音乐游戏",
      description: "截图成绩一则",
      imgUrl: lifeImg5,
    },
    {
      title: "清明团建",
      description: "六部成员搓麻",
      imgUrl: lifeImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>作品集以及一些小爱好</h2>
                <p>
                  以下的展示网格展示了我在学习中做过的一些有趣的项目，以及我在生活中的一点点小乐趣
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">作品集</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">爱好</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">日常</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>
                        在大学学习编程途中，开发的一些比较精美的项目
                      </p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>
                        学习之余最大的爱好就是玩游戏，喜欢的游戏类型是MUG/RPG
                      </p>
                      <Row>
                        {
                          hobbies.map((hobby, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    // onClick={() => setShow(true)}
                                    {...hobby}
                                />
                            )
                          })
                        }
                      </Row>
                      {/*<PreviewImages*/}
                      {/*    show={show}*/}
                      {/*    toggle={() => setShow(!show)}*/}
                      {/*    images={hobbiesImg}*/}
                      {/*    index={index}*/}
                      {/*    nextIndex={() => setIndex(index + 1)}*/}
                      {/*    prevIndex={() => setIndex(index - 1)}*/}
                      {/*/>*/}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        记录了我的日常生活
                      </p>
                      <Row>
                        {
                          lifes.map((life, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...life}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
